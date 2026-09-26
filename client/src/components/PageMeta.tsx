import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  lang?: "en" | "hr";
};

export default function PageMeta({ title, description, lang = "en" }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [description, lang, title]);

  return null;
}
