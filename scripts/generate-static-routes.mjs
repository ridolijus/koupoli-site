import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://koupoli.com";
const output = path.resolve("dist/public");
const organizationId = `${siteUrl}/#organization`;
const personId = `${siteUrl}/about/#karlo-ridan`;
const websiteId = `${siteUrl}/#website`;

const routes = [
  { route: "/", alternate: "/hr/", title: "Koupoli | Organic Growth, SEO and AI Search", description: "Koupoli helps ambitious teams launch and grow organically through SEO strategy, technical execution, and AI search readiness.", lang: "en", type: "home" },
  { route: "/hr/", alternate: "/", title: "Koupoli | SEO, organski rast i AI pretraga", description: "Koupoli pomaže ambicioznim timovima rasti organski uz SEO strategiju, tehničku izvedbu i spremnost za AI pretragu.", lang: "hr", type: "homeHr" },
  { route: "/about/", alternate: "/hr/about/", title: "About Karlo Ridan | Koupoli", description: "Meet Karlo Ridan, the SEO and organic growth specialist behind Koupoli. Strategy, technical SEO, content systems, and implementation.", lang: "en", type: "about" },
  { route: "/hr/about/", alternate: "/about/", title: "O Karlu Ridanu | Koupoli", description: "Upoznajte Karla Ridana, stručnjaka za SEO i organski rast koji stoji iza Koupolija. Strategija, tehnički SEO, sustavi sadržaja i implementacija.", lang: "hr", type: "about" },
  { route: "/projects/", alternate: "/hr/projects/", title: "SEO and Organic Growth Projects | Koupoli", description: "Selected Koupoli projects across technical SEO, content strategy, Webflow development, migration support, and organic growth.", lang: "en", type: "projects" },
  { route: "/hr/projects/", alternate: "/projects/", title: "Projekti SEO-a i organskog rasta | Koupoli", description: "Odabrani Koupoli projekti iz područja tehničkog SEO-a, strategije sadržaja, razvoja u Webflowu, podrške pri migracijama i organskog rasta.", lang: "hr", type: "projects" },
  { route: "/blog/", alternate: "/hr/blog/", title: "Organic Growth Notes | Koupoli", description: "Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth.", lang: "en", type: "blog", articleTitle: "The Illusion of AI Productivity: Fast Fixes, But Real Projects Leave Most People Stuck", articleRoute: "/post/the-illusion-of-ai-productivity/" },
  { route: "/hr/blog/", alternate: "/blog/", title: "Bilješke o organskom rastu | Koupoli", description: "Koupolijeve terenske bilješke o SEO-u, pretraživanju pomoću umjetne inteligencije, tehničkoj implementaciji, sustavima sadržaja i organskom rastu.", lang: "hr", type: "blog", articleTitle: "Iluzija produktivnosti uz AI: Brza rješenja, ali stvarni projekti većinu ljudi ostavljaju zaglavljenima", articleRoute: "/hr/post/the-illusion-of-ai-productivity/" },
  { route: "/post/the-illusion-of-ai-productivity/", alternate: "/hr/post/the-illusion-of-ai-productivity/", title: "The Illusion of AI Productivity | Koupoli", description: "A Koupoli field note on AI productivity, shortcuts, and the human work required to make complex projects real.", lang: "en", type: "article", articleTitle: "The Illusion of AI Productivity: Fast Fixes, But Real Projects Leave Most People Stuck" },
  { route: "/hr/post/the-illusion-of-ai-productivity/", alternate: "/post/the-illusion-of-ai-productivity/", title: "Iluzija produktivnosti uz AI | Koupoli", description: "Koupolijeva terenska bilješka o produktivnosti uz AI, prečacima i ljudskom radu potrebnom da se složeni projekti doista ostvare.", lang: "hr", type: "article", articleTitle: "Iluzija produktivnosti uz AI: Brza rješenja, ali stvarni projekti većinu ljudi ostavljaju zaglavljenima" },
  { route: "/contact/", alternate: "/hr/contact/", title: "Start a Conversation | Koupoli", description: "Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation.", lang: "en", type: "contact" },
  { route: "/hr/contact/", alternate: "/contact/", title: "Započnite razgovor | Koupoli", description: "Recite Koupoliju nešto o svojem poslovanju, cilju organskog rasta i trenutačnoj prepreci kako biste započeli usmjeren razgovor o SEO-u i pretraživanju uz pomoć umjetne inteligencije.", lang: "hr", type: "contact" },
];

const englishFaq = [
  ["Is AI SEO different from SEO?", "AI SEO, generative engine optimization, and AI search visibility describe how a brand appears in AI-generated answers. They do not replace SEO fundamentals. Crawlability, indexation, information architecture, accurate entities, and genuinely useful pages still create the foundation."],
  ["What is included in an organic launch consultation?", "The consultation turns commercial context into a usable organic plan: market and search opportunity, positioning input, technical and content risks, priorities, ownership, and a practical 90-day sequence for the work ahead."],
  ["When should technical SEO be involved?", "Before a new site, redesign, migration, or content push goes live. Early technical input helps avoid pages that cannot be crawled or indexed properly, weak site structure, lost redirects, slow templates, and missing structured data."],
  ["Can Koupoli support a Webflow site or migration?", "Yes. The operational work can cover site architecture, technical SEO audits, implementation tickets, Webflow delivery, redirects, indexation, performance, and the content structure that needs to survive a migration or relaunch."],
  ["Do you work with teams outside Croatia?", "Yes. Koupoli works remotely with English-speaking teams across Europe and the United States, particularly where a launch, repositioning, or growth stage needs a clear connection between strategy and technical delivery."],
  ["How is AI search visibility measured?", "The starting point is not a vanity mention count. Measurement combines qualified search demand, technical health, brand and entity coverage, visibility for priority questions, citations where they matter, and the business signals the work is expected to influence."],
];

const croatianFaq = [
  ["Je li AI SEO drugačiji od SEO-a?", "AI SEO, generative engine optimization i vidljivost u AI pretrazi opisuju kako se brend pojavljuje u odgovorima generiranim umjetnom inteligencijom. Ne zamjenjuju SEO temelje. Crawlabilnost, indeksiranje, informacijska arhitektura, točni entiteti i stvarno koristan sadržaj i dalje stvaraju osnovu."],
  ["Što uključuju konzultacije za organsko lansiranje?", "Konzultacije pretvaraju poslovni kontekst u upotrebljiv organski plan: tržišne prilike i potražnju u pretrazi, ulaz za pozicioniranje, tehničke i sadržajne rizike, prioritete, vlasništvo i praktičan raspored rada za sljedećih 90 dana."],
  ["Kada treba uključiti tehnički SEO?", "Prije lansiranja nove stranice, redizajna, migracije ili većeg sadržajnog projekta. Rani tehnički rad sprječava česte probleme: stranice koje se ne mogu ispravno crawlat ili indeksirati, slabu strukturu, izgubljene redirekcije, spore predloške i nedostatak strukturiranih podataka."],
  ["Može li Koupoli podržati Webflow stranicu ili migraciju?", "Da. Operativni rad može pokriti arhitekturu stranice, tehničke SEO audite, zadatke za implementaciju, Webflow izvedbu, redirekcije, indeksiranje, brzinu i strukturu sadržaja koja treba preživjeti migraciju ili ponovno lansiranje."],
  ["Radite li s timovima izvan Hrvatske?", "Da. Koupoli radi na daljinu s timovima koji govore engleski diljem Europe i Sjedinjenih Država, posebno kada lansiranje, repozicioniranje ili faza rasta traži jasnu vezu između strategije i tehničke izvedbe."],
  ["Kako se mjeri vidljivost u AI pretrazi?", "Polazište nije samo broj spominjanja. Mjerenje povezuje kvalificiranu potražnju u pretrazi, tehničko zdravlje, pokrivenost brenda i entiteta, vidljivost za prioritetna pitanja, citate gdje su važni i poslovne signale na koje rad treba utjecati."],
];

const projects = [
  ["GemBet", "https://gem.bet/", "Writing optimized content, creating and implementing an SEO audit, developer testing, and user experience changes."],
  ["GemPartner", "https://gempartner.io/", "Webpage copy optimization and general SEO for an affiliate project."],
  ["Maxtreme Sports", "http://www.maxtremesports.com", "Optimization, blog, and social media posts."],
  ["Soldered Electronics", "https://soldered.com/", "On-page and off-page SEO, plus redesign and relaunch support for the new shop."],
  ["Top Betting Sites Singapore", "https://topbettingsites-sg.com/", "General SEO work from the ground up."],
  ["Ultralytics", "https://www.ultralytics.com/", "Webflow page development and SEO audit support."],
  ["Alfa Gradnja", "https://www.alfagradnja.hr/", "New website creation and optimization for a local business."],
  ["Parilica", "https://parilica.hr/izy/", "Landing page creation and optimization for an Izy Vape campaign."],
  ["ProgeCAD", "https://www.progecad.com.hr/", "SEO audit implementation and user experience support on WordPress."],
  ["CAD Global", "https://cadglobal.uk/", "SEO audit implementation and user experience support."],
  ["CAD4Africa", "https://cad4africa.co.za/", "SEO audit implementation and user experience support."],
  ["Thorns Underwear", "https://www.thornsunderwear.com/", "Web design improvements and paid social campaign support."],
];

function absolute(url) {
  return url.startsWith("http") ? url : `${siteUrl}${url}`;
}

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function breadcrumb(route, name) {
  const items = [{ "@type": "ListItem", position: 1, name: "Koupoli", item: siteUrl }];
  if (route !== "/") items.push({ "@type": "ListItem", position: 2, name, item: absolute(route) });
  return { "@type": "BreadcrumbList", "@id": `${absolute(route)}#breadcrumb`, itemListElement: items };
}

function organization() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "Koupoli",
    url: siteUrl,
    logo: absolute("/favicon-512.png"),
    image: absolute("/assets/koupoli-search-systems-infographic.webp"),
    description: "Koupoli provides organic growth consulting, technical SEO, and AI search operations for teams launching or growing in new markets.",
    founder: { "@id": personId },
    sameAs: ["https://www.linkedin.com/in/karlo-ri%C4%91an-2aa4a7217/"],
    areaServed: ["Europe", "United States"],
    knowsAbout: ["Search engine optimization", "Technical SEO", "AI SEO", "Organic growth", "Webflow"],
  };
}

function person() {
  return {
    "@type": "Person",
    "@id": personId,
    name: "Karlo Ridan",
    url: absolute("/about/"),
    image: absolute("/assets/karlo-profile.png"),
    jobTitle: "SEO and Organic Growth Specialist",
    worksFor: { "@id": organizationId },
    sameAs: ["https://www.linkedin.com/in/karlo-ri%C4%91an-2aa4a7217/"],
    knowsAbout: ["Technical SEO", "SEO strategy", "Organic growth", "Content systems", "Webflow"],
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: "Koupoli",
    url: siteUrl,
    publisher: { "@id": organizationId },
    inLanguage: ["en", "hr"],
  };
}

function page(route, title, description, lang, type = "WebPage") {
  return {
    "@type": type,
    "@id": `${absolute(route)}#webpage`,
    url: absolute(route),
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    breadcrumb: { "@id": `${absolute(route)}#breadcrumb` },
  };
}

function faqPage(route, title, description, lang, entries) {
  return {
    ...page(route, title, description, lang, "FAQPage"),
    mainEntity: entries.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

function offerCatalog(lang) {
  const offers = lang === "hr"
    ? [
      ["Konzultacije za organsko lansiranje", "Savjetodavni angažman koji povezuje tržišnu priliku, pozicioniranje, tehničke i sadržajne rizike te praktičan plan za 90 dana."],
      ["SEO i AI Search Operations", "Kontinuirana tehnička SEO i sadržajna izvedba, od audita i implementacije do arhitekture, indexiranja i praćenja AI vidljivosti."],
    ]
    : [
      ["Organic Launch Consultation", "An advisory engagement that connects market opportunity, positioning, technical and content risks, and a practical 90-day plan."],
      ["SEO & AI Search Operations", "Ongoing technical SEO and search-content execution, from audits and implementation through architecture, indexation, and AI-search visibility tracking."],
    ];
  return {
    "@type": "OfferCatalog",
    "@id": `${siteUrl}/#offer-catalog-${lang}`,
    name: lang === "hr" ? "Koupoli usluge" : "Koupoli offers",
    itemListElement: offers.map(([name, description], index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name,
        description,
        provider: { "@id": organizationId },
        areaServed: ["Europe", "United States"],
      },
    })),
  };
}

function schemaFor(routeData) {
  const graph = [organization(), person(), website(), breadcrumb(routeData.route, routeData.title)];
  const { route, title, description, lang, type } = routeData;

  if (type === "home" || type === "homeHr") {
    graph.push(faqPage(route, title, description, lang, lang === "hr" ? croatianFaq : englishFaq), offerCatalog(lang));
  } else if (type === "about") {
    graph.push({ ...page(route, title, description, lang, "AboutPage"), mainEntity: { "@id": personId } });
  } else if (type === "projects") {
    graph.push({
      ...page(route, title, description, lang, "CollectionPage"),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map(([name, url, itemDescription], index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@type": "Thing", name, url, description: itemDescription },
        })),
      },
    });
  } else if (type === "blog") {
    graph.push({
      ...page(route, title, description, lang, "CollectionPage"),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: 1,
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          item: { "@type": "BlogPosting", headline: routeData.articleTitle, url: absolute(routeData.articleRoute), datePublished: "2025-06-20T00:00:00+02:00", author: { "@id": personId }, inLanguage: lang },
        }],
      },
    });
  } else if (type === "article") {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${absolute(route)}#article`,
      mainEntityOfPage: { "@id": `${absolute(route)}#webpage` },
      url: absolute(route),
      headline: routeData.articleTitle,
      description,
      image: absolute("/assets/ai-productivity-article.webp"),
      datePublished: "2025-06-20T00:00:00+02:00",
      author: { "@id": personId },
      publisher: { "@id": organizationId },
      inLanguage: lang,
    }, page(route, title, description, lang));
  } else if (type === "contact") {
    graph.push({ ...page(route, title, description, lang, "ContactPage"), mainEntity: { "@id": organizationId } });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function socialImage(type) {
  if (type === "about") return absolute("/assets/koupoli-about-method-infographic.webp");
  if (type === "projects") return absolute("/assets/koupoli-project-evidence-infographic.webp");
  if (type === "article") return absolute("/assets/ai-productivity-article.webp");
  return absolute("/assets/koupoli-search-systems-infographic.webp");
}

function pageHead(routeData, canonical) {
  const image = socialImage(routeData.type);
  const locale = routeData.lang === "hr" ? "hr_HR" : "en_US";
  const englishUrl = routeData.lang === "en" ? canonical : absolute(routeData.alternate);
  const croatianUrl = routeData.lang === "hr" ? canonical : absolute(routeData.alternate);
  const alternate = `\n    <link rel="alternate" hreflang="en" href="${englishUrl}" />\n    <link rel="alternate" hreflang="hr" href="${croatianUrl}" />\n    <link rel="alternate" hreflang="x-default" href="${englishUrl}" />`;
  const articleMeta = routeData.type === "article" ? '\n    <meta property="article:published_time" content="2025-06-20T00:00:00+02:00" />' : "";
  return `<link rel="canonical" href="${canonical}" />${alternate}\n    <meta property="og:type" content="${routeData.type === "article" ? "article" : "website"}" />\n    <meta property="og:site_name" content="Koupoli" />\n    <meta property="og:locale" content="${locale}" />\n    <meta property="og:url" content="${canonical}" />\n    <meta property="og:title" content="${escapeAttribute(routeData.title)}" />\n    <meta property="og:description" content="${escapeAttribute(routeData.description)}" />\n    <meta property="og:image" content="${image}" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${escapeAttribute(routeData.title)}" />\n    <meta name="twitter:description" content="${escapeAttribute(routeData.description)}" />\n    <meta name="twitter:image" content="${image}" />${articleMeta}\n    <script type="application/ld+json">${JSON.stringify(schemaFor(routeData)).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026")}</script>`;
}

function createPage(routeData, destination) {
  const source = fs.readFileSync(destination, "utf8");
  const canonical = absolute(routeData.route);
  return source
    .replace('<html lang="en">', `<html lang="${routeData.lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${routeData.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttribute(routeData.description)}" />\n    ${pageHead(routeData, canonical)}`);
}

for (const routeData of routes) {
  const destination = routeData.route === "/" ? path.join(output, "index.html") : path.join(output, routeData.route, "index.html");
  fs.writeFileSync(destination, createPage(routeData, destination));
}

fs.writeFileSync(path.join(output, "404.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Not found</title></head><body><h1>Page not found</h1></body></html>');
