import { ArrowDownRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";

type Locale = "en" | "hr";

type Offer = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
  fit: string;
};

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  primaryCta: string;
  secondaryCta: string;
  signalTitle: string;
  signalLead: string;
  signals: { label: string; title: string; description: string }[];
  thesisEyebrow: string;
  thesisTitle: string;
  thesisBody: string;
  offersEyebrow: string;
  offersTitle: string;
  offersLead: string;
  offers: Offer[];
  systemsEyebrow: string;
  systemsTitle: string;
  systems: { title: string; description: string }[];
  insightEyebrow: string;
  insightTitle: string;
  insightBody: string;
  insightTags: string[];
  proofEyebrow: string;
  proofTitle: string;
  proofBody: string;
  proofPoints: { label: string; value: string; detail: string }[];
  articlesEyebrow: string;
  articlesTitle: string;
  articles: { number: string; title: string; description: string; href: string }[];
  articlesLink: string;
  guidesEyebrow: string;
  guidesTitle: string;
  guidesLead: string;
  guidesLink: string;
  guides: { number: string; title: string; description: string; href: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqLead: string;
  faqs: { question: string; answer: string }[];
  finalTitle: string;
  finalBody: string;
  finalCta: string;
};

const copies: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "Koupoli / Organic growth studio",
    heroTitle: "Launch with a search system, not a content gamble.",
    heroLead: "Koupoli brings together SEO strategy, technical execution, and AI-search readiness for ambitious teams entering a new market, category, or growth phase.",
    primaryCta: "Plan an organic launch",
    secondaryCta: "See the two ways we work",
    signalTitle: "Search is now a system of signals.",
    signalLead: "A launch needs more than a homepage and a list of keywords. It needs a clear position, a technically sound site, and evidence that search engines and AI answers can understand.",
    signals: [
      { label: "01 / Foundation", title: "Technical clarity", description: "Crawlability, indexing, structure, performance, and structured data in place before demand arrives." },
      { label: "02 / Demand", title: "A useful point of view", description: "Information architecture and content that answer real buyer questions across the journey." },
      { label: "03 / Visibility", title: "Search and AI signals", description: "A durable presence in Google alongside visibility across AI-mediated discovery." },
    ],
    thesisEyebrow: "The Koupoli view",
    thesisTitle: "SEO is the operating system. AI search is the new interface.",
    thesisBody: "The fundamentals have not disappeared: useful pages need to be accessible, trustworthy, structurally clear, and connected to real demand. AI answers have changed how people discover those pages. Koupoli works across both layers, so teams do not have to choose between short-term visibility and work that compounds.",
    offersEyebrow: "Two ways to work together",
    offersTitle: "Choose the level of support your launch needs.",
    offersLead: "One engagement designs the system. The other carries it into the work. Both begin with the commercial context, not a pre-packaged list of SEO tasks.",
    offers: [
      {
        number: "01",
        eyebrow: "For teams that need direction",
        title: "Organic Launch Consultation",
        description: "A focused advisory engagement for leaders who need an organic growth plan they can actually use across product, brand, content, and development.",
        deliverables: ["Search and market opportunity map", "Organic launch narrative and priorities", "Technical and content risk review", "A practical 90-day plan with ownership"],
        fit: "Best for new launches, repositioning, new market entry, or a stalled growth plan.",
      },
      {
        number: "02",
        eyebrow: "For teams that need hands-on momentum",
        title: "SEO & AI Search Operations",
        description: "Ongoing technical SEO and search-content execution for teams that want an experienced operator working alongside marketing, product, and development.",
        deliverables: ["Technical SEO audits and implementation tickets", "Information architecture and content briefs", "Schema, indexing, migration, and performance work", "AI-search visibility tracking and reporting"],
        fit: "Best for teams with a clear direction that need consistent operational progress.",
      },
    ],
    systemsEyebrow: "What the work connects",
    systemsTitle: "One growth system across the decisions that usually drift apart.",
    systems: [
      { title: "Positioning", description: "Clarify the category, audience, and proof your future pages need to communicate." },
      { title: "Architecture", description: "Turn that position into a site structure that search engines and people can navigate." },
      { title: "Evidence", description: "Build useful content, entities, and proof points that make the brand easier to cite and choose." },
      { title: "Measurement", description: "Track technical health, qualified demand, visibility, and the questions the market is actually asking." },
    ],
    insightEyebrow: "Built for the market you are entering",
    insightTitle: "Organic growth needs a system that can travel across markets.",
    insightBody: "Search language changes by category and audience. The underlying work does not: clear technical foundations, useful information architecture, proof, and a way to measure whether the right people can find you.",
    insightTags: ["SEO optimizacija", "SEO consulting", "Technical SEO", "AI SEO", "AI search visibility", "Generative engine optimization"],
    proofEyebrow: "Grounded in real delivery",
    proofTitle: "A specialist who can connect the strategy to the implementation.",
    proofBody: "Karlo’s work spans technical SEO, migrations, content systems, Webflow development, and cross-functional delivery. That range matters at launch, where an insight only counts when it reaches the live site.",
    proofPoints: [
      { label: "Search performance", value: "60k", detail: "clicks supported at a sustained 30-40% CTR" },
      { label: "Organic foundation", value: "300k", detail: "click project built on durable SEO fundamentals" },
      { label: "Experience", value: "8+", detail: "years across technical, product, and organic growth work" },
    ],
    articlesEyebrow: "Field notes",
    articlesTitle: "Practical answers for the work that compounds.",
    articlesLink: "View all Notes",
    articles: [
      { number: "01", title: "What AI search visibility should actually be measured against", description: "A practical framework for separating visibility theatre from signals that matter.", href: "/post/ai-search-visibility/" },
      { number: "02", title: "The organic launch checklist for teams shipping a new category", description: "What needs to be decided before a site, campaign, or product story goes live.", href: "/post/website-migration-seo/" },
      { number: "03", title: "Technical SEO for AI search: what has changed, and what has not", description: "A grounded guide to the foundations that still earn discovery.", href: "/post/generative-engine-optimization/" },
    ],
    guidesEyebrow: "Glossary guides",
    guidesTitle: "Four foundations worth understanding before you commission the work.",
    guidesLead: "Short working guides for the technical, entity, and AI-search language that gives a launch plan its structure.",
    guidesLink: "Explore the full glossary",
    guides: [
      { number: "01", title: "Technical SEO", description: "How technical foundations make important pages discoverable and dependable.", href: "/glossary/technical-seo/" },
      { number: "02", title: "Entity SEO", description: "How clear relationships between people, services, and proof reduce ambiguity.", href: "/glossary/entity-seo/" },
      { number: "03", title: "AI search visibility", description: "What to measure before a mention count becomes a reporting problem.", href: "/glossary/ai-search-visibility/" },
      { number: "04", title: "Generative engine optimization", description: "What stays the same when AI changes the way buyers discover information.", href: "/glossary/generative-engine-optimization/" },
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "A few useful answers before the first conversation.",
    faqLead: "The work begins with the same practical questions that come up when a team is choosing an SEO consultant, planning a launch, or deciding what AI search changes for them.",
    faqs: [
      { question: "Is AI SEO different from SEO?", answer: "AI SEO, generative engine optimization, and AI search visibility describe how a brand appears in AI-generated answers. They do not replace SEO fundamentals. Crawlability, indexation, information architecture, accurate entities, and genuinely useful pages still create the foundation." },
      { question: "What is included in an organic launch consultation?", answer: "The consultation turns commercial context into a usable organic plan: market and search opportunity, positioning input, technical and content risks, priorities, ownership, and a practical 90-day sequence for the work ahead." },
      { question: "When should technical SEO be involved?", answer: "Before a new site, redesign, migration, or content push goes live. Early technical input helps avoid the familiar problems: pages that cannot be crawled or indexed properly, weak site structure, lost redirects, slow templates, and missing structured data." },
      { question: "Can Koupoli support a Webflow site or migration?", answer: "Yes. The operational work can cover site architecture, technical SEO audits, implementation tickets, Webflow delivery, redirects, indexation, performance, and the content structure that needs to survive a migration or relaunch." },
      { question: "Do you work with teams outside Croatia?", answer: "Yes. Koupoli works remotely with English-speaking teams across Europe and the United States, particularly where a launch, repositioning, or growth stage needs a clear connection between strategy and technical delivery." },
      { question: "How is AI search visibility measured?", answer: "The starting point is not a vanity mention count. Measurement combines qualified search demand, technical health, brand and entity coverage, visibility for priority questions, citations where they matter, and the business signals the work is expected to influence." },
    ],
    finalTitle: "Bring the launch, the question, or the search problem.",
    finalBody: "The first conversation is for understanding the context and deciding whether Koupoli is the right fit.",
    finalCta: "Start a conversation",
  },
  hr: {
    heroEyebrow: "Koupoli / Studio za organski rast",
    heroTitle: "Lansirajte s planom za pretragu, ne s nagađanjem sadržaja.",
    heroLead: "Koupoli povezuje SEO strategiju, tehničku izvedbu i spremnost za AI pretragu za ambiciozne timove koji ulaze na novo tržište, u novu kategoriju ili novu fazu rasta.",
    primaryCta: "Isplaniraj organsko lansiranje",
    secondaryCta: "Pogledaj kako radimo",
    signalTitle: "Pretraga je danas sustav signala.",
    signalLead: "Za lansiranje nije dovoljna početna stranica i popis ključnih riječi. Potrebni su jasna pozicija, tehnički ispravna stranica i dokazi koje pretraživači i AI odgovori mogu razumjeti.",
    signals: [
      { label: "01 / Temelj", title: "Tehnička jasnoća", description: "Crawlabilnost, indeksiranje, struktura, brzina i strukturirani podaci spremni prije dolaska potražnje." },
      { label: "02 / Potražnja", title: "Korisna perspektiva", description: "Informacijska arhitektura i sadržaj koji odgovaraju na stvarna pitanja kupaca kroz cijeli put odlučivanja." },
      { label: "03 / Vidljivost", title: "Signali za pretragu i AI", description: "Dugoročna prisutnost u Googleu uz vidljivost u otkrivanju sadržaja posredovanom umjetnom inteligencijom." },
    ],
    thesisEyebrow: "Koupoli pristup",
    thesisTitle: "SEO je operativni sustav. AI pretraga je novo sučelje.",
    thesisBody: "Temelji nisu nestali: korisne stranice moraju biti dostupne, vjerodostojne, jasno strukturirane i povezane sa stvarnom potražnjom. AI odgovori promijenili su način na koji ljudi takve stranice otkrivaju. Koupoli radi na obje razine, tako da timovi ne moraju birati između kratkoročne vidljivosti i rada koji se dugoročno akumulira.",
    offersEyebrow: "Dva načina suradnje",
    offersTitle: "Odaberite razinu podrške koja je potrebna vašem lansiranju.",
    offersLead: "Jedan angažman postavlja sustav. Drugi ga provodi kroz konkretan rad. Oba počinju poslovnim kontekstom, a ne unaprijed pripremljenom listom SEO zadataka.",
    offers: [
      {
        number: "01",
        eyebrow: "Za timove kojima treba smjer",
        title: "Konzultacije za organsko lansiranje",
        description: "Fokusirani savjetodavni angažman za voditelje kojima je potreban plan organskog rasta koji mogu koristiti kroz proizvod, brend, sadržaj i razvoj.",
        deliverables: ["Mapa tržišnih prilika i potražnje", "Narativ i prioriteti za organsko lansiranje", "Pregled tehničkih i sadržajnih rizika", "Praktičan plan za 90 dana s vlasnicima zadataka"],
        fit: "Najbolje za nova lansiranja, repozicioniranje, ulazak na novo tržište ili stagnirajući plan rasta.",
      },
      {
        number: "02",
        eyebrow: "Za timove kojima treba izvedba",
        title: "SEO i AI Search Operations",
        description: "Kontinuirana tehnička SEO i sadržajna izvedba za timove koji žele iskusnog operativca uz marketing, proizvod i razvoj.",
        deliverables: ["Tehnički SEO auditi i zadaci za implementaciju", "Informacijska arhitektura i briefovi za sadržaj", "Schema, indeksiranje, migracije i brzina", "Praćenje i izvještavanje o AI vidljivosti"],
        fit: "Najbolje za timove s jasnim smjerom kojima treba kontinuirani operativni napredak.",
      },
    ],
    systemsEyebrow: "Što rad povezuje",
    systemsTitle: "Jedan sustav rasta kroz odluke koje se najčešće razdvoje.",
    systems: [
      { title: "Pozicioniranje", description: "Jasno definiramo kategoriju, publiku i dokaze koje buduće stranice trebaju komunicirati." },
      { title: "Arhitektura", description: "Tu poziciju pretvaramo u strukturu weba kojom se mogu kretati ljudi i pretraživači." },
      { title: "Dokazi", description: "Gradimo koristan sadržaj, entitete i dokaze koji brend čine lakšim za citiranje i odabir." },
      { title: "Mjerenje", description: "Pratimo tehničko zdravlje, kvalificiranu potražnju, vidljivost i pitanja koja tržište zaista postavlja." },
    ],
    insightEyebrow: "Izgrađeno za tržište na koje ulazite",
    insightTitle: "Organski rast treba sustav koji može pratiti širenje na nova tržišta.",
    insightBody: "Jezik pretrage mijenja se prema kategoriji i publici. Temeljni rad ne: jasna tehnička osnova, korisna informacijska arhitektura, dokazi i način mjerenja mogu li vas pravi ljudi pronaći.",
    insightTags: ["SEO optimizacija", "SEO savjetovanje", "Tehnički SEO", "AI SEO", "AI vidljivost", "Generative engine optimization"],
    proofEyebrow: "Temeljeno na stvarnoj izvedbi",
    proofTitle: "Specijalist koji može spojiti strategiju s implementacijom.",
    proofBody: "Karlov rad obuhvaća tehnički SEO, migracije, sadržajne sustave, Webflow razvoj i međufunkcionalnu izvedbu. To je važno pri lansiranju, gdje uvid vrijedi tek kada dođe do žive stranice.",
    proofPoints: [
      { label: "Rezultati u pretrazi", value: "60k", detail: "klikova uz održani CTR od 30-40%" },
      { label: "Organski temelj", value: "300k", detail: "klikova na projektu izgrađenom na dugotrajnim SEO osnovama" },
      { label: "Iskustvo", value: "8+", detail: "godina kroz tehnički, produktni i organski rast" },
    ],
    articlesEyebrow: "Terenske bilješke",
    articlesTitle: "Praktični odgovori za rad čiji se učinak akumulira.",
    articlesLink: "Pogledajte sve bilješke",
    articles: [
      { number: "01", title: "Što zaista treba mjeriti kod vidljivosti u AI pretrazi", description: "Praktičan okvir za razdvajanje prividne vidljivosti od signala koji stvarno vrijede.", href: "/post/ai-search-visibility/" },
      { number: "02", title: "Checklista za organsko lansiranje nove kategorije", description: "Što treba odlučiti prije lansiranja weba, kampanje ili produktne priče.", href: "/post/website-migration-seo/" },
      { number: "03", title: "Tehnički SEO za AI pretragu: što se promijenilo, a što nije", description: "Utemeljen vodič kroz osnove koje i dalje donose otkrivanje.", href: "/post/generative-engine-optimization/" },
    ],
    guidesEyebrow: "Vodiči kroz pojmove",
    guidesTitle: "Četiri temelja koja treba razumjeti prije ugovaranja posla.",
    guidesLead: "Kratki praktični vodiči za tehnički, entitetski i AI jezik pretrage koji planu lansiranja daje strukturu.",
    guidesLink: "Istražite cijeli pojmovnik",
    guides: [
      { number: "01", title: "Tehnički SEO", description: "Kako tehnički temelji važne stranice čine dostupnima i pouzdanima.", href: "/pojmovnik/tehnicki-seo/" },
      { number: "02", title: "Entitetski SEO", description: "Kako jasni odnosi među ljudima, uslugama i dokazima smanjuju nejasnoću.", href: "/pojmovnik/entitetski-seo/" },
      { number: "03", title: "Vidljivost u AI pretrazi", description: "Što mjeriti prije nego broj spominjanja postane problem izvještavanja.", href: "/pojmovnik/vidljivost-u-ai-pretrazi/" },
      { number: "04", title: "Generativna optimizacija", description: "Što ostaje isto kada AI promijeni način na koji kupci otkrivaju informacije.", href: "/pojmovnik/generativna-optimizacija/" },
    ],
    faqEyebrow: "Česta pitanja",
    faqTitle: "Nekoliko korisnih odgovora prije prvog razgovora.",
    faqLead: "Rad počinje praktičnim pitanjima koja se pojavljuju kada tim bira SEO savjetnika, planira lansiranje ili odlučuje što AI pretraga znači za njihovo poslovanje.",
    faqs: [
      { question: "Je li AI SEO drugačiji od SEO-a?", answer: "AI SEO, generative engine optimization i vidljivost u AI pretrazi opisuju kako se brend pojavljuje u odgovorima generiranim umjetnom inteligencijom. Ne zamjenjuju SEO temelje. Crawlabilnost, indeksiranje, informacijska arhitektura, točni entiteti i stvarno koristan sadržaj i dalje stvaraju osnovu." },
      { question: "Što uključuju konzultacije za organsko lansiranje?", answer: "Konzultacije pretvaraju poslovni kontekst u upotrebljiv organski plan: tržišne prilike i potražnju u pretrazi, ulaz za pozicioniranje, tehničke i sadržajne rizike, prioritete, vlasništvo i praktičan raspored rada za sljedećih 90 dana." },
      { question: "Kada treba uključiti tehnički SEO?", answer: "Prije lansiranja nove stranice, redizajna, migracije ili većeg sadržajnog projekta. Rani tehnički rad sprječava česte probleme: stranice koje se ne mogu ispravno crawlat ili indeksirati, slabu strukturu, izgubljene redirekcije, spore predloške i nedostatak strukturiranih podataka." },
      { question: "Može li Koupoli podržati Webflow stranicu ili migraciju?", answer: "Da. Operativni rad može pokriti arhitekturu stranice, tehničke SEO audite, zadatke za implementaciju, Webflow izvedbu, redirekcije, indeksiranje, brzinu i strukturu sadržaja koja treba preživjeti migraciju ili ponovno lansiranje." },
      { question: "Radite li s timovima izvan Hrvatske?", answer: "Da. Koupoli radi na daljinu s timovima koji govore engleski diljem Europe i Sjedinjenih Država, posebno kada lansiranje, repozicioniranje ili faza rasta traži jasnu vezu između strategije i tehničke izvedbe." },
      { question: "Kako se mjeri vidljivost u AI pretrazi?", answer: "Polazište nije samo broj spominjanja. Mjerenje povezuje kvalificiranu potražnju u pretrazi, tehničko zdravlje, pokrivenost brenda i entiteta, vidljivost za prioritetna pitanja, citate gdje su važni i poslovne signale na koje rad treba utjecati." },
    ],
    finalTitle: "Donesite lansiranje, pitanje ili problem u pretrazi.",
    finalBody: "Prvi razgovor služi razumijevanju konteksta i odluci je li Koupoli pravi izbor.",
    finalCta: "Započnite razgovor",
  },
};

function Arrow() {
  return <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />;
}

export default function GrowthLanding({ locale }: { locale: Locale }) {
  const copy = copies[locale];
  const localized = (path: string) => locale === "hr" ? `/hr${path}` : path;

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    document.documentElement.lang = locale;
    document.title = locale === "hr" ? "Koupoli | SEO, organski rast i AI pretraga" : "Koupoli | Organic growth, SEO and AI search";
    description?.setAttribute("content", locale === "hr" ? "Koupoli pomaže ambicioznim timovima rasti organski uz SEO strategiju, tehničku izvedbu i spremnost za AI pretragu." : "Koupoli helps ambitious teams launch and grow organically through SEO strategy, technical execution, and AI-search readiness.");
  }, [locale]);

  return <GrowthLayout locale={locale}>
    <section className="growth-hero" id="top">
      <div className="growth-container growth-hero-grid">
        <div className="growth-hero-copy">
          <p className="growth-kicker">{copy.heroEyebrow}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="growth-lead">{copy.heroLead}</p>
          <div className="growth-actions">
            <Link className="growth-button growth-button-primary" href={localized("/contact/")}>{copy.primaryCta}<Arrow /></Link>
            <a className="growth-text-link" href="#offers">{copy.secondaryCta}<ArrowDownRight size={17} /></a>
          </div>
        </div>
        <figure className="growth-hero-graphic"><img src="/assets/koupoli-search-systems-infographic.webp?v=full-panel" alt={locale === "hr" ? "Urednička mapa tehničkih temelja, korisnog sadržaja i vidljivosti u pretrazi" : "Editorial map of technical foundation, useful content, and search visibility"} /></figure>
      </div>
    </section>

    <section className="growth-signal-section">
      <div className="growth-container">
        <div className="growth-section-intro growth-section-intro-split">
          <h2>{copy.signalTitle}</h2>
          <p>{copy.signalLead}</p>
        </div>
        <div className="growth-signal-grid">
          {copy.signals.map((signal) => <article className="growth-signal-card" key={signal.title}>
            <p>{signal.label}</p>
            <h3>{signal.title}</h3>
            <span>{signal.description}</span>
          </article>)}
        </div>
      </div>
    </section>

    <section className="growth-thesis-section">
      <div className="growth-container growth-thesis-grid">
        <div><p className="growth-kicker growth-kicker-blue">{copy.thesisEyebrow}</p></div>
        <div>
          <h2>{copy.thesisTitle}</h2>
          <p>{copy.thesisBody}</p>
        </div>
      </div>
    </section>

    <section className="growth-offers-section" id="offers">
      <div className="growth-container">
        <div className="growth-section-intro">
          <p className="growth-kicker growth-kicker-blue">{copy.offersEyebrow}</p>
          <h2>{copy.offersTitle}</h2>
          <p>{copy.offersLead}</p>
        </div>
        <div className="growth-offer-grid">
          {copy.offers.map((offer) => <article className="growth-offer-card" key={offer.number}>
            <div className="growth-offer-top"><span>{offer.number}</span></div>
            <p className="growth-offer-eyebrow">{offer.eyebrow}</p>
            <h3>{offer.title}</h3>
            <p className="growth-offer-description">{offer.description}</p>
            <ul>{offer.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="growth-offer-fit">{offer.fit}</p>
            <Link href={localized("/contact/")} className="growth-offer-link">{copy.primaryCta}<Arrow /></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="growth-systems-section" id="method">
      <div className="growth-container growth-systems-grid">
        <div className="growth-systems-aside">
          <p className="growth-kicker">{copy.systemsEyebrow}</p>
          <h2>{copy.systemsTitle}</h2>
        </div>
        <div className="growth-system-list">
          {copy.systems.map((system, index) => <article key={system.title}>
            <span>0{index + 1}</span>
            <div><h3>{system.title}</h3><p>{system.description}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="growth-market-section">
      <div className="growth-container growth-market-grid">
        <div className="growth-market-card"><p className="growth-kicker growth-kicker-blue">{copy.insightEyebrow}</p><h2>{copy.insightTitle}</h2><p>{copy.insightBody}</p></div>
        <div className="growth-entity-wall" aria-label="Key organic growth entities">{copy.insightTags.map((tag, index) => <span key={tag} className={`growth-entity growth-entity-${index % 3}`}>{tag}</span>)}</div>
      </div>
    </section>

    <section className="growth-proof-section">
      <div className="growth-container growth-proof-grid">
        <div className="growth-proof-copy"><p className="growth-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofBody}</p><Link href={localized("/about/")} className="growth-text-link">{locale === "hr" ? "Upoznajte Karla" : "Meet Karlo"}<Arrow /></Link></div>
        <div className="growth-proof-points">{copy.proofPoints.map((point) => <article key={point.label}><span>{point.label}</span><strong>{point.value}</strong><p>{point.detail}</p></article>)}</div>
      </div>
    </section>

    <section className="growth-articles-section">
      <div className="growth-container">
        <div className="growth-articles-header"><div><p className="growth-kicker growth-kicker-blue">{copy.articlesEyebrow}</p><h2>{copy.articlesTitle}</h2></div><Link className="growth-text-link" href={localized("/blog/")}>{copy.articlesLink}<Arrow /></Link></div>
        <div className="growth-article-grid">{copy.articles.map((article) => <article key={article.number}><span>{article.number}</span><h3><Link href={localized(article.href)}>{article.title}</Link></h3><p>{article.description}</p><Link className="growth-text-link" href={localized(article.href)}>{locale === "hr" ? "Pročitajte" : "Read note"}<Arrow /></Link></article>)}</div>
      </div>
    </section>

    <section className="growth-guide-index-section" aria-labelledby="guide-index-title">
      <div className="growth-container">
        <div className="growth-guide-index-header"><div><p className="growth-kicker growth-kicker-blue">{copy.guidesEyebrow}</p><h2 id="guide-index-title">{copy.guidesTitle}</h2></div><p>{copy.guidesLead}</p></div>
        <nav className="growth-guide-index-grid" aria-label={copy.guidesEyebrow}>{copy.guides.map((guide) => <Link href={localized(guide.href)} key={guide.href}><span>{guide.number}</span><h3>{guide.title}</h3><p>{guide.description}</p><strong>{locale === "hr" ? "Pročitajte vodič" : "Read guide"}<Arrow /></strong></Link>)}</nav>
        <Link className="growth-text-link growth-guide-index-link" href={localized(locale === "hr" ? "/pojmovnik/" : "/glossary/")}>{copy.guidesLink}<Arrow /></Link>
      </div>
    </section>

    <section className="growth-faq-section" id="faq">
      <div className="growth-container growth-faq-grid">
        <div className="growth-faq-intro"><p className="growth-kicker growth-kicker-blue">{copy.faqEyebrow}</p><h2>{copy.faqTitle}</h2><p>{copy.faqLead}</p></div>
        <div className="growth-faq-list">{copy.faqs.map((faq) => <details key={faq.question}><summary><span>{faq.question}</span><ChevronDown aria-hidden="true" size={20} strokeWidth={1.75} /></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>

    <section className="growth-final-section" id="contact">
      <div className="growth-container growth-final-inner"><p className="growth-kicker">Koupoli</p><h2>{copy.finalTitle}</h2><p>{copy.finalBody}</p><Link className="growth-button growth-button-inverse" href={localized("/contact/")}>{copy.finalCta}<Arrow /></Link></div>
    </section>
  </GrowthLayout>;
}
