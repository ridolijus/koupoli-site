import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { hrExperiences } from "@/lib/hrContent";
import { experiences } from "@/lib/siteData";

type Locale = "en" | "hr";

const copies = {
  en: {
    title: "About Me: Karlo Riđan | Koupoli",
    description: "I’m Karlo Riđan, an SEO specialist helping teams connect organic growth strategy with technical SEO, AI search, content and practical implementation.",
    kicker: "About me",
    heading: "I’m Karlo Riđan, SEO specialist and organic growth adviser.",
    lead: "I help teams turn organic growth decisions into practical plans and technical work. Through Koupoli, I connect SEO strategy, AI search, content and implementation so the work stays focused on the business outcome.",
    projects: "View selected work",
    contact: "Start a conversation",
    imageAlt: "Editorial blueprint connecting strategy and implementation",
    introHeading: "My work connects strategy with implementation.",
    intro: ["I’ve worked across technical SEO, Webflow, project leadership and client delivery. That experience helps me connect product conversations, developer tasks, content briefs, migrations and reporting.", "I turn search insights into recommendations that teams can act on, with a clear page structure and responsibility for the next step. My aim is to make the plan useful in the work itself, not just in a presentation."],
    experienceKicker: "Experience",
    experienceHeading: "My experience across search, product and delivery teams.",
    closeKicker: "Selected work",
    closeHeading: "Explore the projects I’ve worked on across different teams and industries.",
    closeCta: "Explore projects",
  },
  hr: {
    title: "O meni: Karlo Riđan | Koupoli",
    description: "Ja sam Karlo Riđan, SEO stručnjak. Pomažem timovima povezati strategiju organskog rasta s tehničkim SEO-om, AI pretragom, sadržajem i provedbom.",
    kicker: "O meni",
    heading: "Ja sam Karlo Riđan, SEO stručnjak i savjetnik za organski rast.",
    lead: "Pomažem timovima pretvoriti odluke o organskom rastu u praktične planove i tehnički rad. Kroz Koupoli povezujem SEO strategiju, AI pretragu, sadržaj i provedbu kako bi rad ostao usmjeren na poslovni cilj.",
    projects: "Pogledajte odabrane radove",
    contact: "Započnite razgovor",
    imageAlt: "Urednički nacrt koji povezuje strategiju i implementaciju",
    introHeading: "Moj rad povezuje strategiju i provedbu.",
    intro: ["Radio sam u tehničkom SEO-u, razvoju u Webflowu, vođenju projekata i radu s klijentima. To mi iskustvo pomaže povezati razgovore o proizvodu, zadatke za razvojne timove, smjernice za sadržaj, migracije i izvještavanje.", "Uvide iz pretraživanja pretvaram u preporuke koje timovi mogu provesti, uz jasnu strukturu stranice i odgovornost za sljedeći korak. Želim da plan bude koristan u samom radu, a ne samo u prezentaciji."],
    experienceKicker: "Iskustvo",
    experienceHeading: "Moje iskustvo u timovima za pretraživanje, proizvod i izvedbu.",
    closeKicker: "Odabrani radovi",
    closeHeading: "Istražite projekte na kojima sam radio u različitim timovima i industrijama.",
    closeCta: "Istražite projekte",
  },
} as const;

export default function GrowthAbout({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const localized = (path: string) => locale === "hr" ? `/hr${path}` : path;
  const experienceList = locale === "hr" ? hrExperiences : experiences;
  const related = locale === "hr" ? [
    { href: "/hr/projects/", title: "Projekti", description: "Pogledajte kako se tehnički SEO, sadržaj i isporuka povezuju u stvarnom radu." },
    { href: "/hr/post/website-migration-seo/", title: "SEO migracija web-stranice", description: "Praktičan vodič za prijenos pretraživačke vrijednosti kroz redizajn ili novo lansiranje." },
    { href: "/hr/post/generative-engine-optimization/", title: "Generativna optimizacija", description: "Što se u AI pretrazi mijenja, a koji SEO temelji i dalje vrijede." },
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
