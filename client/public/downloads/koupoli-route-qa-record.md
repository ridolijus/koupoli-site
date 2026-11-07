# Koupoli route QA record

Observation date: November 7, 2026. Website: https://koupoli.com/. This record concerns Koupoli's own Croatian service URL, not a client domain or the multi-market migration described in Karlo Ridan's professional experience.

## The change and the observed result

Previous URL: `https://koupoli.com/usluge/seo-optimizacija/`

Final URL: `https://koupoli.com/hr/usluge/seo-optimizacija/`

The final path places the Croatian service within the site's `/hr/` language hierarchy. The old route is retained as a permanent redirect, rather than included as another service page in the sitemap.

A direct GET request to the previous HTTPS URL returned HTTP 301. Its `Location` header named the final URL above. A separate GET request to that destination returned HTTP 200 with no further redirect. The declared canonical in the destination HTML matched the final URL. The XML sitemap included the final URL and excluded the old one.

This is a dated observation of one route. It is not a complete site audit, a Google-selected canonical check, an indexing confirmation, or evidence of preserved traffic, improved rankings or AI citations. Future responses can change; repeat the checks before relying on them.

## Repeat the HTTP checks

Retrieve response headers without following the first redirect:

```sh
curl -sS -D - -o /dev/null https://koupoli.com/usluge/seo-optimizacija/
```

Look for HTTP 301 and `Location: https://koupoli.com/hr/usluge/seo-optimizacija/`. Header names are case-insensitive; HTTP/2 may display them in lowercase.

Check the destination separately:

```sh
curl -sS -D - -o /dev/null https://koupoli.com/hr/usluge/seo-optimizacija/
```

Look for HTTP 200, not another redirect. No access to Koupoli's hosting account is needed.

## Repeat the page-signal checks

Retrieve the final HTML and sitemap:

```sh
curl -sS https://koupoli.com/hr/usluge/seo-optimizacija/
curl -sS https://koupoli.com/sitemap.xml
```

In the HTML head, check the declared `rel="canonical"` value. In the sitemap, inspect complete `<loc>` values rather than relying on a partial string match. The final URL should be present and the previous URL absent. For another multilingual migration, also inspect reciprocal language alternates and relevant internal navigation against the final URL map.

## Adapt the record to another migration

For each important moved URL, record its old address, final equivalent, reason for the mapping, implementation owner, observed response, final response, declared canonical and check date. If the old page has no relevant replacement, decide how to retire it instead of redirecting automatically to the homepage.

Review redirects, destination content, internal links, language alternates and sitemap entries as related signals. Search Console URL Inspection can then be used separately for Google's current index and canonical records. A successful HTTP test cannot supply those records on its own.

## References

- [Koupoli's final Croatian service](https://koupoli.com/hr/usluge/seo-optimizacija/)
- [Koupoli sitemap](https://koupoli.com/sitemap.xml)
- [Google Search Central: site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google Search Central: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
