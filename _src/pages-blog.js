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

/* Tokens keep articles in sync with _src/data/pricing.json:
     {{weeks:website}} timeline, e.g. 2–4 weeks (keys: landing, website, ecommerce, webapp, mobile, saas)
     {{start}}         the starting price, ₹9,999
   Elyx publishes no other price, so there are no price-range tokens: an article that uses one stops the build. */
function expandTokens(md) {
  return md
    .replace(/\{\{price(?:-table|:\w+)?\}\}/g, (m) => { throw new Error('Elyx publishes no price ranges, so ' + m + ' is not allowed. Say "starting from {{start}}" and that every project is quoted to the reader\'s requirements.'); })
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
    const miss = ['title', 'category', 'description', 'date'].filter((k) => !data[k]);
    if (miss.length) { warn('Article "' + file + '" is missing: ' + miss.join(', ') + ' (skipped)'); return; }
    const cat = catBySlug[data.category];
    if (!cat) { warn('Article "' + file + '": unknown category "' + data.category + '" (skipped)'); return; }
    if (data.author && !authorBySlug[data.author]) warn('Article "' + file + '": unknown author "' + data.author + '", using default');
    // `title` is the H1 and may be long; `seo_title` (optional) is the browser tab / search result / share-card title and is the one that must stay short.
    const seoTitle = (data.seo_title || '').trim() || data.title;
    if (seoTitle.length > 70) warn('Article "' + file + '": ' + (data.seo_title ? 'seo_title' : 'title') + ' is ' + seoTitle.length + ' chars; aim for under 60' + (data.seo_title ? '' : ' (or keep the long title and add a short seo_title)'));
    if (data.title.length > 110) warn('Article "' + file + '": title is ' + data.title.length + ' chars; keep the H1 under 110');

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
      file, slug, title: data.title, seoTitle, description: data.description,
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

/* ------------------------------------------------------------ small pieces */
const ARROW = chrome.ARROW;
const fmtShort = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const authorOf = (post) => authorBySlug[post.author] || config.authors[0];
const DEFAULT_BIO = (a) => a.name + ' is a co-founder of Elyx Solutions, a three-person digital studio in Bengaluru that designs, builds and grows websites, apps and SaaS products.';

function waFor(text) {
  if (!chrome.waUrl) return '';
  return chrome.waUrl.split('?')[0] + '?text=' + encodeURIComponent((config.whatsappMessage || '') + (text ? ' (' + text + ')' : ''));
}

/** Avatar + name, one link to the author page. */
function authorChip(a) {
  const ph = a.photo
    ? '<img class="bauthor__ph" src="' + esc(a.photo) + '" alt="" width="24" height="24" loading="lazy" />'
    : '<span class="bauthor__ph bauthor__ph--init" aria-hidden="true">' + esc(a.name.slice(0, 1)) + '</span>';
  return '<a class="bauthor" href="/blog/author/' + a.slug + '/">' + ph + '<span>' + esc(a.name) + '</span></a>';
}

/** One article card: category tag, title (whole card is the link), excerpt, author, date, read time. */
function card(post) {
  const a = authorOf(post);
  return `<li class="bl__li" data-cat="${post.category}"><article class="bcard">
  <span class="bcard__cat">${esc(post.categoryName)}</span>
  <h3><a class="bcard__link" href="${post.url}">${esc(post.title)}</a></h3>
  <p class="bcard__ex">${esc(post.description)}</p>
  <div class="bcard__meta">
    ${authorChip(a)}
    <div><time datetime="${isoDate(post.date)}">${fmtShort(post.date)}</time><span aria-hidden="true">·</span><span>${post.readMin} min read</span></div>
  </div>
</article></li>`;
}
const cardGrid = (posts) => '<ul class="bl__grid">' + posts.map(card).join('\n') + '</ul>';

/** The sticky call-to-action beside an article. */
function sideCta(post) {
  let headline = post.cat.card.headline;
  let soft = post.moneyUrl !== post.cat.money ? { label: 'See how we do it', href: post.moneyUrl } : post.cat.card.soft;
  if (post.industry && indBySlug[post.industry]) {
    const it = indBySlug[post.industry];
    headline = 'Need a website for your ' + it.short.toLowerCase() + '?';
    soft = { label: 'See sites for ' + it.name.toLowerCase(), href: '/websites-for/' + it.slug + '/' };
  }
  const attrs = ' data-article="' + esc(post.slug) + '" data-card-pos="side"';
  const wa = waFor('from the article "' + post.title + '"');
  const direct = wa
    ? '<a class="btn btn--blue" href="' + wa + '" target="_blank" rel="noopener" data-track="whatsapp_click"' + attrs + '>WhatsApp us ' + ARROW + '</a>'
    : '<a class="btn btn--blue" href="/contact.html?src=' + esc(post.slug) + '#book" data-track="card_click"' + attrs + ' data-btn="direct">Book a 15-min call ' + ARROW + '</a>';
  return `<aside class="baside" aria-label="From Elyx"><div class="bcta">
  <span class="bcta__k">Elyx Solutions</span>
  <h3>${esc(headline)}</h3>
  ${direct}
  <a class="btn btn--ghost" href="${soft.href}" data-track="card_click"${attrs} data-btn="soft">${esc(soft.label)}</a>
</div></aside>`;
}

const faqItemsHtml = (faqs) => faqs.map((f) => `<details class="faq__item">
  <summary class="faq__q"><span>${esc(f.q)}</span><svg class="faq__caret" viewBox="0 0 14 14" fill="none"><path d="M2 5l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
  <div class="faq__a"><p>${f.a}</p></div>
</details>`).join('\n');

/* ------------------------------------------------------------ article page */
function articlePage(post) {
  const a = authorOf(post);
  const cat = post.cat;
  const crumbs = [['Home', '/'], ['Blog', '/blog/'], [post.title, post.url]];

  const heads = post.blocks.filter((b) => b.type === 'h' && b.level === 2).map((b) => ({ id: b.id, text: b.text }));
  if (post.faqs.length) heads.push({ id: 'faq', text: 'Frequently asked questions' });
  const toc = heads.length >= 3
    ? '<nav class="btoc" aria-label="Table of contents"><b>On this page</b><ol>' + heads.map((h, i) => '<li><a href="#' + h.id + '"><span>' + String(i + 1).padStart(2, '0') + '</span>' + esc(h.text.split('*').join('').split('`').join('')) + '</a></li>').join('') + '</ol></nav>'
    : '';
  const faq = post.faqs.length ? '<section class="bfaq" id="faq"><h2>Frequently asked questions</h2><div class="faq__list">' + faqItemsHtml(post.faqs) + '</div></section>' : '';
  const dates = 'Published <time datetime="' + isoDate(post.date) + '">' + fmtDate(post.date) + '</time>' +
    (post.updated ? ' · Updated <time datetime="' + isoDate(post.updated) + '">' + fmtDate(post.updated) + '</time>' : '');

  const main = `<main class="bl"><div class="bl__in">
  <div class="bl__crumbs">
    <a class="bl__back" href="/blog/">← Back to Blog</a>
    <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/blog/">Blog</a></li><li aria-hidden="true">/</li><li aria-current="page">${esc(post.title)}</li></ol></nav>
  </div>
  <div class="bl__cols">
    <article class="barticle" data-article="${esc(post.slug)}">
      <header>
        <p class="bbyline">By ${authorChip(a)}<span aria-hidden="true">·</span><span>${dates}</span><span aria-hidden="true">·</span><span>${post.readMin} min read</span></p>
        <h1>${esc(post.title)}</h1>
        <p class="blead">${esc(post.description)}</p>
      </header>
      ${toc}
      <div class="prose">
${post.blocks.map((b) => b.html).join('\n')}
      </div>
      ${faq}
      <div class="bfoot"><span>${esc(cat.name)}</span></div>
    </article>
    ${sideCta(post)}
  </div>
</div></main>
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
    urlPath: post.url, title: post.seoTitle, ogTitle: post.seoTitle, description: post.description, crumbs, graph, main, article: post.slug, ogType: 'article',
    articleMeta: '\n<meta property="article:published_time" content="' + published + '" />\n<meta property="article:modified_time" content="' + modified + '" />\n<meta property="article:section" content="' + esc(cat.name) + '" />\n<meta property="article:author" content="' + abs('/blog/author/' + a.slug + '/') + '" />',
    ogKey: 'blog-' + post.slug, ogKicker: cat.name, ogHeadline: post.seoTitle, lastmod: modified, priority: 0.7, changefreq: 'monthly', scripts: ''
  };
}

/* ------------------------------------------------------------ blog index */
function blogIndex(ctx) {
  const url = '/blog/';
  const crumbs = [['Home', '/'], ['Blog', url]];
  const posts = ctx.posts;
  const inUse = categories.filter((c) => posts.some((p) => p.category === c.slug));
  const pills = inUse.length > 1
    ? '<div class="bl__pills" role="group" aria-label="Filter articles by category"><button type="button" class="bl__pill is-on" data-cat="all" aria-pressed="true">All posts</button>' +
      inUse.map((c) => '<button type="button" class="bl__pill" data-cat="' + c.slug + '" aria-pressed="false">' + esc(c.name) + '</button>').join('') + '</div>'
    : '';
  const main = `<main class="bl"><div class="bl__in">
  <header class="bl__head">
    <span class="eyebrow">Blog</span>
    <h1>Latest from Elyx</h1>
    <p class="lead">Guides on websites, apps, SEO and AI for Indian businesses.</p>
  </header>
  ${posts.length ? pills + cardGrid(posts) : '<p class="bl__empty">The first articles land soon.</p>'}
</div></main>
${S.ctaSection()}`;
  return {
    urlPath: url, title: 'Elyx Blog: Websites, Apps, SEO & AI for Indian Business', description: 'Practical articles on website cost, redesigns, local SEO, SaaS, apps and AI for Indian businesses, written from real Elyx projects.',
    crumbs, main, noindex: posts.length === 0, feed: true, scripts: '\n<script src="/js/blog.js"></script>',
    graph: [{ '@type': 'CollectionPage', '@id': abs(url + '#collection'), url: abs(url), name: 'Elyx Blog', mainEntity: { '@type': 'ItemList', itemListElement: posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(p.url), name: p.title })) } }],
    ogKey: 'blog', ogKicker: 'Blog', ogHeadline: 'Latest from Elyx', priority: 0.7, changefreq: 'weekly'
  };
}

/* ------------------------------------------------------------ author pages */
function authorPages(ctx) {
  return (config.authors || []).filter((a) => a.blog !== false).map((a) => {
    const url = '/blog/author/' + a.slug + '/';
    const crumbs = [['Home', '/'], ['Blog', '/blog/'], [a.name, url]];
    const posts = ctx.posts.filter((p) => authorOf(p).slug === a.slug);
    const bio = a.bio || DEFAULT_BIO(a);
    const topics = (a.topics || []).filter(Boolean);
    const photo = a.photo ? '<div class="bhero__ph"><img src="' + esc(a.photo) + '" alt="Portrait of ' + esc(a.name) + '" width="480" height="640" fetchpriority="high" /></div>' : '';
    const main = `<main class="bl"><div class="bl__in">
  <div class="bl__crumbs"><nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/blog/">Blog</a></li><li aria-hidden="true">/</li><li aria-current="page">${esc(a.name)}</li></ol></nav></div>
  <header class="bhero${photo ? ' bhero--ph' : ''}">
    ${photo}
    <div>
      <span class="eyebrow">Author</span>
      <h1>${esc(a.name)}</h1>
      <p class="bhero__role">${esc(a.role)}</p>
      <p class="bhero__bio">${esc(bio)}</p>
      ${topics.length ? '<h2 class="bhero__h">Writes about</h2><ul class="bhero__topics">' + topics.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>' : ''}
      ${a.linkedin ? '<a class="btn btn--ghost" href="' + esc(a.linkedin) + '" target="_blank" rel="noopener me">LinkedIn ' + ARROW + '</a>' : ''}
    </div>
  </header>
  <section aria-labelledby="author-articles">
    <h2 class="bl__h2" id="author-articles">Articles by ${esc(a.name)}</h2>
    ${posts.length ? cardGrid(posts) : '<p class="bl__empty">No articles yet.</p>'}
  </section>
</div></main>
${S.ctaSection()}`;
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
  return [blogIndex(ctx)].concat(ctx.posts.map((p) => articlePage(p)), authorPages(ctx));
}

module.exports = { loadPosts, makeCtx, blogPages, feedXml, warnings };
