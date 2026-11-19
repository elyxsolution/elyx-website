---
title: SaaS Billing in India: Subscriptions, GST, UPI AutoPay and Razorpay vs Stripe
seo_title: Recurring Payments for SaaS in India: UPI, GST, Stripe
slug: recurring-payments-india-saas
category: saas
money: /services/payments-billing/
description: Recurring payments for India SaaS: RBI e-mandate rules, UPI AutoPay limits, failed-payment recovery, GST invoices and a dated Razorpay vs Stripe check.
date: 2026-11-16
author: shreyasmv
---
Recurring payments for an India SaaS run on an e-mandate: the customer approves the first charge with extra authentication, and the bank then sends a notice at least 24 hours before every later debit. Under the RBI's April 2026 framework, a charge above 15 thousand rupees needs fresh authentication each time, so annual plans and large upgrades cannot renew silently. The honest qualification is that this page rests on the RBI's own text, Stripe's documentation and vendor blogs, with no Razorpay documentation and no GST primary source, so those parts say what is missing.

- **The rule.** One authenticated registration, a notice at least 24 hours before each debit, and no extra authentication up to 15 thousand rupees a charge.
- **The gap.** Above that line the customer must approve again, and the sources disagree on how high a UPI mandate can go.
- **Failed payments.** Stripe tries an India-issued card once, so recovery is mostly emails and payment links, not retries.
- **Razorpay vs Stripe.** The research verifies Stripe from its own documents and Razorpay only from an older interview, so the comparison is by criteria and says where it stops.

## Recurring Payments for SaaS in India: What the RBI E-mandate Framework Requires

The RBI's "Digital Payments - E-mandate Framework, 2026" (circular RBI/DPSS/2026-27/396, dated 21 April 2026) governs every recurring charge on cards, prepaid instruments and UPI, domestic or cross-border. The table sets out its main rules as read on 17 November 2026, with my reading of each for a SaaS.

| Rule in the framework | What it says | My reading for a SaaS |
|---|---|---|
| Registration | One-time, validated with additional factor of authentication (AFA); the customer can change the validity or withdraw | Build a mandate step into sign-up and store its status |
| First charge | Needs AFA, which can be combined with registration | One approval at checkout covers both |
| Pre-debit notice | At least 24 hours before, naming merchant, amount, date, mandate reference and reason; the customer can opt out of one debit or the whole mandate | Never bill on the day access ends |
| Limit | Up to 15 thousand rupees a transaction without AFA; above that, AFA; 1 lakh rupees for insurance premiums, mutual funds and credit card bills | Software is not in the 1 lakh list |
| Customer cost | No charge to the customer for an e-mandate | Nothing to pass on |

Variable mandates are allowed, with the customer setting a maximum for any one charge. This is a business reading of a regulatory text, not legal advice, and rules change, so confirm the current wording with your gateway and a qualified adviser.

## UPI AutoPay or Card Mandate: What Each Can and Cannot Do

UPI AutoPay suits small, frequent charges from consumers and small teams, while a card mandate suits customers who pay by card, and the sources disagree on how high a UPI mandate can go. The table compares them as published, with the source named in each cell.

| Item | UPI AutoPay | Card e-mandate |
|---|---|---|
| Setup approval | UPI PIN (Stripe) | 3D Secure (Stripe) |
| Amount types | Fixed and variable (Dodo Payments) | Fixed and variable, per the RBI |
| Ceiling | Stripe: no recurring above 15 thousand rupees. Cleverbridge: up to 25 thousand, with 2FA between 15 and 25 thousand | Above 15 thousand rupees, AFA every charge (RBI, Stripe) |
| Currency | INR only (Stripe) | INR for all; 13 other currencies only for non-India Stripe accounts |
| Brands | Not applicable | Visa and Mastercard only (Stripe) |

Cleverbridge says UPI carried more than 84% of India's digital payment volume in 2025. It also says net banking is commonly used to authenticate eNACH mandates for B2B billing. My reading of the 15 versus 25 thousand gap: providers set their own ceilings, so get yours in writing.

## Choosing a Billing Model Around the 15 Thousand Rupee Line

Keep the usual charge at or below 15 thousand rupees if it must renew without the customer present, and treat anything above that as a payment the customer approves each time. The decision rule below is my framework, built from the RBI limit.

| Charge per cycle | What happens | Choose it when |
|---|---|---|
| Up to 15 thousand rupees | Auto-debit after the notice, no fresh AFA | Monthly self-serve plans |
| Above 15 thousand rupees | AFA every time, so the customer must come back | Annual plans sold to teams who pay by invoice |
| Above 25 thousand rupees | UPI one-time payment only (Cleverbridge), or an invoice | Large annual contracts |

A worked example, with a made-up plan: an annual price of 24 thousand rupees is above the line, so each renewal needs the customer to approve it. The same plan billed monthly is 24,000 / 12 = 2 thousand rupees a charge, well under it. Stripe's alternative for a mandate that cannot be created is to switch the subscription to invoice collection.

## Mandates in Practice: Setup, Pre-Debit Notice and Timing

A mandate flow has four steps, and the notice period means a renewal charge lands about a day after you request it. The steps follow Stripe's India documentation, read 17 November 2026, which labels the feature public preview.

1. **Register.** The customer authenticates with 3D Secure or a UPI PIN. Stripe supports these mandates through Subscriptions, not PaymentIntents or SetupIntents.
2. **Request the charge.** The bank sends a notice with the exact amount and options to skip the payment or cancel the mandate.
3. **Wait.** Stripe holds card charges for 26 hours and charges UPI a day after the notice.
4. **Settle or fail.** A webhook reports the result, and a mandate can turn inactive if the customer cancels or the issuer lacks support.

Without a mandate, Stripe says an off-session payment is declined. Dodo Payments' advice is to treat webhook handling as core work, because retries, dunning emails and access control all depend on it. The studio's [SaaS development service](/services/saas-development/) lists plans, trials, upgrades, invoices and failed-payment handling among what it builds, and its process tests billing in test mode before launch.

## Subscription Invoicing and GST: What the Sources Cover and What They Leave Out

A subscription invoice for an Indian customer needs their GSTIN and place of supply, per Appwizards as summarised in the studio's [SaaS cost article](/blog/saas-development-cost-india/), and software services carry 18% GST as of November 2026. CCAvenue's blog says its platform creates a GST invoice with every charge, which is a vendor claim. The research holds no GST Council or CBIC text, so registration thresholds, export treatment and input credit are not covered here: ask a chartered accountant.

One link between tax and mandates is worth working through. Take a plan priced at 1,000 rupees before tax: 1,000 x 18% = 180, so the invoice is 1,180 rupees. Stripe says that with a mandate maximum of 1,000 rupees the customer must authenticate any charge above it, so set the maximum above the tax-inclusive price, with room for upgrades.

Confirm these invoice points with your accountant:

- **Customer details.** GSTIN and place of supply on every invoice.
- **Tax rate.** The rate in force on the invoice date, shown separately.
- **Amount match.** The invoice total sits under the mandate maximum.

## Failed Payments: Why Indian Cards Need a Different Recovery Plan

Failed payments put roughly 10 to 15 percent of subscription revenue at risk according to the vendor pages read, and for India-issued cards recovery is mostly customer contact because Stripe attempts them only once. That one-attempt rule holds whatever your retry settings say, per Stripe. The figures below are all vendor claims with no method stated.

| Source | Claim |
|---|---|
| Cashfree, Chargebee | Up to 10% of revenue at risk from failed payments |
| PayU | 10 to 15% eroded by involuntary churn; dunning can recover up to 30% |
| CCAvenue | Its tools recover 30 to 40% of payments that first fail |
| Dodo Payments | Retry soft declines only; retry windows usually run 7 to 14 days |

A worked example with made-up inputs: 100 customers at 2 thousand rupees is 2 lakh rupees a month. At 10% at risk that is 20 thousand rupees, and recovering 30 to 40% brings back 6 to 8 thousand rupees. Recovery plan for India, my reading:

1. Record a customer-skipped debit separately from a failure.
2. Email your own reminder before the bank's notice.
3. On failure, send a link to re-authenticate (Stripe offers a hosted one).
4. Fall back to an invoice or UPI payment link.
5. Pause access after a stated grace period.

## Billing International Customers From an Indian SaaS

An Indian SaaS can bill overseas customers in their own currency if the gateway supports it, but currency, tax and settlement are three separate checks. Chargebee says a gateway must accept local currencies and the business must follow local tax laws and reporting. CCAvenue says it bills in 27 currencies and settles in rupees, and Cashfree says yes, using gateways with multi-currency processing and cross-border compliance.

The mandate rules also reach a foreign SaaS billing Indian customers, since the RBI text covers cross-border recurring charges and Stripe says non-India accounts are affected. Stripe says non-India accounts can create mandates in 13 currencies besides INR, while an India account is limited to INR. My reading: price Indian customers in rupees.

Elsewhere the rules differ, for example SEPA debits need at least 14 calendar days' notice before the first debit, per Dodo Payments.

An older ProductNation interview, written while GST was still to arrive, says foreign gateways cost almost double and convert currency twice. Treat that as history. The research does not answer whether billing India needs a local entity, so ask the provider.

## Razorpay vs Stripe vs Other Indian Gateways: A Dated Comparison

Judge a gateway on four criteria (mandate coverage, failed-payment tools, international reach and cost visibility), and as of 17 November 2026 this research can verify only Stripe from its own documents. Razorpay's current documentation was not read, so its cells say so.

| Criterion | Stripe (own docs) | Razorpay | Cashfree, CCAvenue, PayU (own blogs) |
|---|---|---|---|
| Mandates | Visa and Mastercard cards; UPI in INR | Not verified | Cards, UPI AutoPay and net banking claimed |
| Failed payments | One attempt on India cards; hosted re-authentication link | Not verified | Smart retry and dunning claimed |
| International | INR for all; 13 more currencies for non-India accounts | Not verified | CCAvenue: 27 currencies, INR settlement |
| Cost | Chargebee quotes 2.9% + $0.30 in dollars, no India rate given | Not verified | CCAvenue: 1.9 to 2.2% on domestic cards |

The older ProductNation piece describes Razorpay as a layer between startups and banks willing to underwrite the chargeback risk, and Razorpay's UPI AutoPay guide and international recurring documentation exist but are not used here for any fact. Choose an Indian gateway first when nearly all customers are Indian, since Stripe's limits (two card brands, one attempt, preview status) bite hardest there. Choose Stripe when you bill many countries from one account, per Chargebee's description of its reach.

Community threads mention pairing Stripe for global and an Indian gateway for INR, which is an unverified pattern.

## Gateway or Billing Software: Which Layer Do You Need

A gateway moves the money and billing software keeps the subscription state, so most SaaS teams end up needing both. Chargebee, itself a billing vendor, names three core systems: a gateway, subscription management and a billing interface, and says most businesses buy rather than build. Cashfree adds that a hosted checkout is faster to launch and holds less sensitive data, while an integrated one gives more control.

| Choose gateway-native subscriptions when | Choose separate billing software when |
|---|---|
| One currency and a few flat plans | Usage-based or hybrid pricing |
| One gateway is enough | You may run two gateways, for example INR and global |
| Your team can handle webhooks | Finance needs proration, credits and reports |

## What Usually Goes Wrong With SaaS Billing in India

Most billing failures in India come from the 15 thousand rupee line, the notice period and the mandate record. The causes come from the sources and the fixes are my reading.

| Mistake | Cause | Fix |
|---|---|---|
| Annual renewal fails | Charge above the line needs AFA | Offer monthly or an invoice |
| Charge declined at renewal | Mandate maximum below the tax-inclusive price | Set it higher |
| Old customers decline | Stripe auto-creates mandates only on subscriptions made after 1 October 2021 | Re-register them |
| Access cut on expiry day | Notice takes 24 to 26 hours | Request charges days early |
| Skips counted as churn | The customer may opt out of one debit | Track skips apart |
| Card-only checkout | Cleverbridge's survey: 35% of Indian buyers abandon without their preferred method | Offer UPI |

## What to Do Next

Start by listing every plan's charge including GST and marking the ones above 15 thousand rupees. Then ask each gateway you are weighing:

- [ ] What is your UPI AutoPay ceiling, in writing?
- [ ] Which card brands and banks support mandates?
- [ ] How many attempts do you make on India-issued cards?
- [ ] Which currencies can an India account bill, and what is settled in rupees?
- [ ] Does it issue GST-ready invoices, and who confirms the format?
- [ ] What does it cost per charge, as of today?

If you are building the product, the studio's [SaaS development page](/services/saas-development/) explains its scoping. A SaaS MVP there typically takes {{weeks:saas}}. Engagements start from {{start}}, excluding GST, and a fixed quote tailored to your requirements is confirmed in writing after a call.

For context, read the [SaaS MVP cost breakdown](/blog/saas-development-cost-india/) and the [pricing page](/pricing/), and re-check the RBI text and your gateway's documents before launch.

## Sources

- [Digital Payments - E-mandate Framework, 2026 (RBI/DPSS/2026-27/396)](https://rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=13374), Reserve Bank of India (read 17 November 2026)
- [India recurring payments](https://docs.stripe.com/india-recurring-payments), Stripe (read 17 November 2026)
- [UPI in India: How It Works for SaaS and Digital Goods](https://grow.cleverbridge.com/blog/upi-india-saas-digital-goods), Cleverbridge (read 17 November 2026)
- [Recurring Payments: The Complete Guide for SaaS Founders in 2026](https://dodopayments.com/blogs/recurring-payments-guide), Dodo Payments (read 17 November 2026)
- [Best Payment Gateway for SaaS in India (2026 Guide)](https://www.cashfree.com/blog/best-payment-gateway-for-saas/), Cashfree (read 17 November 2026)
- [What Is Recurring Billing & The Best Gateway for It in India](https://www.ccavenue.com/blogs/a-guide-to-recurring-billing-and-the-best-payment-gateway-india-has-in-2026), CCAvenue (read 17 November 2026)
- [How to Choose the Right Payment Gateway for SaaS Businesses?](https://payu.in/blog/payment-gateway-saas-businesses/), PayU (read 17 November 2026)
- [Best SaaS Payment Gateways: Your Ultimate Guide](https://www.chargebee.com/blog/whats-the-best-saas-payment-gateway/), Chargebee (read 17 November 2026)
- [Recurring Billing for SaaS. Is it available in India?](https://pn.ispirt.in/recurring-billing-for-saas-is-it-available-in-india/), ProductNation, iSPIRT (read 17 November 2026)

## FAQ

### How do recurring payments work in India for a SaaS?

The customer registers an e-mandate once with additional authentication, and the bank then sends a notice at least 24 hours before each debit. Charges up to 15 thousand rupees need no fresh authentication. The RBI framework applies to cards, prepaid instruments and UPI.

### Is OTP needed for recurring payments in India?

Not for each charge up to 15 thousand rupees, but the first charge and registration need additional authentication. Above that amount, each transaction needs it, per the RBI framework. Insurance premiums, mutual funds and credit card bills have a 1 lakh rupee limit.

### Does UPI AutoPay work for SaaS subscriptions?

Yes, Cashfree says UPI AutoPay supports recurring payments depending on the bank and the customer's setup. Stripe caps UPI recurring charges at 15 thousand rupees and Cleverbridge says 25 thousand. Ask your gateway for its limit.

### Is Razorpay or Stripe better for an Indian SaaS?

It depends on your customers, and this research can verify only Stripe's documentation. Stripe limits mandates to Visa and Mastercard cards and tries India cards once. Compare Razorpay's current documents on the same four criteria before choosing.

### Can an Indian SaaS charge international customers in dollars?

Yes, if the gateway supports it: CCAvenue says it bills in 27 currencies and settles in rupees. Stripe limits an India account to INR mandates for India-issued cards. Ask an accountant about GST treatment of overseas sales.

### Do SaaS invoices need GST?

A GST-registered SaaS issues tax invoices, and software services carry 18% GST as of November 2026. Appwizards says the invoice needs the customer's GSTIN and place of supply. Thresholds and exemptions are not covered here, so ask a chartered accountant.

### What happens when a recurring payment fails in India?

Stripe tries an India-issued card once, whatever your retry settings, so you must contact the customer. Send a re-authentication link or an invoice. A customer's skipped debit is not a failure.

### When are SaaS payments made, and how do I know the next one?

A subscription is charged on its billing date, and in India the bank must send a notice at least 24 hours before. Stripe holds card charges for 26 hours. Check that notice and your invoice for the date and amount.

### How can a customer stop a recurring payment in India?

The customer can withdraw the e-mandate at any time through the issuer, and can opt out of a single debit. Both need additional authentication, per the RBI framework. Stripe's notice offers skip and cancel options.
