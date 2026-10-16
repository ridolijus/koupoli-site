import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";

type Locale = "en" | "hr";

type AdvisoryCopy = {
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
  relatedTitle: string;
  related: { href: string; title: string; description: string }[];
  closeTitle: string;
  closeBody: string;
};

const copies: Record<Locale, AdvisoryCopy> = {
  en: {
    title: "Organic Launch Advisory & SEO Consulting | Koupoli",
    description:
      "Organic launch advisory and SEO consulting for teams that need a clear market, technical, content, and measurement plan before a launch, repositioning, or new market move.",
    crumb: "Organic launch advisory",
    heading: "Decide what your organic launch needs before you build it.",
    lead: "Koupoli helps founders and marketing leads turn a launch, repositioning, or new-market move into a focused search and content plan that product, brand, and development teams can use.",
    cta: "Plan an organic launch",
    image: "/assets/koupoli-organic-launch-consultation.webp",
    imageAlt:
      "Editorial map connecting market context, priorities, risks, and a practical launch plan",
    principleTitle:
      "A launch plan should resolve the decisions that slow delivery.",
    principle: [
      "The work starts with the commercial change ahead: a new category, site, market, offer, or story. It identifies the questions the site needs to answer, the conditions that can block discovery, and the choices that need an owner before teams begin building in parallel.",
      "The output is not a generic strategy deck. It is a connected view of demand, positioning, technical risk, content priorities, and measurement, organised into a sequence that makes the next 90 days easier to run.",
    ],
    scopeTitle: "What the advisory engagement makes clear.",
    scopeLead:
      "The scope is tailored to the decision at hand. These are the areas that most often need to be aligned before launch work begins.",
    scope: [
      {
        title: "Market and search opportunity",
        description:
          "Clarify the audience, demand, category language, and priority questions that should shape the launch.",
      },
      {
        title: "Positioning and audience questions",
        description:
          "Connect the commercial story to the problems, comparisons, and proof a prospective buyer needs to understand.",
      },
      {
        title: "Technical and site risks",
        description:
          "Identify architecture, migration, indexation, rendering, and performance dependencies before they become launch issues.",
      },
      {
        title: "Content and entity priorities",
        description:
          "Set the pages, supporting information, internal links, and evidence that need to exist for the offer to be understood.",
      },
      {
        title: "Measurement and decision signals",
        description:
          "Define the search, technical, engagement, and commercial signals that indicate whether the work is moving in the right direction.",
      },
      {
        title: "90-day ownership plan",
        description:
          "Turn the work into practical priorities, owners, dependencies, and briefs that an internal team or delivery partner can use.",
      },
    ],
    processTitle: "A focused engagement from context to an owned plan.",
    processLead:
      "The advisory is designed to reduce ambiguity before more people, pages, and implementation tasks are involved.",
    process: [
      {
        title: "Frame the decision",
        description:
          "Start with the business change, the audience, what has already been decided, and the constraints the plan has to respect.",
      },
      {
        title: "Map what matters",
        description:
          "Review search demand, existing signals, technical conditions, the site structure, and the proof the future pages need.",
      },
      {
        title: "Set the sequence",
        description:
          "Separate material dependencies from background activity, then establish the order in which teams can make progress.",
      },
      {
        title: "Hand over the plan",
        description:
          "Document the priorities, briefs, owners, measures, and working questions needed to move into implementation with less rework.",
      },
    ],
    fitTitle: "This work is a strong fit when:",
    fit: [
      "A launch, repositioning, or new market move needs a shared organic-growth plan before the build begins.",
      "Marketing, product, brand, and development teams need to make connected decisions without a clear owner for the search layer.",
      "A team has activity underway but no practical way to prioritise what matters first.",
      "Leaders need to brief an internal team, agency partner, or specialist with more clarity than a generic SEO request can provide.",
    ],
    faqTitle: "Questions teams usually ask before advisory work starts.",
    faqs: [
      {
        question: "How is advisory different from ongoing SEO operations?",
        answer:
          "Advisory creates the direction, priorities, and ownership model around a defined change. Ongoing SEO operations carry the work into implementation, reviews, and measurement over time. Some teams start with advisory and continue into delivery; others use the plan with their internal team or existing partners.",
      },
      {
        question: "Who should be involved in the advisory engagement?",
        answer:
          "The useful group usually includes the person accountable for the commercial change, the marketing or brand lead, and the person who understands the website or product delivery. The work is structured to make decisions across those roles easier, not to create another meeting layer.",
      },
      {
        question: "Does the advisory include implementation?",
        answer:
          "It produces owner-ready priorities, briefs, and decision criteria. Koupoli can then support implementation through SEO and AI search operations, or the plan can be used by an internal team, agency, or Webflow partner.",
      },
    ],
    relatedTitle: "Useful context for planning the work",
    related: [
      {
        href: "/services/technical-seo-ai-search/",
        title: "Technical SEO services",
        description:
          "The implementation-focused service for teams that need to carry the technical and search work into delivery.",
      },
      {
        href: "/post/website-migration-seo/",
        title: "Website migration SEO",
        description:
          "A practical guide to the technical and planning decisions that matter when a site is changing.",
      },
      {
        href: "/glossary/ai-search-visibility/",
        title: "AI search visibility guide",
        description:
          "A grounded approach to defining the questions and outcomes worth measuring before reporting begins.",
      },
    ],
    closeTitle:
      "Bring the launch, repositioning, or search question that needs a plan.",
    closeBody:
      "The first conversation is for understanding the change ahead and whether an advisory engagement is the right way to give it direction.",
  },
  hr: {
    title: "SEO Savjetovanje za organsko lansiranje | Koupoli",
    description:
      "SEO savjetovanje za timove koji prije lansiranja, repozicioniranja ili ulaska na novo tržište trebaju jasan plan za pretragu, sadržaj, tehničke prioritete i mjerenje.",
    crumb: "SEO savjetovanje",
    heading: "SEO savjetovanje za odluke koje dolaze prije izvedbe.",
    lead: "Koupoli pomaže osnivačima i marketinškim voditeljima pretvoriti lansiranje, repozicioniranje ili ulazak na novo tržište u fokusiran plan za pretragu i sadržaj koji mogu koristiti proizvod, brend i razvoj.",
    cta: "Isplaniraj organsko lansiranje",
    image: "/assets/koupoli-organic-launch-consultation.webp",
    imageAlt:
      "Urednička mapa koja povezuje tržišni kontekst, prioritete, rizike i praktičan plan lansiranja",
    principleTitle:
      "Plan lansiranja treba riješiti odluke koje usporavaju izvedbu.",
    principle: [
      "Rad počinje poslovnom promjenom koja slijedi: novom kategorijom, web-stranicom, tržištem, ponudom ili pričom. Definira pitanja na koja stranica treba odgovoriti, uvjete koji mogu otežati otkrivanje i odluke koje trebaju vlasnika prije nego što timovi krenu graditi paralelno.",
      "Rezultat nije općenita strateška prezentacija. To je povezan pogled na potražnju, pozicioniranje, tehnički rizik, prioritete sadržaja i mjerenje, organiziran u slijed koji narednih 90 dana čini lakšima za provedbu.",
    ],
    scopeTitle: "Što SEO savjetovanje razjašnjava.",
    scopeLead:
      "Opseg se prilagođava odluci koja je pred timom. Ovo su područja koja najčešće treba uskladiti prije početka rada na lansiranju.",
    scope: [
      {
        title: "Tržišna prilika i potražnja u pretrazi",
        description:
          "Jasno definiramo publiku, potražnju, jezik kategorije i prioritetna pitanja koja trebaju oblikovati lansiranje.",
      },
      {
        title: "Pozicioniranje i pitanja publike",
        description:
          "Povezujemo poslovnu priču s problemima, usporedbama i dokazima koje potencijalni kupac treba razumjeti.",
      },
      {
        title: "Tehnički rizici i rizici web-stranice",
        description:
          "Prepoznajemo ovisnosti u arhitekturi, migraciji, indeksiranju, prikazu i brzini prije nego postanu problem pri lansiranju.",
      },
      {
        title: "Prioriteti sadržaja i entiteta",
        description:
          "Određujemo stranice, prateće informacije, interne poveznice i dokaze koji trebaju postojati da bi ponuda bila jasna.",
      },
      {
        title: "Mjerenje i signali za odluke",
        description:
          "Definiramo signale pretrage, tehničkog zdravlja, angažmana i poslovanja koji pokazuju ide li rad u dobrom smjeru.",
      },
      {
        title: "Plan vlasništva za 90 dana",
        description:
          "Rad pretvaramo u praktične prioritete, vlasnike, ovisnosti i briefove koje mogu koristiti interni tim ili partner za izvedbu.",
      },
    ],
    processTitle:
      "Fokusirani angažman od konteksta do plana s jasnim vlasništvom.",
    processLead:
      "Savjetovanje je osmišljeno da smanji nejasnoću prije nego što se uključi više ljudi, stranica i zadataka za implementaciju.",
    process: [
      {
        title: "Postaviti okvir odluke",
        description:
          "Počinjemo od poslovne promjene, publike, već donesenih odluka i ograničenja koja plan mora poštovati.",
      },
      {
        title: "Mapirati što je važno",
        description:
          "Pregledavamo potražnju, postojeće signale, tehničke uvjete, strukturu weba i dokaze koje buduće stranice trebaju.",
      },
      {
        title: "Odrediti slijed rada",
        description:
          "Odvajamo ključne ovisnosti od pozadinskih aktivnosti i uspostavljamo redoslijed u kojem timovi mogu napredovati.",
      },
      {
        title: "Predati provediv plan",
        description:
          "Dokumentiramo prioritete, briefove, vlasnike, mjere i radna pitanja potrebna za prelazak u izvedbu s manje ponavljanja.",
      },
    ],
    fitTitle: "Ovaj rad je dobar izbor kada:",
    fit: [
      "Lansiranje, repozicioniranje ili ulazak na novo tržište trebaju zajednički plan organskog rasta prije početka izvedbe.",
      "Marketing, proizvod, brend i razvoj trebaju donositi povezane odluke, a nitko nema jasno vlasništvo nad slojem pretrage.",
      "Tim već radi na aktivnostima, ali nema praktičan način odrediti što je prvo važno.",
      "Voditelji trebaju jasnije briefati interni tim, agencijskog partnera ili stručnjaka nego što to može općenit SEO zahtjev.",
    ],
    faqTitle: "Pitanja prije početka SEO savjetovanja.",
    faqs: [
      {
        question:
          "Po čemu se savjetovanje razlikuje od kontinuiranog SEO rada?",
        answer:
          "Savjetovanje postavlja smjer, prioritete i model vlasništva za jasno definiranu promjenu. Kontinuirani SEO rad prenosi plan u implementaciju, preglede i mjerenje kroz vrijeme. Neki timovi počinju savjetovanjem pa nastavljaju u izvedbi, a drugi plan koriste s internim timom ili postojećim partnerima.",
      },
      {
        question: "Tko treba biti uključen u savjetovanje?",
        answer:
          "Korisna skupina obično uključuje osobu odgovornu za poslovnu promjenu, voditelja marketinga ili brenda te osobu koja razumije web ili izvedbu proizvoda. Rad je strukturiran da odluke među tim ulogama budu jednostavnije, a ne da stvori još jedan sloj sastanaka.",
      },
      {
        question: "Uključuje li savjetovanje implementaciju?",
        answer:
          "Savjetovanje donosi prioritete, briefove i kriterije odluke spremne za vlasnike zadataka. Koupoli nakon toga može podržati implementaciju kroz SEO optimizaciju, ili plan može koristiti interni tim, agencija ili Webflow partner.",
      },
    ],
    relatedTitle: "Korisna podloga za planiranje rada",
    related: [
      {
        href: "/hr/usluge/seo-optimizacija/",
        title: "SEO optimizacija",
        description:
          "Usluga za timove koji tehnički SEO i rad u pretrazi trebaju prenijeti u konkretnu izvedbu.",
      },
      {
        href: "/post/website-migration-seo/",
        title: "SEO migracija web-stranice",
        description:
          "Praktičan vodič kroz tehničke i planske odluke koje su važne kada se web-stranica mijenja.",
      },
      {
        href: "/pojmovnik/vidljivost-u-ai-pretrazi/",
        title: "Vodič za AI vidljivost",
        description:
          "Utemeljen pristup definiranju pitanja i ishoda koje vrijedi mjeriti prije početka izvještavanja.",
      },
    ],
    closeTitle:
      "Donesite lansiranje, repozicioniranje ili pitanje u pretrazi koje treba plan.",
    closeBody:
      "Prvi razgovor služi razumijevanju promjene koja slijedi i procjeni je li savjetodavni angažman pravi način da joj se da smjer.",
  },
};

function Arrow() {
  return <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />;
}

export default function GrowthAdvisory({ locale = "en" }: { locale?: Locale }) {
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
            <figure>
              <img src={copy.image} alt={copy.imageAlt} />
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
                  ? "Povezani vodiči i usluge"
                  : "Related guides and services"
              }
              title={copy.relatedTitle}
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
