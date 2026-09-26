import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { blogPost, site } from "@/lib/siteData";

export default function GrowthBlogPost() {
  return <GrowthLayout locale="en">
    <PageMeta title="The Illusion of AI Productivity | Koupoli" description="A Koupoli field note on AI productivity, shortcuts, and the human work required to make complex projects real." />
    <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{blogPost.date}</p><h1>{blogPost.title}</h1><p>{blogPost.excerpt}</p></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={site.articleImage} alt="Abstract illustration for AI productivity" /><div className="growth-rich-text"><p>Welcome to the future, where artificial intelligence promises to make us all faster, smarter, and, if the marketing is to be believed, <strong>better looking</strong>. But before you hand over your next big project to your favourite chatbot, let's take a stroll through the real impact of AI on productivity, creativity, and the human ability to get stuck in an infinite loop of “where do I even start?”</p>{blogPost.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section><h2>The Guide to Surviving the AI Revolution</h2><p>So, what's the secret to thriving in an AI-powered world? Here's a survival guide:</p><ul>{blogPost.guide.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Conclusion: The Infinite AI</h2>{blogPost.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></div><div className="growth-article-return"><Link className="growth-text-link" href="/blog">Back to field notes</Link></div></div></section></article>
  </GrowthLayout>;
}
