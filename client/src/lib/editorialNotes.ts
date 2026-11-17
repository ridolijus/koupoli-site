export type EditorialNote = {
  slug: string;
  date: string;
  updated?: { date: string; iso: string };
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  resource?: { href: string; label: string; description: string };
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[]; link?: { before: string; href: string; label: string; after: string }; comparison?: { caption: string; leftLabel: string; rightLabel: string; rows: Array<{ criterion: string; left: string; right: string }> }; image?: { src: string; alt: string; caption: string; width: number; height: number } }>;
  sources: Array<{ label: string; href: string }>;
};

export const editorialNotes: Record<"en" | "hr", EditorialNote[]> = {
  en: [
    {
      slug: "seo-consultant-vs-agency",
      date: "November 17, 2026",
      updated: {
        date: "November 17, 2026",
        iso: "2026-11-17"
      },
      title: "SEO Consultant vs Agency: Where Koupoli Fits",
      metaTitle: "SEO Consultant vs Agency: Compare Delivery Fit | Koupoli",
      metaDescription: "Compare an SEO consultant vs agency by technical scope, contact, implementation and team capacity. See where Koupoli fits before requesting a scoped proposal.",
      excerpt: "Choose Koupoli for an agreed technical scope with direct continuity. Choose an agency when confirmed wider team coverage and parallel work are needed. Compare the actual specialist, implementation responsibilities and capacity, not assumptions about which model is better.",
      image: "/assets/koupoli-consultant-vs-agency-hero.webp",
      imageAlt: "Two contrasting work arrangements illustrating an independent SEO specialist and a team-based agency",
      imageCaption: "A specialist and an agency are different delivery models. Fit depends on the agreed work and available capacity.",
      sections: [
        {
          heading: "The short answer: choose the delivery model your team needs",
          paragraphs: [
            "For founders, marketing leaders and developers comparing an SEO consultant vs agency, the useful question is who will deliver your next priorities, with what capacity and accountability. One specialist can follow a defined technical workstream closely; a wider team can cover several coordinated workstreams when that capacity is actually included.",
            "Disclosure: I sell the specialist option. I am Karlo Riđan, owner and sole practitioner of Koupoli. This comparison is about fit, not a claim that my model is universally superior. Agency descriptions below use their public service pages reviewed on 17 November 2026, not my experience of hiring them.",
            "This page answers who delivers the work. The earlier comparison answers whether to buy an audit or recurring technical support. Either engagement can be delivered by a specialist or an agency; choosing the provider does not settle the engagement scope."
          ],
          link: {
            before: "For that separate buying decision, read ",
            href: "/post/seo-audit-vs-ongoing-technical-seo/",
            label: "SEO Audit vs Ongoing Technical SEO Support",
            after: "."
          }
        },
        {
          heading: "SEO consultant vs agency: seven delivery criteria",
          paragraphs: [
            "The agency column describes possibilities to confirm, not standard inclusions. WebFX, Victorious and Delante have distinct published arrangements, described below."
          ],
          comparison: {
            caption: "Compare the actual proposal and people assigned to it. An agency label alone does not establish scope, access or backup coverage.",
            leftLabel: "Koupoli",
            rightLabel: "Agency model",
            rows: [
              {
                criterion: "Accountable person",
                left: "I am your direct contact and the specialist responsible for my agreed work.",
                right: "Confirm the delivery lead and contact. WebFX offers an account manager; Delante offers direct specialist contact."
              },
              {
                criterion: "Technical focus",
                left: "Crawl, indexation, rendering, migrations, performance and structured data within the agreed scope.",
                right: "Verify the relevant technical skills. Broader SEO services vary by provider and proposal."
              },
              {
                criterion: "Implementation owner",
                left: "Agree what I handle and what your developer implements, approves and deploys.",
                right: "Confirm whether the agency implements, prepares tasks or supports your developers; never infer this from the label."
              },
              {
                criterion: "Broader-team capacity",
                left: "One practitioner, not bundled content production, link acquisition or a multi-role delivery team.",
                right: "Can support parallel work where the relevant specialists and their allocated capacity are confirmed."
              },
              {
                criterion: "Continuity and coverage",
                left: "Continuity with me; finite availability and key-person risk. Agree limits and handoff arrangements.",
                right: "Ask about staffing changes, leave cover and escalation. A team does not automatically guarantee backup or speed."
              },
              {
                criterion: "Fee and contract",
                left: "Custom proposal. Confirm scope, availability, billing, additional work and exit terms.",
                right: "Provider pricing indications or a custom proposal. Confirm the matched scope, commitment and contract terms."
              },
              {
                criterion: "Best fit",
                left: "An agreed technical scope needing direct specialist continuity and a clear implementation path.",
                right: "Confirmed wider team coverage and simultaneous work that needs more than one person's capacity."
              }
            ]
          },
          image: {
            src: "/assets/koupoli-consultant-agency-decision-en.webp",
            alt: "Decision guide comparing Koupoli's specialist continuity and focused scope with an agency's confirmed team coverage and parallel work",
            caption: "Choose the delivery arrangement, not the label. Direct specialist contact can also be available from an agency.",
            width: 1100,
            height: 711
          }
        },
        {
          heading: "Where my specialist scope fits",
          paragraphs: [
            "My main expertise is crawl access, indexation, JavaScript rendering, migrations, performance, structured data and developer handoff. I also work on organic planning and AI-search fundamentals where relevant to the brief. That is not a promise of AI citations or an automatically included full marketing programme.",
            "I connect diagnosis, priorities, implementation tasks and agreed verification personally. That suits a team needing one person to follow a technical issue across releases without repeatedly rebuilding the context. It does not remove development dependencies or guarantee faster delivery.",
            "A large website is not automatically too large for a specialist. A bounded migration workstream or template investigation may fit; several simultaneous workstreams may not. I need to assess platform fit, scope and availability before offering the work."
          ],
          link: {
            before: "See the ",
            href: "/services/technical-seo-ai-search/",
            label: "Koupoli technical SEO and AI-search service",
            after: " for my focus and agreed implementation support."
          }
        },
        {
          heading: "When confirmed agency coverage is the stronger fit",
          paragraphs: [
            "An agency can be the better purchase when technical changes, editorial production and other search work must progress together. WebFX and Victorious publish broader SEO scopes; Delante's reviewed technical page establishes technical-team delivery, not every possible marketing capability.",
            "Ask which specialists are allocated to your work, what they own and which tasks can genuinely run in parallel. More people do not remove approvals, shared dependencies or release constraints. A proposal should establish usable capacity, not merely describe the agency's overall services."
          ]
        },
        {
          heading: "WebFX: broader SEO with a dedicated account manager",
          paragraphs: [
            "WebFX publicly describes SEO audits, ongoing action plans, technical maintenance, on-page optimisation, content creation, off-page authority work, competitor monitoring and reporting. Its technical page covers areas including speed, crawl and indexing issues, redirects, canonicalisation and structured data.",
            "Its published contact model includes a dedicated account manager supported by SEO specialists and other team roles. This can suit a broader coordinated brief. Confirm who handles your technical questions and implementation, rather than assuming either inaccessible specialists or unlimited delivery capacity. WebFX publishes packages and custom-quote routes; review its pricing page against your scoped proposal."
          ]
        },
        {
          heading: "Victorious: enterprise SEO and cross-functional work",
          paragraphs: [
            "Victorious' enterprise page lists technical SEO, migrations, AEO, keyword research, on-page work, content creation and link building. It describes continuous technical work on complex sites, including architecture, navigation, internal linking and subdomains, alongside collaboration with marketing, product and engineering stakeholders.",
            "That published breadth may fit a multi-workstream enterprise brief. The reviewed pages do not explicitly promise a named individual client contact; this does not establish that direct access is unavailable. Ask about your delivery lead and technical escalation route. Its starting-budget and enterprise pricing guidance concern different contexts, with a customised scope and quote."
          ]
        },
        {
          heading: "Delante: a technical team with direct specialist contact",
          paragraphs: [
            "Delante's technical SEO page describes audits with recommendations, necessary technical fixes, speed and image optimisation, migrations, structured data and monthly reporting. It also discusses JavaScript and indexation within an individual, KPI-oriented strategy.",
            "Crucially, Delante explicitly offers contact with the technical SEO specialist working on the website, without account managers, alongside a broader technical team. Direct specialist contact is therefore not unique to Koupoli. Confirm implementation boundaries and allocated coverage. Its public pricing indications mix scopes, currencies and unclear periods, so use a custom quote rather than treating them as a comparable fixed fee."
          ]
        },
        {
          heading: "Continuity includes key-person risk",
          paragraphs: [
            "With Koupoli, you work with me throughout the agreed work. As a sole practitioner, I need to account for illness, leave and other commitments when agreeing availability. We should establish the coverage you need before starting, rather than assuming round-the-clock support or unlimited parallel capacity.",
            "Before starting, agree the working cadence, response expectations and what happens if a release or my availability changes. Keep findings, decisions and open tasks accessible to your team. When dependencies block useful work or a request exceeds capacity, discuss re-scoping, pausing or handing it over rather than assuming automatic continuation. Any handoff needs an agreed recipient and access.",
            "Ask an agency the equivalent questions: who covers absences, retains the context and handles escalation? A larger organisation can provide cover, but your proposal must confirm it."
          ],
          link: {
            before: "Read ",
            href: "/about/",
            label: "about me and Koupoli",
            after: " before deciding whether a sole-practitioner arrangement fits your team."
          }
        },
        {
          heading: "Name the developer, protect access and agree acceptance",
          paragraphs: [
            "A consultant is not automatically advice-only, and an agency is not automatically your development team. For my work, agree what I can handle on your platform and what your developer implements. Name who approves and deploys changes and who checks the live result. Delante publishes necessary fixes, but even that needs project-specific boundaries.",
            "Keep business accounts under your ownership. Grant appropriate access to Search Console, analytics, the CMS or repository rather than transferring ownership or sending passwords with the initial enquiry. Agree where tasks, change records and exports remain available when the engagement ends.",
            "Acceptance should name the affected URLs or templates, intended behaviour and verification evidence. Report completed, verified and blocked work separately. Technical checks show whether an agreed change works; rankings, qualified enquiries and other business measures need their own reliable data and context."
          ]
        },
        {
          heading: "Evidence of my working method, not a ranking claim",
          paragraphs: [
            "This is an owned-site Koupoli QA example observed on 7 November 2026. The old /usluge/seo-optimizacija/ route redirected with HTTP 301 to /hr/usluge/seo-optimizacija/, which returned HTTP 200. The full record also checked that the canonical and sitemap used the final Croatian route.",
            "The buying value is a concrete acceptance record, not a promise about search performance. It is my own website, not a client outcome, testimonial or proof of ranking improvement. It does not show how any of the agencies work."
          ],
          image: {
            src: "/assets/koupoli-qa-support-example-en.webp",
            alt: "Owned-site Koupoli QA screenshot showing the old route, final Croatian service URL and observed HTTP 301 to HTTP 200 responses",
            caption: "Owned-site QA example observed 7 November 2026. This Koupoli record is not a client outcome or proof of ranking improvement.",
            width: 692,
            height: 206
          },
          link: {
            before: "For a separate example of migration coordination, see the ",
            href: "/case-studies/multi-market-website-migration/",
            label: "multi-market website migration case",
            after: "; it is not the owned-site screenshot above."
          }
        },
        {
          heading: "Compare scoped proposals, not unmatched prices",
          paragraphs: [
            "My pricing and availability are quote-based. There is no published Koupoli rate or assumed saving over an agency. I have omitted numeric agency prices because package, enterprise and technical-only indications are not equivalent purchases. Review each provider's official pricing information, then compare its scoped proposal.",
            "Match deliverables, implementation ownership, allocated capacity and verification first. Confirm billing, any minimum commitment, cancellation, exclusions and how additional work is approved. Distinguish a reporting cadence from time allocated to delivery. The cheapest headline fee tells you little if required development or follow-up is outside scope."
          ]
        },
        {
          heading: "A limited project can test the fit",
          paragraphs: [
            "If you are unsure about the working arrangement, ask whether a bounded pilot or limited project makes sense. It might cover a defined template issue or a migration checkpoint, with access, deliverables and acceptance agreed first. This is a possible scoped proposal, not a standard package or guaranteed availability.",
            "Use it to assess task clarity, collaboration and verification, not short-term ranking movement. Continue only when there is worthwhile next work. If the pilot reveals a need for sustained parallel teams, consider an agency or a coordinated specialist-plus-team arrangement."
          ]
        },
        {
          heading: "Is an SEO consultant the same as advice-only?",
          paragraphs: [
            "No. The proposal determines whether you receive recommendations, developer-ready tasks, implementation support or agreed changes. I can collaborate on delivery within a confirmed scope, but I do not automatically implement everything on every platform. Name the implementation owner before signing."
          ]
        },
        {
          heading: "Is a solo specialist always cheaper or faster?",
          paragraphs: [
            "No. Fees depend on scope and responsibility; timing depends on availability, access, complexity and release capacity. Direct continuity can simplify collaboration, but it is not a speed guarantee. Compare matched proposals and confirmed capacity, not claims about solo or agency overhead."
          ]
        },
        {
          heading: "Can Koupoli work with an in-house team or agency?",
          paragraphs: [
            "Yes, where roles, scope and availability fit. I can provide a defined technical workstream alongside your developers, marketing team or agency. Agree who prioritises, implements, approves and verifies the work so that specialist input complements the existing team rather than creating competing instructions."
          ]
        },
        {
          heading: "What should I send before a proposal?",
          paragraphs: [
            "Send your website, platform, priority problem or decision, relevant markets, planned releases and who can implement changes. Existing findings and a budget context help if available. Describe the coverage you need; do not send passwords or sensitive account exports before we agree a suitable access route."
          ]
        },
        {
          heading: "Choose the people and scope that fit the work",
          paragraphs: [
            "Choose Koupoli for an agreed technical scope with direct continuity. Choose an agency when confirmed wider team coverage and parallel work are needed. Neither model replaces clear ownership, realistic availability or acceptance criteria. If my specialist scope looks relevant, we can discuss it without assuming a recurring engagement."
          ],
          link: {
            before: "Share your situation and ",
            href: "/contact/",
            label: "discuss a scoped proposal with me",
            after: ". If the brief needs wider coverage, that should guide the choice."
          }
        }
      ],
      sources: [
        {
          label: "Koupoli: specialist scope and agreed implementation support",
          href: "/services/technical-seo-ai-search/"
        },
        {
          label: "WebFX: SEO services and dedicated team",
          href: "https://www.webfx.com/seo/services/"
        },
        {
          label: "WebFX: technical SEO scope and account manager",
          href: "https://www.webfx.com/seo/agency/technical-seo/"
        },
        {
          label: "WebFX: package pricing and custom proposals",
          href: "https://www.webfx.com/seo/pricing/"
        },
        {
          label: "Victorious: service overview and starting-budget guidance",
          href: "https://victorious.com/"
        },
        {
          label: "Victorious: enterprise scope, collaboration and pricing context",
          href: "https://victorious.com/markets/enterprise-seo/"
        },
        {
          label: "Victorious: published contact routes",
          href: "https://victorious.com/contact/"
        },
        {
          label: "Delante: technical scope, direct specialist contact and individual budgets",
          href: "https://delante.co/technical-seo-services/"
        },
        {
          label: "Delante: quote process and customised plans",
          href: "https://delante.co/contact/"
        }
      ]
    },
    {
      slug: "seo-audit-vs-ongoing-technical-seo",
      date: "November 17, 2026",
      updated: {
        date: "November 17, 2026",
        iso: "2026-11-17"
      },
      title: "SEO Audit vs Ongoing Technical SEO Support",
      metaTitle: "SEO Audit vs Ongoing Technical SEO Support | Koupoli",
      metaDescription: "Compare an SEO audit with ongoing technical SEO support by scope, ownership, deliverables and fees. Choose diagnosis, a focused fix or justified recurring work.",
      excerpt: "Choose an audit when the cause is unclear and someone can implement the findings. Choose ongoing support for worthwhile recurring work. A known, finite fix may need neither a full audit nor a retainer.",
      image: "/assets/koupoli-seo-audit-vs-support-hero.webp",
      imageAlt: "SEO audit and ongoing technical SEO support shown as two routes from diagnosis to verified work",
      imageCaption: "Buy the diagnosis or implementation support your website needs, not the longest engagement.",
      sections: [
        {
          heading: "Start with what needs doing",
          paragraphs: [
            "For a business owner comparing an SEO audit vs ongoing technical SEO support, I ask: do you need diagnosis or execution? Choose an audit for uncertain causes when your team can act on the findings. Choose ongoing support for justified recurring work. A known, bounded problem may suit a focused project instead.",
            "An SEO audit provides scoped evidence, priorities and recommendations. A technical audit focuses on crawl access, indexing and rendering. Ongoing support addresses agreed recurring priorities through implementation support and checks. Neither label identifies who changes the code.",
            "Disclosure: I offer both routes through Koupoli. I am Karlo Riđan, the specialist and owner, not a separate agency team. The right purchase depends on the work and who can implement it, not which engagement lasts longer."
          ],
          link: {
            before: "For the underlying concepts, read the ",
            href: "/glossary/technical-seo/",
            label: "technical SEO guide",
            after: "; this article focuses on what to buy."
          }
        },
        {
          heading: "SEO audit vs ongoing technical SEO support: seven buying criteria",
          paragraphs: [
            "Compare engagement models, not assumed inclusions in any provider offer."
          ],
          comparison: {
            caption: "Compare the work, responsibilities and fee structure before comparing providers.",
            leftLabel: "SEO audit",
            rightLabel: "Ongoing technical SEO support",
            rows: [
              {
                criterion: "Scope",
                left: "A defined review of agreed pages, templates and technical areas; broader SEO needs explicit inclusion.",
                right: "An agreed recurring backlog and coverage; content, links and AI-search work are not automatically included."
              },
              {
                criterion: "Deliverables",
                left: "Evidence, affected URLs, prioritised recommendations and testable tasks; confirm the actual output.",
                right: "Agreed work items, change records, verification and unresolved dependencies; distinguish shipped work from advice."
              },
              {
                criterion: "Implementation owner",
                left: "Usually a handoff unless implementation is included; name the developer, approver and verifier.",
                right: "May involve implementation, developer guidance or review; agree who owns each task and deployment."
              },
              {
                criterion: "Timing",
                left: "A scoped delivery date shaped by access and complexity; report delivery is not fix completion.",
                right: "A working cadence shaped by priorities and release capacity; no fixed search-result deadline."
              },
              {
                criterion: "Measurement and monitoring",
                left: "A baseline and agreed acceptance checks; follow-up is bounded, not indefinite monitoring.",
                right: "Defined checks, monitoring coverage and review; alerts need a responsible person and a repair path."
              },
              {
                criterion: "Fee structure",
                left: "A one-off or project proposal; clarify whether implementation and re-testing are separate.",
                right: "Recurring scoped billing where agreed; confirm capacity, exclusions, review and exit terms."
              },
              {
                criterion: "Best fit",
                left: "Uncertain causes, a baseline decision and capacity to implement the recommendations.",
                right: "A changing site with worthwhile recurring work and a need for external execution support or review."
              }
            ]
          },
          image: {
            src: "/assets/koupoli-seo-audit-support-comparison-en.webp",
            alt: "Comparison of an SEO audit for diagnosis and ongoing technical SEO support for recurring implementation and checks",
            caption: "An audit clarifies priorities. Ongoing support helps carry justified recurring work through. Implementation ownership must be agreed in either route.",
            width: 1000,
            height: 492
          }
        },
        {
          heading: "Choose an audit when the cause is unclear",
          paragraphs: [
            "An audit helps when important pages are missing from search, a redesign raises questions or explanations conflict. It should reduce uncertainty enough to prioritise fixes, not just export warnings.",
            "Identify the pages and business question. Confirm coverage of their templates, crawl paths, indexing directives and rendered content. A sample review needs explicit limits; a general audit does not include every migration or technical investigation.",
            "If your developer can implement clear tasks, an audit with a usable handoff may suffice. Otherwise plan and budget for implementation separately. Better information alone leaves the website unresolved."
          ]
        },
        {
          heading: "Choose a focused project when the fix is already known",
          paragraphs: [
            "A known redirect defect, one template producing the wrong canonical, or a bounded launch check does not automatically justify a full audit or monthly SEO services. Discuss a focused scope: the affected URLs, the change, dependencies and the evidence required to close the task.",
            "This is a scoping alternative, not a standard Koupoli package. Investigation may still be needed to confirm the cause and protect related routes. Agree approval for newly discovered work. When the fix passes its checks and no useful backlog remains, the project can end."
          ]
        },
        {
          heading: "Choose ongoing support when recurring work warrants it",
          paragraphs: [
            "Ongoing support becomes useful when releases repeatedly change templates, navigation or URL behaviour, or a migration creates staged dependencies. It can also make sense when a team has findings but needs regular help turning them into implementation tasks and reviewing the result.",
            "The case for an SEO retainer should be the next worthwhile work, not a general claim that SEO never stops. Ask what will be handled next, which release it depends on and who can act. Monitoring can reveal regressions, but monitoring alone is not remediation. Define which issues are watched, how often, and who reviews and fixes alerts.",
            "Support also consumes your team's attention. Review the scope when releases pause, priorities are cleared or dependencies block progress. A stable site does not automatically need a continuing technical engagement."
          ]
        },
        {
          heading: "Agree the developer handoff before work starts",
          paragraphs: [
            "The most important difference between two proposals may be ownership, not the number of checks. An audit recommendation, an implementation ticket and a deployed correction are different deliverables. Ask which one you are buying and how a task moves between them.",
            "Koupoli provides diagnosis and agreed implementation support. I can support your developers or review relevant changes, but this does not mean every platform is automatically fully implemented by me. The owner, access, handoff and live checks must be agreed for the actual project.",
            "A usable ticket identifies the affected URL, problem, intended behaviour, verifier and dependencies. Illustrative checks include a redirect reaching its destination, the intended template canonical, or crawlable navigation links with an href attribute, as Google's link guidance recommends."
          ],
          list: [
            "Name who writes and prioritises the task, and who owns the code or platform configuration.",
            "Agree who implements, approves and deploys the change, including any client-side dependency.",
            "Define the live test, URL coverage and evidence that will close the task.",
            "Separate extra investigation, implementation and re-testing from the original scope when needed."
          ],
          link: {
            before: "The ",
            href: "/services/technical-seo-ai-search/",
            label: "Koupoli technical SEO service",
            after: " explains the diagnosis, prioritised tasks and agreed implementation support."
          }
        },
        {
          heading: "An owned-site ticket: technical acceptance, not ranking uplift",
          paragraphs: [
            "Here is a real Koupoli route correction, observed on 7 November 2026. The old /usluge/seo-optimizacija/ route returned a 301 redirect to /hr/usluge/seo-optimizacija/, which returned 200. The destination's canonical matched the final Croatian URL, and the sitemap listed only that final route, not the old one.",
            "The acceptance criteria are concrete: a direct redirect, an available destination and consistent URL signals. Google's site-move documentation recommends permanent redirects to the mapped destination and updated canonical annotations and URL references.",
            "This example concerns my own website. It demonstrates observed technical behaviour, not a client's performance, ranking uplift or traffic gain. Passing the checks does not prove that Google has selected that canonical or that the change caused a business result."
          ],
          image: {
            src: "/assets/koupoli-qa-support-example-en.webp",
            alt: "Koupoli route QA table showing the previous URL, final Croatian service URL and the observed HTTP 301 to HTTP 200 response",
            caption: "Excerpt from Koupoli’s own QA record, observed 7 November 2026. The full record also checks the canonical and sitemap; it does not establish ranking uplift.",
            width: 692,
            height: 206
          },
          link: {
            before: "For the broader coordination involved in a migration, see the ",
            href: "/case-studies/multi-market-website-migration/",
            label: "multi-market website migration case",
            after: ". It is separate from this owned-site route check."
          }
        },
        {
          heading: "Separate delivery timing from search measurement",
          paragraphs: [
            "Agree audit delivery around site size, access, platform complexity and the review required. Agree implementation timing around development capacity, release approvals and external dependencies. Neither an audit deadline nor a support cadence establishes a deadline for improved rankings.",
            "Measure which tasks shipped, passed checks or remain blocked. Keep a change record and next priority. Warning counts alone can mislead: a larger count may reflect broader crawl coverage rather than deterioration.",
            "Review available search data using consistent pages, markets and periods. Record qualified enquiries or revenue only with reliable tracking. Note other releases and demand changes. I do not promise traffic, rankings or AI citations; technical acceptance is separate from later search or business response."
          ]
        },
        {
          heading: "Compare fee structure, not unmatched price tags",
          paragraphs: [
            "Koupoli provides scoped proposals with no public rate card. Fees, timing and additional work are agreed for the project. Clarify whether diagnosis, handoff, implementation support and re-testing are included. For ongoing work, agree the recurring scope and review terms rather than inferring them from the word retainer.",
            "WebFX publishes monthly packages and custom-quote routes. Victorious publishes starting and enterprise budget guidance while customising the final scope and quote. Delante publishes indicative ranges and sets budgets individually. I have not reproduced numeric agency prices here: their scopes, currencies and public ranges are not directly comparable to each other or a Koupoli proposal."
          ],
          list: [
            "Compare the same pages, deliverables and implementation responsibilities.",
            "Check what re-testing, development and platform costs are included or separate.",
            "Confirm recurring capacity, exclusions, any minimum commitment and cancellation terms in writing."
          ]
        },
        {
          heading: "Koupoli, WebFX, Victorious and Delante: contact and capacity",
          paragraphs: [
            "Next, choose the delivery model. These descriptions use official provider pages reviewed on 17 November 2026 and listed in Sources. They are not identical scopes or a quality ranking.",
            "At Koupoli, your consistent contact is me, the specialist and owner connecting diagnosis, tasks and checks. Direct access is not exclusive to independent specialists: Delante explicitly offers technical SEO specialist contact without account managers."
          ],
          comparison: {
            caption: "Published service scope and contact arrangements. Confirm the staffing and responsibilities for your proposal.",
            leftLabel: "Published offering",
            rightLabel: "Contact arrangement",
            rows: [
              {
                criterion: "Koupoli",
                left: "Technical diagnosis, prioritised tasks and agreed implementation support or developer collaboration; scope set for the project.",
                right: "Direct work with Karlo Riđan, the solo specialist and owner; handoff and responsibilities agreed."
              },
              {
                criterion: "WebFX",
                left: "Broad ongoing SEO, including technical maintenance, on-page work, content, authority work and reporting.",
                right: "Dedicated account manager supported by SEO specialists and a wider dedicated team."
              },
              {
                criterion: "Victorious",
                left: "Enterprise SEO includes continuous technical work, migrations, AEO, content and link building.",
                right: "Cross-functional collaboration with marketing, product and engineering; a named individual contact was not confirmed on reviewed pages."
              },
              {
                criterion: "Delante",
                left: "Technical audits, necessary fixes, speed work, migrations, structured data and monthly reporting.",
                right: "Direct contact with the technical SEO specialist working on the site, explicitly without account managers; broader team delivery."
              }
            ]
          }
        },
        {
          heading: "When a larger team is the better fit",
          paragraphs: [
            "More parallel specialists can be useful when technical releases, content production and authority work all need sustained attention, or an enterprise programme spans marketing, product and engineering. WebFX's broader specialist model and Victorious' cross-functional enterprise offering address that kind of coordination. Delante combines technical team delivery with direct specialist contact.",
            "My one-person practice has finite capacity. Ask about availability and platform fit. Ask agencies about staffing, contact and implementation ownership. Team size establishes neither response speed nor access quality."
          ]
        },
        {
          heading: "Does an SEO audit include fixing the problems?",
          paragraphs: [
            "Not automatically. An audit can end with recommendations. Tickets, developer review, implementation and follow-up checks require explicit inclusion. If you need shipped changes, name the implementation owner before buying diagnosis."
          ]
        },
        {
          heading: "Can ongoing support start from an existing audit?",
          paragraphs: [
            "Yes, if findings remain relevant. Check important issues against the live site and turn valid recommendations into a backlog. A full repeat is not automatically necessary; verification of old findings is."
          ]
        },
        {
          heading: "Is ongoing technical support the same as full SEO?",
          paragraphs: [
            "No. Technical support does not automatically include content production, link acquisition or every AI-search activity. Those may be separate workstreams or agreed additions. Match the proposal to the actual constraint; fixing a technical issue does not replace useful content or create demand."
          ]
        },
        {
          heading: "When should ongoing support be reviewed or paused?",
          paragraphs: [
            "Review support when priorities change or useful delivery stalls. If the next work, owner and completion evidence are unclear, reduce, re-scope or pause under the agreed terms."
          ]
        },
        {
          heading: "Buy the smallest engagement that answers the need",
          paragraphs: [
            "My verdict: buy an audit for unresolved uncertainty; discuss a focused project for a known finite correction; choose ongoing support for justified recurring work. Contact continuity and team capacity do not replace clear scope, ownership and acceptance checks."
          ],
          link: {
            before: "Share your website, platform, priority pages and the decision you need to make, and ",
            href: "/contact/",
            label: "discuss the right scope with me",
            after: ". Access and any implementation responsibilities are agreed separately, not assumed."
          }
        }
      ],
      sources: [
        {
          label: "Koupoli: technical SEO scope and agreed implementation support",
          href: "/services/technical-seo-ai-search/"
        },
        {
          label: "WebFX: SEO services and dedicated team",
          href: "https://www.webfx.com/seo/services/"
        },
        {
          label: "WebFX: technical SEO scope and dedicated account manager",
          href: "https://www.webfx.com/seo/agency/technical-seo/"
        },
        {
          label: "WebFX: published package structure and custom quotes",
          href: "https://www.webfx.com/seo/pricing/"
        },
        {
          label: "Victorious: customised engagements and published budget guidance",
          href: "https://victorious.com/"
        },
        {
          label: "Victorious: enterprise SEO and cross-functional collaboration",
          href: "https://victorious.com/markets/enterprise-seo/"
        },
        {
          label: "Delante: technical SEO scope, individual budgets and direct specialist contact",
          href: "https://delante.co/technical-seo-services/"
        },
        {
          label: "Delante: quote-led contact and customised plans",
          href: "https://delante.co/contact/"
        },
        {
          label: "Google Search Central: site moves with URL changes",
          href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
        },
        {
          label: "Google Search Central: crawlable links and link best practices",
          href: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
        },
        {
          label: "Koupoli: multi-market website migration case",
          href: "/case-studies/multi-market-website-migration/"
        }
      ]
    },
    {
      slug: "generative-engine-optimization-process",
      date: "November 2, 2026",
      updated: { date: "November 7, 2026", iso: "2026-11-07" },
      title: "How to Implement Generative Engine Optimization: A Practical Plan",
      metaTitle: "How to Implement Generative Engine Optimization | Koupoli",
      metaDescription: "Implement generative engine optimization with a one-page pilot: check eligibility, add evidence, record changes and compare results without claiming causality.",
      excerpt: "A six-step GEO implementation plan for one buyer question and one page, with acceptance checks, a release record and an editable pilot template.",
      image: "/assets/koupoli-geo-implementation-plan.webp",
      imageAlt: "GEO implementation plan connecting a buyer question, evidence, page checks and measurement",
      resource: {
        href: "/downloads/geo-implementation-pilot.md",
        label: "Download the editable GEO pilot record",
        description: "Record one question, page, baseline, evidence, release and review decision in a Markdown template."
      },
      sections: [
        {
          "heading": "Koupoli's working example: one answer, two language records",
          "paragraphs": [
            "Koupoli's technical SEO service provides an owned-site example, not a client case. The previous English and Croatian pages described scope and delivery steps in separate sections. The change brings the answer to 'What does a technical SEO engagement include?' together near the start of the service page: direct work with Karlo Ridan, the starting information, prioritised tasks, acceptance criteria and an agreed handoff. It adds no new service URL, price or search-result promise.",
            "Use the five buyer questions below to check whether the answer is complete. They are editorial checks, not queries claimed to appear in Search Console or prompts claimed to have earned AI citations. Keep a separate baseline for each language's canonical service URL, retaining the date window, country, device and query filters. Save the previous page and record the release date. The linked working example supplies the question set and change record; no post-change performance result is reported.",
            "After release, check the public answer and technical signals, then record when Google has crawled the changed page. Compare equal complete windows with the same filters. Read page-level Generative AI impressions where available, without adding them to Web totals or assigning them to these questions: that report has no query dimension. Sparse data calls for longer observation, not an invented uplift. A before-and-after difference does not establish that the content change caused it."
          ],
          "list": [
            "What does the engagement include? Identify the diagnosis and technical areas relevant to the goal, then distinguish agreed work from possible additions.",
            "Who will do the work? Make it explicit that the buyer works directly with Karlo Ridan, and clarify how the buyer's development team or partner would be involved.",
            "What should I provide before the first conversation? State the goal, target URLs, platform and Google Search Console access currently available.",
            "What will I receive, and who implements it? Describe prioritised tickets, acceptance criteria and the agreed handoff or implementation support.",
            "How will scope and progress be agreed? Explain which work and measurement are included, without inventing a price, timeline or guaranteed result."
          ]
        },
        {
          heading: "Choose one buyer question and one page",
          paragraphs: [
            "To implement generative engine optimization, improve one useful page around a buyer question, record the change and review comparable data. This plan focuses on Google's AI search features. The deliverable is a better answer and a documented decision, not a guaranteed citation.",
            "Choose a question heard in enquiries or visible in Search Console, then identify the page that should answer it. Keep related wordings together instead of creating competing pages. Set an effort cap before starting.",
            "Illustrative service-business example, not a client case: a Zagreb office-cleaning business could answer 'What does an office cleaning quote include?' on its existing Croatian quote guide. The intended action is a relevant quote request."
          ],
          list: [
            "Acceptance check: record one question, market, language, target URL, intended action and effort cap."
          ]
        },
        {
          heading: "Save the baseline and clear eligibility blockers",
          paragraphs: [
            "Export the page's Search Console Web performance before editing. Save dates, property, page, country, device and any query filter alongside impressions, clicks and average position. Keep an unfiltered page view as well as any query subset. Record qualified enquiries separately if tracking exists. If the page is new, label its baseline unavailable; do not substitute sitewide figures as if they belonged to it.",
            "Inspect the indexed URL and canonical. Check the live response, Googlebot access, rendered answer text, indexing directives and snippet controls. In Search Console, check the effective Search generative AI inclusion setting, including inherited choices. Repair blockers first and date those repairs separately. Being indexed and snippet-eligible, with inclusion enabled, does not guarantee selection."
          ],
          list: [
            "Acceptance check: baseline export saved; HTTP 200, crawl access, visible answer, canonical, index status and snippet controls checked; inclusion setting recorded."
          ]
        },
        {
          heading: "Replace generic copy with checkable evidence",
          paragraphs: [
            "Draft the direct answer, then explain what changes it. In the cleaning example, distinguish routine cleaning from optional tasks, state what information a quote needs and explain exclusions. Do not invent a price, turnaround time or customer outcome to make the answer sound specific.",
            "Add something the business can substantiate, such as its actual site-visit checklist or an anonymised scope example used with permission. Explain where the material came from and its limits. Identify the real author or reviewer and link to relevant background. Check service areas, inclusions and contact details against current business records."
          ],
          list: [
            "Acceptance check: a buyer can identify the answer, verify one original supporting item and see who checked the facts."
          ]
        },
        {
          heading: "Connect the page and describe it accurately",
          paragraphs: [
            "Link to the pilot page from a relevant service page and an existing related guide, where useful. Use descriptive link text and confirm the links reach the canonical destination. Give the answer page a clear route to the intended enquiry action.",
            "Review existing structured data rather than installing an AI schema package. For an article, check that its author and dates match the visible page. Use only markup appropriate to the content. Google requires neither special AI markup nor llms.txt for these features. The downloadable Markdown record is a working document for people, not an eligibility mechanism."
          ],
          list: [
            "Acceptance check: contextual links work, the enquiry route works on mobile and any structured data matches visible facts."
          ]
        },
        {
          heading: "Publish a limited change with a release record",
          paragraphs: [
            "Save the previous version and record exactly what changed: answer, evidence, authorship, links and markup. Name one accountable owner, whether the business owner or a specialist such as Koupoli's Karlo Ridan. Separate technical repairs from content improvements in the log.",
            "After publishing, repeat the live-page checks and record the release date. Later, note when URL Inspection shows a crawl after the release. Choose the comparison windows and review date now. A 28-day checkpoint is a planning choice, not Google's promised response time. Avoid unrelated rewrites during the pilot; log unavoidable changes. The implementation can pass its acceptance checks even when visibility data remains inconclusive. Do not make a citation the condition for completing useful page work."
          ],
          list: [
            "Acceptance check: the previous version, change log, owner, live checks and scheduled review are saved in the pilot record."
          ]
        },
        {
          heading: "Compare like with like and make one decision",
          paragraphs: [
            "Compare equal complete windows using the same property, page, country, device, search type and query-filter rules. Review overall Web impressions and clicks, plus qualified enquiries separately. Where available, record the page's Generative AI report impressions with matching supported filters. Those impressions already sit within Web totals; do not add them together.",
            "Do not infer AI citations from ordinary query impressions or average position. The dedicated AI report has no query dimension. A missing report may reflect insufficient impressions. Search Console also omits anonymised query rows, so a handful of observations cannot establish success or failure.",
            "Choose one decision: fix a blocker, keep the improvement, extend observation or revise the answer. Note recrawling, demand changes and other releases as possible explanations. A before-and-after difference alone does not prove the pilot caused it."
          ]
        }
      ],
      sources: [
        {
          label: "Google Search Central: Optimizing your website for generative AI features",
          href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
        },
        {
          label: "Google Search Central: AI features and your website",
          href: "https://developers.google.com/search/docs/appearance/ai-features"
        },
        {
          label: "Google Search Central: Creating helpful, reliable, people-first content",
          href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
        },
        {
          label: "Google Search Console: Search generative AI control",
          href: "https://support.google.com/webmasters/answer/16908024?hl=en"
        },
        {
          label: "Google Search Console: Generative AI performance report, Search",
          href: "https://support.google.com/webmasters/answer/16984139?hl=en"
        },
        {
          label: "Google Search Console: Advanced filtering and comparison",
          href: "https://support.google.com/webmasters/answer/17011165?hl=en"
        },
        {
          label: "Google Search Console: Dimensions and data groupings",
          href: "https://support.google.com/webmasters/answer/17011259?hl=en"
        }
      ]
    },
    {
      slug: "ai-search-visibility",
      date: "October 2, 2026",
      updated: { date: "October 18, 2026", iso: "2026-10-18" },
      title: "AI Search Visibility: What to Measure Before You Optimise",
      metaTitle: "AI Search Visibility: What to Measure | Koupoli",
      metaDescription: "A practical framework for measuring AI search visibility without confusing impressions, mentions, rankings, and commercial outcomes.",
      excerpt: "A practical measurement framework for teams that want to understand AI-search visibility before buying tools or chasing mentions.",
      image: "/assets/koupoli-ai-search-visibility-note-light.webp",
      imageAlt: "Editorial infographic showing AI search visibility measurement signals",
      sections: [
        {
          heading: "Start with the decision, not the dashboard",
          paragraphs: [
            "AI-search reporting is easy to make noisy. A brand mention might be interesting, but it does not automatically show whether the right audience found a useful page, whether that page was eligible to appear, or whether visibility supported a commercial outcome.",
            "Begin with one decision the measurement should support. It might be whether to improve a technical page, expand a topic cluster, protect a high-value query, or validate that a launch is reaching the intended market. That decision determines which data is useful and what can be ignored.",
          ],
        },
        {
          heading: "Use Search Console as the first source of truth",
          paragraphs: [
            "Google's Generative AI performance reporting gives a dedicated view of impressions from generative features in Search. It can be broken down by page, country, device, and date. That makes it a useful starting point for finding which pages are appearing and where visibility is changing.",
            "The report should sit beside the normal Search performance report, not replace it. The strongest interpretation comes from comparing the page's AI-feature visibility with its broader impressions, clicks, query patterns, and the action the page is meant to support.",
          ],
          list: [
            "Which pages appear in generative features and whether those pages match priority topics.",
            "Which countries and devices show the visibility, especially when a launch has a clear market focus.",
            "Whether a change in impressions lines up with a technical release, new information, or improved internal linking.",
            "Whether the pages that gain visibility also move visitors toward an enquiry, sign-up, product view, or other intended action.",
          ],
        },
        {
          heading: "Separate presence from performance",
          paragraphs: [
            "Presence is evidence that a page was eligible and selected for an AI-search feature. Performance asks whether that presence supports the business goal. The two measures are related, but they are not interchangeable.",
            "For a service business, a sensible scorecard combines search demand for the topic, indexation and page quality, visibility for the important questions, qualified visits, and the downstream signal that matters to the team. That might be an enquiry, a demo request, or a sales conversation with the right context.",
          ],
        },
        {
          heading: "Use a small measurement record",
          paragraphs: [
            "A useful review starts with one priority question, the page intended to answer it, and the commercial decision behind the work. Record normal Search performance alongside AI-feature impressions when they become available, then note the next action the evidence supports.",
            "For example, rising AI-feature impressions with no qualified visits may call for a stronger page path or clearer commercial context. Rising normal-search impressions with weak average position may call for more supporting evidence, not a new page for every wording variation.",
          ],
          list: [
            "Keep the review to a small set of priority pages and revisit it weekly rather than reacting to daily movement.",
            "Separate normal-search impressions, generative AI impressions, qualified visits, and enquiries instead of combining them into one score.",
            "Write down the release or content change beside the observation so the team can understand what may have influenced it.",
          ],
        },
        {
          heading: "What not to optimise for",
          paragraphs: [
            "Avoid treating a third-party mention counter as a rank tracker. AI answers can change with the question, location, model, and source set. A tool can be useful for discovering patterns, but it cannot replace first-party Search Console data or commercial analytics.",
            "Also avoid manufacturing a separate page for every possible prompt variation. Clear topic ownership, useful examples, and technically accessible pages are more durable than an expanding library of thin answer pages.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: Generative AI performance reports", href: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
      ],
      resource: { href: "/downloads/ai-search-visibility-scorecard.md", label: "Download the AI search visibility scorecard", description: "Use the editable Markdown scorecard to track priority questions, supporting pages, and the next decision." },
    },
    {
      slug: "website-migration-seo",
      date: "October 2, 2026",
      updated: { date: "November 17, 2026", iso: "2026-11-17" },
      title: "Website Migration SEO: A Practical Launch Checklist",
      metaTitle: "Website Migration SEO: A Practical Checklist | Koupoli",
      metaDescription: "Website migration SEO checklist: map URLs, test redirects, check canonical and crawl signals, and monitor indexing and search performance after launch.",
      excerpt: "Website migration SEO requires a URL inventory, relevant destination mapping, tested redirects, and consistent crawl and canonical signals. Preserve important page intent, verify the live site, and monitor indexing and search performance after launch.",
      image: "/assets/koupoli-website-migration-note-light.webp",
      imageAlt: "Editorial infographic showing a structured website migration map",
      resource: { href: "/downloads/website-migration-seo-checklist.md", label: "Download the migration checklist", description: "Use the editable Markdown template to assign owners, map URLs, and record launch checks." },
      sections: [
        {
          heading: "A migration is an information move, not just a redesign",
          paragraphs: [
            "A new site changes more than the visual system. It can change URL structure, internal links, templates, metadata, page speed, language handling, and the way search engines understand the relationship between pages. Treating it as a design launch leaves too much to chance.",
            "The useful question is not whether every old URL should survive unchanged. It is whether every important search intent, internal link path, and business-critical page has a deliberate destination on the new site.",
          ],
          link: {before: "The ", href: "/case-studies/multi-market-website-migration/", label: "website migration case study", after: " shows documented migration responsibilities and a separate, reproducible URL check on Koupoli's own site."},
        },
        {
          heading: "Create the inventory before development locks in",
          paragraphs: [
            "Before a build is final, export the existing URLs and mark the pages that currently earn traffic, links, conversions, or internal importance. Add proposed destinations, owners, and a status for each decision. This turns redirects into a planning exercise instead of an emergency task.",
          ],
          list: [
            "Map high-value legacy URLs to the most relevant new URL, one by one.",
            "Record pages that should be consolidated, retired, or kept because they serve a distinct search intent.",
            "Protect titles, headings, copy, and internal links on pages that already perform until there is evidence for a change.",
            "Agree a staging review that checks crawlability, rendering, canonical tags, language alternates, and noindex directives before launch.",
          ],
        },
        {
          heading: "Turn the inventory into a migration map",
          paragraphs: [
            "A useful migration map gives every important legacy URL a named final destination and a reason for the decision. It is the shared record for the people changing content, implementation, analytics, and redirects. Without it, each team can make a locally reasonable change that sends the visitor or crawler somewhere different.",
            "The sequence below turns a migration plan into work that can be assigned and checked. Each step needs an owner and a pass condition before the next one is treated as complete.",
          ],
          list: [
            "1. Benchmark: record priority landing pages, queries, conversions, backlinks, and technical baselines. Owner: SEO or analytics lead. Pass condition: the baseline is saved before work begins.",
            "2. Inventory: list current URLs and identify the pages that carry distinct traffic, links, conversions, or business intent. Owner: SEO and content lead. Pass condition: every priority URL has a status.",
            "3. Map destinations: assign each priority legacy URL its closest final equivalent. Owner: SEO and content lead. Pass condition: no important intent is redirected by default to the homepage.",
            "4. Preserve intent: confirm that final pages retain the information, title, heading, and internal-link context needed for their purpose. Owner: content lead. Pass condition: priority pages have an indexable final destination.",
            "5. Prepare redirects: implement and test direct, single-hop redirects from legacy URLs to their final destinations. Owner: developer. Pass condition: no loop, chain, or irrelevant homepage redirect remains.",
            "6. Validate final signals: check canonical URLs, hreflang pairs, robots directives, structured data, and sitemap entries. Owner: SEO and developer. Pass condition: every signal names the final page.",
            "7. Run launch QA: test mobile layouts, forms, analytics, priority paths, and live response codes. Owner: delivery lead. Pass condition: the launch checklist is signed off against the public site.",
            "8. Monitor after launch: inspect high-risk URLs, sitemap processing, and priority search pages in Search Console. Owner: SEO or analytics lead. Pass condition: clear issues are logged, owned, and fixed without delay.",
          ],
        },
        {
          heading: "Treat redirects and internal links as one system",
          paragraphs: [
            "A redirect is not a substitute for a clean new architecture. Use direct server-side redirects for moved pages, then update internal navigation, content links, canonicals, hreflang tags, and sitemap URLs to point at the final destination. A visitor and a crawler should not have to pass through unnecessary hops.",
            "After launch, crawl the live site and compare the response codes, canonical URLs, and internal links against the migration map. The best time to discover a loop, a missing page, or an accidental noindex tag is before search traffic has had time to fall.",
            "For example, a retired guide about a specific product should not automatically redirect to the homepage. If it has no close successor, document the retirement or create a relevant destination. The homepage is only appropriate when it genuinely fulfils the old page's intent.",
          ],
        },
        {
          heading: "Give launch-day checks a clear owner",
          paragraphs: [
            "The launch should have a short checklist that can be completed while the site is public, rather than a technical review that starts after problems appear. The important checks are not only redirects: the destination page, its indexation signals, and the measurement setup need to agree with the plan.",
          ],
          list: [
            "Confirm priority legacy URLs redirect once to live, indexable destination pages.",
            "Check canonical URLs, hreflang pairs, internal links, and sitemap entries all name the final version.",
            "Remove temporary noindex or crawl restrictions and confirm analytics and conversion tracking can collect a baseline.",
            "Resubmit the sitemap only after the final public deployment, then use URL Inspection for the pages carrying the most risk.",
          ],
        },
        {
          heading: "Keep a short post-launch watch list",
          paragraphs: [
            "Search Console makes the first weeks more manageable. Check indexing and URL Inspection for representative pages, confirm that the sitemap is processed, and monitor the pages and queries that mattered before the move. Give Google time to recrawl, but do not wait to fix clear technical errors.",
            "The migration is complete when the new site is technically stable and the team can explain the performance movement. It is not complete when the homepage looks finished.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
        { label: "Google Search Central: Get started with Search Console", href: "https://developers.google.com/search/docs/monitor-debug/search-console-start" },
      ],
    },
    {
      slug: "generative-engine-optimization",
      date: "October 2, 2026",
      title: "Generative Engine Optimization: What Matters in Practice",
      metaTitle: "Generative Engine Optimization: What Matters | Koupoli",
      metaDescription: "Generative engine optimization explained in practical terms: durable SEO foundations, original information, technical clarity, and useful measurement.",
      excerpt: "GEO is useful language for a changing search experience, but it is not a replacement for SEO or a shortcut around real website work.",
      image: "/assets/koupoli-generative-search-note-light.webp",
      imageAlt: "Editorial infographic showing generative search built on SEO foundations",
      sections: [
        {
          heading: "GEO is a description, not a separate technical system",
          paragraphs: [
            "Generative engine optimization, often shortened to GEO, is commonly used to describe work intended to improve visibility in AI-generated answers. It can be helpful language when a team needs to discuss how search behaviour is changing.",
            "For Google Search, the core principle is simpler. Generative features are rooted in the same Search index and quality systems. A page still needs to be accessible, indexable, useful, and relevant before it has any chance of being selected as supporting information.",
          ],
        },
        {
          heading: "The practical work is still familiar",
          paragraphs: [
            "The strongest GEO programme is not a collection of isolated AI tactics. It is a disciplined SEO programme that gives the site a clear technical structure, accurate information, distinct points of view, and pages that answer real questions without inflating the claim.",
          ],
          list: [
            "Make important pages crawlable, indexable, and internally connected.",
            "Use clear headings and logical sections so readers can find the answer and the supporting context.",
            "Publish first-hand observations, examples, and decisions that a generic summary cannot reproduce.",
            "Keep entities, product details, author information, and references accurate and current.",
            "Use relevant structured data where it genuinely describes the page, not as an AI feature shortcut.",
          ],
        },
        {
          heading: "Avoid the invented checklist",
          paragraphs: [
            "There is no special schema type, LLMS.txt file, or fixed content length required to appear in Google's generative features. These ideas are often sold as universal requirements, but they distract from the work that actually improves a site's usefulness and technical health.",
            "That does not make experimentation pointless. It means the experiment should start with a credible hypothesis, a page that deserves to win, and a measurement plan. If the result is not useful for the visitor or cannot be explained to the team, it is unlikely to be a durable optimisation.",
          ],
        },
        {
          heading: "Build authority with evidence, not volume",
          paragraphs: [
            "A service site does not need hundreds of pages to participate in AI-mediated search. It needs a small, connected library that explains its expertise, shows how that expertise is applied, and gives buyers enough detail to make a decision.",
            "For Koupoli, that means linking practical Notes to the two offers: Organic Launch Consultation and SEO & AI Search Operations. The content should clarify what is measured, what is implemented, and what a buyer can expect from the work.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
  ],
  hr: [
    {
      slug: "seo-consultant-vs-agency",
      date: "17. studenoga 2026.",
      updated: {
        date: "17. studenoga 2026.",
        iso: "2026-11-17"
      },
      title: "SEO stručnjak ili agencija: Kada odabrati Koupoli?",
      metaTitle: "SEO stručnjak ili agencija: Usporedba za vaš tim | Koupoli",
      metaDescription: "Usporedite SEO stručnjaka i agenciju prema tehničkom opsegu, kontaktu, provedbi i kapacitetu tima. Provjerite kada Koupoli odgovara vašem poslu prije ponude.",
      excerpt: "Odaberite Koupoli za dogovoreni tehnički opseg uz izravnu suradnju s istim stručnjakom. Agenciju odaberite kada trebate potvrđenu pokrivenost šireg tima i paralelan rad. Usporedite odgovorne osobe, provedbu i stvarni kapacitet, ne pretpostavke o tome koji je model bolji za vaš posao.",
      image: "/assets/koupoli-consultant-vs-agency-hero.webp",
      imageAlt: "Dva različita načina rada koji predstavljaju samostalnog SEO stručnjaka i agencijski tim",
      imageCaption: "Samostalni stručnjak i agencija različiti su modeli izvedbe. Izbor ovisi o dogovorenom poslu i raspoloživom kapacitetu.",
      sections: [
        {
          heading: "Kratak odgovor: odaberite način izvedbe koji vaš tim treba",
          paragraphs: [
            "Osnivačima tvrtki, voditeljima marketinga i programerima koji biraju SEO stručnjaka ili agenciju važnije je tko će provesti sljedeće prioritete, uz koji kapacitet i odgovornost. Jedan stručnjak može temeljito pratiti određeno tehničko područje; širi tim može pokriti više usklađenih područja kada ponuda doista uključuje taj kapacitet.",
            "Napomena o mojoj ulozi: prodajem stručnu uslugu samostalnog stručnjaka. Ja sam Karlo Riđan, vlasnik Koupolija i jedina osoba koja kroz njega pruža usluge. Ova usporedba govori o prikladnosti, ne o univerzalnoj prednosti mojeg modela. Opisi agencija temelje se na njihovim javnim stranicama pregledanima 17. studenoga 2026., ne na mojem iskustvu kupnje njihovih usluga.",
            "Ovaj članak odgovara na pitanje tko izvodi posao. Prethodna usporedba pomaže odabrati SEO analizu ili kontinuiranu tehničku podršku. Obje vrste angažmana može pružiti stručnjak ili agencija; odabirom pružatelja još niste odredili opseg suradnje."
          ],
          link: {
            before: "Za tu zasebnu odluku pročitajte članak ",
            href: "/hr/post/seo-audit-vs-ongoing-technical-seo/",
            label: "SEO analiza ili kontinuirana tehnička SEO podrška",
            after: "."
          }
        },
        {
          heading: "SEO stručnjak ili agencija: sedam kriterija izvedbe",
          paragraphs: [
            "Agencijski stupac prikazuje mogućnosti koje treba potvrditi, ne standardno uključene usluge. WebFX, Victorious i Delante imaju različite javno opisane modele, objašnjene u nastavku."
          ],
          comparison: {
            caption: "Usporedite konkretnu ponudu i osobe dodijeljene poslu. Naziv agencija sam ne potvrđuje opseg, pristup stručnjaku ni zamjensku pokrivenost.",
            leftLabel: "Koupoli",
            rightLabel: "Agencijski model",
            rows: [
              {
                criterion: "Odgovorna osoba",
                left: "Izravno kontaktirate mene, stručnjaka odgovornog za svoj dogovoreni rad.",
                right: "Potvrdite voditelja izvedbe i kontakt. WebFX nudi voditelja suradnje s klijentom, Delante izravan stručni kontakt."
              },
              {
                criterion: "Tehnički fokus",
                left: "Pristup tražilica, indeksiranje, prikaz sadržaja, migracije, performanse i strukturirani podaci u dogovorenom opsegu.",
                right: "Provjerite potrebne tehničke vještine. Šire SEO usluge ovise o pružatelju i konkretnoj ponudi."
              },
              {
                criterion: "Odgovornost za provedbu",
                left: "Dogovorite što preuzimam ja, a što vaš programer provodi, odobrava i objavljuje.",
                right: "Potvrdite provodi li agencija promjene, priprema zadatke ili podržava vaš razvojni tim; naziv to ne određuje."
              },
              {
                criterion: "Kapacitet šireg tima",
                left: "Jedan stručnjak, bez automatski uključene proizvodnje sadržaja, stjecanja poveznica ili tima različitih uloga.",
                right: "Moguć paralelan rad ako su potvrđeni relevantni stručnjaci i kapacitet koji je dodijeljen vašem poslu."
              },
              {
                criterion: "Kontinuitet i pokrivenost",
                left: "Kontinuitet sa mnom; ograničena dostupnost i ovisnost o jednoj osobi. Dogovorite granice i predaju posla.",
                right: "Pitajte o promjenama tima, zamjenama i eskalaciji. Tim sam ne jamči zamjensku pokrivenost ni brzinu."
              },
              {
                criterion: "Naknada i ugovor",
                left: "Prilagođena ponuda. Potvrdite opseg, dostupnost, naplatu, dodatni rad i uvjete završetka suradnje.",
                right: "Javne smjernice za cijene ili prilagođena ponuda. Potvrdite usporediv opseg, obvezu trajanja i ugovorne uvjete."
              },
              {
                criterion: "Kada je prikladno",
                left: "Dogovoreni tehnički opseg koji traži izravan kontinuitet stručnjaka i jasan put do provedbe.",
                right: "Potvrđena pokrivenost šireg tima i istodobni poslovi koji traže više od kapaciteta jedne osobe."
              }
            ]
          },
          image: {
            src: "/assets/koupoli-consultant-agency-decision-hr.webp",
            alt: "Vodič za odabir Koupolijeva kontinuiteta i usmjerenog opsega ili potvrđene pokrivenosti agencijskog tima za paralelan rad",
            caption: "Odaberite način izvedbe, ne samo naziv. Izravan kontakt sa stručnjakom moguć je i u agenciji.",
            width: 1100,
            height: 711
          }
        },
        {
          heading: "Kada odgovara moj stručni opseg",
          paragraphs: [
            "Moja glavna stručna područja su pristup tražilica, indeksiranje, JavaScript prikaz sadržaja, migracije, performanse, strukturirani podaci i predaja zadataka razvojnom timu. Radim i na planiranju organske vidljivosti te osnovama AI pretrage kada odgovaraju zadatku. To nije obećanje AI citiranja ni automatski uključen cjelovit marketinški program.",
            "Osobno povezujem dijagnozu, prioritete, zadatke za provedbu i dogovorene provjere. To odgovara timu kojem treba ista osoba za praćenje tehničkog problema kroz više objava, bez stalnog ponovnog objašnjavanja konteksta. Ne uklanja ovisnosti o razvoju i ne jamči bržu isporuku.",
            "Velik web nije automatski prevelik za stručnjaka. Ograničen dio migracije ili provjera predloška mogu odgovarati; više istodobnih područja rada možda neće. Prije ponude trebam procijeniti platformu, opseg i dostupnost."
          ],
          link: {
            before: "Pogledajte ",
            href: "/hr/usluge/seo-optimizacija/",
            label: "Koupolijevu uslugu tehničkog SEO-a i AI pretrage",
            after: " za moj fokus i dogovorenu podršku provedbi."
          }
        },
        {
          heading: "Kada je potvrđena agencijska pokrivenost bolji izbor",
          paragraphs: [
            "Agencija može biti prikladnija kada tehničke promjene, proizvodnja sadržaja i drugi poslovi vezani uz pretragu trebaju napredovati istodobno. WebFX i Victorious objavljuju šire SEO opsege; pregledana Delanteova tehnička stranica potvrđuje izvedbu tehničkog tima, ne svaku moguću marketinšku uslugu.",
            "Pitajte koji su stručnjaci dodijeljeni vašem poslu, za što odgovaraju i što doista može teći paralelno. Više ljudi ne uklanja odobrenja, zajedničke ovisnosti ni ograničenja objava. Ponuda treba potvrditi uporabljiv kapacitet, ne samo opisati ukupne usluge agencije."
          ]
        },
        {
          heading: "WebFX: širi SEO i dodijeljena kontaktna osoba",
          paragraphs: [
            "WebFX javno opisuje SEO analize, kontinuirane planove rada, tehničko održavanje, optimizaciju stranica, izradu sadržaja, rad na autoritetu izvan weba, praćenje konkurenata i izvještavanje. Tehnička stranica uključuje brzinu, probleme pristupa i indeksiranja, preusmjeravanja, kanonske oznake i strukturirane podatke.",
            "Objavljeni model kontakta uključuje voditelja suradnje s klijentom uz podršku SEO stručnjaka i drugih članova tima. To može odgovarati širem poslu koji traži koordinaciju. Potvrdite tko rješava vaša tehnička pitanja i provedbu, bez pretpostavke da su stručnjaci nedostupni ili kapacitet neograničen. WebFX objavljuje pakete i omogućuje prilagođene ponude; stranicu s cijenama usporedite s ponuđenim opsegom."
          ]
        },
        {
          heading: "Victorious: SEO za velike sustave i suradnja više funkcija",
          paragraphs: [
            "Victoriousova stranica za velike sustave navodi tehnički SEO, migracije, AEO, istraživanje ključnih riječi, optimizaciju stranica, izradu sadržaja i izgradnju poveznica. Opisuje kontinuirani tehnički rad na složenim webovima, uključujući arhitekturu, navigaciju, interne poveznice i poddomene, uz suradnju s marketingom te proizvodnim i razvojnim timovima.",
            "Taj javno opisani opseg može odgovarati velikom sustavu s više područja rada. Pregledane stranice ne obećavaju izričito imenovanu pojedinačnu kontaktnu osobu; to ne dokazuje da izravan pristup nije dostupan. Pitajte o voditelju izvedbe i načinu eskalacije tehničkih pitanja. Smjernice za početni proračun i cijene za velike sustave odnose se na različite situacije, uz prilagođen opseg i ponudu."
          ]
        },
        {
          heading: "Delante: tehnički tim uz izravan kontakt sa stručnjakom",
          paragraphs: [
            "Delanteova stranica tehničkog SEO-a opisuje analize s preporukama, potrebne tehničke ispravke, optimizaciju brzine i slika, migracije, strukturirane podatke i mjesečno izvještavanje. Navodi i JavaScript te indeksiranje u sklopu pojedinačne strategije usmjerene na pokazatelje uspješnosti.",
            "Važno je da Delante izričito nudi kontakt s tehničkim SEO stručnjakom koji radi na webu, bez voditelja suradnje s klijentima, uz širi tehnički tim. Izravan stručni kontakt stoga nije isključiva Koupolijeva prednost. Potvrdite granice provedbe i dodijeljenu pokrivenost. Javni cjenovni pokazatelji miješaju opsege, valute i nejasna razdoblja, pa tražite prilagođenu ponudu umjesto da ih smatrate usporedivom fiksnom cijenom."
          ]
        },
        {
          heading: "Kontinuitet uključuje rizik ovisnosti o jednoj osobi",
          paragraphs: [
            "U Koupoliju surađujete sa mnom tijekom cijelog dogovorenog posla. Kao samostalni stručnjak pri dogovoru o dostupnosti trebam uzeti u obzir bolest, dopust i druge obveze. Prije početka treba dogovoriti potrebnu pokrivenost, umjesto pretpostavke o podršci u svako doba ili neograničenom paralelnom kapacitetu.",
            "Prije početka dogovorite ritam rada, očekivano vrijeme odgovora i postupak ako se objava ili moja dostupnost promijene. Nalazi, odluke i otvoreni zadaci trebaju biti dostupni vašem timu. Kada ovisnosti blokiraju koristan rad ili zahtjev premašuje kapacitet, razgovarajte o promjeni opsega, stanci ili predaji posla umjesto automatskog nastavka. Za predaju treba dogovoriti primatelja i pristup.",
            "Agenciji postavite ista pitanja: tko pokriva odsutnost, zadržava kontekst i rješava eskalaciju? Veća organizacija može osigurati zamjenu, ali konkretna ponuda to treba potvrditi."
          ],
          link: {
            before: "Pročitajte ",
            href: "/hr/about/",
            label: "više o meni i Koupoliju",
            after: " prije odluke odgovara li vašem timu suradnja s jednom osobom."
          }
        },
        {
          heading: "Imenujte programera, zadržite pristup i dogovorite prihvaćanje",
          paragraphs: [
            "Stručnjak ne pruža automatski samo savjete, a agencija nije automatski vaš razvojni tim. Za moj rad dogovorite što mogu preuzeti na vašoj platformi, a što provodi vaš programer. Imenujte tko odobrava i objavljuje promjene te tko provjerava javnu stranicu. Delante navodi potrebne ispravke, ali i za njih trebaju granice konkretnog projekta.",
            "Poslovni računi trebaju ostati u vašem vlasništvu. Dodijelite primjeren pristup Search Consoleu, analitici, CMS-u ili repozitoriju umjesto prijenosa vlasništva ili slanja lozinki u prvom upitu. Dogovorite gdje zadaci, evidencija promjena i izvozi podataka ostaju dostupni nakon završetka suradnje.",
            "Prihvaćanje treba navesti pogođene URL-ove ili predloške, očekivano ponašanje i dokaz provjere. Odvojeno pratite dovršen, provjeren i blokiran posao. Tehničke provjere pokazuju radi li dogovorena promjena; pozicije, kvalificirani upiti i drugi poslovni pokazatelji trebaju zasebne pouzdane podatke i kontekst."
          ]
        },
        {
          heading: "Dokaz načina rada, ne tvrdnja o rastu pozicija",
          paragraphs: [
            "Ovo je primjer provjere kvalitete na vlastitom Koupolijevu webu, opažen 7. studenoga 2026. Stara putanja /usluge/seo-optimizacija/ preusmjeravala je statusom HTTP 301 na /hr/usluge/seo-optimizacija/, koja je vraćala HTTP 200. Cjelovit zapis provjerio je i da kanonska oznaka i karta weba koriste konačnu hrvatsku putanju.",
            "Vrijednost za odabir suradnje je konkretan zapis prihvaćanja, ne obećanje rezultata u pretrazi. To je moj web, ne rezultat klijenta, njegova preporuka ili dokaz rasta pozicija. Primjer ne pokazuje kako radi bilo koja od agencija."
          ],
          image: {
            src: "/assets/koupoli-qa-support-example-hr.webp",
            alt: "Snimka provjere Koupolijeva vlastitog weba sa starom putanjom, konačnim hrvatskim URL-om i opaženim odgovorima HTTP 301 na HTTP 200",
            caption: "Primjer provjere vlastitog weba opažen 7. studenoga 2026. Koupolijev zapis nije rezultat klijenta ni dokaz rasta pozicija.",
            width: 692,
            height: 230
          },
          link: {
            before: "Zaseban primjer koordinacije opisuje ",
            href: "/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/",
            label: "studija slučaja migracije weba za više tržišta",
            after: "; nije riječ o gornjoj snimci vlastitog weba."
          }
        },
        {
          heading: "Usporedite opseg ponuda, ne neusporedive cijene",
          paragraphs: [
            "Moja cijena i dostupnost određuju se ponudom. Nema objavljene Koupolijeve tarife ni podrazumijevane uštede u odnosu na agenciju. Ne navodim brojčane agencijske cijene jer paketi, opsezi za velike sustave i tehničke usluge nisu ista kupnja. Pregledajte službene cjenovne informacije svakog pružatelja, pa usporedite konkretnu ponudu.",
            "Najprije uskladite isporuke, odgovornost za provedbu, dodijeljeni kapacitet i provjere. Potvrdite naplatu, moguće minimalno trajanje, otkazivanje, isključenja i odobravanje dodatnog rada. Odvojite ritam izvještavanja od vremena za izvedbu. Najniža istaknuta cijena malo govori ako potreban razvoj ili naknadne provjere nisu uključeni."
          ]
        },
        {
          heading: "Ograničen projekt može pokazati odgovara li suradnja",
          paragraphs: [
            "Ako niste sigurni u način rada, pitajte ima li smisla ograničen pilot ili zaseban projekt. Može obuhvatiti određen problem predloška ili kontrolnu točku migracije, uz unaprijed dogovoren pristup, isporuke i prihvaćanje. To je moguća prilagođena ponuda, ne standardni paket ni zajamčena dostupnost.",
            "Procijenite jasnoću zadataka, suradnju i provjere, ne kratkoročne pomake pozicija. Nastavite samo kada postoji opravdan sljedeći posao. Ako projekt pokaže potrebu za trajnim paralelnim timovima, razmotrite agenciju ili usklađenu suradnju stručnjaka i postojećeg tima."
          ]
        },
        {
          heading: "Znači li SEO stručnjak samo davanje savjeta?",
          paragraphs: [
            "Ne. Ponuda određuje dobivate li preporuke, zadatke spremne za razvoj, podršku provedbi ili dogovorene promjene. Mogu surađivati na izvedbi unutar potvrđenog opsega, ali ne provodim automatski sve na svakoj platformi. Prije potpisa imenujte odgovornu osobu za provedbu."
          ]
        },
        {
          heading: "Je li samostalni stručnjak uvijek jeftiniji ili brži?",
          paragraphs: [
            "Nije. Naknada ovisi o opsegu i odgovornosti; rokovi o dostupnosti, pristupu, složenosti i kapacitetu za objave. Izravan kontinuitet može olakšati suradnju, ali ne jamči brzinu. Usporedite jednak opseg i potvrđen kapacitet, ne tvrdnje o troškovima samostalnog ili agencijskog rada."
          ]
        },
        {
          heading: "Može li Koupoli raditi s internim timom ili agencijom?",
          paragraphs: [
            "Da, kada odgovaraju uloge, opseg i dostupnost. Mogu preuzeti određeno tehničko područje uz vaše programere, marketing ili agenciju. Dogovorite tko određuje prioritete, provodi, odobrava i provjerava posao kako bi stručni doprinos nadopunio postojeći tim, umjesto stvaranja proturječnih uputa."
          ]
        },
        {
          heading: "Što trebam poslati prije ponude?",
          paragraphs: [
            "Pošaljite web, platformu, prioritetni problem ili odluku, relevantna tržišta, planirane objave i podatak o tome tko može provesti promjene. Postojeći nalazi i okvir proračuna pomažu ako ih imate. Opišite potrebnu pokrivenost; ne šaljite lozinke ni osjetljive izvoze računa prije dogovora o primjerenom pristupu."
          ]
        },
        {
          heading: "Odaberite ljude i opseg koji odgovaraju poslu",
          paragraphs: [
            "Odaberite Koupoli za dogovoreni tehnički opseg uz izravnu suradnju s istim stručnjakom. Agenciju odaberite kada trebate potvrđenu pokrivenost šireg tima i paralelan rad. Nijedan model ne zamjenjuje jasnu odgovornost, realnu dostupnost ni kriterije prihvaćanja. Ako moj stručni opseg odgovara, možemo razgovarati bez pretpostavke da trebate kontinuirani angažman."
          ],
          link: {
            before: "Opišite svoju situaciju i ",
            href: "/hr/contact/",
            label: "razgovarajte sa mnom o ponudi za konkretan opseg",
            after: ". Ako posao traži širu pokrivenost, to treba usmjeriti odabir."
          }
        }
      ],
      sources: [
        {
          label: "Koupoli: stručni opseg i dogovorena podrška provedbi",
          href: "/hr/usluge/seo-optimizacija/"
        },
        {
          label: "WebFX: SEO usluge i tim zadužen za klijenta",
          href: "https://www.webfx.com/seo/services/"
        },
        {
          label: "WebFX: tehnički opseg i voditelj suradnje s klijentom",
          href: "https://www.webfx.com/seo/agency/technical-seo/"
        },
        {
          label: "WebFX: cijene paketa i prilagođene ponude",
          href: "https://www.webfx.com/seo/pricing/"
        },
        {
          label: "Victorious: pregled usluga i smjernice za početni proračun",
          href: "https://victorious.com/"
        },
        {
          label: "Victorious: opseg za velike sustave, suradnja i cjenovni kontekst",
          href: "https://victorious.com/markets/enterprise-seo/"
        },
        {
          label: "Victorious: objavljeni načini kontakta",
          href: "https://victorious.com/contact/"
        },
        {
          label: "Delante: tehnički opseg, izravan stručni kontakt i pojedinačni proračuni",
          href: "https://delante.co/technical-seo-services/"
        },
        {
          label: "Delante: postupak upita i prilagođeni planovi",
          href: "https://delante.co/contact/"
        }
      ]
    },
    {
      slug: "seo-audit-vs-ongoing-technical-seo",
      date: "17. studenoga 2026.",
      updated: {
        date: "17. studenoga 2026.",
        iso: "2026-11-17"
      },
      title: "SEO analiza ili kontinuirana tehnička SEO podrška",
      metaTitle: "SEO analiza ili kontinuirana tehnička SEO podrška | Koupoli",
      metaDescription: "Usporedite SEO analizu i kontinuiranu tehničku SEO podršku prema opsegu, provedbi i naplati. Odaberite dijagnozu, ciljanu ispravku ili opravdan redoviti rad.",
      excerpt: "Odaberite SEO analizu kada uzrok nije jasan, a netko može provesti preporuke. Kontinuirana podrška ima smisla za opravdan redoviti rad. Poznata, ograničena ispravka može trebati zaseban projekt.",
      image: "/assets/koupoli-seo-audit-vs-support-hero.webp",
      imageAlt: "SEO analiza i kontinuirana tehnička SEO podrška kao dva puta od dijagnoze do provjerenih promjena",
      imageCaption: "Odaberite dijagnozu ili podršku provedbi koja je potrebna vašem webu, ne najdulju suradnju.",
      sections: [
        {
          heading: "Počnite od posla koji treba obaviti",
          paragraphs: [
            "Vlasniku tvrtke koji bira SEO analizu ili kontinuiranu tehničku SEO podršku prvo postavljam jednostavno pitanje: trebate li razumjeti problem ili već imate opravdan posao koji treba provesti? Analizu odaberite kada uzrok nije jasan, a vaš tim može primijeniti nalaze. Kontinuiranu podršku odaberite kada redovite promjene opravdavaju provedbu i provjere. Za poznat, ograničen problem može biti dovoljan ciljani projekt.",
            "SEO analiza, često nazvana SEO audit, daje dijagnozu: dokaze, prioritete i preporuke u dogovorenom opsegu. Tehnička analiza usmjerena je na pristup tražilica, indeksiranje, prikaz sadržaja i povezane uvjete na webu. Kontinuirana tehnička SEO podrška znači redovit rad na dogovorenim prioritetima, uz podršku provedbi i provjere. Sam naziv usluge ne govori tko mijenja kod.",
            "Napomena o mojoj ulozi: kroz Koupoli nudim oba pristupa. Ja sam Karlo Riđan, stručnjak i vlasnik, a ne zaseban agencijski tim. Odabir ovisi o potrebnom poslu i tome tko ga može provesti, ne o tome koja suradnja traje dulje."
          ],
          link: {
            before: "Osnovne pojmove objašnjava ",
            href: "/hr/pojmovnik/tehnicki-seo/",
            label: "vodič za tehnički SEO",
            after: "; ovaj članak pomaže odlučiti koju uslugu kupiti."
          }
        },
        {
          heading: "SEO analiza ili kontinuirana tehnička SEO podrška: sedam kriterija",
          paragraphs: [
            "Usporedite modele suradnje, ne pretpostavljene stavke Koupolijeve ili agencijske ponude."
          ],
          comparison: {
            caption: "Prije odabira pružatelja usporedite posao, odgovornosti i model naplate.",
            leftLabel: "SEO analiza",
            rightLabel: "Kontinuirana tehnička SEO podrška",
            rows: [
              {
                criterion: "Opseg",
                left: "Određen pregled dogovorenih stranica, predložaka i tehničkih područja; širi SEO treba posebno uključiti.",
                right: "Dogovoreni ponavljajući zadaci i pokrivenost; sadržaj, poveznice i AI pretraga nisu automatski uključeni."
              },
              {
                criterion: "Isporuke",
                left: "Dokazi, pogođeni URL-ovi, preporuke po prioritetu i provjerljivi zadaci; potvrdite stvarnu isporuku.",
                right: "Dogovoreni zadaci, evidencija promjena, provjere i otvorene ovisnosti; odvojite objavljene promjene od savjeta."
              },
              {
                criterion: "Odgovornost za provedbu",
                left: "Predaja preporuka ako izvedba nije uključena; imenujte programera, osobu za odobrenje i provjeru.",
                right: "Izvedba, podrška razvoju ili pregled promjena; dogovorite tko je odgovoran za zadatak i objavu."
              },
              {
                criterion: "Rokovi",
                left: "Dogovoreni rok ovisi o pristupu i složenosti; predaja izvještaja nije završetak ispravaka.",
                right: "Ritam rada ovisi o prioritetima i kapacitetu za objave; nema fiksnog roka za rezultate u pretrazi."
              },
              {
                criterion: "Mjerenje i praćenje",
                left: "Početno stanje i dogovorene provjere; naknadni pregled je ograničen, ne neprekidno praćenje.",
                right: "Određene provjere, pokrivenost praćenja i pregled nalaza; upozorenja trebaju odgovornu osobu i put do ispravka."
              },
              {
                criterion: "Model naplate",
                left: "Jednokratna ili projektna ponuda; razjasnite naplaćuju li se izvedba i ponovne provjere zasebno.",
                right: "Periodična naplata dogovorenog opsega; potvrdite kapacitet, isključenja, preglede i uvjete prestanka suradnje."
              },
              {
                criterion: "Kada je prikladno",
                left: "Nejasni uzroci, odluka na temelju početnog stanja i kapacitet za provedbu preporuka.",
                right: "Web koji se mijenja, opravdani redoviti zadaci i potreba za vanjskom podrškom provedbi ili provjerom."
              }
            ]
          },
          image: {
            src: "/assets/koupoli-seo-audit-support-comparison-hr.webp",
            alt: "Usporedba SEO analize za dijagnozu i kontinuirane tehničke SEO podrške za redovitu provedbu i provjere",
            caption: "Analiza razjašnjava prioritete. Kontinuirana podrška pomaže provesti opravdan redoviti posao. Odgovornost za izvedbu treba dogovoriti u oba pristupa.",
            width: 1000,
            height: 492
          }
        },
        {
          heading: "Odaberite analizu kada uzrok nije jasan",
          paragraphs: [
            "Analiza je korisna kada važne stranice nedostaju u pretrazi, redizajn otvara tehnička pitanja ili dobivate proturječna objašnjenja problema. Vrijednost joj je smanjiti neizvjesnost dovoljno da možete odrediti što prvo treba popraviti. Dugačak izvoz upozorenja sam po sebi ne daje tu odluku.",
            "Prije kupnje odredite važne stranice i poslovno pitanje. Pitajte obuhvaća li pregled njihove predloške, putove kojima tražilica dolazi do sadržaja, upute za indeksiranje i prikazani sadržaj. Pregled uzorka može biti koristan, ali mora biti jasno što pokriva. Opća SEO analiza ne uključuje nužno svaku migraciju ili tehničku istragu.",
            "Ako vaš programer može provesti jasne zadatke, analiza s uporabljivom predajom može biti dovoljna. Inače zasebno planirajte izvedbu i proračun. Bolje informacije same ne rješavaju web."
          ]
        },
        {
          heading: "Odaberite ciljani projekt kada je ispravka poznata",
          paragraphs: [
            "Poznata pogreška u preusmjeravanju, jedan predložak s pogrešnom kanonskom oznakom ili ograničena provjera objave ne opravdavaju automatski cijelu analizu ni mjesečne SEO usluge. Razgovarajte o ciljanom opsegu: pogođenim URL-ovima, promjeni, ovisnostima i dokazima potrebnima za zatvaranje zadatka.",
            "To je mogućnost dogovora opsega, ne standardni Koupolijev paket. Možda treba dodatno istražiti uzrok i zaštititi povezane putanje. Dogovorite odobrenje novootkrivenog posla. Kada ispravka prođe provjere i nema opravdanih preostalih zadataka, projekt može završiti."
          ]
        },
        {
          heading: "Odaberite kontinuiranu podršku za opravdan redoviti rad",
          paragraphs: [
            "Kontinuirana podrška korisna je kada objave redovito mijenjaju predloške, navigaciju ili ponašanje URL-ova, ili migracija stvara ovisnosti kroz više faza. Može imati smisla i kada tim ima nalaze, ali treba redovitu pomoć u pretvaranju preporuka u zadatke i provjeri izvedenog.",
            "Razlog za mjesečnu SEO suradnju treba biti sljedeći opravdani posao, ne opća tvrdnja da SEO nikada ne završava. Pitajte što se sljedeće rješava, o kojoj objavi ovisi i tko to može provesti. Praćenje može otkriti nove pogreške, ali samo praćenje nije njihovo otklanjanje. Odredite što se prati, koliko često te tko pregledava upozorenja i provodi ispravke.",
            "Podrška traži i pažnju vašeg tima. Pregledajte opseg kada objave stanu, prioriteti budu riješeni ili ovisnosti blokiraju napredak. Stabilan web ne treba automatski kontinuirani tehnički angažman."
          ]
        },
        {
          heading: "Dogovorite predaju razvojnom timu prije početka",
          paragraphs: [
            "Najvažnija razlika između dviju ponuda može biti odgovornost, ne broj provjera. Preporuka iz analize, zadatak pripremljen za razvoj i objavljena ispravka različite su isporuke. Pitajte što kupujete i kako zadatak prelazi iz jedne faze u drugu.",
            "Koupoli pruža dijagnozu i dogovorenu podršku provedbi. Mogu podržati vaš razvojni tim ili pregledati relevantne promjene, ali to ne znači da automatski sam provodim sve promjene na svakoj platformi. Za stvarni projekt treba dogovoriti odgovornu osobu, pristup, predaju zadataka i provjere javne stranice.",
            "Uporabljiv zadatak navodi pogođeni URL ili predložak, opaženi problem i očekivano ponašanje. Imenuje osobu za provjeru i bilježi otvorene ovisnosti. Ilustrativni kriteriji prihvaćanja uključuju preusmjeravanje na dogovoreno odredište, očekivanu kanonsku oznaku u predlošku ili navigaciju s poveznicama koje tražilica može slijediti jer imaju atribut href, kako preporučuje Googleova dokumentacija o poveznicama."
          ],
          list: [
            "Imenujte tko piše i određuje prioritet zadatka te tko je odgovoran za kod ili postavke platforme.",
            "Dogovorite tko provodi, odobrava i objavljuje promjenu, uključujući ovisnosti na strani naručitelja.",
            "Odredite provjeru javne stranice, obuhvaćene URL-ove i dokaz kojim se zadatak zatvara.",
            "Po potrebi odvojite dodatnu istragu, izvedbu i ponovnu provjeru od izvornog opsega."
          ],
          link: {
            before: "Stranica ",
            href: "/hr/usluge/seo-optimizacija/",
            label: "Koupolijeve usluge tehničkog SEO-a",
            after: " objašnjava dijagnozu, prioritetne zadatke i dogovorenu podršku provedbi."
          }
        },
        {
          heading: "Zadatak na vlastitom webu: tehnička provjera, ne rast pozicija",
          paragraphs: [
            "Ovo je stvarna ispravka Koupolijeve putanje, provjerena 7. studenoga 2026. Stara putanja /usluge/seo-optimizacija/ vraćala je preusmjeravanje 301 na /hr/usluge/seo-optimizacija/, koja je vraćala status 200. Kanonska oznaka odredišta odgovarala je konačnom hrvatskom URL-u, a karta weba sadržavala je samo konačnu putanju, ne staru.",
            "Kriteriji su konkretni: izravno preusmjeravanje, dostupno odredište i usklađeni URL signali. Googleova dokumentacija za promjene URL-ova preporučuje trajna preusmjeravanja na mapirano odredište te ažurirane kanonske oznake i reference na URL-ove.",
            "Primjer je s mojeg weba. Pokazuje opaženo tehničko ponašanje, ne uspješnost klijenta, rast pozicija ili prometa. Prolazak provjera ne dokazuje da je Google odabrao taj kanonski URL niti da je promjena uzrokovala poslovni rezultat."
          ],
          image: {
            src: "/assets/koupoli-qa-support-example-hr.webp",
            alt: "Tablica provjere Koupolijevih URL-ova sa starom putanjom, konačnim hrvatskim URL-om i opaženim slijedom HTTP 301 na HTTP 200",
            caption: "Izvadak iz Koupolijeva zapisa provjere od 7. studenoga 2026. Cjelovit zapis provjerava i kanonsku oznaku te kartu weba; ne dokazuje rast pozicija.",
            width: 692,
            height: 230
          },
          link: {
            before: "Širu koordinaciju migracije opisuje ",
            href: "/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/",
            label: "studija slučaja migracije weba za više tržišta",
            after: ". To je zaseban primjer, a ne ova provjera vlastite putanje."
          }
        },
        {
          heading: "Odvojite rok isporuke od mjerenja u pretrazi",
          paragraphs: [
            "Rok analize dogovorite prema veličini weba, pristupu, složenosti platforme i potrebnom pregledu. Rok izvedbe ovisi o kapacitetu razvoja, odobrenjima za objavu i vanjskim ovisnostima. Rok izvještaja ni ritam podrške ne određuju rok za bolje pozicije u pretrazi.",
            "Mjerite koji su zadaci objavljeni, provjereni ili blokirani. Vodite evidenciju promjena i sljedeći prioritet. Sam broj upozorenja može zavarati: rast može značiti širi obuhvat pregleda, ne pogoršanje.",
            "Pregledajte dostupne podatke o pretrazi uz dosljedne stranice, tržišta i razdoblja. Kvalificirane upite ili prihod bilježite samo uz pouzdano praćenje. Zabilježite druge objave i promjene potražnje. Ne obećavam promet, pozicije ni AI citiranje; tehničko prihvaćanje odvojeno je od kasnijeg odgovora pretrage ili poslovanja."
          ]
        },
        {
          heading: "Usporedite model naplate, ne neusporedive cijene",
          paragraphs: [
            "Koupoli izrađuje ponude prema dogovorenom opsegu i nema javni cjenik. Naknada, rok i dodatni poslovi dogovaraju se za projekt. Pitajte završava li ponuda dijagnozom, uključuje li predaju zadataka ili i određenu podršku provedbi i ponovne provjere. Za kontinuirani rad dogovorite periodični opseg i uvjete pregleda, umjesto da ih pretpostavite iz naziva mjesečne suradnje.",
            "WebFX objavljuje mjesečne pakete i omogućuje prilagođene ponude. Victorious objavljuje smjernice za početni proračun i velike sustave, uz prilagođavanje konačnog opsega i ponude. Delante objavljuje okvirne raspone i pojedinačno određuje proračun. Ne navodim brojčane agencijske cijene: opsezi, valute i javni rasponi nisu izravno usporedivi međusobno ni s Koupolijevom ponudom."
          ],
          list: [
            "Usporedite iste stranice, isporuke i odgovornosti za izvedbu.",
            "Provjerite jesu li ponovne provjere, razvoj i troškovi platforme uključeni ili zasebni.",
            "Pisano potvrdite redoviti kapacitet, isključenja, moguće minimalno trajanje i uvjete otkazivanja."
          ]
        },
        {
          heading: "Koupoli, WebFX, Victorious i Delante: kontakt i kapacitet",
          paragraphs: [
            "Zatim odaberite način izvedbe. Opisi koriste službene stranice pregledane 17. studenoga 2026. i navedene u izvorima. To nisu jednaki opsezi ni ljestvica kvalitete.",
            "U Koupoliju izravno surađujete sa mnom, stručnjakom i vlasnikom koji povezuje dijagnozu, zadatke i provjere. Izravan pristup nije dostupan samo kod samostalnih stručnjaka: Delante ga izričito nudi bez voditelja klijentskih računa."
          ],
          comparison: {
            caption: "Javno opisani opseg i način kontakta. U svojoj ponudi potvrdite sastav tima i odgovornosti.",
            leftLabel: "Javno opisana ponuda",
            rightLabel: "Način kontakta",
            rows: [
              {
                criterion: "Koupoli",
                left: "Tehnička dijagnoza, prioritetni zadaci i dogovorena podrška izvedbi ili suradnja s razvojem; opseg za konkretan projekt.",
                right: "Izravan rad s Karlom Riđanom, samostalnim stručnjakom i vlasnikom; dogovorena predaja i odgovornosti."
              },
              {
                criterion: "WebFX",
                left: "Širi kontinuirani SEO, uključujući tehničko održavanje, optimizaciju stranica, sadržaj, autoritet i izvještavanje.",
                right: "Dodijeljeni voditelj klijentskog računa uz SEO stručnjake i širi tim zadužen za klijenta."
              },
              {
                criterion: "Victorious",
                left: "SEO za velike sustave uključuje kontinuirani tehnički rad, migracije, AEO, sadržaj i poveznice.",
                right: "Suradnja s marketingom, proizvodnim i razvojnim timovima; imenovana pojedinačna kontaktna osoba nije potvrđena na pregledanim stranicama."
              },
              {
                criterion: "Delante",
                left: "Tehničke analize, potrebne ispravke, brzina, migracije, strukturirani podaci i mjesečni izvještaji.",
                right: "Izravan kontakt s tehničkim SEO stručnjakom koji radi na webu, izričito bez voditelja klijentskih računa; izvedba šireg tima."
              }
            ]
          }
        },
        {
          heading: "Kada je veći tim bolji izbor",
          paragraphs: [
            "Više stručnjaka koji rade paralelno korisno je kada tehničke objave, proizvodnja sadržaja i izgradnja autoriteta istodobno traže redovit rad ili kada program za veliki sustav povezuje marketing, proizvod i razvoj. WebFX-ov širi stručni model i Victoriousova suradnja više funkcija odgovaraju takvoj koordinaciji. Delante povezuje izvedbu tehničkog tima s izravnim stručnim kontaktom.",
            "Moja samostalna praksa ima ograničen kapacitet. Pitajte o dostupnosti i prikladnosti za platformu. Agencije pitajte o sastavu tima, kontaktu i odgovornosti za izvedbu. Veličina tima ne dokazuje brzinu odgovora ni kvalitetu pristupa."
          ]
        },
        {
          heading: "Uključuje li SEO analiza i otklanjanje problema?",
          paragraphs: [
            "Ne automatski. Može završiti nalazima i preporukama. Ponuda može uključiti pripremu zadataka, pregled s razvojem, izvedbu ili naknadne provjere, ali svaku stavku treba jasno navesti. Ako trebate objavljene promjene, odredite odgovornu osobu za provedbu prije kupnje dijagnoze."
          ]
        },
        {
          heading: "Može li podrška početi od postojeće analize?",
          paragraphs: [
            "Da, ako su nalazi još relevantni. Provjerite važne probleme na javnom webu, utvrdite promjene od analize i pretvorite važeće preporuke u dogovorene zadatke. Ponavljanje cijele analize nije automatski potrebno, ali stare nalaze ne treba provoditi bez provjere."
          ]
        },
        {
          heading: "Je li tehnička podrška isto što i cjelovit SEO?",
          paragraphs: [
            "Nije. Tehnička podrška ne uključuje automatski proizvodnju sadržaja, stjecanje poveznica ni sve aktivnosti za AI pretragu. To mogu biti zasebna područja rada ili dogovoreni dodaci. Ponudu povežite sa stvarnim ograničenjem; tehnička ispravka ne zamjenjuje koristan sadržaj niti stvara potražnju."
          ]
        },
        {
          heading: "Kada pregledati ili pauzirati kontinuiranu podršku?",
          paragraphs: [
            "Pregledajte podršku kada se prioriteti promijene ili korisna isporuka stane. Ako sljedeći posao, odgovorna osoba i dokaz završetka nisu jasni, smanjite, promijenite ili pauzirajte angažman prema dogovorenim uvjetima."
          ]
        },
        {
          heading: "Odaberite najmanji angažman koji rješava potrebu",
          paragraphs: [
            "Moj zaključak: kupite analizu za nerazjašnjen problem i uporabljiv plan provedbe; dogovorite ciljani projekt za poznatu, ograničenu ispravku; odaberite kontinuiranu podršku kada je opravdavaju redoviti zadaci. Dosljedan kontakt i kapacitet tima važni su, ali ne zamjenjuju jasan opseg, odgovornost i kriterije prihvaćanja."
          ],
          link: {
            before: "Navedite web, platformu, važne stranice i odluku koju trebate donijeti pa ",
            href: "/hr/contact/",
            label: "razgovarajmo o odgovarajućem opsegu",
            after: ". Pristup i odgovornosti za provedbu dogovaraju se zasebno, ne pretpostavljaju."
          }
        }
      ],
      sources: [
        {
          label: "Koupoli: opseg tehničkog SEO-a i dogovorena podrška provedbi",
          href: "/hr/usluge/seo-optimizacija/"
        },
        {
          label: "WebFX: SEO usluge i tim zadužen za klijenta",
          href: "https://www.webfx.com/seo/services/"
        },
        {
          label: "WebFX: tehnički SEO i dodijeljeni voditelj klijentskog računa",
          href: "https://www.webfx.com/seo/agency/technical-seo/"
        },
        {
          label: "WebFX: javni paketi i prilagođene ponude",
          href: "https://www.webfx.com/seo/pricing/"
        },
        {
          label: "Victorious: prilagođeni angažmani i javne proračunske smjernice",
          href: "https://victorious.com/"
        },
        {
          label: "Victorious: SEO za velike sustave i suradnja više timova",
          href: "https://victorious.com/markets/enterprise-seo/"
        },
        {
          label: "Delante: tehnički SEO, pojedinačni proračuni i izravan kontakt sa stručnjakom",
          href: "https://delante.co/technical-seo-services/"
        },
        {
          label: "Delante: kontakt za ponudu i prilagođeni planovi",
          href: "https://delante.co/contact/"
        },
        {
          label: "Google Search Central: migracije s promjenama URL-ova",
          href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
        },
        {
          label: "Google Search Central: poveznice koje tražilice mogu slijediti",
          href: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
        },
        {
          label: "Koupoli: studija slučaja migracije weba za više tržišta",
          href: "/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/"
        }
      ]
    },
    {
      slug: "generative-engine-optimization-process",
      date: "2. studenoga 2026.",
      updated: { date: "7. studenoga 2026.", iso: "2026-11-07" },
      title: "Kako provesti generativnu optimizaciju: Praktičan plan",
      metaTitle: "Kako provesti generativnu optimizaciju: Plan | Koupoli",
      metaDescription: "Provedite generativnu optimizaciju na jednoj stranici: provjerite uvjete prikaza, dodajte dokaze, zabilježite izmjene i usporedite podatke bez tvrdnji o uzročnosti.",
      excerpt: "Plan generativne optimizacije u šest koraka za jedno pitanje kupca i jednu stranicu, s provjerama, zapisom objave i predloškom za probnu provedbu.",
      image: "/assets/koupoli-geo-implementation-plan.webp",
      imageAlt: "Plan generativne optimizacije koji povezuje pitanje kupca, dokaze, provjere stranice i mjerenje",
      resource: {
        href: "/downloads/plan-probne-generativne-optimizacije.md",
        label: "Preuzmite predložak za probnu generativnu optimizaciju",
        description: "Zabilježite pitanje, stranicu, početno stanje, dokaze, objavu i odluku u prilagodljivom Markdown predlošku."
      },
      sections: [
        {
          "heading": "Koupolijev praktičan primjer: jedan odgovor, odvojeni jezični zapisi",
          "paragraphs": [
            "Koupolijeva usluga tehničkog SEO-a daje primjer na vlastitom webu, a ne prikaz klijentskog projekta. Prethodne engleska i hrvatska stranica opisivale su opseg i korake rada u odvojenim cjelinama. Izmjena objedinjuje odgovor na pitanje 'Što uključuje angažman za tehnički SEO?' blizu početka stranice usluge: izravan rad s Karlom Ridanom, početne podatke, zadatke po prioritetu, kriterije prihvaćanja i dogovorenu predaju. Ne dodaje novi URL usluge, cijenu ni obećanje rezultata u pretraživanju.",
            "Pet pitanja u nastavku služi provjeri potpunosti odgovora. To su uredničke provjere, a ne upiti za koje se tvrdi da su zabilježeni u Search Consoleu ili da su doveli do AI citiranja. Početno stanje vodite zasebno za kanonski URL usluge na svakom jeziku, uz razdoblje, državu, uređaj i filtre upita. Spremite prethodnu stranicu i zabilježite datum objave. Povezani praktični primjer daje skup pitanja i zapis izmjene; ne navodi rezultat nakon promjene.",
            "Nakon objave provjerite javni odgovor i tehničke signale te zabilježite kada je Google posjetio izmijenjenu stranicu. Usporedite jednako duga završena razdoblja uz iste filtre. Impresije iz izvještaja o generativnom AI-ju promatrajte prema stranici gdje su dostupne, bez zbrajanja s web-podacima i bez pripisivanja ovim pitanjima: izvještaj nema dimenziju upita. Mali uzorak traži dulje promatranje, a ne izmišljeni rast. Razlika prije i poslije ne dokazuje da ju je uzrokovala izmjena sadržaja."
          ],
          "list": [
            "Što angažman uključuje? Navedite dijagnostiku i tehnička područja važna za cilj te odvojite dogovoreni rad od mogućih dodataka.",
            "Tko će obavljati posao? Jasno navedite da kupac izravno surađuje s Karlom Ridanom i objasnite kako bi se uključio kupčev razvojni tim ili partner.",
            "Što trebam pripremiti za prvi razgovor? Navedite cilj, ciljne URL-ove, platformu i trenutačno dostupan pristup Google Search Consoleu.",
            "Što ću dobiti i tko provodi izmjene? Opišite zadatke poredane po prioritetu, kriterije prihvaćanja i dogovorenu predaju zadataka ili podršku pri implementaciji.",
            "Kako se dogovaraju opseg i praćenje napretka? Objasnite koji su rad i mjerenje uključeni, bez izmišljanja cijene, roka ili zajamčenog rezultata."
          ]
        },
        {
          heading: "Odaberite jedno pitanje kupca i jednu stranicu",
          paragraphs: [
            "Generativnu optimizaciju provedite tako da poboljšate jednu korisnu stranicu oko pitanja kupca, zabilježite izmjenu i pregledate usporedive podatke. Ovaj se plan odnosi na Googleove AI značajke pretraživanja. Ishod rada je bolji odgovor i dokumentirana odluka, a ne zajamčeno citiranje.",
            "Odaberite pitanje iz stvarnih upita kupaca ili Search Consolea, a zatim stranicu koja na njega treba odgovoriti. Srodne formulacije obradite zajedno umjesto izrade konkurentskih stranica. Prije početka odredite koliko ćete vremena uložiti.",
            "Ilustrativan primjer uslužne tvrtke, ne prikaz klijentskog projekta: tvrtka za čišćenje ureda u Zagrebu mogla bi odgovoriti na pitanje 'Što uključuje ponuda za čišćenje ureda?' u postojećem vodiču na hrvatskom jeziku. Željena radnja je relevantan zahtjev za ponudu."
          ],
          list: [
            "Uvjet prolaza: zabilježeni su jedno pitanje, tržište, jezik, ciljni URL, željena radnja i vremensko ograničenje rada."
          ]
        },
        {
          heading: "Spremite početno stanje i uklonite tehničke prepreke",
          paragraphs: [
            "Prije uređivanja izvezite podatke stranice iz Search Consoleova izvještaja o web-pretraživanju. Uz impresije, klikove i prosječnu poziciju spremite datume, svojstvo, stranicu, državu, uređaj i eventualni filtar upita. Sačuvajte i pregled stranice bez filtra upita. Kvalificirane poslovne upite bilježite zasebno ako ih već pratite. Za novu stranicu navedite da početni podaci nisu dostupni; nemojte ih zamijeniti podacima cijelog weba kao da pripadaju toj stranici.",
            "Pregledajte indeksirani URL i kanonsku adresu. Provjerite HTTP odgovor, pristup Googlebota, prikaz teksta odgovora, direktive indeksiranja i kontrole isječaka. U Search Consoleu provjerite uključuje li važeća postavka stranicu u generativne AI značajke, uključujući naslijeđene postavke. Prepreke uklonite prvo i zasebno zabilježite datum popravka. Indeksiranje, dopušten prikaz isječka i uključivanje u značajke ne jamče odabir."
          ],
          list: [
            "Uvjet prolaza: izvoz je spremljen; provjereni su HTTP 200, pristup robotu, vidljiv odgovor, kanonska adresa, indeksiranje i kontrole isječaka; postavka uključivanja je zabilježena."
          ]
        },
        {
          heading: "Zamijenite općenit tekst provjerljivim dokazima",
          paragraphs: [
            "Napišite izravan odgovor, a zatim objasnite o čemu on ovisi. U primjeru čišćenja odvojite redovito čišćenje od dodatnih poslova, navedite podatke potrebne za ponudu i objasnite što nije uključeno. Nemojte izmišljati cijenu, rok ili rezultat klijenta kako bi odgovor zvučao konkretnije.",
            "Dodajte nešto što tvrtka može potkrijepiti, poput stvarnog kontrolnog popisa za obilazak prostora ili anonimiziranog primjera opsega posla za koji postoji dopuštenje za objavu. Objasnite podrijetlo materijala i njegova ograničenja. Navedite stvarnog autora ili stručnog recenzenta i povežite podatke o njegovu iskustvu. Područje usluge, uključene poslove i kontakte usporedite s aktualnim poslovnim podacima."
          ],
          list: [
            "Uvjet prolaza: kupac može pronaći odgovor, provjeriti jedan izvorni potporni materijal i vidjeti tko je provjerio činjenice."
          ]
        },
        {
          heading: "Povežite stranicu i opišite je točnim oznakama",
          paragraphs: [
            "Povežite probnu stranicu s relevantne stranice usluge i postojećeg povezanog vodiča, gdje je to korisno. Koristite opisni tekst poveznica i provjerite vode li na kanonsku adresu. Sa stranice s odgovorom omogućite jasan put prema slanju poslovnog upita.",
            "Pregledajte postojeće strukturirane podatke umjesto dodavanja paketa AI oznaka. Ako je riječ o članku, provjerite odgovaraju li autor i datumi vidljivom sadržaju. Koristite samo oznake primjerene sadržaju. Google za ove značajke ne zahtijeva posebne AI oznake ni llms.txt. Markdown predložak za preuzimanje radni je dokument za ljude, a ne uvjet prikaza."
          ],
          list: [
            "Uvjet prolaza: kontekstualne poveznice rade, slanje upita funkcionira na mobitelu, a strukturirani podaci odgovaraju vidljivim činjenicama."
          ]
        },
        {
          heading: "Objavite ograničenu izmjenu i zabilježite je",
          paragraphs: [
            "Spremite prethodnu verziju i navedite što se točno mijenjalo: odgovor, dokazi, autorstvo, poveznice i oznake. Odredite jednu odgovornu osobu, bilo vlasnika tvrtke ili stručnjaka poput Koupolijeva Karla Ridana. U zapisu odvojite tehničke popravke od poboljšanja sadržaja.",
            "Nakon objave ponovite provjere na javnoj stranici i zabilježite datum. Naknadno zapišite kada URL Inspection pokaže Googleov posjet nakon objave. Sada odredite razdoblja usporedbe i datum pregleda. Pregled nakon 28 dana služi planiranju, nije Googleovo obećanje o roku reakcije. Tijekom probe izbjegavajte nepovezane prerade; neizbježne promjene zabilježite. Provedba može zadovoljiti provjere i kada podaci o vidljivosti ne dopuštaju zaključak. Nemojte citiranje postaviti kao uvjet završetka korisnog rada na stranici."
          ],
          list: [
            "Uvjet prolaza: spremljeni su prethodna verzija, zapis izmjena, odgovorna osoba, provjere javne stranice i datum pregleda."
          ]
        },
        {
          heading: "Usporedite iste uvjete i donesite jednu odluku",
          paragraphs: [
            "Usporedite jednako duga završena razdoblja uz isto svojstvo, stranicu, državu, uređaj, vrstu pretraživanja i pravila filtriranja upita. Pregledajte ukupne web-impresije i klikove, a kvalificirane poslovne upite zasebno. Kada su dostupne, zabilježite impresije stranice iz izvještaja o generativnom AI-ju uz iste podržane filtre. One su već uključene u ukupne web-podatke; nemojte ih zbrajati.",
            "Iz uobičajenih impresija upita ili prosječne pozicije nemojte zaključivati da vas AI citira. Zaseban AI izvještaj nema dimenziju upita. Njegov izostanak može značiti da nema dovoljno impresija. Search Console također izostavlja anonimizirane upite, pa nekoliko opažanja ne može potvrditi uspjeh ni neuspjeh.",
            "Odaberite jednu odluku: ukloniti prepreku, zadržati poboljšanje, produljiti promatranje ili doraditi odgovor. Kao moguća objašnjenja zabilježite Googleov ponovni posjet, promjene potražnje i druge objave. Sama razlika prije i poslije ne dokazuje da ju je uzrokovala probna provedba."
          ]
        }
      ],
      sources: [
        {
          label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke",
          href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
        },
        {
          label: "Google Search Central: AI značajke i vaša web-stranica",
          href: "https://developers.google.com/search/docs/appearance/ai-features"
        },
        {
          label: "Google Search Central: Koristan, pouzdan sadržaj usmjeren na ljude",
          href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
        },
        {
          label: "Google Search Console: Upravljanje uključivanjem u generativne AI značajke",
          href: "https://support.google.com/webmasters/answer/16908024?hl=en"
        },
        {
          label: "Google Search Console: Izvještaj o uspješnosti generativnog AI-ja u Pretraživanju",
          href: "https://support.google.com/webmasters/answer/16984139?hl=en"
        },
        {
          label: "Google Search Console: Napredno filtriranje i usporedba",
          href: "https://support.google.com/webmasters/answer/17011165?hl=en"
        },
        {
          label: "Google Search Console: Dimenzije i grupiranje podataka",
          href: "https://support.google.com/webmasters/answer/17011259?hl=en"
        }
      ]
    },
    {
      slug: "ai-search-visibility",
      date: "2. listopada 2026.",
      updated: { date: "18. listopada 2026.", iso: "2026-10-18" },
      title: "Vidljivost u AI pretrazi: Što mjeriti prije optimizacije",
      metaTitle: "Vidljivost u AI pretrazi: Što mjeriti | Koupoli",
      metaDescription: "Praktičan okvir za mjerenje vidljivosti u AI pretrazi bez miješanja impresija, spominjanja, pozicija i poslovnih rezultata.",
      excerpt: "Praktičan okvir mjerenja za timove koji žele razumjeti vidljivost u AI pretrazi prije kupnje alata ili lova na spominjanja.",
      image: "/assets/koupoli-ai-search-visibility-note-light.webp",
      imageAlt: "Urednički infografički prikaz signala za mjerenje vidljivosti u AI pretrazi",
      sections: [
        {
          heading: "Krenite od odluke, a ne od nadzorne ploče",
          paragraphs: [
            "Izvještavanje o AI pretrazi lako postane bučno. Spominjanje brenda može biti zanimljivo, ali samo po sebi ne govori je li prava publika pronašla korisnu stranicu, je li stranica bila podobna za prikaz ili je li vidljivost podržala poslovni rezultat.",
            "Krenite od jedne odluke koju mjerenje treba podržati. To može biti odluka o poboljšanju tehničke stranice, proširenju tematskog klastera, zaštiti vrijednog upita ili provjeri doseže li lansiranje željeno tržište. Ta odluka određuje koji su podaci korisni.",
          ],
        },
        {
          heading: "Neka Search Console bude prvi izvor istine",
          paragraphs: [
            "Googleov izvještaj o uspješnosti generativnog AI-ja daje poseban pregled impresija iz generativnih značajki u Pretraživanju. Moguće ga je promatrati prema stranici, državi, uređaju i datumu. To je dobro polazište za otkrivanje stranica koje se prikazuju i promjena u vidljivosti.",
            "Izvještaj treba koristiti uz uobičajeni izvještaj o uspješnosti pretraživanja, a ne umjesto njega. Najbolje tumačenje dolazi iz usporedbe AI vidljivosti stranice s ukupnim impresijama, klikovima, obrascima upita i radnjom koju stranica treba potaknuti.",
          ],
          list: [
            "Koje se stranice pojavljuju u generativnim značajkama i odgovaraju li prioritetnim temama.",
            "U kojim državama i na kojim uređajima nastaje vidljivost, posebno kada lansiranje ima jasno ciljno tržište.",
            "Povezuje li se promjena impresija s tehničkim izdanjem, novim informacijama ili boljim internim povezivanjem.",
            "Pomiču li stranice koje dobivaju vidljivost posjetitelje prema upitu, prijavi, pregledu proizvoda ili drugoj namjeravanoj radnji.",
          ],
        },
        {
          heading: "Odvojite prisutnost od rezultata",
          paragraphs: [
            "Prisutnost je dokaz da je stranica bila podobna i odabrana za AI značajku pretraživanja. Rezultat pita podupire li ta prisutnost poslovni cilj. Ta su dva mjerenja povezana, ali nisu ista.",
            "Za uslužnu tvrtku razuman pregled povezuje potražnju za temom, indeksiranje i kvalitetu stranice, vidljivost za važna pitanja, kvalificirane posjete i signal koji je timu važan. To može biti upit, zahtjev za demonstraciju ili prodajni razgovor s pravim kontekstom.",
          ],
        },
        {
          heading: "Koristite mali zapis mjerenja",
          paragraphs: [
            "Koristan pregled počinje jednim prioritetnim pitanjem, stranicom koja na njega treba odgovoriti i poslovnom odlukom koja stoji iza rada. Zabilježite uobičajenu izvedbu u Pretraživanju uz impresije AI značajki kada postanu dostupne, a zatim odredite koju sljedeću radnju dokaz podupire.",
            "Primjerice, rast impresija AI značajki bez kvalificiranih posjeta može značiti da stranici treba jasniji put prema usluzi ili bolji poslovni kontekst. Rast uobičajenih impresija uz slabu prosječnu poziciju može značiti da treba više potpornih dokaza, a ne novu stranicu za svaku varijantu upita.",
          ],
          list: [
            "Pregled ograničite na mali skup prioritetnih stranica i ponavljajte ga jednom tjedno umjesto reakcije na dnevna kretanja.",
            "Odvojite uobičajene impresije pretraživanja, impresije generativnog AI-ja, kvalificirane posjete i upite umjesto da ih spajate u jednu ocjenu.",
            "Uz opažanje zabilježite izdanje ili promjenu sadržaja kako bi tim razumio što je moglo utjecati na rezultat.",
          ],
        },
        {
          heading: "Što ne treba optimizirati",
          paragraphs: [
            "Nemojte brojilo spominjanja treće strane tretirati kao alat za praćenje pozicija. AI odgovori mogu se mijenjati ovisno o pitanju, lokaciji, modelu i skupu izvora. Alat može pomoći u pronalasku uzoraka, ali ne može zamijeniti podatke iz Search Consolea ili poslovnu analitiku.",
            "Izbjegavajte i izradu zasebne stranice za svaku moguću varijaciju prompta. Jasno vlasništvo nad temom, korisni primjeri i tehnički dostupne stranice trajniji su od rastuće zbirke tankih stranica s odgovorima.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: Izvještaji o uspješnosti generativnog AI-ja", href: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
      ],
      resource: { href: "/downloads/scorecard-vidljivosti-u-ai-pretrazi.md", label: "Preuzmite kontrolni pregled vidljivosti u AI pretrazi", description: "Upotrijebite prilagodljivi Markdown pregled za praćenje prioritetnih pitanja, povezanih stranica i sljedeće odluke." },
    },
    {
      slug: "website-migration-seo",
      date: "2. listopada 2026.",
      updated: { date: "17. studenoga 2026.", iso: "2026-11-17" },
      title: "SEO migracija web-stranice: Praktičan kontrolni popis",
      metaTitle: "SEO migracija web-stranice: Kontrolni popis | Koupoli",
      metaDescription: "Kontrolni popis za SEO migraciju: mapiranje URL-ova, provjere redirekcija i tehničkih signala te praćenje indeksiranja i organskog prometa nakon objave.",
      excerpt: "SEO migracija web-stranice zahtijeva popis postojećih URL-ova, mapiranje relevantnih odredišta, testirane redirekcije i usklađene tehničke signale. Sačuvajte namjeru važnih stranica, provjerite objavljeni web te pratite indeksiranje i rezultate pretraživanja nakon objave.",
      image: "/assets/koupoli-website-migration-note-light.webp",
      imageAlt: "Urednički infografički prikaz strukturirane migracijske mape web-stranice",
      resource: { href: "/downloads/seo-migracija-kontrolni-popis.md", label: "Preuzmite kontrolni popis za migraciju", description: "Upotrijebite prilagodljiv Markdown predložak za dodjelu vlasnika, mapiranje URL-ova i bilježenje provjera pri lansiranju." },
      sections: [
        {
          heading: "Migracija je premještanje informacija, a ne samo redizajn",
          paragraphs: [
            "Nova web-stranica mijenja više od vizualnog sustava. Može promijeniti strukturu URL-ova, interne poveznice, predloške, metapodatke, brzinu stranice, jezične verzije i način na koji tražilice razumiju odnos među stranicama. Ako je tretirate samo kao dizajnersko lansiranje, previše toga ostaje slučaju.",
            "Korisnije je pitanje ne treba li svaki stari URL ostati nepromijenjen. Pitanje je ima li svaka važna namjera pretraživanja, put interne poveznice i poslovno važna stranica promišljeno odredište na novoj web-stranici.",
          ],
          link: {before: "U ", href: "/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/", label: "studiji slučaja SEO migracije", after: " prikazane su dokumentirane odgovornosti pri migraciji i zasebna provjera URL-a na Koupolijevu webu koju možete ponoviti."},
        },
        {
          heading: "Izradite inventar prije zaključavanja razvoja",
          paragraphs: [
            "Prije završetka izrade izvezite postojeće URL-ove i označite stranice koje trenutačno donose promet, poveznice, konverzije ili imaju internu važnost. Dodajte predložena odredišta, vlasnike i status za svaku odluku. Tako redirekcije postaju planiranje umjesto hitnog rješavanja problema.",
          ],
          list: [
            "Mapirajte vrijedne stare URL-ove na najrelevantniji novi URL, jedan po jedan.",
            "Zabilježite stranice koje treba spojiti, povući ili zadržati jer pokrivaju zasebnu namjeru pretraživanja.",
            "Zaštitite naslove, podnaslove, tekst i interne poveznice stranica koje već rade dok ne postoji dokaz za promjenu.",
            "Dogovorite provjeru staging okruženja koja obuhvaća crawlabilnost, prikaz, canonical oznake, jezične alternative i noindex direktive prije lansiranja.",
          ],
        },
        {
          heading: "Pretvorite inventar u migracijsku mapu",
          paragraphs: [
            "Korisna migracijska mapa svakoj važnoj staroj adresi daje imenovano konačno odredište i razlog odluke. To je zajednički zapis za osobe koje mijenjaju sadržaj, implementaciju, analitiku i redirekcije. Bez njega svaki tim može donijeti lokalno razumnu odluku koja posjetitelja ili crawler vodi na drugo mjesto.",
            "Slijed u nastavku pretvara plan migracije u posao koji se može dodijeliti i provjeriti. Svaki korak treba vlasnika i uvjet prolaza prije nego što se sljedeći smatra dovršenim.",
          ],
          list: [
            "1. Postavite početno stanje: zabilježite prioritetne odredišne stranice, upite, konverzije, povratne poveznice i tehničke pokazatelje. Vlasnik: SEO ili analitički voditelj. Uvjet prolaza: početno stanje spremljeno je prije početka rada.",
            "2. Izradite inventar: popišite postojeće URL-ove i označite stranice s posebnim prometom, poveznicama, konverzijama ili poslovnom namjerom. Vlasnik: SEO i sadržajni voditelj. Uvjet prolaza: svaki prioritetni URL ima status.",
            "3. Mapirajte odredišta: odredite najbliži konačni ekvivalent za svaki prioritetni stari URL. Vlasnik: SEO i sadržajni voditelj. Uvjet prolaza: važna namjera nije automatski redirektana na početnu stranicu.",
            "4. Sačuvajte namjeru: potvrdite da konačne stranice zadržavaju informacije, naslov, podnaslov i kontekst internih poveznica potrebne za svoju svrhu. Vlasnik: sadržajni voditelj. Uvjet prolaza: prioritetne stranice imaju indeksabilno konačno odredište.",
            "5. Pripremite redirekcije: implementirajte i testirajte izravne redirekcije s jednim korakom na konačna odredišta. Vlasnik: programer. Uvjet prolaza: nema petlje, lanca ni nerelevantne redirekcije na početnu stranicu.",
            "6. Provjerite konačne signale: pregledajte canonical URL-ove, hreflang parove, robots direktive, strukturirane podatke i stavke sitemapa. Vlasnik: SEO i programer. Uvjet prolaza: svaki signal navodi konačnu stranicu.",
            "7. Provedite provjeru lansiranja: testirajte mobilni prikaz, obrasce, analitiku, prioritetne putanje i odgovore objavljene stranice. Vlasnik: voditelj isporuke. Uvjet prolaza: kontrolni popis lansiranja potvrđen je na javnoj web-stranici.",
            "8. Pratite nakon lansiranja: u Search Consoleu pregledajte URL-ove s najvećim rizikom, obradu sitemapa i prioritetne stranice u pretrazi. Vlasnik: SEO ili analitički voditelj. Uvjet prolaza: jasni problemi evidentirani su, dodijeljeni i brzo riješeni.",
          ],
        },
        {
          heading: "Redirekcije i interne poveznice čine jedan sustav",
          paragraphs: [
            "Redirekcija nije zamjena za čistu novu arhitekturu. Za premještene stranice koristite izravne redirekcije na razini poslužitelja, a zatim ažurirajte internu navigaciju, poveznice u sadržaju, canonical oznake, hreflang oznake i URL-ove u sitemapu tako da upućuju na konačno odredište.",
            "Nakon lansiranja crawlajte objavljenu web-stranicu i usporedite statusne kodove, canonical URL-ove i interne poveznice s migracijskom mapom. Najbolji je trenutak za otkrivanje petlje, stranice koja nedostaje ili slučajne noindex oznake prije pada organskog prometa.",
            "Primjerice, povučeni vodič o određenom proizvodu ne treba automatski redirektati na početnu stranicu. Ako nema bliskog nasljednika, povlačenje treba dokumentirati ili izraditi relevantno odredište. Početna stranica je prikladna samo kada doista ispunjava namjeru stare stranice.",
          ],
        },
        {
          heading: "Dodijelite vlasnika provjerama na dan lansiranja",
          paragraphs: [
            "Lansiranje treba imati kratak popis provjera koji se može dovršiti dok je web javno dostupan, a ne tehnički pregled koji počinje tek kada se pojave problemi. Važne nisu samo redirekcije: odredišna stranica, signali indeksiranja i mjerenje moraju se slagati s planom.",
          ],
          list: [
            "Potvrdite da prioritetni stari URL-ovi u jednom koraku vode na objavljene, indeksabilne odredišne stranice.",
            "Provjerite navode li canonical URL-ovi, hreflang parovi, interne poveznice i sitemap konačnu verziju.",
            "Uklonite privremeni noindex ili ograničenja crawlanja te potvrdite da analitika i praćenje konverzija mogu prikupiti početno stanje.",
            "Ponovno pošaljite sitemap tek nakon konačne javne objave, a zatim URL Inspectionom provjerite stranice s najvećim rizikom.",
          ],
        },
        {
          heading: "Zadržite kratak popis provjera nakon lansiranja",
          paragraphs: [
            "Search Console čini prve tjedne lakšima za upravljanje. Provjerite indeksiranje i URL Inspection za reprezentativne stranice, potvrdite da je sitemap obrađen te pratite stranice i upite koji su bili važni prije promjene. Googleu treba dati vrijeme za ponovno crawliranje, ali jasne tehničke pogreške ne treba odgađati.",
            "Migracija je dovršena kada je nova web-stranica tehnički stabilna i tim može objasniti kretanje rezultata. Nije dovršena kada početna stranica izgleda gotova.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
        { label: "Google Search Central: Početak rada sa Search Consoleom", href: "https://developers.google.com/search/docs/monitor-debug/search-console-start" },
      ],
    },
    {
      slug: "generative-engine-optimization",
      date: "2. listopada 2026.",
      title: "Generativna optimizacija: Što je važno u praksi",
      metaTitle: "Generativna optimizacija: Što je važno | Koupoli",
      metaDescription: "Generativna optimizacija objašnjena praktično: čvrsti SEO temelji, originalne informacije, tehnička jasnoća i korisno mjerenje.",
      excerpt: "GEO je koristan naziv za promijenjeno iskustvo pretraživanja, ali nije zamjena za SEO ni prečac oko stvarnog rada na web-stranici.",
      image: "/assets/koupoli-generative-search-note-light.webp",
      imageAlt: "Urednički infografički prikaz generativne pretrage izgrađene na SEO temeljima",
      sections: [
        {
          heading: "GEO je opis, a ne zaseban tehnički sustav",
          paragraphs: [
            "Generativna optimizacija, često skraćeno GEO, koristi se za opis rada koji želi poboljšati vidljivost u odgovorima koje generira AI. To može biti koristan naziv kada tim treba razgovarati o promjeni ponašanja u pretraživanju.",
            "Za Google Pretraživanje načelo je jednostavnije. Generativne značajke oslanjaju se na isti indeks i sustave kvalitete. Stranica i dalje mora biti dostupna, indeksirana, korisna i relevantna prije nego što uopće može biti odabrana kao potporna informacija.",
          ],
        },
        {
          heading: "Praktični rad je i dalje poznat",
          paragraphs: [
            "Najbolji GEO program nije zbirka izdvojenih AI taktika. To je discipliniran SEO program koji web-stranici daje jasnu tehničku strukturu, točne informacije, prepoznatljivo gledište i stranice koje odgovaraju na stvarna pitanja bez prenapuhivanja tvrdnje.",
          ],
          list: [
            "Učinite važne stranice dostupnima za crawliranje i indeksiranje te ih povežite internim poveznicama.",
            "Koristite jasne naslove i logične cjeline kako bi čitatelj pronašao odgovor i kontekst koji ga podupire.",
            "Objavljujte opažanja, primjere i odluke iz prve ruke koje generički sažetak ne može ponoviti.",
            "Održavajte entitete, podatke o proizvodu, podatke o autoru i reference točnima i aktualnima.",
            "Koristite relevantne strukturirane podatke kada stvarno opisuju stranicu, a ne kao prečac do AI značajke.",
          ],
        },
        {
          heading: "Izbjegnite izmišljeni kontrolni popis",
          paragraphs: [
            "Ne postoji posebna schema vrsta, LLMS.txt datoteka ni fiksna duljina sadržaja potrebna za pojavljivanje u Googleovim generativnim značajkama. Takve se ideje često prodaju kao univerzalni zahtjevi, ali odvlače pozornost od rada koji stvarno podiže korisnost i tehničko zdravlje web-stranice.",
            "To ne znači da je eksperimentiranje besmisleno. Znači da eksperiment treba početi vjerodostojnom pretpostavkom, stranicom koja zaslužuje uspjeti i planom mjerenja. Ako rezultat nije koristan posjetitelju ili se ne može objasniti timu, teško da je trajna optimizacija.",
          ],
        },
        {
          heading: "Gradite autoritet dokazima, a ne količinom",
          paragraphs: [
            "Uslužnoj web-stranici ne trebaju stotine stranica da sudjeluje u pretraživanju posredovanom AI-jem. Potrebna joj je mala, povezana biblioteka koja objašnjava stručnost, pokazuje kako se stručnost primjenjuje i kupcima daje dovoljno detalja za odluku.",
            "Za Koupoli to znači povezivanje praktičnih Bilješki s dvije ponude: konzultacijama za organsko lansiranje te SEO i AI operativnim radom. Sadržaj treba razjasniti što se mjeri, što se implementira i što kupac može očekivati od suradnje.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI značajke i vaša web-stranica", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
  ],
};

export function getEditorialNote(locale: "en" | "hr", slug: string) {
  return editorialNotes[locale].find((note) => note.slug === slug);
}
