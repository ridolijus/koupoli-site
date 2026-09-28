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

const copies = {
  en: {
    title: "SEO and Organic Growth Projects | Koupoli",
    description: "Selected Koupoli projects across technical SEO, content strategy, Webflow development, migration support, and organic growth.",
    kicker: "Selected projects",
    heading: "Evidence from work that had to perform beyond a presentation.",
    lead: "A cross-section of projects involving technical SEO, content optimisation, Webflow development, migration support, research, and practical delivery alongside client teams.",
    imageAlt: "Editorial evidence map for organic growth projects",
    portfolio: "Portfolio",
    portfolioHeading: "Different sites. Different constraints. The same focus on work that can compound.",
    logo: "logo",
  },
  hr: {
    title: "Projekti SEO-a i organskog rasta | Koupoli",
    description: "Odabrani Koupoli projekti iz područja tehničkog SEO-a, strategije sadržaja, razvoja u Webflowu, podrške pri migracijama i organskog rasta.",
    kicker: "Odabrani projekti",
    heading: "Dokazi rada koji je morao ostvarivati rezultate i izvan prezentacije.",
    lead: "Presjek projekata koji uključuju tehnički SEO, optimizaciju sadržaja, razvoj u Webflowu, podršku pri migracijama, istraživanje i praktičnu realizaciju u suradnji s klijentskim timovima.",
    imageAlt: "Urednička mapa dokaza za projekte organskog rasta",
    portfolio: "Portfolio",
    portfolioHeading: "Različite web-stranice. Različita ograničenja. Isti fokus na rad čiji se učinak s vremenom povećava.",
    logo: "logotip",
  },
} as const;

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function GrowthProjects({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-page-hero growth-projects-page-hero">
      <div className="growth-container growth-page-hero-grid">
        <div><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p></div>
        <figure className="growth-feature-visual"><img src="/assets/koupoli-project-evidence-infographic.webp?v=full-panel" alt={copy.imageAlt} /></figure>
      </div>
    </section>

    <section className="growth-projects-section"><div className="growth-container"><div className="growth-page-section-heading"><p className="growth-kicker growth-kicker-blue">{copy.portfolio}</p><h2>{copy.portfolioHeading}</h2></div><div className="growth-projects-grid">{projects.map((project) => <a className="growth-project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}><span>{project.index}</span>{logos[project.name] && <div className="growth-project-logo"><img src={logos[project.name]} alt={`${project.name} ${copy.logo}`} /></div>}<h3>{project.name}</h3><p>{locale === "hr" ? hrProjectScopes[project.name] : project.scope}</p><small>{displayUrl(project.url)}</small></a>)}</div></div></section>
  </GrowthLayout>;
}
