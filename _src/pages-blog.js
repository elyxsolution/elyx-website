'use strict';
/* Blog: article pages, category hubs, blog index, author pages and RSS feed.
   Articles are Markdown files in _src/content/blog/ (see _src/README.md). */
const fs = require('fs');
const path = require('path');
const { config, pricing, inr, esc, abs, inline, mdBlocks, frontMatter, fmtDate, isoDate, ROOT } = require('./lib');
const chrome = require('./chrome');
const S = require('./shell');
const categories = require('./data/categories');
const industries = require('./data/industries');
const work = require('./data/work');

const catBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
const indBySlug = Object.fromEntries(industries.map((c) => [c.slug, c]));
const workBySlug = Object.fromEntries(work.map((c) => [c.slug, c]));
const authorBySlug = Object.fromEntries((config.authors || []).filter((a) => a.blog !== false).map((a) => [a.slug, a]));

const warnings = [];
const warn = (m) => warnings.push(m);

/* Price tokens keep articles in sync with _src/data/pricing.json:
     {{price-table}}   a Markdown table of every project and monthly range
     {{price:landing}} one range, e.g. ₹9,999–₹24,999 (keys: landing, website, ecommerce, webapp, mobile, saas, seo, care)
     {{weeks:website}} timeline, e.g. 2–4 weeks
     {{start}}         the starting price, ₹9,999 */
function expandTokens(md) {
  const rows = (k) => pricing.projects[k] || pricing.monthly[k];
  return md
    .replace(/\{\{price-table\}\}/g, () => {
      const lines = ['| What | Typical range | Timeline |', '|---|---|---|'];
      Object.keys(pricing.projects).forEach((k) => { const p = pricing.projects[k]; lines.push('| ' + p.label + ' | ' + inr(p.low) + '–' + inr(p.high) + ' | ' + p.weeksLow + '–' + p.weeksHigh + ' weeks |'); });
      Object.keys(pricing.monthly).forEach((k) => { const p = pricing.monthly[k]; lines.push('| ' + p.label + ' | ' + inr(p.low) + '–' + inr(p.high) + ' per month | Monthly plan |'); });
      return lines.join('\n');
    })
    .replace(/\{\{price:(\w+)\}\}/g, (m, k) => { const p = rows(k); if (!p) throw new Error('unknown price token ' + k); return inr(p.low) + '–' + inr(p.high); })
    .replace(/\{\{weeks:(\w+)\}\}/g, (m, k) => { const p = pricing.projects[k]; if (!p) throw new Error('unknown weeks token ' + k); return p.weeksLow + '–' + p.weeksHigh + ' weeks'; })
    .replace(/\{\{start\}\}/g, () => inr(pricing.startingPrice));
}

/* ------------------------------------------------------------ load posts */
function loadPosts() {
  const dir = path.join(__dirname, 'content', 'blog');
  if (!fs.existsSync(dir)) return [];
  const posts = [];
  fs.readdirSync(dir).filter((f) => /\.md$/.test(f) && f[0] !== '_').forEach((file) => {
    const fm = frontMatter(fs.readFileSync(path.join(dir, file), 'utf8'));
    const data = fm.data;
    Object.keys(data).forEach((k) => { data[k] = expandTokens(String(data[k])); });
    const body = expandTokens(fm.body);
    if (/^(true|yes)$/i.test(data.draft || '')) return;
    const slug = data.slug || file.replace(/\.md$/, '');
    const miss = ['title', 'category', 'description', 'date', 'answer'].filter((k) => !data[k]);
    if (miss.length) { warn('Article "' + file + '" is missing: ' + miss.join(', ') + ' (skipped)'); return; }
    const cat = catBySlug[data.category];
    if (!cat) { warn('Article "' + file + '": unknown category "' + data.category + '" (skipped)'); return; }
    if (data.author && !authorBySlug[data.author]) warn('Article "' + file + '": unknown author "' + data.author + '", using default');
    if (data.title.length > 70) warn('Article "' + file + '": title is ' + data.title.length + ' chars; aim for under 60');

    let blocks = mdBlocks(body);
    // pull the FAQ section out of the body (## FAQ ... until next ##)
    let faqs = [];
    const fi = blocks.findIndex((b) => b.type === 'h' && b.level === 2 && /^faq|^frequently asked/i.test(b.text));
    if (fi !== -1) {
      let end = blocks.findIndex((b, i) => i > fi && b.type === 'h' && b.level === 2);
      if (end === -1) end = blocks.length;
      const sec = blocks.slice(fi + 1, end);
      let cur = null;
      sec.forEach((b) => {
        if (b.type === 'h' && b.level >= 3) { cur = { q: b.text, a: '' }; faqs.push(cur); }
        else if (cur) cur.a += (cur.a ? ' ' : '') + b.html.replace(/^<p>|<\/p>$/g, '');
      });
      blocks = blocks.slice(0, fi).concat(blocks.slice(end));
    }
    const words = body.split(/\s+/).length;
    const moneyUrl = data.money || (data.industry && indBySlug[data.industry] ? '/websites-for/' + data.industry + '/' : cat.money);
    posts.push({
      file, slug, title: data.title, description: data.description, answer: data.answer, audience: data.audience || '',
      category: cat.slug, categoryName: cat.name, cat, date: data.date, updated: data.updated || '',
      author: authorBySlug[data.author] ? data.author : config.defaultAuthor,
      moneyUrl, industry: data.industry || '', case: data.case || '', pinned: /^(true|yes)$/i.test(data.pinned || ''),
      blocks, faqs, readMin: Math.max(1, Math.round(words / 220)), url: '/blog/' + slug + '/', image: data.image || ''
    });
  });
  const seen = {};
  posts.forEach((p) => { if (seen[p.slug]) warn('Duplicate article slug: ' + p.slug); seen[p.slug] = 1; });
  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

function makeCtx(posts) {
  const best = (arr) => arr.slice().sort((a, b) => (b.pinned - a.pinned) || (b.date > a.date ? 1 : -1));
  return {
    posts,
    postsFor: (url) => best(posts.filter((p) => p.moneyUrl === url)),
    postsForIndustry: (slug, url) => best(posts.filter((p) => p.industry === slug || p.moneyUrl === url)),
    postsForCase: (slug) => best(posts.filter((p) => p.case === slug))
  };
}

/* ------------------------------------------------------------ service card */
function waFor(text) {
  if (!chrome.waUrl) return '';
  return chrome.waUrl.split('?')[0] + '?text=' + encodeURIComponent((config.whatsappMessage || '') + (text ? ' (' + text + ')' : ''));
}

function serviceCard(post, pos) {
  const cat = post.cat;
  let card = Object.assign({}, cat.card);
  if (post.industry && indBySlug[post.industry]) {
    const it = indBySlug[post.industry];
    const c = workBySlug[it.relatedCase];
    card = {
      headline: 'Need a website for your ' + it.short.toLowerCase() + '?',
      proof: ['Closest build: ' + c.shortName + (c.timelineTotal ? ', ' + c.timelineTotal.replace(' from kickoff to launch', '') : ''), 'Landing pages in 1–2 weeks', 'From ₹9,999, quoted up front'],
      soft: { label: 'See sites for ' + it.name.toLowerCase(), href: '/websites-for/' + it.slug + '/' }, direct: 'book'
    };
  } else if (post.moneyUrl !== cat.money) {
    card.soft = { label: 'See how we do it', href: post.moneyUrl };
  }
  const attrs = ' data-article="' + esc(post.slug) + '" data-card-pos="' + pos + '"';
  const wa = waFor('from the article "' + post.title + '"');
  const direct = wa
    ? '<a class="btn btn--blue" href="' + wa + '" target="_blank" rel="noopener" data-track="whatsapp_click"' + attrs + '>WhatsApp us ' + chrome.ARROW + '</a>'
    : '<a class="btn btn--blue" href="/contact.html?src=' + esc(post.slug) + '#book" data-track="card_click"' + attrs + ' data-btn="direct">Book a 15-min call ' + chrome.ARROW + '</a>';
  return `<aside class="svc-card" data-card-pos="${pos}" aria-label="From Elyx">
  <span class="svc-card__k">From Elyx</span>
  <h3>${esc(card.headline)}</h3>
  <ul>${card.proof.map((t) => '<li>' + S.CHECK + esc(t) + '</li>').join('')}</ul>
  <div class="svc-card__btns">
    <a class="btn btn--ghost" href="${card.soft.href}" data-track="card_click"${attrs} data-btn="soft">${esc(card.soft.label)}</a>
    ${direct}
  </div>
</aside>`;
}

/* ------------------------------------------------------------ author box */
const authorOf = (post) => authorBySlug[post.author] || config.authors[0];
function authorBox(a) {
  const bio = a.bio || a.name + ' is a co-founder of Elyx Solutions, a three-person digital studio in Bengaluru that designs, builds and grows websites, apps and SaaS products.';
  return `<div class="authorbox">
  ${a.photo ? '<img class="authorbox__ph" src="' + esc(a.photo) + '" alt="' + esc(a.name) + '" width="72" height="72" loading="lazy" />' : '<span class="authorbox__ph authorbox__ph--init">' + esc(a.name.slice(0, 1)) + '</span>'}
  <div>
    <span class="authorbox__k">Written by</span>
    <a class="authorbox__n" href="/blog/author/${a.slug}/">${esc(a.name)}</a>
    <span class="authorbox__r">${esc(a.role)}</span>
    <p>${esc(bio)}</p>
    ${a.linkedin ? '<a class="authorbox__li" href="' + esc(a.linkedin) + '" target="_blank" rel="noopener me">LinkedIn ↗</a>' : ''}
  </div>
</div>`;
}

/* ------------------------------------------------------------ article page */
function articlePage(post, ctx) {
  const a = authorOf(post);
  const cat = post.cat;
  const crumbs = [['Home', '/'], ['Blog', '/blog/'], [cat.name, '/blog/category/' + cat.slug + '/'], [post.title, post.url]];
  const blocks = post.blocks.slice();
  const n = blocks.length;
  // card #1: before the H2 nearest one third of the way through (at least after 2 blocks)
  let at = Math.max(2, Math.round(n / 3));
  const h2s = blocks.map((b, i) => (b.type === 'h' && b.level === 2 && i >= 2 ? i : -1)).filter((i) => i > -1);
  if (h2s.length) at = h2s.reduce((best, i) => (Math.abs(i - n / 3) < Math.abs(best - n / 3) ? i : best), h2s[0]);
  at = Math.min(at, n);
  const bodyHtml = blocks.slice(0, at).map((b) => b.html).join('\n') + '\n' + serviceCard(post, 1) + '\n' + blocks.slice(at).map((b) => b.html).join('\n');

  const sibs = ctx.posts.filter((p) => p.slug !== post.slug);
  const sameCat = sibs.filter((p) => p.category === post.category);
  const related = sameCat.concat(sibs.filter((p) => p.category !== post.category)).slice(0, 3);
  const moneyLabel = (post.industry && indBySlug[post.industry]) ? 'Websites for ' + indBySlug[post.industry].name.toLowerCase() : cat.moneyLabel;

  const faqHtml = post.faqs.length ? S.faqBlock(post.faqs, 'Questions <span class="serif-i">readers ask.</span>') : '';
  const dateLine = '<time datetime="' + isoDate(post.date) + '">' + fmtDate(post.date) + '</time>' + (post.updated ? ' · Updated <time datetime="' + isoDate(post.updated) + '">' + fmtDate(post.updated) + '</time>' : '');

  const main = `<header class="page-hero page-hero--article">
  <div class="deco" data-parallax="0.1" aria-hidden="true"><span class="orb orb-a"></span><span class="orb orb-c"></span></div>
  <div class="page-hero__in page-hero__in--narrow">
    ${S.crumbsHtml(crumbs)}
    <a class="eyebrow" href="/blog/category/${cat.slug}/">${esc(cat.name)}</a>
    <h1>${esc(post.title)}</h1>
    <div class="article-meta"><a href="/blog/author/${a.slug}/">${esc(a.name)}</a><span>·</span>${dateLine}<span>·</span><span>${post.readMin} min read</span></div>
  </div>
</header>
<article class="article" data-article="${esc(post.slug)}">
  <div class="answer"><span class="answer__k">The short answer</span><p>${inline(post.answer)}</p></div>
  ${post.audience ? '<p class="audience"><b>Who this is for:</b> ' + inline(post.audience) + '</p>' : ''}
  <div class="prose">
${bodyHtml}
  </div>
</article>
${faqHtml}
<section class="pg pg--tight"><div class="pg__in pg__in--narrow">
  ${serviceCard(post, 2)}
  ${authorBox(a)}
  <div class="related">
    <h2 class="related__h">Related reading</h2>
    <a class="related__money" href="${post.moneyUrl}" data-track="cta_click" data-pos="article-related" data-article="${esc(post.slug)}"><span>${esc(moneyLabel)}</span>${chrome.ARROW}</a>
    ${related.length ? '<div class="alist">' + related.map((r) => S.articleRow(r)).join('') + '</div>' : ''}
  </div>
</div></section>
${S.ctaSection()}`;

  const published = isoDate(post.date), modified = isoDate(post.updated || post.date);
  const graph = [
    {
      '@type': 'Article', '@id': abs(post.url + '#article'), headline: post.title, description: post.description,
      image: [abs('/og/blog-' + post.slug + '.png')], datePublished: published, dateModified: modified,
      author: { '@type': 'Person', '@id': abs('/blog/author/' + a.slug + '/#person'), name: a.name, url: abs('/blog/author/' + a.slug + '/'), sameAs: a.linkedin ? [a.linkedin] : undefined },
      publisher: { '@id': abs('/#organization') }, mainEntityOfPage: abs(post.url), articleSection: cat.name, inLanguage: 'en-IN'
    },
    S.faqGraph(post.faqs)
  ].filter(Boolean);

  return {
    urlPath: post.url, title: post.title, description: post.description, crumbs, graph, main, article: post.slug, ogType: 'article',
    articleMeta: '\n<meta property="article:published_time" content="' + published + '" />\n<meta property="article:modified_time" content="' + modified + '" />\n<meta property="article:section" content="' + esc(cat.name) + '" />\n<meta property="article:author" content="' + abs('/blog/author/' + a.slug + '/') + '" />',
    ogKey: 'blog-' + post.slug, ogKicker: cat.name, ogHeadline: post.title, lastmod: modified, priority: 0.7, changefreq: 'monthly', scripts: ''
  };
}

/* ------------------------------------------------------------ hubs */
function listHtml(posts) { return '<div class="alist">' + posts.map((p) => S.articleRow(p)).join('') + '</div>'; }

function categoryPage(cat, ctx) {
  const url = '/blog/category/' + cat.slug + '/';
  const crumbs = [['Home', '/'], ['Blog', '/blog/'], [cat.name, url]];
  const posts = ctx.posts.filter((p) => p.category === cat.slug).sort((a, b) => (b.pinned - a.pinned) || (b.date > a.date ? 1 : -1));
  const fakePost = { slug: 'category-' + cat.slug, cat, title: cat.name, moneyUrl: cat.money, industry: '' };
  const main = `${S.pageHero({ crumbs, eyebrow: 'Blog · ' + cat.name, h1: esc(cat.name), lead: esc(cat.intro) })}
${S.section('', posts.length
    ? (posts[0].pinned ? '<span class="eyebrow">Start here</span>' : '') + listHtml(posts)
    : '<div class="emptystate"><h2>Articles are on the way.</h2><p>We are writing this category from real projects: real prices, real timelines, real builds. In the meantime, the page this category feeds is below.</p><a class="btn btn--blue" href="' + cat.money + '">' + esc(cat.moneyLabel) + ' ' + chrome.ARROW + '</a></div>')}
<section class="pg pg--tight"><div class="pg__in pg__in--narrow">${serviceCard(fakePost, 'hub')}</div></section>
${S.ctaSection()}`;
  return { urlPath: url, title: cat.name + ' | Elyx Blog', description: cat.intro, crumbs, main, noindex: posts.length === 0, ogKey: 'blog-category-' + cat.slug, ogKicker: 'Blog', ogHeadline: cat.name, priority: 0.6, changefreq: 'weekly' };
}

function blogIndex(ctx) {
  const url = '/blog/';
  const crumbs = [['Home', '/'], ['Blog', url]];
  const posts = ctx.posts;
  const main = `${S.pageHero({ crumbs, eyebrow: 'The Elyx blog', h1: 'Notes from the people <span class="serif-i">who build.</span>', lead: 'Real prices, real timelines and real builds for Indian businesses going digital. No filler: every article is tied to something we have actually done.' })}
${S.section('', S.sectionHead('Browse by topic', 'Ten topics, <span class="serif-i">one rule.</span>', 'If we cannot connect an article to something we build, we do not publish it.') + '<div class="tilegrid tilegrid--4">' + categories.map((c) => {
    const count = posts.filter((p) => p.category === c.slug).length;
    return '<a class="tcard tcard--sm" href="/blog/category/' + c.slug + '/"><h3>' + esc(c.name) + '</h3><p>' + esc(c.intro.split('. ')[0].replace(/[.]$/, '')) + '.</p><span class="tcard__more">' + (count ? count + (count === 1 ? ' article' : ' articles') : 'Coming soon') + ' ' + chrome.ARROW + '</span></a>';
  }).join('') + '</div>')}
${posts.length ? S.section('pg--tint', S.sectionHead('Latest', 'Fresh <span class="serif-i">off the keyboard.</span>') + listHtml(posts.slice(0, 12))) :
    S.section('pg--tint', '<div class="emptystate"><h2>The first articles land soon.</h2><p>Until then, these pages answer the questions we hear most:</p><div class="inline-ctas inline-ctas--center">' + S.btn('See pricing', '/pricing/', 'blue', 'blog-empty') + S.btnPlain('Try the cost calculator', '/tools/website-cost-calculator/', 'ghost', 'blog-empty') + S.btnPlain('See our work', '/work.html', 'ghost', 'blog-empty') + '</div></div>')}
${S.ctaSection()}`;
  return { urlPath: url, title: 'Elyx Blog: Websites, Apps, SEO & AI for Indian Business', description: 'Practical articles on website cost, redesigns, local SEO, SaaS, apps and AI for Indian businesses, written from real Elyx projects.', crumbs, main, noindex: posts.length === 0, feed: true, ogKey: 'blog', ogKicker: 'Blog', ogHeadline: 'Notes from the people who build', priority: 0.7, changefreq: 'weekly' };
}

function authorPages(ctx) {
  return (config.authors || []).filter((a) => a.blog !== false).map((a) => {
    const url = '/blog/author/' + a.slug + '/';
    const crumbs = [['Home', '/'], ['Blog', '/blog/'], [a.name, url]];
    const posts = ctx.posts.filter((p) => authorOf(p).slug === a.slug);
    const bio = a.bio || a.name + ' is a co-founder of Elyx Solutions, a three-person digital studio in Bengaluru that designs, builds and grows websites, apps and SaaS products.';
    const topics = (a.topics || []).filter(Boolean);
    const avatar = a.photo
      ? '<img class="aprofile__ph" src="' + esc(a.photo) + '" alt="Portrait of ' + esc(a.name) + '" width="160" height="160" />'
      : '<span class="aprofile__ph aprofile__ph--init" role="img" aria-label="' + esc(a.name) + '">' + esc(a.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('')) + '</span>';
    const profile = '<div class="aprofile">' + avatar + '<div class="aprofile__body">' +
      '<p class="aprofile__bio">' + esc(bio) + '</p>' +
      (topics.length ? '<h2 class="aprofile__h">Writes about</h2><ul class="aprofile__topics">' + topics.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>' : '') +
      '<div class="aprofile__links">' +
      (a.linkedin ? '<a class="btn btn--ghost" href="' + esc(a.linkedin) + '" target="_blank" rel="noopener me">LinkedIn ' + chrome.ARROW + '</a>' : '') +
      '<a class="btn btn--ghost" href="/about.html">About Elyx</a></div></div></div>';
    const main = S.pageHero({ crumbs, eyebrow: 'Author', h1: esc(a.name), lead: esc(a.role) }) + '\n' +
      S.section('pg--lead', profile) + '\n' +
      (posts.length
        ? S.section('', S.sectionHead('Articles', 'Articles by <span class="serif-i">' + esc(a.name) + '</span>') + listHtml(posts))
        : S.section('', '<div class="emptystate"><h2>No articles yet.</h2><p>' + esc(a.name) + ' has not published on the Elyx blog yet. Browse what the team has written.</p><a class="btn btn--blue" href="/blog/">Go to the blog ' + chrome.ARROW + '</a></div>')) + '\n' +
      S.ctaSection();
    const person = {
      '@type': 'Person', '@id': abs(url + '#person'), name: a.name, jobTitle: a.role, url: abs(url), description: bio,
      worksFor: { '@id': abs('/#organization') }, sameAs: a.linkedin ? [a.linkedin] : undefined,
      image: a.photo ? abs('/' + a.photo.replace(/^\//, '')) : undefined, knowsAbout: topics.length ? topics : undefined
    };
    return {
      urlPath: url, title: 'Articles by ' + a.name + ' | Elyx Solutions', description: bio.length > 155 ? bio.slice(0, 154).replace(/\s+\S*$/, '') + '…' : bio, crumbs,
      graph: [{ '@type': 'ProfilePage', '@id': abs(url + '#profilepage'), url: abs(url), name: 'Articles by ' + a.name, mainEntity: { '@id': abs(url + '#person') } }, person],
      main, ogKey: 'author-' + a.slug, ogKicker: 'Author', ogHeadline: a.name, priority: 0.5, changefreq: 'monthly'
    };
  });
}

function feedXml(ctx) {
  const items = ctx.posts.slice(0, 30).map((p) => `<item><title>${esc(p.title)}</title><link>${abs(p.url)}</link><guid isPermaLink="true">${abs(p.url)}</guid><pubDate>${new Date(p.updated || p.date).toUTCString()}</pubDate><category>${esc(p.categoryName)}</category><description>${esc(p.description)}</description></item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>Elyx Solutions Blog</title><link>${abs('/blog/')}</link><description>Websites, apps, SEO and AI for Indian businesses.</description><language>en-IN</language>
${items}
</channel></rss>
`;
}

function blogPages(ctx) {
  const pages = [blogIndex(ctx)];
  categories.forEach((c) => pages.push(categoryPage(c, ctx)));
  ctx.posts.forEach((p) => pages.push(articlePage(p, ctx)));
  return pages.concat(authorPages(ctx));
}

module.exports = { loadPosts, makeCtx, blogPages, feedXml, warnings };
