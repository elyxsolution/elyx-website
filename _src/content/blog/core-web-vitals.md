---
title: Core Web Vitals Explained: Why Speed Affects Sales and Rankings
seo_title: Core Web Vitals Explained: LCP, INP and CLS in Plain English
slug: core-web-vitals
category: seo
description: Core Web Vitals explained: what LCP, INP and CLS measure, Google's good-score limits, how to test your own site and what the evidence says about sales.
date: 2026-11-19
author: shreyasmv
---
Core Web Vitals are three measures Google publishes for how a page feels to a real visitor: Largest Contentful Paint (LCP) for how soon the main content appears, Interaction to Next Paint (INP) for how fast the page answers a tap, and Cumulative Layout Shift (CLS) for how much it jumps around. A page counts as good at 2.5 seconds, 200 milliseconds and 0.1, measured on real visits. The honest qualification is that Google treats them as one input among many, and none of the sources I read gives a conversion or revenue figure, so the link to sales rests on engagement evidence.

- **The three numbers.** LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of 0.1 or less are good, judged separately for mobile and desktop.
- **Rankings.** Google says good scores align with what its core ranking systems reward, while practitioners and studies describe the weight as small next to content relevance.
- **Sales.** Google's web.dev says faster, steadier pages often lift engagement and conversions, but no source here puts a rupee value on a second saved.
- **Your next step.** Test with PageSpeed Insights and Search Console, fix the biggest image first, and wait about 28 days before judging.

## Core Web Vitals Meaning: Three Measures and Their Limits

Core Web Vitals are the three user-experience measures Google asks site owners to watch: loading, responsiveness and visual stability. Google Search Central describes them as metrics for real-world experience of loading performance, interactivity and visual stability. web.dev adds that they come from your actual visitors, and are not "what Google thinks" or what Googlebot sees.

One warning about older pages. Cloudflare's explainer still lists First Input Delay (FID) as the third measure, but Akamai and the CoreVitals checker both state that INP replaced FID in March 2024. A guide that names FID is out of date.

Google rates each measure as good, needs improvement or poor, and the lower number is always the better one. The table below gives the ranges as published in Google's Search Console Help, read on 19 November 2026.

| Measure | What it asks | Good | Poor |
|---|---|---|---|
| LCP | How soon does the main content appear? | 2.5 seconds or less | Over 4 seconds |
| INP | How fast does the page respond to taps? | 200 ms or less | Over 500 ms |
| CLS | How much does the layout jump? | 0.1 or less | Over 0.25 |

Anything between good and poor is "needs improvement". Google reads each figure at the 75th percentile: a page passes only when three visits out of four are good.

## LCP: How Long Until the Main Content Appears

Largest Contentful Paint is the time from the visitor starting to load your page until its largest piece of content, usually a banner image or a headline, is visible. web.dev says the LCP element is an image on roughly 80% of web pages, so the hero photo on a clinic or shop home page is usually the thing being timed. Cloudflare adds that LCP does not time the whole page, only that largest element.

A slow LCP often starts before the page even arrives. web.dev points to Time to First Byte (TTFB), the wait before the first part of the page downloads, and says a good LCP is impossible if the site takes seconds just to start. A host far from your visitors and chains of redirects are the usual causes it names.

## INP: How Quickly the Page Answers a Tap

Interaction to Next Paint measures how long the page takes to react after a visitor taps, clicks or presses a key. Akamai says it covers every such interaction during the visit and reports one value that all interactions stay under, and Search Console says the final value is the longest interaction seen, ignoring outliers.

Picture tapping the menu or a "Book on WhatsApp" button and waiting half a second for anything to happen. That is an illustration of my own, but it sits inside Google's own ranges: poor starts above 500 milliseconds.

INP is the hard one. corewebvitals.io, a performance consultancy, says only 74% of mobile sites passed it in the 2024 Web Almanac and that fixes usually mean changing how JavaScript runs. The CoreVitals checker adds that lab tests cannot measure it: Lighthouse uses Total Blocking Time as a stand-in because no one taps anything in a lab run.

## CLS: How Much the Page Jumps While It Loads

Cumulative Layout Shift scores how far visible content moves unexpectedly, and 0.1 or less is good. Cloudflare explains that each shift is scored as impact fraction times distance fraction, and that the page's CLS is its largest burst of shifts. The worked example below uses Cloudflare's own figures: a 400-pixel-high screen where 200 pixels of content move down by 50 pixels.

1. **Impact fraction.** 200 pixels affected, divided by the 400-pixel screen, gives 0.5.
2. **Distance fraction.** 50 pixels moved, divided by 400, gives 0.125.
3. **Score.** 0.5 multiplied by 0.125 gives 0.0625, which is under the 0.1 limit.

My extension, with the same arithmetic: if that block moved 80 pixels instead, the distance fraction is 80 divided by 400, or 0.2, and 0.5 times 0.2 is 0.10, right at the limit. A real phone screen is taller, so treat the 400 pixels as a teaching simplification. The practical lesson is that a late banner, an image with no reserved space or a late-loading ad can push a page from good to failing.

## Do Core Web Vitals Affect SEO? What Google Says and What Third-Party Analyses Found

Core Web Vitals affect SEO as one signal among many, and Google does not publish how much weight they carry. Keeping the documented facts apart from other people's analysis:

**Documented by Google**

- Google Search Central (page last updated 10 December 2025, read 19 November 2026) says it highly recommends good Core Web Vitals and that they align with what its core ranking systems seek to reward.
- Search Console's report is built on real-user field data from the Chrome UX Report (CrUX), and it reports mobile and desktop separately.

**Reported by others, not by Google**

- corewebvitals.io says Google's documentation was updated on 12 March 2024 to say ranking systems use them.
- It cites Advanced Web Ranking (2022, 3 million pages): positions 1 to 3 had lower LCP than positions 8 to 10, yet many top-10 pages had no CrUX data at all.
- It also cites Perficient (December 2021), which found Core Web Vitals were not a large ranking factor, and reports Google's John Mueller saying they count for more than a tiebreaker but do not replace relevance.
- Every study it lists used FID, so none measures INP against rankings.

My reading, and it is analysis, not fact: treat the three limits as a bar to clear, not a growth tactic. corewebvitals.io, which sells monitoring, argues the same, calling Core Web Vitals a gate and not a growth lever, so weigh that as one practitioner's opinion. If your page is failing badly, fix it; if it already passes and the content is thin, speed work will not rescue it.

## Does Speed Affect Sales? What the Evidence Supports

Speed is linked to engagement in the sources I read, but none of them shows a measured effect on sales. web.dev's guide for business decision makers says user experience has been shown to affect business outcomes, and that faster, more responsive sites often see more engagement and conversions, with no figure attached.

The one number comes from corewebvitals.io: a study of 7 million sessions by Agency FIFTY3 found a moderate negative correlation (r = -0.470) between CLS and engagement rate, so pages that jumped less kept visitors more. Akamai, a vendor, says slow pages send users elsewhere and that optimised sites convert better, which is a vendor's claim, not a test.

So I cannot tell you what a second is worth in rupees. The way to find out is the log below. For an Indian business the phone matters most, though I have no verified Indian figure for mobile share or 4G speed. Search Console combines visits from all locations, so a slow-connection audience pulls your numbers down. The [mobile-first website guide](/blog/mobile-friendly-website/) covers what to measure for that audience.

## Core Web Vitals Test: How to Check Your Own Site

You can run a Core Web Vitals test for free with PageSpeed Insights and Google Search Console, and the real-visitor numbers matter more than the lab score. The steps:

1. **PageSpeed Insights.** Paste a URL and read the section on what real users experience, which shows the last 28 days of Chrome visits. Switch between Mobile and Desktop, and between This URL and the whole origin (web.dev). It also works on a competitor's site.
2. **Search Console.** Verify ownership, then open the Core Web Vitals report. It groups similar pages, and a group takes the status of its worst metric, so poor CLS with good INP is poor.
3. **Lighthouse last.** It is a single simulated load, and the CoreVitals checker says scores can differ by 5 to 10 points between runs. Use it to diagnose, not to judge.

| Tool | Data type | Best for |
|---|---|---|
| PageSpeed Insights | Field and lab | Quick check of one page |
| Search Console | Field only | Whole-site groups of pages |
| Lighthouse | Lab only | Finding the cause |

The table is a summary of web.dev's guide to Google's tools. If you see "no data available", the site is new or too small for CrUX, per Search Console Help and the CoreVitals checker, and lab numbers are then your only proxy. The Core Web Vitals report also shows a sample of indexed URLs, not every page.

## Before and After: A Log to Keep for Your Own Site

A before-and-after log is a dated record of your own Core Web Vitals and enquiry counts, and it is the honest way to learn what speed work did for your business. This article cannot supply studio before-and-after figures: the research behind it holds none, so I am not inventing any. Elyx Solutions' [SEO optimization](/services/seo-optimization/) page lists Core Web Vitals and speed work, and the [Ashirwad Dental case study](/work/ashirwad-dental/) lists speed and a mobile-first layout among what was built, without Core Web Vitals numbers.

Copy this into a sheet and fill the cells yourself. It is a template, not data.

| Record | Where to read it | When |
|---|---|---|
| LCP, INP, CLS (mobile) | PageSpeed Insights, field data | Day 0, then day 28 or later |
| Status of each page group | Search Console report | Day 0, then day 28 or later |
| Enquiries from form, WhatsApp and calls | Inbox, WhatsApp, call log | The 28 days either side |

Use the same pages and device each time. Change nothing else that affects enquiries in that window, such as ads or copy, or you will not know which change did the work. Seasonal demand, like an admission season, is another trap to note in the sheet.

## How to Fix Core Web Vitals: What Moves Each Number

Most fixes target one cause per measure: the main image for LCP, heavy scripts for INP and unreserved space for CLS. The table sums up what Cloudflare, Akamai, web.dev and corewebvitals.io recommend.

| Measure | Common cause | Fix | Who acts |
|---|---|---|---|
| LCP | Heavy hero image, slow server, redirects | Compress image, use a CDN, cut redirects | Owner or developer |
| INP | Long JavaScript tasks, third-party tools | Remove unused scripts, split long tasks | Developer |
| CLS | Images without set size, late ads | Set width and height, reserve space | Developer |

web.dev says business owners influence speed through design, content and ad decisions: redirects and URL parameters in campaigns, and ads aimed at people you cannot serve, all cost speed. It also says many fixes need a developer.

The November 2026 edition of The State of Web Vitals, from the corewebvitals.io team, measured React and Next.js sites. Its findings are correlations on one framework, not tests, but they show where the gaps sit.

| Practice (measure) | Good with it | Good without |
|---|---|---|
| Hero as an image tag, not CSS background (LCP) | 88% | 67% |
| High fetch priority on the LCP element (LCP) | 92% | 80% |
| No iframes, against four or more (CLS) | 92% | 84% |
| Brotli compression on the HTML, not gzip (LCP) | 90% | 67% |

The table reads the dataset's own figures: the share of sites with good results. Cloudflare also notes that overusing lazy-loading correlates with worse LCP, and Google suggests limiting it to images below the fold.

## What Usually Goes Wrong With Core Web Vitals Work

Most failed attempts trace to a handful of mistakes, each with a cause and a fix:

- **Judging by the lab score.** Lab runs vary and cannot measure INP. Read the field data first.
- **Expecting results tomorrow.** CrUX is a rolling 28-day window, so a fix takes weeks to show (web.dev, corewebvitals.io). Re-check after four weeks.
- **Lazy-loading the main image.** The State of Web Vitals found 30.4% of React sites lazy-load at least one image already in view. Load the hero immediately.
- **Piling on scripts.** Cloudflare says extra third-party tools slow a page, and 62% of React sites with a tag manager passed all three, against 74% overall. Remove what you do not use.
- **Campaign redirect chains.** web.dev warns that stacked redirects and link shorteners add to TTFB. Link straight to the final HTTPS address.
- **Chasing a perfect score.** corewebvitals.io's opinion is that going beyond "good" does nothing for SEO. Stop at green and spend the time on content.

## What to Do Next: A Four-Step Plan

Start with measurement, then fix the worst number, then wait for the window to catch up. This order wastes the least effort:

1. **Today, 10 minutes.** Run PageSpeed Insights on your home page and two enquiry pages, on mobile, and record the field numbers.
2. **Today, 10 minutes.** Open Search Console's Core Web Vitals report and note which page groups fail.
3. **This week.** Fix the weakest number: compress the main image and cut redirects for LCP, reserve image space for CLS, and ask your developer about scripts for INP. The [website launch checklist](/blog/website-launch-checklist/) includes a PageSpeed Insights check.
4. **Day 28.** Re-read the field data and your enquiry count, and fill the log.

If you would rather hand this over, Elyx Solutions' [SEO optimization](/services/seo-optimization/) service starts with an audit that covers page speed. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call: [request a quote](/contact.html).

## Sources

- [Core Web Vitals report - Search Console Help](https://support.google.com/webmasters/answer/9205520?hl=en), Google
- [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals), Google Search Central
- [Optimize Core Web Vitals for business decision makers](https://web.dev/articles/optimize-cwv-business), web.dev (Google)
- [Core Web Vitals workflows with Google tools](https://web.dev/articles/vitals-tools), web.dev (Google)
- [Core Web Vitals and SEO: Do They Affect Google Rankings?](https://corewebvitals.io/core-web-vitals/seo), corewebvitals.io
- [React Core Web Vitals: how it scores, and why (The State of Web Vitals)](https://corewebvitals.io/state-of-cwv/frameworks/react), corewebvitals.io
- [Core Web Vitals Checker](https://corevitals.io), CoreVitals
- [What are the Core Web Vitals (CWV)?](https://www.cloudflare.com/learning/performance/what-are-core-web-vitals/), Cloudflare
- [Google Core Web Vitals Explained](https://www.akamai.com/glossary/what-are-google-core-web-vitals), Akamai
- [Free Core Web Vitals Test](https://www.debugbear.com/test/core-web-vitals), DebugBear

## FAQ

### What are Core Web Vitals?

Core Web Vitals are Google's three measures of real-world user experience: LCP for loading, INP for responsiveness and CLS for visual stability. Google Search Central recommends good scores for success in Search.

### Is Core Web Vitals a ranking factor?

Yes, Google's ranking systems use them, but Google does not say how much they count. Google Search Central says good scores align with what its core ranking systems seek to reward, and practitioners describe the weight as small next to relevance.

### What is a good Core Web Vitals score?

A good score is LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of 0.1 or less. Google judges them at the 75th percentile of real visits, per Search Console Help.

### How do I check Core Web Vitals?

Paste your address into PageSpeed Insights and read the real-user section, then open the Core Web Vitals report in Search Console. Judge by the field data and use lab tools such as Lighthouse only to find causes.

### What does "Core Web Vitals assessment failed" mean?

It means at least one of LCP, INP or CLS missed its good limit for real visitors. web.dev says only those three count in the pass or fail assessment, and corewebvitals.io says all three must pass.

### How long does it take for Core Web Vitals fixes to show?

Expect about four weeks. CrUX data is a rolling 28-day window, so Search Console and PageSpeed Insights catch up with a fix only gradually (web.dev, DebugBear).

### What replaced First Input Delay?

Interaction to Next Paint replaced First Input Delay as a Core Web Vital in March 2024, per Akamai and the CoreVitals checker. INP covers every interaction in a visit, not only the first.

### Why does my site show no Core Web Vitals data?

Your site is probably new or too small to appear in the Chrome UX Report. Search Console Help says the report needs a minimum amount of data, and the CoreVitals checker says lab numbers are then your best proxy.

### Do I need a developer to fix Core Web Vitals?

Sometimes. web.dev says business owners can influence causes such as redirects, campaign targeting and media choices, but many fixes, especially for INP, need a developer.
