import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getMessages } from "@/messages";

const m = getMessages("pt");

export const metadata: Metadata = {
  title: m.meta.title,
  description: m.meta.description,
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
    title: m.meta.title,
    description: m.meta.description,
    type: "website",
    url: "https://the-aios.com/pt",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: m.meta.title,
    description: m.meta.description,
  },
};

export default function Page() {
  return (
    <>
      {/* Set <html lang> client-side; root layout is en by default in static export. */}
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang = "pt-BR";' }} />
      <HomePage m={m} locale="pt" />
    </>
  );
}
