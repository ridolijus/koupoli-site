import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { blogPost, site } from "@/lib/siteData";

const clientLogos = [
  ["Soldered", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b813f652c6c7a82afa4738_soldered-logo-new.svg"],
  ["GemBet", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b814fcca7b6d5e2d22da33_gembet_logo_wide.png"],
  ["Top Betting Sites", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b8156a2c1b7928944188f8_Logo-White-Lockup.webp"],
  ["Ultralytics", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b8161e66943b9892765d90_ultralytics_logo.svg"],
  ["Alfa Gradnja", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81a53960c34a8b1ab3996_alfa_gradnja_logo.png"],
  ["Parilica", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81a880fc0f9f66d8f2d62_parilica_logo.png"],
  ["CAD Global", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81ae1adcbf0cc7431fc1f_cad_global_logo.png"],
  ["Thorns", "https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81aeec2304902beb76c0c_thorns_logo.png"],
] as const;

const offerItems = [
  "SEO audit based on your KPIs and OKRs, deep technical, and competitor research.",
  "Content strategy that is not only keywords, but topical authority.",
  "Design and CTR analysis, focused on top to bottom funnel.",
  "Product-led growth strategies (PLG loops, user onboarding optimization).",
  "Transparent reporting and communication.",
  "Semantic maps, deep PAA layers, Google knowledge graph spots.",
  "Social presence through Reddit, comments and forums analysis and implementation.",
  "Schema additions across all content (supporting content and money pages).",
  "Help and insights on Mini Language Model training on specific niche content (advanced).",
];

export default function Home() {
  return <SiteLayout>
    <section className="home-hero webflow-glow">
      <div className="content-container hero-center">
        <h1>SEO Specialist and Organic Growth Consultant</h1>
        <p>I&apos;m Karlo, a passionate SEO and Webflow-er on a mission to share my stories and experiences. Join me on my journey as I shift through life&apos;s adventures and uncover hidden (or obvious) gems.</p>
        <div className="action-row"><Link className="primary-button" href="/projects">My Projects</Link><a className="secondary-button" href="#contact">Contact Me</a></div>
      </div>
    </section>

    <section className="client-rail" aria-label="Selected client logos"><div className="client-track">{[...clientLogos, ...clientLogos].map(([alt, src], index) => <img key={`${alt}-${index}`} src={src} alt={alt} />)}</div></section>

    <section className="standard-section"><div className="content-container section-split"><h2>Service</h2><div className="section-copy"><p>I&apos;m an <strong>SEO</strong> (Search engine optimization) and Organic Growth Specialist with deep <strong>Webflow</strong> development knowledge, highly optimized for Google. Wherever your site is made (WordPress, Squarespace, WiX, Webflow, etc), or if you need a <strong>brand new</strong> website, it would be 100% optimized to grab the deserved organic traffic!</p><p>On a second note, lately I&apos;m highly interested and been testing my own AI workflows, or as Guru&apos;s like to refer to: <em>&quot;USE THESE AI AGENTS TO SKYROCKET YOUR SCALING STARTUP TO 10m TODAY&quot;</em>.</p><a className="inline-link" href="#offer">Let&apos;s talk <strong>*OFFER*</strong></a></div></div></section>

    <section className="standard-section" id="offer"><div className="content-container section-split"><h2>Offer</h2><div className="section-copy"><p>How I combine Organic Growth and experience in one package?</p><p>After 8+ years in the IT space, starting in mechanical engineering, moving through team leadership and management, I&apos;ve carved my niche in organic growth, with SEO at the forefront. Over the past 4 years, I&apos;ve participated in a wide range of SEO projects: building sites from scratch, or stepping in when others hit a wall.</p><p><strong>What am I most proud of?</strong><br />Maintaining a <strong>30–40% CTR</strong> on <strong>60k</strong> clicks (still ongoing), and setting up a project that reached <strong>300k</strong> clicks with a <strong>10% CTR</strong> (still improving, even after my departure, good fundamentals last!). If you are interested in other projects, take a look <Link className="inline-link" href="/projects">here</Link>.</p><p><strong>What can You get in my consultation package?</strong></p><ul className="offer-list">{offerItems.map((item) => <li key={item}>{item}</li>)}</ul><p>If you&apos;re interested in increasing your personal or business growth, <a className="inline-link" href="#contact">let&apos;s talk</a>. I offer free first consultation and advice, and I&apos;m open to taking on a couple more projects.</p></div></div></section>

    <section className="standard-section blog-home-section"><div className="content-container section-split"><h2>Blogs (my brain dump)</h2><article className="home-blog-feature"><div><p className="blog-date">{blogPost.date}</p><Link href="/post/the-illusion-of-ai-productivity"><h3>{blogPost.title}</h3></Link><p>{blogPost.excerpt}</p><Link className="inline-link" href="/post/the-illusion-of-ai-productivity">Read blog</Link></div><Link href="/post/the-illusion-of-ai-productivity" className="blog-thumbnail"><img src={site.articleThumbnail} alt="The Illusion of AI Productivity article" /></Link></article></div></section>
  </SiteLayout>;
}
