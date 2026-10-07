import { Link } from "wouter";

type Locale = "en" | "hr";

export type ContextLinkItem = {
  href: string;
  title: string;
  description: string;
};

type ContextLinksProps = {
  locale: Locale;
  items: ContextLinkItem[];
  eyebrow?: string;
  title?: string;
};

const defaults = {
  en: { eyebrow: "Continue exploring", title: "Related work and practical reading" },
  hr: { eyebrow: "Istražite dalje", title: "Povezani rad i praktične bilješke" },
};

function localizedPath(locale: Locale, href: string) {
  return locale === "hr" && !href.startsWith("/hr/") ? `/hr${href}` : href;
}

export default function ContextLinks({ locale, items, eyebrow, title }: ContextLinksProps) {
  const copy = defaults[locale];

  return <aside className="growth-context-links" aria-label={eyebrow || copy.eyebrow}>
    <p className="growth-kicker growth-kicker-blue">{eyebrow || copy.eyebrow}</p>
    <h2>{title || copy.title}</h2>
    <nav className="growth-context-link-grid">
      {items.map((item) => <Link href={localizedPath(locale, item.href)} key={item.href}>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </Link>)}
    </nav>
  </aside>;
}
