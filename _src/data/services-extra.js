'use strict';
/* Service pages added after the first five  →  /services/{slug}/
   Same fields as services.js. Rules for this file:
   - No client results, numbers or quotes that are not on the site. Describe what the studio builds and how it works, in plain terms.
   - The only price is the starting price (pricing.json). Every project is quoted to the client's requirements.
   - `time` on a process step is a stage name, not a duration, except the first two stages, which match the studio's published process. */

const PRICE_FAQ = (what) => ({
  q: 'How much does ' + what + ' cost?',
  a: 'Engagements start at ₹9,999. Every project is different, so we scope it on a short call and send a quote tailored to your requirements, in writing, before any work begins. See <a href="/pricing/">how we quote</a>.'
});

module.exports = [
  /* ------------------------------------------------------------ E-COMMERCE */
  {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    navDesc: 'Stores that take UPI and cards.',
    icon: '<path d="M3 4h2l2.4 10.2a1 1 0 001 .8h8.2a1 1 0 001-.76L19 8H6.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="9.5" cy="19" r="1.3" fill="currentColor"></circle><circle cx="16.5" cy="19" r="1.3" fill="currentColor"></circle>',
    title: `E-commerce Website Development in India | Elyx`,
    description: `Online stores for Indian businesses: catalogue, cart, UPI and card payments, order emails and an admin panel. Built by Elyx, starting from ₹9,999.`,
    h1: `An online store built to <span class="serif-i">take orders,</span> not just show products.`,
    answer: `Elyx builds online stores with a catalogue, cart, UPI and card payments, order emails and an admin panel you can run yourself. Engagements start from ₹9,999, and every store is quoted to your requirements.`,
    audience: `Shop owners, makers and brands selling products in India who want their own store, domain and customer list instead of living on a marketplace.`,
    intro: [
      `A marketplace listing rents you a shelf, and the marketplace keeps the customer. A store of your own turns the same products into a brand, a customer list you can message and a checkout you control. It also needs more care than a brochure site, because payments, stock, delivery rules and order emails all have to work every time.`,
      `We build the store so the dependable parts are dependable and the parts your customers see are fast on a phone. Where a hosted platform such as Shopify or WooCommerce is the right fit we say so, and where a custom build earns its cost we explain why.`
    ],
    includedTitle: `What you get with an online store`,
    included: [
      { t: `Catalogue and product pages`, d: `Clear product pages with photos, variants, stock status and the details buyers look for, easy for your team to add to.` },
      { t: `Cart and checkout`, d: `A short checkout that works one-handed on a phone, with guest checkout and clear delivery and return information.` },
      { t: `UPI and card payments`, d: `Payments through a gateway such as Razorpay, Cashfree or PayU, with receipts. Card details are handled by the gateway and never stored on your server.` },
      { t: `Orders and notifications`, d: `Order confirmation emails and status updates, plus a WhatsApp message where you want one, so customers are never left guessing.` },
      { t: `An admin panel you can run`, d: `Add products, change prices, manage orders and refunds, and export what your accountant needs, without calling a developer.` },
      { t: `Speed and search visibility`, d: `Fast pages, clean URLs and product markup, so the store loads quickly and can show up in Google.` }
    ],
    processTitle: `How a store project runs`,
    process: [
      { t: `Discovery call`, d: `We learn what you sell, how many products you have, how orders are delivered and which payment methods your customers use.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the catalogue, payments, delivery rules and admin panel, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Design and catalogue plan`, d: `Store and product page designs you approve, plus a plan for loading your products.`, time: `Before we build` },
      { t: `Build and test orders`, d: `We build in weekly increments and place real test orders through the payment gateway before anything goes live.`, time: `Weekly` },
      { t: `Launch and handover`, d: `Go-live checks, a walkthrough of the admin panel and support after launch.`, time: `Launch` }
    ],
    pricingKeys: [],
    priceTitle: `E-commerce pricing`,
    priceNote: `What moves the price: the number of products and categories, variants such as size and colour, payment and shipping options, customer accounts and coupons, and whether we also load your catalogue.`,
    timelineText: `A store usually takes longer than a brochure site because payments and orders have to be tested end to end. We agree the schedule in the written proposal before work begins.`,
    case: 'malnad-stories',
    industries: ['restaurants-and-cafes'],
    faqs: [
      { q: `Should I use Shopify, WooCommerce or a custom store?`, a: `It depends on how many products you sell, how unusual your checkout is and who will run the store day to day. A hosted platform is often quicker to start. A custom store earns its cost when you need your own flow, such as special delivery rules or integrations. We tell you which fits before you spend. Our <a href="/blog/shopify-vs-woocommerce-india/">Shopify vs WooCommerce guide</a> compares the two.` },
      { q: `Can customers pay by UPI and card?`, a: `Yes. We connect a payment gateway so customers can pay by UPI, cards and net banking. The gateway handles the card details, and you receive receipts and order records.` },
      { q: `Can I add and edit products myself?`, a: `Yes. The admin panel lets your team add products, change prices and manage orders without a developer.` },
      { q: `Do you handle shipping?`, a: `We build the delivery rules and order flow into the store, such as areas, charges and tracking messages. Choosing a courier and the shipping itself stay with you.` },
      PRICE_FAQ(`an online store`)
    ],
    blogCategory: 'websites'
  },

  /* ------------------------------------------------------------ AI CHATBOTS */
  {
    slug: 'ai-chatbots',
    name: 'AI Chatbots',
    navDesc: 'Answers customers, around the clock.',
    icon: '<path d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v6a2.5 2.5 0 01-2.5 2.5H11l-4 3.5V15h-.5A2.5 2.5 0 014 12.5v-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M9 9.7h.01M12 9.7h.01M15 9.7h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    title: `AI Chatbots for Indian Businesses | Elyx`,
    description: `AI chatbots for your website and WhatsApp that answer questions from your own content and hand over to your team. Built by Elyx from ₹9,999.`,
    h1: `An AI chatbot that answers customers from <span class="serif-i">your own</span> content.`,
    answer: `Elyx builds AI chatbots for your website and WhatsApp that answer common questions from information you approve, collect enquiry details and hand the chat to your team when it matters. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Businesses that get the same questions all day, such as prices, timings, availability and how to book, and want faster replies without adding people to the inbox.`,
    intro: [
      `Most customer messages are the same handful of questions. A chatbot that answers them instantly, at any hour, frees your team for the conversations that need a person. The risk is a bot that confidently says something wrong, which is worse than no bot at all.`,
      `So we build chatbots that answer only from information you approve, say plainly when they do not know, and pass the chat to a human with the details already collected. We start narrow, with the questions that cost you the most time, and widen from there.`
    ],
    includedTitle: `What an AI chatbot from us includes`,
    included: [
      { t: `Answers from your own content`, d: `The bot is taught your services, timings, policies and FAQs, and is told to say it is not sure rather than guess.` },
      { t: `Website and WhatsApp`, d: `A chat on your website, on WhatsApp, or both, so customers can ask in the place they already use.` },
      { t: `Lead capture`, d: `It asks for the name, phone number and what the visitor needs, and sends the details to you or your CRM, so no enquiry is lost.` },
      { t: `Handover to your team`, d: `When a question is sensitive or complex, or the customer asks for a person, the chat passes to your team with the conversation attached.` },
      { t: `The languages your customers use`, d: `Replies in languages such as English, Hindi or Kannada, tested with your own real questions before launch.` },
      { t: `Review and improvement`, d: `You can read what customers asked and where the bot was unsure, so its answers improve and gaps on your website become easy to see.` }
    ],
    processTitle: `How a chatbot project runs`,
    process: [
      { t: `Discovery call`, d: `We list the questions your customers ask most and decide what the bot should and should not answer.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the channels, the knowledge it uses and the handover rules, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Prepare the knowledge`, d: `We gather and tidy the content the bot will use, and mark anything it must never answer.`, time: `Before we build` },
      { t: `Build and test`, d: `We build a first version and test it with your real questions, including the tricky ones, then tighten it.`, time: `Weekly` },
      { t: `Launch and improve`, d: `We go live, read the first conversations with you and fix what the bot gets wrong.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `AI chatbot pricing`,
    priceNote: `What moves the price: the number of channels, how much content the bot must know, the languages, how it connects to your CRM or booking tool, and how much review you want after launch. AI model usage is billed by the provider you choose, separately from our build.`,
    timelineText: `A first working version is shown to you early so you can test it with real questions. We agree the schedule in the written proposal before work begins.`,
    industries: ['dentists', 'coaching-centres', 'real-estate', 'restaurants-and-cafes'],
    faqs: [
      { q: `Will the chatbot make things up?`, a: `Any AI can get things wrong, so we design against it. The bot answers from the content you approve, is told to say when it is not sure, and hands over to a person for anything sensitive. We test it with your real questions before launch and review its answers afterwards.` },
      { q: `Can it work on WhatsApp?`, a: `Yes. We can connect it to the WhatsApp Business Platform. WhatsApp has its own rules, for example that customers must have agreed to receive messages and that business-started messages use approved templates, and we set the bot up to follow them.` },
      { q: `Does it replace my team?`, a: `No. It handles the repeat questions so your team can spend its time on the conversations that need a person, and it passes those over with the details already collected.` },
      { q: `What does the chatbot run on?`, a: `It uses a large language model through a provider's API. We help you pick one that suits your needs and budget. The provider charges for usage separately from our build.` },
      PRICE_FAQ(`an AI chatbot`)
    ],
    blogCategory: 'ai'
  },

  /* ------------------------------------------------------------ AI CALLS */
  {
    slug: 'ai-call-assistants',
    name: 'AI Call & Voice Assistants',
    navDesc: 'Answers and qualifies phone calls.',
    icon: '<path d="M6.6 4h2.2l1.2 3.4-1.6 1.2a10 10 0 004.2 4.2l1.2-1.6 3.4 1.2v2.2A2 2 0 0115.2 16 11.2 11.2 0 014 4.8 2 2 0 016.6 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M15 4.5a5.5 5.5 0 014.5 4.5M15 8a2.5 2.5 0 012 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: `AI Call & Voice Assistants for Business | Elyx`,
    description: `AI voice assistants that answer your business calls, qualify callers, book appointments and pass urgent calls to your team. Built by Elyx from ₹9,999.`,
    h1: `An AI assistant that answers your calls, <span class="serif-i">so no caller is missed.</span>`,
    answer: `Elyx builds AI voice assistants that pick up your business calls, understand what the caller needs, book a slot or take a message, and pass urgent calls to your team. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Clinics, salons, service businesses and sales teams that miss calls when everyone is busy and lose customers to the next number on the list.`,
    intro: [
      `A missed call is often a lost customer, and most small teams cannot answer every call at every hour. A voice assistant can answer straight away, ask the right questions, book a slot or take a message, and send you a summary.`,
      `Voice is less forgiving than chat, so we start with one narrow job, such as answering inbound calls and booking appointments, and test it with practice calls before it talks to a customer. Outbound calling is a different matter: telecom rules apply, so we confirm what is allowed before building it.`
    ],
    includedTitle: `What an AI call assistant includes`,
    included: [
      { t: `Answers inbound calls`, d: `The assistant picks up, greets callers in a tone that suits your business and works out what they are asking for.` },
      { t: `Qualifies and books`, d: `It asks the questions your team would ask, then books an appointment or records the details for a call back.` },
      { t: `Hands over to a person`, d: `For urgent, upset or complicated callers it transfers the call or flags it to your team straight away.` },
      { t: `Call summaries`, d: `After each call you get a short summary and the caller's details by WhatsApp, email or in your CRM, so nothing depends on memory.` },
      { t: `Your callers' languages`, d: `Tuned and tested for the languages and accents your callers use, with scripts from your own business, before launch.` },
      { t: `Recording and consent`, d: `Call recording and notices are set up the way your advisor confirms they should be, and outbound calling is only built after the rules are checked.` }
    ],
    processTitle: `How a voice assistant project runs`,
    process: [
      { t: `Discovery call`, d: `We learn how calls reach you today, what callers ask and what a good answer sounds like.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the call flows, handover rules, integrations and languages, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Write the call flows`, d: `We script the conversations, including the awkward ones, and agree what the assistant must never say.`, time: `Before we build` },
      { t: `Build and test calls`, d: `We build the assistant and run practice calls, then tighten it until you are happy to put it live.`, time: `Weekly` },
      { t: `Launch and review`, d: `We start with a small share of calls, review the early ones with you and fix what needs fixing.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `AI call assistant pricing`,
    priceNote: `What moves the price: the number of call flows, the languages, the booking or CRM system it connects to, whether calls are transferred to people, and how much review you want after launch. Phone service and AI model usage are billed by their providers, separately from our build.`,
    timelineText: `We agree the schedule in the written proposal before work begins, and we test with practice calls before any real caller reaches the assistant.`,
    industries: ['dentists', 'salons-and-spas', 'real-estate', 'restaurants-and-cafes'],
    faqs: [
      { q: `Will callers know it is an AI?`, a: `We recommend telling callers they are speaking to an automated assistant, and we build that in by default. It builds trust and avoids confusion. How you handle it is your decision and we advise you on it.` },
      { q: `Can it handle Hindi, Kannada and other languages?`, a: `Often yes, but quality varies by language, accent and phone line. We test with realistic examples from your callers before launch and tell you honestly where it struggles.` },
      { q: `What if it cannot help a caller?`, a: `It says so, takes the caller's details and flags the call to your team, or transfers it straight away if that is set up. It should never leave a caller stuck.` },
      { q: `Can it make outbound calls?`, a: `It can be built to, but outbound calls are covered by telecom rules, including TRAI's regulations on commercial calls and messages. We start with inbound calls, and we only build outbound calling after we have confirmed with you what is permitted for your use.` },
      PRICE_FAQ(`an AI call assistant`)
    ],
    blogCategory: 'ai'
  },

  /* ------------------------------------------------------------ WHATSAPP */
  {
    slug: 'whatsapp-automation',
    name: 'WhatsApp & Business Automation',
    navDesc: 'Lead flows, follow-ups, workflows.',
    icon: '<path d="M13 3L5 13.2h6L10 21l8-10.2h-6L13 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>',
    title: `WhatsApp & Business Automation in India | Elyx`,
    description: `WhatsApp lead flows, instant replies, follow-ups and workflow automation that take repeat work off your team. Built by Elyx from ₹9,999.`,
    h1: `Automation that handles the <span class="serif-i">repeat work</span> so your team does not have to.`,
    answer: `Elyx automates the repeat work in your business: WhatsApp lead replies and follow-ups, forms that update your sheet or CRM, reminders and reports. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Owners and teams who copy details between WhatsApp, forms and spreadsheets by hand, forget follow-ups, or answer the same message many times a day.`,
    intro: [
      `Most small businesses run on WhatsApp, a spreadsheet and memory. That works until the enquiries multiply. Then replies get slow, follow-ups slip and nobody can say how many leads came in this week.`,
      `We connect the tools you already use so the routine steps happen by themselves: a new enquiry gets a reply, lands in your sheet or CRM, triggers a reminder and shows up in a report. We start with the one workflow that costs you the most time.`
    ],
    includedTitle: `What business automation includes`,
    included: [
      { t: `WhatsApp lead flows`, d: `Click-to-chat buttons and messages that capture who the customer is and what they want, then route the lead to the right person.` },
      { t: `Instant replies and follow-ups`, d: `Automatic first replies, reminders and follow-ups, sent at the right time and within WhatsApp's rules on consent and templates.` },
      { t: `Forms into your system`, d: `Website forms and ad leads sent straight into a Google Sheet, your CRM or your inbox, with no copy and paste.` },
      { t: `Alerts for your team`, d: `Notifications when a new lead arrives or a customer replies, so nobody waits for someone to check.` },
      { t: `Simple reports`, d: `A weekly summary of enquiries, replies and follow-ups, so you can see what is working.` },
      { t: `Your tools, connected`, d: `We link tools you already use, such as Google Sheets, email, payment links and your booking or CRM system, through their APIs or automation platforms.` }
    ],
    processTitle: `How an automation project runs`,
    process: [
      { t: `Discovery call`, d: `We map how enquiries and routine tasks flow today and pick the first workflow worth automating.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the workflows, the tools involved and the messages, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Design the workflow`, d: `We draw the steps, the messages and the exceptions, and you approve them before anything is built.`, time: `Before we build` },
      { t: `Build and test`, d: `We build it and test it with real examples, including the messy ones.`, time: `Weekly` },
      { t: `Launch and tune`, d: `We switch it on, watch the first runs and adjust the messages and rules.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `Automation pricing`,
    priceNote: `What moves the price: the number of workflows and steps, how many tools they connect, whether WhatsApp messages go through the WhatsApp Business Platform, and the reports you want. Messaging and platform fees are billed by their providers, separately from our build.`,
    timelineText: `A first workflow is usually the quickest thing to get live. We agree the schedule in the written proposal before work begins.`,
    industries: ['dentists', 'coaching-centres', 'salons-and-spas', 'real-estate'],
    faqs: [
      { q: `Is WhatsApp automation allowed?`, a: `Yes, within WhatsApp's rules. Business-started messages need the customer's consent and use approved templates, and we set the flows up to follow them. We do not build bulk unsolicited messaging.` },
      { q: `Do I need the WhatsApp Business API?`, a: `For automated replies and templates, usually yes, because the regular WhatsApp Business app is limited. We explain the options and their costs before you decide.` },
      { q: `Can it work with my existing sheet or CRM?`, a: `In most cases yes. If your tool has an API or an integration, we can connect it. We check this on the first call.` },
      { q: `What should I automate first?`, a: `The task you repeat most and where mistakes cost you, often replying to new enquiries and following them up. We help you pick on the discovery call.` },
      PRICE_FAQ(`business automation`)
    ],
    blogCategory: 'websites'
  },

  /* ------------------------------------------------------------ CRM */
  {
    slug: 'crm-lead-management',
    name: 'CRM & Lead Management',
    navDesc: 'Track every enquiry and follow-up.',
    icon: '<circle cx="9" cy="8.5" r="3" stroke="currentColor" stroke-width="1.6"></circle><path d="M3.5 19a5.5 5.5 0 0111 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M16 5.8a3 3 0 010 5.4M17.5 14.4A5.5 5.5 0 0120.5 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: `CRM & Lead Management Software in India | Elyx`,
    description: `A CRM that captures enquiries from your website, WhatsApp and ads, tracks every follow-up and shows what converts. Built by Elyx from ₹9,999.`,
    h1: `A CRM that makes sure <span class="serif-i">no enquiry</span> goes cold.`,
    answer: `Elyx builds CRMs and lead tracking tools that capture enquiries from your website, WhatsApp and ads, assign follow-ups and show which sources actually bring customers. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Teams that track leads in WhatsApp chats, notebooks or spreadsheets and want to know who needs a call today and which source brings paying customers.`,
    intro: [
      `A lead you do not follow up is a lead you paid for and lost. When enquiries arrive from calls, WhatsApp, forms and ads, the details end up in many places and the follow-up depends on who remembers.`,
      `A CRM puts them in one list with a status, an owner and a next step. We either set up and shape a ready-made CRM to your sales process, or build a simple custom one when your process does not fit the off-the-shelf tools. We say honestly which makes sense.`
    ],
    includedTitle: `What a CRM from us includes`,
    included: [
      { t: `One place for every lead`, d: `Enquiries from your website, WhatsApp, calls and ads land in a single list, with the source recorded.` },
      { t: `A pipeline that matches your sales`, d: `Stages such as new, contacted, quoted and won, so you can see where every lead stands.` },
      { t: `Follow-up reminders`, d: `Each lead has an owner and a next action, and the right person is reminded on the day.` },
      { t: `Notes and history`, d: `Every call, message and quote kept against the lead, so anyone on the team can pick up the thread.` },
      { t: `Reports that matter`, d: `Which sources bring leads, how many become customers and how quickly your team replies.` },
      { t: `Connected to your tools`, d: `Linked to your website forms, WhatsApp, email and booking tool, so details are never retyped.` }
    ],
    processTitle: `How a CRM project runs`,
    process: [
      { t: `Discovery call`, d: `We learn how leads reach you, who follows them up and where they get lost today.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the stages, users, integrations and reports, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Map your sales process`, d: `We agree the stages, the fields you need and who sees what.`, time: `Before we build` },
      { t: `Build and import`, d: `We build or configure the CRM, import your existing leads from a spreadsheet and test it with your team.`, time: `Weekly` },
      { t: `Launch and train`, d: `A walkthrough for your team, then we watch the first weeks and adjust the stages and reports.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `CRM pricing`,
    priceNote: `What moves the price: the number of users, how many sources and tools it connects, the stages and rules in your sales process, and the reports you need. If a ready-made CRM fits, we tell you and set that up instead of building a new one.`,
    timelineText: `We agree the schedule in the written proposal before work begins, and your team tests the CRM before it goes live.`,
    industries: ['real-estate', 'coaching-centres', 'ca-and-law-firms', 'dentists'],
    faqs: [
      { q: `Should I build a CRM or buy one?`, a: `If a ready-made CRM fits how you sell, buying one is usually quicker and cheaper, and we will set it up for you. A custom CRM earns its cost when your process, your data or your integrations do not fit the off-the-shelf tools.` },
      { q: `Can it work with WhatsApp and my website forms?`, a: `Yes. We can send website forms, ad leads and WhatsApp enquiries into the CRM automatically, with the source recorded against each lead.` },
      { q: `Can my team use it on a phone?`, a: `Yes. We build it to work well on a phone, since sales teams are often on the move.` },
      { q: `Can you import my existing leads?`, a: `Yes. We can import leads from a spreadsheet and tidy up duplicates as part of the setup.` },
      PRICE_FAQ(`a CRM`)
    ],
    blogCategory: 'saas'
  },

  /* ------------------------------------------------------------ BOOKING */
  {
    slug: 'booking-systems',
    name: 'Booking & Appointment Systems',
    navDesc: 'Online scheduling with reminders.',
    icon: '<rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"></rect><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M9 14.5l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>',
    title: `Online Booking & Appointment Systems | Elyx`,
    description: `Online booking systems with live availability, reminders and deposits for clinics, salons and service businesses. Built by Elyx from ₹9,999.`,
    h1: `Let customers book themselves, <span class="serif-i">and show up.</span>`,
    answer: `Elyx builds online booking and appointment systems with live availability, confirmations, reminders and optional deposits, so customers can book without phone tag and your team has fewer no-shows to chase. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Clinics, salons, studios, consultants and coaching centres that take appointments by phone or WhatsApp and want customers to book on their own.`,
    intro: [
      `Booking by phone and WhatsApp means back and forth, double bookings and customers who book and then forget. An online system shows your real availability, takes the booking at any hour and reminds the customer before they are due.`,
      `We either connect a booking tool that fits your business or build a booking flow into your own site or app when you need something particular, such as several staff, services of different lengths or class capacity. We design it around WhatsApp too, because that is where many customers already are.`
    ],
    includedTitle: `What a booking system includes`,
    included: [
      { t: `Live availability`, d: `Customers see open slots based on your real calendar, services, staff and opening hours.` },
      { t: `Confirmations and reminders`, d: `Instant confirmation, then reminders by WhatsApp, SMS or email, with an easy way to reschedule or cancel.` },
      { t: `Deposits and payments`, d: `Optional deposits or full payment through a payment gateway to hold the slot.` },
      { t: `Staff, services and capacity`, d: `Different services, lengths and staff, with breaks and days off respected, so double bookings are avoided.` },
      { t: `A calendar you control`, d: `See every booking in one place, block time, add walk-ins and export the schedule.` },
      { t: `WhatsApp friendly`, d: `A booking link you can send on WhatsApp, and a one-tap start for people who prefer to message.` }
    ],
    processTitle: `How a booking project runs`,
    process: [
      { t: `Discovery call`, d: `We learn how bookings reach you today, which services and staff are involved and where the back and forth happens.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the services, staff, reminders and payments, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Map your services and schedule`, d: `We set up the services, lengths, staff and rules, and design the booking flow you approve.`, time: `Before we build` },
      { t: `Build and test bookings`, d: `We build the flow and test real bookings, reschedules and cancellations before launch.`, time: `Weekly` },
      { t: `Launch and handover`, d: `A walkthrough of the calendar for your team, then we watch the first bookings and fix what needs fixing.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `Booking system pricing`,
    priceNote: `What moves the price: the number of services and staff, deposits or payments, reminder channels, class or capacity limits, and whether it connects to your existing calendar or software. Reminder messages and payment gateway fees are billed by their providers.`,
    timelineText: `We agree the schedule in the written proposal before work begins, and we test real bookings before launch.`,
    case: 'ashirwad-dental',
    industries: ['dentists', 'salons-and-spas', 'coaching-centres', 'ca-and-law-firms'],
    faqs: [
      { q: `Can customers pay a deposit when they book?`, a: `Yes. We can add a deposit or full payment through a payment gateway, so a slot is held only once it is paid for.` },
      { q: `Will it sync with Google Calendar?`, a: `Usually yes. If you use Google Calendar we can normally keep it in sync, and we confirm that on the first call.` },
      { q: `Can it send reminders on WhatsApp?`, a: `Yes, through the WhatsApp Business Platform, following WhatsApp's rules on consent and templates. SMS and email reminders are options too.` },
      { q: `Is a ready-made booking tool enough?`, a: `Often yes, and then we set one up for you. A custom flow earns its cost when you have several staff, unusual service lengths, class capacity or a need to fit your own site or app.` },
      PRICE_FAQ(`a booking system`)
    ],
    blogCategory: 'websites'
  },

  /* ------------------------------------------------------------ PAYMENTS */
  {
    slug: 'payments-billing',
    name: 'Payments & Subscription Billing',
    navDesc: 'Gateways, invoices, recurring plans.',
    icon: '<rect x="3.5" y="6" width="17" height="12" rx="2.5" stroke="currentColor" stroke-width="1.6"></rect><path d="M3.5 10.5h17M7 15h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>',
    title: `Payment Gateway & Subscription Billing Setup | Elyx`,
    description: `Payment gateway integration, invoices and recurring subscription billing for Indian websites, apps and SaaS products. Built by Elyx from ₹9,999.`,
    h1: `Take payments and bill customers <span class="serif-i">without chasing them.</span>`,
    answer: `Elyx integrates payment gateways and builds subscription billing for websites, apps and SaaS products: UPI and card payments, invoices, renewals and failed-payment handling. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Businesses that want to collect money online, and SaaS and membership founders who need plans, renewals and invoices that run on their own.`,
    intro: [
      `Collecting a payment once is simple. Collecting it every month, handling a card that fails, issuing a proper invoice and keeping your books straight is where homemade setups break.`,
      `We connect the payment gateway that suits your business, build the checkout and the billing logic around it, and make sure the money, the invoices and the customer's access all stay in step. We never handle card details ourselves: the gateway does.`
    ],
    includedTitle: `What payments and billing work includes`,
    included: [
      { t: `Gateway integration`, d: `UPI, cards and net banking through a gateway such as Razorpay, Cashfree or PayU, chosen for your business type, payment mix and fees.` },
      { t: `Checkout and payment links`, d: `A smooth checkout on your site or app, plus payment links you can send on WhatsApp.` },
      { t: `Subscriptions and renewals`, d: `Plans, trials, upgrades and downgrades, with recurring charges set up the way your gateway and the customer's bank allow.` },
      { t: `Failed-payment handling`, d: `Retries and reminders when a charge fails, and access that changes only when you decide it should.` },
      { t: `Invoices and receipts`, d: `Automatic receipts and invoices carrying the details Indian businesses need, such as GSTIN and place of supply where relevant, in a format your accountant confirms.` },
      { t: `Reliable payment records`, d: `Payments confirmed by the gateway's own signals rather than only the customer's browser, with a clear record of every payment, refund and payout.` }
    ],
    processTitle: `How a payments project runs`,
    process: [
      { t: `Discovery call`, d: `We learn what you sell, how customers pay today and what you need to track, from refunds to renewals.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the gateway, the billing rules and the invoices, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Choose and set up the gateway`, d: `We compare the options for your business and guide you through the gateway's account and verification steps.`, time: `Before we build` },
      { t: `Build and test payments`, d: `We build the checkout and billing logic, then test successful, failed, refunded and renewed payments in the gateway's test mode.`, time: `Weekly` },
      { t: `Go live and watch`, d: `We switch to live payments, check the first real ones end to end and keep an eye on failures.`, time: `Launch` }
    ],
    pricingKeys: [],
    priceTitle: `Payments and billing pricing`,
    priceNote: `What moves the price: one-off payments or subscriptions, the number of plans and billing rules, invoicing and GST needs, refunds, and how many systems the payments connect to. Gateway fees are charged by the gateway and are separate from our fee.`,
    timelineText: `Gateway account verification is outside our hands and can take time, so we start it early. We agree the schedule in the written proposal before work begins.`,
    industries: ['coaching-centres', 'restaurants-and-cafes'],
    faqs: [
      { q: `Which payment gateway should I use?`, a: `It depends on your business type, volume, payment methods and fees. Our <a href="/blog/payment-gateway-for-website-india/">payment gateway guide</a> compares the main Indian options, and we help you choose and apply.` },
      { q: `Can you set up recurring payments?`, a: `Yes, within what your gateway and the customer's bank support. Our <a href="/blog/recurring-payments-india-saas/">recurring payments guide</a> explains the main rules and limits.` },
      { q: `Do you store card details?`, a: `No. Card details are handled by the payment gateway, not by your website or by us.` },
      { q: `Can invoices include GST details?`, a: `We can add the fields your invoices need, such as GSTIN, and your accountant should confirm the exact format and rate for your business.` },
      PRICE_FAQ(`payment and billing setup`)
    ],
    blogCategory: 'saas'
  },

  /* ------------------------------------------------------------ ADMIN */
  {
    slug: 'admin-dashboards',
    name: 'Admin Dashboards & Internal Tools',
    navDesc: 'Your workflow, turned into software.',
    icon: '<rect x="4" y="4" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="13" y="4" width="7" height="4.5" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="13" y="11" width="7" height="9" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect><rect x="4" y="14" width="7" height="6" rx="1.6" stroke="currentColor" stroke-width="1.6"></rect>',
    title: `Admin Dashboards & Internal Tools | Elyx`,
    description: `Custom admin dashboards, client portals and internal tools that replace spreadsheets and WhatsApp groups. Built by Elyx from ₹9,999.`,
    h1: `Replace the spreadsheet your team <span class="serif-i">runs the business on.</span>`,
    answer: `Elyx builds admin dashboards, client portals and internal tools that turn your spreadsheets and manual steps into software with logins, roles and reports. Engagements start from ₹9,999, quoted to your requirements.`,
    audience: `Teams running operations on spreadsheets, WhatsApp groups and email threads, and founders who need an admin side for a website or app they already have.`,
    intro: [
      `Many businesses are held together by one spreadsheet that only one person understands. It works until it gets long, two people edit it at once or that person goes on leave.`,
      `We turn that process into a proper tool: logins for the people who need access, roles so each person sees only what they should, forms that stop bad data, and dashboards that show what is happening. We start with the one process that hurts most and build outwards.`
    ],
    includedTitle: `What an internal tool includes`,
    included: [
      { t: `Logins and roles`, d: `Each person signs in and sees only what their role allows, such as staff, managers or clients.` },
      { t: `Forms and workflows`, d: `Structured forms and approval steps in place of free-text messages, so data arrives clean and requests do not get lost.` },
      { t: `Dashboards`, d: `Live views of orders, leads, tasks or whatever you track, instead of totals someone updates by hand.` },
      { t: `Search, filters and exports`, d: `Find anything quickly and export to Excel or PDF when your accountant or a client asks.` },
      { t: `Notifications`, d: `Email or WhatsApp alerts when something needs approval or changes status.` },
      { t: `Client portals`, d: `Optionally give customers their own login to see orders, documents or progress, instead of asking you by message.` }
    ],
    processTitle: `How an internal tool project runs`,
    process: [
      { t: `Discovery call`, d: `We look at the spreadsheet or process you run on today and who touches it.`, time: `Day 1–2` },
      { t: `Scoped proposal`, d: `A written scope covering the screens, roles, integrations and reports, with a quote tailored to you.`, time: `Day 2–3` },
      { t: `Design the screens`, d: `Wireframes of the screens and the flow, which you approve before we build.`, time: `Before we build` },
      { t: `Build and import`, d: `We build in weekly increments, import your existing data and let your team try it as it grows.`, time: `Weekly` },
      { t: `Launch and train`, d: `A walkthrough for your team, then we stay close for the first weeks and fix what real use turns up.`, time: `After launch` }
    ],
    pricingKeys: [],
    priceTitle: `Internal tool pricing`,
    priceNote: `What moves the price: the number of screens, user roles, integrations and reports, and how much of an existing spreadsheet has to be imported and tidied.`,
    timelineText: `We agree the schedule in the written proposal before work begins, and a first usable version is shown to your team early.`,
    industries: ['ca-and-law-firms', 'real-estate', 'coaching-centres'],
    faqs: [
      { q: `Can you build this from my existing spreadsheet?`, a: `Yes. The spreadsheet is the best brief we can get. We study how it is used, build the tool around that process and import your existing data.` },
      { q: `Can my customers log in too?`, a: `Yes. A client portal gives customers their own login to see only their own orders, documents or progress.` },
      { q: `Is my data safe?`, a: `We build with sign-in, role-based access and backups as standard, and agree where the data is hosted. For anything sensitive we discuss the details up front.` },
      { q: `Will it connect to my website or app?`, a: `In most cases yes. If your website or app has an API or a database we can reach, we can connect the tool to it.` },
      PRICE_FAQ(`an internal tool`)
    ],
    blogCategory: 'saas'
  }
];
