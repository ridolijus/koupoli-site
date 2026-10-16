# Website Migration SEO Checklist

Copy this template into the project tracker before a redesign, platform move, domain change, or URL restructuring project.

## 1. Set the migration scope

- [ ] Record the purpose and launch date of the change.
- [ ] Name the owner for SEO, development, content, analytics, and sign-off.
- [ ] Confirm whether the migration changes the domain, URL structure, CMS, templates, language handling, content, navigation, or tracking.
- [ ] Define the pages and business outcomes that must be protected.

## 2. Build the URL and page inventory

- [ ] Export crawlable legacy URLs and remove obvious duplicates only after review.
- [ ] Mark pages with organic clicks, impressions, links, conversions, paid landing-page use, or high internal-link importance.
- [ ] Record the current title, main heading, canonical URL, status code, and indexability for priority pages.
- [ ] Identify pages that keep their intent, consolidate into a closer page, or retire without a replacement.

## 3. Complete the redirect map

| Legacy URL | Final canonical URL | Decision | Reason | Owner | Tested |
| --- | --- | --- | --- | --- | --- |
| `https://example.com/old-page/` | `https://example.com/new-page/` | Redirect | Same search intent | Name | Yes / No |

- [ ] Map each important legacy URL directly to the closest final page.
- [ ] Avoid redirect chains, loops, generic homepage redirects, and redirects to loosely related pages.
- [ ] Keep the final destination indexable and internally linked.
- [ ] Record exceptions and the business reason for each one.

## 4. Review the staging site before launch

- [ ] Crawl representative templates and priority URLs.
- [ ] Check that the intended canonical URL returns a successful response.
- [ ] Confirm titles, main headings, meta descriptions, and visible content still match the page purpose.
- [ ] Check internal navigation and contextual links point to final URLs.
- [ ] Validate hreflang pairs and language selectors where the site has multiple languages.
- [ ] Check structured data describes visible content and uses final URLs.
- [ ] Confirm temporary `noindex`, password, or robots restrictions will be removed at launch.
- [ ] Confirm analytics, conversion events, and consent configuration are ready to collect data.

## 5. Complete launch-day checks

- [ ] Release the redirect map and test high-priority legacy URLs directly.
- [ ] Confirm final pages return the expected response, canonical, and language alternate tags.
- [ ] Check that sitemap URLs are canonical, indexable, and match the live site.
- [ ] Confirm `robots.txt` allows the intended public pages to be crawled.
- [ ] Inspect the homepage, a commercial page, a content page, and a moved legacy URL from a normal browser session.
- [ ] Resubmit the XML sitemap in Google Search Console after the final public deployment.

## 6. Monitor the first 30 days

- [ ] Use URL Inspection for priority pages and fix clear canonical, crawl, rendering, or indexation errors.
- [ ] Review Search Console indexing, sitemap processing, impressions, clicks, and priority queries at least weekly.
- [ ] Crawl the live site and compare redirects, response codes, canonical URLs, and internal links against the migration map.
- [ ] Compare protected pages against the pre-launch baseline before changing content or titles.
- [ ] Log material changes, likely causes, owner, and next action so performance movement can be explained.

This template is a planning aid, not a substitute for a crawl, a redirect map, or a technical review of the specific website.
