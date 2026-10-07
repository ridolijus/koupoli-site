import { useMemo, useState } from "react";
import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { glossaryContent, type GlossaryCategory, type GlossaryLocale } from "@/lib/glossaryData";

type GlossaryProps = { locale?: GlossaryLocale };

const categories: GlossaryCategory[] = ["technical", "content", "ai"];

export default function GrowthGlossary({ locale = "en" }: GlossaryProps) {
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "all">("all");
  const [query, setQuery] = useState("");
  const content = glossaryContent[locale];
  const pathPrefix = locale === "hr" ? "/hr" : "";
  const normalizedQuery = query.trim().toLocaleLowerCase(locale === "hr" ? "hr" : "en");
  const visibleTerms = useMemo(() => content.terms.filter((term) => {
    const matchesCategory = activeCategory === "all" || term.category === activeCategory;
    const text = `${term.term} ${term.definition}`.toLocaleLowerCase(locale === "hr" ? "hr" : "en");
    return matchesCategory && (!normalizedQuery || text.includes(normalizedQuery));
  }), [activeCategory, content.terms, locale, normalizedQuery]);
  const groups = categories.map((category) => ({
    category,
    terms: visibleTerms.filter((term) => term.category === category),
  })).filter((group) => group.terms.length > 0);

  return <GrowthLayout locale={locale}>
    <PageMeta title={content.title} description={content.description} lang={locale} />
    <section className="growth-glossary-hero">
      <div className="growth-container growth-glossary-hero-grid">
        <div>
          <p className="growth-kicker growth-kicker-blue">{content.kicker}</p>
          <h1>{content.heading}</h1>
          <p>{content.lead}</p>
          <div className="growth-glossary-figures" aria-label={locale === "hr" ? "Sažetak pojmovnika" : "Glossary summary"}>
            {content.figures.map((figure) => <div key={figure.label}><strong>{figure.value}</strong><span>{figure.label}</span></div>)}
          </div>
        </div>
        <figure className="growth-glossary-atlas"><img src="/assets/koupoli-glossary-knowledge-atlas.webp" alt={locale === "hr" ? "Apstraktna urednička ilustracija Koupoli pojmovnika" : "Abstract editorial illustration for the Koupoli glossary"} /></figure>
      </div>
    </section>

    <section className="growth-glossary-directory" aria-labelledby="glossary-directory-title">
      <div className="growth-container">
        <div className="growth-glossary-directory-header">
          <div><p className="growth-kicker growth-kicker-blue">{locale === "hr" ? "Pojmovnik" : "Term directory"}</p><h2 id="glossary-directory-title">{locale === "hr" ? "Pronađite izraz koji trebate objasniti." : "Find the language behind the work."}</h2></div>
          <p>{locale === "hr" ? "Filtrirajte područje ili upišite pojam. Svaka je definicija napisana za razgovor o stvarnom poslu, a ne samo za tražilicu." : "Filter by discipline or search a term. Each definition is written for a real working conversation, not only for a search engine."}</p>
        </div>
        <div className="growth-glossary-controls">
          <div className="growth-glossary-tabs" role="group" aria-label={locale === "hr" ? "Kategorije pojmova" : "Glossary categories"}>
            <button type="button" className={activeCategory === "all" ? "is-active" : ""} aria-pressed={activeCategory === "all"} onClick={() => setActiveCategory("all")}>{content.allLabel}</button>
            {categories.map((category) => <button type="button" key={category} className={activeCategory === category ? "is-active" : ""} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{content.categories[category].label}</button>)}
          </div>
          <div className="growth-glossary-search"><label htmlFor="glossary-search">{content.searchLabel}</label><div><input id="glossary-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={content.searchPlaceholder} type="search" autoComplete="off" />{query && <button type="button" onClick={() => setQuery("")}>{content.clearLabel}</button>}</div></div>
        </div>
        <p className="growth-glossary-result-count">{content.countLabel(visibleTerms.length)}</p>
        {groups.length > 0 ? <div className="growth-glossary-groups">{groups.map(({ category, terms }) => <section key={category} className="growth-glossary-group" aria-labelledby={`glossary-${category}`}><header><p>{content.categories[category].label}</p><span>{content.categories[category].summary}</span></header><dl>{terms.map((term) => <div key={term.term}><dt>{term.guidePath ? <Link href={term.guidePath}>{term.term}</Link> : term.term}</dt><dd>{term.definition}</dd></div>)}</dl></section>)}</div> : <div className="growth-glossary-empty"><h2>{content.emptyTitle}</h2><p>{content.emptyCopy}</p><button type="button" onClick={() => { setActiveCategory("all"); setQuery(""); }}>{content.allLabel}</button></div>}
      </div>
    </section>

    <section className="growth-glossary-principle"><div className="growth-container"><div><p className="growth-kicker">{locale === "hr" ? "Kako je napravljen" : "How it is made"}</p><h2>{content.principleTitle}</h2></div><p>{content.principleCopy}</p></div></section>

    <section className="growth-glossary-resources"><div className="growth-container"><p className="growth-kicker growth-kicker-blue">{content.resourceKicker}</p><h2>{content.resourceTitle}</h2><nav className="growth-glossary-resource-grid" aria-label={content.resourceKicker}>{content.resources.map((resource) => <Link href={`${pathPrefix}${resource.href}`} key={resource.href}><strong>{resource.title}</strong><span>{resource.description}</span></Link>)}</nav><ContextLinks locale={locale} items={locale === "hr" ? [
      { href: "/#offers", title: "Koupoli usluge", description: "Pogledajte dva načina suradnje: savjetodavni plan ili kontinuiranu operativnu podršku." },
      { href: "/projects/", title: "Projekti", description: "Pogledajte rad u kojem su tehnički SEO, sadržaj i razvoj morali funkcionirati zajedno." },
      { href: "/about/", title: "O meni", description: "Saznajte više o iskustvu koje stoji iza Koupoli pristupa." },
    ] : [
      { href: "/#offers", title: "Koupoli offers", description: "See the two ways to work together: an advisory plan or ongoing operational support." },
      { href: "/projects/", title: "Projects", description: "See client work where technical SEO, content, and development had to work together." },
      { href: "/about/", title: "About", description: "Meet the experience behind the Koupoli approach." },
    ]} /></div></section>
  </GrowthLayout>;
}
