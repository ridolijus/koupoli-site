import { Link } from "wouter";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
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
};

export default function GrowthBlogPost({ locale = "en" }: { locale?: Locale }) {
  const post = locale === "hr" ? hrBlogPost : blogPost;
  const copy = locale === "hr" ? hrArticleCopy : englishCopy;
  const blogPath = locale === "hr" ? "/hr/blog/" : "/blog/";

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.metaTitle} description={copy.metaDescription} lang={locale} />
    <article className="growth-article-page"><header className="growth-article-header"><div className="growth-narrow"><p className="growth-kicker">{post.date}</p><h1>{post.title}</h1><p>{post.excerpt}</p></div></header><section className="growth-article-body"><div className="growth-narrow"><img className="growth-article-image" src={site.articleImage} alt={copy.imageAlt} /><div className="growth-rich-text"><p>{copy.welcomeBefore}<strong>{copy.welcomeEmphasis}</strong>{copy.welcomeAfter}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section><h2>{copy.guideHeading}</h2><p>{copy.guideIntro}</p><ul>{post.guide.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>{copy.conclusionHeading}</h2>{post.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></div><div className="growth-article-return"><Link className="growth-text-link" href={blogPath}>{copy.returnLabel}</Link></div></div></section></article>
  </GrowthLayout>;
}
