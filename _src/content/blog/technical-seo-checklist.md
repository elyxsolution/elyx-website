---
title: Technical SEO Audit Checklist (Free Download)
slug: technical-seo-checklist
category: seo
description: A free technical SEO checklist for Indian business sites: crawl, index, canonicals, sitemaps, speed and schema in fix order, with a worked example.
date: 2026-11-19
author: shreyasmv
---
A technical SEO checklist is a list of checks that confirm search engines can crawl your pages, store them in their index and understand them, and that the pages load properly on a phone. The one below covers crawl, index, canonicals, sitemaps, speed and schema, in the order a small business site should fix them. The honest qualification is that I ran no audits myself: the checks rest on Google's own documentation and four vendor guides, and Google says its own basics are no secret formula for ranking first.

- **What you get.** A copyable checklist of 21 checks in six groups, each labelled as Google guidance or vendor practice.
- **The download.** This page is the checklist, so copy it into a sheet. There is no PDF file.
- **The angle.** Fix what stops pages being indexed before anything else, because speed and schema only help pages Google already holds.
- **The limit.** Nothing here promises a ranking. Google says changes can take hours to months to show.

## How This Technical SEO Checklist Was Built

This checklist merges two Google Search Central pages with four vendor guides, and where they differ I follow Google. The table lists each source and what I took, all read on 20 November 2026.

| Source | Type | What I took |
|---|---|---|
| Google, "Technical SEO Techniques and Strategies" | Official guidance | Robots.txt, sitemaps, redirects, 404 handling, crawl budget |
| Google, "SEO Starter Guide" | Official guidance | The site: check, URL Inspection, canonicals, timing |
| Semrush | Vendor guide | Search Console steps, Core Web Vitals thresholds |
| AIOSEO | Vendor guide (WordPress plugin maker) | Sitemap and duplicate-content handling |
| Dashthis | Vendor guide | Speed tactics, layout-shift fixes |
| cognitiveSEO | Vendor guide | Server response, image and request limits |

Vendor figures are attributed to the vendor, never stated as fact. If you would rather have someone run the audit, [Elyx Solutions' SEO optimization service](/services/seo-optimization/) begins with a crawl and a list of problems in order of impact.

## Crawl: Can Google Reach Your Pages?

Crawl checks confirm that Google's crawlers can reach every page you want found, which means sensible robots.txt rules, working links and no server errors. Google says it primarily finds pages by following links from pages it already knows, so a page with no internal links pointing to it is hard to discover. Semrush calls these orphan pages and fixes them by linking to them from relevant pages.

Robots.txt is a plain file at the root of your domain that tells crawlers which paths to skip. Google says to use it to stop crawling of duplicate or unimportant URLs and of URLs that change state, such as adding to a cart or creating an account. AIOSEO gives admin, cart and login pages as typical examples.

Three more crawl checks come from Semrush, and each is a vendor method:

- **Redirect chains and loops.** A chain is one redirect leading to another; point every link straight at the final address.
- **Broken links.** Restore the page or 301-redirect it to the closest relevant one.
- **Server errors.** Any 5xx response means the server failed; pass the URL and code to your developer.

Four of the five top-ranking guides I analysed discuss crawl budget, which is how many pages Google crawls in a period. Google's own page says it matters for very large sites, with hundreds of millions of pages or tens of millions that change often. My reading is that a business site of 40 or 400 pages should spend its time on blocked and broken pages, not on crawl budget.

## Index: Has Google Kept the Pages You Want?

Index checks confirm Google has stored your important pages, and the fastest test is the Pages report in Search Console. Google's starter guide suggests a quicker first look: search `site:yourdomain.com` on Google, and if results appear, you are in the index. The URL Inspection tool then shows whether Google sees a page as a visitor does.

Semrush explains three reasons a page is left out. The table reads them as vendor guidance, not Google's definitions.

| Status in the Pages report | Likely cause | First fix |
|---|---|---|
| Blocked by robots.txt | A Disallow rule covers the page | Edit the rule |
| Excluded by noindex | A noindex tag, often left from the build | Remove the tag |
| Crawled, currently not indexed | Content judged thin or too similar to another page | Improve it or merge it |

One rule trips people up. Google says robots.txt is for stopping crawling, not for keeping a page out of the index: use a noindex tag or a login for that. Google also says a removed page should return a true 404, not a "soft 404" that shows an error message with a normal status code.

Semrush adds Bing Webmaster Tools, because Bing's index may not match Google's, and the IndexNow protocol for telling Bing and other supporting engines about new URLs.

## Canonicals: One Address for Each Page

A canonical is the single address a search engine treats as the main version of a page, and you control it by redirecting duplicates or adding a rel=canonical link. Google says duplicate content is not a spam violation, but it wastes crawling and confuses visitors, and if you set no canonical, Google picks one itself. Its advice is to redirect non-preferred URLs where you can and use rel=canonical where you cannot.

Semrush's first duplicate check is the four versions of a home page, shown below with what should happen to each.

| Address | What should happen |
|---|---|
| `https://yourdomain.com` | Loads (your chosen version) |
| `https://www.yourdomain.com` | 301 to the chosen version |
| `http://yourdomain.com` | 301 to the chosen version |
| `http://www.yourdomain.com` | 301 to the chosen version |

Pick https, with or without www, and redirect the rest. Google says a 301 marks a permanent move and a 302 a temporary one, so use 301 for these.

AIOSEO lists three ways to treat duplicate pages: 301 redirect, a canonical tag on the page you want kept, or delete the copy and redirect its address. Redirects matter most in a redesign, because every old URL that earns traffic needs a destination. Your old-to-new URL list is the check that proves it.

## Sitemaps: A List of the Pages That Matter

A sitemap is a file listing the URLs you care about, and Google says it uses it to prioritise crawling, not to limit it. The starter guide says a sitemap is not required and that some content management systems create one automatically. Google's technical page says sitemaps matter most for sites with rapidly changing content or pages that links may not reveal.

AIOSEO says to submit the sitemap in Search Console and to reference it in robots.txt. Three checks follow, and the last two are my reading from Google's canonical advice:

- **It loads.** Open the sitemap address and confirm it returns a list, not an error.
- **It is submitted.** Search Console accepts the address and reports how many URLs it found.
- **It is clean.** List only pages you want indexed, not redirected, noindexed or duplicate addresses.

A sitemap does not replace internal links. A page listed only in the sitemap is still an orphan page by Semrush's definition.

## Speed, Mobile and HTTPS: Page Experience Checks

Page experience checks come down to three Core Web Vitals numbers, a test on a real phone and a secure connection. Core Web Vitals are Google's measures of loading, responsiveness and visual stability. Semrush gives the thresholds below, and Google's page points to the Core Web Vitals report and PageSpeed Insights for your own numbers.

| Metric | What it measures | Threshold (per Semrush) |
|---|---|---|
| Largest Contentful Paint | Main content load | Within 2.5 seconds |
| Interaction to Next Paint | Response to taps | Under 200 milliseconds |
| Cumulative Layout Shift | Layout jumping | Under 0.1 |

The sources disagree in places. Dashthis prints the INP target as "two milliseconds", which looks like a typo beside Semrush's 200, so check Google's own documentation before quoting either. Mobile share is also contested: AIOSEO says 54.37%, Dashthis 58%, and Google's page says over 60 percent. Use your own analytics instead.

Google's technical page says it now uses a mobile crawler by default, so a site that works only on a desktop is judged on its phone version. Our [mobile-first website article](/blog/mobile-friendly-website/) covers the phone side in detail.

For speed, cognitiveSEO claims about half of visitors leave a site that takes over 3 seconds, and says the average site takes 19 seconds on a 3G connection. Dashthis lists compressing images, a CDN and removing dead pages. Dashthis also says to set sizes on images and banners so the layout does not jump. cognitiveSEO warns against deleting tracking scripts to chase a perfect 100 score.

Google recommends HTTPS, and Chrome can mark plain HTTP as "not secure". Semrush says Google has used HTTPS as a light ranking signal since 2014.

## Schema Markup: Labelling What a Page Is

Schema markup is code that tells search systems what a page is, such as an article, a product or an organisation. Semrush says it is not a direct ranking factor, but it can enable rich results, which may improve click-through. Google says to keep key information in text rather than graphics, and to add structured data when you want special search features.

Semrush's test is simple: generate the code, add it to the page head and check it with Google's Rich Results Test. It lists Organization, Product, Article, Event, Recipe and Review as common types. A business with a shop or clinic should also check its Google Business Profile, which the [free Google Business Profile checker](/tools/google-business-profile-checker/) covers.

My reading is that schema is the last item to polish. A page Google has not indexed gains nothing from markup, so the index checks come first.

## Technical SEO Checklist Template: Copy This

Work this technical SEO checklist top to bottom, because each group depends on the one above it. If a page cannot be crawled, indexing and speed checks on it are wasted effort. The order is my reading; the labels show where each check comes from (G for Google, V for vendor).

### 1. Crawl

- [ ] robots.txt does not block pages or resources you want found (G)
- [ ] Cart, login and account URLs are blocked from crawling (G)
- [ ] Every important page has at least one internal link (V)
- [ ] No redirect chains, loops or broken internal links (V)
- [ ] No 5xx errors on important URLs (V)

### 2. Index

- [ ] `site:` search shows your site (G)
- [ ] Pages report: no key page blocked, noindexed or "crawled, not indexed" (V)
- [ ] Removed pages return a true 404 (G)
- [ ] Bing Webmaster Tools checked (V)

### 3. Canonicals

- [ ] One preferred address; the other three versions 301 to it (V)
- [ ] Duplicate pages redirected or given a canonical tag (G)
- [ ] After a redesign, every old URL maps to a new one (G)

### 4. Sitemaps

- [ ] The sitemap loads and is submitted in Search Console (V)
- [ ] It lists only live, indexable pages (my reading)
- [ ] It is referenced in robots.txt (V)

### 5. Speed, mobile and HTTPS

- [ ] LCP, INP and CLS checked in Search Console and PageSpeed Insights (G)
- [ ] Key pages tested on a real phone (V)
- [ ] Images compressed and sized (V)
- [ ] HTTPS everywhere (G)

### 6. Schema

- [ ] Relevant types added and passed through the Rich Results Test (V)
- [ ] Key facts are in visible text, not only in images (G)

The [website launch checklist](/blog/website-launch-checklist/) repeats the search items for go-live day, and its [tickable launch tool](/tools/website-launch-checklist/) saves progress in your browser.

## Worked Example: Triaging a Made-Up Clinic Site

Triage means fixing first whatever unblocks the most pages, and a worked example shows the arithmetic. This clinic is fictional, not a client, and its numbers are illustrations.

Say the sitemap lists 40 URLs and Search Console's Pages report shows 28 indexed. That is 28 / 40 = 70 per cent, so 12 pages are missing, and the report groups them by reason:

| Reason | Pages | Fix | Effort |
|---|---|---|---|
| Blocked by robots.txt | 5 | Delete one Disallow line covering /services/ | One edit |
| Excluded by noindex | 4 | Remove a tag left from the build | One setting |
| Crawled, not indexed | 3 | Rewrite or merge near-duplicate city pages | Content work |

The first two fixes unblock 5 + 4 = 9 pages, so the best case is 28 + 9 = 37 of 40, or 92.5 per cent. The last 3 need an editorial decision, so they come third. Google says to wait a few weeks to judge a change, so recheck then and expect nothing sooner.

## What Usually Goes Wrong

Most technical SEO failures are left-over settings and untested fixes, not exotic faults. The table pairs each mistake with its cause and the fix.

| Mistake | Cause | Fix |
|---|---|---|
| Whole site not indexed after launch | A staging block was never removed | Check robots.txt and noindex on the live domain |
| A page hidden with robots.txt still appears | Robots.txt stops crawling, not indexing | Use noindex or a login (Google) |
| Slow, leaky redirects after a redesign | Old redirects stacked on new ones | Point each link at the final URL (Semrush) |
| Sitemap lists dead addresses | It was generated once and never reviewed | Review it after every restructure |
| Tracking deleted to reach a 100 score | Chasing the tool, not the visitor | Keep tracking (cognitiveSEO) |
| Fixes judged after two days | Changes take time to show | Wait a few weeks (Google) |

## What to Do Next

Run the crawl and index groups this week, because they decide whether the rest matters. Then work through canonicals, the sitemap, speed and schema in that order, and keep a dated note of what you changed so you can tell what worked.

If you want a second pair of eyes, [Elyx Solutions' SEO optimization service](/services/seo-optimization/) starts with an audit. Its page says technical fixes can lift indexing within weeks, while ranking for competitive searches takes months. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call: [request a quote](/contact.html).

## Sources

- [Technical SEO Techniques and Strategies](https://developers.google.com/search/docs/fundamentals/get-started), Google Search Central (read 20 November 2026; page last updated 18 December 2025)
- [Search Engine Optimization (SEO) Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), Google Search Central (read 20 November 2026)
- [The technical SEO checklist for search engines and AI search](https://www.semrush.com/blog/technical-seo-checklist/), Semrush (read 20 November 2026)
- [What Is Technical SEO? The Best Checklist in 2026](https://aioseo.com/technical-seo/), AIOSEO (read 20 November 2026)
- [A Comprehensive Technical SEO Checklist for 2026](https://dashthis.com/blog/technical-seo-checklist/), DashThis (read 20 November 2026)
- [Technical SEO Checklist: The Roadmap to a Complete Technical SEO Audit](https://cognitiveseo.com/blog/17963/technical-seo-checklist/), cognitiveSEO (read 20 November 2026)

## FAQ

### What is a technical SEO checklist?

A technical SEO checklist is a list of checks that make sure search engines can crawl, index and understand your site and that pages load well on phones. It covers robots.txt, indexing, canonicals, sitemaps, speed and schema. The list above has 21 checks in six groups.

### What is included in technical SEO?

Technical SEO includes crawling, indexing, canonical addresses, sitemaps, site speed, mobile use, HTTPS and structured data. AIOSEO also lists site architecture and duplicate content. Content writing and backlinks sit outside it.

### How do I do technical SEO on my own site?

Start in Google Search Console: read the Pages report, test a few URLs with the URL Inspection tool and check Core Web Vitals. Then work through the template above in order. Hand anything involving server settings, redirects or code to a developer.

### What is the difference between technical SEO and on-page SEO?

Technical SEO is about whether search engines can reach, store and load your pages, while on-page SEO is about the words, headings and media on them. Dashthis makes a similar split between technical and content SEO. Fix technical problems first, because good content on an unindexed page earns nothing.

### When should I do a technical SEO audit?

Do one before a launch, after any redesign or move, and when Search Console reports new errors. Google's technical page gives specific steps for moving a page or a whole site. Beyond that, a yearly pass is my suggestion, not a sourced rule.

### What is an international technical SEO checklist?

It is the same checklist plus hreflang tags, which tell Google which language or country version of a page to show. Semrush says to use hreflang only when a site serves more than one country or language, and Google lists it under multi-lingual sites. An English and Kannada site would need it; a single-language site does not.

### Is there a free technical SEO checklist download or PDF?

This page is the free checklist, and there is no PDF file. Copy the list into Google Sheets or Excel and tick items as you go. The free launch checklist tool is tickable, but it covers go-live checks, not a full technical audit.

### Does crawl budget matter for a small business site?

Almost never, because Google says crawl budget concerns very large sites with millions of changing pages. A small site loses visibility to blocked, broken or duplicate pages instead. Fix those first.

### How long do technical SEO fixes take to show results?

Google says a change can take a few hours to several months to show, and suggests waiting a few weeks before judging it. No one can promise a ranking date.
