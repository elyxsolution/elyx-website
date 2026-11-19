'use strict';
/* Case-study pages  →  /work/{slug}/
   ONLY facts already on the live site are used. To strengthen a page, add real numbers to
   `metrics` (e.g. { n: '+38', u: '%', l: 'Enquiries in the first 60 days' }), fill `stack`,
   or extend `problem` / `built`, then run:  node _src/build.js

   Entries with `external: true` are portfolio cards for client sites we built: no /work/ page is generated. The card shows `thumb`
   (a screenshot of the site's landing page in /uploads/projects/) and links straight to `liveUrl` in a new tab. */

module.exports = [
  {
    slug: 'ashirwad-dental',
    client: 'Ashirwad Dental Clinics',
    shortName: 'Ashirwad Dental Clinic',
    category: 'Web · Redesign',
    tint: 'dental',
    mono: 'A',
    liveUrl: 'https://ashirwaddental.com',
    liveLabel: 'ashirwaddental.com',
    thumb: '/uploads/projects/ashirwad-dental.jpg',
    title: 'Ashirwad Dental Clinic Website Redesign | Elyx Case Study',
    description: 'How Elyx redesigned the Ashirwad Dental Clinics website: a modern patient experience, a WhatsApp booking flow and a trust-building gallery, shipped in eight weeks.',
    h1: 'A dental clinic website redesign, shipped in <span class="serif-i">eight weeks.</span>',
    summary: 'Full website redesign for a dental clinic: a modern feel, a WhatsApp booking flow and a gallery that builds patient trust.',
    services: ['web-development', 'seo-optimization'],
    industry: 'dentists',
    problem: [
      'Ashirwad Dental Clinics needed a website as modern as the care the clinic provides, and one that made booking effortless for patients. According to the clinic, two earlier agencies had not delivered what they needed in a year.',
      'The goal was not just a new look. It was a patient experience that builds confidence before the first visit and turns a visit to the site into an appointment.'
    ],
    built: [
      { t: 'A modern, trust-first redesign', d: 'A clean, current design that presents the clinic and its care the way patients expect from a modern practice.' },
      { t: 'WhatsApp booking flow', d: 'Patients book through WhatsApp in a tap, the way they already communicate, instead of filling in a long form.' },
      { t: 'A gallery that builds confidence', d: 'Real photography of the clinic and its work, so nervous first-time patients know what to expect.' },
      { t: 'Speed and mobile-first layout', d: 'Built to load quickly and read well on a phone, where most clinic searches happen.' }
    ],
    timeline: [
      { t: 'Discovery and scope', d: 'Understood the clinic, its patients and the actions that matter most.' },
      { t: 'Design', d: 'Wireframes and visual design agreed before build began.' },
      { t: 'Build and feedback', d: 'Weekly increments with two rounds of feedback from the clinic.' },
      { t: 'QA and launch', d: 'Device testing, staging review and go-live.' }
    ],
    timelineTotal: '8 weeks from kickoff to launch',
    metrics: [
      { n: '8', u: ' weeks', l: 'Kickoff to launch' },
      { n: '1', u: ' tap', l: 'To start a WhatsApp booking' }
    ],
    quote: {
      text: 'Elyx didn\'t just build our platform, they understood the business behind it. We shipped in eight weeks what two prior agencies couldn\'t in a year.',
      name: 'Dr Hemalatha',
      role: 'Co-Founder, Ashirwad Dental Clinics'
    },
    stack: []
  },
  {
    slug: 'malnad-stories',
    client: 'Malnad Stories',
    shortName: 'Malnad Stories',
    category: 'E-commerce · Web App',
    tint: 'malnad',
    mono: 'M',
    liveUrl: 'https://www.malnadstories.com/',
    liveLabel: 'malnadstories.com',
    thumb: '/uploads/projects/malnad-stories.jpg',
    title: 'Photo Album E-commerce Build: Malnad Stories | Elyx',
    description: 'How Elyx built Malnad Stories, a full-stack e-commerce platform for trek and travel photo albums with custom printing, secure payments and cloud storage.',
    h1: 'A full-stack photo-album store for <span class="serif-i">trek and travel</span> memories.',
    summary: 'A full-stack photo-album e-commerce platform for trek and travel memories, with custom printing, secure payments and cloud storage.',
    services: ['web-development', 'app-development', 'saas-development'],
    industry: null,
    problem: [
      'Malnad Stories turns trek and travel photographs into printed albums. That is more than a catalogue site: customers upload their own photos, design an album, pay online and expect it to arrive as a finished product.',
      'The platform had to handle uploads and storage, custom printing orders and secure payments, and still feel simple to a customer who just wants their memories on a shelf.'
    ],
    built: [
      { t: 'Custom printing flow', d: 'Customers build their album from their own photos and place a print order within the same experience.' },
      { t: 'Secure payments', d: 'Online checkout built around secure payment handling for Indian customers.' },
      { t: 'Cloud storage for photos', d: 'Reliable storage for customers\' photographs, so uploads and orders are safe and quick to retrieve.' },
      { t: 'Full-stack, launch ready', d: 'Front end, back end, database and admin tooling built by one team and delivered launch ready.' }
    ],
    timeline: [
      { t: 'Discovery and scope', d: 'Mapped the customer journey from upload to delivery.' },
      { t: 'Architecture and design', d: 'Data model, storage and checkout flow agreed before build.' },
      { t: 'Build and feedback', d: 'Working increments every week with structured feedback.' },
      { t: 'QA and launch', d: 'Payment and upload testing, staging review, then launch.' }
    ],
    timelineTotal: '',
    metrics: [],
    quote: null,
    stack: []
  },
  {
    external: true,
    slug: 'powertek',
    client: 'Powertek',
    shortName: 'Powertek',
    category: 'Web · Electrical',
    tint: 'ext',
    mono: 'P',
    liveUrl: 'https://powertekservices.in/',
    liveLabel: 'powertekservices.in',
    thumb: '/uploads/projects/powertek.jpg',
    summary: 'Website for a Class I licensed electrical contractor in Bengaluru, working since 1995 on HT and LT infrastructure. It sets out the services, a project gallery, an enquiry form and WhatsApp and call buttons.',
    result: ['Class I', 'electrical contractor'],
    metrics: []
  },
  {
    external: true,
    slug: 'hindustan-foundation',
    client: 'Hindustan Foundation & Constructions',
    shortName: 'Hindustan Foundation & Constructions',
    category: 'Web · Construction',
    tint: 'ext',
    mono: 'H',
    liveUrl: 'https://hindustanfoundationandconstructions.com/',
    liveLabel: 'hindustanfoundationandconstructions.com',
    thumb: '/uploads/projects/hindustan-foundation.jpg',
    summary: 'Website for a Bengaluru pile foundation contractor. It covers boring, cage and concrete work and load testing, with live project sections, headline stats and one-tap call and email enquiries.',
    result: ['Piling', 'contractor, Bengaluru'],
    metrics: []
  },
  {
    external: true,
    slug: 'aralikatte-cafe',
    client: 'Aralikatte Cafe',
    shortName: 'Aralikatte Cafe',
    category: 'Web · Restaurant',
    tint: 'ext',
    mono: 'A',
    liveUrl: 'https://aralikattecafe.in/',
    liveLabel: 'aralikattecafe.in',
    thumb: '/uploads/projects/aralikatte-cafe.jpg',
    summary: 'Website for a pure vegetarian South Indian cafe in Subramanyapura, Bengaluru. Visitors browse the full menu by category, get map directions, call to order, and see the gallery and catering page.',
    result: ['Menu', 'maps and catering'],
    metrics: []
  },
  {
    external: true,
    slug: 'bangalore-music-trust',
    client: 'Bangalore Music Trust',
    shortName: 'Bangalore Music Trust',
    category: 'Web · Non-profit',
    tint: 'ext',
    mono: 'B',
    liveUrl: 'https://bangaloremusictrust.com/',
    liveLabel: 'bangaloremusictrust.com',
    thumb: '/uploads/projects/bangalore-music-trust.jpg',
    summary: 'Website for a Bengaluru music education trust teaching Western vocals, Western instruments and Hindustani classical. It takes class enquiries and donations and has pages for events, volunteers and partnerships.',
    result: ['Donations', 'and class enquiries'],
    metrics: []
  }
];
