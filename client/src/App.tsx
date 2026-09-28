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
    <Route path="/" component={GrowthHome} />
    <Route path="/hr" component={CroatianHome} />
    <Route path="/hr/" component={CroatianHome} />
    <Route path="/about" component={GrowthAbout} />
    <Route path="/projects" component={GrowthProjects} />
    <Route path="/blog" component={GrowthBlog} />
    <Route path="/post/the-illusion-of-ai-productivity" component={GrowthBlogPost} />
    <Route path="/contact" component={GrowthContact} />
    <Route path="/contact/" component={GrowthContact} />
    <Route><GrowthHome /></Route>
  </Switch></WouterRouter>;
}

export default function App({ ssrPath }: { ssrPath?: string }) {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router ssrPath={ssrPath} /></TooltipProvider></ErrorBoundary>;
}
