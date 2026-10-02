import fs from "node:fs";
import path from "node:path";
import { renderToString } from "react-dom/server";
import App from "../client/src/App";

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
  "/contact/",
  "/hr/contact/",
];

for (const route of routes) {
  const destination = route === "/" ? path.join(output, "index.html") : path.join(output, route, "index.html");
  const markup = renderToString(<App ssrPath={route} />);
  const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}
