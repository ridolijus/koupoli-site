# Kontrolni popis za SEO migraciju web-stranice

Kopirajte ovaj predložak u projektni alat prije redizajna, promjene platforme, domene ili strukture URL-ova.

## 1. Definirajte opseg migracije

- [ ] Zabilježite svrhu promjene i datum lansiranja.
- [ ] Odredite vlasnika za SEO, razvoj, sadržaj, analitiku i završno odobrenje.
- [ ] Potvrdite mijenja li migracija domenu, strukturu URL-ova, CMS, predloške, jezične verzije, sadržaj, navigaciju ili praćenje.
- [ ] Odredite stranice i poslovne ishode koje je potrebno zaštititi.

## 2. Izradite inventar URL-ova i stranica

- [ ] Izvezite URL-ove koji se mogu crawlat i očite duplikate uklanjajte tek nakon pregleda.
- [ ] Označite stranice s organskim klikovima, impresijama, poveznicama, konverzijama, korištenjem u plaćenim kampanjama ili velikom internom važnošću.
- [ ] Za prioritetne stranice zabilježite postojeći naslov, glavni naslov, canonical URL, statusni kod i mogućnost indeksiranja.
- [ ] Odredite koje stranice zadržavaju namjeru, spajaju se s bližom stranicom ili se povlače bez zamjene.

## 3. Dovršite mapu redirekcija

| Stari URL | Konačni canonical URL | Odluka | Razlog | Vlasnik | Testirano |
| --- | --- | --- | --- | --- | --- |
| `https://example.com/stara-stranica/` | `https://example.com/nova-stranica/` | Redirekcija | Ista namjera pretraživanja | Ime | Da / Ne |

- [ ] Svaki važan stari URL izravno mapirajte na najbližu konačnu stranicu.
- [ ] Izbjegnite lance i petlje redirekcija, generičke redirekcije na početnu stranicu i odredišta koja nisu povezana s izvornim sadržajem.
- [ ] Konačno odredište mora biti indeksabilno i povezano iz interne strukture stranice.
- [ ] Zabilježite iznimke i poslovni razlog za svaku od njih.

## 4. Pregledajte staging okruženje prije lansiranja

- [ ] Crawlajte reprezentativne predloške i prioritetne URL-ove.
- [ ] Provjerite vraća li namjeravani canonical URL uspješan odgovor.
- [ ] Potvrdite da naslovi, glavni naslovi, meta opisi i vidljivi sadržaj i dalje odgovaraju namjeni stranice.
- [ ] Provjerite upućuju li interna navigacija i poveznice u sadržaju na konačne URL-ove.
- [ ] Validirajte hreflang parove i birače jezika ako stranica ima više jezičnih verzija.
- [ ] Provjerite opisuju li strukturirani podaci vidljivi sadržaj i koriste li konačne URL-ove.
- [ ] Potvrdite da će privremeni `noindex`, lozinka ili robots ograničenja biti uklonjeni pri lansiranju.
- [ ] Potvrdite da su analitika, događaji konverzije i postavke privole spremni za prikupljanje podataka.

## 5. Dovršite provjere na dan lansiranja

- [ ] Objavite mapu redirekcija i izravno testirajte prioritetne stare URL-ove.
- [ ] Potvrdite da konačne stranice vraćaju očekivani odgovor, canonical i jezične alternative.
- [ ] Provjerite jesu li URL-ovi u sitemapu kanonikalni, indeksabilni i jednaki objavljenoj web-stranici.
- [ ] Potvrdite da `robots.txt` dopušta crawliranje namjeravanih javnih stranica.
- [ ] Provjerite početnu stranicu, komercijalnu stranicu, sadržajnu stranicu i premješteni stari URL u običnoj sesiji preglednika.
- [ ] Ponovno pošaljite XML sitemap u Google Search Console nakon konačne javne objave.

## 6. Pratite prvih 30 dana

- [ ] Koristite URL Inspection za prioritetne stranice i riješite jasne probleme s canonicalima, crawliranjem, prikazivanjem ili indeksiranjem.
- [ ] Barem jednom tjedno pregledajte indeksiranje, obradu sitemapa, impresije, klikove i prioritetne upite u Search Consoleu.
- [ ] Crawlajte objavljenu web-stranicu i usporedite redirekcije, statusne kodove, canonical URL-ove i interne poveznice s mapom migracije.
- [ ] Usporedite zaštićene stranice s početnim stanjem prije lansiranja prije nego promijenite sadržaj ili naslove.
- [ ] Zabilježite važne promjene, vjerojatne uzroke, vlasnika i sljedeći korak kako bi se kretanje rezultata moglo objasniti.

Ovaj je predložak pomoć za planiranje, a ne zamjena za crawl, mapu redirekcija ili tehnički pregled konkretne web-stranice.
