import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/projects" component={Projects} /><Route path="/blog" component={Blog} /><Route path="/post/the-illusion-of-ai-productivity" component={BlogPost} /><Route><Home /></Route></Switch>;
}

export default function App() {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router /></TooltipProvider></ErrorBoundary>;
}
