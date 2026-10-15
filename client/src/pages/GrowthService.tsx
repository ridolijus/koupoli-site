import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";

type Locale = "en" | "hr";

type ServiceCopy = {
  title: string;
  description: string;
  crumb: string;
  heading: string;
  lead: string;
  cta: string;
  image: string;
  imageAlt: string;
  principleTitle: string;
  principle: string[];
  scopeTitle: string;
  scopeLead: string;
  scope: { title: string; description: string }[];
  processTitle: string;
  processLead: string;
  process: { title: string; description: string }[];
  fitTitle: string;
  fit: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  closeTitle: string;
  closeBody: string;
  related: { href: string; title: string; description: string }[];
};

const copies: Record<Locale, ServiceCopy> = {
  en: {
    title: "Technical SEO Services & AI Search Operations | Koupoli",
    description:
      "Technical SEO services and AI search operations for teams that need clearer crawl paths, indexation, site structure, structured data, and delivery that reaches the live site.",
    crumb: "Technical SEO services",
    heading: "Technical SEO services that make important pages easier to find.",
    lead: "Koupoli helps teams find and resolve technical blockers, turn findings into clear implementation work, and connect technical SEO with the content and entity signals that search engines and AI answers can use.",
    cta: "Discuss a technical SEO project",
    image: "/assets/koupoli-service-technical-delivery.webp",
    imageAlt:
      "Technical SEO delivery illustration showing a site structure, implementation plan, and verified live page",
    principleTitle: "Technical SEO is not a scorecard.",
    principle: [
      "A useful audit explains what is stopping the pages that matter from being discovered, rendered, indexed, or understood. The goal is not a long list of warnings. It is a focused sequence that reaches the live site.",
      "The work joins the technical layer to information architecture, content, and measurement. That matters when a new section is launching, a platform is changing, or a team needs to turn a technical review into development tickets that can be prioritised.",
    ],
    scopeTitle: "The technical work behind durable visibility.",
    scopeLead:
      "The scope adapts to the site and the decision in front of the team. These are the areas that most often need to be connected.",
    scope: [
      {
        title: "Crawl and indexation",
        description:
          "Check the paths that expose priority URLs, prevent accidental exclusion, and give search engines one clear version to index.",
      },
      {
        title: "Site architecture",
        description:
          "Shape URL structures, internal links, page relationships, and templates around the questions and pages that matter commercially.",
      },
      {
        title: "Rendering and performance",
        description:
          "Review what a visitor and crawler can retrieve, with attention to JavaScript rendering, page speed, and fragile template behaviour.",
      },
      {
        title: "Structured data and entities",
        description:
          "Make services, people, products, and relevant page relationships easier to interpret without adding markup for its own sake.",
      },
      {
        title: "Migrations and launch QA",
        description:
          "Plan redirects, canonical URLs, language alternates, sitemaps, and release checks before a redesign or platform change reaches search.",
      },
      {
        title: "AI-search measurement",
        description:
          "Connect technical health, priority questions, entity coverage, citations, and qualified demand instead of reporting a vanity mention count.",
      },
    ],
    processTitle: "A delivery sequence teams can use.",
    processLead:
      "The engagement is designed to produce decisions and work items, not a presentation that waits for a second project to be implemented.",
    process: [
      {
        title: "Diagnose the current path",
        description:
          "Start with priority pages, commercial context, available data, and the technical conditions that affect discovery.",
      },
      {
        title: "Prioritise the dependencies",
        description:
          "Separate material risks from background warnings and explain what needs to happen first, by whom, and why.",
      },
      {
        title: "Support implementation",
        description:
          "Turn the work into clear tickets, review changes with product or development, and keep the intended URLs and templates connected.",
      },
      {
        title: "Measure what changed",
        description:
          "Review indexation, technical signals, search visibility, and the business questions the work was meant to support.",
      },
    ],
    fitTitle: "This work is a strong fit when:",
    fit: [
      "A launch, redesign, migration, or new market needs technical SEO input before it goes live.",
      "A team has audit findings but needs a practical implementation sequence.",
      "Technical, content, and product decisions are being made separately and need one shared view.",
      "AI-search visibility needs to be measured from real foundations rather than speculative tactics.",
    ],
    faqTitle: "Questions teams usually ask before the work begins.",
    faqs: [
      {
        question: "Can Koupoli work with our developers or Webflow team?",
        answer:
          "Yes. The work is structured around implementation: clear priorities, tickets, acceptance criteria, and reviews of the changes that matter. It can support in-house developers, agency partners, or a Webflow delivery process.",
      },
      {
        question:
          "Do technical SEO services include content and information architecture?",
        answer:
          "They can. Technical conditions only help when the site has useful pages and a structure people and search engines can navigate. The scope can include information architecture, content briefs, internal linking, and entity clarity where those are part of the constraint.",
      },
      {
        question: "Does AI search need separate technical work?",
        answer:
          "It does not require a parallel set of shortcuts or special AI-only markup. Crawlable, indexed, structurally clear pages with useful original information remain the foundation. The work connects those fundamentals to the questions and signals worth measuring.",
      },
    ],
    closeTitle:
      "Bring the launch plan, the audit, or the technical constraint.",
    closeBody:
      "The first conversation is for understanding the site, the decision ahead, and whether Koupoli is the right specialist to help carry the work through.",
    related: [
      {
        href: "/glossary/technical-seo/",
        title: "Technical SEO guide",
        description:
          "A practical guide to crawlability, indexation, structure, performance, and dependable rendering.",
      },
      {
        href: "/services/organic-launch-advisory/",
        title: "Organic launch advisory",
        description:
          "The strategy-first engagement for teams that need a usable organic plan before implementation begins.",
      },
      {
        href: "/post/website-migration-seo/",
        title: "Website migration SEO",
        description:
          "A launch checklist for URLs, redirects, canonicals, language versions, and monitoring.",
      },
    ],
  },
  hr: {
    title: "SEO Optimizacija | Tehnički SEO i savjetovanje | Koupoli",
    description:
      "SEO optimizacija za timove kojima trebaju jasni prioriteti za tehnički SEO, indeksiranje, brzinu web stranice, strukturirane podatke i sadržaj koji podržava organski rast.",
    crumb: "SEO optimizacija",
    heading:
      "SEO optimizacija koja povezuje tehnički rad, sadržaj i poslovni cilj.",
    lead: "Koupoli pomaže timovima pronaći prepreke u tehničkom SEO-u, pretvoriti nalaze u jasne zadatke i povezati indeksiranje, strukturu sadržaja i mjerljive signale organskog rasta.",
    cta: "Razgovarajmo o SEO optimizaciji",
    image: "/assets/koupoli-service-technical-delivery.webp",
    imageAlt:
      "Vizual tehničke SEO izvedbe koji povezuje strukturu weba, plan implementacije i provjerenu objavljenu stranicu",
    principleTitle: "SEO optimizacija nije samo popis preporuka.",
    principle: [
      "Koristan tehnički pregled pokazuje zašto važne stranice nisu dovoljno lako dostupne, crawlable, indeksirane ili razumljive. Cilj nije dugačak izvještaj s upozorenjima, nego prioriteti koji mogu doći do objavljene web-stranice.",
      "Rad povezuje tehnički SEO s informacijskom arhitekturom, sadržajem i mjerenjem. To je posebno važno prije lansiranja, redizajna, migracije ili većeg sadržajnog projekta.",
    ],
    scopeTitle: "Što obuhvaća SEO optimizacija.",
    scopeLead:
      "Opseg se prilagođava web-stranici i poslovnoj odluci. Ovo su područja koja se najčešće moraju riješiti zajedno.",
    scope: [
      {
        title: "Tehnički SEO i indeksiranje",
        description:
          "Provjera putova do važnih URL-ova, crawlabilnosti, redirekcija, canonical oznaka i uvjeta koji utječu na indeksiranje.",
      },
      {
        title: "Struktura web-stranice",
        description:
          "Struktura URL-ova, interne poveznice i predlošci koji korisnicima i tražilicama daju jasniji put kroz ponudu.",
      },
      {
        title: "Brzina web stranice i prikaz",
        description:
          "Pregled izvedbe, JavaScript prikaza i tehničkih ograničenja koja mogu utjecati na ono što vide korisnik i crawler.",
      },
      {
        title: "Strukturirani podaci i entiteti",
        description:
          "Jasnije povezivanje usluga, ljudi, projekata i sadržaja kroz informacije koje tražilice mogu pouzdano tumačiti.",
      },
      {
        title: "SEO savjetovanje za lansiranja i migracije",
        description:
          "Redirekcije, jezične verzije, sitemap, provjere prije objave i kontrola nakon lansiranja nove strukture ili platforme.",
      },
      {
        title: "Mjerenje organske i AI vidljivosti",
        description:
          "Povezivanje tehničkog zdravlja, upita, prioriteta sadržaja i poslovnih signala bez oslanjanja na površne metrike.",
      },
    ],
    processTitle: "Rad koji završava implementacijom.",
    processLead:
      "Cilj je pomoći timu donijeti odluke i završiti konkretne zadatke, a ne samo isporučiti prezentaciju koja čeka sljedeći projekt.",
    process: [
      {
        title: "Razumjeti trenutnu situaciju",
        description:
          "Počinjemo od važnih stranica, cilja poslovanja, dostupnih podataka i uvjeta koji utječu na otkrivanje u pretrazi.",
      },
      {
        title: "Odrediti prioritete",
        description:
          "Odvajamo stvarne rizike od pozadinskih upozorenja te objašnjavamo što prvo treba riješiti i tko je uključen.",
      },
      {
        title: "Podržati izvedbu",
        description:
          "Nalazi se pretvaraju u jasne zadatke, kriterije provjere i suradnju s razvojem, marketingom ili Webflow partnerom.",
      },
      {
        title: "Provjeriti promjenu",
        description:
          "Nakon izvedbe provjeravamo indeksiranje, tehničke signale, vidljivost u pretrazi i pitanja koja je rad trebao podržati.",
      },
    ],
    fitTitle: "Ova je usluga prikladna kada:",
    fit: [
      "Nova web-stranica, redizajn, migracija ili ulazak na tržište trebaju SEO provjeru prije objave.",
      "Tim ima audit, ali treba jasan redoslijed implementacije i pomoć pri prioritetima.",
      "Tehnički SEO, sadržaj i razvoj donose odluke odvojeno, a potreban je zajednički plan.",
      "SEO savjetovanje treba povezati vidljivost s konkretnim poslovnim ciljem, a ne samo s pozicijama.",
    ],
    faqTitle: "Pitanja prije početka SEO optimizacije.",
    faqs: [
      {
        question: "Možete li raditi s našim developerima ili Webflow timom?",
        answer:
          "Da. Rad je pripremljen za izvedbu: jasni prioriteti, zadaci, kriteriji provjere i pregled promjena koje utječu na važne stranice. Moguć je rad s internim razvojem, agencijom ili Webflow partnerom.",
      },
      {
        question:
          "Obuhvaća li SEO optimizacija sadržaj i strukturu web-stranice?",
        answer:
          "Može obuhvaćati oboje. Tehnički uvjeti pomažu tek kada web ima koristan sadržaj i strukturu kroz koju se mogu kretati korisnici i tražilice. Opseg može uključiti arhitekturu, briefove sadržaja, interne poveznice i jasnoću entiteta.",
      },
      {
        question: "Je li za AI pretragu potreban poseban SEO?",
        answer:
          "Nisu potrebni prečaci ni posebno AI označavanje sadržaja. Crawlable, indeksirane i jasno strukturirane stranice s originalnim korisnim informacijama ostaju temelj. Rad povezuje te osnove s pitanjima i signalima koje vrijedi pratiti.",
      },
    ],
    closeTitle: "Donesite plan, audit ili SEO prepreku koju treba riješiti.",
    closeBody:
      "Prvi razgovor služi razumijevanju web-stranice, odluke koja slijedi i procjeni može li Koupoli pomoći u provedbi rada.",
    related: [
      {
        href: "/pojmovnik/tehnicki-seo/",
        title: "Vodič za tehnički SEO",
        description:
          "Praktičan vodič kroz crawlabilnost, indeksiranje, strukturu, brzinu i pouzdan prikaz stranice.",
      },
      {
        href: "/hr/usluge/seo-savjetovanje/",
        title: "SEO savjetovanje",
        description:
          "Savjetodavni angažman za timove kojima prije izvedbe treba upotrebljiv plan organskog rasta.",
      },
      {
        href: "/post/website-migration-seo/",
        title: "SEO migracija web-stranice",
        description:
          "Kontrolni popis za URL-ove, redirekcije, canonical oznake, jezične verzije i praćenje.",
      },
    ],
  },
};

function Arrow() {
  return <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />;
}

export default function GrowthService({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const contact = locale === "hr" ? "/hr/contact/" : "/contact/";

  return (
    <GrowthLayout locale={locale}>
      <PageMeta
        title={copy.title}
        description={copy.description}
        lang={locale}
      />
      <article className="growth-service-page">
        <header className="growth-service-hero">
          <div className="growth-container growth-service-hero-grid">
            <div>
              <Link
                className="growth-service-crumb"
                href={locale === "hr" ? "/hr/" : "/"}
              >
                {copy.crumb}
              </Link>
              <h1>{copy.heading}</h1>
              <p>{copy.lead}</p>
              <Link
                className="growth-button growth-button-primary"
                href={contact}
              >
                {copy.cta}
                <Arrow />
              </Link>
            </div>
            <figure className="growth-service-visual">
              <img src={copy.image} alt={copy.imageAlt} width={1400} height={1050} />
            </figure>
          </div>
        </header>
        <section className="growth-service-principle">
          <div className="growth-container growth-service-principle-grid">
            <h2>{copy.principleTitle}</h2>
            <div>
              {copy.principle.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
        <section className="growth-service-scope">
          <div className="growth-container">
            <div className="growth-service-heading">
              <h2>{copy.scopeTitle}</h2>
              <p>{copy.scopeLead}</p>
            </div>
            <div className="growth-service-scope-list">
              {copy.scope.map(item => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="growth-service-process">
          <div className="growth-container growth-service-process-grid">
            <div>
              <h2>{copy.processTitle}</h2>
              <p>{copy.processLead}</p>
            </div>
            <ol>
              {copy.process.map(item => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="growth-service-fit">
          <div className="growth-container growth-service-fit-grid">
            <h2>{copy.fitTitle}</h2>
            <ul>
              {copy.fit.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="growth-service-faq">
          <div className="growth-container growth-service-faq-grid">
            <h2>{copy.faqTitle}</h2>
            <div>
              {copy.faqs.map(faq => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="growth-service-links">
          <div className="growth-container">
            <ContextLinks
              locale={locale}
              items={copy.related}
              eyebrow={
                locale === "hr"
                  ? "Povezani vodiči i bilješke"
                  : "Related guides and notes"
              }
              title={
                locale === "hr"
                  ? "Praktična podloga za SEO optimizaciju"
                  : "Practical context for the technical work"
              }
            />
          </div>
        </section>
        <section className="growth-service-close">
          <div className="growth-container">
            <h2>{copy.closeTitle}</h2>
            <p>{copy.closeBody}</p>
            <Link
              className="growth-button growth-button-inverse"
              href={contact}
            >
              {copy.cta}
              <Arrow />
            </Link>
          </div>
        </section>
      </article>
    </GrowthLayout>
  );
}
