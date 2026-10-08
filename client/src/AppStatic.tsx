import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteRoutes, type SitePages } from "./components/SiteRoutes";
import { Router as WouterRouter } from "wouter";
import CroatianHome from "./pages/CroatianHome";
import GrowthAbout from "./pages/GrowthAbout";
import GrowthBlog from "./pages/GrowthBlog";
import GrowthBlogPost from "./pages/GrowthBlogPost";
import GrowthContact from "./pages/GrowthContact";
import GrowthGlossary from "./pages/GrowthGlossary";
import GrowthGlossaryGuide from "./pages/GrowthGlossaryGuide";
import GrowthHome from "./pages/GrowthHome";
import GrowthProjects from "./pages/GrowthProjects";

const pages: SitePages = {
  Home: GrowthHome,
  CroatianHome,
  About: GrowthAbout,
  Projects: GrowthProjects,
  Blog: GrowthBlog,
  BlogPost: GrowthBlogPost,
  Contact: GrowthContact,
  Glossary: GrowthGlossary,
  GlossaryGuide: GrowthGlossaryGuide,
};

export default function AppStatic({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <WouterRouter ssrPath={ssrPath}>
          <SiteRoutes pages={pages} />
        </WouterRouter>
      </TooltipProvider>
    </ErrorBoundary>
  );
}
