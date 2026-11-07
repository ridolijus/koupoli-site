import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";

type Locale = "en" | "hr";

type CaseStudyCopy = {
  title: string;
  description: string;
  heading: string;
  lead: string;
  imageAlt: string;
  author: string;
  updated: string;
  facts: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[] }>;
  evidence: {
    heading: string;
    lead: string;
    labels: [string, string, string];
    checks: string[];
    limitation: string;
    download: string;
    href: string;
  };
  sourceLabel: string;
  sources: Array<{ href: string; text: string }>;
  related: Array<{ href: string; title: string; description: string; download?: boolean }>;
  returnLabel: string;
};

const copies: Record<Locale, CaseStudyCopy> = {
  en: {
    title: "Website Migration Case Study: Multi-Market SEO Delivery | Koupoli",
    description: "Karlo Ridan's multi-market migration experience at Ludicrum, with a separate, reproducible Koupoli example of redirect, canonical and sitemap verification.",
    heading: "A multi-market website migration, managed as a search transition.",
    lead: "A record of Karlo Ridan's migration coordination in his SEO role at Ludicrum, moving from one domain to geo-specialised subdomains. A separate live example from Koupoli shows how a URL correction can be checked without publishing confidential client records.",
    imageAlt: "Editorial illustration of URL mapping during a website migration, not a client project screenshot",
    author: "Experience record by Karlo Ridan, SEO and organic-growth specialist",
    updated: "Last materially updated: November 7, 2026",
    facts: [
      { label: "Experience context", value: "SEO Specialist at Ludicrum, role started February 2024" },
      { label: "Site change", value: "One domain to geo-specialised subdomains" },
      { label: "Documented responsibility", value: "Coordinating the complete migration" },
    ],
    sections: [
      {
        heading: "The assignment and Karlo's role",
        paragraphs: [
          "Karlo's professional experience record describes replacing a single, comprehensive domain with geo-specialised subdomains and coordinating the complete migration. His CV and public LinkedIn profile both describe that responsibility. The role start date is not presented as the migration's launch date.",
          "This is experience from Karlo's role at Ludicrum, not a claim that the project was commissioned from Koupoli. The client domains, internal tickets and URL inventory are not published here. The record establishes who did the work and the structural change involved, rather than reconstructing confidential project details.",
        ],
      },
      {
        heading: "What the broader SEO role covered",
        paragraphs: [
          "The same role included technical SEO, mobile and WordPress optimisation, existing-content improvements, keyword research and guidance for copywriters. It also included monitoring and reporting with Google Analytics, Similarweb and Ahrefs. These are documented role responsibilities, not a claim that every task was performed during this one migration.",
        ],
        list: [
          "Migration responsibility: coordinating the move to geo-specialised subdomains.",
          "Technical responsibilities: technical SEO, mobile optimisation and WordPress optimisation.",
          "Content responsibilities: improving existing pages, contributing keyword research and preparing copywriter guidance.",
          "Review responsibilities: analysing SEO metrics and reporting through established search and analytics tools.",
        ],
      },
      {
        heading: "The decision a multi-market move creates",
        paragraphs: [
          "A move to market-specific subdomains creates a practical question: which destination should replace each important old page? The answer depends on that page's audience and purpose. Routing everything to a new homepage would lose that context.",
          "For a comparable migration, document the intended market and successor for each priority URL, then review redirects, destination content, canonical URLs, language alternates and internal links against the same map. This is the method recommended for a similar project, not a claim that an unpublished client checklist has been inspected.",
        ],
      },
      {
        heading: "What this record does and does not prove",
        paragraphs: [
          "The professional record supports Karlo's coordination responsibility and the domain-to-subdomain change. It is not an independently audited before-and-after performance study. No client traffic, rankings, revenue or conversion uplift is attributed to the migration.",
          "The live Koupoli example below provides a different kind of evidence: a public technical check that another practitioner can repeat. It demonstrates the recorded route behaviour, not a recovery in rankings or an AI citation result.",
        ],
      },
    ],
    evidence: {
      heading: "A live QA record from Koupoli's own website",
      lead: "This is a separate URL correction on koupoli.com, not a URL from the Ludicrum migration. The Croatian service moved into the /hr/ language hierarchy. On November 7, 2026, the old route and final page were checked directly.",
      labels: ["Previous route", "Final destination", "Observed response"],
      checks: [
        "The old HTTPS URL returns HTTP 301 with a Location header naming the final Croatian service URL.",
        "The destination returns HTTP 200 without another redirect, giving this route a single hop.",
        "The destination's declared canonical matches its final URL. This is not a claim about Google's selected canonical.",
        "The XML sitemap includes the final URL and excludes the old one.",
      ],
      limitation: "These checks confirm the HTTP response and declared page signals at the observation time. They do not establish index inclusion, traffic preservation or a ranking improvement. The downloadable record includes commands for repeating the checks.",
      download: "Download the dated route QA record",
      href: "/downloads/koupoli-route-qa-record.md",
    },
    sourceLabel: "Experience source and method references",
    sources: [
      { href: "https://www.linkedin.com/in/karlo-ridan/", text: "Karlo Ridan: public professional experience" },
      { href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes", text: "Google Search Central: How to move a site" },
      { href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls", text: "Google Search Central: Canonical URLs and consistent signals" },
    ],
    related: [
      { href: "/post/website-migration-seo/", title: "Website migration SEO", description: "A practical guide to URL mapping, redirects, final technical signals, and post-launch monitoring." },
      { href: "/services/technical-seo-ai-search/", title: "Technical SEO services", description: "Operational support for crawl paths, indexation, site structure, technical QA, and implementation." },
      { href: "/downloads/website-migration-seo-checklist.md", title: "Website migration SEO checklist", description: "An editable Markdown template for mapping URLs, assigning owners, and recording launch checks.", download: true },
    ],
    returnLabel: "Back to projects",
  },
  hr: {
    title: "Studija slučaja SEO migracije: Više tržišta | Koupoli",
    description: "Iskustvo Karla Ridana s migracijom za više tržišta u Ludicrumu i zaseban Koupolijev primjer provjere redirekcije, kanonske adrese i XML sitemapa.",
    heading: "Migracija web-stranice za više tržišta, vođena kao prijelaz u pretraživanju.",
    lead: "Zapis o koordinaciji migracije u SEO ulozi Karla Ridana u Ludicrumu, s jedne domene na geografski specijalizirane poddomene. Zaseban primjer s Koupolijeva weba pokazuje kako provjeriti promjenu URL-a bez objave povjerljivih klijentskih zapisa.",
    imageAlt: "Urednička ilustracija mapiranja URL-ova tijekom migracije, a ne snimka klijentskog projekta",
    author: "Zapis iskustva: Karlo Ridan, stručnjak za SEO i organski rast",
    updated: "Zadnja sadržajna izmjena: 7. studenoga 2026.",
    facts: [
      { label: "Kontekst iskustva", value: "SEO stručnjak u Ludicrumu, uloga od veljače 2024." },
      { label: "Promjena stranice", value: "Jedna domena u geografski specijalizirane poddomene" },
      { label: "Dokumentirana odgovornost", value: "Koordinacija potpune migracije" },
    ],
    sections: [
      {
        heading: "Zadatak i Karlova uloga",
        paragraphs: [
          "Karlo u zapisu svojeg profesionalnog iskustva navodi zamjenu jedne sveobuhvatne domene geografski specijaliziranim poddomenama i koordinaciju potpune migracije. Tu odgovornost opisuju i njegov životopis i javni LinkedIn profil. Datum početka uloge nije prikazan kao datum objave migracije.",
          "Riječ je o iskustvu iz Karlove uloge u Ludicrumu, a ne tvrdnji da je projekt naručen od Koupolija. Klijentske domene, interni zadaci i inventar URL-ova ovdje nisu objavljeni. Zapis objašnjava tko je radio na projektu i kakva je bila strukturna promjena, bez rekonstruiranja povjerljivih detalja.",
        ],
      },
      {
        heading: "Što je obuhvaćala šira SEO uloga",
        paragraphs: [
          "Ista je uloga obuhvaćala tehnički SEO, mobilnu i WordPress optimizaciju, poboljšanje postojećeg sadržaja, istraživanje ključnih riječi i smjernice za autore. Uključivala je i praćenje te izvještavanje pomoću Google Analyticsa, Similarweba i Ahrefsa. To su dokumentirane odgovornosti uloge, a ne tvrdnja da je svaki zadatak proveden u ovoj migraciji.",
        ],
        list: [
          "Migracijska odgovornost: koordinacija prelaska na geografski specijalizirane poddomene.",
          "Tehničke odgovornosti: tehnički SEO, mobilna optimizacija i optimizacija WordPressa.",
          "Sadržajne odgovornosti: poboljšanje postojećih stranica, doprinos istraživanju ključnih riječi i priprema smjernica za autore.",
          "Odgovornosti praćenja: analiza SEO metrika i izvještavanje putem alata za pretragu i analitiku.",
        ],
      },
      {
        heading: "Odluka koju donosi migracija za više tržišta",
        paragraphs: [
          "Prelazak na poddomene za pojedina tržišta otvara praktično pitanje: koje odredište treba zamijeniti svaku važnu staru stranicu? Odgovor ovisi o njezinoj publici i svrsi. Preusmjeravanje svega na novu početnu stranicu izgubilo bi taj kontekst.",
          "Za usporedivu migraciju zabilježite tržište i novo odredište svakog prioritetnog URL-a. Zatim prema istoj mapi pregledajte redirekcije, sadržaj odredišta, kanonske adrese, jezične oznake i interne poveznice. To je preporučena metoda za sličan projekt, a ne tvrdnja da je pregledan neobjavljeni klijentski kontrolni popis.",
        ],
      },
      {
        heading: "Što ovaj zapis potvrđuje, a što ne",
        paragraphs: [
          "Profesionalni zapis potkrepljuje Karlovu odgovornost za koordinaciju i promjenu s domene na poddomene. Nije neovisno provjerena studija rezultata prije i poslije. Migraciji se ne pripisuje rast klijentskog prometa, pozicija, prihoda ni konverzija.",
          "Primjer s Koupolijeva weba u nastavku nudi drukčiji dokaz: javnu tehničku provjeru koju drugi stručnjak može ponoviti. Pokazuje zabilježeno ponašanje URL-a, a ne oporavak pozicija ili rezultat citiranja u AI pretrazi.",
        ],
      },
    ],
    evidence: {
      heading: "Zapis provjere na Koupolijevu webu",
      lead: "Ovo je zasebna promjena URL-a na koupoli.com, a ne URL iz migracije u Ludicrumu. Hrvatska usluga premještena je u jezičnu strukturu /hr/. Stara adresa i konačna stranica provjerene su izravno 7. studenoga 2026.",
      labels: ["Prethodna adresa", "Konačno odredište", "Zabilježen HTTP odgovor"],
      checks: [
        "Stari HTTPS URL vraća HTTP 301 s Location zaglavljem koje navodi konačni URL hrvatske usluge.",
        "Odredište vraća HTTP 200 bez dodatne redirekcije, pa se prijelaz odvija u jednom koraku.",
        "Deklarirana kanonska adresa odredišta odgovara konačnom URL-u. To nije tvrdnja o kanonskoj adresi koju je odabrao Google.",
        "XML sitemap sadrži konačni URL, a ne sadrži stari.",
      ],
      limitation: "Provjere potvrđuju HTTP odgovor i deklarirane signale stranice u trenutku opažanja. Ne potvrđuju indeksiranje, očuvanje prometa ni poboljšanje pozicija. Zapis za preuzimanje sadrži naredbe za ponavljanje provjera.",
      download: "Preuzmite datirani zapis provjere URL-a",
      href: "/downloads/koupoli-zapis-provjere-url-a.md",
    },
    sourceLabel: "Izvor iskustva i metodološke reference",
    sources: [
      { href: "https://www.linkedin.com/in/karlo-ridan/", text: "Karlo Ridan: javno profesionalno iskustvo" },
      { href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes", text: "Google Search Central: Kako migrirati web-stranicu" },
      { href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls", text: "Google Search Central: Kanonske adrese i usklađeni signali" },
    ],
    related: [
      { href: "/hr/post/website-migration-seo/", title: "SEO migracija web-stranice", description: "Praktičan vodič za mapiranje URL-ova, redirekcije, konačne tehničke signale i praćenje nakon objave." },
      { href: "/hr/usluge/seo-optimizacija/", title: "SEO optimizacija", description: "Operativna podrška za crawlabilnost, indeksiranje, strukturu stranice, tehničku provjeru i implementaciju." },
      { href: "/downloads/seo-migracija-kontrolni-popis.md", title: "Kontrolni popis za SEO migraciju", description: "Prilagodljiv Markdown predložak za mapiranje URL-ova, dodjelu odgovornosti i bilježenje provjera pri lansiranju.", download: true },
    ],
    returnLabel: "Natrag na projekte",
  },
};

export default function GrowthMigrationCaseStudy({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const projectsPath = locale === "hr" ? "/hr/projects/" : "/projects/";
  const authorPath = locale === "hr" ? "/hr/about/" : "/about/";

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <article className="growth-case-study">
      <header className="growth-article-header growth-case-study-header">
        <div className="growth-narrow">
          <h1>{copy.heading}</h1>
          <p>{copy.lead}</p>
          <p className="growth-byline"><span><Link href={authorPath}>{copy.author}</Link></span><time dateTime="2026-11-07">{copy.updated}</time></p>
        </div>
      </header>
      <section className="growth-article-body">
        <div className="growth-narrow">
          <img className="growth-article-image" src="/assets/koupoli-website-migration-note-light.webp" alt={copy.imageAlt} width={1400} height={1050} />
          <dl className="growth-case-study-facts">
            {copy.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>
          <div className="growth-rich-text">
            {copy.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
            <section id="route-qa-record" className="growth-case-evidence">
              <h2>{copy.evidence.heading}</h2>
              <p>{copy.evidence.lead}</p>
              <dl>
                <div><dt>{copy.evidence.labels[0]}</dt><dd><code>/usluge/seo-optimizacija/</code></dd></div>
                <div><dt>{copy.evidence.labels[1]}</dt><dd><Link href="/hr/usluge/seo-optimizacija/">/hr/usluge/seo-optimizacija/</Link></dd></div>
                <div><dt>{copy.evidence.labels[2]}</dt><dd>HTTP 301 → HTTP 200</dd></div>
              </dl>
              <ul>{copy.evidence.checks.map((check) => <li key={check}>{check}</li>)}</ul>
              <p>{copy.evidence.limitation}</p>
              <a className="growth-text-link" href={copy.evidence.href} download>{copy.evidence.download}</a>
            </section>
            <section className="growth-article-sources"><h2>{copy.sourceLabel}</h2><ul>{copy.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.text}</a></li>)}</ul></section>
          </div>
          <ContextLinks locale={locale} items={copy.related} />
          <div className="growth-article-return"><Link className="growth-text-link" href={projectsPath}>{copy.returnLabel}</Link></div>
        </div>
      </section>
    </article>
  </GrowthLayout>;
}
