# Koupoli — About page Croatian translation mapping

## Scope and implementation notes

- **Page source:** `client/src/pages/GrowthAbout.tsx`
- **Experience data source:** `client/src/lib/siteData.ts` → `experiences`
- Set the page shell to `locale="hr"` when implementing the Croatian route/version.
- Preserve all existing **brand names, company names, dates, URLs, asset paths, CSS classes, component structure, and links**. In particular, do not change `/projects`, `/contact`, or `/assets/koupoli-about-method-infographic.webp?v=full-panel`.
- The page currently renders only the first three bullets for each experience (`experience.bullets.slice(0, 3)`). All experience bullets are translated below so the source data is fully localized and remains ready for any future display change.
- Keep established SEO/technical terms such as **SEO**, **on-page**, **off-page**, **SERP**, **CMS**, **Webflow**, **Schema.org**, **Google Search Console**, and **Google Tag Manager** intact.

## `GrowthAbout.tsx` copy mapping

| Source location | English source | Croatian replacement |
|---|---|---|
| `PageMeta.title` | About Karlo Ridan \| Koupoli | O Karlu Ridanu \| Koupoli |
| `PageMeta.description` | Meet Karlo Ridan, the SEO and organic growth specialist behind Koupoli. Strategy, technical SEO, content systems, and implementation. | Upoznajte Karla Ridana, stručnjaka za SEO i organski rast koji stoji iza Koupolija. Strategija, tehnički SEO, sustavi sadržaja i implementacija. |
| Hero kicker | About Koupoli | O Koupoliju |
| Hero `h1` | Strategy is only useful when it reaches the live site. | Strategija je korisna samo kada zaživi na aktivnoj web-stranici. |
| Hero body | Koupoli is led by Karlo Ridan, an SEO specialist who works across strategy, technical implementation, content systems, and the teams responsible for making them real. | Koupoli vodi Karlo Ridan, SEO stručnjak koji radi na strategiji, tehničkoj implementaciji, sustavima sadržaja i s timovima zaduženima da ih provedu u djelo. |
| Hero primary CTA | View selected work | Pogledajte odabrane radove |
| Hero secondary CTA | Start a conversation | Započnite razgovor |
| Hero image `alt` | Editorial blueprint connecting strategy and implementation | Urednički nacrt koji povezuje strategiju i implementaciju |
| Intro `h2` | A practical point of view for work that crosses disciplines. | Praktičan pristup radu koji se proteže kroz različite discipline. |
| Intro paragraph 1 | Organic growth work rarely stays in one lane. A plan has to hold up in product conversations, developer tickets, content briefs, migrations, and reporting. Karlo's experience across technical SEO, Webflow, project leadership, and client delivery keeps the work connected. | Rad na organskom rastu rijetko ostaje ograničen na jedno područje. Plan mora funkcionirati u razgovorima o proizvodu, zadacima za razvojne timove, briefovima za sadržaj, migracijama i izvještavanju. Karlovo iskustvo u tehničkom SEO-u, Webflowu, vođenju projekata i isporuci za klijente održava sve elemente povezanima. |
| Intro paragraph 2 | That means a recommendation can move from a search insight to an implemented page structure, not get lost in a presentation. | To znači da preporuka može prijeći put od uvida iz pretraživanja do implementirane strukture stranice, umjesto da se izgubi u prezentaciji. |
| Experience kicker | Experience | Iskustvo |
| Experience `h2` | Work built from the inside of search, product, and delivery teams. | Rad nastao iz prve ruke unutar timova za pretraživanje, proizvod i isporuku. |
| Closing kicker | Selected work | Odabrani radovi |
| Closing `h2` | See how the work has taken shape across different teams and industries. | Pogledajte kako je ovaj rad zaživio u različitim timovima i industrijama. |
| Closing CTA | Explore projects | Istražite projekte |

## `siteData.ts` — complete `experiences` mapping

Replace the English values of the existing `experiences` objects with the following Croatian values. Preserve object keys, ordering, company strings, and array structure.

```ts
export const experiences = [
  {
    role: "SEO konzultant",
    company: "jt digital",
    period: "ožujak 2026. – danas",
    intro: "Ugovorni angažman · Slavonski Brod",
    bullets: [
      "Suradnja i savjetovanje o aspektima on-page i off-page SEO-a za više klijenata.",
    ],
  },
  {
    role: "SEO stručnjak",
    company: "Ludicrum",
    period: "veljača 2024. – danas",
    bullets: [
      "Koordinirao potpunu migraciju s jedne sveobuhvatne domene na geografski specijalizirane poddomene.",
      "Implementirao najbolje prakse za tehnički SEO, mobilnu optimizaciju i optimizaciju za WordPress.",
      "Razvio učinkovite strategije link buildinga i surađivao na off-site signalima koji utječu na SEO.",
      "Optimizirao postojeći sadržaj, pridonio istraživanju ključnih riječi za novi sadržaj i izradio smjernice za copywritere.",
      "Koristio Google Analytics, Similarweb, Ahrefs i povezane alate za praćenje, analizu i izvještavanje o rezultatima.",
      "Surađivao s timom za društvene mreže radi optimizacije profila i povećanja vidljivosti.",
    ],
  },
  {
    role: "Osnivač / stručnjak za SEO i Webflow",
    company: "Koupoli - SEO and Webflow Design Agency",
    period: "studeni 2020. – danas",
    intro: "SEO stručnjak · Alati: Semrush, Ahrefs, SEOlyze, Google Search Console, Google Analytics, Screaming Frog. Izrada isječaka pomoću Schema.org i Google Tag Managera.",
    bullets: [
      "Analizirao i izrađivao detaljne SEO audite, uključujući izradu ticketa s briefovima i provedbu krugova revizija.",
      "Izrada tekstova optimiziranih za SEO u skladu sa standardima WDF IDF.",
      "Restrukturiranje web-stranica radi jačanja strukture link juicea na temelju analize u Hotjaru.",
      "Razvio i implementirao sveobuhvatnu strategiju link buildinga, što je rezultiralo znatnim povećanjem broja kvalitetnih povratnih poveznica iz uglednih izvora.",
      "Izrada jednostavnih sitemap i disavow datoteka.",
      "Unaprijedio pozicije web-stranica klijenata u Googleovim rezultatima pretraživanja za ključne riječi relevantne za njihovu industriju.",
      "Uspješno integrirao SEO s društvenim mrežama i e-mail marketingom radi usklađene online prisutnosti.",
      "Izradio kampanje masovnog outreacha; sudjelovao u prodajnim pozivima i sastancima za uvođenje klijenata.",
    ],
    secondary: "Webflow developer · Vješt u izradi prilagođenih responzivnih layouta i interakcija te vizualno privlačnih, korisnički prilagođenih web-stranica optimiziranih za tražilice i angažman korisnika.",
  },
  {
    role: "SEO stručnjak",
    company: "Soldered Electronics",
    period: "srpanj 2025. – veljača 2026.",
    bullets: [
      "Sudjelovao kao SEO stručnjak u implementaciji dizajna i razvoja novog webshopa.",
      "Razvio i implementirao sveobuhvatnu SEO strategiju za soldered.com.",
      "Preoblikovao arhitekturu stranice, interno povezivanje, meta oznake i opise proizvoda koristeći istraživanje ključnih riječi i tržišne uvide radi poboljšanja autoriteta domene i pozicioniranja u SERP-u.",
      "Vodio on-page i off-page SEO inicijative, uključujući stjecanje povratnih poveznica i aktivnosti za povećanje angažmana, kako bi se ojačala prisutnost brenda Soldered među stručnjacima za elektroniku.",
    ],
  },
  {
    role: "Webflow developer i SEO stručnjak",
    company: "Ultralytics",
    period: "svibanj 2024. – srpanj 2024.",
    bullets: [
      "Integrirao Figma dizajne UI/UX dizajnera u Webflow.",
      "Upravljao lokalizacijom web-stranice.",
      "Implementirao najbolje SEO prakse, uključujući izradu plana sadržaja te optimizaciju meta naslova i opisa.",
      "Upravljao CMS-om, objavama na blogu, dinamičnim web-animacijama te alatima Google Analytics, Google Search Console i drugim alatima za praćenje performansi.",
    ],
  },
  {
    role: "Voditelj projekta",
    company: "CADENAS PARTsolutions",
    period: "svibanj 2019. – listopad 2021.",
    bullets: [
      "Upravljao timom od sedam osoba zaduženim za konfiguriranje i objavu složenih sklopova dizalica.",
      "Izradio HTML algoritme koji omogućuju promjenu parametara projekta.",
      "Vodio svakodnevne sastanke i prezentacije s klijentima; provodio zahtjevne QA provjere modela prije sklapanja.",
      "Radio na interaktivnom 3D konfiguratoru tvrtke Parker, koji omogućuje slaganje neovisnih dijelova.",
      "Izradio algoritme za promjenu mjernih sustava s metričkog na imperijalni, bez utjecaja na interaktivne 3D modele.",
      "Sudjelovao na sajmovima kao prezenter rada i mogućnosti tvrtke CADENAS.",
    ],
  },
  {
    role: "Projektni asistent",
    company: "CADENAS PARTsolutions",
    period: "listopad 2017. – svibanj 2019.",
    bullets: [
      "Izrađivao i ispravljao 3D modele te pripremao tablice za složene algoritme.",
      "Pomogao programerskom timu u izradi i pokretanju 3DCAD konfiguratora.",
      "Izradio interaktivne 3D PDF tehničke listove s dimenzijama i informacijama o proizvodima.",
      "Blisko surađivao s inženjerima klijenata na rješavanju problema s kotiranjem u zastarjelim nacrtima.",
    ],
  },
];
```

## Non-copy values to preserve unchanged

| Item | Value |
|---|---|
| Hero primary CTA target | `/projects` |
| Hero secondary CTA target | `/contact` |
| Hero image source | `/assets/koupoli-about-method-infographic.webp?v=full-panel` |
| Closing CTA target | `/projects` |
| Experience company / brand names | `jt digital`, `Ludicrum`, `Koupoli - SEO and Webflow Design Agency`, `Soldered Electronics`, `Ultralytics`, `CADENAS PARTsolutions` |
| Product, platform, and tool names | Webflow, WordPress, Semrush, Ahrefs, SEOlyze, Google Search Console, Google Analytics, Screaming Frog, Schema.org, Google Tag Manager, Hotjar, Figma, Parker, 3DCAD |
