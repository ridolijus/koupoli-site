import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import AppStatic from "../client/src/AppStatic";

const output = path.resolve("dist/public");
const template = fs.readFileSync(path.join(output, "index.html"), "utf8");
const routes = [
  "/",
  "/hr/",
  "/about/",
  "/hr/about/",
  "/projects/",
  "/hr/projects/",
  "/blog/",
  "/hr/blog/",
  "/post/the-illusion-of-ai-productivity/",
  "/hr/post/the-illusion-of-ai-productivity/",
  "/post/ai-search-visibility/",
  "/hr/post/ai-search-visibility/",
  "/post/website-migration-seo/",
  "/hr/post/website-migration-seo/",
  "/post/generative-engine-optimization/",
  "/hr/post/generative-engine-optimization/",
  "/services/organic-launch-advisory/",
  "/hr/usluge/seo-savjetovanje/",
  "/services/technical-seo-ai-search/",
  "/hr/usluge/seo-optimizacija/",
  "/glossary/",
  "/hr/pojmovnik/",
  "/glossary/technical-seo/",
  "/glossary/entity-seo/",
  "/glossary/semantic-seo/",
  "/glossary/knowledge-graph/",
  "/glossary/entity-mapping/",
  "/glossary/ai-search-visibility/",
  "/glossary/generative-engine-optimization/",
  "/hr/pojmovnik/tehnicki-seo/",
  "/hr/pojmovnik/entitetski-seo/",
  "/hr/pojmovnik/semanticki-seo/",
  "/hr/pojmovnik/graf-znanja/",
  "/hr/pojmovnik/mapiranje-entiteta/",
  "/hr/pojmovnik/vidljivost-u-ai-pretrazi/",
  "/hr/pojmovnik/generativna-optimizacija/",
  "/contact/",
  "/hr/contact/",
];

for (const route of routes) {
  const destination = route === "/" ? path.join(output, "index.html") : path.join(output, route, "index.html");
  const markup = renderToString(<AppStatic ssrPath={route} />);
  const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}
