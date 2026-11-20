---
title: Push Notifications That Don't Get Your App Uninstalled
slug: push-notification-best-practices
category: apps
description: Push notification best practices for app owners: when to ask permission, how often and when to send, with sourced examples and a worked weekly plan.
date: 2026-11-18
author: shreyasmv
---
Push notification best practices come down to three decisions: ask permission after the user has seen value, send few messages that each matter to that person, and send them when that person is awake and using the phone. Break any one and users mute the app first and delete it later. The honest qualification is that every source I read is a vendor selling push tools, and none publishes a measured uninstall rate by message count, so the figures below are vendor claims and the limits are starting points to test.

- **Permission.** Ask after a moment of value, behind your own explainer screen, never on first launch.
- **Frequency.** Sources range from 1 to 3 messages a week as a safe start to 5 a week as a ceiling; no source proves a threshold.
- **Timing.** Send when the individual is active, tie messages to events, and keep a quiet window overnight.
- **Measure.** Track opt-outs and uninstalls, not just opens, and judge changes over 30 to 90 days.

## How Push Notifications Work, and Where Uninstalls Start

A push notification travels from your server to Apple's push service (APNs) or Google's Firebase Cloud Messaging (FCM), which deliver it to a device that has given your app a push token. Braze says every push, whether sent from a dashboard or an API call, goes through APNs on iOS and FCM on Android. The token is a unique address for one app on one device.

Braze describes two token types, which shows how a lost user leaves in stages. A foreground token is issued when the user opts in and is what lets a notification appear. A background token exists on every device with the app installed and allows silent pushes used for jobs such as uninstall tracking; opting out leaves only that one, and uninstalling removes every token.

My reading is that opt-out comes before uninstall, so both are early warnings. Braze notes that many users ignore unwanted messages for a while before disabling them or deleting the app. CometChat adds that delivery can fail on network errors, OS changes, bugs and server downtime, so a missing notification is not always a user's choice.

Wiring this up is app work: the app requests a token, sends it to your server and your server stores it, per CometChat. [Elyx Solutions' app development service](/services/app-development/) lists push notifications and event tracking among the features of an app build. If you are still deciding whether you need an app at all, [start with this decision checklist](/blog/does-my-business-need-an-app/).

## Push Notification Permission Prompts: Ask After Value

Ask for push permission after the user has experienced something that a notification would improve, and put your own explainer screen in front of the system dialog. Braze says push is an opt-in channel, so downloading the app does not mean the user agreed, and a refusal limits what you can do later. OneSignal says that on iOS you get one shot at the system dialog.

Pushwoosh advises against asking on first launch and recommends a pre-permission "soft ask", plus category choices such as deals or order updates. Adjust says the iOS permission text cannot be customised but your own screen before it can be, and that a shop can ask after a purchase. Adjust's guide cites a 2023 report, so it may predate newer OS rules; check Apple's and Google's current documentation before you build.

The table is my application of those rules to four kinds of app. The first row follows Adjust's after-purchase example; the other rows and all the wording are my reading and illustrative.

| App type | Ask after | Explainer promises |
|---|---|---|
| Grocery or shop | First order placed | "Know when your order is out for delivery" |
| Clinic or salon booking | First booking confirmed | "A reminder the evening before your visit" |
| Fitness or habit | User sets a goal | "A nudge at the time you chose" |
| Coaching or learning | First lesson finished | "Class timings and new test alerts" |

Follow this sequence:

1. Let the user reach one useful result first.
2. Show one screen with one specific promise.
3. Trigger the system dialog only when they tap yes.
4. On "not now", ask again later at a new value moment. Braze suggests email for a re-permission nudge; for WhatsApp, see the consent rules below.

Pushwoosh says apps using this value-exchange approach typically see 40 to 60 percent opt-in on mobile, with no method given. Adjust says 65 percent of users return within 30 days when push is on. Treat both as vendor claims.

## Push Notification Best Practices for Frequency: What Six Sources Say

Sources disagree on how often to send, from 1 to 3 messages a week as a safe baseline to 5 a week as a ceiling, so treat any number as the cap you test below. The table sets out what each page says, read on 19 November 2026.

| Source | Frequency guidance | Kind of claim |
|---|---|---|
| Pushwoosh (March 2026) | 1 to 3 a week to start; daily only for engaged users | Vendor advice, no data |
| CometChat | No more than 5 a week | Rule of thumb |
| OneSignal | More than a few a week erodes trust for most uses | Vendor opinion |
| Adjust | Use sparingly, no number | Vendor advice |
| Braze | No number; too many drives opt-outs and uninstalls | Vendor advice |
| Business of Apps, via CometChat | 40 percent lose interest at 3 to 6 a day | Second-hand figure |

The Business of Apps figure needs arithmetic. Three to six a day is 3 x 7 = 21 to 6 x 7 = 42 a week, far above every weekly ceiling in the table. It tells you where users leave in numbers, but not what is safe, and it measures lost interest, not uninstalls.

Pushwoosh recommends a frequency cap, a per-user maximum per day or week, set in your push tool. Start low, test by segment, and let engaged users hear from you more often than dormant ones.

## A Worked Example: One Week of Notifications for a Grocery App

A weekly budget separates messages the user triggered from messages you chose to send, and caps only the second kind. Take a made-up neighbourhood grocery app in Hubballi. It is an illustration, not a client, and the limits are my choices inside the sourced ranges.

| Message type | Rule | Messages in a week |
|---|---|---|
| Order confirmed, out for delivery | Always, once per event | 2 per order |
| Promotional, active customer | Cap of 2 | 2 |
| Re-engagement, no order in 14 days | Cap of 1 | 1 |

An active customer who orders three times gets 3 x 2 = 6 order messages plus at most 2 promotions, so 8 pushes in the week, 2 of them marketing. Over four weeks that is 4 x 2 = 8 promotions, against 4 x 5 = 20 at CometChat's ceiling and 4 x 3 = 12 at the top of Pushwoosh's baseline. A dormant customer gets 4 x 1 = 4.

My reading is that the sources' numbers describe marketing messages, because a delivery update is something the user asked for by ordering. No source tests this split, so run it as an experiment and watch opt-outs.

## When to Send Push Notifications: Timing Rules

Send each message when that user is likely to be awake and active, using send-time optimisation where your tool offers it and a fixed quiet window where it does not. Braze says sleeping users ignore messages, and OneSignal warns against blasting a whole list at 10 AM. Pushwoosh reports that one gaming app saw a 25 percent rise in click-through after enabling its best-time feature, a single vendor example.

Timing also means tying the message to an event. CleverTap says a good push is triggered by something meaningful such as an action, a location or a moment that matters. Pushwoosh gives a weekly account summary on Sunday evening as an example.

| Message type | Send | Source or basis |
|---|---|---|
| Order or payment update | Immediately | My reading |
| Appointment reminder | Evening before | My reading |
| Promotion | User's active window | Braze, OneSignal |
| Re-engagement | After a set gap | KFC India example below |

CometChat lists time zones, active periods and festive seasons as inputs. For an app with Indian users the time-zone problem mostly disappears, so the quiet window and festival weeks matter more; I have no sourced Indian send-time data, so read your own analytics.

## Writing Push Copy: Length, Wording and Deep Links

Put the point first: Braze and OneSignal give about 50 characters for the title and 14 to 25 words for the body. OneSignal says trays often cut a message after two lines. It also says to state the benefit, use specifics such as "3 items left" instead of "Limited stock!", and avoid all-caps.

Deep links matter as much as words. Braze says a tap should open the exact page promised, not the home screen, and OneSignal calls a home-screen landing a conversion killer. Action buttons such as "View order" let users act without opening the app, per OneSignal.

The wording below is mine and illustrative.

| Weak | Better | Why |
|---|---|---|
| Don't miss out! | Order 4821 is out for delivery, arriving by 7 pm | Specific, carries the order number Adjust recommends |
| Appointment reminder | Dr Rao's clinic, tomorrow 10:30 am. Confirm or reschedule | Deep link to the booking |
| New offers inside | Your usual atta and dal are 10 percent off today | Behaviour-based, as Braze advises |

## Push Notification Examples: What the Sources Report

The sourced examples all come from vendors, and each reports a result without a method. The table lists what each did and what the publisher states; none reports uninstalls.

| Example | What it did | Reported result |
|---|---|---|
| KFC India (Braze) | Daily push to users who had not claimed rewards in 3 days, in a game campaign | No figure in the page |
| NASCAR (Braze) | Content and app-download prompts | 13.5% and 9.6% open rates |
| Beach Bum Games (OneSignal) | Messages based on session length and quest progress | Click-through from under 1% to 12% |
| Whisker (OneSignal) | Segments by purchase history and subscription | Sales up 20%, sign-ups up 4% |
| Amazon (Pushwoosh) | Cart reminder naming the product, deep link to checkout | Pushwoosh says such pushes recover 10 to 15% of lost revenue |

Read these as direction, not benchmarks. Vendors choose their best customers, and the Pushwoosh figure is a general claim, not a measured Amazon result. KFC India is the only Indian example, and its useful detail is the trigger: a three-day gap, not a calendar blast.

## Push Notification Program Best Practices: Segment, Trigger, Test

A push program that holds up has a goal for each message, behaviour-based segments, event triggers and a test plan. Pushwoosh frames the change as moving from "we need to send more messages" to "we need to activate 5 percent more users this week". It suggests segmenting by session activity, event history and intent, not just demographics.

Measure more than opens. Braze lists opt-in rate, uninstall rate and conversion; OneSignal adds direct opens, influenced opens (an app opening shortly after a push) and revenue. Both warn that early spikes can be novelty, so OneSignal suggests 30, 60 and 90 day trends.

Test on both platforms. Braze says Android keeps notifications until dismissed, while on iOS opening one clears the rest, and OneSignal notes Android gives finer controls by channel.

## How to Choose a Push Notification Service

Choose a service on whether it can segment by behaviour, test, time each send, cap frequency and show opt-outs and uninstalls, not on its headline feature list. OneSignal's list is personalisation from behavioural data, A/B testing, send-time optimisation, cross-channel messaging and analytics beyond delivery counts. I add frequency capping and rate limiting from Pushwoosh and Braze, since rate limiting spreads a large send so it does not flood your own servers.

Every source here sells a push platform, and I did not compare prices or features, so check each vendor's pricing page. Pushwoosh also suggests a fallback channel when a user has push off. For Indian customers who agreed to it, [WhatsApp and business automation](/services/whatsapp-automation/) can play that role, within WhatsApp's rules on consent and approved templates for business-started messages.

## What Usually Goes Wrong With Push Notifications

Most push failures trace to asking too early, sending the same thing to everyone and measuring the wrong number. The table pairs each with its cause and fix, drawn from the sources above.

| Mistake | Cause | Fix |
|---|---|---|
| Permission asked on first launch | No value shown yet | Ask after a value moment, with an explainer |
| One message for everyone | No segments | Segment by behaviour |
| Tap opens the home screen | No deep link | Link to the promised page |
| A spike judged a success | Novelty effect | Compare 30, 60, 90 days |
| Only delivery counted | Wrong metric | Track opt-outs and uninstalls |
| Sends at night | One fixed time | Quiet window or per-user timing |
| Push is the only channel | Opt-outs unreachable | Fallback channel |

## What Is Documented and What Is My Reading

The documented parts are the mechanics and the vendors' stated advice; the thresholds and the Indian adjustments are my reading.

- **Documented.** Tokens, APNs and FCM, opt-in rules, the 50-character and 14 to 25 word guides, each source's frequency advice and the example results above, all as the vendors state them.
- **My reading.** Opt-outs precede uninstalls, the split between triggered and marketing messages, the moment-of-value table, and the point about time zones in India.
- **Not covered.** Measured uninstall rates by frequency, Indian send-time data, and platform permission rules after 2023.

## What to Do Next

Audit what you send this week against the checklist, then change one thing at a time so you can see what moved.

- [ ] I ask for permission after a value moment, behind my own screen.
- [ ] Marketing pushes are capped per user per week.
- [ ] Order and booking alerts are sent as events.
- [ ] Every tap opens the promised page.
- [ ] No sends overnight.
- [ ] I track opt-outs and uninstalls beside opens.
- [ ] Users who opt out can be reached another way, with consent.

If you are planning an app, a focused build usually takes {{weeks:mobile}} from discovery to store release, agreed in writing before work begins. Elyx engagements start from {{start}}, excluding GST, and you can [request a quote](/contact.html) after a call. The [app development service page](/services/app-development/) explains the process.

## Sources

- [A Guide To Push Notification Best Practices](https://www.braze.com/resources/articles/push-notifications-best-practices), Braze (last edited 1 August 2026, read 19 November 2026)
- [OneSignal Guide: Push Notification Best Practices 2026](https://onesignal.com/blog/onesignal-guide-push-notification-best-practices-2026/), OneSignal (read 19 November 2026)
- [Push notification guide: Tips and best practices](https://www.adjust.com/blog/how-to-develop-a-successfull-push-notification-strategy/), Adjust (read 19 November 2026)
- [Best Practices for Push Notifications in Your App](https://www.cometchat.com/blog/push-notifications-best-practices), CometChat (read 19 November 2026)
- [35 Push Notification Best Practices That Work](https://clevertap.com/blog/push-notification-best-practices/), CleverTap (read 19 November 2026)
- [Push notification strategy: Best practices, examples & guide](https://www.pushwoosh.com/blog/push-notification-strategy/), Pushwoosh (16 March 2026, read 19 November 2026)

## FAQ

### What are push notifications?

Push notifications are short messages that an app or website sends to a user's device, even when it is not open. Braze says they appear only if the user has opted in. They are used for order updates, reminders, offers and re-engagement.

### How do push notifications work?

The app asks Apple's APNs or Google's FCM for a token, sends it to your server, and your server sends each message to that service with the token. The service then delivers it to the device, according to CometChat. Braze adds that a notification needs the user's opt-in.

### How often should an app send push notifications?

Start with 1 to 3 marketing messages a week and test from there; Pushwoosh calls that a safe baseline. CometChat gives 5 a week as a rule-of-thumb ceiling. No source measures the exact point where users uninstall.

### What is the best time to send push notifications?

The best time is when the individual user is usually active, not one fixed hour for everyone. Braze and OneSignal recommend send-time optimisation. Without it, send in daytime and evening and avoid the hours people sleep.

### When should an app ask for push notification permission?

Ask after the user has seen the app's value, such as after a first order or booking, and not on first launch. Show your own explainer screen first, as Braze, Adjust and Pushwoosh advise. On iOS you get one system prompt, per OneSignal.

### Should I allow push notifications?

Allow them for apps where alerts carry something time-sensitive, such as deliveries, bookings or payments, and refuse them for apps that only send promotions. You can change this later: OneSignal says iOS and Android let users mute, schedule or disable notifications.

### What is the difference between push notifications and in-app messages?

An in-app message shows only while the app is open, but a push can arrive when it is closed. Adjust draws that line. A push also needs the user's opt-in and an installed app.

### Do push notifications cause uninstalls?

Sources say excessive or irrelevant pushes can lead to opt-outs and uninstalls, but none gives a measured rate. Braze, Adjust and CometChat all make the link. Track your own opt-out and uninstall rates before and after a change.

### How do I send push notifications from my app?

Send them from a push platform's dashboard or trigger them through an API call, as Braze and OneSignal describe. Either way the app must first register for a token with APNs or FCM. Dashboards suit marketing messages; API triggers suit order and content events.
