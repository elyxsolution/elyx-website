---
title: How to Show Up in ChatGPT and Google's AI Answers
slug: how-to-rank-in-chatgpt
category: seo
description: How to rank in ChatGPT and Google's AI answers: what Google says, what Ahrefs data finds, what to skip (including llms.txt) and a checklist to start with.
date: 2026-11-19
author: shreyasmv
---
How to rank in ChatGPT is a slightly wrong question, because ChatGPT has no ranked list to climb: your business is named or cited in an answer, or it is not. You get there by letting OpenAI's crawler read your pages, putting a clear answer in a passage that can be lifted and being described consistently on other sites, while Google's own guidance says ordinary SEO still applies and llms.txt is not needed. The honest qualification is that OpenAI publishes little about how it picks brands, so most ChatGPT advice rests on vendor studies.

- **No positions.** ChatGPT answers vary run to run, so measure how often you are named, not where you rank.
- **Google is documented.** Google's guide for AI Overviews and AI Mode names what to do and what to ignore.
- **ChatGPT is mostly correlation.** Brand mentions, freshness and page structure show up in studies, none of them from OpenAI.
- **Start with access.** A blocked crawler or a stray noindex tag cancels every other tactic.

## Can You Rank in ChatGPT? Mentions and Citations, Not Positions

You cannot hold a fixed position in ChatGPT; you can raise the share of relevant questions where it names or cites you. Ahrefs puts it plainly: ChatGPT has no rankings in the traditional sense, and its answers differ each time. Ahrefs also cites SparkToro research that, if you ask 100 times, there is less than a 1 in 100 chance of getting the same brand list in any two responses.

Two things can happen. A **mention** is your brand named in the answer text. A **citation** is a link to your page under or inside the answer.

Is it worth the effort? As of October 2024, StudioHawk puts Google at about 130 billion visits a month against ChatGPT's 3.7 billion, so by my arithmetic (130 ÷ 3.7) Google was roughly 35 times larger. TripleDart reports ChatGPT passing 900 million weekly active users in February 2026, a different measure that cannot be compared directly.

## How to Rank in ChatGPT: What Is Documented and What Is Opinion

Only two groups of claims below are official: Google's guidance for Google, and OpenAI's crawler settings as quoted by a third party. Everything else is a study, a correlation or a practitioner's view. The table labels each claim as I read it on 20 November 2026, using the sources named in the second column.

| Claim | Source | Label |
|---|---|---|
| AI features in Google rest on core ranking systems | Google Search Central | Official, Google only |
| GPTBot and OAI-SearchBot are separate settings | OpenAI documentation, quoted by RankHound | Official, second-hand |
| No ChatGPT-specific schema or submission exists | RankHound | Practitioner view |
| 87% of SearchGPT citations match Bing's top 10 | TripleDart, citing Seer Interactive | Study, second-hand |
| 44.2% of citations come from the first 30% of a page | Ahrefs, citing Kevin Indig, 1.2 million citations | Study |
| YouTube and web brand mentions track ChatGPT visibility | Ahrefs, 75,000 brands | Correlation, vendor study |
| Citations favour content 25.7% fresher | Ahrefs, 17 million citations, 7 platforms | Study |
| Visible in 4 hours, or 48 hours to 3 days | StudioHawk | Unverified |
| Monthly refreshes triple citations | TripleDart, no method shown | Unverified |

Several rows come from companies that sell AI-visibility services or tools. That does not make them wrong, but a vendor study is evidence of a pattern, not proof that a tactic causes it.

## What Google Says About Showing Up in AI Overviews and AI Mode

Google says its generative AI features are rooted in its core Search ranking and quality systems, so the best practices for SEO still apply. Its guide for site owners describes two techniques: retrieval-augmented generation, which pulls relevant pages from the Search index to ground an answer, and query fan-out, where the model runs several related searches at once.

For eligibility, the guide says a page must be indexed and eligible to show in Search with a snippet. It also mentions a Search Console setting for inclusion in generative AI features, so check what your own property shows. This guide covers Google only, and [Elyx Solutions' SEO optimization service](/services/seo-optimization/) takes the same view of it: strong pages with first-hand content help in both.

On content, Google asks for a unique point of view and non-commodity content. Its example of commodity content is "7 Tips for First-Time Homebuyers", which is based on common knowledge and adds little. It says a first-hand account gives something a summary of existing pages cannot.

For local and shopping, the guide says Google Business Profiles and Merchant Center feeds can help products and services appear in AI responses. For measurement, it points to the Generative AI performance report in Search Console.

## llms.txt and Other Myths Google Says You Can Skip

Google says you do not need llms.txt, AI text files, special markup or Markdown copies of pages to appear in Google Search, because Google Search does not use them. The same guide lists four more things to ignore:

- **Chunking.** There is no need to cut pages into tiny pieces, and the guide says there is no ideal page length.
- **Rewriting for AI.** Google's systems understand synonyms, so you need not chase every long-tail phrase.
- **Inauthentic mentions.** Seeking mentions across the web is less helpful than it looks.
- **Overfocusing on structured data.** It is not required for AI features, and no special schema.org markup exists for them.

Google's statement covers Google. For ChatGPT, RankHound says there is no ChatGPT-specific markup, no submission form and no ranking API, and that robots.txt is the only control OpenAI gives. That is a practitioner reading, not an OpenAI statement, so treat "llms.txt does nothing for ChatGPT" as unproven rather than disproven.

My reading: an llms.txt file costs little to add but has no documented payoff anywhere in this research, so it should never come before the access and content work below.

Also note the conflict. TripleDart says FAQ schema "performs exceptionally well" in ChatGPT answers and calls structured headings the strongest extractability signal. Google says structured data is not required for its AI features. Neither claim is backed by a published method I could check.

## Can ChatGPT Reach Your Site? Check Crawlers and Bing First

ChatGPT can cite you only if its crawlers are allowed to fetch your pages, and the common failure is a blanket block nobody remembers adding. RankHound, quoting OpenAI's documentation, says OpenAI runs separate crawlers with separate jobs.

| Crawler | What it decides | If you block it |
|---|---|---|
| GPTBot | Whether content may be used to train models | Not shown to affect ChatGPT search answers |
| OAI-SearchBot | Whether you can appear in ChatGPT search answers | Not shown in answers, may still appear as a link |

Work through these checks in order:

1. Open your robots.txt and look for a rule that blocks everything for all crawlers, or one naming OAI-SearchBot.
2. Ask whoever built the site whether a staging setting or a copied "block all AI bots" snippet reached the live site.
3. Check any bot protection in front of the site. RankHound says an edge rule can block OpenAI's crawlers even when robots.txt looks fine, so look for OAI-SearchBot in server logs.
4. Wait about 24 hours after a change. RankHound says that is how long OpenAI asks for.
5. Check Bing. TripleDart says ChatGPT's live search leans on Bing's index and recommends submitting your sitemap in Bing Webmaster Tools. Treat that as a practitioner claim.

A staging block that survives launch is a known failure, and the [website launch checklist](/blog/website-launch-checklist/) has an item for it.

## Write Passages an Answer Can Lift: Position, Numbers, Plain Names

A passage gets lifted when it answers one question in plain words, names the thing you sell, and keeps the figure next to its evidence. RankHound says retrieval works on passages, not pages, so an answer scattered across a table, two subheadings and a footnote has no single piece that stands alone.

Position also seems to matter. Ahrefs, citing Kevin Indig's analysis of 1.2 million citations, reports 44.2% from the first 30% of a page, 31.1% from the middle and 24.7% from the final third. My arithmetic: 44.2 ÷ 30 is about 1.5 points per percent of page for the top, 31.1 ÷ 40 is about 0.8 for the middle and 24.7 ÷ 30 is about 0.8 for the end. So the top of the page earns roughly twice the citations per unit of text.

The example below is invented to show the pattern, not a test result.

| Version | Text (Lakshya IELTS Academy, fictional) |
|---|---|
| Vague | We offer flexible batches designed around every learner |
| Liftable | Lakshya IELTS Academy in Mysuru runs a weekend IELTS batch: Saturday and Sunday, 9 am to 12 pm, 20 seats, starting 6 January 2027 |

The second version names the category, the place, the schedule and the limit in one passage. Google's guide agrees on the human side: write for readers, not only for AI. Building an answer-first page is covered in [website copywriting for owners who are not writers](/blog/website-copywriting-tips/).

## Brand Mentions, Reviews and Reddit: What Studies Say and Where They Split

Studies link ChatGPT visibility to how often other sites mention you, but they disagree on which sites count and on whether chasing mentions is wise. Ahrefs analysed 75,000 brands and found YouTube mentions had the strongest correlation, with branded web mentions next. It also calls Reddit ChatGPT's most-cited domain across its analysis.

Neil Patel's team reports asking more than 100 random questions and having an analyst test 82 factors. Six correlated strongly: brand mentions, reviews, relevance, age, recommendations and authority. He also reports that 27.41% of the responses were off, such as recommending software companies as agencies.

TechUnit says the model summarises what the web says about a category, so a brand absent from that conversation is absent from the answer. RankHound adds that the most-cited domains tend to be review sites, comparison posts and forum threads, not vendors, and that one accurate description on a page ChatGPT already cites can beat ten new posts on your own blog.

Google adds a caution: seeking inauthentic mentions is not as helpful as it seems. Ahrefs also warns that forced listicle placements and promotional Reddit posts backfire. My reading: earn mentions by being the business people actually recommend, and fix wrong descriptions where they appear.

## ChatGPT Rank Tracking: Tools or a Spreadsheet?

You can track ChatGPT visibility with a paid tool or by running the same prompts yourself, but neither gives a ranking, only a rate. Tools exist, including RankHound's tracking and Ahrefs' Brand Radar, both named in the research. This research holds no verified pricing or comparison of ChatGPT rank tracking software, so I do not rank them.

A spreadsheet method, built from RankHound, TechUnit and Neil Patel's advice:

1. Write 10 to 20 prompts the way a customer would type them, with and without your brand name.
2. Run each on a fixed schedule and save the full answer, including any cited links.
3. Mark whether you were named, cited, or described wrongly, and who else appeared.
4. Report a count, not only a percentage. Named in 12 of 30 checks is 12 ÷ 30 = 40%, but RankHound shows the fraction below five checks, because 2 of 4 is not 50% in any useful sense.
5. Wait two weeks before reading a trend, and a day after any robots.txt change.

To count visits, StudioHawk suggests a GA4 filter on the Traffic acquisition report: session default channel group matching Referral, and session source matching the regex chatgpt|openai. Google's Analytics Help says to use the same lowercase naming for utm_source, utm_medium and utm_campaign on any links you tag yourself. For Google, use the Search Console report named above.

## What to Do First, by Type of Business

The right first move depends on where your customers look and what you sell, and the same few steps come first for almost everyone. This is my reading of the sources, not a tested method.

| Choose this first | When | Why |
|---|---|---|
| Fix access and indexing | Any site | Blocked or unindexed pages cannot be cited |
| Google Business Profile | Clinic, salon, coaching centre, local shop | Google says profiles help local visibility in AI responses |
| Merchant Center feed | You sell products online | Google names it for product visibility in AI responses |
| Review and comparison pages | B2B or software | TripleDart and RankHound say these sources shape answers |
| First-hand pages | Service business with real prices, timelines or results | Google asks for non-commodity content |

The research holds no data on ChatGPT behaviour in Hindi, Kannada or other Indian languages. Run your tracking prompts in the languages your customers use, and keep the page in the language you serve.

## What Usually Goes Wrong

Most failures come from fixing the wrong layer, and each has a cause and a fix you can check.

- **A hidden block.** Cause: a staging rule, a copied bot-blocking snippet or an edge setting. Fix: the access checks above, then wait 24 hours.
- **The answer is buried.** Cause: the key fact sits low on the page or in a footnote. Fix: put a self-contained answer near the top.
- **Wrong description elsewhere.** Cause: a stale review or comparison page that ChatGPT already uses. Fix: correct the listing there, as RankHound advises.
- **A page for every phrase.** Cause: chasing query variations. Fix: Google's guide says doing this to manipulate AI responses breaks its scaled content abuse policy.
- **A single screenshot as proof.** Cause: answers change each run. Fix: use the counted method above.
- **A promised timeline.** Cause: sellers quote hours or days. Fix: RankHound says nobody knows how long it takes; plan for weeks on fixes and months on how the model describes you.

## A Checklist and What to Do Next

Start with access, then the page, then the wider web, and measure each step with counts. If your site is thin on pages that carry first-hand facts, that is the gap to close first.

- [ ] robots.txt does not block OAI-SearchBot or all crawlers
- [ ] No leftover noindex tag, and key pages show as indexed in Search Console
- [ ] Sitemap submitted in Bing Webmaster Tools, as TripleDart advises
- [ ] Each key page opens with a self-contained answer and a dated fact
- [ ] Google Business Profile complete, if you serve a local area
- [ ] Wrong or stale descriptions of you on third-party pages listed for correction
- [ ] 10 to 20 prompts logged and rerun on a fixed schedule

If you would like the audit done for you, [Elyx Solutions' SEO optimization service](/services/seo-optimization/) starts with a technical and local audit. Engagements start from {{start}}, and you can [request a quote](/contact.html) scoped to your site. Nobody can promise a place in ChatGPT, and we do not.

If your site needs more than a fix, the [signs your website needs a redesign](/blog/when-to-redesign-a-website/) are a useful test before you commission anything.

## Sources

- [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), Google Search Central (read 20 November 2026)
- [Search Engine Optimization (SEO) Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), Google Search Central (read 20 November 2026)
- [How to Rank on ChatGPT: What Actually Works (Based on Data)](https://ahrefs.com/blog/how-to-rank-on-chatgpt/), Ahrefs (read 20 November 2026)
- [How to rank in ChatGPT answers](https://rankhound.ai/blog/how-to-rank-in-chatgpt), RankHound (read 20 November 2026)
- [How to Rank on ChatGPT and Improve AI Visibility](https://www.tripledart.com/blog/how-to-rank-on-chatgpt), TripleDart (read 20 November 2026)
- [SEO for ChatGPT: How to Rank Your Website in the LLM](https://neilpatel.com/blog/how-to-rank-your-website-on-chatgpt/), Neil Patel, NP Digital (read 20 November 2026)
- [How to Rank Your Website on ChatGPT](https://studiohawk.com.au/blog/how-to-rank-in-chatgpt/), StudioHawk (read 20 November 2026)
- [How to Rank on ChatGPT: Get Into the Answer](https://techunit.io/blog/how-to-rank-on-chatgpt), TechUnit (read 20 November 2026)
- [URL builders: Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952?hl=en), Google Analytics Help (read 20 November 2026)

## FAQ

### How do I rank in ChatGPT?

You cannot rank in ChatGPT the way you rank in Google, but you can raise how often it names or cites you. Allow OpenAI's search crawler, put clear answers near the top of key pages, and keep your business described accurately across the web. Measure the result as a count over repeated checks.

### Can I rank number one in ChatGPT?

No, because ChatGPT does not publish a ranked list. Ahrefs says its answers are probabilistic, and cites SparkToro research that two responses to the same question almost never give the same brand list.

### Does llms.txt help me show up in AI answers?

Not in Google, which says it does not use llms.txt or other special AI files. For ChatGPT there is no documented benefit in the sources I read, so treat it as unproven and low priority.

### Should I block GPTBot?

Blocking GPTBot is a training choice, and RankHound, quoting OpenAI, says it is separate from appearing in ChatGPT search. Blocking OAI-SearchBot is what removes you from search answers. Check your robots.txt for either rule.

### How do I track my ChatGPT rankings over time?

Run the same set of prompts on a fixed schedule, save every answer, and report how many times you were named out of the total. Neil Patel suggests manual prompts, and tools such as RankHound and Ahrefs' Brand Radar automate it. Give any trend at least two weeks.

### How long does it take to show up in ChatGPT?

Nobody can say reliably. StudioHawk reports citations within 4 hours to 3 days, but RankHound says anyone quoting a number is guessing and expects months for changes to how the model describes you.

### Is SEO still relevant for AI search?

Yes for Google, which says its generative AI features are rooted in its core ranking and quality systems. For ChatGPT, TripleDart and StudioHawk both say good SEO fundamentals and Bing visibility matter, though that is practitioner opinion.

### Do I need schema markup for AI answers?

No for Google, which says structured data is not required for its AI features and that no special markup exists. It remains useful for rich results. TripleDart claims FAQ schema helps ChatGPT, but shows no method.

### Where do I see ChatGPT traffic in GA4?

Open Reports, then Acquisition, then Traffic acquisition, and filter session default channel group to Referral and session source to the regex chatgpt|openai. This is StudioHawk's method. Older traffic may be tagged openai and newer traffic chatgpt.
