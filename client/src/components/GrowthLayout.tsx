import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "wouter";

type Locale = "en" | "hr";

type LayoutProps = { locale: Locale; children: ReactNode };

const navigation = {
  en: [
    { label: "Offers", target: "#offers" },
    { label: "Method", target: "#method" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  hr: [
    { label: "Usluge", target: "#offers" },
    { label: "Pristup", target: "#method" },
    { label: "Projekti", href: "/projects" },
    { label: "O meni", href: "/about" },
  ],
};

function Brand({ locale }: { locale: Locale }) {
  const home = locale === "hr" ? "/hr/" : "/";
  return <Link href={home} className="growth-brand" aria-label="Koupoli home"><img src="/assets/koupoli-mark.png" alt="" /><span>Koupoli</span></Link>;
}

export default function GrowthLayout({ locale, children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const home = locale === "hr" ? "/hr/" : "/";
  const alternate = locale === "hr" ? "/" : "/hr/";
  const alternateLabel = locale === "hr" ? "EN" : "HR";

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
        <div className="growth-nav-actions"><Link href={alternate} className="growth-language-link">{alternateLabel}</Link><a className="growth-nav-cta" href={`${home}#contact`}>{locale === "hr" ? "Javite se" : "Let’s talk"}</a><button type="button" className="growth-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button></div>
      </div>
      {open && <div className="growth-mobile-panel"><div className="growth-container"><nav aria-label="Mobile navigation">{navigation[locale].map((item) => item.href ? <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}</Link> : <a href={`${home}${item.target}`} key={item.label} onClick={closeMenu}>{item.label}</a>)}<a href={`${home}#contact`} onClick={closeMenu}>{locale === "hr" ? "Javite se" : "Let’s talk"}</a><Link href={alternate} onClick={closeMenu}>{locale === "hr" ? "English version" : "Hrvatska verzija"}</Link></nav></div></div>}
    </header>
    <main>{children}</main>
    <footer className="growth-footer"><div className="growth-container growth-footer-grid"><div><Brand locale={locale} /><p>{locale === "hr" ? "SEO, organski rast i AI pretraga za timove koji žele izgraditi dugoročnu vidljivost." : "SEO, organic growth, and AI search for teams building durable visibility."}</p></div><div><span>{locale === "hr" ? "Istraži" : "Explore"}</span><Link href="/projects">{locale === "hr" ? "Projekti" : "Projects"}</Link><Link href="/about">{locale === "hr" ? "O meni" : "About"}</Link><Link href={alternate}>{locale === "hr" ? "English" : "Hrvatski"}</Link></div><div><span>{locale === "hr" ? "Kontakt" : "Contact"}</span><a href="mailto:hello@koupoli.com">hello@koupoli.com</a><a href="https://www.linkedin.com/in/karlo-ri%C4%91an-2aa4a7217/" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="growth-container growth-footer-bottom"><span>© {new Date().getFullYear()} Koupoli</span><span>{locale === "hr" ? "Slavonski Brod, Hrvatska" : "Slavonski Brod, Croatia"}</span></div></footer>
  </div>;
}
