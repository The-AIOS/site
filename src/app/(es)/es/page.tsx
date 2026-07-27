import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { CONTENT } from "@/content";

const { title: TITLE, description: DESCRIPTION } = CONTENT.es.meta;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://the-aios.com/es",
    languages: {
      en: "https://the-aios.com/",
      es: "https://the-aios.com/es",
      "pt-BR": "https://the-aios.com/pt",
      "x-default": "https://the-aios.com/",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://the-aios.com/es",
    locale: "es",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The AIOS — the AI Operating System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  /* `lang="es"` comes from this group's root layout now — it used to be patched
     onto <html> by an inline script here, which React 19 flagged as a hydration
     mismatch and which left crawlers reading lang="en". */
  return <HomePage locale="es" />;
}
