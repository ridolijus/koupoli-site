import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { hrProjectScopes } from "@/lib/hrContent";
import { projects } from "@/lib/siteData";

type Locale = "en" | "hr";

const logos: Record<string, string> = {
  GemBet: "/assets/gembet-project-logo.png",
  GemPartner: "/assets/gempartner-logo.png",
  "Maxtreme Sports": "/assets/maxtreme-sports-logo.png",
  "Soldered Electronics": "/assets/soldered-project-logo.svg",
  "Top Betting Sites Singapore": "/assets/top-betting-sites-project-logo.webp",
  Ultralytics: "/assets/ultralytics-project-logo.svg",
  "Alfa Gradnja": "/assets/alfa-gradnja-project-logo.png",
  Parilica: "/assets/parilica-project-logo.png",
  ProgeCAD: "/assets/progecad-logo.png",
  "CAD Global": "/assets/cad-global-project-logo.png",
  CAD4Africa: "/assets/cad4africa-logo.png",
  "Thorns Underwear": "/assets/thorns-project-logo.png",
};

const featuredProject = "GemBet";

const copies = {
  en: {
    title: "SEO and Organic Growth Projects | Koupoli",
    description: "Selected Koupoli projects where technical SEO, content strategy, Webflow development, migration support, and organic-growth decisions had to become live work.",
    kicker: "Selected projects",
    heading: "Evidence from work that moved beyond recommendation into implementation.",
    lead: "A cross-section of projects where technical SEO, content optimisation, Webflow development, migration support, research, and practical delivery helped teams move through a specific constraint.",
    imageAlt: "Editorial evidence map for organic growth projects",
    portfolio: "Portfolio",
    portfolioHeading: "Different sites. Different constraints. The same focus on a useful next move.",
    logo: "logo",
  },
  hr: {
    title: "Projekti SEO-a i organskog rasta | Koupoli",
    description: "Odabrani Koupoli projekti u kojima su tehnički SEO, strategija sadržaja, razvoj u Webflowu, podrška pri migracijama i odluke o organskom rastu trebali postati stvarni rad.",
    kicker: "Odabrani projekti",
    heading: "Dokazi rada koji je od preporuke prešao u implementaciju.",
    lead: "Presjek projekata u kojima su tehnički SEO, optimizacija sadržaja, razvoj u Webflowu, podrška pri migracijama, istraživanje i praktična realizacija pomogli timovima proći kroz određenu prepreku.",
    imageAlt: "Urednička mapa dokaza za projekte organskog rasta",
    portfolio: "Portfolio",
    portfolioHeading: "Različite web-stranice. Različite prepreke. Isti fokus na koristan sljedeći potez.",
    logo: "logotip",
  },
} as const;

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function GrowthProjects({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const related = locale === "hr" ? [
    { href: "/hr/about/", title: "O Karlu", description: "Upoznajte iskustvo iza rada koji povezuje strategiju s implementacijom." },
    { href: "/hr/usluge/seo-optimizacija/", title: "SEO optimizacija", description: "Tehnički SEO, sadržaj i prioriteti za timove kojima treba konkretna izvedba." },
    { href: "/downloads/seo-migracija-kontrolni-popis.md", title: "Kontrolni popis za SEO migraciju", description: "Markdown predložak za planiranje URL-ova, redirekcija i praćenja prije i nakon lansiranja.", download: true },
    { href: "/hr/contact/", title: "Započnite razgovor", description: "Opišite projekt, tržište ili prepreku za fokusiran prvi razgovor." },
  ] : [
    { href: "/about/", title: "About Karlo", description: "Meet the experience behind work that connects strategy to implementation." },
    { href: "/services/technical-seo-ai-search/", title: "Technical SEO services", description: "Technical SEO and AI-search operations for teams that need implementation, not a scorecard." },
    { href: "/downloads/website-migration-seo-checklist.md", title: "Website migration SEO checklist", description: "A reusable Markdown template for planning URLs, redirects, and monitoring before and after launch.", download: true },
    { href: "/contact/", title: "Start a conversation", description: "Share the project, market, or constraint for a focused first conversation." },
  ];

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-page-hero growth-projects-page-hero">
      <div className="growth-container growth-page-hero-grid">
        <div><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p></div>
        <figure className="growth-feature-visual"><img src="/assets/koupoli-project-evidence-infographic.webp?v=full-panel" alt={copy.imageAlt} /></figure>
      </div>
    </section>

    <section className="growth-projects-section"><div className="growth-container"><div className="growth-page-section-heading"><p className="growth-kicker growth-kicker-blue">{copy.portfolio}</p><h2>{copy.portfolioHeading}</h2></div><div className="growth-projects-grid">{projects.map((project) => {
      const isFeatured = project.name === featuredProject;
      return <a className={`growth-project-card${isFeatured ? " is-featured" : ""}`} href={project.url} target="_blank" rel="noreferrer" key={project.name}>
        {isFeatured && logos[project.name] && <div className="growth-project-feature-visual"><img src={logos[project.name]} alt={`${project.name} ${copy.logo}`} /></div>}
        <div className="growth-project-card-copy">{!isFeatured && logos[project.name] && <div className="growth-project-logo"><img src={logos[project.name]} alt={`${project.name} ${copy.logo}`} /></div>}<h3>{project.name}</h3><p>{locale === "hr" ? hrProjectScopes[project.name] : project.scope}</p><small>{displayUrl(project.url)}</small></div>
      </a>;
    })}</div></div></section>
    <section className="growth-context-section"><div className="growth-container"><ContextLinks locale={locale} items={related} /></div></section>
  </GrowthLayout>;
}
