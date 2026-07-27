import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import DisruptionIndex from "@/components/DisruptionIndex";
import { EXEMPLARS, SPEED_META, SPEED_ORDER } from "@/data/exemplars";
import "./di.css";

const TITLE = "The Disruption Index — industries ranked by the speed of AI disruption";
const DESCRIPTION =
  "A live, browsable index of industries by how fast AI is disrupting them — paired with the real companies that died, reinvented, or rode the wave. Built to make AI urgency undeniable.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://the-aios.com/disruption-index" },
  openGraph: {
    title: "The Disruption Index",
    description: DESCRIPTION,
    type: "website",
    url: "https://the-aios.com/disruption-index",
    images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Disruption Index",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const industryCount = new Set(EXEMPLARS.map((e) => e.industry)).size;
const goneCount = EXEMPLARS.filter((e) => e.speed === "gone").length;
const insulatedCount = EXEMPLARS.filter((e) => e.speed === "insulated").length;
const countOf = (s: (typeof SPEED_ORDER)[number]) =>
  EXEMPLARS.filter((e) => e.speed === s).length;

export default function DisruptionIndexPage() {
  return (
    <div className="di-root">
      <span id="top" aria-hidden="true" />

      {/* ---------- Header (site chrome) ---------- */}
      <header className="site-header">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              ← Back to home
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section
          className="hero-glow"
          style={{
            borderBottom: "1px solid var(--color-hairline)",
            padding: "clamp(3.5rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 3.5rem)",
          }}
        >
          <div className="container">
            <p className="eyebrow">
              <span className="accent">●</span> The speed of AI disruption · live index
            </p>
            <h1 className="display-xl" style={{ marginTop: "1rem", maxWidth: "20ch" }}>
              Some industries already lost their moat.{" "}
              <span className="accent">Yours is on this map somewhere.</span>
            </h1>
            <p className="lede" style={{ maxWidth: "60ch", marginTop: "1.25rem" }}>
              A browsable index of industries by{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                how fast AI is disrupting them
              </strong>{" "}
              — paired with the real companies that died, reinvented, or rode the
              wave. Filter by your industry. Find your closest analog. Then ask
              how long you have.
            </p>

            <div className="di-hero-stats">
              <div className="di-stat">
                <div className="n">{EXEMPLARS.length}</div>
                <div className="l">verified exemplars</div>
              </div>
              <div className="di-stat">
                <div className="n">{industryCount}</div>
                <div className="l">industries</div>
              </div>
              <div className="di-stat">
                <div className="n" style={{ color: SPEED_META.gone.color }}>
                  {goneCount}
                </div>
                <div className="l">moats already gone</div>
              </div>
              <div className="di-stat">
                <div className="n" style={{ color: SPEED_META.insulated.color }}>
                  {insulatedCount}
                </div>
                <div className="l">truly insulated</div>
              </div>
            </div>

            {/* The axis legend */}
            <div className="di-legend">
              {SPEED_ORDER.map((s) => {
                const meta = SPEED_META[s];
                return (
                  <div key={s} className="di-legend-item">
                    <span
                      className="di-swatch-dot"
                      style={{ background: meta.color }}
                    />
                    <span className="name">{meta.label}</span>
                    <span className="c">{countOf(s)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- The interactive index ---------- */}
        <DisruptionIndex />
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <p style={{ maxWidth: "70ch", margin: 0, color: "var(--color-ink-muted)" }}>
            <span className="accent">●</span>{" "}
            <strong style={{ color: "var(--color-ink)" }}>
              Accuracy is the point.
            </strong>{" "}
            Every entry was researched against public reporting and carries a
            confidence rating. Where a number is a company&apos;s own claim, an
            estimate, or part of a multi-causal story, the card&apos;s note says
            so plainly. Disruption stories are messy — overstating them would
            cost the one thing that makes urgency land: <em>being true</em>.
          </p>
          <p
            style={{
              marginTop: "1.25rem",
              marginBottom: 0,
              color: "var(--color-ink-subtle)",
              fontSize: "0.8125rem",
            }}
          >
            Curated, not crowd-fed. Kept current by AIOS research agents — itself
            an example of the speed it describes. ·{" "}
            <a href="/" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              the-aios.com
            </a>{" "}
            · Research current as of June 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
