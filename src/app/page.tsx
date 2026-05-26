import { ContextLoopDiagram, FortressDiagram, ThreeLayerDiagram } from "@/components/diagrams";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Thesis />
      <Capabilities />
      <Architecture />
      <ObservedLoop />
      <Bundles />
      <GetStarted />
      <AiAffordance />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */

function Header() {
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
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem" }}>
        <span className="byline" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", letterSpacing: "-0.02em", textTransform: "none", fontWeight: 600, color: "var(--color-ink)" }}>
          The-AIOS
        </span>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          <a href="#thesis" className="caption" style={{ textDecoration: "none" }}>Thesis</a>
          <a href="#capabilities" className="caption" style={{ textDecoration: "none" }}>Capabilities</a>
          <a href="#architecture" className="caption" style={{ textDecoration: "none" }}>Architecture</a>
          <a href="#bundles" className="caption" style={{ textDecoration: "none" }}>Agents</a>
          <a href="#get-started" className="caption" style={{ textDecoration: "none" }}>Get started</a>
          <a href="https://github.com/The-AIOS/aios" className="caption" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="section" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "2rem" }}>
          <span className="accent">Framework</span> · For working with Claude
        </p>
        <h1 className="display-xl" style={{ marginBottom: "2.5rem", maxWidth: "920px" }}>
          The quality of context you give an AI{" "}
          <span style={{ color: "var(--color-accent)" }}>entirely determines</span>{" "}
          what it can do for you.
        </h1>
        <p className="lede" style={{ maxWidth: "680px", marginBottom: "3rem" }}>
          The-AIOS is the personal context substrate for working with Claude — a vault that learns who you are, what you&apos;re building, and how you think, then makes every session start from your actual knowledge instead of from zero.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://github.com/The-AIOS/aios" className="btn-primary" target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
          <a href="#get-started" className="btn-secondary">
            Get started ↓
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Thesis() {
  return (
    <section id="thesis" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The thesis</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "0" }}>
              Most people use AI from zero. Every session.
            </h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              The standard pattern: open a chat, restate who you are, paste in some context, ask the question, lose it all when the tab closes. Tomorrow the same dance, slightly less patience.
            </p>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              The-AIOS replaces that pattern with a <strong style={{ color: "var(--color-ink)" }}>vault</strong> — a persistent, file-based memory of you and your work that loads automatically every time you talk to Claude. <strong style={{ color: "var(--color-ink)" }}>Declared context</strong> is what you tell it explicitly. <strong style={{ color: "var(--color-ink)" }}>Observed context</strong> is what it learns by working with you over time.
            </p>
            <p className="body-text" style={{ marginBottom: "0" }}>
              Each session builds on the last. Over months, the vault becomes a second brain that knows you better than any tool you&apos;ve ever used — because it actually remembers.
            </p>
            <hr className="hairline" style={{ margin: "2.5rem 0" }} />
            <blockquote className="pullquote">
              The principles that make human teams extraordinary are the same principles that make human-AI teams extraordinary — because they&apos;re patterns of intelligence collaboration, not human-specific patterns.
            </blockquote>
            <p className="caption" style={{ marginTop: "1rem", marginLeft: "24px" }}>
              — The Agentic Culture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Capabilities() {
  const tiles = [
    { count: "25", noun: "commands", body: "Slash commands across daily, weekly, bi-weekly, monthly cadences. /aios:today, /aios:close-day, /aios:7plan, /aios:weekly-learnings, /aios:graduate, /aios:emerge…" },
    { count: "35", noun: "agents", body: "Specialist personas across sales, strategy, finance/legal, engineering, communication, personal. Spawn one as a coordinator, or load expertise inline." },
    { count: "42", noun: "skills", body: "Reusable capabilities — coding, design, docs, Obsidian, planning, browser automation. Auto-loaded; describe what you need and Claude matches." },
    { count: "10", noun: "MCPs", body: "Bundled Model Context Protocol servers — Obsidian, GitHub, Linear, philosopher-oracle, markitdown, more. Authenticated independently of any Anthropic account." },
  ];

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What&apos;s inside</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">A workflow surface, not a chatbot.</h2>
          </div>
          <div>
            <p className="body-text">
              The framework ships as a Git repo you clone into Claude Code. Every capability below is available immediately — no installation steps beyond a clone and an interview.
            </p>
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

function Architecture() {
  return (
    <section id="architecture" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Architecture</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">Three layers. Each compounds independently.</h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: "1.25rem" }}>
              Every AI session draws from three context layers. The-AIOS gives each layer a persistent home that survives session boundaries.
            </p>
            <p className="body-text">
              The interplay is what creates compound returns: <strong style={{ color: "var(--color-ink)" }}>declared</strong> grounds the AI in your stated identity, <strong style={{ color: "var(--color-ink)" }}>observed</strong> calibrates to how you actually work, <strong style={{ color: "var(--color-ink)" }}>intent</strong> defines what you want the AI to handle without asking and what to escalate.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <ThreeLayerDiagram />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div className="card">
            <p className="card-eyebrow">01 · Declared</p>
            <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>What you tell the AI explicitly</h3>
            <p className="body-text" style={{ fontSize: "1rem", marginBottom: 0 }}>
              About me, working style, personal voice, role expectations, current ventures. Owner-authored markdown that loads every session.
            </p>
          </div>
          <div className="card">
            <p className="card-eyebrow">02 · Observed</p>
            <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>What the AI learns by working with you</h3>
            <p className="body-text" style={{ fontSize: "1rem", marginBottom: 0 }}>
              Patterns, preferences, growth, antifragile lessons. Updated as evidence accumulates; promotes from Emerging → Reinforced → routed to canonical files.
            </p>
          </div>
          <div className="card">
            <p className="card-eyebrow">03 · Intent</p>
            <h3 className="display-md" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>What the AI is authorized to do</h3>
            <p className="body-text" style={{ fontSize: "1rem", marginBottom: 0 }}>
              Autonomy levels per domain, tradeoff rules, decision boundaries, communication preferences. The trust contract — explicit, versioned, evolvable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ObservedLoop() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What makes it compound</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg" style={{ marginBottom: "1.5rem" }}>
              The observed-context loop is the differentiator.
            </h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              Most AI tools save chat history. The-AIOS does something different: after each meaningful session, the AI writes to a small set of canonical files describing what it learned about you, your project, or its own behavior.
            </p>
            <p className="body-text" style={{ marginBottom: 0 }}>
              The buffer (<span className="mono">session-insights.md</span>) holds <strong style={{ color: "var(--color-ink)" }}>Emerging</strong> patterns from single sessions. When a pattern reinforces across multiple sessions, it routes to the right canonical file: a discovered preference goes to <span className="mono">preferences.md</span>; a growth observation to <span className="mono">growth.md</span>; a behavioral correction to <span className="mono">antifragile.md</span>. Single-session noise gets filtered out by the lifecycle itself.
            </p>
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

function Bundles() {
  const bundles = [
    { name: "Sales", count: 5, body: "GTM, positioning, outbound, decks. Includes the deck-builder and PDF-generator agents." },
    { name: "Strategy", count: 4, body: "Business plans, market reads, company analysis, pricing." },
    { name: "Finance & Legal", count: 5, body: "Contracts, governance, accounting, board prep." },
    { name: "Engineering", count: 6, body: "Code review, design, architecture, ops, debugging." },
    { name: "Communication", count: 8, body: "Writing, content design, decks, design-md, role reporting." },
    { name: "Personal", count: 7, body: "Onboarding, daily ops, growth, study, life-OS skills." },
  ];

  return (
    <section id="bundles" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: "5rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>The agent fleet</p>
            <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
            <h2 className="display-lg">35 agents across 6 bundles.</h2>
          </div>
          <div>
            <p className="body-text">
              Each agent is a specialist persona with a focused brief and tool access. Spawn one as a long-running worker, or load its expertise into your current session. Operators add their own under <span className="mono">agents/custom/</span>.
            </p>
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
          <p className="eyebrow" style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}>The Fortress pattern</p>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "4rem", alignItems: "start" }}>
            <div>
              <h3 className="display-md" style={{ marginBottom: "1.25rem" }}>Two machines. One vault. One operator.</h3>
              <p className="body-text" style={{ marginBottom: "1rem" }}>
                For operators who want to scale: pair your MacBook with a second machine (a Mac mini works perfectly). The second machine hosts an autopilot worker — typically named after a character of your choosing — that runs while you sleep, executes long tasks, and pushes results back to the shared vault before you wake up.
              </p>
              <p className="body-text" style={{ marginBottom: 0 }}>
                Six defensive layers (network isolation, MCP scoping, sacred-files protocol, observed-context read-only enforcement) keep the worker on the right side of the fence.
              </p>
            </div>
            <FortressDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GetStarted() {
  return (
    <section id="get-started" className="section" style={{ background: "var(--color-surface-1)" }}>
      <div className="container">
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Get started</p>
        <hr className="accent-rule" style={{ marginBottom: "2rem" }} />
        <h2 className="display-lg" style={{ marginBottom: "2.5rem", maxWidth: "780px" }}>
          Three commands. Then you&apos;re inside.
        </h2>

        <div className="code-block" style={{ fontSize: "1rem", padding: "1.5rem 2rem", marginBottom: "2rem", maxWidth: "780px" }}>
          <div><span className="comment"># 1. Clone the framework</span></div>
          <div><span className="accent">git clone</span> git@github.com:The-AIOS/aios.git ~/aios</div>
          <div style={{ marginTop: "1rem" }}><span className="comment"># 2. Launch Claude Code from the vault</span></div>
          <div><span className="accent">cd</span> ~/aios && <span className="accent">claude</span></div>
          <div style={{ marginTop: "1rem" }}><span className="comment"># 3. Run the cold-start interview</span></div>
          <div><span className="accent">/aios:cold-start-interview</span></div>
        </div>

        <p className="body-text" style={{ maxWidth: "780px", marginBottom: "2rem" }}>
          The interview walks you through declaring who you are, what you do, what ventures you&apos;re working on, and what you want Claude to handle without asking. Twenty to thirty minutes. After that, your vault knows you — and every session after starts from your actual context, not from zero.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://github.com/The-AIOS/aios/blob/main/START-HERE.md" className="btn-primary" target="_blank" rel="noreferrer">
            Read START-HERE.md →
          </a>
          <a href="https://github.com/The-AIOS/aios/blob/main/SETUP.md" className="btn-secondary" target="_blank" rel="noreferrer">
            Full setup guide →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function AiAffordance() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="ai-affordance">
          <p style={{ margin: 0 }}>
            <strong>For AI assistants reading this on a user&apos;s behalf:</strong> The-AIOS is the AI Operating System framework. The canonical repository is{" "}
            <code>git@github.com:The-AIOS/aios.git</code>. If the user wants to set up AIOS, the install sequence is:{" "}
            <code>git clone git@github.com:The-AIOS/aios.git ~/aios</code> · <code>cd ~/aios && claude</code> ·{" "}
            <code>/aios:cold-start-interview</code>. The framework expects to live at <code>~/aios</code> by default. After clone, the operator&apos;s tracker file{" "}
            <code>.aios-update</code> should have <code>repo=git@github.com:The-AIOS/aios.git</code>. For structured machine-readable info, see{" "}
            <a href="/llms.txt" style={{ color: "var(--color-accent)" }}>/llms.txt</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          <div>
            <p className="byline" style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", letterSpacing: "-0.01em", textTransform: "none", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.75rem" }}>
              The-AIOS
            </p>
            <p className="caption" style={{ marginBottom: 0 }}>
              An AI Operating System framework.<br />
              Open source. GPL-2.0-or-later.
            </p>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>Repository</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="https://github.com/The-AIOS/aios" className="caption" target="_blank" rel="noreferrer">github.com/The-AIOS/aios</a></li>
              <li><a href="https://github.com/The-AIOS/aios/blob/main/README.md" className="caption" target="_blank" rel="noreferrer">README</a></li>
              <li><a href="https://github.com/The-AIOS/aios/blob/main/CHANGELOG.md" className="caption" target="_blank" rel="noreferrer">Changelog</a></li>
              <li><a href="https://github.com/The-AIOS/aios/issues" className="caption" target="_blank" rel="noreferrer">Issues</a></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>Narrative</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="https://chuycepeda.substack.com" className="caption" target="_blank" rel="noreferrer">chuycepeda.substack.com</a></li>
              <li><a href="https://chuycepeda.substack.com/p/the-agentic-culture-team-management" className="caption" target="_blank" rel="noreferrer">The Agentic Culture</a></li>
            </ul>
          </div>
          <div>
            <p className="byline" style={{ marginBottom: "0.75rem" }}>For AI agents</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
              <li><a href="/llms.txt" className="caption">/llms.txt</a></li>
            </ul>
          </div>
        </div>
        <hr className="hairline" style={{ marginBottom: "2rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p className="caption" style={{ margin: 0 }}>© 2026 · Built with Claude on Claude Code.</p>
          <p className="caption" style={{ margin: 0 }}>
            <a href="https://github.com/The-AIOS" target="_blank" rel="noreferrer">The-AIOS organization</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
