import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PulseLine } from "@/components/standards/PulseLine";
import ReceiptChain from "@/components/standards/ReceiptChain";
import EmptyLane from "@/components/standards/EmptyLane";
import {
  STANDARDS,
  STATUS_META,
  LANE_META,
  type Lane,
  PULSE_INDEX,
  PULSE_HEADLINE,
  PULSE_STAGE_META,
} from "@/data/standards";
import { MARKET_MAP, RELATIONSHIP_META, LANE_CRITERIA } from "@/data/marketMap";
import { STANDARDS_COPY, STANDARDS_PATHS } from "@/data/standards-copy";
import type { StandardsCopy } from "@/data/standards-copy/types";
import { LOCALE_LABELS, LOCALE_PATHS, LOCALES, type Locale } from "@/messages";
import "./standards.css";

/* /standards, /es/standards, /pt/standards — one layout, three copies.
   Structure (ids, statuses, lanes, colours, source URLs and check dates) comes from
   the data files; every string comes from STANDARDS_COPY[locale]. */

const ABS = "https://www.the-aios.com";

export function standardsMetadata(locale: Locale): Metadata {
  const t = STANDARDS_COPY[locale];
  const url = `${ABS}${STANDARDS_PATHS[locale]}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${ABS}${STANDARDS_PATHS.en}`,
        es: `${ABS}${STANDARDS_PATHS.es}`,
        "pt-BR": `${ABS}${STANDARDS_PATHS.pt}`,
        "x-default": `${ABS}${STANDARDS_PATHS.en}`,
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

const card: React.CSSProperties = {
  border: "1px solid var(--color-hairline)",
  borderRadius: 14,
  padding: "1.5rem 1.5rem 1.35rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  background: "var(--color-surface, transparent)",
};

const microLabel: React.CSSProperties = {
  margin: 0,
  fontSize: "0.6875rem",
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color: "var(--color-ink-subtle)",
};

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: "0.6875rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--color-ink-subtle)",
  whiteSpace: "nowrap",
};

const dot = (color: string): React.CSSProperties => ({
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: color,
  display: "inline-block",
});

const cardTitle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.05rem",
  letterSpacing: "-0.02em",
  margin: 0,
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  letterSpacing: "-0.025em",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
  gap: "1rem",
};

const sectionPad: React.CSSProperties = {
  borderBottom: "1px solid var(--color-hairline)",
  padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
};

const ink = { color: "var(--color-ink)" } as const;
const muted = { color: "var(--color-ink-muted)" } as const;
const subtle = { color: "var(--color-ink-subtle)" } as const;

type PulseRow = (typeof PULSE_INDEX)[number];

function PulseCard({ p, t }: { p: PulseRow; t: StandardsCopy["pulse"] }) {
  const stage = PULSE_STAGE_META[p.stage];
  const x = t.entries[p.id];
  return (
    <article style={card}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem" }}>
        <h3 style={cardTitle}>{x.subject}</h3>
        <span style={pill}>
          <span style={dot(stage.color)} />
          {t.stage[p.stage]}
        </span>
      </div>
      <p style={microLabel}>{x.category}</p>

      {p.narrative !== "—" && (
        <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>
          <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>{t.labels.narrative}</span>
          {x.narrative}
        </p>
      )}

      <p style={{ margin: 0, fontSize: "0.95rem", ...ink }}>
        <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>{t.labels.measured}</span>
        <strong>{x.measured}</strong>
      </p>

      <p style={{ margin: 0, fontSize: "0.85rem", ...muted }}>
        <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>{t.labels.proves}</span>
        {x.authPosture}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          paddingTop: "0.6rem",
          marginTop: "0.15rem",
          borderTop: "1px solid var(--color-hairline)",
        }}
      >
        <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", ...subtle }}>
          {t.confidence[p.confidence]}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: "0.75rem", ...subtle }}>
        <span className="accent" style={{ fontWeight: 600 }}>
          {t.labels.source}&nbsp;
        </span>
        {x.source}
      </p>
    </article>
  );
}

export function StandardsPage({ locale }: { locale: Locale }) {
  const t = STANDARDS_COPY[locale];
  const home = LOCALE_PATHS[locale];
  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];

  return (
    <div className="std-root">
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
              href={STANDARDS_PATHS[next]}
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
              <span className="accent">●</span> {t.hero.eyebrow}
            </p>
            <h1 className="display-xl" style={{ marginTop: "1rem", maxWidth: "22ch" }}>
              {t.hero.h1}
            </h1>
            <p className="lede" style={{ maxWidth: "62ch", marginTop: "1.25rem" }}>
              {t.hero.lede}
            </p>

            {/* The through-line — one argument, read top to bottom */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 0", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <PulseLine label={t.hero.livePulse} /> {t.hero.arcEyebrow}
            </p>
            <div className="std-arc">
              {t.hero.arc.map((s) => (
                <div key={s.t} className="std-arc-step">
                  <p className="std-arc-k">{s.k}</p>
                  <p className="std-arc-t">{s.t}</p>
                  <p className="std-arc-d">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- The Proof Pair — featured ---------- */}
        <section style={sectionPad}>
          <div className="container">
            <div style={{ ...card, borderColor: "var(--color-accent, #ff5d4d)", gap: "0.8rem" }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> {t.proofPair.eyebrow}
              </p>
              <h2 style={{ ...h2Style, margin: 0 }}>{t.proofPair.title}</h2>
              <p style={{ margin: 0, ...muted, maxWidth: "70ch" }}>{t.proofPair.body}</p>

              {/* the pair, alive: mandate → action → receipt, on a growing chain */}
              <div style={{ margin: "0.5rem auto 0.25rem", width: "100%" }}>
                <ReceiptChain copy={t.receipt} />
              </div>

              <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>
                <a href="https://the-aios.org/proof-pair/" className="footer-link" style={{ fontWeight: 600 }}>
                  {t.proofPair.specLink}
                </a>
                <span style={subtle}> &nbsp;{t.proofPair.specNote}</span>
              </p>
            </div>

            {/* bridge → Agentic Pulse */}
            <p className="std-bridge">
              <span className="std-next">{t.proofPair.bridgeNext}</span>
              {t.proofPair.bridge}
            </p>
          </div>
        </section>

        {/* ---------- Agentic Pulse — measured reality ---------- */}
        <section style={sectionPad}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <PulseLine label={t.pulse.pulseLabel} /> {t.pulse.eyebrow}
            </p>
            <h2 style={{ ...h2Style, margin: "0 0 0.75rem", maxWidth: "24ch" }}>{t.pulse.h2}</h2>
            <p style={{ margin: "0 0 2rem", ...muted, maxWidth: "70ch" }}>{t.pulse.intro}</p>

            {/* Headline stat strip */}
            <div style={{ ...grid, gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", marginBottom: "2rem" }}>
              <div style={{ ...card, gap: "0.4rem" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", ...ink }}>
                  {PULSE_HEADLINE.execTrust.routine}{" "}
                  <span style={{ ...subtle, fontSize: "0.5em" }}>→</span>{" "}
                  <span className="accent">{PULSE_HEADLINE.execTrust.transactional}</span>
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>{t.pulse.headline.execTrustLabel}</p>
                <p style={{ margin: 0, fontSize: "0.7rem", ...subtle }}>{t.pulse.headline.execTrustSource}</p>
              </div>
              <div style={{ ...card, gap: "0.4rem" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", ...ink }}>
                  {PULSE_HEADLINE.narrativeCeiling.figure}
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>{t.pulse.headline.ceilingLabel}</p>
                <p style={{ margin: 0, fontSize: "0.7rem", ...subtle }}>{t.pulse.headline.ceilingSource}</p>
              </div>
            </div>

            {/* Washing rows */}
            <div style={grid}>
              {PULSE_INDEX.filter((p) => !("isFloor" in p && p.isFloor)).map((p) => (
                <PulseCard key={p.id} p={p} t={t.pulse} />
              ))}
            </div>

            {/* Honest floor — real cash, for contrast */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> {t.pulse.floorEyebrow}
            </p>
            <p style={{ margin: "0 0 1.5rem", ...muted, maxWidth: "70ch", fontSize: "0.95rem" }}>{t.pulse.floorIntro}</p>
            <div style={grid}>
              {PULSE_INDEX.filter((p) => "isFloor" in p && p.isFloor).map((p) => (
                <PulseCard key={p.id} p={p} t={t.pulse} />
              ))}
            </div>

            {/* bridge → Claim Provenance */}
            <p className="std-bridge">
              <span className="std-next">{t.pulse.bridgeNext}</span>
              {t.pulse.bridge}
            </p>
          </div>
        </section>

        {/* ---------- Claim Provenance — the open lane ---------- */}
        <section style={sectionPad}>
          <div className="container">
            <div
              style={{
                ...card,
                // dashed hairline border = "an open invitation, not yet built"
                // (vs the Proof Pair's solid accent border = "live"). Deliberate
                // contrast: this lane is offered, not occupied.
                border: "1px dashed var(--color-hairline)",
                gap: "0.8rem",
              }}
            >
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> {t.claim.eyebrow}
              </p>
              <h2 style={{ ...h2Style, margin: 0 }}>{t.claim.title}</h2>
              <p style={{ margin: 0, ...muted, maxWidth: "72ch" }}>{t.claim.p1}</p>
              <p style={{ margin: 0, ...muted, maxWidth: "72ch" }}>{t.claim.p2}</p>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>
                <span className="accent" style={{ fontWeight: 600 }}>
                  {t.claim.inviteLead}
                </span>
                <span style={subtle}>{t.claim.inviteRest}</span>
              </p>
            </div>

            {/* bridge → the scene + market map */}
            <p className="std-bridge">
              <span className="std-next">{t.claim.bridgeNext}</span>
              {t.claim.bridge}
            </p>
          </div>
        </section>

        {/* ---------- The scene, grouped by lane ---------- */}
        <section style={{ padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
              <span className="accent">●</span> {t.scene.eyebrow(STANDARDS.length)}
            </p>
            {(Object.keys(LANE_META) as Lane[]).map((lane) => {
              const rails = STANDARDS.filter((s) => s.lane === lane);
              if (rails.length === 0) return null;
              return (
                <div key={lane} style={{ marginBottom: "2.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", letterSpacing: "-0.02em", margin: "0 0 0.25rem" }}>
                    {t.scene.lanes[lane].label}
                  </h3>
                  <p style={{ margin: "0 0 1rem", fontSize: "0.9375rem", ...muted }}>{t.scene.lanes[lane].question}</p>
                  <div style={grid}>
                    {rails.map((s) => {
                      const x = t.scene.rails[s.id];
                      return (
                        <article key={s.id} style={card}>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem" }}>
                            <h4 style={cardTitle}>{x.name}</h4>
                            <span style={pill}>
                              <span style={dot(STATUS_META[s.status].color)} />
                              {t.scene.status[s.status]}
                            </span>
                          </div>
                          <p style={{ margin: 0, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", ...subtle }}>
                            {x.org}
                          </p>
                          <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>{x.what}</p>
                          <p style={{ margin: 0, fontSize: "0.875rem", paddingTop: "0.6rem", borderTop: "1px solid var(--color-hairline)" }}>
                            <span className="accent" style={{ fontWeight: 600 }}>
                              {t.scene.howItFits}&nbsp;
                            </span>
                            <span style={muted}>{x.relation}</span>
                          </p>
                          <p style={{ margin: "auto 0 0", fontSize: "0.75rem", ...subtle }}>
                            {t.scene.source}{" "}
                            <a href={s.source.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                              {x.sourceLabel}
                            </a>{" "}
                            · {t.scene.checked} {s.source.checked}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- The agent-identity market map ---------- */}
        <section style={{ borderTop: "1px solid var(--color-hairline)", padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              <span className="accent">●</span> {t.market.eyebrow}
            </p>
            <h2 style={{ ...h2Style, margin: "0 0 0.75rem", maxWidth: "26ch" }}>{t.market.h2}</h2>
            <p style={{ margin: "0 0 1rem", ...muted, maxWidth: "72ch" }}>{t.market.intro}</p>

            {/* the map, alive: eight boxes fill, the center lane stays open */}
            <div style={{ margin: "1.75rem auto 0.5rem" }}>
              <EmptyLane copy={t.emptyLane} />
            </div>

            {/* The lane, stated first */}
            <div style={{ ...card, margin: "1.5rem 0 2rem", gap: "0.9rem" }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> {t.market.laneEyebrow}
              </p>
              <p style={{ margin: 0, ...muted, maxWidth: "72ch" }}>{t.market.laneIntro}</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {LANE_CRITERIA.map((c, i) => (
                  <li key={c.label} style={{ fontSize: "0.9rem", ...muted }}>
                    <strong style={ink}>{t.market.criteria[i].label}</strong> — {t.market.criteria[i].detail}
                    {c.unique && <span className="accent">{t.market.uniqueNote}</span>}
                  </li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", ...ink }}>{t.market.laneOutro}</p>
            </div>

            {/* The six solutions */}
            <p className="eyebrow" style={{ margin: "0 0 1rem" }}>
              <span className="accent">●</span> {t.market.solutionsEyebrow}
            </p>
            <p style={{ margin: "0 0 1.5rem", ...muted, maxWidth: "72ch", fontSize: "0.95rem" }}>{t.market.solutionsIntro}</p>
            <div style={grid}>
              {MARKET_MAP.map((m) => {
                const rel = RELATIONSHIP_META[m.relationship];
                const x = t.market.solutions[m.id];
                return (
                  <article key={m.id} style={card}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem" }}>
                      <h3 style={cardTitle}>{x.name}</h3>
                      <span style={pill}>
                        <span style={dot(rel.color)} />
                        {t.market.relationship[m.relationship].label}
                      </span>
                    </div>
                    {x.qualifier && <p style={microLabel}>{x.qualifier}</p>}
                    <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>
                      <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>{t.market.whatItDoes}</span>
                      {x.what}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", ...muted }}>
                      <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>{t.market.whereItStops}</span>
                      {x.stops}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.85rem", paddingTop: "0.6rem", borderTop: "1px solid var(--color-hairline)", ...muted }}>
                      {x.note}
                    </p>
                  </article>
                );
              })}
            </div>

            <p style={{ margin: "1.5rem 0 0", ...ink, maxWidth: "72ch", fontSize: "0.95rem" }}>
              <span className="accent" style={{ fontWeight: 600 }}>
                {t.market.tallyLead}
              </span>
              {t.market.tally}
            </p>

            {/* Where the person-rooted approach sits */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> {t.market.sitsEyebrow}
            </p>
            <p style={{ margin: "0 0 1rem", ...muted, maxWidth: "72ch" }}>{t.market.sits}</p>

            {/* The honest limit */}
            <div style={{ ...card, margin: "1.5rem 0", gap: "0.7rem" }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> {t.market.limitEyebrow}
              </p>
              <p style={{ margin: 0, ...muted, maxWidth: "72ch" }}>{t.market.limit}</p>
            </div>

            {/* Compose, don't compete */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> {t.market.composeEyebrow}
            </p>
            <p style={{ margin: "0 0 1rem", ...muted, maxWidth: "72ch" }}>{t.market.compose}</p>

            {/* Standards alignment */}
            <p style={{ margin: "0 0 1rem", ...muted, maxWidth: "72ch", fontSize: "0.95rem" }}>
              <span className="accent" style={{ fontWeight: 600 }}>
                {t.market.alignmentLead}
              </span>
              {t.market.alignment}
            </p>

            {/* Open questions */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> {t.market.questionsEyebrow}
            </p>
            <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "72ch" }}>
              {t.market.questions.map((q) => (
                <li key={q.h} style={{ fontSize: "0.9rem", ...muted }}>
                  <strong style={ink}>{q.h}</strong> {q.b}
                </li>
              ))}
            </ol>
            <p style={{ margin: "1.5rem 0 0", ...subtle, maxWidth: "72ch", fontSize: "0.8125rem" }}>{t.market.closing}</p>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <p style={{ maxWidth: "70ch", margin: 0, ...muted }}>
            <span className="accent">●</span> <strong style={ink}>{t.footer.lead}</strong> {t.footer.rest}
          </p>
          <p style={{ marginTop: "1.25rem", marginBottom: 0, ...subtle, fontSize: "0.8125rem" }}>
            {t.footer.kept} ·{" "}
            <a href={home} className="footer-link" style={{ fontSize: "0.8125rem" }}>
              the-aios.com
            </a>{" "}
            ·{" "}
            <a href="https://the-aios.org" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              {t.footer.guardian}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
