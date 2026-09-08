import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { experiences } from "@/lib/siteData";

export default function About() {
  return (
    <SiteLayout>
      <section className="inner-hero about-hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="shell inner-hero-content">
          <p className="eyebrow"><span>About</span> / 01</p>
          <h1>I’m Karlo:<br /><em>weaving SEO magic</em><br />and Webflow wonders.</h1>
          <div className="inner-hero-bottom"><p>Based in Slavonski Brod, Croatia. My ambitions led me to open <strong>Koupoli</strong>, an SEO and Webflow development agency. Beyond the work, I’m a football-playing amateur, always open to networking and a good conversation—job theme or not.</p><div className="hero-actions"><Link className="button button-lime" href="/projects">My projects <ArrowUpRight size={16} /></Link><a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={16} /></a></div></div>
        </div>
      </section>

      <section className="experience-section">
        <div className="shell experience-heading"><p className="eyebrow"><span>02</span> Experience</p><p>A practical career across search, digital brand, web design, technical systems, and team leadership.</p></div>
        <div className="shell experience-list">
          {experiences.map((experience, index) => (
            <article key={experience.role} className="experience-item">
              <div className="experience-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{experience.company}<br /><em>{experience.period}</em></p></div>
              <div className="experience-detail"><h2>{experience.role}</h2>{experience.intro && <p className="experience-intro">{experience.intro}</p>}<ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{experience.secondary && <p className="experience-secondary">{experience.secondary}</p>}</div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
