import fs from "node:fs";
import path from "node:path";

const output = path.resolve("dist/public");
const pages = [
  ["/", "FAQPage"],
  ["/hr/", "FAQPage"],
  ["/about/", "AboutPage"],
  ["/projects/", "CollectionPage"],
  ["/blog/", "CollectionPage"],
  ["/post/the-illusion-of-ai-productivity/", "BlogPosting"],
  ["/contact/", "ContactPage"],
];

function readSchema(route) {
  const file = route === "/" ? path.join(output, "index.html") : path.join(output, route, "index.html");
  const html = fs.readFileSync(file, "utf8");
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error(`No JSON-LD script found for ${route}`);
  return { html, schema: JSON.parse(match[1]) };
}

for (const [route, expectedType] of pages) {
  const { html, schema } = readSchema(route);
  if (schema["@context"] !== "https://schema.org" || !Array.isArray(schema["@graph"])) throw new Error(`Invalid schema graph for ${route}`);
  const types = schema["@graph"].map((node) => node["@type"]);
  if (!types.includes("Organization") || !types.includes("Person") || !types.includes("WebSite")) throw new Error(`Missing shared entity schema for ${route}`);
  if (!types.includes(expectedType)) throw new Error(`Missing ${expectedType} schema for ${route}`);
  if (!html.includes('<link rel="canonical" href="https://koupoli.com')) throw new Error(`Missing canonical URL for ${route}`);
  if ((route === "/" || route === "/hr/") && !types.includes("OfferCatalog")) throw new Error(`Missing offer catalog for ${route}`);
  if (route === "/" || route === "/hr/") {
    const faq = schema["@graph"].find((node) => node["@type"] === "FAQPage");
    if (faq.mainEntity.length !== 6) throw new Error(`Expected six FAQ entries for ${route}`);
  }
  if (route === "/post/the-illusion-of-ai-productivity/") {
    const article = schema["@graph"].find((node) => node["@type"] === "BlogPosting");
    if (!article.headline || !article.image || !article.datePublished || !article.author || !article.publisher) throw new Error("Incomplete BlogPosting schema");
  }
}

console.log("Structured data validation passed for all static routes.");
