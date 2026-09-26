import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Router as WouterRouter, Switch } from "wouter";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CroatianHome from "./pages/CroatianHome";
import GrowthHome from "./pages/GrowthHome";
import Projects from "./pages/Projects";

function Router() {
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

  return <WouterRouter base={base}><Switch>
    <Route path="/" component={GrowthHome} />
    <Route path="/hr" component={CroatianHome} />
    <Route path="/hr/" component={CroatianHome} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/blog" component={Blog} />
    <Route path="/post/the-illusion-of-ai-productivity" component={BlogPost} />
    <Route><GrowthHome /></Route>
  </Switch></WouterRouter>;
}

export default function App() {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router /></TooltipProvider></ErrorBoundary>;
}
