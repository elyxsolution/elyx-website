---
title: App Analytics: The Metrics That Matter After Launch
slug: app-analytics-metrics
category: apps
description: App analytics metrics to track after launch: retention, activation, crashes and money, with worked examples, a tool comparison and a 30-day plan.
date: 2026-11-18
author: shreyasmv
---
App analytics metrics are the few numbers that show whether people who installed your app get value from it and whether it works for them. After launch, track four or five: day-1, day-7 and day-30 retention by install cohort, activation, the crash rate, and one money number such as revenue per user. Downloads alone mislead, because Mixpanel cites Inc for the claim that 80 to 90 percent of downloaders never return.

The honest qualification is that every benchmark in the sources I read comes from a tool vendor, is quoted in dollars and sometimes contradicts another, so your own cohorts are the only fair yardstick.

- **Pick few.** Mixpanel says focus on four to five KPIs and UXCam says five to eight, and UXCam says overloaded dashboards rarely lead to action.
- **Retention first.** Read it by install cohort, never as one blended number.
- **Activation and crashes.** Activation explains retention, and crashes are the fastest way to lose a new user.
- **Tools.** The two store consoles plus one event tool cover most small apps; the table below sets out each one's job.

## What Is the Difference Between a Metric and Analytics?

A metric is one number, such as day-30 retention, and analytics is the tooling and habit of collecting and reading many of them. Google's Analytics Data API documentation uses the same split: dimensions are attributes of your data, and metrics are quantitative measurements such as users, sessions, engagement and revenue. Mixpanel describes an app analytics platform as software that records actions such as logins and purchases and summarises them on a dashboard.

One search result trap is worth clearing up. Google's "Analytics app" is a viewer: Google's help page says it gives you access to your Analytics accounts and data on a phone or tablet, so it reads reports and does not track your own app.

## Which App Analytics Metrics Should You Track After Launch?

Track one metric per question you need answered, and five questions cover most small apps. The table maps each question to a metric and to where a small team can read it. It is my own grouping of metrics from Mixpanel, UXCam, Userpilot and Google Play Console Help, read on 19 November 2026.

| Question | Metric | Where to read it |
|---|---|---|
| Do people install after seeing the listing? | Store listing conversion rate | Play Console, App Store Connect |
| Do new users reach the point of the app? | Activation rate | An event tool |
| Do they come back? | Day-1, day-7, day-30 retention | Event tool, Play Console |
| Does it work? | Crash rate, ANR rate | Store consoles, crash reporter |
| Does it earn? | Revenue per user, cost per retained user | Consoles, your ad accounts |

Event tracking is part of what [Elyx Solutions' app development service](/services/app-development/) builds, so ask for the events you need to be listed in the written scope, not added after launch.
## Retention: Read It by Install Cohort

Retention is the share of users who are still active some days after they installed, and it is the number most sources rank first. UXCam calls day-30 retention by install cohort the strongest predictor of long-term success and says a blended number can hide a decline for months while installs grow. A cohort is simply everyone who installed in the same week.

**The benchmarks disagree.** Userpilot says most apps land at 1.2% to 9.9% on day 30. UXCam gives about 7% as the median and 10% to 15% for strong performers in one passage, and 5% to 8% for a strong performer in another. I would not hold an Indian small-business app to any of these, because none is split by country or by app type.

**A worked example.** The numbers are invented for a fictional salon booking app in Mysuru, to show the method.

1. The week of 3 November brings 400 installs. Active on day 1: 140. Active on day 7: 60. Active on day 30: 28.
2. Day-1 retention is 140 ÷ 400 = 35%. Day 7 is 60 ÷ 400 = 15%. Day 30 is 28 ÷ 400 = 7%.
3. The week of 10 November brings 800 installs after an ad push, and 200 are active on day 1, which is 200 ÷ 800 = 25%.
4. Blended day-1 retention is (140 + 200) ÷ (400 + 800) = 340 ÷ 1,200 = 28.3%.

The blended 28.3% looks like a mild dip. The cohort view shows the ad-driven users return ten points less often (35% to 25%), which is the thing to investigate.

Mixpanel's page also gives a period formula, ((customers at end minus customers acquired) ÷ customers at start) × 100, and a worked case of 120, 104 and 20 that gives about 96%. Its next line says a 90 percent retention rate means a 20 percent churn rate. By its own formula churn is 100 minus retention, so 90 percent retention is 10 percent churn, and that sentence is a slip.

## Activation: The One Action That Predicts Day 30

Activation is the share of new users who complete the single action that best predicts they will still be using the app a month later. UXCam says to find it by comparing first-session actions against day-30 retention and picking the strongest link. Its examples are logging a first workout for a fitness app and, historically, seven friends in ten days for Facebook.

For a small-business app the candidates are usually plain. A clinic app might test "booked a first appointment", a shop app "placed a first order" and a coaching app "opened a first lesson". Those three are my illustrations, not tested results, and your data picks the real one.

UXCam adds a speed version: the median time from opening the app to that action. It claims users who reach the action within 60 seconds of their first session retain at far higher rates, which is a vendor claim I could not check.

### Onboarding drop-off compounds

UXCam says onboarding flows longer than five steps typically lose 15% to 25% of users at each step. If each step keeps 85% to 75% of people, a six-step flow keeps 0.85 to the sixth power, about 38%, down to 0.75 to the sixth power, about 18%.

A three-step flow keeps 0.85 cubed (61%) down to 0.75 cubed (42%). Each step you remove therefore helps more than it looks.

## Crash Rate: What the Store Consoles Actually Report

A crash rate counts how often the app fails, and the store consoles define it differently from the vendor guides, so read the definition before comparing numbers. Google Play Console Help defines the user-perceived crash rate as the percentage of daily active users who may have noticed at least one crash, and it reports a separate ANR rate for "App Not Responding" freezes. Userpilot instead counts sessions: crashes divided by total sessions, times 100.

Targets also differ in unit. Userpilot says the industry average for crash-free sessions is above 99%. UXCam aims for a crash-free user rate above 99% daily and 99.5% or more for crash-free sessions.

My arithmetic shows why a small gap matters. An app with 5,000 daily active users and a 99% crash-free user rate still has 5,000 × 0.01 = 50 people hitting a crash every day. UXCam also says one crash in a first session multiplies that user's churn about threefold, a vendor figure I treat as a warning, not a measurement.

Speed belongs in the same review. Mixpanel says load times over two or three seconds can cause drop-off, while Userpilot says under five seconds is the sweet spot, so pick a limit and track it yourself.

## DAU, MAU and Stickiness: Useful if You Define Active

Stickiness is daily active users divided by monthly active users, and it only means something if "active" means a real action. UXCam warns that counting a bare app open inflates the figure. Google Play Console Help counts a daily active user as someone who opens the app at least once a day and a monthly one as an open within 28 days, while Mixpanel says MAU is usually the trailing 30 days.

UXCam gives reference ranges drawn from AppsFlyer and data.ai: social apps above 50%, productivity 25% to 35%, fintech 15% to 25% and e-commerce 10% to 20%. Mixpanel makes the sharper point that a healthcare app wants people to need it less. Whether daily use should be your goal at all is the question in [does your business need an app or a better website](/blog/does-my-business-need-an-app/).

## Money Metrics: Cost per Retained User, ARPU and LTV

The most useful money metric for a small team is the cost of each user who is still around on day 30, because it joins ad spend to retention. UXCam shows the idea with a $2 install channel retaining 2% against a $6 channel retaining 12%, where the cheaper one is worse. Here is the same logic in rupees, with invented figures.

1. Channel A costs ₹150 per install and keeps 2% at day 30: ₹150 ÷ 0.02 = ₹7,500 per retained user.
2. Channel B costs ₹450 per install and keeps 12%: ₹450 ÷ 0.12 = ₹3,750 per retained user.

Channel B costs three times as much per install and half as much per user who stays.

UXCam gives lifetime value (LTV) as average revenue per user times average customer lifespan, and says an LTV above three times acquisition cost is sustainable. Mixpanel says that if cost per acquisition ever exceeds LTV, you lose money on each user. UXCam warns that young apps over-project LTV because they have not yet seen a real lifespan.

## Which App Analytics Tools Do You Need?

Most small apps need the two store consoles, one event tool and one crash reporter, and the table sets out each tool's job. I have not tested these products. The descriptions come from Google's own pages, a help article from STQRY and vendor pages, all read on 19 November 2026, and I give no prices because the research holds none.

| Tool | Best for | What the source says |
|---|---|---|
| Google Play Console | Android installs, listing conversion, crash and ANR | Lists 15 KPIs including DAU, MAU and user-perceived crash rate |
| App Store Connect | iOS impressions, units, proceeds, sessions, crashes | STQRY says you can filter by device, territory and source and export CSV |
| Firebase with Google Analytics | Events across Android and iOS | Google says the Firebase SDK collects basic usage such as opens and active users automatically |
| Crash reporters | The stack trace behind a crash | UXCam names Crashlytics, Sentry, Bugsnag and Instabug |
| Mixpanel, Amplitude, UXCam, Userpilot | Cohorts, funnels, session replay | Vendor pages; each sells its own product |
| Google Analytics app | Reading reports on a phone | Viewer only; it does not track your app |

**Choose the store consoles alone** when you have one platform, a few hundred users and only the five questions above. They also see what an in-app tool cannot: Play counts store listing visitors who did not already have the app. **Add Firebase** when you need your own events on both platforms. **Add a product-analytics tool** when you need funnels and replays, which UXCam says explain why a number moved.

The vendors behind those pages sell what they describe, so use them for definitions, not for a verdict on their own product.

## What Usually Goes Wrong With App Analytics

Most analytics failures are setup mistakes made in the first week, not tool failures. The table below uses the sources named in each row, plus questions I read in developer forum threads in 2026 about which stats matter and what to track first.

| Mistake | Why it happens | Fix |
|---|---|---|
| Tracking random events | Events added before any question | Write the five questions first |
| Counting opens as active | An open is easiest to log | Define a meaningful action (UXCam) |
| Blending cohorts | One chart is simpler | Chart each install week separately |
| Test users in the data | Team phones look like drop-offs | Exclude internal and QA users (UXCam) |
| Android and iOS counted twice | Unlinked user IDs | Unify the ID before comparing platforms |
| Trend across a rule change | ATT made paid attribution noisier, per UXCam | Annotate the break, do not trend through it |
| Judging by another category | Benchmarks are averages | Compare with your own past cohorts |
| Skipping privacy | Tools collect by default | Ask a lawyer what applies to your users |

On the last row, Userpilot names GDPR, CCPA and Apple's App Tracking Transparency, and none of the sources I read cover Indian data rules. That gap is mine to flag, and a qualified professional should answer it.

## A 30-Day Plan for the Weeks After Launch

A month is enough to read one full cohort, so the plan below runs from before release to the first day-30 number. It is my suggested order, built from the metric definitions above, not a studio process.

1. **Before release.** Write the five questions and your best guess at the activation action. Open the live build and confirm a test event reaches the dashboard, the same check the [website launch checklist](/blog/website-launch-checklist/) asks of a site.
2. **Days 1 to 3.** Read crash and ANR rates in the consoles every day and exclude team phones.
3. **Day 7.** Read day-1 and day-7 retention for the first cohort, and the drop-off at each onboarding step.
4. **Day 14.** Compare what retained users did in their first session with what lost users did, and name your activation action.
5. **Day 30.** Read your first day-30 number and compare cohorts.
6. **Every month.** Keep a one-page review: the five metrics, the change you made and what moved.

Do not draw conclusions from small groups. The sources give no universal sample size, and Meta's Horizon store only opens its dashboard once an app has 100 users, which is a platform rule, not statistics. With 20 users, one person is 5%, so read single sessions and crash reports instead.

## What to Do Next: Turn the Numbers Into Fixes

Analytics tells you what is wrong, and someone still has to fix it, so decide who that is before launch. If your app is live, pick your five metrics this week and write each one's definition in a shared note. If it is not built yet, put the event list in the brief.

[Elyx Solutions' app development service](/services/app-development/) stays on after launch with monthly care plans covering monitoring, OS updates and an agreed number of update hours, and the [maintenance and care page](/services/maintenance-care/) describes the monitoring side. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call, so you can [request a quote](/contact.html). For the upkeep budget, [how much an app costs in India](/blog/app-development-cost-india/) covers maintenance as a share of the build.

## Sources

All pages were read on 19 November 2026.

- [What are mobile app analytics metrics?](https://mixpanel.com/blog/what-are-mobile-app-analytics-metrics/), Mixpanel
- [12 Mobile App Analytics Metrics That Actually Matter in 2026](https://uxcam.com/blog/important-mobile-app-analytics-metrics/), UXCam
- [The Complete Mobile Analytics Guide: Challenges, Metrics, and Tools](https://medium.com/@userpilot/the-complete-mobile-analytics-guide-challenges-metrics-and-tools-f09c4734b395), Userpilot
- [View app statistics](https://support.google.com/googleplay/android-developer/answer/139628?co=GENIE.Platform%3DAndroid&hl=en), Google Play Console Help
- [Google Analytics for apps](https://developers.google.com/analytics/devguides/collection/app), Google for Developers
- [API dimensions and metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema), Google for Developers
- [About the Analytics app](https://support.google.com/analytics/answer/12674799?hl=en), Google Analytics Help
- [App Store Analytics: How to Track and Improve App Performance](https://support.stqry.com/support/solutions/articles/153000136723-app-store-analytics-how-to-track-and-improve-app-performance), STQRY Support
- [App analytics introduction](https://developers.meta.com/vr/resources/publish-analytics-intro/), Meta Horizon OS Developers

## FAQ

### What are app analytics metrics?

App analytics metrics are numbers that describe how people find, use, keep and pay for your app, and how well it runs. Common ones are retention, active users, activation, crash rate and revenue per user. Pick four or five that match your goals.

### What is a metric in analytics?

A metric is a single quantitative measurement, such as users, sessions, engagement or revenue. Google's Analytics Data API documentation separates metrics from dimensions, which are attributes such as country or app version that you break a metric down by.

### What is the difference between metrics and analytics?

A metric is one measured number, while analytics is the collection and interpretation of many metrics to make decisions. Day-30 retention is a metric. Working out why it fell, with cohorts and funnels, is analytics.

### What is the analytics app?

The Analytics app is Google's mobile viewer for Google Analytics reports on a phone or tablet. It does not add tracking to your own app. For that you set up a property and an app data stream, which Google says you can do with Firebase.

### Which app metrics should I track first?

Track retention by install cohort, activation, crash rate and one revenue metric first. Add the store listing conversion rate if you pay for installs. Everything else can wait until one of these four tells you where to look.

### What is a good retention rate for an app?

There is no single good figure, because the sources disagree. Userpilot puts most apps at 1.2% to 9.9% on day 30, and UXCam gives about 7% as a median. The reliable test is whether each new cohort retains as well as the last.

### What is a good crash-free rate?

Above 99% is the common reference. Userpilot says the industry average for crash-free sessions is above 99%, and UXCam targets 99% for users and 99.5% for sessions. Check whether a number counts users or sessions before comparing.

### Are there free app analytics tools?

Some are, but confirm current terms on each provider's page. Google Play Console and App Store Connect report core metrics for apps you publish, and Google's Firebase page is titled "Get unlimited app analytics".

### How many users do I need before the numbers mean anything?

The sources give no universal minimum. Meta's Horizon store opens its dashboard at 100 users, which is a platform rule. With fewer users, one person moves a percentage a lot, so read single sessions and crash reports.

### Who fixes the problems analytics finds?

Whoever maintains the app does, so settle that before launch. Ask your builder in writing whether crash fixes, OS updates and a monthly allowance of update hours are included, and who watches the crash rate.
