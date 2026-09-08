import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { projects } from "@/lib/siteData";

const logos: Record<string, string> = {
  "GemBet": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68b828c29187e5ee9f0a6a3c_gembet_logo_wide.png",
  "GemPartner": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/66164f6be41cdc64e7ead39d_Logo.png",
  "Maxtreme Sports": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/65ca4aa7d96b32bcf81d38d5_Untitled%20design%20(62).png",
  "Soldered Electronics": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68b82944992ee2db68f14ba2_soldered-logo-new.svg",
  "Top Betting Sites Singapore": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6852d40357981a3a0d6cd518_topbettingsites_logo.webp",
  "Ultralytics": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68593bfc25b57b3a3c489fe7_680a070c3b99253410dd3e62_Ultralytics_full_blue.svg",
  "Alfa Gradnja": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564cdcc72e05235107a7762_alfa_logo.png",
  "Parilica": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564cd7acfd642997c19acd7_logo.png",
  "ProgeCAD": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564ccb7a79ca25e8de1ef12_progecad_logo-removebg-preview.png",
  "CAD Global": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564ccf7c663f8c47bcfd9ce_CADglobal_transp_web-removebg-preview.png",
  "CAD4Africa": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564d05011574ce71d79c204_logo_cad4africa-1.png",
  "Thorns Underwear": "https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564d0d464777b81ed4eb999_Thorns-logo-2023.png",
};

function displayUrl(url: string) { return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }

export default function Projects() {
  return <SiteLayout><section className="page-hero webflow-glow"><div className="narrow-container centered-page-copy"><h1>Exploring Creative Project Portfolio</h1><p>I wouldn&apos;t state any unnecessary achievements or boosted numbers just to get your attention. My list is short with concrete results which you can project in your current situation.</p></div></section><section className="standard-section projects-content"><div className="content-container section-split"><h2>Projects</h2><div className="project-grid">{projects.map((project) => <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>{logos[project.name] && <div className="project-logo-wrap"><img src={logos[project.name]} alt={`${project.name} logo`} /></div>}<p className="project-url">↗ {displayUrl(project.url)}</p><h3>{project.name}</h3><p>{project.scope}</p></a>)}</div></div></section></SiteLayout>;
}
