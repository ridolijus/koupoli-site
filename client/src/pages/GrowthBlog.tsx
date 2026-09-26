import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { blogPost, site } from "@/lib/siteData";

export default function GrowthBlog() {
  return <GrowthLayout locale="en">
    <PageMeta title="Organic Growth Notes | Koupoli" description="Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth." />
    <section className="growth-page-hero growth-blog-page-hero"><div className="growth-container growth-blog-hero-copy"><p className="growth-kicker">Field notes</p><h1>Clear thinking for search, content, and the work between them.</h1><p>Notes from the practice of building durable organic visibility without mistaking noise for progress.</p></div></section>
    <section className="growth-blog-page-section"><div className="growth-container"><article className="growth-blog-feature"><Link href="/post/the-illusion-of-ai-productivity" className="growth-blog-image"><img src={site.articleThumbnail} alt="Abstract illustration for The Illusion of AI Productivity" /></Link><div><p>{blogPost.date}</p><h2><Link href="/post/the-illusion-of-ai-productivity">{blogPost.title}</Link></h2><span>{blogPost.excerpt}</span><Link className="growth-text-link" href="/post/the-illusion-of-ai-productivity">Read the article</Link></div></article></div></section>
  </GrowthLayout>;
}
