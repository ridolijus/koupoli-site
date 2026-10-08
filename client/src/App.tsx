import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useLayoutEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteRoutes, type SitePages } from "./components/SiteRoutes";
import { Router as WouterRouter, useLocation } from "wouter";

const pages: SitePages = {
  Home: lazy(() => import("./pages/GrowthHome")),
  CroatianHome: lazy(() => import("./pages/CroatianHome")),
  About: lazy(() => import("./pages/GrowthAbout")),
  Projects: lazy(() => import("./pages/GrowthProjects")),
  Blog: lazy(() => import("./pages/GrowthBlog")),
  BlogPost: lazy(() => import("./pages/GrowthBlogPost")),
  Contact: lazy(() => import("./pages/GrowthContact")),
  Glossary: lazy(() => import("./pages/GrowthGlossary")),
  GlossaryGuide: lazy(() => import("./pages/GrowthGlossaryGuide")),
};

function ScrollToPageStart() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    const anchor = window.location.hash ? document.getElementById(decodeURIComponent(window.location.hash.slice(1))) : null;

    if (anchor) {
      const frame = window.requestAnimationFrame(() => anchor.scrollIntoView());
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));

    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}

function Router({ ssrPath }: { ssrPath?: string }) {
  const baseUrl = import.meta.env?.BASE_URL ?? "/";
  const base = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");

  return (
    <WouterRouter base={base} ssrPath={ssrPath}>
      <ScrollToPageStart />
      <Suspense fallback={null}>
        <SiteRoutes pages={pages} />
      </Suspense>
    </WouterRouter>
  );
}

export default function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Router ssrPath={ssrPath} />
      </TooltipProvider>
    </ErrorBoundary>
  );
}
