import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { editorialNotes, getEditorialNote } from "@/lib/editorialNotes";
import { getGlossaryGuide, type GlossaryGuideKey } from "@/lib/glossaryGuides";
import { hrArticleCopy, hrBlogPost } from "@/lib/hrContent";
import { blogPost, site } from "@/lib/siteData";

type Locale = "en" | "hr";

type UpdatedContent = { date: string; iso: string };

const englishCopy = {
  metaTitle: "The Illusion of AI Productivity | Koupoli",
  metaDescription: "A Koupoli field note on AI productivity, shortcuts, and the human work required to make complex projects real.",
  imageAlt: "Abstract illustration for AI productivity",
  welcomeBefore: "Welcome to the future, where artificial intelligence promises to make us all faster, smarter, and, if the marketing is to be believed, ",
  welcomeEmphasis: "better looking",
  welcomeAfter: ". But before you hand over your next big project to your favourite chatbot, let's take a stroll through the real impact of AI on productivity, creativity, and the human ability to get stuck in an infinite loop of where do I even start?",
  guideHeading: "The Guide to Surviving the AI Revolution",
  guideIntro: "So, what's the secret to thriving in an AI-powered world? Here's a survival guide:",
  conclusionHeading: "Conclusion: The Infinite AI",
  returnLabel: "Back to field notes",
  sourceLabel: "Sources",
  contactLabel: "Discuss the next move",
};

const croatianCopy = {
  returnLabel: "Natrag na terenske bilješke",
  sourceLabel: "Izvori",
  contactLabel: "Razgovarajte o sljedećem potezu",
};

const guideByNote: Record<string, GlossaryGuideKey> = {
  "ai-search-visibility": "ai-search-visibility",
  "website-migration-seo": "technical-seo",
  "generative-engine-optimization": "generative-engine-optimization",
};

function localizedPath(locale: Locale, path: string) {
  return locale === "hr" ? `/hr${path}` : path;
}

function Byline({ locale, updated }: { locale: Locale; updated?: UpdatedContent }) {
  const authorPath = locale === "hr" ? "/hr/about/" : "/about/";
  const copy = locale === "hr"
    ? { author: "Autor", role: "stručnjak za SEO i organski rast", updated: "Zadnja sadržajna izmjena" }
    : { author: "Written by", role: "SEO and organic-growth specialist", updated: "Last materially updated" };

  return <p className="growth-byline"><span>{copy.author}: <Link href={authorPath}>Karlo Ridan</Link>, {copy.role}</span>{updated && <time dateTime={updated.iso}>{copy.updated}: {updated.date}</time>}</p>;
}

export default function GrowthBlogPost({ locale = "en", slug }: { locale?: Locale; slug?: string }) {
  const blogPath = locale === "hr" ? "/hr/blog/" : "/blog/";
  const contactPath = locale === "hr" ? "/hr/contact/" : "/contact/";
  const note = slug ? getEditorialNote(locale, slug) : undefined;
  const glossaryGuide = slug && guideByNote[slug] ? getGlossaryGuide(locale, guideByNote[slug]) : undefined;
  const migrationCaseStudy = slug === "website-migration-seo"
    ? locale === "hr"
      ? { href: "/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/", title: "Studija slučaja SEO migracije", description: "Anonimizirani zapis o koordinaciji prelaska na web-strukturu za više tržišta." }
      : { href: "/case-studies/multi-market-website-migration/", title: "Website migration case study", description: "An anonymised record of coordinating a move to a multi-market site structure." }
    : undefined;
  const noteLinks = slug ? [
    ...(glossaryGuide ? [{ href: glossaryGuide.path, title: glossaryGuide.title, description: glossaryGuide.lead }] : []),
    ...(migrationCaseStudy ? [migrationCaseStudy] : []),
    ...editorialNotes[locale].filter((entry) => entry.slug !== slug).slice(0, 1).map((entry) => ({ href: localizedPath(locale, `/post/${entry.slug}/`), title: entry.title, description: entry.excerpt })),
  ] : [];
  const serviceLink = locale === "hr"
    ? { href: "/hr/usluge/seo-optimizacija/", title: "SEO optimizacija", description: "Tehnički SEO, sadržaj i prioriteti za timove koji su odabrali smjer i trebaju ukloniti sljedeću operativnu prepreku." }
    : { href: "/services/technical-seo-ai-search/", title: "Technical SEO services", description: "Technical SEO and AI-search operations for teams with a clear direction that need to remove the next operational constraint." };
  const legacyLinks = locale === "hr" ? [
    { href: "/hr/post/ai-search-visibility/", title: "Vidljivost u AI pretrazi", description: "Praktičan okvir za mjerenje signala koji su važni prije optimizacije." },
    { href: "/hr/projects/", title: "Projekti", description: "Pogledajte tehnički SEO, sadržaj i razvoj kroz stvaran rad s klijentima." },
    serviceLink,
  ] : [
    { href: "/post/ai-search-visibility/", title: "AI Search Visibility", description: "A practical measurement framework for the signals that matter before optimisation." },
    { href: "/projects/", title: "Projects", description: "See technical SEO, content, and development through live client work." },
    serviceLink,
  ];

  if (note) {
    const copy = locale === "hr" ? croatianCopy : englishCopy;
    return <GrowthLayout locale={locale}>
      <PageMeta title={note.metaTitle} description={note.metaDescription} lang={locale} />
      <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{note.date}</p><h1>{note.title}</h1><p>{note.excerpt}</p><Byline locale={locale} updated={note.updated} /></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={note.image} alt={note.imageAlt} />{note.resource && <p>{note.resource.description} <a className="growth-text-link" href={note.resource.href} download>{note.resource.label}</a></p>}<div className="growth-rich-text">{note.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<section className="growth-article-sources"><h2>{copy.sourceLabel}</h2><ul>{note.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section></div><ContextLinks locale={locale} items={[...noteLinks, serviceLink]} /><div className="growth-article-return"><Link className="growth-text-link" href={blogPath}>{copy.returnLabel}</Link><Link className="growth-text-link" href={contactPath}>{copy.contactLabel}</Link></div></div></section></article>
    </GrowthLayout>;
  }

  const post = locale === "hr" ? hrBlogPost : blogPost;
  const copy = locale === "hr" ? hrArticleCopy : englishCopy;

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.metaTitle} description={copy.metaDescription} lang={locale} />
    <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{post.date}</p><h1>{post.title}</h1><p>{post.excerpt}</p><Byline locale={locale} /></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={site.articleImage} alt={copy.imageAlt} /><div className="growth-rich-text"><p>{copy.welcomeBefore}<strong>{copy.welcomeEmphasis}</strong>{copy.welcomeAfter}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section><h2>{copy.guideHeading}</h2><p>{copy.guideIntro}</p><ul>{post.guide.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>{copy.conclusionHeading}</h2>{post.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></div><ContextLinks locale={locale} items={legacyLinks} /><div className="growth-article-return"><Link className="growth-text-link" href={blogPath}>{copy.returnLabel}</Link></div></div></section></article>
  </GrowthLayout>;
}
