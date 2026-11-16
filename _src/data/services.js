'use strict';
/* The five service pages  →  /services/{slug}/
   Every claim here is taken from the existing site copy (process, timelines, stack,
   ₹9,999 starting price, 50/50 payment terms, 30-day post-launch support).
   Price RANGES come from pricing.json, which is still marked DRAFT. */

module.exports = [
  /* ----------------------------------------------------------------- WEB */
  {
    slug: 'web-development',
    name: 'Web Development',
    navDesc: 'Sites & web apps that fly.',
    icon: '<path d="M9 8l-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: 'Web Development in Bengaluru, From ₹9,999 | Elyx',
    description: 'Fast, mobile-first websites and web apps from a three-person Bengaluru studio. Landing pages in 1–2 weeks, prices quoted up front, built to win enquiries.',
    h1: 'Web development that turns visitors into <span class="serif-i">enquiries.</span>',
    answer: 'Elyx builds fast, mobile-first websites and web apps for Indian businesses. A focused landing page starts at ₹9,999 and ships in 1–2 weeks; larger sites, web apps and e-commerce stores take 4–8 weeks. You get a fixed quote before any work begins.',
    audience: 'Clinic owners, coaching centres, shops and founders who need a site that brings in enquiries, not just a brochure.',
    intro: [
      'Most small-business websites fail in the same three places: they load slowly on a phone, they bury the one action a visitor should take, and nobody on the owner\'s side can update them without calling a developer. We build against those three problems first, then worry about polish.',
      'Every project is done by the three founders, so the person you brief on the first call is the person who designs the page and writes the code. That removes the usual agency hand-offs, and it is why a landing page can realistically ship in one to two weeks.'
    ],
    includedTitle: 'What you get with a web build',
    included: [
      { t: 'Mobile-first design', d: 'Most of your visitors arrive on a phone, often on a patchy 4G connection. We design for that screen first and scale up, not the other way around.' },
      { t: 'Speed you can measure', d: 'We tune for Core Web Vitals: compressed images, lean code and sensible hosting, so pages feel instant and Google has one less reason to rank you lower.' },
      { t: 'Enquiry paths that work', d: 'Contact form, WhatsApp click-to-chat, call button and Google Maps, wired up and tracked so you can see which one brings the most leads.' },
      { t: 'A CMS you will enjoy using', d: 'Where it makes sense we add a headless CMS so your team can change prices, photos and text without touching code. We also record a short walkthrough.' },
      { t: 'SEO foundations built in', d: 'Clean URLs, structured data, sitemap, meta tags and local-search basics are part of the build, not a paid extra after launch.' },
      { t: 'E-commerce when you need it', d: 'Catalogue, cart, UPI and card payments, order emails and an admin panel, built the same way as everything else: fast, simple and yours to own.' }
    ],
    processTitle: 'How a web project runs',
    process: [
      { t: 'Discovery call', d: 'A short call to understand your business, your customers and the one action that makes the site worth it.', time: 'Day 1–2' },
      { t: 'Scoped proposal', d: 'A written scope with timeline and a fixed price. No surprise line items mid-project.', time: 'Day 2–3' },
      { t: 'Design', d: 'Wireframes first, then the visual design. You approve the direction before a line of code is written.', time: 'Week 1' },
      { t: 'Build and feedback', d: 'We build in weekly increments with two rounds of feedback, so you see real, working pages as they come together.', time: 'Week 1–3' },
      { t: 'QA, staging and launch', d: 'Testing across devices, a staging review with you, then launch, handover and 30 days of post-launch support on the Launch tier.', time: 'Final week' }
    ],
    pricingKeys: ['landing', 'website', 'ecommerce'],
    priceTitle: 'Web development pricing',
    priceNote: 'Engagements start at ₹9,999 for a focused landing page or redesign. What moves the price: the number of pages, whether you need online payments or booking, whether we write the copy, and how fast you need it live.',
    timelineText: 'A marketing site or landing page typically ships in 1–2 weeks. A complex web app or e-commerce platform takes 4–8 weeks depending on scope. We agree the timeline before we start.',
    case: 'ashirwad-dental',
    industries: ['dentists', 'coaching-centres', 'salons-and-spas', 'restaurants-and-cafes'],
    faqs: [
      { q: 'How much does a website cost?', a: 'Engagements start at ₹9,999 for a landing page or redesign. A multi-page business site, an online store or a custom web app is scoped after a discovery call and quoted in writing before work begins. Our <a href="/pricing/">pricing page</a> and <a href="/tools/website-cost-calculator/">cost calculator</a> show typical ranges.' },
      { q: 'How long does it take to build a website?', a: 'A landing page or small marketing site usually ships in 1–2 weeks. E-commerce and web apps take 4–8 weeks. The timeline is agreed before we start and we flag blockers early.' },
      { q: 'Can I update the site myself after launch?', a: 'Yes. We build for handoff: where it makes sense we integrate a CMS, document everything and run a walkthrough so routine edits never need us.' },
      { q: 'I already have a website. Can you redesign it without hurting my Google rankings?', a: 'Yes, redesigns and migrations are a big part of our work. We audit what you have, keep what earns traffic (URLs, content, SEO equity) and rebuild the rest properly. Ashirwad Dental Clinic is a good example.' },
      { q: 'What technology do you use?', a: 'We choose what fits the job: React, Next.js and TypeScript for most front ends, Node.js, FastAPI or Python on the back end, PostgreSQL or MongoDB for data. We avoid proprietary lock-in that would force you to depend on us.' }
    ],
    blogCategory: 'websites'
  },

  /* ---------------------------------------------------------------- SAAS */
  {
    slug: 'saas-development',
    name: 'SaaS Development',
    navDesc: 'Multi-tenant platforms, end to end.',
    icon: '<path d="M6 16a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 16H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>',
    title: 'SaaS Development Company India: MVP to Scale | Elyx',
    description: 'Elyx architects and builds multi-tenant SaaS products end to end: data model, auth, billing, dashboards. Fixed-scope MVPs from a three-person Bengaluru team.',
    h1: 'SaaS development, from <span class="serif-i">first customer</span> to ten-thousandth.',
    answer: 'Elyx designs and builds multi-tenant SaaS products end to end: data model, authentication, roles, subscription billing, admin and analytics dashboards. An MVP typically takes 8–16 weeks, scoped and quoted up front, and engagements start at ₹9,999 for a scoped discovery.',
    audience: 'Founders and operators who already have the problem and a paying-customer idea, and need a team that can ship version one.',
    intro: [
      'A SaaS product is not a website with a login. The decisions you make in the first two weeks, how tenants are separated, how permissions work, how billing states are modelled, are the ones that are expensive to change later. We spend real time on them before we write screens.',
      'We are a team of three, and all three of us work on a SaaS build. You get architecture, interface and growth thinking in the same room, without a project manager translating between them.'
    ],
    includedTitle: 'What we build into a SaaS product',
    included: [
      { t: 'Architecture and data modelling', d: 'A schema and service layout designed around how your product will grow: tenants, workspaces, usage and the reports you will want in a year.' },
      { t: 'Authentication, roles and permissions', d: 'Sign-up, login, invitations, team roles and the permission model that keeps one customer\'s data away from another\'s.' },
      { t: 'Subscriptions and billing', d: 'Plans, trials, upgrades, invoices and failed-payment handling, integrated with a payment gateway that supports Indian cards, UPI and international customers.' },
      { t: 'Admin and analytics dashboards', d: 'The internal view you need to run the product: who signed up, who is active, who is about to churn, and a customer-facing dashboard people actually enjoy.' },
      { t: 'Turning a manual process into software', d: 'If your business runs on spreadsheets, WhatsApp groups or a person\'s memory, we map the workflow and turn it into a product your team or your customers can use.' },
      { t: 'Production-ready engineering', d: 'Monitoring, backups, environments and a clean deployment path from day one, so launch week is not the first time anyone checks if it can be restored.' }
    ],
    processTitle: 'How a SaaS project runs',
    process: [
      { t: 'Discovery and scoping', d: 'We map the users, the workflow and the one metric that decides if version one worked. Output: a written scope and a cut line for what ships first.', time: 'Week 1' },
      { t: 'Architecture and design', d: 'Data model, permissions, wireframes and the core screens. You sign off on how it works before we build it.', time: 'Week 1–3' },
      { t: 'Build in weekly increments', d: 'Working software every week, with two structured feedback rounds. You use the product as it comes together, never a black box.', time: 'Week 3–10' },
      { t: 'QA, staging and launch', d: 'Testing, staging review with real data, billing in test mode, then production launch and handover.', time: 'Final 2 weeks' },
      { t: 'Care and iteration', d: 'After launch we monitor, fix and keep shipping against your roadmap, on a maintenance plan if you want one.', time: 'Ongoing' }
    ],
    pricingKeys: ['saas', 'webapp'],
    priceTitle: 'SaaS development pricing',
    priceNote: 'Engagements start at ₹9,999 and are scoped to the outcome. For a SaaS build the price moves with the number of modules, the complexity of billing and permissions, integrations, and whether we also build the marketing site and admin tooling.',
    timelineText: 'A focused MVP typically takes 8–16 weeks. A complex web app takes 4–8 weeks depending on scope. We agree the timeline after discovery and report against it weekly.',
    case: 'malnad-stories',
    industries: ['coaching-centres', 'real-estate', 'ca-and-law-firms'],
    faqs: [
      { q: 'How much does it cost to build a SaaS product in India?', a: 'It depends on scope. Engagements start at ₹9,999 and a focused MVP is usually scoped after a discovery call. We price by outcome rather than by the hour, and the quote is in writing before work begins. See <a href="/pricing/">pricing</a> for typical ranges.' },
      { q: 'Do I need a full product or can we start with an MVP?', a: 'Start with the smallest version that proves the idea. We help you draw a cut line: what must ship in version one, and what waits until real customers ask for it.' },
      { q: 'Who owns the code?', a: 'You do. We build on standard, widely used technology and document everything so you are never locked in to us.' },
      { q: 'Can you take over or rescue an existing product?', a: 'Yes. We start with a short audit of the code, hosting and data model, tell you honestly what is worth keeping, and then fix or rebuild accordingly. This is common with prototypes built quickly with AI tools that now need real engineering.' },
      { q: 'How do payments and contracts work?', a: '50% upfront to begin and 50% on final delivery, covered by a straightforward statement of work with scope, deliverables, timeline and revision rounds. No retainer lock-ins unless you want one.' }
    ],
    blogCategory: 'saas'
  },

  /* ----------------------------------------------------------------- APP */
  {
    slug: 'app-development',
    name: 'App Development',
    navDesc: 'Native & cross-platform mobile.',
    icon: '<rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" stroke-width="1.6"></rect><path d="M11 18h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: 'App Developers in Bengaluru: iOS & Android | Elyx',
    description: 'Cross-platform iOS and Android apps built with React Native or Flutter by a three-person Bengaluru team. Store submission and post-launch care included.',
    h1: 'Mobile apps with the <span class="serif-i">feel</span> your users expect.',
    answer: 'Elyx builds iOS and Android apps from a single codebase using React Native or Flutter, handles the App Store and Play Store submission, and stays on after launch. Engagements start at ₹9,999 and a typical app is scoped and quoted in writing before work begins.',
    audience: 'Founders and businesses that need an app their customers will install, and a team that will still be around after the store listing goes live.',
    intro: [
      'Whether you need an app at all is the first question we ask. If a fast website or a WhatsApp flow solves your customer\'s problem, we will say so. When an app is the right answer, because you need push notifications, offline use, camera or location access, or repeat daily use, we build it properly.',
      'We usually build with a single cross-platform codebase, which keeps cost and maintenance down while still giving each platform the performance and feel it should have. Where a feature needs platform-specific polish, we add it.'
    ],
    includedTitle: 'What an app build includes',
    included: [
      { t: 'iOS and Android from one codebase', d: 'React Native or Flutter, chosen for your use case. One team, one release cycle, and consistent behaviour on both platforms.' },
      { t: 'Interface design for thumbs', d: 'Layouts, navigation and motion designed for one-handed use on real phones, tested on both small and large screens.' },
      { t: 'Push notifications, offline and analytics', d: 'The features that make an app worth keeping installed: timely notifications, graceful offline behaviour and event tracking so you can see what people use.' },
      { t: 'API and back end', d: 'The server, database and admin side that the app talks to, built by the same team so nothing is lost between front end and back end.' },
      { t: 'App Store and Play Store submission', d: 'Developer accounts, store listings, screenshots, privacy declarations and the review process, handled with you step by step.' },
      { t: 'Updates after launch', d: 'OS updates, bug fixes and new features. Apps need care long after the first release, and we stay on to provide it.' }
    ],
    processTitle: 'How an app project runs',
    process: [
      { t: 'Discovery and scoping', d: 'Who the user is, what they do in the first minute, and what the first version must do. We agree a written scope and cut line.', time: 'Week 1' },
      { t: 'Design and prototype', d: 'Wireframes and a clickable prototype you can put on your own phone, so you react to something real before we build it.', time: 'Week 1–3' },
      { t: 'Build in weekly releases', d: 'Test builds delivered every week, with two structured feedback rounds. You see working software, not slide decks.', time: 'Week 3–10' },
      { t: 'QA and store submission', d: 'Device testing, beta distribution to your team, then store review and launch.', time: 'Final 2–3 weeks' },
      { t: 'Care and iteration', d: 'Monitoring, crash fixes, OS compatibility and a roadmap for what ships next.', time: 'Ongoing' }
    ],
    pricingKeys: ['mobile'],
    priceTitle: 'App development pricing',
    priceNote: 'Engagements start at ₹9,999 and are scoped to the outcome. For a mobile app, the price moves with the number of screens, whether you need a custom back end, payments, maps or real-time features, and store-submission requirements.',
    timelineText: 'Timelines depend on scope and are agreed in writing before we start. A focused app typically takes 8–14 weeks from discovery to store release; we report progress weekly.',
    case: 'malnad-stories',
    industries: ['restaurants-and-cafes', 'coaching-centres', 'real-estate'],
    faqs: [
      { q: 'Do I need a mobile app or is a website enough?', a: 'Often a fast, installable-feeling website is enough. An app earns its cost when you need push notifications, offline use, device features or daily repeat use. We will tell you honestly which one you need.' },
      { q: 'React Native or Flutter?', a: 'Both let us ship iOS and Android from one codebase. We choose based on your team, your features and long-term maintenance, and explain the trade-off in plain language in the proposal.' },
      { q: 'Do you handle the App Store and Play Store listing?', a: 'Yes. We help with developer accounts, listings, screenshots, privacy declarations and review feedback, and keep going until the app is live.' },
      { q: 'How much does an app cost?', a: 'Engagements start at ₹9,999 and the exact figure comes from a written scope after a discovery call. The <a href="/tools/website-cost-calculator/">cost calculator</a> gives an indicative range in a minute.' },
      { q: 'Will you maintain the app after launch?', a: 'Yes. We offer monthly care plans covering monitoring, OS updates and an agreed number of update hours, and you can add them at launch or later.' }
    ],
    blogCategory: 'apps'
  },

  /* ----------------------------------------------------------------- SEO */
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    navDesc: 'Technical & content-led growth.',
    icon: '<circle cx="10.5" cy="10.5" r="6" stroke="currentColor" stroke-width="1.6"></circle><path d="M15 15l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: 'SEO Services for Small Business in India | Elyx',
    description: 'Technical SEO, local SEO and content strategy for Indian small businesses, with a monthly report tied to enquiries, not vanity traffic. Plans from ₹9,999.',
    h1: 'SEO that is judged by <span class="serif-i">enquiries,</span> not traffic.',
    answer: 'Elyx fixes the technical foundations search engines penalise, builds the local and content signals they reward, and reports on enquiries rather than visits. SEO engagements start at ₹9,999 and begin with an audit of what is holding your site back.',
    audience: 'Small businesses and founders who want customers to find them on Google, in Maps and increasingly inside AI answers.',
    intro: [
      'Search has changed. Google\'s AI Overviews now answer many generic how-to questions on the results page, which means traffic from broad articles is falling for everyone. What still brings customers is being the obvious answer to a buying search: "dentist near me", "website developer in Bengaluru", "coaching centre for IELTS".',
      'Our SEO work therefore starts with the money pages and local signals, then adds content that only a real business with real experience can write. We measure it in enquiries, and we tell you when something is not working.'
    ],
    includedTitle: 'What our SEO work covers',
    included: [
      { t: 'Technical SEO audit', d: 'Canonicals, redirects, sitemaps, indexing, structured data and page speed. Often the biggest wins are fixing signals that are quietly contradicting each other.' },
      { t: 'Local SEO and Google Business Profile', d: 'Setting up and optimising your profile, categories, photos, reviews process and local schema, which is where most small businesses are actually found.' },
      { t: 'Service and industry pages', d: 'One page per service and per customer type, each written to rank for a specific buying search and to send visitors to a clear next step.' },
      { t: 'Content with first-hand proof', d: 'Articles built around your own prices, projects and checklists. This is the kind of content that still earns clicks and gets cited in AI answers.' },
      { t: 'Core Web Vitals and speed', d: 'Faster pages rank better and convert better. We fix what is slowing yours down.' },
      { t: 'Analytics and reporting', d: 'Search Console and GA4 set up properly, with events for calls, WhatsApp clicks and form submissions, and a monthly report on which pages actually produce enquiries.' }
    ],
    processTitle: 'How an SEO engagement runs',
    process: [
      { t: 'Audit', d: 'We crawl the site, check indexing and local presence, and list what is wrong in order of impact.', time: 'Week 1' },
      { t: 'Fix the foundations', d: 'Technical fixes, redirects, sitemap and structured data, so everything you publish afterwards can actually rank.', time: 'Week 1–3' },
      { t: 'Build the money pages', d: 'Service, industry and location pages, plus your Google Business Profile.', time: 'Week 2–6' },
      { t: 'Publish proof-led content', d: 'A steady rhythm of articles tied to a service page, scored on business potential, proof and durability before we write them.', time: 'Month 2 onward' },
      { t: 'Measure and adjust', d: 'Monthly report from Search Console, GA4 and your enquiry log. We double down on what produces leads and drop what does not.', time: 'Monthly' }
    ],
    pricingKeys: ['seo'],
    priceTitle: 'SEO pricing',
    priceNote: 'Engagements start at ₹9,999. SEO is usually a monthly plan after the initial audit. The price moves with the size of the site, how competitive your searches are, and how much content is needed.',
    timelineText: 'Technical fixes show up in weeks. Rankings for competitive local searches usually take a few months to build. We set expectations in the proposal and review progress monthly.',
    case: 'ashirwad-dental',
    industries: ['dentists', 'salons-and-spas', 'ca-and-law-firms', 'real-estate'],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Technical fixes can lift indexing within weeks. Ranking for competitive searches takes months, and anyone promising page-one rankings in days is guessing. We agree what to measure and review it monthly.' },
      { q: 'Do you guarantee rankings?', a: 'No, and you should be wary of anyone who does. We guarantee the work: a clean technical foundation, strong service pages, honest reporting and an enquiry-based view of results.' },
      { q: 'Is local SEO different from normal SEO?', a: 'Yes. For businesses with a physical location, your Google Business Profile, reviews and consistent address and phone details matter as much as your website. We set up both together.' },
      { q: 'Will AI search replace SEO?', a: 'Google says AI Overviews use the same index and ranking as normal search, so strong pages with original, first-hand content help in both. We focus on content that cannot be replaced by a summary: real prices, real timelines, real results.' },
      { q: 'How much does SEO cost?', a: 'Engagements start at ₹9,999, and ongoing SEO is typically a monthly plan scoped after an audit. See <a href="/pricing/">pricing</a> for typical ranges.' }
    ],
    blogCategory: 'seo'
  },

  /* ---------------------------------------------------------------- CARE */
  {
    slug: 'maintenance-care',
    name: 'Maintenance & Care',
    navDesc: 'Monitoring, updates, iteration.',
    icon: '<path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"></circle>',
    title: 'Website Maintenance & Care Plans in India | Elyx',
    description: 'Monthly website and app maintenance: uptime monitoring, security updates, backups and update hours. Built by the team that made it, plans from ₹9,999.',
    h1: 'Maintenance that keeps your site <span class="serif-i">fast, safe</span> and improving.',
    answer: 'Elyx care plans cover uptime monitoring, security and dependency updates, backups and recovery, and a set number of update hours each month. Plans start at ₹9,999 and can be added at launch or later.',
    audience: 'Business owners who would rather run their business than worry whether the website, the plug-ins and the backups are all still working.',
    intro: [
      'Websites decay quietly. A plug-in goes out of date, a certificate expires, a form stops delivering, a page slows down after someone uploads a 6 MB photo. None of these announce themselves; you find out when a customer tells you.',
      'A care plan is simply someone responsible for noticing first. And because we built most of what we maintain, we already know where things are likely to break.'
    ],
    includedTitle: 'What a care plan covers',
    included: [
      { t: 'Uptime monitoring and alerts', d: 'Your site is watched around the clock. If it goes down or the contact form stops delivering, we know before your customers do.' },
      { t: 'Security and dependency updates', d: 'Frameworks, libraries and plug-ins kept current, with changes tested on a staging copy before they touch the live site.' },
      { t: 'Backups and recovery', d: 'Regular backups stored away from the server, and a restore process that has actually been tested.' },
      { t: 'Performance checks', d: 'Periodic speed and Core Web Vitals checks, with fixes for whatever has drifted since launch.' },
      { t: 'Monthly update hours', d: 'A set number of hours each month for content changes, new sections and small improvements, so you are never waiting on a new quote for a small edit.' },
      { t: 'Continuous iteration', d: 'For products and SaaS, a roadmap that keeps moving: we fix, improve and ship alongside you month after month.' }
    ],
    processTitle: 'How care works',
    process: [
      { t: 'Health check', d: 'We review hosting, backups, dependencies, speed and security, and list what needs attention.', time: 'Week 1' },
      { t: 'Set up monitoring', d: 'Uptime, forms, SSL and error alerts, so issues are caught automatically.', time: 'Week 1' },
      { t: 'Monthly maintenance cycle', d: 'Updates applied and tested on staging, backups verified, performance checked.', time: 'Monthly' },
      { t: 'Update hours', d: 'You send requests; we schedule and ship them within your monthly hours.', time: 'As needed' },
      { t: 'Monthly summary', d: 'A short note on what was done, what was found and what we recommend next.', time: 'Monthly' }
    ],
    pricingKeys: ['care'],
    priceTitle: 'Maintenance & care pricing',
    priceNote: 'Care plans start at ₹9,999 and scale with how many sites or apps are covered, the number of update hours you want and how quickly you need responses. The Launch tier already includes 30 days of post-launch support.',
    timelineText: 'Monitoring starts in the first week. Requests are handled within your plan\'s response time, and the Partner tier adds a priority response SLA.',
    case: 'ashirwad-dental',
    industries: ['dentists', 'coaching-centres', 'restaurants-and-cafes'],
    faqs: [
      { q: 'Do you maintain websites you did not build?', a: 'Yes, after a short health check. We tell you honestly what we find and what it would take to bring it to a state we are happy to look after.' },
      { q: 'What is included in the 30 days of post-launch support?', a: 'Every Launch-tier project includes 30 days of post-launch support for fixes and questions. A care plan continues that support month to month.' },
      { q: 'Can I add care after launch?', a: 'Yes. You can pick up a plan at launch or add it later, with no pressure either way.' },
      { q: 'What happens if the site goes down?', a: 'Monitoring alerts us immediately. We investigate, restore from backup if needed and tell you what happened. The Partner tier adds a priority response SLA.' },
      { q: 'Is there a lock-in contract?', a: 'No retainer lock-ins unless you want one. You can pick up care at launch or add it later.' }
    ],
    blogCategory: 'care'
  }
];
