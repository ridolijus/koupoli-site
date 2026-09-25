import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
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

function displayUrl(url: string) { return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }

export default function Projects() {
  return <SiteLayout><section className="page-hero webflow-glow"><div className="narrow-container centered-page-copy"><h1>Exploring Creative Project Portfolio</h1><p>I wouldn&apos;t state any unnecessary achievements or boosted numbers just to get your attention. My list is short with concrete results which you can project in your current situation.</p></div></section><section className="standard-section projects-content"><div className="content-container section-split"><h2>Projects</h2><div className="project-grid">{projects.map((project) => <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>{logos[project.name] && <div className="project-logo-wrap"><img src={logos[project.name]} alt={`${project.name} logo`} /></div>}<p className="project-url">↗ {displayUrl(project.url)}</p><h3>{project.name}</h3><p>{project.scope}</p></a>)}</div></div></section></SiteLayout>;
}
