'use strict';
/* Page shell + reusable components shared by every generated page. */
const { config, pricing, esc, abs, inr, relativize } = require('./lib');
const chrome = require('./chrome');

const hasBooking = !!config.bookingUrl;

/** Full HTML document for a generated page. `p.urlPath` like '/services/web-development/'. */
const clip = (t, n) => (t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

function shell(p) {
  p = Object.assign({}, p, { description: clip(p.description, 158) });
  const depth = p.urlPath === '/' ? 0 : p.urlPath.replace(/^\/|\/$/g, '').split('/').length - (/\.html$/.test(p.urlPath) ? 1 : 0);
  const url = abs(p.urlPath);
  const ogKey = p.ogKey || 'home';
  const ogImage = abs('/og/' + ogKey + '.png');
  const robots = p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const crumbs = p.crumbs && p.crumbs.length ? chrome.breadcrumb(p.crumbs) : null;
  const graph = [].concat(crumbs || [], p.graph || []);

  const html = `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}" />
<link rel="canonical" href="${url}" />
<meta name="robots" content="${robots}" />
<meta name="theme-color" content="#080b1a" />
<!-- Open Graph -->
<meta property="og:type" content="${p.ogType || 'website'}" />
<meta property="og:site_name" content="Elyx Solutions" />
<meta property="og:title" content="${esc(p.ogTitle || p.title)}" />
<meta property="og:description" content="${esc(p.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />${p.articleMeta || ''}
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(p.ogTitle || p.title)}" />
<meta name="twitter:description" content="${esc(p.description)}" />
<meta name="twitter:image" content="${ogImage}" />
<!-- Icons -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500;1,6..72,600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/css/styles.css" />
${p.feed ? '<link rel="alternate" type="application/rss+xml" title="Elyx Solutions blog" href="/blog/feed.xml" />\n' : ''}${chrome.headExtras(graph)}
</head>
<body${p.article ? ' data-article="' + esc(p.article) + '"' : ''}${p.bodyAttrs || ''}>
<div class="grain"></div>
${chrome.nav({ home: false })}
<span id="top"></span>
${p.main}
${chrome.footer()}
${chrome.configScript()}
<script src="/js/site.js"></script>
<script src="/js/analytics.js"></script>${p.scripts || ''}
</body>
</html>
`;
  return p.absolute ? html : relativize(html, depth);   // 404 keeps root-absolute links (it is served from any depth)
}

/* ----------------------------------------------------------- components */
const crumbsHtml = (items) =>
  '<nav class="crumbs" aria-label="Breadcrumb">' +
  items.map((it, i) => i === items.length - 1 ? '<span aria-current="page">' + esc(it[0]) + '</span>' : '<a href="' + it[1] + '">' + esc(it[0]) + '</a>').join('<span class="crumbs__sep">/</span>') +
  '</nav>';

function pageHero({ crumbs, eyebrow, h1, lead, ctas, chips, tall }) {
  return `<header class="page-hero page-hero--inner">
  <div class="deco" data-parallax="0.1" aria-hidden="true"><span class="orb orb-a"></span><span class="orb orb-c"></span></div>
  <div class="page-hero__in">
    ${crumbs ? crumbsHtml(crumbs) : ''}
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h1>${h1}</h1>
    ${lead ? '<p class="lead">' + lead + '</p>' : ''}
    ${ctas ? '<div class="page-hero__cta">' + ctas + '</div>' : ''}
    ${chips ? '<div class="page-hero__chips">' + chips + '</div>' : ''}
  </div>
</header>`;
}

const btn = (label, href, kind, pos, extra) =>
  '<a class="btn btn--' + (kind || 'blue') + '" href="' + href + '" data-track="cta_click" data-pos="' + esc(pos || '') + '"' + (extra || '') + '>' + label + ' ' + chrome.ARROW + '</a>';
const btnPlain = (label, href, kind, pos) =>
  '<a class="btn btn--' + (kind || 'ghost') + '" href="' + href + '" data-track="cta_click" data-pos="' + esc(pos || '') + '">' + label + '</a>';

const bookHref = '/contact.html#book';

const CHECK = '<svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

function section(cls, inner, id) {
  return '<section class="pg ' + (cls || '') + '"' + (id ? ' id="' + id + '"' : '') + '><div class="pg__in">' + inner + '</div></section>';
}
const sectionHead = (eyebrow, h2, sub) =>
  '<div class="pg__head"><span class="eyebrow">' + esc(eyebrow) + '</span><h2 class="h2-sm">' + h2 + '</h2>' + (sub ? '<p class="lead">' + sub + '</p>' : '') + '</div>';

function faqBlock(faqs, title) {
  const items = faqs.map((f) => `<details class="faq__item">
  <summary class="faq__q"><span>${esc(f.q)}</span><svg class="faq__caret" viewBox="0 0 14 14" fill="none"><path d="M2 5l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
  <div class="faq__a"><p>${f.a}</p></div>
</details>`).join('\n');
  return section('pg--faq', sectionHead('Questions', title || 'Common questions, <span class="serif-i">honest answers.</span>') + '<div class="faq__list">' + items + '</div>', 'faq');
}
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');
const faqGraph = (faqs) => faqs && faqs.length ? {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) } }))
} : null;

function ctaSection(title, sub, ctx) {
  return `<section class="cta" data-screen-label="Contact CTA">
  <div class="cta__in reveal">
    <div class="deco deco-dark" data-parallax="0.08" style="z-index:-1" aria-hidden="true"><span class="orb orb-a"></span></div>
    <div class="ph-grid cta__bg"></div>
    <div class="cta__glow"></div>
    <span class="eyebrow is-light" style="justify-content:center;">Let's build</span>
    <h2 class="cta__t" style="color:#fff;margin-top:20px;">${title || 'Have something worth <span class="em">building?</span>'}</h2>
    <p class="cta__sub">${sub || 'Tell us where you\'re headed. We\'ll bring the team, the plan and the craft to get you there.'}</p>
    <div class="cta__row">
      ${btn('Start a project', '/contact.html' + (ctx ? '?service=' + ctx : ''), 'blue', 'cta-section')}
      ${btnPlain('Book a call', bookHref, 'light', 'cta-section')}
    </div>
  </div>
</section>`;
}

/** Price rows from pricing.json for the given keys (project keys or monthly keys). */
function priceTable(keys) {
  const rows = keys.map((k) => {
    const pr = pricing.projects[k];
    const mo = pricing.monthly[k];
    if (pr) return { label: pr.label, price: inr(pr.low) + ' – ' + inr(pr.high), time: pr.weeksLow + '–' + pr.weeksHigh + ' weeks', inc: pr.includes };
    if (mo) return { label: mo.label, price: inr(mo.low) + ' – ' + inr(mo.high) + ' / month', time: 'Monthly plan', inc: mo.includes };
    return null;
  }).filter(Boolean);
  return `<div class="ptable" role="table">
  <div class="ptable__row ptable__row--head" role="row"><span>What</span><span>Typical range</span><span>Timeline</span></div>
  ${rows.map((r) => `<div class="ptable__row" role="row"><span class="ptable__what"><b>${esc(r.label)}</b><small>${esc(r.inc)}</small></span><span class="ptable__price">${r.price}</span><span class="ptable__time">${r.time}</span></div>`).join('\n  ')}
</div>
<p class="ptable__note">${esc(pricing.gstNote)} Engagements start at ${inr(pricing.startingPrice)}. Final scope and pricing are confirmed in writing before any work begins.</p>`;
}

function caseCard(w, label) {
  if (w.external) {
    return `<a class="casecard casecard--ext" href="${esc(w.liveUrl)}" target="_blank" rel="noopener">
  <div class="casecard__media"><img class="casecard__shot" src="${esc(w.thumb)}" alt="${esc(w.shortName)} website" width="1000" height="750" loading="lazy" decoding="async" /><span class="casecard__cat">${esc(w.category)}</span></div>
  <div class="casecard__body">
    ${label ? '<span class="casecard__label">' + esc(label) + '</span>' : ''}
    <h3>${esc(w.shortName)}</h3>
    <p>${esc(w.summary)}</p>
    <span class="casecard__more">Visit ${esc(w.liveLabel)} ${chrome.ARROW}</span>
  </div>
</a>`;
  }
  return `<a class="casecard" href="/work/${w.slug}/">
  <div class="casecard__media casecard__media--${w.tint}"><span class="casecard__cat">${esc(w.category)}</span><span class="casecard__mono">${esc(w.mono)}</span></div>
  <div class="casecard__body">
    ${label ? '<span class="casecard__label">' + esc(label) + '</span>' : ''}
    <h3>${esc(w.shortName)}</h3>
    <p>${esc(w.summary)}</p>
    <span class="casecard__more">Read the case study ${chrome.ARROW}</span>
  </div>
</a>`;
}

/** "Read next": articles pointing at this money page (best first, up to 5). Empty string if none yet. */
function articlesSection(posts, title) {
  if (!posts || !posts.length) return '';
  return section('pg--articles', sectionHead('From the blog', title || 'Read before you decide') +
    '<div class="alist">' + posts.slice(0, 5).map((a) => articleRow(a)).join('') + '</div>');
}
function articleRow(a) {
  return `<a class="arow" href="${a.url}"><span class="arow__cat">${esc(a.categoryName)}</span><span class="arow__t">${esc(a.title)}</span><span class="arow__d">${esc(a.description)}</span></a>`;
}

module.exports = { shell, pageHero, btn, btnPlain, bookHref, CHECK, section, sectionHead, faqBlock, faqGraph, ctaSection, priceTable, caseCard, articlesSection, articleRow, crumbsHtml, hasBooking, stripTags };
