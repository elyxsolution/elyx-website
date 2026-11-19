---
title: What Is a Headless CMS, and Does Your Business Need One?
slug: headless-cms-explained
category: websites
description: Headless CMS explained in plain English: how it works, how it differs from WordPress, who uses one and when it is overkill for a small business.
date: 2026-11-15
author: rahulc
---
Headless CMS explained in one line: it is a content management system that stores your text, photos and prices but has no website attached, so a separate front end fetches that content and displays it. Your team edits in one place, and the same content can reach a website, an app or any screen that asks for it.

The honest qualification is that every source I read for this page is a software vendor or a cloud company that sells the approach. The most useful passage in them is a vendor admitting that a small business with a simple site is often better served by a traditional CMS.

- **Meaning.** "Headless" means the CMS has no built-in website (the "head"). It holds content and hands it over through an API.
- **Fit.** The benefit grows with the number of places your content appears: one website gains little, a website plus an app plus a printed menu gains more.
- **Cost.** You usually pay for two things instead of one: the content system and the front end that displays it.
- **Test.** The edit-count test and the agency questions below tell you in a few minutes whether to ask for one.

## Headless CMS Explained in Plain English

A CMS (content management system) is the editing screen behind a website, and a headless CMS is one where that screen is not tied to any particular website. Think of a restaurant kitchen with no dining room attached. The kitchen prepares the food, and waiters carry it to a restaurant, a food truck or a delivery app.

In a traditional CMS such as WordPress, the kitchen and the dining room are one building: the same software stores your content and builds the page the visitor sees. Contentful, a headless CMS vendor, describes traditional systems as putting content, images and code into one bucket. A headless CMS splits them, so the content store never decides how the page looks.

The "head" is the part visitors see, the front end. Cutting it off is where the name comes from, according to Sanity, another vendor, which describes the content as the "body" and the presentation as the "head".

## How Does a Headless CMS Work?

A headless CMS works in three layers: a content store, an API and a front end. Contentful and AWS both describe this same split, and their pages were read on 17 November 2026.

1. **Content store.** You define content types, such as "dish" or "blog post", and the fields each one needs, such as name, price and photo. Editors then add the entries themselves.
2. **API.** An API (application programming interface) is a standard way for one program to ask another for data. The front end asks for an entry, and the API returns it as data, usually in a format called JSON.
3. **Front end.** This is the website, app or screen. Developers build it, often with frameworks such as React or Next.js, and it decides the layout, fonts and design.

Contentful walks through one page view. The visitor's browser asks your front end for a page, the front end asks the CMS API for the entry, the API returns the published version, and the front end puts the data into a template and sends the page back.

Contentful adds a point that most explainers skip: a headless CMS alone does not give your content structure. If editors still paste a whole page into one big text box, the content is as hard to reuse as before.

## Headless CMS vs Traditional CMS: A Comparison

A traditional CMS is faster to start and a headless CMS is more flexible to grow, and the sources disagree on which one costs more at the beginning. The table below uses these criteria: who builds the front end, where content can go, who runs the servers and what it takes to start. It draws on Contentful, Storyblok, AWS and Sanity, read on 17 November 2026.

| Criterion | Traditional CMS | Headless CMS |
|---|---|---|
| Front end | Built in: themes and templates | You build it, in any framework |
| Where content goes | Mainly one website | Website, app, signage, anything that calls the API |
| Who runs the servers | You or your host, plus plugins | Vendor runs the CMS; you run the front end |
| Effort to start | Lower: launch from a template (AWS, Sanity) | Higher: you build the display layer (Sanity) |
| Typical team | Non-technical owner or a full-stack team | Developers who maintain a front end |
| Best fit, per sources | Simple sites, small shops, basic e-commerce | Many channels, many languages, large teams |

On start-up cost, the sources conflict. Contentful's comparison table lists a "large up-front cost" for traditional and a "quick proof of concept" for headless, while Sanity says the missing front end can raise initial setup cost and complexity. For a small site I trust the second reading, because someone has to build the front end that a traditional CMS ships with.

My analysis: the choice is rarely about quality. A traditional CMS suits a team that wants to log in and edit, and a headless CMS suits a team that has developers and several places to publish.

## Decoupled, Hybrid, SaaS or Self-Hosted: The Types

Headless CMS products come in a few types, and the labels matter because agencies use them loosely. Storyblok and AWS sort them in slightly different ways, so the table gives each source's own terms.

| Type | What it means | Examples named by the source |
|---|---|---|
| API-first SaaS | Vendor hosts the CMS; you pay a subscription | Storyblok, Contentful, Hygraph (Storyblok) |
| Git-based | Content is files stored beside your code | CloudCanon, TinaCMS, Decap CMS (Storyblok) |
| Self-hosted | You run the software on your own server | Often open source (Contentful, AWS) |
| Hybrid | A traditional CMS with an API added | WordPress with REST API, Drupal (Storyblok) |

A decoupled CMS is a close cousin: the back end and front end are separate, but it ships with an optional front end of its own. Kontent.ai puts it neatly: all headless systems are decoupled, but not all decoupled systems are headless. AWS adds that decoupled can suit a team that mainly publishes to one channel and wants to start fast.

In modern websites, a headless CMS usually means a SaaS or git-based product feeding a framework such as Next.js or Astro. Storyblok names Netlify, Vercel and Cloudflare as places to host that front end.

## What the Vendors' Numbers Prove, and What They Do Not

The headline numbers on vendor pages are claims, not independent evidence, and I found no neutral study in the research. As of 17 November 2026, two figures appear most often.

- **73%.** Storyblok says 73% of organisations have already switched to headless. The page links a footnote I could not check, and it gives no sample or year in the text I read.
- **30%.** Kontent.ai says the approach has reduced time-to-launch by 30%. The text I read gives no method or customer count.

At least one vendor publishes the limits. Sanity lists three challenges on its own page: no built-in front end, a steeper learning curve for integrations and SEO, and content changes that can slow down when they depend on developers.

My reading is that these pages are accurate about the architecture and promotional about the outcome. Use them to learn what a headless CMS is, not to predict what yours will save.

## Real Examples: Who Uses a Headless CMS

Headless CMS examples cluster around businesses that publish the same content in many places. Sanity says Restaurant Brands International, the owner of Burger King among other chains, manages content for over 29,000 restaurants through its product. That is a vendor's customer claim, so treat it as an illustration of scale.

The sources name these use cases:

- **E-commerce.** Product catalogues, prices and campaigns shared between a store, an app and marketing pages (Kontent.ai, AWS).
- **Mobile apps.** An app reads the same API as the website, so a content change needs no app update (Kontent.ai).
- **Many languages.** AWS says languages can be stored as structured data without copying the underlying content.
- **Print and signage.** Kontent.ai says the same content can feed PDFs, print layouts and digital screens.

For a small Indian business, the nearest equivalents are a restaurant whose menu appears on a website, an ordering app and a printed card, or a coaching centre whose batch dates appear on a site and in a WhatsApp catalogue. The studio's [restaurant website article](/blog/restaurant-website-india/) covers the menu side. A clinic is a different case: council rules on advertising apply whichever CMS you pick, and the CMS does not change what you may publish.

## When a Headless CMS Is Overkill

A headless CMS is overkill when one website is the only place your content appears and nobody on your side writes code. Sanity, a vendor of the product, says on its own page that traditional CMSes still fit people with a non-technical background who need to launch a site without paying a developer, such as small businesses, local shops and basic e-commerce.

That sits oddly beside the same page's claim that headless is the right choice for most growing businesses. I read it as: headless is right when growth means more channels, and not simply because a business is growing.

### The edit-count test

This is my own test, not a sourced benchmark. Count how many places each piece of content must be edited, then compare. A made-up café has 40 dishes with prices.

- Menu on the website only: 40 dishes in 1 place is 40 edits per price change. A headless CMS saves nothing.
- Menu on the website, an ordering app and a printed card: 40 dishes in 3 places is 40 × 3 = 120 edits if each is edited separately. A single content store cuts that to 40 edits plus a re-export of the print file.

| Choose a traditional CMS or simple editable site when | Choose headless when |
|---|---|
| Your content lives on one website | The same content feeds two or more channels |
| Nobody on your side writes code | A developer maintains the front end for you |
| You want to launch in weeks on a small budget | You publish in several languages or regions |
| Edits are text, photos and prices | Editors need structured fields, not page layouts |
| You expect to change agency freely | You have a written handover for the custom front end |

If three or more rows in the left column describe you, skip headless for now. You can revisit the decision when a second channel appears.

## What a Headless CMS Costs a Small Business

A headless build typically means paying for the content system, the front-end hosting and the developer time to connect them, so the total is usually higher than a template-based site. Contentful says the vendor hosts the repository and API while the front end is always your responsibility to build, host and maintain. My research holds no vendor price lists, so check each vendor's own pricing page and date what you find.

The studio gives a reference point on timing. A business website of 5 to 10 pages with a CMS for editing typically takes {{weeks:website}}, and an e-commerce store {{weeks:ecommerce}}. Elyx engagements start from {{start}}, excluding GST, and a fixed quote tailored to your requirements is confirmed in writing after a call.

[Elyx Solutions' web development page](/services/web-development/) says that where it makes sense the studio adds a headless CMS so your team can change prices, photos and text without touching code, and records a short walkthrough. It also says it avoids proprietary lock-in. Content management is scoped as a separate option, so you can ask what the editing screen adds before you accept a quote.

## Headless CMS and SEO: What Changes

A headless CMS neither helps nor harms search on its own, because the front end you build decides what Google sees. Storyblok claims headless setups load faster and support schema markup, hreflang tags and clean metadata. Sanity lists SEO as a place where teams can face a steeper learning curve.

My research contains no Google documentation on headless sites, so I give no ranking claim. The practical point is that the agency must build the page titles, structured data, sitemap and redirects that a WordPress plugin would otherwise add for you. If you are replacing an existing site, ask how old URLs will be kept or redirected.

## What Usually Goes Wrong With Headless Projects

Most headless problems come from handover and expectations rather than from the technology. The causes below come from the sources and from questions that recur in CMS community threads, and the fixes are my suggestions.

| What goes wrong | Cause | Fix |
|---|---|---|
| Editors cannot see the finished page | No built-in preview; a front-end editor layer takes extra work | Ask for a working preview link before you sign |
| Nobody else can maintain the site | A custom front end only the builder understands | Written handover, code ownership, a recorded walkthrough |
| Small edits wait for a developer | Content not modelled as editable fields (Sanity) | List your usual edits and test them |
| Two systems, two failures | CMS and front end are hosted and updated separately | Name who monitors each one |
| Paying for unused reach | Only one channel, so no reuse | Run the edit-count test |
| Switching vendors is painful | Content and templates tied to one product | Ask about export formats and pricing tiers |

A switch can also fail to fix the real issue. A site that is hard to maintain because nobody owns updates will still be hard to maintain on a new CMS. The [fixed price, hourly or retainer explainer](/blog/fixed-price-vs-hourly-development/) shows how to pin down who is paid for changes after launch.

## What to Do Next

Your next step is to answer the edit-count test, then take the same questions to any agency that mentions headless. Ask each of these and write down the answers:

- [ ] Where will each piece of content appear, and how many places is that?
- [ ] Which headless CMS do you propose, and is it a subscription, git-based or self-hosted?
- [ ] Who builds and hosts the front end, and what does each cost per year?
- [ ] Can I preview a page before publishing?
- [ ] Which edits can my team do alone, and which need a developer?
- [ ] Who owns the code, content and accounts at handover?
- [ ] How are old URLs, titles, structured data and the sitemap handled?
- [ ] Can I export my content if I leave?
- [ ] Who monitors and updates both the CMS and the front end after launch?

If one website with an easy editing screen is all you need, say so and ask for the simplest build that meets it. When you are ready to talk, [the studio's web development service](/services/web-development/) begins with a discovery call, and the [pricing page](/pricing/) explains how Elyx quotes.

## Sources

- [Headless CMS explained in one minute](https://www.contentful.com/headless-cms/), Contentful (read 17 November 2026)
- [Headless CMS Explained | Storyblok Tutorial](https://www.storyblok.com/tp/headless-cms-explained), Storyblok (read 17 November 2026)
- [Headless CMS explained: The ultimate guide](https://kontent.ai/headless-cms-guide/), Kontent.ai (read 17 November 2026)
- [What is Headless CMS? Headless CMS Architecture Explained](https://aws.amazon.com/what-is/headless-cms/), Amazon Web Services (read 17 November 2026)
- [Headless CMS 101: The Only Guide You'll Ever Need](https://www.sanity.io/headless-cms), Sanity (read 17 November 2026)

## FAQ

### What is a headless CMS?

A headless CMS is a content management system that stores and manages content but has no website attached, delivering the content through an API to any front end. AWS describes it as a content repository that can serve any user interface. The front end is built separately.

### How does a headless CMS work?

A headless CMS works by keeping content in a central store and handing it to a website or app when that front end asks through an API. Contentful describes three layers: a content repository, an API and the front end. Editors publish once and every connected channel can display the update.

### What is the difference between a headless CMS and a traditional CMS?

A traditional CMS builds the pages visitors see, while a headless CMS only supplies content and leaves the pages to a separate front end. Storyblok and Contentful both describe the traditional kind as tightly coupled. The headless kind needs more development but can serve more channels.

### Is WordPress a headless CMS?

WordPress is a traditional CMS by default, and it can act as a hybrid headless CMS when used through its REST API. Storyblok lists "WordPress with REST API" as a hybrid example. In that setup someone still has to build the front end separately.

### Does a small business need a headless CMS?

Most small businesses with one website do not need a headless CMS. Sanity says traditional CMSes still fit small businesses, local shops and basic e-commerce. It starts to make sense when the same content must appear in several places.

### What is a decoupled CMS?

A decoupled CMS separates the back end from the front end but still ships with an optional front end of its own. Contentful and Kontent.ai both say it differs from a fully headless CMS, which has no presentation layer at all. Some vendors use the two terms interchangeably.

### Why choose a headless CMS?

Choose a headless CMS when you publish the same content to several channels, want developers free to pick their own tools, or need many languages managed in one place. Kontent.ai and Sanity list those reasons. They are benefits only if you actually use those channels.

### Is a headless CMS better for SEO?

A headless CMS is not automatically better for SEO, because results depend on how well the front end is built. Storyblok claims speed and metadata advantages, while Sanity says SEO can be a learning curve. My research has no Google guidance on the question, so I make no ranking claim.

### How much does a headless CMS cost?

A headless CMS costs a vendor subscription or hosting, plus front-end hosting and developer time, and my research holds no vendor price lists. Check each vendor's own pricing page. At Elyx, a business website with a CMS is quoted to your requirements, with engagements starting from {{start}}, excluding GST.
