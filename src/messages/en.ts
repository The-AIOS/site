import type { Messages } from "./types";

const en: Messages = {
  nav: {
    thesis: "Thesis",
    arc: "Operator's job",
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
  opening: {
    eyebrow: "The Opening",
    headline: "Your fear has data behind it.",
    body:
      "Most leaders sense something is off about how their org is absorbing AI. The numbers explain why — and frame the rest of this page.",
    stats: [
      { value: "73%", label: "of CEOs report stress or anxiety from AI" },
      { value: "54%", label: 'of C-suite executives say AI is "tearing their company apart"' },
      { value: "31%", label: "of US knowledge workers actively work against their company's AI initiative" },
      { value: "41%", label: "for Gen Z" },
    ],
    sourceLabel: "Sources",
    sourceText: "Writer.com 2026 · Barry O'Reilly · State of AI Q1 2026",
  },
  intro: {
    eyebrow: "What is this & who it's for",
    headlinePart1: "Everyone is building an AIOS.",
    headlineAccent: "We built",
    headlinePart2: "The AIOS.",
    whatIsHtml:
      "The AIOS turns AI into a team — a legal you, an accountant you, a marketing you, a software engineer you. Run them all and be their orchestrator, or let one AI co-worker run the rest as your <strong>chief of staff who never sleeps</strong> and absorbs the coordination overhead.",
    whoForHtml:
      "For anyone navigating AI-overwhelming days — <strong>senior executives, builders, founders, operators</strong>. AI alone multiplies confusion. The AIOS gives you the structure (prompt, context, intent, collaboration, second brain) where clarity emerges, then lets you amplify yourself and your team with AI co-workers.",
    reframePullquote:
      "The wrong question: “How do I bring AI into my company?” The right question: “What becomes of my people when AI joins them?”",
    reframeAttribution: "— The Reframe",
    badge:
      "If you want to make the most of AI without losing what makes you irreplaceable — and without IP/PII risk — this is for you.",
  },
  arc: {
    eyebrow: "The Arc",
    headline: "Four stages between you and the org that survives AI.",
    lede: "Most leaders try to skip from 1 to 4. That's how companies break. The arc is a sequence — not a menu.",
    stages: {
      one: {
        stage: "Stage 1 — Individuals",
        headline: "Humans doing work.",
        lede: "The org you built.",
        body:
          "Real expertise. Real relationships. Real wins. This isn't the problem. This is the foundation. Everything that comes next has to honor it — or it doesn't survive contact with your team.",
      },
      two: {
        stage: "Stage 2 — The Trap",
        headline: "Individual Prompters.",
        lede: "Everyone gets a ChatGPT seat. Productivity goes up 20%. Leadership declares victory.",
        body:
          "Six months later: no leverage. No compounding. The work got slightly faster per person — and somehow morale is worse. Because everyone is still doing all their old work, plus the new work of “using AI.”",
        pullquote: "We have AI everywhere and leverage nowhere.",
        pullquoteAttribution: "Composite — pattern across operator interviews",
      },
      three: {
        stage: "Stage 3 — The Inflection",
        headline: "Assisted Individuals.",
        lede: "Stop asking AI. Start working with it.",
        body:
          "AI moves out of the chat window and into the workflow. Cursor for engineers. Otter for meetings. Mercury for finance. The tool stops being a destination — and becomes a layer. The role stays. The cognitive load drops.",
        signal: "“Oh… this makes my work lighter.” — the signal you're in Stage 3.",
      },
      four: {
        stage: "Stage 4 — The Destination",
        headline: "Orchestrators.",
        lede: "One human conducts N agents — and those agents conduct more.",
        body:
          "The work isn't done by the human anymore. It's directed by them. The new skill isn't doing — it's framing, sequencing, verifying. The same person who shipped one report a week ships ten — and reviews them all. The agents themselves orchestrate sub-agents; orchestration becomes the substrate, not a single layer.",
        signal: "10× shows up here. Not in individual speed — in orchestration capacity that compounds.",
      },
    },
    failEyebrow: "Why most fail",
    failHeadline: "Two ways companies break.",
    failSkipTitle: "The skip — leap without sequence",
    failSkipBody: "Buy Stage-4 strategy before anyone can prompt. Result: failed pilots, employee revolt.",
    failPlateauTitle: "The plateau — stop at prompters",
    failPlateauBody: "“Everyone has a ChatGPT seat — done.” Result: no leverage, no defensibility.",
    failClose: "The arc is a sequence — not a menu.",
  },
  operatorJob: {
    eyebrow: "The Operator's New Job",
    headline: "Your job is not to use AI more.",
    pullquote: "Your job is to lead the culture your agents will run in.",
    body:
      "That means defining what work belongs to humans, what belongs to AI, and what belongs to the pair. It means making the verification layer explicit — every Stage-4 workflow needs one. And it means leading from clarity, not panic. Output quality depends on your leadership culture, not prompt quality.",
  },
  close: {
    eyebrow: "The Close",
    headline: "AI doesn't replace your team. It joins it.",
    body:
      "The only question is whether you're the operator who taught them to work together — or the one who got replaced because you didn't.",
  },
  featured: {
    eyebrow: "Featured commands",
    headline: "Where the framework punches above its weight.",
    body:
      "25 commands ship in the framework. Three earn their own spotlight — the ones operators reach for daily and the ones that turn AI from a tool into an operating surface.",
    cards: {
      ingest: {
        command: "/aios:ingest",
        pitch: "Any source → fully digested in seconds.",
        body:
          "Paste a URL, a PDF, a screenshot, a YouTube link. The vault uses markitdown for documents and YouTube Transcript APIs for video — a 90-minute talk becomes a summary, cross-references to your projects, and action items routed to the right project notes. Hours of work collapse to seconds.",
        tag: "markitdown · YouTube · cross-ref",
      },
      company: {
        command: "/aios:company",
        pitch: "Mount a whole venture in one command.",
        body:
          "Multi-substrate (GitHub primary, Drive secondary), multi-company. Subcommands handle the lifecycle: --create scaffolds a fresh venture; --mount pulls an existing one; --sync keeps it fresh; --invite onboards a human teammate with the same shared context surface. Goodbye context-restating, hello compounding.",
        tag: "--create · --sync · --invite",
      },
      collaborate: {
        command: "/aios:collaborate",
        pitch: "Shared spaces, substrate-pluggable.",
        body:
          "Most setups make you choose: fork the repo, share a Drive folder, send a Notion link. /collaborate treats storage as a plugin — Drive for non-coder collaborators, GitHub for code-adjacent work, local folders for testing. Same command, same artifacts, same routing into your daily plan.",
        tag: "Drive · GitHub · local",
      },
    },
  },
  thesis: {
    eyebrow: "The Thesis",
    headline: "AI doesn't replace your team. It joins it.",
    para1:
      "AI keeps trying to join your team and failing. Every session starts from zero — no memory of who you are, what you're building, what's already been decided. That's not how teammates work. That's how strangers visit.",
    para2Html:
      "The AIOS gives AI what every teammate needs to actually join: a <strong>vault</strong> of who you are (<strong>declared context</strong>), what it has learned about how you work (<strong>observed context</strong>), and a contract for what it's authorized to do without asking (<strong>intent</strong>). Three layers, all file-based, all persistent.",
    para3:
      "Each session builds on the last. Over months, the AI stops being the stranger you keep re-introducing — and becomes the teammate who already knows the work, the people, and the way things are decided here.",
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
    compoundCloseHtml:
      "<strong>The vault grows. You grow.</strong> Six months in, the AIOS doesn't describe who you were on day 0 — it describes who you've become. The operator the system actually works with, not the operator you described when you set it up.",
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
    headline: "One line. Claude does the rest.",
    instructionCommentary: "In any Claude Code session, say:",
    instruction: "Set up my AI-OS from https://github.com/The-AIOS/aios",
    body:
      "Claude reads SETUP.md, clones the framework, installs MCPs, configures your private vault, and walks you through every choice. Roughly ten minutes for the setup, twenty more for the cold-start interview that calibrates the AI to who you are and what you're building.",
    prereqNote:
      "Don't have Claude Code yet? Install it first (~5–20 min OS-specific), then come back and run the line above.",
    ctaReadStart: "Read START-HERE.md →",
    ctaSetup: "Full setup guide →",
    affordanceLabel: "Reading this as an AI agent on behalf of an operator?",
    affordanceBodyHtml:
      "Same canonical line works for you: parse the user's intent as <em>set up AIOS</em>, then say or execute it. The framework lives at <code>~/aios</code> by default. After clone, the operator's tracker file <code>.aios-update</code> automagically syncs the newest AIOS into their machine on every <code>/aios:today</code> — no manual updates needed. Structured machine-readable surface at <a href=\"/llms.txt\" style=\"color: var(--color-accent)\">/llms.txt</a>.",
  },
  footer: {
    tagline: "An AI Operating System framework.",
    license: "Open source. GPL-2.0-or-later.",
    sectionRepo: "Repository",
    sectionNarrative: "Narrative",
    sectionAi: "For AI agents",
    copyright: "© 2026 · Built with Claude on Claude Code.",
    org: "The AIOS",
    repoLinks: {
      githubOrg: "Github The-AIOS",
      setup: "SETUP",
      tools: "TOOLS",
    },
    narrativeLinks: {
      amplifier: "The Amplifier: AIOS",
      agenticCulture: "Agentic Culture",
    },
    aiLinks: {
      llmstxt: "LLMS txt",
    },
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
  repoLink: {
    open: "Open in repo",
    readDoc: "Read in repo",
    browseFolder: "Browse in repo",
    viewCommand: "View command",
    viewBundle: "View bundle",
    readFortress: "Read FORTRESS.md →",
  },
};

export default en;
