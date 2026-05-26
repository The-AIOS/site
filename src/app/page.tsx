import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getMessages } from "@/messages";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.meta.title,
  description: m.meta.description,
  alternates: {
    canonical: "https://the-aios.com/",
    languages: {
      en: "https://the-aios.com/",
      es: "https://the-aios.com/es",
      "pt-BR": "https://the-aios.com/pt",
      "x-default": "https://the-aios.com/",
    },
  },
  openGraph: {
    title: m.meta.title,
    description: m.meta.description,
    type: "website",
    url: "https://the-aios.com/",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: "The-AIOS — the AI Operating System framework" }],
  },
  twitter: {
    card: "summary_large_image",
    title: m.meta.title,
    description: m.meta.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <HomePage m={m} locale="en" />;
}
