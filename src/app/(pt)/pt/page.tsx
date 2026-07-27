import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { CONTENT } from "@/content";

const { title: TITLE, description: DESCRIPTION } = CONTENT.pt.meta;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://the-aios.com/pt",
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
    url: "https://the-aios.com/pt",
    locale: "pt_BR",
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
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang = "pt-BR";' }} />
      <HomePage locale="pt" />
    </>
  );
}
