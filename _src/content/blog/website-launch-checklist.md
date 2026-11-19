---
title: Website Launch Checklist: 40 Things to Check Before Going Live (Free Download)
seo_title: Website Launch Checklist: 40 Checks Before You Go Live
slug: website-launch-checklist
category: websites
description: A 40-point website launch checklist for Indian businesses: SEO, analytics, forms, legal pages, backups and speed, plus a dated go-live schedule.
date: 2026-11-16
updated: 2026-11-19
author: shreyasmv
---
A website launch checklist is the list of checks you finish on a staging copy, on the day of the switch and in the first week, so that forms, tracking, redirects and search settings work when real visitors arrive. The 40 checks below cover content, forms, speed, SEO, analytics, legal pages and backups, with a dated schedule for the go-live week. The honest qualification is that every source I used is a vendor or practitioner guide, with no Google or regulator document among them, so the search items are common practice, not rules.

- **What you get.** 40 numbered checks in seven groups, each with a way to confirm it, and a worked schedule for a launch on Tuesday 12 January 2027.
- **The download.** This page is the checklist: copy the tables into a sheet, or use the [free tickable launch checklist tool](/tools/website-launch-checklist/), which saves progress in your browser. There is no PDF file.
- **The India layer.** WhatsApp, Google Business Profile, GST details and trade licence numbers are added where they change the advice.
- **The biggest risks.** Missed redirects, a leftover staging block on search engines and forms that work only on the test copy.

## How This Website Launch Checklist Was Built

This list merges five published launch guides and adds the checks an Indian small business needs that those guides skip. The table shows how each source is organised and what I took from it, as read on 17 November 2026.

| Source | How it is organised | What I took |
|---|---|---|
| Webflow | Six parts: design, content, testing, search, analytics, final tests | Image, link and meta tag checks |
| GoDaddy | Build, QA and launch, run across dev, staging and live | Credentials, email delivery, payments |
| Chaser | 17 steps from staging to a verified live site | Redirects, noindex, rollback, week-one review |
| Wix | 50 items in three phases | Mobile and content checks |
| Notion | 15 items, published 23 October 2023 | Form routing, security, plugins |

My reading: a first-time launch and a relaunch share most checks, but a relaunch adds redirects and a rollback plan. If you would rather have a team run the checks, [Elyx Solutions' web development service](/services/web-development/) includes QA, a staging review and launch in its process.

## Content and Design: The Website Design Before Launch Checklist

Content and design checks catch the errors visitors notice first: typos, leftover dummy text, blurry images and an out-of-date logo. Webflow warns that a stray paragraph of Latin filler copy or a misspelled brand name is easy to miss after many design rounds. GoDaddy adds that headers, footers, fonts and spacing should match on every page.

| Check | How to confirm |
|---|---|
| 1. Proofread every page | Read each page against the approved copy, then ask a second person to read it |
| 2. Remove dummy text | Search for the Latin filler words "lorem" and "dolor", plus "test" and "sample", in pages, products and emails |
| 3. Check every image | Sharp on a phone, alt text on non-decorative images, no stock stand-ins |
| 4. Logo and favicon | Latest logo everywhere, and the favicon shows in the browser tab |
| 5. Design consistency | Header, footer, fonts, colours and spacing match across pages |
| 6. Business details match | Phone, WhatsApp number, address and hours are identical on the site and Google Business Profile |

Item 6 is my addition for Indian trade, where customers often compare your site with your Maps listing before they call.
## Forms and Enquiry Paths: What to Test Before Launch

An enquiry path is only tested when a message reaches a human, so every form, button and payment step needs a real end-to-end run. Chaser and Notion both put form testing first, and Chaser says form and redirect work take the longest, so start there.

| Check | How to confirm |
|---|---|
| 7. Submit every form on staging | Fill each form and confirm the message arrives |
| 8. Check the receiving inbox | Right address, and the message is not in spam |
| 9. Thank-you message | The visitor sees a confirmation after sending |
| 10. Spam protection | A simple filter or captcha is on every public form |
| 11. WhatsApp click-to-chat | Opens the right number with the pre-filled message |
| 12. Click-to-call | Tap the number on a real phone and confirm it dials |
| 13. Connected tools | CRM, autoresponder or sheet receives the test lead |
| 14. Payments, if you sell | Gateway is live, not in test mode; one small real purchase and refund work |

GoDaddy explains why item 8 matters: some web hosts block outgoing mail, and Gmail or Outlook may block servers with a spam history. Its fix is an SPF record, a DNS entry that allowlists the host. Item 14 follows GoDaddy's advice to keep a very low-priced product, which it puts at $1, to test a live transaction. In India, use the smallest amount your gateway allows and include a UPI payment if you offer it.

### If You Sell Online: A Launch Online Store Checklist

Beyond item 14, GoDaddy lists store-specific checks: remove test products, review receipts and system emails for leftover dummy text, and go through the customer journey yourself. Create an account, add to cart, pay and cancel an order. For booking flows, [the WhatsApp booking guide](/blog/whatsapp-booking-for-website/) compares the options.

## Speed and Device Testing: Is the Site Fast on a Real Phone?

A site passes the speed check when its main pages load quickly on a real phone over mobile data, not only on your office Wi-Fi. Wix states that mobile devices account for 52% of global internet traffic, though the passage I read names no source for that figure. In India, a patchy 4G connection is the normal case for many visitors.

| Check | How to confirm |
|---|---|
| 15. Real devices | One Android phone, one iPhone and two browsers |
| 16. PageSpeed Insights | Run it on the home page and top landing pages |
| 17. Compress and cache | Images compressed, static files cached, a CDN if available |
| 18. Remove dead weight | Delete unused plugins and scripts |
| 19. Click everything | Menus, footer, buttons and logo links; run a link crawler |
| 20. Basic accessibility | Run the WebAIM WCAG 2 checklist or the A11y Project checklist |

Webflow names the W3C Link Checker, the Chrome extension Check My Links and Screaming Frog as crawlers for item 19. GoDaddy points to the WebAIM and A11y Project checklists for item 20.

## SEO Checks Before Going Live

The SEO items that matter at launch are the ones that decide whether Google can find, read and index the site at all. Items 21 and 22 are labels on each page, and items 23 to 28 are the site-wide switches that most often break in a move.

| Check | How to confirm |
|---|---|
| 21. Titles and descriptions | Unique on every page |
| 22. Headings | One H1 per page, with H2 and H3 in logical order |
| 23. Staging block removed | No noindex tag or password; robots.txt allows crawling |
| 24. One canonical version | www and non-www resolve to one address, with canonical tags set |
| 25. Sitemap | XML sitemap loads and is ready to submit in Search Console |
| 26. Structured data | Organization or LocalBusiness markup passes a testing tool |
| 27. Share preview | A link pasted into WhatsApp or Facebook shows a title and image |
| 28. Redirects and 404 | Old URLs map to new ones with 301 redirects; a custom 404 page exists |

On lengths, Webflow advises titles under 70 characters and descriptions of 135 to 160, and says Google rewrites 70% of meta descriptions, which is Webflow's claim, not a Google statement I could verify. Chaser says to export every indexed URL from Search Console and map each to its closest new page. GoDaddy says Google's Change of Address tool covers only the site's content, while a domain change also touches DNS, SSL and email.

## Analytics and Tracking: Know Which Enquiry Came From Where

Analytics are launch-ready when a test enquiry appears in your reports from the live site, not just when the tracking code is pasted in. GoDaddy recommends separate Google Analytics properties for staging and live, because third-party tools tied to a domain do not work on a different one.

| Check | How to confirm |
|---|---|
| 29. Live analytics | A GA4 property is installed on the live domain only |
| 30. Enquiry events | Form submits, WhatsApp clicks and call taps are tracked as events |
| 31. Test conversion | Submit a test and watch it appear in the reports |
| 32. Google accounts | Search Console verified; Google Business Profile links to the site |

Items 30 and 32 reflect how Indian local trade is found, and the studio's own checklist tool lists the same events and profile link. Notion says to confirm ownership in Search Console and watch bounce and conversion rates after launch.

## Legal Pages and Trust Details

The legal pages a site needs depend on what it collects and sells, and the owner, not the developer, is responsible for them. GoDaddy says privacy policies, user agreements and image licensing are the client's responsibility, and that the client should check with legal counsel before launch. This section is a business lens, not legal advice, and I did not read any Indian statute for this article.

| Check | How to confirm |
|---|---|
| 33. Privacy notice | Live, linked from the footer and forms, and matches the data you collect |
| 34. Policies for money | Terms, refund and cancellation text if you take payments or bookings |
| 35. Business identity | Legal name, address and GST number if registered, plus FSSAI or RERA numbers where your trade expects them |
| 36. Permissions and claims | Image licences, written testimonial consent and claims you can prove |

The studio's own tool lists a privacy notice tied to India's Digital Personal Data Protection Act, so have a lawyer confirm what applies to you. The studio's industry pages note that food businesses are expected to show an FSSAI number and that clinics and coaching centres face limits on advertising claims. Check current rules with your council or regulator before publishing.

## Backups and Security: Can You Recover If Launch Goes Wrong?

A backup counts only after someone has restored from it, so this section asks for a restore test, not just a switch turned on. Chaser says to back up the old site's files and database before the cutover and agree a rollback plan with your development partner.

| Check | How to confirm |
|---|---|
| 37. Back up the old site | Files and database copied, with a written rollback plan |
| 38. Backups on the new site | Automatic, stored away from the server, one restore tested |
| 39. HTTPS and admin access | Valid certificate, strong unique passwords, only needed users |
| 40. Accounts in your name | Domain, DNS, hosting and CMS logins held by the business |

GoDaddy says to test credentials the day before and the day of launch so nobody is locked out mid-switch, and Notion says to keep logins in a password vault and give each CMS user only the access they need. [The article on who owns your website](/blog/who-owns-my-website-code/) explains why item 40 matters.
## Launch Day: A Dated Schedule

Run the checks across about two weeks, with the switch itself on one day. Chaser recommends one to two weeks for pre-launch checks and a single day for the cutover, and warns that squeezing checks into the last 48 hours tends to leave tracking broken or redirects missed.

The schedule below is a worked example I built from Chaser's timing, GoDaddy's credential advice and Chaser's one-week review, for a launch on Tuesday 12 January 2027. Count back 14 days for the earliest start (29 December 2026) and 7 days for the latest (5 January 2027).

| Date | What happens | Items |
|---|---|---|
| Tue 29 Dec 2026 | Start redirect map, form tests and old-site backup | 7 to 14, 28, 37 |
| Tue 5 Jan 2027 | Content freeze; speed, SEO and legal checks done | 1 to 6, 15 to 27, 33 to 36 |
| Mon 11 Jan | Test logins, take final backup, collect written sign-off | 38 to 40 |
| Tue 12 Jan | Switch in the agreed window; remove noindex; retest live | 23, 29 to 32 |
| Tue 19 Jan | Review Search Console for crawl errors and 404s | 25, 28 |

After the switch, Chaser says to spot-check that the ten highest-traffic old URLs land on the right pages, submit the sitemap and request indexing for key pages. Chaser also says some ranking movement is normal for two to four weeks while Google recrawls.

## What Usually Goes Wrong at Launch

Most launch failures are things that passed on the staging copy and broke on the live one. The table pairs each cause with the check that prevents it, using the sources above.

| What goes wrong | Cause | Fix |
|---|---|---|
| Site invisible to Google | Staging noindex or password left on | Item 23 |
| Rankings vanish | Old URLs not redirected | Item 28 |
| Form works only on staging | Settings tied to the test domain | Items 7 and 31 |
| Payments fail | Gateway left in test mode | Item 14 |
| Mail never arrives | Host blocks mail; no SPF record | Item 8 |
| Last-minute rush | Checks packed into 48 hours | The schedule above |
| Steps assumed done | Nobody owns the list | One named owner |

Chaser says split ownership shows up after launch as steps each side assumed the other had done.

## What to Do Next

Pick one owner, copy the tables into a sheet and give each item a date from the schedule. Then run items 7 to 14 first, because they take the longest and decide whether enquiries arrive. If you want a tick-off version, the [free launch checklist tool](/tools/website-launch-checklist/) has 25 grouped checks and saves your progress in the browser.

If you would rather hand the work over, [the web development service](/services/web-development/) lists QA, staging and launch as its final stage, with 30 days of post-launch support on the Launch tier. A business website usually takes {{weeks:website}} at Elyx, and engagements start from {{start}}, excluding GST. A fixed quote tailored to your requirements is confirmed in writing after a call.

## Sources

- [The ultimate pre-launch checklist for your website: 6 essentials](https://webflow.com/blog/the-essential-pre-launch-checklist-for-your-website), Webflow (read 17 November 2026)
- [Your complete website launch checklist](https://www.godaddy.com/resources/skills/website-launch-checklist), GoDaddy (read 17 November 2026)
- [Website launch checklist for marketing teams](https://www.trychaser.com/checklist-articles/website-launch-checklist-for-marketing-teams), Chaser (read 17 November 2026)
- [Website launch checklist: 50 essential things to do before (and after) publishing](https://www.wix.com/blog/website-launch-checklist), Wix (read 17 November 2026)
- [Website launch checklist: 15 things to consider](https://www.notion.com/blog/website-launch-checklist), Notion (read 17 November 2026)

## FAQ

### How do I launch a website?

Finish the checks on a staging copy, switch the domain in an agreed window, then retest the live site. The order is content, forms, speed, SEO, analytics, legal pages and backups, then the switch. The schedule above puts that across about two weeks.

### What makes a good website checklist?

A good website checklist names an owner, a way to confirm each item and a date. The five sources I read run from Notion's 15 items to Wix's 50, but the useful ones say how to confirm a check, not just what to check.

### What should a website launch checklist include?

It should include content, forms, speed, SEO, analytics, legal pages, backups and security. Add redirects if you are replacing a site, and payment tests if you sell. This page lists 40 checks in those groups.

### How long should pre-launch checks take?

Plan one to two weeks for the checks and a single day for the switch. Chaser gives that timing for marketing teams working with a development partner. A one-page site may need less, which is my reading, not a sourced figure.

### Do I need 301 redirects when I launch a website?

You need them only if you are replacing a site whose URLs change. A 301 redirect sends visitors and Google from an old address to its new one. Chaser says to map every URL Google has indexed.

### What should I check after the website goes live?

Check forms, analytics and redirects on the live domain, then submit your sitemap in Search Console. Chaser says to review crawl errors and 404s a week later. Expect some ranking movement for two to four weeks, per Chaser.

### Is there a free website launch checklist download?

This page is the free checklist, and the tickable version is on the free launch checklist tool. There is no PDF or file download. Copy the tables into Google Sheets or Excel if you want your own copy.

### Who should own the website launch checklist?

One named person on the business side should own it, even when an agency builds the site. Chaser says the agency can run the technical switch, but the checklist owner verifies each item and makes the go decision. Without an owner, steps get assumed done.

### What legal pages does an Indian business website need?

It depends on what the site collects and sells, but a privacy notice is the usual starting point. Add terms and refund text if you take payments, and sector numbers such as FSSAI or RERA where your trade shows them. This is a business view, so confirm with a lawyer.
