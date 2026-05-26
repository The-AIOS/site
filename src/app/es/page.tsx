import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getMessages } from "@/messages";

const m = getMessages("es");

export const metadata: Metadata = {
  title: m.meta.title,
  description: m.meta.description,
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
    title: m.meta.title,
    description: m.meta.description,
    type: "website",
    url: "https://the-aios.com/es",
    locale: "es",
    images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: "The-AIOS — el framework AI Operating System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: m.meta.title,
    description: m.meta.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Set <html lang> client-side; root layout is en by default in static export. */}
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang = "es";' }} />
      <HomePage m={m} locale="es" />
    </>
  );
}
