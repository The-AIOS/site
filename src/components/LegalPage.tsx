import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * Shell for the legal pages. Deliberately plain: these exist to be READ — by an
 * operator deciding whether to trust the thing, and by a Google reviewer checking
 * that the URL resolves to a real policy. They get the site chrome and none of its motion.
 */
export function LegalPage({
  title,
  standfirst,
  updated,
  children,
}: {
  title: string;
  standfirst: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div>
      <header className="site-header">
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}
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
            <a href="/privacy" className="footer-link" style={{ fontSize: "0.875rem" }}>Privacy</a>
            <a href="/terms" className="footer-link" style={{ fontSize: "0.875rem" }}>Terms</a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section
          className="hero-glow"
          style={{
            borderBottom: "1px solid var(--color-hairline)",
            padding: "clamp(3rem, 7vw, 5rem) 0 clamp(2rem, 4vw, 3rem)",
          }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "var(--color-ink-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                margin: "1rem 0 0",
              }}
            >
              {standfirst}
            </p>
            <p
              style={{
                color: "var(--color-ink-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                margin: "1.25rem 0 0",
              }}
            >
              Last updated {updated}
            </p>
          </div>
        </section>

        <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0 clamp(4rem, 8vw, 6rem)" }}>
          <div className="container legal-prose" style={{ maxWidth: 760 }}>{children}</div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--color-hairline)", padding: "2rem 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            color: "var(--color-ink-subtle)",
            fontSize: "0.8125rem",
          }}
        >
          <span>The AIOS — free and open source, GPL-2.0.</span>
          <span style={{ display: "flex", gap: "1rem" }}>
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/terms" className="footer-link">Terms</a>
            <a href="https://github.com/The-AIOS/aios" className="footer-link">GitHub</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
