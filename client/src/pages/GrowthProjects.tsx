import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { projects } from "@/lib/siteData";

const logos: Record<string, string> = {
  "GemBet": "/assets/gembet-project-logo.png",
  "GemPartner": "/assets/gempartner-logo.png",
  "Maxtreme Sports": "/assets/maxtreme-sports-logo.png",
  "Soldered Electronics": "/assets/soldered-project-logo.svg",
  "Top Betting Sites Singapore": "/assets/top-betting-sites-project-logo.webp",
  "Ultralytics": "/assets/ultralytics-project-logo.svg",
  "Alfa Gradnja": "/assets/alfa-gradnja-project-logo.png",
  "Parilica": "/assets/parilica-project-logo.png",
  "ProgeCAD": "/assets/progecad-logo.png",
  "CAD Global": "/assets/cad-global-project-logo.png",
  "CAD4Africa": "/assets/cad4africa-logo.png",
  "Thorns Underwear": "/assets/thorns-project-logo.png",
};

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function GrowthProjects() {
  return <GrowthLayout locale="en">
    <PageMeta title="SEO and Organic Growth Projects | Koupoli" description="Selected Koupoli projects across technical SEO, content strategy, Webflow development, migration support, and organic growth." />
    <section className="growth-page-hero growth-projects-page-hero">
      <div className="growth-container growth-page-hero-grid">
        <div><p className="growth-kicker">Selected projects</p><h1>Evidence from work that had to perform beyond a presentation.</h1><p>A cross-section of projects involving technical SEO, content optimisation, Webflow development, migration support, research, and practical delivery alongside client teams.</p></div>
        <figure className="growth-feature-visual"><img src="/assets/koupoli-project-evidence-infographic.webp" alt="Abstract editorial evidence map for organic growth projects" /></figure>
      </div>
    </section>

    <section className="growth-projects-section"><div className="growth-container"><div className="growth-page-section-heading"><p className="growth-kicker growth-kicker-blue">Portfolio</p><h2>Different sites. Different constraints. The same focus on work that can compound.</h2></div><div className="growth-projects-grid">{projects.map((project) => <a className="growth-project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}><span>{project.index}</span>{logos[project.name] && <div className="growth-project-logo"><img src={logos[project.name]} alt={`${project.name} logo`} /></div>}<h3>{project.name}</h3><p>{project.scope}</p><small>{displayUrl(project.url)}</small></a>)}</div></div></section>
  </GrowthLayout>;
}
