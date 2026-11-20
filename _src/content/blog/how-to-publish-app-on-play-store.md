---
title: How to Publish an App on the Play Store and App Store, Step by Step
seo_title: How to Publish an App on the Play Store (Step by Step)
slug: how-to-publish-app-on-play-store
category: apps
description: How to publish an app on the Play Store and App Store: accounts, closed testing, listing limits and review times, with a sourced timeline.
date: 2026-11-19
author: shreyasmv
---
To publish an app on the Play Store, you register a Google Play developer account, create the app in Play Console, upload a signed Android App Bundle, complete the store listing and app content forms, and send the release for review. The honest qualification is that a new personal account must also run a closed test first, so plan in weeks, not days. The App Store follows the same outline, but the research behind this page holds Google's own documents and practitioner guides with no Apple primary source, so the Apple part is deliberately short.

- **Seven steps.** Account, release build, app setup, listing, testing, production request, review.
- **The long wait.** A new personal account needs a 14-day closed test, so the realistic path runs 15 to 21 days after the test starts.
- **Fees.** Google Play charges a one-time $25 and Apple $99 a year, so year one is $124 in dollars.
- **Where it goes wrong.** Data safety answers, permissions, package names and account ownership cause most avoidable delays.

## How to Publish an App on the Play Store: Seven Steps in Order

Publishing on Google Play takes seven steps, and the order matters because the early ones carry the longest waits. The table below puts the steps together from Google's Play Console Help and two practitioner guides, all read on 19 November 2026.

| Step | What you do | Wait or effort |
|---|---|---|
| 1. Developer account | Pay the fee, verify identity | Hours to days (Cynoteck) |
| 2. Release build | Build and sign an app bundle | Your own build time |
| 3. Create the app | Name, package name, language, free or paid | Minutes (Google) |
| 4. Dashboard and listing | App content forms, descriptions, screenshots | Your own writing time |
| 5. Closed test | Testers opt in and use the app | 14 days (Cynoteck) |
| 6. Production release | Apply for access, upload, roll out | A few clicks |
| 7. Review | Google checks the release | 1 to 7 days (Medium guide) |

The rest of this page takes each step in turn, then the App Store, the mistakes that cost time and a checklist. If you are still deciding whether you need an app at all, [does your business need an app or just a better website](/blog/does-my-business-need-an-app/) sets out four tests.

## Developer Accounts: Personal or Organisation

Choose an organisation account when the app belongs to a business, because it avoids the closed-test rule that binds new personal accounts. Cynoteck, an app developer, says both types need you to be at least 18, a government ID and two-step verification on your Google account.

An organisation account also needs a D-U-N-S number and an official organisation document, and Cynoteck says its verification is stricter. It does not say how long a D-U-N-S number takes, so ask for it before you plan a launch date.

Cynoteck adds that Google introduced developer identity verification in 2025, with apps needing a verified developer to install in several regions from late 2026. That is one practitioner's account of a rule that is still rolling out, so use your exact legal name and address and check Google's own announcement.

Put the account in the business owner's name, never a freelancer's. The [website ownership guide](/blog/who-owns-my-website-code/) explains why, and the same logic applies to app stores.

## Cost to Publish an App on the Play Store, and Whether It Is Free

Publishing on Google Play is not free, because Cynoteck lists a one-time $25 registration fee as of 2026. The table lists every figure the sources give, with its date, and leaves them in dollars because the rupee amount depends on your bank's rate on the day.

| Item | Amount | Source and date |
|---|---|---|
| Google Play registration | $25, one time | Cynoteck, 2026 |
| Apple Developer Program | $99 a year, recurring | Nevatrix and Astha, 17 Nov 2026 |
| Year one, both stores | $124 | My sum: 25 + 99 |
| Google's share of sales | 15% to $1 million a year, then 30% | Cynoteck, 2026 |

The Apple figure comes from [our app cost article](/blog/app-development-cost-india/), which cites Nevatrix and Astha and advises confirming it on Apple's page. Google's share applies to paid apps and in-app purchases only, per Cynoteck.

The one free route is skipping the store. Android Developers says you can host the APK file on your own website, but users must switch on installs from unknown sources, some network providers block them, and you lose Google Play billing and licensing. That page was last updated in November 2023, so treat it as background, not as current policy.

## Prepare the Release Build Before You Open Play Console

Google Play wants a signed Android App Bundle built in release mode, with a unique package name and a target level it currently accepts. Google's Help page says Play uses the bundle to generate the right files for each phone, and Cynoteck says new apps must be submitted as a bundle, not a plain APK.

Android Developers gives the minimum release checks:

- **Debugging off.** Remove logging and set the release build as not debuggable.
- **Version set.** The `versionCode` must rise with every update and stay under 2,100,000,000, per Google's Help page.
- **Real devices.** Test the release build on at least one phone and one tablet, and use Firebase Test Lab for wider coverage.
- **Live servers.** Make sure the back end the app calls is secure and ready for real traffic.

The package name is permanent. Google's Help page says package names are unique and can never be deleted or reused, and Draftbit suggests a reverse-domain form such as `com.yourdomain.appname`.

Cynoteck says new apps and updates must target Android 16 (API level 36) from 31 August 2026, and that native code must support 64-bit. That is one secondary source on a rule that changes yearly, so confirm the current level on Google's target API page before you build.

Keep the upload keystore safe. Cynoteck warns that losing it blocks updates and sharing it lets someone impersonate you.

## Create the App in Play Console and Clear the Dashboard

Creating the app takes minutes, and clearing the dashboard is the real work. Google's Help page lists the form: app name, package name, default language, app or game, free or paid, and a contact email.

The name and the app-or-game choice can be changed later. A Medium guide by Bayu Febry Asmoro says an app set as free cannot be changed to paid, so decide before you click Create app.

The dashboard then lists tasks, including the privacy policy and the data safety form. Cynoteck calls the data safety form one of the top rejection triggers in 2026 and says it must also cover data collected by third-party SDKs, meaning the analytics, ads and crash-reporting code inside your app.

Draftbit adds a point for builder-made apps: the first upload of a new app must be done by hand in Play Console, and automated uploads can follow afterwards.

## Testing Requirements: The Closed Test New Personal Accounts Must Run

A personal developer account created on or after 13 November 2023 must pass a testing requirement before it can publish, and Google's Help page says older personal accounts are exempt. Cynoteck says organisation accounts are exempt too.

Cynoteck's version of the rule is at least 12 testers who each opt in through the Play Console link, and a test that runs 14 consecutive days. Adding an email address is not enough, because testers must click the link and install the app. The Medium guide gives an example of 20 or more testers for 14 days.

The two figures differ, and Google's page in this research does not state a number. Read Google's page on testing requirements for new personal accounts, and plan on 20 testers as a margin. If 12 must stay opted in and you recruit 20, 8 can drop out, which is 40 percent of the group.

For an Indian business, the testers are staff, existing customers and friends with Android phones. An iPhone owner cannot test an Android build.

Google Play has other tracks too. Cynoteck describes internal testing for up to 100 testers and open testing as a public beta, and Draftbit shows testers added as an email list or a CSV file.

## Store Listing: Fields, Limits and Graphics

The store listing is a set of fields with hard limits, and Google's Help page publishes the text limits. The table below combines that page with Cynoteck's image sizes, as read on 19 November 2026.

| Field | Limit | Source |
|---|---|---|
| App name | 30 characters | Google |
| Short description | 80 characters | Google |
| Full description | 4,000 characters | Google |
| Phone screenshots | 2 to 8 images | Google |
| App icon | 512 by 512 px, PNG, 1 MB | Cynoteck |
| Feature graphic | 1,024 by 500 px | Cynoteck |
| Contact email | Required | Google |

Repeating keywords in the name or descriptions can lead to suspension, according to Google's Help page. Write for the customer first.

Language is where Indian apps can gain. Google's Help page says that without your own translations, Play shows an automatic translation or your default language, with a note saying so. A Hindi or Kannada listing written by a person reads better than a machine one, and the listing is shared across test tracks.

By publishing, you also license Google to use your icon, screenshots and videos to promote the app, per the same page.

## Review Times: What the Sources Say and a Realistic Timeline

No source here guarantees a review time, and the figures run from hours to weeks. The table lists each stated wait, and I have added the arithmetic for a new personal account below it.

| Wait | Figure | Source |
|---|---|---|
| Developer account approval | A few hours to a few days | Cynoteck |
| Closed test | 14 consecutive days | Cynoteck |
| Production review | 1 to 7 days | Medium guide |
| Going live after approval | Usually a few hours | Medium guide |
| Whole path, new personal account | 2 to 4 weeks | Cynoteck |
| Review per store | 1 to 2 weeks, plus a rejection round | Nevatrix, via our cost article |

Worked example, using only those figures: the 14-day test plus a 1 to 7 day review gives 14 + 1 = 15 days to 14 + 7 = 21 days, which is about 2.1 to 3 weeks after the test starts. That sits inside Cynoteck's 2 to 4 weeks once account approval and recruiting testers are added.

The sources do not say how long Google takes to decide a production-access request after the test. For an organisation account, drop the 14 days and keep the review and account waits.

My reading: set your public launch date after approval, not before. Hold marketing until the app shows as published, and budget for one rejection round, as Nevatrix advises.

## How to Publish an App on the App Store: What Is Confirmed Here

The App Store route has the same shape as Google's, an account, a build, a listing and a review, but this research holds no Apple primary source, so only three figures can be stated. [Our cost article](/blog/app-development-cost-india/) reports them from Nevatrix and Astha as of 17 November 2026.

- **Fee.** The Apple Developer Program costs $99 a year, and the fee recurs.
- **Review.** Allow one to two weeks per store and budget for one rejection round.
- **Account deletion.** Apple requires in-app account deletion for apps with sign-up, and its absence is a common rejection reason.

Before you start, read Apple's own pages on Developer Program enrolment, App Store Connect Help and the App Review Guidelines. Ask your builder who will hold the Apple account, how the iOS build is made and how testers will receive it.

If you would rather not run both submissions yourself, [Elyx Solutions' app development service](/services/app-development/) covers developer accounts, listings, screenshots, privacy declarations and review feedback with you, for both stores.

## What Usually Goes Wrong When You Publish an App

Most avoidable delays come from a short list of causes, and each has a cheap fix. The table pulls them from the sources above.

| Mistake | Cause | Fix |
|---|---|---|
| Data safety rejection | SDK data left out | List every SDK's data (Cynoteck) |
| Permission rejection | Permissions the app does not need | Request the minimum (Cynoteck) |
| Submission blocked | Target level too low | Check Google's target API page |
| Upload refused | `versionCode` not raised | Increase it every release (Google) |
| Test never counts | Testers added, not opted in | Send the opt-in link (Cynoteck) |
| Wrong package name | Chosen in a hurry | Decide first; it is permanent (Google) |
| Account lost to a developer | Registered in their name | Register in the owner's name (Nevatrix) |
| Listing suspended | Keyword repetition | Write plainly (Google) |

The pattern is that most items are decided before upload, not during it. A rejection email explains the policy problem, and the Medium guide says you fix it, update the bundle and resubmit.

## A Pre-Submission Checklist You Can Copy

Tick every line below before you press send for review; it is built from the sources above and is not an official Google list.

- [ ] Developer account type chosen, in the owner's name, two-step verification on
- [ ] Identity verification and any D-U-N-S number done
- [ ] Release build signed, debugging off, `versionCode` raised
- [ ] Target level and 64-bit support checked on Google's pages
- [ ] Release build tested on a phone and a tablet
- [ ] Package name final and written down
- [ ] Privacy policy published at a public link
- [ ] Data safety answers match every SDK in the app
- [ ] Listing text within 30, 80 and 4,000 characters, no repeated keywords
- [ ] Icon, feature graphic and 2 to 8 phone screenshots uploaded
- [ ] Closed test run with enough opted-in testers for 14 days, if the account is personal
- [ ] Keystore backed up somewhere safe, never in a public repository

## What to Do Next

Start with the two items that carry the longest waits: choose the account type and, if it is personal, recruit your testers. This week, write down who will hold the Google and Apple accounts, then open Google's page on testing requirements and its target level page.

If you want a studio to do the build and both submissions, Elyx Solutions engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call. You can [request a quote](/contact.html). Elyx lists a mobile app at {{weeks:mobile}}, with store submission in the final 2 to 3 weeks of the project, and agrees the schedule in writing before work starts.

## Sources

- [Create and set up your app](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en), Google Play Console Help
- [Publish your app](https://developer.android.com/studio/publish), Android Developers, Google
- [How to Build and Publish Your Android App on Google Play Store (2026)](https://www.cynoteck.com/blog-post/build-and-publish-an-android-app-on-the-google-play-store), Cynoteck Technology Solutions
- [A Guide to Submitting Your App to Google Play Console](https://medium.com/@bayufasmoro/a-guide-to-submitting-your-app-to-google-play-console-6eea17834e1f), Bayu Febry Asmoro, Medium
- [Publishing Your App to the Google Play Store](https://docs.draftbit.com/docs/app-store-publishing-android/), Draftbit Docs

## FAQ

### How do I publish an app on the Play Store for free?

You cannot publish on Google Play for free, because registration is a one-time $25 as of 2026, per Cynoteck. The only free route is hosting the APK file on your own website, which Android Developers says costs you Play billing and makes users change a security setting.

### How do I publish an app on the App Store?

You enrol in Apple's developer programme, build the app, create a listing and submit it for review. This research holds no Apple primary source, so read Apple's own enrolment, App Store Connect and App Review pages, and note that our cost article reports $99 a year as of 17 November 2026.

### How long does Google Play take to review an app?

A Medium guide says review typically takes 1 to 7 days, and Cynoteck says a new personal account should expect 2 to 4 weeks in total. Neither is a Google commitment, so build slack into your launch date.

### How many testers do I need before I can publish?

It depends on the source: Cynoteck says at least 12 testers for 14 consecutive days, and a Medium guide gives 20 or more as an example. Check Google's page on testing requirements for new personal accounts, and recruit 20 to stay safe.

### Can I change my app's package name after publishing?

No, because Google's Help page says package names are unique and permanent and can never be deleted or reused. A different package name means a new app listing, so decide it before the first upload.

### What is the difference between an App Bundle and an APK?

An App Bundle is the upload format Google Play uses to build optimised files for each phone, while an APK is one finished installable file. Cynoteck says new apps must be submitted as a bundle.

### How do I publish a Flutter app or a no-code app on the Play Store?

Build a signed release bundle with your framework, then upload it in Play Console like any other app. Draftbit's guide, which uses Expo EAS, says the first upload of a new app must be done by hand, and the research says nothing specific about Replit.

### What should I do if my app is rejected?

Read the rejection email, fix the policy problem, update the bundle and resubmit, according to the Medium guide. Data safety answers and permissions are the usual causes, per Cynoteck.

### Can I earn money from an app on the Play Store?

You can, through paid apps, in-app purchases and subscriptions, and Google takes 15% of the first $1 million a year and 30% after, per Cynoteck. A Medium guide warns that an app set as free cannot later be changed to paid.
