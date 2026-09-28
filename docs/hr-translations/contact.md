# Koupoli Contact — Croatian translation map

**Source:** `client/src/pages/GrowthContact.tsx`  
**Target locale:** Croatian (`hr`)  
**Implementation rule:** Keep the existing field names (`name`, `email`, `business`, `goal`, `constraint`), three-question order, required validation, line breaks, and `${...}` interpolation unchanged. Translate only the displayed strings and email content below.

## Metadata

| Source property | English source | Croatian implementation |
|---|---|---|
| `PageMeta.title` | `Start a Conversation \| Koupoli` | `Započnite razgovor \| Koupoli` |
| `PageMeta.description` | `Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation.` | `Recite Koupoliju nešto o svojem poslovanju, cilju organskog rasta i trenutačnoj prepreci kako biste započeli usmjeren razgovor o SEO-u i pretraživanju uz pomoć umjetne inteligencije.` |

## Introductory copy

| UI location | English source | Croatian implementation |
|---|---|---|
| Kicker | `Start a conversation` | `Započnite razgovor` |
| H1 | `Bring the context, not a perfect brief.` | `Donesite kontekst, ne savršen brief.` |
| Introductory paragraph | `Answer three practical questions so the first conversation can focus on the business, the buyers, and the work that will matter most.` | `Odgovorite na tri praktična pitanja kako bismo se u prvom razgovoru mogli usredotočiti na poslovanje, kupce i aktivnosti koje će imati najveći učinak.` |
| Note heading | `What happens next` | `Što slijedi` |
| Note text | `Your answers open a prepared email enquiry. Nothing is published or added to a mailing list.` | `Vaši odgovori otvorit će unaprijed pripremljenu poruku s upitom. Ništa se neće objaviti niti dodati na popis za slanje e-pošte.` |

## Contact details

| UI location | English source | Croatian implementation |
|---|---|---|
| Name label | `Name` | `Ime` |
| Name placeholder | `Your name` | `Vaše ime` |
| Work-email label | `Work email` | `Poslovna e-adresa` |
| Work-email placeholder | `you@company.com` | `vi@tvrtka.hr` |

## Qualification questions

> Preserve the three fieldsets, their existing numbers, and their order.

| Question | English source | Croatian implementation |
|---|---|---|
| `business` legend | `1. What is the business or website you want to grow?` | `1. Koje poslovanje ili web-stranicu želite razvijati?` |
| `business` placeholder | `Share your company, website, product, or market.` | `Opišite svoju tvrtku, web-stranicu, proizvod ili tržište.` |
| `goal` legend | `2. What would a useful organic growth outcome look like?` | `2. Koji bi ishod organskog rasta bio koristan za vas?` |
| `goal` placeholder | `For example: a stronger launch, qualified leads, visibility in a new category, or technical clarity.` | `Na primjer: uspješnije lansiranje, kvalificirani potencijalni klijenti, vidljivost u novoj kategoriji ili jasnija tehnička slika.` |
| `constraint` legend | `3. What is getting in the way right now?` | `3. Što vam trenutačno stoji na putu?` |
| `constraint` placeholder | `Describe the main uncertainty, bottleneck, or search problem.` | `Opišite glavnu nedoumicu, usko grlo ili problem povezan s pretraživanjem.` |

## Submission feedback

| UI location | English source | Croatian implementation |
|---|---|---|
| Submit button | `Send enquiry` | `Pošaljite upit` |
| Post-submit status (`role="status"`) | `Your email app should now be ready with the full enquiry.` | `Vaša bi aplikacija za e-poštu sada trebala biti otvorena s cjelovitim upitom.` |

## Prepared email

### Subject

```ts
// English
`Koupoli enquiry from ${name || "a visitor"}`

// Croatian
`Koupoli upit od ${name || "posjetitelja"}`
```

### Body labels

Retain the existing values, empty-string separators, ordering, and `join("\n")`. Replace the labels only:

```ts
const body = [
  `Ime: ${name}`,
  `E-pošta: ${email}`,
  "",
  "1. Tvrtka ili web-stranica",
  business,
  "",
  "2. Cilj organskog rasta",
  goal,
  "",
  "3. Trenutačna prepreka",
  constraint,
].join("\n");
```

## Implementation checklist

- Replace every string in the tables and code block above; do not translate form field names or alter form behaviour.
- Use the Croatian email fallback `posjetitelja` exactly as shown when the name is blank.
- Preserve the qualification structure as **three required questions**, numbered **1–3**.
- When wiring the translated page to the Croatian route, use the locale value expected by the app’s existing localization setup (typically `hr`) while leaving all non-copy behavior untouched.
