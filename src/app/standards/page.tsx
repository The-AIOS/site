import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  STANDARDS,
  STATUS_META,
  PULSE_INDEX,
  PULSE_HEADLINE,
  PULSE_STAGE_META,
  type PulseEntry,
} from "@/data/standards";
import {
  MARKET_MAP,
  RELATIONSHIP_META,
  LANE_CRITERIA,
} from "@/data/marketMap";

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

const microLabel: React.CSSProperties = {
  margin: 0,
  fontSize: "0.6875rem",
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color: "var(--color-ink-subtle)",
};

function PulseCard({ p }: { p: PulseEntry }) {
  const stage = PULSE_STAGE_META[p.stage];
  return (
    <article style={card}>
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
          {p.subject}
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
              background: stage.color,
              display: "inline-block",
            }}
          />
          {stage.label}
        </span>
      </div>
      <p style={microLabel}>{p.category}</p>

      {p.narrative !== "—" && (
        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
          <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>
            Narrative
          </span>
          {p.narrative}
        </p>
      )}

      <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--color-ink)" }}>
        <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>
          Measured reality
        </span>
        <strong>{p.measured}</strong>
      </p>

      <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-ink-muted)" }}>
        <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>
          Can it prove who acted?
        </span>
        {p.authPosture}
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
        <span
          style={{
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-ink-subtle)",
          }}
        >
          {p.confidence} confidence
        </span>
      </div>
      <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--color-ink-subtle)" }}>
        <span className="accent" style={{ fontWeight: 600 }}>
          Source:&nbsp;
        </span>
        {p.source}
      </p>
    </article>
  );
}

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

        {/* ---------- Agentic Pulse — measured reality ---------- */}
        <section
          style={{
            borderBottom: "1px solid var(--color-hairline)",
            padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
          }}
        >
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              <span className="accent">●</span> Agentic Pulse · narrative vs
              measured reality
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                margin: "0 0 0.75rem",
                maxWidth: "24ch",
              }}
            >
              What the agent economy <span className="accent">claims</span>, and
              what it can <span className="accent">show</span>.
            </h2>
            <p
              style={{
                margin: "0 0 2rem",
                color: "var(--color-ink-muted)",
                maxWidth: "70ch",
              }}
            >
              The pulse reads the gap between the agentic narrative — the raise,
              the whitepaper, the projection — and the measured reality: real
              volume, production status, whether the thing can prove{" "}
              <em>who</em> acted. The phenomenon it surfaces is what the field
              calls <em>agent-washing</em>. It is a diagnostic, not a scoreboard.{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                Every figure traces to a named source.
              </strong>{" "}
              Where a value can&apos;t be sourced it reads{" "}
              <code
                style={{
                  fontSize: "0.85em",
                  color: "var(--color-ink-subtle)",
                }}
              >
                [TBD-verify]
              </code>{" "}
              — never an invented number.
            </p>

            {/* Headline stat strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ ...card, gap: "0.4rem" }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--color-ink)",
                  }}
                >
                  {PULSE_HEADLINE.execTrust.routine}{" "}
                  <span
                    style={{
                      color: "var(--color-ink-subtle)",
                      fontSize: "0.5em",
                    }}
                  >
                    →
                  </span>{" "}
                  <span className="accent">
                    {PULSE_HEADLINE.execTrust.transactional}
                  </span>
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                  {PULSE_HEADLINE.execTrust.label}
                </p>
                <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--color-ink-subtle)" }}>
                  {PULSE_HEADLINE.execTrust.source}
                </p>
              </div>
              <div style={{ ...card, gap: "0.4rem" }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--color-ink)",
                  }}
                >
                  {PULSE_HEADLINE.narrativeCeiling.figure}
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                  {PULSE_HEADLINE.narrativeCeiling.label}
                </p>
                <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--color-ink-subtle)" }}>
                  {PULSE_HEADLINE.narrativeCeiling.source}
                </p>
              </div>
            </div>

            {/* Washing rows */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1rem",
              }}
            >
              {PULSE_INDEX.filter((p) => !p.isFloor).map((p) => (
                <PulseCard key={p.id} p={p} />
              ))}
            </div>

            {/* Honest floor — real cash, for contrast */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> Real cash, for contrast — the
              honest floor (not washing)
            </p>
            <p
              style={{
                margin: "0 0 1.5rem",
                color: "var(--color-ink-muted)",
                maxWidth: "70ch",
                fontSize: "0.95rem",
              }}
            >
              The index cuts toward the honest builders too. These are what real,
              measured agent revenue looks like — the floor the narrative should
              be graded against, not just the ceiling it&apos;s sold at.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1rem",
              }}
            >
              {PULSE_INDEX.filter((p) => p.isFloor).map((p) => (
                <PulseCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Claim Provenance — the unoccupied lane ---------- */}
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
                // dashed hairline border = "named, not yet built" (vs the Proof
                // Pair's solid accent border = "live"). Deliberate contrast.
                border: "1px dashed var(--color-hairline)",
                gap: "0.8rem",
              }}
            >
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> The unoccupied lane · named in
                the open, not yet built
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Claim Provenance
              </h2>
              <p style={{ margin: 0, color: "var(--color-ink-muted)", maxWidth: "72ch" }}>
                Proof answers{" "}
                <strong style={{ color: "var(--color-ink)" }}>is this real?</strong>{" "}
                It has no answer for{" "}
                <strong style={{ color: "var(--color-ink)" }}>
                  should I be suspicious — and who, exactly, is behind the doubt?
                </strong>{" "}
                In an era where AI makes coordinated, plausible, tireless
                suspicion cheaper than it has ever been, we have a fact layer for
                what things are. We have nothing for who manufactures doubt about
                them.
              </p>
              <p style={{ margin: 0, color: "var(--color-ink-muted)", maxWidth: "72ch" }}>
                The missing primitive: a verifiable answer to{" "}
                <em>
                  who is actually behind this assertion, since when, in
                  coordination with whom
                </em>{" "}
                — coordinated-inauthenticity detection as public infrastructure,
                not a platform&apos;s private trust-and-safety black box.
                Provenance pointed at the accuser, not the accused. Provenance for
                the suspicion itself.
              </p>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>
                <span className="accent" style={{ fontWeight: 600 }}>
                  We&apos;re naming the lane here, in the open, before it&apos;s
                  occupied.&nbsp;
                </span>
                <span style={{ color: "var(--color-ink-subtle)" }}>
                  A citable, public prior-art stake — the same posture as the
                  Proof Pair. The spec isn&apos;t written yet. Neither is anyone
                  else&apos;s. That&apos;s the invitation.
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

        {/* ---------- The agent-identity market map ---------- */}
        <section
          style={{
            borderTop: "1px solid var(--color-hairline)",
            padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
          }}
        >
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              <span className="accent">●</span> The agent-identity landscape,
              mapped
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                margin: "0 0 0.75rem",
                maxWidth: "26ch",
              }}
            >
              Benchmarked against a{" "}
              <span className="accent">running system</span>, not a whitepaper.
            </h2>
            <p
              style={{
                margin: "0 0 1rem",
                color: "var(--color-ink-muted)",
                maxWidth: "72ch",
              }}
            >
              Most agent-identity comparisons line up whitepapers against
              whitepapers. This one is calibrated against a proven end-to-end
              implementation — a working system in which an agent is issued a
              scoped, owner-bound credential, presents it to a counterparty in a
              different organization with no prior relationship, and has that
              credential verified cryptographically on the wire, with selective
              disclosure and explicit revocation, today. The bar here is{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                implemented, not proposed.
              </strong>
            </p>

            {/* The lane, stated first */}
            <div style={{ ...card, margin: "1.5rem 0 2rem", gap: "0.9rem" }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> The lane, stated first
              </p>
              <p style={{ margin: 0, color: "var(--color-ink-muted)", maxWidth: "72ch" }}>
                Here is the specific combination the field has not delivered — an
                agent identity that is simultaneously all of these at once:
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {LANE_CRITERIA.map((c) => (
                  <li
                    key={c.label}
                    style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}
                  >
                    <strong style={{ color: "var(--color-ink)" }}>{c.label}</strong>{" "}
                    — {c.detail}
                    {c.unique && (
                      <span className="accent">
                        {" "}
                        (No one else in this map does this.)
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink)" }}>
                <strong>No solution in the field delivers all of the above.</strong>{" "}
                The map below shows where each one stops.
              </p>
            </div>

            {/* The six solutions */}
            <p className="eyebrow" style={{ margin: "0 0 1rem" }}>
              <span className="accent">●</span> Six solutions — what they do,
              where they stop
            </p>
            <p
              style={{
                margin: "0 0 1.5rem",
                color: "var(--color-ink-muted)",
                maxWidth: "72ch",
                fontSize: "0.95rem",
              }}
            >
              A crucial distinction runs through the field:{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                most of these are not rivals — they are integration points.
              </strong>{" "}
              Four of the six operate at layers below or beside agent authority
              (where agents run, how traffic is enforced, who issues inside one
              company). Only one occupies the same layer.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1rem",
              }}
            >
              {MARKET_MAP.map((m) => {
                const rel = RELATIONSHIP_META[m.relationship];
                return (
                  <article key={m.id} style={card}>
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
                        {m.name}
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
                            background: rel.color,
                            display: "inline-block",
                          }}
                        />
                        {rel.label}
                      </span>
                    </div>
                    {m.qualifier && <p style={microLabel}>{m.qualifier}</p>}
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                      <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>
                        What it does
                      </span>
                      {m.what}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                      <span style={{ ...microLabel, display: "block", marginBottom: 2 }}>
                        Where it stops
                      </span>
                      {m.stops}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.85rem",
                        paddingTop: "0.6rem",
                        borderTop: "1px solid var(--color-hairline)",
                        color: "var(--color-ink-muted)",
                      }}
                    >
                      {m.note}
                    </p>
                  </article>
                );
              })}
            </div>

            <p
              style={{
                margin: "1.5rem 0 0",
                color: "var(--color-ink)",
                maxWidth: "72ch",
                fontSize: "0.95rem",
              }}
            >
              <span className="accent" style={{ fontWeight: 600 }}>
                The tally:&nbsp;
              </span>
              four integration points (two runtimes, one enforcement layer, one
              intra-org issuer), one source of a technique to adopt, and one true
              rival in the same layer — AAuth — which is DNS-rooted and has yet to
              ship in production.
            </p>

            {/* Where the person-rooted approach sits */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> Where the person-rooted approach
              sits
            </p>
            <p
              style={{
                margin: "0 0 1rem",
                color: "var(--color-ink-muted)",
                maxWidth: "72ch",
              }}
            >
              Against that map, the lane is still open. A person-rooted agent
              credential — owner-bound, revocable, selectively disclosable,
              cross-org, offline-verifiable, and anchorable to a real-world
              identity — is the one combination nobody else assembles. The human
              holds the key that authority descends from: AAuth roots in DNS, the
              enterprise issuers root in a tenant, the runtimes have no root at
              all. Offline verification is unique to this approach across the
              whole map. This isn&apos;t a claim that everyone else is wrong — they
              solve <em>different</em> problems, and the authority layer that sits
              above all of them, rooted in a person, is unoccupied.
            </p>

            {/* The honest limit */}
            <div style={{ ...card, margin: "1.5rem 0", gap: "0.7rem" }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                <span className="accent">●</span> The honest limit — where
                person-root actually matters
              </p>
              <p style={{ margin: 0, color: "var(--color-ink-muted)", maxWidth: "72ch" }}>
                A market map that only lists strengths is not credible. A
                person-owned root of trust has real demand{" "}
                <strong style={{ color: "var(--color-ink)" }}>
                  only where the context requires that a human authorized
                  something
                </strong>{" "}
                — government acts, legally binding mandates, citizen transactions,
                regulated consent. Where authority is purely machine-to-machine
                and no human needs to be provably behind it, a provider-root or an
                org-issuer is often enough, and cheaper. So this is both the
                market and its edge: the value is highest exactly where the law, an
                institution, or accountability demands a real person stand behind
                the agent&apos;s action — and it is deliberately not trying to be
                the default for every automated call between two services. This
                same limit was reached independently by two separate analyses;
                independent convergence on a system&apos;s honest boundary is a
                credibility signal, not a weakness.
              </p>
            </div>

            {/* Compose, don't compete */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> Compose, don&apos;t compete
            </p>
            <p
              style={{
                margin: "0 0 1rem",
                color: "var(--color-ink-muted)",
                maxWidth: "72ch",
              }}
            >
              The strongest position is to be the authority layer everyone else
              needs — adopting the best ideas without adopting whole protocols:{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                attenuation per hop
              </strong>{" "}
              (sub-delegation can only narrow authority, never widen it),{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                asynchronous consent
              </strong>{" "}
              (deferred / pending approval as a first-class flow), and{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                lifecycle blueprints
              </strong>{" "}
              from the enterprise issuers. A person-rooted mandate is the source
              of truth that renders down into the authorization protocols the
              ecosystem already uses — riding existing rails rather than fighting
              them. The proof of &ldquo;compose, don&apos;t compete&rdquo; is an
              integration, not an argument.
            </p>

            {/* Standards alignment */}
            <p
              style={{
                margin: "0 0 1rem",
                color: "var(--color-ink-muted)",
                maxWidth: "72ch",
                fontSize: "0.95rem",
              }}
            >
              <span className="accent" style={{ fontWeight: 600 }}>
                Standards alignment:&nbsp;
              </span>
              built on and interoperating with the open standards the category is
              converging on — ERC-8004, AP2, W3C Verifiable Credentials, SD-JWT,
              and OID4VC — so composability is designed in, not bolted on.
            </p>

            {/* Open questions */}
            <p className="eyebrow" style={{ margin: "2.5rem 0 1rem" }}>
              <span className="accent">●</span> Open questions for the category
            </p>
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                maxWidth: "72ch",
              }}
            >
              <li style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                <strong style={{ color: "var(--color-ink)" }}>
                  Platform-custodied person-keys.
                </strong>{" "}
                The largest consumer platforms already custody person-scale keys
                (the &ldquo;sign in with…&rdquo; pattern). The open question is
                whether the consumer and citizen agentic economy — where a
                self-held person-root is genuinely required — grows large and fast
                enough before platform-custodied keys become the de-facto root.
              </li>
              <li style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                <strong style={{ color: "var(--color-ink)" }}>
                  Enterprise-suite consolidation.
                </strong>{" "}
                An enterprise identity vendor connecting its agent-ID product to
                its verifiable-credential product could push toward cross-org
                portability from an enormous installed base.
              </li>
              <li style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                <strong style={{ color: "var(--color-ink)" }}>
                  Standards-body anointment.
                </strong>{" "}
                If a working group adopts a provider-rooted draft as the default,
                it could become an enterprise focal point regardless of production
                maturity. To date, the tooling ecosystem has leaned the other way.
              </li>
            </ol>
            <p
              style={{
                margin: "1.5rem 0 0",
                color: "var(--color-ink-subtle)",
                maxWidth: "72ch",
                fontSize: "0.8125rem",
              }}
            >
              A map of a live field, drawn honestly, by the team measuring the
              category rather than marketing to it. Benchmarked against a running
              end-to-end implementation as of mid-2026; standards drafts and
              product statuses evolve — time-sensitive claims are re-verified
              before publication.
            </p>
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
