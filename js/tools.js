/* ============================================================
   Elyx Solutions - free tools (cost calculator, launch checklist,
   Google Business Profile checker). No dependencies.
   ============================================================ */
(function () {
  'use strict';

  var fmt = function (n) {
    n = Math.round(n / 500) * 500;                       // round to the nearest ₹500 so it reads as an estimate
    var s = String(n), last = s.slice(-3), rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return '₹' + (rest ? rest + ',' : '') + last;
  };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ------------------------------------------------ calculator */
  function initCalculator(root) {
    var dataEl = document.getElementById('calcData');
    if (!dataEl) return;
    var D = JSON.parse(dataEl.textContent);
    var typesEl = document.getElementById('calcTypes'), featsEl = document.getElementById('calcFeats');
    var extraWrap = document.getElementById('calcExtraWrap'), extra = document.getElementById('calcExtra');
    var extraOut = document.getElementById('calcExtraOut'), extraLegend = document.getElementById('calcExtraLegend'), extraHint = document.getElementById('calcExtraHint');
    var out = document.getElementById('calcOut'), weeksEl = document.getElementById('calcWeeks'), send = document.getElementById('calcSend');
    var state = { type: 'website', feats: {}, rush: false };
    var serviceFor = { landing: 'web-development', website: 'web-development', ecommerce: 'web-development', webapp: 'web-development', mobile: 'app-development', saas: 'saas-development' };

    Object.keys(D.projects).forEach(function (k) {
      var p = D.projects[k];
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'calc__type'; b.setAttribute('data-type', k);
      b.innerHTML = '<b></b><small></small>';
      b.firstChild.textContent = p.label;
      b.lastChild.textContent = p.weeksLow + '–' + p.weeksHigh + ' weeks · from ₹' + p.low.toLocaleString('en-IN');
      b.addEventListener('click', function () { state.type = k; state.feats = {}; extra.value = 0; render(); });
      typesEl.appendChild(b);
    });

    function renderFeats() {
      featsEl.innerHTML = '';
      D.features.filter(function (f) { return f.for.indexOf(state.type) !== -1; }).forEach(function (f) {
        var l = document.createElement('label'); l.className = 'opt';
        var i = document.createElement('input'); i.type = 'checkbox'; i.checked = !!state.feats[f.id];
        i.addEventListener('change', function () { state.feats[f.id] = i.checked; calc(); });
        var s = document.createElement('span'); s.textContent = f.label;
        l.appendChild(i); l.appendChild(s); featsEl.appendChild(l);
      });
    }

    function render() {
      Array.prototype.forEach.call(typesEl.children, function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-type') === state.type ? 'true' : 'false'); });
      var u = D.extraUnit[state.type];
      if (u) {
        extraWrap.hidden = false; extra.max = u.max; extra.min = u.min;
        extraLegend.textContent = '2. Size: ' + u.label.toLowerCase();
        extraHint.textContent = 'Typical projects include ' + u.included + '. Move the slider to add more.';
      } else { extraWrap.hidden = true; extra.value = 0; }
      renderFeats(); calc();
    }

    function calc() {
      var p = D.projects[state.type], u = D.extraUnit[state.type];
      var n = u ? Number(extra.value) : 0;
      extraOut.textContent = '+' + n;
      var lo = p.low, hi = p.high;
      if (u) { lo += n * u.lowEach; hi += n * u.highEach; }
      var names = [];
      D.features.forEach(function (f) { if (f.for.indexOf(state.type) !== -1 && state.feats[f.id]) { lo += f.low; hi += f.high; names.push(f.label); } });
      state.rush = (document.querySelector('input[name="calcTime"]:checked') || {}).value === 'rush';
      if (state.rush) { lo *= D.rush; hi *= D.rush; }
      var wl = p.weeksLow, wh = p.weeksHigh + Math.ceil(n / 8) + Math.ceil(names.length / 3);
      if (state.rush) { wl = Math.max(1, Math.round(wl * 0.7)); wh = Math.max(wl + 1, Math.round(wh * 0.75)); }
      lo = Math.max(lo, D.start);
      out.textContent = fmt(lo) + ' – ' + fmt(hi);
      weeksEl.textContent = 'Roughly ' + wl + '–' + wh + ' weeks to launch';
      var summary = p.label + (n ? ' (+' + n + ' ' + u.label.toLowerCase() + ')' : '') + (names.length ? ' with ' + names.join(', ') : '') + (state.rush ? ', rush' : '') + ': ' + fmt(lo) + ' – ' + fmt(hi);
      state.summary = summary;
    }
    // relative link to the contact page, wherever this page lives
    var up = '../../';   // this page lives at /tools/website-cost-calculator/ (two folders deep)
    function setHref() { send.href = (up || './') + 'contact.html?service=' + serviceFor[state.type] + '&est=' + encodeURIComponent(state.summary || '') + '#form'; }

    extra.addEventListener('input', function () { calc(); setHref(); });
    Array.prototype.forEach.call(document.querySelectorAll('input[name="calcTime"]'), function (r) { r.addEventListener('change', function () { calc(); setHref(); }); });
    featsEl.addEventListener('change', setHref);
    typesEl.addEventListener('click', function () { setTimeout(setHref, 0); });
    send.addEventListener('click', function () { if (window.elyxTrack) window.elyxTrack('calculator_estimate', { estimate: state.summary }); });
    render(); setHref();
  }

  /* ------------------------------------------------ checklist */
  function initChecklist(root) {
    var key = 'elyx_chk_' + (root.getAttribute('data-key') || 'x');
    var boxes = Array.prototype.slice.call(root.querySelectorAll('.chk__box'));
    var fill = document.getElementById('chkFill'), done = document.getElementById('chkDone'), msg = document.getElementById('chkMsg'), reset = document.getElementById('chkReset');
    var saved = {};
    try { saved = JSON.parse(store.get(key) || '{}'); } catch (e) {}
    boxes.forEach(function (b, i) { b.checked = !!saved[i]; });
    function update() {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      done.textContent = n; fill.style.width = (n / boxes.length * 100) + '%';
      msg.hidden = n !== boxes.length;
      var o = {}; boxes.forEach(function (b, i) { if (b.checked) o[i] = 1; }); store.set(key, JSON.stringify(o));
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    reset.addEventListener('click', function () { boxes.forEach(function (b) { b.checked = false; }); update(); });
    update();
  }

  /* ------------------------------------------------ GBP checker */
  function initGbp(root) {
    var boxes = Array.prototype.slice.call(root.querySelectorAll('.chk__box'));
    var total = Number(root.getAttribute('data-total')) || 100;
    var scoreEl = document.getElementById('gbpScore'), verdict = document.getElementById('gbpVerdict'), fixes = document.getElementById('gbpFixes');
    function update() {
      var got = 0, any = false;
      boxes.forEach(function (b) { if (b.checked) { got += Number(b.getAttribute('data-w')); any = true; } });
      var score = Math.round(got / total * 100);
      scoreEl.textContent = score;
      var missing = boxes.filter(function (b) { return !b.checked; })
        .map(function (b) { return { w: Number(b.getAttribute('data-w')), t: b.parentNode.querySelector('span').textContent }; })
        .sort(function (a, b) { return b.w - a.w; }).slice(0, 3);
      if (!any) verdict.textContent = 'Tick what is true about your profile to see your score.';
      else if (score >= 85) verdict.textContent = 'Strong profile. Keep reviews and posts fresh and it should hold up well.';
      else if (score >= 60) verdict.textContent = 'Decent, but you are leaving easy wins on the table. Start with these:';
      else verdict.textContent = 'There is a lot of room to grow. These three fixes matter most:';
      fixes.innerHTML = '';
      if (any && missing.length) missing.forEach(function (m) { var li = document.createElement('li'); li.textContent = m.t; fixes.appendChild(li); });
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    update();
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-tool]'), function (el) {
    var t = el.getAttribute('data-tool');
    if (t === 'calculator') initCalculator(el);
    else if (t === 'checklist') initChecklist(el);
    else if (t === 'gbp') initGbp(el);
  });
})();
