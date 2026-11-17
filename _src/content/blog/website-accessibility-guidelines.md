---
title: Website Accessibility Basics for Indian Businesses
slug: website-accessibility-guidelines
category: websites
description: Website accessibility guidelines explained for Indian businesses: WCAG levels, contrast, alt text, keyboard use, forms and nine ranked quick wins.
date: 2026-11-16
author: shreyasmv
---
Website accessibility guidelines are, in practice, one document: the Web Content Accessibility Guidelines (WCAG) from the W3C, and in November 2026 the version to build to is WCAG 2.2 at level AA. For a small business that means readable colour contrast, text for every meaningful image, a site that works without a mouse, and forms that explain themselves. The honest qualification is that my research holds no Indian law covering private business sites, only guidelines for government sites and rules from other countries, so the legal side is a question for a lawyer.

- **The standard.** WCAG 2.2 has four principles and three levels, and A plus AA is the usual target.
- **The checks.** Contrast, alt text, keyboard use and forms each map to named WCAG criteria, listed below.
- **Quick wins.** Nine fixes are ranked by who can do them, with a self-test you can run in one sitting.
- **The limit.** The evidence here is guidelines and standards, not figures on traffic, enquiries or lawsuits.

## Website Accessibility Guidelines: What WCAG Is and What It Covers

WCAG 2 is the shared technical standard for web accessibility, developed by the W3C's Web Accessibility Initiative with people and organisations around the world. The W3C's overview says WCAG 2.2 has 13 guidelines under four principles. Three are perceivable, operable and understandable. The fourth covers compatibility with browsers and assistive tools.

Each guideline carries testable success criteria at three levels: A, AA and AAA. The W3C calls WCAG a technical standard, not an introduction, so this page translates it.

WCAG 2.2 became a W3C Recommendation on 5 October 2023 and was updated on 12 December 2024, per the W3C. Later versions add criteria rather than change old ones, with one exception: 4.1.1 Parsing is obsolete. So content that meets 2.2 also meets 2.1 and 2.0.

WCAG 3.0 is a working draft, and Wikipedia notes that no part of it is a recommendation yet. The UK government's Department for Work and Pensions (DWP) accessibility manual adds that the levels build on each other, so level AA means meeting every A and AA criterion, 55 in all for WCAG 2.2.

## Website Accessibility Guidelines in India, the EU, the UK and the US

India's own guideline is GIGW 3.0, written for government websites and apps, and its accessibility section takes its success criteria from WCAG 2.1. Private businesses are not named in what I read. The table sets GIGW beside the rules abroad, as summarised by the sources named under it.

| Place | Rule | Standard it cites | Covers |
|---|---|---|---|
| India | GIGW 3.0 | Criteria from WCAG 2.1 | Government sites and apps |
| EU | European Accessibility Act, applicable from 28 June 2025 | WCAG 2.1 AA (Wikipedia) | Websites, apps, online shops |
| UK | Accessibility Regulations 2018 | AA; 2.1 (Wikipedia) or 2.2 (DWP) | Public sector bodies |
| US | Justice Department rule, 24 April 2024 | WCAG 2.1 AA | State and local governments |
| Australia | Disability Discrimination Act 1992 | WCAG 2.0 level A | Government websites |

As of November 2026 these are secondary summaries from Wikipedia, DWP and the W3C, not the legal texts, and two sources disagree on the UK version. The W3C adds that the 2026 version of the European standard EN 301 549 uses WCAG 2.2. Read the primary rule before relying on any row.

Wikipedia's page also says companies outside the EU must comply with the Act if they sell products or services in an EU member state. An Indian exporter with an online shop selling into Europe should ask a lawyer whether that applies.

My reading is that a private Indian site should build to WCAG 2.2 AA. It covers GIGW's 2.1 base because the W3C says 2.2 content also meets 2.1, and AA is the level the UK and EU rows name. I cannot tell whether GIGW 3.0 asks for more than WCAG, because my research read only its accessibility section.

If you are hiring, write the target level into the brief. The [website brief template](/blog/website-requirements-template/) has a rules row, and the university specification it reviews names GIGW and WCAG. The [questions to ask a web developer](/blog/how-to-hire-a-web-developer/) should include one about testing. A written scope, as in Elyx Solutions' [web development service](/services/web-development/), is where the level belongs.

## Why Website Accessibility Matters, and What the Evidence Does Not Show

Accessibility matters because a site that a screen reader, a keyboard or a deaf visitor cannot use turns those visitors away, and because more rules now point at WCAG. The split below keeps what the sources say apart from my reading.

**Documented:**

- GIGW says text alternatives let a person who cannot see a picture hear it read aloud, and captions let a deaf person follow a video.
- Wikipedia calls following WCAG prudent protection against accessibility lawsuits, and the EU and US rows above show rules naming it.

**My reading:**

- Phone users in bright sun, on slow 4G or with one hand free benefit from the same fixes, so accessibility is not a niche.
- A public tender can ask for GIGW or WCAG, as the university brief does, so a studio that cannot say what it tests loses that work.

No source in my package gives the number of people with disabilities online in India, or any enquiry gain from fixing a site. I give neither.

## Contrast and Colour: The First Check

Contrast is the difference in brightness between text and its background, and WCAG sets a minimum for it at level AA through criterion 1.4.3, Contrast (Minimum). The W3C's WCAG 2.1 text sets that minimum at 4.5 to 1 for normal text and 3 to 1 for large text. Criterion 1.4.11, Non-text Contrast (AA), applies a 3 to 1 figure to things like form-field borders and icons.

Criterion 1.4.1, Use of Color (level A), says colour cannot be the only way to show something. GIGW gives the classic case: required fields shown in red also carry an asterisk, and the form's instructions say so.

My list of places to check, which is a checklist and not a finding:

- **Buttons.** White text on a bright brand colour, including the main enquiry button.
- **Placeholders.** Pale grey hint text inside form fields.
- **Text on photos.** Headlines placed over a hero image.
- **Footer.** Light grey small print on white.

Paste the two colour codes into any contrast checker and darken the failing one. Criteria 1.4.4 Resize Text and 1.4.10 Reflow (both AA) also expect the page to survive zooming.

## Alt Text: Describe the Purpose, Not the Picture

Alt text is a short description stored in an image's `alt` attribute, and criterion 1.1.1, Non-text Content (level A), requires one for every meaningful image. GIGW says the description should summarise the content or purpose, and that a label like "Picture" serves no purpose.

GIGW adds that alt text appears before the image finishes loading, which helps on patchy mobile data. Purely decorative images get an empty `alt=""` so assistive technology skips them. The examples in the table are illustrations of mine, not client work.

| Image | What to do | Illustration |
|---|---|---|
| Clinic reception photo | Describe what it shows | Reception desk with a waiting area behind it |
| Logo that links home | Name the business and the link | Your business name, home page |
| WhatsApp icon button | Name the action | Chat on WhatsApp |
| Fee or batch poster | Publish as text; if not, repeat every line | Criterion 1.4.5, Images of Text (AA) |
| Decorative divider | Leave the alt empty | `alt=""` |

The fee-poster row matters in India, where coaching centres and clinics often paste a designed image of fees or batch timings. Real text can be read aloud, resized and searched.
## Keyboard Use: Can Someone Finish an Enquiry Without a Mouse?

A site is keyboard accessible when every link, button, menu and field can be reached and used with Tab, Enter, Space and the arrow keys, which is criterion 2.1.1, Keyboard (level A). MDN explains the Operable principle the same way: a button must work by mouse, keyboard or voice.

Four related criteria decide how it feels:

- **2.1.2 No Keyboard Trap (A).** A visitor can leave a pop-up, chat widget or cookie banner.
- **2.4.7 Focus Visible (AA).** The outline showing where you are must not be removed for looks.
- **2.4.11 Focus Not Obscured, Minimum (AA, new in 2.2).** A sticky header or floating WhatsApp button must not cover the focused item.
- **2.5.8 Target Size, Minimum (AA, new in 2.2).** Small tap targets on phones fail people with limited dexterity.

Run this five-step test on your own home page and contact page. It is my method, built from those criteria.

1. Put the mouse aside, load the page and press Tab repeatedly.
2. Check that an outline is visible at every stop.
3. Check that the order follows the reading order (criterion 2.4.3, Focus Order, level A).
4. Open the menu and any pop-up by keyboard, then leave with Escape or Tab.
5. Fill and submit the contact form without touching the mouse.

## Forms: Labels, Errors and Autofill

An accessible form gives every field a visible label, says plainly what went wrong, and lets the browser fill known details, which maps to criteria 3.3.2, 3.3.1 and 1.3.5.
The criteria involved, with levels from Wikipedia's WCAG table:

- **3.3.2 Labels or Instructions (A)** and **3.3.1 Error Identification (A).**
- **3.3.3 Error Suggestion (AA)** and **1.3.5 Identify Input Purpose (AA).** GIGW's example is a form filling name, postcode, telephone number and email from stored browser values.
- **3.3.7 Redundant Entry (A, new in 2.2):** do not ask for the same detail twice.
- **3.3.4 Error Prevention for legal, financial and data entries (AA):** let people review before a booking deposit or payment.

The next table is a before-and-after for a made-up appointment form, built by me from those criteria.

| Field | Common fault | Fix |
|---|---|---|
| Name | Grey hint text in the field is the only label and vanishes on typing | Visible label above the field |
| Mobile number | Red border only on error | Message beside the field: "Enter a 10-digit mobile number" |
| Email | Error reads "Invalid input" | "Email needs an @ sign, like name@example.com" |
| Required fields | Red label only | Red plus an asterisk, and a line saying what * means |
| Submit | Instructions say "tap the round button" | Label the button "Request appointment" |

The last row follows GIGW's warning against instructions that rely on shape or position, such as "the button to the right". Many Indian sites also use OTP logins, and WCAG 2.2 adds 3.3.8, Accessible Authentication (Minimum, AA). Read that criterion before you build one.

## Language, Video and Page Structure

Three further basics matter on Indian sites: the declared page language, captions on video, and a clear page structure. Criterion 3.1.1, Language of Page (A), and 3.1.2, Language of Parts (AA), ask you to state the main language and mark passages in another. Marking a Hindi or Kannada line inside an English page lets assistive tools switch language, which is my reading of their purpose.

- **Captions.** 1.2.2 requires captions on prerecorded video (A), and GIGW says they should name speakers and meaningful sounds. Audio-only content needs a transcript.
- **Titles and headings.** 2.4.2 Page Titled (A) and 2.4.6 Headings and Labels (AA) make a page findable by tab title and heading.

## Quick Wins, Ranked, With a One-Sitting Self-Test

The quickest wins need a setting or a sentence, not a rebuild. The table ranks nine by my judgement: most visitors affected, least effort first. The criteria and levels come from Wikipedia's WCAG table and GIGW, and I give no time or cost because no source supplies one.

| Quick win | Criterion (level) | Who does it |
|---|---|---|
| Alt text on meaningful images, empty on decoration | 1.1.1 (A) | Owner, in the CMS |
| Fees and batch posters as real text | 1.4.5 (AA) | Owner or developer |
| Darken failing button and text colours | 1.4.3, 1.4.11 (AA) | Owner picks, developer applies |
| Visible labels and plain error messages | 3.3.1, 3.3.2 (A) | Developer |
| Restore the focus outline | 2.4.7 (AA) | Developer |
| Name icon-only buttons: WhatsApp, call, menu | 4.1.2 (A) | Developer |
| Set page language, mark Hindi or Kannada parts | 3.1.1, 3.1.2 | Developer |
| Captions on testimonial and explainer videos | 1.2.2 (A) | Owner, on the video platform |
| Link text that says where it goes | 2.4.4 (A) | Owner |

GIGW's evaluator notes pair manual testing with a browser extension or tool for most criteria, and some, such as captions, are manual only. So a scan is a start, not a verdict. Run this self-test:

- [ ] I tabbed through the home and contact pages and saw the focus outline everywhere.
- [ ] I opened the menu and WhatsApp widget by keyboard and could leave them.
- [ ] My enquiry button and body text passed a contrast checker.
- [ ] Every photo has useful alt text, and decorations have none.
- [ ] My fees, menu or timetable are text, not only an image.
- [ ] Every form field has a visible label and a clear error message.
- [ ] My videos have captions.

## What Usually Goes Wrong

Most failures come from design habits and false comfort rather than missing knowledge.
| Mistake | Cause | Fix |
|---|---|---|
| Aiming at AAA everywhere | Assuming more is safer | DWP advises against it as general policy; pick AAA items that help your users |
| Fixing only the home page | Redesign scoped to top pages | Test one page of each type: service, form, booking |
| Trusting a scan alone | A green score feels final | Add the keyboard test and a manual review |
| Colour as the only signal | Red means error to the designer | Add text or an icon |
| Outline removed for looks | A tidy design preference | Restore it |
| Buying a badge | Hope for a certificate | See below |

On certificates: the W3C defines conformance as meeting the success criteria, and my package found no official certification scheme. MDN says its guidance is not legal advice and tells readers to consult a lawyer. Whether a partial redesign leaves old pages exposed is also a legal question my sources do not answer.

## What to Do Next

Start with a written target, then test, then fix, in that order. Say "WCAG 2.2 AA" in your brief, run the keyboard test and contrast check this week, and work down the quick-win table.

If your site fails several rows, the [signs a site needs a redesign](/blog/when-to-redesign-a-website/) covers when a rebuild beats patching, and it lists keyboard navigation, alt text and contrast as a baseline.

On cost: accessibility is not a separate line in the studio's price data. As of November 2026 that data is a draft, so the indicative range for a 5 to 10 page business website is {{price:website}}, over {{weeks:website}}, before 18% GST. A fixed quote is confirmed in writing after a call, and the [pricing page](/pricing/) shows every range.

The [web development service page](/services/web-development/) does not list an accessibility audit, so ask any builder, including us, what is tested, and have it written into the scope.

## Sources

- [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/), W3C Web Accessibility Initiative (read 17 November 2026)
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/), W3C (cited for the contrast ratios)
- [2. Accessibility: Guidelines and Attributes](https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/), Guidelines for Indian Government Websites and apps, GIGW 3.0 (read 17 November 2026)
- [Web Content Accessibility Guidelines (WCAG)](https://accessibility-manual.dwp.gov.uk/accessibility-law/web-content-accessibility-guidelines), DWP Accessibility Manual, UK government (read 17 November 2026)
- [Understanding the Web Content Accessibility Guidelines (WCAG)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG), MDN Web Docs (read 17 November 2026)
- [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines), Wikipedia (read 17 November 2026)

## FAQ

### What are website accessibility guidelines?

Website accessibility guidelines are the criteria that make a site usable by people with disabilities, and the main set is WCAG from the W3C. WCAG 2.2 groups them under four principles at levels A, AA and AAA.

### What is the need of website accessibility?

Website accessibility is needed so visitors who use a screen reader, a keyboard or captions can complete what your site offers. GIGW states these benefits directly.

### What are website accessibility standards?

Website accessibility standards are WCAG and the rules built on it, such as GIGW 3.0 in India, EN 301 549 in Europe and the UK's public-sector regulations. WCAG 2.2 is also an ISO standard, ISO/IEC 40500:2025, per the W3C.

### Why is website accessibility important for a small business?

It is important because a page that fails keyboard, contrast or form checks loses visitors at the moment of enquiry. My research gives no figure for how many.

### What is Web Content Accessibility Guidelines (WCAG)?

WCAG is the W3C's technical standard for accessible web content, with 13 guidelines in version 2.2. It is aimed at developers and authors, not as a beginner's introduction.

### Which WCAG level should an Indian business aim for?

Aim for WCAG 2.2 level AA. AA is the level named in the UK and EU summaries above, and DWP advises against AAA as a general policy.

### Are Indian private businesses legally required to follow WCAG?

My research does not answer that: GIGW 3.0 covers government sites and apps, and no Indian rule for private sites was supplied. Ask a lawyer, and note that MDN also says its guidance is not legal advice.

### Is there an official accessibility certificate I can display?

My research found no official certification scheme. The W3C defines conformance as meeting the success criteria, so test the site and keep a record of what you checked.
