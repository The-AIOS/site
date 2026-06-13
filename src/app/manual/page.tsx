import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { GitHubLink } from "@/components/GitHubLink";
import { ManualEmbed, ManualDownload } from "@/components/ManualEmbed";

const TITLE = "The AIOS — Operating Manual";
const DESCRIPTION =
  "The AIOS Operating Manual — 17 sections from first principles to 24/7 containment. The full design language and behavioral contract of the AI Operating System, read it online or download the PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://the-aios.com/manual" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://the-aios.com/manual",
    images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.jpg"] },
};

const DownloadIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export default function ManualPage() {
  return (
    <>
      <span id="top" aria-hidden="true" />

      {/* Minimal header */}
      <header className="site-header">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-ink)",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "-0.025em",
            }}
          >
            <Logo size={20} />
            The AIOS
          </a>
          <a href="/" className="repo-link-inline" style={{ marginTop: 0 }}>
            ← Back to home
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-glow section-tight" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
          <div className="container" style={{ paddingTop: "3.5rem" }}>
            <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Operating Manual <span className="accent">·</span> 2026
            </div>
            <h1 className="display-xl" style={{ marginBottom: "1.25rem", maxWidth: "16ch" }}>
              AI as a <span className="accent">team</span>, not a tool.
            </h1>
            <p className="lede" style={{ maxWidth: "60ch", marginBottom: "1.75rem" }}>
              The full manual — 17 sections from first principles to 24/7 containment.
              The design language, the architecture, the fleet, the rituals, and the
              trust contract, in one document. Read it online below, or take the PDF.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <ManualDownload className="btn-primary">
                <DownloadIcon /> Download PDF
              </ManualDownload>
              <GitHubLink href="https://github.com/The-AIOS/aios" surface="manual-repo" className="btn-secondary">
                Read the source ↗
              </GitHubLink>
            </div>
          </div>
        </section>

        {/* Embedded PDF — theme-aware (dark manual / print PDF) */}
        <section className="section-tight">
          <div className="container" style={{ maxWidth: 920 }}>
            <ManualEmbed />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <span className="caption" style={{ textTransform: "none", letterSpacing: 0 }}>
            Amplify yourself — with AI co-workers.
          </span>
          <a href="/" className="footer-link">
            ← the-aios.com
          </a>
        </div>
      </footer>
    </>
  );
}
