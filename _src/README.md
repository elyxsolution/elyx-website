# Elyx site builder

Most pages are generated. Run this after any change in `_src/`, `site.config.json` or a blog post:

```
node _src/build.js
```

Then commit and push everything it changed (generated HTML, `sitemap.xml`, `og/*.png`). Needs Node 18+. Social images use Edge/Chrome if installed.
The build prints a "Still to do" list: that is your launch checklist.

## What lives where

| You want to change | Edit |
|---|---|
| Phone, WhatsApp, address, booking link, GA4 ID, founder bios and LinkedIn | `site.config.json` |
| Prices, ranges, calculator numbers | `_src/data/pricing.json` (set `"status": "CONFIRMED"` when real) |
| Service pages `/services/*` | `_src/data/services.js` |
| Industry pages `/websites-for/*` | `_src/data/industries.js` |
| Case studies `/work/*` (add result numbers under `metrics`) | `_src/data/work.js` |
| Blog categories, intros, in-article service cards | `_src/data/categories.js` |
| Nav, mega menus, footer (all pages) | `_src/chrome.js` |
| Hand-written pages (home, services, work, about, contact) | edit the HTML directly. Only the parts between `<!--@name-->` markers are rebuilt |
| Styles | `css/styles.css` (original), `css/pages.css` (inner pages) |

## Publishing a blog article

1. Copy `_src/content/blog/_TEMPLATE.md` to `_src/content/blog/your-slug.md`.
2. Fill the front matter, write the body in Markdown. Remove `draft: true`.
   - `answer:` shows right under the headline. `## FAQ` with `### question` items becomes the FAQ block and FAQ schema.
   - `money:` (optional) overrides the one money page the article points to. `industry:` points it at `/websites-for/<slug>/`.
3. Run `node _src/build.js` and commit.

The build adds the service card after the first third and again at the end, the author box, related reading, Article/FAQ/Breadcrumb schema, a social image, the sitemap entry and the RSS feed, and links the article from its money page automatically. Blog hubs stay `noindex` until they contain an article.

## Tracking

`js/analytics.js` sends `card_click`, `whatsapp_click`, `call_click`, `call_booked`, `form_submit`, `cta_click` and `calculator_estimate` to GA4, each tagged with the article slug. The contact form also stores "how did you find us", the last article read, landing page and any calculator estimate. Redeploy `backend/Code.gs` (see `backend/SETUP.md`) to log them.
