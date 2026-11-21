'use strict';
/* Shared site chrome: <head> extras, nav, mega menus, mobile menu, footer, floating WhatsApp
   button and tracking scripts. Used for every page, so editing it here updates the whole site. */
const { config, pricing, esc, abs } = require('./lib');
const services = require('./data/services');
const industries = require('./data/industries');
const work = require('./data/work');

const ARROW = '<svg class="arr" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3 10L10 3M10 3H4M10 3v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
const CARET = '<svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
const svg24 = (inner) => '<svg viewBox="0 0 24 24" fill="none">' + inner + '</svg>';

const waDigits = String(config.whatsapp || '').replace(/\D/g, '');
const waUrl = waDigits ? 'https://wa.me/' + waDigits + '?text=' + encodeURIComponent(config.whatsappMessage || '') : '';
const telUrl = config.phone ? 'tel:' + String(config.phone).replace(/[^\d+]/g, '') : '';
const tel2Url = config.phoneSecondary ? 'tel:' + String(config.phoneSecondary).replace(/[^\d+]/g, '') : '';

const addressLine = () => {
  const a = config.address || {};
  return [a.street, a.locality, a.region, a.postalCode].filter(Boolean).join(', ');
};

/* ---------------------------------------------------------------- nav */
function tile(href, icon, title) {
  return '<a class="mtile" href="' + href + '"><span class="mtile__ic">' + svg24(icon) + '</span><span><span class="mtile__t">' + title + '</span></span></a>';
}
const PRICING_ICON = '<path d="M4 14l5-5 4 4 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 6v4h-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>';

function nav({ home }) {
  const svc = services.map((s) => tile('/services/' + s.slug + '/', s.icon, esc(s.name))).join('') +
    tile('/pricing/', PRICING_ICON, 'Pricing');
  const ind = industries.map((s) => tile('/websites-for/' + s.slug + '/', s.icon, esc(s.name))).join('');
  const wc = work.map((w) => {
    const meta = '<div class="wcard__meta"><div class="wcard__t">' + esc(w.shortName) + '</div><div class="wcard__c">' + esc(w.category) + '</div></div>';
    if (w.thumb) return '<a class="wcard" href="' + (w.external ? esc(w.liveUrl) + '" target="_blank" rel="noopener' : '/work/' + w.slug + '/') + '"><div class="wcard__img"><img src="' + esc(w.thumb) + '" alt="' + esc(w.shortName) + ' website" width="1000" height="750" loading="lazy" decoding="async" /></div>' + meta + '</a>';
    return '<a class="wcard" href="/work/' + w.slug + '/"><div class="wcard__img ph wcard__img--' + w.tint + '"></div>' + meta + '</a>';
  }).join('');

  return `<div class="nav-shell${home ? '' : ' scrolled'}" id="navShell">
  <a class="brand nav__brand" href="${home ? '#top' : '/'}" aria-label="Elyx Solutions home">
    <svg class="brand__mark" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <g transform="skewX(-10)">
        <rect x="7" y="4" width="15" height="4.4" rx="1.2" fill="#1f4fd8"></rect>
        <rect x="7" y="11.8" width="11" height="4.4" rx="1.2" fill="#0b1024"></rect>
        <rect x="7" y="19.6" width="15" height="4.4" rx="1.2" fill="#1f4fd8"></rect>
      </g>
    </svg>
    <span class="brand__name">Elyx</span>
  </a>

  <nav class="nav" id="nav" aria-label="Main">
    <div class="nav__links" id="navLinks">
      <div class="nav__item" data-menu="services"><button type="button">Services ${CARET}</button></div>
      <div class="nav__item" data-menu="industries"><button type="button">Industries ${CARET}</button></div>
      <div class="nav__item" data-menu="work"><button type="button">Work ${CARET}</button></div>
      <div class="nav__item"><a href="/blog/">Blog</a></div>
      <div class="nav__item"><a href="/about.html">About</a></div>
      <div class="nav__item"><a href="/contact.html">Contact</a></div>
    </div>
  </nav>

  <div class="nav__right">
    <a class="btn btn--primary nav__cta" href="/contact.html" data-track="cta_click" data-pos="nav">Let's talk ${ARROW}</a>
    <button class="nav__burger" id="burger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile menu -->
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu__group">
      <span class="mobile-menu__label">Services</span>
      ${services.map((s) => '<a href="/services/' + s.slug + '/">' + esc(s.name) + '</a>').join('\n      ')}
    </div>
    <div class="mobile-menu__group">
      <span class="mobile-menu__label">Websites for</span>
      ${industries.map((s) => '<a href="/websites-for/' + s.slug + '/">' + esc(s.name) + '</a>').join('\n      ')}
    </div>
    <div class="mobile-menu__group">
      <span class="mobile-menu__label">Company</span>
      <a href="/about.html">About</a>
      <a href="/work.html">Work</a>
      <a href="/pricing/">Pricing</a>
      <a href="/blog/">Blog</a>
      <a href="/tools/">Free tools</a>
      <a href="/contact.html">Contact</a>
    </div>
    <a class="btn btn--blue mobile-menu__cta" href="/contact.html">Let's talk ${ARROW}</a>
  </div>

  <!-- Mega panel -->
  <div class="mega" id="mega">
    <div class="mega__inner">
      <div class="mega__panel" data-panel="services">
        <div class="mega-grid">
          <div class="mega-tiles">${svc}</div>
          <a class="mega-feature" href="/pricing/">
            <div class="ph-grid"></div>
            <div class="mega-feature__k">Featured</div>
            <div class="mega-feature__t">Starting from ₹9,999. Quotes tailored to you.</div>
            <div class="mega-feature__l">See pricing <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3 10L10 3M10 3H4M10 3v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="industries">
        <div class="mega-grid">
          <div class="mega-tiles">${ind}</div>
          <a class="mega-feature" href="/websites-for/">
            <div class="ph-grid"></div>
            <div class="mega-feature__k">Built for your trade</div>
            <div class="mega-feature__t">What a site for your kind of business actually needs.</div>
            <div class="mega-feature__l">All industries <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3 10L10 3M10 3H4M10 3v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="work">
        <div class="mega-grid mega-grid--work">
          <div class="mega-wlinks">
            ${tile('/work.html#tools', '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"></circle><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.1 5.1l2.1 2.1M16.8 16.8l2.1 2.1M18.9 5.1L16.8 7.2M7.2 16.8l-2.1 2.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>', 'Tools we use')}
            ${tile('/work.html#faq', '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"></circle><path d="M9.6 9.2a2.5 2.5 0 014.7 1.1c0 1.6-2.3 2-2.3 3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><circle cx="12" cy="16.6" r="0.7" fill="currentColor"></circle>', 'FAQ about Elyx')}
            ${tile('/work.html', '<rect x="4" y="4" width="6.5" height="6.5" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect>', 'All projects')}
          </div>
          <div class="mega-work">${wc}</div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

/* ---------------------------------------------------------------- footer */
function footer() {
  const a = addressLine();
  const connect = [
    '<a href="mailto:' + esc(config.email) + '">' + esc(config.email) + '</a>',
    config.phone ? '<a href="' + telUrl + '" data-track="call_click" data-pos="footer">' + esc(config.phone) + '</a>' : '',
    config.phoneSecondary ? '<a href="' + tel2Url + '" data-track="call_click" data-pos="footer">' + esc(config.phoneSecondary) + '</a>' : '',
    waUrl ? '<a href="' + waUrl + '" target="_blank" rel="noopener" data-track="whatsapp_click" data-pos="footer">WhatsApp</a>' : '',
    config.social.linkedin ? '<a href="' + esc(config.social.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' : '',
    config.social.instagram ? '<a href="' + esc(config.social.instagram) + '" target="_blank" rel="noopener">Instagram</a>' : '',
    config.googleBusinessProfileUrl ? '<a href="' + esc(config.googleBusinessProfileUrl) + '" target="_blank" rel="noopener">Google Business Profile</a>' : '',
    a ? '<span class="footer__addr">' + (config.mapUrl ? '<a href="' + esc(config.mapUrl) + '" target="_blank" rel="noopener">' + esc(a) + '</a>' : esc(a)) + '</span>' : ''
  ].filter(Boolean).join('\n        ');

  return `<footer class="footer">
  <div class="footer__in">
    <div class="footer__top">
      <div>
        <a class="brand" href="/" aria-label="Elyx Solutions home">
          <svg class="brand__mark" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <g transform="skewX(-10)">
              <rect x="7" y="4" width="15" height="4.4" rx="1.2" fill="#1f4fd8"></rect>
              <rect x="7" y="11.8" width="11" height="4.4" rx="1.2" fill="#0b1024"></rect>
              <rect x="7" y="19.6" width="15" height="4.4" rx="1.2" fill="#1f4fd8"></rect>
            </g>
          </svg>
          <span class="brand__name">Elyx</span>
        </a>
        <p class="footer__lede">Beyond just presence, we build digital <span class="serif-i" style="color:var(--blue)">value.</span></p>
      </div>
      <div class="fcol">
        <h4>Services</h4>
        ${services.map((s) => '<a href="/services/' + s.slug + '/">' + esc(s.name) + '</a>').join('\n        ')}
      </div>
      <div class="fcol">
        <h4>Websites for</h4>
        ${industries.map((s) => '<a href="/websites-for/' + s.slug + '/">' + esc(s.name) + '</a>').join('\n        ')}
      </div>
      <div class="fcol">
        <h4>Company</h4>
        <a href="/about.html">About</a>
        <a href="/work.html">Work</a>
        <a href="/pricing/">Pricing</a>
        <a href="/tools/">Free tools</a>
        <a href="/blog/">Blog</a>
        <a href="/web-development-bengaluru/">Bengaluru</a>
        <a href="/contact.html">Contact</a>
      </div>
      <div class="fcol">
        <h4>Connect</h4>
        ${connect}
      </div>
    </div>
    <div class="footer__bot">
      <span>© 2026 Elyx Solutions. All rights reserved.</span>
      <span>Designed &amp; built in-house${a ? ' · ' + esc(config.address.locality) + ', ' + esc(config.address.country === 'IN' ? 'India' : config.address.country) : ''}.</span>
    </div>
  </div>
</footer>${waUrl ? `
<a class="wa-float" href="${waUrl}" target="_blank" rel="noopener" aria-label="Chat with Elyx on WhatsApp" data-track="whatsapp_click" data-pos="floating">
  <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.01L4 29l8.12-1.57a12.03 12.03 0 0 0 3.92.65C22.68 28.08 28.08 22.67 28.08 16 28.08 9.36 22.7 3 16.04 3Zm0 22.06c-1.22 0-2.4-.33-3.44-.95l-.25-.15-4.82.93.97-4.7-.17-.27a9.9 9.9 0 0 1-1.52-5.27c0-5.5 4.48-9.98 10-9.98 5.5 0 9.98 4.48 9.98 9.98s-4.48 10.41-9.98 10.41l-.77-.02Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.64-.93-2.25-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>
</a>` : ''}`;
}

/* ---------------------------------------------------------------- schema */
function orgGraph() {
  const a = config.address || {};
  const sameAs = [config.social.linkedin, config.social.instagram, config.googleBusinessProfileUrl].filter(Boolean);
  const org = {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': abs('/#organization'),
    name: config.name,
    url: abs('/'),
    logo: abs('/favicon.svg'),
    image: abs('/og/home.png'),
    description: 'Elyx Solutions is a three-person digital studio in Bengaluru building SaaS platforms, websites and mobile apps, designed, built and grown end to end.',
    email: config.email,
    areaServed: [{ '@type': 'Country', name: 'India' }],
    address: Object.assign({ '@type': 'PostalAddress', addressCountry: a.country || 'IN' },
      a.street ? { streetAddress: a.street } : {},
      a.locality ? { addressLocality: a.locality } : {},
      a.region ? { addressRegion: a.region } : {},
      a.postalCode ? { postalCode: a.postalCode } : {}),
    sameAs,
    knowsAbout: ['Web Development', 'App Development', 'SaaS Development', 'SEO', 'Web Design', 'Maintenance'],
    makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: abs('/services/' + s.slug + '/') } })),
    founder: (config.authors || []).map((p) => (p.blog === false ? { '@type': 'Person', name: p.name } : { '@type': 'Person', name: p.name, url: abs('/blog/author/' + p.slug + '/') }))
  };
  const phones = [config.phone, config.phoneSecondary].filter(Boolean);
  if (phones.length) org.telephone = phones.length === 1 ? phones[0] : phones;
  if (config.mapUrl) org.hasMap = config.mapUrl;
  return [
    org,
    { '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: config.name, publisher: { '@id': abs('/#organization') } }
  ];
}

function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: abs(it[1]) }))
  };
}

const ld = (graph) => '<script type="application/ld+json">\n' + JSON.stringify({ '@context': 'https://schema.org', '@graph': [].concat(graph) }, null, 2) + '\n</script>';

/* ---------------------------------------------------------------- head + scripts */
function ga4() {
  if (!config.ga4Id) return '';
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(config.ga4Id)}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(config.ga4Id)}');</script>`;
}

/* Google Ads / Tag Manager tag (GTM-TQRQB3F4). Goes on every page via headExtras. */
function gads() {
  return `<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TQRQB3F4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
</script>`;
}

function headExtras(extraGraph) {
  return [
    '<link rel="stylesheet" href="/css/pages.css" />',
    ld(extraGraph || []),
    gads(),
    ga4()
  ].filter(Boolean).join('\n');
}

function configScript() {
  const c = {
    email: config.email, whatsapp: waUrl, phone: config.phone || '', booking: config.bookingUrl || ''
  };
  return '<script>window.ELYX=' + JSON.stringify(c) + ';</script>';
}

module.exports = { tel2Url, nav, footer, orgGraph, breadcrumb, ld, headExtras, ga4, configScript, ARROW, waUrl, telUrl, addressLine, svg24 };
