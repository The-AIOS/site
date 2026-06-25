/* Trilingual content for the-aios.com.
 *
 * Reader-facing prose lives here in EN / ES (LATAM) / PT-BR. Technical surfaces
 * stay in English by design — command names (/aios:today), file names
 * (CLAUDE.md), code blocks, the machine-facing AI-affordance block, SVG diagram
 * internals, and the ant chatter. HomePage renders from CONTENT[locale].
 *
 * Headlines are [before, accentWord, after] triples so the single coral accent
 * word survives translation.
 */

import type { Locale } from "@/messages";

type H = [string, string, string]; // [pre, accent, post]
type CardT = { e?: string; t?: string; b: string; mono?: string };
type Row = [string, string];

export type Content = {
  nav: { href: string; label: string }[];
  /* Act 2 — Why (urgency). Reuses journey.cards + OrchestratorShift + journey.caption. */
  why: {
    eyebrow: string; h: H; lead: string; pull: H;
    diLabel: string; diTitle: string; diSub: string;
  };
  /* Act 3 — How (wrapper + subsection labels for the integrated mechanical section). */
  how: {
    eyebrow: string; h: H; intro: string;
    subModel: string; subContext: string; subFleet: string; subRhythm: string;
    subProjects: string; subTeams: string; subTrust: string; subGlass: string;
  };
  /* The session / agent / skill mental model (folded from the how-it-works infographic). */
  mentalModel: {
    headline: { t: string; a?: boolean }[]; // tokens; a=true → coral accent
    session: { word: string; tag: string; t: string; b: string };
    agent: { word: string; tag: string; t: string; b: string };
    skill: { word: string; tag: string; t: string; b: string };
    spawnCmd: string; spawnBody: string; hatCmd: string; hatBody: string;
    chain: string[]; // [session, →, agents, →, skills, =, super-team]
    chainCaption: string;
  };
  /* automation → amplification → autonomy ladder. */
  ladder: { eyebrow: string; rungs: { e: string; t: string }[] };
  /* Act 4 — Where it's going (the roadmap). Direction, not dated commitments. */
  roadmap: {
    eyebrow: string; h: H; intro: string; items: CardT[]; note: string;
  };
  /* Act 5 — Manual: the Step 0 / Step 1 setup story. */
  setup: {
    eyebrow: string; h: H; intro: string; soonLabel: string;
    step0Label: string; step0: { t: string; b: string; href?: string; soon?: boolean; pill: string }[];
    step1Label: string; step1Title: string; step1Body: string; step1Comment: string;
    learnable: string;
  };
  hero: {
    eyebrowPre: string; eyebrowAccent: string; eyebrowPost: string;
    h: H; leadBold: string; leadRest: string; tagline: string;
    ctaPrimary: string; ctaGithub: string; chips: string[];
  };
  what: {
    eyebrow: string; h: H; body1: string; body2Pre: string; body2Bold: string; body2Rest: string;
    principlesEyebrow: string; principles: CardT[]; pull: H;
  };
  journey: {
    eyebrow: string; h: H; intro: string; cards: CardT[];
    h3: H; caption: string; pull: H;
  };
  arch: {
    eyebrow: string; h: H; introPre: string; introBold: string; introPost: string;
    layers: CardT[]; timelineEyebrow: string; timelineCaption: string;
    madeOfEyebrow: string; anatomyCaption: string; distinctEyebrow: string; distinctTail: string;
    distinct: Row[]; pull: H; claudeLink: string;
  };
  toolbox: {
    eyebrow: string; h: H; intro: string;
    stats: { n: string; label: string }[];
    fleetEyebrow: string; fleet: CardT[];
    links: string[];
  };
  skills: { eyebrow: string; h: H; intro: string; cards: CardT[] };
  rhythm: {
    eyebrow: string; h: H; body: string; pull: H; cards: CardT[];
  };
  projects: {
    eyebrow: string; h: H; introPre: string; introBold: string; introPost: string;
    cmt1: string; cmt2: string; cmt3: string; cmt4: string; outro: string;
  };
  glass: {
    eyebrow: string; h: H; bodyBold: string; bodyRest: string;
    pullAccent: string; pullRest: string; cards: CardT[];
  };
  workspaces: {
    eyebrow: string; h: H; intro: string; cards: CardT[]; caption: string; pull: H;
  };
  trust: {
    eyebrow: string; h: H; intentBold: string; intentRest: string;
    trustPull: H; auditBody: string; facts: CardT[];
    receiptsBold: string; receiptsRest: string;
  };
  containment: {
    eyebrow: string; h: H; body1Pre: string; body1Bold: string; body1Post: string;
    caption: string; body2: string; closingPull: H; link: string;
  };
  manual: {
    eyebrow: string; h: H; body: string; readBtn: string; downloadBtn: string;
    coverSub: string;
  };
  getStarted: {
    eyebrow: string; h: H; prompt: string; codeComment: string; consent: string;
    steps: CardT[]; setupBtn: string; prereqBtn: string;
  };
  back: { h: H; lede: string };
  footer: {
    tagline: string; license: string;
    repo: string; narrative: string; forAi: string;
    amplifier: string; agenticCulture: string; manualLink: string;
    copyright: string;
  };
  meta: { title: string; description: string };
};

const NAV_HREFS = ["#what", "#why", "#how", "#roadmap", "#setup", "#manual"];

const en: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["What", "Why", "How", "Where", "Setup", "Manual"][i] })),
  why: {
    eyebrow: "Why now",
    h: ["AI is getting better than us at ", "almost everything", "."],
    lead: "This is the moment to rise from doer to orchestrator — to stop racing the machines and start conducting them. The people who thrive won’t be the ones who resist AI; they’ll be the ones who learned to run a team of it.",
    pull: ["Verticality is dying. ", "Horizontality", " is born — one human conducts many agents."],
    diLabel: "The evidence",
    diTitle: "The Disruption Index",
    diSub: "Industries ranked by how fast AI is reshaping them — with the real companies that died, reinvented, or rode the wave. Browse it →",
  },
  how: {
    eyebrow: "How it works",
    h: ["The whole machine, ", "one read", "."],
    intro: "Five moving parts, one idea: you orchestrate sessions, sessions load agents, agents call skills — and all of it reads the ground underneath. Here’s each piece, then how it compounds.",
    subModel: "The three words", subContext: "Context that compounds", subFleet: "The fleet",
    subRhythm: "The rhythm", subProjects: "Projects", subTeams: "Teams",
    subTrust: "Trust, control & containment", subGlass: "Glass — the interface",
  },
  mentalModel: {
    headline: [{ t: "A " }, { t: "session", a: true }, { t: " is where. An " }, { t: "agent", a: true }, { t: " is who. A " }, { t: "skill", a: true }, { t: " is how." }],
    session: { word: "Session", tag: "◧ a terminal — the where", t: "Where work happens", b: "One live thread — the deal, the deck, the build. It reads your context the moment it opens, runs the rituals, remembers. You can run many at once." },
    agent: { word: "Agent", tag: "◆ a .md file — the who", t: "Who does it", b: "A named specialist you load into a session — lawyer, accountant, researcher. A role plus its instructions and the tools it can touch. 31 ship in the box; you summon one by name or matched semantically given your task." },
    skill: { word: "Skill", tag: "✦ a .md file, no tools — the how", t: "How it’s done", b: "Drop-in expertise an agent loads the instant it’s needed — like Neo plugging in and knowing kung fu. Pure know-how, no tools. 45 ship in the box; you never name one — describe the work and the right one wakes." },
    spawnCmd: "spawn {agent}", spawnBody: "Opens a new session with that co-worker’s identity pre-loaded — a fresh tab working in parallel.",
    hatCmd: "/aios:agent {agent}", hatBody: "Wears that co-worker’s hat in your current session — same thread, new specialist lens.",
    chain: ["A session", "runs ›", "1+ agents", "each calls ›", "1+ skills", "=", "a super-intelligent team"],
    chainCaption: "Everything’s already bundled in your AIOS — the best, compliant, frontier practices, ready out of the box.",
  },
  ladder: {
    eyebrow: "And it climbs",
    rungs: [
      { e: "Automation", t: "do it faster" },
      { e: "→ Amplification", t: "do far more" },
      { e: "→ Autonomy", t: "it acts for you, within trust" },
    ],
  },
  roadmap: {
    eyebrow: "Where it’s going",
    h: ["The next ", "layers", "."],
    intro: "The AIOS already runs every day. Here’s the direction of travel — each item traces to live work in the framework, not a press release.",
    items: [
      { e: "Model-agnostic", t: "The layer, not the model", b: "The AIOS is the substrate; the LLM is swappable. Run Claude (the best engine today) or any frontier model — the same context, agents, and rituals run on top, unchanged." },
      { e: "Sovereign engine", t: "An engine no one can switch off", b: "Open-weights models like GLM-5.2 now reach near-frontier quality you can download and run yourself — offline, air-gapped, on your own metal. The sovereign fallback stops being a downgrade." },
      { e: "The desktop app", t: "AIOS, for people who never open an editor", b: "A free, installable app — the panel, real terminals, vault explorer, one-click rituals — with native viewers for markdown, HTML, and PDFs. Next: watching video, not just reading markdown." },
      { e: "Corporate controls", t: "Governed agents at company scale", b: "Encrypted-at-rest context, per-agent scoped read-grants, audit trails, and verifiable agent identity — INTENT as policy, cryptographically enforced. The admin layer for running a fleet inside an org." },
      { e: "Marketplace", t: "Install a bundle in one command", b: "Agent bundles, vertical workflows, a company’s whole brain — installed through a trust-gated marketplace: registry → injection scan → license check → QA → install with an audit log." },
      { e: "Agentic contact book", t: "Identity for agents and the people they work with", b: "A directory where your agents carry verifiable credentials, so it inherits the right access and can interact securely with other people’s agents on your behalf." },
    ],
    note: "Direction, not dated promises — and never a feature we can’t already point at in the work.",
  },
  setup: {
    eyebrow: "Set it up",
    h: ["Everything you need, ", "then one line", "."],
    intro: "The whole setup is a guided conversation — but here’s the honest list of what to have ready, and the single line that starts it.",
    soonLabel: "coming soon",
    step0Label: "Step 0 — what you need",
    step0: [
      { t: "Obsidian", b: "The vault lives here — plain Markdown, your second brain.", href: "https://obsidian.md", pill: "free" },
      { t: "An IDE", b: "Google Antigravity (or VS Code) — where the AIOS Glass extension turns commands into buttons.", href: "https://antigravity.google", pill: "free" },
      { t: "AIOS Glass", b: "The graphical front door, installed from Open VSX — optional, but makes it click-not-type.", href: "https://open-vsx.org/extension/the-aios/aios-glass", pill: "free" },
      { t: "Claude Code", b: "The engine. Install Claude / Claude Code — this is what actually runs.", href: "https://claude.com/claude-code", pill: "" },
      { t: "AIOS App", b: "The standalone app — panel, terminals, vault explorer, one-click rituals — for operators who never open an editor.", soon: true, pill: "free" },
    ],
    step1Label: "Step 1 — run the AIOS",
    step1Title: "Tell Claude, in any terminal:",
    step1Body: "Claude reads SETUP.md, clones the framework, installs the MCPs, configures your private vault, and walks every choice — each step asks your consent.",
    step1Comment: "# the entire setup, in one line",
    learnable: "Everything else is learnable from inside — ask your AIOS what it can do, and it shows you.",
  },
  hero: {
    eyebrowPre: "The AI Operating System", eyebrowAccent: "·", eyebrowPost: "Open source",
    h: ["Giving everyone a ", "team of agents.", ""],
    leadBold: "AI as a team, not a tool.",
    leadRest: " The AIOS turns AI into co-workers — a legal you, an accountant you, a marketing you, an engineering you. Orchestrated by you, governed by your intent, compounding every day.",
    tagline: "Gain bandwidth. Go Agentic.",
    ctaPrimary: "Take the tour ↓", ctaGithub: "View on GitHub ↗",
    chips: ["declared context", "observed context", "intent", "agents", "skills", "rituals"],
  },
  what: {
    eyebrow: "What it is", h: ["Your AI co-workers, ", "orchestrated", "."],
    body1: "Run every co-worker yourself and be their orchestrator — or let one AI co-worker run the rest as your chief of staff who never sleeps.",
    body2Pre: "Built for anyone navigating AI-overwhelming days — ",
    body2Bold: "senior executives, builders, founders, operators",
    body2Rest: ". AI alone multiplies confusion. The AIOS gives you the structure — prompt, context, intent, collaboration, a second brain — where clarity emerges. So you make the most of AI without losing what makes you irreplaceable, and without IP/PII risk.",
    principlesEyebrow: "Four principles, all load-bearing",
    principles: [
      { t: "Amplify intelligence, not artificial", b: "Human + AI beats human alone or AI alone." },
      { t: "Context, not prompts", b: "Prompts are the artifact most people optimize. Context is the substrate that determines what those prompts can do." },
      { t: "Trust earned over time", b: "Autonomy compounds with judgment — like a good A-player on a real team." },
      { t: "Portable, not proprietary", b: "The AIOS is the layer; the LLM is interchangeable. Plug Claude (recommended), Gemini, or your best model." },
    ],
    pull: ["Everyone is building an AIOS now. ", "So we built The AIOS.", ""],
  },
  journey: {
    eyebrow: "The journey", h: ["Three progressive stages, each returns ", "~10× the leverage", "."],
    intro: "Doer → prompter → amplifier → orchestrator. The system walks you up the ladder — most people start at the bottom and never climb. None of it requires extra work; context builds as a byproduct of your sessions.",
    cards: [
      { e: "Week 1 — Automate", t: "Gain speed, do faster", b: "Daily plans, drafts, syntheses. 30 minutes becomes 30 seconds." },
      { e: "Week 2 — Amplify", t: "Gain bandwidth, do more", b: "Agents draft proposals, write in your voice, research while you sleep. You stop being the bottleneck." },
      { e: "Month 1 — Agency", t: "Gain autonomy, do agentic", b: "AI co-workers act on your behalf with judgment, within trust boundaries you’ve defined." },
    ],
    h3: ["Verticality is dying. ", "Horizontality", " is born."],
    caption: "The inspector checks every draft — a bottleneck, descending. The orchestrator conducts a team, and verifies.",
    pull: ["You do the thinking. ", "The vault does the remembering.", ""],
  },
  arch: {
    eyebrow: "The architecture", h: ["Context that ", "compounds", "."],
    introPre: "Most setups ship declared context only. The AIOS runs a ", introBold: "three-layer context system",
    introPost: " — after a month, the AI knows things about you that aren’t in any file you wrote. An empty ground produces a generic answer no matter how brilliant the reader; the vault is the enriched ground every agent reads.",
    layers: [
      { e: "Layer 1 — Declared", t: "You write it", b: "Identity, voice, working style, business, role expectations. What you explicitly tell the AI about yourself." },
      { e: "Layer 2 — Observed", t: "Claude writes it", b: "Patterns, growth edges, preferences, blind spots — observations the AI accumulates by working with you over time." },
      { e: "Layer 3 — Intent", t: "The trust contract", b: "INTENT.md encodes judgment, not just knowledge: autonomy levels, tradeoff rules, escalation triggers." },
    ],
    timelineEyebrow: "Day one it knows what you said · a year in, who you’re becoming",
    timelineCaption: "Not a productivity hack. Compounding self-awareness.",
    madeOfEyebrow: "What it’s made of",
    anatomyCaption: "Six building blocks every operator shares — plus a three-tier extension model that never collides: framework, yours, your company’s.",
    distinctEyebrow: "What makes it operationally distinct", distinctTail: "it builds people and agents up",
    distinct: [
      ["Governed", "The INTENT.md trust contract controls what AI handles autonomously vs. what needs your review."],
      ["Multiplayer", "Personal × team × company topologies. Mount a company’s context in one prompt; collaborate over Drive, GitHub, or local folders."],
      ["Substrate-agnostic", "Filesystem as context, plain Markdown, no RAG. Storage is a plugin — the same commands work on any substrate."],
      ["Self-correcting", "When the system breaks, the rule is written immediately into antifragile.md — every break upgrades the system."],
      ["Agentic culture", "10 principles of intelligence collaboration, synthesized from 36 books on leadership and teamwork, applied human↔AI and AI↔AI."],
    ],
    pull: ["There are no bad agents, ", "only bad orchestrators", "."],
    claudeLink: "Read the behavioral contract — CLAUDE.md",
  },
  toolbox: {
    eyebrow: "The toolbox", h: ["Describe what you need. ", "The system matches.", ""],
    intro: "You don’t memorize commands or file paths. Everything below is available the moment setup finishes — say what you want and your session picks the right tool.",
    stats: [
      { n: "24", label: "Commands" }, { n: "31", label: "Agents · 6 bundles" },
      { n: "45", label: "Bundled skills" }, { n: "10", label: "Bundled MCPs" },
    ],
    fleetEyebrow: "The fleet — spawn a co-worker in a named tab",
    fleet: [
      { e: "Sales · Strategy", t: "Pipeline & intelligence", b: "Qualify leads, draft proposals from your catalog, McKinsey-style market reads, company deep dives.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finance · Legal · Eng", t: "The back office that never queues", b: "Bookkeeping to contract review; discovery to shipping — plus the builder that extends the AIOS itself.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Communication · Personal", t: "Your voice, multiplied", b: "Across every channel and deck — and the bundle that works on you, not just for you.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Browse the 6 bundles", "See all 24 commands", "45 skills", "10 MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capabilities that ", "load themselves", "."],
    intro: "45 skills auto-load — describe the work and the right one wakes. 10 MCP servers ship vendored in the vault: local over remote, they authenticate independently of your AI account and survive every switch.",
    cards: [
      { e: "Skills — four source folders", b: "AIOS-built (17) · Anthropic vendored (11) · Superpowers vendored (14) · yours under custom/. Coding patterns, design, documents, Obsidian-native, planning, compliance — plus skill-creator: the system extends itself." },
      { e: "Connectors — your real stack", b: "Google Workspace · Slack · GitHub · Atlassian · NotebookLM · Stitch · Playwright · Nano Banana · PDF Generator · Spotify DJ. Plus the hooks: real clock in every prompt, ritual pre-loaders, any-file-to-markdown, multi-account autopilot." },
    ],
  },
  rhythm: {
    eyebrow: "The rhythm", h: ["The rituals are ", "load-bearing", "."],
    body: "The daily commands aren’t quick-start sugar — they’re the system’s nervous system. They route session insights into observed context (so the AI actually gets smarter), close the carry-loop (so nothing falls through), and surface drift before it becomes invisible.",
    pull: ["This is what raises the bar between those who only use AI — and those who let their AI ", "learn and compound", "."],
    cards: [
      { e: "Morning", t: "/aios:today", b: "A grounded daily plan from your full vault context — calendar, tasks, open threads, priorities." },
      { e: "Per session", t: "/aios:close-session", b: "Lightweight capture when a focused work session ends — bridges the work back to the vault." },
      { e: "Evening", t: "/aios:close-day", b: "What shipped, what grew, what carries forward — routed to projects and observed context." },
    ],
  },
  projects: {
    eyebrow: "Projects", h: ["The vault tells the why. ", "The repo tells the how.", ""],
    introPre: "Every project is a dashboard note with a ", introBold: "Current State table",
    introPost: " — the router that wires strategy in the vault to execution wherever the work actually lives.",
    cmt1: "# strategy — who, why, what’s next", cmt2: "# the router — type, paths, stack, status",
    cmt3: "# Type: Coding → go to the repo", cmt4: "# execution rules",
    outro: "Two layers stay active at once — vault context (strategic) + project context (execution). Every coding project Claude scaffolds is born with its own CLAUDE.md, so any teammate, human or AI, lands oriented.",
  },
  glass: {
    eyebrow: "Glass", h: ["The graphical ", "front door", "."],
    bodyBold: "AIOS Glass", bodyRest: " runs inside VS Code and Google Antigravity: slash commands become buttons, arguments become forms, spawn becomes a click. Non-developers operate their full AIOS without ever typing a command.",
    pullAccent: "Glass, not engine.", pullRest: " It surfaces and triggers what the framework already does — never reimplements. It reads the framework’s own files at runtime, so every /aios:update shows up automatically.",
    cards: [
      { e: "Home + calendar", b: "Live dashboard, month grid, rituals one click away." },
      { e: "Agents + capabilities", b: "Fleet browser with a spawn flow; skills, MCPs, and plugins discovered live." },
      { e: "Spaces + onboarding", b: "Company & collaborate as forms; an eight-step guided walkthrough on first run." },
    ],
  },
  workspaces: {
    eyebrow: "Shared workspaces", h: ["One prompt onboards ", "your whole team", "."],
    intro: "The AIOS is multiplayer by architecture, not afterthought — two commands cover the two shapes of working with others.",
    cards: [
      { e: "/aios:company", t: "Mount a venture's brain", b: "Positioning, personas, pricing, culture, design, brand — plus the agents, plugins, and templates your team has built. A teammate runs --mount {repo-url} and their Claude inherits all of it." },
      { e: "/aios:collaborate", t: "Share a space with anyone", b: "Storage is a plugin: Drive for non-coders, GitHub for code-adjacent work, local for testing. Shared projects flow into your daily plan like everything else." },
    ],
    caption: "Build the company brain once — every teammate’s session inherits it in one mount.",
    pull: ["Don’t move information to authority. ", "Move authority to information.", ""],
  },
  trust: {
    eyebrow: "Trust & control", h: ["All the leverage of agents — ", "without losing control", "."],
    intentBold: "INTENT.md", intentRest: " is where judgment lives — what runs autonomously, what needs you. It starts cautious and earns its way up, exactly like trust with a new hire.",
    trustPull: ["Trust = ", "Speed ÷ Cost", "."],
    auditBody: "And the AIOS is built to be audited, not believed. Before anything runs, you can read every line it will execute — it’s all plain markdown in a public repo.",
    facts: [
      { t: "No backend. No telemetry.", b: "There is no AIOS server. Nothing phones home, nothing is collected, no account is created. The framework is files on your machine — that’s the whole architecture." },
      { t: "Your vault never leaves your control", b: "The framework repo is public; your vault is a separate, private space it scaffolds for you. It syncs only where you choose — your own private Git remote, or nowhere." },
      { t: "Consent at every step", b: "Setup is a guided conversation, not a script: each install is proposed before it happens, and Claude Code’s own permission system gates every command." },
      { t: "Auditable before it runs", b: "SETUP.md, CLAUDE.md, every command and agent — readable end-to-end before you type the first line. Updates are tiered; your personal files are never touched." },
    ],
    receiptsBold: "Running every day for Senior Executives.",
    receiptsRest: " Non-technical operators onboard in about fifteen minutes; teams share one substrate and context flows personally or cross-company as needed; a creative agency adopted it in a week. It’s open source, GPL-2.0 — fork it, read it, own it.",
  },
  containment: {
    eyebrow: "Containment", h: ["Autonomy needs ", "walls", "."],
    body1Pre: "Want agents working 24/7 — overnight shifts, scheduled crons, work continuing while you travel? A prompt is not a boundary. The ", body1Bold: "Fortress",
    body1Post: " is a two-machine architecture: a primary MacBook drives day-to-day, an always-on Mac mini hosts the autonomous fleet — firewalled so agents can act without exposing your credentials, networks, or sensitive systems.",
    caption: "Same Wi-Fi — but the mini is walled off at the OS level. Results push out via git; management flows in via SSH. The mini never reaches into the main.",
    body2: "Six defensive layers — network isolation, ecosystem lockdown, SSH hardening, graduated permission gates, one-way data flow, recovery — keep the worker on the right side of the fence. Total cost of a 24/7 fleet: a ~$600 Mac mini once, ~$25/month running.",
    closingPull: ["Autonomy is the engine; ", "maximum creative freedom", " is the destination — trusted agents do the work, you do what only you can."],
    link: "Read the full architecture — FORTRESS.md",
  },
  manual: {
    eyebrow: "The manual", h: ["The whole system, ", "one document", "."],
    body: "Eighteen sections — from first principles to 24/7 containment. The design language, the architecture, the fleet, the rituals and the trust contract, in one branded artifact. This very site is its web-native sibling. Read it online, or take the PDF into your next meeting.",
    readBtn: "Read the manual →", downloadBtn: "Download PDF",
    coverSub: "18 sections — first principles to the one-page map",
  },
  getStarted: {
    eyebrow: "Get started", h: ["Running in ", "30 seconds", "."],
    prompt: "Have Claude Code installed? Open any terminal and say:",
    codeComment: "# the entire setup, in one line",
    consent: "~10 min guided setup · ~20 min cold-start interview · every step asks your consent.",
    steps: [
      { e: "Step 1 · ~10 min", t: "Claude-driven setup", b: "Claude reads SETUP.md, clones the framework, installs MCPs, configures your private vault, and walks every choice." },
      { e: "Step 2 · ~20 min", t: "Cold-start interview", b: "/aios:cold-start-interview walks identity, declared context, the INTENT.md trust contract, bundles, and your first daily plan." },
      { e: "Day 1 onward", t: "The rhythm", b: "/aios:today morning · /aios:close-day evening. That’s it. The system compounds from there." },
    ],
    setupBtn: "Full setup guide ↗", prereqBtn: "Don’t have Claude Code yet? Prerequisites →",
  },
  back: {
    h: ["Not zero people. ", "Compounded people.", ""],
    lede: "This isn’t a productivity hack. It’s compounding self-awareness — an operating system that actually remembers, and a team that gets better every session.",
  },
  footer: {
    tagline: "Amplify yourself — with AI co-workers.", license: "Open source. GPL-2.0-or-later.",
    repo: "Repository", narrative: "Narrative", forAi: "For AI agents",
    amplifier: "The Amplifier: AIOS", agenticCulture: "The Agentic Culture", manualLink: "Operating Manual",
    copyright: "© 2026 The AIOS · Built with Claude on Claude Code.",
  },
  meta: {
    title: "The AIOS — AI as a team, not a tool",
    description: "The AI Operating System. Turn AI into a team of co-workers, governed by your intent, compounding every session. Open source, GPL-2.0. No backend, no telemetry — auditable before it runs.",
  },
};

const es: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["Qué", "Por qué", "Cómo", "Dónde", "Configurar", "Manual"][i] })),
  why: {
    eyebrow: "Por qué ahora",
    h: ["La IA se está volviendo mejor que nosotros en ", "casi todo", "."],
    lead: "Este es el momento de pasar de hacedor a orquestador — de dejar de competir con las máquinas y empezar a dirigirlas. Quienes prosperen no serán los que se resistan a la IA; serán los que aprendieron a dirigir un equipo de ella.",
    pull: ["La verticalidad muere. ", "La horizontalidad", " nace — un humano dirige muchos agentes."],
    diLabel: "La evidencia",
    diTitle: "The Disruption Index",
    diSub: "Industrias ordenadas por qué tan rápido las está transformando la IA — con las empresas reales que murieron, se reinventaron o surfearon la ola. Explóralo →",
  },
  how: {
    eyebrow: "Cómo funciona",
    h: ["Toda la máquina, ", "en una lectura", "."],
    intro: "Cinco piezas, una idea: tú orquestas sesiones, las sesiones cargan agentes, los agentes invocan skills — y todo lee el suelo que tienen debajo. Aquí está cada pieza, y cómo capitaliza.",
    subModel: "Las tres palabras", subContext: "Contexto que capitaliza", subFleet: "La flota",
    subRhythm: "El ritmo", subProjects: "Proyectos", subTeams: "Equipos",
    subTrust: "Confianza, control y contención", subGlass: "Glass — la interfaz",
  },
  mentalModel: {
    headline: [{ t: "Una " }, { t: "sesión", a: true }, { t: " es el dónde. Un " }, { t: "agente", a: true }, { t: " es el quién. Un " }, { t: "skill", a: true }, { t: " es el cómo." }],
    session: { word: "Sesión", tag: "◧ una terminal — el dónde", t: "Dónde pasa el trabajo", b: "Un hilo vivo — el deal, el deck, el build. Lee tu contexto apenas se abre, corre los rituales, recuerda. Puedes correr muchas a la vez." },
    agent: { word: "Agente", tag: "◆ un archivo .md — el quién", t: "Quién lo hace", b: "Un especialista con nombre que cargas en una sesión — abogado, contador, investigador. Un rol con sus instrucciones y las herramientas que puede tocar. 31 vienen incluidos; lo invocas por su nombre o se elige por afinidad semántica con tu tarea." },
    skill: { word: "Skill", tag: "✦ un .md, sin herramientas — el cómo", t: "Cómo se hace", b: "Experiencia lista para usar que un agente carga apenas la necesita — como Neo conectándose y sabiendo kung fu. Puro saber-hacer, sin herramientas. 45 vienen incluidos; nunca invocas uno — describe el trabajo y el correcto despierta." },
    spawnCmd: "spawn {agente}", spawnBody: "Abre una nueva sesión con la identidad de ese compañero precargada — una pestaña fresca trabajando en paralelo.",
    hatCmd: "/aios:agent {agente}", hatBody: "Se pone el sombrero de ese compañero en tu sesión actual — mismo hilo, nueva mirada especialista.",
    chain: ["Una sesión", "corre ›", "1+ agentes", "cada uno invoca ›", "1+ skills", "=", "un equipo súper-inteligente"],
    chainCaption: "Todo ya viene incluido en tu AIOS — las mejores prácticas frontera y conformes, listas de fábrica.",
  },
  ladder: {
    eyebrow: "Y va subiendo",
    rungs: [
      { e: "Automatización", t: "hazlo más rápido" },
      { e: "→ Amplificación", t: "haz mucho más" },
      { e: "→ Autonomía", t: "actúa por ti, dentro de la confianza" },
    ],
  },
  roadmap: {
    eyebrow: "Hacia dónde va",
    h: ["Las siguientes ", "capas", "."],
    intro: "The AIOS ya corre cada día. Esta es la dirección de avance — cada punto remite a trabajo vivo en el framework, no a un comunicado de prensa.",
    items: [
      { e: "Agnóstico al modelo", t: "La capa, no el modelo", b: "The AIOS es el sustrato; el LLM es intercambiable. Corre Claude (el mejor motor hoy) o cualquier modelo frontera — el mismo contexto, agentes y rituales corren encima, sin cambios." },
      { e: "Motor soberano", t: "Un motor que nadie puede apagar", b: "Modelos de pesos abiertos como GLM-5.2 ya alcanzan calidad casi-frontera que puedes descargar y correr tú mismo — offline, aislado, en tu propio hardware. El respaldo soberano deja de ser un downgrade." },
      { e: "La app de escritorio", t: "AIOS, para quien nunca abre un editor", b: "Una app gratis e instalable — el panel, terminales reales, explorador del vault, rituales a un clic — con visores nativos para Markdown, HTML y PDFs. Lo que sigue: ver video, no solo leer Markdown." },
      { e: "Controles corporativos", t: "Agentes gobernados a escala de empresa", b: "Contexto cifrado en reposo, permisos de lectura por agente, trazas de auditoría e identidad de agente verificable — INTENT como política, aplicada criptográficamente. La capa de administración para correr una flota dentro de una organización." },
      { e: "Marketplace", t: "Instala un bundle en un comando", b: "Bundles de agentes, flujos verticales, el cerebro entero de una empresa — instalados por un marketplace con barrera de confianza: registro → escaneo de inyección → revisión de licencia → QA → instalación con registro de auditoría." },
      { e: "Agenda agéntica", t: "Identidad para agentes y para quienes trabajan con ellos", b: "Un directorio donde tus agentes portan credenciales verificables, así hereda el acceso correcto y puede interactuar de forma segura con los agentes de otras personas en tu nombre." },
    ],
    note: "Dirección, no promesas con fecha — y nunca una función que no podamos ya señalar en el trabajo.",
  },
  setup: {
    eyebrow: "Configúralo",
    h: ["Todo lo que necesitas, ", "y luego una línea", "."],
    intro: "Todo el setup es una conversación guiada — pero aquí está la lista honesta de lo que conviene tener listo, y la única línea que lo arranca.",
    soonLabel: "próximamente",
    step0Label: "Paso 0 — qué necesitas",
    step0: [
      { t: "Obsidian", b: "Aquí vive el vault — Markdown plano, tu segundo cerebro.", href: "https://obsidian.md", pill: "gratis" },
      { t: "Un IDE", b: "Google Antigravity (o VS Code) — donde la extensión AIOS Glass convierte comandos en botones.", href: "https://antigravity.google", pill: "gratis" },
      { t: "AIOS Glass", b: "La puerta de entrada gráfica, instalada desde Open VSX — opcional, pero hace que sea clic, no teclear.", href: "https://open-vsx.org/extension/the-aios/aios-glass", pill: "gratis" },
      { t: "Claude Code", b: "El motor. Instala Claude / Claude Code — esto es lo que realmente corre.", href: "https://claude.com/claude-code", pill: "" },
      { t: "AIOS App", b: "La app independiente — panel, terminales, explorador del vault, rituales a un clic — para quien nunca abre un editor.", soon: true, pill: "gratis" },
    ],
    step1Label: "Paso 1 — corre el AIOS",
    step1Title: "Dile a Claude, en cualquier terminal:",
    step1Body: "Claude lee SETUP.md, clona el framework, instala los MCPs, configura tu vault privado y guía cada decisión — cada paso pide tu consentimiento.",
    step1Comment: "# todo el setup, en una línea",
    learnable: "Todo lo demás se aprende desde adentro — pregúntale a tu AIOS qué puede hacer, y te lo muestra.",
  },
  hero: {
    eyebrowPre: "El sistema operativo de IA", eyebrowAccent: "·", eyebrowPost: "Código abierto",
    h: ["Dale a cada persona un ", "equipo de agentes.", ""],
    leadBold: "IA como un equipo, no una herramienta.",
    leadRest: " The AIOS convierte la IA en compañeros de trabajo — un tú legal, un tú contable, un tú de marketing, un tú de ingeniería. Orquestados por ti, gobernados por tu intención, capitalizando cada día.",
    tagline: "Gana ancho de banda. Vuélvete agéntico.",
    ctaPrimary: "Haz el recorrido ↓", ctaGithub: "Ver en GitHub ↗",
    chips: ["contexto declarado", "contexto observado", "intención", "agentes", "skills", "rituales"],
  },
  what: {
    eyebrow: "Qué es", h: ["Tus compañeros de IA, ", "orquestados", "."],
    body1: "Opera a cada compañero tú mismo y sé su orquestador — o deja que un compañero de IA dirija al resto como tu jefe de gabinete que nunca duerme.",
    body2Pre: "Hecho para cualquiera que navega días saturados de IA — ",
    body2Bold: "altos ejecutivos, builders, fundadores, operadores",
    body2Rest: ". La IA por sí sola multiplica la confusión. The AIOS te da la estructura — prompt, contexto, intención, colaboración, un segundo cerebro — donde emerge la claridad. Aprovechas la IA al máximo sin perder lo que te hace irremplazable, y sin riesgo de IP/PII.",
    principlesEyebrow: "Cuatro principios, todos esenciales",
    principles: [
      { t: "Amplifica la inteligencia, no lo artificial", b: "Humano + IA supera al humano solo o a la IA sola." },
      { t: "Contexto, no prompts", b: "El prompt es lo que casi todos optimizan. El contexto es el sustrato que determina qué pueden lograr esos prompts." },
      { t: "Confianza ganada con el tiempo", b: "La autonomía capitaliza con criterio — como un buen A-player en un equipo real." },
      { t: "Portable, no propietario", b: "The AIOS es la capa; el LLM es intercambiable. Conecta Claude (recomendado), Gemini o tu mejor modelo." },
    ],
    pull: ["Todos están construyendo un AIOS ahora. ", "Por eso construimos The AIOS.", ""],
  },
  journey: {
    eyebrow: "El recorrido", h: ["Tres etapas progresivas, cada una devuelve ", "~10× de apalancamiento", "."],
    intro: "Hacedor → prompter → amplificador → orquestador. El sistema te sube por la escalera — la mayoría empieza abajo y nunca sube. Nada de esto requiere trabajo extra; el contexto se construye como subproducto de tus sesiones.",
    cards: [
      { e: "Semana 1 — Automatiza", t: "Gana velocidad, haz más rápido", b: "Planes diarios, borradores, síntesis. 30 minutos se vuelven 30 segundos." },
      { e: "Semana 2 — Amplifica", t: "Gana ancho de banda, haz más", b: "Los agentes redactan propuestas, escriben con tu voz, investigan mientras duermes. Dejas de ser el cuello de botella." },
      { e: "Mes 1 — Agencia", t: "Gana autonomía, vuélvete agéntico", b: "Los compañeros de IA actúan en tu nombre con criterio, dentro de los límites de confianza que definiste." },
    ],
    h3: ["La verticalidad muere. ", "La horizontalidad", " nace."],
    caption: "El inspector revisa cada borrador — un cuello de botella en descenso. El orquestador dirige un equipo, y verifica.",
    pull: ["Tú piensas. ", "El vault recuerda.", ""],
  },
  arch: {
    eyebrow: "La arquitectura", h: ["Contexto que ", "capitaliza", "."],
    introPre: "La mayoría de los setups traen solo contexto declarado. The AIOS corre un ", introBold: "sistema de contexto en tres capas",
    introPost: " — al cabo de un mes, la IA sabe cosas de ti que no están en ningún archivo que escribiste. Un suelo vacío produce una respuesta genérica por brillante que sea el lector; el vault es el suelo enriquecido que cada agente lee.",
    layers: [
      { e: "Capa 1 — Declarado", t: "Lo escribes tú", b: "Identidad, voz, estilo de trabajo, negocio, expectativas de rol. Lo que le dices explícitamente a la IA sobre ti." },
      { e: "Capa 2 — Observado", t: "Lo escribe Claude", b: "Patrones, áreas de crecimiento, preferencias, puntos ciegos — observaciones que la IA acumula al trabajar contigo con el tiempo." },
      { e: "Capa 3 — Intención", t: "El contrato de confianza", b: "INTENT.md codifica el criterio, no solo el conocimiento: niveles de autonomía, reglas de tradeoff, disparadores de escalamiento." },
    ],
    timelineEyebrow: "El día uno sabe lo que dijiste · al año, en quién te estás convirtiendo",
    timelineCaption: "No es un truco de productividad. Es autoconciencia que capitaliza.",
    madeOfEyebrow: "De qué está hecho",
    anatomyCaption: "Seis bloques que todo operador comparte — más un modelo de extensión de tres niveles que nunca colisiona: framework, lo tuyo, lo de tu empresa.",
    distinctEyebrow: "Qué lo hace operativamente distinto", distinctTail: "construye personas y agentes",
    distinct: [
      ["Gobernado", "El contrato de confianza INTENT.md controla qué maneja la IA de forma autónoma vs. qué necesita tu revisión."],
      ["Multijugador", "Topologías personal × equipo × empresa. Monta el contexto de una empresa en un prompt; colabora por Drive, GitHub o carpetas locales."],
      ["Agnóstico al sustrato", "El sistema de archivos como contexto, Markdown plano, sin RAG. El almacenamiento es un plugin — los mismos comandos funcionan en cualquier sustrato."],
      ["Autocorrectivo", "Cuando el sistema falla, la regla se escribe de inmediato en antifragile.md — cada falla mejora el sistema."],
      ["Cultura agéntica", "10 principios de colaboración entre inteligencias, sintetizados de 36 libros de liderazgo y trabajo en equipo, aplicados humano↔IA e IA↔IA."],
    ],
    pull: ["No hay agentes malos, ", "solo malos orquestadores", "."],
    claudeLink: "Lee el contrato de comportamiento — CLAUDE.md",
  },
  toolbox: {
    eyebrow: "La caja de herramientas", h: ["Describe lo que necesitas. ", "El sistema lo encuentra.", ""],
    intro: "No memorizas comandos ni rutas de archivos. Todo lo de abajo está disponible apenas termina el setup — di lo que quieres y tu sesión elige la herramienta correcta.",
    stats: [
      { n: "24", label: "Comandos" }, { n: "31", label: "Agentes · 6 bundles" },
      { n: "45", label: "Skills incluidos" }, { n: "10", label: "MCPs incluidos" },
    ],
    fleetEyebrow: "La flota — invoca a un compañero en una pestaña con nombre",
    fleet: [
      { e: "Ventas · Estrategia", t: "Pipeline e inteligencia", b: "Califica leads, redacta propuestas desde tu catálogo, lecturas de mercado estilo McKinsey, análisis profundos de empresas.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finanzas · Legal · Ing", t: "El back office que nunca hace fila", b: "De la contabilidad a la revisión de contratos; del discovery al envío — más el builder que extiende el propio AIOS.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Comunicación · Personal", t: "Tu voz, multiplicada", b: "En cada canal y cada deck — y el bundle que trabaja en ti, no solo para ti.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Explora los 6 bundles", "Ver los 24 comandos", "45 skills", "10 MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capacidades que ", "se cargan solas", "."],
    intro: "45 skills se autocargan — describe el trabajo y el correcto despierta. 10 servidores MCP vienen incluidos en el vault: local sobre remoto, se autentican independientes de tu cuenta de IA y sobreviven cada cambio.",
    cards: [
      { e: "Skills — cuatro carpetas fuente", b: "Hechos por AIOS (17) · vendored de Anthropic (11) · vendored de Superpowers (14) · los tuyos en custom/. Patrones de código, diseño, documentos, Obsidian-native, planeación, compliance — más skill-creator: el sistema se extiende a sí mismo." },
      { e: "Conectores — tu stack real", b: "Google Workspace · Slack · GitHub · Atlassian · NotebookLM · Stitch · Playwright · Nano Banana · PDF Generator · Spotify DJ. Más los hooks: reloj real en cada prompt, precargadores de rituales, cualquier-archivo-a-markdown, autopilot multicuenta." },
    ],
  },
  rhythm: {
    eyebrow: "El ritmo", h: ["Los rituales son ", "estructurales", "."],
    body: "Los comandos diarios no son azúcar de quick-start — son el sistema nervioso del sistema. Enrutan los aprendizajes de cada sesión al contexto observado (para que la IA de verdad se vuelva más lista), cierran el carry-loop (para que nada se caiga) y revelan la deriva antes de que se vuelva invisible.",
    pull: ["Esto es lo que sube la vara entre quienes solo usan IA — y quienes dejan que su IA ", "aprenda y capitalice", "."],
    cards: [
      { e: "Mañana", t: "/aios:today", b: "Un plan diario aterrizado desde todo el contexto de tu vault — calendario, tareas, hilos abiertos, prioridades." },
      { e: "Por sesión", t: "/aios:close-session", b: "Captura ligera cuando termina una sesión de trabajo enfocada — devuelve el trabajo al vault." },
      { e: "Noche", t: "/aios:close-day", b: "Qué se envió, qué creció, qué sigue — enrutado a proyectos y al contexto observado." },
    ],
  },
  projects: {
    eyebrow: "Proyectos", h: ["El vault dice el porqué. ", "El repo dice el cómo.", ""],
    introPre: "Cada proyecto es una nota-dashboard con una ", introBold: "tabla de Estado Actual",
    introPost: " — el router que conecta la estrategia en el vault con la ejecución, donde sea que viva el trabajo.",
    cmt1: "# estrategia — quién, por qué, qué sigue", cmt2: "# el router — tipo, rutas, stack, estado",
    cmt3: "# Tipo: Código → ve al repo", cmt4: "# reglas de ejecución",
    outro: "Dos capas se mantienen activas a la vez — contexto del vault (estratégico) + contexto del proyecto (ejecución). Cada proyecto de código que Claude scaffolda nace con su propio CLAUDE.md, así cualquier compañero, humano o IA, aterriza orientado.",
  },
  glass: {
    eyebrow: "Glass", h: ["La puerta de entrada ", "gráfica", "."],
    bodyBold: "AIOS Glass", bodyRest: " corre dentro de VS Code y Google Antigravity: los slash commands se vuelven botones, los argumentos se vuelven formularios, spawn se vuelve un clic. Los no-desarrolladores operan todo su AIOS sin escribir un solo comando.",
    pullAccent: "Glass, no el motor.", pullRest: " Muestra y dispara lo que el framework ya hace — nunca lo reimplementa. Lee los propios archivos del framework en tiempo de ejecución, así cada /aios:update aparece automáticamente.",
    cards: [
      { e: "Home + calendario", b: "Dashboard vivo, grilla mensual, rituales a un clic." },
      { e: "Agentes + capacidades", b: "Navegador de la flota con flujo de spawn; skills, MCPs y plugins descubiertos en vivo." },
      { e: "Espacios + onboarding", b: "Company y collaborate como formularios; un recorrido guiado de ocho pasos en el primer arranque." },
    ],
  },
  workspaces: {
    eyebrow: "Espacios compartidos", h: ["Un prompt incorpora a ", "todo tu equipo", "."],
    intro: "The AIOS es multijugador por arquitectura, no de añadido — dos comandos cubren las dos formas de trabajar con otros.",
    cards: [
      { e: "/aios:company", t: "Monta el cerebro de una empresa", b: "Posicionamiento, personas, precios, cultura, diseño, marca — más los agentes, plugins y templates que tu equipo construyó. Un compañero corre --mount {repo-url} y su Claude lo hereda todo." },
      { e: "/aios:collaborate", t: "Comparte un espacio con cualquiera", b: "El almacenamiento es un plugin: Drive para no-coders, GitHub para trabajo cercano al código, local para pruebas. Los proyectos compartidos fluyen a tu plan diario como todo lo demás." },
    ],
    caption: "Construye el cerebro de la empresa una vez — la sesión de cada compañero lo hereda en un solo mount.",
    pull: ["No muevas la información hacia la autoridad. ", "Mueve la autoridad hacia la información.", ""],
  },
  trust: {
    eyebrow: "Confianza y control", h: ["Todo el apalancamiento de los agentes — ", "sin perder el control", "."],
    intentBold: "INTENT.md", intentRest: " es donde vive el criterio — qué corre solo, qué te necesita. Empieza cauteloso y se gana su lugar, igual que la confianza con alguien recién contratado.",
    trustPull: ["Confianza = ", "Velocidad ÷ Costo", "."],
    auditBody: "Y The AIOS está hecho para auditarse, no para creerse. Antes de que algo corra, puedes leer cada línea que ejecutará — todo es Markdown plano en un repo público.",
    facts: [
      { t: "Sin backend. Sin telemetría.", b: "No hay servidor de AIOS. Nada llama a casa, nada se recopila, no se crea ninguna cuenta. El framework son archivos en tu máquina — esa es toda la arquitectura." },
      { t: "Tu vault nunca sale de tu control", b: "El repo del framework es público; tu vault es un espacio separado y privado que él te scaffolda. Se sincroniza solo donde tú elijas — tu propio remoto Git privado, o ninguno." },
      { t: "Consentimiento en cada paso", b: "El setup es una conversación guiada, no un script: cada instalación se propone antes de ocurrir, y el propio sistema de permisos de Claude Code controla cada comando." },
      { t: "Auditable antes de correr", b: "SETUP.md, CLAUDE.md, cada comando y agente — legibles de punta a punta antes de que escribas la primera línea. Las actualizaciones son por niveles; tus archivos personales nunca se tocan." },
    ],
    receiptsBold: "Corriendo cada día para altos ejecutivos.",
    receiptsRest: " Operadores no técnicos se incorporan en unos quince minutos; los equipos comparten un sustrato y el contexto fluye personal o entre empresas según haga falta; una agencia creativa lo adoptó en una semana. Es código abierto, GPL-2.0 — bifúrcalo, léelo, hazlo tuyo.",
  },
  containment: {
    eyebrow: "Contención", h: ["La autonomía necesita ", "muros", "."],
    body1Pre: "¿Quieres agentes trabajando 24/7 — turnos nocturnos, crons programados, trabajo que sigue mientras viajas? Un prompt no es un límite. La ", body1Bold: "Fortaleza",
    body1Post: " es una arquitectura de dos máquinas: una MacBook principal lleva el día a día, un Mac mini siempre encendido hospeda la flota autónoma — con firewall para que los agentes actúen sin exponer tus credenciales, redes ni sistemas sensibles.",
    caption: "Misma Wi-Fi — pero el mini está amurallado a nivel del SO. Los resultados salen por git; la gestión entra por SSH. El mini nunca alcanza a la principal.",
    body2: "Seis capas defensivas — aislamiento de red, bloqueo del ecosistema, endurecimiento de SSH, permisos graduados, flujo de datos en un solo sentido, recuperación — mantienen al worker del lado correcto de la valla. Costo total de una flota 24/7: un Mac mini de ~$600 una vez, ~$25/mes de operación.",
    closingPull: ["La autonomía es el motor; ", "la máxima libertad creativa", " es el destino — los agentes de confianza hacen el trabajo, tú haces lo que solo tú puedes."],
    link: "Lee la arquitectura completa — FORTRESS.md",
  },
  manual: {
    eyebrow: "El manual", h: ["Todo el sistema, ", "un solo documento", "."],
    body: "Dieciocho secciones — de los primeros principios a la contención 24/7. El lenguaje de diseño, la arquitectura, la flota, los rituales y el contrato de confianza, en un solo artefacto de marca. Este mismo sitio es su hermano web. Léelo en línea, o llévate el PDF a tu próxima reunión.",
    readBtn: "Lee el manual →", downloadBtn: "Descargar PDF",
    coverSub: "18 secciones — de los primeros principios al mapa de una página",
  },
  getStarted: {
    eyebrow: "Empezar", h: ["Funcionando en ", "30 segundos", "."],
    prompt: "¿Ya tienes Claude Code instalado? Abre cualquier terminal y di:",
    codeComment: "# todo el setup, en una línea",
    consent: "~10 min de setup guiado · ~20 min de entrevista inicial · cada paso pide tu consentimiento.",
    steps: [
      { e: "Paso 1 · ~10 min", t: "Setup dirigido por Claude", b: "Claude lee SETUP.md, clona el framework, instala los MCPs, configura tu vault privado y guía cada decisión." },
      { e: "Paso 2 · ~20 min", t: "Entrevista inicial", b: "/aios:cold-start-interview recorre identidad, contexto declarado, el contrato de confianza INTENT.md, los bundles y tu primer plan diario." },
      { e: "Día 1 en adelante", t: "El ritmo", b: "/aios:today por la mañana · /aios:close-day por la noche. Eso es todo. El sistema capitaliza desde ahí." },
    ],
    setupBtn: "Guía de setup completa ↗", prereqBtn: "¿Aún no tienes Claude Code? Requisitos →",
  },
  back: {
    h: ["No cero personas. ", "Personas capitalizadas.", ""],
    lede: "Esto no es un truco de productividad. Es autoconciencia que capitaliza — un sistema operativo que de verdad recuerda, y un equipo que mejora en cada sesión.",
  },
  footer: {
    tagline: "Amplifícate — con compañeros de IA.", license: "Código abierto. GPL-2.0-or-later.",
    repo: "Repositorio", narrative: "Narrativa", forAi: "Para agentes de IA",
    amplifier: "The Amplifier: AIOS", agenticCulture: "The Agentic Culture", manualLink: "Manual operativo",
    copyright: "© 2026 The AIOS · Construido con Claude en Claude Code.",
  },
  meta: {
    title: "The AIOS — IA como un equipo, no una herramienta",
    description: "El sistema operativo de IA. Convierte la IA en un equipo de compañeros, gobernado por tu intención, capitalizando cada sesión. Código abierto, GPL-2.0. Sin backend, sin telemetría — auditable antes de correr.",
  },
};

const pt: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["O quê", "Por quê", "Como", "Onde", "Configurar", "Manual"][i] })),
  why: {
    eyebrow: "Por que agora",
    h: ["A IA está ficando melhor que nós em ", "quase tudo", "."],
    lead: "Este é o momento de passar de executor a orquestrador — de parar de competir com as máquinas e começar a regê-las. Quem prosperar não serão os que resistirem à IA; serão os que aprenderam a conduzir um time dela.",
    pull: ["A verticalidade morre. ", "A horizontalidade", " nasce — um humano rege muitos agentes."],
    diLabel: "A evidência",
    diTitle: "The Disruption Index",
    diSub: "Indústrias ordenadas por quão rápido a IA as está transformando — com as empresas reais que morreram, se reinventaram ou surfaram a onda. Explore →",
  },
  how: {
    eyebrow: "Como funciona",
    h: ["A máquina inteira, ", "em uma leitura", "."],
    intro: "Cinco peças, uma ideia: você orquestra sessões, as sessões carregam agentes, os agentes chamam skills — e tudo lê o solo embaixo. Aqui está cada peça, e como ela capitaliza.",
    subModel: "As três palavras", subContext: "Contexto que capitaliza", subFleet: "A frota",
    subRhythm: "O ritmo", subProjects: "Projetos", subTeams: "Times",
    subTrust: "Confiança, controle e contenção", subGlass: "Glass — a interface",
  },
  mentalModel: {
    headline: [{ t: "Uma " }, { t: "sessão", a: true }, { t: " é o onde. Um " }, { t: "agente", a: true }, { t: " é o quem. Um " }, { t: "skill", a: true }, { t: " é o como." }],
    session: { word: "Sessão", tag: "◧ um terminal — o onde", t: "Onde o trabalho acontece", b: "Um fio vivo — o deal, o deck, o build. Lê seu contexto assim que abre, roda os rituais, lembra. Você pode rodar várias ao mesmo tempo." },
    agent: { word: "Agente", tag: "◆ um arquivo .md — o quem", t: "Quem faz", b: "Um especialista com nome que você carrega numa sessão — advogado, contador, pesquisador. Um papel com suas instruções e as ferramentas que pode tocar. 31 vêm inclusos; você o invoca pelo nome ou ele é escolhido por afinidade semântica com sua tarefa." },
    skill: { word: "Skill", tag: "✦ um .md, sem ferramentas — o como", t: "Como se faz", b: "Expertise pronta que um agente carrega no instante em que precisa — como Neo plugando e já sabendo kung fu. Puro saber-fazer, sem ferramentas. 45 vêm inclusos; você nunca invoca um — descreva o trabalho e o certo desperta." },
    spawnCmd: "spawn {agente}", spawnBody: "Abre uma nova sessão com a identidade desse colega pré-carregada — uma aba nova trabalhando em paralelo.",
    hatCmd: "/aios:agent {agente}", hatBody: "Veste o chapéu desse colega na sua sessão atual — mesmo fio, nova lente especialista.",
    chain: ["Uma sessão", "roda ›", "1+ agentes", "cada um chama ›", "1+ skills", "=", "um time super-inteligente"],
    chainCaption: "Tudo já vem embutido no seu AIOS — as melhores práticas de fronteira e em conformidade, prontas de fábrica.",
  },
  ladder: {
    eyebrow: "E ela sobe",
    rungs: [
      { e: "Automação", t: "faça mais rápido" },
      { e: "→ Amplificação", t: "faça muito mais" },
      { e: "→ Autonomia", t: "age por você, dentro da confiança" },
    ],
  },
  roadmap: {
    eyebrow: "Para onde vai",
    h: ["As próximas ", "camadas", "."],
    intro: "The AIOS já roda todos os dias. Esta é a direção de avanço — cada item remete a trabalho vivo no framework, não a um press release.",
    items: [
      { e: "Agnóstico ao modelo", t: "A camada, não o modelo", b: "The AIOS é o substrato; o LLM é intercambiável. Rode Claude (o melhor motor hoje) ou qualquer modelo de fronteira — o mesmo contexto, agentes e rituais rodam por cima, sem mudança." },
      { e: "Motor soberano", t: "Um motor que ninguém pode desligar", b: "Modelos de pesos abertos como o GLM-5.2 já alcançam qualidade quase-fronteira que você pode baixar e rodar sozinho — offline, isolado, no seu próprio hardware. O fallback soberano deixa de ser um downgrade." },
      { e: "O app de desktop", t: "AIOS, para quem nunca abre um editor", b: "Um app grátis e instalável — o painel, terminais reais, explorador do vault, rituais a um clique — com visualizadores nativos para Markdown, HTML e PDFs. O próximo passo: assistir vídeo, não só ler Markdown." },
      { e: "Controles corporativos", t: "Agentes governados em escala de empresa", b: "Contexto criptografado em repouso, permissões de leitura por agente, trilhas de auditoria e identidade de agente verificável — INTENT como política, aplicada criptograficamente. A camada de administração para rodar uma frota dentro de uma organização." },
      { e: "Marketplace", t: "Instale um bundle em um comando", b: "Bundles de agentes, fluxos verticais, o cérebro inteiro de uma empresa — instalados por um marketplace com barreira de confiança: registro → varredura de injeção → checagem de licença → QA → instalação com log de auditoria." },
      { e: "Agenda agêntica", t: "Identidade para agentes e para quem trabalha com eles", b: "Um diretório onde seus agentes carregam credenciais verificáveis, então ele herda o acesso certo e pode interagir com segurança com os agentes de outras pessoas em seu nome." },
    ],
    note: "Direção, não promessas com data — e nunca uma função que não possamos já apontar no trabalho.",
  },
  setup: {
    eyebrow: "Configure",
    h: ["Tudo o que você precisa, ", "e então uma linha", "."],
    intro: "Todo o setup é uma conversa guiada — mas aqui está a lista honesta do que ter à mão, e a única linha que o inicia.",
    soonLabel: "em breve",
    step0Label: "Passo 0 — o que você precisa",
    step0: [
      { t: "Obsidian", b: "Aqui mora o vault — Markdown puro, seu segundo cérebro.", href: "https://obsidian.md", pill: "grátis" },
      { t: "Um IDE", b: "Google Antigravity (ou VS Code) — onde a extensão AIOS Glass transforma comandos em botões.", href: "https://antigravity.google", pill: "grátis" },
      { t: "AIOS Glass", b: "A porta de entrada gráfica, instalada pelo Open VSX — opcional, mas torna tudo clique, não digitação.", href: "https://open-vsx.org/extension/the-aios/aios-glass", pill: "grátis" },
      { t: "Claude Code", b: "O motor. Instale Claude / Claude Code — é isto que de fato roda.", href: "https://claude.com/claude-code", pill: "" },
      { t: "AIOS App", b: "O app independente — painel, terminais, explorador do vault, rituais a um clique — para quem nunca abre um editor.", soon: true, pill: "grátis" },
    ],
    step1Label: "Passo 1 — rode o AIOS",
    step1Title: "Diga ao Claude, em qualquer terminal:",
    step1Body: "O Claude lê o SETUP.md, clona o framework, instala os MCPs, configura seu vault privado e guia cada decisão — cada passo pede seu consentimento.",
    step1Comment: "# o setup inteiro, em uma linha",
    learnable: "Todo o resto se aprende por dentro — pergunte ao seu AIOS o que ele pode fazer, e ele te mostra.",
  },
  hero: {
    eyebrowPre: "O sistema operacional de IA", eyebrowAccent: "·", eyebrowPost: "Código aberto",
    h: ["Dando a cada pessoa um ", "time de agentes.", ""],
    leadBold: "IA como um time, não uma ferramenta.",
    leadRest: " The AIOS transforma a IA em colegas de trabalho — um você jurídico, um você contador, um você de marketing, um você de engenharia. Orquestrados por você, governados pela sua intenção, capitalizando todos os dias.",
    tagline: "Ganhe banda. Vá agêntico.",
    ctaPrimary: "Faça o tour ↓", ctaGithub: "Ver no GitHub ↗",
    chips: ["contexto declarado", "contexto observado", "intenção", "agentes", "skills", "rituais"],
  },
  what: {
    eyebrow: "O que é", h: ["Seus colegas de IA, ", "orquestrados", "."],
    body1: "Opere cada colega você mesmo e seja o orquestrador deles — ou deixe um colega de IA conduzir o resto como seu chefe de gabinete que nunca dorme.",
    body2Pre: "Feito para qualquer um que navega dias sobrecarregados de IA — ",
    body2Bold: "altos executivos, builders, fundadores, operadores",
    body2Rest: ". A IA sozinha multiplica a confusão. The AIOS te dá a estrutura — prompt, contexto, intenção, colaboração, um segundo cérebro — onde a clareza emerge. Você aproveita a IA ao máximo sem perder o que te torna insubstituível, e sem risco de IP/PII.",
    principlesEyebrow: "Quatro princípios, todos essenciais",
    principles: [
      { t: "Amplifique a inteligência, não o artificial", b: "Humano + IA supera o humano sozinho ou a IA sozinha." },
      { t: "Contexto, não prompts", b: "O prompt é o que quase todos otimizam. O contexto é o substrato que determina o que esses prompts conseguem fazer." },
      { t: "Confiança conquistada com o tempo", b: "A autonomia capitaliza com critério — como um bom A-player num time de verdade." },
      { t: "Portável, não proprietário", b: "The AIOS é a camada; o LLM é intercambiável. Conecte Claude (recomendado), Gemini ou seu melhor modelo." },
    ],
    pull: ["Todo mundo está construindo um AIOS agora. ", "Por isso construímos The AIOS.", ""],
  },
  journey: {
    eyebrow: "A jornada", h: ["Três estágios progressivos, cada um devolve ", "~10× de alavancagem", "."],
    intro: "Executor → prompter → amplificador → orquestrador. O sistema te leva escada acima — a maioria começa embaixo e nunca sobe. Nada disso exige trabalho extra; o contexto se constrói como subproduto das suas sessões.",
    cards: [
      { e: "Semana 1 — Automatize", t: "Ganhe velocidade, faça mais rápido", b: "Planos diários, rascunhos, sínteses. 30 minutos viram 30 segundos." },
      { e: "Semana 2 — Amplifique", t: "Ganhe banda, faça mais", b: "Os agentes redigem propostas, escrevem na sua voz, pesquisam enquanto você dorme. Você deixa de ser o gargalo." },
      { e: "Mês 1 — Agência", t: "Ganhe autonomia, vá agêntico", b: "Os colegas de IA agem em seu nome com critério, dentro dos limites de confiança que você definiu." },
    ],
    h3: ["A verticalidade morre. ", "A horizontalidade", " nasce."],
    caption: "O inspetor revisa cada rascunho — um gargalo em queda. O orquestrador rege um time, e verifica.",
    pull: ["Você pensa. ", "O vault lembra.", ""],
  },
  arch: {
    eyebrow: "A arquitetura", h: ["Contexto que ", "capitaliza", "."],
    introPre: "A maioria dos setups traz só contexto declarado. The AIOS roda um ", introBold: "sistema de contexto em três camadas",
    introPost: " — depois de um mês, a IA sabe coisas sobre você que não estão em nenhum arquivo que você escreveu. Um solo vazio produz uma resposta genérica por mais brilhante que seja o leitor; o vault é o solo enriquecido que cada agente lê.",
    layers: [
      { e: "Camada 1 — Declarado", t: "Você escreve", b: "Identidade, voz, estilo de trabalho, negócio, expectativas do papel. O que você diz explicitamente à IA sobre você." },
      { e: "Camada 2 — Observado", t: "Claude escreve", b: "Padrões, pontos de crescimento, preferências, pontos cegos — observações que a IA acumula trabalhando com você ao longo do tempo." },
      { e: "Camada 3 — Intenção", t: "O contrato de confiança", b: "O INTENT.md codifica critério, não só conhecimento: níveis de autonomia, regras de tradeoff, gatilhos de escalonamento." },
    ],
    timelineEyebrow: "No dia um sabe o que você disse · em um ano, quem você está se tornando",
    timelineCaption: "Não é um truque de produtividade. É autoconsciência que capitaliza.",
    madeOfEyebrow: "Do que é feito",
    anatomyCaption: "Seis blocos que todo operador compartilha — mais um modelo de extensão de três níveis que nunca colide: framework, o seu, o da sua empresa.",
    distinctEyebrow: "O que o torna operacionalmente distinto", distinctTail: "ele eleva pessoas e agentes",
    distinct: [
      ["Governado", "O contrato de confiança INTENT.md controla o que a IA cuida de forma autônoma vs. o que precisa da sua revisão."],
      ["Multijogador", "Topologias pessoal × time × empresa. Monte o contexto de uma empresa em um prompt; colabore por Drive, GitHub ou pastas locais."],
      ["Agnóstico ao substrato", "Sistema de arquivos como contexto, Markdown puro, sem RAG. O armazenamento é um plugin — os mesmos comandos funcionam em qualquer substrato."],
      ["Autocorretivo", "Quando o sistema quebra, a regra é escrita na hora em antifragile.md — cada quebra aprimora o sistema."],
      ["Cultura agêntica", "10 princípios de colaboração entre inteligências, sintetizados de 36 livros sobre liderança e trabalho em equipe, aplicados humano↔IA e IA↔IA."],
    ],
    pull: ["Não existem agentes ruins, ", "só maus orquestradores", "."],
    claudeLink: "Leia o contrato de comportamento — CLAUDE.md",
  },
  toolbox: {
    eyebrow: "A caixa de ferramentas", h: ["Descreva o que precisa. ", "O sistema encontra.", ""],
    intro: "Você não decora comandos nem caminhos de arquivos. Tudo abaixo está disponível assim que o setup termina — diga o que quer e sua sessão escolhe a ferramenta certa.",
    stats: [
      { n: "24", label: "Comandos" }, { n: "31", label: "Agentes · 6 bundles" },
      { n: "45", label: "Skills inclusos" }, { n: "10", label: "MCPs inclusos" },
    ],
    fleetEyebrow: "A frota — invoque um colega numa aba com nome",
    fleet: [
      { e: "Vendas · Estratégia", t: "Pipeline e inteligência", b: "Qualifique leads, redija propostas a partir do seu catálogo, leituras de mercado estilo McKinsey, análises profundas de empresas.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finanças · Jurídico · Eng", t: "O back office que nunca faz fila", b: "Da contabilidade à revisão de contratos; do discovery ao envio — mais o builder que estende o próprio AIOS.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Comunicação · Pessoal", t: "Sua voz, multiplicada", b: "Em cada canal e cada deck — e o bundle que trabalha em você, não só para você.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Explore os 6 bundles", "Ver os 24 comandos", "45 skills", "10 MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capacidades que ", "se carregam sozinhas", "."],
    intro: "45 skills se autocarregam — descreva o trabalho e a certa desperta. 10 servidores MCP vêm inclusos no vault: local sobre remoto, autenticam-se independentes da sua conta de IA e sobrevivem a cada troca.",
    cards: [
      { e: "Skills — quatro pastas de origem", b: "Feitas pelo AIOS (17) · vendored da Anthropic (11) · vendored do Superpowers (14) · as suas em custom/. Padrões de código, design, documentos, Obsidian-native, planejamento, compliance — mais skill-creator: o sistema se estende sozinho." },
      { e: "Conectores — seu stack de verdade", b: "Google Workspace · Slack · GitHub · Atlassian · NotebookLM · Stitch · Playwright · Nano Banana · PDF Generator · Spotify DJ. Mais os hooks: relógio real em cada prompt, pré-carregadores de rituais, qualquer-arquivo-para-markdown, autopilot multiconta." },
    ],
  },
  rhythm: {
    eyebrow: "O ritmo", h: ["Os rituais são ", "estruturais", "."],
    body: "Os comandos diários não são açúcar de quick-start — são o sistema nervoso do sistema. Eles roteiam os aprendizados de cada sessão para o contexto observado (para a IA realmente ficar mais esperta), fecham o carry-loop (para nada se perder) e revelam o desvio antes que ele fique invisível.",
    pull: ["É isto que eleva o nível entre quem só usa IA — e quem deixa sua IA ", "aprender e capitalizar", "."],
    cards: [
      { e: "Manhã", t: "/aios:today", b: "Um plano diário aterrado a partir de todo o contexto do seu vault — agenda, tarefas, threads abertas, prioridades." },
      { e: "Por sessão", t: "/aios:close-session", b: "Captura leve quando uma sessão de trabalho focada termina — devolve o trabalho ao vault." },
      { e: "Noite", t: "/aios:close-day", b: "O que foi enviado, o que cresceu, o que continua — roteado para projetos e para o contexto observado." },
    ],
  },
  projects: {
    eyebrow: "Projetos", h: ["O vault diz o porquê. ", "O repo diz o como.", ""],
    introPre: "Cada projeto é uma nota-dashboard com uma ", introBold: "tabela de Estado Atual",
    introPost: " — o roteador que liga a estratégia no vault à execução, onde quer que o trabalho realmente viva.",
    cmt1: "# estratégia — quem, por quê, o que vem", cmt2: "# o roteador — tipo, caminhos, stack, status",
    cmt3: "# Tipo: Código → vá ao repo", cmt4: "# regras de execução",
    outro: "Duas camadas ficam ativas ao mesmo tempo — contexto do vault (estratégico) + contexto do projeto (execução). Todo projeto de código que o Claude faz scaffold nasce com seu próprio CLAUDE.md, então qualquer colega, humano ou IA, chega orientado.",
  },
  glass: {
    eyebrow: "Glass", h: ["A porta de entrada ", "gráfica", "."],
    bodyBold: "AIOS Glass", bodyRest: " roda dentro do VS Code e do Google Antigravity: os slash commands viram botões, os argumentos viram formulários, spawn vira um clique. Não-desenvolvedores operam todo o seu AIOS sem digitar um único comando.",
    pullAccent: "Glass, não o motor.", pullRest: " Ele expõe e dispara o que o framework já faz — nunca reimplementa. Lê os próprios arquivos do framework em tempo de execução, então cada /aios:update aparece automaticamente.",
    cards: [
      { e: "Home + calendário", b: "Dashboard vivo, grade mensal, rituais a um clique." },
      { e: "Agentes + capacidades", b: "Navegador da frota com fluxo de spawn; skills, MCPs e plugins descobertos ao vivo." },
      { e: "Espaços + onboarding", b: "Company e collaborate como formulários; um passo a passo guiado de oito etapas na primeira execução." },
    ],
  },
  workspaces: {
    eyebrow: "Espaços compartilhados", h: ["Um prompt integra ", "o time inteiro", "."],
    intro: "The AIOS é multijogador por arquitetura, não por acréscimo — dois comandos cobrem as duas formas de trabalhar com outras pessoas.",
    cards: [
      { e: "/aios:company", t: "Monte o cérebro de uma empresa", b: "Posicionamento, personas, preços, cultura, design, marca — mais os agentes, plugins e templates que seu time construiu. Um colega roda --mount {repo-url} e o Claude dele herda tudo." },
      { e: "/aios:collaborate", t: "Compartilhe um espaço com qualquer um", b: "O armazenamento é um plugin: Drive para não-coders, GitHub para trabalho próximo do código, local para testes. Projetos compartilhados fluem para o seu plano diário como tudo mais." },
    ],
    caption: "Construa o cérebro da empresa uma vez — a sessão de cada colega o herda em um único mount.",
    pull: ["Não mova a informação para a autoridade. ", "Mova a autoridade para a informação.", ""],
  },
  trust: {
    eyebrow: "Confiança e controle", h: ["Toda a alavancagem dos agentes — ", "sem perder o controle", "."],
    intentBold: "INTENT.md", intentRest: " é onde mora o critério — o que roda sozinho, o que precisa de você. Começa cauteloso e conquista seu espaço, igual à confiança com alguém recém-contratado.",
    trustPull: ["Confiança = ", "Velocidade ÷ Custo", "."],
    auditBody: "E The AIOS é feito para ser auditado, não acreditado. Antes de qualquer coisa rodar, você pode ler cada linha que ele vai executar — é tudo Markdown puro num repo público.",
    facts: [
      { t: "Sem backend. Sem telemetria.", b: "Não há servidor do AIOS. Nada liga para casa, nada é coletado, nenhuma conta é criada. O framework são arquivos na sua máquina — essa é toda a arquitetura." },
      { t: "Seu vault nunca sai do seu controle", b: "O repo do framework é público; seu vault é um espaço separado e privado que ele faz scaffold para você. Sincroniza só onde você escolher — seu próprio remoto Git privado, ou nenhum." },
      { t: "Consentimento em cada passo", b: "O setup é uma conversa guiada, não um script: cada instalação é proposta antes de acontecer, e o próprio sistema de permissões do Claude Code controla cada comando." },
      { t: "Auditável antes de rodar", b: "SETUP.md, CLAUDE.md, cada comando e agente — legíveis de ponta a ponta antes de você digitar a primeira linha. As atualizações são em camadas; seus arquivos pessoais nunca são tocados." },
    ],
    receiptsBold: "Rodando todos os dias para altos executivos.",
    receiptsRest: " Operadores não técnicos se integram em cerca de quinze minutos; times compartilham um substrato e o contexto flui pessoal ou entre empresas conforme necessário; uma agência criativa o adotou em uma semana. É código aberto, GPL-2.0 — faça fork, leia, torne-o seu.",
  },
  containment: {
    eyebrow: "Contenção", h: ["A autonomia precisa de ", "muros", "."],
    body1Pre: "Quer agentes trabalhando 24/7 — turnos noturnos, crons agendados, trabalho que segue enquanto você viaja? Um prompt não é um limite. A ", body1Bold: "Fortaleza",
    body1Post: " é uma arquitetura de duas máquinas: um MacBook principal toca o dia a dia, um Mac mini sempre ligado hospeda a frota autônoma — com firewall para os agentes agirem sem expor suas credenciais, redes ou sistemas sensíveis.",
    caption: "Mesmo Wi-Fi — mas o mini está isolado no nível do SO. Os resultados saem por git; a gestão entra por SSH. O mini nunca alcança o principal.",
    body2: "Seis camadas defensivas — isolamento de rede, bloqueio do ecossistema, hardening de SSH, permissões graduais, fluxo de dados num só sentido, recuperação — mantêm o worker do lado certo da cerca. Custo total de uma frota 24/7: um Mac mini de ~US$600 uma vez, ~US$25/mês de operação.",
    closingPull: ["A autonomia é o motor; ", "a máxima liberdade criativa", " é o destino — os agentes confiáveis fazem o trabalho, você faz o que só você pode."],
    link: "Leia a arquitetura completa — FORTRESS.md",
  },
  manual: {
    eyebrow: "O manual", h: ["O sistema inteiro, ", "um só documento", "."],
    body: "Dezoito seções — dos primeiros princípios à contenção 24/7. A linguagem de design, a arquitetura, a frota, os rituais e o contrato de confiança, em um só artefato de marca. Este próprio site é o irmão web dele. Leia online, ou leve o PDF para a sua próxima reunião.",
    readBtn: "Leia o manual →", downloadBtn: "Baixar PDF",
    coverSub: "18 seções — dos primeiros princípios ao mapa de uma página",
  },
  getStarted: {
    eyebrow: "Começar", h: ["Rodando em ", "30 segundos", "."],
    prompt: "Já tem o Claude Code instalado? Abra qualquer terminal e diga:",
    codeComment: "# o setup inteiro, em uma linha",
    consent: "~10 min de setup guiado · ~20 min de entrevista inicial · cada passo pede seu consentimento.",
    steps: [
      { e: "Passo 1 · ~10 min", t: "Setup conduzido pelo Claude", b: "O Claude lê o SETUP.md, clona o framework, instala os MCPs, configura seu vault privado e guia cada decisão." },
      { e: "Passo 2 · ~20 min", t: "Entrevista inicial", b: "/aios:cold-start-interview percorre identidade, contexto declarado, o contrato de confiança INTENT.md, os bundles e seu primeiro plano diário." },
      { e: "Dia 1 em diante", t: "O ritmo", b: "/aios:today de manhã · /aios:close-day à noite. É isso. O sistema capitaliza a partir daí." },
    ],
    setupBtn: "Guia de setup completo ↗", prereqBtn: "Ainda não tem o Claude Code? Pré-requisitos →",
  },
  back: {
    h: ["Não zero pessoas. ", "Pessoas capitalizadas.", ""],
    lede: "Isto não é um truque de produtividade. É autoconsciência que capitaliza — um sistema operacional que de fato lembra, e um time que melhora a cada sessão.",
  },
  footer: {
    tagline: "Amplifique-se — com colegas de IA.", license: "Código aberto. GPL-2.0-or-later.",
    repo: "Repositório", narrative: "Narrativa", forAi: "Para agentes de IA",
    amplifier: "The Amplifier: AIOS", agenticCulture: "The Agentic Culture", manualLink: "Manual operacional",
    copyright: "© 2026 The AIOS · Construído com Claude no Claude Code.",
  },
  meta: {
    title: "The AIOS — IA como um time, não uma ferramenta",
    description: "O sistema operacional de IA. Transforme a IA num time de colegas, governado pela sua intenção, capitalizando a cada sessão. Código aberto, GPL-2.0. Sem backend, sem telemetria — auditável antes de rodar.",
  },
};

export const CONTENT: Record<Locale, Content> = { en, es, pt };
