import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { STANDARDS, STATUS_META } from "@/data/standards";

const TITLE = "Agentic Standards — the scene, mapped";
const DESCRIPTION =
  "Agents are getting identities, mandates, and receipts. The standards making delegation provable — AP2, ERC-8004, W3C VCs, SD-JWT, OID4VC, DIDComm, C2PA — mapped, with the Proof Pair open spec at the center.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://the-aios.com/standards" },
  openGraph: {
    title: "Agentic Standards",
    description: DESCRIPTION,
    type: "website",
    url: "https://the-aios.com/standards",
    images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Standards",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const card: React.CSSProperties = {
  border: "1px solid var(--color-hairline)",
  borderRadius: 14,
  padding: "1.5rem 1.5rem 1.35rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  background: "var(--color-surface, transparent)",
};

export default function StandardsPage() {
  return (
    <div>
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
              <span className="accent">●</span> Agentic standards · the scene, mapped
            </p>
            <h1 className="display-xl" style={{ marginTop: "1rem", maxWidth: "22ch" }}>
              Agents are getting identities, mandates, and receipts.{" "}
              <span className="accent">Here&apos;s the map.</span>
            </h1>
            <p className="lede" style={{ maxWidth: "62ch", marginTop: "1.25rem" }}>
              Delegation only works at scale when it&apos;s provable — when an agent
              can show <strong style={{ color: "var(--color-ink)" }}>what it&apos;s
              allowed to do</strong> before it acts, and{" "}
              <strong style={{ color: "var(--color-ink)" }}>who did what, under
              whose authority</strong> after. These are the standards making that
              real, what each one covers, and how they fit together.
            </p>
          </div>
        </section>

        {/* ---------- The Proof Pair — featured ---------- */}
        <section
          style={{
            borderBottom: "1px solid var(--color-hairline)",
            padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
          }}
        >
          <div className="container">
            <div
              style={{
                ...card,
                borderColor: "var(--color-accent, #ff5d4d)",
                gap: "0.8rem",
              }}
            >
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> Our open working spec · v0 · live
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                The Proof Pair
              </h2>
              <p style={{ margin: 0, color: "var(--color-ink-muted)", maxWidth: "70ch" }}>
                <em>Mandate in, receipt out — delegation made provable at both ends.</em>{" "}
                A mandate is authority you can verify <strong>before</strong> the act: a
                verifiable credential from a human to an agent — scoped, expiring,
                revocable. A receipt is attribution you can verify <strong>after</strong>{" "}
                it: a signed, hash-chained record binding the action to the agent and the
                mandate that authorized it. One spec, because every receipt references its
                mandate. This is what we run, specified so you can run it too.
              </p>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>
                <a
                  href="https://the-aios.org/proof-pair/"
                  className="footer-link"
                  style={{ fontWeight: 600 }}
                >
                  Read the spec — the-aios.org/proof-pair →
                </a>
                <span style={{ color: "var(--color-ink-subtle)" }}>
                  {" "}
                  &nbsp;· open, CC-BY 4.0, anyone may implement
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ---------- The scene ---------- */}
        <section style={{ padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
              <span className="accent">●</span> The scene — {STANDARDS.length} rails,
              one direction
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1rem",
              }}
            >
              {STANDARDS.map((s) => {
                const meta = STATUS_META[s.status];
                return (
                  <article key={s.id} style={card}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          letterSpacing: "-0.02em",
                          margin: 0,
                        }}
                      >
                        {s.name}
                      </h3>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: "0.6875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--color-ink-subtle)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: meta.color,
                            display: "inline-block",
                          }}
                        />
                        {meta.label}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--color-ink-subtle)",
                      }}
                    >
                      {s.org}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                      {s.what}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        paddingTop: "0.6rem",
                        borderTop: "1px solid var(--color-hairline)",
                      }}
                    >
                      <span className="accent" style={{ fontWeight: 600 }}>
                        How it fits:&nbsp;
                      </span>
                      <span style={{ color: "var(--color-ink-muted)" }}>{s.relation}</span>
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <p style={{ maxWidth: "70ch", margin: 0, color: "var(--color-ink-muted)" }}>
            <span className="accent">●</span>{" "}
            <strong style={{ color: "var(--color-ink)" }}>
              The map is descriptive, not a scoreboard.
            </strong>{" "}
            Most of these rails are other people&apos;s work, and good work — the scene
            wins when they interoperate. Where the Proof Pair relates to one, the card
            says how; where it compiles down to one, the spec says exactly how.
          </p>
          <p
            style={{
              marginTop: "1.25rem",
              marginBottom: 0,
              color: "var(--color-ink-subtle)",
              fontSize: "0.8125rem",
            }}
          >
            Kept current by AIOS research agents · Research current as of July 2026 ·{" "}
            <a href="/" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              the-aios.com
            </a>{" "}
            ·{" "}
            <a
              href="https://the-aios.org"
              className="footer-link"
              style={{ fontSize: "0.8125rem" }}
            >
              the-aios.org — the Guardian
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
