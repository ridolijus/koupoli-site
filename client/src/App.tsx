import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Router as WouterRouter, Switch } from "wouter";
import CroatianHome from "./pages/CroatianHome";
import GrowthAbout from "./pages/GrowthAbout";
import GrowthBlog from "./pages/GrowthBlog";
import GrowthBlogPost from "./pages/GrowthBlogPost";
import GrowthHome from "./pages/GrowthHome";
import GrowthProjects from "./pages/GrowthProjects";

function Router() {
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

  return <WouterRouter base={base}><Switch>
    <Route path="/" component={GrowthHome} />
    <Route path="/hr" component={CroatianHome} />
    <Route path="/hr/" component={CroatianHome} />
    <Route path="/about" component={GrowthAbout} />
    <Route path="/projects" component={GrowthProjects} />
    <Route path="/blog" component={GrowthBlog} />
    <Route path="/post/the-illusion-of-ai-productivity" component={GrowthBlogPost} />
    <Route><GrowthHome /></Route>
  </Switch></WouterRouter>;
}

export default function App() {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router /></TooltipProvider></ErrorBoundary>;
}
