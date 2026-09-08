import { FormEvent, ReactNode, useState } from "react";
import { ArrowUpRight, Menu, Send, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { navItems, site } from "@/lib/siteData";

type LayoutProps = {
  children: ReactNode;
  showContact?: boolean;
};

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Koupoli home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>Koupoli<span className="lime">.</span></span>
    </Link>
  );
}

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const contactHref = location === "/" ? "#contact" : "#contact";
  const isLightPage = location === "/blog";

  return (
    <header className="site-header">
      <div className={isLightPage ? "shell header-inner light-header" : "shell header-inner"}>
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>
          ))}
          <a className="nav-link nav-contact" href={contactHref}>Contact <ArrowUpRight size={13} /></a>
        </nav>
        <button className="menu-toggle" aria-label="Open navigation" onClick={() => setIsOpen(true)}><Menu size={21} /></button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <div className="shell mobile-menu-top"><Brand /><button onClick={() => setIsOpen(false)} aria-label="Close navigation"><X size={24} /></button></div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}
            <a className="mobile-nav-link" href="#contact" onClick={() => setIsOpen(false)}><span>05</span>Contact</a>
          </nav>
          <div className="shell mobile-menu-note">Organic growth, without the noise.</div>
        </div>
      )}
    </header>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`New website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Name</span><input required name="name" autoComplete="name" placeholder="Your name" /></label>
      <label><span>Email</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
      <label><span>Message</span><textarea required name="message" rows={4} placeholder="Tell me where you want to grow." /></label>
      <div className="form-bottom"><p>You agree to our friendly privacy policy.</p><button type="submit" className="button button-lime">Send enquiry <Send size={15} /></button></div>
      {sent && <p className="form-success" role="status">Your email app should now be ready with your message.</p>}
    </form>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow"><span>04</span> Get in touch</p>
          <h2>Let’s build the<br /><em>next signal.</em></h2>
          <p>We’d love to hear from you. Please fill out this form, or write directly to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <div className="social-list" aria-label="Social links">
            {site.socials.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label} <ArrowUpRight size={13} /></a>)}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Brand />
        <p>© Copyright Koupoli 2025. All rights reserved.</p>
        <a href="mailto:hello@koupoli.com">hello@koupoli.com <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children, showContact = true }: LayoutProps) {
  return <><Header /><main>{children}</main>{showContact && <ContactSection />}<Footer /></>;
}
