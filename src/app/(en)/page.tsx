import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { CONTENT } from "@/content";

const { title: TITLE, description: DESCRIPTION } = CONTENT.en.meta;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.the-aios.com/",
    languages: {
      en: "https://www.the-aios.com/",
      es: "https://www.the-aios.com/es",
      "pt-BR": "https://www.the-aios.com/pt",
      "x-default": "https://www.the-aios.com/",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.the-aios.com/",
    locale: "en_US",
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
  return <HomePage locale="en" />;
}
