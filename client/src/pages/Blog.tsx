import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { blogPost, site } from "@/lib/siteData";

export default function Blog() {
  return <SiteLayout><section className="page-hero webflow-glow"><div className="narrow-container centered-page-copy"><h1>Read The Latest SEO Webflow, and AI Blogs</h1><p>Awesome News curated in a single place.</p></div></section><section className="standard-section blog-index-section"><div className="content-container"><article className="vertical-blog-card"><Link className="vertical-blog-image" href="/post/the-illusion-of-ai-productivity"><img src={site.articleThumbnail} alt="The Illusion of AI Productivity" /></Link><div><p className="blog-date">{blogPost.date}</p><Link href="/post/the-illusion-of-ai-productivity"><h2>{blogPost.title}</h2></Link><p>{blogPost.excerpt}</p><Link className="inline-link" href="/post/the-illusion-of-ai-productivity">Read blog</Link></div></article></div></section></SiteLayout>;
}
