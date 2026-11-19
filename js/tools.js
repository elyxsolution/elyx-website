/* ============================================================
   Elyx Solutions - free tools (launch checklist,
   Google Business Profile checker). No dependencies.
   ============================================================ */
(function () {
  'use strict';

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

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
    if (t === 'checklist') initChecklist(el);
    else if (t === 'gbp') initGbp(el);
  });
})();
