import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { blogPost } from "@/lib/siteData";

export default function BlogPost() {
  return (
    <SiteLayout>
      <article className="article-page">
        <header className="article-header"><div className="shell article-header-inner"><Link className="back-link" href="/blog"><ArrowLeft size={15} /> Back to notes</Link><p className="eyebrow"><span>{blogPost.date}</span></p><h1>{blogPost.title}</h1><p className="article-dek">{blogPost.excerpt}</p><div className="article-rule" /></div></header>
        <div className="shell article-layout"><aside className="article-aside"><p>Field note</p><span>01</span><div><a href="#contact">Talk growth <ArrowUpRight size={13} /></a></div></aside><div className="article-content"><p className="article-lead">Welcome to the future, where artificial intelligence promises to make us all faster, smarter, and, if the marketing is to be believed, <strong>better looking.</strong> But before you hand over your next big project to your favourite chatbot, let’s take a stroll through the real impact of AI on productivity, creativity, and the human ability to get stuck in an infinite loop of “where do I even start?”</p>{blogPost.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section><h2>The Guide to Surviving the AI Revolution</h2><p>So, what’s the secret to thriving in an AI-powered world? Here’s a survival guide:</p><ol className="article-list">{blogPost.guide.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section><section><h2>Conclusion (classic AI bot end of article): The Infinite AI</h2>{blogPost.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section><section className="more-blogs"><p className="eyebrow"><span>More blogs</span></p><h2>No items found.</h2></section></div></div>
      </article>
    </SiteLayout>
  );
}
