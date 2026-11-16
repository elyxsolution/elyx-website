'use strict';
/* Case-study pages  →  /work/{slug}/
   ONLY facts already on the live site are used. To strengthen a page, add real numbers to
   `metrics` (e.g. { n: '+38', u: '%', l: 'Enquiries in the first 60 days' }), fill `stack`,
   or extend `problem` / `built`, then run:  node _src/build.js  */

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
      text: 'Elyx didn\'t just build our platform — they understood the business behind it. We shipped in eight weeks what two prior agencies couldn\'t in a year.',
      name: 'Dr Hemalatha',
      role: 'Co-Founder, Ashirwad Dental Clinics'
    },
    stack: []
  },
  {
    slug: 'pinnacle-inc',
    client: 'Pinnacle Inc.',
    shortName: 'Pinnacle Inc.',
    category: 'Web · EdTech',
    tint: 'pinnacle',
    mono: 'P',
    liveUrl: 'https://www.pinnacleinc.co/',
    liveLabel: 'pinnacleinc.co',
    title: 'Coaching Centre Landing Page Case Study: Pinnacle | Elyx',
    description: 'How Elyx built the landing page and brand presence for Pinnacle Inc., a GRE and IELTS coaching company, designed to convert prospective students.',
    h1: 'A GRE & IELTS coaching site built to <span class="serif-i">convert students.</span>',
    summary: 'Landing page and brand presence for a GRE & IELTS coaching company, built to convert prospective students.',
    services: ['web-development', 'seo-optimization'],
    industry: 'coaching-centres',
    problem: [
      'Pinnacle Inc. is a GRE and IELTS coaching company. Study-abroad and test-prep is a category where a lot of money goes into ads, so a landing page has to turn that traffic into enquiries, not just visits.',
      'They needed a page and brand presence that explained the offer clearly, looked credible next to larger competitors, and made it easy for a prospective student to take the next step.'
    ],
    built: [
      { t: 'A conversion-focused landing page', d: 'A page designed around one action: getting a prospective student to enquire.' },
      { t: 'Brand presence', d: 'A consistent visual identity and tone that makes a coaching company feel established and trustworthy.' },
      { t: 'Course clarity', d: 'GRE and IELTS offerings explained plainly so students and parents can compare quickly.' },
      { t: 'Built to be fast', d: 'Lean pages that load quickly on mobile, so paid traffic is not wasted.' }
    ],
    timeline: [
      { t: 'Discovery and scope', d: 'Understood the audience, the courses and the enquiry flow.' },
      { t: 'Design', d: 'Page structure and visual identity agreed before build.' },
      { t: 'Build and feedback', d: 'Built in weekly increments with feedback rounds.' },
      { t: 'QA and launch', d: 'Testing across devices, then launch.' }
    ],
    timelineTotal: '',
    metrics: [],
    quote: {
      text: 'The most reliable technical partner we\'ve had. Things just work — and when they don\'t, they\'re already on it.',
      name: 'Pinnacle Inc.',
      role: 'GRE & IELTS coaching'
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
  }
];
