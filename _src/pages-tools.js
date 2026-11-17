'use strict';
/* Free tools: website cost calculator (₹), website launch checklist, Google Business Profile checker. */
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
    ['website-cost-calculator', 'Website cost calculator', 'Get an indicative price range in ₹ for a website, store, web app, mobile app or SaaS MVP in about a minute.'],
    ['website-launch-checklist', 'Website launch checklist', '25 checks to run before you go live: domain, speed, enquiry paths, search, tracking and compliance. Your progress saves in your browser.'],
    ['google-business-profile-checker', 'Google Business Profile checker', 'Score your Google Business Profile out of 100 and see exactly which fixes will move you up in "near me" searches first.']
  ];
  out.push({
    urlPath: '/tools/', title: 'Free Tools for Indian Small Businesses | Elyx', description: 'Free tools from Elyx: a website cost calculator in ₹, a website launch checklist and a Google Business Profile checker for small businesses in India.',
    crumbs: hubCrumbs, ogKey: 'tools', ogKicker: 'Free tools', ogHeadline: 'Free tools for small businesses', priority: 0.7, changefreq: 'monthly',
    main: `${S.pageHero({ crumbs: hubCrumbs, eyebrow: 'Free tools', h1: 'Small tools for the moment you <span class="serif-i">decide to go online.</span>', lead: 'No sign-up, no email gate. Use them, then talk to us if you want a hand.' })}
${S.section('', '<div class="tilegrid">' + tools.map((t, i) => `<a class="tcard" href="/tools/${t[0]}/"><span class="tcard__ic">${chrome.svg24(['<path d="M6 4h12v16H6zM9 8h6M9 12h2M13 12h2M9 16h2M13 16h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>', '<path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>', '<path d="M12 21s7-6.2 7-11.2A7 7 0 005 9.8C5 14.8 12 21 12 21z M12 12.2a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>'][i])}</span><h3>${t[1]}</h3><p>${t[2]}</p><span class="tcard__more">Open the tool ${chrome.ARROW}</span></a>`).join('') + '</div>')}
${S.ctaSection()}`
  });

  /* ------------------------------------------------- calculator */
  const cUrl = '/tools/website-cost-calculator/';
  const cCrumbs = [['Home', '/'], ['Free tools', '/tools/'], ['Website cost calculator', cUrl]];
  const cFaqs = [
    { q: 'How accurate is the estimate?', a: 'It is an indicative range based on the kinds of projects we take on, not a quote. The final price depends on scope and is confirmed in writing after a short call.' },
    { q: 'Does the estimate include GST?', a: 'No. Prices are in INR and exclusive of GST, which is currently 18% on software services.' },
    { q: 'What is the minimum I can spend?', a: 'Engagements start at ' + inr(pricing.startingPrice) + ' for a focused landing page or redesign.' },
    { q: 'What if my project does not fit the options?', a: 'Pick the closest type, then send us the estimate. We will scope the rest in the discovery call.' }
  ];
  const data = JSON.stringify({ projects: pricing.projects, extraUnit: pricing.extraUnit, features: pricing.features, rush: pricing.rushMultiplier, monthly: pricing.monthly, start: pricing.startingPrice }).replace(/</g, '\\u003c');
  out.push({
    urlPath: cUrl, title: 'Website Cost Calculator in ₹ (India) | Elyx', description: 'Free website cost calculator for India: estimate what a landing page, business site, online store, web app, mobile app or SaaS MVP costs in rupees.',
    crumbs: cCrumbs, graph: [toolSchema('Website cost calculator', cUrl, 'Estimate the cost of a website, app or SaaS product in INR.'), S.faqGraph(cFaqs)],
    ogKey: 'tools-website-cost-calculator', ogKicker: 'Free tool', ogHeadline: 'Website cost calculator (₹)', priority: 0.8, changefreq: 'monthly',
    scripts: '\n<script src="/js/tools.js"></script>',
    main: `${S.pageHero({ crumbs: cCrumbs, eyebrow: 'Free tool', h1: 'Website cost calculator, <span class="serif-i">in rupees.</span>', lead: 'Choose what you want to build and add the features you need. You get an indicative range and timeline in about a minute.' })}
<section class="pg pg--tool"><div class="pg__in">
  <div class="calc" data-tool="calculator">
    <div class="calc__form">
      <fieldset class="calc__block"><legend>1. What are you building?</legend><div class="calc__types" id="calcTypes"></div></fieldset>
      <fieldset class="calc__block" id="calcExtraWrap" hidden><legend id="calcExtraLegend">2. Size</legend>
        <div class="calc__range"><input type="range" id="calcExtra" min="0" max="20" value="0" /><output id="calcExtraOut">0</output></div>
        <p class="calc__hint" id="calcExtraHint"></p></fieldset>
      <fieldset class="calc__block"><legend>3. Features you need</legend><div class="calc__feats" id="calcFeats"></div></fieldset>
      <fieldset class="calc__block"><legend>4. Timeline</legend>
        <label class="opt"><input type="radio" name="calcTime" value="std" checked /><span>Standard timeline</span></label>
        <label class="opt"><input type="radio" name="calcTime" value="rush" /><span>I need it faster (rush, +25%)</span></label></fieldset>
    </div>
    <aside class="calc__result" aria-live="polite">
      <span class="calc__k">Indicative estimate</span>
      <div class="calc__range-out" id="calcOut">-</div>
      <div class="calc__meta"><span id="calcWeeks"></span></div>
      <p class="calc__note">${esc(pricing.gstNote)} A starting point, not a quote.</p>
      <a class="btn btn--blue" id="calcSend" href="/contact.html" data-track="cta_click" data-pos="calculator">Send this estimate to Elyx ${chrome.ARROW}</a>
      <a class="calc__link" href="/pricing/">See how we price →</a>
    </aside>
  </div>
  <script type="application/json" id="calcData">${data}</script>
</div></section>
${S.section('pg--tint', S.sectionHead('How to read it', 'Numbers you can <span class="serif-i">plan with.</span>') + '<div class="fgrid fgrid--2">' + [
      ['A range, not a promise', 'The low end assumes a tight scope and quick feedback. The high end assumes more pages, more revisions or more integrations.'],
      ['What moves it', 'Size, features, who writes the content and how fast you need it. See <a href="/pricing/">pricing</a> for the full list.'],
      ['Ongoing costs', 'Hosting, a domain and a care plan are separate from the build. Ask us what your project will need.'],
      ['Next step', 'Send the estimate to us. We reply within one business day with a clear next step.']
    ].map((r, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + r[0] + '</h3><p>' + r[1] + '</p></div>').join('') + '</div>')}
${S.faqBlock(cFaqs)}
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
