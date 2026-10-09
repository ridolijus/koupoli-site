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
    description: "Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation.",
    kicker: "Start a conversation",
    heading: "Bring the context, not a perfect brief.",
    lead: "Answer three practical questions so the first conversation can focus on the business, the buyers, and the work that will matter most.",
    next: "What happens next",
    note: "Your answers are sent directly to Koupoli. Nothing is published or added to a mailing list.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Work email",
    emailPlaceholder: "you@company.com",
    questions: [
      ["What is the business or website you want to grow?", "Share your company, website, product, or market."],
      ["What would a useful organic growth outcome look like?", "For example: a stronger launch, qualified leads, visibility in a new category, or technical clarity."],
      ["What is getting in the way right now?", "Describe the main uncertainty, bottleneck, or search problem."],
    ],
    submit: "Send enquiry",
    sending: "Sending enquiry...",
    success: "Thanks - your enquiry has been sent. Koupoli will reply to the email you provided.",
    error: "The enquiry could not be sent. Please try again shortly.",
  },
  hr: {
    title: "Započnite razgovor | Koupoli",
    description: "Recite Koupoliju nešto o svojem poslovanju, cilju organskog rasta i trenutačnoj prepreci kako biste započeli usmjeren razgovor o SEO-u i pretraživanju uz pomoć umjetne inteligencije.",
    kicker: "Započnite razgovor",
    heading: "Donesite kontekst, ne savršen brief.",
    lead: "Odgovorite na tri praktična pitanja kako bismo se u prvom razgovoru mogli usredotočiti na poslovanje, kupce i aktivnosti koje će imati najveći učinak.",
    next: "Što slijedi",
    note: "Vaši odgovori šalju se izravno Koupoliju. Ništa se neće objaviti niti dodati na popis za slanje e-pošte.",
    name: "Ime",
    namePlaceholder: "Vaše ime",
    email: "Poslovna e-adresa",
    emailPlaceholder: "vi@tvrtka.hr",
    questions: [
      ["Koje poslovanje ili web-stranicu želite razvijati?", "Opišite svoju tvrtku, web-stranicu, proizvod ili tržište."],
      ["Koji bi ishod organskog rasta bio koristan za vas?", "Na primjer: uspješnije lansiranje, kvalificirani potencijalni klijenti, vidljivost u novoj kategoriji ili jasnija tehnička slika."],
      ["Što vam trenutačno stoji na putu?", "Opišite glavnu nedoumicu, usko grlo ili problem povezan s pretraživanjem."],
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
