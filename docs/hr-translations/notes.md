# Koupoli Notes — hrvatski prijevod

**Izvorna komponenta:** `client/src/pages/GrowthBlog.tsx`  
**Povezani podaci:** `client/src/lib/siteData.ts`  
**Ciljani lokalitet:** `hr`  
**Opseg:** Svi tekstovi vidljivi korisniku na indeksnoj stranici Notes, uključujući SEO metapodatke, uvodni sadržaj, istaknuti članak, CTA i alternativni tekst slike.

## Putanje i odnos poveznica

| Element | Zadržati u implementaciji |
|---|---|
| Indeks bilješki | Lokalizirana inačica stranice treba biti dostupna u hrvatskom dijelu web-mjesta (prema konvenciji projekta: `/hr/blog`). |
| Kartica članka — slika | Poveznica mora voditi na isti članak kao i naslov i CTA: `/post/the-illusion-of-ai-productivity`. |
| Kartica članka — naslov | Poveznica mora voditi na `/post/the-illusion-of-ai-productivity`. |
| Kartica članka — CTA | Poveznica mora voditi na `/post/the-illusion-of-ai-productivity`. |
| Slug članka | Ne prevoditi niti mijenjati slug. Hrvatski prijevod mijenja samo tekstove koje korisnik vidi; sva tri elementa kartice moraju ostati usklađena s postojećim člankom. |

> **Napomena za implementaciju:** Za hrvatski prikaz upotrijebiti `GrowthLayout locale="hr"`. Time se aktiviraju postojeći hrvatski elementi zajedničkog zaglavlja i podnožja (npr. **Usluge**, **Pristup**, **Projekti**, **O meni**, **Javite se**, **Istraži** i **Kontakt**).

## Mapiranje tekstova

| Lokacija / implementacijski ključ | Engleski izvornik | Hrvatski prijevod |
|---|---|---|
| `PageMeta.title` | `Organic Growth Notes \| Koupoli` | `Bilješke o organskom rastu \| Koupoli` |
| `PageMeta.description` | `Koupoli field notes on SEO, AI search, technical implementation, content systems, and organic growth.` | `Koupolijeve terenske bilješke o SEO-u, pretraživanju pomoću umjetne inteligencije, tehničkoj implementaciji, sustavima sadržaja i organskom rastu.` |
| Uvodni nadnaslov / `.growth-kicker` | `Field notes` | `Terenske bilješke` |
| Glavni naslov / `h1` | `Clear thinking for search, content, and the work between them.` | `Jasno promišljanje o pretraživanju, sadržaju i radu koji ih povezuje.` |
| Uvodni tekst | `Notes from the practice of building durable organic visibility without mistaking noise for progress.` | `Bilješke iz prakse izgradnje dugoročne organske vidljivosti bez brkanja buke s napretkom.` |
| Datum istaknutog članka / `blogPost.date` | `June 20, 2025` | `20. lipnja 2025.` |
| Naslov istaknutog članka / `blogPost.title` | `The Illusion of AI Productivity: Fast Fixes, But Real Projects Leave Most People Stuck` | `Iluzija produktivnosti uz AI: brza rješenja, ali stvarni projekti većinu ljudi ostavljaju zaglavljenima` |
| Sažetak istaknutog članka / `blogPost.excerpt` | `AI promises speed and shortcuts, but when tackling real projects, most people end up lost in an infinite loop of prompts, fixes, and confusion, but often with hilarious, unintended results.` | `AI obećava brzinu i prečace, ali kad se treba uhvatiti ukoštac sa stvarnim projektima, većina ljudi završi izgubljena u beskonačnoj petlji upita, popravaka i zbunjenosti — često uz smiješne, nenamjerne rezultate.` |
| CTA istaknutog članka / `.growth-text-link` | `Read the article` | `Pročitajte članak` |
| Alternativni tekst sličice / `site.articleThumbnail` | `Abstract illustration for The Illusion of AI Productivity` | `Apstraktna ilustracija za članak „Iluzija produktivnosti uz AI“` |

## Napomene o sadržaju

- **Koupoli**, **SEO** i **AI** ostaju neprevedeni kao naziv robne marke i uvriježene stručne kratice.
- Prijevod naslova i sažetka zadržava ironičan ton izvornika, ali koristi profesionalan, prirodan hrvatski jezik.
- Naslov, slika i CTA predstavljaju jedan te isti istaknuti članak; prikazani tekstovi moraju se primijeniti zajedno.
- Ako `blogPost` ostane zajednički objekt za englesku i hrvatsku inačicu, hrvatske vrijednosti treba izdvojiti u lokalizirani podatkovni objekt ili odabrati prema lokalitetu. Ne smiju se zamijeniti engleske vrijednosti, jer ih koriste postojeće engleske rute.
