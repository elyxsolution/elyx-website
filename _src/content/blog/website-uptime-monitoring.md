---
title: Uptime Monitoring: Know Your Site Is Down Before Customers Do
seo_title: Website Uptime Monitoring: Free Tools, Alerts, Outage Plan
slug: website-uptime-monitoring
category: care
description: Website uptime monitoring explained: what free and paid monitors give you, how alerts should reach you and what to do when your site goes down.
date: 2026-11-20
author: shreyasmv
---
Website uptime monitoring is a service that checks your site from outside your network every few minutes and alerts you as soon as it stops answering, so you hear about an outage before a customer does. Free plans are enough for most small business sites: as of 20 November 2026, UptimeRobot's free plan covers 50 monitors checked every 5 minutes. The qualification is that a monitor only proves a page responded, and an alert only helps if it reaches a person who knows what to do next.

- **Free is enough to start.** Three vendors offer free plans with 1 to 50 monitors, and check intervals run from 5 to 30 minutes.
- **Paid buys speed and reach.** Faster checks, phone or SMS alerts, page-content checks and status pages on your own domain.
- **Detection delay matters.** One unnoticed 30-minute outage uses 69% of a 99.9% month, worked out below.
- **The gap is the response.** No vendor page I read explains what to do after the alert, so the runbook below does.

## What Is Website Uptime Monitoring and Why Does It Matter?

Website uptime monitoring is a tool outside your network that keeps requesting your site and tells you when it fails to answer correctly. UptimeRobot describes a monitor as one tool that repeatedly verifies a page or service is online, records each incident with a timestamp and alerts you by email, SMS, call or chat.

UptimeRobot also separates two terms. Uptime monitoring checks whether a site responds, while website monitoring adds response times, SSL errors, certificate and domain expiry and page content. Catchpoint adds that uptime is the time a system is operational and availability is that time as a percentage, though the two words are often used interchangeably.

UptimeRobot says every minute of downtime can cost sales, sign-ups and trust, though its page gives no figure. My reading is that a clinic or coaching centre loses the enquiry to the next search result.

Websites decay quietly, and [Elyx's maintenance and care service](/services/maintenance-care/) is built around that: its plans include uptime monitoring and alerts, so the studio knows before your customers do.

## How Much Downtime Does Each Uptime Percentage Allow?

Each uptime percentage allows a fixed number of minutes of downtime, and 99.9% over a 30-day month allows 43.2 minutes. UptimeRobot gives the formula: (total time minus downtime) divided by total time, times 100.

The working: 30 days × 24 hours × 60 minutes is 43,200 minutes. Allowed downtime is 43,200 × (100 minus the uptime percentage) ÷ 100. The table applies that to five common figures.

| Uptime | Calculation | Allowed downtime per 30 days |
|---|---|---|
| 99% | 43,200 × 1% | 432 minutes (7 h 12 min) |
| 99.5% | 43,200 × 0.5% | 216 minutes (3 h 36 min) |
| 99.9% | 43,200 × 0.1% | 43.2 minutes |
| 99.95% | 43,200 × 0.05% | 21.6 minutes |
| 99.99% | 43,200 × 0.01% | 4.32 minutes (about 4 min 19 s) |

The last row matches UptimeRobot's own example of 4 minutes and 19 seconds. Now set a slow detector against it: one outage that nobody notices for 30 minutes uses 30 ÷ 43.2 = 69% of a 99.9% month. This is my arithmetic, and it is why detection speed matters more than the headline percentage.

The pages I read do not say what Indian hosts guarantee, so ask yours.

## How Website Uptime Monitoring Works: Checks, Locations and Re-Checks

A monitor sends a request to your address at a set interval from servers in several places, and raises an alert only if the failure is confirmed. The vendors' own pages, read on 20 November 2026, state their reach: UptimeRobot up to four regions, SiteUptime 11 locations on 4 continents, Pulsetic up to 15, Uptime.com 80+ points of presence and Site24x7 130 locations.

Confirmation is what keeps false alarms down. UptimeRobot says a failed check is re-run from other data centres in the same region, including one on a different provider, before an incident opens, and that this applies on every plan. Pulsetic and SiteUptime describe the same idea using other regions.

Several locations also catch what one cannot. UptimeRobot says multi-location checks reveal regional outages, routing problems and CDN edge faults that a single vantage point misses. The pages give location counts, not full lists, so if your customers are in Bengaluru or Mysuru, ask whether the tool has a probe in or near India.

## What to Monitor Beyond the Home Page

Monitor the home page first, then the things that break while the home page still loads. Catchpoint makes the point plainly: a site being up does not mean it works, and its example is an add-to-cart button that fails. The table lists what each check catches.

| What breaks | Check to add | Documented by |
|---|---|---|
| The whole site | HTTP or HTTPS check on the home page | UptimeRobot |
| A page that loads but is empty | Keyword check for text that must appear | UptimeRobot, Pulsetic |
| Expired SSL certificate | Certificate expiry alert | Pulsetic, UptimeRobot (paid) |
| Expired domain | Domain expiry alert, 14 and 7 days out | Pulsetic |
| Broken checkout or login | Transaction check in a real browser | Uptime.com, Pulsetic |
| A silent scheduled job | Heartbeat or cron check | UptimeRobot, Pulsetic |
| Payment or email provider down | Third-party incident alerts | Pulsetic |

Pulsetic's third-party alerts cover 4,300+ services, but its page does not say which Indian payment gateways are included, so check yours.

My reading for a business site: start with three checks, the home page, a keyword on the enquiry page, and certificate and domain expiry. A contact form that stops delivering is hard to catch on a free plan, so send yourself a test enquiry every week. Renewal dates are covered in [the hidden costs of a website](/blog/website-hidden-costs/).

## Free Website Uptime Monitoring: What the Free Plans Include

Free website uptime monitoring is enough for a small business site, and the plans differ mainly in monitor count and check interval. I compared the vendors' own pages on three criteria: number of monitors, check interval and what else comes free. The facts are as read on 20 November 2026 and plans change.

| Tool | What the free tier gives | Check interval |
|---|---|---|
| UptimeRobot | 50 monitors, public status pages, 20+ integrations | 5 minutes |
| Pulsetic | 10 monitors, 3 status pages on your domain, unlimited email alerts | Not stated on its page |
| SiteUptime | 1 monitor, email alerts, uptime reports, public statistics page | 30 minutes |
| uptime-monitor.io | No free plan stated; 7-day free trial, no card | 10 seconds |
| Site24x7 | On-demand availability test from 130 locations | One-off test |

UptimeRobot gives the most monitors, Pulsetic the most useful extras, and SiteUptime's free tier is the thinnest. The Site24x7 tool answers a different question, "is it just me?", because it tests once from many places, and the page I read does not describe a free continuous plan.

If you have a developer, Uptime Kuma is a self-hosted open-source monitor listed on GitHub. My reading is that it must not run on the same server as your site, because one outage would silence both.

## When a Paid Uptime Monitoring Tool Is Worth It

A paid monitor is worth it when a 5 to 30 minute gap, an email-only alert or a missing status page would cost you more than the fee. The first lever is the check interval, and the worst-case wait for a first failed check equals that interval.

| UptimeRobot plan | Check interval | Worst-case wait |
|---|---|---|
| Free | 5 minutes | 5 minutes |
| Solo | 60 seconds | 1 minute |
| Team | 30 seconds | 30 seconds |
| Scale | 15 seconds | 15 seconds |

The intervals are UptimeRobot's, read on 20 November 2026, and the last column is my arithmetic. UptimeRobot warns that faster intervals improve detection but add noise if your endpoint is flaky. uptime-monitor.io claims 10-second checks.

Paid prices vary. SiteUptime lists three tiers at $0, $10 and $20 a month. By the page's order, the middle tier adds 3 monitors, 2-minute checks and SMS or call alerts with 10 free credits, and the top tier adds 6 monitors, page-content monitoring and a public status page. I found no other vendor's paid prices in my research, so check each pricing page.

| Choose a free monitor when | Choose a paid monitor when |
|---|---|
| One site, a few pages | You take payments or bookings online |
| Five minutes to detect is acceptable | You need detection in a minute or less |
| You read WhatsApp or email promptly | You need a phone or SMS alert at night |

Uptime.com is stronger for larger teams: it states a completed SOC 2 Type II audit and 24/7 support, which suits compliance needs more than a clinic with one site.

## Alerts: Which Channels Reach You and How to Avoid False Alarms

An alert works when it reaches a person in a place they actually look, and for many Indian owners that is WhatsApp or a phone call, not email. Pulsetic argues that chat apps get muted and email sleeps at night, while a call from a fixed number can be saved as a contact and ring through Do Not Disturb. Pulsetic lists WhatsApp, SMS, calls and email, and UptimeRobot adds mobile push, Telegram, Slack and Teams.

Four settings to make on day one:

- **Two contacts.** One person is a single point of failure on a holiday. UptimeRobot supports alerting rules that include escalation.
- **One channel that wakes you.** Use a call or WhatsApp for outages and keep email for reports.
- **Allowlisting.** UptimeRobot advises allow-listing its locations and IP addresses, and Pulsetic offers Cloudflare allowlisting so a firewall rule never fakes a downtime alert.
- **Maintenance windows.** UptimeRobot says scheduled windows suppress alerts for planned work and keep the uptime figure accurate.

False alarms are a common worry, and re-checking from a second location is the main defence. If a monitor still cries wolf, tune the timeout and use a keyword check, as UptimeRobot suggests.

## Uptime Monitoring Reports, Status Pages and the API

An uptime monitoring report shows the percentage and the incidents for a period, and the tools differ in history and format. UptimeRobot shows 24-hour, 7-day and 30-day percentages. SiteUptime logs uptime and downtime monthly, and Pulsetic exports PDF and image reports and keeps history for up to five years.

My reading: use the monthly report to compare what the monitor saw with what your host promised. A status page is a public page showing current status and incident updates, and it earns its place when customers log in, book or pay online. A clinic taking calls needs a pinned WhatsApp message more.

The API matters mainly to whoever maintains the site. SiteUptime includes API access on its free tier, and Pulsetic and UptimeRobot offer webhooks.

## What to Do During an Outage: A Runbook for Owners

When an alert arrives, confirm the outage, tell customers, find the layer that failed, restore, verify and write it down, in that order. The vendor pages I read cover alerts but not the response, so this sequence is my own suggested runbook, built on the layers Catchpoint lists.

1. **Confirm.** Open the site on your phone using mobile data, then on another network. If a free checker such as Site24x7's shows it failing from several places, it is down, not just you.
2. **Tell people.** Post one line on WhatsApp status and your Google Business Profile or social page: "Our website is down and we are fixing it. Please book on WhatsApp or call us."
3. **Find the layer.** Use the table below to choose the first thing to check.
4. **Restore.** Undo the last change, or restore from a backup stored away from the server.
5. **Verify.** Wait for the monitor to go green, then test the key action yourself: submit the form, place a test order.
6. **Close and record.** Tell customers it is back. Note the start time, detection time, fix time and cause, using the monitor's incident timestamps.

| Symptom | Likely layer | First check |
|---|---|---|
| "Site can't be reached" | DNS or lapsed domain | Domain expiry date and DNS records |
| Browser security warning | SSL certificate | Certificate expiry date |
| Error page or timeout | Hosting or application | Hosting dashboard, last update |
| Fails only in some regions | CDN or routing | Monitor results by region |
| Loads, but checkout or form fails | Third-party service | Payment or email provider's status |
| Alert followed a change | Your own update | Roll the change back |

The layers follow Catchpoint's list of DNS, CDN, servers and third parties, plus the certificate. The mapping of symptom to first check is my reading, not a vendor's published guide.

## What Usually Goes Wrong With Uptime Monitoring

Most monitoring failures are setup failures: the check was too narrow, the alert went nowhere or nobody owned it. The table gives the cause and the fix.

| What goes wrong | Cause | Fix |
|---|---|---|
| Site "up" but broken | Only the home page is checked | Keyword and key-page checks |
| Nobody hears the alert | One email, no phone | Call or WhatsApp, plus a second person |
| False downtime alerts | Firewall or CDN blocks the monitor | Allowlist its IPs |
| Alarms during planned work | No maintenance window | Schedule one before updates |
| Short outages never seen | 30-minute interval | Shorter interval, or a paid tier |
| Monitor fails with the site | Self-hosted on the same server | Run it elsewhere |

The mistake behind most of these is ownership: as [the SaaS scaling article](/blog/saas-scaling-problems/) says, an alert nobody owns is not monitoring. Name one person per alert.

## What to Do Next: Set Up Monitoring This Week

Set up a free monitor today, then decide whether anything on the checklist needs a paid tier or a person to own it. Work through this list in one sitting:

- [ ] Add the home page and the enquiry or booking page as monitors.
- [ ] Add a keyword check for text that must appear on the enquiry page.
- [ ] Turn on certificate and domain expiry alerts.
- [ ] Send alerts to a phone call or WhatsApp, plus a second person.
- [ ] Allowlist the monitor's IP addresses in your firewall or CDN.
- [ ] Schedule a maintenance window before any planned update.
- [ ] Keep your host's support number and the holding message in one note.
- [ ] Read the monitor's report once a month.

If nobody on your side wants to own this, [Elyx's maintenance and care plans](/services/maintenance-care/) include uptime monitoring and alerts. Monitoring is set up in the first week, covering uptime, forms, SSL and errors. If the site goes down, the studio investigates, restores from backup if needed and tells you what happened.

Plans can be added at launch or later, with no lock-in unless you want one. Engagements start from {{start}}, and a care plan is quoted to your requirements in writing after a call, so [request a quote](/contact.html). For what monthly care normally covers, read [website maintenance charges in India](/blog/website-maintenance-charges/).

## Sources

- [UptimeRobot: Free Website Monitoring Service](https://uptimerobot.com/), UptimeRobot (read 20 November 2026)
- [Free Website Uptime Monitoring](https://pulsetic.com/), Pulsetic (read 20 November 2026)
- [SiteUptime: Website and Server Monitoring Service](https://siteuptime.com), SiteUptime (read 20 November 2026)
- [Uptime Monitoring That Detects Downtime in 10 Seconds](https://uptime-monitor.io/), uptime-monitor.io (read 20 November 2026)
- [Uptime.com Website Monitoring Service](https://uptime.com/), Uptime.com (read 20 November 2026)
- [Website Uptime Monitoring Defined](https://www.catchpoint.com/glossary/website-uptime-monitoring), Catchpoint (read 20 November 2026)
- [Check Website Availability](https://www.site24x7.com/tools/check-website-availability.html), Site24x7 (read 20 November 2026)
- [Uptime Kuma: a fancy self-hosted monitoring tool](https://github.com/louislam/uptime-kuma), GitHub project listing

## FAQ

### What is website uptime monitoring?

Website uptime monitoring is a service that repeatedly checks your site from outside your network and alerts you when it stops responding. UptimeRobot says it also records incidents with timestamps so you can track reliability.
### What does uptime mean, and how is it measured?

Uptime is the share of a period during which your site was available, calculated as (total time minus downtime) divided by total time, times 100. UptimeRobot gives that formula. Over a 30-day month, 99.9% allows 43.2 minutes of downtime.

### Is Net Uptime Monitor safe?

My research has no review of Net Uptime Monitor, so I cannot say whether that specific product is safe. UptimeRobot and Pulsetic both say their monitors need nothing installed on your server. Be wary of any tool that asks for hosting or server passwords, and read the vendor's privacy terms first.

### Is there a free website uptime monitoring tool?

Yes: as of 20 November 2026, UptimeRobot offers 50 free monitors, Pulsetic 10, and SiteUptime 1. Intervals differ, from 5 minutes on UptimeRobot to 30 minutes on SiteUptime's free tier. Check each vendor's page, because plans change.

### How often should a monitor check my website?

In my reading, every 1 to 5 minutes suits most small business sites, because the worst-case wait before a failure is seen equals the interval. A 5-minute check can miss up to 5 minutes, and a 30-minute check up to 30. Shorter intervals add noise if your site is unstable.

### Do uptime monitors send false alerts?

They can, but good ones re-check from another location before alerting, as UptimeRobot, Pulsetic and SiteUptime all describe. A firewall that blocks the monitor can also fake an outage, so allowlist its IP addresses.

### What should I do first when my website goes down?

Confirm it is down for others, then tell your customers where else to reach you. Open the site on mobile data, check a second location, and post a holding message with your WhatsApp number. Then work through the layers in the runbook above.

### What is a good uptime percentage?

My research has no sourced benchmark, so convert the percentage into minutes: 99.9% allows 43.2 minutes a month and 99.99% about 4 minutes 19 seconds. Choose the figure whose downtime your business can tolerate.

### Do I need a status page?

You need one if customers log in, book or pay on your site. Pulsetic's free plan includes 3 status pages on your own domain. A business that takes calls and WhatsApp messages can use a pinned message instead.

### Can I monitor my site for free without a vendor?

Yes, with a self-hosted open-source tool such as Uptime Kuma, but it needs a separate server and someone to maintain it. For most owners a free vendor plan is simpler.
