import { ContextLoopDiagram, TrapCurveDiagram, InflectionCurveDiagram, DestinationNetworkDiagram, WhyMostFailDiagram } from "./diagrams";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { RepoLink, RepoFolderLink } from "./RepoLink";
import type { Locale, Messages } from "@/messages";

type Props = { m: Messages; locale: Locale };

export default function HomePage({ m, locale }: Props) {
  return (
    <main>
      <Header m={m} locale={locale} />
      <Hero m={m} />
      <Intro m={m} />
      <Thesis m={m} />
      <Capabilities m={m} />
      <Featured m={m} />
      <Architecture m={m} />
      <ObservedLoop m={m} />
      <Bundles m={m} />
      <ThinkingAhead m={m} />
      <OperatorJobAndArc m={m} />
      <GetStarted m={m} />
      <Footer m={m} />
    </main>
  );
}

/* ------------------------------------------------------------------ */

function Header({ m, locale }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(12px)",
        background: "rgba(10, 10, 10, 0.78)",
        borderBottom: "1px solid var(--color-hairline)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1.5rem", gap: "1rem", flexWrap: "wrap" }}
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
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#thesis" className="caption" style={{ textDecoration: "none" }}>{m.nav.thesis}</a>
          <a href="#capabilities" className="caption" style={{ textDecoration: "none" }}>{m.nav.capabilities}</a>
          <a href="#bundles" className="caption" style={{ textDecoration: "none" }}>{m.nav.agents}</a>
          <a href="#thinking-ahead" className="caption" style={{ textDecoration: "none" }}>{m.nav.ahead}</a>
          <a href="#operator-job" className="caption" style={{ textDecoration: "none" }}>{m.nav.arc}</a>
          <a href="#get-started" className="caption" style={{ textDecoration: "none" }}>{m.nav.getStarted}</a>
          <a href="https://github.com/The-AIOS/aios" className="caption" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            {m.nav.github}
          </a>
          <LocaleSwitcher current={locale} />
        </nav>
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
          {m.hero.headlinePart1}{" "}
          <span style={{ color: "var(--color-accent)" }}>{m.hero.headlineAccent}</span>{" "}
          {m.hero.headlinePart2}
        </h1>
        <p className="lede" style={{ maxWidth: "640px", marginInline: "auto", marginBottom: "2rem" }}>
          {m.hero.lede}
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://github.com/The-AIOS/aios" className="btn-primary" target="_blank" rel="noreferrer">
            {m.hero.ctaGithub}
          </a>
          <a href="#get-started" className="btn-secondary">
            {m.hero.ctaGetStarted}
          </a>
        </div>
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
          <p className="body-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: m.intro.whatIsHtml }} />
          <p className="body-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: m.intro.whoForHtml }} />
        </div>

        {/* badge → repositioned as the invitation quote that closes beat 1 */}
        <blockquote
          className="pullquote"
          style={{ maxWidth: "880px", fontStyle: "italic", fontSize: "1.125rem", color: "var(--color-ink-muted)" }}
        >
          {m.intro.badge}
        </blockquote>

        {/* ── Beat 2: your fear has data behind it (separated by spacing, not a line) ── */}
        <h3 className="display-md" style={{ marginTop: "5rem", marginBottom: "1.5rem", maxWidth: "780px" }}>{m.opening.headline}</h3>
        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "2.5rem" }}>{m.opening.body}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
          {m.opening.stats.map((s) => (
            <div key={s.value} style={{ borderTop: "1px solid var(--color-hairline)", paddingTop: "1rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                {s.value}
              </div>
              <p className="caption" style={{ marginTop: "0.5rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>
        <p className="caption" style={{ color: "var(--color-ink-subtle)" }}>
          <span style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.opening.sourceLabel}</span> · {m.opening.sourceText}
        </p>

        {/* ── Beat 3: the reframe quote that pivots into the thesis ── */}
        <blockquote className="pullquote" style={{ marginTop: "5rem", maxWidth: "880px", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
          {m.intro.reframePullquote}
        </blockquote>
        <p className="caption" style={{ color: "var(--color-ink-subtle)", marginLeft: "24px" }}>
          {m.intro.reframeAttribution}
        </p>
      </div>
    </section>
  );
}

function OperatorJobAndArc({ m }: { m: Messages }) {
  return (
    <section id="operator-job" className="section">
      <div className="container">
        {/* Section opener — Operator's New Job framing */}
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.operatorJob.eyebrow}</p>
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "880px" }}>{m.operatorJob.headline}</h2>
        <blockquote className="pullquote" style={{ fontSize: "1.5rem", maxWidth: "780px", marginBottom: "2rem", paddingLeft: "1.5rem", borderLeftWidth: "3px" }}>
          {m.operatorJob.pullquote}
        </blockquote>
        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "5rem" }}>{m.operatorJob.body}</p>

        {/* The 4 stages — now framed as the operator's culture map */}
        <ArcStage
          stage={m.arc.stages.one.stage}
          headline={m.arc.stages.one.headline}
          lede={m.arc.stages.one.lede}
          body={m.arc.stages.one.body}
        />

        {/* Stage 2 — The Trap */}
        <ArcStage
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

        {/* Stage 3 — The Inflection */}
        <ArcStage
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

        {/* Stage 4 — The Destination */}
        <ArcStage
          isLast
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
          <WhyMostFailDiagram
            skipLabel="THE SKIP"
            skipTitle={m.arc.failSkipTitle}
            skipBody={m.arc.failSkipBody}
            plateauLabel="THE PLATEAU"
            wallLabel="WALL"
            plateauTitle={m.arc.failPlateauTitle}
            plateauBody={m.arc.failPlateauBody}
          />
          <p className="body-text" style={{ textAlign: "center", fontStyle: "italic", color: "var(--color-ink-subtle)", marginTop: "1.5rem", marginBottom: 0 }}>
            {m.arc.failClose}
          </p>
        </div>
      </div>
    </section>
  );
}

function ArcStage({ stage, headline, lede, body, pullquote, pullquoteAttribution, signal, diagram, isLast = false }: {
  stage: string;
  headline: string;
  lede: string;
  body: string;
  pullquote?: string;
  pullquoteAttribution?: string;
  signal?: string;
  diagram?: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div style={{ paddingBottom: isLast ? "0" : "4rem", marginBottom: isLast ? "0" : "4rem", borderBottom: isLast ? "none" : "1px solid var(--color-hairline)" }}>
      <p className="eyebrow" style={{ color: "var(--color-accent)", marginBottom: "0.875rem", letterSpacing: "0.12em" }}>{stage}</p>
      <h3 className="display-lg" style={{ marginBottom: "1rem", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>{headline}</h3>
      <p className="lede" style={{ maxWidth: "780px", marginBottom: "1.25rem" }}>{lede}</p>
      <div style={{ display: "grid", gridTemplateColumns: diagram ? "minmax(0, 1.1fr) minmax(0, 1fr)" : "1fr", gap: diagram ? "3rem" : 0, alignItems: "center" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
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

function Thesis({ m }: { m: Messages }) {
  return (
    <section id="thesis" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.thesis.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "0" }}>{m.thesis.headline}</h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>{m.thesis.para1}</p>
            <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thesis.para2Html }} />
            <p className="body-text" style={{ marginBottom: "0" }}>{m.thesis.para3}</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.capabilities.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">{m.capabilities.headline}</h2>
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.architecture.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">{m.architecture.headline}</h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.25rem" }}>{m.architecture.body1}</p>
            <p className="body-text" dangerouslySetInnerHTML={{ __html: m.architecture.body2Html }} />
          </div>
        </div>

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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "5rem", alignItems: "start", marginBottom: "2.5rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.observedLoop.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "1.5rem" }}>{m.observedLoop.headline}</h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>{m.observedLoop.body1}</p>
            <p className="body-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: m.observedLoop.body2Html }} />
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.bundles.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">{m.bundles.headline}</h2>
          </div>
          <div>
            <p className="body-text">{m.bundles.body}</p>
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
            <p className="body-text" style={{ marginBottom: 0 }}>{m.bundles.fortress.body1}</p>
            <p className="body-text" style={{ marginBottom: 0 }}>{m.bundles.fortress.body2}</p>
          </div>
          <a
            href="https://github.com/The-AIOS/aios/blob/main/FORTRESS.md"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            {m.repoLink.readFortress}
          </a>
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{m.thinkingAhead.eyebrow}</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">{m.thinkingAhead.headline}</h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thinkingAhead.para1Html }} />
            <p className="body-text" style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: m.thinkingAhead.para2Html }} />
            <p className="body-text" style={{ marginBottom: "0" }}>{m.thinkingAhead.para3}</p>
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
        <h2 className="display-lg" style={{ marginBottom: "2rem", maxWidth: "780px" }}>{m.getStarted.headline}</h2>

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
          <a href="https://github.com/The-AIOS/aios/blob/main/START-HERE.md" className="btn-primary" target="_blank" rel="noreferrer">
            {m.getStarted.ctaReadStart}
          </a>
          <a href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" className="btn-secondary" target="_blank" rel="noreferrer">
            {m.getStarted.ctaSetup}
          </a>
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
              <li><a href="https://github.com/The-AIOS" className="caption" target="_blank" rel="noreferrer">{m.footer.repoLinks.githubOrg}</a></li>
              <li><a href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" className="caption" target="_blank" rel="noreferrer">{m.footer.repoLinks.setup}</a></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionNarrative}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="https://chuycepeda.substack.com/p/the-ai-operating-system" className="caption" target="_blank" rel="noreferrer">{m.footer.narrativeLinks.amplifier}</a></li>
              <li><a href="https://chuycepeda.substack.com/p/the-agentic-culture-team-management" className="caption" target="_blank" rel="noreferrer">{m.footer.narrativeLinks.agenticCulture}</a></li>
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
            <a href="https://github.com/The-AIOS" target="_blank" rel="noreferrer">{m.footer.org}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
