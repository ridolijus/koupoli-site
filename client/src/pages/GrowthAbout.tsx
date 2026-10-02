import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { hrExperiences } from "@/lib/hrContent";
import { experiences } from "@/lib/siteData";

type Locale = "en" | "hr";

const copies = {
  en: {
    title: "About Karlo Ridan | Koupoli",
    description: "Meet Karlo Ridan, the SEO and organic growth specialist behind Koupoli. Strategy, technical SEO, content systems, and implementation.",
    kicker: "About Koupoli",
    heading: "Strategy is only useful when it reaches the live site.",
    lead: "Koupoli is led by Karlo Ridan, an SEO specialist who works across strategy, technical implementation, content systems, and the teams responsible for making them real.",
    projects: "View selected work",
    contact: "Start a conversation",
    imageAlt: "Editorial blueprint connecting strategy and implementation",
    introHeading: "A practical point of view for work that crosses disciplines.",
    intro: ["Organic growth work rarely stays in one lane. A plan has to hold up in product conversations, developer tickets, content briefs, migrations, and reporting. Karlo's experience across technical SEO, Webflow, project leadership, and client delivery keeps the work connected.", "That means a recommendation can move from a search insight to an implemented page structure, not get lost in a presentation."],
    experienceKicker: "Experience",
    experienceHeading: "Work built from the inside of search, product, and delivery teams.",
    closeKicker: "Selected work",
    closeHeading: "See how the work has taken shape across different teams and industries.",
    closeCta: "Explore projects",
  },
  hr: {
    title: "O Karlu Ridanu | Koupoli",
    description: "Upoznajte Karla Ridana, stručnjaka za SEO i organski rast koji stoji iza Koupolija. Strategija, tehnički SEO, sustavi sadržaja i implementacija.",
    kicker: "O Koupoliju",
    heading: "Strategija je korisna samo kada zaživi na aktivnoj web-stranici.",
    lead: "Koupoli vodi Karlo Ridan, SEO stručnjak koji radi na strategiji, tehničkoj implementaciji, sustavima sadržaja i s timovima zaduženima da ih provedu u djelo.",
    projects: "Pogledajte odabrane radove",
    contact: "Započnite razgovor",
    imageAlt: "Urednički nacrt koji povezuje strategiju i implementaciju",
    introHeading: "Praktičan pristup radu koji se proteže kroz različite discipline.",
    intro: ["Rad na organskom rastu rijetko ostaje ograničen na jedno područje. Plan mora funkcionirati u razgovorima o proizvodu, zadacima za razvojne timove, briefovima za sadržaj, migracijama i izvještavanju. Karlovo iskustvo u tehničkom SEO-u, Webflowu, vođenju projekata i isporuci za klijente održava sve elemente povezanima.", "To znači da preporuka može prijeći put od uvida iz pretraživanja do implementirane strukture stranice, umjesto da se izgubi u prezentaciji."],
    experienceKicker: "Iskustvo",
    experienceHeading: "Rad nastao iz prve ruke unutar timova za pretraživanje, proizvod i isporuku.",
    closeKicker: "Odabrani radovi",
    closeHeading: "Pogledajte kako je ovaj rad zaživio u različitim timovima i industrijama.",
    closeCta: "Istražite projekte",
  },
} as const;

export default function GrowthAbout({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const localized = (path: string) => locale === "hr" ? `/hr${path}` : path;
  const experienceList = locale === "hr" ? hrExperiences : experiences;
  const related = locale === "hr" ? [
    { href: "/projects/", title: "Projekti", description: "Pogledajte kako se tehnički SEO, sadržaj i isporuka povezuju u stvarnom radu." },
    { href: "/post/website-migration-seo/", title: "SEO migracija web-stranice", description: "Praktičan vodič za prijenos pretraživačke vrijednosti kroz redizajn ili novo lansiranje." },
    { href: "/post/generative-engine-optimization/", title: "Generativna optimizacija", description: "Što se u AI pretrazi mijenja, a koji SEO temelji i dalje vrijede." },
  ] : [
    { href: "/projects/", title: "Projects", description: "See how technical SEO, content, and delivery connect in live client work." },
    { href: "/post/website-migration-seo/", title: "Website migration SEO", description: "A practical guide to carrying search value through a redesign or new launch." },
    { href: "/post/generative-engine-optimization/", title: "Generative engine optimization", description: "What changes in AI search and which SEO foundations still matter." },
  ];

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-page-hero growth-about-page-hero">
      <div className="growth-container growth-page-hero-grid">
        <div>
          <p className="growth-kicker">{copy.kicker}</p>
          <h1>{copy.heading}</h1>
          <p>{copy.lead}</p>
          <div className="growth-actions"><Link className="growth-button growth-button-primary" href={localized("/projects/")}>{copy.projects}</Link><Link className="growth-text-link" href={localized("/contact/")}>{copy.contact}</Link></div>
        </div>
        <figure className="growth-feature-visual"><img src="/assets/koupoli-about-method-infographic.webp?v=full-panel" alt={copy.imageAlt} /></figure>
      </div>
    </section>

    <section className="growth-page-intro-section">
      <div className="growth-container growth-page-intro-grid">
        <h2>{copy.introHeading}</h2>
        <div>{copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </section>

    <section className="growth-experience-section">
      <div className="growth-container">
        <div className="growth-page-section-heading"><p className="growth-kicker growth-kicker-blue">{copy.experienceKicker}</p><h2>{copy.experienceHeading}</h2></div>
        <div className="growth-experience-list">{experienceList.map((experience) => <article key={`${experience.company}-${experience.role}`}>
          <div><p>{experience.period}</p><span>{experience.company}</span></div>
          <div><h3>{experience.role}</h3>{experience.intro && <p className="growth-experience-intro">{experience.intro}</p>}<ul>{experience.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{experience.secondary && <p className="growth-experience-intro">{experience.secondary}</p>}</div>
        </article>)}</div>
      </div>
    </section>

    <section className="growth-context-section"><div className="growth-container"><ContextLinks locale={locale} items={related} /></div></section>

    <section className="growth-page-close"><div className="growth-container"><p className="growth-kicker">{copy.closeKicker}</p><h2>{copy.closeHeading}</h2><Link className="growth-button growth-button-primary" href={localized("/projects/")}>{copy.closeCta}</Link></div></section>
  </GrowthLayout>;
}
