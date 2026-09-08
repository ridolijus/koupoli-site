import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { blogPost } from "@/lib/siteData";

export default function Blog() {
  return (
    <SiteLayout>
      <section className="inner-hero blog-hero">
        <div className="blog-disc disc-a" /><div className="blog-disc disc-b" />
        <div className="shell inner-hero-content">
          <p className="eyebrow"><span>Notes</span> / 03</p>
          <h1>Read the latest SEO,<br />Webflow, and <em>AI blogs.</em></h1>
          <div className="inner-hero-bottom"><p>Awesome News curated in a single place.</p><p className="post-count">01<br />published note</p></div>
        </div>
      </section>
      <section className="blog-index-section"><div className="shell"><p className="eyebrow blog-index-label"><span>Latest</span> / 2025</p><article className="blog-index-card"><div className="post-index"><Sparkles size={15} /><span>{blogPost.date}</span></div><h2>{blogPost.title}</h2><p>{blogPost.excerpt}</p><Link href="/post/the-illusion-of-ai-productivity" className="text-link">Read the note <ArrowUpRight size={16} /></Link></article></div></section>
    </SiteLayout>
  );
}
