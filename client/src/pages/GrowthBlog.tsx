import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { hrBlogPost } from "@/lib/hrContent";
import { blogPost, site } from "@/lib/siteData";

type Locale = "en" | "hr";

const copies = {
  en: {
    title: "Organic Growth Notes | Koupoli",
    description: "Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth.",
    kicker: "Field notes",
    heading: "Clear thinking for search, content, and the work between them.",
    lead: "Notes from the practice of building durable organic visibility without mistaking noise for progress.",
    cta: "Read the article",
    imageAlt: "Abstract illustration for The Illusion of AI Productivity",
  },
  hr: {
    title: "Bilješke o organskom rastu | Koupoli",
    description: "Koupolijeve terenske bilješke o SEO-u, pretraživanju pomoću umjetne inteligencije, tehničkoj implementaciji, sustavima sadržaja i organskom rastu.",
    kicker: "Terenske bilješke",
    heading: "Jasno promišljanje o pretraživanju, sadržaju i radu koji ih povezuje.",
    lead: "Bilješke iz prakse izgradnje dugoročne organske vidljivosti bez brkanja buke s napretkom.",
    cta: "Pročitajte članak",
    imageAlt: "Apstraktna ilustracija za članak Iluzija produktivnosti uz AI",
  },
} as const;

export default function GrowthBlog({ locale = "en" }: { locale?: Locale }) {
  const copy = copies[locale];
  const post = locale === "hr" ? hrBlogPost : blogPost;
  const articlePath = locale === "hr" ? "/hr/post/the-illusion-of-ai-productivity/" : "/post/the-illusion-of-ai-productivity/";

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-page-hero growth-blog-page-hero"><div className="growth-container growth-blog-hero-copy"><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p></div></section>
    <section className="growth-blog-page-section"><div className="growth-container"><article className="growth-blog-feature"><Link href={articlePath} className="growth-blog-image"><img src={site.articleThumbnail} alt={copy.imageAlt} /></Link><div><p>{post.date}</p><h2><Link href={articlePath}>{post.title}</Link></h2><span>{post.excerpt}</span><Link className="growth-text-link" href={articlePath}>{copy.cta}</Link></div></article></div></section>
  </GrowthLayout>;
}
