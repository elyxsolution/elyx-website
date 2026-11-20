---
title: Domain Expired? How to Recover It and Never Lose It Again
slug: domain-expired-how-to-recover
category: care
description: Domain expired? How to recover it: the grace and redemption clocks, registrar steps, sourced fees, auto-renew traps and who must hold the account.
date: 2026-11-20
author: shreyasmv
---
Domain expired? How to recover it depends on one thing: which stage the name is in. Inside the grace period, which Wix puts at about 30 days, you renew at your registrar for the normal price. After that a redemption fee applies, and once the name is released anyone can register it. The honest qualification is that each registrar and extension runs its own clock, and the sources I read give no timings for .in names, so confirm yours on your registrar's own page today.

- **Act in days, not weeks.** GVM Technologies says GoDaddy lists expired names for auction at day 26, so treat day 25 as your deadline.
- **Cost climbs by stage.** Normal price in grace, then a restore fee in redemption, then a buy-back from a stranger.
- **Ownership decides who can act.** Registrars deal with the registrant of record, which is often a departed developer or staff member.
- **Auto-renew is not a plan.** It fails on dead cards, dead inboxes and extensions with no grace period.

## How to Check Whether Your Domain Has Expired

A free public lookup shows the expiry date and a status code, and the code tells you which stage you are in. Wix points owners to a WHOIS lookup tool to look for the redemption-period status, and GVM Technologies recommends [ICANN Lookup](https://lookup.icann.org/), which also names the registrar of record. These are the codes GVM lists:

- **autoRenewPeriod.** Still renewable at the normal price.
- **clientHold or serverHold.** DNS is switched off, so the site and email are down.
- **redemptionPeriod.** A restore fee applies.
- **pendingDelete.** About five days from release, and no restore is possible.

Confirm that the domain is what lapsed, because the domain, the hosting and the SSL certificate renew separately. The table below is GVM's triage, as read on 20 November 2026.

| What you see | Likely lapse | Fix |
|---|---|---|
| Parked page, email bounces | Domain | Renew or restore at the registrar |
| Host's "account suspended" page | Hosting | Pay, then ask for a backup |
| Padlock warning, site loads | SSL certificate | Renew the certificate |

GVM adds two quick tests. Registrars often swap your nameservers for parking ones on expiry, and an email to your own address from another account that bounces means DNS is off. An uptime monitor, which Elyx Solutions' [maintenance and care plans](/services/maintenance-care/) include, flags the outage, though it is not a substitute for knowing the expiry date.

## Grace Period, Redemption and Release: How Long You Have

A domain moves through three stages after its expiry date: grace, redemption and release, and the sources agree on the order but not on the day counts. The table sets four published clocks side by side, as read on 20 November 2026.

| Source | Grace period | Redemption and release |
|---|---|---|
| [Wix Help Center](https://support.wix.com/en/article/retrieving-an-expired-domain-during-the-redemption-period) | About 30 days, normal price | Fee for most domains, then released |
| [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/241/2201/how-can-i-renew-my-expired-domain/) | 30 days for most generic extensions | Past grace, the domain leaves the Expiring/Expired list |
| [Bagful](https://bagful.net/domain-expired-india) | Day 0 to 30 | Redemption day 30 to 60, released from day 60 |
| [GVM Technologies](https://gvmtechnologies.com/recover-expired-domain/), typical .com | 25 to 45 days | 30 days redemption, about 5 days pending delete, public release after roughly 65 to 80 days |

My reading: Bagful's page is a host's summary and GVM's is more detailed, so where they differ, your registrar's own page wins. GVM also reports that ICANN's Expired Registration Recovery Policy sets only a floor for generic extensions: two warnings before expiry and a 30-day redemption period.

Some extensions have no grace at all. Namecheap lists .CH, .ES, .FR, .LI, .PE, .SG and .COM.AU as having none, with renewal needed at least 12 days before expiry, and .DE, .EU and .NL at least 5 days before. Its list does not name .in, so check the page for your own extension.

## What Recovery Costs at Each Stage

Renewal in grace costs the normal price, and every later stage adds a fee that the sources state in different currencies and on different bases. The table gathers what each says, as read on 20 November 2026.

| Source | Stage | Figure as published |
|---|---|---|
| Bagful | Redemption | ₹5,000 to ₹20,000, depending on registrar |
| GVM Technologies | Redemption | About $50 to $200 on top of renewal |
| [Register.it](https://www.register.it/domains/recuperate.html?lang=en) | Recovery | Up to €160, renewal included |
| Wix Help Center | Redemption | A fee applies; no amount on the page |

Register.it adds that for some extensions the registry charges up to 10 times a normal renewal. The figures are not like for like, since Register.it includes the renewal and GVM does not.

Here is a worked example for a .com, and the arithmetic is mine. The [hidden costs article](/blog/website-hidden-costs/) cites Web Cost Estimator (April 2026) for a year-two .com renewal of $10 to $15. Add GVM's fee: 10 + 50 = $60 at the low end and 15 + 200 = $215 at the high end. Against the on-time renewal that is between 4 times (60 ÷ 15) and 21.5 times (215 ÷ 10) as much, a planning range and not a quote.

## Domain Expired: How to Recover It at Your Registrar

To recover an expired domain, renew or restore it from the account that holds it, in this order, and check the fee before you confirm. The steps below combine the help pages of Namecheap, Wix, Cyber Grapes and GVM Technologies.

1. **Find the expired list.** Namecheap uses Expiring/Expired in the left sidebar, and [Cyber Grapes](https://help.domainstriker.com/domains/renew-my-expired-domains) tells you to filter for the Expired badge.
2. **Renew if the button exists.** Namecheap adds one year to the original expiry date, not to the day you pay.
3. **In redemption, read the fee.** Cyber Grapes says to review the higher fee before confirming. GVM says many registrars treat a restore as a support request, and Wix says a restore can take up to 7 days after payment.
4. **Do not touch DNS yet.** GVM names pointing DNS at a new host before renewing as one of the costliest mistakes.
5. **Wait for it to propagate.** Namecheap allows 24 to 48 hours for the site to come back everywhere.
6. **Switch on auto-renew and check the card.** Cyber Grapes says to verify both so it does not expire again.

If the domain is not in your list at all, Namecheap says it has passed grace and the reactivation process differs, so contact support the same day.

## Who Can Renew: The Registrant of Record and the Departed Developer

Only the registrant of record, the person or company the registration lists, can deal with the registrar, and that is often not the business. GVM says that if a developer holds that role, you must prove the business paid, with invoices, bank records and company registration. The [ownership article](/blog/who-owns-my-website-code/) explains how that trap forms and which handover items prevent it.

When nobody remembers the registrar, GVM suggests four searches:

- **ICANN Lookup.** It shows the registrar of record.
- **Every inbox, spam included.** Search for "domain" and "renewal".
- **Card and bank statements.** Registrar charges appear under the registrar's name.
- **The seller.** If a host or agency sold you the name, that reseller is your support contact.

When the login is lost, GVM's advice is to renew first and prove ownership second. Use the registrar's account recovery, send ID, invoices and a card statement, and ask support to take payment while verification runs.

## If Someone Else Registered It: Backorder, Buy Back or Rebrand

After redemption ends and the name drops, the new registrant owns it, and GVM lists four routes: backorder it, negotiate, file a UDRP complaint or rebrand. A backorder is a wait, not a plan, because GVM says competing backorders trigger a private auction. GVM relays Infoblox research, reported by The Hacker News, of about 50,400 drop-caught registrations a day in early 2026, so an aged name can go in seconds.

Until you regain it, assume the new owner receives mail sent to your old address. GVM advises warning customers not to pay invoices from unfamiliar addresses and changing every login that uses an old-domain email.

GVM's buy-back test compares three numbers, and its rule is to buy back when the ask is below the rebrand cost and the domain earns revenue.

| Number | How to get it |
|---|---|
| Asking price | The owner's quote or a broker's |
| Rebrand cost | Reprints, relisted profiles and the traffic dip you expect |
| Domain revenue | 12 months of leads and sales through the site and email |

A UDRP complaint needs all three elements, according to GVM:

1. The domain is identical or confusingly similar to your trademark.
2. The holder has no legitimate interest in it.
3. It was registered and is used in bad faith.

GVM gives WIPO's filing fee as $1,500 for one panelist and $4,000 for three, plus legal help. The ownership article notes that .in names have their own INDRP process. Ask a lawyer before filing.

The same mechanics apply if you want to buy someone else's expired domain: GVM says asking prices run from a few hundred to several thousand dollars. The research I had holds no sourced guide to expired-domain lists or valuation, so I name no tool.

## What to Fix After the Domain Is Back

Recovering the name does not by itself restore the site, email or search visibility, and Register.it says it cannot guarantee that content and mailboxes return. GVM's checklist for the first day:

1. Confirm the status is active with a new expiry date.
2. Point nameservers back to your DNS host and check the A and CNAME records.
3. Check MX, SPF, DKIM and DMARC records, then send a test email.
4. Confirm the SSL certificate is valid and the site loads on mobile data.
5. Move the registrant email to a shared mailbox on a different domain, and turn on the registrar lock.

### Email while you wait

GVM suggests a temporary mailbox on another domain, published on your Google Business Profile, and asking key customers to resend anything sent during the outage. Move payment, banking and software logins to the new address, because password resets go to the old one.

### Rebuilding a lost website

If hosting went too, ask the host for a full backup and database dump first. Then GVM's route is the Wayback Machine: pick snapshots dated before the expiry, pull pages with a tool such as Archivarix, rebuild in a CMS and scan every recovered script before running it. You get a static copy only; forms, databases and admin panels are not captured.

GVM says to rebuild by traffic, using Search Console to find the top pages and keeping the original URLs.

### Search visibility

Google publishes no recovery timeline, according to GVM, and short outages usually recover after recrawling while long lapses can take months. Inspect your top URLs in Search Console, request indexing and resubmit the sitemap.

## Auto-Renew: What It Protects and Where It Fails

Auto-renew prevents the most common lapse, but it only works while the card, the inbox and the extension all cooperate. Wix says expiry usually follows auto-renew being off or a failed renewal payment. The table maps each failure to its cause and fix, with the source.

| Failure | Cause | Fix |
|---|---|---|
| Payment fails | The card on file expired (Bagful) | Add a second card |
| Nobody sees the notice | Sent to spam or an old address (Bagful); to the lapsed domain itself (GVM) | A shared mailbox on another domain |
| Auto-renew is off | Switched off at the registrar (Wix) | Check the setting after every renewal |
| No grace exists | Extensions needing renewal 12 or 5 days early (Namecheap) | Renew early by hand |

GVM suggests two further habits: register key names for 5 to 10 years, and set reminders at 90, 60, 30 and 7 days. For .in names, the ownership article reports the registry has no duty to warn you before expiry.

## What Usually Goes Wrong

The costly mistakes are made in the first 48 hours, and most are avoidable once you know the stage. Each row below is from GVM unless another source is named.

| Mistake | Cause | Fix |
|---|---|---|
| Renewing the wrong thing | Domain, hosting and SSL look alike | Run the triage table first |
| Missing the registrar's deadline | Using the registry's longer window | Treat day 25 as yours |
| Paying a "recovery" promise | Panic | Pay only the registrar |
| Expecting everything back | Renewal restores the name only (Register.it) | Check email and site the same day |
| No one can act | Developer or ex-employee is registrant | Prove payment, then change registrant |

## Never Lose It Again: A Checklist and Asset Register

A domain stays safe when the business holds the account, two people can reach it and every renewal date is written in one place. Copy this checklist, built from GVM's habits table and the ownership article.

- [ ] The registrar account is in the business's name, with a shared mailbox on a different domain.
- [ ] Auto-renew is on, a second card is added, and a reminder fires before each card expires.
- [ ] Key domains are registered for 5 to 10 years, with reminders at 90, 60, 30 and 7 days.
- [ ] The registrar lock is on, and a second person can sign in.
- [ ] One sheet lists registrar, expiry, host, DNS, SSL and backup dates, reviewed each quarter.

GVM warns that some registrars apply a 60-day transfer lock after renewal, so plan any move early. The [hidden costs article](/blog/website-hidden-costs/) covers what each renewal costs.

## What Is Documented and What Is My Reading

This page rests on registrar help pages and vendor articles read on 20 November 2026, not on a lawyer's view or ICANN's own policy text.

- **Documented.** Grace and redemption exist, fees rise by stage, and renewal adds a year from the original expiry (Namecheap, Register.it).
- **My reading.** Bagful's day counts are a simplification, the 4 to 21.5 times range is my arithmetic, and most lapses trace to a card, an inbox or a leaver.
- **Not covered.** Timings and fees for .in names, which the sources did not contain. Check your registrar's page.

## What to Do Next

Today, run the lookup, find the registrar and renew or request a restore, then record the name in your asset register once it is safe. A website's running parts need an owner as well, and the studio's [maintenance and care service](/services/maintenance-care/) is built around that: monitoring, backups and a health check. Its published description does not mention tracking domain expiry dates, so ask any provider, us included, to put them on the checklist.

If the lapse took a site down and the files are gone, a rebuild is a web project. Engagements start from {{start}} and every one is quoted to your requirements, in writing, after a call: [request a quote](/contact.html), or read [how Elyx prices work](/pricing/).

## Sources

- [Recovering an Expired Domain During the Redemption Period](https://support.wix.com/en/article/retrieving-an-expired-domain-during-the-redemption-period), Wix Help Center
- [Recovering Expired Domain Names](https://www.register.it/domains/recuperate.html?lang=en), Register.it
- [Domain Expired in India? Emergency Recovery](https://bagful.net/domain-expired-india), Bagful
- [Recover Expired Domain: 4 Stages, Real Costs and Easy Fixes](https://gvmtechnologies.com/recover-expired-domain/), GVM Technologies
- [How can I renew my expired domain?](https://www.namecheap.com/support/knowledgebase/article.aspx/241/2201/how-can-i-renew-my-expired-domain/), Namecheap
- [Renew an Expired Domain Quickly](https://help.domainstriker.com/domains/renew-my-expired-domains), Cyber Grapes
- [ICANN Lookup](https://lookup.icann.org/), ICANN

## FAQ

### How do I get my expired domain back?

Renew or restore it at the registrar that holds it, as soon as you can. In grace you pay the normal renewal; in redemption you pay a restore fee, and after release you can only backorder, negotiate or file a UDRP complaint. Start with the lookup to see the stage.

### Can I renew my domain after it has expired?

Yes, during the grace period, which Wix puts at about 30 days and Namecheap at 30 days for most generic extensions. Some extensions, such as .FR and .CH, have no grace period at all, according to Namecheap. Check your extension.

### How long until an expired domain is available to others?

For a typical .com, GVM Technologies says public release comes roughly 65 to 80 days after expiry. Bagful puts release at day 60 onward, and Wix says it follows the end of redemption. Your registrar's clock decides.

### How long does GoDaddy hold an expired domain?

GVM says GoDaddy lists expired names for auction 26 days after expiry, so day 25 is your working deadline. You can still recover the name after that in redemption by paying a fee. Confirm the dates on GoDaddy's own page.

### How do I check when my domain expires?

Use a public lookup such as ICANN Lookup, which GVM says shows the expiry date and the registrar of record. Wix points to a WHOIS tool for the redemption status. Your registrar account's domain list shows it too.

### What happens to my website and email when my domain expires?

Both go offline together, because they depend on the domain's DNS. Bagful says expiry takes the website and email offline immediately, and Cyber Grapes says DNS usually returns after a successful renewal. GVM says hosting files usually survive.

### Can I recover an expired domain someone else registered?

Only by negotiating, winning a backorder or winning a UDRP complaint, according to GVM. A UDRP needs a trademark match, no legitimate interest and bad faith, with a $1,500 WIPO fee for one panelist. Compare the ask with your rebrand cost first.

### How much does it cost to recover an expired domain?

It depends on the stage and registrar. Bagful gives ₹5,000 to ₹20,000 for redemption, GVM about $50 to $200 on top of renewal, and Register.it up to €160 with renewal included, all as read on 20 November 2026. In grace it is the normal renewal.

### Will my Google rankings come back after a lapse?

Not on a schedule anyone can promise. GVM says Google publishes no recovery timeline, with short outages usually recovering after recrawling and long lapses taking months. Request indexing for top URLs and resubmit the sitemap.
