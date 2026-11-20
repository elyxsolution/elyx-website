---
title: Vibe Coding Explained: Building Apps by Prompting AI, and Its Limits
seo_title: Vibe Coding Explained: What It Is and Where It Breaks
slug: vibe-coding
category: ai
description: What vibe coding is, what people have built with it, and where AI-built apps break on security and scaling. Sourced figures and a checklist, Nov 2026.
date: 2026-11-20
author: shreyasmv
---
Vibe coding is building software by describing what you want to an AI model in plain language, then running the result and re-prompting until it behaves, often without reading the code. Andrej Karpathy coined the term in February 2025 for that hands-off style, and it works well for prototypes and personal tools.

The qualification that matters for a founder is that AI-built apps tend to fail after the demo, in security, data handling and growth. Every source below was read on 20 November 2026, and none of them measures how Indian small-business apps fare.

- **Meaning.** Publishers disagree on whether vibe coding means any AI-assisted coding or only coding where you do not review the output.
- **Examples.** Documented cases run from one-person weekend tools to startups with almost entirely AI-written code.
- **Limits.** The measured evidence on code quality and security is mostly negative, though each figure covers less than a headline suggests.
- **Finishing.** The gap between a demo and a launched app is review, security and hosting work, which is what [app development](/services/app-development/) at a studio covers.

## What Is Vibe Coding? Meaning and Origin

Vibe coding means prompting an AI model to write software and judging the result by whether it works, not by reading the code. Karpathy described it in a February 2025 post on X as fully giving in to the vibes and forgetting that the code even exists, and he said it was not too bad for "throwaway weekend projects", per Cloudflare's explainer.

Wikipedia adds that Merriam-Webster listed the term as slang and trending in March 2025, and that Collins English Dictionary made it its Word of the Year for 2025. It also traces the idea to Karpathy's 2023 line that the hottest new programming language is English.

The name is easy to explain: you steer by feel, checking whether the app seems right rather than whether the code is. The meaning is less settled, as the table shows. It sets out how four publishers define it, as read on 20 November 2026.

| Publisher | What it counts as vibe coding |
|---|---|
| [IBM](https://www.ibm.com/think/topics/vibe-coding) | Prompting AI tools to generate code instead of writing it; calls the term loosely defined |
| [Wikipedia](https://en.wikipedia.org/wiki/Vibe_coding) | AI-generated code that may be accepted without thorough review |
| [Cloudflare](https://www.cloudflare.com/learning/ai/ai-vibe-coding/) | Heavy reliance on a large language model (LLM) to generate code |
| [Google Cloud](https://cloud.google.com/discover/what-is-vibe-coding) | Two kinds: "pure" trust in the output, and responsible AI-assisted development with review |

The line that matters is review. Google Cloud's split between pure and responsible use is the most useful, and Andrew Ng objected in June 2025 that the name wrongly suggests engineers just go with the vibes, per Wikipedia.

## How Vibe Coding Works, and a Safer Way to Start

Vibe coding works as a loop of describe, generate, run and refine, repeated until the app behaves. Google Cloud lays out five steps: state the goal, let the AI write code, run it, give feedback, repeat. IBM's version is intent, generate, review, refine.

Karpathy's own account of fixing bugs was to ask for random changes until the bug went away, which Cloudflare quotes. That is the part that does not scale to an app other people depend on.

Google Cloud says anyone can do it, but that edge cases, complex bugs and security still need an understanding of logic. Microsoft's own training module on vibe coding with GitHub Copilot Agent recommends a basic grasp of the software development process first. The steps below are my reading of those loops, not a vendor method.

1. **Write the outcome.** One paragraph on who uses the app and what they must be able to do.
2. **Give context, not just a request.** IBM argues models fail from missing context, so state the business, architecture, existing code, security and performance needs.
3. **Build one feature at a time.** Run it after each change so a break points to a single prompt.
4. **Keep the code in a repository you own.** A tool's chat history is not a backup of your product.
5. **Review before anyone else uses it.** Have someone who reads code look at it, as Google Cloud's own lifecycle includes a human expert check.

A prompt skeleton built from IBM's five kinds of context:

- **Business.** The problem, the user and the one action that matters.
- **Architecture.** The stack you want and what the app connects to.
- **Code.** Conventions already in use, if any exist.
- **Security.** Who may see what, and what data is personal.
- **Operations.** How many users you expect and what must never go down.

## Vibe Coding Examples: What Has Been Built

Documented vibe coding examples range from a weekend tool for one person to startup codebases that are almost entirely AI-written. These are the cases the sources give, with dates.

- **Software for one, February 2025.** New York Times journalist Kevin Roose, not a professional developer, built small personal apps. He found the results limited and error-prone, and in one case the AI fabricated fake reviews for an e-commerce site (Wikipedia).
- **Startups, March 2025.** Y Combinator reported that 25% of its Winter 2025 batch had codebases that were 95% AI-generated (Wikipedia, citing the same figure IBM sources to TechCrunch). The figure says nothing about quality.
- **Professional use, July 2025.** The Wall Street Journal reported engineers adopting vibe coding for commercial use cases (Wikipedia).
- **A famous hobby project, January 2026.** Linus Torvalds used Google Antigravity to write a visualiser for a hobby project because of his limited Python knowledge, per Wikipedia.
- **Vendor showcases, as of November 2026.** Vibecode's page lists generated clones of Instagram, Spotify, Airbnb and Cash App, and says it makes native Swift apps you can publish to the App Store.

My reading: demos show screens and flows. They do not show what a business depends on, which is accounts, payments, stored data and recovery when something breaks.

## Vibe Coding Tools and Platforms, and What They Cost

Vibe coding tools fall into four kinds: full-stack app builders, AI code editors, autonomous agents and kits for building agents. No source ranks them, and Google Cloud says the best choice depends on your goal and comfort with code, not your job title.

| Kind | Named in the sources | Fits |
|---|---|---|
| App builder | Google AI Studio, Lovable, bolt.new, Replit | Prototypes and non-technical MVPs |
| AI code editor | Cursor, GitHub Copilot, Windsurf | Existing codebases |
| Autonomous agent | Google Antigravity | Larger tasks, with plans you approve |
| Agent kit | Google Agent Development Kit | Building your own agents |

The names come from Google Cloud, IBM, Cloudflare and Wikipedia, the kinds follow Google Cloud's own categories, and which product sits in which row is my grouping. Products change fast, so check each one's own site before choosing.

On cost, Google Cloud's page advertises $300 in free credits and 20+ always-free products as of November 2026. A comparison table on vibe-coding.fr lists many tools at $0, but it says it reflects features as of March 2025, so treat it as out of date. The research did not capture current plan prices, which is why I give none.

My reading: the subscription is the small cost. The larger one comes later, in the review, fixes and hosting that turn a prototype into something safe to run, and it varies with the app.

## Vibe Coding vs Agentic Coding

Vibe coding describes how closely you check the output, while agentic coding describes how much of the work an AI agent does on its own, so the two overlap. Google Antigravity shows the agentic end: it proposes a task checklist and an implementation plan, then opens the terminal, installs dependencies and tests the interface with a browser agent.

IBM describes the industry moving from prompt-to-code toward intent, then AI agent, then software, covering planning, testing and security review as well as writing code. Google Cloud's version keeps a human approving the plan before execution.

My reading: an agent whose plan you approve sits near Google's responsible mode. An agent you let run unchecked is vibe coding with a bigger blast radius. In July 2025 the founder of SaaStr reported that Replit's AI agent deleted a database despite explicit instructions not to change anything (Wikipedia). The [AI agents guide](/blog/what-are-ai-agents/) explains how to limit an agent's access.

## Is Vibe Coding Bad? What the Numbers Measure

Vibe coding is not bad for prototypes, but the measured evidence on quality and security is mostly negative, and each figure covers narrower ground than it sounds. I read the figures below through Wikipedia's summaries, not the original studies.

| Source and date | What it found | Limit |
|---|---|---|
| Lovable scan, May 2025 | 170 of 1,645 apps exposed personal data to anyone | One platform, at one date |
| Veracode, Oct 2025 | Code got more functional over 3 years; security did not improve | Models, not single apps |
| CodeRabbit, Dec 2025 | AI co-authored code had about 1.7 times more major issues | 470 open-source pull requests |
| GitClear, early 2025 | Refactoring fell from 25% to under 10% of changed lines | Correlation across 211 million lines |
| METR, July 2025 | Developers were 19% slower on 246 tasks | Developers, not first-time builders |

The Lovable figure, worked through: 170 divided by 1,645 is 0.103, so about 10 apps in every 100 scanned had the flaw. CodeRabbit also reported misconfigurations 75% more common and security vulnerabilities 2.74 times higher in AI co-authored code.

The METR result is the odd one. Developers expected to be 24% faster, were 19% slower, and still believed afterwards that AI had made them 20% faster. Feeling productive is not evidence of being productive, which is the trap in judging by vibes.

## The Security Gaps in AI-Built Apps

The security gaps in AI-built apps are the ordinary ones, left in because nobody reviewed the code. IBM lists the usual suspects: hardcoded API keys and passwords, SQL injection, unsecured APIs, overprivileged apps, weak authentication and vulnerable third-party libraries.

IBM calls the result security debt, and warns that a quick prototype can become a business application holding customer, financial or medical data without any security analysis. Cloudflare adds two more risks: losing track of how personal data is processed, and pasting your own intellectual property into an LLM.

A security researcher found a flaw in the Orchids vibe coding platform in December 2025 and showed it to the BBC in February 2026, per Wikipedia. A copyable pre-launch checklist, built from IBM's list and my own reading of how to test each item:

- **Secrets.** No keys or passwords sit in the code or its history.
- **Routes.** Every API route checks who is asking.
- **Queries.** Database queries use parameters, never pasted-in user text.
- **Records.** A logged-in user can open only their own records. Try it with two test accounts.
- **Logins.** They use a proven service, not hand-built code.
- **Libraries.** Each one is current and each permission is needed.
- **Personal data.** You know where it is stored and who can read it.

For Indian apps, three things a prompt rarely settles. Card details should be handled by the payment gateway and never stored on your server, per Elyx's e-commerce page, and the [payment gateway comparison](/blog/payment-gateway-for-website-india/) covers the options. WhatsApp business messages need customer consent and approved templates, per Elyx's WhatsApp automation page. This research does not cover India's data protection rules, so confirm those with a qualified professional.

## Scaling Gaps: Where a Prototype Stops Coping

A prototype stops coping when real users, data and money arrive, because it was shaped by one person's prompts rather than designed for load, roles and recovery. IBM says vibe coding handles standard frameworks but struggles with novel or complex requirements, and that distributed applications need structured architecture it does not reliably supply.

Wikipedia reports that AI systems struggle with multi-file projects and poorly documented libraries. It also cites Fast Company's September 2025 "vibe coding hangover" and a May 2026 Wall Street Journal report in which engineer Mario Zechner warned of buggy software and failing infrastructure.

Google Cloud notes that AI Studio deploys to Cloud Run, which can scale infrastructure if an app goes viral. My reading: scaling servers is not the same as scaling the design, and a poorly structured app can still fail on correct hardware. In Reddit threads from August 2026, builders ask the same thing: when does vibe coding become software engineering with AI, and what happens once strangers start using the product.

| Gap | First visible sign | What to read |
|---|---|---|
| Performance and cost | Slow screens, rising bill | [SaaS scaling problems](/blog/saas-scaling-problems/) |
| Support load | Founders answer setup questions | Same article |
| Billing states | Manual fixes for failed payments | Same article |
| Backups and environments | One bad prompt damages live data | The Replit incident above |

The gap I would test first is recovery. If your live database were wiped today, could you restore it, and has anyone tried?

## When Vibe Coding Is Fine and When to Bring in Engineers

Vibe coding is fine when failure costs only you, and engineers should be involved once real customers, personal data or money are at stake. The table applies three criteria of my own: who is harmed if it breaks, what data it holds, and how long it must live.

| Situation | Approach | Basis |
|---|---|---|
| Weekend tool for yourself | Pure vibe coding | Karpathy's original use |
| Idea test, no personal data | AI-assisted, you review | Google's responsible mode |
| Public app with logins or payments | Engineer review before launch | IBM's security debt warning |
| Product that must run for years | Engineer-led, AI as a tool | Maintenance risks above |

Simon Willison, cited in Wikipedia via Ars Technica, called vibe coding a production codebase clearly risky, because most engineering is evolving existing systems whose code must stay understandable. That is the case for the last row.

## Finishing an AI-Built App: What To Do Next

To finish an AI-built app, freeze new features, move code and accounts into your name, review security, then test with real flows before real users arrive.

1. **Freeze features.** Every new prompt changes code you have not reviewed.
2. **Take ownership.** Export the code to a repository you own and list every account, key and service it relies on.
3. **Run the checklist above.** Fix what fails, or write down what you accept.
4. **Test the money and message flows.** Place real test payments and check consent-based WhatsApp messages.
5. **Decide keep or rebuild.** Ask a developer to audit the code, hosting and data model before you spend more prompts.

Elyx Solutions works on this stage. Its [SaaS development page](/services/saas-development/) says it audits an existing product's code, hosting and data model first, says what is worth keeping, then fixes or rebuilds, and that this is common with prototypes built quickly with AI tools. For phone apps, [App Development](/services/app-development/) covers iOS and Android from one codebase and store submission, and a new focused app typically takes {{weeks:mobile}}.

Engagements start from {{start}}, and every project is quoted to your requirements, in writing, after a call. You can [request a quote](/contact.html) or read how quoting works on the [pricing page](/pricing/).

## Sources

- [Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding), Wikipedia
- [Vibe Coding Explained: Tools and Guides](https://cloud.google.com/discover/what-is-vibe-coding), Google Cloud
- [What is Vibe Coding?](https://www.ibm.com/think/topics/vibe-coding), IBM
- [What is vibe coding?](https://www.cloudflare.com/learning/ai/ai-vibe-coding/), Cloudflare
- [Introduction to Vibe Coding](https://learn.microsoft.com/en-us/training/modules/introduction-vibe-coding/), Microsoft Learn
- [Vibecode: AI Mobile and Web App Builder](https://www.vibecodeapp.com/), Vibecode
- [Vibe coding tool comparison](https://vibe-coding.fr/), vibe-coding.fr

## FAQ

### Is vibe coding bad?

Vibe coding is not bad for prototypes and personal tools, but it is risky for production apps. The sourced evidence on security and code quality is mostly negative, and IBM calls the result security debt. Reviewing the output removes most of the risk.

### Is vibe coding the future?

Vibe coding is already used professionally, but sources expect the future to be more structured than the original idea. Wikipedia reports engineers using it commercially from July 2025, while IBM describes a move toward AI agents covering the whole engineering process.

### Which vibe coding platform is best?

No source names one best platform, and the answer depends on your goal. Google Cloud says to choose by project goal and technical comfort: app builders for prototypes, AI editors and agents for existing or production code.

### Is vibe coding dead?

No source read for this article shows it dead as of November 2026. Collins named it a 2025 Word of the Year, and Torvalds used it in January 2026, though critics warned in May 2026 of a "vibe slop" problem.

### Why is it called vibe coding?

Karpathy's February 2025 post said you "fully give in to the vibes" and forget the code exists. The name describes steering by whether the app feels right instead of reading the code.

### When did vibe coding start?

Vibe coding started as a named idea in February 2025, when Karpathy posted the term on X. Cloudflare notes that developers had already experimented with similar AI-assisted work after ChatGPT and Copilot appeared.

### Can vibe coding get you a job?

It may help, but this research found no India-specific data. A job board, VibeCodeCareers, advertises AI-fluent roles with dollar salary bands, but it gives no method, so I do not repeat them. Employers still need people who can review code.

### Will vibe coding replace programmers?

The sources do not say so. IBM states that generating code is not the same as software engineering, which also needs planning, testing, security review and governance. Willison's point is that most engineering work is evolving existing systems.

### Can I vibe code an app for free?

You can start free on some tools, but check each one's own pricing page. Google Cloud advertises $300 in credits as of November 2026, and a March 2025 table lists many tools at $0. Free to build does not cover review and hosting.
