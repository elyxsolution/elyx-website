'use strict';
/* Free tools: website launch checklist, Google Business Profile checker. */
const { config, pricing, esc, inr, abs } = require('./lib');
const chrome = require('./chrome');
const S = require('./shell');

const LAUNCH_CHECKLIST = [
  { g: 'Foundations', items: [
    'You own the domain, registered in the business name',
    'HTTPS is active and only one version of the site loads (www or non-www), the other redirects to it',
    'Business email on your own domain (not a Gmail address)',
    'Site checked on a real phone, not just a desktop browser window',
    'Pages load in under 3 seconds on mobile data (test with PageSpeed Insights)'
  ] },
  { g: 'Content that converts', items: [
    'One clear headline and one primary action above the fold',
    'Phone, WhatsApp and address visible without scrolling',
    'Real photos of your work, team or premises instead of stock images',
    'A price, or a "from" price, so visitors can qualify themselves',
    'Testimonials with a name, role and photo',
    '3–5 FAQs answering what customers ask on calls'
  ] },
  { g: 'Enquiry paths', items: [
    'Contact form tested end to end: you actually receive the message',
    'WhatsApp click-to-chat opens a pre-filled message to the right number',
    'Click-to-call works on mobile',
    'A thank-you confirmation after the form is submitted'
  ] },
  { g: 'Search and local', items: [
    'Every page has its own title tag (under 60 characters) and meta description',
    'Google Search Console verified and the sitemap submitted',
    'Google Business Profile created, verified and linked to the site',
    'Structured data (Organization or LocalBusiness) added and tested',
    'A custom 404 page, and robots.txt is not blocking the site'
  ] },
  { g: 'Tracking and compliance', items: [
    'Google Analytics (GA4) installed with events for form, WhatsApp and call clicks',
    'Privacy notice that reflects your use of personal data (India\'s DPDP Act)',
    'Legal business details in the footer (GST number if applicable)',
    'Sector details displayed where required (for example FSSAI for food, RERA for property)',
    'Automatic backups switched on and a restore tested'
  ] }
];

const GBP_CHECKS = [
  { g: 'Set up', items: [
    ['Profile is claimed and verified', 10],
    ['Business name is exactly your real name (no keywords added)', 5],
    ['Primary category matches your main service', 10],
    ['Secondary categories added for other services', 5],
    ['Address or service area is correct', 8],
    ['Phone number matches the one on your website', 5],
    ['Website link added', 5],
    ['Opening hours set, including holidays', 5]
  ] },
  { g: 'Content', items: [
    ['Business description written in plain language', 5],
    ['Services or products listed with short descriptions', 6],
    ['10 or more real photos (premises, team, work)', 8],
    ['Logo and cover photo set', 3],
    ['A post published in the last 30 days', 4]
  ] },
  { g: 'Reputation', items: [
    ['25 or more reviews', 8],
    ['Average rating of 4.0 or higher', 4],
    ['You reply to reviews, good and bad', 5],
    ['Questions and answers section is answered', 3]
  ] },
  { g: 'Conversion', items: [
    ['Booking or appointment link added', 3],
    ['Messaging or WhatsApp contact enabled', 3],
    ['Attributes filled in (for example accessibility, payments accepted)', 2]
  ] }
];

const toolSchema = (name, url, desc, cat) => ({
  '@type': 'WebApplication', name, url: abs(url), description: desc, applicationCategory: cat || 'BusinessApplication',
  operatingSystem: 'Any', browserRequirements: 'Requires JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, provider: { '@id': abs('/#organization') }
});

function toolsPages() {
  const out = [];

  /* ------------------------------------------------- hub */
  const hubCrumbs = [['Home', '/'], ['Free tools', '/tools/']];
  const tools = [
    ['website-launch-checklist', 'Website launch checklist', '25 checks to run before you go live: domain, speed, enquiry paths, search, tracking and compliance. Your progress saves in your browser.'],
    ['google-business-profile-checker', 'Google Business Profile checker', 'Score your Google Business Profile out of 100 and see exactly which fixes will move you up in "near me" searches first.']
  ];
  out.push({
    urlPath: '/tools/', title: 'Free Tools for Indian Small Businesses | Elyx', description: 'Free tools from Elyx: a website launch checklist and a Google Business Profile checker for small businesses in India.',
    crumbs: hubCrumbs, ogKey: 'tools', ogKicker: 'Free tools', ogHeadline: 'Free tools for small businesses', priority: 0.7, changefreq: 'monthly',
    main: `${S.pageHero({ crumbs: hubCrumbs, eyebrow: 'Free tools', h1: 'Small tools for the moment you <span class="serif-i">decide to go online.</span>', lead: 'No sign-up, no email gate. Use them, then talk to us if you want a hand.' })}
${S.section('', '<div class="tilegrid">' + tools.map((t, i) => `<a class="tcard" href="/tools/${t[0]}/"><span class="tcard__ic">${chrome.svg24(['<path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>', '<path d="M12 21s7-6.2 7-11.2A7 7 0 005 9.8C5 14.8 12 21 12 21z M12 12.2a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>'][i])}</span><h3>${t[1]}</h3><p>${t[2]}</p><span class="tcard__more">Open the tool ${chrome.ARROW}</span></a>`).join('') + '</div>')}
${S.ctaSection()}`
  });

  /* ------------------------------------------------- launch checklist */
  const lUrl = '/tools/website-launch-checklist/';
  const lCrumbs = [['Home', '/'], ['Free tools', '/tools/'], ['Website launch checklist', lUrl]];
  const total = LAUNCH_CHECKLIST.reduce((n, g) => n + g.items.length, 0);
  out.push({
    urlPath: lUrl, title: 'Website Launch Checklist for Indian Businesses | Elyx', description: 'A free ' + total + '-point website launch checklist for India: domain, speed, enquiry paths, Google setup, tracking and compliance. Progress saves in your browser.',
    crumbs: lCrumbs, graph: [toolSchema('Website launch checklist', lUrl, 'A checklist to run before launching a website in India.')],
    ogKey: 'tools-website-launch-checklist', ogKicker: 'Free tool', ogHeadline: 'Website launch checklist', priority: 0.7, changefreq: 'monthly',
    scripts: '\n<script src="/js/tools.js"></script>',
    main: `${S.pageHero({ crumbs: lCrumbs, eyebrow: 'Free tool', h1: 'The website launch <span class="serif-i">checklist.</span>', lead: total + ' checks to run before you go live. Tick them off; your progress is saved in this browser.' })}
<section class="pg pg--tool"><div class="pg__in pg__in--narrow">
  <div class="chk" data-tool="checklist" data-key="launch">
    <div class="chk__bar"><div class="chk__fill" id="chkFill"></div></div>
    <p class="chk__count"><b id="chkDone">0</b> of ${total} done <button type="button" class="chk__reset" id="chkReset">Reset</button></p>
    ${LAUNCH_CHECKLIST.map((g) => '<fieldset class="chk__group"><legend>' + esc(g.g) + '</legend>' + g.items.map((it) => '<label class="opt"><input type="checkbox" class="chk__box" /><span>' + esc(it) + '</span></label>').join('') + '</fieldset>').join('')}
    <div class="chk__done" id="chkMsg" hidden><h3>Ready to launch.</h3><p>Everything is ticked. If you want a second pair of eyes, we are happy to review it.</p>${S.btn('Ask us to review', '/contact.html?service=web-development', 'blue', 'checklist')}</div>
  </div>
</div></section>
${S.section('pg--tint', '<div class="inline-ctas inline-ctas--center"><p class="prose-p">Stuck on a few of these? We build sites with all of it done for you, from ' + inr(pricing.startingPrice) + '.</p>' + S.btn('See web development', '/services/web-development/', 'blue', 'checklist-foot') + '</div>')}
${S.ctaSection()}`
  });

  /* ------------------------------------------------- GBP checker */
  const gUrl = '/tools/google-business-profile-checker/';
  const gCrumbs = [['Home', '/'], ['Free tools', '/tools/'], ['Google Business Profile checker', gUrl]];
  const gTotal = GBP_CHECKS.reduce((n, g) => n + g.items.reduce((m, it) => m + it[1], 0), 0);
  out.push({
    urlPath: gUrl, title: 'Google Business Profile Checker & Score | Elyx', description: 'Free Google Business Profile checker: score your profile out of 100 and see which fixes will help you rank in Google Maps and "near me" searches.',
    crumbs: gCrumbs, graph: [toolSchema('Google Business Profile checker', gUrl, 'Score your Google Business Profile and see what to fix first.')],
    ogKey: 'tools-google-business-profile-checker', ogKicker: 'Free tool', ogHeadline: 'Google Business Profile checker', priority: 0.7, changefreq: 'monthly',
    scripts: '\n<script src="/js/tools.js"></script>',
    main: `${S.pageHero({ crumbs: gCrumbs, eyebrow: 'Free tool', h1: 'Google Business Profile <span class="serif-i">checker.</span>', lead: 'Open your profile in another tab and tick what is true. You get a score out of 100 and the three fixes that matter most.' })}
<section class="pg pg--tool"><div class="pg__in pg__in--narrow">
  <div class="chk gbp" data-tool="gbp" data-total="${gTotal}">
    ${GBP_CHECKS.map((g) => '<fieldset class="chk__group"><legend>' + esc(g.g) + '</legend>' + g.items.map((it) => '<label class="opt"><input type="checkbox" class="chk__box" data-w="' + it[1] + '" /><span>' + esc(it[0]) + '</span></label>').join('') + '</fieldset>').join('')}
    <div class="gbp__result" aria-live="polite"><div class="gbp__score"><b id="gbpScore">0</b><span>/100</span></div><p id="gbpVerdict">Tick what is true about your profile to see your score.</p><ol class="gbp__fixes" id="gbpFixes"></ol></div>
  </div>
</div></section>
${S.section('pg--tint', '<div class="inline-ctas inline-ctas--center"><p class="prose-p">Want us to set up and optimise your profile and the website that backs it?</p>' + S.btn('See SEO services', '/services/seo-optimization/', 'blue', 'gbp-foot') + '</div>')}
${S.ctaSection()}`
  });

  return out;
}

module.exports = { toolsPages, LAUNCH_CHECKLIST, GBP_CHECKS };
