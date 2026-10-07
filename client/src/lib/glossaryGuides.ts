export type GlossaryGuideLocale = "en" | "hr";
export type GlossaryGuideKey = "technical-seo" | "entity-seo" | "ai-search-visibility" | "generative-engine-optimization";

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
  note: { slug: string; label: string; description: string };
  related: GlossaryGuideKey[];
  sourcesLabel: string;
  sources: Array<{ label: string; href: string }>;
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
      image: "/assets/koupoli-technical-seo-guide.webp",
      imageAlt: "Editorial illustration of a structured technical SEO map",
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
      note: { slug: "website-migration-seo", label: "Website Migration SEO", description: "Use this launch checklist to see how redirects, internal links, canonicals, and monitoring fit together in a live migration." },
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
      metaTitle: "Entity SEO: A Practical Guide | Koupoli",
      metaDescription: "A practical entity SEO guide for making the people, products, organisations, places, and concepts on a website clear and consistently connected.",
      kicker: "Glossary guide",
      lead: "Entity SEO is the work of reducing ambiguity around the real things your organisation, website, and audience need search systems to understand.",
      image: "/assets/koupoli-entity-seo-guide.webp",
      imageAlt: "Editorial illustration of connected entities and a knowledge map",
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
          heading: "Clarity matters more than markup volume",
          paragraphs: [
            "Structured data can give search systems explicit clues about a page, but it cannot fix vague positioning or thin information. Google advises that markup should describe the content of the page and not be placed on blank pages created solely to hold structured data.",
            "For a service business, the durable result is a connected body of evidence: a clear About page, precise service pages, relevant projects, practical Notes, and a consistent vocabulary. That body of work helps people understand why the business is credible before any individual signal is measured.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generative Engine Optimization", description: "See why accurate entities, original information, and connected pages matter more than invented AI-only tactics." },
      related: ["technical-seo", "ai-search-visibility", "generative-engine-optimization"],
      sourcesLabel: "Sources",
      sources: [
        { label: "Google Search Central: Introduction to structured data markup", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      ],
      glossaryLabel: "Explore the glossary",
      glossaryDescription: "Return to the full SEO and AI search terminology index.",
      contactLabel: "Discuss your information architecture",
      contactDescription: "Bring a positioning, content, or technical structure question to a focused first conversation.",
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
      image: "/assets/koupoli-ai-search-visibility-guide.webp",
      imageAlt: "Editorial illustration of a search lens examining source evidence",
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
      image: "/assets/koupoli-geo-guide.webp",
      imageAlt: "Editorial illustration of generative search built on SEO foundations",
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
      image: "/assets/koupoli-technical-seo-guide.webp",
      imageAlt: "Urednička ilustracija strukturirane tehničke SEO mape",
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
      note: { slug: "website-migration-seo", label: "SEO migracija web-stranice", description: "Pogledajte kako se redirekcije, interne poveznice, canonical oznake i praćenje uklapaju u stvarnu migraciju." },
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
      metaTitle: "Entitetski SEO: Praktičan vodič | Koupoli",
      metaDescription: "Praktičan vodič za entitetski SEO koji osobe, proizvode, organizacije, lokacije i koncepte na web-stranici čini jasnima i povezanima.",
      kicker: "Vodič kroz pojmovnik",
      lead: "Entitetski SEO je rad na smanjivanju nejasnoće oko stvarnih stvari koje vaša organizacija, web-stranica i publika trebaju jasno razumjeti.",
      image: "/assets/koupoli-entity-seo-guide.webp",
      imageAlt: "Urednička ilustracija povezanih entiteta i mape znanja",
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
          heading: "Jasnoća je važnija od količine markupa",
          paragraphs: [
            "Strukturirani podaci tražilicama mogu dati izričite signale o stranici, ali ne mogu popraviti nejasno pozicioniranje ni tanke informacije. Google savjetuje da markup opisuje sadržaj stranice i da se ne stavlja na prazne stranice izrađene samo za strukturirane podatke.",
            "Za uslužnu tvrtku održiv rezultat je povezano tijelo dokaza: jasna stranica O meni, precizne stranice usluga, relevantni projekti, praktične Bilješke i dosljedan rječnik. Takav rad ljudima pomaže razumjeti zašto je tvrtka vjerodostojna prije nego što se izmjeri pojedinačni signal.",
          ],
        },
      ],
      note: { slug: "generative-engine-optimization", label: "Generativna optimizacija", description: "Pogledajte zašto su točni entiteti, originalne informacije i povezane stranice važniji od izmišljenih AI taktika." },
      related: ["technical-seo", "ai-search-visibility", "generative-engine-optimization"],
      sourcesLabel: "Izvori",
      sources: [
        { label: "Google Search Central: Uvod u strukturirane podatke", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { label: "Google Search Central: Koristan, pouzdan sadržaj usmjeren na ljude", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      ],
      glossaryLabel: "Istražite pojmovnik",
      glossaryDescription: "Vratite se na cjeloviti indeks SEO i AI pojmova.",
      contactLabel: "Razgovarajte o informacijskoj arhitekturi",
      contactDescription: "Donesite pitanje o pozicioniranju, sadržaju ili tehničkoj strukturi u prvi usmjereni razgovor.",
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
      image: "/assets/koupoli-ai-search-visibility-guide.webp",
      imageAlt: "Urednička ilustracija leće pretrage koja promatra izvorne dokaze",
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
      image: "/assets/koupoli-geo-guide.webp",
      imageAlt: "Urednička ilustracija generativne pretrage izgrađene na SEO temeljima",
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
