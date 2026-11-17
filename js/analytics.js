/* ============================================================
   Elyx Solutions - event tracking
   GA4 events: card_click, whatsapp_click, call_click, call_booked,
   form_submit, cta_click, calculator_estimate. Every event carries the
   article slug (when the visitor is on an article) and the page path, so
   Search Console + GA4 + your enquiry log can be tied to a specific article.
   gtag.js itself is loaded only when "ga4Id" is set in site.config.json.
   ============================================================ */
(function () {
  'use strict';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  if (!window.gtag) window.gtag = gtag;

  var body = document.body;
  var pageArticle = body ? body.getAttribute('data-article') || '' : '';

  // remember the last article read, so a later enquiry can be attributed to it
  try {
    if (pageArticle) sessionStorage.setItem('elyx_last_article', pageArticle);
    if (!sessionStorage.getItem('elyx_landing')) sessionStorage.setItem('elyx_landing', location.pathname);
  } catch (e) {}

  function track(name, params) {
    var p = { page_path: location.pathname };
    if (pageArticle) p.article_slug = pageArticle;
    for (var k in params) if (params[k] !== undefined && params[k] !== '') p[k] = params[k];
    try { window.gtag('event', name, p); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent('elyx:track', { detail: { name: name, params: p } })); } catch (e) {}
  }
  window.elyxTrack = track;

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a, button') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var name = a.getAttribute('data-track');
    var slug = a.getAttribute('data-article') || pageArticle;
    var pos = a.getAttribute('data-card-pos') || a.getAttribute('data-pos') || '';

    if (/wa\.me|api\.whatsapp\.com/.test(href)) name = 'whatsapp_click';
    else if (/^tel:/.test(href)) name = name || 'call_click';
    if (!name) return;

    var params = { article_slug: slug, position: pos, button: a.getAttribute('data-btn') || '', label: (a.textContent || '').trim().slice(0, 60), link_url: href };
    track(name, params);
  }, true);

  // contact form success (dispatched by site.js)
  document.addEventListener('elyx:form_submit', function (e) {
    track('form_submit', e.detail || {});
  });

  // call booked inside a Cal.com / Calendly embed
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d) return;
    if (d.event === 'calendly.event_scheduled') track('call_booked', { provider: 'calendly' });
    else if (typeof d === 'object' && (d.originator === 'CAL' || d.type === 'bookingSuccessful') &&
             (d.type === 'bookingSuccessful' || (d.data && d.data.type === 'bookingSuccessful'))) track('call_booked', { provider: 'cal' });
  });
})();
