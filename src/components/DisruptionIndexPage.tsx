import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import DisruptionIndex from "@/components/DisruptionIndex";
import DisruptionQuadrant from "@/components/DisruptionQuadrant";
import EmergentOpportunities from "@/components/EmergentOpportunities";
import { CHANGELOG, EXEMPLARS, LAST_UPDATED, SPEED_META, SPEED_ORDER, formatDay } from "@/data/exemplars";
import { DI_COPY, DI_PATHS, localizedExemplars } from "@/data/di-copy";
import { indexClientCopy, quadrantClientCopy } from "@/data/di-copy/client";
import { dotsOf, quadrantCounts } from "@/data/quadrant";
import { LOCALE_LABELS, LOCALE_PATHS, LOCALES, type Locale } from "@/messages";
import "./di.css";

/* /disruption-index, /es/disruption-index, /pt/disruption-index — one layout, three
   copies. Structure and figures come from src/data/exemplars.ts; strings from DI_COPY. */

const ABS = "https://the-aios.com";

export function disruptionIndexMetadata(locale: Locale): Metadata {
  const t = DI_COPY[locale];
  const url = `${ABS}${DI_PATHS[locale]}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${ABS}${DI_PATHS.en}`,
        es: `${ABS}${DI_PATHS.es}`,
        "pt-BR": `${ABS}${DI_PATHS.pt}`,
        "x-default": `${ABS}${DI_PATHS.en}`,
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.description,
      type: "website",
      url,
      images: [{ url: "/og-image.jpg", width: 1344, height: 768, alt: t.meta.title }],
    },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.description, images: ["/og-image.jpg"] },
  };
}

const industryCount = new Set(EXEMPLARS.map((e) => e.industry)).size;
const goneCount = EXEMPLARS.filter((e) => e.speed === "gone").length;
const insulatedCount = EXEMPLARS.filter((e) => e.speed === "insulated").length;
const countOf = (s: (typeof SPEED_ORDER)[number]) => EXEMPLARS.filter((e) => e.speed === s).length;

export function DisruptionIndexPage({ locale }: { locale: Locale }) {
  const t = DI_COPY[locale];
  const items = localizedExemplars(locale);
  const dots = dotsOf(items);
  const home = LOCALE_PATHS[locale];
  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];

  return (
    <div className="di-root">
      <span id="top" aria-hidden="true" />

      {/* ---------- Header (site chrome) ---------- */}
      <header className="site-header">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a
            href={home}
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a href={home} className="footer-link" style={{ fontSize: "0.875rem" }}>
              {t.nav.back}
            </a>
            {/* Plain <a>, never next/link: each locale is its own root layout (see LocaleSwitcher). */}
            <a
              href={DI_PATHS[next]}
              hrefLang={next}
              className="icon-btn"
              aria-label={`Language: ${LOCALE_LABELS[locale].label} — switch to ${LOCALE_LABELS[next].label}`}
              title={`Switch to ${LOCALE_LABELS[next].label}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                color: "var(--color-ink)",
                textDecoration: "none",
              }}
            >
              {LOCALE_LABELS[locale].code}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section
          className="hero-glow"
          style={{ borderBottom: "1px solid var(--color-hairline)", padding: "clamp(3.5rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          <div className="container">
            <p className="eyebrow">
              <span className="accent">●</span> {t.hero.eyebrow}{" "}
              <time dateTime={LAST_UPDATED}>{formatDay(LAST_UPDATED, t.dateLocale)}</time>
            </p>
            <h1 className="display-xl" style={{ marginTop: "1rem", maxWidth: "20ch" }}>
              {t.hero.h1}
            </h1>
            <p className="lede" style={{ maxWidth: "60ch", marginTop: "1.25rem" }}>
              {t.hero.lede}
            </p>

            <div className="di-hero-stats">
              <div className="di-stat">
                <div className="n">{EXEMPLARS.length}</div>
                <div className="l">{t.hero.stats.exemplars}</div>
              </div>
              <div className="di-stat">
                <div className="n">{industryCount}</div>
                <div className="l">{t.hero.stats.industries}</div>
              </div>
              <div className="di-stat">
                <div className="n" style={{ color: SPEED_META.gone.color }}>
                  {goneCount}
                </div>
                <div className="l">{t.hero.stats.gone}</div>
              </div>
              <div className="di-stat">
                <div className="n" style={{ color: SPEED_META.insulated.color }}>
                  {insulatedCount}
                </div>
                <div className="l">{t.hero.stats.insulated}</div>
              </div>
            </div>

            {/* The axis legend */}
            <div className="di-legend">
              {SPEED_ORDER.map((s) => (
                <div key={s} className="di-legend-item">
                  <span className="di-swatch-dot" style={{ background: SPEED_META[s].color }} />
                  <span className="name">{t.speed[s].label}</span>
                  <span className="c">{countOf(s)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- The quadrant: revenue vs market value since ChatGPT ---------- */}
        <DisruptionQuadrant items={items} copy={quadrantClientCopy(t, quadrantCounts(dots).priced, dots.length)} />

        {/* ---------- Changelog strip ---------- */}
        <div className="di-changelog" aria-label={t.changelogLabel}>
          <div className="container">
            <ol>
              {CHANGELOG.map((c) => (
                <li key={c.date}>
                  <time dateTime={c.date}>{c.date}</time>
                  {t.changelog[c.date]}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ---------- The interactive index ---------- */}
        <DisruptionIndex items={items} copy={indexClientCopy(t)} />

        {/* ---------- What the disruption opens up ---------- */}
        <EmergentOpportunities copy={t.opportunities} />
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <p style={{ maxWidth: "70ch", margin: 0, color: "var(--color-ink-muted)" }}>
            <span className="accent">●</span> <strong style={{ color: "var(--color-ink)" }}>{t.footer.lead}</strong>{" "}
            {t.footer.body}
          </p>
          <p style={{ marginTop: "1.25rem", marginBottom: 0, color: "var(--color-ink-subtle)", fontSize: "0.8125rem" }}>
            {t.footer.kept} ·{" "}
            <a href={home} className="footer-link" style={{ fontSize: "0.8125rem" }}>
              the-aios.com
            </a>{" "}
            · {t.footer.first}
          </p>
        </div>
      </footer>
    </div>
  );
}
