import { Route, Switch } from "wouter";
import type { ComponentType } from "react";

export type SitePages = {
  Home: ComponentType<any>;
  CroatianHome: ComponentType<any>;
  About: ComponentType<any>;
  Projects: ComponentType<any>;
  Blog: ComponentType<any>;
  BlogPost: ComponentType<any>;
  Contact: ComponentType<any>;
  Glossary: ComponentType<any>;
  GlossaryGuide: ComponentType<any>;
};

export function SiteRoutes({ pages }: { pages: SitePages }) {
  const { Home, CroatianHome, About, Projects, Blog, BlogPost, Contact, Glossary, GlossaryGuide } = pages;

  return (
    <Switch>
      <Route path="/"><Home /></Route>
      <Route path="/hr"><CroatianHome /></Route>
      <Route path="/hr/"><CroatianHome /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/about/"><About /></Route>
      <Route path="/hr/about"><About locale="hr" /></Route>
      <Route path="/hr/about/"><About locale="hr" /></Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/projects/"><Projects /></Route>
      <Route path="/hr/projects"><Projects locale="hr" /></Route>
      <Route path="/hr/projects/"><Projects locale="hr" /></Route>
      <Route path="/blog"><Blog /></Route>
      <Route path="/blog/"><Blog /></Route>
      <Route path="/hr/blog"><Blog locale="hr" /></Route>
      <Route path="/hr/blog/"><Blog locale="hr" /></Route>
      <Route path="/post/the-illusion-of-ai-productivity"><BlogPost /></Route>
      <Route path="/post/the-illusion-of-ai-productivity/"><BlogPost /></Route>
      <Route path="/hr/post/the-illusion-of-ai-productivity"><BlogPost locale="hr" /></Route>
      <Route path="/hr/post/the-illusion-of-ai-productivity/"><BlogPost locale="hr" /></Route>
      <Route path="/post/ai-search-visibility"><BlogPost slug="ai-search-visibility" /></Route>
      <Route path="/post/ai-search-visibility/"><BlogPost slug="ai-search-visibility" /></Route>
      <Route path="/hr/post/ai-search-visibility"><BlogPost locale="hr" slug="ai-search-visibility" /></Route>
      <Route path="/hr/post/ai-search-visibility/"><BlogPost locale="hr" slug="ai-search-visibility" /></Route>
      <Route path="/post/website-migration-seo"><BlogPost slug="website-migration-seo" /></Route>
      <Route path="/post/website-migration-seo/"><BlogPost slug="website-migration-seo" /></Route>
      <Route path="/hr/post/website-migration-seo"><BlogPost locale="hr" slug="website-migration-seo" /></Route>
      <Route path="/hr/post/website-migration-seo/"><BlogPost locale="hr" slug="website-migration-seo" /></Route>
      <Route path="/post/generative-engine-optimization"><BlogPost slug="generative-engine-optimization" /></Route>
      <Route path="/post/generative-engine-optimization/"><BlogPost slug="generative-engine-optimization" /></Route>
      <Route path="/hr/post/generative-engine-optimization"><BlogPost locale="hr" slug="generative-engine-optimization" /></Route>
      <Route path="/hr/post/generative-engine-optimization/"><BlogPost locale="hr" slug="generative-engine-optimization" /></Route>
      <Route path="/contact"><Contact /></Route>
      <Route path="/contact/"><Contact /></Route>
      <Route path="/hr/contact"><Contact locale="hr" /></Route>
      <Route path="/hr/contact/"><Contact locale="hr" /></Route>
      <Route path="/glossary"><Glossary /></Route>
      <Route path="/glossary/"><Glossary /></Route>
      <Route path="/hr/pojmovnik"><Glossary locale="hr" /></Route>
      <Route path="/hr/pojmovnik/"><Glossary locale="hr" /></Route>
      <Route path="/glossary/technical-seo"><GlossaryGuide guideKey="technical-seo" /></Route>
      <Route path="/glossary/technical-seo/"><GlossaryGuide guideKey="technical-seo" /></Route>
      <Route path="/glossary/entity-seo"><GlossaryGuide guideKey="entity-seo" /></Route>
      <Route path="/glossary/entity-seo/"><GlossaryGuide guideKey="entity-seo" /></Route>
      <Route path="/glossary/ai-search-visibility"><GlossaryGuide guideKey="ai-search-visibility" /></Route>
      <Route path="/glossary/ai-search-visibility/"><GlossaryGuide guideKey="ai-search-visibility" /></Route>
      <Route path="/glossary/generative-engine-optimization"><GlossaryGuide guideKey="generative-engine-optimization" /></Route>
      <Route path="/glossary/generative-engine-optimization/"><GlossaryGuide guideKey="generative-engine-optimization" /></Route>
      <Route path="/hr/pojmovnik/tehnicki-seo"><GlossaryGuide locale="hr" guideKey="technical-seo" /></Route>
      <Route path="/hr/pojmovnik/tehnicki-seo/"><GlossaryGuide locale="hr" guideKey="technical-seo" /></Route>
      <Route path="/hr/pojmovnik/entitetski-seo"><GlossaryGuide locale="hr" guideKey="entity-seo" /></Route>
      <Route path="/hr/pojmovnik/entitetski-seo/"><GlossaryGuide locale="hr" guideKey="entity-seo" /></Route>
      <Route path="/hr/pojmovnik/vidljivost-u-ai-pretrazi"><GlossaryGuide locale="hr" guideKey="ai-search-visibility" /></Route>
      <Route path="/hr/pojmovnik/vidljivost-u-ai-pretrazi/"><GlossaryGuide locale="hr" guideKey="ai-search-visibility" /></Route>
      <Route path="/hr/pojmovnik/generativna-optimizacija"><GlossaryGuide locale="hr" guideKey="generative-engine-optimization" /></Route>
      <Route path="/hr/pojmovnik/generativna-optimizacija/"><GlossaryGuide locale="hr" guideKey="generative-engine-optimization" /></Route>
      <Route><Home /></Route>
    </Switch>
  );
}
