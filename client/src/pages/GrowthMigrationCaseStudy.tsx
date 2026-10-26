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
  facts: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[] }>;
  sourceLabel: string;
  sourceHref: string;
  sourceText: string;
  related: Array<{ href: string; title: string; description: string; download?: boolean }>;
  returnLabel: string;
};

const copies: Record<Locale, CaseStudyCopy> = {
  en: {
    title: "Website Migration Case Study: Multi-Market SEO Delivery | Koupoli",
    description: "An anonymised Koupoli case study on coordinating a website migration from one domain to geo-specialised subdomains, with technical SEO, mobile, and WordPress work.",
    heading: "A multi-market website migration, managed as a search transition.",
    lead: "An anonymised delivery record from a move away from a single, comprehensive domain to geo-specialised subdomains. The work connected migration coordination with technical SEO, mobile optimisation, and WordPress improvements.",
    imageAlt: "Editorial infographic showing a structured website migration map",
    author: "Experience record by Karlo Ridan, SEO and organic-growth specialist",
    facts: [
      { label: "Work type", value: "Website migration and technical SEO" },
      { label: "Site change", value: "One domain to geo-specialised subdomains" },
      { label: "Delivery scope", value: "Migration coordination, technical SEO, mobile, and WordPress" },
    ],
    sections: [
      {
        heading: "The assignment",
        paragraphs: [
          "The client was moving from one comprehensive domain to geo-specialised subdomains. That is more than a change of address. It changes the paths users and search engines follow, the destinations of existing authority, and the way a site needs to be reviewed after release.",
          "Karlo coordinated the complete migration while contributing technical SEO, mobile optimisation, and WordPress optimisation work. The aim was to treat the move as an operating change for search, not as a visual release followed by a technical clean-up.",
        ],
      },
      {
        heading: "What the work covered",
        paragraphs: [
          "The documented scope combined migration leadership with the technical and editorial inputs that determine whether a new architecture can be understood and used.",
        ],
        list: [
          "Coordinating the move from the existing domain to geo-specialised subdomains.",
          "Applying technical SEO, mobile optimisation, and WordPress optimisation practices during delivery.",
          "Optimising existing content, contributing keyword research for new content, and preparing guidance for copywriters.",
          "Using Google Analytics, Similarweb, Ahrefs, and related tools for tracking, analysis, and reporting.",
        ],
      },
      {
        heading: "Why the migration needed one shared view",
        paragraphs: [
          "A multi-market migration creates dependencies between the new URL structure, the information on each destination, technical implementation, and the measurement plan. If those decisions are made separately, an otherwise reasonable change can send a visitor or crawler to the wrong place.",
          "The delivery therefore centred on keeping the migration, technical work, content decisions, and performance review connected. This is the same operating principle Koupoli uses for teams preparing a redesign, platform change, or market-specific site structure.",
        ],
      },
      {
        heading: "Evidence, not invented outcomes",
        paragraphs: [
          "This case study is intentionally anonymised and does not publish client traffic, ranking, revenue, or conversion figures. Those numbers are not public evidence, so they are not presented as proof. The record documents the scope of work and the type of decision-making involved instead.",
          "For a team assessing a similar project, the most useful next step is to establish a baseline before development, map meaningful old URLs to final destinations, validate the live technical signals, and monitor the move in Search Console after release.",
        ],
      },
    ],
    sourceLabel: "Method reference",
    sourceHref: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    sourceText: "Google Search Central: How to move a site",
    related: [
      { href: "/post/website-migration-seo/", title: "Website migration SEO", description: "A practical guide to URL mapping, redirects, final technical signals, and post-launch monitoring." },
      { href: "/services/technical-seo-ai-search/", title: "Technical SEO services", description: "Operational support for crawl paths, indexation, site structure, technical QA, and implementation." },
      { href: "/downloads/website-migration-seo-checklist.md", title: "Website migration SEO checklist", description: "A first-party Markdown template for mapping URLs, assigning owners, and recording launch checks.", download: true },
    ],
    returnLabel: "Back to projects",
  },
  hr: {
    title: "Studija slučaja SEO migracije: Više tržišta | Koupoli",
    description: "Anonimizirana Koupoli studija slučaja o koordinaciji migracije web-stranice s jedne domene na geografski specijalizirane poddomene, uz tehnički SEO, mobilnu i WordPress optimizaciju.",
    heading: "Migracija web-stranice za više tržišta, vođena kao prijelaz u pretraživanju.",
    lead: "Anonimizirani zapis o prelasku s jedne sveobuhvatne domene na geografski specijalizirane poddomene. Rad je povezao koordinaciju migracije s tehničkim SEO-om, mobilnom optimizacijom i poboljšanjima u WordPressu.",
    imageAlt: "Urednički infografički prikaz strukturirane migracijske mape web-stranice",
    author: "Zapis iskustva: Karlo Ridan, stručnjak za SEO i organski rast",
    facts: [
      { label: "Vrsta rada", value: "Migracija web-stranice i tehnički SEO" },
      { label: "Promjena stranice", value: "Jedna domena u geografski specijalizirane poddomene" },
      { label: "Opseg isporuke", value: "Koordinacija migracije, tehnički SEO, mobilna optimizacija i WordPress" },
    ],
    sections: [
      {
        heading: "Zadatak",
        paragraphs: [
          "Klijent je prelazio s jedne sveobuhvatne domene na geografski specijalizirane poddomene. To je više od promjene adrese. Mijenja putove kojima korisnici i tražilice dolaze do sadržaja, odredišta postojećeg autoriteta i način na koji se web mora provjeriti nakon objave.",
          "Karlo je koordinirao potpunu migraciju te pridonio tehničkom SEO-u, mobilnoj optimizaciji i optimizaciji WordPressa. Cilj je bio tretirati promjenu kao operativni prijelaz za pretraživanje, a ne kao vizualnu objavu nakon koje tek slijedi tehničko čišćenje.",
        ],
      },
      {
        heading: "Što je rad obuhvatio",
        paragraphs: [
          "Dokumentirani opseg povezao je vođenje migracije s tehničkim i sadržajnim ulazima koji određuju može li se nova arhitektura jasno razumjeti i koristiti.",
        ],
        list: [
          "Koordinacija prijelaza s postojeće domene na geografski specijalizirane poddomene.",
          "Primjena tehničkog SEO-a, mobilne optimizacije i optimizacije WordPressa tijekom isporuke.",
          "Optimizacija postojećeg sadržaja, doprinos istraživanju ključnih riječi za novi sadržaj i priprema smjernica za copywritere.",
          "Korištenje Google Analyticsa, Similarweba, Ahrefsa i povezanih alata za praćenje, analizu i izvještavanje.",
        ],
      },
      {
        heading: "Zašto je migraciji potreban zajednički pogled",
        paragraphs: [
          "Migracija za više tržišta stvara ovisnosti između nove strukture URL-ova, informacija na svakom odredištu, tehničke izvedbe i plana mjerenja. Kada se te odluke donose odvojeno, inače razumna izmjena može korisnika ili crawler odvesti na pogrešno mjesto.",
          "Isporuka je zato bila usmjerena na povezanost migracije, tehničkog rada, sadržajnih odluka i pregleda rezultata. To je isto operativno načelo koje Koupoli primjenjuje za timove koji pripremaju redizajn, promjenu platforme ili strukturu stranice za pojedina tržišta.",
        ],
      },
      {
        heading: "Dokazi, a ne izmišljeni rezultati",
        paragraphs: [
          "Ova je studija slučaja namjerno anonimizirana i ne objavljuje promet, pozicije, prihod ni konverzijske podatke klijenta. Ti brojevi nisu javno provjerljiv dokaz, zato nisu prikazani kao potvrda rada. Umjesto toga zapis dokumentira opseg rada i odluke koje su bile potrebne.",
          "Za tim koji procjenjuje sličan projekt najkorisniji je sljedeći korak zabilježiti početno stanje prije razvoja, mapirati važne stare URL-ove na konačna odredišta, provjeriti tehničke signale na objavljenoj stranici i pratiti promjenu u Search Consoleu nakon objave.",
        ],
      },
    ],
    sourceLabel: "Metodološka referenca",
    sourceHref: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    sourceText: "Google Search Central: Kako migrirati web-stranicu",
    related: [
      { href: "/hr/post/website-migration-seo/", title: "SEO migracija web-stranice", description: "Praktičan vodič za mapiranje URL-ova, redirekcije, konačne tehničke signale i praćenje nakon objave." },
      { href: "/hr/usluge/seo-optimizacija/", title: "SEO optimizacija", description: "Operativna podrška za crawlabilnost, indeksiranje, strukturu stranice, tehničku provjeru i implementaciju." },
      { href: "/downloads/seo-migracija-kontrolni-popis.md", title: "Kontrolni popis za SEO migraciju", description: "Prvi Koupoli Markdown predložak za mapiranje URL-ova, dodjelu vlasnika i bilježenje provjera pri lansiranju.", download: true },
    ],
    returnLabel: "Natrag na projekte",
  },
};

export default function GrowthMigrationCaseStudy({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const projectsPath = locale === "hr" ? "/hr/projects/" : "/projects/";

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <article className="growth-case-study">
      <header className="growth-article-header growth-case-study-header">
        <div className="growth-narrow">
          <h1>{copy.heading}</h1>
          <p>{copy.lead}</p>
          <p className="growth-byline"><span>{copy.author}</span></p>
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
            <section className="growth-article-sources"><h2>{copy.sourceLabel}</h2><ul><li><a href={copy.sourceHref} target="_blank" rel="noreferrer">{copy.sourceText}</a></li></ul></section>
          </div>
          <ContextLinks locale={locale} items={copy.related} />
          <div className="growth-article-return"><Link className="growth-text-link" href={projectsPath}>{copy.returnLabel}</Link></div>
        </div>
      </section>
    </article>
  </GrowthLayout>;
}
