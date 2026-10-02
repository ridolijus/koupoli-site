import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

type Locale = "en" | "hr";
type LayoutProps = { locale: Locale; children: ReactNode };
type NavigationItem = { label: string; target?: string; href?: string };

const navigation: Record<Locale, NavigationItem[]> = {
  en: [
    { label: "Offers", target: "#offers" },
    { label: "Method", target: "#method" },
    { label: "Projects", href: "/projects/" },
    { label: "About", href: "/about/" },
    { label: "FAQ", target: "#faq" },
  ],
  hr: [
    { label: "Usluge", target: "#offers" },
    { label: "Pristup", target: "#method" },
    { label: "Projekti", href: "/hr/projects/" },
    { label: "O meni", href: "/hr/about/" },
    { label: "FAQ", target: "#faq" },
  ],
};

function Brand({ locale }: { locale: Locale }) {
  const home = locale === "hr" ? "/hr/" : "/";
  return <Link href={home} className="growth-brand" aria-label="Koupoli home"><img src="/favicon-512.png" alt="" /><span>Koupoli</span></Link>;
}

function LanguageLabel({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const isCroatianTarget = locale === "en";
  const label = isCroatianTarget ? "Hrvatska verzija" : "English version";
  const code = isCroatianTarget ? "HR" : "EN";
  const flag = isCroatianTarget ? "/assets/flag-hr.png" : "/assets/flag-en.png";

  return <><img className="growth-language-flag" src={flag} alt="" /><span>{compact ? code : label}</span></>;
}

export default function GrowthLayout({ locale, children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const home = locale === "hr" ? "/hr/" : "/";
  const alternate = locale === "hr" ? location.replace(/^\/hr(?=\/|$)/, "") || "/" : `/hr${location === "/" ? "/" : location}`;
  const contact = locale === "hr" ? "/hr/contact/" : "/contact/";

  function closeMenu() {
    setOpen(false);
  }

  return <div className={`growth-site growth-site-${locale}`}>
    <header className="growth-header">
      <div className="growth-container growth-nav">
        <Brand locale={locale} />
        <nav className="growth-desktop-nav" aria-label="Primary navigation">
          {navigation[locale].map((item) => item.href ? <Link href={item.href} key={item.label}>{item.label}</Link> : <a href={`${home}${item.target}`} key={item.label}>{item.label}</a>)}
        </nav>
        <div className="growth-nav-actions"><Link href={alternate} className="growth-language-link" aria-label={locale === "hr" ? "Switch to the English version" : "Prebaci na hrvatsku verziju"}><LanguageLabel locale={locale} compact /></Link><Link className="growth-nav-cta" href={contact}>{locale === "hr" ? "Javite se" : "Let’s talk"}</Link><button type="button" className="growth-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button></div>
      </div>
      {open && <div className="growth-mobile-panel"><div className="growth-container"><nav aria-label="Mobile navigation">{navigation[locale].map((item) => item.href ? <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}</Link> : <a href={`${home}${item.target}`} key={item.label} onClick={closeMenu}>{item.label}</a>)}<Link href={contact} onClick={closeMenu}>{locale === "hr" ? "Javite se" : "Let’s talk"}</Link><Link href={alternate} onClick={closeMenu}><LanguageLabel locale={locale} /></Link></nav></div></div>}
    </header>
    <main>{children}</main>
    <footer className="growth-footer"><div className="growth-container growth-footer-grid"><div><Brand locale={locale} /><p>{locale === "hr" ? "SEO, organski rast i AI pretraga za timove koji žele izgraditi dugoročnu vidljivost." : "SEO, organic growth, and AI search for teams building durable visibility."}</p></div><div><span>{locale === "hr" ? "Istraži" : "Explore"}</span><Link href={locale === "hr" ? "/hr/projects/" : "/projects/"}>{locale === "hr" ? "Projekti" : "Projects"}</Link><Link href={locale === "hr" ? "/hr/about/" : "/about/"}>{locale === "hr" ? "O meni" : "About"}</Link><Link href={alternate}>{locale === "hr" ? "English" : "Hrvatski"}</Link></div><div><span>{locale === "hr" ? "Kontakt" : "Contact"}</span><Link href={contact}>{locale === "hr" ? "Pošaljite upit" : "Send an enquiry"}</Link><a href="https://www.linkedin.com/in/karlo-ri%C4%91an-2aa4a7217/" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="growth-container growth-footer-bottom"><span>© {new Date().getFullYear()} Koupoli</span><span>{locale === "hr" ? "Slavonski Brod, Hrvatska" : "Slavonski Brod, Croatia"}</span></div></footer>
  </div>;
}
