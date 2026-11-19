'use strict';
/* Service, industry, case-study, pricing and location pages. */
const { config, pricing, esc, inr, abs } = require('./lib');
const chrome = require('./chrome');
const S = require('./shell');
const services = require('./data/services');
const industries = require('./data/industries');
const work = require('./data/work');

const svcBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
const indBySlug = Object.fromEntries(industries.map((s) => [s.slug, s]));
const workBySlug = Object.fromEntries(work.map((s) => [s.slug, s]));
const SERVICE_VALUE = { 'web-development': 'Web Development', 'saas-development': 'SaaS Development', 'app-development': 'App Development', 'seo-optimization': 'SEO Optimization', 'maintenance-care': 'Maintenance & Care' };

const links = (arr, base, map) => arr.map((s) => '<a class="chip" href="' + base + s + '/"><span class="dot"></span>' + esc(map[s].name) + '</a>').join('');

/* ============================================================== SERVICES */
function servicePages(ctx) {
  return services.map((s, idx) => {
    const url = '/services/' + s.slug + '/';
    const c = workBySlug[s.case];
    const crumbs = [['Home', '/'], ['Services', '/services.html'], [s.name, url]];
    const main = `${S.pageHero({
      crumbs,
      eyebrow: 'Service 0' + (idx + 1) + ' · ' + s.name,
      h1: s.h1,
      lead: s.answer,
      ctas: S.btn('Get a quote', '/contact.html?service=' + s.slug, 'blue', 'hero') + S.btnPlain('See pricing', '#pricing', 'ghost', 'hero'),
      chips: services.filter((x) => x.slug !== s.slug).map((x) => '<a class="chip" href="/services/' + x.slug + '/"><span class="dot"></span>' + esc(x.name) + '</a>').join('')
    })}
<section class="pg pg--lead"><div class="pg__in pg__in--narrow">
  <p class="audience"><b>Who this is for:</b> ${esc(s.audience)}</p>
  ${s.intro.map((t) => '<p class="prose-p">' + t + '</p>').join('\n  ')}
</div></section>
${S.section('', S.sectionHead('What you get', s.includedTitle) + '<div class="fgrid">' + s.included.map((i, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + esc(i.t) + '</h3><p>' + esc(i.d) + '</p></div>').join('') + '</div>')}
${S.section('pg--tint', S.sectionHead('Process', s.processTitle, 'Our usual flow is a short discovery call, a scoped proposal, design, a build with two rounds of feedback, QA on staging, then launch. You are looped in at every stage.') +
      '<ol class="psteps">' + s.process.map((p, n) => '<li class="pstep"><span class="pstep__n">' + (n + 1) + '</span><div><h3>' + esc(p.t) + ' <small>' + esc(p.time) + '</small></h3><p>' + esc(p.d) + '</p></div></li>').join('') + '</ol>')}
${S.section('', S.sectionHead('Pricing & timeline', s.priceTitle) + S.priceTable(s.pricingKeys) +
      '<p class="prose-p prose-p--wide">' + esc(s.priceNote) + '</p><p class="prose-p prose-p--wide"><b>Timeline.</b> ' + esc(s.timelineText) + '</p>' +
      '<div class="inline-ctas">' + S.btn('Request a quote', '/contact.html?service=' + s.slug, 'blue', 'pricing-block') + S.btnPlain('Estimate it yourself', '/tools/website-cost-calculator/', 'ghost', 'pricing-block') + '</div>', 'pricing')}
${S.section('pg--tint', S.sectionHead('Related work', 'A build you can <span class="serif-i">look at.</span>') + '<div class="casewrap">' + S.caseCard(c, 'Related case study') + '</div>')}
${S.section('', S.sectionHead('Who we do this for', 'Industries we <span class="serif-i">build for.</span>') + '<div class="page-hero__chips">' + links(s.industries, '/websites-for/', indBySlug) + '</div>')}
${S.articlesSection(ctx.postsFor(url, s.blogCategory), 'Read before you decide')}
${S.faqBlock(s.faqs)}
${S.ctaSection(null, null, s.slug)}`;
    const ldGraph = [
      {
        '@type': 'Service', '@id': abs(url + '#service'), name: s.name, serviceType: s.name, url: abs(url),
        description: s.description, provider: { '@id': abs('/#organization') },
        areaServed: { '@type': 'Country', name: 'India' },
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: String(pricing.startingPrice), description: 'Engagements start at ₹' + pricing.startingPrice.toLocaleString('en-IN') }
      },
      S.faqGraph(s.faqs)
    ].filter(Boolean);
    return { urlPath: url, title: s.title, description: s.description, crumbs, graph: ldGraph, main, ogKey: 'services-' + s.slug, ogKicker: 'Service', ogHeadline: s.name, priority: 0.9, changefreq: 'monthly' };
  });
}

/* ============================================================ INDUSTRIES */
function wireframe(layout) {
  return '<div class="wire" aria-label="Typical page structure">' +
    '<div class="wire__bar"><i></i><i></i><i></i><span></span></div>' +
    layout.map((l, i) => '<div class="wire__block' + (i === 0 ? ' wire__block--hero' : '') + '"><span>' + esc(l) + '</span></div>').join('') + '</div>';
}

function industryPages(ctx) {
  const out = [];
  industries.forEach((it) => {
    const url = '/websites-for/' + it.slug + '/';
    const c = workBySlug[it.relatedCase];
    const crumbs = [['Home', '/'], ['Websites for', '/websites-for/'], [it.name, url]];
    const main = `${S.pageHero({
      crumbs, eyebrow: 'Websites for ' + it.name.toLowerCase(), h1: it.h1, lead: it.answer,
      ctas: S.btn('Get a quote', '/contact.html?service=web-development', 'blue', 'hero') + S.btn('WhatsApp us', chrome.waUrl || '/contact.html#book', 'ghost', 'hero', chrome.waUrl ? ' target="_blank" rel="noopener" data-track="whatsapp_click"' : '').replace('data-track="cta_click" ', '')
    })}
<section class="pg pg--lead"><div class="pg__in pg__in--narrow">
  <p class="audience"><b>Who this is for:</b> ${esc(it.audience)}</p>
</div></section>
${S.section('', S.sectionHead('What your site needs', 'What a site for ' + esc(it.name.toLowerCase()) + ' <span class="serif-i">actually needs.</span>') + '<div class="fgrid">' + it.needs.map((i, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + esc(i.t) + '</h3><p>' + esc(i.d) + '</p></div>').join('') + '</div>')}
${S.section('pg--tint', '<div class="split"><div>' + S.sectionHead('Typical page structure', 'How the page <span class="serif-i">flows.</span>', 'Every site is designed around your business, but this is the order that works for most ' + esc(it.short.toLowerCase()) + ': promise first, proof next, one clear action at every step.') + (it.regNote ? '<p class="note"><b>Worth knowing.</b> ' + esc(it.regNote) + '</p>' : '') + '</div>' + wireframe(it.layout) + '</div>')}
${S.section('', S.sectionHead('Pricing', it.startPrice.replace('From ', 'From <span class="serif-i">') + '</span>', 'Engagements start at ' + inr(pricing.startingPrice) + '. A one-page site is the fastest way in; a fuller site with a CMS, booking or payments is quoted in writing after a short call.') + S.priceTable(it.pricingKeys) + '<div class="inline-ctas">' + S.btn('Request a quote', '/contact.html?service=web-development', 'blue', 'pricing-block') + S.btnPlain('Estimate the cost', '/tools/website-cost-calculator/', 'ghost', 'pricing-block') + '</div>')}
${c ? S.section('pg--tint', S.sectionHead('Related build', 'Closest work <span class="serif-i">we have shipped.</span>') + '<div class="casewrap">' + S.caseCard(c, 'Related project') + '</div>') : ''}
${S.section('', S.sectionHead('Services involved', 'How we <span class="serif-i">deliver</span> it.') + '<div class="page-hero__chips">' + links(it.relatedServices, '/services/', svcBySlug) + '</div>')}
${S.articlesSection(ctx.postsForIndustry(it.slug, url), 'Guides for ' + esc(it.name.toLowerCase()))}
${S.faqBlock(it.faqs)}
${S.ctaSection(null, null, 'web-development')}`;
    out.push({
      urlPath: url, title: it.title, description: it.description, crumbs,
      graph: [{ '@type': 'Service', '@id': abs(url + '#service'), name: 'Website development for ' + it.name.toLowerCase(), serviceType: 'Website development', url: abs(url), description: it.description, provider: { '@id': abs('/#organization') }, areaServed: { '@type': 'Country', name: 'India' }, offers: { '@type': 'Offer', priceCurrency: 'INR', price: String(pricing.startingPrice) } }, S.faqGraph(it.faqs)].filter(Boolean),
      main, ogKey: 'websites-for-' + it.slug, ogKicker: 'Websites for', ogHeadline: it.name, priority: 0.8, changefreq: 'monthly'
    });
  });

  /* hub */
  const hubCrumbs = [['Home', '/'], ['Websites for', '/websites-for/']];
  const hubMain = `${S.pageHero({
    crumbs: hubCrumbs, eyebrow: 'Industries', h1: 'A website built for <span class="serif-i">your kind</span> of business.',
    lead: 'Generic templates make every business look the same. Each page below shows what a website for that trade actually needs: the booking flow, the trust signals, the Indian specifics.',
    ctas: S.btn('Talk to us', '/contact.html', 'blue', 'hero') + S.btnPlain('See pricing', '/pricing/', 'ghost', 'hero')
  })}
${S.section('', '<div class="tilegrid">' + industries.map((it) => `<a class="tcard" href="/websites-for/${it.slug}/"><span class="tcard__ic">${chrome.svg24(it.icon)}</span><h3>${esc(it.name)}</h3><p>${esc(it.answer.split('. ')[0].replace(/[.]$/, ''))}.</p><span class="tcard__more">See the page ${chrome.ARROW}</span></a>`).join('') + '</div>')}
${S.ctaSection()}`;
  out.push({ urlPath: '/websites-for/', title: 'Websites for Your Industry in India | Elyx', description: 'Website playbooks for clinics, coaching centres, restaurants, salons, real estate and CA or law firms, built by a three-person Bengaluru studio from ₹9,999.', crumbs: hubCrumbs, main: hubMain, ogKey: 'websites-for', ogKicker: 'Industries', ogHeadline: 'Websites for your industry', priority: 0.8, changefreq: 'monthly' });
  return out;
}

/* ============================================================== WORK */
function casePages(ctx) {
  return work.filter((w) => !w.external).map((w) => {
    const url = '/work/' + w.slug + '/';
    const crumbs = [['Home', '/'], ['Work', '/work.html'], [w.shortName, url]];
    const metrics = w.metrics && w.metrics.length ? '<div class="why__band metrics">' + w.metrics.map((m) => '<div class="stat"><div class="stat__n">' + esc(m.n) + '<span class="u">' + esc(m.u || '') + '</span></div><div class="stat__l">' + esc(m.l) + '</div></div>').join('') + '</div>' : '';
    const others = work.filter((x) => x.slug !== w.slug && !x.external);
    const main = `${S.pageHero({
      crumbs, eyebrow: 'Case study · ' + w.category, h1: w.h1, lead: esc(w.summary),
      ctas: S.btn('Visit the live site', w.liveUrl, 'blue', 'case-hero', ' target="_blank" rel="noopener"') + S.btnPlain('Start a similar project', '/contact.html?service=' + w.services[0], 'ghost', 'case-hero')
    })}
<section class="pg pg--tight"><div class="pg__in">
  <div class="casehero casehero--${w.tint}"><span class="casehero__mono">${esc(w.mono)}</span><span class="casehero__live">${esc(w.liveLabel)} ↗</span></div>
  <dl class="meta">
    <div><dt>Client</dt><dd>${esc(w.client)}</dd></div>
    <div><dt>Type</dt><dd>${esc(w.category)}</dd></div>
    <div><dt>Services</dt><dd>${w.services.map((s) => '<a href="/services/' + s + '/">' + esc(svcBySlug[s].name) + '</a>').join(', ')}</dd></div>
    ${w.timelineTotal ? '<div><dt>Timeline</dt><dd>' + esc(w.timelineTotal) + '</dd></div>' : ''}
  </dl>
</div></section>
${S.section('pg--lead', '<div class="split split--text"><div>' + S.sectionHead('The brief', 'What they <span class="serif-i">needed.</span>') + '</div><div>' + w.problem.map((t) => '<p class="prose-p">' + esc(t) + '</p>').join('') + '</div></div>')}
${S.section('pg--tint', S.sectionHead('What we built', 'What <span class="serif-i">shipped.</span>') + '<div class="fgrid fgrid--2">' + w.built.map((i, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + esc(i.t) + '</h3><p>' + esc(i.d) + '</p></div>').join('') + '</div>')}
${S.section('', S.sectionHead('How it ran', 'The <span class="serif-i">timeline.</span>', w.timelineTotal ? w.timelineTotal + '.' : 'Our usual flow from first call to launch.') + '<ol class="psteps">' + w.timeline.map((p, n) => '<li class="pstep"><span class="pstep__n">' + (n + 1) + '</span><div><h3>' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p></div></li>').join('') + '</ol>')}
${(metrics || w.quote) ? S.section('pg--dark', S.sectionHead('Results', 'What the client <span class="serif-i">says.</span>') + metrics + (w.quote ? '<figure class="bigquote"><blockquote>“' + esc(w.quote.text) + '”</blockquote><figcaption><b>' + esc(w.quote.name) + '</b><span>' + esc(w.quote.role) + '</span></figcaption></figure>' : '')) : ''}
${S.section('', S.sectionHead('More work', 'Other <span class="serif-i">projects.</span>') + '<div class="casewrap casewrap--2">' + others.map((o) => S.caseCard(o)).join('') + '</div>')}
${w.industry ? S.section('pg--tint', '<div class="inline-ctas inline-ctas--center"><p class="prose-p">Running a business like this one? See what a site for <b>' + esc(indBySlug[w.industry].name.toLowerCase()) + '</b> needs.</p>' + S.btnPlain('Websites for ' + esc(indBySlug[w.industry].name.toLowerCase()), '/websites-for/' + w.industry + '/', 'ghost', 'case-industry') + '</div>') : ''}
${ctx.postsFor ? S.articlesSection(ctx.postsForCase(w.slug), 'Related reading') : ''}
${S.ctaSection(null, null, w.services[0])}`;
    return {
      urlPath: url, title: w.title, description: w.description, crumbs,
      graph: [{ '@type': 'WebPage', '@id': abs(url + '#webpage'), url: abs(url), name: w.title, description: w.description, about: { '@type': 'Thing', name: w.client } }],
      main, ogKey: 'work-' + w.slug, ogKicker: 'Case study', ogHeadline: w.shortName, priority: 0.8, changefreq: 'monthly'
    };
  });
}

/* ============================================================ PRICING */
const PRICING_FAQS = [
  { q: 'What is the minimum I can spend with Elyx?', a: 'Engagements start at ₹9,999 for a focused landing page or redesign, and that is the starting price across every service. Final pricing scales with scope, and we always quote it up front in writing.' },
  { q: 'Do you charge by the hour?', a: 'No. We price by outcome, not by the hour. You get a fixed scope, timeline and price before any work begins, with no surprise line items mid-project.' },
  { q: 'How do payments work?', a: '50% upfront to begin and 50% on final delivery, covered by a straightforward statement of work with scope, deliverables, timeline and revision rounds. No retainer lock-ins unless you want one.' },
  { q: 'Is GST included in the price?', a: 'Prices on this site are in INR and exclusive of taxes. GST is added at the applicable rate (currently 18% for software services) on the invoice.' },
  { q: 'What does the Launch tier include?', a: 'Discovery and scoping, design and build of one service, launch and handover, and 30 days of post-launch support.' },
  { q: 'What if my project grows after we start?', a: 'Changes to scope are discussed and priced before we do them, so nothing is added to the bill silently. Many clients start with the Launch tier and move to Build or Partner as the project grows.' },
  { q: 'Can I get a rough number before a call?', a: 'Yes. Use the <a href="/tools/website-cost-calculator/">website cost calculator</a> for an indicative range in a minute, then we confirm it properly in writing.' }
];

function pricingPage(ctx) {
  const url = '/pricing/';
  const crumbs = [['Home', '/'], ['Pricing', url]];
  const tier = (name, badge, price, desc, feats, btnHtml, featured) => `<div class="ptier${featured ? ' featured' : ''}" id="${name.toLowerCase()}">
  <div class="ptier__top"><span class="ptier__name">${name}</span>${badge ? '<span class="ptier__badge">' + badge + '</span>' : ''}</div>
  <div class="ptier__price">${price}</div>
  <p class="ptier__desc">${desc}</p>
  <ul class="ptier__feats">${feats.map((f) => '<li>' + S.CHECK + f + '</li>').join('')}</ul>
  ${btnHtml}
</div>`;
  const main = `${S.pageHero({
    crumbs, eyebrow: 'Pricing', h1: 'Simple pricing. <span class="serif-i">Serious</span> value.',
    lead: 'Every engagement is scoped to exactly what you need, and it all starts from one honest number: ' + inr(pricing.startingPrice) + '. You get a fixed quote in writing before any work begins.',
    ctas: S.btn('Get a quote', '/contact.html', 'blue', 'hero') + S.btnPlain('Try the cost calculator', '/tools/website-cost-calculator/', 'ghost', 'hero')
  })}
<section class="pricing pricing--page" id="tiers" data-screen-label="Pricing">
  <div class="deco deco-dark" data-parallax="0.12" aria-hidden="true"><span class="orb orb-a"></span><span class="orb orb-b"></span></div>
  <div class="pricing__in">
    <div class="price-anchor">
      <div class="price-anchor__k">Engagements start at</div>
      <div class="price-anchor__n"><span class="price-anchor__cur">₹</span>9,999</div>
      <p class="price-anchor__sub">One starting price across <b>every</b> service: design, build, SEO and care. Final pricing scales with scope, and we'll always quote it up front.</p>
    </div>
    <div class="ptiers">
      ${tier('Launch', 'Starter', '<span class="cur">₹</span>9,999<span class="from">from</span>', 'A focused build to get a polished product or site live, fast.', ['Discovery &amp; scoping', 'Design &amp; build of one service', 'Launch &amp; handover', '30 days post-launch support'], '<a class="btn btn--light" href="/contact.html" data-track="cta_click" data-pos="pricing-launch">Get started</a>', true)}
      ${tier('Build', '', '<span class="from" style="margin-bottom:0">Custom</span>', 'A full product across multiple services, designed and engineered end to end.', ['Everything in Launch', 'Multi-service scope', 'All three of us on it', 'SEO &amp; growth setup'], '<a class="btn btn--ghost" href="/contact.html" data-track="cta_click" data-pos="pricing-build" style="border-color:rgba(255,255,255,0.2);color:#fff">Request a quote</a>')}
      ${tier('Partner', '', '<span class="from" style="margin-bottom:0">Let\'s talk</span>', 'An ongoing partnership: we build, maintain and grow with you, month after month.', ['Everything in Build', 'Ongoing maintenance &amp; care', 'Quarterly roadmap &amp; reviews', 'Priority response SLA'], '<a class="btn btn--ghost" href="/contact.html#book" data-track="cta_click" data-pos="pricing-partner" style="border-color:rgba(255,255,255,0.2);color:#fff">Book a call</a>')}
    </div>
    <p class="pricing__note">${esc(pricing.gstNote)} Final scope and pricing confirmed before any work begins.</p>
  </div>
</section>
${S.section('', S.sectionHead('Sample ranges', 'What typical projects <span class="serif-i">cost.</span>', 'These ranges come from the kinds of projects we take on. Your exact quote depends on scope and is always confirmed in writing first.') + S.priceTable(Object.keys(pricing.projects).concat(Object.keys(pricing.monthly))))}
${S.section('pg--tint', S.sectionHead('What changes the price', 'Five things that <span class="serif-i">move a quote.</span>') + '<div class="fgrid">' + [
    ['Size', 'The number of pages, screens or modules. A five-page site and a fifty-page catalogue are different projects.'],
    ['Features', 'Online booking, UPI and card payments, user accounts, admin dashboards and integrations each add real engineering work.'],
    ['Content', 'Whether you supply the copy and photography or want us to write and source them.'],
    ['Speed', 'A rush timeline means reshuffling our calendar. We tell you the premium before you decide.'],
    ['Ongoing care', 'Maintenance, SEO and iteration after launch are scoped as a monthly plan, separate from the build.']
  ].map((r, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + r[0] + '</h3><p>' + r[1] + '</p></div>').join('') + '</div>')}
${S.section('', S.sectionHead('How we quote', 'No surprises, <span class="serif-i">in writing.</span>') + '<ol class="psteps">' + [
    ['Short discovery call', 'We learn about the business, the goal and the constraints. No sales runaround.'],
    ['Scoped proposal', 'A written scope with deliverables, timeline and a fixed price.'],
    ['50% to begin', 'Work starts once you approve the proposal and the first half is paid.'],
    ['50% on delivery', 'The balance is due on final delivery, after your staging review.']
  ].map((p, n) => '<li class="pstep"><span class="pstep__n">' + (n + 1) + '</span><div><h3>' + p[0] + '</h3><p>' + p[1] + '</p></div></li>').join('') + '</ol>')}
${S.articlesSection(ctx.postsFor(url, 'pricing-hiring'), 'Cost guides')}
${S.faqBlock(PRICING_FAQS, 'Pricing <span class="serif-i">questions.</span>')}
${S.ctaSection()}`;
  return {
    urlPath: url, title: 'Website & App Development Pricing in India | Elyx',
    description: 'Transparent web, app, SaaS and SEO pricing from Elyx: engagements start at ₹9,999, quoted in writing before work begins. See typical ranges and what changes a quote.',
    crumbs, graph: [S.faqGraph(PRICING_FAQS), { '@type': 'OfferCatalog', name: 'Elyx Solutions pricing', itemListElement: Object.keys(pricing.projects).map((k) => ({ '@type': 'Offer', name: pricing.projects[k].label, priceCurrency: 'INR', price: String(pricing.projects[k].low), description: 'Typical range ' + inr(pricing.projects[k].low) + ' to ' + inr(pricing.projects[k].high) })) }].filter(Boolean),
    main, ogKey: 'pricing', ogKicker: 'Pricing', ogHeadline: 'Engagements from ₹9,999', priority: 0.9, changefreq: 'monthly'
  };
}

/* ============================================================ LOCATION */
function locationPage(ctx) {
  const url = '/web-development-bengaluru/';
  const crumbs = [['Home', '/'], ['Web development in Bengaluru', url]];
  const faqs = [
    { q: 'Are you based in Bengaluru?', a: 'Yes. Elyx Solutions is a three-person studio based in Bengaluru. We work with clients across India, and with local businesses we are happy to meet in person.' },
    { q: 'How much does a website cost in Bengaluru?', a: 'Engagements start at ₹9,999 for a landing page or redesign. A multi-page business site, an online store or a custom web app is quoted in writing after a short call. See <a href="/pricing/">pricing</a> for typical ranges.' },
    { q: 'Do you work with businesses outside Bengaluru?', a: 'Yes. Most of our work is done remotely with calls and screen shares, so location rarely matters. Ashirwad Dental and Malnad Stories were both built that way.' },
    { q: 'Can you help my business show up on Google Maps?', a: 'Yes. We set up and optimise your Google Business Profile alongside your website so both send the same signals. See our <a href="/services/seo-optimization/">SEO service</a>.' }
  ];
  const main = `${S.pageHero({
    crumbs, eyebrow: 'Bengaluru', h1: 'Web development in Bengaluru, <span class="serif-i">by three founders.</span>',
    lead: 'Elyx is a three-person digital studio in Bengaluru. We design, build and maintain websites, apps and SaaS products for local businesses and founders, and the people you meet on the first call are the people who do the work.',
    ctas: S.btn('Start a project', '/contact.html', 'blue', 'hero') + S.btnPlain('Book a call', S.bookHref, 'ghost', 'hero')
  })}
<section class="pg pg--lead"><div class="pg__in pg__in--narrow">
  <p class="prose-p">Bengaluru is full of businesses that live or die by local search: clinics in Indiranagar, coaching centres in Jayanagar, cafés in Koramangala, studios and consultancies across the city. When someone searches "dentist near me" or "web developer in Bengaluru", the businesses that show up are the ones with a fast site, a complete Google Business Profile and pages that match what people searched for.</p>
  <p class="prose-p">That is the work we do. We build the website, set up the local signals around it, and keep it running. Because we are a team of three with no account managers, decisions are quick and you always speak to someone who knows the project.</p>
</div></section>
${S.section('', S.sectionHead('What we do locally', 'Everything a Bengaluru business <span class="serif-i">needs to be found.</span>') + '<div class="fgrid">' + services.map((s, n) => '<a class="fcard fcard--link" href="/services/' + s.slug + '/"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + esc(s.name) + '</h3><p>' + esc(s.description) + '</p></a>').join('') + '</div>')}
${S.section('pg--tint', S.sectionHead('Local trust', 'How local <span class="serif-i">search works</span> for a small business.') + '<div class="fgrid fgrid--2">' + [
    ['Google Business Profile', 'Your profile, categories, photos, hours and reviews decide whether you show up on Maps and in "near me" results. We set it up with you and keep it consistent with the website.'],
    ['Consistent address and phone', 'The same business name, address and phone number everywhere (site, profile, directories) is a basic local ranking signal. We make sure it matches.'],
    ['Pages for what people search', 'A page for every service and every customer type you serve, written for one specific search and one clear next step.'],
    ['Reviews and proof', 'Real reviews and real projects build trust with both customers and search engines. We help you ask for them in a way that works.']
  ].map((r, n) => '<div class="fcard"><span class="fcard__n">0' + (n + 1) + '</span><h3>' + r[0] + '</h3><p>' + r[1] + '</p></div>').join('') + '</div>')}
${S.section('', '<div class="split split--text"><div>' + S.sectionHead('Find us', 'Based in <span class="serif-i">Bengaluru.</span>') + '</div><div>' +
    (chrome.addressLine() ? '<p class="prose-p"><b>Address:</b> ' + esc(chrome.addressLine()) + (config.mapUrl ? ' · <a href="' + esc(config.mapUrl) + '" target="_blank" rel="noopener">Open in Maps</a>' : '') + '</p>' : '<p class="prose-p">Elyx Solutions, Bengaluru, Karnataka, India. We work with clients across India and meet local clients in person.</p>') +
    (config.phone ? '<p class="prose-p"><b>Phone:</b> <a href="' + chrome.telUrl + '" data-track="call_click" data-pos="location">' + esc(config.phone) + '</a>' + (config.phoneSecondary ? ' · <a href="' + chrome.tel2Url + '" data-track="call_click" data-pos="location">' + esc(config.phoneSecondary) + '</a>' : '') + '</p>' : '') +
    (chrome.waUrl ? '<p class="prose-p"><b>WhatsApp:</b> <a href="' + chrome.waUrl + '" target="_blank" rel="noopener" data-track="whatsapp_click" data-pos="location">Chat with us</a></p>' : '') +
    '<p class="prose-p"><b>Email:</b> <a href="mailto:' + esc(config.email) + '">' + esc(config.email) + '</a></p></div></div>')}
${S.section('pg--tint', S.sectionHead('Work', 'Recent <span class="serif-i">projects.</span>') + '<div class="casewrap casewrap--3">' + work.map((w) => S.caseCard(w)).join('') + '</div>')}
${S.faqBlock(faqs)}
${S.ctaSection()}`;
  return {
    urlPath: url, title: 'Web Development in Bengaluru | Elyx Solutions',
    description: 'Elyx is a three-person web, app and SaaS studio in Bengaluru. Websites from ₹9,999, local SEO and Google Business Profile setup, built by the founders.',
    crumbs, graph: [S.faqGraph(faqs)], main, ogKey: 'web-development-bengaluru', ogKicker: 'Bengaluru', ogHeadline: 'Web development in Bengaluru', priority: 0.9, changefreq: 'monthly'
  };
}

module.exports = { servicePages, industryPages, casePages, pricingPage, locationPage, SERVICE_VALUE };
