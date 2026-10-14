import { FormEvent, useState } from "react";
import ContextLinks from "@/components/ContextLinks";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";

type Locale = "en" | "hr";
type SubmissionState = "idle" | "submitting" | "success" | "error";

const formEndpoint = "https://formspree.io/f/xgaokqng";

const copies = {
  en: {
    title: "Start a Conversation | Koupoli",
    description: "Tell Koupoli about the decision ahead, the organic growth outcome you need, and the current constraint to begin a focused SEO and AI search conversation.",
    kicker: "Start a conversation",
    heading: "Bring the decision, not a perfect brief.",
    lead: "Answer three practical questions so the first conversation can focus on the business decision, the buyers, and the work that will remove the most friction.",
    next: "What happens next",
    note: "Your answers are sent directly to Koupoli and used to decide whether an advisory plan, ongoing operations, or a different next step is most useful. Nothing is published or added to a mailing list.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Work email",
    emailPlaceholder: "you@company.com",
    questions: [
      ["What business decision or growth moment are you working through?", "Share the company, website, product, market, launch, migration, or change ahead."],
      ["What outcome does this work need to unlock?", "For example: a clearer launch decision, qualified leads, category visibility, or technical confidence."],
      ["What is slowing the next step right now?", "Describe the main uncertainty, bottleneck, dependency, or search problem."],
    ],
    submit: "Send enquiry",
    sending: "Sending enquiry...",
    success: "Thanks - your enquiry has been sent. Koupoli will reply to the email you provided.",
    error: "The enquiry could not be sent. Please try again shortly.",
  },
  hr: {
    title: "Započnite razgovor | Koupoli",
    description: "Recite Koupoliju nešto o odluci koja je pred vama, ishodu organskog rasta koji trebate i trenutačnoj prepreci kako biste započeli usmjeren razgovor o SEO-u i AI pretrazi.",
    kicker: "Započnite razgovor",
    heading: "Donesite odluku, ne savršen brief.",
    lead: "Odgovorite na tri praktična pitanja kako bismo se u prvom razgovoru mogli usredotočiti na poslovnu odluku, kupce i rad koji će ukloniti najviše prepreka.",
    next: "Što slijedi",
    note: "Vaši odgovori šalju se izravno Koupoliju i koriste se za odluku je li najkorisniji savjetodavni plan, kontinuirani operativni rad ili neki drugi sljedeći korak. Ništa se neće objaviti niti dodati na popis za slanje e-pošte.",
    name: "Ime",
    namePlaceholder: "Vaše ime",
    email: "Poslovna e-adresa",
    emailPlaceholder: "vi@tvrtka.hr",
    questions: [
      ["Koju poslovnu odluku ili fazu rasta trenutno rješavate?", "Opišite tvrtku, web-stranicu, proizvod, tržište, lansiranje, migraciju ili promjenu koja je pred vama."],
      ["Koji ishod ovaj rad treba omogućiti?", "Na primjer: jasniju odluku o lansiranju, kvalificirane potencijalne klijente, vidljivost kategorije ili tehničku sigurnost."],
      ["Što trenutno usporava sljedeći korak?", "Opišite glavnu nedoumicu, usko grlo, ovisnost ili problem povezan s pretraživanjem."],
    ],
    submit: "Pošaljite upit",
    sending: "Slanje upita...",
    success: "Hvala - upit je poslan. Koupoli će odgovoriti na e-adresu koju ste naveli.",
    error: "Upit nije moguće poslati. Pokušajte ponovno uskoro.",
  },
} as const;

export default function GrowthContact({ locale = "en" }: { locale?: Locale }) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const copy = copies[locale];
  const related = locale === "hr" ? [
    { href: "/hr/#offers", title: "Dva načina suradnje", description: "Odaberite savjetodavni plan za lansiranje ili kontinuirani SEO i AI Search rad." },
    { href: "/hr/post/ai-search-visibility/", title: "Vidljivost u AI pretrazi", description: "Razjasnite što je korisno mjeriti prije prvog razgovora o AI pretrazi." },
    { href: "/hr/projects/", title: "Projekti", description: "Pogledajte odabrani rad iz tehničkog SEO-a, sadržaja i razvoja web-stranica." },
  ] : [
    { href: "/#offers", title: "Two ways to work together", description: "Choose a launch advisory plan or ongoing SEO and AI search execution." },
    { href: "/post/ai-search-visibility/", title: "AI Search Visibility", description: "Clarify what is useful to measure before a first conversation about AI search." },
    { href: "/projects/", title: "Projects", description: "See selected work across technical SEO, content, and website development." },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree submission failed");
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-contact-page">
      <div className="growth-container growth-contact-grid">
        <div className="growth-contact-copy"><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p><div className="growth-contact-note"><span>{copy.next}</span><p>{copy.note}</p></div></div>
        <form className="growth-contact-form" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
          <label className="growth-contact-honeypot" aria-hidden="true"><span>Leave this field empty</span><input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
          <div className="growth-contact-details"><label><span>{copy.name}</span><input required name="name" autoComplete="name" placeholder={copy.namePlaceholder} /></label><label><span>{copy.email}</span><input required type="email" name="email" autoComplete="email" placeholder={copy.emailPlaceholder} /></label></div>
          {copy.questions.map(([legend, placeholder], index) => <fieldset key={legend}><legend>{index + 1}. {legend}</legend><textarea required name={index === 0 ? "business" : index === 1 ? "goal" : "constraint"} rows={3} placeholder={placeholder} /></fieldset>)}
          <button className="growth-button growth-button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? copy.sending : copy.submit}</button>
          {submissionState === "success" && <p className="growth-contact-success" role="status">{copy.success}</p>}
          {submissionState === "error" && <p className="growth-contact-error" role="alert">{copy.error}</p>}
        </form>
      </div>
      <div className="growth-container"><ContextLinks locale={locale} items={related} /></div>
    </section>
  </GrowthLayout>;
}
