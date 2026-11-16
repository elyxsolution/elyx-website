'use strict';
/* Generates per-page social share images (1200×630 PNG) and app icons with headless Edge/Chrome.
   Only re-renders what changed (tracked in _src/.og.json). Skips quietly if no browser is found. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { ROOT, esc } = require('./lib');

const VERSION = 'og-v1';
const LEDGER = path.join(__dirname, '.og.json');
const TMP = path.join(__dirname, '.tmp');

function findBrowser() {
  const candidates = [
    process.env.ELYX_BROWSER,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'
  ].filter(Boolean);
  return candidates.find((c) => fs.existsSync(c)) || null;
}

function shot(browser, html, out, w, h) {
  fs.mkdirSync(TMP, { recursive: true });
  const f = path.join(TMP, 'frame.html');
  fs.writeFileSync(f, html, 'utf8');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  execFileSync(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--screenshot=' + out, '--window-size=' + w + ',' + h, 'file:///' + f.replace(/\\/g, '/')], { stdio: 'ignore', timeout: 60000 });
}

function ogHtml({ kicker, headline }) {
  const len = headline.length;
  const size = len > 60 ? 54 : len > 42 ? 64 : len > 26 ? 76 : 92;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;box-sizing:border-box}html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:Helvetica,Arial,sans-serif;color:#fff;background:radial-gradient(115% 115% at 26% -5%,#16307a 0%,#0a1130 52%,#080b1a 100%);position:relative}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(159,180,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(159,180,255,.07) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(90% 90% at 70% 10%,#000,transparent 75%)}
.brand{position:absolute;left:96px;top:84px;display:flex;align-items:center;gap:20px}
.brand b{font-size:38px;font-weight:700;letter-spacing:-1.2px}
.k{position:absolute;left:96px;top:222px;font-size:24px;font-weight:600;letter-spacing:5px;text-transform:uppercase;color:#9fb4ff}
.h{position:absolute;left:94px;top:268px;width:1010px;font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:${size}px;line-height:1.04;letter-spacing:-2px}
.d{position:absolute;right:96px;bottom:60px;font-size:25px;color:#7e8aa6}
.bar{position:absolute;left:96px;bottom:68px;width:84px;height:5px;border-radius:3px;background:#3b6cf0}
</style></head><body><div class="grid"></div>
<div class="brand"><svg width="56" height="56" viewBox="0 0 28 28"><g transform="skewX(-10)"><rect x="7" y="4" width="15" height="4.4" rx="1.2" fill="#3b6cf0"/><rect x="7" y="11.8" width="11" height="4.4" rx="1.2" fill="#fff"/><rect x="7" y="19.6" width="15" height="4.4" rx="1.2" fill="#3b6cf0"/></g></svg><b>Elyx</b></div>
<div class="k">${esc(kicker)}</div><div class="h">${esc(headline)}</div><div class="bar"></div><div class="d">elyxsolutions.in</div></body></html>`;
}

function iconHtml(size, pad) {
  const svg = fs.readFileSync(path.join(ROOT, 'favicon.svg'), 'utf8');
  return `<!doctype html><html><body style="margin:0;background:#0b1024;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center"><div style="width:${size - pad * 2}px;height:${size - pad * 2}px">${svg.replace('<svg ', '<svg width="100%" height="100%" ')}</div></body></html>`;
}

function generate(jobs) {
  const browser = findBrowser();
  const result = { rendered: 0, skipped: 0, missingBrowser: false };
  if (!browser) { result.missingBrowser = true; return result; }
  let ledger = {};
  try { ledger = JSON.parse(fs.readFileSync(LEDGER, 'utf8')); } catch (e) {}

  const todo = jobs.map((j) => {
    const out = path.join(ROOT, 'og', j.key + '.png');
    const hash = crypto.createHash('md5').update(VERSION + '|' + j.kicker + '|' + j.headline).digest('hex');
    return { j, out, hash, need: !fs.existsSync(out) || ledger[j.key] !== hash };
  });
  todo.forEach((t) => {
    if (!t.need) { result.skipped++; return; }
    try { shot(browser, ogHtml(t.j), t.out, 1200, 630); ledger[t.j.key] = t.hash; result.rendered++; }
    catch (e) { console.warn('  ! could not render og/' + t.j.key + '.png: ' + e.message); }
  });

  // icons + default share image
  const icons = [['apple-touch-icon.png', 180, 22], ['icon-192.png', 192, 24], ['icon-512.png', 512, 64]];
  icons.forEach(([name, size, pad]) => {
    const out = path.join(ROOT, name);
    const h = crypto.createHash('md5').update(VERSION + fs.readFileSync(path.join(ROOT, 'favicon.svg'), 'utf8') + size).digest('hex');
    if (!fs.existsSync(out) || ledger[name] !== h) {
      try { shot(browser, iconHtml(size, pad), out, size, size); ledger[name] = h; result.rendered++; } catch (e) { console.warn('  ! icon ' + name + ': ' + e.message); }
    }
  });
  const home = path.join(ROOT, 'og', 'home.png');
  if (fs.existsSync(home)) fs.copyFileSync(home, path.join(ROOT, 'og-image.png'));

  fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 2));
  try { fs.rmSync(TMP, { recursive: true, force: true }); } catch (e) {}
  return result;
}

module.exports = { generate };
