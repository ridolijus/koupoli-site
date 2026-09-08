import { FormEvent, ReactNode, useState } from "react";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { navItems, site } from "@/lib/siteData";

type LayoutProps = { children: ReactNode; showContact?: boolean };

function ProfileMark() {
  return <Link href="/" className="profile-mark" aria-label="Koupoli home"><img src={site.profileImage} alt="Karlo Riđan" /></Link>;
}

export function SocialCircles() {
  return <div className="social-circles" aria-label="Follow Koupoli">
    <a href={site.socials[0].href} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
    <a href={site.socials[1].href} target="_blank" rel="noreferrer" aria-label="X / Twitter"><span className="x-social">𝕏</span></a>
    <a href={site.socials[2].href} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
    <a href={`mailto:${site.email}`} aria-label="Email"><Mail size={16} /></a>
  </div>;
}

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <div className="nav-surface">
        <ProfileMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>)}
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button type="button" className="menu-toggle" aria-label="Open navigation" onClick={() => setIsOpen(true)}><Menu size={20} /></button>
      </div>
    </div>
    {isOpen && <div className="mobile-menu">
      <div className="nav-shell"><div className="nav-surface"><ProfileMark /><button type="button" className="menu-toggle" aria-label="Close navigation" onClick={() => setIsOpen(false)}><X size={22} /></button></div></div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>{item.label}</Link>)}
        <a href="#contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </div>}
  </header>;
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New website enquiry from ${name || "a visitor"}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setSent(true);
  }
  return <form className="webflow-contact-form" onSubmit={handleSubmit}>
    <label><span>Name</span><input required name="name" autoComplete="name" placeholder="Your name" /></label>
    <label><span>Email</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
    <label><span>Message</span><textarea required name="message" rows={5} placeholder="Type your message..." /></label>
    <label className="privacy-label"><input required type="checkbox" /> <span>You agree to our friendly <a href="#privacy">privacy policy</a>.</span></label>
    <button type="submit" className="primary-button">Send message</button>
    {sent && <p className="form-success" role="status">Your email app should now be ready with your message.</p>}
  </form>;
}

export function ContactSection() {
  return <section className="contact-section" id="contact">
    <div className="content-container contact-content">
      <div className="contact-heading"><h2>Get in touch</h2><p>We’d love to hear from you. Please fill out this form.</p></div>
      <ContactForm />
      <div className="follow-row"><strong>Follow on:</strong><SocialCircles /></div>
    </div>
  </section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="content-container footer-content"><nav aria-label="Footer navigation">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="footer-rule" /><p>© Copyright Koupoli 2025. All rights reserved.</p></div></footer>;
}

export default function SiteLayout({ children, showContact = true }: LayoutProps) {
  return <><Header /><main>{children}</main>{showContact && <ContactSection />}<Footer /></>;
}
