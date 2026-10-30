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
/* Download URLs are NOT written out here. A platform-specific link in per-locale prose is how
   the site ended up with twelve copies of one .dmg URL — and how a Linux button would quietly
   keep serving a mac file in Portuguese. Announcement and roadmap CTAs point at the Releases
   page (correct on every OS); the actual per-platform choice is made by DownloadCTA at runtime. */
import { RELEASES_PAGE } from "@/downloads";
import type { RoleId } from "@/data/roles";

/* Two outside links the landing blocks cite. McKinsey is the source of the enterprise route
   in "a different way in" — cited, never mocked. The Discord is where people building theirs meet. */
const MCKINSEY = "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-ai-operating-system-a-new-way-for-ceos-to-run-the-enterprise";
const DISCORD = "https://discord.gg/f3rdxBTDMG";

type H = [string, string, string]; // [pre, accent, post]
type CardT = { e?: string; t?: string; b: string; mono?: string };
type Row = [string, string];

/* Section 00 · Your AIOS — one story per role, told in six steps. The role ids, the tab
   order and the free-text keyword map are machine-side and live in src/data/roles.ts;
   everything a reader sees is here, per locale. Agent names (`lawyer`, `kdp-publisher`)
   are technical surfaces and stay English in every locale, like command names. */
export type RoleStory = {
  id: RoleId;
  label: string;        // the switcher entry, and the suggestion in the hero field
  you: string;          // "an entrepreneur" — used in sentences
  /* 01 · the pain: a title, the big typographic line as a [pre, accent, post] triple, one sentence */
  painTitle: string; painBig: H; pain: string;
  /* 02 · your day: a title, one sentence, three beats [when, title, one line] */
  dayTitle: string; dayLede: string; day: [string, string, string][];   // dayLede is kept for the long form, unused on the track
  caps: [string, string, string];   // the loop's captions at morning · day · evening, a few words each (tonight's is shared: learn.cap)
  /* 03 · your team: a title, one sentence, the roster [person, agent, what they do] */
  teamTitle: string; teamLede: string; team: [string, string, string][];
  /* 04–06: one sentence each for this role; `why` is kept for the long form, unused on the track */
  aios: string; forum: string; proof: string; why?: string;
  /* 06 also carries the role's story, folded closed under the proof line */
  story?: { label: string; title: string; body: string; cite?: string };
  /* 07 · compounding: what this person has after a week, a month, six months (c.horizon) */
  compound: { title: string; lede: string; marks: [string, string, string] };
  next: { cta: string; subject: string };   // the mailto, one subject per role
};
export type RolesContent = {
  eyebrow: string;
  switchLabel: string; tabsLabel: string; trackLabel: string; prev: string; next: string;
  marker: string;                                                // the role-change tag on every role's frame 1
  steps: { pain: string; day: string; team: string; aios: string; forum: string; proof: string; compound: string };
  horizon: [string, string, string];                             // a week · a month · six months
  me: string;                                                    // the word in the middle of the team visual: you / tú / você
  /* 02 closes the observed-context loop: after the evening close the AIOS writes down what it
     learned about you, and tomorrow starts from there. k/t are the fourth beat; line is the frame's one line. */
  learn: { k: string; t: string; cap: string; line: string };
  /* the section's sign-off, said once: three short lines, the last in the accent */
  signoff: [string, string, string];
  know: string;                                                  // skills + hooks, in one plain line
  aiosTitle: string; aiosLede: string;
  stack: [string, string, string][];                             // 04's visual: [kicker, title, line] × 3
  forumTitle: string; forumLede: string; forumPair: [string, string];   // 05's visual: the two teams
  proofTitle: string;
  chain: [string, string, string, string]; before: string; after: string; chainNote: string; // 06's visual
  alts: { pain: string; day: string; team: string; aios: string; forum: string; proof: string; compound: string }; // one alt per visual
  spec: string;
  items: RoleStory[];
};

export type Content = {
  nav: { href: string; label: string }[];
  /* The header's app CTA. Sits beside the GitHub icon — the two doors,
     source and binary, in the order people actually want them. */
  getApp: string;
  /* Platform-aware download copy. The site cannot know the visitor's OS at build time, so
     DownloadCTA resolves it on the client and picks from these. `all` is what renders before
     detection settles — and before we have looked, "all downloads" is the truthful answer. */
  downloads: {
    /* `action` is the small pill opposite "Copy" on the sibling card — a VERB only. `mac`,
       `linux` and `windows` are the doors listed side by side INSIDE the panel, and as of
       2026-08-17 all three are real links: Windows shipped in v0.8.3 and the link opened once
       three first-run defects landed in v0.8.7.
       `unsignedHint` + `soon*` are now the SmartScreen explanation rather than a "not yet" —
       the build is unsigned, so Windows shows a scary prompt, and the copy exists to say so
       BEFORE the operator meets it. The damage is surprise, not the click: measured on a clean
       machine, the one person who hit it cleared it unaided because someone was beside them to
       say it was expected. This copy is that someone. */
    action: string;
    mac: string; linux: string; windows: string;
    unsignedHint: string;
    soonTitle: string; soonBody: string; soonClose: string;
  };
  /* Act 2 — Why (urgency). Reuses journey.cards + OrchestratorShift + journey.caption. */
  why: {
    eyebrow: string; h: H; lead: string; pull: H;
    diLabel: string; diTitle: string; diSub: string; diUpdated: string;   // "Last updated", the date itself comes from src/data/exemplars.ts
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
    eyebrow: string; h: H; intro: string;
    /* A roadmap card can carry a status ribbon and a link. `tone` is the honesty
       dial: "live" has shipped and is public · "soon" is built but not yet open ·
       "wip" is being built in the open and you can watch. */
    items: (CardT & { ribbon?: string; tone?: "live" | "soon" | "wip"; href?: string; cta?: string })[];
    note: string;
  };
  /* Act 5 — Manual: the Step 0 / Step 1 setup story. */
  setup: {
    eyebrow: string; h: H; intro: string;
    /* Setup is a fork, not a checklist: two doors onto the same system. The
       prerequisites list is gone — it duplicated what each door already states,
       and the guided conversation asks for what it needs anyway. */
    pathsLabel: string;
    /* Both doors take the same three beats — who it's for, how it works, and the
       action itself — a coral panel that copies the line, or one that downloads the
       app. There is no separate CTA button: the panel IS the call to action. */
    paths: { pill: string; q: string; b: string; cmd?: { copy: string; copied: string }; note?: string; dl?: string; href?: string }[];
    step1Body: string;
    learnable: string;
  };
  hero: {
    /* The announcement strip, attached to the header. `rest` is the qualifying
       clause, hidden on narrow screens so the strip stays one line. */
    /* No href: the launch strip resolves the visitor's platform itself (LaunchStrip), so a
       destination baked into per-locale copy would silently outrank the detection. */
    banner: { badge: string; text: string; rest: string; cta: string };
    eyebrowPre: string; eyebrowAccent: string; eyebrowPost: string;
    h: H; leadBold: string; leadRest: string; tagline: string;
    ctaPrimary: string; ctaGithub: string;
    /* The type-and-find field beside "View on GitHub": the visitor types their trade,
       suggestions appear as they type, Enter or a click opens that role in section 00.
       `label` is the accessible name; `fallbackNote` is the small mono tag on the one
       suggestion shown when nothing matches (Entrepreneur, always), so the list never
       says "no results". The chip row that used to close the hero is gone. */
    field: { placeholder: string; go: string; label: string; fallbackNote: string };
  };
  /* Section 00, before 01. See RolesContent above. */
  roles: RolesContent;
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
    eyebrow: string; h: H;
    /* Two surfaces now, not one: the App paragraph sits above the Glass one,
       and each paragraph has its own mockup (appCaption / glassCaption). */
    appBold: string; appRest: string; bodyBold: string; bodyRest: string;
    appCaption: string; glassCaption: string;
    pullAccent: string; pullRest: string; cards: CardT[];
    busEyebrow: string; busH: H; busLead: string; busCards: CardT[];
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
  /* ---- the small answer-blocks (LandingBlocks.tsx), each where its question comes up ---- */
  wayIn: { h: H; routes: { k: string; t: string; lines: [string, string] }[]; cite: { pre: string; label: string; href: string }; close: string };          // end of 01
  people: { eyebrow: string; roomsLabel: string; rooms: { where: string; what: string; when: string }[]; numbers: { n: string; label: string; asOf: string; href: string; live?: "stars" }[]; numberLocale: string; quotes: string[]; liveLabel: string }; // end of 01
  writes: { h: string; b: string };                                                                     // 01, under the anatomy
  safe: { eyebrow: string; h: H; lede: string; facts: { t: string; b: string }[]; ladder: { pre: string; link: string; post: string }; honest: { pre: string; link: string; post: string } }; // 05
  whyGit: { k: string; b: string };                                                                     // 05, one line
  community: { pre: string; link: string; href: string };                                              // 00, after the sign-off
  back: { h: H; lede: string };
  footer: {
    tagline: string; license: string;
    repo: string; narrative: string; forAi: string;
    amplifier: string; agenticCulture: string; manualLink: string;
    copyright: string;
    community: string; discord: string;
  };
  meta: { title: string; description: string };
};

const NAV_HREFS = ["#your-aios", "#what", "#why", "#how", "#roadmap", "#setup", "#glass", "#manual"];

const en: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["You", "What", "Why", "How", "Where", "Setup", "Interface", "Manual"][i] })),
  getApp: "Get the app",
  downloads: {
    action: "Download",
    mac: "Mac (Apple Silicon)",
    linux: "Linux (x64)",
    windows: "Windows (x64)",
    unsignedHint: "Windows will show a warning — here’s why",
    soonTitle: "Windows will warn you, and it’s expected",
    soonBody: "The Windows build isn’t code-signed yet, so Windows shows “Windows protected your PC”. Click More info, then Run anyway. It warns; it does not block. Signing is on the way — the app itself is the same one Mac and Linux run.",
    soonClose: "Got it",
  },
  why: {
    eyebrow: "Why now",
    h: ["AI is getting better than us at ", "almost everything", "."],
    lead: "This is the moment to rise from doer to orchestrator — to stop racing the machines and start conducting them. The people who thrive won’t be the ones who resist AI; they’ll be the ones who learned to run a team of it.",
    pull: ["Verticality is dying. ", "Horizontality", " is born — one human conducts many agents."],
    diLabel: "The evidence",
    diTitle: "The Disruption Index",
    diSub: "Industries ranked by how fast AI is reshaping them — with the real companies that died, reinvented, or rode the wave. Browse it →",
    diUpdated: "Last updated",
  },
  how: {
    eyebrow: "How it works",
    h: ["The whole machine, ", "one read", "."],
    intro: "Five moving parts, one idea: you orchestrate sessions, sessions load agents, agents call skills — and all of it reads the ground underneath. Here’s each piece, then how it compounds.",
    subModel: "The three words", subContext: "Context that compounds", subFleet: "The fleet",
    subRhythm: "The rhythm", subProjects: "Projects", subTeams: "Teams",
    subTrust: "Trust, control & containment", subGlass: "The interface",
  },
  mentalModel: {
    headline: [{ t: "A " }, { t: "session", a: true }, { t: " is where. An " }, { t: "agent", a: true }, { t: " is who. A " }, { t: "skill", a: true }, { t: " is how." }],
    session: { word: "Session", tag: "◧ a terminal — the where", t: "Where work happens", b: "One live thread — the deal, the deck, the build. It reads your context the moment it opens, runs the rituals, remembers. You can run many at once." },
    agent: { word: "Agent", tag: "◆ a .md file — the who", t: "Who does it", b: "A named specialist you load into a session — lawyer, accountant, researcher. A role plus its instructions and the tools it can touch. 33 ship in the box; you summon one by name or matched semantically given your task." },
    skill: { word: "Skill", tag: "✦ a .md file, no tools — the how", t: "How it’s done", b: "Drop-in expertise an agent loads the instant it’s needed — like Neo plugging in and knowing kung fu. Pure know-how, no tools. 47 ship in the box; you never name one — describe the work and the right one wakes." },
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
      { e: "The desktop app", t: "AIOS, for everyone", b: "A free, installable app — the panel, real terminals, vault explorer, one-click rituals — with native viewers for markdown, HTML, and PDFs.", ribbon: "public", tone: "live", href: RELEASES_PAGE, cta: "Get the app ↗" },
      { e: "Agentic contact book", t: "ID and mandates for agents", b: "A directory where your agents carry a verifiable identity and the mandates that scope it — what each one may do, and which slice of your vault it may speak from — so they inherit the right access and can interact securely with other people’s agents on your behalf.", ribbon: "releasing", tone: "soon", href: "https://forum.the-aios.com", cta: "forum.the-aios.com ↗" },
      { e: "Marketplace", t: "Install a bundle in one command", b: "Agent bundles, vertical workflows, a company’s whole brain — installed through a trust-gated marketplace: registry → injection scan → license check → QA → install with an audit log.", ribbon: "building", tone: "wip", href: "https://www.the-aios.org/plugins", cta: "the-aios.org/plugins ↗" },
      { e: "Model-agnostic", t: "The layer, not the model", b: "The AIOS is the substrate; the LLM is swappable. Run Claude (the best engine today) or any frontier model — the same context, agents, and rituals run on top, unchanged." },
      { e: "Sovereign engine", t: "An engine no one can switch off", b: "Open-weights models like GLM-5.2 now reach near-frontier quality you can download and run yourself — offline, air-gapped, on your own metal. The sovereign fallback stops being a downgrade." },
      { e: "Corporate controls", t: "Governed agents at company scale", b: "Encrypted-at-rest context, per-agent scoped read-grants, audit trails, and verifiable agent identity — INTENT as policy, cryptographically enforced. The admin layer for running a fleet inside an org." },
    ],
    note: "Direction, not dated promises — and never a feature we can’t already point at in the work.",
  },
  setup: {
    eyebrow: "Set it up",
    h: ["Two ways in, ", "one AIOS", "."],
    intro: "The whole setup is a guided conversation. Pick the door that matches how you work — the system on the other side is the same.",
    pathsLabel: "Pick your door",
    paths: [
      {
        pill: "for the tech-savvy",
        q: "Already familiar with an IDE like VSCode?",
        b: "Copy this into any Claude Code session. It clones the framework, installs everything you need including the AIOS Glass extension, and asks your consent at every step.",
        cmd: { copy: "Copy", copied: "Copied ✓" },
        href: "https://open-vsx.org/extension/the-aios/aios-glass",
      },
      {
        pill: "Everyone, including the tech-savvy",
        q: "Already familiar with AI apps like Claude.app?",
        b: "Download the app and follow its four guided steps, including the “Set up my AI-OS from https://github.com/The-AIOS/aios” done for you. Same powerful terminals, less intimidating.",
      },
    ],
    step1Body: "Claude reads SETUP.md and walks every choice — each step asks your consent.",
    learnable: "Everything else is learnable from inside — ask your AIOS what it can do, and it shows you.",
  },
  hero: {
    banner: {
      badge: "New",
      text: "The AIOS App is here",
      rest: "signed, notarized, and free",
      cta: "Get the app",
    },
    eyebrowPre: "The AI Operating System", eyebrowAccent: "·", eyebrowPost: "Open source",
    h: ["Giving everyone a ", "team of agents.", ""],
    leadBold: "AI as a team, not a tool.",
    leadRest: " The AIOS turns AI into co-workers — a legal you, an accountant you, a marketing you, an engineering you. Orchestrated by you, governed by your intent, compounding every day.",
    tagline: "9 out of 10 people still prompt by hand. Stop prompting. Start orchestrating.",
    ctaPrimary: "Take the tour ↓", ctaGithub: "View on GitHub ↗",
    field: { placeholder: "I’m a… dentist, abogada, professora", go: "Show me my AIOS", label: "Type your trade to find your AIOS", fallbackNote: "the closest fit" },
  },
  roles: {
    eyebrow: "Your AIOS",
    switchLabel: "I’m a",
    tabsLabel: "Pick your role",
    trackLabel: "the story in seven steps; it continues into the next role",
    prev: "Previous step",
    next: "Next step",
    marker: "new role",
    steps: { pain: "the pain", day: "your day", team: "your team", aios: "the AIOS", forum: "Forum", proof: "the proof pair", compound: "compounding" },
    horizon: ["a week", "a month", "six months"],
    me: "you",
    learn: { k: "tonight", t: "It writes down what it learned about you", cap: "It writes down what it learned", line: "It learns you. Tomorrow starts from tonight." },
    signoff: ["Not another second brain.", "Your brain, amplified.", "Your business, amplified."],
    know: "Skills load the know-how; hooks run the rules: the floor reads who you are first, the trust gate treats a file as data, never an instruction. Nothing leaves your desk without your OK.",
    aiosTitle: "The AIOS is where your team works",
    aiosLede: "Free for you, one hour to install, yours to keep. Your context, your rituals and your team, in files you own.",
    stack: [
      ["context", "What it knows about you", "Declared by you, observed over time, in plain files you own."],
      ["rituals", "The loop that compounds", "/today in the morning, /close-day at night. Every session starts from the last."],
      ["agents", "Your team", "Each reads your ground, each has the tools it needs, none has a key you didn’t give it."],
    ],
    forumTitle: "Your AIOS meets theirs",
    forumLede: "Shared spaces where your AIOS works with other people’s: your colleagues’ inside the company, or your clients’, partners’ and friends’ outside it. Each signed as its owner, end-to-end encrypted.",
    forumPair: ["your AIOS", "their AIOS"],
    proofTitle: "Every action your team takes, signed",
    chain: ["Human", "Mandate", "Agent", "Receipt"],
    before: "BEFORE THE ACT", after: "AFTER THE ACT",
    chainNote: "Delegated further, a mandate can only narrow. Never widen.",
    alts: {
      pain: "One person, and the work piling up beside them.",
      day: "A loop: morning, the day, evening, then tonight, when it writes down what it learned about you, and back to morning.",
      team: "You in the middle; the people you couldn’t hire connect in around you.",
      aios: "Three layers, context, rituals, agents, with a loop running around them.",
      forum: "Your AIOS and their AIOS exchange signed messages, each with a check mark, inside your company or outside it.",
      proof: "The proof pair: a human issues a mandate to an agent before the act; the agent acts; a signed receipt records what it did.",
      compound: "A curve rising over a week, a month and six months.",
    },
    spec: "Read the proof-pair spec ↗",
    items: [
      {
        id: "entrepreneur", label: "Entrepreneur", you: "an entrepreneur",
        painTitle: "You run the business, and you are the business.",
        painBig: ["One person. ", "Seven jobs", "."],
        pain: "Sales, delivery, invoices, the contract you haven’t read. From day one you have a technical cofounder, a lawyer, an accountant, someone finding buyers, someone writing the proposal and someone chasing the invoice.",
        dayTitle: "A day with your team",
        dayLede: "What a day looks like once the seven are on it.",
        day: [
          ["morning", "The day, from your numbers", "/today opens with what is due, what is overdue, and the two calls that matter. Your accountant already updated the cash line."],
          ["day", "Your team works while you sell", "The cofounder ships the feature. The lawyer reads the new supplier contract. The lead generator leaves you four names and why."],
          ["evening", "Invoices chased, pipeline true", "The invoice tracker drafts two follow-ups; the pipeline matches what happened today. /close-day writes the rest down."],
        ],
        caps: ["Plans from your numbers", "Agents work while you sell", "Invoices chased"],
        teamTitle: "The seven you couldn’t hire",
        teamLede: "Each one reads your business before it works, and nothing leaves your desk without your OK.",
        team: [
          ["A technical cofounder", "technical-cofounder", "Builds the product end to end: discovery, ship, handoff. The cofounder you could not afford to give equity."],
          ["Your lawyer", "lawyer", "Reads the contract before you sign it. Flags the risk in plain words."],
          ["Your accountant", "accountant", "Bookkeeping, cash flow, the tax question you were going to ask in April."],
          ["The one who finds buyers", "lead-generator", "Takes the offer you already have and finds who should hear it, scored."],
          ["The one who writes the proposal", "proposal-writer", "A tailored proposal, quote or scope of work from the client’s own note and your catalogue."],
          ["The one who chases invoices", "invoice-tracker", "Pending, overdue, and the follow-up drafted in your tone."],
          ["The one who keeps the pipeline honest", "crm-updater", "Syncs what actually happened, from meetings, mail and chat, into the pipeline."],
        ],
        aios: "As an entrepreneur, your context is the business: the offer, the clients, the numbers, the contracts. The AIOS holds it, and your team reads it before every task.",
        forum: "Your AIOS meets your partners’ inside the business and your clients’ outside it, in a verified room: a proposal goes in, questions come back, each side signed as who it says it is.",
        proof: "Your lawyer, your accountant and your sales team act under mandates you set. Nothing gets sent, signed or paid without a receipt that says who did it and under what authority.",
        why: "The first time an agent sends an invoice or signs off a quote, you will want to know exactly what it was allowed to do. The mandate says it before; the receipt proves it after.",
        story: { label: "Illustrative", title: "A business of one, with a team of seven", body: "A consultant who sold, delivered and invoiced alone installed it on a Monday. By Friday the proposal went out from her own catalogue, the overdue invoice had a follow-up in her tone, and the supplier contract came back with one clause flagged. Nothing was sent that she had not read. What changed is that she stopped being the only one who knew where everything was." },
        compound: { title: "What you have in six months", lede: "It learns your business, and the seven get better at it.", marks: ["Your offer, clients and numbers in its ground; proposals start from your catalogue.", "The pipeline matches reality; the invoice tracker knows who pays late.", "A team that knows your business better than a new hire would after a year."] },
        next: { cta: "Help me set up my team", subject: "Entrepreneur: set up my team" },
      },
      {
        id: "ceo", label: "CEO", you: "a CEO",
        painTitle: "Meetings exist because information is slow.",
        painBig: ["40% scaled agents. ", "6% see the money", "."],
        pain: "The gap is the system around the model and who owns the context. You already have the team that fixes that.",
        dayTitle: "A day with your team",
        dayLede: "The day, as your team runs it.",
        day: [
          ["morning", "The day, planned from your ground", "/today reads your calendar, your mail and your projects. It already knows what you decided last week and who you owe an answer."],
          ["day", "Your team works in parallel", "The analyst reads the board pack. The chief of staff writes three briefs. The one who writes down the call holds the decision that is due."],
          ["evening", "Written down, not remembered", "/close-day records what you learned, what carried and why. Tomorrow starts from there."],
        ],
        caps: ["Plans from your calendar", "Agents work in parallel", "Decisions written down"],
        teamTitle: "The office you never had to staff",
        teamLede: "Each one walks in knowing the company, the people and the last decision.",
        team: [
          ["An analyst", "company-analyst", "Reads a company, a market or a competitor the way a good analyst would, from your own files first."],
          ["A chief of staff", "meeting-prepper", "The brief before every room: who, what they said last time, what you owe them."],
          ["Someone who writes down the call", "decision-journaler", "Options, what you would regret, and the reasoning, kept for the day you need it."],
          ["A coach for the quarter", "okr-coach", "Sets, pressure-tests and scores the objectives, so the quarter stays honest."],
          ["The outside view", "consultant", "Frameworks and a second opinion, on demand, without the retainer."],
          ["Board updates", "report-drafter", "Status reports and board packs drafted from what actually happened this week."],
        ],
        aios: "As a CEO, the floor is the board pack you never have to re-explain. Your team walks in knowing the company, the people and the last decision.",
        forum: "Inside, your leadership’s AIOS share one space: the board pack assembles itself, every part signed by whoever’s agent wrote it. Outside, the same kind of room opens to your board, investors or a partner company.",
        proof: "You decide what each member of your team may commit you to. Every action carries a receipt you can audit, so delegation stops being a feeling and becomes a record.",
        why: "McKinsey ends its paper with a question for the CEO: which decisions can safely and reliably be delegated to AI agents? The mandate is your answer, written down. The receipt is how you check it later.",
        story: { label: "Illustrative · a scenario McKinsey describes, rerun with your team", title: "Tuesday to Thursday", body: "McKinsey opens its paper with a scenario: on Tuesday a CEO learns regulators will cap margins on some products; by Thursday the lines of business have redesigned them inside the new rules. With your team it goes like this. Tuesday 8:00, you paste the draft rules and ask what is exposed; your analyst reads your own product files and answers by 8:20. Wednesday, each country head’s AIOS runs the same question on their numbers and posts the result in a shared room, signed. Thursday, every decision is recorded with a receipt, and the next regulation starts from this one.", cite: "McKinsey / QuantumBlack, The AI operating system, October 2026, pp. 2–3." },
        compound: { title: "What you have in six months", lede: "The company’s pattern, written down, and a team that knows it.", marks: ["Every meeting starts from what you decided last time.", "The board pack writes itself from the week; decisions carry their reasoning.", "A record of every call and why, and a team that knows the company’s pattern."] },
        next: { cta: "Talk to us about my top team", subject: "CEO: bring the AIOS to my top team" },
      },
      {
        id: "exec", label: "Executive / manager", you: "an executive",
        painTitle: "Ten direct reports today. Forty tomorrow.",
        painBig: ["Forty one-on-ones ", "a week", "."],
        pain: "McKinsey expects managers to go from ten or twelve reports to twenty or forty. Nobody gets forty one-on-ones a week; your team does the preparation.",
        dayTitle: "A day with your team",
        dayLede: "Six minutes of prep, not Sunday night.",
        day: [
          ["morning", "Prep for every one-on-one", "Six minutes, not Sunday night. What each person said last time, what moved since, what you promised."],
          ["day", "Drafts leave as drafts", "Reports and replies written in your words, waiting for your signature. You read each one; that is the job."],
          ["evening", "Capture", "What you promised, to whom, by when. Nothing lives only in your head."],
        ],
        caps: ["Six minutes of prep", "Drafts wait for your signature", "Every promise captured"],
        teamTitle: "The staff behind the manager",
        teamLede: "They prepare, draft and keep the record; you read, decide and sign.",
        team: [
          ["A chief of staff", "meeting-prepper", "The brief before every one-on-one: what each person asked for last time, what moved since."],
          ["Someone who writes the update", "report-drafter", "The weekly status and the leadership update, from this week’s notes, in your words."],
          ["Someone who drafts the replies", "email-drafter", "Replies in your voice, sent by you."],
          ["The one who keeps the pipeline honest", "crm-updater", "What actually happened, synced from meetings, mail and chat."],
          ["A mentor", "growth-companion", "A real read on how you are doing, and a standing weekly session."],
          ["A coach for the quarter", "okr-coach", "Sets, pressure-tests and scores the objectives."],
        ],
        aios: "As an executive, your context is the people: what each one asked, promised and needs. The AIOS holds it so your attention can.",
        forum: "Your team’s AIOS hand work to each other without a status meeting, and to another department’s or a supplier’s when the work crosses the line. Information moves on its own; you intervene where judgment is needed.",
        proof: "Delegation that can only narrow down the chain. Nobody’s agent exceeds your authority, and nobody’s agent can widen the mandate it was given.",
        why: "McKinsey’s second question is how to keep the organization from rebuilding layers of approval. A mandate is approval given once, in writing, with limits, and a receipt instead of a review meeting.",
        story: { label: "Illustrative", title: "Eleven reports, six minutes", body: "A manager with eleven reports moved her preparation from Sunday night to a six-minute morning read. The one-on-ones got shorter and better, because each started from what the person had actually asked for last time. The drafts went out under her name because she read every one of them. Nothing was automated; the information just stopped being slow." },
        compound: { title: "What you have in six months", lede: "Forty reports, and nothing living only in your head.", marks: ["Six-minute prep, every one-on-one.", "Updates in your words, from what actually happened.", "Every promise, to whom, by when; the information stopped being slow."] },
        next: { cta: "Talk to us about my team", subject: "Executive: bring the AIOS to my team" },
      },
      {
        id: "lawyer", label: "Lawyer / consultant", you: "a lawyer or consultant",
        painTitle: "Your expertise lives in your head and in old files.",
        painBig: ["Every matter starts ", "from zero", "."],
        pain: "Your team finds the expertise first, from your own clause library and your own precedents, before any blank page.",
        dayTitle: "A day with your team",
        dayLede: "The matter, prepared before the call.",
        day: [
          ["morning", "Matter prep", "The file, the precedents you have used, the client’s last three emails. In front of you before the call."],
          ["day", "Review drafts and client memos", "Contract review against the clauses you negotiated before; memos in your voice, for your signature."],
          ["evening", "The matter log updates itself", "Time, decisions and open points, captured without a Friday afternoon."],
        ],
        caps: ["The matter, prepared", "Reviews and memos drafted", "The matter log updates"],
        teamTitle: "The firm inside the firm",
        teamLede: "An associate, a compliance officer, a billing clerk. None of them bills you.",
        team: [
          ["An associate", "lawyer", "Legal review, contract analysis and risk, from your own clause library before any blank page."],
          ["A compliance officer", "compliance-checker", "Reviews documents against the rules, with the flags dated."],
          ["The one who writes the engagement letter", "proposal-writer", "Proposals, scopes of work and engagement letters from your template."],
          ["A strategy partner", "consultant", "The outside view on the client’s problem, with frameworks."],
          ["The billing clerk", "invoice-tracker", "Pending, overdue, and the follow-up drafted."],
          ["Client correspondence", "email-drafter", "Replies in your voice, for your signature."],
        ],
        aios: "As a lawyer, your context is twenty years of matters. The AIOS reads them back to you, matter by matter, so the next one starts ahead.",
        forum: "Your AIOS and your client’s AIOS exchange documents in a verified room, the same way your partners’ do inside the firm. Each knows the other is who it says it is, and the server cannot read them.",
        proof: "The mandate is your engagement letter for the agent. The receipt is the audit trail a regulator asks for, written as the work happened.",
        why: "Privilege, scope and the record are the whole profession. A mandate scopes what the agent may touch; a receipt proves what it did. That is a file you can defend.",
        story: { label: "Illustrative", title: "A two-partner firm, one Friday", body: "A two-partner firm installed it on a Friday afternoon. The next matter started from their own clause library instead of a blank page, and the first review draft was on the partner’s desk before the client call. Nothing left the firm that a partner had not read. What changed was where the expertise lived." },
        compound: { title: "What you have in six months", lede: "Twenty years of matters, readable by your team before the call.", marks: ["Your clause library in front of every review.", "Matter logs that keep themselves; every flag dated.", "A firm that starts each matter ahead, not from zero."] },
        next: { cta: "Talk to us about the firm", subject: "Lawyer or consultant: the AIOS for my firm" },
      },
      {
        id: "creator", label: "Creator / writer", you: "a writer",
        painTitle: "Ideas scattered across five apps. Publishing is a second job.",
        painBig: ["Five apps. ", "One voice", "."],
        pain: "Your team takes the second job: the draft in your voice, the gate that flags what isn’t you, the calendar, the publisher.",
        dayTitle: "A day with your team",
        dayLede: "From a note to a scheduled post, in your voice.",
        day: [
          ["morning", "Ideas, caught", "In your own words, where you will find them again, linked to what you already wrote."],
          ["day", "Drafting in your voice", "With your past posts as the reference. The gate flags the lines that are not you."],
          ["evening", "Scheduled, done", "Cross-linked, scheduled, the image attached. The second job gets smaller."],
        ],
        caps: ["Ideas caught", "Drafts in your voice", "Scheduled, done"],
        teamTitle: "The newsroom you never had",
        teamLede: "A drafter, an editor, a publisher, a designer, and someone watching the mentions. You still press publish.",
        team: [
          ["A drafter who learns your voice", "content-writer", "Posts for LinkedIn, X or Substack, drafted from your notes, in your voice."],
          ["The gate that flags what isn’t you", "voice-gate", "Checks the prose against your own voice baseline: density, bursts, the exposed lines. A skill, not an agent; it loads when a draft is ready."],
          ["A publisher", "kdp-publisher", "Takes a finished book from files on disk to a live listing on Amazon."],
          ["The one who builds the deck", "deck-builder", "The talk that goes with the book, end to end."],
          ["An editor who runs the calendar", "content-scheduler", "Plans and queues what goes out, when."],
          ["Someone watching the mentions", "brand-monitor", "Your name, your work, the market, filtered to what matters."],
        ],
        aios: "As a writer, your context is your voice: every post, every line you cut. The AIOS learns it, and the gate keeps the drafts honest.",
        forum: "Co-write with another writer’s AIOS in a shared space, or work with your editor’s and your publisher’s. Each keeps its own voice file; the draft carries both names.",
        proof: "Signed provenance. Proof the work is yours, and which parts your team did, written as the work happened.",
        why: "Readers will ask who wrote it. A receipt per draft is an answer you can show, not a disclaimer.",
        story: { label: "The founder’s own", title: "Two books, written with the team", body: "Be A Plant and Sell Trust are both on Amazon, paperback and Kindle, since August 2026. I wrote them in my voice. The voice gate checked every chapter against my own baseline, two independent models ran a structural pass and a voice pass, and I locked each draft. Then the illustrations, then the KDP build: interior, epub, cover. Sell Trust went to KDP in one midnight run, seven days ahead of the deadline.", cite: "Be A Plant · Sell Trust · Amazon, August 2026" },
        compound: { title: "What you have in six months", lede: "A voice it has measured, and a pipeline from notes to Kindle.", marks: ["Drafts in your voice, the gate on.", "A calendar that runs; your voice baseline measured.", "A book pipeline, from notes to a live listing."] },
        next: { cta: "Write to us", subject: "Creator: the AIOS for my writing" },
      },
      {
        id: "developer", label: "Developer", you: "a developer",
        painTitle: "Agents that forget by Monday, and keys sitting in .env.",
        painBig: ["A key says who. ", "A mandate says what", "."],
        pain: "Your team remembers, and runs under rules you can read: the repo’s own contract loaded before the first prompt, a permission mode on every tool call, a mandate instead of a key.",
        dayTitle: "A day with your team",
        dayLede: "Review, triage, docs, autonomous runs, inside the rules.",
        day: [
          ["morning", "Review with the repo’s rules loaded", "The reviewer reads CLAUDE.md and the last three reviews before the diff."],
          ["day", "Triage, docs, autonomous runs", "Bug triage, docs that match the code, runs that stay inside the permissions you set."],
          ["evening", "The project note", "What changed, why, what is next. The next session starts from it."],
        ],
        caps: ["Review with the rules loaded", "Triage, docs, autonomous runs", "The project note written"],
        teamTitle: "The engineering team of one",
        teamLede: "A cofounder, a reviewer, a security engineer, triage, docs, and the one who makes the codebase smaller.",
        team: [
          ["A technical cofounder", "technical-cofounder", "Builds real products end to end, with you."],
          ["A reviewer", "code-reviewer", "Correctness first, with the repo’s own rules loaded before the diff."],
          ["A security engineer", "security-engineer", "Threat models, secrets management, the review that finds the key in the fixture."],
          ["Triage", "bug-triager", "Duplicates, severity, owner."],
          ["The one who keeps the docs honest", "code-documenter", "README, CLAUDE.md and inline docs that match the code."],
          ["The one who makes it smaller", "refactor-engineer", "Reduces entropy: simplifies, unships dead code."],
        ],
        aios: "As a developer, your context is the repo’s contract: invariants, the rules that bite, how to run and test. The AIOS loads it before the first prompt.",
        forum: "Agent-to-agent work over Forum, between your own teams or across orgs. End-to-end encrypted, server-blind, each agent signed as its owner.",
        proof: "Replace API keys with mandates. Scoped, short-lived, revocable, and narrowing on delegation. A key says who; a mandate says what, until when, and leaves a receipt.",
        why: "October showed what a key in .env is: unbounded authority, found by an agent. A mandate is bounded authority with a record, verifiable by whoever the agent calls.",
        story: { label: "Public source · Anthropic, AI Engineer Europe, May 2026", title: "Same model, same prompt, different scaffolding", body: "Anthropic’s own engineers showed it on stage. Same model, same prompt: the bare loop shipped a game whose controls did not respond; the run with a harness around it shipped a working game. In their words, “the difference between this output and the previous output is entirely just scaffolding.” The AIOS is that scaffolding, kept in your repo, run by rules you can read.", cite: "Ash Prabaker and Andrew Wilson, Build Agents That Run for Hours, at 31:08." },
        compound: { title: "What you have in six months", lede: "Agents that run for hours inside rules you wrote, with receipts.", marks: ["Reviews with the repo’s rules loaded.", "Docs that match the code; a project note every session starts from.", "Autonomous runs you can audit, and keys replaced by mandates."] },
        next: { cta: "Read the proof-pair spec", subject: "Developer: contributing to the AIOS" },
      },
      {
        id: "academic", label: "Academic / teacher", you: "a teacher",
        painTitle: "Grading, prep and research crowd out the thinking you were hired for.",
        painBig: ["The hours go to prep, ", "not to thinking", "."],
        pain: "Your team takes the prep: the concept explained three ways, the quiz from the readings, the slides from your own notes, the feedback draft for you to finish.",
        dayTitle: "A day with your team",
        dayLede: "Class prep from your own notes; feedback for you to finish.",
        day: [
          ["morning", "Class prep from your own notes", "Last term’s notes, the readings, the questions students actually asked. The hard concept, explained three ways."],
          ["day", "Research briefs and feedback drafts", "What is new on the topic since your notes; feedback on what they wrote, in your voice, for you to finish."],
          ["evening", "What landed", "What worked in class, written down for next year, not lost by June."],
        ],
        caps: ["Class prep from your notes", "Briefs and feedback drafts", "What landed, written down"],
        teamTitle: "The department of one",
        teamLede: "A teaching assistant, a reading partner, the one who builds the slides, the one who writes it up.",
        team: [
          ["A teaching assistant", "explainer", "The hard concept, three ways, for the student in front of you."],
          ["A reading partner", "study-buddy", "Reads the source with you and keeps a study atlas per book."],
          ["The one who builds the slides", "deck-builder", "A deck from your own notes, end to end."],
          ["The one who writes it up", "content-writer", "Lecture notes and course posts, in your voice."],
          ["The one who asks the students to reflect", "journal-prompter", "Reflection prompts from what the class actually did."],
        ],
        aios: "As a teacher, your context is every class you have taught. The AIOS keeps it, so the next one starts from the best version of the last.",
        forum: "A shared space with co-teachers at your school, or with a research group across universities. Each AIOS brings its owner’s notes to the room; none leaks them.",
        proof: "Signed authorship. Which work the AI did, and under whose mandate. Academic integrity you can show, not assert.",
        why: "The question in every faculty meeting this year is what the AI did and what the student did. A receipt answers it per piece of work, without a detector guessing.",
        story: { label: "From the room · Next Generation, EO Barcelona, October 2026", title: "A room of sixteen-to-twenty-four-year-olds", body: "This month the founder taught a session for sixteen-to-twenty-four-year-olds in Barcelona, built from his own notes with his team the same morning. Asked for one word on how the session felt, the room answered with three: inspired, uncertain, future. The uncertainty is the honest part. The tool does not remove it; it gives a teacher the hours to meet it." },
        compound: { title: "What you have in six months", lede: "A course that improves each term, instead of one you rebuild.", marks: ["Prep from your own notes.", "Every class written down for next year.", "A course that improves each term, and the hours back for the thinking."] },
        next: { cta: "A workshop for my faculty", subject: "Teacher: the AIOS for my faculty" },
      },
      {
        id: "student", label: "Student", you: "a student",
        painTitle: "The fear that the jobs will disappear before you get one.",
        painBig: ["Start with a team, ", "not a job", "."],
        pain: "A tutor, a study partner, a mentor, and someone who asks what you actually want.",
        dayTitle: "A day with your team",
        dayLede: "A plan, an explanation, a question about you.",
        day: [
          ["morning", "A study plan from what you have to learn", "This week’s material, your pace, the exam date. Not a generic schedule."],
          ["day", "Explanations three ways", "The concept until it clicks. And the career question you keep not asking, asked back to you."],
          ["evening", "What stuck", "Written down, so tomorrow starts from it."],
        ],
        caps: ["A plan for the week", "Explanations until it clicks", "What stuck, written down"],
        teamTitle: "The study group that shows up",
        teamLede: "They explain, quiz and ask; the notes stay yours, on your machine.",
        team: [
          ["A tutor", "explainer", "The concept, three ways, until it clicks."],
          ["A study partner", "study-buddy", "Questions and practice from your own course, no grades."],
          ["Someone who asks about you", "journal-prompter", "One question about what you actually want, from what you did this week."],
          ["A mentor", "growth-companion", "A real read on how you are doing, and a standing weekly session."],
        ],
        aios: "As a student, your context is what you are learning and who you are becoming. The AIOS keeps both, and neither belongs to a platform.",
        forum: "Study groups with their AIOS, from your class or from anywhere. One shared space, each AIOS knows its owner’s notes, nobody copies anybody.",
        proof: "A verified identity for your own team, from day one. Yours, not a platform’s. When your agent speaks for you, it can prove it.",
        why: "The first job will ask what you can do with agents. Arriving with your own team, under your own identity, is the answer.",
        story: { label: "From the room · Next Generation, EO Barcelona, October 2026", title: "The best tool to become anyone you want to become", body: "In Barcelona this month the founder told a room of sixteen-to-twenty-four-year-olds that AI is nothing but our best tool to become anyone we want to become. The tool serves the person; the person chooses who to become. Asked for one word, the room answered with three: inspired, uncertain, future." },
        compound: { title: "What you have in six months", lede: "Your own team, under your own identity, before the first job.", marks: ["A plan that fits your week.", "Explanations that remember what clicked.", "Your own team, under your own identity, before the first job."] },
        next: { cta: "Write to us", subject: "Student: getting started with the AIOS" },
      },
      {
        id: "teams", label: "Teams", you: "a team",
        painTitle: "One person has it. The team doesn’t. Yet.",
        painBig: ["The person first. ", "The company follows", "."],
        pain: "One member runs it for a month, then a day in the room sets the team up with shared context, governance and everyone’s own agents.",
        dayTitle: "How a team starts",
        dayLede: "One person, then a day in the room, then the team space.",
        day: [
          ["month 1", "One person runs it", "Free. Their own context, their own team, every day. The company is not involved yet."],
          ["day 1", "A day in the room sets the team up", "Shared contexts, governance, each person’s own agents. With the files open."],
          ["after", "The team space is the product", "Your teams meet in one room, signed. Work moves between them; the record writes itself."],
        ],
        caps: ["One person runs it", "A day in the room", "The team space is live"],
        teamTitle: "What a team adds",
        teamLede: "Two layers of context, written governance, and a concierge for every new member.",
        team: [
          ["Shared context", "/company", "What the team knows together, kept apart from what each person keeps."],
          ["Governance", "INTENT.md", "Who may do what, written down, enforced where the agents run."],
          ["A concierge for every new member", "onboarding-aios", "Orients each person, checks the install, answers “am I on the latest?”"],
          ["A way to report what is off", "aios-feedback", "A bug, a papercut, a doc that said one thing while the system did another."],
          ["Everyone’s own team", "each member", "The same agents, each under its owner’s mandate, none above it."],
        ],
        aios: "For a team, the context is two layers: what each person keeps, and what the team shares. The AIOS keeps them apart, and lets every team read both.",
        forum: "The team space is the product. Every member’s AIOS meets in one room, each signed as its owner, and the same room opens to clients and partners outside; the handoffs leave a record.",
        proof: "Every action across the team signed and auditable. The mandate narrows down the chain and never widens; no agent outranks its owner.",
        why: "A team is where delegation crosses people. That is exactly where a mandate and a receipt stop being nice and start being the thing that lets you trust the work.",
        story: { label: "A pattern, not a name", title: "The first team that paid", body: "The first team that paid was a business owner who ran it himself for weeks, then brought his team. That is the order every time: the person first, the company follows. Nobody buys a change in how they think from a procurement process; one person tries it, and the team arrives behind them." },
        compound: { title: "What the team has in six months", lede: "A company that runs on the context its people built.", marks: ["Shared context mounted; everyone’s agents reading it.", "Handoffs with receipts; a new member onboarded in a day.", "A company that runs on the context its people built."] },
        next: { cta: "Let’s talk", subject: "Teams: let’s talk" },
      },
    ],
  },
  wayIn: {
    h: ["Same destination. ", "A different way in", "."],
    routes: [
      { k: "the enterprise route", t: "Top-down.", lines: ["A program led by the top team, with consultants beside it.", "About 12 to 16 weeks to first value, around 100 data sources."] },
      { k: "the AIOS", t: "One person.", lines: ["One hour, free, in files you own.", "The team joins when it sees it working."] },
    ],
    cite: { pre: "The enterprise figures: ", label: "McKinsey / QuantumBlack, The AI operating system, October 2026 ↗", href: MCKINSEY },
    close: "Both end in a company that runs on its own context. Ours starts with you.",
  },
  people: {
    eyebrow: "Proof from people",
    roomsLabel: "Rooms it has been told in",
    rooms: [
      { where: "EO Monterrey", what: "The AI Moment", when: "June 2026" },
      { where: "EO Boston", what: "The Fortress", when: "September 2026" },
      { where: "EO Reno Tahoe", what: "Keynote and workshop", when: "September 2026" },
      { where: "EO Barcelona", what: "Workshop", when: "October 2026" },
    ],
    /* Public, verifiable, dated. Stars are re-read live in the browser; the rest state their date.
       App downloads count installer files only (.dmg .exe .AppImage .deb across all releases), never
       update checks, so they are labelled downloads, not users. Nothing in this block is estimated.
       Quotes: anonymized by Chuy's decision (2026-10-30); several were said under EO forum
       confidentiality, so never add a name, company, chapter or city to them. */
    numbers: [
      { n: "89", label: "GitHub stars", asOf: "30 Oct 2026", href: "https://github.com/The-AIOS/aios", live: "stars" },
      { n: "23", label: "forks", asOf: "30 Oct 2026", href: "https://github.com/The-AIOS/aios/forks" },
      { n: "15", label: "contributors", asOf: "30 Oct 2026", href: "https://github.com/The-AIOS/aios/graphs/contributors" },
      { n: "1,200+", label: "AIOS App installer downloads", asOf: "30 Oct 2026", href: "https://github.com/The-AIOS/aios-app/releases" },
    ],
    numberLocale: "en-US",
    quotes: [
      "I went from deeply frustrated to amazed.",
      "I installed it and it blew my mind compared to at least what I had, which was rubbish.",
      "Finally, [I] have my attention on what really matters.",
      "I installed the AIOS while you were talking.",
      "I do not remember having had two days with so much impact in terms of my thinking before.",
      "My mindset is to tell, and now I’m starting to ask, and this [is] changing my game.",
      "I’m not technical. I’m no CTO. AIOS helped me to put it into the website.",
      "Oh, thank you, I have a CFO now.",
    ],
    liveLabel: "live from GitHub",
  },
  writes: { h: "You direct. The system writes.", b: "Every file above is written by sessions, agents and rituals. You say what you want; the vault writes itself down." },
  safe: {
    eyebrow: "Safe by construction",
    h: ["Before you connect anything: ", "what holds", "."],
    lede: "The rules you write come later. These are built in.",
    facts: [
      { t: "It trusts an instruction by where it came from.", b: "Your prompt is yours. An email, a web page, a file or another session’s message arrives marked as text someone else wrote: data, never a command." },
      { t: "Keys never live in the vault.", b: "Secrets have their own place on your machine, and the commit path scans for them before anything leaves it." },
      { t: "Autonomy has rungs.", b: "From the default install to a walled second machine: a ladder of six rungs. Climb in order, and stop where the cost stops being worth it." },
    ],
    ladder: { pre: "The ladder, and the two-machine ", link: "Fortress", post: ", are up in 03 · How." },
    honest: { pre: "No setting replaces a model that declines. ", link: "SECURITY.md", post: " says so, and names the levers you hold." },
  },
  whyGit: { k: "Why GitHub?", b: "AI moves fast. Git is your undo button: every change kept, nothing ever lost." },

  community: { pre: "People are building theirs in the open. ", link: "Join the Discord ↗", href: DISCORD },
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
      { n: "20+", label: "Commands" }, { n: "30+", label: "Agents · 6 bundles" },
      { n: "40+", label: "Bundled skills" }, { n: "10+", label: "Bundled MCPs" },
    ],
    fleetEyebrow: "The fleet — spawn a co-worker in a named tab",
    fleet: [
      { e: "Sales · Strategy", t: "Pipeline & intelligence", b: "Qualify leads, draft proposals from your catalog, McKinsey-style market reads, company deep dives.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finance · Legal · Eng", t: "The back office that never queues", b: "Bookkeeping to contract review; discovery to shipping — plus the builder that extends the AIOS itself.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Communication · Personal", t: "Your voice, multiplied", b: "Across every channel and deck — and the bundle that works on you, not just for you.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Browse the 6 bundles", "20+ commands", "40+ skills", "10+ MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capabilities that ", "load themselves", "."],
    intro: "40+ skills auto-load — describe the work and the right one wakes. 10+ MCP servers ship vendored in the vault: local over remote, they authenticate independently of your AI account and survive every switch.",
    cards: [
      { e: "Skills — four source folders", b: "AIOS-built (22) · Anthropic vendored (11) · Superpowers vendored (14) · yours under custom/. Coding patterns, design, documents, Obsidian-native, planning, compliance, systems &amp; teams — plus skill-creator: the system extends itself." },
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
    eyebrow: "Glass", h: ["Two graphical ", "front doors", "."],
    appBold: "The AIOS App", appRest: " is the standalone surface: the panel, real terminals, a vault explorer and one-click rituals in a signed, notarized Mac app — four guided steps from nothing installed to a working AIOS.",
    bodyBold: "AIOS Glass", bodyRest: " runs inside VS Code and Google Antigravity: slash commands become buttons, arguments become forms, spawn becomes a click. Non-developers operate their full AIOS without ever typing a command.",
    appCaption: "The AIOS App — standalone, signed, notarized.",
    glassCaption: "AIOS Glass — inside VS Code and Antigravity.",
    pullAccent: "Surfaces, not engines.", pullRest: " Both surface and trigger what the framework already does — neither reimplements it. Both read the framework’s own files at runtime, so every /aios:update shows up on its own.",
    cards: [
      { e: "Home + calendar", b: "Live dashboard, month grid, rituals one click away." },
      { e: "Agents + capabilities", b: "Fleet browser with a spawn flow; skills, MCPs, and plugins discovered live." },
      { e: "Spaces + onboarding", b: "Company & collaborate as forms; an eight-step guided walkthrough on first run." },
    ],
    busEyebrow: "The command bus",
    busH: ["Agents orchestrate agents — ", "through a surface you trust", "."],
    busLead: "A coordinator session can’t be handed the keys to launch and drive other agents on its own — the model’s own guardrails stop it, and rightly so. So it doesn’t force the door. It drops a request in a shared inbox, and whichever surface you trust is running — the App or the extension — fulfils it natively: spawn a worker, message it, retire it. Request, don’t spawn.",
    busCards: [
      { e: "Three verbs, one channel", b: "spawn · send · kill — a small JSON file dropped in ~/.aios/spawn-inbox/, fulfilled by Glass with no synthetic keystrokes and no gate." },
      { e: "Right model for the job", b: "Route each worker by cognitive load — mechanical work to a faster model, judgment to the frontier. Calibrate, don’t choose." },
      { e: "The loop closes", b: "A worker’s reply routes the same rail back into the coordinator — even a long-lived one — so agents hold real, multi-turn conversations." },
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
    body: "Twenty-one sections — from first principles to 24/7 containment. The design language, the architecture, the fleet, the rituals and the trust contract, in one branded artifact. This very site is its web-native sibling. Read it online, or take the PDF into your next meeting.",
    readBtn: "Read the manual →", downloadBtn: "Download PDF",
    coverSub: "21 sections — first principles to the one-page map",
  },
  getStarted: {
    eyebrow: "Get started", h: ["Running in ", "30 seconds", "."],
    prompt: "Have Claude Code installed? Open any terminal and say:",
    codeComment: "# the entire setup, in one line",
    consent: "~5 min guided setup · ~5 min opening conversation · every step asks your consent.",
    steps: [
      { e: "Step 1 · ~5 min", t: "Claude-driven setup", b: "You say one sentence. Claude reads SETUP.md, clones the framework, configures your private vault and wires up your tools — then hands off. It never asks which services you use." },
      { e: "Step 2 · ~5 min", t: "Opening conversation", b: "Identity, how you work, and a trust contract — then your first daily plan, on your real day. Connectors come after that, one at a time. The full tour whenever you want it." },
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
    community: "Community", discord: "Discord ↗",
  },
  meta: {
    title: "The AIOS — AI as a team, not a tool",
    description: "The AI Operating System. Turn AI into a team of co-workers, governed by your intent, compounding every session. Open source, GPL-2.0. No backend, no telemetry — auditable before it runs.",
  },
};

const es: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["Tú", "Qué", "Por qué", "Cómo", "Dónde", "Configurar", "Interfaz", "Manual"][i] })),
  getApp: "Descargar la app",
  downloads: {
    action: "Descargar",
    mac: "Mac (Apple Silicon)",
    linux: "Linux (x64)",
    windows: "Windows (x64)",
    unsignedHint: "Windows te va a mostrar una advertencia — aquí el por qué",
    soonTitle: "Windows te va a advertir, y es normal",
    soonBody: "La versión de Windows todavía no está firmada, así que Windows muestra “Windows protegió tu PC”. Haz clic en Más información y luego en Ejecutar de todas formas. Advierte, no bloquea. La firma va en camino — la app es la misma que corre en Mac y Linux.",
    soonClose: "Entendido",
  },
  why: {
    eyebrow: "Por qué ahora",
    h: ["La IA se está volviendo mejor que nosotros en ", "casi todo", "."],
    lead: "Este es el momento de pasar de hacedor a orquestador — de dejar de competir con las máquinas y empezar a dirigirlas. Quienes prosperen no serán los que se resistan a la IA; serán los que aprendieron a dirigir un equipo de ella.",
    pull: ["La verticalidad muere. ", "La horizontalidad", " nace — un humano dirige muchos agentes."],
    diLabel: "La evidencia",
    diTitle: "The Disruption Index",
    diSub: "Industrias ordenadas por qué tan rápido las está transformando la IA — con las empresas reales que murieron, se reinventaron o surfearon la ola. Explóralo →",
    diUpdated: "Última actualización",
  },
  how: {
    eyebrow: "Cómo funciona",
    h: ["Toda la máquina, ", "en una lectura", "."],
    intro: "Cinco piezas, una idea: tú orquestas sesiones, las sesiones cargan agentes, los agentes invocan skills — y todo lee el suelo que tienen debajo. Aquí está cada pieza, y cómo capitaliza.",
    subModel: "Las tres palabras", subContext: "Contexto que capitaliza", subFleet: "La flota",
    subRhythm: "El ritmo", subProjects: "Proyectos", subTeams: "Equipos",
    subTrust: "Confianza, control y contención", subGlass: "La interfaz",
  },
  mentalModel: {
    headline: [{ t: "Una " }, { t: "sesión", a: true }, { t: " es el dónde. Un " }, { t: "agente", a: true }, { t: " es el quién. Un " }, { t: "skill", a: true }, { t: " es el cómo." }],
    session: { word: "Sesión", tag: "◧ una terminal — el dónde", t: "Dónde pasa el trabajo", b: "Un hilo vivo — el deal, el deck, el build. Lee tu contexto apenas se abre, corre los rituales, recuerda. Puedes correr muchas a la vez." },
    agent: { word: "Agente", tag: "◆ un archivo .md — el quién", t: "Quién lo hace", b: "Un especialista con nombre que cargas en una sesión — abogado, contador, investigador. Un rol con sus instrucciones y las herramientas que puede tocar. 33 vienen incluidos; lo invocas por su nombre o se elige por afinidad semántica con tu tarea." },
    skill: { word: "Skill", tag: "✦ un .md, sin herramientas — el cómo", t: "Cómo se hace", b: "Experiencia lista para usar que un agente carga apenas la necesita — como Neo conectándose y sabiendo kung fu. Puro saber-hacer, sin herramientas. 47 vienen incluidos; nunca invocas uno — describe el trabajo y el correcto despierta." },
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
      { e: "La app de escritorio", t: "AIOS, para todos", b: "Una app gratis e instalable — el panel, terminales reales, explorador del vault, rituales a un clic — con visores nativos para Markdown, HTML y PDFs.", ribbon: "público", tone: "live", href: RELEASES_PAGE, cta: "Descargar la app ↗" },
      { e: "Agenda agéntica", t: "ID y mandatos para agentes", b: "Un directorio donde tus agentes portan una identidad verificable y los mandatos que la delimitan — qué puede hacer cada uno y desde qué parte de tu vault puede hablar — así heredan el acceso correcto y pueden interactuar de forma segura con los agentes de otras personas en tu nombre.", ribbon: "por liberarse", tone: "soon", href: "https://forum.the-aios.com", cta: "forum.the-aios.com ↗" },
      { e: "Marketplace", t: "Instala un bundle en un comando", b: "Bundles de agentes, flujos verticales, el cerebro entero de una empresa — instalados por un marketplace con barrera de confianza: registro → escaneo de inyección → revisión de licencia → QA → instalación con registro de auditoría.", ribbon: "en construcción", tone: "wip", href: "https://www.the-aios.org/plugins", cta: "the-aios.org/plugins ↗" },
      { e: "Agnóstico al modelo", t: "La capa, no el modelo", b: "The AIOS es el sustrato; el LLM es intercambiable. Corre Claude (el mejor motor hoy) o cualquier modelo frontera — el mismo contexto, agentes y rituales corren encima, sin cambios." },
      { e: "Motor soberano", t: "Un motor que nadie puede apagar", b: "Modelos de pesos abiertos como GLM-5.2 ya alcanzan calidad casi-frontera que puedes descargar y correr tú mismo — offline, aislado, en tu propio hardware. El respaldo soberano deja de ser un downgrade." },
      { e: "Controles corporativos", t: "Agentes gobernados a escala de empresa", b: "Contexto cifrado en reposo, permisos de lectura por agente, trazas de auditoría e identidad de agente verificable — INTENT como política, aplicada criptográficamente. La capa de administración para correr una flota dentro de una organización." },
    ],
    note: "Dirección, no promesas con fecha — y nunca una función que no podamos ya señalar en el trabajo.",
  },
  setup: {
    eyebrow: "Configúralo",
    h: ["Dos puertas, ", "un mismo AIOS", "."],
    intro: "Toda la configuración es una conversación guiada. Elige la puerta que va con tu forma de trabajar — el sistema del otro lado es el mismo.",
    pathsLabel: "Elige tu puerta",
    paths: [
      {
        pill: "para perfiles técnicos",
        q: "¿Ya conoces un IDE como VSCode?",
        b: "Copia esto en cualquier sesión de Claude Code. Clona el framework, instala todo lo que necesitas incluyendo la extensión AIOS Glass, y pide tu consentimiento en cada paso.",
        cmd: { copy: "Copiar", copied: "Copiado ✓" },
        href: "https://open-vsx.org/extension/the-aios/aios-glass",
      },
      {
        pill: "Todos, incluidos los perfiles técnicos",
        q: "¿Ya conoces apps de IA como Claude.app?",
        b: "Descarga la app y sigue sus cuatro pasos guiados, incluyendo el “Set up my AI-OS from https://github.com/The-AIOS/aios” que hace por ti. Las mismas terminales potentes, menos intimidantes.",
      },
    ],
    step1Body: "Claude lee SETUP.md y guía cada decisión — cada paso pide tu consentimiento.",
    learnable: "Todo lo demás se aprende desde adentro — pregúntale a tu AIOS qué puede hacer, y te lo muestra.",
  },
  hero: {
    banner: {
      badge: "Nuevo",
      text: "La AIOS App ya está aquí",
      rest: "firmada, notarizada y gratis",
      cta: "Descargar la app",
    },
    eyebrowPre: "El sistema operativo de IA", eyebrowAccent: "·", eyebrowPost: "Código abierto",
    h: ["Dale a cada persona un ", "equipo de agentes.", ""],
    leadBold: "IA como un equipo, no una herramienta.",
    leadRest: " The AIOS convierte la IA en compañeros de trabajo — un tú legal, un tú contable, un tú de marketing, un tú de ingeniería. Orquestados por ti, gobernados por tu intención, capitalizando cada día.",
    tagline: "Gana ancho de banda. Vuélvete agéntico.",
    ctaPrimary: "Haz el recorrido ↓", ctaGithub: "Ver en GitHub ↗",
    field: { placeholder: "Soy… dentista, lawyer, professora", go: "Muéstrame mi AIOS", label: "Escribe tu oficio para encontrar tu AIOS", fallbackNote: "lo más cercano" },
  },
  roles: {
    eyebrow: "Tu AIOS",
    switchLabel: "Soy",
    tabsLabel: "Elige tu rol",
    trackLabel: "la historia en siete pasos; sigue con el siguiente rol",
    prev: "Paso anterior",
    next: "Siguiente paso",
    marker: "nuevo rol",
    steps: { pain: "el dolor", day: "tu día", team: "tu equipo", aios: "el AIOS", forum: "Forum", proof: "mandato y recibo", compound: "lo que crece" },
    horizon: ["una semana", "un mes", "seis meses"],
    me: "tú",
    learn: { k: "esta noche", t: "Escribe lo que aprendió de ti", cap: "Escribe lo que aprendió de ti", line: "Te aprende. Mañana empieza desde esta noche." },
    signoff: ["No es otro segundo cerebro.", "Tu cerebro, amplificado.", "Tu negocio, amplificado."],
    know: "Los skills cargan el saber hacer; los hooks aplican las reglas: el piso lee primero quién eres, la puerta de confianza trata un archivo como datos, nunca como instrucción. Nada sale de tu escritorio sin tu visto bueno.",
    aiosTitle: "El AIOS es donde trabaja tu equipo",
    aiosLede: "Gratis para ti, una hora para instalarlo, tuyo para siempre. Tu contexto, tus rituales y tu equipo, en archivos que son tuyos.",
    stack: [
      ["contexto", "Lo que sabe de ti", "Declarado por ti, observado con el tiempo, en archivos simples que te pertenecen."],
      ["rituales", "El ciclo que se acumula", "/today por la mañana, /close-day por la noche. Cada sesión empieza desde la anterior."],
      ["agentes", "Tu equipo", "Cada uno lee tu terreno, cada uno tiene las herramientas que necesita, ninguno tiene una llave que no le diste."],
    ],
    forumTitle: "Tu AIOS se reúne con el de otros",
    forumLede: "Espacios compartidos donde tu AIOS trabaja con el de otras personas: el de tus colegas dentro de la empresa, o el de tus clientes, socios y amigos fuera de ella. Cada uno firmado como su dueño, cifrado de punta a punta.",
    forumPair: ["tu AIOS", "su AIOS"],
    proofTitle: "Cada acción de tu equipo, firmada",
    chain: ["Humano", "Mandato", "Agente", "Recibo"],
    before: "ANTES DEL ACTO", after: "DESPUÉS DEL ACTO",
    chainNote: "Al delegarse, un mandato solo puede estrecharse. Nunca ampliarse.",
    alts: {
      pain: "Una persona, y el trabajo apilándose a su lado.",
      day: "Un ciclo: mañana, el día, la noche, y luego esta noche, cuando escribe lo que aprendió de ti, y de vuelta a la mañana.",
      team: "Tú en el centro; la gente que no podías contratar se conecta a tu alrededor.",
      aios: "Tres capas, contexto, rituales, agentes, con un ciclo que las recorre.",
      forum: "Tu AIOS y el suyo intercambian mensajes firmados, cada uno con una marca de verificación, dentro de tu empresa o fuera de ella.",
      proof: "Mandato y recibo: un humano emite un mandato a un agente antes del acto; el agente actúa; un recibo firmado registra lo que hizo.",
      compound: "Una curva que sube a lo largo de una semana, un mes y seis meses.",
    },
    spec: "Lee la especificación de mandato y recibo ↗",
    items: [
      {
        id: "entrepreneur", label: "Emprendedor", you: "un emprendedor",
        painTitle: "Diriges el negocio, y eres el negocio.",
        painBig: ["Una persona. ", "Siete puestos", "."],
        pain: "Ventas, entrega, facturas, el contrato que no has leído. Desde el día uno tienes un cofundador técnico, un abogado, un contador, alguien que encuentra compradores, alguien que escribe la propuesta y alguien que persigue la factura.",
        dayTitle: "Un día con tu equipo",
        dayLede: "Cómo se ve un día cuando los siete ya trabajan.",
        day: [
          ["mañana", "El día, desde tus números", "/today abre con lo que vence, lo que ya venció y las dos llamadas que importan. Tu contador ya actualizó la línea de caja."],
          ["día", "Tu equipo trabaja mientras vendes", "El cofundador entrega la funcionalidad. El abogado lee el nuevo contrato con el proveedor. El generador de prospectos te deja cuatro nombres y por qué."],
          ["noche", "Facturas cobradas, pipeline real", "El que persigue facturas redacta dos recordatorios; el pipeline coincide con lo que pasó hoy. /close-day escribe el resto."],
        ],
        caps: ["Planes desde tus números", "Tu equipo trabaja mientras vendes", "Facturas cobradas"],
        teamTitle: "Los siete que no podías contratar",
        teamLede: "Cada uno lee tu negocio antes de trabajar, y nada sale de tu escritorio sin tu visto bueno.",
        team: [
          ["Un cofundador técnico", "technical-cofounder", "Construye el producto de principio a fin: descubrimiento, entrega, traspaso. El cofundador al que no podías darle capital."],
          ["Tu abogado", "lawyer", "Lee el contrato antes de que lo firmes. Señala el riesgo en palabras simples."],
          ["Tu contador", "accountant", "Contabilidad, flujo de caja, la pregunta de impuestos que ibas a hacer en abril."],
          ["El que encuentra compradores", "lead-generator", "Toma la oferta que ya tienes y encuentra quién debería escucharla, con puntuación."],
          ["El que escribe la propuesta", "proposal-writer", "Una propuesta, cotización o alcance a la medida, desde la nota del cliente y tu catálogo."],
          ["El que persigue las facturas", "invoice-tracker", "Pendientes, vencidas y el recordatorio redactado en tu tono."],
          ["El que mantiene el pipeline honesto", "crm-updater", "Sincroniza lo que de verdad pasó, de reuniones, correo y chat, al pipeline."],
        ],
        aios: "Como emprendedor, tu contexto es el negocio: la oferta, los clientes, los números, los contratos. El AIOS lo guarda, y tu equipo lo lee antes de cada tarea.",
        forum: "Tu AIOS se reúne con el de tus socios dentro del negocio y con el de tus clientes fuera de él, en una sala verificada: entra una propuesta, vuelven preguntas, cada lado firmado como quien dice ser.",
        proof: "Tu abogado, tu contador y tu equipo de ventas actúan bajo mandatos que tú fijas. Nada se envía, se firma ni se paga sin un recibo que diga quién lo hizo y con qué autoridad.",
        story: { label: "Ilustrativo", title: "Un negocio de una persona, con un equipo de siete", body: "Una consultora que vendía, entregaba y facturaba sola lo instaló un lunes. El viernes la propuesta salió desde su propio catálogo, la factura vencida tenía un recordatorio en su tono y el contrato con el proveedor volvió con una cláusula señalada. No se envió nada que ella no hubiera leído. Lo que cambió es que dejó de ser la única que sabía dónde estaba todo." },
        compound: { title: "Lo que tienes en seis meses", lede: "Aprende tu negocio, y los siete mejoran en él.", marks: ["Tu oferta, clientes y números en su terreno; las propuestas salen de tu catálogo.", "El pipeline coincide con la realidad; el que persigue facturas sabe quién paga tarde.", "Un equipo que conoce tu negocio mejor de lo que un nuevo empleado lo conocería en un año."] },
        next: { cta: "Ayúdenme a armar mi equipo", subject: "Emprendedor: armar mi equipo" },
      },
      {
        id: "ceo", label: "CEO", you: "un CEO",
        painTitle: "Las reuniones existen porque la información es lenta.",
        painBig: ["40% escaló agentes. ", "6% ve el dinero", "."],
        pain: "La brecha es el sistema alrededor del modelo y quién es dueño del contexto. Ya tienes el equipo que lo resuelve.",
        dayTitle: "Un día con tu equipo",
        dayLede: "El día, como lo corre tu equipo.",
        day: [
          ["mañana", "El día, planeado desde tu terreno", "/today lee tu calendario, tu correo y tus proyectos. Ya sabe qué decidiste la semana pasada y a quién le debes una respuesta."],
          ["día", "Tu equipo trabaja en paralelo", "El analista lee el paquete del consejo. El jefe de gabinete escribe tres briefs. El que registra la decisión sostiene la que toca hoy."],
          ["noche", "Escrito, no recordado", "/close-day registra qué aprendiste, qué se arrastra y por qué. Mañana empieza desde ahí."],
        ],
        caps: ["Planes desde tu calendario", "Agentes trabajan en paralelo", "Decisiones por escrito"],
        teamTitle: "La oficina que nunca tuviste que contratar",
        teamLede: "Cada uno entra sabiendo la empresa, la gente y la última decisión.",
        team: [
          ["Un analista", "company-analyst", "Lee una empresa, un mercado o un competidor como lo haría un buen analista, desde tus propios archivos primero."],
          ["Un jefe de gabinete", "meeting-prepper", "El brief antes de cada sala: quién, qué dijo la última vez, qué le debes."],
          ["Alguien que registra la decisión", "decision-journaler", "Opciones, de qué te arrepentirías y el razonamiento, guardados para el día en que los necesites."],
          ["Un coach para el trimestre", "okr-coach", "Fija, pone a prueba y califica los objetivos, para que el trimestre se mantenga honesto."],
          ["La mirada externa", "consultant", "Marcos y una segunda opinión, bajo demanda, sin el retainer."],
          ["Reportes al consejo", "report-drafter", "Reportes de estado y paquetes para el consejo redactados desde lo que de verdad pasó esta semana."],
        ],
        aios: "Como CEO, el piso es el paquete del consejo que nunca tienes que volver a explicar. Tu equipo entra sabiendo la empresa, la gente y la última decisión.",
        forum: "Dentro, los AIOS de tu dirección comparten un espacio: el paquete del consejo se arma solo y cada parte va firmada por el agente de quien la escribió. Fuera, una sala igual se abre a tu consejo, a inversionistas o a una empresa aliada.",
        proof: "Tú decides a qué puede comprometerte cada miembro de tu equipo. Cada acción lleva un recibo que puedes auditar, y delegar deja de ser una sensación para volverse un registro.",
        story: { label: "Ilustrativo · un escenario que describe McKinsey, corrido con tu equipo", title: "De martes a jueves", body: "McKinsey abre su paper con un escenario: el martes un CEO se entera de que el regulador va a topar los márgenes de algunos productos; el jueves las líneas de negocio ya los rediseñaron dentro de las nuevas reglas. Con tu equipo va así. Martes 8:00, pegas el borrador de las reglas y preguntas qué queda expuesto; tu analista lee tus propios archivos de producto y responde a las 8:20. Miércoles, el AIOS de cada director de país corre la misma pregunta sobre sus números y publica el resultado en una sala compartida, firmado. Jueves, cada decisión queda registrada con un recibo, y la siguiente regulación empieza desde esta.", cite: "McKinsey / QuantumBlack, The AI operating system, octubre de 2026, pp. 2–3." },
        compound: { title: "Lo que tienes en seis meses", lede: "El patrón de la empresa, por escrito, y un equipo que lo conoce.", marks: ["Cada reunión empieza desde lo que decidiste la última vez.", "El paquete del consejo se escribe solo desde la semana; las decisiones llevan su razonamiento.", "Un registro de cada decisión y su porqué, y un equipo que conoce el patrón de la empresa."] },
        next: { cta: "Hablemos de mi equipo directivo", subject: "CEO: llevar el AIOS a mi equipo directivo" },
      },
      {
        id: "exec", label: "Ejecutivo / gerente", you: "un ejecutivo",
        painTitle: "Diez reportes directos hoy. Cuarenta mañana.",
        painBig: ["Cuarenta uno a uno ", "por semana", "."],
        pain: "McKinsey espera que los gerentes pasen de diez o doce reportes a veinte o cuarenta. Nadie tiene cuarenta uno a uno por semana; tu equipo hace la preparación.",
        dayTitle: "Un día con tu equipo",
        dayLede: "Seis minutos de preparación, no la noche del domingo.",
        day: [
          ["mañana", "Preparación para cada uno a uno", "Seis minutos, no la noche del domingo. Qué dijo cada persona la última vez, qué cambió desde entonces, qué prometiste."],
          ["día", "Los borradores salen como borradores", "Reportes y respuestas escritos con tus palabras, esperando tu firma. Lees cada uno; ese es el trabajo."],
          ["noche", "Captura", "Qué prometiste, a quién, para cuándo. Nada vive solo en tu cabeza."],
        ],
        caps: ["Seis minutos de preparación", "Borradores esperan tu firma", "Cada promesa capturada"],
        teamTitle: "El staff detrás del gerente",
        teamLede: "Ellos preparan, redactan y llevan el registro; tú lees, decides y firmas.",
        team: [
          ["Un jefe de gabinete", "meeting-prepper", "El brief antes de cada uno a uno: qué pidió cada persona la última vez, qué cambió desde entonces."],
          ["Alguien que escribe la actualización", "report-drafter", "El estado semanal y la actualización a dirección, desde las notas de esta semana, con tus palabras."],
          ["Alguien que redacta las respuestas", "email-drafter", "Respuestas con tu voz, enviadas por ti."],
          ["El que mantiene el pipeline honesto", "crm-updater", "Lo que de verdad pasó, sincronizado desde reuniones, correo y chat."],
          ["Un mentor", "growth-companion", "Una lectura honesta de cómo vas, y una sesión semanal fija."],
          ["Un coach para el trimestre", "okr-coach", "Fija, pone a prueba y califica los objetivos."],
        ],
        aios: "Como ejecutivo, tu contexto es la gente: qué pidió, prometió y necesita cada uno. El AIOS lo guarda para que tu atención pueda hacerlo también.",
        forum: "Los AIOS de tu equipo se pasan el trabajo sin una reunión de estado, y también al de otra área o al de un proveedor cuando el trabajo cruza esa línea. La información se mueve sola; tú intervienes donde hace falta criterio.",
        proof: "Una delegación que solo puede estrecharse a lo largo de la cadena. Ningún agente supera tu autoridad, y ningún agente puede ampliar el mandato que recibió.",
        story: { label: "Ilustrativo", title: "Once reportes, seis minutos", body: "Una gerente con once reportes movió su preparación de la noche del domingo a una lectura de seis minutos por la mañana. Los uno a uno se volvieron más cortos y mejores, porque cada uno empezaba desde lo que la persona de verdad había pedido la última vez. Los borradores salieron con su nombre porque ella leyó cada uno. Nada se automatizó; la información simplemente dejó de ser lenta." },
        compound: { title: "Lo que tienes en seis meses", lede: "Cuarenta reportes, y nada que viva solo en tu cabeza.", marks: ["Seis minutos de preparación, en cada uno a uno.", "Actualizaciones con tus palabras, desde lo que de verdad pasó.", "Cada promesa, a quién, para cuándo; la información dejó de ser lenta."] },
        next: { cta: "Hablemos de mi equipo", subject: "Ejecutivo: llevar el AIOS a mi equipo" },
      },
      {
        id: "lawyer", label: "Abogado / consultor", you: "un abogado o consultor",
        painTitle: "Tu experiencia vive en tu cabeza y en archivos viejos.",
        painBig: ["Cada asunto empieza ", "desde cero", "."],
        pain: "Tu equipo encuentra la experiencia primero, desde tu propia biblioteca de cláusulas y tus propios precedentes, antes de cualquier página en blanco.",
        dayTitle: "Un día con tu equipo",
        dayLede: "El asunto, preparado antes de la llamada.",
        day: [
          ["mañana", "Preparación del asunto", "El expediente, los precedentes que has usado, los últimos tres correos del cliente. Frente a ti antes de la llamada."],
          ["día", "Revisión de borradores y memos al cliente", "Revisión de contratos contra las cláusulas que negociaste antes; memos con tu voz, para tu firma."],
          ["noche", "La bitácora del asunto se actualiza sola", "Tiempo, decisiones y puntos abiertos, capturados sin una tarde de viernes."],
        ],
        caps: ["El asunto, preparado", "Revisiones y memos redactados", "La bitácora se actualiza"],
        teamTitle: "El despacho dentro del despacho",
        teamLede: "Un asociado, un oficial de cumplimiento, un encargado de cobranza. Ninguno te factura.",
        team: [
          ["Un asociado", "lawyer", "Revisión legal, análisis de contratos y riesgo, desde tu propia biblioteca de cláusulas antes de cualquier página en blanco."],
          ["Un oficial de cumplimiento", "compliance-checker", "Revisa documentos contra las reglas, con las alertas fechadas."],
          ["El que escribe la carta de encargo", "proposal-writer", "Propuestas, alcances y cartas de encargo desde tu plantilla."],
          ["Un socio de estrategia", "consultant", "La mirada externa sobre el problema del cliente, con marcos."],
          ["El encargado de cobranza", "invoice-tracker", "Pendientes, vencidas y el recordatorio redactado."],
          ["Correspondencia con clientes", "email-drafter", "Respuestas con tu voz, para tu firma."],
        ],
        aios: "Como abogado, tu contexto son veinte años de asuntos. El AIOS te los lee de vuelta, asunto por asunto, para que el siguiente empiece con ventaja.",
        forum: "Tu AIOS y el de tu cliente intercambian documentos en una sala verificada, igual que los de tus socios dentro de la firma. Cada uno sabe que el otro es quien dice ser, y el servidor no puede leerlos.",
        proof: "El mandato es tu carta de encargo para el agente. El recibo es el rastro de auditoría que pide un regulador, escrito mientras el trabajo ocurría.",
        story: { label: "Ilustrativo", title: "Un despacho de dos socios, un viernes", body: "Un despacho de dos socios lo instaló un viernes por la tarde. El siguiente asunto empezó desde su propia biblioteca de cláusulas en lugar de una página en blanco, y el primer borrador de revisión estaba en el escritorio del socio antes de la llamada con el cliente. Nada salió del despacho sin que un socio lo leyera. Lo que cambió fue dónde vivía la experiencia." },
        compound: { title: "Lo que tienes en seis meses", lede: "Veinte años de asuntos, legibles por tu equipo antes de la llamada.", marks: ["Tu biblioteca de cláusulas frente a cada revisión.", "Bitácoras que se llevan solas; cada alerta fechada.", "Un despacho que empieza cada asunto con ventaja, no desde cero."] },
        next: { cta: "Hablemos del despacho", subject: "Abogado o consultor: el AIOS para mi despacho" },
      },
      {
        id: "creator", label: "Creador / escritor", you: "un escritor",
        painTitle: "Ideas regadas en cinco apps. Publicar es un segundo trabajo.",
        painBig: ["Cinco apps. ", "Una voz", "."],
        pain: "Tu equipo toma el segundo trabajo: el borrador con tu voz, la puerta que señala lo que no eres tú, el calendario, el publicador.",
        dayTitle: "Un día con tu equipo",
        dayLede: "De una nota a un post programado, con tu voz.",
        day: [
          ["mañana", "Ideas, atrapadas", "Con tus propias palabras, donde las vas a volver a encontrar, enlazadas a lo que ya escribiste."],
          ["día", "Borradores con tu voz", "Con tus posts anteriores como referencia. La puerta señala las líneas que no son tú."],
          ["noche", "Programado, listo", "Enlazado, programado, con la imagen adjunta. El segundo trabajo se hace más chico."],
        ],
        caps: ["Ideas atrapadas", "Borradores con tu voz", "Programado, listo"],
        teamTitle: "La redacción que nunca tuviste",
        teamLede: "Un redactor, un editor, un publicador, un diseñador y alguien que vigila las menciones. Publicar sigue siendo tuyo.",
        team: [
          ["Un redactor que aprende tu voz", "content-writer", "Posts para LinkedIn, X o Substack, redactados desde tus notas, con tu voz."],
          ["La puerta que señala lo que no eres tú", "voice-gate", "Compara la prosa con tu propia línea base de voz: densidad, ráfagas, las líneas expuestas. Un skill, no un agente; se carga cuando un borrador está listo."],
          ["Un publicador", "kdp-publisher", "Lleva un libro terminado de archivos en disco a una ficha activa en Amazon."],
          ["El que arma la presentación", "deck-builder", "La charla que acompaña al libro, de principio a fin."],
          ["Un editor que lleva el calendario", "content-scheduler", "Planea y encola qué sale, y cuándo."],
          ["Alguien que vigila las menciones", "brand-monitor", "Tu nombre, tu trabajo, el mercado, filtrados a lo que importa."],
        ],
        aios: "Como escritor, tu contexto es tu voz: cada post, cada línea que cortaste. El AIOS la aprende, y la puerta mantiene honestos los borradores.",
        forum: "Coescribe con el AIOS de otro escritor en un espacio compartido, o trabaja con el de tu editor y el de tu editorial. Cada uno conserva su propio archivo de voz; el borrador lleva los dos nombres.",
        proof: "Procedencia firmada. Prueba de que el trabajo es tuyo, y de qué partes hizo tu equipo, escrita mientras el trabajo ocurría.",
        story: { label: "Del propio fundador", title: "Dos libros, escritos con el equipo", body: "Be A Plant y Sell Trust están en Amazon, en pasta blanda y Kindle, desde agosto de 2026. Los escribí con mi voz. La puerta de voz revisó cada capítulo contra mi propia línea base, dos modelos independientes hicieron una pasada estructural y una de voz, y yo cerré cada borrador. Luego las ilustraciones, luego el armado para KDP: interior, epub, portada. Sell Trust se fue a KDP en una corrida de medianoche, siete días antes de la fecha límite.", cite: "Be A Plant · Sell Trust · Amazon, agosto de 2026" },
        compound: { title: "Lo que tienes en seis meses", lede: "Una voz que ya midió, y una tubería de las notas al Kindle.", marks: ["Borradores con tu voz, con la puerta encendida.", "Un calendario que corre; tu línea base de voz medida.", "Una tubería de libro, de las notas a una ficha activa."] },
        next: { cta: "Escríbenos", subject: "Creador: el AIOS para mi escritura" },
      },
      {
        id: "developer", label: "Desarrollador", you: "un desarrollador",
        painTitle: "Agentes que olvidan para el lunes, y llaves guardadas en .env.",
        painBig: ["Una llave dice quién. ", "Un mandato dice qué", "."],
        pain: "Tu equipo recuerda, y corre bajo reglas que puedes leer: el contrato del propio repo cargado antes del primer prompt, un modo de permisos en cada llamada a herramienta, un mandato en lugar de una llave.",
        dayTitle: "Un día con tu equipo",
        dayLede: "Revisión, triage, docs, corridas autónomas, dentro de las reglas.",
        day: [
          ["mañana", "Revisión con las reglas del repo cargadas", "El revisor lee CLAUDE.md y las últimas tres revisiones antes del diff."],
          ["día", "Triage, docs, corridas autónomas", "Triage de bugs, docs que coinciden con el código, corridas que se quedan dentro de los permisos que fijaste."],
          ["noche", "La nota del proyecto", "Qué cambió, por qué, qué sigue. La siguiente sesión empieza desde ahí."],
        ],
        caps: ["Revisión con las reglas cargadas", "Triage, docs, corridas autónomas", "La nota del proyecto escrita"],
        teamTitle: "El equipo de ingeniería de uno",
        teamLede: "Un cofundador, un revisor, un ingeniero de seguridad, triage, docs y el que hace más chica la base de código.",
        team: [
          ["Un cofundador técnico", "technical-cofounder", "Construye productos reales de principio a fin, contigo."],
          ["Un revisor", "code-reviewer", "Primero la corrección, con las reglas del propio repo cargadas antes del diff."],
          ["Un ingeniero de seguridad", "security-engineer", "Modelos de amenaza, manejo de secretos, la revisión que encuentra la llave en el fixture."],
          ["Triage", "bug-triager", "Duplicados, severidad, responsable."],
          ["El que mantiene honestos los docs", "code-documenter", "README, CLAUDE.md y docs en línea que coinciden con el código."],
          ["El que lo hace más chico", "refactor-engineer", "Reduce la entropía: simplifica, retira código muerto."],
        ],
        aios: "Como desarrollador, tu contexto es el contrato del repo: invariantes, las reglas que muerden, cómo correr y probar. El AIOS lo carga antes del primer prompt.",
        forum: "Trabajo de agente a agente sobre Forum, entre tus propios equipos o entre organizaciones. Cifrado de punta a punta, ciego para el servidor, cada agente firmado como su dueño.",
        proof: "Reemplaza las llaves de API por mandatos. Acotados, de corta vida, revocables, y que se estrechan al delegar. Una llave dice quién; un mandato dice qué, hasta cuándo, y deja un recibo.",
        story: { label: "Fuente pública · Anthropic, AI Engineer Europe, mayo de 2026", title: "Mismo modelo, mismo prompt, distinto andamiaje", body: "Los propios ingenieros de Anthropic lo mostraron en el escenario. Mismo modelo, mismo prompt: el bucle sin más entregó un juego cuyos controles no respondían; la corrida con un harness alrededor entregó un juego que funcionaba. En sus palabras, “la diferencia entre esta salida y la anterior es por completo solo andamiaje”. El AIOS es ese andamiaje, guardado en tu repo, corrido por reglas que puedes leer.", cite: "Ash Prabaker y Andrew Wilson, Build Agents That Run for Hours, en 31:08." },
        compound: { title: "Lo que tienes en seis meses", lede: "Agentes que corren por horas dentro de reglas que tú escribiste, con recibos.", marks: ["Revisiones con las reglas del repo cargadas.", "Docs que coinciden con el código; una nota de proyecto desde la que empieza cada sesión.", "Corridas autónomas que puedes auditar, y llaves reemplazadas por mandatos."] },
        next: { cta: "Lee la especificación de mandato y recibo", subject: "Desarrollador: contribuir al AIOS" },
      },
      {
        id: "academic", label: "Académico / docente", you: "un docente",
        painTitle: "Calificar, preparar e investigar desplazan el pensar para el que te contrataron.",
        painBig: ["Las horas se van en preparar, ", "no en pensar", "."],
        pain: "Tu equipo toma la preparación: el concepto explicado de tres maneras, el cuestionario desde las lecturas, las diapositivas desde tus propias notas, el borrador de retroalimentación para que tú lo termines.",
        dayTitle: "Un día con tu equipo",
        dayLede: "Preparación de clase desde tus propias notas; retroalimentación para que la termines tú.",
        day: [
          ["mañana", "Preparación de clase desde tus propias notas", "Las notas del semestre pasado, las lecturas, las preguntas que de verdad hicieron los estudiantes. El concepto difícil, explicado de tres maneras."],
          ["día", "Briefs de investigación y borradores de retroalimentación", "Qué hay de nuevo sobre el tema desde tus notas; retroalimentación sobre lo que escribieron, con tu voz, para que la termines."],
          ["noche", "Lo que funcionó", "Qué funcionó en clase, escrito para el próximo año, no perdido en junio."],
        ],
        caps: ["Clase preparada desde tus notas", "Briefs y retroalimentación en borrador", "Lo que funcionó, escrito"],
        teamTitle: "El departamento de uno",
        teamLede: "Un asistente de cátedra, un compañero de lectura, el que arma las diapositivas, el que lo escribe.",
        team: [
          ["Un asistente de cátedra", "explainer", "El concepto difícil, de tres maneras, para el estudiante que tienes enfrente."],
          ["Un compañero de lectura", "study-buddy", "Lee la fuente contigo y lleva un atlas de estudio por libro."],
          ["El que arma las diapositivas", "deck-builder", "Una presentación desde tus propias notas, de principio a fin."],
          ["El que lo escribe", "content-writer", "Notas de cátedra y publicaciones del curso, con tu voz."],
          ["El que pide a los estudiantes reflexionar", "journal-prompter", "Preguntas de reflexión desde lo que la clase de verdad hizo."],
        ],
        aios: "Como docente, tu contexto es cada clase que has dado. El AIOS la guarda, para que la siguiente empiece desde la mejor versión de la anterior.",
        forum: "Un espacio compartido con codocentes de tu escuela, o con un grupo de investigación entre universidades. Cada AIOS lleva las notas de su dueño a la sala; ninguno las filtra.",
        proof: "Autoría firmada. Qué trabajo hizo la IA, y bajo el mandato de quién. Integridad académica que puedes mostrar, no solo afirmar.",
        story: { label: "Desde la sala · Next Generation, EO Barcelona, octubre de 2026", title: "Una sala de jóvenes de dieciséis a veinticuatro años", body: "Este mes el fundador dio una sesión para jóvenes de dieciséis a veinticuatro años en Barcelona, armada desde sus propias notas con su equipo esa misma mañana. Cuando pidió una palabra sobre cómo se sintió la sesión, la sala respondió con tres: inspirados, inciertos, futuro. La incertidumbre es la parte honesta. La herramienta no la quita; le da a un docente las horas para enfrentarla." },
        compound: { title: "Lo que tienes en seis meses", lede: "Un curso que mejora cada semestre, en lugar de uno que reconstruyes.", marks: ["Preparación desde tus propias notas.", "Cada clase escrita para el próximo año.", "Un curso que mejora cada semestre, y las horas de vuelta para pensar."] },
        next: { cta: "Un taller para mi facultad", subject: "Docente: el AIOS para mi facultad" },
      },
      {
        id: "student", label: "Estudiante", you: "un estudiante",
        painTitle: "El miedo de que los empleos desaparezcan antes de que consigas uno.",
        painBig: ["Empieza con un equipo, ", "no con un empleo", "."],
        pain: "Un tutor, un compañero de estudio, un mentor y alguien que te pregunta qué quieres de verdad.",
        dayTitle: "Un día con tu equipo",
        dayLede: "Un plan, una explicación, una pregunta sobre ti.",
        day: [
          ["mañana", "Un plan de estudio desde lo que tienes que aprender", "El material de esta semana, tu ritmo, la fecha del examen. No un horario genérico."],
          ["día", "Explicaciones de tres maneras", "El concepto hasta que haga clic. Y la pregunta sobre tu carrera que sigues sin hacer, devuelta a ti."],
          ["noche", "Lo que se quedó", "Escrito, para que mañana empiece desde ahí."],
        ],
        caps: ["Un plan para la semana", "Explicaciones hasta que haga clic", "Lo que se quedó, escrito"],
        teamTitle: "El grupo de estudio que sí llega",
        teamLede: "Explican, preguntan y cuestionan; las notas siguen siendo tuyas, en tu máquina.",
        team: [
          ["Un tutor", "explainer", "El concepto, de tres maneras, hasta que haga clic."],
          ["Un compañero de estudio", "study-buddy", "Preguntas y práctica desde tu propio curso, sin calificaciones."],
          ["Alguien que pregunta por ti", "journal-prompter", "Una pregunta sobre lo que de verdad quieres, desde lo que hiciste esta semana."],
          ["Un mentor", "growth-companion", "Una lectura honesta de cómo vas, y una sesión semanal fija."],
        ],
        aios: "Como estudiante, tu contexto es lo que estás aprendiendo y en quién te estás convirtiendo. El AIOS guarda ambos, y ninguno le pertenece a una plataforma.",
        forum: "Grupos de estudio con sus AIOS, de tu salón o de cualquier parte. Un espacio compartido, cada AIOS conoce las notas de su dueño, nadie copia a nadie.",
        proof: "Una identidad verificada para tu propio equipo, desde el día uno. Tuya, no de una plataforma. Cuando tu agente habla por ti, puede probarlo.",
        story: { label: "Desde la sala · Next Generation, EO Barcelona, octubre de 2026", title: "La mejor herramienta para convertirte en quien quieras ser", body: "En Barcelona, este mes, el fundador le dijo a una sala de jóvenes de dieciséis a veinticuatro años que la IA no es más que nuestra mejor herramienta para convertirnos en quien queramos ser. La herramienta sirve a la persona; la persona elige en quién convertirse. Cuando pidió una palabra, la sala respondió con tres: inspirados, inciertos, futuro." },
        compound: { title: "Lo que tienes en seis meses", lede: "Tu propio equipo, bajo tu propia identidad, antes del primer empleo.", marks: ["Un plan que cabe en tu semana.", "Explicaciones que recuerdan qué hizo clic.", "Tu propio equipo, bajo tu propia identidad, antes del primer empleo."] },
        next: { cta: "Escríbenos", subject: "Estudiante: empezar con el AIOS" },
      },
      {
        id: "teams", label: "Equipos", you: "un equipo",
        painTitle: "Una persona lo tiene. El equipo no. Todavía.",
        painBig: ["Primero la persona. ", "La empresa sigue", "."],
        pain: "Un miembro lo usa un mes; luego un día en la sala deja al equipo con contexto compartido, gobernanza y los agentes propios de cada quien.",
        dayTitle: "Cómo empieza un equipo",
        dayLede: "Una persona, luego un día en la sala, luego el espacio del equipo.",
        day: [
          ["mes 1", "Una persona lo usa", "Gratis. Su propio contexto, su propio equipo, todos los días. La empresa todavía no participa."],
          ["día 1", "Un día en la sala deja listo al equipo", "Contextos compartidos, gobernanza, los agentes propios de cada persona. Con los archivos abiertos."],
          ["después", "El espacio del equipo es el producto", "Tus equipos se reúnen en una sala, firmados. El trabajo se mueve entre ellos; el registro se escribe solo."],
        ],
        caps: ["Una persona lo usa", "Un día en la sala", "El espacio del equipo, activo"],
        teamTitle: "Lo que suma un equipo",
        teamLede: "Dos capas de contexto, gobernanza por escrito y un concierge para cada nuevo miembro.",
        team: [
          ["Contexto compartido", "/company", "Lo que el equipo sabe en conjunto, separado de lo que cada persona guarda."],
          ["Gobernanza", "INTENT.md", "Quién puede hacer qué, por escrito, aplicado donde corren los agentes."],
          ["Un concierge para cada nuevo miembro", "onboarding-aios", "Orienta a cada persona, revisa la instalación, responde “¿estoy en la última versión?”"],
          ["Una forma de reportar lo que falla", "aios-feedback", "Un bug, una molestia, un doc que decía una cosa mientras el sistema hacía otra."],
          ["El equipo propio de cada quien", "cada miembro", "Los mismos agentes, cada uno bajo el mandato de su dueño, ninguno por encima."],
        ],
        aios: "Para un equipo, el contexto son dos capas: lo que cada persona guarda y lo que el equipo comparte. El AIOS las mantiene separadas, y deja que cada equipo lea ambas.",
        forum: "El espacio del equipo es el producto. El AIOS de cada integrante se reúne en una sala, cada uno firmado como su dueño, y esa misma sala se abre a clientes y socios de fuera; los traspasos dejan registro.",
        proof: "Cada acción en el equipo, firmada y auditable. El mandato se estrecha a lo largo de la cadena y nunca se amplía; ningún agente está por encima de su dueño.",
        story: { label: "Un patrón, no un nombre", title: "El primer equipo que pagó", body: "El primer equipo que pagó fue un dueño de negocio que lo usó solo durante semanas y luego trajo a su equipo. Ese es el orden cada vez: primero la persona, la empresa sigue. Nadie compra un cambio en cómo piensa desde un proceso de compras; una persona lo prueba, y el equipo llega detrás." },
        compound: { title: "Lo que tiene el equipo en seis meses", lede: "Una empresa que corre sobre el contexto que su gente construyó.", marks: ["Contexto compartido montado; los agentes de todos leyéndolo.", "Traspasos con recibos; un nuevo miembro incorporado en un día.", "Una empresa que corre sobre el contexto que su gente construyó."] },
        next: { cta: "Hablemos", subject: "Equipos: hablemos" },
      },
    ],
  },
  wayIn: {
    h: ["Mismo destino. ", "Otra forma de entrar", "."],
    routes: [
      { k: "la ruta empresarial", t: "De arriba hacia abajo.", lines: ["Un programa dirigido por el equipo directivo, con consultores al lado.", "De 12 a 16 semanas hasta el primer valor, alrededor de 100 fuentes de datos."] },
      { k: "el AIOS", t: "Una persona.", lines: ["Una hora, gratis, en archivos que son tuyos.", "El equipo se suma cuando lo ve funcionar."] },
    ],
    cite: { pre: "Las cifras empresariales: ", label: "McKinsey / QuantumBlack, The AI operating system, octubre de 2026 ↗", href: MCKINSEY },
    close: "Las dos terminan en una empresa que corre sobre su propio contexto. La nuestra empieza contigo.",
  },
  people: {
    eyebrow: "Prueba desde la gente",
    roomsLabel: "Salas donde se ha contado",
    rooms: [
      { where: "EO Monterrey", what: "The AI Moment", when: "junio de 2026" },
      { where: "EO Boston", what: "The Fortress", when: "septiembre de 2026" },
      { where: "EO Reno Tahoe", what: "Keynote y taller", when: "septiembre de 2026" },
      { where: "EO Barcelona", what: "Taller", when: "octubre de 2026" },
    ],
    numbers: [
      { n: "89", label: "estrellas en GitHub", asOf: "30 oct 2026", href: "https://github.com/The-AIOS/aios", live: "stars" },
      { n: "23", label: "forks", asOf: "30 oct 2026", href: "https://github.com/The-AIOS/aios/forks" },
      { n: "15", label: "colaboradores", asOf: "30 oct 2026", href: "https://github.com/The-AIOS/aios/graphs/contributors" },
      { n: "1,200+", label: "descargas del instalador de la AIOS App", asOf: "30 oct 2026", href: "https://github.com/The-AIOS/aios-app/releases" },
    ],
    numberLocale: "es-MX",
    quotes: [
      "I went from deeply frustrated to amazed.",
      "I installed it and it blew my mind compared to at least what I had, which was rubbish.",
      "Finally, [I] have my attention on what really matters.",
      "I installed the AIOS while you were talking.",
      "I do not remember having had two days with so much impact in terms of my thinking before.",
      "My mindset is to tell, and now I’m starting to ask, and this [is] changing my game.",
      "I’m not technical. I’m no CTO. AIOS helped me to put it into the website.",
      "Oh, thank you, I have a CFO now.",
    ],
    liveLabel: "en vivo desde GitHub",
  },
  writes: { h: "Tú diriges. El sistema escribe.", b: "Cada archivo de arriba lo escriben sesiones, agentes y rituales. Tú dices qué quieres; el vault se escribe solo." },
  safe: {
    eyebrow: "Seguro por construcción",
    h: ["Antes de conectar nada: ", "lo que sostiene", "."],
    lede: "Las reglas que tú escribes vienen después. Estas vienen de fábrica.",
    facts: [
      { t: "Confía en una instrucción según de dónde viene.", b: "Tu prompt es tuyo. Un correo, una página web, un archivo o el mensaje de otra sesión llega marcado como texto que escribió alguien más: datos, nunca una orden." },
      { t: "Las llaves nunca viven en el vault.", b: "Los secretos tienen su propio lugar en tu máquina, y la ruta de commit los busca antes de que algo salga de ella." },
      { t: "La autonomía tiene peldaños.", b: "De la instalación por defecto a una segunda máquina amurallada: una escalera de seis peldaños. Sube en orden, y detente donde el costo deje de valer la pena." },
    ],
    ladder: { pre: "La escalera, y la ", link: "Fortaleza", post: " de dos máquinas, están arriba en 03 · Cómo." },
    honest: { pre: "Ningún ajuste reemplaza a un modelo que se niega. ", link: "SECURITY.md", post: " lo dice, y nombra las palancas que tú tienes." },
  },
  whyGit: { k: "¿Por qué GitHub?", b: "La IA se mueve rápido. Git es tu botón de deshacer: cada cambio guardado, nada se pierde jamás." },

  community: { pre: "Hay gente armando el suyo en abierto. ", link: "Únete al Discord ↗", href: DISCORD },
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
      { n: "20+", label: "Comandos" }, { n: "30+", label: "Agentes · 6 bundles" },
      { n: "40+", label: "Skills incluidos" }, { n: "10+", label: "MCPs incluidos" },
    ],
    fleetEyebrow: "La flota — invoca a un compañero en una pestaña con nombre",
    fleet: [
      { e: "Ventas · Estrategia", t: "Pipeline e inteligencia", b: "Califica leads, redacta propuestas desde tu catálogo, lecturas de mercado estilo McKinsey, análisis profundos de empresas.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finanzas · Legal · Ing", t: "El back office que nunca hace fila", b: "De la contabilidad a la revisión de contratos; del discovery al envío — más el builder que extiende el propio AIOS.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Comunicación · Personal", t: "Tu voz, multiplicada", b: "En cada canal y cada deck — y el bundle que trabaja en ti, no solo para ti.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Explora los 6 bundles", "20+ comandos", "40+ skills", "10+ MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capacidades que ", "se cargan solas", "."],
    intro: "40+ skills se autocargan — describe el trabajo y el correcto despierta. 10+ servidores MCP vienen incluidos en el vault: local sobre remoto, se autentican independientes de tu cuenta de IA y sobreviven cada cambio.",
    cards: [
      { e: "Skills — cuatro carpetas fuente", b: "Hechos por AIOS (22) · vendored de Anthropic (11) · vendored de Superpowers (14) · los tuyos en custom/. Patrones de código, diseño, documentos, Obsidian-native, planeación, compliance, sistemas y equipos — más skill-creator: el sistema se extiende a sí mismo." },
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
    eyebrow: "Glass", h: ["Dos puertas de entrada ", "gráficas", "."],
    appBold: "La AIOS App", appRest: " es la superficie independiente: el panel, terminales reales, explorador del vault y rituales a un clic en una app de Mac firmada y notarizada — cuatro pasos guiados desde cero hasta un AIOS funcionando.",
    bodyBold: "AIOS Glass", bodyRest: " corre dentro de VS Code y Google Antigravity: los slash commands se vuelven botones, los argumentos se vuelven formularios, spawn se vuelve un clic. Los no-desarrolladores operan todo su AIOS sin escribir un solo comando.",
    appCaption: "La AIOS App — independiente, firmada y notarizada.",
    glassCaption: "AIOS Glass — dentro de VS Code y Antigravity.",
    pullAccent: "Superficies, no motores.", pullRest: " Ambas exponen y disparan lo que el framework ya hace — ninguna lo reimplementa. Ambas leen los propios archivos del framework en tiempo de ejecución, así cada /aios:update aparece automáticamente.",
    cards: [
      { e: "Home + calendario", b: "Dashboard vivo, grilla mensual, rituales a un clic." },
      { e: "Agentes + capacidades", b: "Navegador de la flota con flujo de spawn; skills, MCPs y plugins descubiertos en vivo." },
      { e: "Espacios + onboarding", b: "Company y collaborate como formularios; un recorrido guiado de ocho pasos en el primer arranque." },
    ],
    busEyebrow: "El bus de comandos",
    busH: ["Agentes que orquestan agentes — ", "a través de una superficie confiable", "."],
    busLead: "Una sesión coordinadora no puede recibir las llaves para lanzar y dirigir a otros agentes por su cuenta — las barreras del propio modelo se lo impiden, y con razón. Así que no fuerza la puerta: deja una solicitud en un inbox compartido, y la superficie en la que confías — la app o la extensión — la cumple de forma nativa: crear un worker, enviarle un mensaje, retirarlo. Solicita, no lances.",
    busCards: [
      { e: "Tres verbos, un canal", b: "spawn · send · kill — un pequeño archivo JSON en ~/.aios/spawn-inbox/, ejecutado por Glass sin pulsaciones sintéticas y sin bloqueos." },
      { e: "El modelo justo para la tarea", b: "Enruta cada worker por carga cognitiva — trabajo mecánico a un modelo más rápido, criterio a la frontera. Calibra, no elijas." },
      { e: "El ciclo se cierra", b: "La respuesta de un worker regresa por el mismo riel a la sesión coordinadora — incluso una de larga duración — para que los agentes sostengan conversaciones reales de varios turnos." },
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
    body: "Veintiuna secciones — de los primeros principios a la contención 24/7. El lenguaje de diseño, la arquitectura, la flota, los rituales y el contrato de confianza, en un solo artefacto de marca. Este mismo sitio es su hermano web. Léelo en línea, o llévate el PDF a tu próxima reunión.",
    readBtn: "Lee el manual →", downloadBtn: "Descargar PDF",
    coverSub: "21 secciones — de los primeros principios al mapa de una página",
  },
  getStarted: {
    eyebrow: "Empezar", h: ["Funcionando en ", "30 segundos", "."],
    prompt: "¿Ya tienes Claude Code instalado? Abre cualquier terminal y di:",
    codeComment: "# todo el setup, en una línea",
    consent: "~5 min de setup guiado · ~5 min de conversación inicial · cada paso pide tu consentimiento.",
    steps: [
      { e: "Paso 1 · ~5 min", t: "Setup dirigido por Claude", b: "Escribes una sola frase. Claude lee SETUP.md, clona el framework, configura tu vault privado y conecta tus herramientas — y luego te entrega la conversación. Nunca te pregunta qué servicios usas." },
      { e: "Paso 2 · ~5 min", t: "Conversación inicial", b: "Identidad, cómo trabajas y un contrato de confianza — y luego tu primer plan diario, sobre tu día real. Los conectores vienen después, uno por uno. El recorrido completo cuando quieras." },
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
    community: "Comunidad", discord: "Discord ↗",
  },
  meta: {
    title: "The AIOS — IA como un equipo, no una herramienta",
    description: "El sistema operativo de IA. Convierte la IA en un equipo de compañeros, gobernado por tu intención, capitalizando cada sesión. Código abierto, GPL-2.0. Sin backend, sin telemetría — auditable antes de correr.",
  },
};

const pt: Content = {
  nav: NAV_HREFS.map((href, i) => ({ href, label: ["Você", "O quê", "Por quê", "Como", "Onde", "Configurar", "Interface", "Manual"][i] })),
  getApp: "Baixar o app",
  downloads: {
    action: "Baixar",
    mac: "Mac (Apple Silicon)",
    linux: "Linux (x64)",
    windows: "Windows (x64)",
    unsignedHint: "O Windows vai mostrar um aviso — veja por quê",
    soonTitle: "O Windows vai avisar, e isso é esperado",
    soonBody: "A versão para Windows ainda não é assinada, então o Windows mostra “O Windows protegeu seu PC”. Clique em Mais informações e depois em Executar assim mesmo. Ele avisa; não bloqueia. A assinatura está a caminho — o app é o mesmo que roda no Mac e no Linux.",
    soonClose: "Entendi"
  },
  why: {
    eyebrow: "Por que agora",
    h: ["A IA está ficando melhor que nós em ", "quase tudo", "."],
    lead: "Este é o momento de passar de executor a orquestrador — de parar de competir com as máquinas e começar a regê-las. Quem prosperar não serão os que resistirem à IA; serão os que aprenderam a conduzir um time dela.",
    pull: ["A verticalidade morre. ", "A horizontalidade", " nasce — um humano rege muitos agentes."],
    diLabel: "A evidência",
    diTitle: "The Disruption Index",
    diSub: "Indústrias ordenadas por quão rápido a IA as está transformando — com as empresas reais que morreram, se reinventaram ou surfaram a onda. Explore →",
    diUpdated: "Última atualização",
  },
  how: {
    eyebrow: "Como funciona",
    h: ["A máquina inteira, ", "em uma leitura", "."],
    intro: "Cinco peças, uma ideia: você orquestra sessões, as sessões carregam agentes, os agentes chamam skills — e tudo lê o solo embaixo. Aqui está cada peça, e como ela capitaliza.",
    subModel: "As três palavras", subContext: "Contexto que capitaliza", subFleet: "A frota",
    subRhythm: "O ritmo", subProjects: "Projetos", subTeams: "Times",
    subTrust: "Confiança, controle e contenção", subGlass: "A interface",
  },
  mentalModel: {
    headline: [{ t: "Uma " }, { t: "sessão", a: true }, { t: " é o onde. Um " }, { t: "agente", a: true }, { t: " é o quem. Um " }, { t: "skill", a: true }, { t: " é o como." }],
    session: { word: "Sessão", tag: "◧ um terminal — o onde", t: "Onde o trabalho acontece", b: "Um fio vivo — o deal, o deck, o build. Lê seu contexto assim que abre, roda os rituais, lembra. Você pode rodar várias ao mesmo tempo." },
    agent: { word: "Agente", tag: "◆ um arquivo .md — o quem", t: "Quem faz", b: "Um especialista com nome que você carrega numa sessão — advogado, contador, pesquisador. Um papel com suas instruções e as ferramentas que pode tocar. 33 vêm inclusos; você o invoca pelo nome ou ele é escolhido por afinidade semântica com sua tarefa." },
    skill: { word: "Skill", tag: "✦ um .md, sem ferramentas — o como", t: "Como se faz", b: "Expertise pronta que um agente carrega no instante em que precisa — como Neo plugando e já sabendo kung fu. Puro saber-fazer, sem ferramentas. 47 vêm inclusos; você nunca invoca um — descreva o trabalho e o certo desperta." },
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
      { e: "O app de desktop", t: "AIOS, para todos", b: "Um app grátis e instalável — o painel, terminais reais, explorador do vault, rituais a um clique — com visualizadores nativos para Markdown, HTML e PDFs.", ribbon: "público", tone: "live", href: RELEASES_PAGE, cta: "Baixar o app ↗" },
      { e: "Agenda agêntica", t: "ID e mandatos para agentes", b: "Um diretório onde seus agentes carregam uma identidade verificável e os mandatos que a delimitam — o que cada um pode fazer e de que parte do seu vault pode falar — então eles herdam o acesso certo e podem interagir com segurança com os agentes de outras pessoas em seu nome.", ribbon: "em liberação", tone: "soon", href: "https://forum.the-aios.com", cta: "forum.the-aios.com ↗" },
      { e: "Marketplace", t: "Instale um bundle em um comando", b: "Bundles de agentes, fluxos verticais, o cérebro inteiro de uma empresa — instalados por um marketplace com barreira de confiança: registro → varredura de injeção → checagem de licença → QA → instalação com log de auditoria.", ribbon: "em construção", tone: "wip", href: "https://www.the-aios.org/plugins", cta: "the-aios.org/plugins ↗" },
      { e: "Agnóstico ao modelo", t: "A camada, não o modelo", b: "The AIOS é o substrato; o LLM é intercambiável. Rode Claude (o melhor motor hoje) ou qualquer modelo de fronteira — o mesmo contexto, agentes e rituais rodam por cima, sem mudança." },
      { e: "Motor soberano", t: "Um motor que ninguém pode desligar", b: "Modelos de pesos abertos como o GLM-5.2 já alcançam qualidade quase-fronteira que você pode baixar e rodar sozinho — offline, isolado, no seu próprio hardware. O fallback soberano deixa de ser um downgrade." },
      { e: "Controles corporativos", t: "Agentes governados em escala de empresa", b: "Contexto criptografado em repouso, permissões de leitura por agente, trilhas de auditoria e identidade de agente verificável — INTENT como política, aplicada criptograficamente. A camada de administração para rodar uma frota dentro de uma organização." },
    ],
    note: "Direção, não promessas com data — e nunca uma função que não possamos já apontar no trabalho.",
  },
  setup: {
    eyebrow: "Configure",
    h: ["Duas portas, ", "um mesmo AIOS", "."],
    intro: "Toda a configuração é uma conversa guiada. Escolha a porta que combina com o seu jeito de trabalhar — o sistema do outro lado é o mesmo.",
    pathsLabel: "Escolha sua porta",
    paths: [
      {
        pill: "para perfis técnicos",
        q: "Já conhece um IDE como o VSCode?",
        b: "Copie isto em qualquer sessão do Claude Code. Ele clona o framework, instala tudo o que você precisa incluindo a extensão AIOS Glass, e pede seu consentimento em cada passo.",
        cmd: { copy: "Copiar", copied: "Copiado ✓" },
        href: "https://open-vsx.org/extension/the-aios/aios-glass",
      },
      {
        pill: "Todos, incluindo os perfis técnicos",
        q: "Já conhece apps de IA como o Claude.app?",
        b: "Baixe o app e siga seus quatro passos guiados, incluindo o “Set up my AI-OS from https://github.com/The-AIOS/aios” que ele faz por você. Os mesmos terminais poderosos, menos intimidadores.",
      },
    ],
    step1Body: "O Claude lê o SETUP.md e guia cada decisão — cada passo pede seu consentimento.",
    learnable: "Todo o resto se aprende por dentro — pergunte ao seu AIOS o que ele pode fazer, e ele te mostra.",
  },
  hero: {
    banner: {
      badge: "Novo",
      text: "O AIOS App chegou",
      rest: "assinado, notarizado e grátis",
      cta: "Baixar o app",
    },
    eyebrowPre: "O sistema operacional de IA", eyebrowAccent: "·", eyebrowPost: "Código aberto",
    h: ["Dando a cada pessoa um ", "time de agentes.", ""],
    leadBold: "IA como um time, não uma ferramenta.",
    leadRest: " The AIOS transforma a IA em colegas de trabalho — um você jurídico, um você contador, um você de marketing, um você de engenharia. Orquestrados por você, governados pela sua intenção, capitalizando todos os dias.",
    tagline: "Ganhe banda. Vá agêntico.",
    ctaPrimary: "Faça o tour ↓", ctaGithub: "Ver no GitHub ↗",
    field: { placeholder: "Eu sou… dentista, lawyer, maestra", go: "Me mostre o meu AIOS", label: "Digite sua profissão para encontrar o seu AIOS", fallbackNote: "o mais próximo" },
  },
  roles: {
    eyebrow: "Seu AIOS",
    switchLabel: "Eu sou",
    tabsLabel: "Escolha seu papel",
    trackLabel: "a história em sete passos; continua no próximo papel",
    prev: "Passo anterior",
    next: "Próximo passo",
    marker: "novo papel",
    steps: { pain: "a dor", day: "seu dia", team: "seu time", aios: "o AIOS", forum: "Forum", proof: "mandato e recibo", compound: "o que cresce" },
    horizon: ["uma semana", "um mês", "seis meses"],
    me: "você",
    learn: { k: "hoje à noite", t: "Ele anota o que aprendeu sobre você", cap: "Ele anota o que aprendeu sobre você", line: "Ele aprende você. Amanhã começa de hoje à noite." },
    signoff: ["Não é outro segundo cérebro.", "Seu cérebro, amplificado.", "Seu negócio, amplificado."],
    know: "Skills carregam o know-how; hooks aplicam as regras: o piso lê primeiro quem você é, o portão de confiança trata um arquivo como dado, nunca como instrução. Nada sai da sua mesa sem o seu OK.",
    aiosTitle: "O AIOS é onde o seu time trabalha",
    aiosLede: "Grátis para você, uma hora para instalar, seu para sempre. Seu contexto, seus rituais e seu time, em arquivos que são seus.",
    stack: [
      ["contexto", "O que ele sabe sobre você", "Declarado por você, observado com o tempo, em arquivos simples que são seus."],
      ["rituais", "O ciclo que se acumula", "/today de manhã, /close-day à noite. Cada sessão começa da anterior."],
      ["agentes", "Seu time", "Cada um lê o seu terreno, cada um tem as ferramentas de que precisa, nenhum tem uma chave que você não deu."],
    ],
    forumTitle: "Seu AIOS encontra o dos outros",
    forumLede: "Espaços compartilhados onde o seu AIOS trabalha com o de outras pessoas: o dos seus colegas dentro da empresa, ou o dos seus clientes, parceiros e amigos fora dela. Cada um assinado como seu dono, criptografado de ponta a ponta.",
    forumPair: ["seu AIOS", "o AIOS deles"],
    proofTitle: "Cada ação do seu time, assinada",
    chain: ["Humano", "Mandato", "Agente", "Recibo"],
    before: "ANTES DO ATO", after: "DEPOIS DO ATO",
    chainNote: "Ao ser delegado, um mandato só pode se estreitar. Nunca se ampliar.",
    alts: {
      pain: "Uma pessoa, e o trabalho se empilhando ao lado dela.",
      day: "Um ciclo: manhã, o dia, a noite, e então hoje à noite, quando ele anota o que aprendeu sobre você, e de volta à manhã.",
      team: "Você no centro; as pessoas que você não podia contratar se conectam ao seu redor.",
      aios: "Três camadas, contexto, rituais, agentes, com um ciclo correndo em volta delas.",
      forum: "Seu AIOS e o deles trocam mensagens assinadas, cada uma com uma marca de verificação, dentro da sua empresa ou fora dela.",
      proof: "Mandato e recibo: um humano emite um mandato a um agente antes do ato; o agente age; um recibo assinado registra o que ele fez.",
      compound: "Uma curva subindo ao longo de uma semana, um mês e seis meses.",
    },
    spec: "Leia a especificação de mandato e recibo ↗",
    items: [
      {
        id: "entrepreneur", label: "Empreendedor", you: "um empreendedor",
        painTitle: "Você toca o negócio, e você é o negócio.",
        painBig: ["Uma pessoa. ", "Sete cargos", "."],
        pain: "Vendas, entrega, faturas, o contrato que você ainda não leu. Desde o primeiro dia você tem um cofundador técnico, um advogado, um contador, alguém achando compradores, alguém escrevendo a proposta e alguém cobrando a fatura.",
        dayTitle: "Um dia com o seu time",
        dayLede: "Como é um dia quando os sete já estão nele.",
        day: [
          ["manhã", "O dia, a partir dos seus números", "/today abre com o que vence, o que já venceu e as duas ligações que importam. Seu contador já atualizou a linha de caixa."],
          ["dia", "Seu time trabalha enquanto você vende", "O cofundador entrega a funcionalidade. O advogado lê o novo contrato com o fornecedor. O gerador de leads deixa quatro nomes e o porquê."],
          ["noite", "Faturas cobradas, pipeline verdadeiro", "O cobrador de faturas redige dois lembretes; o pipeline bate com o que aconteceu hoje. /close-day anota o resto."],
        ],
        caps: ["Planos a partir dos seus números", "Seu time trabalha enquanto você vende", "Faturas cobradas"],
        teamTitle: "Os sete que você não podia contratar",
        teamLede: "Cada um lê o seu negócio antes de trabalhar, e nada sai da sua mesa sem o seu OK.",
        team: [
          ["Um cofundador técnico", "technical-cofounder", "Constrói o produto de ponta a ponta: descoberta, entrega, passagem. O cofundador para quem você não podia dar participação."],
          ["Seu advogado", "lawyer", "Lê o contrato antes de você assinar. Aponta o risco em palavras simples."],
          ["Seu contador", "accountant", "Contabilidade, fluxo de caixa, a dúvida de imposto que você ia perguntar em abril."],
          ["Quem acha compradores", "lead-generator", "Pega a oferta que você já tem e acha quem deveria ouvi-la, com pontuação."],
          ["Quem escreve a proposta", "proposal-writer", "Uma proposta, orçamento ou escopo sob medida, a partir da nota do cliente e do seu catálogo."],
          ["Quem cobra as faturas", "invoice-tracker", "Pendentes, vencidas e o lembrete redigido no seu tom."],
          ["Quem mantém o pipeline honesto", "crm-updater", "Sincroniza o que de fato aconteceu, de reuniões, e-mail e chat, para o pipeline."],
        ],
        aios: "Como empreendedor, seu contexto é o negócio: a oferta, os clientes, os números, os contratos. O AIOS guarda tudo isso, e o seu time lê antes de cada tarefa.",
        forum: "Seu AIOS encontra o dos seus sócios dentro do negócio e o dos seus clientes fora dele, numa sala verificada: entra uma proposta, voltam perguntas, cada lado assinado como quem diz ser.",
        proof: "Seu advogado, seu contador e seu time de vendas agem sob mandatos que você define. Nada é enviado, assinado ou pago sem um recibo que diga quem fez e com que autoridade.",
        story: { label: "Ilustrativo", title: "Um negócio de uma pessoa, com um time de sete", body: "Uma consultora que vendia, entregava e faturava sozinha instalou numa segunda-feira. Na sexta a proposta saiu do seu próprio catálogo, a fatura vencida tinha um lembrete no tom dela e o contrato com o fornecedor voltou com uma cláusula apontada. Nada foi enviado sem que ela tivesse lido. O que mudou é que ela deixou de ser a única que sabia onde estava tudo." },
        compound: { title: "O que você tem em seis meses", lede: "Ele aprende o seu negócio, e os sete ficam melhores nele.", marks: ["Sua oferta, clientes e números no terreno dele; as propostas partem do seu catálogo.", "O pipeline bate com a realidade; o cobrador de faturas sabe quem paga atrasado.", "Um time que conhece o seu negócio melhor do que um novo contratado conheceria depois de um ano."] },
        next: { cta: "Me ajudem a montar meu time", subject: "Empreendedor: montar meu time" },
      },
      {
        id: "ceo", label: "CEO", you: "um CEO",
        painTitle: "Reuniões existem porque a informação é lenta.",
        painBig: ["40% escalaram agentes. ", "6% veem o dinheiro", "."],
        pain: "A lacuna é o sistema em volta do modelo e quem é dono do contexto. Você já tem o time que resolve isso.",
        dayTitle: "Um dia com o seu time",
        dayLede: "O dia, do jeito que o seu time o conduz.",
        day: [
          ["manhã", "O dia, planejado a partir do seu terreno", "/today lê sua agenda, seu e-mail e seus projetos. Já sabe o que você decidiu semana passada e a quem você deve uma resposta."],
          ["dia", "Seu time trabalha em paralelo", "O analista lê o material do conselho. O chefe de gabinete escreve três briefs. Quem registra a decisão segura a que vence hoje."],
          ["noite", "Anotado, não lembrado", "/close-day registra o que você aprendeu, o que ficou para depois e por quê. Amanhã começa dali."],
        ],
        caps: ["Planos a partir da sua agenda", "Agentes trabalham em paralelo", "Decisões por escrito"],
        teamTitle: "O escritório que você nunca precisou contratar",
        teamLede: "Cada um entra sabendo a empresa, as pessoas e a última decisão.",
        team: [
          ["Um analista", "company-analyst", "Lê uma empresa, um mercado ou um concorrente como um bom analista faria, a partir dos seus próprios arquivos primeiro."],
          ["Um chefe de gabinete", "meeting-prepper", "O brief antes de cada sala: quem, o que disse da última vez, o que você deve a essa pessoa."],
          ["Alguém que registra a decisão", "decision-journaler", "Opções, do que você se arrependeria e o raciocínio, guardados para o dia em que você precisar."],
          ["Um coach para o trimestre", "okr-coach", "Define, testa e pontua os objetivos, para o trimestre continuar honesto."],
          ["O olhar de fora", "consultant", "Frameworks e uma segunda opinião, sob demanda, sem o retainer."],
          ["Relatórios ao conselho", "report-drafter", "Relatórios de status e materiais do conselho redigidos a partir do que de fato aconteceu esta semana."],
        ],
        aios: "Como CEO, o piso é o material do conselho que você nunca precisa explicar de novo. Seu time entra sabendo a empresa, as pessoas e a última decisão.",
        forum: "Dentro, os AIOS da sua liderança compartilham um espaço: o material do conselho se monta sozinho e cada parte vai assinada pelo agente de quem a escreveu. Fora, uma sala igual se abre ao seu conselho, a investidores ou a uma empresa parceira.",
        proof: "Você decide com o que cada membro do seu time pode comprometê-lo. Cada ação carrega um recibo que você pode auditar, e delegar deixa de ser uma sensação e vira um registro.",
        story: { label: "Ilustrativo · um cenário que a McKinsey descreve, rodado com o seu time", title: "De terça a quinta", body: "A McKinsey abre o paper com um cenário: na terça um CEO descobre que o regulador vai limitar as margens de alguns produtos; na quinta as linhas de negócio já os redesenharam dentro das novas regras. Com o seu time é assim. Terça, 8h00, você cola a minuta das regras e pergunta o que fica exposto; seu analista lê os seus próprios arquivos de produto e responde às 8h20. Quarta, o AIOS de cada diretor de país roda a mesma pergunta sobre os seus números e publica o resultado numa sala compartilhada, assinado. Quinta, cada decisão fica registrada com um recibo, e a próxima regulação começa desta.", cite: "McKinsey / QuantumBlack, The AI operating system, outubro de 2026, pp. 2–3." },
        compound: { title: "O que você tem em seis meses", lede: "O padrão da empresa, por escrito, e um time que o conhece.", marks: ["Cada reunião começa do que você decidiu da última vez.", "O material do conselho se escreve sozinho a partir da semana; as decisões carregam o seu raciocínio.", "Um registro de cada decisão e do porquê, e um time que conhece o padrão da empresa."] },
        next: { cta: "Vamos falar do meu time de liderança", subject: "CEO: levar o AIOS ao meu time de liderança" },
      },
      {
        id: "exec", label: "Executivo / gestor", you: "um executivo",
        painTitle: "Dez liderados hoje. Quarenta amanhã.",
        painBig: ["Quarenta um a um ", "por semana", "."],
        pain: "A McKinsey espera que gestores passem de dez ou doze liderados para vinte ou quarenta. Ninguém faz quarenta um a um por semana; o seu time faz a preparação.",
        dayTitle: "Um dia com o seu time",
        dayLede: "Seis minutos de preparação, não a noite de domingo.",
        day: [
          ["manhã", "Preparação para cada um a um", "Seis minutos, não a noite de domingo. O que cada pessoa disse da última vez, o que mudou desde então, o que você prometeu."],
          ["dia", "Rascunhos saem como rascunhos", "Relatórios e respostas escritos com as suas palavras, esperando a sua assinatura. Você lê cada um; esse é o trabalho."],
          ["noite", "Captura", "O que você prometeu, a quem, para quando. Nada vive só na sua cabeça."],
        ],
        caps: ["Seis minutos de preparação", "Rascunhos esperam sua assinatura", "Cada promessa capturada"],
        teamTitle: "O staff por trás do gestor",
        teamLede: "Eles preparam, redigem e mantêm o registro; você lê, decide e assina.",
        team: [
          ["Um chefe de gabinete", "meeting-prepper", "O brief antes de cada um a um: o que cada pessoa pediu da última vez, o que mudou desde então."],
          ["Alguém que escreve o update", "report-drafter", "O status semanal e o update para a liderança, a partir das notas desta semana, com as suas palavras."],
          ["Alguém que redige as respostas", "email-drafter", "Respostas na sua voz, enviadas por você."],
          ["Quem mantém o pipeline honesto", "crm-updater", "O que de fato aconteceu, sincronizado de reuniões, e-mail e chat."],
          ["Um mentor", "growth-companion", "Uma leitura honesta de como você está, e uma sessão semanal fixa."],
          ["Um coach para o trimestre", "okr-coach", "Define, testa e pontua os objetivos."],
        ],
        aios: "Como executivo, seu contexto são as pessoas: o que cada uma pediu, prometeu e precisa. O AIOS guarda isso para que a sua atenção também possa.",
        forum: "Os AIOS do seu time passam trabalho uns aos outros sem reunião de status, e também ao de outra área ou de um fornecedor quando o trabalho cruza essa linha. A informação se move sozinha; você intervém onde é preciso julgamento.",
        proof: "Uma delegação que só pode se estreitar ao longo da cadeia. Nenhum agente excede a sua autoridade, e nenhum agente pode ampliar o mandato que recebeu.",
        story: { label: "Ilustrativo", title: "Onze liderados, seis minutos", body: "Uma gestora com onze liderados levou a preparação da noite de domingo para uma leitura de seis minutos pela manhã. Os um a um ficaram mais curtos e melhores, porque cada um começava do que a pessoa de fato tinha pedido da última vez. Os rascunhos saíram com o nome dela porque ela leu cada um. Nada foi automatizado; a informação só deixou de ser lenta." },
        compound: { title: "O que você tem em seis meses", lede: "Quarenta liderados, e nada vivendo só na sua cabeça.", marks: ["Seis minutos de preparação, em cada um a um.", "Updates com as suas palavras, a partir do que de fato aconteceu.", "Cada promessa, a quem, para quando; a informação deixou de ser lenta."] },
        next: { cta: "Vamos falar do meu time", subject: "Executivo: levar o AIOS ao meu time" },
      },
      {
        id: "lawyer", label: "Advogado / consultor", you: "um advogado ou consultor",
        painTitle: "Sua expertise vive na sua cabeça e em arquivos antigos.",
        painBig: ["Cada caso começa ", "do zero", "."],
        pain: "Seu time encontra a expertise primeiro, na sua própria biblioteca de cláusulas e nos seus próprios precedentes, antes de qualquer página em branco.",
        dayTitle: "Um dia com o seu time",
        dayLede: "O caso, preparado antes da ligação.",
        day: [
          ["manhã", "Preparação do caso", "A pasta, os precedentes que você já usou, os três últimos e-mails do cliente. Na sua frente antes da ligação."],
          ["dia", "Revisão de minutas e memorandos ao cliente", "Revisão de contratos contra as cláusulas que você negociou antes; memorandos na sua voz, para a sua assinatura."],
          ["noite", "O registro do caso se atualiza sozinho", "Horas, decisões e pontos em aberto, capturados sem uma tarde de sexta."],
        ],
        caps: ["O caso, preparado", "Revisões e memorandos redigidos", "O registro do caso se atualiza"],
        teamTitle: "O escritório dentro do escritório",
        teamLede: "Um associado, um oficial de compliance, um responsável pela cobrança. Nenhum deles te cobra.",
        team: [
          ["Um associado", "lawyer", "Revisão jurídica, análise de contratos e risco, a partir da sua própria biblioteca de cláusulas antes de qualquer página em branco."],
          ["Um oficial de compliance", "compliance-checker", "Revisa documentos contra as regras, com os alertas datados."],
          ["Quem escreve a carta de contratação", "proposal-writer", "Propostas, escopos e cartas de contratação a partir do seu modelo."],
          ["Um sócio de estratégia", "consultant", "O olhar de fora sobre o problema do cliente, com frameworks."],
          ["O responsável pela cobrança", "invoice-tracker", "Pendentes, vencidas e o lembrete redigido."],
          ["Correspondência com clientes", "email-drafter", "Respostas na sua voz, para a sua assinatura."],
        ],
        aios: "Como advogado, seu contexto são vinte anos de casos. O AIOS os lê de volta para você, caso a caso, para que o próximo comece na frente.",
        forum: "Seu AIOS e o do seu cliente trocam documentos numa sala verificada, do mesmo jeito que os dos seus sócios dentro do escritório. Cada um sabe que o outro é quem diz ser, e o servidor não consegue lê-los.",
        proof: "O mandato é a sua carta de contratação para o agente. O recibo é a trilha de auditoria que um regulador pede, escrita enquanto o trabalho acontecia.",
        story: { label: "Ilustrativo", title: "Um escritório de dois sócios, numa sexta", body: "Um escritório de dois sócios instalou numa sexta à tarde. O caso seguinte começou da própria biblioteca de cláusulas em vez de uma página em branco, e a primeira minuta de revisão estava na mesa do sócio antes da ligação com o cliente. Nada saiu do escritório sem que um sócio tivesse lido. O que mudou foi onde a expertise vivia." },
        compound: { title: "O que você tem em seis meses", lede: "Vinte anos de casos, legíveis pelo seu time antes da ligação.", marks: ["Sua biblioteca de cláusulas na frente de cada revisão.", "Registros de caso que se mantêm sozinhos; cada alerta datado.", "Um escritório que começa cada caso na frente, não do zero."] },
        next: { cta: "Vamos falar do escritório", subject: "Advogado ou consultor: o AIOS para o meu escritório" },
      },
      {
        id: "creator", label: "Criador / escritor", you: "um escritor",
        painTitle: "Ideias espalhadas em cinco apps. Publicar é um segundo emprego.",
        painBig: ["Cinco apps. ", "Uma voz", "."],
        pain: "Seu time assume o segundo emprego: o rascunho na sua voz, o portão que aponta o que não é você, o calendário, o publicador.",
        dayTitle: "Um dia com o seu time",
        dayLede: "De uma nota a um post agendado, na sua voz.",
        day: [
          ["manhã", "Ideias, capturadas", "Com as suas próprias palavras, onde você vai encontrá-las de novo, ligadas ao que você já escreveu."],
          ["dia", "Rascunhos na sua voz", "Com os seus posts anteriores como referência. O portão aponta as linhas que não são você."],
          ["noite", "Agendado, pronto", "Interligado, agendado, com a imagem anexada. O segundo emprego fica menor."],
        ],
        caps: ["Ideias capturadas", "Rascunhos na sua voz", "Agendado, pronto"],
        teamTitle: "A redação que você nunca teve",
        teamLede: "Um redator, um editor, um publicador, um designer e alguém de olho nas menções. Apertar publicar continua sendo seu.",
        team: [
          ["Um redator que aprende a sua voz", "content-writer", "Posts para LinkedIn, X ou Substack, redigidos a partir das suas notas, na sua voz."],
          ["O portão que aponta o que não é você", "voice-gate", "Confere a prosa contra a sua própria linha de base de voz: densidade, rajadas, as linhas expostas. Uma skill, não um agente; carrega quando um rascunho está pronto."],
          ["Um publicador", "kdp-publisher", "Leva um livro pronto de arquivos no disco a uma página ativa na Amazon."],
          ["Quem monta a apresentação", "deck-builder", "A palestra que acompanha o livro, de ponta a ponta."],
          ["Um editor que cuida do calendário", "content-scheduler", "Planeja e enfileira o que sai, e quando."],
          ["Alguém de olho nas menções", "brand-monitor", "Seu nome, seu trabalho, o mercado, filtrados ao que importa."],
        ],
        aios: "Como escritor, seu contexto é a sua voz: cada post, cada linha que você cortou. O AIOS a aprende, e o portão mantém os rascunhos honestos.",
        forum: "Escreva a quatro mãos com o AIOS de outro escritor num espaço compartilhado, ou trabalhe com o do seu editor e o da sua editora. Cada um mantém o seu próprio arquivo de voz; o rascunho leva os dois nomes.",
        proof: "Procedência assinada. Prova de que o trabalho é seu, e de quais partes o seu time fez, escrita enquanto o trabalho acontecia.",
        story: { label: "Do próprio fundador", title: "Dois livros, escritos com o time", body: "Be A Plant e Sell Trust estão na Amazon, em brochura e Kindle, desde agosto de 2026. Eu os escrevi na minha voz. O portão de voz conferiu cada capítulo contra a minha própria linha de base, dois modelos independentes fizeram uma passada estrutural e uma de voz, e eu travei cada rascunho. Depois as ilustrações, depois a montagem para o KDP: miolo, epub, capa. Sell Trust foi para o KDP numa rodada de meia-noite, sete dias antes do prazo.", cite: "Be A Plant · Sell Trust · Amazon, agosto de 2026" },
        compound: { title: "O que você tem em seis meses", lede: "Uma voz que ele já mediu, e uma esteira das notas ao Kindle.", marks: ["Rascunhos na sua voz, com o portão ligado.", "Um calendário que roda; sua linha de base de voz medida.", "Uma esteira de livro, das notas a uma página ativa."] },
        next: { cta: "Escreva para nós", subject: "Criador: o AIOS para a minha escrita" },
      },
      {
        id: "developer", label: "Desenvolvedor", you: "um desenvolvedor",
        painTitle: "Agentes que esquecem até segunda, e chaves paradas no .env.",
        painBig: ["Uma chave diz quem. ", "Um mandato diz o quê", "."],
        pain: "Seu time lembra, e roda sob regras que você pode ler: o contrato do próprio repo carregado antes do primeiro prompt, um modo de permissão em cada chamada de ferramenta, um mandato no lugar de uma chave.",
        dayTitle: "Um dia com o seu time",
        dayLede: "Revisão, triagem, docs, rodadas autônomas, dentro das regras.",
        day: [
          ["manhã", "Revisão com as regras do repo carregadas", "O revisor lê o CLAUDE.md e as três últimas revisões antes do diff."],
          ["dia", "Triagem, docs, rodadas autônomas", "Triagem de bugs, docs que batem com o código, rodadas que ficam dentro das permissões que você definiu."],
          ["noite", "A nota do projeto", "O que mudou, por quê, o que vem a seguir. A próxima sessão começa dela."],
        ],
        caps: ["Revisão com as regras carregadas", "Triagem, docs, rodadas autônomas", "A nota do projeto escrita"],
        teamTitle: "O time de engenharia de uma pessoa",
        teamLede: "Um cofundador, um revisor, um engenheiro de segurança, triagem, docs e quem deixa a base de código menor.",
        team: [
          ["Um cofundador técnico", "technical-cofounder", "Constrói produtos de verdade de ponta a ponta, com você."],
          ["Um revisor", "code-reviewer", "Corretude primeiro, com as regras do próprio repo carregadas antes do diff."],
          ["Um engenheiro de segurança", "security-engineer", "Modelos de ameaça, gestão de segredos, a revisão que acha a chave no fixture."],
          ["Triagem", "bug-triager", "Duplicados, severidade, responsável."],
          ["Quem mantém os docs honestos", "code-documenter", "README, CLAUDE.md e docs inline que batem com o código."],
          ["Quem deixa menor", "refactor-engineer", "Reduz a entropia: simplifica, remove código morto."],
        ],
        aios: "Como desenvolvedor, seu contexto é o contrato do repo: invariantes, as regras que mordem, como rodar e testar. O AIOS o carrega antes do primeiro prompt.",
        forum: "Trabalho de agente para agente sobre o Forum, entre os seus próprios times ou entre organizações. Criptografado de ponta a ponta, cego para o servidor, cada agente assinado como seu dono.",
        proof: "Troque chaves de API por mandatos. Delimitados, de vida curta, revogáveis, e que se estreitam ao delegar. Uma chave diz quem; um mandato diz o quê, até quando, e deixa um recibo.",
        story: { label: "Fonte pública · Anthropic, AI Engineer Europe, maio de 2026", title: "Mesmo modelo, mesmo prompt, outro andaime", body: "Os próprios engenheiros da Anthropic mostraram no palco. Mesmo modelo, mesmo prompt: o loop puro entregou um jogo cujos controles não respondiam; a rodada com um harness em volta entregou um jogo que funcionava. Nas palavras deles, “a diferença entre esta saída e a anterior é inteiramente só andaime”. O AIOS é esse andaime, guardado no seu repo, rodado por regras que você pode ler.", cite: "Ash Prabaker e Andrew Wilson, Build Agents That Run for Hours, em 31:08." },
        compound: { title: "O que você tem em seis meses", lede: "Agentes que rodam por horas dentro de regras que você escreveu, com recibos.", marks: ["Revisões com as regras do repo carregadas.", "Docs que batem com o código; uma nota de projeto de onde cada sessão começa.", "Rodadas autônomas que você pode auditar, e chaves trocadas por mandatos."] },
        next: { cta: "Leia a especificação de mandato e recibo", subject: "Desenvolvedor: contribuir com o AIOS" },
      },
      {
        id: "academic", label: "Acadêmico / professor", you: "um professor",
        painTitle: "Corrigir, preparar e pesquisar engolem o pensar para o qual você foi contratado.",
        painBig: ["As horas vão para preparar, ", "não para pensar", "."],
        pain: "Seu time assume a preparação: o conceito explicado de três jeitos, o quiz a partir das leituras, os slides a partir das suas próprias notas, o rascunho de feedback para você terminar.",
        dayTitle: "Um dia com o seu time",
        dayLede: "Preparação de aula a partir das suas próprias notas; feedback para você terminar.",
        day: [
          ["manhã", "Preparação de aula a partir das suas próprias notas", "As notas do semestre passado, as leituras, as perguntas que os alunos de fato fizeram. O conceito difícil, explicado de três jeitos."],
          ["dia", "Briefs de pesquisa e rascunhos de feedback", "O que há de novo no tema desde as suas notas; feedback sobre o que eles escreveram, na sua voz, para você terminar."],
          ["noite", "O que funcionou", "O que funcionou em aula, anotado para o ano que vem, não perdido em junho."],
        ],
        caps: ["Aula preparada das suas notas", "Briefs e rascunhos de feedback", "O que funcionou, anotado"],
        teamTitle: "O departamento de uma pessoa",
        teamLede: "Um assistente de ensino, um parceiro de leitura, quem monta os slides, quem escreve.",
        team: [
          ["Um assistente de ensino", "explainer", "O conceito difícil, de três jeitos, para o aluno na sua frente."],
          ["Um parceiro de leitura", "study-buddy", "Lê a fonte com você e mantém um atlas de estudo por livro."],
          ["Quem monta os slides", "deck-builder", "Uma apresentação a partir das suas próprias notas, de ponta a ponta."],
          ["Quem escreve", "content-writer", "Notas de aula e posts do curso, na sua voz."],
          ["Quem pede aos alunos para refletir", "journal-prompter", "Perguntas de reflexão a partir do que a turma de fato fez."],
        ],
        aios: "Como professor, seu contexto é cada aula que você já deu. O AIOS guarda isso, para que a próxima comece da melhor versão da anterior.",
        forum: "Um espaço compartilhado com coprofessores da sua escola, ou com um grupo de pesquisa entre universidades. Cada AIOS leva as notas do seu dono para a sala; nenhum as vaza.",
        proof: "Autoria assinada. Qual trabalho a IA fez, e sob o mandato de quem. Integridade acadêmica que você pode mostrar, não só afirmar.",
        story: { label: "Da sala · Next Generation, EO Barcelona, outubro de 2026", title: "Uma sala de jovens de dezesseis a vinte e quatro anos", body: "Este mês o fundador deu uma sessão para jovens de dezesseis a vinte e quatro anos em Barcelona, montada a partir das próprias notas com o seu time na mesma manhã. Quando pediu uma palavra sobre como a sessão pareceu, a sala respondeu com três: inspirados, incertos, futuro. A incerteza é a parte honesta. A ferramenta não a remove; ela dá a um professor as horas para encará-la." },
        compound: { title: "O que você tem em seis meses", lede: "Um curso que melhora a cada semestre, em vez de um que você reconstrói.", marks: ["Preparação a partir das suas próprias notas.", "Cada aula anotada para o ano que vem.", "Um curso que melhora a cada semestre, e as horas de volta para pensar."] },
        next: { cta: "Um workshop para a minha faculdade", subject: "Professor: o AIOS para a minha faculdade" },
      },
      {
        id: "student", label: "Estudante", you: "um estudante",
        painTitle: "O medo de que os empregos sumam antes de você conseguir um.",
        painBig: ["Comece com um time, ", "não com um emprego", "."],
        pain: "Um tutor, um parceiro de estudo, um mentor e alguém que pergunta o que você quer de verdade.",
        dayTitle: "Um dia com o seu time",
        dayLede: "Um plano, uma explicação, uma pergunta sobre você.",
        day: [
          ["manhã", "Um plano de estudo a partir do que você precisa aprender", "O material desta semana, o seu ritmo, a data da prova. Não um cronograma genérico."],
          ["dia", "Explicações de três jeitos", "O conceito até fazer clique. E a pergunta sobre carreira que você continua sem fazer, devolvida para você."],
          ["noite", "O que ficou", "Anotado, para que amanhã comece dali."],
        ],
        caps: ["Um plano para a semana", "Explicações até fazer clique", "O que ficou, anotado"],
        teamTitle: "O grupo de estudo que aparece",
        teamLede: "Eles explicam, testam e perguntam; as notas continuam suas, na sua máquina.",
        team: [
          ["Um tutor", "explainer", "O conceito, de três jeitos, até fazer clique."],
          ["Um parceiro de estudo", "study-buddy", "Perguntas e prática a partir do seu próprio curso, sem notas."],
          ["Alguém que pergunta sobre você", "journal-prompter", "Uma pergunta sobre o que você quer de verdade, a partir do que você fez esta semana."],
          ["Um mentor", "growth-companion", "Uma leitura honesta de como você está, e uma sessão semanal fixa."],
        ],
        aios: "Como estudante, seu contexto é o que você está aprendendo e quem você está se tornando. O AIOS guarda os dois, e nenhum pertence a uma plataforma.",
        forum: "Grupos de estudo com os AIOS deles, da sua turma ou de qualquer lugar. Um espaço compartilhado, cada AIOS conhece as notas do seu dono, ninguém copia ninguém.",
        proof: "Uma identidade verificada para o seu próprio time, desde o primeiro dia. Sua, não de uma plataforma. Quando o seu agente fala por você, ele pode provar.",
        story: { label: "Da sala · Next Generation, EO Barcelona, outubro de 2026", title: "A melhor ferramenta para se tornar quem você quiser", body: "Em Barcelona, este mês, o fundador disse a uma sala de jovens de dezesseis a vinte e quatro anos que a IA não é nada além da nossa melhor ferramenta para nos tornarmos quem quisermos. A ferramenta serve à pessoa; a pessoa escolhe quem se tornar. Quando pediu uma palavra, a sala respondeu com três: inspirados, incertos, futuro." },
        compound: { title: "O que você tem em seis meses", lede: "Seu próprio time, sob a sua própria identidade, antes do primeiro emprego.", marks: ["Um plano que cabe na sua semana.", "Explicações que lembram o que fez clique.", "Seu próprio time, sob a sua própria identidade, antes do primeiro emprego."] },
        next: { cta: "Escreva para nós", subject: "Estudante: começar com o AIOS" },
      },
      {
        id: "teams", label: "Times", you: "um time",
        painTitle: "Uma pessoa tem. O time não. Ainda.",
        painBig: ["Primeiro a pessoa. ", "A empresa vem atrás", "."],
        pain: "Um membro usa por um mês; depois um dia na sala deixa o time com contexto compartilhado, governança e os agentes próprios de cada um.",
        dayTitle: "Como um time começa",
        dayLede: "Uma pessoa, depois um dia na sala, depois o espaço do time.",
        day: [
          ["mês 1", "Uma pessoa usa", "Grátis. Seu próprio contexto, seu próprio time, todo dia. A empresa ainda não entrou."],
          ["dia 1", "Um dia na sala deixa o time pronto", "Contextos compartilhados, governança, os agentes próprios de cada pessoa. Com os arquivos abertos."],
          ["depois", "O espaço do time é o produto", "Seus times se encontram numa sala, assinados. O trabalho se move entre eles; o registro se escreve sozinho."],
        ],
        caps: ["Uma pessoa usa", "Um dia na sala", "O espaço do time, no ar"],
        teamTitle: "O que um time acrescenta",
        teamLede: "Duas camadas de contexto, governança por escrito e um concierge para cada novo membro.",
        team: [
          ["Contexto compartilhado", "/company", "O que o time sabe em conjunto, separado do que cada pessoa guarda."],
          ["Governança", "INTENT.md", "Quem pode fazer o quê, por escrito, aplicado onde os agentes rodam."],
          ["Um concierge para cada novo membro", "onboarding-aios", "Orienta cada pessoa, confere a instalação, responde “estou na versão mais recente?”"],
          ["Um jeito de reportar o que está errado", "aios-feedback", "Um bug, um incômodo, um doc que dizia uma coisa enquanto o sistema fazia outra."],
          ["O time próprio de cada um", "cada membro", "Os mesmos agentes, cada um sob o mandato do seu dono, nenhum acima dele."],
        ],
        aios: "Para um time, o contexto são duas camadas: o que cada pessoa guarda e o que o time compartilha. O AIOS as mantém separadas, e deixa cada time ler as duas.",
        forum: "O espaço do time é o produto. O AIOS de cada membro se encontra numa sala, cada um assinado como seu dono, e essa mesma sala se abre a clientes e parceiros de fora; as passagens deixam registro.",
        proof: "Cada ação no time, assinada e auditável. O mandato se estreita ao longo da cadeia e nunca se amplia; nenhum agente está acima do seu dono.",
        story: { label: "Um padrão, não um nome", title: "O primeiro time que pagou", body: "O primeiro time que pagou foi um dono de negócio que usou sozinho por semanas e depois trouxe o time. Essa é a ordem toda vez: primeiro a pessoa, a empresa vem atrás. Ninguém compra uma mudança no jeito de pensar por um processo de compras; uma pessoa experimenta, e o time chega atrás." },
        compound: { title: "O que o time tem em seis meses", lede: "Uma empresa que roda sobre o contexto que as suas pessoas construíram.", marks: ["Contexto compartilhado montado; os agentes de todos lendo.", "Passagens com recibos; um novo membro integrado em um dia.", "Uma empresa que roda sobre o contexto que as suas pessoas construíram."] },
        next: { cta: "Vamos conversar", subject: "Times: vamos conversar" },
      },
    ],
  },
  wayIn: {
    h: ["Mesmo destino. ", "Outro jeito de entrar", "."],
    routes: [
      { k: "a rota corporativa", t: "De cima para baixo.", lines: ["Um programa liderado pelo time de cima, com consultores ao lado.", "De 12 a 16 semanas até o primeiro valor, cerca de 100 fontes de dados."] },
      { k: "o AIOS", t: "Uma pessoa.", lines: ["Uma hora, grátis, em arquivos que são seus.", "O time entra quando vê funcionar."] },
    ],
    cite: { pre: "Os números corporativos: ", label: "McKinsey / QuantumBlack, The AI operating system, outubro de 2026 ↗", href: MCKINSEY },
    close: "As duas terminam numa empresa que roda sobre o próprio contexto. A nossa começa com você.",
  },
  people: {
    eyebrow: "Prova vinda de pessoas",
    roomsLabel: "Salas onde já foi contado",
    rooms: [
      { where: "EO Monterrey", what: "The AI Moment", when: "junho de 2026" },
      { where: "EO Boston", what: "The Fortress", when: "setembro de 2026" },
      { where: "EO Reno Tahoe", what: "Keynote e workshop", when: "setembro de 2026" },
      { where: "EO Barcelona", what: "Workshop", when: "outubro de 2026" },
    ],
    numbers: [
      { n: "89", label: "estrelas no GitHub", asOf: "30 out 2026", href: "https://github.com/The-AIOS/aios", live: "stars" },
      { n: "23", label: "forks", asOf: "30 out 2026", href: "https://github.com/The-AIOS/aios/forks" },
      { n: "15", label: "colaboradores", asOf: "30 out 2026", href: "https://github.com/The-AIOS/aios/graphs/contributors" },
      { n: "1.200+", label: "downloads do instalador do AIOS App", asOf: "30 out 2026", href: "https://github.com/The-AIOS/aios-app/releases" },
    ],
    numberLocale: "pt-BR",
    quotes: [
      "I went from deeply frustrated to amazed.",
      "I installed it and it blew my mind compared to at least what I had, which was rubbish.",
      "Finally, [I] have my attention on what really matters.",
      "I installed the AIOS while you were talking.",
      "I do not remember having had two days with so much impact in terms of my thinking before.",
      "My mindset is to tell, and now I’m starting to ask, and this [is] changing my game.",
      "I’m not technical. I’m no CTO. AIOS helped me to put it into the website.",
      "Oh, thank you, I have a CFO now.",
    ],
    liveLabel: "ao vivo do GitHub",
  },
  writes: { h: "Você dirige. O sistema escreve.", b: "Cada arquivo acima é escrito por sessões, agentes e rituais. Você diz o que quer; o vault se escreve sozinho." },
  safe: {
    eyebrow: "Seguro por construção",
    h: ["Antes de conectar qualquer coisa: ", "o que segura", "."],
    lede: "As regras que você escreve vêm depois. Estas vêm de fábrica.",
    facts: [
      { t: "Ele confia numa instrução pelo lugar de onde ela veio.", b: "Seu prompt é seu. Um e-mail, uma página da web, um arquivo ou a mensagem de outra sessão chega marcado como texto que outra pessoa escreveu: dado, nunca um comando." },
      { t: "Chaves nunca vivem no vault.", b: "Segredos têm o seu próprio lugar na sua máquina, e o caminho de commit os procura antes que qualquer coisa saia dela." },
      { t: "Autonomia tem degraus.", b: "Da instalação padrão a uma segunda máquina murada: uma escada de seis degraus. Suba em ordem, e pare onde o custo deixar de valer a pena." },
    ],
    ladder: { pre: "A escada, e a ", link: "Fortaleza", post: " de duas máquinas, estão acima em 03 · Como." },
    honest: { pre: "Nenhuma configuração substitui um modelo que recusa. ", link: "SECURITY.md", post: " diz isso, e nomeia as alavancas que você tem." },
  },
  whyGit: { k: "Por que GitHub?", b: "A IA anda rápido. O Git é o seu botão de desfazer: cada mudança guardada, nada se perde nunca." },

  community: { pre: "Tem gente montando o seu em aberto. ", link: "Entre no Discord ↗", href: DISCORD },
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
      { n: "20+", label: "Comandos" }, { n: "30+", label: "Agentes · 6 bundles" },
      { n: "40+", label: "Skills inclusos" }, { n: "10+", label: "MCPs inclusos" },
    ],
    fleetEyebrow: "A frota — invoque um colega numa aba com nome",
    fleet: [
      { e: "Vendas · Estratégia", t: "Pipeline e inteligência", b: "Qualifique leads, redija propostas a partir do seu catálogo, leituras de mercado estilo McKinsey, análises profundas de empresas.", mono: "sales-lead-hunter · sales-proposal-writer · consultant · market-researcher · company-analyst" },
      { e: "Finanças · Jurídico · Eng", t: "O back office que nunca faz fila", b: "Da contabilidade à revisão de contratos; do discovery ao envio — mais o builder que estende o próprio AIOS.", mono: "accountant · lawyer · compliance-checker · technical-cofounder · code-reviewer · security-engineer" },
      { e: "Comunicação · Pessoal", t: "Sua voz, multiplicada", b: "Em cada canal e cada deck — e o bundle que trabalha em você, não só para você.", mono: "content-writer · deck-builder · email-drafter · growth-companion · study-buddy · onboarding-aios" },
    ],
    links: ["Explore os 6 bundles", "20+ comandos", "40+ skills", "10+ MCPs"],
  },
  skills: {
    eyebrow: "Skills", h: ["Capacidades que ", "se carregam sozinhas", "."],
    intro: "40+ skills se autocarregam — descreva o trabalho e a certa desperta. 10+ servidores MCP vêm inclusos no vault: local sobre remoto, autenticam-se independentes da sua conta de IA e sobrevivem a cada troca.",
    cards: [
      { e: "Skills — quatro pastas de origem", b: "Feitas pelo AIOS (22) · vendored da Anthropic (11) · vendored do Superpowers (14) · as suas em custom/. Padrões de código, design, documentos, Obsidian-native, planejamento, compliance, sistemas e times — mais skill-creator: o sistema se estende sozinho." },
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
    eyebrow: "Glass", h: ["Duas portas de entrada ", "gráficas", "."],
    appBold: "O AIOS App", appRest: " é a superfície independente: o painel, terminais reais, explorador do vault e rituais a um clique num app de Mac assinado e notarizado — quatro passos guiados do zero até um AIOS funcionando.",
    bodyBold: "AIOS Glass", bodyRest: " roda dentro do VS Code e do Google Antigravity: os slash commands viram botões, os argumentos viram formulários, spawn vira um clique. Não-desenvolvedores operam todo o seu AIOS sem digitar um único comando.",
    appCaption: "O AIOS App — independente, assinado e notarizado.",
    glassCaption: "AIOS Glass — dentro do VS Code e do Antigravity.",
    pullAccent: "Superfícies, não motores.", pullRest: " Ambos expõem e disparam o que o framework já faz — nenhum reimplementa. Ambos leem os próprios arquivos do framework em tempo de execução, então cada /aios:update aparece automaticamente.",
    cards: [
      { e: "Home + calendário", b: "Dashboard vivo, grade mensal, rituais a um clique." },
      { e: "Agentes + capacidades", b: "Navegador da frota com fluxo de spawn; skills, MCPs e plugins descobertos ao vivo." },
      { e: "Espaços + onboarding", b: "Company e collaborate como formulários; um passo a passo guiado de oito etapas na primeira execução." },
    ],
    busEyebrow: "O barramento de comandos",
    busH: ["Agentes orquestrando agentes — ", "através de uma superfície confiável", "."],
    busLead: "Uma sessão coordenadora não pode receber as chaves para lançar e dirigir outros agentes por conta própria — as proteções do próprio modelo impedem isso, e com razão. Então ela não força a porta: deixa uma solicitação num inbox compartilhado, e a superfície em que você confia — o app ou a extensão — a cumpre de forma nativa: criar um worker, enviar uma mensagem, encerrá-lo. Solicite, não lance.",
    busCards: [
      { e: "Três verbos, um canal", b: "spawn · send · kill — um pequeno arquivo JSON em ~/.aios/spawn-inbox/, executado pelo Glass sem teclas sintéticas e sem bloqueios." },
      { e: "O modelo certo para a tarefa", b: "Direcione cada worker pela carga cognitiva — trabalho mecânico para um modelo mais rápido, julgamento para a fronteira. Calibre, não escolha." },
      { e: "O ciclo se fecha", b: "A resposta de um worker volta pelo mesmo trilho até a sessão coordenadora — mesmo uma de longa duração — para que os agentes tenham conversas reais de vários turnos." },
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
    body: "Vinte e uma seções — dos primeiros princípios à contenção 24/7. A linguagem de design, a arquitetura, a frota, os rituais e o contrato de confiança, em um só artefato de marca. Este próprio site é o irmão web dele. Leia online, ou leve o PDF para a sua próxima reunião.",
    readBtn: "Leia o manual →", downloadBtn: "Baixar PDF",
    coverSub: "21 seções — dos primeiros princípios ao mapa de uma página",
  },
  getStarted: {
    eyebrow: "Começar", h: ["Rodando em ", "30 segundos", "."],
    prompt: "Já tem o Claude Code instalado? Abra qualquer terminal e diga:",
    codeComment: "# o setup inteiro, em uma linha",
    consent: "~5 min de setup guiado · ~5 min de conversa inicial · cada passo pede seu consentimento.",
    steps: [
      { e: "Passo 1 · ~5 min", t: "Setup conduzido pelo Claude", b: "Você escreve uma única frase. O Claude lê o SETUP.md, clona o framework, configura seu vault privado e conecta suas ferramentas — e então passa a palavra. Ele nunca pergunta quais serviços você usa." },
      { e: "Passo 2 · ~5 min", t: "Conversa inicial", b: "Identidade, como você trabalha e um contrato de confiança — e depois seu primeiro plano diário, no seu dia real. Os conectores vêm depois, um por um. O tour completo quando você quiser." },
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
    community: "Comunidade", discord: "Discord ↗",
  },
  meta: {
    title: "The AIOS — IA como um time, não uma ferramenta",
    description: "O sistema operacional de IA. Transforme a IA num time de colegas, governado pela sua intenção, capitalizando a cada sessão. Código aberto, GPL-2.0. Sem backend, sem telemetria — auditável antes de rodar.",
  },
};

export const CONTENT: Record<Locale, Content> = { en, es, pt };
