/* ============================================================
   Elyx Solutions — interactions
   ============================================================ */
(function () {
  'use strict';

  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  // normalize p into [a,b] -> [0,1]
  var range = function (p, a, b) { return clamp((p - a) / (b - a), 0, 1); };
  var smooth = function (t) { return t * t * (3 - 2 * t); };

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     NAV scrolled state + MEGA MENU
  --------------------------------------------------------- */
  var shell = document.getElementById('navShell');
  var mega = document.getElementById('mega');
  var items = Array.prototype.slice.call(document.querySelectorAll('.nav__item[data-menu]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.mega__panel'));
  var openKey = null, closeT = null;

  function openMenu(key) {
    clearTimeout(closeT);
    openKey = key;
    shell.classList.add('menu-open');
    mega.classList.add('show');
    panels.forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-panel') === key); });
    items.forEach(function (it) { it.classList.toggle('active', it.getAttribute('data-menu') === key); });
  }
  function closeMenu() {
    openKey = null;
    shell.classList.remove('menu-open');
    mega.classList.remove('show');
    items.forEach(function (it) { it.classList.remove('active'); });
  }

  items.forEach(function (it) {
    var key = it.getAttribute('data-menu');
    var btn = it.querySelector('button');
    it.addEventListener('mouseenter', function () { openMenu(key); });
    btn.addEventListener('focus', function () { openMenu(key); });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openKey === key ? closeMenu() : openMenu(key);
    });
  });

  if (shell) {
    shell.addEventListener('mouseleave', function () { closeT = setTimeout(closeMenu, 160); });
    shell.addEventListener('mouseenter', function () { clearTimeout(closeT); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  if (mega) {
    mega.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  /* ---- mobile menu ---- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  function setMobile(open) {
    shell.classList.toggle('mobile-open', open);
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (mobileMenu) mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', function () {
      setMobile(!shell.classList.contains('mobile-open'));
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMobile(false); });
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMobile(false); });

  /* ---------------------------------------------------------
     SCROLL: nav state + hero laptop choreography
  --------------------------------------------------------- */
  var track = document.getElementById('heroTrack');
  var laptop = document.getElementById('laptop');
  var heroCopy = document.getElementById('heroCopy');
  var heroOpen = document.getElementById('heroOpen');
  var heroOpenInner = document.getElementById('heroOpenInner');
  var laptopGlow = document.getElementById('laptopGlow');
  var scrollCue = document.getElementById('scrollCue');
  var screenBody = document.querySelector('.screen__body');

  var ticking = false;
  var lastScrollY = 0;
  // parallax layers (decorative). Transform is set on wrappers only, so
  // child keyframe animations (drifting orbs) are never overwritten.
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  function updateParallax(y) {
    if (reduced) return;
    var vh = window.innerHeight, i, el, r, center, off, f;
    for (i = 0; i < parallaxEls.length; i++) {
      el = parallaxEls[i];
      r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) continue; // skip far off-screen
      center = r.top + r.height / 2;
      off = center - vh / 2;
      f = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      el.style.transform = 'translate3d(0,' + (-off * f).toFixed(1) + 'px,0)';
    }
  }

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    // nav background
    if (shell) {
    shell.classList.toggle('scrolled', y > 24);

    // Always visible near top
    if (y < 120) {
      shell.classList.remove('nav-hidden');
    }
    // Scrolling down → hide
    else if (y > lastScrollY + 8 ) {
      shell.classList.add('nav-hidden');
    }
    // Scrolling up → show
     else if (y < lastScrollY - 8 ) {
      shell.classList.remove('nav-hidden');
    }
  }

  lastScrollY = y;
    if (openKey && y > 4) closeMenu();

    updateParallax(y);

    if (!track || !laptop) return;

    var max = track.offsetHeight - window.innerHeight;
    var start = track.offsetTop;
    var p = clamp((y - start) / max, 0, 1);

    // hero copy fades up and out early
    var cp = range(p, 0, 0.16);
    if (heroCopy) {
      heroCopy.style.opacity = String(1 - cp);
      heroCopy.style.transform = 'translateY(' + (cp * -80) + 'px)';
    }
    if (scrollCue) scrollCue.style.opacity = String(1 - range(p, 0, 0.08));

    // laptop: starts low + tilted, rises to center, flattens, then zooms in
    var flat = smooth(range(p, 0.02, 0.54));   // 0 tilted/low -> 1 flat/centered
    var zoom = smooth(range(p, 0.5, 1));       // grows into the screen
    var rotX = (1 - flat) * 40;
    var ty = lerp(28, 0, flat);                // vh: lower half -> center
    var scale = lerp(0.52, 1.0, flat) + zoom * 0.8;
    laptop.style.transform =
      'rotateX(' + rotX.toFixed(2) + 'deg) translateY(' + ty.toFixed(2) + 'vh) scale(' + scale.toFixed(3) + ')';

    // blue under-glow blooms then fades as cover takes over
    if (laptopGlow) {
      laptopGlow.style.opacity = String(range(p, 0.22, 0.55) * 0.85 * (1 - range(p, 0.78, 0.95)));
    }
    // screen content fades as we zoom into it
    if (screenBody) screenBody.style.opacity = String(1 - range(p, 0.5, 0.72));

    // dark cover "opens" into services
    if (heroOpen) heroOpen.style.opacity = String(smooth(range(p, 0.6, 0.92)));
    if (heroOpenInner) {
      var oi = range(p, 0.78, 1);
      heroOpenInner.style.opacity = String(oi);
      heroOpenInner.style.transform = 'translateY(' + ((1 - oi) * 26).toFixed(1) + 'px)';
    }
  }

  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(); ticking = false; }); }
  }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  onScroll();

  /* ---------------------------------------------------------
     REVEAL on scroll
  --------------------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------------------------------------------------
     TEXT REVEAL — split headings into words that slide up on scroll
     (preserves inline markup like <span class="serif-i"> and <br>)
  --------------------------------------------------------- */
  var trEls = Array.prototype.slice.call(document.querySelectorAll('.tr'));
  function splitTR(el) {
    if (el.getAttribute('data-split')) return;
    el.setAttribute('data-split', '1');
    var idx = { n: 0 };
    (function walk(node) {
      var kids = Array.prototype.slice.call(node.childNodes);
      kids.forEach(function (ch) {
        if (ch.nodeType === 3) {
          var parts = ch.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (pp) {
            if (pp === '') return;
            if (/^\s+$/.test(pp)) { frag.appendChild(document.createTextNode(pp)); return; }
            var w = document.createElement('span'); w.className = 'tw';
            var inn = document.createElement('span'); inn.className = 'tw-i'; inn.textContent = pp;
            inn.style.transitionDelay = (idx.n * 0.035).toFixed(3) + 's';
            idx.n++;
            w.appendChild(inn); frag.appendChild(w);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR') {
          walk(ch);
        }
      });
    })(el);
  }
  if ('IntersectionObserver' in window && !reduced) {
    trEls.forEach(splitTR);
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io2.unobserve(en.target); }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });
    trEls.forEach(function (el) { io2.observe(el); });
  } else {
    trEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Fallback reveal (robust against flaky IntersectionObserver) ----
     Reveals any .reveal / .tr element that is within the viewport, driven
     by load + scroll. Belt-and-suspenders alongside the observers above so
     above-the-fold content never stays hidden. */
  function revealCheck() {
    var vh = window.innerHeight;
    var i, el, r;
    for (i = 0; i < reveals.length; i++) {
      el = reveals[i];
      if (el.classList.contains('in')) continue;
      r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('in');
    }
    for (i = 0; i < trEls.length; i++) {
      el = trEls[i];
      if (el.classList.contains('in')) continue;
      r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('in');
    }
  }
  window.addEventListener('load', revealCheck);
  window.addEventListener('scroll', revealCheck, { passive: true });
  window.addEventListener('resize', revealCheck);
  revealCheck();
  // run again after layout/fonts settle (in-view only — preserves scroll reveals)
  requestAnimationFrame(function () { requestAnimationFrame(revealCheck); });
  setTimeout(revealCheck, 180);
  setTimeout(revealCheck, 600);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(revealCheck);
  function initWave() {
    var c = document.getElementById('waveCanvas');
    if (!c) return;
    var ctx = c.getContext('2d');
    var w = 0, h = 0, dpr = 1;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var r = c.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener('resize', size);

    var cols = 44, rows = 30, t = 0;

    function frame() {
      ctx.clearRect(0, 0, w, h);
      var cx = w * 0.52, cy = h * 0.5;
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          var u = i / (cols - 1), v = j / (rows - 1);
          var x = u * w;
          var by = v * h;
          // radial falloff so the field reads as a soft blob
          var dx = (x - cx) / w, dy = (by - cy) / h;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var fall = Math.max(0, 1 - dist * 1.7);
          var wv = Math.sin(i * 0.42 + j * 0.22 + t) + Math.sin(i * 0.16 - t * 0.8 + j * 0.1);
          var y = by + wv * 7 * (0.4 + fall);
          var d = (wv + 2) / 4; // 0..1
          var a = (0.06 + d * 0.5) * (0.25 + fall);
          if (a <= 0.01) continue;
          var rad = 0.5 + d * 1.4 * (0.4 + fall);
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, 6.2832);
          ctx.fillStyle = 'rgba(255,255,255,' + a.toFixed(3) + ')';
          ctx.fill();
        }
      }
      t += reduced ? 0 : 0.022;
      requestAnimationFrame(frame);
      if (reduced) return; // draw a single static frame
    }
    requestAnimationFrame(frame);
  }
  initWave();

  /* ---------------------------------------------------------
     CONTACT FORM — front-end success state (no backend)
  --------------------------------------------------------- */
  var cform = document.getElementById('cform');
  if (cform) {
    var endpoint = window.ELYX_CONTACT_ENDPOINT || '';
    var submitBtn = cform.querySelector('button[type="submit"]');
    var errorEl = document.getElementById('cformError');
    var nameEl = cform.querySelector('#f-name');
    var emailEl = cform.querySelector('#f-email');

    function setError(msg) {
      if (!errorEl) return;
      if (msg) { errorEl.textContent = msg; errorEl.hidden = false; }
      else { errorEl.hidden = true; }
    }
    function mark(el, bad) {
      if (!el) return;
      el.style.borderColor = bad ? '#d8434f' : '';
      el.style.boxShadow = bad ? '0 0 0 4px rgba(216,67,79,0.12)' : '';
    }

    cform.addEventListener('submit', function (e) {
      e.preventDefault();
      setError('');

      var ok = true;
      if (!nameEl.value.trim()) { mark(nameEl, true); ok = false; }
      if (!emailEl.value.trim() || !/.+@.+\..+/.test(emailEl.value)) { mark(emailEl, true); ok = false; }
      if (!ok) { (nameEl.value.trim() ? emailEl : nameEl).focus(); return; }

      // honeypot — if a bot filled the hidden field, fake success and send nothing
      var hp = cform.querySelector('[name="company_website"]');
      if (hp && hp.value) { cform.classList.add('sent'); return; }

      var body = new URLSearchParams(new FormData(cform));

      // No endpoint configured yet → demo success (dev only)
      if (!/^https:\/\//.test(endpoint)) {
        console.warn('[Elyx] window.ELYX_CONTACT_ENDPOINT is not set — showing demo success without sending. See backend/SETUP.md.');
        cform.classList.add('sent');
        return;
      }

      var original = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(endpoint, { method: 'POST', body: body })
        .then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
        .then(function (res) {
          if (res && res.ok) {
            cform.classList.add('sent');
          } else {
            throw new Error((res && res.error) || 'Request failed');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = original;
          setError('Something went wrong — please email us at elyxsolution@gmail.com.');
        });
    });

    cform.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () { mark(el, false); setError(''); });
    });
  }

  /* ---------------------------------------------------------
     TOOLS — physics playground (logos fall + cursor repel)
     Uses Matter.js (loaded on work.html). DOM badges are synced
     to physics bodies; graceful fallbacks if anything is missing.
  --------------------------------------------------------- */
  function toolFallback(img) {
    var badge = img.parentNode;
    var label = badge ? (badge.getAttribute('data-mono') || '') : '';
    var span = document.createElement('span');
    span.className = 'tmono';
    span.textContent = label || (img.getAttribute('alt') || '?').slice(0, 2).toUpperCase();
    if (img.parentNode) img.parentNode.replaceChild(span, img);
  }
  function wireToolFallbacks(scope) {
    Array.prototype.slice.call(scope.querySelectorAll('.tbadge img')).forEach(function (img) {
      img.addEventListener('error', function () {
        if (!img.dataset.retry) {
          img.dataset.retry = '1';
          img.src = img.src.split('?')[0] + '?r=' + Date.now();
          return;
        }
        toolFallback(img);
      });
      if (img.complete && img.naturalWidth === 0) {
        if (!img.dataset.retry) { img.dataset.retry = '1'; img.src = img.src.split('?')[0] + '?r=' + Date.now(); }
        else toolFallback(img);
      }
    });
  }

  function initToolsPhysics() {
    var stage = document.getElementById('toolsPhys');
    if (!stage) return;
    wireToolFallbacks(stage);

    var badges = Array.prototype.slice.call(stage.querySelectorAll('.tbadge'));
    var noPhysics = (typeof window.Matter === 'undefined') || reduced;
    if (noPhysics) { stage.classList.add('tools__phys--static'); return; }

    var M = window.Matter;
    var W = stage.clientWidth, H = stage.clientHeight;
    var engine = M.Engine.create();
    engine.gravity.y = 1;
    var world = engine.world;

    // sizes/radii
    var meta = badges.map(function (b) {
      var s = parseFloat(getComputedStyle(b).width) || 60;
      return { el: b, r: s / 2 };
    });

    // walls (thick, static) — floor + sides
    var t = 240;
    var wallOpt = { isStatic: true, restitution: 0.4 };
    var floor = M.Bodies.rectangle(W / 2, H + t / 2 - 1, W + t * 2, t, wallOpt);
    var left = M.Bodies.rectangle(-t / 2 + 1, H / 2, t, H * 4, wallOpt);
    var right = M.Bodies.rectangle(W + t / 2 - 1, H / 2, t, H * 4, wallOpt);
    M.World.add(world, [floor, left, right]);

    // bodies — start above the stage, staggered, so they fall in
    var bodies = meta.map(function (m, i) {
      var x = m.r + 20 + Math.random() * Math.max(1, (W - m.r * 2 - 40));
      var y = -80 - Math.random() * 700;
      var body = M.Bodies.circle(x, y, m.r, {
        restitution: 0.5, friction: 0.06, frictionAir: 0.012, density: 0.0012
      });
      M.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
      m.body = body;
      // initial transform (clipped above stage) before runner starts
      m.el.style.transform = 'translate(' + (x - m.r) + 'px,' + (y - m.r) + 'px)';
      return body;
    });
    M.World.add(world, bodies);

    // cursor repulsion — logos scatter away from the pointer (no dragging)
    var ptr = { x: -9999, y: -9999, active: false };
    function setPtr(e) {
      var rect = stage.getBoundingClientRect();
      ptr.x = e.clientX - rect.left;
      ptr.y = e.clientY - rect.top;
      ptr.active = true;
    }
    stage.addEventListener('pointermove', setPtr, { passive: true });
    stage.addEventListener('pointerleave', function () { ptr.active = false; });

    var R = 175;       // influence radius
    var FORCE = 0.0065; // repel strength (relative to gravity)
    M.Events.on(engine, 'beforeUpdate', function () {
      if (!ptr.active) return;
      for (var i = 0; i < meta.length; i++) {
        var b = meta[i].body;
        var dx = b.position.x - ptr.x, dy = b.position.y - ptr.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        var reach = R + meta[i].r;
        if (d > 0.01 && d < reach) {
          var f = (1 - d / reach) * FORCE * b.mass;
          M.Body.applyForce(b, b.position, { x: (dx / d) * f, y: (dy / d) * f });
        }
      }
    });

    // sync DOM to bodies every frame
    M.Events.on(engine, 'afterUpdate', function () {
      for (var i = 0; i < meta.length; i++) {
        var p = meta[i].body.position, a = meta[i].body.angle, r = meta[i].r;
        meta[i].el.style.transform =
          'translate(' + (p.x - r) + 'px,' + (p.y - r) + 'px) rotate(' + a + 'rad)';
      }
    });

    var runner = M.Runner.create();
    var started = false;
    function start() { if (started) return; started = true; M.Runner.run(runner, engine); }

    // start dropping when the section scrolls into view
    if ('IntersectionObserver' in window) {
      var io3 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { start(); io3.disconnect(); } });
      }, { threshold: 0.2 });
      io3.observe(stage);
    } else { start(); }

    // keep walls in sync with size changes
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        W = stage.clientWidth; H = stage.clientHeight;
        M.Body.setPosition(floor, { x: W / 2, y: H + t / 2 - 1 });
        M.Body.setPosition(right, { x: W + t / 2 - 1, y: H / 2 });
        M.Body.setPosition(left, { x: -t / 2 + 1, y: H / 2 });
      }, 200);
    });
  }
  initToolsPhysics();
})();
