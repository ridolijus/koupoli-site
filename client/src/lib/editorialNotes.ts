export type EditorialNote = {
  slug: string;
  date: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[] }>;
  sources: Array<{ label: string; href: string }>;
};

export const editorialNotes: Record<"en" | "hr", EditorialNote[]> = {
  en: [
    {
      slug: "ai-search-visibility",
      date: "October 2, 2026",
      title: "AI Search Visibility: What to Measure Before You Optimise",
      metaTitle: "AI Search Visibility: What to Measure | Koupoli",
      metaDescription: "A practical framework for measuring AI search visibility without confusing impressions, mentions, rankings, and commercial outcomes.",
      excerpt: "A practical measurement framework for teams that want to understand AI-search visibility before buying tools or chasing mentions.",
      image: "/assets/koupoli-search-systems-infographic.webp",
      imageAlt: "Illustration of connected search systems and information signals",
      sections: [
        {
          heading: "Start with the decision, not the dashboard",
          paragraphs: [
            "AI-search reporting is easy to make noisy. A brand mention might be interesting, but it does not automatically show whether the right audience found a useful page, whether that page was eligible to appear, or whether visibility supported a commercial outcome.",
            "Begin with one decision the measurement should support. It might be whether to improve a technical page, expand a topic cluster, protect a high-value query, or validate that a launch is reaching the intended market. That decision determines which data is useful and what can be ignored.",
          ],
        },
        {
          heading: "Use Search Console as the first source of truth",
          paragraphs: [
            "Google's Generative AI performance reporting gives a dedicated view of impressions from generative features in Search. It can be broken down by page, country, device, and date. That makes it a useful starting point for finding which pages are appearing and where visibility is changing.",
            "The report should sit beside the normal Search performance report, not replace it. The strongest interpretation comes from comparing the page's AI-feature visibility with its broader impressions, clicks, query patterns, and the action the page is meant to support.",
          ],
          list: [
            "Which pages appear in generative features and whether those pages match priority topics.",
            "Which countries and devices show the visibility, especially when a launch has a clear market focus.",
            "Whether a change in impressions lines up with a technical release, new information, or improved internal linking.",
            "Whether the pages that gain visibility also move visitors toward an enquiry, sign-up, product view, or other intended action.",
          ],
        },
        {
          heading: "Separate presence from performance",
          paragraphs: [
            "Presence is evidence that a page was eligible and selected for an AI-search feature. Performance asks whether that presence supports the business goal. The two measures are related, but they are not interchangeable.",
            "For a service business, a sensible scorecard combines search demand for the topic, indexation and page quality, visibility for the important questions, qualified visits, and the downstream signal that matters to the team. That might be an enquiry, a demo request, or a sales conversation with the right context.",
          ],
        },
        {
          heading: "What not to optimise for",
          paragraphs: [
            "Avoid treating a third-party mention counter as a rank tracker. AI answers can change with the question, location, model, and source set. A tool can be useful for discovering patterns, but it cannot replace first-party Search Console data or commercial analytics.",
            "Also avoid manufacturing a separate page for every possible prompt variation. Clear topic ownership, useful examples, and technically accessible pages are more durable than an expanding library of thin answer pages.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: Generative AI performance reports", href: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
      ],
    },
    {
      slug: "website-migration-seo",
      date: "October 2, 2026",
      title: "Website Migration SEO: A Practical Launch Checklist",
      metaTitle: "Website Migration SEO: A Practical Checklist | Koupoli",
      metaDescription: "A practical SEO launch checklist for safeguarding URLs, redirects, indexation, content, and measurement during a website migration.",
      excerpt: "A concise migration checklist for teams that want a new website without sacrificing search equity or creating avoidable technical debt.",
      image: "/assets/koupoli-project-evidence-infographic.webp",
      imageAlt: "Illustration of a structured website migration and evidence flow",
      sections: [
        {
          heading: "A migration is an information move, not just a redesign",
          paragraphs: [
            "A new site changes more than the visual system. It can change URL structure, internal links, templates, metadata, page speed, language handling, and the way search engines understand the relationship between pages. Treating it as a design launch leaves too much to chance.",
            "The useful question is not whether every old URL should survive unchanged. It is whether every important search intent, internal link path, and business-critical page has a deliberate destination on the new site.",
          ],
        },
        {
          heading: "Create the inventory before development locks in",
          paragraphs: [
            "Before a build is final, export the existing URLs and mark the pages that currently earn traffic, links, conversions, or internal importance. Add proposed destinations, owners, and a status for each decision. This turns redirects into a planning exercise instead of an emergency task.",
          ],
          list: [
            "Map high-value legacy URLs to the most relevant new URL, one by one.",
            "Record pages that should be consolidated, retired, or kept because they serve a distinct search intent.",
            "Protect titles, headings, copy, and internal links on pages that already perform until there is evidence for a change.",
            "Agree a staging review that checks crawlability, rendering, canonical tags, language alternates, and noindex directives before launch.",
          ],
        },
        {
          heading: "Treat redirects and internal links as one system",
          paragraphs: [
            "A redirect is not a substitute for a clean new architecture. Use direct server-side redirects for moved pages, then update internal navigation, content links, canonicals, hreflang tags, and sitemap URLs to point at the final destination. A visitor and a crawler should not have to pass through unnecessary hops.",
            "After launch, crawl the live site and compare the response codes, canonical URLs, and internal links against the migration map. The best time to discover a loop, a missing page, or an accidental noindex tag is before search traffic has had time to fall.",
          ],
        },
        {
          heading: "Keep a short post-launch watch list",
          paragraphs: [
            "Search Console makes the first weeks more manageable. Check indexing and URL Inspection for representative pages, confirm that the sitemap is processed, and monitor the pages and queries that mattered before the move. Give Google time to recrawl, but do not wait to fix clear technical errors.",
            "The migration is complete when the new site is technically stable and the team can explain the performance movement. It is not complete when the homepage looks finished.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
        { label: "Google Search Central: Get started with Search Console", href: "https://developers.google.com/search/docs/monitor-debug/search-console-start" },
      ],
    },
    {
      slug: "generative-engine-optimization",
      date: "October 2, 2026",
      title: "Generative Engine Optimization: What Matters in Practice",
      metaTitle: "Generative Engine Optimization: What Matters | Koupoli",
      metaDescription: "Generative engine optimization explained in practical terms: durable SEO foundations, original information, technical clarity, and useful measurement.",
      excerpt: "GEO is useful language for a changing search experience, but it is not a replacement for SEO or a shortcut around real website work.",
      image: "/assets/koupoli-about-method-infographic.webp",
      imageAlt: "Illustration of a connected organic growth method and search strategy",
      sections: [
        {
          heading: "GEO is a description, not a separate technical system",
          paragraphs: [
            "Generative engine optimization, often shortened to GEO, is commonly used to describe work intended to improve visibility in AI-generated answers. It can be helpful language when a team needs to discuss how search behaviour is changing.",
            "For Google Search, the core principle is simpler. Generative features are rooted in the same Search index and quality systems. A page still needs to be accessible, indexable, useful, and relevant before it has any chance of being selected as supporting information.",
          ],
        },
        {
          heading: "The practical work is still familiar",
          paragraphs: [
            "The strongest GEO programme is not a collection of isolated AI tactics. It is a disciplined SEO programme that gives the site a clear technical structure, accurate information, distinct points of view, and pages that answer real questions without inflating the claim.",
          ],
          list: [
            "Make important pages crawlable, indexable, and internally connected.",
            "Use clear headings and logical sections so readers can find the answer and the supporting context.",
            "Publish first-hand observations, examples, and decisions that a generic summary cannot reproduce.",
            "Keep entities, product details, author information, and references accurate and current.",
            "Use relevant structured data where it genuinely describes the page, not as an AI feature shortcut.",
          ],
        },
        {
          heading: "Avoid the invented checklist",
          paragraphs: [
            "There is no special schema type, LLMS.txt file, or fixed content length required to appear in Google's generative features. These ideas are often sold as universal requirements, but they distract from the work that actually improves a site's usefulness and technical health.",
            "That does not make experimentation pointless. It means the experiment should start with a credible hypothesis, a page that deserves to win, and a measurement plan. If the result is not useful for the visitor or cannot be explained to the team, it is unlikely to be a durable optimisation.",
          ],
        },
        {
          heading: "Build authority with evidence, not volume",
          paragraphs: [
            "A service site does not need hundreds of pages to participate in AI-mediated search. It needs a small, connected library that explains its expertise, shows how that expertise is applied, and gives buyers enough detail to make a decision.",
            "For Koupoli, that means linking practical Notes to the two offers: Organic Launch Consultation and SEO & AI Search Operations. The content should clarify what is measured, what is implemented, and what a buyer can expect from the work.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizing your website for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
  ],
  hr: [
    {
      slug: "ai-search-visibility",
      date: "2. listopada 2026.",
      title: "Vidljivost u AI pretrazi: Što mjeriti prije optimizacije",
      metaTitle: "Vidljivost u AI pretrazi: Što mjeriti | Koupoli",
      metaDescription: "Praktičan okvir za mjerenje vidljivosti u AI pretrazi bez miješanja impresija, spominjanja, pozicija i poslovnih rezultata.",
      excerpt: "Praktičan okvir mjerenja za timove koji žele razumjeti vidljivost u AI pretrazi prije kupnje alata ili lova na spominjanja.",
      image: "/assets/koupoli-search-systems-infographic.webp",
      imageAlt: "Ilustracija povezanih sustava pretraživanja i informacijskih signala",
      sections: [
        {
          heading: "Krenite od odluke, a ne od nadzorne ploče",
          paragraphs: [
            "Izvještavanje o AI pretrazi lako postane bučno. Spominjanje brenda može biti zanimljivo, ali samo po sebi ne govori je li prava publika pronašla korisnu stranicu, je li stranica bila podobna za prikaz ili je li vidljivost podržala poslovni rezultat.",
            "Krenite od jedne odluke koju mjerenje treba podržati. To može biti odluka o poboljšanju tehničke stranice, proširenju tematskog klastera, zaštiti vrijednog upita ili provjeri doseže li lansiranje željeno tržište. Ta odluka određuje koji su podaci korisni.",
          ],
        },
        {
          heading: "Neka Search Console bude prvi izvor istine",
          paragraphs: [
            "Googleov izvještaj o uspješnosti generativnog AI-ja daje poseban pregled impresija iz generativnih značajki u Pretraživanju. Moguće ga je promatrati prema stranici, državi, uređaju i datumu. To je dobro polazište za otkrivanje stranica koje se prikazuju i promjena u vidljivosti.",
            "Izvještaj treba koristiti uz uobičajeni izvještaj o uspješnosti pretraživanja, a ne umjesto njega. Najbolje tumačenje dolazi iz usporedbe AI vidljivosti stranice s ukupnim impresijama, klikovima, obrascima upita i radnjom koju stranica treba potaknuti.",
          ],
          list: [
            "Koje se stranice pojavljuju u generativnim značajkama i odgovaraju li prioritetnim temama.",
            "U kojim državama i na kojim uređajima nastaje vidljivost, posebno kada lansiranje ima jasno ciljno tržište.",
            "Povezuje li se promjena impresija s tehničkim izdanjem, novim informacijama ili boljim internim povezivanjem.",
            "Pomiču li stranice koje dobivaju vidljivost posjetitelje prema upitu, prijavi, pregledu proizvoda ili drugoj namjeravanoj radnji.",
          ],
        },
        {
          heading: "Odvojite prisutnost od rezultata",
          paragraphs: [
            "Prisutnost je dokaz da je stranica bila podobna i odabrana za AI značajku pretraživanja. Rezultat pita podupire li ta prisutnost poslovni cilj. Ta su dva mjerenja povezana, ali nisu ista.",
            "Za uslužnu tvrtku razuman pregled povezuje potražnju za temom, indeksiranje i kvalitetu stranice, vidljivost za važna pitanja, kvalificirane posjete i signal koji je timu važan. To može biti upit, zahtjev za demonstraciju ili prodajni razgovor s pravim kontekstom.",
          ],
        },
        {
          heading: "Što ne treba optimizirati",
          paragraphs: [
            "Nemojte brojilo spominjanja treće strane tretirati kao alat za praćenje pozicija. AI odgovori mogu se mijenjati ovisno o pitanju, lokaciji, modelu i skupu izvora. Alat može pomoći u pronalasku uzoraka, ali ne može zamijeniti podatke iz Search Consolea ili poslovnu analitiku.",
            "Izbjegavajte i izradu zasebne stranice za svaku moguću varijaciju prompta. Jasno vlasništvo nad temom, korisni primjeri i tehnički dostupne stranice trajniji su od rastuće zbirke tankih stranica s odgovorima.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: Izvještaji o uspješnosti generativnog AI-ja", href: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
      ],
    },
    {
      slug: "website-migration-seo",
      date: "2. listopada 2026.",
      title: "SEO migracija web-stranice: Praktičan kontrolni popis",
      metaTitle: "SEO migracija web-stranice: Kontrolni popis | Koupoli",
      metaDescription: "Praktičan SEO kontrolni popis za zaštitu URL-ova, redirekcija, indeksiranja, sadržaja i mjerenja tijekom migracije web-stranice.",
      excerpt: "Sažet kontrolni popis migracije za timove koji žele novu web-stranicu bez nepotrebnog gubitka organske vidljivosti.",
      image: "/assets/koupoli-project-evidence-infographic.webp",
      imageAlt: "Ilustracija strukturirane migracije web-stranice i tijeka provjere",
      sections: [
        {
          heading: "Migracija je premještanje informacija, a ne samo redizajn",
          paragraphs: [
            "Nova web-stranica mijenja više od vizualnog sustava. Može promijeniti strukturu URL-ova, interne poveznice, predloške, metapodatke, brzinu stranice, jezične verzije i način na koji tražilice razumiju odnos među stranicama. Ako je tretirate samo kao dizajnersko lansiranje, previše toga ostaje slučaju.",
            "Korisnije je pitanje ne treba li svaki stari URL ostati nepromijenjen. Pitanje je ima li svaka važna namjera pretraživanja, put interne poveznice i poslovno važna stranica promišljeno odredište na novoj web-stranici.",
          ],
        },
        {
          heading: "Izradite inventar prije zaključavanja razvoja",
          paragraphs: [
            "Prije završetka izrade izvezite postojeće URL-ove i označite stranice koje trenutačno donose promet, poveznice, konverzije ili imaju internu važnost. Dodajte predložena odredišta, vlasnike i status za svaku odluku. Tako redirekcije postaju planiranje umjesto hitnog rješavanja problema.",
          ],
          list: [
            "Mapirajte vrijedne stare URL-ove na najrelevantniji novi URL, jedan po jedan.",
            "Zabilježite stranice koje treba spojiti, povući ili zadržati jer pokrivaju zasebnu namjeru pretraživanja.",
            "Zaštitite naslove, podnaslove, tekst i interne poveznice stranica koje već rade dok ne postoji dokaz za promjenu.",
            "Dogovorite provjeru staging okruženja koja obuhvaća crawlabilnost, prikaz, canonical oznake, jezične alternative i noindex direktive prije lansiranja.",
          ],
        },
        {
          heading: "Redirekcije i interne poveznice čine jedan sustav",
          paragraphs: [
            "Redirekcija nije zamjena za čistu novu arhitekturu. Za premještene stranice koristite izravne redirekcije na razini poslužitelja, a zatim ažurirajte internu navigaciju, poveznice u sadržaju, canonical oznake, hreflang oznake i URL-ove u sitemapu tako da upućuju na konačno odredište.",
            "Nakon lansiranja crawlajte objavljenu web-stranicu i usporedite statusne kodove, canonical URL-ove i interne poveznice s migracijskom mapom. Najbolji je trenutak za otkrivanje petlje, stranice koja nedostaje ili slučajne noindex oznake prije pada organskog prometa.",
          ],
        },
        {
          heading: "Zadržite kratak popis provjera nakon lansiranja",
          paragraphs: [
            "Search Console čini prve tjedne lakšima za upravljanje. Provjerite indeksiranje i URL Inspection za reprezentativne stranice, potvrdite da je sitemap obrađen te pratite stranice i upite koji su bili važni prije promjene. Googleu treba dati vrijeme za ponovno crawliranje, ali jasne tehničke pogreške ne treba odgađati.",
            "Migracija je dovršena kada je nova web-stranica tehnički stabilna i tim može objasniti kretanje rezultata. Nije dovršena kada početna stranica izgleda gotova.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
        { label: "Google Search Central: Početak rada sa Search Consoleom", href: "https://developers.google.com/search/docs/monitor-debug/search-console-start" },
      ],
    },
    {
      slug: "generative-engine-optimization",
      date: "2. listopada 2026.",
      title: "Generativna optimizacija: Što je važno u praksi",
      metaTitle: "Generativna optimizacija: Što je važno | Koupoli",
      metaDescription: "Generativna optimizacija objašnjena praktično: čvrsti SEO temelji, originalne informacije, tehnička jasnoća i korisno mjerenje.",
      excerpt: "GEO je koristan naziv za promijenjeno iskustvo pretraživanja, ali nije zamjena za SEO ni prečac oko stvarnog rada na web-stranici.",
      image: "/assets/koupoli-about-method-infographic.webp",
      imageAlt: "Ilustracija povezanog pristupa organskom rastu i strategiji pretraživanja",
      sections: [
        {
          heading: "GEO je opis, a ne zaseban tehnički sustav",
          paragraphs: [
            "Generative engine optimization, često skraćeno GEO, koristi se za opis rada koji želi poboljšati vidljivost u odgovorima koje generira AI. To može biti koristan naziv kada tim treba razgovarati o promjeni ponašanja u pretraživanju.",
            "Za Google Pretraživanje načelo je jednostavnije. Generativne značajke oslanjaju se na isti indeks i sustave kvalitete. Stranica i dalje mora biti dostupna, indeksirana, korisna i relevantna prije nego što uopće može biti odabrana kao potporna informacija.",
          ],
        },
        {
          heading: "Praktični rad je i dalje poznat",
          paragraphs: [
            "Najbolji GEO program nije zbirka izdvojenih AI taktika. To je discipliniran SEO program koji web-stranici daje jasnu tehničku strukturu, točne informacije, prepoznatljivo gledište i stranice koje odgovaraju na stvarna pitanja bez prenapuhivanja tvrdnje.",
          ],
          list: [
            "Učinite važne stranice dostupnima za crawliranje i indeksiranje te ih povežite internim poveznicama.",
            "Koristite jasne naslove i logične cjeline kako bi čitatelj pronašao odgovor i kontekst koji ga podupire.",
            "Objavljujte opažanja, primjere i odluke iz prve ruke koje generički sažetak ne može ponoviti.",
            "Održavajte entitete, podatke o proizvodu, podatke o autoru i reference točnima i aktualnima.",
            "Koristite relevantne strukturirane podatke kada stvarno opisuju stranicu, a ne kao prečac do AI značajke.",
          ],
        },
        {
          heading: "Izbjegnite izmišljeni kontrolni popis",
          paragraphs: [
            "Ne postoji posebna schema vrsta, LLMS.txt datoteka ni fiksna duljina sadržaja potrebna za pojavljivanje u Googleovim generativnim značajkama. Takve se ideje često prodaju kao univerzalni zahtjevi, ali odvlače pozornost od rada koji stvarno podiže korisnost i tehničko zdravlje web-stranice.",
            "To ne znači da je eksperimentiranje besmisleno. Znači da eksperiment treba početi vjerodostojnom pretpostavkom, stranicom koja zaslužuje uspjeti i planom mjerenja. Ako rezultat nije koristan posjetitelju ili se ne može objasniti timu, teško da je trajna optimizacija.",
          ],
        },
        {
          heading: "Gradite autoritet dokazima, a ne količinom",
          paragraphs: [
            "Uslužnoj web-stranici ne trebaju stotine stranica da sudjeluje u pretraživanju posredovanom AI-jem. Potrebna joj je mala, povezana biblioteka koja objašnjava stručnost, pokazuje kako se stručnost primjenjuje i kupcima daje dovoljno detalja za odluku.",
            "Za Koupoli to znači povezivanje praktičnih Bilješki s dvije ponude: konzultacijama za organsko lansiranje te SEO i AI Search Operations radom. Sadržaj treba razjasniti što se mjeri, što se implementira i što kupac može očekivati od suradnje.",
          ],
        },
      ],
      sources: [
        { label: "Google Search Central: Optimizacija web-stranice za generativne AI značajke", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        { label: "Google Search Central: AI značajke i vaša web-stranica", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      ],
    },
  ],
};

export function getEditorialNote(locale: "en" | "hr", slug: string) {
  return editorialNotes[locale].find((note) => note.slug === slug);
}
