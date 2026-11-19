---
title: What to Cut From Your MVP, and What You Must Never Cut
slug: mvp-features-list
category: saas
description: Sort your MVP features list into must-haves and nice-to-haves, see a worked example, and keep the security and billing basics.
date: 2026-11-17
author: shreyasmv
---
An MVP features list holds only the features a first customer needs to solve their top problem, and nothing that merely makes the product feel finished. Cut anything that does not test your core assumption, such as extra roles, coupons, a mobile app or fancy dashboards. Never cut the quality basics: separate customer data, safe logins, a working payment path with a failed-payment state, and backups. The honest qualification is that the four pages I read explain how to prioritise but say almost nothing on security or billing, so those two sections are my reading, built from the studio's own SaaS scope.

- **Cut test.** A feature stays only if it serves the customer's number one problem, per Pragmatic Institute's method.
- **Worked example.** A made-up fee-collection tool goes from 18 ideas to 7 features, with the arithmetic shown.
- **Never cut.** Tenant separation, login and roles, a payment record, a failed-payment path, backups.
- **Scope creep.** A written cut line and a parking list stop it, and they cost nothing.

## What an MVP Is, and What It Is Not

A minimum viable product is the smallest version of a product that real customers can use and that teaches you the most about them. Pragmatic Institute quotes Eric Ries: the version that lets a team collect the maximum validated learning about customers with the least effort. Wikipedia says the term was coined in 2001 by Frank Robinson and popularised by Steve Blank and Eric Ries.

MVP also stands for other things, such as Microsoft's MVP award and sports honours. This article is only about the product meaning, read from pages dated to 17 November 2026.

GeeksforGeeks lists a misunderstanding worth fixing early: an MVP has fewer features but is not a low-quality product. Pragmatic Institute adds that an MVP is a product, so a landing page or a mockup is a useful test but not an MVP.

## Must-Haves vs Nice-to-Haves: Sorting Your MVP Features List

A must-have is a feature that solves the customer's top problem, and every other feature is a nice-to-have until a real customer asks for it. Salesforce suggests the MoSCoW method, which sorts features into must-have, should-have, could-have and won't-have, and says to build only the first group.

Pragmatic Institute gives a stricter six-step method, which I have shortened below.

1. Rank the customer's problems, with the top three at most.
2. Map each solution element to a problem.
3. Treat every element serving problem number one as a must-have.
4. List the features inside each element.
5. Mark each feature "In MVP" or out, and be ruthless even inside a must-have element.
6. Give each a rough effort size: small, medium or large.

Its test comes from 37signals: each feature must prove itself by solving a top customer problem. The table below turns that into questions you can ask of any feature.

| Question | Keep if the answer is | Cut if the answer is |
|---|---|---|
| Which top-three problem does it solve? | One, named | None, or "it would be nice" |
| Can the first customer do the job without it? | No | Yes, by hand or by WhatsApp |
| Is it trust, safety or payment? | Yes | No |
| Can a tool you rent do it? | No | Yes, so rent it |

The last row is my reading, not a quoted rule. GeeksforGeeks calls the rent-it route a piecemeal MVP, one that uses existing tools instead of building everything.

## An MVP Features List Example, With the Arithmetic

Here is an MVP features list example that goes from 18 ideas to 7 features, using Pragmatic Institute's steps. The product is **FeeDesk, a made-up fee-collection tool for coaching centres**. It is an illustration I invented, not a client, and the numbers are counts, not results.

The three ranked problems are: centres chase parents for fees by phone (1), nobody has a clean record of who has paid (2), and staff cannot see dues by batch (3). Every feature below serves one of them.

| Feature kept | Problem | Effort |
|---|---|---|
| Parent pays by UPI or card link | 1 | Medium |
| Payment status updates by itself | 1 and 2 | Medium |
| WhatsApp fee reminder | 1 | Small |
| Failed and pending payment states | 1 | Medium |
| Receipt for each payment | 2 | Small |
| Batch-wise dues list | 3 | Small |
| Staff login with two roles | Trust | Medium |

The cut list has 11 items: a parent mobile app, auto-debit instalments, discount coupons, multi-branch support, attendance tracking, exam results, email and SMS alongside WhatsApp, custom themes, a charts dashboard, Hindi and Kannada screens, and referral rewards.

The check: 7 kept + 11 cut = 18 ideas. 7 / 18 is about 39 percent kept, and 11 / 18 is about 61 percent cut. Effort adds up to 3 small and 4 medium, with no large item left, which is the point of the exercise.

## What to Cut From Your MVP: A Cut List With Reasons

Cut anything that adds a second user type, a second payment model or a second platform before the first one works. The table sets out common candidates, with a source where one says so and "my reading" where it does not.

| Candidate | Decision | Reason |
|---|---|---|
| Native mobile app | Cut | Web first; the SaaS cost article reports a large added cost |
| Usage billing, coupons | Cut | Metering is a small product of its own, per the cost article |
| Single sign-on, public API | Cut | Enterprise buyers ask later |
| Multi-language screens | Cut unless your buyers need it | My reading |
| Charts and analytics | Cut to a few counts | Salesforce says to focus on the core problem |
| Extra modules | One module only | The studio's SaaS page prices modules separately |

The [SaaS MVP cost article](/blog/saas-development-cost-india/) holds the sources and the cost behind the first three rows, so I do not repeat them here.

Cutting the build is different from cutting the learning. GeeksforGeeks describes a concierge MVP, where people do by hand what software would later do, and notes that Dropbox used a demo video and Buffer a landing page to test demand. Each of these tests needs far less building than a full product, and each tells you whether to build more.

## What You Must Never Cut: A Four-Question Test

Never cut a feature if removing it would make a customer lose data, lose money, lose access or lose trust. Wikipedia's criticism section makes the commercial case: products that miss the expected minimum standard of quality lose to rivals that enter with a higher one, and negative feedback on an MVP can hurt a company's reputation.

Ask four questions of any feature you are tempted to cut.

- **Data.** Could one customer see or damage another's data?
- **Money.** Could a customer pay and not get access, or get access without paying?
- **Access.** Could a customer be locked out, or a stranger let in?
- **Recovery.** If the server fails tonight, can you restore it tomorrow?

A "yes" to any of these puts the feature on the never-cut list. Those four questions are my framework; the next two sections apply them using the studio's own SaaS scope.

## Security Basics You Cannot Cut From an MVP

The security basics for an MVP are tenant separation, safe sign-in and permissions, tested backups and monitoring, because each protects the four things above. The research package holds no security standard, so this section is my reading, anchored in what the studio's [SaaS development page](/services/saas-development/) says it builds.

What is documented there: authentication, invitations, team roles and "the permission model that keeps one customer's data away from another's" are part of a SaaS build. So are monitoring, backups, separate environments and a clean deployment path, so that launch week is not the first time anyone checks a restore.

What is my reading:

- **Separate customers early.** Tenant separation is expensive to change later, which is also the studio's own warning about early data-model decisions.
- **Two roles beat none.** An owner and a staff role is enough, and many roles can wait.
- **Do a restore drill.** A backup you have never restored is a hope, not a backup.
- **Store as little as you can.** If you collect personal data, plan a privacy notice and a way to delete it, and confirm your duties under India's DPDP Act, which the studio's own pages name, with a qualified adviser.

For a standard checklist, use the OWASP Top 10 or ask your builder which one they follow. I have not read either for this article, so I cite neither.

## Billing Basics You Cannot Cut From an MVP

The billing basics for an MVP are a way to collect money, a record of who paid for what, a receipt, and a path for when payment fails. The studio's SaaS page lists plans, trials, upgrades, invoices and failed-payment handling, through a gateway that supports Indian cards and UPI, and it tests billing in test mode before launch.

An MVP needs a smaller slice of that.

| Billing item | MVP decision | Why |
|---|---|---|
| One plan, one price | Keep | You are testing willingness to pay |
| Payment record per customer | Keep | Money disputes need evidence |
| Receipt or invoice | Keep | Business buyers ask for it |
| Failed-payment state | Keep | The demo shows success, real life does not |
| Test-mode run before launch | Keep | Cheaper than a live bug |
| Coupons, metering, proration | Cut | Each adds rules to test |

The cost article reports Appwizards saying invoices need the customer's GSTIN and place of supply, and that auto-debit on cards and UPI needs extra authentication under the RBI e-mandate framework. That is a secondary source and not the RBI circular, so confirm current rules with your gateway and a chartered accountant.

Billing is also where a manual start can be the right call. If your first ten customers pay by UPI link and you update a sheet, you are running a concierge MVP, which is a legitimate test.

## How Scope Creep Kills an MVP

Scope creep kills an MVP because every added feature adds screens, bugs, support and delay before the first customer can say whether the product works. Salesforce defines feature creep as adding excessive features and advises staying on the core problem.

Pragmatic Institute names the hardest part: stakeholders each call their own idea a must-have, so the list swells before design begins. Its fix is to keep the plan on one page and keep talking to stakeholders. Wikipedia's cited reason for startup failure, lack of market need, is the cost of building the wrong list.

Four habits help, and they are my reading.

- **Write the cut line.** One page with the kept features above a line and everything else below it.
- **Keep a parking list.** An idea is never rejected, only parked until a customer asks for it.
- **Swap, do not stack.** A new feature comes in only when one of equal size goes out.
- **Change the price in writing.** Added scope changes the quote and the date, so say so before work starts.

The studio's process writes a scope and a cut line in week one, then ships working software weekly with two feedback rounds. A SaaS MVP there usually takes {{weeks:saas}}. Engagements start from {{start}}, excluding GST, and a fixed quote tailored to your requirements is confirmed in writing after a call.

## What Usually Goes Wrong With an MVP Features List

Most MVP lists fail because they are a wish list, a copy of a competitor or a record of every opinion in the room. The table gives the cause and the fix for each.

| Mistake | Cause | Fix |
|---|---|---|
| 40 "must-haves" | Everyone's idea counted | Rank three problems first |
| Copying a rival's product | Their v5 looks like your v1 | List what your first customer needs |
| Cutting trust features | They are invisible in a demo | Run the four-question test |
| Building before asking | No customer conversation | Test demand first, as Dropbox did |
| No failed-payment path | The demo shows success only | Add the state and test it |
| Treating "minimum" as sloppy | Quality mistaken for features | Cut features, not care |

The first row echoes a lesson in the Pragmatic Institute article: most internal "must-haves" are not needed at this stage.

## What to Do Next

Write your top three customer problems, list every feature idea, and mark each In or Out using the table in the sorting section. Then add the never-cut items. Copy this checklist into your brief:

- [ ] Top three customer problems, ranked.
- [ ] Every feature idea mapped to one problem, with a small, medium or large size.
- [ ] A cut line: features above it ship, features below it wait.
- [ ] Tenant separation, login and two roles planned in.
- [ ] One plan, a payment record, a receipt and a failed-payment path planned in.
- [ ] Backups with a restore you have tried.
- [ ] A written rule for how added scope changes price and date.

If you want a second opinion on the cut line, the studio's [SaaS development page](/services/saas-development/) explains how it scopes a first version. The [pricing page](/pricing/) explains how it quotes. The studio's [Malnad Stories case study](/work/malnad-stories/) shows a build where uploads, storage and secure payments were part of the brief from the start.

## Sources

- [Minimum Viable Product: How to Set Up Your MVP](https://www.salesforce.com/blog/small-business/minimum-viable-to-minimum-valuable-product/), Salesforce (read 17 November 2026)
- [Minimum Viable Product (MVP): Meaning, Examples](https://www.geeksforgeeks.org/product-management/minimum-viable-product-mvp/), GeeksforGeeks (read 17 November 2026)
- [An MVP Is Not the Smallest Collection of Features](https://www.pragmaticinstitute.com/resources/articles/product/an-mvp-is-not-the-smallest-collection-of-features/), Pragmatic Institute (read 17 November 2026)
- [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product), Wikipedia (read 17 November 2026)

## FAQ

### What are MVP features?

MVP features are the few features a first version needs so real customers can solve their top problem and give you feedback. Pragmatic Institute says each one must tie to a top customer problem, and everything else waits in the backlog.

### What is the full form of MVP?

MVP stands for minimum viable product. It is a different meaning from Microsoft's MVP award or sports MVP titles, which this article does not cover.

### How do you decide which features to include in an MVP?

Rank your customer's top three problems and keep only the features that solve problem one, plus the never-cut basics. Pragmatic Institute's six-step method and Salesforce's MoSCoW sorting both work. Both are described above.

### How many features should an MVP have?

No source sets a number, and the right count depends on the problem. Pragmatic Institute caps its canvas at the top three solution elements. My worked example above ends at seven features.

### Is an MVP the same as a prototype?

No. GeeksforGeeks says a prototype demonstrates a concept, while an MVP is a working product that delivers real value to users.

### Do I need billing in my MVP?

You need a way to collect money and a record of it, but not a full billing system. A UPI link and a tracked sheet can serve the first customers, which GeeksforGeeks would call a concierge MVP. Automate when manual work slows you down.

### Is security a must-have in an MVP?

Yes, for anything that holds customer data or takes payment. Separate customer data, safe sign-in with roles, backups and monitoring are on the studio's SaaS build list, and cutting them risks data and trust.

### What is feature creep in an MVP?

Feature creep means adding excessive features, per Salesforce, until the product no longer focuses on its core problem. A written cut line and a parking list stop it.

### How long does an MVP take, and what does it cost?

A SaaS MVP at Elyx usually takes {{weeks:saas}}, which is indicative. Engagements start from {{start}}, excluding GST, and a fixed quote tailored to your requirements is confirmed in writing after a call. The [SaaS MVP cost article](/blog/saas-development-cost-india/) compares published agency ranges.

### Can I add cut features after launch?

Yes. The cut features go to a parking list and return when customers ask, which is the point of validated learning in Pragmatic Institute's definition.
