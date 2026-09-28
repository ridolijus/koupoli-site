import { FormEvent, useState } from "react";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { site } from "@/lib/siteData";

type Locale = "en" | "hr";

const copies = {
  en: {
    title: "Start a Conversation | Koupoli",
    description: "Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation.",
    kicker: "Start a conversation",
    heading: "Bring the context, not a perfect brief.",
    lead: "Answer three practical questions so the first conversation can focus on the business, the buyers, and the work that will matter most.",
    next: "What happens next",
    note: "Your answers open a prepared email enquiry. Nothing is published or added to a mailing list.",
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
    success: "Your email app should now be ready with the full enquiry.",
    subject: (name: string) => `Koupoli enquiry from ${name || "a visitor"}`,
    emailLabels: ["Name", "Email", "Business or site", "Organic growth goal", "Current constraint"],
  },
  hr: {
    title: "Započnite razgovor | Koupoli",
    description: "Recite Koupoliju nešto o svojem poslovanju, cilju organskog rasta i trenutačnoj prepreci kako biste započeli usmjeren razgovor o SEO-u i pretraživanju uz pomoć umjetne inteligencije.",
    kicker: "Započnite razgovor",
    heading: "Donesite kontekst, ne savršen brief.",
    lead: "Odgovorite na tri praktična pitanja kako bismo se u prvom razgovoru mogli usredotočiti na poslovanje, kupce i aktivnosti koje će imati najveći učinak.",
    next: "Što slijedi",
    note: "Vaši odgovori otvorit će unaprijed pripremljenu poruku s upitom. Ništa se neće objaviti niti dodati na popis za slanje e-pošte.",
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
    success: "Vaša bi aplikacija za e-poštu sada trebala biti otvorena s cjelovitim upitom.",
    subject: (name: string) => `Koupoli upit od ${name || "posjetitelja"}`,
    emailLabels: ["Ime", "E-pošta", "Tvrtka ili web-stranica", "Cilj organskog rasta", "Trenutačna prepreka"],
  },
} as const;

export default function GrowthContact({ locale = "en" }: { locale?: Locale }) {
  const [sent, setSent] = useState(false);
  const copy = copies[locale];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const business = String(form.get("business") || "");
    const goal = String(form.get("goal") || "");
    const constraint = String(form.get("constraint") || "");
    const [nameLabel, emailLabel, businessLabel, goalLabel, constraintLabel] = copy.emailLabels;
    const body = [`${nameLabel}: ${name}`, `${emailLabel}: ${email}`, "", `1. ${businessLabel}`, business, "", `2. ${goalLabel}`, goal, "", `3. ${constraintLabel}`, constraint].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(copy.subject(name))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return <GrowthLayout locale={locale}>
    <PageMeta title={copy.title} description={copy.description} lang={locale} />
    <section className="growth-contact-page">
      <div className="growth-container growth-contact-grid">
        <div className="growth-contact-copy"><p className="growth-kicker">{copy.kicker}</p><h1>{copy.heading}</h1><p>{copy.lead}</p><div className="growth-contact-note"><span>{copy.next}</span><p>{copy.note}</p></div></div>
        <form className="growth-contact-form" onSubmit={handleSubmit}>
          <div className="growth-contact-details"><label><span>{copy.name}</span><input required name="name" autoComplete="name" placeholder={copy.namePlaceholder} /></label><label><span>{copy.email}</span><input required type="email" name="email" autoComplete="email" placeholder={copy.emailPlaceholder} /></label></div>
          {copy.questions.map(([legend, placeholder], index) => <fieldset key={legend}><legend>{index + 1}. {legend}</legend><textarea required name={index === 0 ? "business" : index === 1 ? "goal" : "constraint"} rows={3} placeholder={placeholder} /></fieldset>)}
          <button className="growth-button growth-button-primary" type="submit">{copy.submit}</button>
          {sent && <p className="growth-contact-success" role="status">{copy.success}</p>}
        </form>
      </div>
    </section>
  </GrowthLayout>;
}
