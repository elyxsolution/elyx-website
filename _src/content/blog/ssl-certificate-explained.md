---
title: SSL Certificates Explained: Why "Not Secure" Drives Customers Away
seo_title: SSL Certificate Explained: Free vs Paid and Renewals
slug: ssl-certificate-explained
category: care
description: SSL certificate explained for business owners: what it is, free vs paid, why renewals fail, and a checklist that stops a "Not Secure" warning.
date: 2026-11-19
author: shreyasmv
---
An SSL certificate is a small file on your web server that proves your website is the one it claims to be and lets visitors' browsers encrypt everything they send you. When it is missing, expired or wrong, the browser puts a "Not secure" or "Your connection is not private" warning between the customer and your page. The honest qualification is that the five vendor pages I read assert that visitors leave, but none gives a measured figure, so the cost of a warning rests on their reasoning and mine.

- **What it is.** A certificate carries your domain name, a public key and a signature from a certificate authority the browser already trusts.
- **Free or paid.** Free certificates cover the basic level most small sites need. Paid ones add checks on the business behind the site.
- **Where it breaks.** The usual failure is a renewal nobody owned, not a hack.
- **What to do.** Find the expiry date today and put a reminder in a calendar, or have a [maintenance and care plan](/services/maintenance-care/) watch it.

## SSL Certificate Explained in Plain Words

An SSL certificate works like a passport for your website: a trusted third party vouches that the name on it is real, and the browser checks it at the door. Cloudflare describes it as a data file on the origin server holding the public key and the website owner's identity. AWS calls it a digital identity card.

SSL stands for Secure Sockets Layer. Cloudflare says SSL was replaced some time ago by Transport Layer Security (TLS), yet "SSL" stayed the common name. DigiCert says the update after SSL 3.0 was named TLS 1.0 instead of SSL 4.0, and its page, read on 20 November 2026, lists TLS 1.3 as current.

So a certificate sold as "SSL" today is a TLS certificate. HTTPS, which Cloudflare defines as HTTP with SSL/TLS, is the address prefix that results. If you only remember one thing, remember that all three words describe the same padlock.

## How an SSL Certificate Works: The Handshake in Five Steps

A certificate works through a handshake that takes a fraction of a second and happens before any page loads. DigiCert and AWS describe it the same way, and this is my condensed version.

1. **The browser asks.** It connects to your server and asks it to identify itself.
2. **The server answers.** It sends a copy of the certificate, which includes its public key.
3. **The browser checks.** It confirms the certificate was signed by a certificate authority on its trusted list, has not expired, has not been revoked and names the site being visited. DigiCert lists exactly those checks.
4. **A secret is agreed.** The browser creates a session key, encrypts it with the public key and sends it back. Only the server's private key can open it.
5. **Both sides switch to the session key.** Everything after that is encrypted with it. Cloudflare notes that a new session key is created for each session.

The certificate authority (CA) is the outside party that confirms you control the domain. DigiCert says anyone can create a certificate, but browsers trust only those from CAs on their built-in list. Cloudflare adds that self-signed certificates are therefore treated as less trustworthy.

## What "Not Secure" Does to a Visitor, and What the Evidence Does Not Show

A site without a working certificate loses the padlock and gets a warning, and the warning is where customers can leave. Cloudflare says many browsers now label plain HTTP sites "not secure". UpGuard says Chrome can replace the page with a full-screen message such as "your connection is not private", and that most visitors can still click through.

UpGuard also claims consumers are trained to leave sites without a certificate and that a missing padlock costs revenue. That is a vendor's assertion. I found no measured abandonment rate in the package, and I will not invent one.

What the sources do support is narrower and still useful. An enquiry form collects a name and a phone number, which UpGuard treats as personal information that needs encryption. A warning in front of that form asks a stranger to trust you on a page they cannot verify.

My reading for Indian small businesses: every route to your site (Google Maps listing, WhatsApp message, printed QR code, ad) ends on the same address. If the certificate fails, all of them land on the warning at once.

## SSL Certificate Types Explained: DV, OV and EV

SSL certificate types differ mainly in how much checking the authority does on you. The table brings together what UpGuard, AWS and Fortinet say, as read on 20 November 2026.

| Type | What the CA checks | Typical wait (UpGuard) | Who it suits |
|---|---|---|---|
| Domain validated (DV) | You control the domain, by email or phone (AWS) | Minutes to a few days | Blogs, brochure sites, small business sites |
| Organization validated (OV) | The domain plus a registered organization and its location (Fortinet) | Hours to days | Commercial sites that want the business name in the certificate |
| Extended validation (EV) | Documents, corporate records and a third-party cross-check (Fortinet) | Days to weeks | Banks and regulated, high-trust sites |

Certificates also differ by coverage. AWS lists three: a single-domain certificate for one name, a wildcard certificate for a domain and all its subdomains (such as `shop.` and `blog.`), and a multi-domain certificate for several different domain names.

AWS says DV certificates are suited to informational sites and not ideal for payment or health sites. Fortinet says an OV or EV may raise visitor trust. Both are vendor views, and DigiCert adds a caution: most phishing sites today also show a padlock with a DV certificate, so a padlock proves encryption, not honesty.

## Free vs Paid SSL: What the Money Buys

Free SSL covers the basics, and paid SSL adds a checked business identity. AWS describes EV as the highest level of encryption, validation and trust, while Fortinet and DigiCert frame the difference as identity checks, and I found no source that compares encryption strength directly, so ask a seller what differs. Cloudflare offers free certificates, and UpGuard says a DV certificate often comes free with hosting and names Let's Encrypt as a trusted authority. The studio's [hidden costs article](/blog/website-hidden-costs/) reports Web Cost Estimator saying Let's Encrypt issues free DV certificates and that virtually all managed hosts and site builders include one.

For paid certificates, the same article reports Project Cost Estimator pricing OV and EV at $80 to $800 a year in its 2026 guide. I found no Indian rupee price in the package, so ask any seller for the price in rupees, with GST, in writing. Here is the arithmetic on that dollar range over three years: 3 x $80 = $240 at the low end and 3 x $800 = $2,400 at the high end, against $0 for a free DV.

| Choose free DV when | Choose paid OV or EV when |
|---|---|
| The site is a brochure, blog or enquiry site | A buyer, regulator or contract asks for a verified business name |
| Card details are entered on the payment gateway's own page | The site itself handles highly sensitive data, such as health records |
| Your host renews it automatically | You want the certificate's organization name visible to visitors |

That table is my decision rule, not a sourced standard. A small shop that sends buyers to a gateway's page, as the studio's e-commerce builds do, rarely needs more than DV in my reading, but your gateway's or regulator's terms come first. Fortinet and AWS both say card-industry rules (PCI DSS) expect the web server to be secured with a certificate, so keep one valid either way.

## Why SSL Renewals Fail

SSL renewals fail because certificates expire on a fixed date and the person who set one up is often not the person watching the calendar. AWS says validity has been shortened over the years, with a maximum of 13 months on its page. Fortinet says a certificate typically runs one to two years, so the sources disagree, and the date printed inside your own certificate is the only one that counts.

UpGuard lists three causes of a connection error: no valid certificate installed, an expired one, or a known vulnerability. The first two are renewal failures. The table adds the causes the sources point to, as my reading and not measured rates.

| What goes wrong | Why it happens | Fix |
|---|---|---|
| The certificate expires | Renewal is manual and nobody owns the date | Name an owner and set reminders (see the calendar below) |
| Auto-renew silently stops | The host plan, billing card or DNS setup changed | Check the expiry date after every hosting or DNS change |
| Validation fails at renewal | DV is proved by email or phone (AWS, Fortinet), and the address belongs to a former developer | Keep the domain's registered contact current |
| Name mismatch | DigiCert says browsers check the certificate names the site visited | Cover `www` and the bare domain, and any subdomain you add |
| Chain is incomplete | DigiCert says an intermediate certificate must be installed with yours | Install the full chain the CA supplies and test it |
| Old and new hosts both live | A moved site leaves a certificate on the old host | Confirm the live host serves a valid certificate |

AWS adds that renewal must happen before expiry, because after it visitors see a warning that the site is unsecured. That is the whole failure in one sentence.

## A Renewal Calendar, Worked Through With Dates

A renewal calendar turns a hidden expiry into two dated reminders, and the arithmetic takes a minute. Take an illustrative certificate issued on 20 November 2026 with the 13-month maximum AWS cites.

1. **Expiry date.** 20 November 2026 plus 13 months is 20 December 2027.
2. **First reminder, 30 days before.** 20 December 2027 minus 30 days is 20 November 2027. Check that auto-renew is on and the validation email works.
3. **Final reminder, 7 days before.** 20 December 2027 minus 7 days is 13 December 2027. If the new certificate is not issued by then, escalate to the owner.

The example is invented to show the method, and your own expiry date replaces it. Put each reminder in a shared calendar, not one person's phone.

## How to Check Any Site's Certificate in Two Minutes

You can check a certificate from the browser address bar without any tool. Fortinet and AWS describe the same signs, and UpGuard points to a DigiCert checker for installation errors.

1. **Read the address.** Fortinet says an address beginning `https` means a certificate is present, and `http` means it is not.
2. **Look at the padlock.** A closed padlock is good. Fortinet says a red padlock, a line through the address or a warning triangle means the site is not secured.
3. **Open the certificate.** AWS says you can click the padlock and expand it to see validity. Note the expiry date and the names it covers.
4. **Test both addresses.** Try the bare domain and the `www` version, and a subdomain if you use one.
5. **Run a checker after any change.** Use a tool such as the one UpGuard links, which tests installation as well as presence.

## Does an SSL Certificate Affect Google Rankings?

An SSL certificate gives at most a small ranking boost, and I would not buy one for that reason. UpGuard says Google confirmed HTTPS as a ranking factor in 2014 and describes the boost as small. AWS says an SSL-secured site will likely rank higher than a similar one without.

Both are secondary sources, and the package held no Google statement to confirm the size. The firmer point is user-facing: a warning page is a poor first impression whatever Google does. Nobody can promise a ranking from a certificate, and this page does not.

## What Is Documented and What Is My Reading

The documented parts are the mechanics, and the interpretation is how they hurt a small business. Keeping the two apart matters because the title's promise rests on the second list.

**Documented (as read on 20 November 2026):**

- A certificate holds the domain, the issuing authority, its signature, issue and expiry dates, and a public key (AWS).
- Browsers show warnings for missing or expired certificates (UpGuard, AWS, Cloudflare).
- Free DV certificates are widely available (Cloudflare, UpGuard, Web Cost Estimator via the studio's article).

**My reading:**

- Warnings cost enquiries, but no source supplies a rate.
- Most small-business renewal failures come from ownership gaps, not technology.
- DV is enough for most brochure and enquiry sites.

## What to Do Next

Find your expiry date today, name one owner and set the two reminders from the calendar above. Then use this checklist:

- [ ] I opened my site's certificate and wrote down the expiry date.
- [ ] Both the bare domain and the `www` address load with a padlock.
- [ ] One named person owns renewal, and it is not only a former developer.
- [ ] The domain's registered email is one we read.
- [ ] I know whether the certificate is free and auto-renewing or bought and manual.
- [ ] I set a 30-day and a 7-day reminder in a shared calendar.
- [ ] The [website launch checklist](/blog/website-launch-checklist/) item on HTTPS is ticked on every new site.

If you would rather have someone watch it, the studio's [maintenance and care service](/services/maintenance-care/) lists a certificate expiring among the quiet failures a live site suffers, and sets up SSL alerts in the first week of a plan. Engagements start from {{start}}, and a care plan is quoted to your requirements, so [request a quote](/contact.html). The [website maintenance charges article](/blog/website-maintenance-charges/) explains why yearly renewals like this often sit outside a monthly fee.

## Sources

- [What is an SSL certificate? How it works](https://www.digicert.com/what-is-an-ssl-certificate), DigiCert (read 20 November 2026)
- [What Is An SSL Certificate? SSL/TLS Certificate Explained](https://aws.amazon.com/what-is/ssl-certificate/), Amazon Web Services (read 20 November 2026)
- [SSL Certificates Explained: How They Work and Why Sites Need Them](https://www.upguard.com/blog/ssl-certificate), UpGuard (read 20 November 2026)
- [How Does SSL Work? SSL Certificates and TLS](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/), Cloudflare (read 20 November 2026)
- [What is an SSL Certificate? Why is it Important?](https://www.fortinet.com/resources/cyberglossary/ssl-certificate), Fortinet (read 20 November 2026)
- [Hidden Costs of Building a Website in 2026](https://webcostestimator.com/guides/hidden-costs-of-building-a-website), Web Cost Estimator (cited through the studio's hidden costs article, not re-read here)
- [Hidden Website Costs 2026](https://projectcostestimator.com/blog/hidden-website-costs-2026), Project Cost Estimator (cited through the studio's hidden costs article, not re-read here)

## FAQ

### What is meant by an SSL certificate?

An SSL certificate is a file on your web server that holds your domain name, a public key and a signature from a trusted authority. Browsers use it to check your identity and to start an encrypted connection. Cloudflare describes it as a data file with the public key and the site owner's identity.

### How does an SSL certificate work?

It works through a handshake in which the browser checks the certificate and both sides agree a temporary session key. DigiCert and AWS describe the same steps. After that, everything sent between the visitor and your server is encrypted.

### Why do we need an SSL certificate?

You need one to encrypt what visitors send you and to avoid a browser warning. Cloudflare says many browsers label HTTP sites "not secure", and UpGuard says forms that collect personal details need protecting. DigiCert says even sites without payments need HTTPS to keep visitor activity private.

### Are free SSL certificates as good as paid ones?

Free certificates cover the basics, but they check only that you control the domain. Paid OV and EV certificates add checks on the organization, per Fortinet and AWS. Cloudflare and UpGuard both confirm that free DV certificates exist.

### How much does an SSL certificate cost in India?

The research package has no Indian rupee price, so I will not state one. A free DV certificate costs nothing, and the studio's hidden costs article reports Project Cost Estimator's $80 to $800 a year for OV and EV. Ask any seller for a written price in rupees, including GST.

### Why does my site say "Not secure" or "Your connection is not private"?

The usual causes are no valid certificate, an expired certificate or a known vulnerability, according to UpGuard. A name mismatch or a missing intermediate certificate can also trigger it, per DigiCert's list of browser checks. Check the expiry date first.

### What is the difference between SSL and TLS?

TLS is the newer version of the same protocol, and "SSL" remains the common name. DigiCert says the update after SSL 3.0 was named TLS 1.0, and its page lists TLS 1.3 as current. A certificate sold as SSL today is a TLS certificate.

### How do I check whether a website has an SSL certificate?

Look for `https` at the start of the address and a closed padlock beside it. Fortinet and AWS say you can click the padlock to see the certificate and its validity. A red padlock or a warning triangle means the site is not secured.

### Does an SSL certificate affect Google rankings?

It may give a small boost, per UpGuard, which says Google confirmed HTTPS as a ranking factor in 2014. I found no Google statement in the package to size it. Treat it as a minor benefit, not a reason to expect a better position.

### How often does an SSL certificate need renewing?

It depends on the certificate, and the sources differ. AWS gives a 13-month maximum, and Fortinet says typically one to two years. Read the expiry date inside your own certificate and set reminders from that.
