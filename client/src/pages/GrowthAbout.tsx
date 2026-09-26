import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { experiences } from "@/lib/siteData";

export default function GrowthAbout() {
  return <GrowthLayout locale="en">
    <PageMeta title="About Karlo Ridan | Koupoli" description="Meet Karlo Ridan, the SEO and organic growth specialist behind Koupoli. Strategy, technical SEO, content systems, and implementation." />
    <section className="growth-page-hero growth-about-page-hero">
      <div className="growth-container growth-page-hero-grid">
        <div>
          <p className="growth-kicker">About Koupoli</p>
          <h1>Strategy is only useful when it reaches the live site.</h1>
          <p>Koupoli is led by Karlo Ridan, an SEO specialist who works across strategy, technical implementation, content systems, and the teams responsible for making them real.</p>
          <div className="growth-actions"><Link className="growth-button growth-button-primary" href="/projects">View selected work</Link><a className="growth-text-link" href="/#contact">Start a conversation</a></div>
        </div>
        <figure className="growth-feature-visual"><img src="/assets/koupoli-about-method-infographic.webp" alt="Abstract editorial map connecting strategy and implementation" /></figure>
      </div>
    </section>

    <section className="growth-page-intro-section">
      <div className="growth-container growth-page-intro-grid">
        <h2>A practical point of view for work that crosses disciplines.</h2>
        <div><p>Organic growth work rarely stays in one lane. A plan has to hold up in product conversations, developer tickets, content briefs, migrations, and reporting. Karlo's experience across technical SEO, Webflow, project leadership, and client delivery keeps the work connected.</p><p>That means a recommendation can move from a search insight to an implemented page structure, not get lost in a presentation.</p></div>
      </div>
    </section>

    <section className="growth-experience-section">
      <div className="growth-container">
        <div className="growth-page-section-heading"><p className="growth-kicker growth-kicker-blue">Experience</p><h2>Work built from the inside of search, product, and delivery teams.</h2></div>
        <div className="growth-experience-list">{experiences.map((experience) => <article key={`${experience.company}-${experience.role}`}>
          <div><p>{experience.period.replaceAll("-", "-")}</p><span>{experience.company.replaceAll("-", "-")}</span></div>
          <div><h3>{experience.role}</h3>{experience.intro && <p className="growth-experience-intro">{experience.intro}</p>}<ul>{experience.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{experience.secondary && <p className="growth-experience-intro">{experience.secondary}</p>}</div>
        </article>)}</div>
      </div>
    </section>

    <section className="growth-page-close"><div className="growth-container"><p className="growth-kicker">Selected work</p><h2>See how the work has taken shape across different teams and industries.</h2><Link className="growth-button growth-button-primary" href="/projects">Explore projects</Link></div></section>
  </GrowthLayout>;
}
