import { Link } from "wouter";
import SiteLayout, { SocialCircles } from "@/components/SiteLayout";
import { experiences, site } from "@/lib/siteData";

export default function About() {
  return <SiteLayout>
    <section className="about-hero webflow-glow"><div className="content-container about-hero-grid"><div className="about-copy"><h1>I&apos;m Karlo: Weaving SEO magic and Webflow wonders in Slavonski Brod, Croatia.</h1><p>My high ambitions led me to opening <strong>Koupoli</strong>, SEO and Webflow development agency. If we put my experience aside, I am sports player, still on football pitch (read, amateur), open for networking and socializing. Feel free to reach out even if you don&apos;t have &quot;job&quot; themes to discuss!</p><div className="action-row"><Link className="primary-button" href="/projects">My Projects</Link><a className="secondary-button" href="#contact">Get In Touch</a></div></div><div className="about-media"><img src={site.aboutImage} alt="Slavonski Brod, Croatia" /><div className="follow-row"><strong>Follow on:</strong><SocialCircles /></div></div></div></section>
    <section className="standard-section experiences-section"><div className="content-container section-split"><h2>Experiences</h2><div className="experiences-wrapper">{experiences.map((experience) => <article className="experience-entry" key={`${experience.company}-${experience.role}`}><h3>{experience.role}</h3>{experience.intro && <p className="experience-intro">{experience.intro}</p>}<ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{experience.secondary && <p className="experience-secondary">{experience.secondary}</p>}<p className="experience-company">{experience.company} <span>{experience.period}</span></p></article>)}</div></div></section>
  </SiteLayout>;
}
