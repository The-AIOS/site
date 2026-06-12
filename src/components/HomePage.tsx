import { ContextLoopDiagram, TrapCurveDiagram, InflectionCurveDiagram, DestinationNetworkDiagram, SkipDiagram, PlateauDiagram } from "./diagrams";
import { GitHubLink } from "./GitHubLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { RepoLink, RepoFolderLink } from "./RepoLink";
import { SubstackLink } from "./SubstackLink";
import type { Locale, Messages } from "@/messages";

type Props = { m: Messages; locale: Locale };

export default function HomePage({ m, locale }: Props) {
  return (
    <main>
      <Header m={m} locale={locale} />
      <Hero m={m} />
      {m.whatIsThis && <WhatIsThis m={m} />}
      <GetStarted m={m} />
      {m.trust && <Trust m={m} />}
      <Intro m={m} />
      <Thesis m={m} />
      <Capabilities m={m} />
      <Featured m={m} />
      <Architecture m={m} />
      <ObservedLoop m={m} />
      <Bundles m={m} />
      <ThinkingAhead m={m} />
      <OperatorJobAndArc m={m} />
      <Footer m={m} />
    </main>
  );
}

/* ------------------------------------------------------------------ */

function Header({ m, locale }: Props) {
  return (
    <header className="site-header">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1.5rem", gap: "1rem" }}
      >
        <a
          href="#top"
          aria-label="The-AIOS — back to top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            letterSpacing: "-0.025em",
            fontWeight: 700,
            color: "var(--color-ink)",
            textDecoration: "none",
          }}
        >
          <Logo size={18} />
          The-AIOS
        </a>
        <nav className="nav-desktop" style={{ gap: "1.5rem", alignItems: "center" }}>
          <a href="#get-started" className="caption" style={{ textDecoration: "none" }}>{m.nav.getStarted}</a>
          {m.nav.trust && <a href="#trust" className="caption" style={{ textDecoration: "none" }}>{m.nav.trust}</a>}
          <a href="#thesis" className="caption" style={{ textDecoration: "none" }}>{m.nav.thesis}</a>
          <a href="#capabilities" className="caption" style={{ textDecoration: "none" }}>{m.nav.capabilities}</a>
          <a href="#bundles" className="caption" style={{ textDecoration: "none" }}>{m.nav.agents}</a>
          <a href="#thinking-ahead" className="caption" style={{ textDecoration: "none" }}>{m.nav.ahead}</a>
          <a href="#operator-job" className="caption" style={{ textDecoration: "none" }}>{m.nav.arc}</a>
          <GitHubLink href="https://github.com/The-AIOS/aios" surface="nav-desktop" className="caption" style={{ textDecoration: "none" }}>
            {m.nav.github}
          </GitHubLink>
          <LocaleSwitcher current={locale} />
        </nav>
        <MobileMenu m={m} locale={locale} />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */

function Hero({ m }: { m: Messages }) {
  return (
    <section className="section section-hero hero-glow">
      <div className="container" style={{ maxWidth: "880px", textAlign: "center" }}>
        <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
          <span className="accent">{m.hero.eyebrowFramework}</span> · {m.hero.eyebrowSuffix}
        </p>
        <h1 className="display-xl" style={{ marginBottom: "1.5rem" }}>
          {m.hero.headlinePart1}
          <br />
          <span style={{ color: "var(--color-accent)" }}>{m.hero.headlineAccent}</span>{" "}
          {m.hero.headlinePart2}
        </h1>
        {m.hero.lede && (
          <p className="lede" style={{ maxWidth: "640px", marginInline: "auto", marginBottom: "1.25rem" }}>
            {m.hero.lede}
          </p>
        )}
        {m.hero.taglineKicker && (
          <p className="eyebrow" style={{ marginBottom: "2rem", color: "var(--color-accent)", letterSpacing: "0.12em" }}>
            {m.hero.taglineKicker}
          </p>
        )}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <GitHubLink href="https://github.com/The-AIOS/aios" surface="hero-primary" className="btn-primary">
            {m.hero.ctaGithub}
          </GitHubLink>
          <a href="#get-started" className="btn-secondary">
            {m.hero.ctaGetStarted}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function WhatIsThis({ m }: { m: Messages }) {
  if (!m.whatIsThis) return null;
  const w = m.whatIsThis;
  return (
    <section id="what-is-this" className="section" style={{ background: "var(--color-surface-1)" }}>
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{w.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "1.5rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "1.25rem", maxWidth: "780px" }} dangerouslySetInnerHTML={{ __html: w.headline }} />
        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "2.5rem", fontSize: "1.0625rem" }} dangerouslySetInnerHTML={{ __html: w.bodyHtml }} />
        <img src="/diagrams/os-anatomy.svg" alt="What an operating system is made of" style={{ width: "100%", display: "block", marginBottom: 0 }} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Intro({ m }: { m: Messages }) {
  return (
    <section id="intro" className="section">
      <div className="container">
        {/* ── Beat 1: what is this & who it's for ── */}
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.intro.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "2.5rem", maxWidth: "920px" }}>
          {m.intro.headlinePart1}{" "}
          <span style={{ color: "var(--color-accent)" }}>{m.intro.headlineAccent}</span>{" "}
          {m.intro.headlinePart2}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          {m.intro.whoForHtml && (
            <p className="body-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: m.intro.whoForHtml }} />
          )}
          <p className="body-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: m.intro.whatIsHtml }} />
        </div>

        {m.intro.jobHtml && (
          <p className="body-text" style={{ maxWidth: "880px", marginBottom: "2.5rem" }} dangerouslySetInnerHTML={{ __html: m.intro.jobHtml }} />
        )}

        {/* badge → repositioned as the invitation quote that closes beat 1 */}
        <blockquote
          className="pullquote"
          style={{ maxWidth: "880px", fontStyle: "italic", fontSize: "1.125rem", color: "var(--color-ink-muted)" }}
        >
          {m.intro.badge}
        </blockquote>

      </div>
    </section>
  );
}

function OperatorJobAndArc({ m }: { m: Messages }) {
  return (
    <section id="operator-job" className="section">
      <div className="container">
        {/* Section opener — The Arc */}
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.arc.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "880px" }} dangerouslySetInnerHTML={{ __html: m.arc.headline }} />
        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "5rem" }}>{m.arc.lede}</p>

        {/* The 4 stages — now framed as the operator's culture map */}
        <ArcStage
          stage={m.arc.stages.one.stage}
          headline={m.arc.stages.one.headline}
          lede={m.arc.stages.one.lede}
          body={m.arc.stages.one.body}
        />

        {/* Stage 2 — The Trap (mapped to Automate progression — "AI as Tool, Human as Prompter") */}
        <ArcStage
          progressionStage={m.progression.automate}
          stage={m.arc.stages.two.stage}
          headline={m.arc.stages.two.headline}
          lede={m.arc.stages.two.lede}
          body={m.arc.stages.two.body}
          pullquote={m.arc.stages.two.pullquote}
          pullquoteAttribution={m.arc.stages.two.pullquoteAttribution}
          diagram={
            <TrapCurveDiagram
              plateauLabel="THE PLATEAU"
              productivityLabel="+20% individual productivity"
              leverageLabel="0% organizational leverage"
              dayLabel="DAY 0"
              monthLabel="MONTH 6"
            />
          }
        />

        {/* Stage 3 — The Inflection (mapped to Amplify progression — "AI as Assistant, Human as First-Brain") */}
        <ArcStage
          progressionStage={m.progression.amplify}
          stage={m.arc.stages.three.stage}
          headline={m.arc.stages.three.headline}
          lede={m.arc.stages.three.lede}
          body={m.arc.stages.three.body}
          signal={m.arc.stages.three.signal}
          diagram={
            <InflectionCurveDiagram
              inflectionLabel="INFLECTION"
              plateauNote="Stage 2 plateau"
              accelerateNote="AI joins the workflow"
              dayLabel="DAY 0"
              monthLabel="MONTH 12"
            />
          }
        />

        {/* Stage 4 — The Destination (mapped to Agentic progression — "AI as Team, Human as Orchestrator") */}
        <ArcStage
          isLast
          progressionStage={m.progression.agentic}
          stage={m.arc.stages.four.stage}
          headline={m.arc.stages.four.headline}
          lede={m.arc.stages.four.lede}
          body={m.arc.stages.four.body}
          signal={m.arc.stages.four.signal}
          diagram={
            <DestinationNetworkDiagram
              humanLabel="HUMAN"
              humanSub="orchestrator"
              agentLabels={["RESEARCH", "WRITING", "ANALYSIS", "OUTREACH", "REVIEW"]}
              caption="One human directs. N agents execute — and orchestrate more."
            />
          }
        />

        {/* Why Most Fail — closes The Arc (separated by spacing, not a line) */}
        <div style={{ marginTop: "6rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--color-accent)" }}>{m.arc.failEyebrow}</p>
          <h3 className="display-md" style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>{m.arc.failHeadline}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <SkipDiagram
              label="THE SKIP"
              title={m.arc.failSkipTitle}
              body={m.arc.failSkipBody}
            />
            <PlateauDiagram
              label="THE PLATEAU"
              wallLabel="WALL"
              title={m.arc.failPlateauTitle}
              body={m.arc.failPlateauBody}
            />
          </div>
          <p className="body-text" style={{ textAlign: "center", fontStyle: "italic", color: "var(--color-ink-subtle)", marginTop: "2rem", marginBottom: 0 }}>
            {m.arc.failClose}
          </p>
        </div>
      </div>
    </section>
  );
}

function ArcStage({ stage, headline, lede, body, pullquote, pullquoteAttribution, signal, diagram, isLast = false, progressionStage }: {
  stage: string;
  headline: string;
  lede: string;
  body: string;
  pullquote?: string;
  pullquoteAttribution?: string;
  signal?: string;
  diagram?: React.ReactNode;
  isLast?: boolean;
  progressionStage?: { dot: string; name: string; aiRole: string; humanRole: string };
}) {
  return (
    <div style={{ paddingBottom: isLast ? "0" : "4rem", marginBottom: isLast ? "0" : "4rem", borderBottom: isLast ? "none" : "1px solid var(--color-hairline)" }}>
      <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.875rem" }}>
        <p className="eyebrow" style={{ color: "var(--color-accent)", letterSpacing: "0.12em", marginBottom: 0 }}>{stage}</p>
        {progressionStage && <ProgressionTag stage={progressionStage} />}
      </div>
      <h3 className="display-lg" style={{ marginBottom: "1rem", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>{headline}</h3>
      <p className="lede" style={{ maxWidth: "780px", marginBottom: "1.25rem" }}>{lede}</p>
      <div className={diagram ? "content-grid" : undefined} style={diagram ? undefined : { display: "block" }}>
        <div>
          <p className="body-text" style={{ marginBottom: signal || pullquote ? "1.25rem" : 0, maxWidth: "560px" }}>{body}</p>
          {pullquote && (
            <>
              <blockquote className="pullquote" style={{ marginTop: "1.5rem", maxWidth: "560px" }}>{pullquote}</blockquote>
              {pullquoteAttribution && (
                <p className="caption" style={{ marginTop: "0.5rem", marginLeft: "24px", color: "var(--color-ink-subtle)" }}>{pullquoteAttribution}</p>
              )}
            </>
          )}
          {signal && (
            <p style={{ fontStyle: "italic", color: "var(--color-ink-subtle)", fontSize: "0.9375rem", marginTop: "1rem", maxWidth: "560px" }}>{signal}</p>
          )}
        </div>
        {diagram && <div>{diagram}</div>}
      </div>
    </div>
  );
}

function Featured({ m }: { m: Messages }) {
  const cards = [
    { ...m.featured.cards.ingest, file: "plugins/aios/commands/ingest.md" },
    { ...m.featured.cards.company, file: "plugins/aios/commands/company.md" },
    { ...m.featured.cards.collaborate, file: "plugins/aios/commands/collaborate.md" },
  ];
  return (
    <section id="featured" className="section">
      <div className="container">
        <div className="section-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.featured.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">{m.featured.headline}</h2>
          </div>
          <div>
            <p className="body-text">{m.featured.body}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {cards.map((c) => (
            <div key={c.command} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem", gap: "0.5rem", flexWrap: "wrap" }}>
                <code className="mono" style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{c.command}</code>
                <span className="caption" style={{ color: "var(--color-ink-subtle)", fontSize: "0.6875rem" }}>{c.tag}</span>
              </div>
              <h3 className="display-md" style={{ marginBottom: "0.625rem" }}>{c.pitch}</h3>
              <p className="body-text" style={{ fontSize: "0.9375rem", marginBottom: 0, flexGrow: 1 }}>{c.body}</p>
              <RepoLink to={c.file} label={`${m.repoLink.viewCommand} ↗`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressionRow({ stage, isLast = false }: { stage: { dot: string; name: string; aiRole: string; humanRole: string }; isLast?: boolean }) {
  return (
    <div
      className="progression-row"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--color-hairline)" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.75rem" }} aria-hidden="true">{stage.dot}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)" }}>
          {stage.name}
        </span>
      </div>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-ink)" }}>{stage.aiRole}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-ink-muted)" }}>{stage.humanRole}</span>
    </div>
  );
}

function ProgressionTag({ stage }: { stage: { dot: string; name: string; aiRole: string; humanRole: string } }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "0.5rem",
        padding: "0.25rem 0.625rem",
        background: "var(--color-surface-1)",
        border: "1px solid var(--color-hairline)",
        borderRadius: "4px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6875rem",
        marginLeft: "0.75rem",
        verticalAlign: "middle",
      }}
    >
      <span aria-hidden="true" style={{ fontSize: "0.625rem" }}>{stage.dot}</span>
      <span style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
        {stage.name}
      </span>
      <span style={{ color: "var(--color-ink-subtle)" }}>·</span>
      <span style={{ color: "var(--color-ink-muted)" }}>{stage.aiRole}</span>
      <span style={{ color: "var(--color-ink-subtle)" }}>·</span>
      <span style={{ color: "var(--color-ink-muted)" }}>{stage.humanRole}</span>
    </span>
  );
}

function Thesis({ m }: { m: Messages }) {
  return (
    <section id="thesis" className="section">
      <div className="container">
        <div className="section-grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.thesis.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "0" }} dangerouslySetInnerHTML={{ __html: m.thesis.headline }} />
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>{m.thesis.para1}</p>
            {m.thesis.para2Html && <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thesis.para2Html }} />}
            {m.thesis.para3 && <p className="body-text" style={{ marginBottom: "0" }}>{m.thesis.para3}</p>}

            {/* 3-stage compounding preview — labels show the AI/human role per stage */}
            <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", background: "var(--color-surface-1)", border: "1px solid var(--color-hairline)", borderRadius: "8px" }}>
              <p className="caption" style={{ color: "var(--color-ink-subtle)", marginBottom: "0.5rem", textTransform: "none", letterSpacing: "normal" }}>
                {m.progression.thesisLabel}
              </p>
              <ProgressionRow stage={m.progression.automate} />
              <ProgressionRow stage={m.progression.amplify} />
              <ProgressionRow stage={m.progression.agentic} isLast />
            </div>

            <hr className="hairline" style={{ margin: "2.5rem 0" }} />
            <blockquote className="pullquote">{m.thesis.pullquote}</blockquote>
            <p className="caption" style={{ marginTop: "1rem", marginLeft: "24px" }}>{m.thesis.attribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Capabilities({ m }: { m: Messages }) {
  const tiles = [
    { ...m.capabilities.tiles.commands, folder: "plugins/aios/commands" },
    { ...m.capabilities.tiles.agents, folder: "agents/aios" },
    { ...m.capabilities.tiles.skills, folder: "skills" },
    { ...m.capabilities.tiles.mcps, folder: "mcps" },
  ];

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div className="section-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.capabilities.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" dangerouslySetInnerHTML={{ __html: m.capabilities.headline }} />
          </div>
          <div>
            <p className="body-text">{m.capabilities.body}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {tiles.map((t) => (
            <div key={t.noun} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 600, color: "var(--color-accent)", lineHeight: 1 }}>
                  {t.count}
                </span>
                <span className="byline" style={{ color: "var(--color-ink-muted)" }}>{t.noun}</span>
              </div>
              <p className="caption" style={{ color: "var(--color-ink-muted)", lineHeight: 1.55, flexGrow: 1 }}>{t.body}</p>
              <RepoFolderLink to={t.folder} label={`${m.repoLink.browseFolder} ↗`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Architecture({ m }: { m: Messages }) {
  const cards = [
    { ...m.architecture.cards.declared, to: "templates", label: m.repoLink.browseFolder, isFolder: true },
    { ...m.architecture.cards.observed, to: "CLAUDE.md#iii-self-update", label: m.repoLink.readDoc, isFolder: false },
    { ...m.architecture.cards.intent, to: "INTENT.md", label: m.repoLink.readDoc, isFolder: false },
  ];

  return (
    <section id="architecture" className="section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.architecture.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "2.5rem", maxWidth: "780px" }} dangerouslySetInnerHTML={{ __html: m.architecture.headline }} />
        <img src="/diagrams/three-layers.svg" alt="Three layers of context" style={{ width: "100%", display: "block", marginBottom: "3rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <p className="card-eyebrow">{c.eyebrow}</p>
              <h3 className="display-md" style={{ marginBottom: "0.625rem" }}>{c.title}</h3>
              <p className="body-text" style={{ fontSize: "0.9375rem", marginBottom: 0, flexGrow: 1 }}>{c.body}</p>
              {c.isFolder
                ? <RepoFolderLink to={c.to} label={`${c.label} ↗`} />
                : <RepoLink to={c.to} label={`${c.label} ↗`} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ObservedLoop({ m }: { m: Messages }) {
  return (
    <section className="section">
      <div className="container">
        <div className="content-grid-flipped" style={{ marginBottom: "2.5rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.observedLoop.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.observedLoop.headline }} />
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>{m.observedLoop.body1}</p>
            <img src="/diagrams/rituals.svg" alt="The rituals that make it compound" style={{ width: "100%", display: "block", marginBottom: "1.5rem" }} />
            <img src="/diagrams/compound-arc.svg" alt="Day one it knows what you said — a year in, who you are becoming" style={{ width: "100%", display: "block" }} />
          </div>
          <div>
            <ContextLoopDiagram />
          </div>
        </div>

        <div
          style={{
            maxWidth: "880px",
            padding: "1.5rem 1.75rem",
            background: "var(--color-surface-1)",
            border: "1px solid var(--color-hairline)",
            borderLeft: "3px solid var(--color-accent)",
            borderRadius: "8px",
          }}
        >
          <p
            className="body-text"
            style={{ margin: 0, fontSize: "1.0625rem", color: "var(--color-ink)" }}
            dangerouslySetInnerHTML={{ __html: m.observedLoop.compoundCloseHtml }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Bundles({ m }: { m: Messages }) {
  const bundles = [
    { ...m.bundles.bundleNames.sales, count: 5, folder: "agents/aios/sales" },
    { ...m.bundles.bundleNames.strategy, count: 4, folder: "agents/aios/strategy" },
    { ...m.bundles.bundleNames.financeLegal, count: 5, folder: "agents/aios/finance-legal" },
    { ...m.bundles.bundleNames.engineering, count: 6, folder: "agents/aios/engineering" },
    { ...m.bundles.bundleNames.communication, count: 8, folder: "agents/aios/communication" },
    { ...m.bundles.bundleNames.personal, count: 7, folder: "agents/aios/personal" },
  ];

  return (
    <section id="bundles" className="section">
      <div className="container">
        <div className="section-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.bundles.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" dangerouslySetInnerHTML={{ __html: m.bundles.headline }} />
          </div>
          <div>
            <p className="body-text">{m.bundles.body}</p>
            <img src="/diagrams/team-of-specialists.svg" alt="A team of specialists" style={{ width: "100%", display: "block", marginTop: "2rem" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {bundles.map((b) => (
            <div key={b.name} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: 0 }}>{b.name}</h3>
                <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "0.875rem", fontWeight: 700 }}>
                  {b.count}
                </span>
              </div>
              <p className="body-text" style={{ fontSize: "0.9375rem", marginBottom: 0, flexGrow: 1 }}>{b.body}</p>
              <RepoFolderLink to={b.folder} label={`${m.repoLink.viewBundle} ↗`} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--color-accent)" }}>{m.bundles.fortress.eyebrow}</p>
          <h3 className="display-md" style={{ marginBottom: "1rem" }}>{m.bundles.fortress.headline}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "1.75rem" }}>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>{m.bundles.fortress.body1}</p>
            <img src="/diagrams/two-machines.svg" alt="Two machines, one wall" style={{ width: "100%", display: "block" }} />
            <p className="body-text" style={{ marginBottom: 0 }}>{m.bundles.fortress.body2}</p>
          </div>
          <GitHubLink
            href="https://github.com/The-AIOS/aios/blob/main/FORTRESS.md"
            surface="fortress-section"
            className="btn-secondary"
          >
            {m.repoLink.readFortress}
          </GitHubLink>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ThinkingAhead({ m }: { m: Messages }) {
  const pillars = [
    m.thinkingAhead.pillars.identity,
    m.thinkingAhead.pillars.mandates,
    m.thinkingAhead.pillars.credentials,
  ];

  return (
    <section id="thinking-ahead" className="section">
      <div className="container">
        <div className="section-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.thinkingAhead.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" dangerouslySetInnerHTML={{ __html: m.thinkingAhead.headline }} />
          </div>
          <div>
            {m.thinkingAhead.para1Html && <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thinkingAhead.para1Html }} />}
            <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thinkingAhead.para2Html }} />
            {m.thinkingAhead.para3 && <p className="body-text" style={{ marginBottom: "0" }}>{m.thinkingAhead.para3}</p>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {pillars.map((p) => (
            <div key={p.label} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
                <p className="card-eyebrow" style={{ marginBottom: 0 }}>{p.label}</p>
                <span className="mono" style={{ fontSize: "0.6875rem" }}>{p.tag}</span>
              </div>
              <h3 className="display-md" style={{ fontSize: "1.1875rem", marginBottom: "0.875rem" }}>{p.question}</h3>
              <p className="body-text" style={{ fontSize: "0.9375rem", marginBottom: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="ai-affordance" style={{ borderColor: "var(--color-accent)", borderStyle: "solid", borderWidth: "1px" }}>
          <p style={{ margin: 0, color: "var(--color-ink-muted)" }} dangerouslySetInnerHTML={{ __html: m.thinkingAhead.boundaryHtml }} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GetStarted({ m }: { m: Messages }) {
  return (
    <section id="get-started" className="section" style={{ background: "var(--color-surface-1)" }}>
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.getStarted.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "1.5rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "2rem", maxWidth: "780px" }} dangerouslySetInnerHTML={{ __html: m.getStarted.headline }} />

        <p className="caption" style={{ marginBottom: "0.75rem", color: "var(--color-ink-muted)" }}>
          {m.getStarted.instructionCommentary}
        </p>
        <div className="code-block" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.75rem", maxWidth: "780px" }}>
          <span className="quote">&quot;</span><span className="accent">{m.getStarted.instruction}</span><span className="quote">&quot;</span>
        </div>

        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "1.25rem", fontSize: "1rem" }}>{m.getStarted.body}</p>

        <p className="caption" style={{ maxWidth: "780px", marginBottom: "2rem", color: "var(--color-ink-subtle)" }}>
          {m.getStarted.prereqNote}
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <GitHubLink href="https://github.com/The-AIOS/aios/blob/main/SETUP.md#prerequisites" surface="get-started-primary" className="btn-primary">
            {m.getStarted.ctaReadStart}
          </GitHubLink>
          <GitHubLink href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" surface="get-started-secondary" className="btn-secondary">
            {m.getStarted.ctaSetup}
          </GitHubLink>
        </div>

        <div className="ai-affordance" style={{ maxWidth: "780px" }}>
          <p style={{ margin: "0 0 0.5rem 0" }}>
            <strong>{m.getStarted.affordanceLabel}</strong>
          </p>
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: m.getStarted.affordanceBodyHtml }} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Trust({ m }: { m: Messages }) {
  if (!m.trust) return null;
  const t = m.trust;
  return (
    <section id="trust" className="section">
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{t.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "1.5rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "1.25rem", maxWidth: "780px" }} dangerouslySetInnerHTML={{ __html: t.headline }} />
        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "2.5rem", fontSize: "1rem" }}>{t.body}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {t.facts.map((f) => (
            <div key={f.title} className="card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{f.title}</h3>
              <p className="body-text" style={{ fontSize: "0.9rem", margin: 0, color: "var(--color-ink-muted)" }}>{f.body}</p>
            </div>
          ))}
        </div>
        <p className="body-text" style={{ maxWidth: "780px", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: t.receiptsHtml }} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Footer({ m }: { m: Messages }) {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          <div>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontFamily: "var(--font-display)", fontSize: "1.125rem", letterSpacing: "-0.01em", fontWeight: 600, color: "var(--color-ink)" }}
            >
              <Logo size={20} />
              The-AIOS
            </div>
            <p className="caption" style={{ marginBottom: 0 }}>
              {m.footer.tagline}<br />
              {m.footer.license}
            </p>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionRepo}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><GitHubLink href="https://github.com/The-AIOS" surface="footer-org" className="caption">{m.footer.repoLinks.githubOrg}</GitHubLink></li>
              <li><GitHubLink href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" surface="footer-setup" className="caption">{m.footer.repoLinks.setup}</GitHubLink></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionNarrative}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><SubstackLink href="https://chuycepeda.substack.com/p/the-ai-operating-system" surface="footer-amplifier" className="caption">{m.footer.narrativeLinks.amplifier}</SubstackLink></li>
              <li><SubstackLink href="https://chuycepeda.substack.com/p/the-agentic-culture-team-management" surface="footer-agentic-culture" className="caption">{m.footer.narrativeLinks.agenticCulture}</SubstackLink></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionAi}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="/llms.txt" className="caption">{m.footer.aiLinks.llmstxt}</a></li>
            </ul>
          </div>
        </div>
        <hr className="hairline" style={{ marginBottom: "2rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p className="caption" style={{ margin: 0 }}>{m.footer.copyright}</p>
          <p className="caption" style={{ margin: 0 }}>
            <GitHubLink href="https://github.com/The-AIOS" surface="footer-copyright">{m.footer.org}</GitHubLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
