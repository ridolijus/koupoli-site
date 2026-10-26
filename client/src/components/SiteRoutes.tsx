import { Route, Switch } from "wouter";
import type { ComponentType } from "react";

export type SitePages = {
  Home: ComponentType<any>;
  CroatianHome: ComponentType<any>;
  Advisory: ComponentType<any>;
  About: ComponentType<any>;
  Projects: ComponentType<any>;
  Blog: ComponentType<any>;
  BlogPost: ComponentType<any>;
  Contact: ComponentType<any>;
  Glossary: ComponentType<any>;
  GlossaryGuide: ComponentType<any>;
  Service: ComponentType<any>;
  MigrationCaseStudy: ComponentType<any>;
};

export function SiteRoutes({ pages }: { pages: SitePages }) {
  const { Home, CroatianHome, Advisory, About, Projects, Blog, BlogPost, Contact, Glossary, GlossaryGuide, Service, MigrationCaseStudy } = pages;

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
      <Route path="/case-studies/multi-market-website-migration"><MigrationCaseStudy /></Route>
      <Route path="/case-studies/multi-market-website-migration/"><MigrationCaseStudy /></Route>
      <Route path="/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista"><MigrationCaseStudy locale="hr" /></Route>
      <Route path="/hr/studije-slucaja/migracija-web-stranice-za-vise-trzista/"><MigrationCaseStudy locale="hr" /></Route>
      <Route path="/services/organic-launch-advisory"><Advisory /></Route>
      <Route path="/services/organic-launch-advisory/"><Advisory /></Route>
      <Route path="/hr/usluge/seo-savjetovanje"><Advisory locale="hr" /></Route>
      <Route path="/hr/usluge/seo-savjetovanje/"><Advisory locale="hr" /></Route>
      <Route path="/services/technical-seo-ai-search"><Service /></Route>
      <Route path="/services/technical-seo-ai-search/"><Service /></Route>
      <Route path="/hr/usluge/seo-optimizacija"><Service locale="hr" /></Route>
      <Route path="/hr/usluge/seo-optimizacija/"><Service locale="hr" /></Route>
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
      <Route path="/glossary/semantic-seo"><GlossaryGuide guideKey="semantic-seo" /></Route>
      <Route path="/glossary/semantic-seo/"><GlossaryGuide guideKey="semantic-seo" /></Route>
      <Route path="/glossary/knowledge-graph"><GlossaryGuide guideKey="knowledge-graph" /></Route>
      <Route path="/glossary/knowledge-graph/"><GlossaryGuide guideKey="knowledge-graph" /></Route>
      <Route path="/glossary/entity-mapping"><GlossaryGuide guideKey="entity-mapping" /></Route>
      <Route path="/glossary/entity-mapping/"><GlossaryGuide guideKey="entity-mapping" /></Route>
      <Route path="/glossary/ai-search-visibility"><GlossaryGuide guideKey="ai-search-visibility" /></Route>
      <Route path="/glossary/ai-search-visibility/"><GlossaryGuide guideKey="ai-search-visibility" /></Route>
      <Route path="/glossary/generative-engine-optimization"><GlossaryGuide guideKey="generative-engine-optimization" /></Route>
      <Route path="/glossary/generative-engine-optimization/"><GlossaryGuide guideKey="generative-engine-optimization" /></Route>
      <Route path="/hr/pojmovnik/tehnicki-seo"><GlossaryGuide locale="hr" guideKey="technical-seo" /></Route>
      <Route path="/hr/pojmovnik/tehnicki-seo/"><GlossaryGuide locale="hr" guideKey="technical-seo" /></Route>
      <Route path="/hr/pojmovnik/entitetski-seo"><GlossaryGuide locale="hr" guideKey="entity-seo" /></Route>
      <Route path="/hr/pojmovnik/entitetski-seo/"><GlossaryGuide locale="hr" guideKey="entity-seo" /></Route>
      <Route path="/hr/pojmovnik/semanticki-seo"><GlossaryGuide locale="hr" guideKey="semantic-seo" /></Route>
      <Route path="/hr/pojmovnik/semanticki-seo/"><GlossaryGuide locale="hr" guideKey="semantic-seo" /></Route>
      <Route path="/hr/pojmovnik/graf-znanja"><GlossaryGuide locale="hr" guideKey="knowledge-graph" /></Route>
      <Route path="/hr/pojmovnik/graf-znanja/"><GlossaryGuide locale="hr" guideKey="knowledge-graph" /></Route>
      <Route path="/hr/pojmovnik/mapiranje-entiteta"><GlossaryGuide locale="hr" guideKey="entity-mapping" /></Route>
      <Route path="/hr/pojmovnik/mapiranje-entiteta/"><GlossaryGuide locale="hr" guideKey="entity-mapping" /></Route>
      <Route path="/hr/pojmovnik/vidljivost-u-ai-pretrazi"><GlossaryGuide locale="hr" guideKey="ai-search-visibility" /></Route>
      <Route path="/hr/pojmovnik/vidljivost-u-ai-pretrazi/"><GlossaryGuide locale="hr" guideKey="ai-search-visibility" /></Route>
      <Route path="/hr/pojmovnik/generativna-optimizacija"><GlossaryGuide locale="hr" guideKey="generative-engine-optimization" /></Route>
      <Route path="/hr/pojmovnik/generativna-optimizacija/"><GlossaryGuide locale="hr" guideKey="generative-engine-optimization" /></Route>
      <Route><Home /></Route>
    </Switch>
  );
}
