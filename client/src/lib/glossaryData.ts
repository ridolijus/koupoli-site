export type GlossaryLocale = "en" | "hr";
export type GlossaryCategory = "technical" | "content" | "ai";

export type GlossaryTerm = {
  term: string;
  definition: string;
  category: GlossaryCategory;
  guidePath?: string;
};

type GlossaryContent = {
  title: string;
  description: string;
  kicker: string;
  heading: string;
  lead: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearLabel: string;
  allLabel: string;
  countLabel: (count: number) => string;
  emptyTitle: string;
  emptyCopy: string;
  categories: Record<GlossaryCategory, { label: string; summary: string }>;
  figures: Array<{ value: string; label: string }>;
  principleTitle: string;
  principleCopy: string;
  resourceKicker: string;
  resourceTitle: string;
  resources: Array<{ href: string; title: string; description: string }>;
  terms: GlossaryTerm[];
};

export const glossaryContent: Record<GlossaryLocale, GlossaryContent> = {
  en: {
    title: "SEO & AI Search Glossary | Koupoli",
    description: "A practical SEO and AI search glossary from Koupoli, covering technical foundations, content systems, entities, and generative search visibility.",
    kicker: "Koupoli glossary",
    heading: "The terms behind useful organic growth.",
    lead: "A practical reference for the SEO, technical, content, and AI-search language that shapes a durable organic programme.",
    searchLabel: "Find a term",
    searchPlaceholder: "Search the glossary",
    clearLabel: "Clear search",
    allLabel: "All terms",
    countLabel: (count) => `${count} ${count === 1 ? "term" : "terms"}`,
    emptyTitle: "No terms match that search.",
    emptyCopy: "Try a broader phrase or return to all terms.",
    categories: {
      technical: { label: "Technical foundations", summary: "How a site is crawled, understood, rendered, and kept healthy." },
      content: { label: "Content & authority", summary: "How information is structured around real questions, entities, and intent." },
      ai: { label: "AI search", summary: "The language used to discuss visibility in generative and answer-driven search." },
    },
    figures: [
      { value: "30", label: "English terms" },
      { value: "3", label: "Connected disciplines" },
      { value: "1", label: "Practical vocabulary" },
    ],
    principleTitle: "A glossary should clarify the work, not manufacture pages.",
    principleCopy: "These definitions are designed to help teams make better decisions about a website, a launch, or an organic growth plan. They are connected to Koupoli's Notes and services where the idea becomes practical work.",
    resourceKicker: "Keep reading",
    resourceTitle: "Turn definitions into a working plan.",
    resources: [
      { href: "/post/generative-engine-optimization/", title: "Generative engine optimization", description: "What matters in practice when AI search changes the way buyers discover information." },
      { href: "/post/website-migration-seo/", title: "Website migration SEO", description: "A practical checklist for protecting search equity when a site changes." },
      { href: "/contact/", title: "Plan an organic launch", description: "Bring a launch, growth question, or technical constraint to a focused first conversation." },
    ],
    terms: [
      { term: "AI Citations", definition: "References or source links used in an AI-generated answer. Their presence can show that a source informed the answer, but it does not replace a complete measurement of commercial visibility.", category: "ai" },
      { term: "AI Mode", definition: "Google's conversational search experience that can combine a query with follow-up questions, web results, and generated responses. It still depends on useful, crawlable source material.", category: "ai" },
      { term: "AI Overviews", definition: "Generated summaries that can appear in Google Search for some queries. They are built from Google's search systems and do not require a special AI-only content format.", category: "ai" },
      { term: "AI Search Visibility", definition: "A practical view of whether priority pages and brand information appear for relevant questions in AI-assisted search, alongside the business signals those appearances support.", category: "ai", guidePath: "/glossary/ai-search-visibility/" },
      { term: "AI SEO", definition: "A useful shorthand for SEO work that also considers visibility in AI-generated answers. It is not separate from technical quality, original information, and strong search fundamentals.", category: "ai" },
      { term: "AI Share of Voice", definition: "A comparative measure of how often a brand, page, or entity is represented across a defined set of AI-search questions. It is a directional signal, not a direct equivalent of a ranking.", category: "ai" },
      { term: "Answer Engine Optimization", definition: "Work intended to make information easier to surface in answer-led search experiences. In practice, it relies on clear content, technical accessibility, and credible sources.", category: "ai" },
      { term: "Canonical URL", definition: "The preferred URL for a page when similar or duplicate versions exist. Canonical tags help search engines understand which version should be treated as the primary one.", category: "technical" },
      { term: "Core Web Vitals", definition: "Google's page-experience metrics for loading performance, interaction responsiveness, and visual stability. They should be assessed alongside usability and technical quality, not in isolation.", category: "technical" },
      { term: "Crawling", definition: "The process through which search engine bots discover and retrieve pages. A page that cannot be crawled cannot reliably become part of a search engine's understanding of a site.", category: "technical" },
      { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness, and Trust. It is a useful framework for evaluating whether content shows credible first-hand knowledge and can be trusted by readers.", category: "content" },
      { term: "Entity SEO", definition: "The practice of making the people, products, places, organisations, and concepts on a site clear and consistently connected so search systems can understand what each page is about.", category: "content", guidePath: "/glossary/entity-seo/" },
      { term: "Generative Engine Optimization", definition: "Often shortened to GEO, this describes work intended to improve how useful pages and brand information can appear in AI-generated search answers. It builds on SEO rather than replacing it.", category: "ai", guidePath: "/glossary/generative-engine-optimization/" },
      { term: "Generative Search", definition: "A search experience that combines information retrieval with generated summaries or answers. It changes how some users consume results, while still relying on accessible, high-quality source pages.", category: "ai" },
      { term: "Indexing", definition: "The process through which a search engine analyses a crawled page and decides whether it can be stored and surfaced in results. A crawled page is not automatically indexed.", category: "technical" },
      { term: "Information Architecture", definition: "The deliberate structure of pages, navigation, categories, and internal links that helps people and search engines understand the relationships between topics.", category: "content" },
      { term: "Internal Links", definition: "Links between pages on the same website. They guide visitors, establish relationships between topics, and help important pages become easier for crawlers to discover and understand.", category: "content" },
      { term: "JavaScript Rendering", definition: "The process through which a browser or search engine executes JavaScript to produce the final page. Important content and links should remain accessible when rendering is delayed or limited.", category: "technical" },
      { term: "Large Language Model", definition: "A model trained on large amounts of text to predict and generate language. In search, it can help produce answers, but the underlying source information still needs to be accurate and accessible.", category: "ai" },
      { term: "Redirect", definition: "An instruction that sends a visitor or crawler from one URL to another. Direct server-side redirects are essential when important pages move during a website migration.", category: "technical" },
      { term: "Retrieval-Augmented Generation", definition: "A method that combines language-model output with retrieved source material. It helps explain why source quality, clear entities, and accessible content matter in answer-driven search.", category: "ai" },
      { term: "Robots.txt", definition: "A file that gives crawlers instructions about which paths they may access. It is not a substitute for noindex controls and should be handled carefully on public sites.", category: "technical" },
      { term: "Search Demand", definition: "The volume and pattern of interest around a topic, problem, or query. Useful demand analysis considers relevance and commercial context, not just a headline monthly-volume figure.", category: "content" },
      { term: "Search Intent", definition: "The underlying goal behind a search. A person may want an explanation, a comparison, a solution, or a specific destination. Strong pages meet that goal clearly.", category: "content" },
      { term: "Structured Data", definition: "Machine-readable information added to a page to describe what it represents. It should accurately reflect visible content, not be used as a shortcut for rankings or AI features.", category: "technical" },
      { term: "Technical SEO", definition: "The work that makes a website crawlable, indexable, understandable, and dependable through its URL structure, internal links, rendering, redirects, canonical URLs, performance, and related foundations.", category: "technical", guidePath: "/glossary/technical-seo/" },
      { term: "Topic Cluster", definition: "A connected group of pages that explores a meaningful subject from different angles and links the work together. A cluster is useful when each page serves a distinct user question.", category: "content" },
      { term: "Topical Authority", definition: "The confidence a search system and audience can develop when a site consistently covers an area with useful, connected, accurate, and original information.", category: "content" },
      { term: "Website Migration", definition: "A substantial change to a site's domain, URL structure, platform, templates, or content. It requires a plan for redirects, internal links, canonicals, language versions, and post-launch monitoring.", category: "technical" },
      { term: "XML Sitemap", definition: "A structured file that lists canonical URLs you want search engines to consider. It supports discovery but does not guarantee crawling, indexing, or rankings.", category: "technical" },
    ],
  },
  hr: {
    title: "SEO i AI pojmovnik | Koupoli",
    description: "Praktičan Koupoli pojmovnik za SEO i AI pretragu: tehnički temelji, sustavi sadržaja, entiteti i vidljivost u generativnoj pretrazi.",
    kicker: "Koupoli pojmovnik",
    heading: "Pojmovi koji stoje iza dobrog organskog rasta.",
    lead: "Praktičan izvor za SEO, tehničke, sadržajne i AI pojmove koji oblikuju održiv program organskog rasta.",
    searchLabel: "Pronađite pojam",
    searchPlaceholder: "Pretražite pojmovnik",
    clearLabel: "Očistite pretragu",
    allLabel: "Svi pojmovi",
    countLabel: (count) => `${count} ${count === 1 ? "pojam" : count < 5 ? "pojma" : "pojmova"}`,
    emptyTitle: "Nema rezultata za tu pretragu.",
    emptyCopy: "Pokušajte sa širim pojmom ili se vratite na sve pojmove.",
    categories: {
      technical: { label: "Tehnički temelji", summary: "Kako tražilice crawla­ju, razumiju i održavaju tehničko zdravlje web-stranice." },
      content: { label: "Sadržaj i autoritet", summary: "Kako se informacije oblikuju oko stvarnih pitanja, entiteta i namjere pretraživanja." },
      ai: { label: "AI pretraga", summary: "Pojmovi koji objašnjavaju vidljivost u generativnoj pretrazi i odgovorima." },
    },
    figures: [
      { value: "20", label: "hrvatskih pojmova" },
      { value: "3", label: "povezana područja" },
      { value: "1", label: "praktičan rječnik" },
    ],
    principleTitle: "Pojmovnik treba razjasniti posao, a ne proizvoditi stranice.",
    principleCopy: "Ove definicije pomažu timovima donijeti bolje odluke o web-stranici, lansiranju ili planu organskog rasta. Povezane su s Koupoli Bilješkama i uslugama gdje se pojam pretvara u praktičan rad.",
    resourceKicker: "Nastavite istraživati",
    resourceTitle: "Pretvorite definicije u konkretan plan.",
    resources: [
      { href: "/post/generative-engine-optimization/", title: "Generativna optimizacija", description: "Što je u praksi važno kada AI pretraga mijenja način na koji kupci dolaze do informacija." },
      { href: "/post/website-migration-seo/", title: "SEO migracija web-stranice", description: "Praktičan kontrolni popis za zaštitu organske vidljivosti kada se web-stranica mijenja." },
      { href: "/contact/", title: "Isplanirajte organsko lansiranje", description: "Donesite lansiranje, pitanje rasta ili tehničku prepreku u prvi usmjereni razgovor." },
    ],
    terms: [
      { term: "AI citati", definition: "Reference ili poveznice na izvore koje se pojavljuju u odgovoru generiranom umjetnom inteligencijom. Mogu pokazati da je izvor utjecao na odgovor, ali nisu potpuna mjera poslovne vidljivosti.", category: "ai" },
      { term: "AI Overviews", definition: "Generativni sažeci koji se mogu pojaviti u Google Pretraživanju za određene upite. Temelje se na Googleovim sustavima pretraživanja i ne traže poseban AI format sadržaja.", category: "ai" },
      { term: "AI SEO", definition: "Korisna skraćenica za SEO rad koji uzima u obzir vidljivost u odgovorima generiranim umjetnom inteligencijom. Nije odvojen od tehničke kvalitete, originalnih informacija i dobrih SEO temelja.", category: "ai" },
      { term: "Crawlabilnost", definition: "Mogućnost da botovi tražilica otkriju i preuzmu stranicu. Stranica koja se ne može crawlat ne može pouzdano postati dio razumijevanja web-stranice.", category: "technical" },
      { term: "Core Web Vitals", definition: "Googleovi pokazatelji korisničkog iskustva za učitavanje, odzivnost i vizualnu stabilnost stranice. Treba ih procjenjivati uz upotrebljivost i cjelokupnu tehničku kvalitetu.", category: "technical" },
      { term: "Entitetski SEO", definition: "Pristup koji jasno i dosljedno povezuje osobe, proizvode, lokacije, organizacije i koncepte na web-stranici kako bi tražilice razumjele temu svake stranice.", category: "content", guidePath: "/hr/pojmovnik/entitetski-seo/" },
      { term: "Generativna optimizacija", definition: "Često označena kraticom GEO, opisuje rad usmjeren na poboljšanje korisnih stranica i informacija o brendu u odgovorima generiranim umjetnom inteligencijom. Gradi se na SEO-u, a ne zamjenjuje ga.", category: "ai", guidePath: "/hr/pojmovnik/generativna-optimizacija/" },
      { term: "Indeksiranje", definition: "Proces u kojem tražilica analizira crawlan­u stranicu i odlučuje može li se spremiti i prikazati u rezultatima. Crawlanje stranice ne znači automatski indeksiranje.", category: "technical" },
      { term: "Informacijska arhitektura", definition: "Promišljena struktura stranica, navigacije, kategorija i internih poveznica koja ljudima i tražilicama pomaže razumjeti odnose među temama.", category: "content" },
      { term: "Interno povezivanje", definition: "Poveznice između stranica iste web-stranice. Vode posjetitelje, stvaraju odnose među temama i važnim stranicama olakšavaju otkrivanje i razumijevanje.", category: "content" },
      { term: "Kanonikalni URL", definition: "Preferirani URL stranice kada postoje slične ili duplicirane verzije. Canonical oznake pomažu tražilicama razumjeti koja je verzija primarna.", category: "technical" },
      { term: "Namjera pretraživanja", definition: "Temeljni cilj koji osoba ima pri pretraživanju. Može tražiti objašnjenje, usporedbu, rješenje ili određeno odredište. Dobra stranica jasno odgovara na tu namjeru.", category: "content" },
      { term: "Robots.txt", definition: "Datoteka koja crawlerima daje upute o putanjama kojima smiju pristupiti. Nije zamjena za noindex oznake i treba je pažljivo koristiti na javnim stranicama.", category: "technical" },
      { term: "SEO", definition: "Optimizacija za tražilice. Skup strateških, sadržajnih i tehničkih aktivnosti koje pomažu web-stranici biti dostupna, razumljiva i korisna za relevantne upite.", category: "technical" },
      { term: "Strukturirani podaci", definition: "Strojno čitljivi podaci na stranici koji opisuju njezin sadržaj. Trebaju točno odražavati vidljivi sadržaj, a ne služiti kao prečac do rangiranja ili AI značajki.", category: "technical" },
      { term: "Tehnički SEO", definition: "Rad na tehničkoj dostupnosti, indeksiranju, strukturi, izvedbi i drugim preduvjetima koji tražilicama i posjetiteljima omogućuju pouzdano korištenje web-stranice.", category: "technical", guidePath: "/hr/pojmovnik/tehnicki-seo/" },
      { term: "Tematski autoritet", definition: "Povjerenje koje tražilica i publika mogu razviti kada web-stranica dosljedno obrađuje područje kroz korisne, povezane, točne i originalne informacije.", category: "content" },
      { term: "Vidljivost u AI pretrazi", definition: "Praktičan pogled na to pojavljuju li se prioritetne stranice i informacije o brendu za relevantna pitanja u pretrazi uz pomoć umjetne inteligencije, zajedno s poslovnim signalima koje podupiru.", category: "ai", guidePath: "/hr/pojmovnik/vidljivost-u-ai-pretrazi/" },
      { term: "Web migracija", definition: "Veća promjena domene, strukture URL-ova, platforme, predložaka ili sadržaja web-stranice. Traži plan za redirekcije, interne poveznice, canonical oznake, jezične verzije i provjere nakon lansiranja.", category: "technical" },
      { term: "XML sitemap", definition: "Strukturirana datoteka s kanonikalnim URL-ovima koje želite da tražilice razmotre. Podržava otkrivanje stranica, ali ne jamči crawlabilnost, indeksiranje ni pozicije.", category: "technical" },
    ],
  },
};
