import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { blogPost, site } from "@/lib/siteData";

const offerItems = [
  "SEO audit based on your KPIs and OKRs, deep technical and competitor research.",
  "Content strategy that is not only keywords, but topical authority.",
  "Design and CTR analysis, focused on the top-to-bottom funnel.",
  "Product-led growth strategies: PLG loops and user onboarding optimisation.",
  "Transparent reporting and communication.",
  "Semantic maps, deep PAA layers, and Google Knowledge Graph spots.",
  "Social presence through Reddit, comments, and forum analysis and implementation.",
  "Schema additions across all content, supporting content, and money pages.",
  "Help and insights on Mini Language Model training on specific niche content.",
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="home-hero">
        <img src={site.heroImage} alt="Abstract composition representing organic growth" className="hero-art" />
        <div className="hero-scrim" />
        <div className="shell hero-content">
          <p className="eyebrow hero-eyebrow"><span>Independent consultant</span><i /> Croatia / Worldwide</p>
          <h1>SEO Specialist and<br /><em>Organic Growth</em> Consultant</h1>
          <div className="hero-lower">
            <p>I’m Karlo, a passionate SEO and Webflow-er on a mission to share my stories and experiences. Join me on my journey as I shift through life’s adventures and uncover hidden—or obvious—gems.</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/projects">Explore projects <ArrowUpRight size={16} /></Link>
              <a className="button button-ghost" href="#contact">Let’s talk <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore <span /></div>
      </section>

      <section className="service-section">
        <div className="shell split-heading">
          <div><p className="eyebrow"><span>01</span> Service</p><h2>Search strategy.<br /><em>Human delivery.</em></h2></div>
          <div className="service-copy">
            <p>I’m an <strong>SEO</strong> and Organic Growth Specialist with deep <strong>Webflow</strong> development knowledge, highly optimised for Google. Wherever your site is made—WordPress, Squarespace, Wix, Webflow, or beyond—or if you need a brand-new website, it will be structured to earn the organic traffic it deserves.</p>
            <p>Alongside growth work, I’m testing practical AI workflows: less “agents to 10m today,” more focused systems that make ambitious work move.</p>
            <a href="#offer" className="text-link">See what’s included <ArrowDownRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="offer-section" id="offer">
        <div className="shell offer-top"><p className="eyebrow"><span>02</span> The offer</p><span className="micro-copy">A deliberate mix of technical depth and momentum.</span></div>
        <div className="shell offer-grid">
          <div className="offer-intro"><h2>Good growth<br />is <em>built.</em></h2><p>After 8+ years in the IT space—from mechanical engineering through leadership and management—I’ve carved out a niche in organic growth, with SEO at its centre.</p><p>Over the past four years, I’ve built sites from scratch and joined projects when others had hit a wall.</p></div>
          <div className="offer-metrics">
            <div><strong>30–40%</strong><span>CTR maintained on<br />60k clicks</span></div>
            <div><strong>300k</strong><span>Clicks generated at<br />a 10% CTR</span></div>
            <p>Still improving. Good fundamentals last.</p>
          </div>
        </div>
        <div className="shell inclusion-wrap"><h3>What you get in a consultation package</h3><ol className="inclusion-list">{offerItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol><p className="offer-closing">If you’re interested in increasing your personal or business growth, let’s talk. I offer a free first consultation and advice, and I’m open to taking on a couple more projects.</p></div>
      </section>

      <section className="home-project-cta">
        <div className="shell project-cta-inner"><div><p className="eyebrow"><span>Selected work</span></p><h2>Useful work.<br /><em>Measurable pull.</em></h2></div><Link href="/projects" className="round-link" aria-label="View all projects"><ArrowUpRight size={30} /></Link></div>
      </section>

      <section className="blog-preview-section">
        <div className="shell blog-preview-head"><div><p className="eyebrow"><span>03</span> Notes / my brain dump</p><h2>Ideas worth<br /><em>thinking through.</em></h2></div><Link href="/blog" className="text-link">All notes <ArrowUpRight size={15} /></Link></div>
        <div className="shell featured-post"><div className="post-index"><Sparkles size={15} /><span>{blogPost.date}</span></div><div><h3>{blogPost.title}</h3><p>{blogPost.excerpt}</p></div><Link href="/post/the-illusion-of-ai-productivity" className="post-arrow" aria-label="Read blog"><ArrowUpRight size={28} /></Link></div>
      </section>
    </SiteLayout>
  );
}
