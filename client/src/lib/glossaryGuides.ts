export type GlossaryGuideLocale = "en" | "hr";
export type GlossaryGuideKey = "technical-seo" | "entity-seo" | "semantic-seo" | "knowledge-graph" | "entity-mapping" | "ai-search-visibility" | "generative-engine-optimization";

type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type GlossaryGuide = {
  key: GlossaryGuideKey;
  slug: string;
  path: string;
  title: string;
  updated?: { date: string; iso: string };
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  lead: string;
  image: string;
  imageAlt: string;
  definitionLabel: string;
  definition: string;
  signalsLabel: string;
  signals: string[];
  sections: GuideSection[];
  note: { slug: string; label: string; description: string; resource?: { href: string; label: string } };
  related: GlossaryGuideKey[];
  sourcesLabel: string;
  sources: Array<{ label: string; href: string }>;
  resource?: { label: string; href: string };
  glossaryLabel: string;
  glossaryDescription: string;
  contactLabel: string;
  contactDescription: string;
};

export const glossaryGuides: Record<GlossaryGuideLocale, Record<GlossaryGuideKey, GlossaryGuide>> = {
  en: {
    "technical-seo": {
      key: "technical-seo",
      slug: "technical-seo",
      path: "/glossary/technical-seo/",
      title: "Technical SEO: A Practical Guide",
      metaTitle: "Technical SEO: A Practical Guide | Koupoli",
      metaDescription: "A practical technical SEO guide for making websites crawlable, indexable, understandable, and ready to support durable organic growth.",
      kicker: "Glossary guide",
      lead: "Technical SEO is the work that makes a website available, understandable, and dependable before a search system or visitor can get value from it.",
      image: "/assets/koupoli-guide-technical-seo-system.webp",
      imageAlt: "Editorial technical SEO system connecting structure, crawl paths, and dependable page foundations",
      definitionLabel: "Working definition",
      definition: "Technical SEO is the practice of improving the technical conditions that let search engines discover, crawl, render, index, and correctly interpret a website. It includes foundations such as URL structure, redirects, canonical URLs, internal links, performance, and accessible rendering.",
      signalsLabel: "What to look for first",
      signals: [
        "Important pages resolve cleanly and can be discovered through internal links and a current XML sitemap.",
        "Canonical URLs, language alternates, redirects, and navigation all point to the intended final destination.",
        "Core content and links remain available when JavaScript is delayed, and the site works reliably across devices.",
      ],
      sections: [
        {
          heading: "Technical SEO is a system of access",
          paragraphs: [
            "It is tempting to treat technical SEO as a list of isolated fixes. In reality, it is the operating environment for the rest of an organic programme. A strong page cannot earn a useful result if it is blocked, duplicated, disconnected from the site, or difficult to render.",
            "The work should begin with the paths that matter most: how a priority page is discovered, what version search engines are asked to treat as canonical, what a visitor sees, and where that visitor can go next. That sequence exposes the dependencies that a score alone can hide.",
          ],
        },
        {
          heading: "Start with the highest-consequence paths",
          paragraphs: [
            "A practical audit prioritises pages that carry commercial intent, existing search demand, links, or an important role in a launch. It then checks their crawlability, indexation signals, template behaviour, internal links, and performance in the context of the wider site.",
          ],
          list: [
            "Confirm that the intended canonical URL returns a successful response and is linked from relevant pages.",
            "Review redirects as part of the live information architecture, not as a replacement for clean internal links.",
            "Check that metadata, headings, language alternates, and structured data match the visible page and its purpose.",
            "Use Search Console and representative crawl samples to investigate issues, then document owners and a clear next action.",
          ],
        },
        {
          heading: "Make technical work serve a decision",
          paragraphs: [
            "A technical backlog becomes useful when it is attached to a real decision: protecting a migration, enabling a priority topic, reducing risk before a launch, or resolving a measurable discovery problem. This gives developers, writers, and stakeholders a common reason for the work.",
            "The same foundations matter in generative search. Google describes its generative features as drawing on its core Search index and quality systems, so crawlability, indexation, clear structure, and useful information remain the starting point.",
          ],
        },
      ],
      note: { slug: "website-migration-seo", label: "Website Migration SEO", description: "Use this launch checklist to see how redirects, internal links, canonicals, and monitoring fit together in a live migration.", resource: { href: "/downloads/website-migration-seo-checklist.md", label: "Download the migration checklist" } },
      related: ["entity-seo", "ai-search-visibility", "generative-engine-optimization"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Crawling and indexing overview", href: "https://developers.google.com/search/docs/crawling-indexing" },
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Plan an organic launch",
      contactDescription: "Bring a technical constraint, launch, or growth question to a focused first conversation.",
    },
    "entity-seo": {
      key: "entity-seo",
      slug: "entity-seo",
      path: "/glossary/entity-seo/",
      title: "Entity SEO: A Practical Guide",
      updated: { date: "October 18, 2026", iso: "2026-10-18" },
      metaTitle: "Entity SEO: A Practical Guide | Koupoli",
      metaDescription: "A practical entity SEO guide for making the people, products, organisations, places, and concepts on a website clear and consistently connected.",
      kicker: "Glossary guide",
      lead: "Entity SEO is the work of reducing ambiguity around the real things your organisation, website, and audience need search systems to understand.",
      image: "/assets/koupoli-guide-entity-seo-system.webp",
      imageAlt: "Editorial entity SEO system connecting a central organisation with its services, people, places, and evidence",
      definitionLabel: "Working definition",
      definition: "Entity SEO is the practice of making real-world things such as organisations, people, products, places, and concepts clear, accurate, and consistently connected across a website. It combines well-structured content, useful page relationships, and appropriate structured data where it genuinely describes visible information.",
      signalsLabel: "What to look for first",
      signals: [
        "The company, people, services, products, and locations central to the site have one clear, accurate representation.",
        "Priority pages describe their subject and relationship to other important entities in plain language.",
        "Structured data supports visible content and is maintained as information changes, rather than being used as a shortcut.",
      ],
      sections: [
        {
          heading: "Entities make relationships easier to understand",
          paragraphs: [
            "A website rarely talks about only one thing. It introduces a company, its people, its offers, its customers, and the concepts that make those offers useful. Entity work makes those relationships explicit enough for a reader and a search system to follow without guessing.",
            "That does not mean repeating names mechanically or publishing a web of empty profile pages. It means deciding which things matter to the business, describing them accurately, and connecting them through pages that have a clear job.",
          ],
        },
        {
          heading: "Begin with a claim inventory",
          paragraphs: [
            "A useful first pass is an inventory of the claims a buyer needs to trust. Who provides the service? What does the service include? Which markets, products, or outcomes are relevant? What proof is available? These are content and information-architecture questions before they become markup questions.",
          ],
          list: [
            "Give each high-value page one primary subject and a clear relationship to the site as a whole.",
            "Keep names, service descriptions, author information, and references consistent wherever they appear.",
            "Use internal links to make the relationship between a service, an example, and an explanatory resource obvious.",
            "Add structured data only when it accurately describes the visible page and can be maintained over time.",
          ],
        },
        {
          heading: "Map the relationships a buyer needs to understand",
          paragraphs: [
            "The inventory becomes actionable when it shows how the important entities support each other across the site. A service business can map its organisation, specialist, offers, projects, core concepts, and relevant markets on one working page before deciding where new markup or content is needed.",
            "Koupoli uses five connected entities to make a specialist service business easier to understand: the organisation, the specialist responsible for the work, a defined service, a selected project, and a practical guide that explains the method. Each has a different job. Together, they give a prospective client a route from the offer to the person behind it and the supporting evidence.",
            "For example, the Technical SEO services page explains the delivery scope. The About page identifies the specialist and relevant experience. A project shows where related work has been applied, without turning a broad project description into an unverified performance claim. The Entity SEO guide then explains why those relationships should be consistent and easy to follow.",
          ],
          list: [
            "Organisation: Koupoli. Claim: specialist-led SEO, organic-growth, and AI-search work. Evidence: the About page and public service pages.",
            "Specialist: Karlo Ridan. Claim: the person responsible for the guidance and delivery. Evidence: documented experience and visible authorship on Koupoli Notes and guides.",
            "Service: Technical SEO services. Claim: practical work across crawl paths, indexation, architecture, structured data, migrations, and AI-search measurement. Evidence: the service scope and process.",
            "Project: a selected client project. Claim: related work has been applied in a real delivery context. Evidence: the approved project description, without inventing an outcome.",
            "Practical resource: this Entity SEO guide and claim-inventory template. Claim: the method starts with clear, supportable information before markup. Evidence: the visible process and sources on this page.",
            "Use one canonical name for the organisation, service, specialist, and priority concept, then update variations that could create ambiguity.",
            "Treat a missing relationship as a page or internal-link decision before treating it as a schema task.",
          ],
        },
        {
          heading: "Clarity matters more than markup volume",
          paragraphs: [
            "Structured data can give search systems explicit clues about a page, but it cannot fix vague positioning or thin information. Google advises that markup should describe the content of the page and not be placed on blank pages created solely to hold structured data.",
            "For a service business, the durable result is a connected body of evidence: a clear About page, precise service pages, relevant projects, practical Notes, and a consistent vocabulary. That body of work helps people understand why the business is credible before any individual signal is measured.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generative Engine Optimization", description: "See why accurate entities, original information, and connected pages matter more than invented AI-only tactics." },
      related: ["semantic-seo", "knowledge-graph", "entity-mapping"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Introduction to structured data markup", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      ],
      resource: { label: "Download the entity SEO claim inventory", href: "/downloads/entity-seo-claim-inventory.md" },
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Discuss your information architecture",
      contactDescription: "Bring a positioning, content, or technical structure question to a focused first conversation.",
    },
    "semantic-seo": {
      key: "semantic-seo",
      slug: "semantic-seo",
      path: "/glossary/semantic-seo/",
      title: "Semantic SEO: A Practical Guide",
      updated: { date: "October 20, 2026", iso: "2026-10-20" },
      metaTitle: "Semantic SEO: A Practical Guide | Koupoli",
      metaDescription: "A practical semantic SEO guide for explaining a topic clearly through meaning, context, intent, and connected information instead of isolated keywords.",
      kicker: "Glossary guide",
      lead: "Semantic SEO is the work of helping a page answer the meaning behind a question, not only match the words typed into a search box.",
      image: "/assets/koupoli-guide-semantic-seo-system.webp",
      imageAlt: "Editorial semantic SEO system connecting a central question with meaning, intent, context, and related information",
      definitionLabel: "Working definition",
      definition: "Semantic SEO is the practice of structuring useful content around the meaning, context, and intent of a subject so people and search systems can understand what a page explains and how its information relates to other relevant concepts.",
      signalsLabel: "What to look for first",
      signals: [
        "Each priority page has one clear subject and resolves the main question a visitor brings to it.",
        "Headings, examples, and supporting links add necessary context instead of repeating a keyword in slightly different forms.",
        "The page uses the same precise language for important concepts, services, people, and outcomes wherever those relationships matter.",
      ],
      sections: [
        {
          heading: "Meaning is more useful than repetition",
          paragraphs: [
            "A search query is often shorthand for a larger need. Someone looking for Entity SEO may want a definition, a method, a way to connect information across a site, or confidence that a proposed implementation is not just a markup exercise. A useful page makes the main answer clear, then gives the reader enough context to understand the decision behind it.",
            "That is different from treating every related phrase as a separate target. Semantic SEO is not a technique for hiding more variations in a page. It is the discipline of deciding what a page is truly about, what it needs to explain, and which supporting ideas help a visitor act on the answer.",
          ],
        },
        {
          heading: "Build the page around the real question",
          paragraphs: [
            "Start with the question that makes the page necessary. Then identify the terms a reader may need, the trade-offs that affect the answer, and the next page or action that follows naturally. This gives a page a job beyond attracting an impression.",
          ],
          list: [
            "State the primary subject in the title, main heading, opening answer, and supporting metadata without forcing exact-match repetition.",
            "Use subheadings to answer the questions that make the primary answer useful, such as scope, constraints, examples, and decisions.",
            "Connect to pages that deepen a necessary relationship, rather than creating links solely because terms look similar.",
            "Remove sections that do not help the reader understand the subject or decide what to do next.",
          ],
        },
        {
          heading: "Use semantic structure before structured data",
          paragraphs: [
            "Clear writing, logical headings, internal links, and accurate names give a page its semantic structure. Structured data can add machine-readable clues, but it should describe the visible page rather than replace the work of making the subject understandable.",
            "For a specialist service business, this can be as practical as keeping the name of an offer consistent, explaining which problem it solves, showing who delivers it, and linking to the relevant project or guide. The relationship is valuable because a buyer can follow it too.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generative Engine Optimization", description: "See why useful, original information remains more valuable than pages made only to cover phrase variations." },
      related: ["entity-seo", "knowledge-graph", "entity-mapping"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
        { label: "Google Search Central: Structured data markup", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Discuss your content structure",
      contactDescription: "Bring a topic, positioning, or site-structure question to a focused first conversation.",
    },
    "knowledge-graph": {
      key: "knowledge-graph",
      slug: "knowledge-graph",
      path: "/glossary/knowledge-graph/",
      title: "Knowledge Graph: A Practical Guide",
      updated: { date: "October 20, 2026", iso: "2026-10-20" },
      metaTitle: "Knowledge Graph: A Practical Guide | Koupoli",
      metaDescription: "A practical knowledge graph guide for connecting accurate information about organisations, people, services, projects, and concepts across a website.",
      kicker: "Glossary guide",
      lead: "A knowledge graph is a connected representation of real-world things and their relationships. For a website, the practical task is making those facts clear, accurate, and maintainable.",
      image: "/assets/koupoli-guide-knowledge-graph-system.webp",
      imageAlt: "Editorial knowledge graph connecting an organisation with services, a specialist, evidence, and core concepts",
      definitionLabel: "Working definition",
      definition: "A knowledge graph is a connected model of real-world entities and the relationships between them. In SEO, it is useful as a way to think about whether information about an organisation, person, service, product, place, or concept is unambiguous, connected, and supported by evidence.",
      signalsLabel: "What to look for first",
      signals: [
        "Important names, descriptions, and claims are consistent wherever they appear on the site.",
        "A visitor can move from an organisation to its people, services, examples, and supporting resources without needing to infer the relationship.",
        "Structured data, where used, reflects the same visible information and is kept current as the site changes.",
      ],
      sections: [
        {
          heading: "A graph is a model, not a Google Knowledge Panel",
          paragraphs: [
            "The phrase knowledge graph is often used as if it means earning a branded panel in Google results. That is too narrow. The useful part for a website is the underlying idea: a search system and a visitor need reliable facts about the things a page describes and the relationships between them.",
            "A service site might connect its organisation to the specialist responsible for delivery, to a defined service, to a project that demonstrates relevant work, and to a guide that explains the method. Those are different entities with different roles. The site becomes easier to trust when the relationships are explicit and consistent.",
          ],
        },
        {
          heading: "Connect facts that can be supported",
          paragraphs: [
            "The strongest graph starts with information the business can stand behind. That means using a canonical name, a clear description, a real page for the subject, and evidence that is visible to a visitor. It does not mean claiming relationships that are difficult to prove or publishing thin pages for every possible entity.",
          ],
          list: [
            "Give each important entity a clear role: organisation, person, service, project, product, location, or explanatory concept.",
            "Keep important identifiers and descriptions consistent across the pages where a reader expects to find them.",
            "Link from a service to the person, method, evidence, and supporting guide that make the offer understandable.",
            "Use structured data to describe the page truthfully, then validate it as the content and templates evolve.",
          ],
        },
        {
          heading: "Make relationships useful to the reader",
          paragraphs: [
            "A connected site is not a diagram for its own sake. The relationship should help a visitor answer a practical question: who does this work, what exactly is being offered, where has a related method been used, and what can I read before deciding whether to enquire?",
            "That is why knowledge-graph thinking works best alongside Entity SEO and Entity Mapping. Entity SEO clarifies the things that matter. Mapping decides which claims and pages need to connect. The graph is the resulting body of consistent, visible relationships.",
          ],
        },
      ],
      note: { slug: "ai-search-visibility", label: "AI Search Visibility: What to Measure", description: "Use a measurement framework that checks whether connected, useful pages are being discovered for the questions that matter." },
      related: ["entity-seo", "semantic-seo", "entity-mapping"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Structured data markup", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Schema.org: Thing", href: "https://schema.org/Thing" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Discuss your information architecture",
      contactDescription: "Bring an organisation, service, content, or evidence question to a focused first conversation.",
    },
    "entity-mapping": {
      key: "entity-mapping",
      slug: "entity-mapping",
      path: "/glossary/entity-mapping/",
      title: "Entity Mapping: A Practical Guide",
      updated: { date: "October 20, 2026", iso: "2026-10-20" },
      metaTitle: "Entity Mapping: A Practical Guide | Koupoli",
      metaDescription: "A practical entity mapping guide for documenting the people, services, claims, evidence, and page relationships a website needs to explain clearly.",
      kicker: "Glossary guide",
      lead: "Entity mapping is a practical way to decide which real-world things matter to a website, what can be claimed about them, and where each relationship should be made visible.",
      image: "/assets/koupoli-guide-entity-mapping-system.webp",
      imageAlt: "Editorial entity mapping workflow connecting an organisation, specialist, service, evidence, audience question, and canonical page",
      definitionLabel: "Working definition",
      definition: "Entity mapping is the process of documenting the high-value entities on a website, the claims attached to them, the evidence that supports those claims, and the pages or internal links that should make the relationships clear to people and search systems.",
      signalsLabel: "What to look for first",
      signals: [
        "The organisation, specialist, services, projects, and priority concepts are listed with one accurate canonical name.",
        "Every important claim has a visible page, source, or approved example that can support it.",
        "Missing information is treated as a content, evidence, or internal-link decision before it becomes a markup task.",
      ],
      sections: [
        {
          heading: "Start with the information a buyer needs to trust",
          paragraphs: [
            "Entity mapping is not a technical inventory for its own sake. It starts with the facts a prospective client needs before they can understand an offer: who is responsible, what is included, where the method has been used, which concepts shape the work, and what proof is available.",
            "Writing these relationships down exposes gaps early. A service may be clear but lack an accountable person. A project may exist but not explain its relevance. A guide may define a concept without pointing to the service or evidence that makes it practical. Each gap has a different solution.",
          ],
        },
        {
          heading: "Use a claim, evidence, and page model",
          paragraphs: [
            "For every important entity, write the canonical name, the claim that matters, the evidence that supports it, and the page where a visitor should be able to verify it. This creates a small working map that can guide content, internal links, metadata, and structured data without inflating any one of them.",
          ],
          list: [
            "Organisation: define the business and its primary offer without using multiple competing descriptions.",
            "Person: identify the specialist responsible for guidance or delivery and link to verifiable experience.",
            "Service: explain the scope, constraints, and intended outcome in language a buyer can evaluate.",
            "Evidence: connect a project, approved example, or first-party resource to the claim it supports.",
            "Concept: use a guide or glossary page to explain the method, then link it back to the relevant service or example.",
          ],
        },
        {
          heading: "Use the map before changing markup",
          paragraphs: [
            "A map makes it easier to choose the next useful action. Sometimes that is a new page. Sometimes it is an internal link, an author line, a corrected service description, or a decision not to make a claim until evidence exists. Markup comes after the visible information is correct and connected.",
            "This sequence is especially useful during a launch or migration. It reduces the chance that a changed URL, removed page, or inconsistent name breaks an important relationship that visitors and search systems relied on before the change.",
          ],
        },
      ],
      note: { slug: "website-migration-seo", label: "Website Migration SEO", description: "Use the migration checklist to see how page relationships, redirects, canonicals, and internal links need to survive a site change.", resource: { href: "/downloads/website-migration-seo-checklist.md", label: "Download the migration checklist" } },
      related: ["entity-seo", "semantic-seo", "knowledge-graph"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Structured data markup", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: AI search experiences", href: "https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Map the next decision",
      contactDescription: "Bring a launch, service, content, or website-structure question to a focused first conversation.",
    },
    "ai-search-visibility": {
      key: "ai-search-visibility",
      slug: "ai-search-visibility",
      path: "/glossary/ai-search-visibility/",
      title: "AI Search Visibility: A Practical Guide",
      metaTitle: "AI Search Visibility: A Practical Guide | Koupoli",
      metaDescription: "A practical guide to AI search visibility: define the decision, measure priority questions, and connect visibility with useful business outcomes.",
      kicker: "Glossary guide",
      lead: "AI search visibility is useful only when it helps a team understand whether the right information is being discovered for the questions and markets that matter.",
      image: "/assets/koupoli-guide-ai-search-visibility-system.webp",
      imageAlt: "Editorial AI search visibility system connecting a priority question, source evidence, and discovery outcome",
      definitionLabel: "Working definition",
      definition: "AI search visibility is a practical view of whether a brand, page, or entity appears in relevant AI-assisted search experiences for priority questions. It should be assessed with the page's technical eligibility, the context of the question, first-party search data, and the outcome the visibility is expected to support.",
      signalsLabel: "What to look for first",
      signals: [
        "A defined set of high-value questions, markets, and pages rather than a broad count of prompts or mentions.",
        "Search Console, analytics, and page-level context alongside any third-party discovery tool.",
        "A clear distinction between being present in an answer and contributing to a qualified visit, enquiry, or commercial conversation.",
      ],
      sections: [
        {
          heading: "Start with a decision, not a score",
          paragraphs: [
            "Visibility reporting becomes noisy when it begins with a dashboard. A brand mention can be interesting, but it does not reveal whether a priority page was eligible, whether the question came from the right buyer, or whether the appearance supported the intended outcome.",
            "A better starting point is the decision the measurement should support. It may be whether to strengthen a technical resource, develop a topic cluster, protect a launch page, or understand whether a market is discovering the right information.",
          ],
        },
        {
          heading: "Measure the question, the page, and the outcome together",
          paragraphs: [
            "AI-assisted answers can change with the question, location, model, source set, and time. That makes a single ranking-style number a poor substitute for a measurement plan. Build a small priority set that reflects the buyer's real questions and the pages meant to answer them.",
          ],
          list: [
            "Check whether the page is crawlable, indexed, and built around information that deserves to be surfaced.",
            "Compare visibility with the page's broader search impressions, clicks, country, device, and query patterns.",
            "Use third-party tools to spot patterns, not to claim access to an internal universal ranking signal.",
            "Connect the observation with the next useful action: improve the page, add evidence, fix a technical barrier, or leave a healthy result alone.",
          ],
        },
        {
          heading: "Presence and performance are different things",
          paragraphs: [
            "Presence says that a source was eligible and selected in an AI-search experience. Performance asks whether that exposure supported the reason the page exists. Both are useful, but they should not be merged into a vanity metric.",
            "Google's Generative AI performance reporting can help website owners understand how people discover content through generative features in Search. It belongs beside normal Search performance and business analytics, not apart from them.",
          ],
        },
      ],
      note: { slug: "ai-search-visibility", label: "What to Measure Before You Optimise", description: "Read the longer Koupoli Note on building a practical AI-search measurement framework." },
      related: ["technical-seo", "entity-seo", "generative-engine-optimization"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Console: Generative AI performance reports", href: "https://support.google.com/webmasters/answer/16984139" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Plan an organic launch",
      contactDescription: "Bring a launch, growth question, or technical constraint to a focused first conversation.",
    },
    "generative-engine-optimization": {
      key: "generative-engine-optimization",
      slug: "generative-engine-optimization",
      path: "/glossary/generative-engine-optimization/",
      title: "Generative Engine Optimization: A Practical Guide",
      metaTitle: "Generative Engine Optimization: A Practical Guide | Koupoli",
      metaDescription: "A practical generative engine optimization guide for teams that want AI-search visibility without losing sight of technical SEO, useful information, and evidence.",
      kicker: "Glossary guide",
      lead: "Generative engine optimization is useful language for changing search behaviour, but the practical work remains a clear technical structure and information people cannot get from a generic summary.",
      image: "/assets/koupoli-guide-generative-search-system.webp",
      imageAlt: "Editorial generative search system built on connected useful pages and source evidence",
      definitionLabel: "Working definition",
      definition: "Generative engine optimization, often called GEO, describes work intended to improve the chance that useful pages and brand information are represented in AI-generated search answers. For Google Search, this is still SEO: the same search index, quality systems, crawlability, and people-first content remain central.",
      signalsLabel: "What to look for first",
      signals: [
        "Priority pages meet Search's technical requirements and offer clear, original information for a real audience need.",
        "The site has a connected structure that makes services, authors, concepts, and supporting evidence easy to understand.",
        "Experiments have a credible hypothesis and a measurement plan instead of relying on AI-only checklists or invented guarantees.",
      ],
      sections: [
        {
          heading: "GEO describes a search change, not a separate system",
          paragraphs: [
            "Terms such as GEO and answer engine optimization can help a team talk about changes in discovery behaviour. They become unhelpful when they imply that a new layer of hacks has replaced the work of making a website accessible, useful, and trustworthy.",
            "Google says its generative features are rooted in its core Search ranking and quality systems. A page must still be indexed and eligible to show a snippet before it can have a chance to appear in these experiences.",
          ],
        },
        {
          heading: "Build information that a generic answer cannot replace",
          paragraphs: [
            "The strongest input is non-commodity information: first-hand examples, clear decisions, useful comparisons, original observations, and evidence that gives a buyer something to evaluate. A page does not need to be long for the sake of it, but it should resolve the question better than a generic restatement.",
          ],
          list: [
            "Make the page easy to discover, render, and navigate before investing in an AI-search experiment.",
            "Use headings and logical sections to help people find the answer and the supporting context.",
            "Keep service, product, author, and reference information accurate and connected across the site.",
            "Add relevant structured data because it describes the page truthfully, not because it promises generative visibility.",
          ],
        },
        {
          heading: "Avoid the invented checklist",
          paragraphs: [
            "There is no special Google schema type, mandatory LLMS.txt file, fixed content length, or prompt-variant page factory required for generative visibility. Creating large numbers of thin pages for variations that do not serve people is not a durable content strategy.",
            "The right experiment begins with a page that deserves to be found, a defined audience question, a technical baseline, and a way to judge whether the work improves a useful outcome. That is a more demanding standard, but it produces work that remains valuable beyond a single feature change.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "What Matters in Practice", description: "Read the Koupoli Note on using GEO language without losing sight of real SEO work." },
      related: ["technical-seo", "entity-seo", "ai-search-visibility"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Discuss AI search readiness",
      contactDescription: "Bring a launch, content, or technical question to a focused first conversation.",
    },
  },
  hr: {
    "technical-seo": {
      key: "technical-seo",
      slug: "tehnicki-seo",
      path: "/hr/pojmovnik/tehnicki-seo/",
      title: "Tehnički SEO: Praktičan vodič",
      metaTitle: "Tehnički SEO: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za tehnički SEO koji web-stranice čini dostupnima za crawliranje i indeksiranje te spremnima za održiv organski rast.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Tehnički SEO je rad koji web-stranicu čini dostupnom, razumljivom i pouzdanom prije nego što joj tražilica ili posjetitelj mogu dati vrijednost.",
      image: "/assets/koupoli-guide-technical-seo-system.webp",
      imageAlt: "Urednički sustav tehničkog SEO-a koji povezuje strukturu, crawl putanje i pouzdane temelje stranice",
      definitionLabel: "Radna definicija",
      definition: "Tehnički SEO je praksa poboljšavanja tehničkih uvjeta koji tražilicama omogućuju otkrivanje, crawliranje, prikazivanje, indeksiranje i ispravno tumačenje web-stranice. Obuhvaća temelje kao što su struktura URL-ova, redirekcije, canonical URL-ovi, interne poveznice, izvedba i dostupno prikazivanje.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Važne stranice otvaraju se bez pogreške i mogu se otkriti kroz interne poveznice i aktualan XML sitemap.",
        "Canonical URL-ovi, jezične alternative, redirekcije i navigacija upućuju na namjeravano konačno odredište.",
        "Glavni sadržaj i poveznice ostaju dostupni kada se JavaScript učitava sporije, a stranica radi pouzdano na različitim uređajima.",
      ],
      sections: [
        {
          heading: "Tehnički SEO je sustav pristupa",
          paragraphs: [
            "Tehnički SEO lako je gledati kao popis nepovezanih popravaka. U stvarnosti, on je radno okruženje za ostatak organskog programa. Dobra stranica ne može ostvariti koristan rezultat ako je blokirana, duplicirana, odvojena od ostatka web-stranice ili se teško prikazuje.",
            "Rad treba početi s putanjama koje su najvažnije: kako se prioritetna stranica otkriva, koju verziju tražilice trebaju smatrati kanonikalnom, što posjetitelj vidi i kamo može otići dalje. Taj slijed otkriva ovisnosti koje sama ocjena može sakriti.",
          ],
        },
        {
          heading: "Počnite od putanja s najvećim posljedicama",
          paragraphs: [
            "Praktičan audit daje prednost stranicama koje nose komercijalnu namjeru, postojeću potražnju, poveznice ili važnu ulogu u lansiranju. Zatim provjerava njihovu crawlabilnost, signale indeksiranja, ponašanje predložaka, interne poveznice i izvedbu u kontekstu šire web-stranice.",
          ],
          list: [
            "Potvrdite da namjeravani kanonikalni URL vraća uspješan odgovor i da je povezan s relevantnih stranica.",
            "Pregledajte redirekcije kao dio žive informacijske arhitekture, a ne kao zamjenu za čiste interne poveznice.",
            "Provjerite odgovaraju li metapodaci, naslovi, jezične alternative i strukturirani podaci vidljivoj stranici i njezinoj namjeni.",
            "Koristite Search Console i reprezentativne uzorke crawla za istraživanje problema, zatim zabilježite vlasnika i sljedeći korak.",
          ],
        },
        {
          heading: "Neka tehnički rad služi odluci",
          paragraphs: [
            "Tehnički backlog postaje koristan kada je vezan uz stvarnu odluku: zaštitu migracije, omogućavanje prioritetne teme, smanjenje rizika prije lansiranja ili rješavanje mjerljivog problema otkrivanja. Tako programeri, pisci i dionici imaju zajednički razlog za rad.",
            "Isti temelji važni su i u generativnoj pretrazi. Google svoje generativne značajke opisuje kao sustave koji se oslanjaju na temeljni indeks i sustave kvalitete Pretraživanja, pa crawlabilnost, indeksiranje, jasna struktura i korisne informacije ostaju početna točka.",
          ],
        },
      ],
      note: { slug: "website-migration-seo", label: "SEO migracija web-stranice", description: "Pogledajte kako se redirekcije, interne poveznice, canonical oznake i praćenje uklapaju u stvarnu migraciju.", resource: { href: "/downloads/seo-migracija-kontrolni-popis.md", label: "Preuzmite kontrolni popis za migraciju" } },
      related: ["entity-seo", "ai-search-visibility", "generative-engine-optimization"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Pregled crawlanja i indeksiranja", href: "https://developers.google.com/search/docs/crawling-indexing" },
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Isplanirajte organsko lansiranje",
      contactDescription: "Donesite tehničku prepreku, lansiranje ili pitanje rasta u prvi usmjereni razgovor.",
    },
    "entity-seo": {
      key: "entity-seo",
      slug: "entitetski-seo",
      path: "/hr/pojmovnik/entitetski-seo/",
      title: "Entitetski SEO: Praktičan vodič",
      updated: { date: "18. listopada 2026.", iso: "2026-10-18" },
      metaTitle: "Entitetski SEO: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za entitetski SEO koji osobe, proizvode, organizacije, lokacije i koncepte na web-stranici čini jasnima i povezanima.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Entitetski SEO je rad na smanjivanju nejasnoće oko stvarnih stvari koje vaša organizacija, web-stranica i publika trebaju jasno razumjeti.",
      image: "/assets/koupoli-guide-entity-seo-system.webp",
      imageAlt: "Urednički sustav entitetskog SEO-a koji povezuje središnju organizaciju s uslugama, osobama, lokacijama i dokazima",
      definitionLabel: "Radna definicija",
      definition: "Entitetski SEO je praksa kojom se stvarne stvari poput organizacija, osoba, proizvoda, lokacija i koncepata čine jasnima, točnima i dosljedno povezanima kroz web-stranicu. Kombinira dobro strukturiran sadržaj, korisne odnose među stranicama i primjerene strukturirane podatke kada doista opisuju vidljive informacije.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Tvrtka, osobe, usluge, proizvodi i lokacije važne za web-stranicu imaju jedan jasan i točan prikaz.",
        "Prioritetne stranice običnim jezikom opisuju temu i odnos prema drugim važnim entitetima.",
        "Strukturirani podaci podupiru vidljivi sadržaj i održavaju se kada se informacije promijene, umjesto da služe kao prečac.",
      ],
      sections: [
        {
          heading: "Entiteti olakšavaju razumijevanje odnosa",
          paragraphs: [
            "Web-stranica rijetko govori o samo jednoj stvari. Predstavlja tvrtku, njezine ljude, ponude, kupce i koncepte koji ponude čine korisnima. Entitetski rad te odnose čini dovoljno jasnima da ih čitatelj i tražilica mogu pratiti bez nagađanja.",
            "To ne znači mehaničko ponavljanje naziva ni objavljivanje mreže praznih profilnih stranica. Znači odlučiti koje su stvari važne za poslovanje, opisati ih točno i povezati ih kroz stranice koje imaju jasan zadatak.",
          ],
        },
        {
          heading: "Počnite s inventarom tvrdnji",
          paragraphs: [
            "Korisna početna točka je inventar tvrdnji kojima kupac treba vjerovati. Tko pruža uslugu? Što usluga uključuje? Koja su tržišta, proizvodi ili ishodi relevantni? Koji dokaz postoji? To su pitanja sadržaja i informacijske arhitekture prije nego što postanu pitanja markupa.",
          ],
          list: [
            "Dajte svakoj vrijednoj stranici jednu glavnu temu i jasan odnos prema cjelini web-stranice.",
            "Održavajte nazive, opise usluga, podatke o autoru i reference dosljednima gdje god se pojavljuju.",
            "Koristite interne poveznice kako bi odnos između usluge, primjera i objašnjavajućeg izvora bio očit.",
            "Dodajte strukturirane podatke samo kada točno opisuju vidljivu stranicu i kada ih možete održavati kroz vrijeme.",
          ],
        },
        {
          heading: "Mapirajte odnose koje kupac treba razumjeti",
          paragraphs: [
            "Inventar postaje primjenjiv kada pokazuje kako se važni entiteti podupiru kroz web-stranicu. Uslužna tvrtka na jednoj radnoj stranici može mapirati organizaciju, stručnjaka, ponude, projekte, glavne pojmove i relevantna tržišta prije odluke gdje su potrebni novi markup ili sadržaj.",
            "Koupoli koristi pet povezanih entiteta kako bi se specijalistička uslužna tvrtka lakše razumjela: organizaciju, stručnjaka odgovornog za rad, definiranu uslugu, odabrani projekt i praktični vodič koji objašnjava metodu. Svaki ima drukčiji zadatak. Zajedno potencijalnom klijentu daju put od ponude do osobe koja stoji iza rada i popratnog dokaza.",
            "Primjerice, stranica SEO optimizacije objašnjava opseg izvedbe. Stranica O Karlu identificira stručnjaka i relevantno iskustvo. Projekt pokazuje gdje je srodan rad primijenjen u stvarnoj isporuci, bez pretvaranja opisa projekta u neprovjerenu tvrdnju o rezultatu. Vodič o entitetskom SEO-u zatim objašnjava zašto ti odnosi trebaju biti dosljedni i jednostavni za pratiti.",
          ],
          list: [
            "Organizacija: Koupoli. Tvrdnja: specijalistički rad u SEO-u, organskom rastu i AI pretrazi. Dokaz: stranica O Karlu i javne stranice usluga.",
            "Stručnjak: Karlo Ridan. Tvrdnja: osoba odgovorna za smjernice i isporuku. Dokaz: dokumentirano iskustvo i vidljivo autorstvo Koupolijevih Bilješki i vodiča.",
            "Usluga: SEO optimizacija. Tvrdnja: praktičan rad kroz crawl putanje, indeksiranje, arhitekturu, strukturirane podatke, migracije i mjerenje AI pretrage. Dokaz: opseg usluge i proces.",
            "Projekt: odabrani klijentski projekt. Tvrdnja: srodan rad primijenjen je u stvarnom kontekstu isporuke. Dokaz: odobren opis projekta, bez izmišljanja ishoda.",
            "Praktičan izvor: ovaj vodič i predložak inventara tvrdnji. Tvrdnja: metoda počinje jasnim informacijama koje se mogu potkrijepiti prije markupa. Dokaz: vidljiv proces i izvori na ovoj stranici.",
            "Za organizaciju, uslugu, stručnjaka i prioritetni pojam koristite jedno kanonikalno ime, a zatim uklonite varijacije koje mogu stvoriti nejasnoću.",
            "Nedostajući odnos prvo tretirajte kao odluku o stranici ili internim poveznicama, a tek zatim kao zadatak za schemu.",
          ],
        },
        {
          heading: "Jasnoća je važnija od količine markupa",
          paragraphs: [
            "Strukturirani podaci tražilicama mogu dati izričite signale o stranici, ali ne mogu popraviti nejasno pozicioniranje ni tanke informacije. Google savjetuje da markup opisuje sadržaj stranice i da se ne stavlja na prazne stranice izrađene samo za strukturirane podatke.",
            "Za uslužnu tvrtku održiv rezultat je povezano tijelo dokaza: jasna stranica O meni, precizne stranice usluga, relevantni projekti, praktične Bilješke i dosljedan rječnik. Takav rad ljudima pomaže razumjeti zašto je tvrtka vjerodostojna prije nego što se izmjeri pojedinačni signal.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generativna optimizacija", description: "Pogledajte zašto su točni entiteti, originalne informacije i povezane stranice važniji od izmišljenih AI taktika." },
      related: ["semantic-seo", "knowledge-graph", "entity-mapping"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Uvod u strukturirane podatke", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: Koristan, pouzdan sadržaj usmjeren na ljude", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      ],
      resource: { label: "Preuzmite inventar tvrdnji za entitetski SEO", href: "/downloads/inventar-entitetskih-tvrdnji.md" },
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Razgovarajte o informacijskoj arhitekturi",
      contactDescription: "Donesite pitanje o pozicioniranju, sadržaju ili tehničkoj strukturi u prvi usmjereni razgovor.",
    },
    "semantic-seo": {
      key: "semantic-seo",
      slug: "semanticki-seo",
      path: "/hr/pojmovnik/semanticki-seo/",
      title: "Semantički SEO: Praktičan vodič",
      updated: { date: "20. listopada 2026.", iso: "2026-10-20" },
      metaTitle: "Semantički SEO: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za semantički SEO koji temu objašnjava kroz značenje, kontekst, namjeru i povezane informacije umjesto izoliranih ključnih riječi.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Semantički SEO je rad koji stranici pomaže odgovoriti na značenje pitanja, a ne samo podudarati riječi upisane u tražilicu.",
      image: "/assets/koupoli-guide-semantic-seo-system.webp",
      imageAlt: "Urednički sustav semantičkog SEO-a koji povezuje središnje pitanje sa značenjem, namjerom, kontekstom i povezanim informacijama",
      definitionLabel: "Radna definicija",
      definition: "Semantički SEO je praksa oblikovanja korisnog sadržaja oko značenja, konteksta i namjere teme kako bi ljudi i tražilice razumjeli što stranica objašnjava i kako su njezine informacije povezane s drugim relevantnim konceptima.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Svaka prioritetna stranica ima jednu jasnu temu i rješava glavno pitanje s kojim posjetitelj dolazi.",
        "Naslovi, primjeri i popratne poveznice dodaju potreban kontekst umjesto da ponavljaju ključnu riječ u malo drukčijim oblicima.",
        "Stranica koristi isti precizan jezik za važne koncepte, usluge, osobe i ishode gdje su ti odnosi bitni.",
      ],
      sections: [
        {
          heading: "Značenje je korisnije od ponavljanja",
          paragraphs: [
            "Upit u pretrazi često je skraćenica za širu potrebu. Netko tko traži entitetski SEO može tražiti definiciju, metodu, način povezivanja informacija na web-stranici ili sigurnost da predložena izvedba nije samo vježba sa strukturiranim podacima. Korisna stranica najprije jasno daje odgovor, a zatim čitatelju daje dovoljno konteksta da razumije odluku koja stoji iza njega.",
            "To se razlikuje od tretiranja svake povezane fraze kao zasebne mete. Semantički SEO nije tehnika za skrivanje više varijacija na stranici. To je disciplina odlučivanja o tome o čemu stranica doista govori, što treba objasniti i koje popratne ideje pomažu posjetitelju djelovati na temelju odgovora.",
          ],
        },
        {
          heading: "Gradite stranicu oko stvarnog pitanja",
          paragraphs: [
            "Počnite od pitanja zbog kojeg je stranica potrebna. Zatim utvrdite pojmove koje čitatelj možda treba, kompromise koji utječu na odgovor i sljedeću stranicu ili radnju koja prirodno slijedi. Tako stranica dobiva zadatak koji je širi od privlačenja impresije.",
          ],
          list: [
            "Navedite glavnu temu u naslovu, glavnom naslovu, uvodnom odgovoru i popratnim metapodacima bez forsiranja točnog podudaranja.",
            "Podnaslovima odgovorite na pitanja koja glavni odgovor čine korisnim, poput opsega, ograničenja, primjera i odluka.",
            "Povežite stranice koje produbljuju nužan odnos, umjesto stvaranja poveznica samo zato što pojmovi zvuče slično.",
            "Uklonite cjeline koje čitatelju ne pomažu razumjeti temu ili odlučiti što učiniti dalje.",
          ],
        },
        {
          heading: "Koristite semantičku strukturu prije strukturiranih podataka",
          paragraphs: [
            "Jasno pisanje, logični naslovi, interne poveznice i točni nazivi daju stranici semantičku strukturu. Strukturirani podaci mogu dodati strojno čitljive tragove, ali trebaju opisivati vidljivu stranicu, a ne zamijeniti rad na tome da tema bude razumljiva.",
            "Za specijalističku uslužnu tvrtku to može biti jednako praktično kao dosljedno navođenje usluge, objašnjavanje problema koji rješava, pokazivanje tko je isporučuje i povezivanje s relevantnim projektom ili vodičem. Odnos je vrijedan jer ga može pratiti i kupac.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generativna optimizacija", description: "Pogledajte zašto su korisne i originalne informacije vrijednije od stranica izrađenih samo za pokrivanje varijacija fraza." },
      related: ["entity-seo", "knowledge-graph", "entity-mapping"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Koristan, pouzdan sadržaj usmjeren na ljude", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
        { label: "Google Search Central: Strukturirani podaci", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Razgovarajte o strukturi sadržaja",
      contactDescription: "Donesite temu, pitanje pozicioniranja ili strukture web-stranice u prvi usmjereni razgovor.",
    },
    "knowledge-graph": {
      key: "knowledge-graph",
      slug: "graf-znanja",
      path: "/hr/pojmovnik/graf-znanja/",
      title: "Graf znanja: Praktičan vodič",
      updated: { date: "20. listopada 2026.", iso: "2026-10-20" },
      metaTitle: "Graf znanja: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za graf znanja koji povezuje točne informacije o organizacijama, osobama, uslugama, projektima i konceptima na web-stranici.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Graf znanja povezan je prikaz stvarnih stvari i njihovih odnosa. Za web-stranicu je praktičan zadatak učiniti te činjenice jasnima, točnima i održivima.",
      image: "/assets/koupoli-guide-knowledge-graph-system.webp",
      imageAlt: "Urednički graf znanja koji povezuje organizaciju s uslugama, stručnjakom, dokazima i glavnim konceptima",
      definitionLabel: "Radna definicija",
      definition: "Graf znanja je povezani model stvarnih entiteta i odnosa među njima. U SEO-u je koristan kao način razmišljanja o tome jesu li informacije o organizaciji, osobi, usluzi, proizvodu, lokaciji ili konceptu nedvosmislene, povezane i potkrijepljene dokazima.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Važni nazivi, opisi i tvrdnje dosljedni su gdje god se pojavljuju na web-stranici.",
        "Posjetitelj može doći od organizacije do osoba, usluga, primjera i popratnih izvora bez nagađanja o njihovom odnosu.",
        "Strukturirani podaci, kada se koriste, odražavaju iste vidljive informacije i održavaju se pri promjenama web-stranice.",
      ],
      sections: [
        {
          heading: "Graf nije Google Knowledge Panel",
          paragraphs: [
            "Izraz graf znanja često se koristi kao da znači dobivanje brendiranog panela u Googleovim rezultatima. To je preusko. Koristan dio za web-stranicu je temeljna ideja: tražilica i posjetitelj trebaju pouzdane činjenice o stvarima koje stranica opisuje i odnosima među njima.",
            "Uslužna web-stranica može povezati organizaciju sa stručnjakom odgovornim za isporuku, definiranom uslugom, projektom koji pokazuje srodan rad i vodičem koji objašnjava metodu. To su različiti entiteti s različitim ulogama. Web-stranica postaje lakša za povjerenje kada su odnosi izričiti i dosljedni.",
          ],
        },
        {
          heading: "Povežite činjenice koje možete potkrijepiti",
          paragraphs: [
            "Najčvršći graf počinje informacijama iza kojih poslovanje može stajati. To znači koristiti kanonikalni naziv, jasan opis, stvarnu stranicu za temu i dokaz koji je vidljiv posjetitelju. Ne znači izmišljati odnose koje je teško dokazati ni objavljivati tanke stranice za svaki mogući entitet.",
          ],
          list: [
            "Dajte svakom važnom entitetu jasnu ulogu: organizacija, osoba, usluga, projekt, proizvod, lokacija ili objašnjavajući koncept.",
            "Održavajte važne identifikatore i opise dosljednima na stranicama gdje ih čitatelj očekuje pronaći.",
            "Povežite uslugu s osobom, metodom, dokazom i vodičem koji ponude čine razumljivima.",
            "Koristite strukturirane podatke kako biste istinito opisali stranicu, a zatim ih validirajte dok se sadržaj i predlošci mijenjaju.",
          ],
        },
        {
          heading: "Neka odnosi budu korisni čitatelju",
          paragraphs: [
            "Povezana web-stranica nije dijagram radi dijagrama. Odnos treba pomoći posjetitelju odgovoriti na praktično pitanje: tko radi ovaj posao, što se točno nudi, gdje je srodan pristup primijenjen i što mogu pročitati prije odluke o upitu?",
            "Zato razmišljanje o grafu znanja najbolje funkcionira uz entitetski SEO i mapiranje entiteta. Entitetski SEO razjašnjava stvari koje su važne. Mapiranje odlučuje koje se tvrdnje i stranice trebaju povezati. Graf je rezultirajuće tijelo dosljednih, vidljivih odnosa.",
          ],
        },
      ],
      note: { slug: "ai-search-visibility", label: "Vidljivost u AI pretrazi: Što mjeriti", description: "Koristite okvir mjerenja koji provjerava otkrivaju li se povezane i korisne stranice za pitanja koja su važna." },
      related: ["entity-seo", "semantic-seo", "entity-mapping"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Strukturirani podaci", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Schema.org: Thing", href: "https://schema.org/Thing" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Razgovarajte o informacijskoj arhitekturi",
      contactDescription: "Donesite pitanje o organizaciji, usluzi, sadržaju ili dokazima u prvi usmjereni razgovor.",
    },
    "entity-mapping": {
      key: "entity-mapping",
      slug: "mapiranje-entiteta",
      path: "/hr/pojmovnik/mapiranje-entiteta/",
      title: "Mapiranje entiteta: Praktičan vodič",
      updated: { date: "20. listopada 2026.", iso: "2026-10-20" },
      metaTitle: "Mapiranje entiteta: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za mapiranje entiteta koji dokumentira osobe, usluge, tvrdnje, dokaze i odnose među stranicama koje web-stranica treba jasno objasniti.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Mapiranje entiteta praktičan je način odlučivanja koje su stvarne stvari važne za web-stranicu, što se o njima može tvrditi i gdje svaki odnos treba biti vidljiv.",
      image: "/assets/koupoli-guide-entity-mapping-system.webp",
      imageAlt: "Urednički proces mapiranja entiteta koji povezuje organizaciju, stručnjaka, uslugu, dokaz, pitanje publike i kanonikalnu stranicu",
      definitionLabel: "Radna definicija",
      definition: "Mapiranje entiteta je proces dokumentiranja važnih entiteta na web-stranici, tvrdnji koje su uz njih vezane, dokaza koji te tvrdnje podupiru i stranica ili internih poveznica koje trebaju jasno prikazati odnose ljudima i tražilicama.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Organizacija, stručnjak, usluge, projekti i prioritetni koncepti navedeni su pod jednim točnim kanonikalnim nazivom.",
        "Svaka važna tvrdnja ima vidljivu stranicu, izvor ili odobren primjer koji je može poduprijeti.",
        "Nedostajuće informacije najprije se tretiraju kao odluka o sadržaju, dokazu ili internim poveznicama, a tek zatim kao zadatak za markup.",
      ],
      sections: [
        {
          heading: "Počnite od informacija kojima kupac treba vjerovati",
          paragraphs: [
            "Mapiranje entiteta nije tehnički inventar radi inventara. Počinje činjenicama koje potencijalni klijent treba prije razumijevanja ponude: tko je odgovoran, što je uključeno, gdje je pristup primijenjen, koji koncepti oblikuju rad i koji dokaz postoji.",
            "Zapisivanje tih odnosa rano otkriva praznine. Usluga može biti jasna, ali bez osobe odgovorne za isporuku. Projekt može postojati, ali ne objašnjavati svoju relevantnost. Vodič može definirati pojam bez povezivanja na uslugu ili dokaz koji ga čini praktičnim. Svaka praznina traži drukčije rješenje.",
          ],
        },
        {
          heading: "Koristite model tvrdnje, dokaza i stranice",
          paragraphs: [
            "Za svaki važan entitet napišite kanonikalni naziv, tvrdnju koja je važna, dokaz koji je podupire i stranicu na kojoj je posjetitelj može provjeriti. Tako nastaje mali radni plan koji može usmjeriti sadržaj, interne poveznice, metapodatke i strukturirane podatke bez preuveličavanja bilo kojeg od tih slojeva.",
          ],
          list: [
            "Organizacija: definirajte poslovanje i primarnu ponudu bez više konkurentskih opisa.",
            "Osoba: identificirajte stručnjaka odgovornog za smjernice ili isporuku i povežite ga s provjerljivim iskustvom.",
            "Usluga: objasnite opseg, ograničenja i namjeravani ishod jezikom koji kupac može procijeniti.",
            "Dokaz: povežite projekt, odobren primjer ili izvor prve strane s tvrdnjom koju podupire.",
            "Koncept: pomoću vodiča ili stranice pojmovnika objasnite metodu, a zatim je povežite s relevantnom uslugom ili primjerom.",
          ],
        },
        {
          heading: "Upotrijebite mapu prije promjene markupa",
          paragraphs: [
            "Mapa olakšava odabir sljedeće korisne radnje. Ponekad je to nova stranica. Ponekad interna poveznica, autorska linija, ispravljen opis usluge ili odluka da se tvrdnja ne iznosi dok dokaz ne postoji. Markup dolazi nakon što su vidljive informacije točne i povezane.",
            "Taj redoslijed posebno je koristan tijekom lansiranja ili migracije. Smanjuje mogućnost da promijenjeni URL, uklonjena stranica ili nedosljedan naziv prekine važan odnos na koji su se posjetitelji i tražilice prije oslanjali.",
          ],
        },
      ],
      note: { slug: "website-migration-seo", label: "SEO migracija web-stranice", description: "Pogledajte kroz kontrolni popis kako odnosi među stranicama, redirekcije, canonical oznake i interne poveznice trebaju preživjeti promjenu web-stranice.", resource: { href: "/downloads/seo-migracija-kontrolni-popis.md", label: "Preuzmite kontrolni popis za migraciju" } },
      related: ["entity-seo", "semantic-seo", "knowledge-graph"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Strukturirani podaci", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: AI značajke u pretrazi", href: "https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Mapirajte sljedeću odluku",
      contactDescription: "Donesite pitanje o lansiranju, usluzi, sadržaju ili strukturi web-stranice u prvi usmjereni razgovor.",
    },
    "ai-search-visibility": {
      key: "ai-search-visibility",
      slug: "vidljivost-u-ai-pretrazi",
      path: "/hr/pojmovnik/vidljivost-u-ai-pretrazi/",
      title: "Vidljivost u AI pretrazi: Praktičan vodič",
      metaTitle: "Vidljivost u AI pretrazi: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za vidljivost u AI pretrazi: definirajte odluku, mjerite prioritetna pitanja i povežite vidljivost s korisnim poslovnim ishodima.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Vidljivost u AI pretrazi korisna je samo kada timu pomaže razumjeti otkrivaju li se prave informacije za pitanja i tržišta koja su važna.",
      image: "/assets/koupoli-guide-ai-search-visibility-system.webp",
      imageAlt: "Urednički sustav vidljivosti u AI pretrazi koji povezuje prioritetno pitanje, izvorne dokaze i ishod otkrivanja",
      definitionLabel: "Radna definicija",
      definition: "Vidljivost u AI pretrazi praktičan je pogled na to pojavljuju li se brend, stranica ili entitet u relevantnim iskustvima pretraživanja uz pomoć umjetne inteligencije za prioritetna pitanja. Treba je procjenjivati kroz tehničku podobnost stranice, kontekst pitanja, podatke iz prve ruke o pretrazi i ishod koji vidljivost treba poduprijeti.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Definiran skup vrijednih pitanja, tržišta i stranica, umjesto širokog broja promptova ili spominjanja.",
        "Search Console, analitika i kontekst na razini stranice uz svaki alat treće strane za otkrivanje uzoraka.",
        "Jasna razlika između pojavljivanja u odgovoru i doprinosa kvalificiranoj posjeti, upitu ili poslovnom razgovoru.",
      ],
      sections: [
        {
          heading: "Krenite od odluke, a ne od ocjene",
          paragraphs: [
            "Izvještavanje o vidljivosti postaje bučno kada počne nadzornom pločom. Spominjanje brenda može biti zanimljivo, ali ne otkriva je li prioritetna stranica bila podobna, je li pitanje došlo od pravog kupca ili je li pojavljivanje podržalo namjeravani ishod.",
            "Bolje polazište je odluka koju mjerenje treba poduprijeti. To može biti odluka o jačanju tehničkog izvora, razvoju tematskog klastera, zaštiti stranice lansiranja ili razumijevanju otkriva li tržište prave informacije.",
          ],
        },
        {
          heading: "Mjerite pitanje, stranicu i ishod zajedno",
          paragraphs: [
            "Odgovori uz pomoć umjetne inteligencije mogu se mijenjati ovisno o pitanju, lokaciji, modelu, skupu izvora i vremenu. Zato jedan broj nalik poziciji nije zamjena za plan mjerenja. Izgradite mali prioritetni skup koji odražava stvarna pitanja kupca i stranice koje na njih trebaju odgovoriti.",
          ],
          list: [
            "Provjerite je li stranica dostupna za crawliranje, indeksirana i izgrađena oko informacije koja zaslužuje biti prikazana.",
            "Usporedite vidljivost s ukupnim impresijama, klikovima, državom, uređajem i obrascima upita za stranicu.",
            "Koristite alate treće strane za pronalaženje uzoraka, a ne za tvrdnje o pristupu univerzalnom internom signalu pozicioniranja.",
            "Povežite opažanje sa sljedećom korisnom radnjom: poboljšajte stranicu, dodajte dokaz, uklonite tehničku prepreku ili zdrav rezultat ostavite na miru.",
          ],
        },
        {
          heading: "Prisutnost i rezultat nisu ista stvar",
          paragraphs: [
            "Prisutnost govori da je izvor bio podoban i odabran u AI iskustvu pretraživanja. Rezultat pita podupire li ta izloženost razlog zbog kojeg stranica postoji. Oba su mjerenja korisna, ali ne treba ih spojiti u jednu taštu metriku.",
            "Googleov izvještaj o uspješnosti generativnog AI-ja vlasnicima web-stranica može pomoći razumjeti kako ljudi otkrivaju sadržaj kroz generativne značajke Pretraživanja. Treba ga koristiti uz uobičajenu izvedbu u Pretraživanju i poslovnu analitiku, a ne odvojeno od njih.",
          ],
        },
      ],
      note: { slug: "ai-search-visibility", label: "Što mjeriti prije optimizacije", description: "Pročitajte dulju Koupoli Bilješku o izgradnji praktičnog okvira za mjerenje AI pretrage." },
      related: ["technical-seo", "entity-seo", "generative-engine-optimization"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Console: Izvještaji o uspješnosti generativnog AI-ja", href: "https://support.google.com/webmasters/answer/16984139" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Isplanirajte organsko lansiranje",
      contactDescription: "Donesite lansiranje, pitanje rasta ili tehničku prepreku u prvi usmjereni razgovor.",
    },
    "generative-engine-optimization": {
      key: "generative-engine-optimization",
      slug: "generativna-optimizacija",
      path: "/hr/pojmovnik/generativna-optimizacija/",
      title: "Generativna optimizacija: Praktičan vodič",
      metaTitle: "Generativna optimizacija: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za generativnu optimizaciju za timove koji žele vidljivost u AI pretrazi bez gubitka fokusa na tehnički SEO, korisne informacije i dokaze.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Generativna optimizacija koristan je naziv za promijenjeno ponašanje u pretraživanju, ali praktičan rad i dalje znači jasnu tehničku strukturu i informacije koje ljudi ne mogu dobiti iz generičkog sažetka.",
      image: "/assets/koupoli-guide-generative-search-system.webp",
      imageAlt: "Urednički sustav generativne pretrage izgrađen na povezanim korisnim stranicama i izvornim dokazima",
      definitionLabel: "Radna definicija",
      definition: "Generativna optimizacija, često nazvana GEO, opisuje rad koji želi poboljšati mogućnost da korisne stranice i informacije o brendu budu zastupljene u odgovorima koje generira umjetna inteligencija. Za Google Pretraživanje to je i dalje SEO: isti indeks, sustavi kvalitete, crawlabilnost i sadržaj usmjeren na ljude ostaju ključni.",
      signalsLabel: "Što prvo provjeriti",
      signals: [
        "Prioritetne stranice ispunjavaju tehničke zahtjeve Pretraživanja i nude jasne, originalne informacije za stvarnu potrebu publike.",
        "Web-stranica ima povezanu strukturu koja usluge, autore, koncepte i potporne dokaze čini jednostavnima za razumijevanje.",
        "Eksperimenti imaju vjerodostojnu pretpostavku i plan mjerenja umjesto oslanjanja na AI kontrolne popise ili izmišljena jamstva.",
      ],
      sections: [
        {
          heading: "GEO opisuje promjenu u pretrazi, a ne zaseban sustav",
          paragraphs: [
            "Nazivi poput GEO-a i optimizacije za odgovorničke tražilice mogu pomoći timu da razgovara o promjenama u ponašanju pri otkrivanju informacija. Postaju nekorisni kada impliciraju da je novi sloj prečaca zamijenio rad na web-stranici koja je dostupna, korisna i vjerodostojna.",
            "Google navodi da su njegove generativne značajke ukorijenjene u temeljnim sustavima rangiranja i kvalitete Pretraživanja. Stranica i dalje mora biti indeksirana i podobna za prikaz isječka prije nego što ima priliku pojaviti se u tim iskustvima.",
          ],
        },
        {
          heading: "Izgradite informacije koje generički odgovor ne može zamijeniti",
          paragraphs: [
            "Najbolji ulaz su nekomodificirane informacije: primjeri iz prve ruke, jasne odluke, korisne usporedbe, originalna opažanja i dokazi koji kupcu daju nešto za procijeniti. Stranica ne mora biti duga samo radi duljine, ali treba razriješiti pitanje bolje od generičkog prepričavanja.",
          ],
          list: [
            "Učinite stranicu jednostavnom za otkrivanje, prikazivanje i navigaciju prije ulaganja u AI eksperiment.",
            "Koristite naslove i logične cjeline kako bi ljudi pronašli odgovor i kontekst koji ga podupire.",
            "Održavajte informacije o usluzi, proizvodu, autoru i referencama točnima i povezanima kroz cijelu web-stranicu.",
            "Dodajte relevantne strukturirane podatke zato što istinito opisuju stranicu, a ne zato što obećavaju generativnu vidljivost.",
          ],
        },
        {
          heading: "Izbjegnite izmišljeni kontrolni popis",
          paragraphs: [
            "Ne postoji posebna Google schema vrsta, obvezna LLMS.txt datoteka, fiksna duljina sadržaja ni tvornica stranica za varijacije promptova potrebna za generativnu vidljivost. Izrada velikog broja tankih stranica za varijacije koje ne služe ljudima nije održiva sadržajna strategija.",
            "Ispravan eksperiment počinje stranicom koja zaslužuje biti pronađena, definiranim pitanjem publike, tehničkom osnovom i načinom procjene poboljšava li rad koristan ishod. To je zahtjevniji standard, ali stvara rad koji ostaje vrijedan i nakon promjene pojedine značajke.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Što je važno u praksi", description: "Pročitajte Koupoli Bilješku o korištenju GEO naziva bez gubitka fokusa na stvarni SEO rad." },
      related: ["technical-seo", "entity-seo", "ai-search-visibility"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI značajke i vaša web-stranica", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Razgovarajte o spremnosti za AI pretragu",
      contactDescription: "Donesite pitanje o lansiranju, sadržaju ili tehnici u prvi usmjereni razgovor.",
    },
  },
};

export function getGlossaryGuide(locale: GlossaryGuideLocale, key: GlossaryGuideKey) {
  return glossaryGuides[locale][key];
}

export function getGlossaryGuideBySlug(locale: GlossaryGuideLocale, slug: string) {
  return Object.values(glossaryGuides[locale]).find((guide) => guide.slug === slug);
}
