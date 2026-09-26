import { ArrowDownRight, ArrowUpRight } from "lucide-react";
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
  articles: { number: string; title: string; description: string }[];
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
    insightTitle: "Croatia and the Balkans first. Europe and the US through English authority.",
    insightBody: "Local buyers still search with familiar SEO language. International buyers increasingly research AI SEO, AI search visibility, technical SEO, and generative engine optimization. The site and operating model should speak to both without pretending they are the same market.",
    insightTags: ["SEO optimizacija", "SEO consulting", "Technical SEO", "AI SEO", "AI search visibility", "Generative engine optimization"],
    proofEyebrow: "Grounded in real delivery",
    proofTitle: "A specialist who can connect the strategy to the implementation.",
    proofBody: "Karlo’s work spans technical SEO, migrations, content systems, Webflow development, and cross-functional delivery. That range matters at launch, where an insight only counts when it reaches the live site.",
    proofPoints: [
      { label: "Search performance", value: "60k", detail: "clicks supported at a sustained 30–40% CTR" },
      { label: "Organic foundation", value: "300k", detail: "click project built on durable SEO fundamentals" },
      { label: "Experience", value: "8+", detail: "years across technical, product, and organic growth work" },
    ],
    articlesEyebrow: "Field notes in development",
    articlesTitle: "The questions this site will answer in public.",
    articles: [
      { number: "01", title: "What AI search visibility should actually be measured against", description: "A practical framework for separating visibility theatre from signals that matter." },
      { number: "02", title: "The organic launch checklist for teams shipping a new category", description: "What needs to be decided before a site, campaign, or product story goes live." },
      { number: "03", title: "Technical SEO for AI search: what has changed, and what has not", description: "A grounded guide to the foundations that still earn discovery." },
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
    insightTitle: "Hrvatska i Balkan prvo. Europa i SAD kroz autoritet na engleskom.",
    insightBody: "Lokalni kupci i dalje traže poznatim SEO jezikom. Međunarodni kupci sve češće istražuju AI SEO, AI vidljivost, tehnički SEO i generative engine optimization. Web i operativni model trebaju govoriti objema publikama bez pretvaranja da su isto tržište.",
    insightTags: ["SEO optimizacija", "SEO savjetovanje", "Tehnički SEO", "AI SEO", "AI vidljivost", "Generative engine optimization"],
    proofEyebrow: "Temeljeno na stvarnoj izvedbi",
    proofTitle: "Specijalist koji može spojiti strategiju s implementacijom.",
    proofBody: "Karlov rad obuhvaća tehnički SEO, migracije, sadržajne sustave, Webflow razvoj i međufunkcionalnu izvedbu. To je važno pri lansiranju, gdje uvid vrijedi tek kada dođe do žive stranice.",
    proofPoints: [
      { label: "Rezultati u pretrazi", value: "60k", detail: "klikova uz održani CTR od 30–40%" },
      { label: "Organski temelj", value: "300k", detail: "klikova na projektu izgrađenom na dugotrajnim SEO osnovama" },
      { label: "Iskustvo", value: "8+", detail: "godina kroz tehnički, produktni i organski rast" },
    ],
    articlesEyebrow: "Bilješke s terena u pripremi",
    articlesTitle: "Pitanja na koja će ova stranica javno odgovarati.",
    articles: [
      { number: "01", title: "Što zaista treba mjeriti kod vidljivosti u AI pretrazi", description: "Praktičan okvir za razdvajanje prividne vidljivosti od signala koji stvarno vrijede." },
      { number: "02", title: "Checklista za organsko lansiranje nove kategorije", description: "Što treba odlučiti prije lansiranja weba, kampanje ili produktne priče." },
      { number: "03", title: "Tehnički SEO za AI pretragu: što se promijenilo, a što nije", description: "Utemeljen vodič kroz osnove koje i dalje donose otkrivanje." },
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

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    document.documentElement.lang = locale;
    document.title = locale === "hr" ? "Koupoli — SEO, organski rast i AI pretraga" : "Koupoli — Organic growth, SEO and AI search";
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
            <a className="growth-button growth-button-primary" href="mailto:hello@koupoli.com?subject=Organic%20launch%20enquiry">{copy.primaryCta}<Arrow /></a>
            <a className="growth-text-link" href="#offers">{copy.secondaryCta}<ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="growth-hero-mark" aria-hidden="true"><img src="/assets/koupoli-mark.png" alt="" /></div>
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
            <a href="mailto:hello@koupoli.com?subject=Koupoli%20enquiry" className="growth-offer-link">{copy.primaryCta}<Arrow /></a>
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
        <div className="growth-proof-copy"><p className="growth-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofBody}</p><Link href="/about" className="growth-text-link">{locale === "hr" ? "Upoznajte Karla" : "Meet Karlo"}<Arrow /></Link></div>
        <div className="growth-proof-points">{copy.proofPoints.map((point) => <article key={point.label}><span>{point.label}</span><strong>{point.value}</strong><p>{point.detail}</p></article>)}</div>
      </div>
    </section>

    <section className="growth-articles-section">
      <div className="growth-container">
        <div className="growth-articles-header"><div><p className="growth-kicker growth-kicker-blue">{copy.articlesEyebrow}</p><h2>{copy.articlesTitle}</h2></div><span>{locale === "hr" ? "Uskoro" : "Coming soon"}</span></div>
        <div className="growth-article-grid">{copy.articles.map((article) => <article key={article.number}><span>{article.number}</span><h3>{article.title}</h3><p>{article.description}</p></article>)}</div>
      </div>
    </section>

    <section className="growth-final-section" id="contact">
      <div className="growth-container growth-final-inner"><p className="growth-kicker">Koupoli</p><h2>{copy.finalTitle}</h2><p>{copy.finalBody}</p><a className="growth-button growth-button-inverse" href="mailto:hello@koupoli.com?subject=Koupoli%20enquiry">{copy.finalCta}<Arrow /></a></div>
    </section>
  </GrowthLayout>;
}
