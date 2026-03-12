# OpenTechiz AI — Website Project Summary

> **Project:** opentechiz-ai website
> **Purpose:** B2B AI services website — automation workflows, agentic AI, engineering
> **Status:** Planning complete (Phases 1–10). Ready for implementation.
> **Last updated:** 2026-03-12

---

## Table of Contents

1. [Project Goal & Tech Stack](#1-project-goal--tech-stack)
2. [Phase 1 — Overall Strategy](#2-phase-1--overall-strategy)
3. [Phase 2 — Sitemap & Website Architecture](#3-phase-2--sitemap--website-architecture)
4. [Phase 3 — Messaging Framework](#4-phase-3--messaging-framework)
5. [Phase 4 — Content Briefs](#5-phase-4--content-briefs)
6. [Phase 5 — Homepage Copy](#6-phase-5--homepage-copy)
7. [Phase 6 — Service Page Copy](#7-phase-6--service-page-copy)
8. [Phase 7 — Use Cases Content](#8-phase-7--use-cases-content)
9. [Phase 8 — SEO Strategy](#9-phase-8--seo-strategy)
10. [Phase 9 — Branding & UI Direction](#10-phase-9--branding--ui-direction)
11. [Phase 10 — Technical Implementation Plan](#11-phase-10--technical-implementation-plan)

---

## 1. Project Goal & Tech Stack

Build a B2B marketing website for OpenTechiz that presents three AI service lines to operations-driven businesses.

**Website must:**
- Communicate real-world AI implementation (not demos)
- Convert visitors into discovery call bookings
- Rank for business-focused AI service keywords
- Serve three ICPs: Operations Leaders, CTOs/Technical Founders, SMB Owners

**Three service lines:**
1. AI Automation Workflow
2. Agentic AI Solutions
3. AI Engineering Solutions

**Tech stack:** Static HTML5 + Tailwind CSS (CDN) + Alpine.js (CDN)
**Fonts:** Space Grotesk (headings 500/600/700) + Inter (body 400/500/600) + JetBrains Mono (code)
**Primary CTA (all pages):** "Book a Free AI Audit"

---

## 2. Phase 1 — Overall Strategy

### Brand Positioning

**One-line:**
> "We build AI that works inside your business — automating workflows, reducing labor costs, and running 24/7 — without replacing the people who matter."

**Master tagline:** "AI That Works. Not Just Promises."
**Brand angle:** "The Execution Company"

| We Are | We Are Not |
|---|---|
| Implementation-first | Strategy-only consultancy |
| Production AI systems | Proof-of-concept demos |
| End-to-end delivery | Point solutions |
| Business outcomes focused | Technical showcases |

**Differentiation statement:**
> "Most AI vendors show you what's possible. We show you what's running — inside your systems, reducing your costs, today."

---

### Ideal Customer Profiles

**Primary — Operations Leader (COO / VP Ops)**
- 20–200 employees, $2M–$50M ARR
- Problem: Ops cost scales linearly with headcount
- Lead with: Labor cost reduction + speed to value

**Secondary — CTO / Technical Founder**
- 5–80 employees, pre-revenue to $10M ARR
- Problem: AI stuck in experiments, not in production
- Lead with: Technical depth + production discipline

**Tertiary — SMB Founder / Managing Director**
- 5–50 employees, $500K–$10M revenue
- Problem: Small team, too many manual tasks, no dev resources
- Lead with: "We handle everything" + free audit

---

### Core Value Proposition

> "We implement AI that works inside your actual business — reducing the labor cost of running your operations while improving quality, speed, and availability."

**Three service pillars:**
1. **Automation Workflow** — Replace repetitive work with auditable pipelines
2. **Agentic AI** — Deploy agents that take action inside your systems, 24/7
3. **AI Engineering** — Production-grade AI infrastructure — not demos

---

### Messaging Pillars

1. Real Implementation, Not Demos
2. Business Outcomes, Not AI Features
3. Integrated Into What You Already Use
4. Always On, Always Consistent
5. Depth of Expertise

---

### Competitive Differentiation

| Competitor Type | Their Gap | Our Position |
|---|---|---|
| AI consulting firms | Strategy only, no delivery | We build and deploy |
| No-code AI tools | Surface-level, no complex logic | Deep system integration |
| Generic AI agencies | Chatbot wrappers, low depth | Production engineering |
| Freelancers | No business context | Business + engineering combined |

---

### Brand Voice

| Trait | Expression | Not |
|---|---|---|
| Direct | State outcomes clearly | Vague consultancy-speak |
| Confident | Clear claims with evidence | Arrogant |
| Technical-but-human | Anchor tech in business outcomes | Jargon dump |
| No hype | Specific, measurable language | "Revolutionary," "game-changing" |

**Prohibited language:**

| Avoid | Use Instead |
|---|---|
| "AI-powered [anything]" | Name the specific capability |
| "Seamlessly integrates" | "Connects directly to [system]" |
| "Revolutionary" / "cutting-edge" | Specific outcome |
| "Leverage AI" | "Use AI" / "apply AI" |
| "Transform your business" | "Reduce cost / improve speed / eliminate errors" |
| "Synergy" | "Works with your existing stack" |
| "Passionate about AI" | Specific expertise or delivery record |

---

## 3. Phase 2 — Sitemap & Website Architecture

### Complete Sitemap

```
opentechiz.ai/
├── /                                           ← Homepage
├── /services/                                  ← Services Hub
│   ├── /services/ai-automation-workflow
│   ├── /services/agentic-ai-solutions
│   └── /services/ai-engineering-solutions
├── /use-cases/                                 ← Use Cases Hub
│   ├── /use-cases/customer-support-automation
│   ├── /use-cases/lead-qualification-automation
│   ├── /use-cases/crm-workflow-automation
│   ├── /use-cases/internal-knowledge-assistant
│   ├── /use-cases/data-processing-reporting
│   ├── /use-cases/document-processing-automation
│   ├── /use-cases/sales-workflow-automation
│   ├── /use-cases/employee-onboarding-automation
│   ├── /use-cases/invoice-billing-automation
│   ├── /use-cases/order-operations-agent
│   ├── /use-cases/ai-feature-production
│   └── /use-cases/rag-product-intelligence
├── /process/                                   ← How We Work
├── /about/                                     ← About
├── /contact/                                   ← Contact + Lead Form
└── /insights/                                  ← Blog (Phase 2+)
```

### Build Priority

**Tier 1 — Launch-blocking:**
1. `/` Homepage
2. `/contact/`
3. `/services/ai-automation-workflow`
4. `/services/agentic-ai-solutions`
5. `/services/ai-engineering-solutions`

**Tier 2 — Launch-enhancing:**
6. `/process/`
7. `/services/`
8. `/use-cases/` + 3 priority use case pages

**Tier 3 — Growth phase:**
9. `/about/`
10. Remaining 9 use case pages
11. `/insights/`

---

### File Structure

```
web/
├── index.html
├── contact.html
├── process.html
├── about.html
├── services/
│   ├── index.html
│   ├── ai-automation-workflow.html
│   ├── agentic-ai-solutions.html
│   └── ai-engineering-solutions.html
├── use-cases/
│   ├── index.html
│   ├── customer-support-automation.html
│   ├── lead-qualification-automation.html
│   ├── crm-workflow-automation.html
│   ├── internal-knowledge-assistant.html
│   ├── data-processing-reporting.html
│   ├── document-processing-automation.html
│   ├── sales-workflow-automation.html
│   ├── employee-onboarding-automation.html
│   ├── invoice-billing-automation.html
│   ├── order-operations-agent.html
│   ├── ai-feature-production.html
│   └── rag-product-intelligence.html
├── insights/
│   └── index.html
├── css/
│   └── main.css
├── js/
│   └── main.js
└── assets/
    ├── logos/          ← Integration partner SVGs
    ├── icons/
    ├── images/
    └── favicon/
```

---

### CTA Pairs by Page

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage | "Book a Free AI Audit" | "See How It Works" |
| Automation Workflow | "Start with a Free Workflow Audit" | "View Use Cases" |
| Agentic AI | "Scope Your First Agent" | "See Agentic AI Use Cases" |
| AI Engineering | "Talk to an AI Engineer" | "Read How We Work" |
| Use Cases Hub | "Discuss My Use Case" | — |
| Individual Use Cases | "Build This for My Business" | "See the Service Behind This" |
| Process | "Book My Discovery Call" | "See Our Services" |
| About | "Work With Us" | — |
| Contact | "Get My Free AI Audit" (form) | Calendar embed |

---

### User Journey Map

```
[Search / Referral / Direct]
        ↓
   HOMEPAGE
        ↓
   ┌──────────────────────────┐
   ↓           ↓              ↓
"I know     "Show me       "Prove it
my pain"    services"      works for me"
   ↓             ↓              ↓
/contact   /services/      /use-cases/
(high        [page]          [page]
intent)          ↓               ↓
                 └──────┬────────┘
                        ↓
                   /process/
                (risk reduction)
                        ↓
                   /contact/
               "Book Free AI Audit"
                        ↓
               Discovery Call → Proposal
```

---

## 4. Phase 3 — Messaging Framework

### Hero Headline Options

| # | Headline | Formula | Best For |
|---|---|---|---|
| 1 ✓ | "Cut Your Operations Cost. Deploy AI That Actually Runs." | Command + Proof | Homepage default |
| 2 | "Your Team Is Doing Work AI Should Be Handling." | PAS interrupt | Paid ads |
| 3 | "From 40 Manual Hours a Week to 4. That's What We Build." | BAB compressed | ROI-focused |
| 4 | "Most AI Companies Show You Demos. We Ship Production Systems." | Us vs. them | Differentiation |
| 5 | "AI That Runs 24/7 Inside Your CRM, ERP, and Operations — Without Replacing Your Team." | Benefit + objection | Fear-handling |

### Subheadline Options

| # | Subheadline |
|---|---|
| A | "We design and deploy AI automation workflows and agentic systems integrated directly into your CRM, ERP, APIs, and internal tools." |
| B | "We implement AI automation, agentic AI, and production-grade AI engineering — measured in hours saved, errors eliminated, and costs reduced. Free audit. No commitment." |
| C | "Consulting firms give you a roadmap. We give you a running system — connected to your tools, tested in production, and operational within 4–8 weeks." |
| D | "You don't need more AI features. You need manual tasks gone, support available 24/7, and operational cost under control. That's what we build." |

---

### Value Messages by Service

**AI Automation Workflow**
- "Replace high-volume, low-judgment tasks with reliable, auditable pipelines"
- "40–70% reduction in time spent on manual tasks"
- "Near-zero error rate on rule-based automated processes"
- "24/7 execution — runs identically at 2am as at 2pm"
- "Connects your CRM, ERP, databases, spreadsheets, and APIs into a single flow"

**Agentic AI Solutions**
- "AI agents that take action — read your systems, decide, execute, update"
- "24/7 autonomous execution on customer-facing and internal workflows"
- "Sub-60-second response times for AI-agent-handled inquiries"
- "Scale from 100 to 10,000 transactions without adding headcount"

**AI Engineering Solutions**
- "Production AI. Not prototypes."
- "The integration layer, observability, and error handling most AI projects skip"
- "RAG pipelines, API integration layers, model fine-tuning, AI ops infrastructure"
- "You own the architecture. No vendor lock-in."
- "Live in production in 4–8 weeks with full documentation"

---

### Outcome Statistics (trust anchors)

| Stat | Context | Framing |
|---|---|---|
| 40–70% | Reduction in time on manual tasks | "Clients typically see..." |
| < 60 seconds | Response time for AI-agent-handled inquiries | "Clients typically see..." |
| 4–8 weeks | Discovery to live production system | Standard delivery |
| 24/7 | Operational coverage on automated workflows | Always on |
| Near-zero | Error rate on automated rule-based processes | Category elimination |
| 0 headcount added | To scale 100→10,000 automated transactions | Leverage |

---

### CTA Message Set

| CTA | Use Where |
|---|---|
| "Book a Free AI Audit" | Homepage hero, all page footers |
| "Get My Free AI Audit" | Contact form submit button |
| "See How It Works" | Homepage secondary (scroll anchor) |
| "Start with a Free Workflow Audit" | Automation Workflow page |
| "Scope Your First Agent" | Agentic AI page |
| "Talk to an AI Engineer" | AI Engineering page |
| "Discuss My Use Case" | Use case pages |
| "Book My Discovery Call" | Process page, About page |
| "Build This for My Business" | Individual use case pages |

**Microcopy below every CTA button:**
- Audit CTAs: "No sales pitch. No commitment. We review your situation and give you a straight answer."
- Form submit: "We respond within 24 business hours."
- Calendar: "30-minute call. Focused on your specific workflows."

---

### Messaging Do/Don't Quick Reference

```
ALWAYS:
✓ Lead with the business outcome
✓ Name the specific system ("connects to your HubSpot")
✓ Use "build" or "deploy" — not "enable" or "leverage"
✓ Follow every CTA with microcopy that removes risk
✓ Use specific numbers: 40%, 24/7, 4–8 weeks, < 60 seconds

NEVER:
✗ "AI-powered" without a specific capability
✗ "Seamlessly" or "plug-and-play"
✗ "Revolutionary," "cutting-edge," "state-of-the-art"
✗ Describe AI without a business context
✗ CTA without a risk reducer nearby
✗ "Passionate about AI"
```

---

## 5. Phase 4 — Content Briefs

### Copy Formula Assignment

| Page | Primary Formula | Secondary |
|---|---|---|
| Homepage | AIDA | BAB (use case cards) |
| Services Hub | FAB | — |
| AI Automation Workflow | PAS | BAB (use case cards) |
| Agentic AI Solutions | ACCA | BAB (scenarios) |
| AI Engineering Solutions | PAS + 4Ps | FAB (capabilities) |
| Use Cases Hub | — (routing) | BAB per card |
| Individual Use Case pages | PAS | HowTo |
| About | Star-Chain-Hook | — |
| Contact | CRO-only | form-cro principles |
| Process | HowTo | FAB (deliverables) |

---

### Homepage Section Map

| # | Section | Purpose | CTA |
|---|---|---|---|
| 1 | Nav | Orient + route | "Book a Free Audit" |
| 2 | Hero | Core value prop | "Book a Free AI Audit" / "See How It Works" |
| 3 | Pain Bar | Recognition — 3 pains | None |
| 4 | Services Overview | 3 service cards | Each → service page |
| 5 | How It Works | 3-step process | "Start with a Free AI Audit" |
| 6 | Integration Logos | Stack credibility | None |
| 7 | Business Impact Stats | Quantified outcomes | None |
| 8 | Use Cases Preview | Scenario recognition | "See All Use Cases" |
| 9 | Social Proof | Testimonials + industries | None |
| 10 | FAQ | 5 objection-killers | "Still have questions?" |
| 11 | Final CTA | Close warm visitors | "Book My Free AI Audit" |
| 12 | Footer | Navigation fallback | — |

---

### Service Page Section Maps

**AI Automation Workflow:**
Hero → Problem (4 pains) → What We Build (5 deliverables) → Integrations → Process (4 steps + deliverable callouts) → Outcomes (5) → Use Cases (3 BAB) → Why OpenTechiz → FAQ (4) → CTA

**Agentic AI Solutions:**
Hero → Chatbot vs Agent comparison → Problem (4 pains) → What We Build (5 agent types) → Technical Capabilities (6) → Scenarios (3 BAB) → Reliability & Guardrails (5) → Integrations → Process (5 steps) → FAQ (4) → CTA

**AI Engineering Solutions:**
Hero → Problem (4 pains) → What It Is → What We Build (6 components) → Engineering Standards (5) → Delivery Process (5 phases) → Engagement Models (3) → Tech Stack → Who It's For (3) → FAQ (6) → CTA

---

### Contact Page Form Spec

**Fields:** Full Name · Work Email · Company Name · Role/Title · "What are you looking to automate?" (textarea) · "How soon?" (dropdown: ASAP / 1–3 months / 3–6 months / Just exploring)

**Submit button:** "Get My Free AI Audit"
**Microcopy:** "We respond within 24 business hours. No sales pitch. No obligation."
**Right column:** 3-step "What happens next" + calendar embed

---

### Process Page — Delivery Timeline

| Phase | Duration | Client Does | We Deliver |
|---|---|---|---|
| 1. Discovery & AI Audit | Week 1 | 30-min call | Workflow audit doc |
| 2. Scope & Architecture | Week 2 | Review + approve | Architecture doc + signed scope |
| 3. Build & Integrate | Weeks 3–6 | Provide system access | Working staging environment |
| 4. QA & Acceptance | Week 7 | Test and validate | QA report + sign-off checklist |
| 5. Deploy & Handover | Week 8 | Confirm production access | Live system + full docs + runbook |

---

### Global Content Standards

**Must include on every page:**
- H1 with primary keyword
- One primary CTA per page
- Microcopy below every CTA button
- At least one specific outcome stat
- FAQ or objection-handling section
- Minimum 3 internal links (including 1 to /contact/)

**Must exclude on every page:**
- "AI-powered" without capability specification
- "Seamlessly integrates"
- Generic CTAs ("Learn More", "Get Started", "Contact Us")
- Vague social proof ("trusted by hundreds")

---

## 6. Phase 5 — Homepage Copy

### Navigation

```
Logo: OpenTechiz AI
Links: Services ▾ | Use Cases | Process | About | Contact
Services dropdown: AI Automation Workflow · Agentic AI Solutions · AI Engineering Solutions
CTA Button (right): Book a Free Audit → /contact
```

---

### Hero

**Pre-headline label:** AI Implementation for Operations-Driven Businesses

**H1 (recommended):** Cut Your Operations Cost. Deploy AI That Actually Runs.

**H1 Alt A:** Most AI Companies Show You Demos. We Ship Production Systems.

**H1 Alt B:** Your Team Is Doing Work AI Should Be Handling.

**Subheadline:** We design and deploy AI automation workflows, agentic AI systems, and production-grade AI engineering — integrated directly into your CRM, ERP, APIs, and internal tools. Your team handles less manual work. Your operations run 24/7.

**Primary CTA:** Book a Free AI Audit
**Secondary CTA:** See How It Works

**Trust badges:** ✦ Production-grade delivery · ✦ 4–8 week deployment · ✦ CRM & ERP integration · ✦ 24/7 automation

---

### Pain Bar

**Label:** If any of these sound familiar, you're in the right place.

**Pain 1 — Your team is doing work that AI should handle.**
Data entry, manual handoffs, report-building, copy-paste between systems. Every hour your team spends on repeatable tasks is an hour you're paying for twice.

**Pain 2 — Your operations cost scales with your revenue.**
Adding customers means adding manual work. Hiring more people to handle growth isn't a strategy — it's a bottleneck with a payroll attached.

**Pain 3 — Your business stops when your team stops.**
Customer inquiries after hours go unanswered. Reports run late. Follow-ups get missed. Your operational reliability depends entirely on who's available.

---

### Services Overview

**Section headline:** Three Ways We Put AI to Work in Your Business
**Section sub:** Each service targets a specific operational problem. Most clients combine two or more.

**Card 1 — AI Automation Workflow** *(Service 01)*
Headline: Replace Manual Processes With Reliable, Auditable Pipelines.
Body: We map your highest-volume repetitive tasks and build automation pipelines that connect your existing systems — running every process the same way, every time, without human involvement.
Outcomes: 40–70% reduction in manual task time · Near-zero process errors · 24/7 execution
Link: See AI Automation Workflow →

**Card 2 — Agentic AI Solutions** *(Service 02)*
Headline: AI Agents That Take Action — Not Just Answer Questions.
Body: Our agents don't generate text and wait for a human to act on it. They read your CRM, classify the situation, make a decision within defined boundaries, and execute the task — end to end, at any hour.
Outcomes: 24/7 autonomous execution · Sub-60-second response times · Scales without headcount
Link: See Agentic AI Solutions →

**Card 3 — AI Engineering Solutions** *(Service 03)*
Headline: Production AI. Not Prototypes.
Body: We build the engineering infrastructure your AI needs to run reliably in production — integration layers, observability, error handling, and documentation. Not a proof of concept. A live system your team can depend on.
Outcomes: Live in 4–8 weeks · Full architecture ownership · Model-agnostic build
Link: See AI Engineering Solutions →

---

### How It Works

**Section headline:** From Discovery to Live System — Here's the Path
**Section sub:** Every project starts with a free audit. Scope is clear before any contract is signed. Most clients are live within 4–8 weeks.

**Step 1 — AI Audit (Week 1):** We review your workflows in a focused 30-minute call, identify your highest-ROI automation targets, and produce a prioritized implementation plan. No commitment required.

**Step 2 — Design & Build (Weeks 2–6):** We architect the solution and build it — connected to your systems, tested against your real data, reviewed at every stage.

**Step 3 — Deploy & Hand Over (Week 6–8):** We deploy to production, verify all integrations, and hand over with full documentation and a team walkthrough.

**Reassurance:** You know exactly what you're getting before we start. No surprises. No scope creep without your approval.

**CTA:** Start with a Free AI Audit
**Microcopy:** Free assessment. No commitment. Clear scope output.

---

### Integration Logos

**Label:** We integrate with your existing stack
**Sub:** Your CRM stays. Your ERP stays. Your team's tools stay. We make AI work inside them.
**Logos:** Salesforce · HubSpot · SAP · Notion · Slack · WhatsApp Business · Google Workspace · Airtable · PostgreSQL · REST APIs
**Callout:** Don't see your system? If it has an API, we can build to it.

---

### Business Impact Stats

**Section headline:** Measured in Business Outcomes, Not AI Features

| Stat | Label |
|---|---|
| **40–70%** | Reduction in time spent on manual, repetitive operational tasks |
| **< 60 sec** | Average response time for AI-agent-handled customer inquiries |
| **4–8 weeks** | From discovery call to live, production-grade system |
| **24/7** | Operational coverage on all automated and agentic workflows |

**Framing:** These are typical results across our implementations. The free AI audit tells you what's realistic for your specific workflows.

---

### Use Cases Preview

**Section headline:** Problems We've Automated
**Section sub:** Specific operational scenarios — not hypotheticals.

**Card 1 (Customer Support):** Cut Tier-1 Support Volume by 80%
An AI agent monitors your support inbox, classifies tickets, resolves standard inquiries autonomously, and routes complex cases with full context. *(Service: Agentic AI)*

**Card 2 (CRM & Sales Ops):** Zero Manual CRM Entry. 100% Follow-Up Rate.
Lead data captured across every channel — automatically enriched, scored, and routed. *(Service: AI Automation Workflow)*

**Card 3 (Data & Reporting):** 6 Hours of Manual Reporting → 20-Minute Automated Run
Weekly reports generated automatically from multiple data sources. *(Service: AI Automation Workflow)*

**Link:** See all use cases →

---

### Why Choose OpenTechiz

**Section headline:** Why Businesses Choose OpenTechiz Over Consultants, Tools, and Generic Agencies

**We Build. We Don't Just Advise.** Consulting firms give you a strategy deck. We give you a running system. The deliverable is production software connected to your real tools.

**We Measure in Business Outcomes.** Not model accuracy. Not API response time. Hours saved. Error rate. Operational cost.

**We Work With What You Have.** No rip-and-replace. AI built to operate inside your existing CRM, ERP, and workflow stack.

**You Own Everything We Build.** Code, architecture, documentation, runbook. All of it. There is no lock-in.

---

### Social Proof

**Label:** Trusted by operations teams in
**Industries:** E-commerce · Logistics · Professional Services · SaaS · Healthcare Administration · Recruitment

**Testimonial placeholder 1 (replace with real BAB quote):**
"Before, our support team was manually handling 150 tickets per day. Now the AI agent handles 80% of them automatically. Our team went from reactive to strategic in 6 weeks."
— Operations Director, [Industry, Company size]

**Testimonial placeholder 2:**
"We'd been trying to get AI into production for 8 months. OpenTechiz delivered a working, integrated system in 5 weeks — connected to HubSpot and our internal database."
— CTO, [Industry, Company size]

---

### FAQ

**Q1: Will AI replace my team?** No. We automate rule-based, repetitive tasks — the work your team shouldn't be spending time on. Your team focuses on judgment-heavy work that moves the business forward.

**Q2: How long does a project take?** Most clients go from discovery call to live system in 4–8 weeks. The free AI audit gives you an exact timeline before any contract is signed.

**Q3: Do we need to change our existing tools?** No. We build around your current stack — CRM, ERP, databases, communication tools, APIs. Nothing gets replaced unless you want it to.

**Q4: What if we have no in-house technical team?** We handle the entire build — architecture, integration, testing, deployment, and documentation. You don't need a technical team.

**Q5: What exactly is the free AI audit?** A 30-minute structured conversation about your workflows. You get a written document: prioritized automation opportunities, realistic scope, and a clear answer on what's buildable — no cost, no commitment.

---

### Final CTA Block

**Pre-frame:** Your competitors are automating. The businesses that do it well start with a clear picture of where AI creates the most value.

**Headline:** Ready to Stop Running Your Operations on Manual?

**Sub:** Book a free 30-minute AI audit. We map your highest-impact automation opportunities and give you a straight answer on what's buildable — no sales scripts, no commitment.

**CTA:** Book My Free AI Audit
**Microcopy:** We respond within 24 business hours. No obligation. No pitch.

---

### Footer

```
Logo: OpenTechiz AI   |   Tagline: "AI That Works. Not Just Promises."

Services:                     Company:
  AI Automation Workflow         Use Cases
  Agentic AI Solutions           Process
  AI Engineering Solutions       About
                                 Contact

Email: hello@opentechiz.ai   LinkedIn icon

© 2026 OpenTechiz. All rights reserved.
Privacy Policy · Terms of Service
```

---

## 7. Phase 6 — Service Page Copy

### AI Automation Workflow — Key Copy Blocks

**H1 (recommended):** Automate the Repetitive. Free Your Team for the Work That Matters.
**H1 Alt A:** Stop Paying Your Team to Do Work That Runs Better on Autopilot.
**CTA:** Start with a Free Workflow Audit
**Microcopy:** Free assessment. No commitment. Clear scope output.

**Problem section headline:** Manual Work Is a Hidden Tax on Your Business

**4 pain points:**
1. Labor cost that scales with volume — every new customer adds manual work
2. Human error baked into every process — 1–5% error rate, compounds at scale
3. Operational limits tied to business hours — processes stop when team stops
4. Team capacity locked in low-value work — 30–40% of week on automatable tasks

**What we build (5 deliverables):**
1. Event-triggered workflow pipelines
2. Scheduled operational automations
3. Cross-system data pipelines
4. Document and output generation
5. Approval and escalation workflows

**4-step delivery process:**
- Week 1: Workflow Audit → You get: audit document + ranked automation list
- Week 2: Architecture Design → You get: approved architecture doc + signed scope
- Weeks 3–5: Build & Integrate → You get: pipelines running in staging
- Week 6–8: Deploy & Handover → You get: live system + documentation + runbook

**Outcome stats:** 40–70% task time reduction · Near-zero error rate · 24/7 execution · Scales without headcount

**Integrations:** Salesforce, HubSpot, SAP, Oracle NetSuite, Slack, Gmail/Outlook, Google Sheets, Airtable, Notion, PostgreSQL, REST APIs

**3 BAB use cases:**
- CRM data entry automation → 90 min/day/rep reclaimed
- Weekly reporting automation → 4–6 hours → automated 20-min run
- Client onboarding automation → 45 min/client → near zero

---

### Agentic AI Solutions — Key Copy Blocks

**H1 (recommended):** AI Agents That Take Action Inside Your Business — Not Just Answer Questions.
**H1 Alt:** Deploy AI That Works While Your Team Sleeps.
**CTA:** Scope Your First Agent
**Microcopy:** 30-minute scoping call. We focus on one concrete workflow. No commitment.

**Core education (chatbot vs agent):**

| | Chatbot | AI Agent |
|---|---|---|
| Input | A question | A trigger (event, schedule, condition) |
| Output | Text response | Executed action in real system |
| Requires human to act? | Yes | No |
| Operates after hours? | Passive | Active — initiates and executes |

**5 agent types we build:**
1. Customer Support Agent — resolves tier-1, routes tier-2+ with context
2. Lead Qualification Agent — scores, enriches, follows up in <60s
3. Internal Operations Agent — routes tasks, answers queries from real data
4. Data Retrieval Agent — answers questions from your actual databases/docs
5. Custom Workflow Agent — scoped to your specific process

**Technical capabilities:** Tool use + system integration · Memory + context · Multi-step reasoning · Multi-agent orchestration · Guardrails + operational boundaries · Full audit trail

**Reliability guarantees:**
- Defined operational scope — can't act outside approved boundaries
- Human escalation is a design requirement, not a fallback
- Staged rollout — limited scope before full deployment
- Complete audit trail on every action
- Performance monitoring and drift detection

**Integrations:** Zendesk, Freshdesk, Intercom, HubSpot Service Hub, Salesforce, Slack, Teams, PostgreSQL, custom APIs

---

### AI Engineering Solutions — Key Copy Blocks

**H1 (recommended):** Production AI. Not Prototypes.
**H1 Alt A:** Your AI Experiment Doesn't Need Another Consultant. It Needs an Engineer.
**CTA:** Talk to an AI Engineer
**Microcopy:** Technical conversation, not a sales call. Tell us your stack and your problem.

**Core problem:** Most AI projects fail at the engineering layer, not the model layer — integration, observability, error handling are built as afterthoughts.

**6 engineering components we build:**
1. RAG Pipelines — AI that answers from your data, not generic training data
2. API Integration Layer — auth, rate limiting, retry logic, structured output parsing
3. Model Fine-Tuning & Prompt Engineering — domain-specific optimization
4. AI Operations Infrastructure — logging, monitoring, alerting, cost tracking
5. Multi-Model Architectures — routing layer for cost/accuracy optimization
6. AI System Reliability Engineering — error handling, fallback, graceful degradation

**5 engineering standards applied to every build:**
1. Error handling is not optional — every failure mode defined from day one
2. Observability built in — latency, error rate, token usage, cost dashboarded
3. Security + data handling scoped explicitly — PII, audit trails, access controls
4. Architecture documentation is a deliverable — full diagram, runbook, API contracts
5. Model-agnostic design — swap LLM providers without rebuilding integration layer

**3 engagement models:**
- Project-Based: Fixed scope, 4–8 weeks, full handover
- Embedded Retainer: Ongoing AI engineering capacity, 3-month minimum
- Intensive Sprint: 2–4 weeks to unblock a specific stalled project

**Tech stack:** OpenAI / Anthropic / Google / open-source LLMs · Pinecone/pgvector/Weaviate · LangChain/LlamaIndex · AWS/GCP/Azure/Cloudflare · LangSmith/Langfuse monitoring

---

## 8. Phase 7 — Use Cases Content

### Use Cases Hub Page

**H1:** AI Applied to Real Business Problems — Not Hypotheticals
**Sub:** Browse specific scenarios where AI automation, agentic systems, and production AI engineering have replaced manual work.

**Filter tabs:** All · Customer Support · Sales & CRM · Operations · Finance & Admin · Internal Tools · Engineering & Product

**Bottom CTA:** Don't See Your Exact Scenario?
"Every engagement is scoped to your specific workflow. If your process has a repeatable pattern, we can build AI around it."
CTA: Book a Free AI Audit

---

### 12 Use Cases — Master Reference

| # | Title | Dept | Service | Primary Keyword | Key Outcome |
|---|---|---|---|---|---|
| 1 | Customer Support Automation | Support | Agentic AI | automate customer support AI | 80% tier-1 tickets handled autonomously |
| 2 | Lead Qualification Automation | Sales | Agentic AI | AI lead qualification | <60s first-touch, 100% lead coverage |
| 3 | CRM Workflow Automation | Sales | Automation | CRM workflow automation | Zero manual CRM entry |
| 4 | Internal Knowledge Assistant | Internal | Agentic + Engineering | internal AI knowledge base | <5s answers from your own data |
| 5 | Data Processing & Reporting | Ops | Automation | automate business reporting | 6 hours → 20-min automated run |
| 6 | Document Processing | Ops/Finance | Automation + Engineering | automate document processing | 70–90% touchless processing |
| 7 | Sales Workflow Automation | Sales | Automation | sales automation AI | 30–40% admin time reclaimed |
| 8 | Employee Onboarding | HR/Ops | Automation | automate employee onboarding | 45 min/hire → near zero |
| 9 | Invoice & Billing | Finance | Automation | automate invoice processing | 70–85% touchless AP/AR |
| 10 | Order Operations Agent | Ops | Agentic AI | AI order management | 3–5× capacity, same-hour processing |
| 11 | AI Feature to Production | Engineering | AI Engineering | AI prototype to production | Stalled POC → live in 4–8 weeks |
| 12 | RAG Product Intelligence | Engineering | AI Engineering | RAG system for business | Accurate answers from your own data |

---

### Individual Use Case Page Template

Every use case page follows this structure (PAS + HowTo + BAB):

```
1. HERO — H1: [Outcome headline] · Sub: Problem → Solution · CTA: "Build This for My Business"
2. BUSINESS CONTEXT — Why this matters at scale
3. THE PROBLEM BEFORE — Specific before-state with 3–4 consequences
4. THE AI SOLUTION — What we build (named deliverables) + how it works (steps)
5. BUSINESS OUTCOMES — 2–4 specific stats with "clients typically see" framing
6. INTEGRATION — Specific systems this use case connects to
7. RELATED SERVICE LINK — "Built under [Service Name] →"
8. FINAL CTA — "Build This for My Business" + microcopy
```

---

### Use Case 1 — Customer Support Automation (Priority page)

**H1:** Customer Support Automation: From Manual Triage to 24/7 Autonomous Resolution

**Before:** 150–200 tickets/day, 80% tier-1, 4–8 min each = 8–21 hrs team time/day on repetitive work.

**Solution:** AI agent integrated into Zendesk/Freshdesk/Intercom → reads ticket → classifies → resolves tier-1 autonomously → routes tier-2+ with context summary.

**Outcomes:** 80% tickets resolved autonomously · <60s response (vs 2–8 hours) · 24/7 coverage · 2–3× increase in complex case capacity

---

### Use Case 2 — Lead Qualification Automation (Priority page)

**H1:** Lead Qualification Automation: From Slow Manual Review to Instant, 24/7 First Contact

**Before:** Leads sit for 3–6 hours. Reps cherry-pick. Average first-contact time: 3–6 hours. After hours: next business day.

**Solution:** Agent activates on new lead → enriches CRM record → scores against ICP → sends personalized first-touch <60s → routes to rep with brief → logs everything.

**Outcomes:** <60s first-touch, 24/7 · 100% lead coverage · 30–45 min/rep/day reclaimed · Consistent ICP scoring

---

### Use Case 3 — CRM Workflow Automation (Priority page)

**H1:** CRM Workflow Automation: Eliminate Manual Data Entry and Keep Every Record Complete

**Before:** Lead data in 3 different tools, manually reconciled. Records incomplete. Activity not logged. Pipeline visibility approximate.

**Solution:** Automation pipeline unifies all lead sources → deduplicates → enriches → logs activities from email/calendar → triggers pipeline actions on deal stage changes → feeds reporting layer.

**Outcomes:** 0 hrs/week manual CRM entry · 100% record completeness · Real-time pipeline visibility

---

## 9. Phase 8 — SEO Strategy

### Three-Pillar Keyword Architecture

```
PILLAR 1: AI Automation Workflow
Primary keyword: "AI workflow automation"
Page: /services/ai-automation-workflow

PILLAR 2: Agentic AI Solutions
Primary keyword: "agentic AI solutions"
Page: /services/agentic-ai-solutions

PILLAR 3: AI Engineering Services
Primary keyword: "AI engineering services"
Page: /services/ai-engineering-solutions
```

---

### Page-to-Keyword Mapping

| Page | Primary Keyword | Secondary Keywords | Long-tail Target |
|---|---|---|---|
| Homepage | AI services for business | AI implementation company · AI automation for business | Real-world AI implementation for operations |
| Services Hub | AI implementation services | AI solutions for business | AI services company for operations teams |
| Automation Workflow | AI workflow automation | business process automation AI · AI automation services | Automate manual workflows with AI without changing tools |
| Agentic AI | agentic AI solutions | AI agents for business · autonomous AI agents | AI agent that takes action in your CRM |
| AI Engineering | AI engineering services | enterprise AI integration · production AI development | AI engineering company delivering production systems |
| Use Cases Hub | AI use cases for business | AI automation examples | Real AI implementation examples |
| UC: Customer Support | automate customer support with AI | AI customer service automation | AI agent that resolves support tickets automatically |
| UC: Lead Qualification | AI lead qualification | automate lead follow-up AI | AI agent to qualify inbound leads instantly |
| UC: CRM Workflow | CRM workflow automation | AI CRM data entry | Eliminate manual CRM data entry with AI |
| UC: Knowledge Assistant | internal AI knowledge assistant | AI knowledge base for teams | AI that answers from your internal documents |
| UC: Reporting | automate business reporting AI | automated data processing | 6 hours of manual reporting → 20-minute run |
| Process | AI implementation process | how AI projects work | What does working with an AI company look like |
| Contact | book AI audit · free AI consultation | AI workflow assessment | Free AI audit for business operations |

---

### Metadata — Title Tags and Meta Descriptions

| Page | Title Tag | Meta Description |
|---|---|---|
| Homepage | AI Automation & Agentic AI Solutions for Business \| OpenTechiz | We build AI automation workflows, agentic AI agents, and production AI systems integrated into your CRM, ERP, and operations stack. Free AI audit. |
| Services Hub | AI Implementation Services for Business \| OpenTechiz | Three AI implementation services — workflow automation, agentic AI, and AI engineering — built for businesses that want production systems, not demos. |
| Automation Workflow | AI Workflow Automation Services for Business \| OpenTechiz | We build AI automation pipelines that eliminate manual tasks and connect your CRM, ERP, and APIs. Processes run 24/7. Free workflow audit. |
| Agentic AI | Agentic AI Solutions: AI Agents for Business \| OpenTechiz | We build and deploy AI agents that operate inside your CRM, support desk, and APIs — taking action 24/7 without human involvement. Scope your first agent free. |
| AI Engineering | AI Engineering Services for Production Systems \| OpenTechiz | We engineer AI integration layers, RAG pipelines, and AI ops infrastructure for production — not demos. Built for CTOs who need AI shipped, not consulted on. |
| Use Cases Hub | AI Use Cases for Business Operations \| OpenTechiz | Browse 12 real AI implementation scenarios across customer support, CRM, operations, finance, and engineering. |
| UC: Support | Automate Customer Support With AI \| OpenTechiz | Deploy an AI agent that resolves 80% of tier-1 support tickets autonomously, 24/7 — integrated into Zendesk, Freshdesk, and your inbox. |
| UC: Lead Qual | AI Lead Qualification and Follow-Up Automation \| OpenTechiz | An AI agent that qualifies every inbound lead and sends a personalized first-touch in under 60 seconds, 24/7. |
| UC: CRM | CRM Workflow Automation With AI \| OpenTechiz | We automate CRM data entry, lead routing, and record enrichment — so your sales team spends time selling, not doing data hygiene. |
| UC: Knowledge | AI Internal Knowledge Assistant for Teams \| OpenTechiz | A RAG-powered AI assistant that answers your team's questions from your actual documents, databases, and systems — integrated into Slack or Teams. |
| UC: Reporting | Automate Business Reporting With AI \| OpenTechiz | Replace 6 hours of manual report-building with a 20-minute automated run. AI pulls from all your data sources and delivers reports on schedule. |
| Process | How We Work: AI Implementation Process, 4–8 Weeks \| OpenTechiz | See exactly how OpenTechiz takes an AI project from discovery to live system in 4–8 weeks — phases, deliverables, and what you receive at each step. |
| About | About OpenTechiz: The AI Implementation Company \| OpenTechiz | OpenTechiz builds production AI systems for operations-driven businesses. Meet the team that ships AI instead of just advising on it. |
| Contact | Book a Free AI Audit for Your Business \| OpenTechiz | Book a free 30-minute AI audit. We map your highest-impact automation opportunities and tell you exactly what's buildable for your systems. |

---

### Header Structure by Page

**Homepage H1–H3 hierarchy:**
```
H1: Cut Your Operations Cost. Deploy AI That Actually Runs.
  H2: If Any of These Sound Familiar [Pain Bar]
  H2: Three Ways We Put AI to Work in Your Business
    H3: AI Automation Workflow — Replace Manual Processes
    H3: Agentic AI Solutions — AI Agents That Take Action
    H3: AI Engineering Solutions — Production AI, Not Prototypes
  H2: From Discovery to Live System
    H3: AI Audit (Week 1) / Design & Build / Deploy & Hand Over
  H2: Measured in Business Outcomes
  H2: Problems We've Automated
  H2: Why Businesses Choose OpenTechiz
  H2: Common Questions — Answered Directly
  H2: Ready to Stop Running Your Operations on Manual?
```

**Automation Workflow H1–H3:**
```
H1: Automate the Repetitive. Free Your Team for the Work That Matters.
  H2: Manual Work Is a Hidden Tax on Your Business
    H3: Labor Cost That Scales With Volume
    H3: Human Error Baked Into Every Process
    H3: Operational Limits Tied to Business Hours
    H3: Your Team's Capacity Locked in Low-Value Work
  H2: What We Build: Automation Pipelines That Run Your Business Logic
    H3: Event-Triggered / Scheduled / Cross-System / Document / Approval
  H2: From Audit to Automation: The Delivery Process
    H3: Workflow Audit → Architecture Design → Build & Integrate → Deploy & Handover
  H2: What Changes When Operations Run on Automation
  H2: We Connect to the Systems You Already Use
  H2: What AI Automation Looks Like in Practice
  H2: What Makes Our Automation Builds Different
  H2: Find Out Which Workflows Are Costing You the Most
```

**Agentic AI H1–H3:**
```
H1: AI Agents That Take Action Inside Your Business
  H2: Most "AI" Generates Text. Agents Take Action.
  H2: The Cost of Workflows Still Needing a Human in the Middle
  H2: What We Build: Agents for Specific Operational Roles
    H3: Customer Support Agent / Lead Qualification / Internal Ops / Data Retrieval / Custom
  H2: What Makes Our Agents Work in Real Business Systems
    H3: Tool Use · Memory · Multi-Step Logic · Orchestration · Guardrails · Audit Trail
  H2: What This Looks Like in Practice [3 BAB scenarios]
  H2: How We Make Sure Agents Do the Right Thing
  H2: Agents That Live Inside Your Systems
  H2: Let's Define Your First Agent
```

**AI Engineering H1–H3:**
```
H1: Production AI. Not Prototypes.
  H2: Most AI Projects Don't Fail at the Model Level. They Fail at Engineering.
  H2: The Engineering Components We Design and Deliver
    H3: RAG / API Layer / Fine-Tuning / AI Ops / Multi-Model / Reliability
  H2: How We Build: Production Standards From Day One
    H3: Error Handling / Observability / Security / Documentation / Model-Agnostic
  H2: The Engineering Process: From Discovery to Production [5 phases]
  H2: How We Structure AI Engineering Engagements
    H3: Project-Based / Retainer / Intensive Sprint
  H2: Who This Is Right For
  H2: Talk to an AI Engineer About Your Project
```

---

### Schema Markup Plan

| Page | Schema Types |
|---|---|
| Homepage | Organization + WebSite + SiteNavigationElement |
| Service pages | Service + Offer + FAQPage (on FAQ section) |
| Use case pages | Article + FAQPage |
| Process page | HowTo (5 steps) |
| Contact page | ContactPage |
| About page | AboutPage + Person (team) |
| Blog posts | Article + BreadcrumbList |

---

### Internal Linking Strategy

**Rules:**
1. Every cluster page links back to its pillar page
2. Pillar pages link to all their cluster pages
3. Every page links to `/contact/`
4. No orphan pages — reachable within 2 clicks from homepage
5. Anchor text is always descriptive and keyword-relevant (never "click here")

**Anchor text standards:**

| Destination | Preferred Anchor Text |
|---|---|
| /services/ai-automation-workflow | "AI automation workflow," "workflow automation services" |
| /services/agentic-ai-solutions | "agentic AI solutions," "AI agents for business" |
| /services/ai-engineering-solutions | "AI engineering services," "production AI development" |
| /use-cases/ | "AI use cases," "how businesses use AI" |
| /process/ | "how we work," "4–8 week delivery" |
| /contact/ | "book a free AI audit," "book a discovery call" |

---

### Blog Content Plan (18 posts across 4 clusters)

**Cluster 1 — AI Automation Workflow (5 posts):**
1. "What Is AI Workflow Automation? A Plain-Language Guide for Business Leaders"
2. "How to Identify Which Business Processes to Automate First"
3. "AI Workflow Automation vs RPA: What's the Difference?"
4. "How Much Does AI Workflow Automation Cost? A Realistic Breakdown"
5. "7 Signs Your Operations Are Ready for AI Automation"

**Cluster 2 — Agentic AI (5 posts):**
1. "What Is Agentic AI? How AI Agents Work Inside a Real Business"
2. "AI Agents vs Chatbots: Why the Difference Matters for Your Operations"
3. "How to Deploy an AI Agent in Your Customer Support System"
4. "What Can AI Agents Actually Do? 8 Real Business Applications"
5. "The Business Case for Autonomous AI Agents: ROI, Risks, and What to Expect"

**Cluster 3 — AI Engineering (4 posts):**
1. "Why AI Projects Fail in Production (and How to Build Them Right)"
2. "What Is RAG and When Does a Business Need It?"
3. "AI Engineering vs AI Consulting: What Your Business Actually Needs"
4. "How to Get AI From Prototype to Production: A Non-Technical Guide"

**Cluster 4 — Cross-Pillar (4 posts):**
1. "How to Calculate the ROI of AI Automation for Your Business"
2. "AI for Business Operations: A Complete Implementation Guide"
3. "10 Business Processes Every Company Should Automate With AI"
4. "How Long Does AI Implementation Take? What to Expect, Honestly"

---

### SEO Writing Checklist

```
PAGE-LEVEL:
□ Primary keyword in title tag (first 3 words preferred)
□ Primary keyword in meta description
□ Primary keyword in H1
□ Primary keyword in first 100 words of body copy
□ Canonical tag present (self-referencing)
□ Open Graph tags: og:title, og:description, og:image
□ Schema markup implemented and validates in Rich Results Test

CONTENT:
□ Exactly one H1 per page
□ H2s reflect semantic subtopics (not keyword repetitions)
□ H3s support H2s with specific sub-points
□ Semantic variants used (not keyword stuffing)
□ Specific systems named in integrations
□ At least one outcome stat on the page
□ No duplicate copy from another page

INTERNAL LINKING:
□ Minimum 3 internal links per page
□ Minimum 1 link to /contact/
□ Anchor text descriptive and keyword-relevant
□ No self-linking

TECHNICAL:
□ URL: lowercase, hyphens, keyword in path
□ Images: descriptive alt text
□ Mobile layout verified
□ Page loads under 2.5 seconds

FAQ SECTIONS:
□ FAQPage schema implemented
□ Each answer standalone, 40–100 words
□ First sentence directly answers the question
```

---

## 10. Phase 9 — Branding & UI Direction

### Brand Character

**In six words:** Dark. Specific. Operational. Confident. Credible. Human.
**Central idea:** Earned authority — quiet confidence backed by visible competence.
**Reference point (tone, not copy):** Vercel, Linear, Stripe — adapted for B2B services.

---

### Color System

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary action | Ocean Blue | `#3B82F6` | CTAs, links, key highlights |
| Primary hover | Ocean Blue Dark | `#2563EB` | Button hover, active nav |
| Secondary accent | Golden Amber | `#F59E0B` | Outcome stats, premium callouts |
| Success / growth | Emerald | `#10B981` | Trust badges, positive indicators |
| Background | Near-black | `#0D0D0D` | Page backgrounds |
| Surface | Deep navy | `#1A1A2E` | Cards, elevated containers |
| Surface elevated | Navy mid | `#252542` | Modal backgrounds |
| Border | Muted navy | `#3D3D5C` | Dividers, card outlines |
| Text primary | White | `#FFFFFF` | Headlines, H1–H3 |
| Text body | Light lavender | `#B8B8D0` | Paragraphs, descriptions |
| Text muted | Muted lavender | `#6B6B8D` | Captions, labels, microcopy |

**Color rules:**
- Ocean Blue → every primary CTA button, consistently
- Golden Amber → ONLY outcome stats and measurable result callouts
- Emerald → trust badges, integration confirmations, process completions
- Never use gradients as large background fills
- Never mix more than two accent colors in one section

**Gradient usage (strategic only):**
```css
Hero glow: radial-gradient(ellipse at 60% 40%, rgba(59,130,246,0.12) 0%, transparent 65%)
Card hover: box-shadow: 0 0 24px rgba(59,130,246,0.15)
Stat accent: border-left: 3px solid #F59E0B
CTA section: linear-gradient(180deg, #0D0D0D 0%, #1A1A2E 100%)
```

---

### Typography System

| Role | Font | Weight | Desktop | Mobile |
|---|---|---|---|---|
| H1 Hero | Space Grotesk | 700 | 72px | 44px |
| H1 Page | Space Grotesk | 700 | 52px | 36px |
| H2 Section | Space Grotesk | 600 | 38px | 28px |
| H3 Sub | Space Grotesk | 600 | 26px | 22px |
| H4 Card | Space Grotesk | 600 | 20px | 18px |
| Body large | Inter | 400 | 20px | 18px |
| Body | Inter | 400 | 17px | 16px |
| Caption/Label | Inter | 500–600 | 12–14px | 12–13px |
| Code/Mono | JetBrains Mono | 400 | 14px | 13px |
| Stat figures | Space Grotesk | 700 | 56–72px | 40–52px |

**Typography rules:**
- Headlines are declarations, not questions
- Body line-height: 1.65 · Max 3 lines per paragraph
- Outcome stats displayed very large (56–72px) in Golden Amber `#F59E0B`
- Stat descriptor label: 14px Inter, muted color, below the number

---

### Component Design Specs

**Service Cards:**
```
Background: #1A1A2E · Border: 1px solid #3D3D5C
Hover border: 1px solid rgba(59,130,246,0.5)
Hover shadow: 0 0 24px rgba(59,130,246,0.15)
Border-radius: 16px · Padding: 32px
Structure: Label (top) → H4 Headline → Body (3 lines max) →
           Divider → Outcome tags (emerald dots) → Text link CTA
```

**CTA Buttons:**
```
Primary: bg #3B82F6 · hover #2563EB · hover shadow 0 4px 16px rgba(59,130,246,0.4)
Secondary (ghost): transparent + 1.5px border #3B82F6 · hover bg rgba(59,130,246,0.08)
Padding: 14px 28px · Border-radius: 12px · Font: Inter 600 16px
Height: 52px for page-level CTAs · 44px for inline CTAs
```

**Stats Block:**
```
Stat figure: Space Grotesk 700, 56–72px, #F59E0B (Golden Amber)
Stat label: Inter 400, 14px, #6B6B8D, below figure
4 stats max per row · framing text below: "Clients typically see..."
```

**Process Steps:**
```
Step counter: Large muted number in background (e.g. "01" at 120px, #3D3D5C)
Step label: Small, Ocean Blue, letter-spaced
H3 title: Space Grotesk 600
"You get:" callout: Golden Amber left-border card, #1A1A2E background
Duration badge: Pill above each step title
```

**FAQ Accordion:**
```
Closed: Full border, #1A1A2E bg, + icon right-aligned
Open: Ocean Blue 3px left border, expanded content
Animation: 200ms ease-out height expansion
```

**Integration Logo Bar:**
```
Logo opacity: 50–60% default · 100% on hover
Logo height: 28–32px consistent
Label above: "We integrate with your existing stack" — small caps, muted
Callout below: "Don't see your system? If it has an API, we can build to it."
```

---

### Iconography

**Style:** Lucide Icons or Heroicons · Outlined · 24px base · 1.5px stroke · Rounded caps
**Icon color by section:**
- Service cards: Ocean Blue `#3B82F6`
- Process steps: Emerald `#10B981`
- "Why us" differentiators: Golden Amber `#F59E0B`
- Pain sections: Muted `#6B6B8D`

**Never use:** Robot icons · Neural network/brain icons · Globe icons · Filled icon packs · Emoji as content icons

---

### Tone of Voice — 12 Core Rules

1. Lead with the outcome, not the approach
2. Short sentences signal confidence (avg under 18 words)
3. Numbers are the most persuasive words on the page — use them
4. Active voice only ("We build" not "The system is built")
5. One idea per sentence in critical copy
6. Never describe our team as "passionate"
7. Avoid the word "solution" — name the specific thing
8. Talk to one person ("your CRM" not "businesses' CRMs")
9. Don't explain what AI is — start with their problem
10. Never use "cutting-edge," "state-of-the-art," or "next-generation"
11. "Actually" is powerful when used sparingly: "AI that actually runs"
12. End sections with specificity: "40% of the week on automatable tasks" not "It doesn't have to be this way"

---

### Trust Layers

1. **Specificity** — every vague claim replaced with a specific number or named reference
2. **Process transparency** — exact phases, named deliverables, "what you get" per step
3. **Integration logos** — 8–12 recognizable systems at 50–60% opacity
4. **Social proof** — BAB format: Before (specific pain) + After (outcome) + Result (metric)
5. **Risk reversals** — microcopy below every CTA button, non-negotiable

---

### 8 Anti-Patterns vs Our Approach

| Generic AI Website | OpenTechiz |
|---|---|
| Abstract hero backgrounds (particles, orbs) | Dark, clean hero — typography carries the weight |
| Mission-first hero ("Transforming the future...") | Problem-first ("Your team is doing work AI should handle") |
| Feature-first service descriptions | Outcome-first with named systems |
| Vague social proof (logo bars only) | Industry badges + BAB testimonials + outcome stats |
| No process visibility | Explicit 5-phase delivery with deliverables per phase |
| Robot and brain imagery | Technical flow diagrams, real screen references |
| CTA without risk reduction | Every CTA inseparable from its microcopy risk reducer |
| One-size-fits-all messaging | Three distinct ICP paths through the content |

---

## 11. Phase 10 — Technical Implementation Plan

### Pre-Session Instruction (paste at start of every build session)

```
Context: Building the opentechiz-ai website.
All planning complete. Read /var/www/opentechiz-ai/docs/project-summary.md first.

Tech stack: HTML5 + Tailwind CSS (CDN) + Alpine.js (CDN)
Design system: Phase 9 brand tokens (section 10 of this file)
Copy: Use verbatim from Phases 5–7 of this file — do not invent copy
SEO: Metadata from Phase 8 — apply exactly as defined
Schema: Per Phase 8 schema plan

Rules:
- Do not invent copy. Use exact text from planning phases.
- Do not deviate from color tokens defined in Phase 9.
- Every page must include: nav, footer, schema markup, min 3 internal links,
  1 link to /contact/, microcopy below every CTA button.
```

---

### CSS Architecture (`web/css/main.css`)

```css
/* Contents:
 * 1. CSS Custom Properties (all Phase 9 color + spacing tokens)
 * 2. Base resets + global defaults
 * 3. Typography scale
 * 4. Custom component classes:
 *    .service-card (hover glow)
 *    .stat-number (Golden Amber, large)
 *    .process-step (step counter pseudo-element)
 *    .integration-logo (opacity transition)
 *    .cta-block-gradient
 *    .placeholder-content (dev-only striped placeholder indicator)
 * 5. FAQ accordion animation (200ms ease-out)
 * 6. Nav sticky + backdrop-blur transition
 * 7. Custom scrollbar
 * 8. Focus ring accessibility
 */
```

---

### JavaScript Architecture (`web/js/main.js`)

```javascript
/* Alpine.js components:
 *
 * nav: { navOpen, servicesOpen, scrolled }
 *   - Mobile hamburger toggle
 *   - Desktop services dropdown
 *   - Scroll detection for sticky nav style
 *
 * faq: { openItem, toggle(id) }
 *   - Single item open at a time
 *
 * useCasesFilter: { activeFilter, filters[], setFilter(f) }
 *   - Filter tabs on use cases hub page
 *
 * scrollToSection(id)
 *   - Plain JS for "See How It Works" secondary CTA
 */
```

---

### Build Phase Sequence

**Phase A — Foundation (Session 1)**
- Create `web/css/main.css` with all CSS custom properties
- Create `web/js/main.js` with all Alpine.js components
- Configure Tailwind CDN with custom theme extensions
- Source and place integration logos in `web/assets/logos/`
- Create favicon set

**Phase B — Tier 1 Pages (Sessions 2–6, one per page)**
- B1: `web/index.html` — Homepage (Phase 5 copy)
- B2: `web/contact.html` — Contact form + calendar
- B3: `web/services/ai-automation-workflow.html`
- B4: `web/services/agentic-ai-solutions.html`
- B5: `web/services/ai-engineering-solutions.html`

**Phase C — Tier 2 Pages (Sessions 7–9)**
- C1: `web/process.html`
- C2: `web/services/index.html`
- C3: `web/use-cases/index.html` + C4 customer support + C5 lead qual + C6 CRM use case pages

**Phase D — Tier 3 Pages (Sessions 10–15)**
- D1: `web/about.html` (requires real team content)
- D2–D10: Remaining 9 use case pages
- D11: `web/insights/index.html` (placeholder hub)

**Phase E — Technical SEO Files (Session 16)**
- `web/sitemap.xml`
- `web/robots.txt`
- `web/404.html`
- `.htaccess` (if Apache)

---

### Content Placeholder Protocol

Mark all unavailable content clearly during build:

```html
<!-- PLACEHOLDER: Replace before launch -->
<div class="placeholder-content">[Real BAB testimonial]</div>

<!-- PLACEHOLDER: form action URL -->
<form action="[FORM_ACTION_URL]">

<!-- PLACEHOLDER: calendar embed -->
<div id="calendar-embed">[Calendly/Cal.com embed code]</div>
```

Add to `main.css` during development (remove before launch):
```css
.placeholder-content {
  background: repeating-linear-gradient(
    45deg, #3D3D5C, #3D3D5C 10px, #252542 10px, #252542 20px
  );
  color: transparent;
  border-radius: 4px;
}
```

---

### Automatic vs Manual Review

**Auto-generate (trust Claude Code):** HTML structure · Tailwind class application · Alpine.js bindings · Schema JSON-LD · Meta tags · Internal link hrefs · FAQ accordion · Mobile layout · Sitemap structure

**Requires human review:**

| Item | What to check |
|---|---|
| Copy accuracy | Exact match to Phase 5–7 text — no paraphrasing |
| H1/H2 structure | Matches Phase 8 header map exactly |
| Color accuracy | Inspect element → verify hex values |
| CTA + microcopy pairs | Every button has correct microcopy below it |
| Internal links | All hrefs return 200 (no 404s) |
| Schema validity | Google Rich Results Test |
| Form action URL | Replace placeholder with real endpoint |
| Calendar embed | Replace placeholder with real code |
| Integration logos | All load, correct brand, consistent 28–32px height |
| About page | Real names, bios, photos |
| Mobile nav | Test hamburger on real device |
| Cross-browser | Chrome, Firefox, Safari, Edge |

---

### Per-Page QA Checklist

```
COPY:
□ All copy matches Phase 5/6/7 source verbatim
□ No invented or paraphrased copy
□ All placeholders marked [PLACEHOLDER]
□ Stats use correct numbers (40–70%, <60sec, 4–8 weeks, 24/7)

SEO:
□ Title tag matches Phase 8 table exactly
□ Meta description matches Phase 8 table exactly
□ Exactly one H1 per page, contains primary keyword
□ H2/H3 structure matches Phase 8 header map
□ Canonical tag present
□ Open Graph tags present (og:title, og:description, og:image)
□ Schema JSON-LD validates in Google Rich Results Test
□ Primary keyword in first 100 words
□ Minimum 3 internal links, including 1 to /contact/

DESIGN:
□ Colors match Phase 9 tokens (inspect element)
□ H1: Space Grotesk 700
□ Body: Inter 400 at 17px
□ Outcome stats: Golden Amber #F59E0B
□ CTA buttons: Ocean Blue #3B82F6
□ Microcopy below every CTA button

COMPONENTS:
□ Nav loads — all links work — dropdown functions
□ Mobile nav toggle works
□ FAQ accordion opens/closes
□ Footer present and complete
□ Integration logos load

TECHNICAL:
□ Validates as HTML5 (W3C)
□ No console errors
□ All images have alt text
□ No broken internal links
□ Fonts loading correctly (Space Grotesk + Inter)
□ Page loads under 3 seconds
□ Mobile layout verified at 375px and 768px

ACCESSIBILITY:
□ Color contrast WCAG AA (4.5:1 body, 3:1 large)
□ All images have descriptive alt text
□ Form labels associated with inputs
□ Focus ring visible on keyboard navigation
```

---

### Launch Readiness Checklist

```
CONTENT:
□ All Tier 1 pages built and QA-passed
□ All [PLACEHOLDER] markers resolved or consciously deferred
□ Real contact email in footer
□ Form endpoint functional (test submission received)
□ Calendar embed working (test full booking flow)
□ Privacy Policy page exists
□ Terms of Service page exists

SEO:
□ sitemap.xml accessible at /sitemap.xml
□ robots.txt correct at /robots.txt
□ No duplicate title tags across pages
□ No duplicate meta descriptions
□ Schema validates on all Tier 1 pages
□ 404 page exists and loads correctly
□ HTTPS enforced

TECHNICAL:
□ Favicon displays in browser tab + iOS home screen
□ Chrome, Firefox, Safari, Edge — all render correctly
□ iPhone Safari + Android Chrome — all render correctly
□ No console JS errors on any page
□ All internal links return 200
□ Google Fonts loading (not system font fallback)
□ Tailwind CDN loading (not raw unstyled HTML)
□ Alpine.js loading (nav + FAQ functional)

ANALYTICS:
□ Google Analytics 4 installed and tracking
□ Google Search Console verified
□ Sitemap submitted to GSC
□ Contact form conversion event configured
□ CTA click tracking configured

FINAL REVIEW:
□ Full walkthrough by non-technical reviewer
□ Full walkthrough on mobile
□ Founder/stakeholder approval on homepage + one service page
□ Domain pointed to hosting, SSL active
```

---

### Recommended Hosting

**Netlify (recommended):** Free, handles form submissions natively (no Formspree needed), instant deploy from Git push, global CDN, automatic HTTPS.

**Form handling:** Use Netlify Forms — add `netlify` attribute to `<form>` tag, zero backend needed. Submissions delivered to email.

---

*Planning complete across all 10 phases. All strategy, copy, SEO, design, and build instructions are contained in this document.*

*To begin: start Phase A — Foundation Setup. Read this file at session start, then execute Phase A tasks (CSS + JS) before building any HTML pages.*
