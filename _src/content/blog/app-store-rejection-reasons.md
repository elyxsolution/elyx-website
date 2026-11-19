---
title: Why Apps Get Rejected by Apple and Google, and How to Avoid It
seo_title: App Store Rejection Reasons: Apple and Google Fixes
slug: app-store-rejection-reasons
category: apps
description: App store rejection reasons on Apple and Google, from privacy labels to demo accounts, with a fix for each and a pre-submission checklist to copy.
date: 2026-11-19
author: shreyasmv
---
App store rejection reasons come down to a short list: an app that crashes or looks unfinished, a reviewer who cannot log in, privacy labels that do not match what the code collects, missing account deletion, payments routed the wrong way, a listing that misdescribes the app, and an app that is too thin or too similar to others. Most of these are fixable in a day once you know which rule was cited. The honest qualification is that I have no rejection data from Elyx builds, so the causes below come from four practitioner guides and the stores' own support pages, and show what is commonly reported, not a measured ranking.

- **How common.** Apple rejected about one submission in four in 2024, per a figure Adapty cites, and most rejected apps can be fixed.
- **Biggest traps.** Unfinished screens and filler content, a reviewer who cannot log in, privacy declarations that miss an SDK, and no in-app account deletion.
- **India.** Mobile-OTP logins and payment routes need a workaround or a rule check.
- **Fix order.** Read the cited guideline, check the finding, then resubmit only with something changed.

## App Store Rejection Reasons: How Common Is Rejection?

Rejection is common but usually recoverable: Adapty reports that Apple's 2024 App Store Transparency Report shows about 1.93 million of 7.77 million reviewed submissions were rejected. That is 1.93 ÷ 7.77, about 24.8 percent, or nearly one in four. Adapty adds that about 295,000 of the rejected submissions were later approved after fixes, which is 0.295 ÷ 1.93, about 15.3 percent of rejections (my arithmetic from Adapty's rounded figures).

Adapty also notes that Apple publishes no average rejection rate and that some resources claim 35 to 40 percent. That range has no named source, so I do not rely on it, and I found no comparable Google Play figure.

vmobify says Apple states that 90 percent of submissions are reviewed in under 24 hours, so a clean fix costs about a day. Launches slip, vmobify says, when a team resubmits a build that did not address the finding.

If you are still planning the app, the last two to three weeks of the process on Elyx Solutions' [app development page](/services/app-development/) are QA and store submission, inside a typical build of {{weeks:mobile}}.

## Apple App Rejection Reasons: Six Guidelines Behind Most Blocked Launches

Six Apple guidelines account for most blocked first launches, according to vmobify: 2.1 completeness, 2.3 accurate metadata, 3.1.1 in-app purchase, 4.3 spam and duplicates, 5.1.1 data collection and 5.1.1(v) account deletion. The table below is my condensed reading of vmobify's list, read on 19 November 2026.

| Guideline | What the reviewer finds | Usual fix |
|---|---|---|
| 2.1 Completeness | Crashes, filler text, dead links, no working login | Test the release build, remove temporary content |
| 2.3 Metadata | Listing describes a different app | Correct screenshots, description, age rating |
| 3.1.1 Payments | Digital goods sold outside In-App Purchase | Route digital purchases through Apple |
| 4.3 Spam | App looks like many others or a duplicate | Change the product, not the wording |
| 5.1.1 Data | Collection without need, consent or disclosure | Collect less, declare everything |
| 5.1.1(v) Deletion | Account creation with no in-app deletion | Build deletion inside the app |

Adapty reports that, per the App Store, about 40 percent of rejections concern app completeness: crashes, filler content and missing information. MobiLoud says the guidelines change, so check each rule against Apple's current wording, and test the exact build you submit on real devices, because a working staging build does not prove the store build works.

## Privacy Labels and Data Declarations That Fail Review

Privacy declarations fail review when what you declare differs from what the app and its third-party code collect. PIT Solutions says Apple sorts disclosures into Data Used to Track You, Data Linked to You and Data Not Linked to You, and that a mismatch found in review gets the app rejected. Google Play's Data safety form, per PIT, asks which data types you collect, whether collection is required or optional, whether anything is shared, why, and whether users can request deletion.

The usual miss is the SDK, a ready-made code library you add for analytics, ads or login. PIT names Firebase Analytics, AdMob, Meta Audience Network and Crashlytics as ones teams forget to audit. MobiLoud says Apple holds you responsible for third-party code and warns against copying another app's labels or trusting a vendor's general statement.

vmobify adds three rules from Apple's guideline 5.1.1. Request only data relevant to the core function, get consent even for anonymous data, and never make paid features depend on granting data access. A privacy rejection often needs changes in three places at once, vmobify says: the app, the policy and the App Store Connect declarations.

The worksheet below is a template built from the SDK types MobiLoud and PIT list. Fill one row per SDK before the build is frozen, and repeat it whenever an SDK is added or upgraded, as PIT advises.

| SDK or feature | Question to answer | Declare in |
|---|---|---|
| Analytics | What does it collect, and is it linked to a user? | Apple label, Google form |
| Crash reporter | Does it send device or user identifiers? | Apple label, Google form |
| Ad network | Is data used for tracking or ads? | Apple label, Google form |
| Social login | Which profile fields come back? | Apple label, Google form |
| Payment gateway | What identifiers does its SDK add? | Apple label, Google form |

PIT says both stores expect the privacy policy to open inside the app, not only in an external browser. MobiLoud says permission prompts should state a specific benefit and appear when the feature is used.

These are store rules, not law. Whether Indian data-protection or IT rules also bind your app is a legal question this page does not answer, so confirm it with a qualified adviser.

## Android App Rejection Reasons: What Google Play Checks

Google Play shows its decision in Play Console under Policy status, and the causes PIT Solutions reports are the Data safety form, account deletion, user-generated content and review access. Google's Play Console Help, read on 19 November 2026, defines three outcomes. A rejected update leaves your last published version live, a removed app is unavailable until you submit a compliant update, and a suspended app is no longer available, with an Appeal option.

Google's page adds one rule: do not republish a rejected or removed app until the violation is fixed.

PIT Solutions describes Google's user-generated content rules as functionally the same as Apple's: accessible reporting, action on reports and blocking. It also says Google's December 2023 account-deletion policy adds a web option for people who already uninstalled the app. For review access, PIT points to the App access section of Play Console.

Google's developer guide for third-party stores on Play lists declarations such as health and financial features, advertising ID, target audience, ads, and child-safety standards for social and dating apps. It is written for those stores, so treat it as a pointer, not as the Play Console form. Google's own Developer Program Policies remain the text to check.

## Demo Accounts and Review Notes: Let the Reviewer In

A reviewer can only approve what they can open, so give them a working login or a demo mode and explain it in the review notes. vmobify says the demo account must work on the day, with your back end switched on, and must not sit behind a phone-number OTP (one-time password) the reviewer cannot receive. MobiLoud adds that two-factor codes and regional restrictions can lock a reviewer out.

Many Indian apps sign users in by mobile OTP, which is the case both guides warn about. My suggestion is a demo account that skips OTP on your side, set up before submission. MobiLoud lists what the notes should cover:

- Where important features sit and how to reach paid or gated areas.
- Why each permission is needed.
- How external hardware or services work.
- Any in-app purchase that is hard to see.
- What changed in this version, in specific terms, not "bug fixes".

If the app pairs with a device the reviewer does not own, PIT ranks the options: a built-in demo mode, then a recorded walkthrough in the notes (an unlisted video link on Google Play), then shipping a unit. PIT also says to pre-fill demo accounts with realistic data and test the credentials just before you submit.

## Account Deletion and Sign-In Rules

If your app lets people create an account, Apple expects them to start deleting it inside the app, and Google asks for that plus a web option. PIT dates Apple's requirement to June 2022, says email requests and website redirects do not count, and says deactivating an account is not deletion. Apps built before that date are the ones PIT sees caught most often.

PIT suggests deletion reachable in two or three taps, a clear statement of what is removed and when, and revoking third-party sign-in tokens.

Sign-in has a second rule. MobiLoud says an app that uses a social or third-party login as its main sign-in may also need an equivalent login option under Apple's guideline 4.8, with exceptions such as apps using only the company's own accounts or certain enterprise, education or government setups. Check which case applies before you add "Continue with Google".

## Payments, Subscriptions and In-App Purchase in India

Apple requires In-App Purchase for digital goods and features used inside the app, while physical goods and services used outside it can take other payment methods. PIT cites guideline 3.1.1 and says Apple's commission is 15 to 30 percent, with outside processors off the table for digital items. MobiLoud adds that ordinary retail purchases should not go through In-App Purchase, and that your existing e-commerce checkout can generally stay.

The table gives my reading of how Indian business apps fall under those two categories. It is analysis, not Apple's wording.

| What the app sells | Likely route |
|---|---|
| Video lessons unlocked inside the app | In-App Purchase |
| Premium software features or a subscription | In-App Purchase |
| A clinic or salon visit paid for the booking | Your own gateway |
| Physical products delivered to a customer | Your own gateway |

MobiLoud warns that Apple's external-link and alternative-payment rules vary by storefront and have changed a lot, so read the Business section of Apple's current guidelines before release. Adapty adds that purchases must work during review. MobiLoud says to show what the user gets, the price, the billing period, how a trial converts and how renewal works, and to make restore-purchase work.

## Thin Apps, Web Wrappers and Copycats

Apple can reject an app that adds little beyond a website, a template or an existing app, under minimum functionality (guideline 4.2) and spam (4.3). MobiLoud says website-based apps are not automatically disallowed, but they need app-quality value such as persistent login, native menus, deep links or push notifications. Its advice is to give people a real reason to install, not to bolt on arbitrary native features.

vmobify splits 4.3 in two. Part (a) targets several bundle IDs of the same app, such as a separate app per city or per client, which matters to agencies that ship one white-label app per customer. Part (b) targets apps indistinguishable from what is widely available, and vmobify says Apple names categories such as dating, flashlight, sound effects, wallpaper, simple timers and fortune telling.

vmobify's test is worth running before any code: what does this app do that the top five results for its main search do not? A capability, an audience or a constraint counts, such as offline use or Indian regional languages. "Faster" or "cleaner" does not. For the earlier question of whether you need an app at all, see [whether your business needs an app or just a better website](/blog/does-my-business-need-an-app/).

## Store Listing Mistakes That Trigger Rejection

Listings are rejected when the screenshots, description, keywords or age rating describe a different app from the one the reviewer opened. vmobify's reading of guideline 2.3 gives the common causes:

- **Hidden features.** Anything behind a flag or promo code must be described specifically in the review notes.
- **Unsignposted purchases.** If levels or content cost extra, the description and screenshots must say so.
- **Weak screenshots.** They must show the app in use, not only title art or a login page.
- **Dishonest age rating.** Under-rating to widen the audience is easily caught.
- **Keyword stuffing.** Competitor brand names in the keyword field are specifically prohibited.

PIT describes one submission rejected because an Android screenshot, recognisable by its status bar, went into App Store Connect. It also describes a Google Play app removed after automated review flagged a temporary stand-in image as drug-related. MobiLoud adds that links and support contact details must work.

## What To Do in the First Day After a Rejection

After a rejection, read the cited guideline, decide whether the finding is accurate, and reply or resubmit only with something changed. Apple's App Store support page, read on 19 November 2026, lists contacting App Review to get submission status, ask for clarification, appeal a rejection and request an expedited review. The table below is a decision rule built from that page and the guides.

| Situation | What to do |
|---|---|
| Finding is accurate | Fix it, rebuild, describe the change in the notes, resubmit |
| Finding is wrong | Reply in App Store Connect's App Review section with specific evidence |
| Finding is unclear | Ask Apple for clarification before changing anything |
| You still disagree | Appeal, which Apple's page lists |
| Guideline 4.3 | Change the product, because vmobify says wording will not fix a wrapper |
| Google rejection | Last published version stays live; fix before republishing |
| Google removal or suspension | Submit a compliant update, or use Appeal for a suspension |

Apple also removes live apps. Adapty cites over 82,000 removals in 2024 for violations found after launch, and Apple's page says it will notify you when, where and why an app is removed, except in cases such as spam or phishing. Apple's page also says you can appeal a removal.

## A Pre-Submission Checklist and What To Do Next

Run this checklist on the exact release build, on real devices, the day before you submit. It condenses the sources above.

- No filler text, empty pages, test data or core features that are only promised for a later release.
- Demo login works today, skips OTP, and your back end is on.
- Review notes explain hidden features, permissions, hardware and what changed.
- Every SDK is listed, and Apple's labels and Google's Data safety form match it.
- The privacy policy opens inside the app and every link and support contact works.
- Account deletion is inside the app, with a web option for Google Play.
- Digital purchases use In-App Purchase, and prices, trials and renewals are stated.
- Screenshots come from the right platform and the age rating is honest.
- The app does something the top five results do not, and a user-generated-content app has report, hide and block tools.

If you would rather have a team take the app through submission, Elyx Solutions' [app development service](/services/app-development/) covers store listings, privacy declarations and review feedback until the app is live. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call: [request a quote](/contact.html). To plan the budget first, read [how much it costs to build an app in India](/blog/app-development-cost-india/), which already allows for a rejection round.

## Sources

- [Top reasons for App Store rejections and how to avoid them](https://adapty.io/blog/app-store-rejection/), Adapty
- [App Store Rejection Reasons and How to Fix Them](https://vmobify.com/blog/app-store-rejection-reasons), vmobify
- [11 Common App Store Rejection Reasons & How to Avoid Them](https://www.pitsolutions.com/en/blog/11-common-app-store-rejection-reasons-how-to-avoid-them), PIT Solutions
- [16 Reasons Apple Could Reject Your App (And How to Avoid Them)](https://www.mobiloud.com/blog/avoid-app-rejected-apple/), MobiLoud
- [App Store - Support](https://developer.apple.com/support/app-store/), Apple Developer
- [Check your app's policy status](https://support.google.com/googleplay/android-developer/answer/9842754?hl=en), Google Play Console Help
- [App Store Review API Developer Guide](https://developers.google.com/android-publisher/app-store-review), Google for Developers

## FAQ

### Why do apps get rejected by the App Store?

Apps are rejected mainly for being incomplete or unstable, unreachable by the reviewer, mismatched with their privacy labels or listing, missing account deletion, mishandling payments, or adding too little value. Adapty reports that Apple rejected about 1.93 million of 7.77 million submissions in 2024. Most of those can be fixed and resubmitted.

### What is the most common reason for app store rejection?

Incompleteness is the most-cited cause: Adapty reports that, per the App Store, about 40 percent of rejections concern app completeness, such as crashes and filler content. That is a secondary report of Apple's figure, so treat it as indicative. Guideline 2.1 is the rule behind it.

### Why was my Android app rejected on Google Play?

Open Policy status in Play Console, which shows any rejection, removal or suspension and the reason given. The causes PIT Solutions reports most are an inaccurate Data safety form, missing account deletion, missing moderation in user-generated content apps and no review access. Fix the cited issue before republishing.

### How long does App Store review take?

vmobify says Apple states that 90 percent of submissions are reviewed in under 24 hours. That covers the review itself, not your fix time. Apple's support page lists requesting an expedited review as a reason to contact App Review.

### Can I appeal an app store rejection?

Yes on Apple: its support page lists appealing a rejection and asking for clarification as reasons to contact App Review. On Google Play, Play Console Help shows an Appeal option for suspensions and points to its Help Center for rejection and removal appeals. Appeal only when you can show the finding is wrong.

### Do I need a privacy policy and privacy labels?

Yes: PIT Solutions says both stores require a privacy policy, and both require declarations of the data your app and its SDKs collect. On Apple these are the privacy labels, and on Google Play the Data safety form. They must match what a reviewer observes.

### What happens if I resubmit without changing anything?

You usually repeat the finding and lose time. vmobify says launches slip when teams resubmit a build that did not address the rejection, and Google's page says not to republish a rejected app until the violation is fixed.

### Why was my app removed from the store?

A removal is different from a rejection: it affects an app already live. Adapty cites over 82,000 Apple removals in 2024 for violations found after launch, and Google's Play Console Help says a removed app stays unavailable until a compliant update is submitted.

### Will a website wrapped in an app get approved?

It is not automatically refused, but it must offer more than the website. MobiLoud says Apple's minimum-functionality rule expects app-quality value such as persistent login, native menus, deep links or push notifications.
