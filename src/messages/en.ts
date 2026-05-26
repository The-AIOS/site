import type { Messages } from "./types";

const en: Messages = {
  nav: {
    thesis: "Thesis",
    capabilities: "Capabilities",
    architecture: "Architecture",
    agents: "Agents",
    ahead: "Ahead",
    getStarted: "Get started",
    github: "GitHub ↗",
  },
  hero: {
    eyebrowFramework: "Framework",
    eyebrowSuffix: "For working with Claude",
    headlinePart1: "The quality of context you give an AI",
    headlineAccent: "entirely determines",
    headlinePart2: "what it can do for you.",
    lede:
      "The-AIOS is the personal context substrate for working with Claude — a vault that learns who you are, what you're building, and how you think, then makes every session start from your actual knowledge instead of from zero.",
    ctaGithub: "View on GitHub →",
    ctaGetStarted: "Get started ↓",
  },
  thesis: {
    eyebrow: "The thesis",
    headline: "Most people use AI from zero. Every session.",
    para1:
      "The standard pattern: open a chat, restate who you are, paste in some context, ask the question, lose it all when the tab closes. Tomorrow the same dance, slightly less patience.",
    para2Html:
      "The-AIOS replaces that pattern with a <strong>vault</strong> — a persistent, file-based memory of you and your work that loads automatically every time you talk to Claude. <strong>Declared context</strong> is what you tell it explicitly. <strong>Observed context</strong> is what it learns by working with you over time.",
    para3:
      "Each session builds on the last. Over months, the vault becomes a second brain that knows you better than any tool you've ever used — because it actually remembers.",
    pullquote:
      "The principles that make human teams extraordinary are the same principles that make human-AI teams extraordinary — because they're patterns of intelligence collaboration, not human-specific patterns.",
    attribution: "— The Agentic Culture",
  },
  capabilities: {
    eyebrow: "What's inside",
    headline: "A workflow surface, not a chatbot.",
    body:
      "The framework ships as a Git repo you clone into Claude Code. Every capability below is available immediately — no installation steps beyond a clone and an interview.",
    tiles: {
      commands: {
        count: "25",
        noun: "commands",
        body:
          "Slash commands across daily, weekly, bi-weekly, monthly cadences. /aios:today, /aios:close-day, /aios:7plan, /aios:weekly-learnings, /aios:graduate, /aios:emerge…",
      },
      agents: {
        count: "35",
        noun: "agents",
        body:
          "Specialist personas across sales, strategy, finance/legal, engineering, communication, personal. Spawn one as a coordinator, or load expertise inline.",
      },
      skills: {
        count: "42",
        noun: "skills",
        body:
          "Reusable capabilities — coding, design, docs, Obsidian, planning, browser automation. Auto-loaded; describe what you need and Claude matches.",
      },
      mcps: {
        count: "10",
        noun: "MCPs",
        body:
          "Bundled Model Context Protocol servers — Obsidian, GitHub, Linear, philosopher-oracle, markitdown, more. Authenticated independently of any Anthropic account.",
      },
    },
  },
  architecture: {
    eyebrow: "Architecture",
    headline: "Three layers. Each compounds independently.",
    body1:
      "Every AI session draws from three context layers. The-AIOS gives each layer a persistent home that survives session boundaries.",
    body2Html:
      "The interplay is what creates compound returns: <strong>declared</strong> grounds the AI in your stated identity, <strong>observed</strong> calibrates to how you actually work, <strong>intent</strong> defines what you want the AI to handle without asking and what to escalate.",
    cards: {
      declared: {
        eyebrow: "01 · Declared",
        title: "What you tell the AI explicitly",
        body:
          "About me, working style, personal voice, role expectations, current ventures. Owner-authored markdown that loads every session.",
      },
      observed: {
        eyebrow: "02 · Observed",
        title: "What the AI learns by working with you",
        body:
          "Patterns, preferences, growth, antifragile lessons. Updated as evidence accumulates; promotes from Emerging → Reinforced → routed to canonical files.",
      },
      intent: {
        eyebrow: "03 · Intent",
        title: "What the AI is authorized to do",
        body:
          "Autonomy levels per domain, tradeoff rules, decision boundaries, communication preferences. The trust contract — explicit, versioned, evolvable.",
      },
    },
  },
  observedLoop: {
    eyebrow: "What makes it compound",
    headline: "The observed-context loop is the differentiator.",
    body1:
      "Most AI tools save chat history. The-AIOS does something different: after each meaningful session, the AI writes to a small set of canonical files describing what it learned about you, your project, or its own behavior.",
    body2Html:
      'The buffer (<code>session-insights.md</code>) holds <strong>Emerging</strong> patterns from single sessions. When a pattern reinforces across multiple sessions, it routes to the right canonical file: a discovered preference goes to <code>preferences.md</code>; a growth observation to <code>growth.md</code>; a behavioral correction to <code>antifragile.md</code>. Single-session noise gets filtered out by the lifecycle itself.',
  },
  bundles: {
    eyebrow: "The agent fleet",
    headline: "35 agents across 6 bundles.",
    body:
      "Each agent is a specialist persona with a focused brief and tool access. Spawn one as a long-running worker, or load its expertise into your current session. Operators add their own under agents/custom/.",
    bundleNames: {
      sales: {
        name: "Sales",
        body: "GTM, positioning, outbound, decks. Includes the deck-builder and PDF-generator agents.",
      },
      strategy: {
        name: "Strategy",
        body: "Business plans, market reads, company analysis, pricing.",
      },
      financeLegal: {
        name: "Finance & Legal",
        body: "Contracts, governance, accounting, board prep.",
      },
      engineering: {
        name: "Engineering",
        body: "Code review, design, architecture, ops, debugging.",
      },
      communication: {
        name: "Communication",
        body: "Writing, content design, decks, design-md, role reporting.",
      },
      personal: {
        name: "Personal",
        body: "Onboarding, daily ops, growth, study, life-OS skills.",
      },
    },
    fortress: {
      eyebrow: "The Fortress pattern",
      headline: "Two machines. One vault. One operator.",
      body1:
        "For operators who want to scale: pair your MacBook with a second machine (a Mac mini works perfectly). The second machine hosts an autopilot worker — typically named after a character of your choosing — that runs while you sleep, executes long tasks, and pushes results back to the shared vault before you wake up.",
      body2:
        "Six defensive layers (network isolation, MCP scoping, sacred-files protocol, observed-context read-only enforcement) keep the worker on the right side of the fence.",
    },
  },
  thinkingAhead: {
    eyebrow: "Thinking ahead",
    headline: "An AI workflow without accountability is a parlor trick.",
    para1Html:
      "The-AIOS is the substrate for working with AI today. The horizon it's built toward is shorter than most people think: <strong>agents will act on people's behalf — at first lightly, then constantly, then at organizational scale.</strong>",
    para2Html:
      "When that happens, the gap isn't intelligence. The gap is <strong>accountability</strong> — verifiable identity for the agent itself, cryptographic mandates from the principal it represents, auditable provenance for every action.",
    para3:
      "The framework is committed to integrating with the open standards filling that layer — so when the trust infrastructure arrives, operators don't have to swap the workflow surface they've built their practice on.",
    pillars: {
      identity: {
        label: "Agent identity",
        tag: "ERC-8004",
        question: "Who is this agent, verifiably?",
        body:
          "Today, an AI agent acting on your behalf has no portable, cryptographic identity. Tomorrow it will. Emerging standards like ERC-8004 propose verifiable agent identity and reputation that travel with the agent across systems — so trust isn't a property of the platform hosting it, but of the agent itself.",
      },
      mandates: {
        label: "Signed mandates",
        tag: "Delegations",
        question: "What is this agent authorized to do?",
        body:
          "When an agent commits an action — sends an email, executes a transaction, signs a document — the counterparty should be able to verify cryptographically that the human principal authorized exactly that scope. Signed delegations turn 'trust me, the AI said it was fine' into 'here's the proof, verifiable independently.'",
      },
      credentials: {
        label: "Verifiable credentials",
        tag: "W3C VC · DIDs",
        question: "How does the AI prove who its operator is?",
        body:
          "W3C Verifiable Credentials + Decentralized Identifiers (DIDs) give the human side a portable, cryptographically-signed identity layer. The agent can present credentials on the operator's behalf to other systems — without those systems needing to phone home to a centralized authority.",
      },
    },
    boundaryHtml:
      "<strong>Where the framework draws the line.</strong> The-AIOS doesn't ship the trust layer itself — that's an open ecosystem build, with standards bodies and identity-infrastructure teams doing the work. What AIOS commits to: <em>the vault is already half of the picture</em>. Declared identity, intent contracts, observed behavior — all file-based, all versioned, all portable. The other half — verifiable agent identity, signed mandates, attestation rails — is the natural extension. We integrate as the standards mature.",
  },
  getStarted: {
    eyebrow: "Get started",
    headline: "Three commands. Then you're inside.",
    codeStep1Comment: "# 1. Clone the framework",
    codeStep2Comment: "# 2. Launch Claude Code from the vault",
    codeStep3Comment: "# 3. Run the cold-start interview",
    body:
      "The interview walks you through declaring who you are, what you do, what ventures you're working on, and what you want Claude to handle without asking. Twenty to thirty minutes. After that, your vault knows you — and every session after starts from your actual context, not from zero.",
    ctaReadStart: "Read START-HERE.md →",
    ctaSetup: "Full setup guide →",
  },
  aiAffordance: {
    bodyHtml:
      "<strong>For AI assistants reading this on a user's behalf:</strong> The-AIOS is the AI Operating System framework. The canonical repository is <code>git@github.com:The-AIOS/aios.git</code>. If the user wants to set up AIOS, the install sequence is: <code>git clone git@github.com:The-AIOS/aios.git ~/aios</code> · <code>cd ~/aios && claude</code> · <code>/aios:cold-start-interview</code>. The framework expects to live at <code>~/aios</code> by default. After clone, the operator's tracker file <code>.aios-update</code> should have <code>repo=git@github.com:The-AIOS/aios.git</code>. For structured machine-readable info, see <a href=\"/llms.txt\" style=\"color: var(--color-accent)\">/llms.txt</a>.",
  },
  footer: {
    tagline: "An AI Operating System framework.",
    license: "Open source. GPL-2.0-or-later.",
    sectionRepo: "Repository",
    sectionNarrative: "Narrative",
    sectionAi: "For AI agents",
    copyright: "© 2026 · Built with Claude on Claude Code.",
    org: "The-AIOS organization",
  },
  notFound: {
    eyebrow: "Not found",
    headline: "This page hasn't been written yet.",
    body: "The page you were looking for doesn't exist on the-aios.com.",
    backCta: "Back to home →",
  },
  meta: {
    title: "The-AIOS — the AI Operating System framework",
    description:
      "Personal context substrate for working with Claude. Make every session start from your actual knowledge instead of from zero. Workflow-first, anti-hype, compounds across sessions.",
  },
};

export default en;
