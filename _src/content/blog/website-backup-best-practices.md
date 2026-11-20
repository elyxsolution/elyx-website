---
title: Website Backups: How Often, Where, and How to Test a Restore
seo_title: Website Backup Best Practices: Schedule, Off-Site, Restore
slug: website-backup-best-practices
category: care
description: Website backup best practices for a small business: how often to back up, where to keep off-site copies, and a restore drill with a checklist and log.
date: 2026-11-19
author: shreyasmv
---
Website backup best practices come down to three decisions: back up as often as the gap in work you could bear to lose, keep at least one copy away from your host, and restore a backup onto a test copy on a schedule to prove it works. For most small business sites a daily backup is the floor, and the database should be copied more often if you take orders or bookings. The qualification is that every source I read is a hosting or agency blog, not a standards body, so the schedules below are practitioner consensus rather than a rule.

- **Schedule.** Weekly for a brochure site, daily for a blog, every 6 to 12 hours for a store.
- **Off-site.** Your host's copy is one copy. Keep two more, one out of your host's reach.
- **Restore drills.** Four of the five pages I read say to test a restore, but none goes beyond a short list. The drill below does.

## What a Website Backup Must Contain

A complete website backup holds the files, the database and the configuration, and a copy of only one of them is not a backup. RiverLee's table rates the database (posts, users, orders, settings) as critical, source files as important, server configuration as high priority and media files as medium. Blog Marketing Academy lists the partial backup as a common mistake, because a database without the files cannot rebuild the site.

## How Often to Back Up a Website, by Type of Site

Back up at a gap no longer than the work you could afford to lose. RiverLee puts it as a limit: if losing a day is acceptable, daily is enough, and if not, shorten the gap. The table gives its three site types as read on 20 November 2026.

| Site type | Database | Files | Full backup |
|---|---|---|---|
| Brochure or landing page, rare changes | Weekly | When updated | Monthly |
| Blog or news, frequent posts | Daily | Weekly | Weekly |
| Store or bookings, orders every day | Every 6 to 12 hours | Daily | Daily |

RiverLee's text lost the labels over its three lists, so I matched them to its three headings in order. Blog Marketing Academy agrees on the store row: with several orders a day it suggests hourly or 12-hourly backups, and calls a daily host backup the absolute minimum. It says real-time backup is rarely needed, and that very busy sites should buy it from a remote service.

Add one rule to every row: take a manual backup before any update or big change, as RiverLee and NameSilo both advise. If you would rather not own the schedule, Elyx's [maintenance and care plans](/services/maintenance-care/) cover regular backups stored away from the server and a restore process that has actually been tested.

### Worked example: what each backup gap costs in lost orders

The worst case for any schedule is the gap between backups multiplied by how fast work arrives. The numbers are made up: Kaveri Handlooms is a fictional online store in Mysuru taking 24 orders a day, assumed even, so 24 orders ÷ 24 hours = 1 order an hour.

| Gap between backups | Hours | Worst-case orders lost |
|---|---|---|
| Daily | 24 | 24 × 1 = 24 |
| Every 12 hours | 12 | 12 × 1 = 12 |
| Every 6 hours | 6 | 6 × 1 = 6 |
| Hourly | 1 | 1 × 1 = 1 |

The worst case is a failure just before the next backup, and real shops peak, so treat this as the method, not a forecast. My reading is that the payment gateway keeps its own payment record, so lost orders could be rebuilt from it, but only by hand.

## Full, Incremental or Differential Backups

A full backup copies everything, an incremental copies what changed since the last backup of any kind, and a differential copies what changed since the last full one. FastComet's comparison, as read on 20 November 2026, is below.

| Type | Space used | Restore |
|---|---|---|
| Full | Most | Simplest: one set holds everything |
| Incremental | Least | May need several restore points |
| Differential | In between | The last full plus one differential |

NameSilo suggests a weekly full backup with daily incrementals, and warns that real-time mirroring copies mistakes and corrupted files as faithfully as good ones. FastComet says a small portfolio can use full backups every time, and a large store should probably use incremental or differential. It partners with the incremental tool it recommends, so weigh that.

Blog Marketing Academy gives the caution most owners miss: incremental backups can usually be restored only through the system that made them. So the copy you keep for emergencies should be a full, portable one: compressed files plus an SQL export you can import into an empty database.

## Website Backup Best Practices for Off-Site Copies: The 3-2-1 Rule

Keep three copies on two kinds of storage, with one away from your host: the 3-2-1 rule that RiverLee, NameSilo and Blog Marketing Academy all give. For a website, copy one is the host's own backup, copy two is a scheduled copy sent to cloud storage such as Google Drive or Dropbox, and copy three sits on an office drive or your own computer. RiverLee's comparison of places is below, as read on 20 November 2026.

| Location | Strength | Weakness |
|---|---|---|
| Same hosting server | Fastest to restore | Lost with the server |
| Cloud storage (Drive, Dropbox) | Reachable anywhere, low cost | Storage limits, needs internet |
| Amazon S3 or Google Cloud | Very high durability | Storage and bandwidth charges |
| External drive or NAS | Offline, safe from ransomware | Fire, theft, damage |

NameSilo and RiverLee extend the rule to 3-2-1-1-0: one more copy that is offline or cannot be changed, and zero errors when you test a restore. The zero is what the drill below produces.

### Online backup best practices for a business site

Online backup is only as safe as the login that protects it. NameSilo says to encrypt backups, use different logins from the live site and limit who can change or delete them.

Why not rely on the host alone? Blog Marketing Academy says attackers have sometimes corrupted host backups, many hosts let you see backups but not download them, and a host's panel can itself be down. It cites a 2023 ransomware attack that destroyed every site and backup at a host called CloudNordic, which I have not verified. To restore on a new host you also need the registrar and hosting logins in your own name, as [who owns your website, domain and code](/blog/who-owns-my-website-code/) explains.

## Host Backup, Plugin or Remote Service: How to Choose

Choose by who can still reach the backup when the site is broken: a host copy and a plugin both live inside the thing that failed, and a remote service does not. RiverLee's table is below, with prices in US dollars as read on 20 November 2026; the reliability ratings are its own judgement, not a test.

| Method | Cost | RiverLee's reliability | Best for |
|---|---|---|---|
| Host backup (cPanel) | Free, included | Medium | Any site |
| WordPress plugin | Free to $100 a year | High | WordPress |
| Manual (FTP and SQL) | Free | High if done right | Technical users |
| Script and cron job | Free | High | VPS |
| Backup service | $5 to $50 a month | Very high | Businesses |

The sources disagree on plugins. FastComet says not to add third-party plugins on top of its off-site backups, because they use space, slow the site and can break it. Blog Marketing Academy says to run a plugin or remote service alongside the host, and prices one service at $99 a year. Both sell something: FastComet hosting, Blog Marketing Academy managed site care.

My reading is that they answer different cases. FastComet's objection fits plugins that store copies on the same account, and Blog Marketing Academy's fits hosts that keep copies only on their own servers. If your host already gives you a downloadable off-site copy, you may not need a plugin.

### Online server backup best practices on a VPS

On a virtual private server nobody backs up your site unless you set it up. FastComet says its built-in VPS backups are not off-site and use the server's own space, so send copies to cloud storage instead, as RiverLee's scheduled script does.

### Five questions to ask your host

Hostagle and Blog Marketing Academy both say to question your host.

1. Where are my backups stored, and is any copy off the server?
2. How often do they run, and how many days are kept?
3. Can I download a backup myself?
4. Can I restore without a support ticket, and how fast?
5. Who answers if the control panel is down?

## How Long to Keep Backups, and What Storage Costs

Keep 7 daily, 4 weekly and 12 monthly backups: RiverLee's 7-4-12 policy, which is 7 + 4 + 12 = 23 restore points. NameSilo gives longer ranges: daily copies for 30 to 90 days, weekly for 3 to 6 months and monthly for 1 to 7 years depending on rules you must follow. Older copies matter for the hacked-site case below, where you need a copy from before the infection.

Storage is cheap at this scale. In a hypothetical 5 GB site, 23 full backups need 5 × 23 = 115 GB. The rates are RiverLee's, in dollars, as read on 20 November 2026, and I have not checked them at the providers.

| Option | Rate quoted | Cost for 115 GB |
|---|---|---|
| Amazon S3 Standard | About $0.023 per GB a month | 115 × 0.023 = $2.645 a month |
| Backblaze B2 | About $0.006 per GB a month | 115 × 0.006 = $0.69 a month |

RiverLee says 7-Zip compression cuts size by 50 to 70 percent, so 115 GB becomes 57.5 GB at 50 percent (115 × 0.5) or 34.5 GB at 70 percent (115 × 0.3). Check each provider's price page before you commit.

## Restore Drills: How to Test a Website Backup Restore

A restore drill is a scheduled rehearsal in which you rebuild the site from an off-site backup on a test copy and time it, and it is the only way to know a backup works. NameSilo says nearly 40 percent of organisations discover backup failures only when they try to restore in an emergency. It names no study, so read that as a warning, not a measurement.

RiverLee says to restore a random backup to staging monthly, and NameSilo says to test at least quarterly. My rule between them is monthly for a store or booking site and quarterly for a brochure site. The ladder is my arrangement of their advice, and no source gives a frequency for the yearly rehearsal.

| Drill | What you do | How often |
|---|---|---|
| Spot check | Open the newest off-site copy, confirm date, size, files and database export | Monthly |
| Full restore | Rebuild on a test copy and run the checklist | Monthly or quarterly |
| Server-loss rehearsal | Rebuild from the off-site copy on a fresh host | Yearly |

### The drill, step by step

1. **Pick an older backup** from the off-site location, not the newest and not the host's panel. RiverLee says to choose one at random.
2. **Restore it to a test copy,** never the live site. RiverLee lists a staging subdomain, a local copy or a staging plugin.
3. **Switch off anything that touches real people.** My addition: block outgoing email, use the gateway's test keys and hide the copy from Google.
4. **Run the checklist** below.
5. **Time it from start to a working site.** That is your real restore time, which RiverLee calls the recovery time objective.
6. **Log it and fix what failed.** NameSilo and Hostagle both say to write down the steps and timings.

### The checklist

- [ ] Home page and three inner pages load, with images.
- [ ] Admin login works with a current password.
- [ ] The newest order, booking, enquiry or post made before the backup is present.
- [ ] The contact form delivers a test enquiry to a test inbox.
- [ ] Checkout completes in the gateway's test mode, not live.
- [ ] The copy sends nothing to real customers and is hidden from Google.
- [ ] The log holds the backup's date and location, start and finish times, the result and who fixes any failure.

## When Disaster Strikes: Four Restores You May Need

Most restores follow a bad update, not a server disaster. RiverLee puts data loss at 43 percent from update errors or plugin conflicts, 29 percent from attacks, 18 percent from host failures and 10 percent from administrator mistakes. It credits Google and cPanel data without a link, so treat it as a rough picture.

| Scenario | First move | Backup used |
|---|---|---|
| Broken update or plugin | Rename the faulty plugin folder over FTP; if that fails, restore files | Latest backup |
| Hacked site | Scan and remove the code; if severe, restore | Copy from before the infection |
| Host down or lost | Buy new hosting, upload the cloud copy, point DNS | Off-site copy |
| Deleted content or table | Restore the database | Latest database backup |

RiverLee says DNS propagation after a host move can take 6 to 48 hours, so a lost host is the slowest of the four. The table is its advice, not a tested procedure.

## What Usually Goes Wrong With Website Backups

Most backup failures are quiet: the backup ran, but it was incomplete, in the wrong place or never tried. The table collects the mistakes Blog Marketing Academy and RiverLee name, with cause and fix.

| Mistake | Cause | Fix |
|---|---|---|
| Trusting the host alone | One copy, one place, maybe no download | Add a copy elsewhere |
| Database or files only | A partial backup | Back up both, plus configuration |
| Backups on the same server | A server failure takes both | Send one copy off-site |
| Never restoring | A corrupt file found too late | Run the drill |
| No backup before updates | Updates are the commonest cause of loss | Take a manual copy first |

## What Is Documented and What Is My Reading

Most of the five pages agree on automatic backups, an off-site copy and tested restores; the rest of this page is sorted by how well it is supported.

- **Documented, as read on 20 November 2026:** the schedule, location and cost tables, the 7-4-12 policy and the storage rates are RiverLee's. Three sources give 3-2-1.
- **Not established:** no standards body or provider documentation was among the sources, the 40, 43, 29, 18 and 10 percent figures name no study, and two sources sell hosting or site care.
- **My reading:** the table labels, the drill ladder, the monthly or quarterly rule, the yearly rehearsal and the made-up Kaveri Handlooms and 5 GB examples.

## What to Do Next

Spend an hour this week: find out what your host keeps, add one off-site copy and run your first drill.

1. Find where your backups are stored and whether you can download one.
2. Set up a scheduled off-site copy of the files and the database.
3. Run the drill above, write the time in the log and book the next one.

The [website launch checklist](/blog/website-launch-checklist/) lists backups with a tested restore as a go-live check, and [what website maintenance costs in India](/blog/website-maintenance-charges/) explains what a monthly fee for backups should buy. If you would rather hand all of this over, Elyx's [maintenance and care service](/services/maintenance-care/) covers it. Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call, so [request a quote](/contact.html).

## Sources

- [Best Practices for Website Backups](https://www.fastcomet.com/blog/best-practices-for-website-backups), FastComet
- [Website Backup Best Practices: What the Experts Aren't Telling You](https://www.namesilo.com/blog/en/websites-hosting/website-backup-best-practices-what-the-experts-arent-telling-you), NameSilo
- [Best Practices for Website Backup and Disaster Recovery with Hosting](https://www.hostagle.com/best-practices-for-website-backup-and-disaster-recovery-with-hosting/), Hostagle
- [Website Backup Best Practices: The Complete Guide for 2026](https://riverlee.vn/en/blog/website-backup-best-practices), RiverLee
- [Website Backup Strategy: The Best Ways To Stay Out Of Trouble](https://www.blogmarketingacademy.com/website-backup-strategy-behind-scenes/), Blog Marketing Academy

## FAQ

### How do I back up a website?

Copy the files and the database, store the copy somewhere other than your host, and note the date. On most hosting that means the control panel's backup tool, which RiverLee names as cPanel's Backup Wizard, or a backup plugin on WordPress. Then restore it once to prove it worked.

### How often should I back up my website?

Back up as often as the gap you could afford to lose: weekly for a site that rarely changes, daily for a blog and every 6 to 12 hours for a store, per RiverLee. Take an extra manual backup before any update.

### Is my host's daily backup enough?

No, because it is one copy in one place. Blog Marketing Academy calls a daily host backup the minimum and warns that some hosts do not let you download it, so add a copy elsewhere.

### How many backup copies should I keep?

Keep the live site plus at least two backups on two kinds of storage, with one off-site. As restore points, RiverLee suggests 7 daily, 4 weekly and 12 monthly, which is 7 + 4 + 12 = 23.

### How long does a website backup take?

For a small site, minutes. RiverLee estimates 10 to 30 minutes for a full plugin backup, 5 to 20 for cPanel and hours for a manual FTP download above 5 GB.

### Does a website backup include email?

Often a hosting backup does and a WordPress plugin backup usually does not, according to RiverLee. If your mail runs on Google Workspace, it is stored in Google's cloud and needs no separate website backup.

### How much backup storage does a basic website need?

About the site's size multiplied by the copies you keep, less compression. A 5 GB site with 23 copies is 5 × 23 = 115 GB, or 34.5 to 57.5 GB if RiverLee's 50 to 70 percent compression holds.

### Should I use real-time backup?

Only for the busiest, most critical sites. Blog Marketing Academy says real-time backup is usually unnecessary, and RiverLee says it suits stores and transaction sites at higher cost.

### How often should I test a restore?

Monthly for a store or booking site and quarterly for a brochure site, a rule between RiverLee's monthly advice and NameSilo's at-least-quarterly. Also test after you change host or backup tool.
