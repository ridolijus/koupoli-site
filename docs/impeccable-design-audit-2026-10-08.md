# Impeccable design audit

**Scope:** Koupoli public website, local repository and the current production URL.  
**Date:** 8 October 2026  
**Tool:** [Impeccable](https://github.com/pbakaus/impeccable), installed as a project skill under `.github/skills/impeccable`.

## Product record

`PRODUCT.md` now records the website’s confirmed audience, purpose, operating context, technical constraints, brand commitments, evidence, and accessibility baseline. The slash-command form of `/impeccable init` is not exposed by this coding harness, so the equivalent durable product record was created manually from the established project brief.

## Initial findings and changes

The initial detector found **39 anti-patterns** in the source and **6** on the live site. Locations below refer to the pre-remediation source snapshot. Closely repeated declarations are grouped where they share the same selector family and remedy.

| Finding | Original source location(s) | Remediation |
|---|---|---|
| Indigo-to-blue gradient and ambient spotlight | `client/src/index.css:23, 43, 78, 159` | Replaced gradients, radial glows, drop shadows, and the floating orbital motif with a paper background, blue typography, illustrations, dividers, and spacing. |
| Overused typography | `client/index.html:9`; `client/src/index.css:2, 11, 15, 27-28, 40, 50, 60, 71, 85, 99, 106, 112, 159-212` | Replaced the previous display/body stack with **DM Serif Display**, **IBM Plex Sans**, and **IBM Plex Mono**. The display face is reserved for headings and the serif references no longer dominate all interface text. |
| Blurred fixed header | `client/src/index.css:5` | Removed `backdrop-filter`; the header uses the opaque brand paper colour so contrast does not depend on the page beneath it. |
| Pill-shaped labels and controls | `client/src/index.css:11, 16, 20, 53, 120, 182, 221` | Converted rounded controls and taxonomies to squared, lightly bordered editorial controls. |
| Tiny uppercase/tracked utility labels | `client/src/index.css:8, 12, 27, 42, 50, 60, 69, 71, 77, 84, 99, 106, 112, 120, 159, 164, 182, 210-212` | Removed decorative all-caps styling, raised all text labels to at least 12px, and reduced tracking. Body prose was standardised to 16px or larger. |
| Tight multi-line display leading | `client/src/index.css:28, 40, 60, 69, 71, 73, 75, 85, 91, 99-100, 106, 112, 122, 143, 159-212` | Increased all display and heading leading to 1.3, leaving generous paragraph leading at 1.45–1.72. |
| Oversized sentence headline | `client/src/index.css:28` | Reduced the landing-page H1 scale and maximum measure so the value proposition, CTA, and visual share the first viewport. |
| Decorative numbered sequences | `client/src/components/GrowthLanding.tsx:23-95, 162-208` | Removed `01–04` offer numbering, signal labels, system numbers, and article/guide ordinals when they did not indicate a real sequence. |
| Generic icon tiles and visual-only labels | `client/src/components/GrowthLanding.tsx:142-154`; `client/src/index.css:45-48` | Removed the small rounded icon treatment and surfaced the topics through direct headings and descriptions. |
| Repeated raised card grids | `client/src/index.css:45-76, 139-146, 171-193, 212, 255-265` | Flattened homepage, article, glossary, project, and contextual-link grids into editorial columns separated by real dividers. The two offers remain a two-column comparison because they are intentionally distinct choices. |
| Cards inside cards and decorative card shadows | `client/src/index.css:50-60, 78, 106-154, 159-214` | Removed decorative shadow stacks, surplus backgrounds, and side decoration; retained image cropping where it serves media presentation. |
| Hover elevation, hover zoom, and floating motion | `client/src/index.css:17, 43, 50, 55, 71, 92-93, 112, 146, 193, 212` | Removed translate, scale, and keyframe motion. Hover feedback is limited to colour and opacity. |
| Layout-affecting transitions | `client/src/components/ui/sidebar.tsx:225, 239, 415, 484` | Replaced width, height, padding, and margin transitions in the unused template sidebar with static or opacity-only behavior. |
| Clipped page wrapper | `client/src/index.css:2` | Restored visible overflow for the site wrapper; image crops keep their own scoped clipping. |
| Generic or inflated copy and em dashes | `client/src/**/*.tsx` | Rechecked public strings. No em dashes, “supercharge”, “world-class”, “Introducing”, or “Not a feature. A platform.” copy remains. Existing Koupoli copy describes the work directly. |
| Default cream/italic-serf treatment | `client/src/index.css:23, 28, 78, 159` | Kept the established Koupoli paper colour only as a neutral brand surface, not a generic cream treatment. Headings use upright DM Serif Display, not an oversized italic display. |

## Intentional retained choices

- **Blue and paper:** These are established Koupoli brand colours. Their application is now flat and contrast-led rather than gradient-led.
- **Editorial display headings:** The site keeps a characterful serif for headings, while operational UI and body copy use IBM Plex. This creates hierarchy without using generic AI-site typography.
- **Structured grids:** Projects, guides, glossary terms, and the two service offers still use columns because the content genuinely needs comparison or scanning. They are no longer a field of identical elevated cards.
- **Image cropping:** `overflow: hidden` remains on media frames only to crop illustrations and project imagery. It is not used on navigation, page wrappers, or interactive containers.
- **One detector remainder:** After the source remediation, `npx impeccable detect http://localhost:3000` reports one generic `layout-transition` warning. Repository search confirms no `height`, `width`, `padding`, or `margin` transition remains in application source. This is treated as an unresolved detector false positive pending a more specific selector from the tool.

## Final checks

- `pnpm check` passes.
- `pnpm vite build --base /` passes.
- `git diff --check` passes.
- Desktop and mobile homepage, glossary, projects, and contact views were reviewed.
- The live URL was scanned before changes as required; the locally remediated preview was scanned after changes. Production remains unchanged until this reviewed revision is approved and pushed.
