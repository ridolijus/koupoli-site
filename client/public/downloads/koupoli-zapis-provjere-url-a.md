# Koupoli: zapis provjere URL-a

Datum opažanja: 7. studenoga 2026. Web: https://koupoli.com/. Zapis se odnosi na Koupolijev vlastiti URL hrvatske usluge, a ne na klijentsku domenu ili migraciju za više tržišta opisanu u profesionalnom iskustvu Karla Ridana.

## Promjena i zabilježeni rezultat

Prethodni URL: `https://koupoli.com/usluge/seo-optimizacija/`

Konačni URL: `https://koupoli.com/hr/usluge/seo-optimizacija/`

Konačna putanja smješta hrvatsku uslugu u jezičnu strukturu `/hr/`. Stara adresa zadržana je kao trajna redirekcija, umjesto uključivanja u sitemap kao dodatne stranice usluge.

Izravan GET zahtjev prema starom HTTPS URL-u vratio je HTTP 301. Njegovo `Location` zaglavlje navelo je konačni URL iznad. Zaseban GET zahtjev prema tom odredištu vratio je HTTP 200 bez dodatne redirekcije. Deklarirana kanonska adresa u HTML-u odredišta odgovarala je konačnom URL-u. XML sitemap sadržavao je konačni URL, a nije sadržavao stari.

Ovo je datirano opažanje jednog URL-a. Nije potpuni audit weba, provjera Googleove odabrane kanonske adrese, potvrda indeksiranja ni dokaz očuvanja prometa, poboljšanja pozicija ili citiranja u AI pretrazi. Budući se odgovori mogu promijeniti; ponovite provjere prije oslanjanja na njih.

## Ponovite HTTP provjere

Dohvatite zaglavlja odgovora bez praćenja prve redirekcije:

```sh
curl -sS -D - -o /dev/null https://koupoli.com/usluge/seo-optimizacija/
```

Provjerite HTTP 301 i `Location: https://koupoli.com/hr/usluge/seo-optimizacija/`. Nazivi zaglavlja ne razlikuju velika i mala slova; HTTP/2 može ih prikazati malim slovima.

Odredište provjerite zasebno:

```sh
curl -sS -D - -o /dev/null https://koupoli.com/hr/usluge/seo-optimizacija/
```

Provjerite HTTP 200, a ne dodatnu redirekciju. Pristup Koupolijevu računu hostinga nije potreban.

## Ponovite provjere signala stranice

Dohvatite konačni HTML i sitemap:

```sh
curl -sS https://koupoli.com/hr/usluge/seo-optimizacija/
curl -sS https://koupoli.com/sitemap.xml
```

U HTML zaglavlju provjerite deklariranu vrijednost `rel="canonical"`. U sitemapu pregledajte potpune vrijednosti `<loc>` umjesto oslanjanja na djelomično podudaranje teksta. Konačni URL treba biti prisutan, a stari odsutan. Za drugu višejezičnu migraciju provjerite i uzajamne jezične oznake te relevantnu internu navigaciju prema mapi konačnih URL-ova.

## Prilagodite zapis drugoj migraciji

Za svaki važan premješteni URL zabilježite staru adresu, konačni ekvivalent, razlog mapiranja, odgovornu osobu, zabilježeni odgovor, odgovor odredišta, deklariranu kanonsku adresu i datum provjere. Ako stara stranica nema relevantnu zamjenu, odlučite kako je povući umjesto automatskog preusmjeravanja na početnu stranicu.

Redirekcije, sadržaj odredišta, interne poveznice, jezične oznake i sitemap pregledavajte kao povezane signale. Search Console URL Inspection zatim se može koristiti zasebno za Googleov aktualni zapis o indeksiranju i kanonskoj adresi. Uspješna HTTP provjera sama ne daje te podatke.

## Reference

- [Konačna Koupolijeva hrvatska usluga](https://koupoli.com/hr/usluge/seo-optimizacija/)
- [Koupoli sitemap](https://koupoli.com/sitemap.xml)
- [Google Search Central: migracije s promjenama URL-ova](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google Search Central: kanonske adrese](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
