import { FormEvent, useState } from "react";
import GrowthLayout from "@/components/GrowthLayout";
import PageMeta from "@/components/PageMeta";
import { site } from "@/lib/siteData";

export default function GrowthContact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const business = String(form.get("business") || "");
    const goal = String(form.get("goal") || "");
    const constraint = String(form.get("constraint") || "");
    const body = [`Name: ${name}`, `Email: ${email}`, "", "1. Business or site", business, "", "2. Organic growth goal", goal, "", "3. Current constraint", constraint].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Koupoli enquiry from ${name || "a visitor"}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return <GrowthLayout locale="en">
    <PageMeta title="Start a Conversation | Koupoli" description="Tell Koupoli about your business, organic growth goal, and current constraint to begin a focused SEO and AI search conversation." />
    <section className="growth-contact-page">
      <div className="growth-container growth-contact-grid">
        <div className="growth-contact-copy"><p className="growth-kicker">Start a conversation</p><h1>Bring the context, not a perfect brief.</h1><p>Answer three practical questions so the first conversation can focus on the business, the buyers, and the work that will matter most.</p><div className="growth-contact-note"><span>What happens next</span><p>Your answers open a prepared email enquiry. Nothing is published or added to a mailing list.</p></div></div>
        <form className="growth-contact-form" onSubmit={handleSubmit}>
          <div className="growth-contact-details"><label><span>Name</span><input required name="name" autoComplete="name" placeholder="Your name" /></label><label><span>Work email</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label></div>
          <fieldset><legend>1. What is the business or website you want to grow?</legend><textarea required name="business" rows={3} placeholder="Share your company, website, product, or market." /></fieldset>
          <fieldset><legend>2. What would a useful organic growth outcome look like?</legend><textarea required name="goal" rows={3} placeholder="For example: a stronger launch, qualified leads, visibility in a new category, or technical clarity." /></fieldset>
          <fieldset><legend>3. What is getting in the way right now?</legend><textarea required name="constraint" rows={3} placeholder="Describe the main uncertainty, bottleneck, or search problem." /></fieldset>
          <button className="growth-button growth-button-primary" type="submit">Send enquiry</button>
          {sent && <p className="growth-contact-success" role="status">Your email app should now be ready with the full enquiry.</p>}
        </form>
      </div>
    </section>
  </GrowthLayout>;
}
