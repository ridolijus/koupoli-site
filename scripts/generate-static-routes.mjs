import fs from "node:fs";
import path from "node:path";

const output = path.resolve("dist/public");
const source = fs.readFileSync(path.join(output, "index.html"), "utf8");
const routes = [
  ["/", "Koupoli | Organic Growth, SEO and AI Search", "Koupoli helps ambitious teams launch and grow organically through SEO strategy, technical execution, and AI search readiness.", "en"],
  ["/hr/", "Koupoli | SEO, organski rast i AI pretraga", "Koupoli pomaže ambicioznim timovima rasti organski uz SEO strategiju, tehničku izvedbu i spremnost za AI pretragu.", "hr"],
  ["/about/", "About Karlo Ridan | Koupoli", "Meet Karlo Ridan, the SEO and organic growth specialist behind Koupoli. Strategy, technical SEO, content systems, and implementation.", "en"],
  ["/projects/", "SEO and Organic Growth Projects | Koupoli", "Selected Koupoli projects across technical SEO, content strategy, Webflow development, migration support, and organic growth.", "en"],
  ["/blog/", "Organic Growth Notes | Koupoli", "Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth.", "en"],
  ["/post/the-illusion-of-ai-productivity/", "The Illusion of AI Productivity | Koupoli", "A Koupoli field note on AI productivity, shortcuts, and the human work required to make complex projects real.", "en"],
  ["/contact/", "Start a Conversation | Koupoli", "Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation.", "en"],
];

function createPage(route, title, description, lang) {
  const canonical = `https://koupoli.com${route}`;
  return source
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />\n    <link rel="canonical" href="${canonical}" />`);
}

for (const [route, title, description, lang] of routes) {
  const destination = route === "/" ? path.join(output, "index.html") : path.join(output, route, "index.html");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, createPage(route, title, description, lang));
}

fs.writeFileSync(path.join(output, "404.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting</title><script>const route=window.location.pathname;window.location.replace("/?p="+encodeURIComponent(route+window.location.search+window.location.hash));</script></head><body></body></html>');
