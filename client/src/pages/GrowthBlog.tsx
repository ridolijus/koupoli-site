import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { editorialNotes } from "@/lib/editorialNotes";
import { hrBlogPost } from "@/lib/hrContent";
import { blogPost, site } from "@/lib/siteData";

type Locale = "en" | "hr";

type NoteCard = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

const copies = {
  en: {
    title: "Organic Growth Notes | Koupoli",
    description: "Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth.",
    kicker: "Field notes",
    heading: "Clear thinking for search, content, and the work between them.",
    lead: "Practical notes for teams building durable organic visibility without mistaking noise for progress.",
    cta: "Read the article",
    legacyLabel: "From the archive",
  },
  hr: {
    title: "Bilješke o organskom rastu | Koupoli",
    description: "Koupolijeve terenske bilješke o SEO-u, pretraživanju pomoću umjetne inteligencije, tehničkoj implementaciji, sustavima sadržaja i organskom rastu.",
    kicker: "Terenske bilješke",
    heading: "Jasno promišljanje o pretraživanju, sadržaju i radu koji ih povezuje.",
    lead: "Praktične bilješke za timove koji grade dugoročnu organsku vidljivost bez brkanja buke s napretkom.",
    cta: "Pročitajte članak",
    legacyLabel: "Iz arhive",
  },
} as const;

export default function GrowthBlog({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const legacy = locale === "hr" ? hrBlogPost : blogPost;
  const notes: NoteCard[] = editorialNotes[locale];
  const prefix = locale === "hr" ? "/hr" : "";
  const legacyPath = `${prefix}/post/the-illusion-of-ai-productivity/`;

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-page-hero growth-blog-page-hero"><div className="growth-container growth-blog-hero-copy"><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p></div></section>
    <section className="growth-blog-page-section"><div className="growth-container"><div className="growth-note-grid">{notes.map((note) => <article className="growth-note-card" key={note.slug}><Link href={`${prefix}/post/${note.slug}/`} className="growth-note-image"><img src={note.image} alt={note.imageAlt} /></Link><p>{note.date}</p><h2><Link href={`${prefix}/post/${note.slug}/`}>{note.title}</Link></h2><span>{note.excerpt}</span><Link className="growth-text-link" href={`${prefix}/post/${note.slug}/`}>{copy.cta}</Link></article>)}</div><div className="growth-archive-note"><p>{copy.legacyLabel}</p><h2><Link href={legacyPath}>{legacy.title}</Link></h2><span>{legacy.excerpt}</span><Link className="growth-text-link" href={legacyPath}>{copy.cta}</Link></div></div></section>
  </GrowthLayout>;
}
