/* the-aios.com — the operating manual's web-native sibling.
 *
 * Design language: the operating manual. Words: the spine canvas. Why: The Ground.
 * Graphics: redrawn from the AIOS keynote deck (deckGraphics.tsx) in the product brand.
 *
 * Structure: a 5-act storytelling arc a CEO can skim in ~2 minutes, with depth one
 * layer down — What · Why · How · Where it's going · Manual. "How" is the deep act:
 * an integrated, subsection-divided tour of everything mechanical (the session/agent/
 * skill model, context, the fleet, the rhythm, projects, teams, trust, Glass).
 *
 * Reader-facing prose is trilingual via CONTENT[locale] (src/content.ts) — EN / ES
 * (LATAM) / PT-BR. Technical surfaces stay English by design: command names, file
 * names, code blocks, the machine-facing AI-affordance block, SVG diagram internals,
 * and the ant chatter.
 *
 * Hard keeps: GitHubLink / RepoLink tracking, SubstackLink, Analytics, Logo, MobileMenu,
 * /llms.txt link in footer, the AI-affordance block, the back-cover moment.
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
import { ManualEmbed, ManualDownload } from "./ManualEmbed";
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

/** Subsection divider + label inside the long "How" act. */
function SubLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--color-hairline)", marginBottom: "1.5rem" }}>
      <div className="eyebrow"><span className="accent">/</span> {children}</div>
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

/* ---------- mental-model mocks (session / agent / skill) ----------
   Technical surfaces → English by design, like the code blocks + ant chatter. */

function MacDots() {
  return (
    <>
      <span className="am-dot" style={{ background: "#ff5f57" }} />
      <span className="am-dot" style={{ background: "#febc2e" }} />
      <span className="am-dot" style={{ background: "#28c840" }} />
    </>
  );
}

function DocIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

/** Session = a terminal. */
function SessionMock() {
  return (
    <div className="aios-mock">
      <div className="am-bar"><MacDots /><span className="am-fn">session — keynote-prep</span></div>
      <div className="am-body">
        <span className="am-o">› reads context · declared · observed · intent</span><br />
        <span className="am-pr">you ›</span> draft the keynote, in my voice<br />
        <span className="am-ag">⚖️ lawyer ›</span> reviewing the NDA clause…<br />
        <span className="am-pr">you ›</span> <span className="am-o">/close-session → routed to memory</span><br />
        <span className="am-pr">you ›</span> <span className="am-cursor" />
      </div>
    </div>
  );
}

/** Agent = a .md file (has tools). */
function AgentMock() {
  return (
    <div className="aios-mock">
      <div className="am-bar"><DocIcon /><span className="am-fn">agents/lawyer.md</span></div>
      <div className="am-body">
        <span className="am-c">---</span><br />
        <span className="am-k">name:</span> <span className="am-v">lawyer</span><br />
        <span className="am-k">description:</span> <span className="am-v">in-house counsel — redline &amp; protect</span><br />
        <span className="am-k">tools:</span> <span className="am-v">read · write · search</span><br />
        <span className="am-c">---</span><br />
        <span className="am-v"># You are the in-house counsel.</span><br />
        <span className="am-c">Redline contracts, flag IP risk,</span><br />
        <span className="am-c">protect the deal. Think like…</span>
      </div>
    </div>
  );
}

/** Skill = a .md file too — but no tools. */
function SkillMock() {
  return (
    <div className="aios-mock">
      <div className="am-bar"><DocIcon /><span className="am-fn">skills/frontend-design/SKILL.md</span></div>
      <div className="am-body">
        <span className="am-c">---</span><br />
        <span className="am-k">name:</span> <span className="am-v">frontend-design</span><br />
        <span className="am-k">description:</span> <span className="am-v">build beautiful UIs</span><br />
        <span className="am-strike">tools: —</span> <span className="am-c">(skills carry no tools)</span><br />
        <span className="am-c">---</span><br />
        <span className="am-v"># When building any interface…</span><br />
        <span className="am-c">the taste, the rules, the patterns.</span>
      </div>
    </div>
  );
}

/** A "three words" card: big highlighted word + kind line + its mock + role + body. */
function MMCard({ word, kind, title, mock, children }: { word: string; kind: string; title: string; mock: ReactNode; children: ReactNode }) {
  return (
    <div className="card">
      <div className="mm-word">{word}</div>
      <div className="mm-kind">{kind}</div>
      {mock}
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

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
            <GitHubLink href={REPO} surface="nav-desktop" className="nav-cta">
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
        <span id="top" aria-hidden="true" />

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
              <span className="t-comment"># get started, tell claude:</span>
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

        {/* ============ 01 — WHAT ============ */}
        <section id="what" className="section">
          <div className="container">
            <SectionLabel num="01">{c.what.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.what.h} /></h2>

            <p className="pullquote-lg" style={{ marginBottom: "2.5rem" }}><HL h={c.what.pull} /></p>

            <div className="section-grid" style={{ marginBottom: "2.5rem" }}>
              <p className="body-text">{c.what.body1}</p>
              <p className="body-text">
                {c.what.body2Pre}
                <strong style={INK}>{c.what.body2Bold}</strong>
                {c.what.body2Rest}
              </p>
            </div>

            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.what.principlesEyebrow}</div>
            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "3rem" }}>
              {c.what.principles.map((p) => (
                <Card key={p.t} title={p.t}>{p.b}</Card>
              ))}
            </Reveal>

            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.arch.madeOfEyebrow}</div>
            <Reveal className="graphic-frame" style={{ marginBottom: "3rem" }}>
              <OsAnatomy />
              <p className="graphic-caption">{c.arch.anatomyCaption}</p>
            </Reveal>

            <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>{c.arch.distinctEyebrow}: <span className="accent">{c.arch.distinctTail}</span></div>
            <div>
              {c.arch.distinct.map(([term, body]) => (
                <div key={term} className="def-row">
                  <span className="def-term">{term}</span>
                  <span className="def-body">{body}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 02 — WHY ============ */}
        <section id="why" className="section hero-glow">
          <div className="container">
            <SectionLabel num="02">{c.why.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.why.h} /></h2>
            <p className="lede" style={{ maxWidth: "60ch", marginBottom: "2.5rem" }}>{c.why.lead}</p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "3rem" }}>
              {c.journey.cards.map((card) => (
                <Card key={card.t} eyebrow={card.e} title={card.t}>{card.b}</Card>
              ))}
            </Reveal>

            <Reveal className="graphic-frame" style={{ marginBottom: "2.5rem" }}>
              <OrchestratorShift />
              <p className="graphic-caption">{c.journey.caption}</p>
            </Reveal>

            <p className="pullquote-lg" style={{ marginBottom: "2.5rem" }}><HL h={c.why.pull} /></p>

            {/* The Disruption Index — evidence of the urgency. Its own route. */}
            <a href="/disruption-index" className="manual-card" style={{ textDecoration: "none", alignItems: "center" }}>
              <div>
                <div className="card-eyebrow" style={{ marginBottom: "0.75rem" }}>{c.why.diLabel}</div>
                <h3 className="display-md" style={{ marginBottom: "0.75rem" }}>
                  The <span className="accent">Disruption</span> Index
                </h3>
                <p className="body-text" style={{ margin: 0 }}>{c.why.diSub}</p>
              </div>
              <div className="hero-glow" style={{ borderRadius: 10, border: "1px solid var(--color-hairline)", background: "var(--color-canvas)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  ["already gone", "var(--color-accent)"],
                  ["on the clock", "var(--color-ink-muted)"],
                  ["reinventing", "var(--color-ink-muted)"],
                  ["insulated", "var(--color-ink-subtle)"],
                ].map(([label, color]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, flex: "0 0 auto" }} />
                    {label}
                  </div>
                ))}
                <span className="repo-link-inline" style={{ marginTop: "0.5rem" }}>/disruption-index</span>
              </div>
            </a>
          </div>
        </section>

        {/* ============ 03 — HOW (the deep act) ============ */}
        <section id="how" className="section">
          <div className="container">
            <SectionLabel num="03">{c.how.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.how.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch" }}>{c.how.intro}</p>

            {/* — The three words: session / agent / skill — */}
            <SubLabel>{c.how.subModel}</SubLabel>
            <h3 className="display-md" style={{ marginBottom: "1.5rem", maxWidth: "28ch" }}>
              {c.mentalModel.headline.map((tok, i) => (tok.a ? <span key={i} className="accent">{tok.t}</span> : <span key={i}>{tok.t}</span>))}
            </h3>
            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "1.5rem", alignItems: "start" }}>
              <MMCard word={c.mentalModel.session.word} kind={c.mentalModel.session.tag} title={c.mentalModel.session.t} mock={<SessionMock />}>{c.mentalModel.session.b}</MMCard>
              <MMCard word={c.mentalModel.agent.word} kind={c.mentalModel.agent.tag} title={c.mentalModel.agent.t} mock={<AgentMock />}>{c.mentalModel.agent.b}</MMCard>
              <MMCard word={c.mentalModel.skill.word} kind={c.mentalModel.skill.tag} title={c.mentalModel.skill.t} mock={<SkillMock />}>{c.mentalModel.skill.b}</MMCard>
            </Reveal>

            <div className="content-grid" style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <div className="card">
                  <div className="card-mono" style={{ marginTop: 0, color: "var(--color-accent)", marginBottom: "0.375rem" }}>{c.mentalModel.spawnCmd}</div>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "var(--color-ink-muted)", margin: 0 }}>{c.mentalModel.spawnBody}</p>
                </div>
                <div className="card">
                  <div className="card-mono" style={{ marginTop: 0, color: "var(--color-accent)", marginBottom: "0.375rem" }}>{c.mentalModel.hatCmd}</div>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "var(--color-ink-muted)", margin: 0 }}>{c.mentalModel.hatBody}</p>
                </div>
              </div>
              <Reveal className="graphic-frame tight">
                <SkillsBeam />
              </Reveal>
            </div>

            {/* the chain — full-width, the climax of the mental model */}
            <Reveal className="mm-chain reveal-fade" style={{ marginTop: "2rem" }}>
              {c.mentalModel.chain.map((node, i) =>
                i % 2 === 0 ? (
                  <span key={i} className={i === 0 || i === c.mentalModel.chain.length - 1 ? "mc-node hot" : "mc-node"}>{node}</span>
                ) : (
                  <span key={i} className="mc-arrow">{node}</span>
                )
              )}
            </Reveal>
            <p className="graphic-caption" style={{ marginTop: "1rem" }}>{c.mentalModel.chainCaption}</p>

            {/* — Context that compounds — */}
            <SubLabel>{c.how.subContext}</SubLabel>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2rem" }}>
              {c.arch.introPre}
              <strong style={INK}>{c.arch.introBold}</strong>
              {c.arch.introPost}
            </p>
            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "2.5rem" }}>
              {c.arch.layers.map((l) => (
                <Card key={l.t} eyebrow={l.e} title={l.t}>{l.b}</Card>
              ))}
            </Reveal>
            <Reveal className="graphic-frame" style={{ marginBottom: "2rem" }}>
              <div className="eyebrow" style={{ marginBottom: "1.25rem", textAlign: "center" }}>{c.arch.timelineEyebrow}</div>
              <CompoundTimeline />
              <p className="graphic-caption">{c.arch.timelineCaption}</p>
            </Reveal>
            <p className="pullquote-lg"><HL h={c.arch.pull} /></p>
            <div style={{ marginTop: "1.5rem" }}>
              <RepoLink to="CLAUDE.md" label={c.arch.claudeLink} variant="inline" />
            </div>

            {/* — The fleet — */}
            <SubLabel>{c.how.subFleet}</SubLabel>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2rem" }}>{c.toolbox.intro}</p>
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
            </Reveal>
            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "1.5rem" }}>
              {c.skills.cards.map((s) => (
                <Card key={s.e} eyebrow={s.e}>{s.b}</Card>
              ))}
            </Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              <RepoFolderLink to="agents/aios" label={c.toolbox.links[0]} variant="inline" />
              <RepoFolderLink to="plugins/aios/commands" label={c.toolbox.links[1]} variant="inline" />
              <RepoFolderLink to="skills" label={c.toolbox.links[2]} variant="inline" />
              <RepoFolderLink to="mcps" label={c.toolbox.links[3]} variant="inline" />
            </div>

            {/* — The rhythm — */}
            <SubLabel>{c.how.subRhythm}</SubLabel>
            <div className="content-grid" style={{ marginBottom: "2.5rem" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>{c.rhythm.body}</p>
                <p className="pullquote"><HL h={c.rhythm.pull} /></p>
              </div>
              <Reveal className="graphic-frame tight">
                <RitualLoop />
              </Reveal>
            </div>
            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "2rem" }}>
              {c.rhythm.cards.map((card) => (
                <Card key={card.t} eyebrow={card.e} title={card.t}>{card.b}</Card>
              ))}
            </Reveal>
            {/* automation → amplification → autonomy ladder */}
            <div className="eyebrow" style={{ marginBottom: "0.875rem" }}>{c.ladder.eyebrow}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              {c.ladder.rungs.map((r, i) => (
                <div key={r.e} className="card" style={{ flex: "1 1 180px", ...(i === c.ladder.rungs.length - 1 ? { borderColor: "var(--color-accent)" } : {}) }}>
                  <div className="card-eyebrow" style={{ marginBottom: "0.25rem" }}>{r.e}</div>
                  <h4 style={{ margin: 0 }}>{r.t}</h4>
                </div>
              ))}
            </div>

            {/* — Projects — */}
            <SubLabel>{c.how.subProjects}</SubLabel>
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

            {/* — Teams — */}
            <SubLabel>{c.how.subTeams}</SubLabel>
            <p className="body-text" style={{ maxWidth: "62ch", marginBottom: "2rem" }}>{c.workspaces.intro}</p>
            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "2.5rem" }}>
              {c.workspaces.cards.map((w) => (
                <Card key={w.e} eyebrow={w.e} title={w.t}>{w.b}</Card>
              ))}
            </Reveal>
            <Reveal className="graphic-frame" style={{ marginBottom: "2rem" }}>
              <TeamMount />
              <p className="graphic-caption">{c.workspaces.caption}</p>
            </Reveal>
            <p className="pullquote-lg"><HL h={c.workspaces.pull} /></p>

            {/* — Trust, control & containment — */}
            <SubLabel>{c.how.subTrust}</SubLabel>
            <div className="content-grid" style={{ marginBottom: "2.5rem" }}>
              <div>
                <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                  <strong style={INK}>{c.trust.intentBold}</strong>
                  {c.trust.intentRest}
                </p>
                <p className="pullquote-lg" style={{ marginBottom: "1.5rem" }}><HL h={c.trust.trustPull} /></p>
                <p className="body-text">{c.trust.auditBody}</p>
              </div>
              <Reveal className="graphic-frame tight">
                <TrustLadder />
              </Reveal>
            </div>

            <Reveal className="grid-2 reveal-cards" style={{ marginBottom: "2.5rem" }}>
              {c.trust.facts.map((f) => (
                <Card key={f.t} title={f.t}>{f.b}</Card>
              ))}
            </Reveal>

            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "1rem" }}>
              {c.containment.body1Pre}
              <strong style={INK}>{c.containment.body1Bold}</strong>
              {c.containment.body1Post}
            </p>
            <Reveal className="graphic-frame" style={{ marginBottom: "1.5rem" }}>
              <TwoMachines />
              <p className="graphic-caption">{c.containment.caption}</p>
            </Reveal>
            <div style={{ marginBottom: "2.5rem" }}>
              <RepoLink to="FORTRESS.md" label={c.containment.link} variant="inline" />
            </div>

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

            {/* — Glass: the interface — */}
            <SubLabel>{c.how.subGlass}</SubLabel>
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

        {/* ============ 04 — WHERE IT'S GOING ============ */}
        <section id="roadmap" className="section hero-glow">
          <div className="container">
            <SectionLabel num="04">{c.roadmap.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "16ch" }}><HL h={c.roadmap.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2.5rem" }}>{c.roadmap.intro}</p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "2rem" }}>
              {c.roadmap.items.map((it) => (
                <Card key={it.t} eyebrow={it.e} title={it.t}>{it.b}</Card>
              ))}
            </Reveal>

            <p className="caption" style={{ textTransform: "none", letterSpacing: 0 }}>{c.roadmap.note}</p>
          </div>
        </section>

        {/* ============ 05 — MANUAL (setup story + the artifact) ============ */}
        <section id="setup" className="section">
          <div className="container">
            <SectionLabel num="05">{c.setup.eyebrow}</SectionLabel>
            <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}><HL h={c.setup.h} /></h2>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2.5rem" }}>{c.setup.intro}</p>

            {/* Step 0 — what you need */}
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.setup.step0Label}</div>
            <Reveal className="reveal-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(168px, 1fr))", gap: "0.875rem", marginBottom: "3rem" }}>
              {c.setup.step0.map((s) => {
                const titleRow = (
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.375rem" }}>
                    <h4 style={{ margin: 0 }}>{s.t}</h4>
                    {s.pill && <span className="tag-pill">{s.pill}</span>}
                  </div>
                );
                return s.soon ? (
                  <div key={s.t} className="card" style={{ borderStyle: "dashed", display: "flex", flexDirection: "column" }}>
                    {titleRow}
                    <p style={{ flex: 1 }}>{s.b}</p>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-ink-subtle)", marginTop: "0.875rem" }}>{c.setup.soonLabel}</span>
                  </div>
                ) : (
                  <a key={s.t} className="card" href={s.href} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
                    {titleRow}
                    <p style={{ flex: 1 }}>{s.b}</p>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", marginTop: "0.875rem" }}>
                      {s.href?.replace(/^https?:\/\//, "").replace(/\/.*$/, "")} ↗
                    </span>
                  </a>
                );
              })}
            </Reveal>

            {/* Step 1 — run the AIOS */}
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.setup.step1Label}</div>
            <p className="body-text" style={{ marginBottom: "1rem" }}>{c.setup.step1Title}</p>
            <div className="code-block" style={{ marginBottom: "1rem", fontSize: "1rem" }}>
              <span className="comment">{c.setup.step1Comment}</span>
              <br />
              <span className="accent">›</span> Set up my AI-OS from https://github.com/The-AIOS/aios
            </div>
            <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "2rem" }}>{c.setup.step1Body}</p>

            <Reveal className="grid-3 reveal-cards" style={{ marginBottom: "2rem" }}>
              {c.getStarted.steps.map((s) => (
                <Card key={s.t} eyebrow={s.e} title={s.t}>{s.b}</Card>
              ))}
            </Reveal>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", marginBottom: "3.5rem" }}>
              <GitHubLink href={`${REPO}/blob/main/SETUP.md`} surface="get-started-primary" className="btn-primary">{c.getStarted.setupBtn}</GitHubLink>
              <GitHubLink href={`${REPO}/blob/main/SETUP.md#prerequisites`} surface="get-started-secondary" className="repo-link-inline">{c.getStarted.prereqBtn}</GitHubLink>
            </div>

            <p className="pullquote-lg" style={{ marginBottom: "3.5rem" }}>{c.setup.learnable}</p>

            {/* The Operating Manual — embedded PDF + download */}
            <div id="manual" style={{ paddingTop: "2.5rem", borderTop: "1px solid var(--color-hairline)", scrollMarginTop: "76px" }}>
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>{c.manual.eyebrow}</div>
              <h3 className="display-md" style={{ marginBottom: "1rem", maxWidth: "22ch" }}><HL h={c.manual.h} /></h3>
              <p className="body-text" style={{ maxWidth: "64ch", marginBottom: "1.5rem" }}>{c.manual.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "2rem" }}>
                <ManualDownload className="btn-primary">{c.manual.downloadBtn}</ManualDownload>
                <GitHubLink href={REPO} surface="manual-source" className="btn-secondary">{c.getStarted.setupBtn}</GitHubLink>
              </div>
              <ManualEmbed />
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
              <a href="#manual" className="footer-link">{c.footer.manualLink}</a>
              <a href="/disruption-index" className="footer-link">The Disruption Index</a>
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
