#!/usr/bin/env node
'use strict';
/* Elyx site builder.   Usage:  node _src/build.js        (add --no-og to skip image generation)
   Generates every non-hand-written page, keeps the nav/footer/head of the hand-written pages
   in sync, writes sitemap.xml with real lastmod dates, robots.txt, the RSS feed and social images. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { ROOT, config, pricing, write, read, exists, relativize, abs, isoDate } = require('./lib');
const chrome = require('./chrome');
const S = require('./shell');
const core = require('./pages-core');
const tools = require('./pages-tools');
const blog = require('./pages-blog');
const og = require('./og');

const NO_OG = process.argv.includes('--no-og');
const today = new Date().toISOString().slice(0, 10);

/* hand-written pages kept in the repo root; chrome between markers is rebuilt */
const HAND = [
  { file: 'index.html', url: '/', key: 'home', crumbs: null, priority: '1.0', changefreq: 'weekly', home: true, kicker: 'Digital studio · Bengaluru', headline: 'We build digital value.' },
  { file: 'services.html', url: '/services.html', key: 'services', crumbs: [['Home', '/'], ['Services', '/services.html']], priority: '0.9', changefreq: 'monthly', kicker: 'Services', headline: 'Web, app & SaaS development' },
  { file: 'work.html', url: '/work.html', key: 'work', crumbs: [['Home', '/'], ['Work', '/work.html']], priority: '0.8', changefreq: 'monthly', kicker: 'Selected work', headline: 'Work that moved the needle' },
  { file: 'about.html', url: '/about.html', key: 'about', crumbs: [['Home', '/'], ['About', '/about.html']], priority: '0.6', changefreq: 'yearly', kicker: 'About Elyx', headline: 'Three founders building digital value' },
  { file: 'contact.html', url: '/contact.html', key: 'contact', crumbs: [['Home', '/'], ['Contact', '/contact.html']], priority: '0.7', changefreq: 'yearly', kicker: 'Contact', headline: "Let's build something worth shipping" }
];

const notes = [];   // things the owner still has to do
const note = (m) => notes.push(m);

/* ------------------------------------------------------------ marker sync */
function replaceBlock(html, name, inner) {
  const re = new RegExp('(<!--@' + name + '-->)[\\s\\S]*?(<!--@/' + name + '-->)');
  if (!re.test(html)) throw new Error('marker @' + name + ' missing');
  return html.replace(re, (m, a, b) => a + '\n' + inner + '\n' + b);
}

function syncHandPages() {
  HAND.forEach((h) => {
    const raw = read(h.file);
    const crlf = raw.indexOf('\r\n') !== -1;                 // keep the file's existing line endings
    let html = raw.replace(/\r\n/g, '\n');
    const graph = h.home ? chrome.orgGraph() : [chrome.breadcrumb(h.crumbs)];
    const extraGraph = h.file === 'about.html' ? aboutGraph() : [];
    html = replaceBlock(html, 'head', relativize(chrome.headExtras(graph.concat(extraGraph)), 0));
    html = replaceBlock(html, 'nav', relativize(chrome.nav({ home: !!h.home }), 0));
    html = replaceBlock(html, 'footer', relativize(chrome.footer(), 0));
    html = replaceBlock(html, 'scripts', relativize(chrome.configScript() + '\n<script src="/js/site.js"></script>\n<script src="/js/analytics.js"></script>', 0));
    if (h.home) html = replaceBlock(html, 'industries', relativize(homeIndustries(), 0));
    if (h.file === 'about.html') html = replaceBlock(html, 'team-cards', relativize(teamCards(), 0));
    if (h.file === 'contact.html') html = replaceBlock(html, 'contact-extra', relativize(contactExtra(), 0));
    html = relativize(html, 0);   // hand-written links like /pricing/ become pricing/
    write(h.file, crlf ? html.replace(/\n/g, '\r\n') : html);
  });
}

function aboutGraph() {
  return (config.authors || []).map((a) => ({
    '@type': 'Person', '@id': abs('/blog/author/' + a.slug + '/#person'), name: a.name, jobTitle: a.role, url: a.blog === false ? undefined : abs('/blog/author/' + a.slug + '/'),
    worksFor: { '@id': abs('/#organization') }, sameAs: a.linkedin ? [a.linkedin] : undefined
  }));
}

function homeIndustries() {
  const industries = require('./data/industries');
  return `<section class="pg pg--industries" id="industries" data-screen-label="Industries">
  <div class="pg__in">
    <div class="pg__head reveal"><span class="eyebrow">04. Built for your trade</span><h2 class="h2-sm tr">A website for <span class="serif-i">your kind</span> of business.</h2><p class="lead">Clinics, coaching centres, restaurants, salons, real estate, CA and law firms: each page shows what a site for that trade really needs, with starting prices.</p></div>
    <div class="tilegrid reveal">${industries.map((it) => `<a class="tcard" href="/websites-for/${it.slug}/"><span class="tcard__ic">${chrome.svg24(it.icon)}</span><h3>${it.name.replace(/&/g, '&amp;')}</h3><p>${it.short.replace(/&/g, '&amp;')} · from ₹9,999</p><span class="tcard__more">See the page ${chrome.ARROW}</span></a>`).join('')}</div>
  </div>
</section>`;
}

function teamCards() {
  return `<div class="pcards">${(config.authors || []).map((a) => `<article class="pcard">${a.photo ? '<img class="pcard__ph" src="' + a.photo + '" alt="' + a.name + '" width="64" height="64" loading="lazy" />' : '<span class="pcard__ph pcard__ph--init">' + a.name.slice(0, 1) + '</span>'}<h3>${a.name}</h3><span class="pcard__r">${a.role}</span>${a.bio ? '<p>' + a.bio + '</p>' : ''}<div class="pcard__links">${a.blog === false ? '' : '<a href="/blog/author/' + a.slug + '/">Profile</a>'}${a.linkedin ? '<a href="' + a.linkedin + '" target="_blank" rel="noopener me">LinkedIn ↗</a>' : ''}</div></article>`).join('')}</div>`;
}

function contactExtra() {
  const waLine = chrome.waUrl ? `<a class="cbox__chip" href="${chrome.waUrl}" target="_blank" rel="noopener" data-track="whatsapp_click" data-pos="contact">WhatsApp</a>` : '';
  const callLine = (config.phone ? `<a class="cbox__chip" href="${chrome.telUrl}" data-track="call_click" data-pos="contact">Call ${config.phone}</a>` : '') + (config.phoneSecondary ? `<a class="cbox__chip" href="${chrome.tel2Url}" data-track="call_click" data-pos="contact">Call ${config.phoneSecondary}</a>` : '');
  const addr = chrome.addressLine();
  const book = config.bookingUrl
    ? `<div class="bookembed"><iframe src="${config.bookingUrl}" title="Book a 15-minute call with Elyx" loading="lazy" allow="payment"></iframe></div>`
    : `<div class="cbox"><div class="cbox__k">Prefer to talk first?</div><div class="cbox__v">Send the form above and we'll suggest a time.</div><div class="cbox__row">${waLine}${callLine}<a class="cbox__chip" href="mailto:${config.email}">${config.email}</a></div></div>`;
  return `<section class="pg pg--book" id="book" data-screen-label="Book a call">
  <div class="pg__in pg__in--narrow">
    <div class="pg__head"><span class="eyebrow">Book a call</span><h2 class="h2-sm">15 minutes, <span class="serif-i">no sales runaround.</span></h2><p class="lead">Pick a slot that suits you and we'll talk through what you're building.${addr ? ' Based in ' + addr + '.' : ''}</p></div>
    ${book}
  </div>
</section>`;
}

/* ------------------------------------------------------------ pages */
const posts = blog.loadPosts();
const ctx = blog.makeCtx(posts);

let pages = []
  .concat(core.servicePages(ctx), core.industryPages(ctx), core.casePages(ctx), [core.pricingPage(ctx), core.locationPage(ctx)])
  .concat(tools.toolsPages())
  .concat(blog.blogPages(ctx));

pages.push({
  urlPath: '/404.html', title: 'Page not found | Elyx Solutions', description: 'That page does not exist, but these might help.', noindex: true, absolute: true, ogKey: 'home', skipSitemap: true,
  main: `<header class="page-hero page-hero--inner"><div class="page-hero__in"><span class="eyebrow">404</span><h1>That page took a <span class="serif-i">wrong turn.</span></h1><p class="lead">The link may be old or mistyped. Try one of these instead.</p><div class="page-hero__cta">${S.btn('Home', '/', 'blue', '404')}${S.btnPlain('Services', '/services.html', 'ghost', '404')}${S.btnPlain('Pricing', '/pricing/', 'ghost', '404')}${S.btnPlain('Contact', '/contact.html', 'ghost', '404')}</div></div></header>`
});

// hash-based lastmod ledger: a page's lastmod only moves when its HTML actually changes
const LEDGER_FILE = path.join(__dirname, '.lastmod.json');
let ledger = {};
try { ledger = JSON.parse(fs.readFileSync(LEDGER_FILE, 'utf8')); } catch (e) {}
const sitemapEntries = [];
function track(url, html, fixedLastmod, priority, changefreq, noindex) {
  const hash = crypto.createHash('md5').update(html).digest('hex');
  const prev = ledger[url];
  const lastmod = fixedLastmod || (prev && prev.hash === hash ? prev.lastmod : today);
  ledger[url] = { hash, lastmod };
  if (!noindex) sitemapEntries.push({ url, lastmod, priority, changefreq });
}

const ogJobs = [];
const keep = new Set();
pages.forEach((p) => {
  const html = S.shell(p);
  const rel = p.urlPath.endsWith('.html') ? p.urlPath.slice(1) : p.urlPath.slice(1) + 'index.html';
  write(rel, html);
  keep.add(rel);
  if (!p.skipSitemap) track(p.urlPath, html, p.lastmod, p.priority || 0.5, p.changefreq || 'monthly', p.noindex);
  if (p.ogKey && p.ogHeadline && !ogJobs.find((j) => j.key === p.ogKey)) ogJobs.push({ key: p.ogKey, kicker: p.ogKicker || 'Elyx Solutions', headline: p.ogHeadline.replace(/&amp;/g, '&') });
});

syncHandPages();
HAND.forEach((h) => {
  track(h.url, read(h.file).replace(/\r\n/g, '\n'), null, h.priority, h.changefreq, false);
  ogJobs.push({ key: h.key, kicker: h.kicker, headline: h.headline });
});

/* remove generated pages that no longer exist (e.g. an article that was deleted or set to draft) */
['blog', 'services', 'websites-for', 'work', 'tools', 'authors', 'pricing', 'web-development-bengaluru'].forEach((dir) => {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return;
  (function walk(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); try { fs.rmdirSync(p); } catch (x) {} }
      else if (e.name === 'index.html' && !keep.has(path.relative(ROOT, p).replace(/\\/g, '/'))) fs.unlinkSync(p);
    });
  })(full);
});

/* sitemap */
const order = sitemapEntries.sort((a, b) => (a.url === '/' ? -1 : b.url === '/' ? 1 : a.url.localeCompare(b.url)));
write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  order.map((e) => `  <url>\n    <loc>${abs(e.url)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join('\n') + '\n</urlset>\n');
write('robots.txt', `# robots.txt, Elyx Solutions\nUser-agent: *\nAllow: /\nDisallow: /_src/\nDisallow: /404.html\n\nSitemap: ${abs('/sitemap.xml')}\n`);
write('blog/feed.xml', blog.feedXml(ctx));
fs.writeFileSync(LEDGER_FILE, JSON.stringify(ledger, null, 2));

/* social images + icons */
let ogResult = { rendered: 0, skipped: 0 };
if (!NO_OG) {
  ogResult = og.generate(ogJobs);
  if (ogResult.missingBrowser) note('No Chrome/Edge found, so social share images (og/*.png) were not generated. Install one or set ELYX_BROWSER.');
}

/* ------------------------------------------------------------ owner to-do list */
if (pricing.status !== 'CONFIRMED') note('PRICING: _src/data/pricing.json is not marked CONFIRMED. The only price Elyx publishes is the starting price (₹9,999); every other project is quoted to the client.');
if (!config.phone) note('Add "phone" to site.config.json (footer, contact page and schema stay without it).');
if (!config.whatsapp) note('Add "whatsapp" (digits with country code, e.g. 919876543210) to site.config.json to switch on the floating WhatsApp button and every WhatsApp CTA.');
if (false) note('Add your street address / postal code under "address" in site.config.json (LocalBusiness schema, footer, Bengaluru page).');
if (!config.googleBusinessProfileUrl) note('Create the Google Business Profile, then paste its URL into "googleBusinessProfileUrl".');
if (!config.bookingUrl) note('Add your Cal.com / Calendly link to "bookingUrl" (15-minute slots) to show the booking embed on /contact.html#book.');
if (!config.ga4Id) note('Add your GA4 measurement ID (G-XXXXXXXXXX) to "ga4Id". Events (card_click, whatsapp_click, call_booked, form_submit) are already wired.');
(config.authors || []).forEach((a) => { if (!a.bio || !a.linkedin) note('Author "' + a.name + '": add ' + [!a.bio && 'bio', !a.linkedin && 'LinkedIn URL', !a.photo && 'photo'].filter(Boolean).join(', ') + ' in site.config.json.'); });
require('./data/work').filter((w) => !w.external).forEach((w) => { if (!w.metrics.length || w.metrics.length < 2 && w.slug !== 'ashirwad-dental') note('Case study "' + w.shortName + '": add real result numbers to _src/data/work.js (metrics) and a client quote' + (w.quote ? '' : ' (none yet)') + '.'); });
blog.warnings.forEach((w) => note('Blog: ' + w));

console.log('\nBuilt ' + pages.length + ' generated pages + ' + HAND.length + ' hand-written pages · ' + posts.length + ' article(s) · ' + order.length + ' URLs in sitemap.xml');
console.log('Share images: ' + ogResult.rendered + ' rendered, ' + ogResult.skipped + ' up to date');
if (notes.length) { console.log('\nStill to do (' + notes.length + '):'); notes.forEach((n) => console.log('  - ' + n)); }
