import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Router as WouterRouter, Switch } from "wouter";
import CroatianHome from "./pages/CroatianHome";
import GrowthAbout from "./pages/GrowthAbout";
import GrowthBlog from "./pages/GrowthBlog";
import GrowthBlogPost from "./pages/GrowthBlogPost";
import GrowthContact from "./pages/GrowthContact";
import GrowthHome from "./pages/GrowthHome";
import GrowthProjects from "./pages/GrowthProjects";

function Router({ ssrPath }: { ssrPath?: string }) {
  const baseUrl = import.meta.env?.BASE_URL ?? "/";
  const base = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");

  return <WouterRouter base={base} ssrPath={ssrPath}><Switch>
    <Route path="/"><GrowthHome /></Route>
    <Route path="/hr"><CroatianHome /></Route>
    <Route path="/hr/"><CroatianHome /></Route>
    <Route path="/about"><GrowthAbout /></Route>
    <Route path="/about/"><GrowthAbout /></Route>
    <Route path="/hr/about"><GrowthAbout locale="hr" /></Route>
    <Route path="/hr/about/"><GrowthAbout locale="hr" /></Route>
    <Route path="/projects"><GrowthProjects /></Route>
    <Route path="/projects/"><GrowthProjects /></Route>
    <Route path="/hr/projects"><GrowthProjects locale="hr" /></Route>
    <Route path="/hr/projects/"><GrowthProjects locale="hr" /></Route>
    <Route path="/blog"><GrowthBlog /></Route>
    <Route path="/blog/"><GrowthBlog /></Route>
    <Route path="/hr/blog"><GrowthBlog locale="hr" /></Route>
    <Route path="/hr/blog/"><GrowthBlog locale="hr" /></Route>
    <Route path="/post/the-illusion-of-ai-productivity"><GrowthBlogPost /></Route>
    <Route path="/post/the-illusion-of-ai-productivity/"><GrowthBlogPost /></Route>
    <Route path="/hr/post/the-illusion-of-ai-productivity"><GrowthBlogPost locale="hr" /></Route>
    <Route path="/hr/post/the-illusion-of-ai-productivity/"><GrowthBlogPost locale="hr" /></Route>
    <Route path="/post/ai-search-visibility"><GrowthBlogPost slug="ai-search-visibility" /></Route>
    <Route path="/post/ai-search-visibility/"><GrowthBlogPost slug="ai-search-visibility" /></Route>
    <Route path="/hr/post/ai-search-visibility"><GrowthBlogPost locale="hr" slug="ai-search-visibility" /></Route>
    <Route path="/hr/post/ai-search-visibility/"><GrowthBlogPost locale="hr" slug="ai-search-visibility" /></Route>
    <Route path="/post/website-migration-seo"><GrowthBlogPost slug="website-migration-seo" /></Route>
    <Route path="/post/website-migration-seo/"><GrowthBlogPost slug="website-migration-seo" /></Route>
    <Route path="/hr/post/website-migration-seo"><GrowthBlogPost locale="hr" slug="website-migration-seo" /></Route>
    <Route path="/hr/post/website-migration-seo/"><GrowthBlogPost locale="hr" slug="website-migration-seo" /></Route>
    <Route path="/post/generative-engine-optimization"><GrowthBlogPost slug="generative-engine-optimization" /></Route>
    <Route path="/post/generative-engine-optimization/"><GrowthBlogPost slug="generative-engine-optimization" /></Route>
    <Route path="/hr/post/generative-engine-optimization"><GrowthBlogPost locale="hr" slug="generative-engine-optimization" /></Route>
    <Route path="/hr/post/generative-engine-optimization/"><GrowthBlogPost locale="hr" slug="generative-engine-optimization" /></Route>
    <Route path="/contact"><GrowthContact /></Route>
    <Route path="/contact/"><GrowthContact /></Route>
    <Route path="/hr/contact"><GrowthContact locale="hr" /></Route>
    <Route path="/hr/contact/"><GrowthContact locale="hr" /></Route>
    <Route><GrowthHome /></Route>
  </Switch></WouterRouter>;
}

export default function App({ ssrPath }: { ssrPath?: string }) {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router ssrPath={ssrPath} /></TooltipProvider></ErrorBoundary>;
}
