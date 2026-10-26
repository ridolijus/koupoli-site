import { TooltipProvider } from "@/components/ui/tooltip";
import React, { Suspense, useLayoutEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteRoutes, type SitePages } from "./components/SiteRoutes";
import { Router as WouterRouter, useLocation } from "wouter";
import CroatianHome from "./pages/CroatianHome";
import GrowthAbout from "./pages/GrowthAbout";
import GrowthAdvisory from "./pages/GrowthAdvisory";
import GrowthBlog from "./pages/GrowthBlog";
import GrowthBlogPost from "./pages/GrowthBlogPost";
import GrowthContact from "./pages/GrowthContact";
import GrowthGlossary from "./pages/GrowthGlossary";
import GrowthGlossaryGuide from "./pages/GrowthGlossaryGuide";
import GrowthHome from "./pages/GrowthHome";
import GrowthMigrationCaseStudy from "./pages/GrowthMigrationCaseStudy";
import GrowthProjects from "./pages/GrowthProjects";
import GrowthService from "./pages/GrowthService";

const pages: SitePages = {
  Home: GrowthHome,
  CroatianHome,
  Advisory: GrowthAdvisory,
  About: GrowthAbout,
  Projects: GrowthProjects,
  Blog: GrowthBlog,
  BlogPost: GrowthBlogPost,
  Contact: GrowthContact,
  Glossary: GrowthGlossary,
  GlossaryGuide: GrowthGlossaryGuide,
  Service: GrowthService,
  MigrationCaseStudy: GrowthMigrationCaseStudy,
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
    const anchor = window.location.hash
      ? document.getElementById(
          decodeURIComponent(window.location.hash.slice(1))
        )
      : null;

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

export default function AppStatic({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <WouterRouter ssrPath={ssrPath}>
          <ScrollToPageStart />
          <Suspense fallback={null}>
            <SiteRoutes pages={pages} />
          </Suspense>
        </WouterRouter>
      </TooltipProvider>
    </ErrorBoundary>
  );
}
