import { Link } from "wouter";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { editorialNotes, getEditorialNote } from "@/lib/editorialNotes";
import { getGlossaryGuide, type GlossaryGuideKey } from "@/lib/glossaryGuides";
import { hrArticleCopy, hrBlogPost } from "@/lib/hrContent";
import { blogPost, site } from "@/lib/siteData";

type Locale = "en" | "hr";

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
  contactLabel: "Plan an organic launch",
};

const croatianCopy = {
  returnLabel: "Natrag na terenske bilješke",
  sourceLabel: "Izvori",
  contactLabel: "Isplanirajte organsko lansiranje",
};

const guideByNote: Record<string, GlossaryGuideKey> = {
  "ai-search-visibility": "ai-search-visibility",
  "website-migration-seo": "technical-seo",
  "generative-engine-optimization": "generative-engine-optimization",
};

export default function GrowthBlogPost({ locale = "en", slug }: { locale?: Locale; slug?: string }) {
  const blogPath = locale === "hr" ? "/hr/blog/" : "/blog/";
  const contactPath = locale === "hr" ? "/hr/contact/" : "/contact/";
  const note = slug ? getEditorialNote(locale, slug) : undefined;
  const glossaryGuide = slug && guideByNote[slug] ? getGlossaryGuide(locale, guideByNote[slug]) : undefined;
  const noteLinks = slug ? [
    ...(glossaryGuide ? [{ href: glossaryGuide.path, title: glossaryGuide.title, description: glossaryGuide.lead }] : []),
    ...editorialNotes[locale].filter((entry) => entry.slug !== slug).slice(0, 1).map((entry) => ({ href: `/post/${entry.slug}/`, title: entry.title, description: entry.excerpt })),
  ] : [];
  const serviceLink = locale === "hr" ? { href: "/#offers", title: "SEO i AI Search Operations", description: "Kontinuirana tehnička SEO i sadržajna izvedba za timove kojima treba operativni napredak." } : { href: "/#offers", title: "SEO & AI Search Operations", description: "Ongoing technical SEO and content execution for teams that need operational progress." };
  const legacyLinks = locale === "hr" ? [
    { href: "/post/ai-search-visibility/", title: "Vidljivost u AI pretrazi", description: "Praktičan okvir za mjerenje signala koji su važni prije optimizacije." },
    { href: "/projects/", title: "Projekti", description: "Pogledajte tehnički SEO, sadržaj i razvoj kroz stvaran rad s klijentima." },
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
      <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{note.date}</p><h1>{note.title}</h1><p>{note.excerpt}</p></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={note.image} alt={note.imageAlt} /><div className="growth-rich-text">{note.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<section className="growth-article-sources"><h2>{copy.sourceLabel}</h2><ul>{note.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section></div><ContextLinks locale={locale} items={[...noteLinks, serviceLink]} /><div className="growth-article-return"><Link className="growth-text-link" href={blogPath}>{copy.returnLabel}</Link><Link className="growth-text-link" href={contactPath}>{copy.contactLabel}</Link></div></div></section></article>
    </GrowthLayout>;
  }

  const post = locale === "hr" ? hrBlogPost : blogPost;
  const copy = locale === "hr" ? hrArticleCopy : englishCopy;

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.metaTitle} description={copy.metaDescription} lang={locale} />
    <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{post.date}</p><h1>{post.title}</h1><p>{post.excerpt}</p></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={site.articleImage} alt={copy.imageAlt} /><div className="growth-rich-text"><p>{copy.welcomeBefore}<strong>{copy.welcomeEmphasis}</strong>{copy.welcomeAfter}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section><h2>{copy.guideHeading}</h2><p>{copy.guideIntro}</p><ul>{post.guide.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>{copy.conclusionHeading}</h2>{post.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></div><ContextLinks locale={locale} items={legacyLinks} /><div className="growth-article-return"><Link className="growth-text-link" href={blogPath}>{copy.returnLabel}</Link></div></div></section></article>
  </GrowthLayout>;
}
