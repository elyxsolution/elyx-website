---
title: Google Search Console for Business Owners: The 5 Reports That Matter
seo_title: Google Search Console Guide: The 5 Reports That Matter
slug: google-search-console-guide
category: seo
description: A plain Google Search Console guide for business owners: the five reports to check each month, what the numbers mean and what to fix first.
date: 2026-11-18
author: shreyasmv
---
A Google Search Console guide for a business owner comes down to five reports: Performance, Indexing, Sitemaps, Experience and Links. Search Console is Google's free tool that shows how Google finds, stores and displays your site, and a monthly look at those five covers most of what an owner needs. The honest qualification is that it reports what Google recorded, not what customers did, and I wrote this from Google's own documentation and four SEO publishers' guides, with no tests of my own.

- **Performance.** It shows which searches display your site and how many people click.
- **Indexing and Sitemaps.** They show whether Google has your pages, and why some are missing.
- **Experience and Links.** They show how real visitors get your pages and who points to them.

## What Is Google Search Console, and Do You Need It?

Google Search Console is a free tool from Google that shows how Google crawls, indexes and serves your website, and a Google account is the only requirement, per Google's Search Console Help. I read every source below on 19 November 2026. It is not a ranking factor, and it is not Google Analytics: Moz explains that Search Console covers search performance while Analytics covers what visitors do on the site.

You do not need it to appear in Google, and Semrush says as much. Without it, though, Semrush adds, you will not know why a page stopped ranking or why Google skipped something you published. Google's own help for small businesses says an owner on an automated host such as Wix, Blogger or Squarespace with little time might not need it at all, and points them to the Site Kit plugin for WordPress or the Insights report instead.

My reading: if anyone else builds or redesigns your site, or you pay for SEO, have it. It is a free record of what Google saw. If you would rather have someone read it for you, [Elyx's SEO optimization service](/services/seo-optimization/) sets up Search Console and GA4 and reports monthly.

## How to Set Up Google Search Console and Who Should Own It

Setting up Google Search Console takes four steps: sign in, add your site as a property, verify that you own it, and give access to the people who need it. Data does not start collecting until you verify, according to Search Engine Journal, so do it before you need the numbers.

1. **Sign in with a business Google account.** Use one the business controls, not a freelancer's personal Gmail.
2. **Choose Domain or URL prefix.** A Domain property covers every subdomain, http and https, and subfolder, and Search Engine Journal and Moz recommend it for most sites. A URL prefix property tracks one exact address pattern and offers more ways to verify.
3. **Verify.** A Domain property needs a TXT record added in your domain's DNS settings, at the registrar where you bought the domain. A URL prefix property can use an HTML file, an HTML tag, Google Analytics, Tag Manager or your domain provider (Moz and Semrush).
4. **Add people.** Open Settings, then Users and permissions, then Add user, and choose owner, full or restricted access (Mangools).

If verification fails, wait and retry. Moz and Semrush say DNS changes can take up to 48 hours, while Mangools says up to 72, so the sources differ and the longer figure is the safe one.

Leave the verification record or file in place, because Moz warns that removing it means verifying again. Search Engine Journal adds that Settings lists unused ownership tokens, so you can cut off a former owner whose old code still works.

If a freelancer or agency did the setup, check that you are an owner too, and read [who owns your website's domain, code and logins](/blog/who-owns-my-website-code/) before a handover.

## Google Search Console Guide: The Five Reports in One Table

The five reports below answer five owner questions, and each has one place to look. The table reorganises Google's own report list: the choice of five and the check rhythm are my reading, while Google itself says only to check about monthly or after site changes.

| Report | Question it answers | Look at it |
|---|---|---|
| Performance | Which searches show my site, and who clicks? | Monthly |
| Indexing | Which pages has Google stored, and which not? | Monthly, and after publishing |
| Sitemaps | Did Google read my list of pages? | After launch or a URL change |
| Experience | Do real visitors get fast, stable pages? | Monthly |
| Links | Which sites and pages link to mine? | Quarterly |
## Report 1: Performance, Where Customers Show Up

The Performance report shows how often your site appeared in Google Search and how many people clicked, split by query, page, country and device. Google's documentation describes it as your traffic from Search with trends for impressions, clicks and more. It sits under Search results in the left menu.

Four numbers matter, as Google's help and Mangools define them:

- **Clicks.** How many times people clicked through from Google to your site.
- **Impressions.** How many times your result was shown, whether or not anyone clicked.
- **CTR.** Click-through rate: clicks divided by impressions.
- **Average position.** Your average rank. Search Engine Journal says a position in the twenties means a result appears only after scrolling, and beyond 30 may call for significant work.

You can filter by date, query, page, country, device and search appearance, and compare two date ranges (Mangools). Google's Search Central blog named a branded queries filter among recent additions on 16 November 2026, but I only had the post's opening lines, so read it for details.

Two limits are worth knowing. Semrush says the report does not show AI Overviews or AI Mode separately. And my sources show nothing about Google Maps listings, so do not expect calls or direction requests here.

### A worked example with the arithmetic

This example uses a made-up physiotherapy clinic in Hubballi, with invented numbers. Its knee-pain page shows 3,000 impressions and 45 clicks in a month, so CTR is 45 ÷ 3,000 = 1.5%. Its back-pain page shows 400 impressions and 40 clicks, so CTR is 40 ÷ 400 = 10%.

The first page is shown often and clicked rarely, so a better title and description is the cheapest fix. If that lifted CTR to 3%, the same impressions would give 3,000 × 0.03 = 90 clicks. That is an illustration of the arithmetic, not a forecast.

### What to do with each pattern

The table below pairs patterns with the readings that Semrush, Search Engine Journal, Mangools and Google give for them.

| You see | It may mean | First move |
|---|---|---|
| Many impressions, low CTR | Title or description misses the searcher's need | Rewrite both |
| Average position 4 to 15 | Striking distance (Semrush) | Expand thin sections, add internal links |
| Position beyond 30 | Page needs significant work (Search Engine Journal) | Check indexing, then rewrite |
| Impressions up, CTR down | Often more low-position impressions (Mangools) | Usually no action |
| Sudden drop in position | Possibly a core update | Wait, then compare as below |

After a core update, Google says to wait at least a full week after the rollout ends, then compare that week with the week before it started. A small drop, such as position 2 to 4, needs no drastic action. A large one, such as 4 to 29, deserves a deeper review, and Google advises analysing web, image, video and news results separately.

## Report 2: Indexing, Is Google Holding Your Pages?

The Page indexing report lists which pages Google has stored for search and which it left out, with a reason for each. Older guides, and Google's own getting-started page, call it Coverage or Index Coverage. A page that is not indexed cannot appear in results at all, so this report explains a zero in Performance.

For a single page, use URL Inspection: paste the address into the search bar at the top. Moz says a green check means the page is on Google and can appear, not that it ranks for anything. Moz lists the usual reasons for "not indexed":

- **Blocked.** The robots.txt file, a noindex instruction or a login requirement keeps Google out.
- **An error when Google last visited.** The page returned a 400 or 500 status code.
- **An alternate version.** The page is a copy of another one, which needs no fix.

Not every missing page is a fault. Google's Search Essentials says that meeting every requirement does not guarantee Google will crawl, index or serve a page. Check the cause before you act.

After a fix, be patient: Google says it does not recrawl straight away, and Search Console can keep showing an error for a few days. URL Inspection lets you request a crawl, and Moz reports a limit of about 10 to 12 requests in 24 hours, so request each URL once. If Google cannot fetch your robots.txt, for instance because a firewall blocks it, Search Engine Journal says Google pauses crawling for 12 hours.

## Report 3: Sitemaps, the List You Hand to Google

A sitemap is a file listing the URLs you want Google to start crawling from, and the Sitemaps report shows whether Google could read yours. Google says it can find pages without one, but submitting a sitemap may speed discovery and lets you monitor the result.

To submit one, copy its address, open Sitemaps in the left menu, paste it into the Add a new sitemap box and press Submit (Search Engine Journal and Semrush). The usual address is your domain followed by /sitemap.xml, and WordPress may use sitemap_index.xml instead. Search Console then shows a status saying it succeeded or found errors, and you may submit more than one sitemap.

The number to watch is submitted pages against indexed pages. Say a sitemap lists 40 pages and 31 are indexed: 40 minus 31 leaves 9 pages, and those nine are your to-do list. Search Engine Journal says the three-dot menu beside a sitemap opens the page indexing view with the reasons.

Semrush advises listing only pages you want in search results. The [website launch checklist](/blog/website-launch-checklist/) lists the sitemap as a pre-launch check and schedules a Search Console review a week after go-live.

## Report 4: Experience, Speed and Security Alerts

The Experience reports show how real visitors get your pages, chiefly through the Core Web Vitals report, and Google's help says such usability metrics can affect ranking. Google's documentation says the report uses real-world usage data, sometimes called field data, and Google's Search Console page says it covers mobile and desktop. A lab test on your own phone is not the same thing.

Be careful with older guides. As our [mobile-friendly website article](/blog/mobile-friendly-website/) reports, citing SEOmator, Google retired the Mobile Usability report on 1 December 2023, yet some guides still describe it.

### Security issues and manual actions

Two alerts matter more than any chart: security issues and manual actions. Google's help says the Overview shows them and that Google emails you when one occurs, so if the Overview shows none, you need not open those reports. A security issue means Google found signs the site was hacked, and a manual action means a spam-policy violation that can demote or remove pages.

Emails go to verified owners and users (Search Engine Journal). Make sure the address on the account is one someone reads, and forward any alert to your developer the same day.

## Report 5: Links, Who Points to You

The Links report shows which sites link to your content and which links your own pages contain, and my sources describe it only briefly. Mangools lists checking who links to you among Search Console's uses, and Semrush lists reviewing internal and external links. I did not have the report's tables or limits, so open Google's Search Console Help for those.

What I can source is why links matter. Google's Search Essentials says to make links crawlable so Google can find other pages through them, and to tell people about your site in communities where it is relevant.

My reading for a small business: point internal links at your service pages, and earn inbound ones from local bodies and partners. Search Essentials warns that spam tactics can lower rankings or remove a site, so anyone selling links in bulk is selling that risk.

## A Monthly Routine for a Busy Owner

A monthly check can be a short checklist, because Google's help says many users need only a quick check-up once a month unless an alert arrives. The routine below is my suggestion, built from the reports above, and the time it takes depends on your site.

- [ ] Overview: no security issue or manual action.
- [ ] Performance: compare the last month with the one before.
- [ ] Copy the top queries and pages into a sheet, since the window is about 16 months.
- [ ] Pick one page with high impressions and low CTR, and rewrite its title.
- [ ] Page indexing: note the not-indexed count and any new reason.
- [ ] URL Inspection: test each page published this month.
- [ ] Sitemaps: status is a success, and submitted pages match indexed pages.
- [ ] Experience: no new failing pages.
- [ ] Users: everyone listed still works with you.
- [ ] Every third month, skim Links.

## What Usually Goes Wrong

Most Search Console trouble comes from timing, ownership and misreading. Google says appearing in search costs nothing, so find the cause before you pay anyone to fix it.

| What goes wrong | Cause | Fix |
|---|---|---|
| Verification fails | DNS has not updated | Wait up to 72 hours, retry |
| No owner on your side | A freelancer verified it | Get added as owner |
| A fixed page still shows an error | Google has not recrawled | Wait days, request once |
| Panic over a small rank change | Normal movement after updates | Compare weeks, act on large drops |
| Every "not indexed" treated as a fault | Google does not index everything | Check blocks and status codes first |
| A lower CTR blamed on the page | AI answers may sit above it | Check position and query first |
| Following a retired report's guide | Mobile Usability ended in 2023 | Test on a real phone |

The CTR row rests on Semrush, which says AI Overviews can lower CTR. I found no figure for how much.

## What to Do Next

This week, do three things: verify a Domain property with a business account, submit your sitemap, and copy this month's top queries and pages into a sheet as a baseline. Then book the monthly check in your calendar. Without a baseline, next month's numbers cannot tell you whether anything changed.

If you would rather have it read and acted on, [Elyx's SEO optimization service](/services/seo-optimization/) begins with an audit of indexing, sitemaps and redirects, and reports monthly from Search Console and GA4. SEO engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call, so [request a quote](/contact.html). No studio can promise rankings, and Elyx does not.

## Sources

- [How To Use Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start), Google Search Central- [Getting started with Search Console](https://support.google.com/webmasters/answer/10267942?hl=en), Google Search Console Help- [Get started with Search Console](https://support.google.com/webmasters/answer/9128669?hl=en), Google Search Console Help- [Debug Your Website Pages](https://developers.google.com/search/docs/guides/debug), Google Search Central- [Google Search's Core Updates](https://developers.google.com/search/updates/core-updates), Google Search Central- [Google Search Essentials](https://developers.google.com/search/docs/essentials), Google Search Central- [Search and SEO Blog](https://developers.google.com/search/blog), Google Search Central- [Google Search Console](https://search.google.com/search-console/about), Google- [Google Search Console Complete Guide For SEO](https://www.searchenginejournal.com/google-search-console-guide/209318/), Search Engine Journal- [Google Search Console: A Beginner's Guide](https://mangools.com/blog/google-search-console/), Mangools- [A Beginner's Guide to Google Search Console](https://moz.com/blog/a-beginners-guide-to-the-google-search-console), Moz- [Google Search Console: the ultimate guide for 2026](https://www.semrush.com/blog/google-search-console/), Semrush
## FAQ

### How do I use Google Search Console?

Verify your site, then open Performance, Page indexing, Sitemaps and the Experience reports about once a month. Start at the Overview for alerts, then use Performance for clicks and URL Inspection for any page that seems to be missing.

### Does Google Search Console help with SEO?

Yes, as evidence for decisions, though it is not a ranking factor itself. Moz notes a site can rank well without it. What it gives you is a list of pages to rewrite, pages to get indexed and problems Google has flagged.

### What does Google Search Console help with?

It helps you see your search traffic, check indexing, submit sitemaps and get alerts about problems. Google's Search Console page lists queries, impressions, clicks and position, sitemap and URL submission, email alerts and Core Web Vitals monitoring.

### How does Google Search Console help with website indexing?

It shows which pages Google indexed and why others were not, and it lets you ask Google to crawl a page. The Page indexing report gives reasons, and URL Inspection tests one page and offers a crawl request. Google says a fix can still take a few days to show.

### How does Google Search Console work?

It reports data Google gathers while crawling, indexing and serving your site, once you verify ownership. Search Engine Journal says it keeps up to 16 months of data.

### How do I access Google Search Console?

Open Google's Search Console page, sign in with a Google account and choose the property you verified. If someone else set the site up, ask them for owner or full access under Settings, then Users and permissions. It is a web tool with no download, and a Google account is the only requirement.

### Is Google Search Console free?

Yes. Google's Search Console Help says a Google account is the only requirement, and Search Essentials says it costs nothing to appear in Google Search. If someone charges you, you are paying for their time and not for the tool.

### What is the difference between Search Console and Google Analytics?

Search Console shows how your site performs in Google Search, while Analytics shows what visitors do after they arrive. Moz makes that split and says you can link the two accounts. Use Search Console for searches, indexing and errors, and Analytics for behaviour and enquiries.

### How often should I check Google Search Console?

About once a month, and again after you change the site. Google's Search Console Help says many users need only a quick monthly check-up unless Google alerts them, and the documentation suggests checking after content changes. A week after any launch or redesign is a sensible time for a closer look.
