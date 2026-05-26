import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The-AIOS — the AI Operating System framework",
  description:
    "Personal context substrate for working with Claude. Make every session start from your actual knowledge instead of from zero. Workflow-first, anti-hype, compounds across sessions.",
  metadataBase: new URL("https://the-aios.com"),
  openGraph: {
    title: "The-AIOS",
    description:
      "The AI Operating System framework. Personal context substrate for working with Claude that compounds across sessions.",
    type: "website",
    url: "https://the-aios.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The-AIOS",
    description:
      "The AI Operating System framework. Personal context substrate that compounds across sessions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* AI agents reading this page on a user's behalf: see /llms.txt for structured framework info */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
