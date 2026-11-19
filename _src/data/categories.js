'use strict';
/* The ten blog categories from the playbook (/blog/category/{slug}/).
   `card` fills the in-article service card for that category. Proof bullets use only
   facts that exist on the site today. Articles can override `money` in their front matter. */

const proofWeb = ['Ashirwad Dental: shipped in 8 weeks', 'Landing pages in 1–2 weeks', 'From ₹9,999, quoted up front'];

module.exports = [
  {
    slug: 'industries', name: 'Industry Website Playbooks', topics: 22, group: 'business',
    intro: 'What a website for your kind of business actually needs: the pages, the booking flow, the Indian specifics. Written from real builds for clinics, coaching centres, restaurants, salons, real estate and professional firms.',
    money: '/websites-for/', moneyLabel: 'Websites for your industry',
    card: { headline: 'Want a website built for your kind of business?', proof: proofWeb, soft: { label: 'See sites we\'ve built', href: '/work.html' }, direct: 'book' }
  },
  {
    slug: 'pricing-hiring', name: 'Cost, Pricing & Hiring', topics: 15, group: 'business',
    intro: 'What websites, apps and software really cost in India, how to compare quotes, and how to hire a developer or studio without regretting it.',
    money: '/pricing/', moneyLabel: 'Pricing',
    card: { headline: 'Want a quote for your project, not a range of guesses?', proof: ['Engagements from ₹9,999', 'Fixed quote in writing before work starts', '50% to begin, 50% on delivery'], soft: { label: 'Request a tailored quote', href: '/contact.html' }, direct: 'book' }
  },
  {
    slug: 'websites', name: 'Websites: Build, Redesign & Sell Online', topics: 16, group: 'business',
    intro: 'Building a new site, redesigning an old one without losing your Google rankings, and selling online. Practical, specific and based on projects we have shipped.',
    money: '/services/web-development/', moneyLabel: 'Web Development',
    card: { headline: 'Need a website that actually brings in enquiries?', proof: proofWeb, soft: { label: 'See our web development', href: '/services/web-development/' }, direct: 'book' }
  },
  {
    slug: 'saas', name: 'SaaS & MVP Building', topics: 13, group: 'business',
    intro: 'How to turn an idea, a spreadsheet or a manual process into software: scoping an MVP, choosing a stack, billing, and what it takes to get to your first customers.',
    money: '/services/saas-development/', moneyLabel: 'SaaS Development',
    card: { headline: 'Have a SaaS idea or a process worth turning into software?', proof: ['Malnad Stories: full-stack platform, launch ready', 'Web apps in 4–8 weeks', 'Scoped and quoted up front'], soft: { label: 'See SaaS development', href: '/services/saas-development/' }, direct: 'book' }
  },
  {
    slug: 'apps', name: 'Mobile Apps', topics: 11, group: 'business',
    intro: 'Whether you need an app, how to build for iOS and Android together, and what happens after launch. Honest advice from a team that ships mobile apps.',
    money: '/services/app-development/', moneyLabel: 'App Development',
    card: { headline: 'Thinking about a mobile app?', proof: ['iOS and Android from one codebase', 'Store submission handled', 'Scoped and quoted up front'], soft: { label: 'See app development', href: '/services/app-development/' }, direct: 'book' }
  },
  {
    slug: 'seo', name: 'SEO & Local Growth', topics: 14, group: 'business',
    intro: 'Getting found on Google, in Maps and in AI answers. Technical SEO, local SEO and content that earns enquiries, not just traffic.',
    money: '/services/seo-optimization/', moneyLabel: 'SEO Optimization',
    card: { headline: 'Want customers to find you on Google and Maps?', proof: ['Technical audit up front', 'Local SEO and Google Business Profile', 'Reports based on enquiries'], soft: { label: 'See SEO services', href: '/services/seo-optimization/' }, direct: 'book' }
  },
  {
    slug: 'care', name: 'Maintenance, Security & Speed', topics: 9, group: 'business',
    intro: 'Keeping a site fast, secure and working: updates, backups, monitoring and the performance fixes that matter.',
    money: '/services/maintenance-care/', moneyLabel: 'Maintenance & Care',
    card: { headline: 'Tired of wondering whether your site is still working?', proof: ['Uptime monitoring and alerts', 'Security updates and backups', 'Monthly update hours'], soft: { label: 'See care plans', href: '/services/maintenance-care/' }, direct: 'book' }
  },
  {
    slug: 'ai', name: 'AI for Business', topics: 35, group: 'traffic',
    intro: 'Using AI in a real business, with real engineering: what works, what to avoid, and when an AI-built prototype needs proper development.',
    money: '/contact.html#book', moneyLabel: 'Book a call',
    card: { headline: 'Got an AI idea or an AI-built prototype that needs real engineering?', proof: ['Prototype-to-production rebuilds', 'Scoped and quoted up front', 'Direct access to the three founders'], soft: { label: 'See SaaS development', href: '/services/saas-development/' }, direct: 'book' }
  },
  {
    slug: 'explained', name: 'Digital India & Tech Explained', topics: 30, group: 'traffic',
    intro: 'UPI, GST, the DPDP Act, Google updates and the technology behind Indian digital business, explained plainly and kept up to date.',
    money: '/services/web-development/', moneyLabel: 'Web Development',
    card: { headline: 'Want this handled in your own website or product?', proof: proofWeb, soft: { label: 'See what we build', href: '/work.html' }, direct: 'book' }
  },
  {
    slug: 'grow-online', name: 'Start, Build & Grow Online', topics: 35, group: 'traffic',
    intro: 'Taking a business online for the first time and growing it: first website, first customers, first systems.',
    money: '/pricing/', moneyLabel: 'Launch tier',
    card: { headline: 'Ready to take your business online?', proof: ['Launch tier from ₹9,999', 'Landing pages in 1–2 weeks', '30 days post-launch support'], soft: { label: 'See pricing', href: '/pricing/' }, direct: 'book' }
  }
];
