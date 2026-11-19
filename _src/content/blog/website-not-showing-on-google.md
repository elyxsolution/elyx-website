---
title: Why Your Website Isn't Showing on Google: 10 Causes and Fixes
seo_title: Website Not Showing on Google: 10 Causes and Fixes
slug: website-not-showing-on-google
category: seo
description: Website not showing on Google? Test whether it is missing or only ranking low, then work through 10 causes, from noindex to canonicals, with fixes.
date: 2026-11-19
author: shreyasmv
---
A website not showing on Google is in one of two states: Google has not indexed the page, or it has indexed it and ranks it too low to be found. The first is a block or a timing issue, such as a noindex tag, a robots.txt rule or a launch last week. The second is a content and competition problem that takes months, not a setting you flip.

The honest qualification is that this page rests on Google's own help pages and four practitioner guides, not on a test of any site. It shows where to look and in what order, but it cannot tell you why your site is missing.

- **Check first.** Search `site:yourdomain.com` and run Search Console's URL Inspection tool, because the result decides which fixes apply.
- **Common blocks.** A noindex tag, a robots.txt rule, a password, a builder setting, a wrong canonical or a redesign that changed the addresses.
- **Timing.** Google says to allow at least a week after submitting a sitemap, and a new site can take from a day or two to a few weeks.
- **No promises.** Removing a block is within your control, but ranking for a competitive search is not, and nobody can promise a position.

## Website Not Showing on Google: Missing From the Index or Just Low?

Your site is either missing from Google's index or present and ranked low, and the two look identical to an owner who searches once and sees nothing. Google's Search Console Help says many people assume they are not on Google when the page simply appears low, or is left out because of the particulars of the search, such as a page that only works on desktop.

Google's own test takes four steps:

1. Turn off SafeSearch, which can filter results.
2. Search `site:yourdomain.com` for a site, or `site:` plus the full address for one page.
3. If results appear, the site or page is in the index.
4. If nothing appears, add the site to Search Console and run URL Inspection, because Google says diagnosis is much easier there.

Google's documentation for the `site:` operator adds two limits. It does not necessarily return every indexed URL, and a bare `site:` query is not ranked. For a single page, trust URL Inspection over the count.

The table below is my own triage, built from Google's steps and the four practitioner guides. It maps what you see to the causes later on this page.

| What you see | Usually means | Go to |
|---|---|---|
| `site:` empty, site is new | Not crawled yet | Cause 1 |
| `site:` empty, site is older | Blocked or hard to find | Causes 2 to 4 |
| Indexed, another address shows | Different canonical chosen | Cause 5 |
| Vanished after a rebuild | Old addresses lost | Cause 6 |
| Message in Search Console | Penalty or security flag | Cause 7 |
| Indexed, absent for your searches | A ranking problem | Causes 8 to 10 |

The ten causes are the ones that recur in Google's help pages and the practitioner guides read for this article. Cause 1 is timing, Causes 2 to 7 are blocks and mistakes, and Causes 8 to 10 are about ranking.

If you would rather hand the audit over, [Elyx Solutions' SEO work](/services/seo-optimization/) starts with a technical audit covering canonicals, redirects, sitemaps and indexing. The ten causes below cover the same ground, so you can run the checks yourself first.

## Cause 1: A New Site Has Not Been Crawled Yet

A new site can take from a day or two to a few weeks to appear, according to Google's Search Console Help, which also says to allow at least a week after a sitemap or indexing request before assuming a problem. Practitioners give wider ranges: Crafty Copy says as little as four days or as long as six months, with no method shown, so treat that as opinion.

Here is the arithmetic on a made-up launch, not a client: a site goes live on Monday 2 November 2026 and the sitemap is submitted on Tuesday 3 November. Google's one-week minimum puts the first fair check on Tuesday 10 November (3 + 7), and taking "a few weeks" as three weeks puts the outer check on Tuesday 24 November (3 + 21).

Before the first date there is nothing to diagnose. After the second, a missing site deserves Causes 2 to 7. To help a new site along, Google's guidance gives these steps:

- Verify the site in Search Console and submit a sitemap, which many builders and hosts create for you.
- Ask for indexing of the homepage, and make sure it links to every other page.
- Get other sites to mention yours, because Google discovers new sites from existing ones.

## Causes 2 and 3: Noindex, Robots.txt and Passwords

A noindex tag, a robots.txt rule and a password each stop a page reaching Google, and Google's help page names all three as the first suspects when URL Inspection says a page is not indexed. They are often left over from the build.

A noindex tag is a line of code telling search engines not to index a page, so SEO.com says the page stays out even if you submit a sitemap. A robots.txt file tells crawlers which pages to skip. SEO.com adds that Search Console's page indexing report lists pages excluded by a noindex tag and pages blocked by robots.txt.

Builders add their own switches. SEO.com points to WordPress's search engine visibility setting, which has a "discourage search engines" box, and Shopify India says a store behind a password page cannot be crawled. Google says a login page, or a block against Google, is the most common reason for a crawl error, and suggests testing in an incognito window.

My reading is that this cause is likeliest when a staging copy goes live. The [website launch checklist](/blog/website-launch-checklist/) has an item for it.

The fix has three parts:

1. Remove the noindex tag or untick the builder setting, then save.
2. Delete any robots.txt line that blocks pages you want found. SEO.com advises asking an expert if you are unsure.
3. Take the password or login off every public page, then request indexing in URL Inspection.

## Cause 4: Google Cannot Find the Page

Google finds pages by following links and reading sitemaps, so a page that nothing links to and no sitemap lists may never be found. Google's get-on-google page names five reasons it misses a site: no links from other sites, a new launch, a design that is hard to crawl, an error when crawling and plain bad luck with small sites.

Search Console Help says every page should be reachable from the homepage through ordinary links, not links that need interaction to appear. Its own example is that `example.com/petstore/zebra` is easier to find than `example.com?page=1234`. Google also says to use text, not only images or video.

- Link every page you want found from the homepage or a menu.
- Submit a sitemap in Search Console and re-check it after big changes.
- Put real words on the page, not a flyer saved as an image.

## Cause 5: Canonical and Duplicate Pages

When several addresses show the same content, Google treats one as canonical, the authoritative version, and shows only that one. Search Console Help says this covers a mobile and a desktop version, or two addresses pointing to one page, and that URL Inspection tells you whether Google sees your page as a duplicate.

SEO.com says that when you set no canonical, Google indexes the page it judges most relevant, which may not be the one you wanted. Visible One adds that unresolved versions such as www and non-www, or HTTP and HTTPS, can dilute visibility.

My reading is that a template stamping one canonical tag on every page would give the same symptom. None of the sources documents that case, so view the page source of a missing page to check.

1. Run URL Inspection on the missing page and read which address Google calls canonical.
2. Set a canonical tag on each version that points to the one you want.
3. Redirect or merge near-duplicate pages, and choose one form for www and HTTPS.
4. Crawl the site with a tool such as Screaming Frog, as SEO.com suggests, to find duplicates.

## Cause 6: A Redesign or Move Broke the Old Addresses

A site that vanished or sank after a redesign, a domain change or a switch to HTTPS has usually lost the link between its old addresses and the new ones. Search Console Help says pages that ranked well can rank poorly after a restructure or move if mistakes were made, and the fix is 301 redirects, which tell users and crawlers a page has moved permanently.

Google also says that after a move to HTTPS you should check whether both the http and https versions appear in Google. The [website launch checklist](/blog/website-launch-checklist/) carries a step for this: export the indexed addresses from Search Console and map each to its closest new page before the switch.

Ask for the redirect list in writing before any rebuild starts, and re-check Search Console a week after the switch.

## Cause 7: A Manual Action, Security Flag or Removal Request

A manual action or a security issue can lower a page's ranking or remove it from results, and Search Console's Manual Actions and Security Issues reports show whether either applies. Google says the report for a manual action explains how to fix it, and a security issue can also put a warning in the browser or in results.

Two cases are easy to miss. Google says a site you bought or inherited may come with manual actions already filed, visible in the history pages of those reports. It also says to check the URL removal tool for approved requests that took a page out of the index, which you can revoke.

SEO.com lists buying links, keyword stuffing and cloaking as the practices that attract penalties, and warns that an SEO provider using them puts your site at risk. If you hire for SEO, ask what they do about links. Shopify India and Visible One both call penalties the less common cause, so check the first six causes first.

## Causes 8 and 9: Thin Content and the Wrong Search Intent

A page can be indexed and still never appear for your searches, because it says too little or answers a different question from the one searchers ask. Visible One describes this as a page sitting on page ten or beyond, and says to read Search Console's Performance report for impressions, average position and queries.

My reading turns that into a decision rule. If Performance shows no impressions for any query, you have an indexing problem, so go back to Causes 1 to 7. If it shows impressions but a poor average position, you have a ranking problem, and the rest of this section applies.

Thin content comes first. Crafty Copy and Visible One both treat about 300 words as a floor, but neither cites Google for it, so use it as a prompt to say more, not as a rule. The better test is whether the page tells a visitor something specific that other pages for that search do not. For help, see [website copywriting tips for non-writers](/blog/website-copywriting-tips/).

Search intent comes second. SEO.com says to search your target phrase and look at what the top pages are, because the results show the format searchers want. Visible One's example is a sales page for a phrase where searchers want reviews.

Links from other sites are a third factor: Crafty Copy and Visible One tie visibility to them, though Visible One calls the evidence a correlation. For why a cheap build can fall short more widely, see [why a very cheap website often brings no customers](/blog/cheap-website-not-getting-customers/).

## Cause 10: Slow, Phone-Unfriendly or Insecure Pages

Speed, phone layout and HTTPS seldom hide a site completely, but Google's own basic checklist names all three, so fix them after the blocks above. Google's get-on-google page says most searches are now done on mobile devices, that content should load quickly on all screen sizes, and that the connection should use HTTPS. It points to Lighthouse for testing.

Shopify India says first-page sites load in 1.65 seconds on average, but gives no method, so read it as a loose benchmark. My reading is that these are tiebreakers between otherwise equal pages. The [mobile-first website guide](/blog/mobile-friendly-website/) covers the phone side, and Lighthouse will list the largest items to fix first.

## Showing on Maps Is a Separate Job From Showing in Search

A local business can have an indexed website and still be missing from Google Maps, because the Business Profile is a separate listing you claim and manage. Google's get-on-google page says a Business Profile lets you manage how your business appears across Search and Maps, and recommends claiming it.

Crafty Copy makes the same point: a profile is what puts a business on Maps with contact details and photos. For clinics, salons and coaching centres that panel is often the first click, so check it alongside the website.

Two related searches get a plain answer. A website link missing from the profile is a profile-field question, and the research for this page has no Google source on it, so use the Business Profile Help Center. For a missing logo, favicon or image, my reading is that the page must be indexed first, but the Google pages read here do not cover those features.

## What Usually Goes Wrong When You Try to Fix It

Most failed fixes come from judging too early, fixing ranking when the page is not indexed, or changing several things at once.

- **Judging after two days.** Google says to wait at least a week after a sitemap or indexing request.
- **Assuming a penalty.** It is the scariest reading and the less common one, so open Manual Actions first.
- **Writing posts while noindex is on.** Content work is wasted until the blocks clear, so clear blocks first.
- **Buying links.** Sellers promise speed, but Google says paid links could breach its spam policies.
- **Changing many things at once.** My reading is that you then cannot tell which change worked, so change one and re-inspect.
- **Trusting the `site:` count.** Google says it is not a full list, so use URL Inspection.

## A Copyable Checklist and What to Do Next

Work through the list in order, because steps 1 to 7 decide whether the page can appear at all and ranking is judged separately after them.

1. Search `site:yourdomain.com` with SafeSearch off and note the result.
2. Add the site to Search Console and run URL Inspection on the homepage.
3. Look for noindex, a robots.txt block, a password or a login.
4. Check builder settings, such as WordPress's search engine visibility box.
5. Confirm a sitemap is submitted and the page is linked from the homepage.
6. Read which address Google calls canonical, and check old addresses redirect with 301s after a rebuild.
7. Open Manual Actions and Security Issues and note any message.
8. If all is clean, read Performance for impressions and position, and wait at least a week after each change.

If the checks point to something you would rather not fix yourself, [Elyx Solutions' SEO optimization service](/services/seo-optimization/) begins with an audit of what is holding a site back. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call, so [request a quote](/contact.html). No studio can promise a ranking.

## Sources

All pages below were read on 19 November 2026.

- [Why is my page missing from Google Search?](https://support.google.com/webmasters/answer/7474347?hl=en), Google Search Console Help
- [Get your website on Google](https://developers.google.com/search/docs/fundamentals/get-on-google), Google Search Central
- [The site: search operator](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site), Google Search Central
- [Why Is My Website Not Showing Up on Google? Here Are the 10 Biggest Culprits](https://www.seo.com/blog/site-not-showing-up-on-google/), SEO.com (WebFX)
- [Why Is My Website NOT Showing on Google (& How to Fix It)](https://craftycopy.co.uk/blog/why-is-my-website-not-showing-on-google), Crafty Copy
- [9 Reasons Why Your Website Is Not Showing Up on Google](https://visibleone.com/blog/why-isnt-my-website-showing-up-on-google/), Visible One
- [Why Is My Website Not Showing Up on Google? 6 Fixes](https://www.shopify.com/in/blog/website-not-showing-up-google), Shopify India

## FAQ

### Why is my website not showing up on Google?

Your website is either not indexed or indexed and ranked too low to be seen. A new launch, a noindex tag, a robots.txt block, a password, a wrong canonical or a redesign that changed addresses are the usual causes of the first. Run `site:yourdomain.com` and URL Inspection to find out which you have.

### How long does it take for a website to show up on Google?

Google's Search Console Help says anywhere from a day or two to a few weeks for a new site. It asks you to allow at least a week after submitting a sitemap or an indexing request. Crafty Copy's wider range of four days to six months is one writer's view.

### How do I check if my website is on Google?

Turn off SafeSearch and search `site:yourdomain.com`, as Google's help page describes. If results appear, the site is in the index, though Google says the operator does not list every indexed URL. For one page, use the URL Inspection tool in Search Console.

### How do I get my website to appear on Google?

Add the site to Search Console, submit a sitemap, link every page from the homepage and ask for the homepage to be indexed. Google says links from other sites help it discover you, but paying for links could breach its spam policies.
### Why is my website not showing on Google after I submitted a sitemap?

A sitemap helps Google discover pages but does not guarantee they are indexed, and Shopify India says it will not give immediate results. Google says to wait at least a week. If the page is still missing, check noindex, robots.txt, passwords and canonicals in URL Inspection.

### Why did my website stop showing on Google?

A site that used to show and then vanished has usually been blocked, moved, flagged or penalised. Check the Manual Actions and Security Issues reports, any recent redesign or move, and whether someone requested a URL removal.
### Why is my website indexed but not on the first page?

An indexed page that ranks low usually has thin content, matches the wrong search intent or lacks links from other sites. Visible One describes pages sitting on page ten or beyond. Read the Performance report for impressions and average position.

### How can I make a website not appear on Google?

Put the pages behind a password or add a noindex tag. Google's help page lists a noindex directive and password protection among the mechanisms that keep a page out of the index.

### Why is my website logo or favicon not showing in Google search?

A logo or favicon is a separate item from the page, and the sources read for this article do not cover how Google picks either. First confirm that the page itself is indexed using URL Inspection. Then use Google Search Central's own guides for the logo or icon.
