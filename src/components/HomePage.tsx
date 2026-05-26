import { ContextLoopDiagram, FortressDiagram, ThreeLayerDiagram } from "./diagrams";
import { LocaleSwitcher } from "./LocaleSwitcher";
import type { Locale, Messages } from "@/messages";

type Props = { m: Messages; locale: Locale };

export default function HomePage({ m, locale }: Props) {
  return (
    <main>
      <Header m={m} locale={locale} />
      <Hero m={m} />
      <Thesis m={m} />
      <Capabilities m={m} />
      <Architecture m={m} />
      <ObservedLoop m={m} />
      <Bundles m={m} />
      <ThinkingAhead m={m} />
      <GetStarted m={m} />
      <AiAffordance m={m} />
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
        backdropFilter: "blur(8px)",
        background: "rgba(10, 10, 10, 0.85)",
        borderBottom: "1px solid var(--color-hairline)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", gap: "1rem", flexWrap: "wrap" }}
      >
        <span
          className="byline"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", letterSpacing: "-0.02em", textTransform: "none", fontWeight: 600, color: "var(--color-ink)" }}
        >
          The-AIOS
        </span>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#thesis" className="caption" style={{ textDecoration: "none" }}>{m.nav.thesis}</a>
          <a href="#capabilities" className="caption" style={{ textDecoration: "none" }}>{m.nav.capabilities}</a>
          <a href="#architecture" className="caption" style={{ textDecoration: "none" }}>{m.nav.architecture}</a>
          <a href="#bundles" className="caption" style={{ textDecoration: "none" }}>{m.nav.agents}</a>
          <a href="#thinking-ahead" className="caption" style={{ textDecoration: "none" }}>{m.nav.ahead}</a>
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
    <section className="section" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "2rem" }}>
          <span className="accent">{m.hero.eyebrowFramework}</span> · {m.hero.eyebrowSuffix}
        </p>
        <h1 className="display-xl" style={{ marginBottom: "2.5rem", maxWidth: "920px" }}>
          {m.hero.headlinePart1}{" "}
          <span style={{ color: "var(--color-accent)" }}>{m.hero.headlineAccent}</span>{" "}
          {m.hero.headlinePart2}
        </h1>
        <p className="lede" style={{ maxWidth: "680px", marginBottom: "3rem" }}>
          {m.hero.lede}
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
    m.capabilities.tiles.commands,
    m.capabilities.tiles.agents,
    m.capabilities.tiles.skills,
    m.capabilities.tiles.mcps,
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
            <div key={t.noun} className="card">
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 600, color: "var(--color-accent)", lineHeight: 1 }}>
                  {t.count}
                </span>
                <span className="byline" style={{ color: "var(--color-ink-muted)" }}>{t.noun}</span>
              </div>
              <p className="caption" style={{ color: "var(--color-ink-muted)", lineHeight: 1.55 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Architecture({ m }: { m: Messages }) {
  const cards = [m.architecture.cards.declared, m.architecture.cards.observed, m.architecture.cards.intent];

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

        <div style={{ marginBottom: "3rem" }}>
          <ThreeLayerDiagram />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} className="card">
              <p className="card-eyebrow">{c.eyebrow}</p>
              <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{c.title}</h3>
              <p className="body-text" style={{ fontSize: "1rem", marginBottom: 0 }}>{c.body}</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
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
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Bundles({ m }: { m: Messages }) {
  const bundles = [
    { ...m.bundles.bundleNames.sales, count: 5 },
    { ...m.bundles.bundleNames.strategy, count: 4 },
    { ...m.bundles.bundleNames.financeLegal, count: 5 },
    { ...m.bundles.bundleNames.engineering, count: 6 },
    { ...m.bundles.bundleNames.communication, count: 8 },
    { ...m.bundles.bundleNames.personal, count: 7 },
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
            <div key={b.name} className="card">
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: 0 }}>{b.name}</h3>
                <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-label)", fontSize: "0.875rem", fontWeight: 700 }}>
                  {b.count}
                </span>
              </div>
              <p className="body-text" style={{ fontSize: "0.9375rem", marginBottom: 0 }}>{b.body}</p>
            </div>
          ))}
        </div>

        <hr className="hairline" style={{ margin: "4rem 0 3rem" }} />

        <div>
          <p className="eyebrow" style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}>{m.bundles.fortress.eyebrow}</p>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "4rem", alignItems: "start" }}>
            <div>
              <h3 className="display-md" style={{ marginBottom: "1.25rem" }}>{m.bundles.fortress.headline}</h3>
              <p className="body-text" style={{ marginBottom: "1rem" }}>{m.bundles.fortress.body1}</p>
              <p className="body-text" style={{ marginBottom: 0 }}>{m.bundles.fortress.body2}</p>
            </div>
            <FortressDiagram />
          </div>
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
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "2.5rem", maxWidth: "780px" }}>{m.getStarted.headline}</h2>

        <div className="code-block" style={{ fontSize: "1rem", padding: "1.5rem 2rem", marginBottom: "2rem", maxWidth: "780px" }}>
          <div><span className="comment">{m.getStarted.codeStep1Comment}</span></div>
          <div><span className="accent">git clone</span> git@github.com:The-AIOS/aios.git ~/aios</div>
          <div style={{ marginTop: "1rem" }}><span className="comment">{m.getStarted.codeStep2Comment}</span></div>
          <div><span className="accent">cd</span> ~/aios && <span className="accent">claude</span></div>
          <div style={{ marginTop: "1rem" }}><span className="comment">{m.getStarted.codeStep3Comment}</span></div>
          <div><span className="accent">/aios:cold-start-interview</span></div>
        </div>

        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "2rem" }}>{m.getStarted.body}</p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://github.com/The-AIOS/aios/blob/main/START-HERE.md" className="btn-primary" target="_blank" rel="noreferrer">
            {m.getStarted.ctaReadStart}
          </a>
          <a href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" className="btn-secondary" target="_blank" rel="noreferrer">
            {m.getStarted.ctaSetup}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function AiAffordance({ m }: { m: Messages }) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="ai-affordance">
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: m.aiAffordance.bodyHtml }} />
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
            <p
              className="byline"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", letterSpacing: "-0.01em", textTransform: "none", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.75rem" }}
            >
              The-AIOS
            </p>
            <p className="caption" style={{ marginBottom: 0 }}>
              {m.footer.tagline}<br />
              {m.footer.license}
            </p>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionRepo}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="https://github.com/The-AIOS/aios" className="caption" target="_blank" rel="noreferrer">github.com/The-AIOS/aios</a></li>
              <li><a href="https://github.com/The-AIOS/aios/blob/main/README.md" className="caption" target="_blank" rel="noreferrer">README</a></li>
              <li><a href="https://github.com/The-AIOS/aios/blob/main/CHANGELOG.md" className="caption" target="_blank" rel="noreferrer">Changelog</a></li>
              <li><a href="https://github.com/The-AIOS/aios/issues" className="caption" target="_blank" rel="noreferrer">Issues</a></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionNarrative}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="https://chuycepeda.substack.com" className="caption" target="_blank" rel="noreferrer">chuycepeda.substack.com</a></li>
              <li><a href="https://chuycepeda.substack.com/p/the-agentic-culture-team-management" className="caption" target="_blank" rel="noreferrer">The Agentic Culture</a></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>{m.footer.sectionAi}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="/llms.txt" className="caption">/llms.txt</a></li>
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
