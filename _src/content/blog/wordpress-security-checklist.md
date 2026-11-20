---
title: WordPress Security Checklist for Small Businesses
slug: wordpress-security-checklist
category: care
description: A WordPress security checklist for small businesses covering plugins, updates, logins, firewalls and backups, ranked by what the handbook recommends.
date: 2026-11-20
author: shreyasmv
---
A WordPress security checklist for a small business comes down to five jobs: keep core, plugins and themes updated, prune and vet plugins, protect the login, put a firewall in front of the site, and keep backups you have actually restored. WordPress's own handbook names updating as the most important step, and the other four limit the damage when an update comes late. The honest qualification is that every attack figure below comes from vendors who sell security or hosting, so I treat them as indications, not measurements.

- **Priority.** Updates, plugin pruning, logins, a firewall and tested backups come first, because the WordPress handbook and five competing checklists keep returning to them.
- **Plugins.** Plugins hold most reported flaws (90% per SentinelOne, 56% per NitroPack), so deleting unused ones is the cheapest fix.
- **Disputed extras.** Hiding the login URL, renaming the database prefix and country blocking are contested, so do them after the five.
- **Routine.** A weekly, monthly and quarterly list at the end turns the checklist into a habit.

## Why a WordPress Security Checklist Matters for a Small Business

A checklist matters because WordPress is used so widely that attackers scan for its known flaws automatically, whatever the size of the site. Liquid Web, citing W3Techs, says about 43% of websites run WordPress, while NitroPack gives a 64.2% market share. The shares differ, probably because they use different bases, though neither page says which (my reading).

Liquid Web estimates at least 13,000 WordPress sites are hacked every day, and NitroPack reports that Sucuri's 2022 annual report put 96.2% of attacks on WordPress. Both are vendor figures with no method shown in the text I read. WPScan, a WordPress security scanner, says its database holds over 39,000 WordPress vulnerabilities.

Most of those flaws are not in WordPress itself. SentinelOne says 90% of WordPress security issues sit in plugins, 6% in themes and 4% in core, while NitroPack says 56% of vulnerabilities involve plugins. SentinelOne adds that cross-site scripting, where an attacker injects a malicious script into a page other visitors load, makes up 50% of plugin vulnerabilities.

For a clinic or a shop the cost is practical, not technical. SentinelOne says Google can flag a compromised site as malicious and demote it. [Elyx's Maintenance & Care page](/services/maintenance-care/) describes the usual pattern: a plug-in goes out of date or a form stops delivering, and nobody notices until a customer says so.

## WordPress Security Checklist: What to Do First, Next and Later

Do the first tier before anything else, because those checks are named in the WordPress handbook or listed by at least four of the five guides I read. I ranked each item on those two tests, so the tiers are my reading, not a published standard. The guides are from WPScan, Wordfence, SentinelOne, Liquid Web and NitroPack, as read on 20 November 2026.

| Tier | Checks | Why it sits here |
|---|---|---|
| First | Updates, plugin pruning, 2FA, login limits, firewall, backups | Handbook names them or four guides list them |
| Next | Least-privilege users, HTTPS, SFTP, activity log, file editing off, PHP version | Cheap and sensible, but fewer sources agree |
| Later or disputed | Login URL, database prefix, version hiding, country blocking | Sources differ on value |

## Plugins: How to Vet, Update and Remove Them

Treat every plugin as code you let run on your business, and keep only those that are maintained, needed and checked. NitroPack's vetting list, shortened, is a fair test before you install or keep one:

- **Reputation.** A large install count and good reviews.
- **Update recency.** A last update no more than a few months old.
- **Support.** The developer answers questions in the plugin's support forum.
- **Compatibility.** It works with your WordPress version.
- **Permissions.** Be wary of plugins that ask for more than the job needs.
- **Known flaws.** Search WPScan for advisories, and try new plugins on a staging copy first.

WPScan says plugins from reputable sources such as the WordPress.org repository rarely cause trouble. SentinelOne warns that "nulled" plugins, which are pirated copies of paid ones, can contain malicious code. NitroPack's example of a popular plugin going wrong is a LiteSpeed Cache flaw that affected over 4 million sites and let users with contributor access inject scripts.

The cheapest fix in the whole checklist is deletion. Wordfence and Liquid Web both say to remove unused plugins and themes, not just switch them off.

Here is a worked example on a made-up clinic site, an illustration and not a client. It has 22 plugins installed and 6 are inactive, so deleting them leaves 22 - 6 = 16. Three of those 16 have not been updated by their developers in over a year, so replace or drop them, leaving 16 - 3 = 13 to keep patched. That is 9 fewer than before, or about 41% (9 / 22 = 0.41).

## Updates: Core, Themes, PHP and a Staging Copy

Install updates for WordPress core, plugins and themes promptly, because the WordPress handbook calls this the most important security step. It also asks owners to choose plugins and themes that are actively updated. WPScan says updates sit under Dashboard, then Updates, and advises testing them on a staging copy, a private duplicate of the site, because updates can cause compatibility problems.

Wordfence's checklist says to enable auto-updates where practical and to check for updates at least weekly. That checklist is a 2015 PDF, so I use it only for cadence.

PHP, the language WordPress runs on, needs updating too. WPScan says to find your version under Tools, Health, Info, Server, and that most hosts let you switch versions. NitroPack adds that you should back up before bulk updates and audit the site after.

The table is my reading, built from Wordfence's weekly cadence and WPScan's staging advice. It matches the update routine to what a broken site would cost you.

| Site type | Routine | Reason |
|---|---|---|
| Brochure site | Auto-updates on, weekly manual check | Few plugins, little custom code |
| Shop, booking or paid forms | Backup, staging test, then live update, weekly | A broken checkout loses orders |
| Heavily customised site | Developer applies and tests updates | Custom code can break silently |

## Logins: Passwords, Two-Factor Authentication and Attempt Limits

Protect the login with a long unique password, two-factor authentication for every administrator and a cap on repeated attempts. The WordPress handbook explains why: a brute force attack is an attacker repeatedly trying username and password combinations, and because the attempts are automated and often come from botnets, even failed ones can overwhelm a site.

- **Passwords.** The handbook recommends long, unique passwords and a password manager. Liquid Web says at least 16 characters and no reuse across wp-admin, database, FTP and hosting, while NitroPack says 10 or more. The sources differ, so take the longer.
- **Two-factor authentication (2FA).** This asks for a second code from an app or key. As of 2025, per the handbook, WordPress core does not ship 2FA, so add it by plugin or single sign-on for every administrator. The handbook also lists passkeys, a passwordless login, as a plugin option.
- **Attempt limits.** The handbook prefers limits at the host or edge, because a plugin runs inside PHP and uses resources during a heavy attack. Liquid Web suggests blocking a user after three failed attempts.
- **Accounts.** Do not use "admin" as a username, keep few administrators and give staff the least access their work needs (handbook, WPScan). Wordfence says to review the user list often and delete obsolete accounts.
- **XML-RPC.** This older interface, xmlrpc.php, is a frequent brute-force target. The handbook says to disable it if unused, or restrict and rate-limit it if Jetpack or an app needs it.

An activity log adds the missing view: WPScan says logs record logins, file changes and page updates, and alerts on chosen events save you reading entries daily.

## Firewalls: Host, Edge or Plugin

A web application firewall (WAF) filters requests to your site and drops those that look like attacks, such as SQL injection, where an attacker types database commands into a form (WPScan). The table compares three placements, drawn from WPScan, NitroPack, Liquid Web and the handbook as read on 20 November 2026.

| Type | Where it filters | Trade-off |
|---|---|---|
| Edge or CDN firewall | Before traffic reaches your server | Traffic routes through the provider |
| Host or server firewall | On the hosting server | Depends on your plan |
| Plugin firewall | Inside WordPress, after traffic arrives | Adds server load |

The handbook names Cloudflare, Sucuri and host-provided WAFs as edge options and says blocking before requests reach your server preserves resources during an attack. NitroPack and the handbook both note that plugin-level filtering consumes server resources. WPScan says some hosts include a server-level firewall.

My decision rule: choose the edge or host firewall first, and ask your host which one your plan includes. Choose a plugin firewall only when neither is available, and accept the extra load.

## Backups: Files, Database, Location and a Restore Test

A backup protects you only if it holds both the site files and the database, sits on a different server and has been restored at least once. WPScan says a full WordPress backup needs both and that hosting backups alone are not enough, so keep a copy elsewhere. SentinelOne and the handbook both say to test the restore, and the handbook says risk can never reach zero, so recovery must be planned.

Wordfence's checklist says to back up files and database at least weekly. The frequency decides how much you can lose, so here is the arithmetic: a weekly backup can lose almost 7 days of changes if the site fails just before the next run, and a daily backup caps the loss at 1 day. WPScan recommends real-time backups for larger sites, which save each change as it happens, so no order or form entry is lost.

Run this restore test after setting up backups and then monthly. It is my suggested routine, not a sourced method:

1. Download the latest backup, files and database.
2. Restore it to a staging copy, not the live site.
3. Open the home page, log in, send the contact form and, for a shop, place a test order.
4. Write down the date and what failed.

## Hardening Settings: What Is Worth Doing and What the Sources Dispute

Disable file editing, force HTTPS and use encrypted file transfer first; most of the rest of the common hardening list is disputed or low value. These four are the ones sources agree on:

- **File editing off.** Liquid Web's snippet adds a `DISALLOW_FILE_EDIT` line to wp-config.php, which removes the code editor from the dashboard so a stolen login cannot rewrite plugin files.
- **HTTPS.** WPScan says an SSL certificate encrypts data between your server and visitors, and many hosts set one up automatically.
- **Encrypted transfer.** Wordfence and WPScan say to use SFTP or SSH, not plain FTP.
- **File permissions.** NitroPack gives 644 for files, 755 for directories and 600 for wp-config.php. Confirm with your host before changing them.

The table lists settings that appear on competing checklists where the sources disagree on value.

| Setting | Who lists it | Counterpoint |
|---|---|---|
| Hidden login URL | WPScan, Liquid Web, NitroPack | Handbook: reduces noise, not a sole defence |
| Country blocking | Wordfence, as a plugin feature | Handbook: avoid permanent country blocklists |
| Heavy rules on wp-admin | Older guides | Handbook: unreliable, can break AJAX plugins |
| Database prefix change | WPScan, Liquid Web, NitroPack | Not in the handbook text I read |
| Version hiding | Liquid Web, NitroPack | Not in the handbook text I read |

My reading is to do these after the first tier, with a fresh backup. They reduce noise more than risk, and WPScan notes the prefix change also means renaming every existing table, which can break a live site if done wrongly.

## Spotting a Hack Early: Signs and First Steps

Catch a hack early by checking the site yourself, using alerts and treating every customer report as real. Wordfence's checklist lists the signals:

- Visit your own site often, and search for it in Google.
- Set up email alerts in Google Search Console.
- Run a malware scanner with email alerts.
- Investigate customer reports immediately.
- Watch for unexplained spikes in traffic.

In practice, a customer's WhatsApp message saying the site shows a warning or the enquiry form has gone quiet is exactly that kind of report. SentinelOne says activity logs then show who changed a file or installed a plugin.

If a hack is confirmed, my suggested order is: restore the last clean backup, change every password, remove unknown administrators, check the log for the way in, then update everything. Prevention is cheaper than cleanup, and [the website maintenance charges article](/blog/website-maintenance-charges/) reports what two vendors quote for cleanup.

## What Usually Goes Wrong With WordPress Security

Most failures trace to a handful of habits, each with an easy cause and a plain fix. The table pairs them, using the sources named in the last column.

| Mistake | Cause | Fix |
|---|---|---|
| Updates left for months | Fear of breaking the site | Staging test and a weekly slot (Wordfence) |
| Inactive plugins left installed | "Might need it later" | Delete them (Wordfence, Liquid Web) |
| Backups only on the host | The plan includes them | Also store a copy elsewhere (WPScan) |
| A backup never restored | No test step | Rehearse the restore (handbook) |
| Pirated "nulled" plugins | Saving the licence fee | Use trusted sources (SentinelOne) |
| One shared admin login | Convenience | Named accounts, least access (handbook) |
| A security plugin as the only measure | Belief that a tool finishes the job | Treat security as continuous work (handbook) |

## What to Do Next: A Weekly, Monthly and Quarterly Routine

Run the checklist as a routine: a short weekly pass, a monthly review and a quarterly clean-up. The weekly cadence for updates and backups is Wordfence's, and the monthly and quarterly steps are my suggestion.

Weekly:

- [ ] Check for core, plugin and theme updates, and apply them after a backup or staging test.
- [ ] Confirm the latest backup ran and a copy sits off the server.
- [ ] Send a test message through the contact form.

Monthly:

- [ ] Review the user list and remove leavers.
- [ ] Restore the latest backup to staging.
- [ ] Read the activity log and login alerts.

Quarterly:

- [ ] Delete inactive plugins and themes, and replace any that are no longer updated.
- [ ] Check the PHP version.
- [ ] Confirm every administrator still has 2FA.

If you would rather not own this routine, [Elyx's Maintenance & Care page](/services/maintenance-care/) lists what a care plan covers: uptime monitoring, security and dependency updates tested on a staging copy, backups with a tested restore, and monthly update hours. Engagements start from {{start}}, and a care plan is quoted to your site, so [request a quote](/contact.html) to see what yours would include. The studio also says it maintains websites it did not build, after a short health check, though its page does not name WordPress, so ask on the call whether your setup fits.

Still choosing a platform? [Wix vs WordPress vs a custom website for Indian small businesses](/blog/wix-vs-wordpress-india/) compares them, and [the website launch checklist](/blog/website-launch-checklist/) covers backup and access checks before going live.

## Sources

- [Security, Advanced Administration Handbook](https://developer.wordpress.org/advanced-administration/security), WordPress Developer Resources (read 20 November 2026)
- [Brute Force Attacks, Advanced Administration Handbook](https://developer.wordpress.org/advanced-administration/security/brute-force), WordPress Developer Resources (read 20 November 2026)
- [The Ultimate WordPress Security Checklist](https://wpscan.com/blog/wordpress-security-checklist/), WPScan (read 20 November 2026)
- [WordPress Security Checklist (PDF, 2015)](https://www.wordfence.com/wp-content/uploads/2015/12/Wordfence-How-To-Secure-Your-WordPress-Website-Checklist.pdf), Wordfence (read 20 November 2026)
- [WordPress Security Audit: Checklist & Best Practices](https://www.sentinelone.com/cybersecurity-101/cybersecurity/wordpress-security-audit/), SentinelOne (read 20 November 2026)
- [WordPress Security Checklist [18 Key Steps]](https://www.liquidweb.com/wordpress/security/), Liquid Web (read 20 November 2026)
- [2026 WordPress Security Checklist To Keep Your Site Safe](https://nitropack.io/blog/wordpress-security-checklist/), NitroPack (read 20 November 2026)

## FAQ

### What are the best WordPress security tips?

The best WordPress security tips are to update everything promptly, delete unused plugins, use unique passwords with two-factor authentication, put a firewall in front of the site and keep tested backups. The WordPress handbook calls updating the most important step. The checklist above ranks the rest.

### What is WordPress security?

WordPress security is the set of habits and settings that keep a WordPress site from being broken into, and that let you recover if it is. The handbook describes it as reducing risk and planning for recovery, covering your hosting and your own working practices as well as WordPress.

### Does WordPress offer built-in security?

WordPress has some built-in protection, such as a password strength meter and user roles, but not everything a business needs. As of 2025 the handbook says core does not include two-factor authentication.

### How often should I revisit the WordPress security checklist?

Check for updates and confirm a backup at least weekly, per Wordfence's checklist, and review users and test a restore monthly. The monthly and quarterly steps are my suggestion. The handbook describes security as continuous work, not a one-off task.

### Do I need a WordPress security plugin?

A security plugin is useful when your host offers no firewall, but it is not the whole job. WPScan, Wordfence, Liquid Web and NitroPack all recommend one, and all sell security or hosting. The handbook prefers edge or server protection.

### What is a WordPress security audit?

A WordPress security audit is a systematic examination of your site, theme and plugins to find weak points an attacker could use. SentinelOne says a good one combines a scanning tool with manual review and log files. The routine above is a small-business version.

### Is WordPress itself insecure?

WordPress core is not where most reported flaws sit, so the platform is rarely the weakest link. SentinelOne puts 4% of issues in core and 90% in plugins, while NitroPack says 56% involve plugins. Different sources, different figures, same direction: plugins dominate.

### How do I check whether my WordPress site is secure?

Start with the routine above, then run an online scanner. NitroPack names Qualys, SiteLock and VirusTotal for checking malware and known issues. A scan finds known problems only, so it does not replace a restore test.
