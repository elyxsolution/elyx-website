---
title: Website Hacked? What to Do in the First 24 Hours
slug: website-hacked-what-to-do
category: care
description: Website hacked, what to do: contain it, change passwords, restore or clean, clear Google warnings and stop a repeat, in order across the first 24 hours.
date: 2026-11-19
author: shreyasmv
---
If your website is hacked, do four things in this order: take it offline or serve a maintenance page, call your hosting provider, change every password tied to the site, and keep a copy of the infected files before you touch anything. Then restore from a backup you know is clean, or clean the site, and only after that deal with Google warnings. The honest qualification is that my sources are four hosting and security vendors, who sell cleanup and protection, and one Google post from April 2008, so the order below is my synthesis of their advice, not a tested procedure.

- **First hour.** Contain the site, tell the host and change passwords from a device you trust.
- **Restore or clean.** Restore when you have a clean backup from before the break-in; clean by hand only with expert help.
- **Google.** A "contains malware" warning clears after the site is fixed and reviewed, not before.
- **Prevention.** Most repeat hacks come back through the same weak password or outdated plug-in.

## How to Check If a Website Is Hacked Before You Act

A website is probably hacked if visitors are redirected, strange pages or admin users appear, or Google shows a malware warning, and a free scanner can confirm it but cannot clear you. TuxCare lists unusual pop-ups, redirects to suspicious sites, unfamiliar links, suspicious ads, slow loading, customer reports of unauthorised transactions or spam sent from your domain, and search results labelled "This site may harm your computer". GoDaddy says warnings such as "This site contains malware" mean there is definitely a problem.

A website hacked checker such as Sucuri SiteCheck is the usual first test, and GoDaddy and HostPapa both name it. Both add the same limit: a free remote scanner has limited access, so a clean result does not prove the site is clean. Indusface adds signs a scanner may miss, such as hidden admin users, which attackers create to get back in after a cleanup.

| Sign | What it can mean | Source |
|---|---|---|
| Visitors sent to adult, giveaway or phishing pages | Injected script or changed `.htaccess` rules | Indusface |
| Admin users you did not create | Backdoor account to re-enter later | Indusface |
| Spam sent from your domain, or odd transactions | Mail or checkout abused | TuxCare |
| Traffic from places you do not serve | Bots probing or abusing the site | HostPapa |
| Hundreds of unknown pages in search | Spam pages generated in the background | Indusface |

Scale is not on your side: HostPapa cites a Sophos report of about 30,000 websites hacked every day, and Indusface repeats the figure without a date. I could not check the original report, so read it as a rough indication.

## Website Hacked, What to Do in the First Hour

In the first hour, stop visitors reaching the site, tell your host and secure access, in that order, because every extra hour of exposure risks more spread. Google's Search Central post, written in April 2008, says the first step is to contact your hosting provider and take the site offline. If you cannot, it says to return a `503` status code, which stops the site being crawled while it is broken.

1. **Take the site offline or switch on maintenance mode.** TuxCare and Indusface both say to do this first. Google says offline is better than blocking crawlers with `robots.txt`, because offline also stops malware reaching visitors.
2. **Call or message your host.** TuxCare notes the host can check whether other sites on the same server are hit. On shared hosting you may need them to do the technical steps.
3. **Copy everything, infected files included.** Indusface says to take a full backup for forensic review. Label it so nobody restores it by mistake.
4. **Start a log.** Write down the time you noticed, what you saw and each step. Indusface suggests logging failed logins and file changes too.
5. **Change passwords** (next section).

If nobody on your side looks after the site, this is where a care plan earns its place. [Elyx Solutions' maintenance and care service](/services/maintenance-care/) covers uptime monitoring, backups and recovery, and it does a short health check on sites it did not build.

## The 24-Hour Timeline: What to Do, in Order

A workable 24 hours is contain, preserve, secure access, repair, then verify and report, and the table below sets each window against the source that supports it. The windows are my sequencing: no source publishes a clock, so adjust them to your situation. Each action is from the cited source.

| Window | Action | Source |
|---|---|---|
| Hour 0 to 1 | Offline or `503`; contact host; copy files and database | Google; Indusface |
| Hour 1 to 3 | Change hosting, FTP, database, admin and email passwords | GoDaddy; TuxCare |
| Hour 3 to 8 | Review logs, new admin users and modified files; decide restore or clean | Google; Indusface |
| Hour 8 to 16 | Restore a clean backup or clean the site; patch everything | Indusface; GoDaddy |
| Hour 16 to 20 | Scan again; test on staging or in maintenance mode | Indusface |
| Hour 20 to 24 | Bring the site back; ask Google for a review if warned; tell customers | Google; TuxCare |

## Which Passwords to Change, and in What Order

Change the passwords that control the server first, then the ones that control the site, then the ones customers hold, and do it from a device you trust. GoDaddy says to reset all passwords, naming primary and secondary FTP, databases and apps such as WordPress or Joomla. TuxCare extends the list to the email accounts tied to the domain or hosting, third-party services connected to the site and social media profiles.

| Order | Change | Why |
|---|---|---|
| 1 | Hosting panel and domain registrar login | Whoever holds these can take the site elsewhere |
| 2 | FTP or SFTP and database | The usual routes for uploading malware |
| 3 | Site admin accounts; delete unknown ones | Indusface: hidden admins let attackers return |
| 4 | Email on the domain | Resets for every other account arrive here |
| 5 | Payment gateway and analytics logins | Money and data |
| 6 | Customer passwords, if you have accounts | TuxCare says to prompt users to reset |

My reading: if your laptop has the infection, new passwords typed into it are exposed too, so scan it first. If you cannot log in at all, the host and the registrar can verify you as the account owner, and [who owns your website](/blog/who-owns-my-website-code/) explains why accounts in your own name matter at exactly this moment.

## Restore From Backup or Clean by Hand? A Decision Rule

Restore from a backup when you have one that predates the break-in and passes a scan, and clean by hand only when you have no usable backup. GoDaddy says it is nearly impossible to remove malware reliably by hand and recommends restoring a backup you know was not corrupted, files and database both. HostPapa agrees that without a pre-hack backup the job is hard and needs software or professionals.

| Choose restore when | Choose cleanup when |
|---|---|
| A backup exists from before the first sign of trouble | No clean backup, or it is older than your last real data |
| The infection is widespread (Indusface) | Only a few files are affected and an expert can confirm it |
| You can test the restore on staging | Restoring would delete orders or enquiries you cannot recreate |

Indusface adds three checks: scan the backup before restoring it, test the restored site in maintenance mode or on staging, then apply every pending update straight away, because the backup still contains the weakness that let the attacker in.

The hidden cost of restoring is the data between the backup and today. An illustration with assumed numbers: a shop takes about 8 orders a day, the hack began 6 days ago, so 8 x 6 = 48 orders are missing from the restored database. Rebuild them from your payment gateway's settlement report and your WhatsApp order messages before you tell customers it is fixed. Google's 2008 post goes further for servers you control: a full reinstall from a trusted source is the only way to be certain, then restore a clean backup on top.

## WordPress Website Hacked: What to Do

For a WordPress site, the steps are the same, plus a few places to look that attackers favour. Indusface says to compare core files with clean copies, replace infected ones with fresh copies from the official source, and check `.htaccess`, `wp-config.php` and the database tables `wp_options` and `wp_posts` for injected code. HostPapa says most hackers attack `.htaccess`, `.php` and media files, so search those first.

On plug-ins, TuxCare says to reinstall only ones from a reputable source once the site is clean, and to keep the count low, suggesting no more than 20. That 20 is one vendor's rule of thumb, not a standard. My reading is that the number matters less than whether each plug-in is current and still needed: remove any you do not use. My research package does not include WordPress.org's own "my site was hacked" documentation, so check it for current WordPress-specific steps.

## Google Warnings After a Hack: What to Do

A Google warning does not clear by itself, so fix the site first and then ask for a review through Google's own tools. The April 2008 Google post says that if Google flags your site for serving malware it tells you in Webmaster Tools, which is the earlier name of Google Search Console. It also says to use the URL removal tool to take hacked pages out of results, and that after cleanup you request a review.

Google's post adds that it tries not to penalise good sites for what hackers do, but advises removing any links the hacker added. Indusface lists spam pages generated in the background as a sign, so check your indexed pages as well as your homepage. Because the post is almost 18 years old and the tools have been renamed and redesigned, open Search Console today and follow the current instructions on the Google page for the warning you see.

## Who to Tell: Your Host, Customers and Payment Gateway

Tell your host first, then your customers if their data or logins could be affected, and your payment gateway if checkout pages were touched. The host can often see server-level detail you cannot. TuxCare advises asking users to reset passwords, and Indusface notes that attackers target scripts on checkout pages to steal payment details.

For an Indian small business the practical channel is often WhatsApp, so keep the message short and factual. A template to adapt, which I wrote and not a legal form:

> We found a security problem on our website on [date]. We took it offline and are fixing it. If you created an account, please change your password on [site] and anywhere else you used it. We will message you here when it is back. Do not click links claiming to be from us until then.

My reading is that card details are the lower risk if checkout runs on a gateway page, since the studio's e-commerce page notes the gateway handles card details and they are never stored on your server. Whether you must notify anyone formally under Indian law is a question for a lawyer; none of my sources covers it, and Indusface's compliance section names PCI DSS, GDPR and HIPAA, not Indian rules.

## Closing the Door and Preventing a Repeat

A hack repeats unless you find and fix how the attacker got in, and the two causes GoDaddy names are weak passwords and structural problems. GoDaddy says most hacks start with a guessed password, which is its own claim and not independent data. Structural problems, such as outdated software, need testing to find, and Google's post says to check logs for failed logins, unknown accounts and modified files, and to check whether your other sites are affected.

Use this prevention checklist, drawn from Indusface's hardening list and TuxCare's advice:

- [ ] CMS, plug-ins, themes and server software are updated, with automatic updates where safe.
- [ ] Every admin account has a strong, unique password and multi-factor sign-in.
- [ ] Unused accounts and plug-ins are removed.
- [ ] Backups run automatically, are stored away from the server and have been restored once as a test.
- [ ] A web application firewall (WAF) filters malicious traffic. It is one layer, not a cure.
- [ ] A malware scan runs at least weekly and after major updates (Indusface's suggestion).
- [ ] Security headers such as Content Security Policy are set, per Indusface.
- [ ] Someone is named as responsible for all of the above.

Indusface and HostPapa sell protection and cleanup, so their emphasis on paid tools serves their business. The last box is the one most small businesses miss, and [what website maintenance costs in India](/blog/website-maintenance-charges/) explains how that work is usually priced.

## What Usually Goes Wrong in the First 24 Hours

Most first-day damage comes from skipping steps or doing them in the wrong order. These are my reading of the sources, with the fix for each.

| Mistake | Cause | Fix |
|---|---|---|
| Restoring a backup that is already infected | Backup taken after the break-in | Scan it first (Indusface); use the date before the first sign |
| New password, same backdoor | Hidden admin user or script left behind | Delete unknown admins; scan again |
| Blocking crawlers instead of going offline | Wanting to hide the problem | Offline or `503`, as Google advises |
| Trusting a clean scan | Remote scanners have limited access | Check files, logs and users as well |
| Restoring and stopping | Backup still holds the old weakness | Update everything straight after restoring |
| Deleting the evidence | Cleaning before copying | Copy first; keep logs |
| Waiting a day to call the host | Hoping it is a glitch | Call in the first hour |

## What Is Documented and What Is My Reading

The steps are documented by several sources, while the timeline, the decision rule and the ordering are my reading. Documented: offline or `503`, contact the host, change passwords, restore a clean backup, scan again, update everything. My reading: the hour windows, the password order, the WhatsApp message and the restore-versus-cleanup table. The only first-party source is Google's 2008 post, and every vendor figure is attributed to its vendor.

## What to Do Next

Right now, take a copy of the site, switch on maintenance mode, message your host and change the passwords in the table above, in that order. Tomorrow, decide restore or cleanup with the rule above and check Search Console for warnings. This week, put the prevention checklist against your own site and name an owner for each line.

If you would rather hand the ongoing part to someone, [Elyx Solutions' maintenance and care service](/services/maintenance-care/) is the page that covers monitoring, updates and backups, and engagements start from {{start}}. Every project is quoted to your requirements, in writing, after a call: [request a quote](/contact.html). See the [pricing page](/pricing/) for how quoting works.

## Sources

- [My website was hacked. What should I do?](https://www.godaddy.com/en-in/help/my-website-was-hacked-what-should-i-do-19945), GoDaddy (read 20 November 2026)
- [8 Essential Steps to Recover a Hacked Website](https://tuxcare.com/blog/website-hacked-what-to-do/), TuxCare (dated 1 January 2024, read 20 November 2026)
- [What To Do If You Think Your Website Was Hacked](https://www.hostpapa.com/blog/technology/think-website-hacked/), HostPapa (read 20 November 2026)
- [How to Fix a Hacked Website: Step-by-Step Guide](https://www.indusface.com/blog/how-to-fix-a-hacked-website/), Indusface (read 20 November 2026)
- [My site's been hacked - now what?](https://developers.google.com/search/blog/2008/04/my-sites-been-hacked-now-what), Google Search Central Blog (April 2008, read 20 November 2026)

## FAQ

### What do I do first if my website is hacked?

Take the site offline or put up a maintenance page, then contact your hosting provider. Google's Search Central post and TuxCare both put containment and the host first. Copy the infected files before you change anything.

### Can a website be hacked?

Yes, any website can be hacked, including small business sites. HostPapa cites a Sophos report of about 30,000 websites hacked every day, and Indusface repeats the figure, though I could not verify the original. Attackers use bots that scan for weak passwords and outdated software.

### How do I know if my website has been hacked?

Look for redirects, unknown admin users, spam pages, unexpected pop-ups, slow loading and browser or Google warnings. TuxCare and Indusface list these signs. A free scanner such as Sucuri SiteCheck helps, but GoDaddy notes its results are not guaranteed.

### How do I fix a hacked website?

Contain it, change passwords, then restore a clean backup or remove the malware, and update everything. GoDaddy says manual removal is nearly impossible to do reliably, so a backup is the safer route. Scan again before you bring the site back.

### What to do if my WordPress website is hacked?

Follow the same steps and check the WordPress places attackers use: `.htaccess`, `wp-config.php`, core files and the `wp_options` and `wp_posts` tables, per Indusface. Replace core files with fresh official copies and remove unused plug-ins. Update everything after a restore.

### How do I remove a Google malware warning?

Fix the site first, then request a review through Google Search Console. Google's 2008 post says to remove hacked URLs from results and request a review after cleanup. The tools have changed since then, so follow Google's current instructions.

### Should I tell my customers my website was hacked?

Tell them if their data, logins or payments could have been affected, and keep the message short and factual. TuxCare advises prompting users to reset passwords. Ask a lawyer about any formal notification duty, because my sources do not cover Indian rules.

### How do I secure a website from hackers?

Keep software updated, use unique passwords with multi-factor sign-in, remove unused accounts and plug-ins, and run tested off-server backups. Indusface also lists a web application firewall, regular scans and security headers. Name one person responsible for all of it.

### How long does it take to recover a hacked website?

It depends on the size of the site and whether a clean backup exists, and none of my sources gives a figure. A restore from a verified backup is the faster route in the vendors' advice. Treat the 24-hour timeline above as an aim, not a promise.
