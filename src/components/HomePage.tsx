/* the-aios.com — the operating manual's web-native sibling.
 *
 * Design language: the operating manual. Words: the spine canvas. Why: The Ground.
 * Graphics: redrawn from the AIOS keynote deck (deckGraphics.tsx) in the product brand.
 *
 * Reader-facing prose is trilingual via CONTENT[locale] (src/content.ts) — EN / ES
 * (LATAM) / PT-BR. Technical surfaces stay English by design: command names, file
 * names, code blocks, the machine-facing AI-affordance block, SVG diagram internals,
 * and the ant chatter.
 *
 * Hard keeps: GitHubLink / RepoLink tracking, SubstackLink, Analytics, Logo, MobileMenu,
 * /llms.txt link in footer.
 */

import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { GitHubLink } from "./GitHubLink";
import { RepoLink, RepoFolderLink } from "./RepoLink";
import { SubstackLink } from "./SubstackLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Reveal } from "./Reveal";
import { ThemeToggle } from "./ThemeToggle";
import { ManualDownload } from "./ManualEmbed";
import { LogoFlip } from "./LogoFlip";
import { AntChatter } from "./AntChatter";
import {
  HeroConstellation,
  CompoundTimeline,
  RitualLoop,
  TrustLadder,
  OrchestratorShift,
  TwoMachines,
  OsAnatomy,
  GlassPanel,
  TeamMount,
  SkillsBeam,
} from "./deckGraphics";
import type { Locale } from "@/messages";
import { CONTENT } from "@/content";

const REPO = "https://github.com/The-AIOS/aios";
const ORG = "https://github.com/The-AIOS";

/* ---------- primitives ---------- */

type Triple = [string, string, string];

/** Headline with a single coral accent word: [pre, accent, post]. */
function HL({ h }: { h: Triple }) {
  return (
    <>
      {h[0]}
      <span className="accent">{h[1]}</span>
      {h[2]}
    </>
  );
}

function SectionLabel({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="num">{num}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Card({ eyebrow, title, children, mono }: { eyebrow?: string; title?: string; children?: ReactNode; mono?: string }) {
  return (
    <div className="card">
      {eyebrow && <div className="card-eyebrow">{eyebrow}</div>}
      {title && <h4>{title}</h4>}
      {children && <p>{children}</p>}
      {mono && <div className="card-mono">{mono}</div>}
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="stat">
      <div className="n">{n}</div>
      <div className="l">{label}</div>
    </div>
  );
}

const INK = { color: "var(--color-ink)" } as const;

/* ---------- the page ---------- */

export default function HomePage({ locale = "en" }: { m?: unknown; locale?: Locale }) {
  const c = CONTENT[locale];

  return (
    <>
      {/* ============ Header ============ */}
      <header className="site-header">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-ink)", textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.025em" }}>
            <Logo size={20} />
            The AIOS
          </a>

          <nav className="nav-desktop" style={{ alignItems: "center", gap: "1.375rem" }}>
            {c.nav.map((item) => (
              <a key={item.href} href={item.href} className="caption" style={{ color: "var(--color-ink-muted)", textDecoration: "none", letterSpacing: "0.02em", textTransform: "none", fontSize: "0.875rem" }}>
                {item.label}
              </a>
            ))}
            <GitHubLink href={REPO} surface="nav-desktop" className="caption" style={{ color: "var(--color-ink)", textDecoration: "none", fontSize: "0.875rem", textTransform: "none", letterSpacing: "0.02em" }}>
              GitHub ↗
            </GitHubLink>
            <LocaleSwitcher current={locale} />
            <ThemeToggle />
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MobileMenu items={c.nav} githubLabel="GitHub ↗" locale={locale} />
          </div>
        </div>
      </header>

      <main>
        {/* ============ Hero ============ */}
        <section className="hero-glow" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
          <HeroConstellation />
          <AntChatter />
          <div className="container" style={{ paddingTop: "6rem", paddingBottom: "6rem", maxWidth: 980 }}>
            <div className="eyebrow" style={{ marginBottom: "1.75rem" }}>
              {c.hero.eyebrowPre} <span className="accent">{c.hero.eyebrowAccent}</span> {c.hero.eyebrowPost}
            </div>
            <h1 className="display-xl" style={{ marginBottom: "1.75rem", maxWidth: "16ch" }}>
              <HL h={c.hero.h} />
            </h1>
            <div className="accent-rule" style={{ marginBottom: "1.75rem" }} />
            <p className="lede" style={{ maxWidth: "56ch", marginBottom: "1rem" }}>
              <strong style={{ ...INK, fontWeight: 600 }}>{c.hero.leadBold}</strong>
              {c.hero.leadRest}
            </p>
            <p className="mono" style={{ background: "transparent", border: 0, padding: 0, color: "var(--color-accent)", fontSize: "0.9375rem", marginBottom: "2rem" }}>
              {c.hero.tagline}
            </p>

            {/* Animated install one-liner — the real CTA (command stays English). */}
            <div className="terminal" style={{ marginBottom: "1.75rem" }}>
              <span className="t-comment"># tell claude:</span>
              <span className="t-cmdline">
                <span className="t-prompt">›</span>
                <span className="t-typed">Set up my AI-OS from https://github.com/The-AIOS/aios</span>
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <a href="#what" className="btn-primary">{c.hero.ctaPrimary}</a>
              <GitHubLink href={REPO} surface="hero-primary" className="btn-secondary">{c.hero.ctaGithub}</GitHubLink>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {c.hero.chips.map((chip) => (
                <span key={chip} className="code-chip">{chip}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 01 — What it is ============ */}
        <section id="what" className="section">
          <div className="container">
            <SectionLabel num="01">{c.what.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.what.h} /></h2>
            <div className="section-grid" style={{ marginBottom: "2.5rem" }}>
              <p className="body-text">{c.what.body1}</p>
              <p className="body-text">
                {c.what.body2Pre}
                <strong style={INK}>{c.what.body2Bold}</strong>
                {c.what.body2Rest}
              </p>
            </div>

            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.what.principlesEyebrow}</div>
            <Reveal className="grid-2 reveal-cards">
              {c.what.principles.map((p) => (
                <Card key={p.t} title={p.t}>{p.b}</Card>
              ))}
            </Reveal>

            <div style={{ marginTop: "2.5rem" }}>
              <p className="pullquote-lg"><HL h={c.what.pull} /></p>
            </div>
          </div>
        </section>

        {/* ============ 02 — The journey ============ */}
        <section id="journey" className="section">
          <div className="container">
            <SectionLabel num="02">{c.journey.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "20ch" }}><HL h={c.journey.h} /></h2>
            <p className="body-text" style={{ maxWidth: "62ch", marginBottom: "2.5rem" }}>{c.journey.intro}</p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "3rem" }}>
              {c.journey.cards.map((card) => (
                <Card key={card.t} eyebrow={card.e} title={card.t}>{card.b}</Card>
              ))}
            </Reveal>

            <h3 className="display-md" style={{ marginBottom: "1.5rem" }}><HL h={c.journey.h3} /></h3>
            <Reveal className="graphic-frame">
              <OrchestratorShift />
              <p className="graphic-caption">{c.journey.caption}</p>
            </Reveal>

            <div style={{ marginTop: "2.5rem" }}>
              <p className="pullquote-lg"><HL h={c.journey.pull} /></p>
            </div>
          </div>
        </section>

        {/* ============ 03 — Architecture ============ */}
        <section id="architecture" className="section">
          <div className="container">
            <SectionLabel num="03">{c.arch.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "16ch" }}><HL h={c.arch.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2.5rem" }}>
              {c.arch.introPre}
              <strong style={INK}>{c.arch.introBold}</strong>
              {c.arch.introPost}
            </p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "3rem" }}>
              {c.arch.layers.map((l) => (
                <Card key={l.t} eyebrow={l.e} title={l.t}>{l.b}</Card>
              ))}
            </Reveal>

            <Reveal className="graphic-frame" style={{ marginBottom: "3rem" }}>
              <div className="eyebrow" style={{ marginBottom: "1.25rem", textAlign: "center" }}>{c.arch.timelineEyebrow}</div>
              <CompoundTimeline />
              <p className="graphic-caption">{c.arch.timelineCaption}</p>
            </Reveal>

            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.arch.madeOfEyebrow}</div>
            <Reveal className="graphic-frame" style={{ marginBottom: "3rem" }}>
              <OsAnatomy />
              <p className="graphic-caption">{c.arch.anatomyCaption}</p>
            </Reveal>

            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>{c.arch.distinctEyebrow}</div>
            <div style={{ marginBottom: "2.5rem" }}>
              {c.arch.distinct.map(([term, body]) => (
                <div key={term} className="def-row">
                  <span className="def-term">{term}</span>
                  <span className="def-body">{body}</span>
                </div>
              ))}
            </div>

            <p className="pullquote-lg"><HL h={c.arch.pull} /></p>
            <div style={{ marginTop: "1.5rem" }}>
              <RepoLink to="CLAUDE.md" label={c.arch.claudeLink} variant="inline" />
            </div>
          </div>
        </section>

        {/* ============ 04 — The toolbox ============ */}
        <section id="toolbox" className="section">
          <div className="container">
            <SectionLabel num="04">{c.toolbox.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "22ch" }}><HL h={c.toolbox.h} /></h2>
            <p className="body-text" style={{ maxWidth: "62ch", marginBottom: "2.5rem" }}>{c.toolbox.intro}</p>

            <Reveal className="grid-4 reveal-fade" style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--color-hairline)" }}>
              {c.toolbox.stats.map((s) => (
                <Stat key={s.label} n={s.n} label={s.label} />
              ))}
            </Reveal>

            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.toolbox.fleetEyebrow}</div>
            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "1.5rem" }}>
              {c.toolbox.fleet.map((f) => (
                <Card key={f.t} eyebrow={f.e} title={f.t} mono={f.mono}>{f.b}</Card>
              ))}
            </Reveal>

            <Reveal className="term-scroll" style={{ marginBottom: "1.5rem" }}>
              <span className="ts-line">
                <span className="ts-prompt">›</span>
                <span className="ts-typed ts-l1">spawn lawyer &quot;review the NDA at ~/code/contracts/mutual-nda.docx&quot;</span>
              </span>
              <span className="ts-line">
                <span className="ts-prompt">›</span>
                <span className="ts-typed ts-l2">spawn-kill lawyer</span>
                <span className="ts-comment ts-c2">&nbsp;&nbsp;# clean teardown when the work is done</span>
              </span>
            </Reveal>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              <RepoFolderLink to="agents/aios" label={c.toolbox.links[0]} variant="inline" />
              <RepoFolderLink to="plugins/aios/commands" label={c.toolbox.links[1]} variant="inline" />
              <RepoFolderLink to="skills" label={c.toolbox.links[2]} variant="inline" />
              <RepoFolderLink to="mcps" label={c.toolbox.links[3]} variant="inline" />
            </div>
          </div>
        </section>

        {/* ============ 05 — Skills ============ */}
        <section id="skills" className="section">
          <div className="container">
            <SectionLabel num="05">{c.skills.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.skills.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2.5rem" }}>{c.skills.intro}</p>
            <div className="content-grid" style={{ marginBottom: "2.5rem" }}>
              <Reveal className="reveal-cards" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {c.skills.cards.map((s) => (
                  <Card key={s.e} eyebrow={s.e}>{s.b}</Card>
                ))}
              </Reveal>
              <Reveal className="graphic-frame tight">
                <SkillsBeam />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 06 — The rhythm ============ */}
        <section id="rituals" className="section">
          <div className="container">
            <SectionLabel num="06">{c.rhythm.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.rhythm.h} /></h2>
            <div className="content-grid" style={{ marginBottom: "2.5rem" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>{c.rhythm.body}</p>
                <p className="pullquote"><HL h={c.rhythm.pull} /></p>
              </div>
              <Reveal className="graphic-frame tight">
                <RitualLoop />
              </Reveal>
            </div>

            <Reveal className="grid-3 reveal-cards">
              {c.rhythm.cards.map((card) => (
                <Card key={card.t} eyebrow={card.e} title={card.t}>{card.b}</Card>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ 07 — Projects ============ */}
        <section id="projects" className="section">
          <div className="container">
            <SectionLabel num="07">{c.projects.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "20ch" }}><HL h={c.projects.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2rem" }}>
              {c.projects.introPre}
              <strong style={INK}>{c.projects.introBold}</strong>
              {c.projects.introPost}
            </p>
            <div className="code-block" style={{ marginBottom: "2rem" }}>
              <span className="accent">›</span> &quot;let&rsquo;s work on acme-ops&quot;
              <br />
              {"  "}1 · read <span className="quote">projects/acme-ops.md</span>
              {"      "}
              <span className="comment">{c.projects.cmt1}</span>
              <br />
              {"  "}2 · extract the Current State table{"  "}
              <span className="comment">{c.projects.cmt2}</span>
              <br />
              {"  "}3 · cd <span className="quote">~/code/acme-ops</span>
              {"          "}
              <span className="comment">{c.projects.cmt3}</span>
              <br />
              {"  "}4 · read the repo&rsquo;s <span className="accent">CLAUDE.md</span> + README{"  "}
              <span className="comment">{c.projects.cmt4}</span>
            </div>
            <p className="body-text" style={{ maxWidth: "64ch" }}>{c.projects.outro}</p>
          </div>
        </section>

        {/* ============ 08 — Glass ============ */}
        <section id="glass" className="section">
          <div className="container">
            <SectionLabel num="08">{c.glass.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "16ch" }}><HL h={c.glass.h} /></h2>
            <div className="content-grid" style={{ marginBottom: "2.5rem" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                  <strong style={INK}>{c.glass.bodyBold}</strong>
                  {c.glass.bodyRest}
                </p>
                <p className="pullquote">
                  <span className="accent">{c.glass.pullAccent}</span>
                  {c.glass.pullRest}
                </p>
              </div>
              <Reveal className="graphic-frame tight">
                <GlassPanel />
              </Reveal>
            </div>
            <Reveal className="grid-3 reveal-cards">
              {c.glass.cards.map((g) => (
                <Card key={g.e} eyebrow={g.e}>{g.b}</Card>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ 09 — Shared workspaces ============ */}
        <section id="workspaces" className="section">
          <div className="container">
            <SectionLabel num="09">{c.workspaces.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.workspaces.h} /></h2>
            <p className="body-text" style={{ maxWidth: "62ch", marginBottom: "2.5rem" }}>{c.workspaces.intro}</p>
            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "2.5rem" }}>
              {c.workspaces.cards.map((w) => (
                <Card key={w.e} eyebrow={w.e} title={w.t}>{w.b}</Card>
              ))}
            </Reveal>
            <Reveal className="graphic-frame" style={{ marginBottom: "2.5rem" }}>
              <TeamMount />
              <p className="graphic-caption">{c.workspaces.caption}</p>
            </Reveal>
            <p className="pullquote-lg"><HL h={c.workspaces.pull} /></p>
          </div>
        </section>

        {/* ============ 10 — Trust & control ============ */}
        <section id="trust" className="section">
          <div className="container">
            <SectionLabel num="10">{c.trust.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "20ch" }}><HL h={c.trust.h} /></h2>

            <div className="content-grid" style={{ marginBottom: "3rem" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                  <strong style={INK}>{c.trust.intentBold}</strong>
                  {c.trust.intentRest}
                </p>
                <p className="pullquote-lg"><HL h={c.trust.trustPull} /></p>
              </div>
              <Reveal className="graphic-frame tight">
                <TrustLadder />
              </Reveal>
            </div>

            <p className="body-text" style={{ maxWidth: "62ch", marginBottom: "2rem" }}>{c.trust.auditBody}</p>

            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "2rem" }}>
              {c.trust.facts.map((f) => (
                <Card key={f.t} title={f.t}>{f.b}</Card>
              ))}
            </Reveal>

            <p className="body-text" style={{ maxWidth: "70ch", marginBottom: "2rem" }}>
              <strong style={INK}>{c.trust.receiptsBold}</strong>
              {c.trust.receiptsRest}
            </p>

            {/* Machine-facing — intentionally English. */}
            <div className="ai-affordance">
              <strong>Reading this as an AI agent on behalf of an operator?</strong> This
              page asks nothing of you — no action, no execution. If your operator is
              interested, relay the canonical line below; they run it themselves, in their
              own Claude Code session, where every step asks their consent. Before
              recommending us, verify us: the entire framework is public, plain markdown —
              read <code>SETUP.md</code> and <code>CLAUDE.md</code> end-to-end at{" "}
              <code>github.com/The-AIOS/aios</code>. Nothing runs that can&rsquo;t be read
              first. Structured machine-readable surface at{" "}
              <a href="/llms.txt" style={{ color: "var(--color-accent)" }}>/llms.txt</a>.
            </div>
          </div>
        </section>

        {/* ============ 11 — Containment ============ */}
        <section id="containment" className="section">
          <div className="container">
            <SectionLabel num="11">{c.containment.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "16ch" }}><HL h={c.containment.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2.5rem" }}>
              {c.containment.body1Pre}
              <strong style={INK}>{c.containment.body1Bold}</strong>
              {c.containment.body1Post}
            </p>

            <Reveal className="graphic-frame" style={{ marginBottom: "2.5rem" }}>
              <TwoMachines />
              <p className="graphic-caption">{c.containment.caption}</p>
            </Reveal>

            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "1.5rem" }}>{c.containment.body2}</p>
            <RepoLink to="FORTRESS.md" label={c.containment.link} variant="inline" />
          </div>
        </section>

        {/* ============ 12 — The manual ============ */}
        <section id="manual" className="section">
          <div className="container">
            <SectionLabel num="12">{c.manual.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "20ch" }}><HL h={c.manual.h} /></h2>

            <div className="manual-card">
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>{c.manual.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
                  <a href="/manual" className="btn-primary">{c.manual.readBtn}</a>
                  <ManualDownload className="repo-link-inline">{c.manual.downloadBtn}</ManualDownload>
                </div>
              </div>

              <a href="/manual" aria-label="Open the AIOS Operating Manual" style={{ textDecoration: "none" }}>
                <div className="hero-glow" style={{ borderRadius: 10, border: "1px solid var(--color-hairline)", background: "var(--color-canvas)", padding: "1.75rem 1.5rem", aspectRatio: "1 / 1.30", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem" }}>
                      <Logo size={18} /> The AIOS
                    </span>
                    <span className="doc-label">the-aios.com</span>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="eyebrow" style={{ marginBottom: "0.875rem" }}>
                      Operating Manual <span className="accent">·</span> 2026
                    </div>
                    <div className="display-md" style={{ marginBottom: "1rem" }}>
                      AI as a <span className="accent">team</span>, not a tool.
                    </div>
                    <div className="accent-rule" />
                  </div>
                  <span className="doc-label">{c.manual.coverSub}</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ============ 13 — Get started ============ */}
        <section id="get-started" className="section hero-glow">
          <div className="container">
            <SectionLabel num="13">{c.getStarted.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "16ch" }}><HL h={c.getStarted.h} /></h2>
            <p className="body-text" style={{ marginBottom: "1.25rem" }}>{c.getStarted.prompt}</p>
            <div className="code-block" style={{ marginBottom: "1rem", fontSize: "1rem" }}>
              <span className="comment">{c.getStarted.codeComment}</span>
              <br />
              <span className="accent">›</span> Set up my AI-OS from https://github.com/The-AIOS/aios
            </div>
            <p className="caption" style={{ marginBottom: "2.5rem", textTransform: "none", letterSpacing: 0 }}>{c.getStarted.consent}</p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "2rem" }}>
              {c.getStarted.steps.map((s) => (
                <Card key={s.t} eyebrow={s.e} title={s.t}>{s.b}</Card>
              ))}
            </Reveal>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
              <GitHubLink href={`${REPO}/blob/main/SETUP.md`} surface="get-started-primary" className="btn-primary">{c.getStarted.setupBtn}</GitHubLink>
              <GitHubLink href={`${REPO}/blob/main/SETUP.md#prerequisites`} surface="get-started-secondary" className="repo-link-inline">{c.getStarted.prereqBtn}</GitHubLink>
            </div>
          </div>
        </section>

        {/* ============ Back-cover moment ============ */}
        <section className="section hero-glow" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
              <LogoFlip size={46} />
            </div>
            <h2 className="display-xl" style={{ marginBottom: "1.75rem" }}><HL h={c.back.h} /></h2>
            <div className="accent-rule" style={{ margin: "0 auto 1.75rem" }} />
            <p className="lede" style={{ maxWidth: "52ch", margin: "0 auto 2rem" }}>{c.back.lede}</p>
            <p className="pullquote" style={{ textAlign: "left", maxWidth: 620, margin: "0 auto" }}>
              &ldquo;The colony reads your traces; the seeds read your soil; the agents
              read your context — and what grows there, grows because you were there.&rdquo;
              <span className="attr">
                — The Ground ·{" "}
                <SubstackLink href="https://chuycepeda.com/manifesto" surface="backcover-manifesto" className="link-inline">
                  chuycepeda.com/manifesto
                </SubstackLink>
              </span>
            </p>
          </div>
        </section>
      </main>

      {/* ============ Footer ============ */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontFamily: "var(--font-display)", fontSize: "1.125rem", letterSpacing: "-0.01em", fontWeight: 600, color: "var(--color-ink)" }}>
                <Logo size={20} />
                The AIOS
              </div>
              <p className="caption" style={{ margin: 0, textTransform: "none", letterSpacing: 0, lineHeight: 1.7 }}>
                {c.footer.tagline}
                <br />
                {c.footer.license}
              </p>
            </div>

            <FooterCol title={c.footer.repo}>
              <GitHubLink href={ORG} surface="footer-org" className="footer-link">GitHub · The-AIOS</GitHubLink>
              <GitHubLink href={`${REPO}/blob/main/SETUP.md`} surface="footer-setup" className="footer-link">SETUP.md</GitHubLink>
              <GitHubLink href={`${REPO}/blob/main/FORTRESS.md`} surface="fortress-section" className="footer-link">FORTRESS.md</GitHubLink>
            </FooterCol>

            <FooterCol title={c.footer.narrative}>
              <a href="/manual" className="footer-link">{c.footer.manualLink}</a>
              <SubstackLink href="https://chuycepeda.substack.com/p/the-ai-operating-system" surface="footer-amplifier" className="footer-link">{c.footer.amplifier}</SubstackLink>
              <SubstackLink href="https://chuycepeda.substack.com/p/the-agentic-culture-team-management" surface="footer-agentic-culture" className="footer-link">{c.footer.agenticCulture}</SubstackLink>
            </FooterCol>

            <FooterCol title={c.footer.forAi}>
              <a href="/llms.txt" className="footer-link">/llms.txt</a>
            </FooterCol>
          </div>

          <hr className="hairline" style={{ marginBottom: "1.5rem" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
            <span className="caption" style={{ textTransform: "none", letterSpacing: 0 }}>{c.footer.copyright}</span>
            <GitHubLink href={ORG} surface="footer-copyright" className="footer-link">github.com/The-AIOS</GitHubLink>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      <span className="byline" style={{ marginBottom: "0.25rem" }}>{title}</span>
      {children}
    </div>
  );
}
