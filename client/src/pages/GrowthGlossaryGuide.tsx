import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { getGlossaryGuide, type GlossaryGuideKey, type GlossaryGuideLocale } from "@/lib/glossaryGuides";

type GlossaryGuideProps = {
  locale?: GlossaryGuideLocale;
  guideKey: GlossaryGuideKey;
};

export default function GrowthGlossaryGuide({ locale = "en", guideKey }: GlossaryGuideProps) {
  const guide = getGlossaryGuide(locale, guideKey);
  const glossaryPath = locale === "hr" ? "/hr/pojmovnik/" : "/glossary/";
  const notePath = `${locale === "hr" ? "/hr" : ""}/post/${guide.note.slug}/`;
  const related = guide.related.map((key) => getGlossaryGuide(locale, key));

  return <GrowthLayout locale={locale}>
    <PageMeta title={guide.metaTitle} description={guide.metaDescription} lang={locale} />
    <article className="growth-guide-page">
      <header className="growth-guide-hero"><div className="growth-container growth-guide-hero-grid"><div><Link className="growth-guide-crumb" href={glossaryPath}>{locale === "hr" ? "Pojmovnik" : "Glossary"}</Link><p className="growth-kicker growth-kicker-blue">{guide.kicker}</p><h1>{guide.title}</h1><p>{guide.lead}</p></div><figure className="growth-guide-visual"><img src={guide.image} alt={guide.imageAlt} /></figure></div></header>
      <section className="growth-guide-main"><div className="growth-container growth-guide-main-grid"><aside className="growth-guide-aside"><p className="growth-kicker growth-kicker-blue">{guide.definitionLabel}</p><p>{guide.definition}</p><div><p>{guide.signalsLabel}</p><ul>{guide.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul></div></aside><div className="growth-rich-text growth-guide-rich-text">{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<section className="growth-article-sources"><h2>{guide.sourcesLabel}</h2><ul>{guide.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section></div></div></section>
      <section className="growth-guide-links"><div className="growth-container"><div className="growth-guide-note"><p className="growth-kicker growth-kicker-blue">{locale === "hr" ? "Povezana bilješka" : "Related note"}</p><h2>{guide.note.label}</h2><p>{guide.note.description}</p><Link className="growth-text-link" href={notePath}>{locale === "hr" ? "Pročitajte bilješku" : "Read the Note"}</Link></div><div className="growth-guide-related"><p className="growth-kicker growth-kicker-blue">{locale === "hr" ? "Povezani vodiči" : "Related guides"}</p><nav>{related.map((item) => <Link href={item.path} key={item.key}><strong>{item.title}</strong><span>{item.lead}</span></Link>)}</nav></div><ContextLinks locale={locale} items={[
        { href: locale === "hr" ? "/pojmovnik/" : "/glossary/", title: guide.glossaryLabel, description: guide.glossaryDescription },
        { href: "/projects/", title: locale === "hr" ? "Projekti" : "Projects", description: locale === "hr" ? "Pogledajte tehnički SEO, sadržaj i razvoj kroz stvaran rad s klijentima." : "See technical SEO, content, and development through live client work." },
        { href: "/contact/", title: guide.contactLabel, description: guide.contactDescription },
      ]} /></div></section>
    </article>
  </GrowthLayout>;
}
