'use strict';
/* Industry pages  →  /websites-for/{slug}/
   "Related build" only ever points at projects Elyx has actually shipped.
   Regulatory notes are written as pointers ("check with your regulator"), not legal advice. */

module.exports = [
  {
    slug: 'dentists',
    name: 'Dentists & Clinics',
    short: 'Dental & medical clinics',
    icon: '<path d="M12 5c-2-1.5-6-1.5-6 2.5 0 3 1.5 4 1.5 7 0 2 .8 4.5 2 4.5s1.5-2 2.5-2 1.3 2 2.5 2 2-2.5 2-4.5c0-3 1.5-4 1.5-7C18 3.5 14 3.5 12 5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>',
    title: 'Website for Dentists & Clinics in India | Elyx',
    description: 'Websites for dental and medical clinics: WhatsApp appointment flow, Google Maps, treatment pages and a gallery that builds trust. From ₹9,999.',
    h1: 'A clinic website that <span class="serif-i">fills appointment slots.</span>',
    answer: 'A good clinic website does four things: shows your treatments clearly, builds trust with real photos, makes booking a one-tap WhatsApp message, and appears on Google Maps. Elyx builds clinic sites from ₹9,999, with landing pages live in 1–2 weeks.',
    audience: 'Clinic owners with 1–3 chairs who want more appointments from local searches.',
    needs: [
      { t: 'WhatsApp and call booking', d: 'Patients want to book in seconds. A sticky "Book on WhatsApp" and call button on every page beats a long form.' },
      { t: 'Treatment pages', d: 'One page per treatment (implants, braces, root canal, whitening) so you can rank for what patients actually search for.' },
      { t: 'Trust: doctors and clinic photos', d: 'Real photos of the clinic and the team, qualifications, and a gallery. This is what turns a nervous visitor into a booking.' },
      { t: 'Google Maps and local SEO', d: 'Map embed, directions, opening hours and local schema, tied to your Google Business Profile, which is where "dentist near me" is won.' },
      { t: 'Fast on a phone', d: 'Most clinic searches happen on mobile, often in a hurry or with a toothache. Speed is part of the service.' },
      { t: 'Clear fees and FAQs', d: 'Answering "how much does it cost" and "does it hurt" on the page saves calls and earns trust.' }
    ],
    layout: ['Hero: promise + Book on WhatsApp', 'Treatments grid', 'Doctor & clinic trust', 'Gallery', 'Patient FAQs', 'Map, hours, contact'],
    regNote: 'Medical and dental councils in India restrict how clinics may advertise. We keep the site informational and you approve every claim, photo and testimonial before it goes live. Please confirm current rules with your council.',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website'],
    relatedCase: 'ashirwad-dental',
    relatedServices: ['web-development', 'seo-optimization', 'maintenance-care'],
    faqs: [
      { q: 'How much does a dental clinic website cost in India?', a: 'A focused clinic landing page starts at ₹9,999. A fuller multi-page site with treatment pages, a gallery and a CMS costs more and is quoted in writing after a short call. See <a href="/pricing/">pricing</a> for typical ranges.' },
      { q: 'Can patients book through WhatsApp?', a: 'Yes. Every page can have a click-to-chat WhatsApp button that opens a pre-filled message to your clinic number. This was part of the Ashirwad Dental redesign.' },
      { q: 'Will the site help me show up on Google Maps?', a: 'The site supports it with local schema and consistent address details, but Maps rankings are driven mainly by your Google Business Profile. We help set that up and optimise it.' },
      { q: 'Can I add before-and-after photos and patient reviews?', a: 'Technically yes, but council rules on clinic advertising apply, so we only publish what you are comfortable is compliant.' },
      { q: 'I already have a website. Can you redesign it?', a: 'Yes. We audit it, keep what ranks, and rebuild the rest. Redesigning without losing your Google rankings is something we plan for from the start.' }
    ],
    blogCategory: 'industries'
  },
  {
    slug: 'coaching-centres',
    name: 'Coaching Centres',
    short: 'Coaching & test-prep',
    icon: '<path d="M3 9l9-4 9 4-9 4-9-4z M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: 'Website for Coaching Centres in India | Elyx',
    description: 'Landing pages and websites for coaching and test-prep centres that turn enquiries into admissions: demo-class booking, course pages, fee clarity. From ₹9,999.',
    h1: 'Coaching centre websites that turn enquiries into <span class="serif-i">admissions.</span>',
    answer: 'Coaching websites win when they make the next step obvious: book a demo class, see the batches, see the fees. Elyx builds coaching and test-prep sites and landing pages from ₹9,999, including the Pinnacle Inc. GRE and IELTS site.',
    audience: 'Coaching centre and test-prep owners who run ads or rely on word of mouth and want more admissions from the enquiries they already get.',
    needs: [
      { t: 'Course and batch pages', d: 'One page per course (GRE, IELTS, JEE, NEET, CA) with syllabus, batch timings and who it is for, so each can rank on its own.' },
      { t: 'Demo-class and enquiry forms', d: 'A short form and a WhatsApp button above the fold. For ad traffic, a dedicated landing page that does one thing only.' },
      { t: 'Fees and batch clarity', d: 'Parents and students compare. Showing fees and schedules plainly builds trust and filters out wrong-fit leads.' },
      { t: 'Faculty and results, honestly', d: 'Faculty profiles and verifiable results. Rank and selection claims should be accurate and provable.' },
      { t: 'Lead tracking', d: 'Form, WhatsApp and call events tracked so you know which ad or page produced each admission.' },
      { t: 'Fast landing pages for ads', d: 'Study-abroad and test-prep spend heavily on ads. Slow pages waste that money, so we build for speed.' }
    ],
    layout: ['Hero: course promise + Book a demo', 'Courses and batches', 'Faculty', 'Results (verifiable)', 'Fees & FAQs', 'Enquiry form + WhatsApp'],
    regNote: 'Indian regulators have issued guidelines on misleading coaching advertisements, including claims about selection and rank. Keep claims verifiable; we will build them into the page only with your supporting proof.',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website'],
    relatedCase: 'pinnacle-inc',
    relatedServices: ['web-development', 'seo-optimization'],
    faqs: [
      { q: 'How much does a coaching centre website cost?', a: 'A landing page for a course or campaign starts at ₹9,999 and ships in 1–2 weeks. A full multi-page site with course pages, a CMS and tracking is quoted after a discovery call.' },
      { q: 'Can you build a landing page for our ad campaigns?', a: 'Yes. We built Pinnacle Inc.\'s landing page and brand presence for GRE and IELTS coaching, designed to convert prospective students.' },
      { q: 'Can students pay fees online?', a: 'Yes. We can add UPI and card payments through a payment gateway, plus receipts, if you want to collect fees or registration amounts online.' },
      { q: 'Can we track which campaign produced which enquiry?', a: 'Yes. We set up GA4 events for form submissions, WhatsApp clicks and calls, tagged by page and campaign.' },
      { q: 'Can parents and students update batch timings themselves?', a: 'Not themselves, but your team can. We add a simple CMS so batch dates and fees can be edited without a developer.' }
    ],
    blogCategory: 'industries'
  },
  {
    slug: 'restaurants-and-cafes',
    name: 'Restaurants & Cafés',
    short: 'Restaurants & cafés',
    icon: '<path d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10M17 3c-2 1.5-3 4-3 7h3v11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: 'Website for Restaurants & Cafés in India | Elyx',
    description: 'Restaurant and café websites with a fast mobile menu, table booking, WhatsApp orders, Google Maps and photos that make people hungry. From ₹9,999.',
    h1: 'A restaurant website people open <span class="serif-i">before they walk in.</span>',
    answer: 'A restaurant website has one job: get someone from "where should we eat" to your door or your WhatsApp. That means a fast mobile menu, photos, timings, directions and a reservation or order button. Elyx builds them from ₹9,999.',
    audience: 'Restaurant, café and cloud-kitchen owners who want more direct bookings and less dependence on aggregator apps.',
    needs: [
      { t: 'A menu that loads instantly', d: 'A real, searchable menu page, not a PDF that takes ten seconds to open on 4G.' },
      { t: 'Table booking and WhatsApp orders', d: 'Reservation request, WhatsApp click-to-order and a call button, so guests reach you in one tap.' },
      { t: 'Photos and atmosphere', d: 'A gallery and short copy that conveys the place: food, interiors and what makes you different.' },
      { t: 'Google Maps and timings', d: 'Accurate hours, holiday notes, directions and map embed, synced with your Google Business Profile.' },
      { t: 'FSSAI and trust details', d: 'Your FSSAI licence number and contact details displayed clearly, as food businesses are expected to show them.' },
      { t: 'UPI and online ordering (optional)', d: 'If you want direct ordering to reduce aggregator commissions, we can add a simple order flow with UPI payment.' }
    ],
    layout: ['Hero: signature dish + Book / Order', 'Menu highlights', 'Gallery', 'Timings & location', 'Reviews', 'Reservation + WhatsApp'],
    regNote: 'Food businesses in India are expected to display their FSSAI licence number. We include a place for it in the footer and menu pages.',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website', 'ecommerce'],
    relatedCase: 'malnad-stories',
    relatedServices: ['web-development', 'seo-optimization'],
    faqs: [
      { q: 'How much does a restaurant website cost?', a: 'A one-page site with menu, photos, map and a WhatsApp button starts at ₹9,999. Direct online ordering is a larger build and is quoted after a call.' },
      { q: 'Can customers order directly on WhatsApp?', a: 'Yes. We add click-to-chat buttons with a pre-filled message, so ordering takes a tap and no commission is paid to a platform.' },
      { q: 'Can I update the menu myself?', a: 'Yes. We can set up a simple CMS so you can change dishes, prices and photos without a developer.' },
      { q: 'Will it show on Google Maps?', a: 'Maps depends mainly on your Google Business Profile. We help set that up and match the details on your site.' },
      { q: 'Do you build online ordering?', a: 'Yes, as a larger project. We have built a full e-commerce platform with payments for Malnad Stories, and the same approach applies to food ordering.' }
    ],
    blogCategory: 'industries'
  },
  {
    slug: 'salons-and-spas',
    name: 'Salons & Spas',
    short: 'Salons, spas & studios',
    icon: '<circle cx="6" cy="7" r="2.5" stroke="currentColor" stroke-width="1.6"></circle><circle cx="6" cy="17" r="2.5" stroke="currentColor" stroke-width="1.6"></circle><path d="M8 8.5L20 18M8 15.5L20 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: 'Website for Salons & Spas in India | Elyx',
    description: 'Websites for salons, spas and studios: online booking, service menu with prices, before-and-after gallery and WhatsApp. Starting at ₹9,999.',
    h1: 'A salon website that <span class="serif-i">books the chair</span> for you.',
    answer: 'Salon and spa customers choose by photos, prices and how easy it is to book. A good site shows your services and prices, a gallery of your work, and a booking button on every screen. Elyx builds them from ₹9,999.',
    audience: 'Salon, spa and studio owners who take most bookings on calls and Instagram DMs and want a simpler, trackable way to fill the calendar.',
    needs: [
      { t: 'Service menu with prices', d: 'A clear price list by service and by stylist. It is the page customers look for first.' },
      { t: 'Online or WhatsApp booking', d: 'Book on WhatsApp or request an appointment in a few taps, with confirmations you can manage.' },
      { t: 'Gallery of your work', d: 'A fast, well-lit gallery with transformations, styles and the space itself. Your Instagram feed, shown on your own site.' },
      { t: 'Team and specialities', d: 'Who does what, so customers can pick the right person.' },
      { t: 'Offers and memberships', d: 'Seasonal offers and packages that you can update yourself.' },
      { t: 'Maps, hours and reviews', d: 'Accurate hours, parking notes, directions and the reviews that make "near me" searches convert.' }
    ],
    layout: ['Hero: signature service + Book now', 'Services & prices', 'Gallery', 'Team', 'Offers & packages', 'Hours, map, WhatsApp'],
    regNote: '',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website'],
    relatedCase: 'ashirwad-dental',
    relatedServices: ['web-development', 'seo-optimization'],
    faqs: [
      { q: 'How much does a salon website cost?', a: 'A focused one-page site with services, prices, gallery and a booking button starts at ₹9,999. Online scheduling with calendars is quoted after a short call.' },
      { q: 'Can clients book online?', a: 'Yes, through a booking widget or a WhatsApp flow, depending on how you work today and how many staff you have.' },
      { q: 'Can I show my Instagram posts?', a: 'We can build a fast gallery of your best work on the site. Live Instagram feeds can slow a site down, so we recommend curated images.' },
      { q: 'Can I update prices and offers myself?', a: 'Yes. We add a simple CMS and a short walkthrough so you can edit prices and offers any time.' },
      { q: 'Will it help new customers find me on Google?', a: 'Yes, mainly through local SEO and your Google Business Profile. We set both up together.' }
    ],
    blogCategory: 'industries'
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    short: 'Agents, builders & brokers',
    icon: '<path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: 'Real Estate Website Development India | Elyx',
    description: 'Websites for real-estate agents, builders and brokers: property listings, enquiry capture, RERA details and WhatsApp follow-up. From ₹9,999.',
    h1: 'A real estate website that captures <span class="serif-i">serious buyers.</span>',
    answer: 'A real estate site should turn browsing into qualified enquiries: clear listings, fast galleries, a lead form and WhatsApp on every property. Elyx builds them from ₹9,999 for single-project pages, with larger listing sites quoted after a call.',
    audience: 'Independent agents, brokers and small builders who want leads that come to them directly, not only through listing portals.',
    needs: [
      { t: 'Project and property pages', d: 'One page per project or property with photos, floor plans, amenities, location and pricing, each able to rank on its own.' },
      { t: 'Lead capture that qualifies', d: 'Forms that ask the questions you need (budget, timeline, configuration) and send every lead to WhatsApp or email at once.' },
      { t: 'RERA registration displayed', d: 'RERA registration numbers are expected on project advertising. We build a clear place for them on every project page.' },
      { t: 'Fast galleries and walkthroughs', d: 'Heavy image and video content served fast, so buyers on phones do not leave before the photos load.' },
      { t: 'Maps and neighbourhood', d: 'Location map, nearby landmarks and connectivity, which is how many buyers shortlist.' },
      { t: 'Instant follow-up', d: 'WhatsApp click-to-chat on every listing so a hot lead can reach you in one tap.' }
    ],
    layout: ['Hero: project + Enquire', 'Highlights and amenities', 'Floor plans', 'Gallery', 'Location map', 'Enquiry + WhatsApp'],
    regNote: 'Real estate advertising in India is regulated under RERA, including displaying the registration number. We build the fields in; you provide and verify the numbers and claims.',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website'],
    relatedCase: 'malnad-stories',
    relatedServices: ['web-development', 'seo-optimization'],
    faqs: [
      { q: 'How much does a real estate website cost?', a: 'A single-project landing page starts at ₹9,999. A full listings site with search, filters and an admin panel is a larger project and is quoted after discovery.' },
      { q: 'Can you integrate lead forms with WhatsApp or my CRM?', a: 'Yes. Leads can go to WhatsApp, email, a Google Sheet or a CRM, with alerts so none are missed.' },
      { q: 'Can I list and update properties myself?', a: 'Yes. We can build an admin panel or CMS for adding and editing listings without touching code.' },
      { q: 'Will it rank for local property searches?', a: 'Property searches are competitive. We build local landing pages, Google Business Profile and structured data to give you the best chance.' },
      { q: 'Do I need to show a RERA number?', a: 'For projects covered by RERA, yes, in advertising. We include fields for it; please confirm requirements with your state authority.' }
    ],
    blogCategory: 'industries'
  },
  {
    slug: 'ca-and-law-firms',
    name: 'CA & Law Firms',
    short: 'CA, legal & consulting firms',
    icon: '<path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 6a3 3 0 005 0L5 8zM19 8l-2.5 6a3 3 0 005 0L19 8z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: 'Website for CA & Law Firms in India | Elyx',
    description: 'Professional, compliant websites for chartered accountants and law firms: practice-area pages, credibility, enquiry forms and local SEO. From ₹9,999.',
    h1: 'A professional-practice website that earns <span class="serif-i">trust first.</span>',
    answer: 'Clients choose a CA or lawyer on trust and clarity. A good site explains your practice areas plainly, shows credentials and makes it easy to book a consultation. Elyx builds them from ₹9,999, with an information-first approach.',
    audience: 'CA firms, lawyers and consultants who get most clients by referral and want a credible online presence and local search visibility.',
    needs: [
      { t: 'Practice and service pages', d: 'One page per service (GST, income tax, audit, company law, litigation) so each can answer a specific search.' },
      { t: 'Credentials and profile', d: 'Partner profiles, qualifications and experience, presented in a restrained, professional way.' },
      { t: 'Consultation booking', d: 'A simple "book a consultation" form and WhatsApp number, with expectations set on timing and fees.' },
      { t: 'Insights section', d: 'A place to publish short notes on tax and compliance changes, which brings steady local search traffic and shows expertise.' },
      { t: 'Local SEO', d: 'Google Business Profile, local schema and consistent address details, which matter for "CA near me" and "lawyer in Bengaluru" searches.' },
      { t: 'Secure contact', d: 'Forms that handle personal data responsibly, with a privacy notice aligned to India\'s DPDP Act.' }
    ],
    layout: ['Hero: positioning + Book consultation', 'Practice areas', 'Partners & credentials', 'Insights', 'FAQs', 'Contact, map, WhatsApp'],
    regNote: 'ICAI and Bar Council rules limit how professionals may advertise. We build the site as an information page and leave claims, testimonials and fee statements to you, within your regulator\'s guidelines.',
    startPrice: 'From ₹9,999',
    pricingKeys: ['landing', 'website'],
    relatedCase: 'ashirwad-dental',
    relatedServices: ['web-development', 'seo-optimization', 'maintenance-care'],
    faqs: [
      { q: 'How much does a CA or law firm website cost?', a: 'A clean one-page profile site starts at ₹9,999. A multi-page site with practice areas, partner profiles and an insights section is quoted after a short discovery call.' },
      { q: 'Are there advertising restrictions I should know about?', a: 'Yes. ICAI and Bar Council rules restrict solicitation and advertising by professionals. We keep sites informational and you decide what to publish after checking current rules.' },
      { q: 'Can the site handle consultation bookings?', a: 'Yes, through a booking link, a calendar embed or a simple form that notifies you immediately.' },
      { q: 'Can we publish articles on tax and compliance changes?', a: 'Yes. We set up a simple publishing section so partners can add short notes. It is one of the best ways to build local search visibility.' },
      { q: 'Is the contact form secure?', a: 'Forms are protected against spam and only collect what you need. We can add a privacy notice that reflects India\'s DPDP Act obligations.' }
    ],
    blogCategory: 'industries'
  }
];
