# Koupoli članak — hrvatski prijevod

Sljedeći je TypeScript spreman za lokalizirani ekvivalent podataka `blogPost` i svih statičnih, korisniku vidljivih nizova iz `GrowthBlogPost.tsx`. Nazivi brendova, SEO terminologija, struktura, naglasak u uvodnom odlomku i sve činjenične tvrdnje zadržani su.

```ts
export const hrBlogPost = {
  date: "20. lipnja 2025.",
  title: "Iluzija produktivnosti uz AI: Brza rješenja, ali stvarni projekti većinu ljudi ostavljaju zaglavljenima",
  excerpt:
    "AI obećava brzinu i prečace, ali kad se uhvatimo stvarnih projekata, većina ljudi završi izgubljena u beskonačnoj petlji promptova, popravaka i zbunjenosti — često uz urnebesne, nenamjerne rezultate.",
  sections: [
    {
      heading: "Fatamorgana produktivnosti uz AI",
      paragraphs: [
        "Budimo iskreni, AI je najveći prečac na svijetu. Treba vam brzo rješenje za kod? AI je tu. Želite tekst od 500 riječi o zdravstvenim prednostima mrkve? Gotovo za nekoliko sekundi. Ali pokušajte od njega zatražiti arhitekturu full-stack SaaS platforme ili sljedeći veliki američki roman i odjednom buljite u trepćući kursor, pitajući se nije li ipak bilo pametnije naučiti popravljati klima-uređaje.",
        "AI nam daje iluziju brzine. To je kao da imate Ferrari u garaži: da, možete s nule do šezdeset za 3,2 sekunde, ali samo ako vozite ravno, bez prometa, bez zavoja i bez potrebe za bočnim parkiranjem. Čim skrenete u teritorij „stvarnog projekta”, shvatite da ste zaboravili ugraditi volan.",
      ],
    },
    {
      heading: "Beskonačne petlje: novo ljudsko stanje",
      paragraphs: [
        "Evo prljave tajne AI-ja: 99 % ljudi nema pojma kako s njime započeti stvarni projekt. Zadajete prompt, on odgovori. Zadajete ga ponovno, a on odgovori drukčije. Prije nego što se snađete, zaglavili ste u beskonačnoj petlji kopiranja, lijepljenja i preformuliranja, nadajući se čudu. To je produktivni ekvivalent pokušaju bijega iz labirinta tako da sve brže i brže trčite ukrug, a da zapravo nikad ne izađete.",
        "AI je postao vrhunski saveznik prokrastinacije. Zašto biste sami radili težak posao kad možete stroju prepustiti da ga obavi, a zatim ostatak dana popravljati njegove pogreške? Kako bi se reklo: „AI može sve napraviti umjesto vas”, ali ako se dovoljno dugo oslanjate na njega, mogli biste zaboraviti spojiti dva i dva i napisati rečenicu dulju od deset riječi.",
      ],
    },
    {
      heading: "Komedija pogrešaka: AI na radnom mjestu",
      paragraphs: [
        "Ne zaboravimo ni komično zlato koje AI donosi u ured. Zamislite ovo: šef vam je sada uglađen, srebrni robot s kravatom, izvrstan u zakazivanju sastanaka, ali užasan u prepoznavanju vašeg izraza lica „Treba mi jeb*** pauza”. Vaš novi kolega na pogon AI-ja genij je za programiranje — sve dok samouvjereno ne isporuči program koji vašu e-trgovinu pretvori u virtualnu agenciju za udomljavanje kućnih ljubimaca.",
        "Članci koje je generirao AI posebna su poslastica. Tko ne voli čitati rečenice poput „Blockchain ekosustav vođen sinergijom katalizira disruptivnu paradigmu jednoroga”? To je kao Mad Libs za poslovne profesionalce, samo što nitko ne zna što završni proizvod zapravo znači.",
        "I ne previdimo jedinstveni pristup AI-ja zapošljavanju. Trebate kvantnog fizičara koji također plete košare pod vodom? Postoji AI kandidat za to. Chatbotovi za korisničku podršku? Spremni su nadograditi vašu kosilicu na nuklearni pogon na karaoke izdanje.",
      ],
    },
    {
      heading: "AI: veliki izjednačivač besmislica",
      paragraphs: [
        "U akademskoj zajednici profesori sada uživaju ocjenjujući eseje koje su napisali strojevi. Čemu se zamarati originalnim mišljenjem kad AI umjesto vas može proizvesti potpune besmislice? Uostalom, studenti koji se prevarama provlače kroz studij očito su sposobniji od onih koji stvarno rade — barem bi strojevi željeli da u to vjerujete.",
        "Zdravstvo je još jedan korisnik filozofije AI-ja „brzina ispred preciznosti”. Kome treba točna dijagnoza kad može dobiti brzu? Osobno jedva čekam idući pregled, kada mi ChatGPT kaže da imam bjesnoću jer sam prošli tjedan guglao „ugriz psa”.",
      ],
    },
    {
      heading: "Memifikacija AI-ja",
      paragraphs: [
        "Tražite li dokaz da AI mijenja način na koji razmišljamo, ne tražite dalje od internetske zalihe AI memova. Programeri se prema AI-ju odnose kao prema čarobnom štapiću i očekuju trenutačna rješenja. Stvarnost? AI je više poput džina iz boce: brzo ispunjava želje, ali često stvori sintaksni kaos zbog kojeg se pitate nije li bilo bolje da ste kod jednostavno napisali sami.",
        "I ne zaboravimo memeove o „krivulji učenja” AI-ja. AI je dobar samo koliko i podaci na kojima je treniran, što znači da jednako lako može pogrešno razumjeti vaše pitanje kao i vaš najmanje omiljeni kolega. Ali hej, barem vas ne osuđuje zato što istu stvar pitate na pet različitih načina.",
      ],
    },
    {
      heading: "Humor uz AI: mogu li roboti doista biti smiješni?",
      paragraphs: [
        "Pokušaji AI-ja da bude duhovit žanr su za sebe. Kad ga se zatraži da napiše šale, AI često poseže za izlizanim stereotipima ili jednorečeničnim šalama. Primjerice: „Moj društveni život cvjeta. Ako pod cvjetanjem mislite da mi je najbolji prijatelj biljka po imenu Wilson.” To nas podsjeća da AI, iako podatke može obrađivati brzinom munje, još uvijek teško razumije što nas zapravo nasmijava.",
      ],
    },
    {
      heading: "Radi li AI za nas ili mi radimo za AI?",
      paragraphs: [
        "Dok organizacije pokušavaju uključiti AI, veliko pitanje ostaje: koristimo li mi AI ili AI koristi nas? Neki predviđaju budućnost u kojoj su roboti izvršni direktori, rade 24/7 bez plaće i nikad ne traže pauzu za kavu. Drugi upozoravaju da je produktivnost postignuta rezanjem troškova samo utrka prema dnu.",
        "Istina je da je AI koristan samo onoliko koliko su korisni ljudi koji ga upotrebljavaju. Oni s mentalitetom rasta pronaći će načine za suradnju s AI-jem, dok bi se oni koji traže prečace mogli naći u situaciji da ih prestigne upravo tehnologija za koju su se nadali da će im uštedjeti vrijeme.",
      ],
    },
  ],
  guide: [
    "Prihvatite beskonačnu petlju: Kad ste u nedoumici, samo nastavite pisati promptove. Na kraju ćete ili dobiti odgovor koji želite ili zaboraviti što ste uopće pitali.",
    "Ovladajte umijećem brzog popravka: Postanite stručnjak za korištenje AI-ja pri malim zadacima. Treba vam upečatljiv naslov ili sažetak od tri rečenice? Na konju ste.",
    "Izbjegavajte stvarne projekte pod svaku cijenu: Ako vas netko zamoli da uz AI izgradite nešto ozbiljno, samo zamišljeno kimnite i recite: „Javit ću vam se nakon sljedećeg ažuriranja.”",
    "Skupljajte AI memeove: Kad sve drugo zakaže, podijelite meme. To je univerzalni jezik digitalnog doba.",
    "Zapamtite: brže nije uvijek bolje: Ponekad je sporiji, ljudski način jedini način da se nešto napravi kako treba.",
  ],
  conclusion: [
    "AI mijenja način na koji razmišljamo, radimo i prokrastiniramo. Obećava brzinu, ali često isporučuje zbunjenost. Može vas ubrzati pri malim, brzim popravcima. No kada treba izgraditi nešto stvarno, većina nas još uvijek stoji na startnoj crti, zarobljena u beskonačnoj petlji pitanja „odakle uopće krenuti?”. A možda je, samo možda, upravo to poanta koja nam svima treba.",
    "Stoga se sljedeći put, kad dobijete poriv prepustiti veliki projekt AI-ju, sjetite: jedino što je brže od AI-ja jest brzina kojom se možete izgubiti u labirintu koji on stvori. Ali hej, barem ćete usput imati mnogo memeova da vam prave društvo.",
  ],
} as const;

export const hrGrowthBlogPostPageStrings = {
  meta: {
    title: "Iluzija produktivnosti uz AI | Koupoli",
    description:
      "Koupolijeva terenska bilješka o produktivnosti uz AI, prečacima i ljudskom radu potrebnom da se složeni projekti doista ostvare.",
  },
  imageAlt: "Apstraktna ilustracija produktivnosti uz AI",
  welcome: {
    beforeEmphasis:
      "Dobro došli u budućnost, u kojoj umjetna inteligencija obećava da će nas sve učiniti bržima, pametnijima i, ako je vjerovati marketingu, ",
    emphasis: "zgodnijima",
    afterEmphasis:
      ". No prije nego što svoj sljedeći veliki projekt prepustite omiljenom chatbotu, prošećimo stvarnim utjecajem AI-ja na produktivnost, kreativnost i ljudsku sposobnost da zapnemo u beskonačnoj petlji pitanja „odakle uopće krenuti?”.",
  },
  guide: {
    heading: "Vodič za preživljavanje AI revolucije",
    intro: "Koja je, dakle, tajna uspijevanja u svijetu na pogon AI-ja? Evo vodiča za preživljavanje:",
  },
  conclusionHeading: "Zaključak: beskonačni AI",
  returnLabel: "Natrag na terenske bilješke",
} as const;
```

## Mapiranje nizova iz komponente

| Izvorni prikaz u `GrowthBlogPost.tsx` | Hrvatski izvor |
|---|---|
| `PageMeta.title` | `hrGrowthBlogPostPageStrings.meta.title` |
| `PageMeta.description` | `hrGrowthBlogPostPageStrings.meta.description` |
| `blogPost.date`, `blogPost.title`, `blogPost.excerpt`, `sections`, `guide`, `conclusion` | Odgovarajuća polja iz `hrBlogPost` |
| `alt="Abstract illustration for AI productivity"` | `hrGrowthBlogPostPageStrings.imageAlt` |
| Uvodni odlomak prije `<strong>` | `hrGrowthBlogPostPageStrings.welcome.beforeEmphasis` |
| Tekst unutar `<strong>` | `hrGrowthBlogPostPageStrings.welcome.emphasis` |
| Uvodni odlomak nakon `<strong>` | `hrGrowthBlogPostPageStrings.welcome.afterEmphasis` |
| `The Guide to Surviving the AI Revolution` | `hrGrowthBlogPostPageStrings.guide.heading` |
| `So, what's the secret to thriving in an AI-powered world? Here's a survival guide:` | `hrGrowthBlogPostPageStrings.guide.intro` |
| `Conclusion: The Infinite AI` | `hrGrowthBlogPostPageStrings.conclusionHeading` |
| `Back to field notes` | `hrGrowthBlogPostPageStrings.returnLabel` |

> **Napomena za implementaciju:** zadržite `<strong>` omotač postojeće komponente i unutar njega postavite `welcome.emphasis`; tako se čuva izvorni vizualni naglasak bez uvođenja HTML-a u prijevod.
