import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { projects } from "@/lib/siteData";

export default function Projects() {
  return (
    <SiteLayout>
      <section className="inner-hero projects-hero">
        <div className="grid-glow" />
        <div className="shell inner-hero-content">
          <p className="eyebrow"><span>Projects</span> / 02</p>
          <h1>Exploring Creative<br /><em>Project Portfolio.</em></h1>
          <div className="inner-hero-bottom"><p>I wouldn’t state unnecessary achievements or boosted numbers just to get your attention. This is a short list of concrete work you can project into your own situation.</p><p className="project-total">12 selected<br />engagements</p></div>
        </div>
      </section>
      <section className="projects-section">
        <div className="shell projects-list">
          {projects.map((project) => (
            <a className="project-row" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
              <span className="project-number">{project.index}</span>
              <h2>{project.name}</h2>
              <p>{project.scope}</p>
              <span className="project-link"><ArrowUpRight size={21} /></span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
