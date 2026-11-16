'use strict';
/* Shared helpers for the Elyx static-site builder (zero dependencies). */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
(config.authors || []).forEach((a) => { if (a.photo && !/^(https?:)?\/\//.test(a.photo) && a.photo[0] !== '/') a.photo = '/' + a.photo; });
const pricing = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'pricing.json'), 'utf8'));

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Indian digit grouping: 1234567 -> 12,34,567 */
function inr(n) {
  n = Math.round(Number(n));
  const s = String(n);
  if (s.length <= 3) return '₹' + s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return '₹' + rest + ',' + last3;
}
const inrRange = (a, b) => inr(a) + '–' + inr(b).replace('₹', '₹');

function write(rel, content) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

/** Turn root-absolute internal URLs in an HTML string into depth-relative ones,
 *  so the site works from any folder depth (and when previewed from disk). */
function relativize(html, depth) {
  const prefix = depth === 0 ? '' : '../'.repeat(depth);
  return html.replace(/\b(href|src|action|poster|data-src)="\/(?!\/)([^"]*)"/g, (m, attr, p) => {
    let out = prefix + p;
    if (out === '') out = './';
    return attr + '="' + out + '"';
  });
}

const abs = (p) => config.domain.replace(/\/$/, '') + p;

/* ---------------------------------------------------------------
   Tiny Markdown -> HTML (headings, paragraphs, lists, tables,
   blockquotes, code, images, links, bold/italic/inline code, hr).
   Enough for articles; no dependencies.
---------------------------------------------------------------- */
function inline(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,
    (m, alt, src, title) => '<img src="' + src + '" alt="' + alt + '" loading="lazy" />');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => {
    const external = /^https?:\/\//.test(u) && u.indexOf('elyxsolutions.in') === -1;
    return '<a href="' + u + '"' + (external ? ' rel="noopener" target="_blank"' : '') + '>' + t + '</a>';
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[\s(])\*([^*\s][^*]*)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>');
  return s;
}
function slugify(s) {
  return String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Returns an array of block objects: {type, html, text, level?, id?} */
function mdBlocks(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  const isTableSep = (l) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*$/.test(line)) { i++; continue; }

    let m;
    if ((m = line.match(/^(#{1,4})\s+(.*)$/))) {
      const level = m[1].length, text = m[2].trim();
      const id = slugify(text);
      blocks.push({ type: 'h', level, text, id, html: '<h' + level + ' id="' + id + '">' + inline(text) + '</h' + level + '>' });
      i++; continue;
    }
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { blocks.push({ type: 'hr', html: '<hr />' }); i++; continue; }
    if (/^```/.test(line)) {
      const buf = []; i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      blocks.push({ type: 'code', html: '<pre><code>' + esc(buf.join('\n')) + '</code></pre>' });
      continue;
    }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      blocks.push({ type: 'quote', html: '<blockquote>' + buf.map((b) => '<p>' + inline(b) + '</p>').join('') + '</blockquote>' });
      continue;
    }
    if (line.indexOf('|') !== -1 && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(line); i += 2;
      const rows = [];
      while (i < lines.length && lines[i].indexOf('|') !== -1 && !/^\s*$/.test(lines[i])) rows.push(cells(lines[i++]));
      const html = '<div class="prose-table"><table><thead><tr>' + head.map((h) => '<th>' + inline(h) + '</th>').join('') +
        '</tr></thead><tbody>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
      blocks.push({ type: 'table', html });
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*]\s+/, ''));
      blocks.push({ type: 'ul', html: '<ul>' + items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</ul>' });
      continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ''));
      blocks.push({ type: 'ol', html: '<ol>' + items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</ol>' });
      continue;
    }
    if (/^<(div|figure|iframe|details|section|aside)\b/.test(line)) { // raw HTML passthrough until blank line
      const buf = [];
      while (i < lines.length && !/^\s*$/.test(lines[i])) buf.push(lines[i++]);
      blocks.push({ type: 'html', html: buf.join('\n') });
      continue;
    }
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,4}\s|```|>\s?|\s*[-*]\s+|\s*\d+[.)]\s+)/.test(lines[i])) buf.push(lines[i++]);
    const text = buf.join(' ');
    blocks.push({ type: 'p', text, html: '<p>' + inline(text) + '</p>' });
  }
  return blocks;
}

/** Front matter: `key: value` lines between --- fences. Lists: comma separated. */
function frontMatter(src) {
  src = String(src).replace(/\r\n?/g, '\n'); // files checked out with Windows line endings must parse the same
  const m = src.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: src };
  const data = {};
  m[1].split('\n').forEach((l) => {
    const mm = l.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!mm) return;
    let v = mm[2].trim();
    if ((v[0] === '"' && v.slice(-1) === '"') || (v[0] === "'" && v.slice(-1) === "'")) v = v.slice(1, -1);
    data[mm[1]] = v;
  });
  return { data, body: m[2] };
}

const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const isoDate = (d) => new Date(d).toISOString().slice(0, 10);

module.exports = { ROOT, config, pricing, esc, inr, inrRange, write, read, exists, relativize, abs, inline, slugify, mdBlocks, frontMatter, fmtDate, isoDate };
