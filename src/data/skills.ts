/* /climb — the walkable ladder for the first hours after install.
 *
 * UNLISTED BY DESIGN. Nothing on the site links here, it is not in llms.txt, and
 * every locale variant ships `robots: noindex`. It exists to be handed out by URL,
 * alongside a hands-on session. If you add a nav link, you have changed what this
 * page is — ask first.
 *
 * Two rules decide whether an entry belongs:
 *   1. It ENDS IN AN ARTIFACT — a file in the vault, not just a good reply.
 *   2. It STARTS FROM THE VAULT — it reads what is already there before asking.
 *
 * Parity: `cards` and `rungs` are Records keyed by closed unions, so a card
 * missing in any locale fails the build — the same contract as src/content.ts.
 * Order lives once, in LADDER below. Slash commands, file names and "vault" stay
 * English in every locale. */

import type { Metadata } from "next";
import type { Locale } from "@/messages";

export type RungId = "base" | "harness" | "memory" | "interface" | "compound" | "yours" | "team" | "summit" | "build";

export type CardId =
  | "name"
  | "interview"
  | "knows"
  | "pitch"
  | "ghost"
  | "ingest"
  | "stories"
  | "today"
  | "closeSession"
  | "closeDay"
  | "connect"
  | "hat"
  | "firstAgent"
  | "worker"
  | "rung"
  | "intent"
  | "housekeeping"
  | "askBox"
  | "findAround"
  | "personalize"
  | "extend"
  | "brief"
  | "reply"
  | "resume"
  | "close"
  | "company"
  | "collaborate"
  | "comprehension"
  | "why"
  | "deck"
  | "blogpost"
  | "webapp"
  | "agreement"
  | "financials"
  | "studyBuddy"
  | "migrate"
  | "companion"
  | "install"
  | "mindset"
  | "askHow"
  | "fortress"
  | "studio";

/* Base camp + the six stations of the hands-on climb + the summit, in the order the workshop
 * deck (aios.html) walks them. A group IS a station, so cards carry no station tag.
 * The summit closes day one — its last card briefs the screen companion that evening — and
 * "build" (day two) is a second walk that starts from the top.
 * "needs" lines cite cards by their visible number (01, 11, 14, 15, 27). Inserting or moving a
 * card renumbers everything after it: recompute those references in all three locales. */
export const LADDER: { rung: RungId; cards: { id: CardId; station?: number }[] }[] = [
  { rung: "base", cards: [{ id: "name" }, { id: "install" }, { id: "mindset" }] },
  {
    rung: "harness",
    cards: [{ id: "askBox" }, { id: "askHow" }, { id: "hat" }, { id: "connect" }, { id: "intent" }, { id: "fortress" }, { id: "rung" }],
  },
  {
    rung: "memory",
    cards: [{ id: "interview" }, { id: "migrate" }, { id: "today" }, { id: "ingest" }, { id: "ghost" }, { id: "knows" }, { id: "stories" }, { id: "pitch" }],
  },
  { rung: "interface", cards: [{ id: "findAround" }] },
  { rung: "compound", cards: [{ id: "closeSession" }, { id: "closeDay" }, { id: "housekeeping" }] },
  { rung: "yours", cards: [{ id: "personalize" }, { id: "extend" }, { id: "firstAgent" }, { id: "studio" }] },
  { rung: "team", cards: [{ id: "worker" }, { id: "brief" }, { id: "reply" }, { id: "resume" }, { id: "close" }, { id: "company" }, { id: "collaborate" }] },
  { rung: "summit", cards: [{ id: "comprehension" }, { id: "why" }, { id: "companion" }] },
  {
    rung: "build",
    cards: [{ id: "deck" }, { id: "blogpost" }, { id: "webapp" }, { id: "agreement" }, { id: "financials" }, { id: "studyBuddy" }],
  },
];

export type Card = {
  name: string;
  promise: string; // the operator's pain, not our feature
  paste: string; // copyable as-is — no editing needed for a first result
  hint?: string; // one line on how/where to paste, when it isn't obvious
  gets: string; // the artifact it leaves behind
  time: string; // honest, AI minutes
  needs: string; // what must be true first
};

export type SkillsCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: [string, string, string];
  lede: string;
  rules: { starts: [string, string]; ends: [string, string] };
  honest: string;
  labels: { copy: string; copied: string; gets: string; time: string; needs: string; station: string; rung: string; summit: string; day: string; leave: string };
  rungs: Record<RungId, { name: string; proves: string; leave: string }>; // leave: the artifacts a station leaves in the vault
  cards: Record<CardId, Card>;
  close: string;
  back: string;
};

const en: SkillsCopy = {
  meta: {
    title: "The climb — paste one, get a thing · The AIOS",
    description: "Forty-two moves for the first hours with The AIOS, and a second day building with it. Each one is a paste block, and each one leaves something in your vault.",
  },
  eyebrow: "The climb",
  h1: ["Paste one. ", "Get a thing.", ""],
  lede:
    "You installed it. Now what do you type? These are the moves, in order. Every one is a block you copy into your session, and every one leaves something behind in your vault — a file you can open tomorrow, not a reply that scrolls away.",
  rules: {
    starts: ["Starts from your vault", "Nothing here interviews you from zero. It reads what is already written first, and only asks about the gap."],
    ends: ["Ends in an artifact", "A plan, a note, an agent, a contract — filed where the next session will find it. That is what makes it compound."],
  },
  honest:
    "Day one, the answers are thin — because the vault is thin. That is not a bug to hide; it is the whole reason the memory station is about bringing what you already have.",
  labels: { copy: "Copy", copied: "Copied", gets: "You get", time: "Time", needs: "Needs", station: "Station", rung: "Station", summit: "Summit", day: "Day 2", leave: "You leave with" },
  rungs: {
    base: { name: "Base camp", proves: "It is mine, and it knows where I start.", leave: "A named session, a checked install, and a one-page note on how to think about it." },
    harness: { name: "Meet your harness", proves: "It knows what it is, what it can reach, and how far it may go.", leave: "A map of what came in the box, working connectors, a reviewed INTENT.md, your containment rung." },
    memory: { name: "Your memory", proves: "It remembers me, and it gets better with everything I give it.", leave: "Your declared context, your old AI’s knowledge filed, today’s plan, a filed source, your voice on record." },
    interface: { name: "Know your interface", proves: "I know where everything is.", leave: "Your three shortcuts in today’s note." },
    compound: { name: "Compounding value", proves: "What I do today, tomorrow already knows.", leave: "Session blocks and a closed day in your daily note, and a tidier vault." },
    yours: { name: "Make it yours", proves: "It fits my work, and no update undoes it.", leave: "USER.md overrides, an extension plan, your first custom agent, a launch film." },
    team: { name: "Your team", proves: "It is not one assistant. It is a team, and so are we.", leave: "Workers that filed their research, your company mounted, a shared space open." },
    summit: { name: "From the summit", proves: "I can defend what shipped, and I know where I am going.", leave: "Your comprehension debt named, a compass in growth.md if it rings true, a companion briefed for Day 2." },
    build: { name: "Day two · Build with it", proves: "It ships real work, from what it already knows about me.", leave: "A deck, a post, an app, an agreement draft, a financial cockpit, a study protocol." },
  },
  cards: {
    name: {
      name: "Name it",
      promise: "Every chat meets you like a stranger.",
      paste: "spawn <name>",
      hint: "Swap <name> for any name you would say out loud — spawn atlas. In a terminal, or use “Spawn a session” in the App and type the name.",
      gets: "A named session that greets you as itself, and keeps that identity every time you open it.",
      time: "1 min",
      needs: "Nothing.",
    },
    interview: {
      name: "The cold-start interview",
      promise: "It can only use what it has been told.",
      paste: "/aios:cold-start-interview",
      hint: "Answer the way you would brief a new chief of staff on their first day.",
      gets: "Your declared context — who you are, how you work, what you are building — written as files it reads every session.",
      time: "10 min, mostly you talking",
      needs: "Nothing.",
    },
    knows: {
      name: "What do you actually know about me?",
      promise: "You cannot trust what you cannot see.",
      paste:
        "What do you actually know about me? Separate what I told you (declared) from what you have observed working with me. Then name the three biggest gaps, and add them as questions at the bottom of today's daily note.",
      gets: "A read-back of your context, and the three gaps filed as questions in today's note.",
      time: "1 min",
      needs: "11, or a vault with some history.",
    },
    pitch: {
      name: "The cocktail pitch",
      promise: "You still can’t say what you do in thirty seconds.",
      paste:
        "Using what my vault knows about me, write my 30-second answer to “so, what do you do?” — spoken, not written, the way I would actually say it at a dinner. Then render it as a one-page infographic and save it to 03 - export/.",
      gets: "The spoken pitch, plus a rendered one-pager filed in your vault.",
      time: "3 min",
      needs: "11.",
    },
    ghost: {
      name: "Ghost — it answers as you",
      promise: "Your voice is the one thing a draft always misses.",
      paste: "/aios:ghost How would I explain what my company does to a new hire?",
      hint: "What it gets wrong is the useful part. Correct it once, in the session.",
      gets: "An answer in your voice — and your correction written into the vault, so the next draft starts closer.",
      time: "2 min",
      needs: "11.",
    },
    ingest: {
      name: "Feed it a source",
      promise: "Years of your thinking live in files it has never seen.",
      paste: "/aios:ingest https://chuycepeda.substack.com/p/the-agentic-culture-team-management",
      hint: "This one is the essay the framework is built on, so it works as-is. Then feed it your own: a PDF path, a deck, a call transcript, a YouTube URL.",
      gets: "A filed reflection, cross-referenced to your projects and logged — searchable by every future session.",
      time: "2–5 min per source",
      needs: "Nothing.",
    },
    stories: {
      name: "The story index",
      promise: "Your best stories are written down — just never as stories.",
      paste:
        "Read my vault — observed context, daily notes, anything I have published — and propose three stories I already tell or should tell. For each: a title, the moment, the turn, the one line people remember, when to use it, and where in the vault it comes from. Never invent a detail I did not write. Save them to context/declared/story-vault.md only after I approve each one.",
      gets: "context/declared/story-vault.md — three sourced stories, ready for a talk, a pitch or a post.",
      time: "5 min",
      needs: "A vault with some history — 14 speeds it up.",
    },
    today: {
      name: "Your first morning",
      promise: "Every day starts from a blank page.",
      paste: "/aios:today",
      gets: "Today’s plan, written into your daily note — a file, not a chat reply.",
      time: "2 min",
      needs: "Nothing. Calendar makes it sharper.",
    },
    closeSession: {
      name: "Close the loop",
      promise: "What you learned today is gone tomorrow.",
      paste: "/aios:close-session",
      hint: "It asks what was most useful. Answer honestly — that answer is data.",
      gets: "A session block in today’s note, and what it noticed about how you work, queued for the next session.",
      time: "2 min",
      needs: "A session that did something.",
    },
    closeDay: {
      name: "Close the day",
      promise: "Tomorrow never knows what today decided.",
      paste: "/aios:close-day",
      gets: "The day captured — shipped, learned, carried — so tomorrow’s /aios:today reads it.",
      time: "3 min",
      needs: "A day of use.",
    },
    connect: {
      name: "Connect your tools",
      promise: "It plans your day without seeing your calendar.",
      paste: "/aios:mcps-setup",
      hint: "Start with what a new chief of staff would get on day one — calendar and mail. Add the rest once it has earned it.",
      gets: "Working connectors, each verified — so the plan, the prep and the follow-up come from your real tools.",
      time: "5–15 min",
      needs: "Your own accounts.",
    },
    hat: {
      name: "Put on a hat",
      promise: "You need an accountant’s eyes for ten minutes, not a new app.",
      paste: "/aios:agent accountant",
      hint: "Run /aios:agent alone to see every bundled agent, or try /aios:agent study-buddy. Then ask it something real from your week.",
      gets: "The session you already have, answering as a specialist — with your context still loaded.",
      time: "1 min",
      needs: "Nothing.",
    },
    firstAgent: {
      name: "Your first agent",
      promise: "You keep explaining the same job to the same assistant.",
      paste: "Launch the aios-builder to help me build a custom agent that acts as my [role] — it should know [what] and always [rule].",
      hint: "Fill the three brackets from your own business. Then: “spawn it and give it one real task.” Prefer a form? The Designer in the App and Glass is the same builder, as a few fields.",
      gets: "agents/custom/{name}.md — yours, survives every update, spawnable by name.",
      time: "5 min",
      needs: "Nothing.",
    },
    worker: {
      name: "Spawn a worker, then message it",
      promise: "Delegating to AI still means babysitting one chat.",
      paste: "Spawn a worker named researcher with the task: find three competitors of my company and write a one-paragraph note on each. Then tell me when it is running.",
      hint: "Then, from this session: “send researcher: also note their pricing page URL.”",
      gets: "A second, named session working in parallel — and a research note filed when it finishes.",
      time: "5 min",
      needs: "The App or Glass open.",
    },
    rung: {
      name: "Which rung am I on?",
      promise: "You cannot discuss a risk you cannot name.",
      paste: "Which containment rung am I on? Run the probes and show me what you found.",
      hint: "Read what it found, not what it reassures you about.",
      gets: "Your real containment level, measured on this machine — and the one next move that raises it.",
      time: "2 min",
      needs: "Nothing.",
    },
    intent: {
      name: "Where trust stands",
      promise: "You don’t know what it is allowed to do without you.",
      paste: "Looking at every session we’ve run so far and our daily notes, how do you feel about our INTENT.md? Should we tune anything — or are we fine for now, earning trust first?",
      hint: "Day one, with no history yet? Ask it instead to go domain by domain — email, calendar, money, code, what you publish — and propose what it does alone, what it drafts for your approval, and what it never touches.",
      gets: "Its read of INTENT.md against how you have actually worked — and only the changes you confirm, written into INTENT.md.",
      time: "10 min",
      needs: "A few sessions behind you — or the hint, on day one.",
    },
    housekeeping: {
      name: "Tidy the house",
      promise: "A system that only grows eventually drowns you.",
      paste: "/aios:housekeeping",
      hint: "It proposes; it never moves anything on its own. Read before you accept.",
      gets: "A list of merges, archives, index refreshes and link repairs — applied only where you say yes.",
      time: "5 min",
      needs: "A week of use.",
    },
    askBox: {
      name: "Ask your session",
      promise: "You don’t know what came in the box.",
      paste: "Which agents and skills in my AIOS would you use to help me build a well-engineered, secure app for my company? I’m not technical — tell me what each one does and where it lives.",
      hint: "Then: “add the three you would use first to today’s note.” And open one of the files it names — everything it knows is a file you can read.",
      gets: "A plain-words map of the agents and skills you already have, each with the file it lives in — and your first three filed in today’s note.",
      time: "2 min",
      needs: "Nothing.",
    },
    findAround: {
      name: "Find your way around",
      promise: "There is more in the App than the chat window.",
      paste:
        "Show me around my AIOS App: where my named sessions are, where today's note is, and what the command palette can do. Then add the three shortcuts I will use most to today's note.",
      hint: "In the App: Running lists your sessions and ⌘K opens the palette. In Glass: the Sessions hub, and ⌘⌥G.",
      gets: "Your three shortcuts, written into today’s note.",
      time: "2 min",
      needs: "The App or Glass open.",
    },
    personalize: {
      name: "Make a command yours",
      promise: "The daily plan is almost right for you, every day.",
      paste: "Personalize my /aios:today so it always starts with my three priorities and never schedules anything before 9am.",
      hint: "Swap the two rules for yours. It writes them into USER.md → Command personalizations → /today; every command reads its own section before it runs, and updates never touch that file.",
      gets: "USER.md with your overrides — and tomorrow’s /aios:today shaped by them.",
      time: "5 min",
      needs: "Nothing. Sharper after a few days of /aios:today.",
    },
    extend: {
      name: "Six things you can add",
      promise: "The framework fits most of your work, not all of it.",
      paste:
        "Show me the six things I can add to my AIOS — agents, skills, hooks, MCPs, plugins, templates — and where each one lives in custom/. Then, from what you know about my work, propose the one I should build first and why. Save the proposal to today's note.",
      hint: "Anything in custom/ is yours: it wins over the bundled version on a name clash, and no update ever touches it.",
      gets: "The extension map for your own setup, plus one proposal filed in today’s note.",
      time: "3 min",
      needs: "Nothing.",
    },
    brief: {
      name: "Brief it big, on the right model",
      promise: "A three-line prompt gets a three-line job.",
      paste:
        "Spawn a writer on the fast tier with this whole brief: [paste your brief here]. Tell me when it is running.",
      hint: "Over 1 KB, the brief is saved to ~/.aios/bus-payloads/ and the worker gets a one-line pointer. Pick the tier by the shape of the work, not its importance.",
      gets: "A worker on the model you chose, holding your full brief as a file it can re-read.",
      time: "2 min",
      needs: "27.",
    },
    reply: {
      name: "Have it report back",
      promise: "You keep checking a tab to see whether it’s done.",
      paste:
        "Tell researcher to add their pricing, and to report back to me when it is done.",
      gets: "A one-line report delivered into this session when the worker finishes — and its note filed in your vault.",
      time: "1 min",
      needs: "27.",
    },
    resume: {
      name: "Reopen yesterday’s worker",
      promise: "A fresh session starts from zero every time.",
      paste:
        "Reopen yesterday's researcher and pick up where it left off.",
      hint: "resume gives you back the same someone. spawn gives you a fresh something.",
      gets: "The same named session back, with everything it learned, continuing the work.",
      time: "1 min",
      needs: "A worker you closed before.",
    },
    close: {
      name: "Close it when it’s done",
      promise: "Finished workers pile up, and you lose track of what is running.",
      paste:
        "Close the researcher session, after it runs /aios:close-session.",
      hint: "Want the next one somewhere specific? Say “open it in Glass, not the App.” A request file disappearing means picked up, not done — ask “did it actually finish?” and it reads the worker’s transcript.",
      gets: "The worker’s session captured in today’s note, then closed.",
      time: "1 min",
      needs: "27.",
    },
    company: {
      name: "Mount your company",
      promise: "Every teammate’s AI describes the company a little differently.",
      paste:
        "/aios:company",
      hint: "It asks whether to create the company repo or mount one a teammate shared. Read-only in your vault, and namespaced beside your own files, never over them.",
      gets: "Your company’s positioning, voice and offerings in vault/00 - notes/context/ventures/{company}/ — one source every teammate’s AIOS reads.",
      time: "10 min to create · 2 min to mount",
      needs: "A GitHub or Drive your company already uses.",
    },
    collaborate: {
      name: "Open a shared space",
      promise: "The launch plan lives in five heads and one chat thread.",
      paste:
        "/aios:collaborate",
      hint: "Pick the project and where your team already works — Drive or GitHub. Your observed context never writes to the shared space: structural, not policy.",
      gets: "A project note mirrored to the shared space, with the space’s rules and a welcome page — and nothing from your personal context.",
      time: "5 min",
      needs: "A teammate, and a Drive or repo you already share.",
    },
    comprehension: {
      name: "Walk me through what shipped",
      promise: "A lot ships at AI speed, and your understanding falls behind.",
      paste: "A lot shipped this session — walk me through what I need to understand.",
      hint: "Then: “add anything I still don’t get as an open thread in today’s note.” The skill is comprehension-debt. The feeling is intentional: don’t try to keep up. The bar is defend, debug, decide — never read every line.",
      gets: "A recap of everything the agents shipped, walked through at the depth you need — and what you haven’t grasped yet carried in today’s note as comprehension debt.",
      time: "5 min",
      needs: "A long session where agents did real work.",
    },
    why: {
      name: "What does all of this add up to?",
      promise: "Every goal completes, then asks what’s next.",
      paste:
        "What does all of this add up to?",
      hint: "The skill is finding-your-why. It never asks you to state your purpose; it derives it from what stayed the same, and your words win. Ask it when a ship lands and it feels flat.",
      gets: "A reading of what hasn’t changed across everything you’ve done, offered as candidates for you to correct — and kept as your compass in growth.md only if you say it’s right.",
      time: "5 min",
      needs: "Variety: several projects and domains in your vault.",
    },
    deck: {
      name: "A deck from what it knows",
      promise: "The board meeting is Thursday, and the deck is still a blank slide.",
      paste:
        "Read my vault for my company's latest numbers, wins and open problems, and build me a board-update deck as one self-contained HTML file — eight slides at most, arrow keys to advance, no outside links. Mark anything you inferred rather than read as “confirm”. Save it to 03 - export/decks/.",
      hint: "Open the file in your browser and present from there. Want a pitch instead? Swap “board-update” for “investor pitch”.",
      gets: "03 - export/decks/{name}.html — a deck that opens in any browser, built from your own notes.",
      time: "5 min",
      needs: "11. 14 makes it sharper.",
    },
    blogpost: {
      name: "A post in your voice",
      promise: "You have things worth saying, and no time to write them down.",
      paste:
        "Read my vault — daily notes, reflections, anything I have published — and find the one idea I keep coming back to. Draft a 600-word post about it in my voice: my words, my examples, nothing I did not write or say. Save it to 03 - export/posts/ as a draft, and list the three lines you are least sure sound like me.",
      hint: "Correct those three lines in the session. That correction is how the next draft starts closer.",
      gets: "A draft post in 03 - export/posts/, sourced from your own notes — with the lines to check flagged for you.",
      time: "4 min",
      needs: "11. Better after 15.",
    },
    webapp: {
      name: "A small app for a real problem",
      promise: "A spreadsheet is doing a job an app should do.",
      paste:
        "From what my vault knows about my business, propose three small tools that would save me time every week. Then build the first one as a single self-contained HTML file — works offline, keeps its data in the browser, no sign-up, no outside services. Save it to 03 - export/apps/ and tell me how to open it.",
      hint: "Open the file in your browser. Then ask for one change at a time — that is the whole loop.",
      gets: "03 - export/apps/{name}.html — a working tool you can open, use and hand to someone as one file.",
      time: "8 min",
      needs: "11.",
    },
    agreement: {
      name: "Draft the agreement",
      promise: "The deal was agreed on a call, and nobody has written it down.",
      paste:
        "Find the most recent deal or engagement described in my vault — client, scope, price, dates. Draft a services agreement from it: parties, scope, deliverables, fees and payment terms, confidentiality, term and termination. Put every term you could not find in brackets as [CONFIRM]. Head it “Draft for review by a lawyer — not legal advice.” Save it to 03 - export/agreements/.",
      hint: "This is a draft for your lawyer, not a contract. It saves them an hour; it does not replace them.",
      gets: "A first-draft agreement in 03 - export/agreements/, built from what the vault says was agreed — every gap marked [CONFIRM].",
      time: "5 min",
      needs: "A deal written somewhere in your vault — a note, or a call transcript brought in with 14.",
    },
    financials: {
      name: "Your financial cockpit",
      promise: "You find out how the month went three weeks after it ends.",
      paste:
        "Build me a one-page financial cockpit as a single self-contained HTML file: cash, monthly revenue, monthly burn, runway in months, and the three biggest costs. Use any numbers already in my vault; for the rest, ask me to paste them — totals only. Show where every figure came from. Save it to 03 - export/finance/ and keep it on this machine.",
      hint: "Paste totals, never statements. Never paste a bank password, a card number or an account login — it does not need them.",
      gets: "A one-page cockpit in 03 - export/finance/ — every number sourced, on your machine and nowhere else.",
      time: "5 min",
      needs: "Your own numbers, roughly.",
    },
    studyBuddy: {
      name: "A study buddy that remembers",
      promise: "You finish the course and keep almost none of it.",
      paste:
        "Take the most recent document I brought into my vault — or the file I paste next — and turn it into a study protocol: the five ideas that matter, in order, each in plain words. Then quiz me one question at a time. Save the protocol to 00 - notes/reflections/study/ with a list of what I got wrong, and start every next quiz from that list.",
      hint: "Drop a PDF or a course link in first. Tomorrow, just say “quiz me again.”",
      gets: "A study protocol and a running list of what you got wrong, in reflections/study/ — the next quiz starts there.",
      time: "10 min a round",
      needs: "A document or course — 14 brings it in.",
    },
    migrate: {
      name: "Bring your other AI with you",
      promise: "Two years of ChatGPT knows you better than your new system does.",
      paste: "Help me move from my other AI. Find what I built there: use Claude in Chrome to read my ChatGPT or Claude.ai chats and projects, or open the export or transcripts I point you to. Then file it: who I am into my declared context, each ongoing effort into its own project note, what is worth re-reading into reflections. Tell me what you put where, and flag anything outdated before you trust it.",
      hint: "Signed in to ChatGPT or Claude.ai in Chrome, it can read your chats itself. No Chrome connection? Export your data from the other AI and point it at the file.",
      gets: "Your declared context, a project note for each ongoing effort, and reflections worth re-reading — seeded from your old AI, with anything outdated flagged.",
      time: "5–15 min",
      needs: "Your other AI open in Chrome, or an export from it.",
    },
    companion: {
      name: "Brief a companion for the screen",
      promise: "You want to show peers what it does, without showing them your life.",
      paste:
        "Save this brief to my vault as companion-brief.md, then spawn a session named atlas-companion and give it the brief. Brief: tomorrow you are on a projector in front of my peers. You may show my public work, what I have published, and only the files I name to you. You never show or say: financials or any money figure, the names of clients or deals, anything about my family or personal life, or anything from context/observed — profile, growth, patterns. If a request would cross that line, say so and offer something safe instead. Tell me when you are ready.",
      hint: "Do this before you leave tonight, so you arrive on Day 2 ready for “EOers in action”. atlas is the example name — use yours. It can still read your vault; the brief governs what reaches the screen. Test it tonight: ask it something it must refuse.",
      gets: "atlas-companion, a separate session briefed for the projector — and companion-brief.md in your vault, so it starts tomorrow from the same rules.",
      time: "5 min, plus a test",
      needs: "01, and the App or Glass open.",
    },
    install: {
      name: "Check the install",
      promise: "You can’t tell yet whether it is set up right.",
      paste: "spawn onboarding-aios \"is my install working?\"",
      hint: "In a terminal — or “Spawn a session” in the App named onboarding-aios, and ask it the question. It checks for real and names the one thing to fix first. Lost later? This is the session that knows the whole map.",
      gets: "A checked install — what works, what is missing, the next fix — and a guide you can spawn again whenever you feel lost.",
      time: "3 min",
      needs: "01.",
    },
    mindset: {
      name: "The mindset",
      promise: "The newer the model, the more powerful your setup — if you understand three ideas.",
      paste: "Using my own vault as the example, explain context, attention and stigmergy in plain words, then write it as a one-page note I can reread.",
      hint: "Stigmergy is how ants coordinate without a boss: each leaves a trace in a shared place, and the next one reads it. Your vault is that place.",
      gets: "A one-page note in reflections — context, attention and stigmergy, explained with your own vault.",
      time: "3 min",
      needs: "01.",
    },
    askHow: {
      name: "Ask how it delegates",
      promise: "You don’t know when one session should become three.",
      paste: "Explain the difference between spawning an agent, a subagent, and a dynamic workflow — and which skill in my AIOS helps you decide which one fits.",
      hint: "The skill it should name is orchestration-ladder. Want it kept? Say “save that to today’s note.”",
      gets: "Spawn, subagent and workflow in plain words, and the skill that picks between them — in today’s note if you keep it.",
      time: "2 min",
      needs: "Nothing.",
    },
    fortress: {
      name: "More power, fewer walls",
      promise: "It reaches more of your machine than any chat ever did.",
      paste: "Read FORTRESS.md and explain the containment ladder to me in plain words.",
      hint: "The next card measures which rung you are actually on. Want this kept? Say “save that as a note in reflections.”",
      gets: "The containment ladder in plain words, read from the file itself — a note in reflections if you keep it.",
      time: "2 min",
      needs: "Nothing.",
    },
    studio: {
      name: "Build a studio: one line → a launch film",
      promise: "A launch video still means an agency and three weeks.",
      paste: "Use the motion-lab skill. Make a 20-second launch video for [my product], one HTML file, wide 1920x1080 and vertical 1080x1920, 60 fps. Five beats: the pain, the product in use, one real number, the payoff, the logo. Use my real screenshots in ./shots, never redraw UI. Numbers, not adjectives: 120 BPM, springs at damping 0.7, one accent colour [hex]. Banned: bloom, particles, glow orbs, invented numbers.",
      hint: "Replace [my product] and [hex], and put your real screenshots in a folder named shots first. motion-lab interviews you element by element before it renders — answer, or take its recommendation.",
      gets: "The launch film as HTML video files — wide 1920x1080 and vertical 1080x1920 — that play in any browser.",
      time: "20–30 min, most of it the interview and the render-and-fix loop",
      needs: "Your product’s real screenshots, in ./shots.",
    },
  },
  close: "You walked in with a chat window. Walk the ladder and you leave with someone who remembers you tomorrow.",
  back: "the-aios.com",
};

const es: SkillsCopy = {
  meta: {
    title: "La escalada — pega uno, obtén algo · The AIOS",
    description: "Cuarenta y dos movimientos para tus primeras horas con The AIOS, y un segundo día construyendo con él. Cada uno es un bloque para pegar, y cada uno deja algo en tu vault.",
  },
  eyebrow: "La escalada",
  h1: ["Pega uno. ", "Obtén algo.", ""],
  lede:
    "Ya lo instalaste. ¿Y ahora qué escribes? Estos son los movimientos, en orden. Cada uno es un bloque que copias a tu sesión, y cada uno deja algo en tu vault: un archivo que puedes abrir mañana, no una respuesta que se pierde al hacer scroll.",
  rules: {
    starts: ["Empieza desde tu vault", "Nada aquí te entrevista desde cero. Primero lee lo que ya está escrito, y solo pregunta por lo que falta."],
    ends: ["Termina en un artefacto", "Un plan, una nota, un agente, un contrato — archivado donde la siguiente sesión lo va a encontrar. Eso es lo que lo hace acumularse."],
  },
  honest:
    "El primer día, las respuestas son delgadas — porque el vault es delgado. No es un defecto que esconder; es justo la razón por la que la estación de memoria consiste en traer lo que ya tienes.",
  labels: { copy: "Copiar", copied: "Copiado", gets: "Obtienes", time: "Tiempo", needs: "Requiere", station: "Estación", rung: "Estación", summit: "Cima", day: "Día 2", leave: "Te llevas" },
  rungs: {
    base: { name: "Campamento base", proves: "Es mío, y sabe desde dónde empiezo.", leave: "Una sesión con nombre, una instalación revisada y una nota de una página sobre cómo pensar en todo esto." },
    harness: { name: "Conoce tu arnés", proves: "Sabe qué es, qué alcanza y hasta dónde puede llegar.", leave: "Un mapa de lo que venía en la caja, conectores que funcionan, un INTENT.md revisado y tu peldaño de contención." },
    memory: { name: "Tu memoria", proves: "Se acuerda de mí, y mejora con todo lo que le doy.", leave: "Tu contexto declarado, lo que sabía tu otra IA ya archivado, el plan de hoy, una fuente archivada, tu voz registrada." },
    interface: { name: "Conoce tu interfaz", proves: "Sé dónde está cada cosa.", leave: "Tus tres atajos en la nota de hoy." },
    compound: { name: "Valor que se acumula", proves: "Lo que hago hoy, mañana ya lo sabe.", leave: "Bloques de sesión y un día cerrado en tu nota diaria, y un vault más ordenado." },
    yours: { name: "Hazlo tuyo", proves: "Se ajusta a mi trabajo, y ninguna actualización lo deshace.", leave: "Tus ajustes en USER.md, un plan de extensiones, tu primer agente propio, un video de lanzamiento." },
    team: { name: "Tu equipo", proves: "No es un asistente. Es un equipo, y nosotros también.", leave: "Workers que archivaron su investigación, tu empresa montada, un espacio compartido abierto." },
    summit: { name: "Desde la cima", proves: "Puedo defender lo que se entregó, y sé hacia dónde voy.", leave: "Tu deuda de comprensión nombrada, una brújula en growth.md si suena cierta, un acompañante listo para el Día 2." },
    build: { name: "Día dos · Construye con él", proves: "Entrega trabajo real, a partir de lo que ya sabe de mí.", leave: "Un deck, un post, una app, un borrador de contrato, una cabina financiera, un protocolo de estudio." },
  },
  cards: {
    name: {
      name: "Ponle nombre",
      promise: "Cada chat te recibe como a un desconocido.",
      paste: "spawn <nombre>",
      hint: "Cambia <nombre> por uno que dirías en voz alta — spawn atlas. En una terminal, o usa “Spawn a session” en la App y escribe el nombre.",
      gets: "Una sesión con nombre que te saluda como sí misma, y conserva esa identidad cada vez que la abres.",
      time: "1 min",
      needs: "Nada.",
    },
    interview: {
      name: "La entrevista de arranque",
      promise: "Solo puede usar lo que le han contado.",
      paste: "/aios:cold-start-interview",
      hint: "Responde como le explicarías todo a un nuevo jefe de gabinete en su primer día.",
      gets: "Tu contexto declarado — quién eres, cómo trabajas, qué estás construyendo — escrito en archivos que lee en cada sesión.",
      time: "10 min, casi todo tú hablando",
      needs: "Nada.",
    },
    knows: {
      name: "¿Qué sabes realmente de mí?",
      promise: "No puedes confiar en lo que no puedes ver.",
      paste:
        "¿Qué sabes realmente de mí? Separa lo que yo te dije (declarado) de lo que has observado trabajando conmigo. Luego nombra los tres huecos más grandes y agrégalos como preguntas al final de la nota diaria de hoy.",
      gets: "Una lectura de tu contexto, y los tres huecos archivados como preguntas en la nota de hoy.",
      time: "1 min",
      needs: "11, o un vault con algo de historia.",
    },
    pitch: {
      name: "El pitch de coctel",
      promise: "Todavía no puedes decir a qué te dedicas en treinta segundos.",
      paste:
        "Con lo que mi vault sabe de mí, escribe mi respuesta de 30 segundos a “¿y tú a qué te dedicas?” — hablada, no escrita, como de verdad la diría en una cena. Luego conviértela en una infografía de una página y guárdala en 03 - export/.",
      gets: "El pitch hablado, más una infografía de una página archivada en tu vault.",
      time: "3 min",
      needs: "11.",
    },
    ghost: {
      name: "Ghost — responde como tú",
      promise: "Tu voz es lo único que un borrador siempre pierde.",
      paste: "/aios:ghost ¿Cómo le explicaría a alguien nuevo en el equipo qué hace mi empresa?",
      hint: "Lo que se equivoca es la parte útil. Corrígelo una vez, en la sesión.",
      gets: "Una respuesta con tu voz — y tu corrección escrita en el vault, para que el siguiente borrador empiece más cerca.",
      time: "2 min",
      needs: "11.",
    },
    ingest: {
      name: "Dale una fuente",
      promise: "Años de tu pensamiento viven en archivos que nunca ha visto.",
      paste: "/aios:ingest https://chuycepeda.substack.com/p/the-agentic-culture-team-management",
      hint: "Este es el ensayo sobre el que está construido el framework, así que funciona tal cual. Luego dale lo tuyo: la ruta de un PDF, un deck, la transcripción de una llamada, un URL de YouTube.",
      gets: "Una reflexión archivada, cruzada con tus proyectos y registrada — encontrable por cada sesión futura.",
      time: "2–5 min por fuente",
      needs: "Nada.",
    },
    stories: {
      name: "El índice de historias",
      promise: "Tus mejores historias ya están escritas — solo que nunca como historias.",
      paste:
        "Lee mi vault — contexto observado, notas diarias, lo que haya publicado — y propón tres historias que ya cuento o que debería contar. Para cada una: un título, el momento, el giro, la frase que la gente recuerda, cuándo usarla y de qué parte del vault viene. Nunca inventes un detalle que yo no haya escrito. Guárdalas en context/declared/story-vault.md solo después de que apruebe cada una.",
      gets: "context/declared/story-vault.md — tres historias con fuente, listas para una charla, un pitch o un post.",
      time: "5 min",
      needs: "Un vault con algo de historia — 14 lo acelera.",
    },
    today: {
      name: "Tu primera mañana",
      promise: "Cada día empieza desde una página en blanco.",
      paste: "/aios:today",
      gets: "El plan de hoy, escrito en tu nota diaria — un archivo, no una respuesta de chat.",
      time: "2 min",
      needs: "Nada. El calendario lo afina.",
    },
    closeSession: {
      name: "Cierra el ciclo",
      promise: "Lo que aprendiste hoy desaparece mañana.",
      paste: "/aios:close-session",
      hint: "Te pregunta qué fue lo más útil. Responde con honestidad — esa respuesta es información.",
      gets: "Un bloque de sesión en la nota de hoy, y lo que notó de cómo trabajas, en espera para la siguiente sesión.",
      time: "2 min",
      needs: "Una sesión que hizo algo.",
    },
    closeDay: {
      name: "Cierra el día",
      promise: "Mañana nunca sabe lo que hoy decidió.",
      paste: "/aios:close-day",
      gets: "El día capturado — lo entregado, lo aprendido, lo que sigue — para que el /aios:today de mañana lo lea.",
      time: "3 min",
      needs: "Un día de uso.",
    },
    connect: {
      name: "Conecta tus herramientas",
      promise: "Planea tu día sin ver tu calendario.",
      paste: "/aios:mcps-setup",
      hint: "Empieza por lo que recibiría un nuevo jefe de gabinete el primer día — calendario y correo. Suma lo demás cuando se lo haya ganado.",
      gets: "Conectores funcionando, cada uno verificado — para que el plan, la preparación y el seguimiento salgan de tus herramientas reales.",
      time: "5–15 min",
      needs: "Tus propias cuentas.",
    },
    hat: {
      name: "Ponte un sombrero",
      promise: "Necesitas los ojos de un contador por diez minutos, no una app nueva.",
      paste: "/aios:agent accountant",
      hint: "Corre /aios:agent solo para ver todos los agentes incluidos, o prueba /aios:agent study-buddy. Luego pregúntale algo real de tu semana.",
      gets: "La sesión que ya tienes, respondiendo como especialista — con tu contexto todavía cargado.",
      time: "1 min",
      needs: "Nada.",
    },
    firstAgent: {
      name: "Tu primer agente",
      promise: "Sigues explicándole el mismo trabajo al mismo asistente.",
      paste: "Lanza el aios-builder para ayudarme a crear un agente personalizado que actúe como mi [rol] — que sepa [qué] y que siempre [regla].",
      hint: "Llena los tres corchetes desde tu propio negocio. Luego: “lánzalo y dale una tarea real.” ¿Prefieres un formulario? El Designer de la App y de Glass es el mismo constructor, en unos cuantos campos.",
      gets: "agents/custom/{nombre}.md — tuyo, sobrevive cada actualización, se lanza por nombre.",
      time: "5 min",
      needs: "Nada.",
    },
    worker: {
      name: "Lanza un worker y mándale un mensaje",
      promise: "Delegar en la IA todavía significa cuidar un solo chat.",
      paste: "Lanza un worker llamado researcher con la tarea: encuentra tres competidores de mi empresa y escribe un párrafo sobre cada uno. Luego avísame cuando esté corriendo.",
      hint: "Después, desde esta sesión: “send researcher: anota también el URL de su página de precios.”",
      gets: "Una segunda sesión con nombre trabajando en paralelo — y una nota de investigación archivada cuando termina.",
      time: "5 min",
      needs: "La App o Glass abiertas.",
    },
    rung: {
      name: "¿En qué peldaño estoy?",
      promise: "No puedes discutir un riesgo que no puedes nombrar.",
      paste: "¿En qué peldaño de contención estoy? Corre las pruebas y muéstrame lo que encontraste.",
      hint: "Lee lo que encontró, no lo que te tranquiliza.",
      gets: "Tu nivel real de contención, medido en esta máquina — y el siguiente movimiento que lo sube.",
      time: "2 min",
      needs: "Nada.",
    },
    intent: {
      name: "Dónde está la confianza",
      promise: "No sabes qué tiene permitido hacer sin ti.",
      paste: "Con todas las sesiones que hemos tenido y nuestras notas diarias, ¿cómo ves nuestro INTENT.md? ¿Deberíamos ajustar algo, o vamos bien por ahora, ganando confianza primero?",
      hint: "¿Primer día, sin historia todavía? Pídele mejor que vaya dominio por dominio — correo, calendario, dinero, código, lo que publicas — y proponga qué hace por su cuenta, qué te deja como borrador para aprobar y qué nunca toca.",
      gets: "Su lectura de tu INTENT.md contra cómo has trabajado de verdad — y solo los cambios que confirmes, escritos en INTENT.md.",
      time: "10 min",
      needs: "Algunas sesiones encima — o la pista, el primer día.",
    },
    housekeeping: {
      name: "Ordena la casa",
      promise: "Un sistema que solo crece termina ahogándote.",
      paste: "/aios:housekeeping",
      hint: "Propone; nunca mueve nada por su cuenta. Lee antes de aceptar.",
      gets: "Una lista de fusiones, archivos, índices y enlaces por reparar — aplicada solo donde dices que sí.",
      time: "5 min",
      needs: "Una semana de uso.",
    },
    askBox: {
      name: "Pregúntale a tu sesión",
      promise: "No sabes qué venía en la caja.",
      paste: "¿Qué agentes y skills de mi AIOS usarías para ayudarme a construir una app bien hecha y segura para mi empresa? No tengo perfil técnico — dime qué hace cada uno y dónde vive.",
      hint: "Después: “agrega los tres que usarías primero a la nota de hoy.” Y abre uno de los archivos que mencione — todo lo que sabe es un archivo que puedes leer.",
      gets: "Un mapa en palabras simples de los agentes y skills que ya tienes, cada uno con el archivo donde vive — y tus primeros tres archivados en la nota de hoy.",
      time: "2 min",
      needs: "Nada.",
    },
    findAround: {
      name: "Ubícate",
      promise: "La App tiene mucho más que la ventana de chat.",
      paste:
        "Enséñame mi App de AIOS: dónde están mis sesiones con nombre, dónde está la nota de hoy y qué puede hacer la paleta de comandos. Luego agrega a la nota de hoy los tres atajos que más voy a usar.",
      hint: "En la App: Running muestra tus sesiones y ⌘K abre la paleta. En Glass: el hub de Sessions, y ⌘⌥G.",
      gets: "Tus tres atajos, escritos en la nota de hoy.",
      time: "2 min",
      needs: "La App o Glass abiertas.",
    },
    personalize: {
      name: "Haz tuyo un comando",
      promise: "El plan del día casi te queda, todos los días.",
      paste: "Personaliza mi /aios:today para que siempre empiece con mis tres prioridades y nunca agende nada antes de las 9am.",
      hint: "Cambia las dos reglas por las tuyas. Las escribe en USER.md → Command personalizations → /today; cada comando lee su propia sección antes de correr, y las actualizaciones nunca tocan ese archivo.",
      gets: "USER.md con tus ajustes — y el /aios:today de mañana ya con esa forma.",
      time: "5 min",
      needs: "Nada. Se afina después de unos días de /aios:today.",
    },
    extend: {
      name: "Seis cosas que puedes agregar",
      promise: "El framework le queda a casi todo tu trabajo, no a todo.",
      paste:
        "Enséñame las seis cosas que puedo agregar a mi AIOS — agentes, skills, hooks, MCPs, plugins, plantillas — y dónde vive cada una en custom/. Luego, con lo que sabes de mi trabajo, propón cuál debería construir primero y por qué. Guarda la propuesta en la nota de hoy.",
      hint: "Todo lo que está en custom/ es tuyo: gana sobre la versión incluida si se llaman igual, y ninguna actualización lo toca.",
      gets: "El mapa de extensiones de tu propia instalación, más una propuesta archivada en la nota de hoy.",
      time: "3 min",
      needs: "Nada.",
    },
    brief: {
      name: "Un brief completo, en el modelo correcto",
      promise: "Un prompt de tres líneas da un trabajo de tres líneas.",
      paste:
        "Lanza un writer en el tier fast con este brief completo: [pega aquí tu brief]. Avísame cuando esté corriendo.",
      hint: "Si pasa de 1 KB, el brief se guarda en ~/.aios/bus-payloads/ y el worker recibe una línea que apunta a él. Elige el tier por la forma del trabajo, no por su importancia.",
      gets: "Un worker en el modelo que elegiste, con tu brief completo como un archivo que puede volver a leer.",
      time: "2 min",
      needs: "27.",
    },
    reply: {
      name: "Que te reporte de vuelta",
      promise: "Sigues revisando una pestaña para ver si ya terminó.",
      paste:
        "Dile a researcher que agregue sus precios y que me reporte cuando termine.",
      gets: "Un reporte de una línea que llega a esta sesión cuando el worker termina — y su nota archivada en tu vault.",
      time: "1 min",
      needs: "27.",
    },
    resume: {
      name: "Reabre al worker de ayer",
      promise: "Una sesión nueva empieza desde cero, cada vez.",
      paste:
        "Reabre al researcher de ayer y que siga donde se quedó.",
      hint: "resume te devuelve al mismo alguien. spawn te da un algo nuevo.",
      gets: "La misma sesión con nombre de vuelta, con todo lo que aprendió, siguiendo el trabajo.",
      time: "1 min",
      needs: "Un worker que ya cerraste antes.",
    },
    close: {
      name: "Ciérralo cuando termine",
      promise: "Los workers que ya terminaron se acumulan y pierdes la cuenta de qué sigue corriendo.",
      paste:
        "Cierra la sesión de researcher, después de que corra /aios:close-session.",
      hint: "¿Quieres el siguiente en un lugar específico? Di “ábrelo en Glass, no en la App.” Que el archivo de la solicitud desaparezca significa que lo tomó, no que terminó — pregunta “¿de verdad terminó?” y leerá la transcripción del worker.",
      gets: "La sesión del worker capturada en la nota de hoy, y luego cerrada.",
      time: "1 min",
      needs: "27.",
    },
    company: {
      name: "Monta tu empresa",
      promise: "La IA de cada quien en el equipo describe la empresa un poco distinto.",
      paste:
        "/aios:company",
      hint: "Te pregunta si crear el repo de la empresa o montar uno que alguien del equipo compartió. En tu vault es de solo lectura, y vive en su propia carpeta junto a tus archivos, nunca encima.",
      gets: "El posicionamiento, la voz y la oferta de tu empresa en vault/00 - notes/context/ventures/{empresa}/ — una sola fuente que lee el AIOS de todo el equipo.",
      time: "10 min para crearla · 2 min para montarla",
      needs: "Un GitHub o Drive que tu empresa ya use.",
    },
    collaborate: {
      name: "Abre un espacio compartido",
      promise: "El plan del lanzamiento vive en cinco cabezas y un hilo de chat.",
      paste:
        "/aios:collaborate",
      hint: "Elige el proyecto y dónde ya trabaja tu equipo — Drive o GitHub. Tu contexto observado nunca se escribe en el espacio compartido: es estructural, no una política.",
      gets: "Una nota de proyecto reflejada en el espacio compartido, con las reglas del espacio y una página de bienvenida — y nada de tu contexto personal.",
      time: "5 min",
      needs: "Alguien del equipo, y un Drive o repo que ya compartan.",
    },
    comprehension: {
      name: "Explícame lo que se entregó",
      promise: "Se entrega mucho a velocidad de IA, y tu entendimiento se queda atrás.",
      paste: "Salió mucho en esta sesión — explícame lo que necesito entender.",
      hint: "Después: “agrega lo que todavía no me quede claro como un pendiente abierto en la nota de hoy.” El skill es comprehension-debt. La sensación es intencional: no intentes seguirle el paso. La vara es defender, depurar, decidir — nunca leer cada línea.",
      gets: "Un recuento de todo lo que entregaron los agentes, explicado a la profundidad que necesitas — y lo que todavía no entiendes, cargado en la nota de hoy como deuda de comprensión.",
      time: "5 min",
      needs: "Una sesión larga donde los agentes hicieron trabajo real.",
    },
    why: {
      name: "¿A qué suma todo esto?",
      promise: "Cada meta se cumple y luego pregunta qué sigue.",
      paste:
        "¿A qué suma todo esto?",
      hint: "El skill es finding-your-why. Nunca te pide que declares tu propósito; lo deriva de lo que se mantuvo igual, y tus palabras ganan. Pregúntalo cuando algo se entrega y se siente plano.",
      gets: "Una lectura de lo que no ha cambiado en todo lo que has hecho, ofrecida como candidatos para que tú corrijas — y guardada como tu brújula en growth.md solo si dices que es cierta.",
      time: "5 min",
      needs: "Variedad: varios proyectos y dominios en tu vault.",
    },
    deck: {
      name: "Un deck con lo que ya sabe",
      promise: "La junta de consejo es el jueves, y el deck sigue siendo una diapositiva en blanco.",
      paste:
        "Lee mi vault para encontrar los números más recientes de mi empresa, los logros y los problemas abiertos, y hazme un deck de actualización para el consejo como un solo archivo HTML autocontenido — máximo ocho diapositivas, que avance con las flechas, sin enlaces externos. Marca como “confirmar” todo lo que hayas inferido en lugar de leído. Guárdalo en 03 - export/decks/.",
      hint: "Abre el archivo en tu navegador y presenta desde ahí. ¿Prefieres un pitch? Cambia “actualización para el consejo” por “pitch para inversionistas”.",
      gets: "03 - export/decks/{nombre}.html — un deck que abre en cualquier navegador, hecho con tus propias notas.",
      time: "5 min",
      needs: "11. El 14 lo afina.",
    },
    blogpost: {
      name: "Un post con tu voz",
      promise: "Tienes cosas que vale la pena decir, y no tienes tiempo de escribirlas.",
      paste:
        "Lee mi vault — notas diarias, reflexiones, lo que haya publicado — y encuentra la idea a la que siempre regreso. Escribe un borrador de post de 600 palabras sobre ella con mi voz: mis palabras, mis ejemplos, nada que yo no haya escrito o dicho. Guárdalo como borrador en 03 - export/posts/, y enlista las tres frases que menos seguro estás de que suenen a mí.",
      hint: "Corrige esas tres frases en la sesión. Esa corrección es lo que hace que el siguiente borrador empiece más cerca.",
      gets: "Un borrador de post en 03 - export/posts/, con fuente en tus propias notas — y las frases por revisar ya señaladas.",
      time: "4 min",
      needs: "11. Mejor después del 15.",
    },
    webapp: {
      name: "Una app pequeña para un problema real",
      promise: "Una hoja de cálculo está haciendo el trabajo de una app.",
      paste:
        "Con lo que mi vault sabe de mi negocio, propón tres herramientas pequeñas que me ahorrarían tiempo cada semana. Luego construye la primera como un solo archivo HTML autocontenido — que funcione sin internet, que guarde sus datos en el navegador, sin registro y sin servicios externos. Guárdala en 03 - export/apps/ y dime cómo abrirla.",
      hint: "Abre el archivo en tu navegador. Luego pide un cambio a la vez — ese es todo el ciclo.",
      gets: "03 - export/apps/{nombre}.html — una herramienta que funciona, que puedes abrir, usar y pasarle a alguien como un solo archivo.",
      time: "8 min",
      needs: "11.",
    },
    agreement: {
      name: "Redacta el contrato",
      promise: "El trato se cerró en una llamada, y nadie lo ha puesto por escrito.",
      paste:
        "Encuentra el trato o proyecto más reciente descrito en mi vault — cliente, alcance, precio, fechas. Redacta con eso un contrato de prestación de servicios: partes, alcance, entregables, honorarios y forma de pago, confidencialidad, vigencia y terminación. Pon entre corchetes como [CONFIRMAR] cada término que no hayas encontrado. Encabézalo con “Borrador para revisión de un abogado — no es asesoría legal.” Guárdalo en 03 - export/agreements/.",
      hint: "Es un borrador para tu abogado, no un contrato. Le ahorra una hora; no lo reemplaza.",
      gets: "Un primer borrador de contrato en 03 - export/agreements/, hecho con lo que el vault dice que se acordó — cada hueco marcado como [CONFIRMAR].",
      time: "5 min",
      needs: "Un trato escrito en algún lugar de tu vault — una nota, o la transcripción de una llamada traída con el 14.",
    },
    financials: {
      name: "Tu cabina financiera",
      promise: "Te enteras de cómo te fue en el mes tres semanas después de que termina.",
      paste:
        "Hazme una cabina financiera de una página como un solo archivo HTML autocontenido: caja, ingresos del mes, gasto del mes, runway en meses y los tres costos más grandes. Usa los números que ya estén en mi vault; para los demás, pídeme que los pegue — solo totales. Muestra de dónde salió cada cifra. Guárdala en 03 - export/finance/ y que se quede en esta máquina.",
      hint: "Pega totales, nunca estados de cuenta. Nunca pegues una contraseña del banco, un número de tarjeta ni un acceso a una cuenta — no los necesita.",
      gets: "Una cabina de una página en 03 - export/finance/ — cada número con su fuente, en tu máquina y en ningún otro lado.",
      time: "5 min",
      needs: "Tus propios números, aproximados.",
    },
    studyBuddy: {
      name: "Un compañero de estudio que se acuerda",
      promise: "Terminas el curso y casi no te queda nada.",
      paste:
        "Toma el documento más reciente que traje a mi vault — o el archivo que pegue a continuación — y conviértelo en un protocolo de estudio: las cinco ideas que importan, en orden, cada una en palabras simples. Luego hazme un quiz, una pregunta a la vez. Guarda el protocolo en 00 - notes/reflections/study/ con una lista de lo que contesté mal, y empieza cada quiz siguiente desde esa lista.",
      hint: "Primero suelta un PDF o el link de un curso. Mañana solo di “hazme el quiz otra vez.”",
      gets: "Un protocolo de estudio y una lista viva de lo que contestaste mal, en reflections/study/ — el siguiente quiz empieza ahí.",
      time: "10 min por ronda",
      needs: "Un documento o curso — el 14 lo trae.",
    },
    migrate: {
      name: "Trae a tu otra IA contigo",
      promise: "Dos años de ChatGPT te conocen mejor que tu sistema nuevo.",
      paste: "Ayúdame a mudarme de mi otra IA. Encuentra lo que construí ahí: usa Claude en Chrome para leer mis chats y proyectos de ChatGPT o Claude.ai, o abre la exportación o las transcripciones que te indique. Luego acomódalo: quién soy en mi contexto declarado, cada esfuerzo en curso en su propia nota de proyecto, lo que vale releer en reflections. Dime qué pusiste dónde y señala lo que parezca desactualizado antes de confiar en ello.",
      hint: "Con tu sesión de ChatGPT o Claude.ai abierta en Chrome, puede leer tus chats por sí mismo. ¿Sin conexión con Chrome? Exporta tus datos de la otra IA y apúntalo al archivo.",
      gets: "Tu contexto declarado, una nota de proyecto por cada esfuerzo en curso y reflexiones que vale releer — sembrados con lo que sabía tu IA anterior, con lo desactualizado señalado.",
      time: "5–15 min",
      needs: "Tu otra IA abierta en Chrome, o una exportación de ella.",
    },
    companion: {
      name: "Prepara a un acompañante para la pantalla",
      promise: "Quieres enseñarles a tus pares lo que hace, sin enseñarles tu vida.",
      paste:
        "Guarda este brief en mi vault como companion-brief.md, luego lanza una sesión llamada atlas-companion y dale el brief. Brief: mañana vas a estar en un proyector frente a mis pares. Puedes mostrar mi trabajo público, lo que he publicado y solo los archivos que yo te nombre. Nunca muestras ni dices: finanzas ni ninguna cifra de dinero, nombres de clientes o tratos, nada de mi familia ni de mi vida personal, ni nada de context/observed — profile, growth, patterns. Si una petición cruza esa línea, dilo y ofrece algo seguro en su lugar. Avísame cuando estés listo.",
      hint: "Hazlo antes de irte hoy en la noche, para llegar al Día 2 listo para “EOers in action”. atlas es el nombre de ejemplo — usa el tuyo. Todavía puede leer tu vault; el brief gobierna lo que llega a la pantalla. Pruébalo hoy: pídele algo que deba negarse a mostrar.",
      gets: "atlas-companion, una sesión aparte preparada para el proyector — y companion-brief.md en tu vault, para que mañana empiece con las mismas reglas.",
      time: "5 min, más una prueba",
      needs: "01, y la App o Glass abiertas.",
    },
    install: {
      name: "Revisa la instalación",
      promise: "Todavía no sabes si quedó bien instalado.",
      paste: "spawn onboarding-aios \"¿mi instalación funciona?\"",
      hint: "En una terminal — o “Spawn a session” en la App con el nombre onboarding-aios, y hazle la pregunta. Revisa de verdad y nombra lo primero que hay que arreglar. ¿Te pierdes después? Esta es la sesión que conoce todo el mapa.",
      gets: "Una instalación revisada — qué funciona, qué falta, el siguiente arreglo — y una guía que puedes volver a lanzar cada vez que te pierdas.",
      time: "3 min",
      needs: "01.",
    },
    mindset: {
      name: "La mentalidad",
      promise: "Entre más nuevo el modelo, más poderosa tu instalación — si entiendes tres ideas.",
      paste: "Usando mi propio vault como ejemplo, explícame contexto, atención y estigmergia en palabras simples, y luego escríbelo como una nota de una página que pueda releer.",
      hint: "La estigmergia es como se coordinan las hormigas sin jefe: cada una deja una huella en un lugar compartido, y la siguiente la lee. Tu vault es ese lugar.",
      gets: "Una nota de una página en reflections — contexto, atención y estigmergia, explicados con tu propio vault.",
      time: "3 min",
      needs: "01.",
    },
    askHow: {
      name: "Pregunta cómo delega",
      promise: "No sabes cuándo una sesión debería volverse tres.",
      paste: "Explícame la diferencia entre lanzar un agente con spawn, un subagente y un workflow dinámico — y qué skill de mi AIOS te ayuda a decidir cuál conviene.",
      hint: "El skill que debería nombrar es orchestration-ladder. ¿Lo quieres guardar? Di “guarda eso en la nota de hoy.”",
      gets: "Spawn, subagente y workflow en palabras simples, y el skill que elige entre ellos — en la nota de hoy si lo guardas.",
      time: "2 min",
      needs: "Nada.",
    },
    fortress: {
      name: "Más poder, menos muros",
      promise: "Alcanza más de tu máquina que cualquier chat.",
      paste: "Lee FORTRESS.md y explícame la escalera de contención en palabras simples.",
      hint: "La siguiente tarjeta mide en qué peldaño estás de verdad. ¿Lo quieres guardar? Di “guarda eso como una nota en reflections.”",
      gets: "La escalera de contención en palabras simples, leída del archivo mismo — una nota en reflections si la guardas.",
      time: "2 min",
      needs: "Nada.",
    },
    studio: {
      name: "Arma un estudio: una línea → un video de lanzamiento",
      promise: "Un video de lanzamiento todavía significa una agencia y tres semanas.",
      paste: "Usa el skill motion-lab. Haz un video de lanzamiento de 20 segundos para [mi producto], un solo archivo HTML, horizontal 1920x1080 y vertical 1080x1920, 60 fps. Cinco momentos: el dolor, el producto en uso, un número real, el beneficio, el logo. Usa mis capturas reales en ./shots, nunca redibujes la interfaz. Números, no adjetivos: 120 BPM, resortes con amortiguamiento 0.7, un color de acento [hex]. Prohibido: bloom, partículas, orbes brillantes, números inventados.",
      hint: "Cambia [mi producto] y [hex], y primero pon tus capturas reales en una carpeta llamada shots. motion-lab te entrevista elemento por elemento antes de renderizar — responde, o toma su recomendación.",
      gets: "El video de lanzamiento como archivos HTML de video — horizontal 1920x1080 y vertical 1080x1920 — que se reproducen en cualquier navegador.",
      time: "20–30 min, casi todo la entrevista y el ciclo de renderizar y corregir",
      needs: "Capturas reales de tu producto, en ./shots.",
    },
  },
  close: "Llegaste con una ventana de chat. Sube la escalera y te vas con alguien que te va a recordar mañana.",
  back: "the-aios.com",
};

const pt: SkillsCopy = {
  meta: {
    title: "A escalada — cole um, receba algo · The AIOS",
    description: "Quarenta e dois movimentos para as primeiras horas com The AIOS, e um segundo dia construindo com ele. Cada um é um bloco para colar, e cada um deixa algo no seu vault.",
  },
  eyebrow: "A escalada",
  h1: ["Cole um. ", "Receba algo.", ""],
  lede:
    "Você instalou. E agora, o que você digita? Estes são os movimentos, em ordem. Cada um é um bloco que você copia para a sua sessão, e cada um deixa algo no seu vault: um arquivo que você pode abrir amanhã, não uma resposta que some no scroll.",
  rules: {
    starts: ["Começa pelo seu vault", "Nada aqui entrevista você do zero. Primeiro lê o que já está escrito, e só pergunta pelo que falta."],
    ends: ["Termina em um artefato", "Um plano, uma nota, um agente, um contrato — arquivado onde a próxima sessão vai encontrar. É isso que faz acumular."],
  },
  honest:
    "No primeiro dia, as respostas são rasas — porque o vault é raso. Não é um defeito para esconder; é exatamente por isso que a estação de memória é trazer o que você já tem.",
  labels: { copy: "Copiar", copied: "Copiado", gets: "Você recebe", time: "Tempo", needs: "Precisa", station: "Estação", rung: "Estação", summit: "Cume", day: "Dia 2", leave: "Você sai com" },
  rungs: {
    base: { name: "Acampamento base", proves: "É meu, e sabe de onde eu começo.", leave: "Uma sessão com nome, uma instalação conferida e uma nota de uma página sobre como pensar nisso tudo." },
    harness: { name: "Conheça o seu arnês", proves: "Ele sabe o que é, o que alcança e até onde pode ir.", leave: "Um mapa do que veio na caixa, conectores funcionando, um INTENT.md revisado e o seu degrau de contenção." },
    memory: { name: "A sua memória", proves: "Ele lembra de mim, e melhora com tudo o que eu dou a ele.", leave: "O seu contexto declarado, o que a sua outra IA sabia arquivado, o plano de hoje, uma fonte arquivada, a sua voz registrada." },
    interface: { name: "Conheça a sua interface", proves: "Eu sei onde está cada coisa.", leave: "Os seus três atalhos na nota de hoje." },
    compound: { name: "Valor que se acumula", proves: "O que eu faço hoje, amanhã ele já sabe.", leave: "Blocos de sessão e um dia fechado na sua nota diária, e um vault mais arrumado." },
    yours: { name: "Deixe do seu jeito", proves: "Ele se encaixa no meu trabalho, e nenhuma atualização desfaz isso.", leave: "Os seus ajustes no USER.md, um plano de extensões, o seu primeiro agente próprio, um vídeo de lançamento." },
    team: { name: "O seu time", proves: "Não é um assistente. É um time, e nós também.", leave: "Workers que arquivaram a pesquisa, a sua empresa montada, um espaço compartilhado aberto." },
    summit: { name: "Do cume", proves: "Eu consigo defender o que foi entregue, e sei para onde estou indo.", leave: "A sua dívida de compreensão nomeada, uma bússola em growth.md se soar verdadeira, uma acompanhante pronta para o Dia 2." },
    build: { name: "Dia dois · Construa com ele", proves: "Ele entrega trabalho de verdade, a partir do que já sabe sobre mim.", leave: "Um deck, um post, um app, um rascunho de contrato, um cockpit financeiro, um protocolo de estudo." },
  },
  cards: {
    name: {
      name: "Dê um nome",
      promise: "Todo chat recebe você como um estranho.",
      paste: "spawn <nome>",
      hint: "Troque <nome> por um nome que você diria em voz alta — spawn atlas. Em um terminal, ou use “Spawn a session” no App e digite o nome.",
      gets: "Uma sessão com nome que cumprimenta você como ela mesma, e mantém essa identidade toda vez que você a abre.",
      time: "1 min",
      needs: "Nada.",
    },
    interview: {
      name: "A entrevista inicial",
      promise: "Ele só pode usar o que contaram para ele.",
      paste: "/aios:cold-start-interview",
      hint: "Responda como você explicaria tudo a um novo chefe de gabinete no primeiro dia.",
      gets: "O seu contexto declarado — quem você é, como trabalha, o que está construindo — escrito em arquivos que ele lê em toda sessão.",
      time: "10 min, quase tudo você falando",
      needs: "Nada.",
    },
    knows: {
      name: "O que você realmente sabe sobre mim?",
      promise: "Você não pode confiar no que não consegue ver.",
      paste:
        "O que você realmente sabe sobre mim? Separe o que eu te contei (declarado) do que você observou trabalhando comigo. Depois nomeie as três maiores lacunas e adicione como perguntas no fim da nota diária de hoje.",
      gets: "Uma leitura do seu contexto, e as três lacunas arquivadas como perguntas na nota de hoje.",
      time: "1 min",
      needs: "11, ou um vault com alguma história.",
    },
    pitch: {
      name: "O pitch de coquetel",
      promise: "Você ainda não consegue dizer o que faz em trinta segundos.",
      paste:
        "Com o que o meu vault sabe sobre mim, escreva a minha resposta de 30 segundos para “e você, o que faz?” — falada, não escrita, do jeito que eu realmente diria num jantar. Depois transforme em um infográfico de uma página e salve em 03 - export/.",
      gets: "O pitch falado, mais um infográfico de uma página arquivado no seu vault.",
      time: "3 min",
      needs: "11.",
    },
    ghost: {
      name: "Ghost — ele responde como você",
      promise: "A sua voz é a única coisa que um rascunho sempre perde.",
      paste: "/aios:ghost Como eu explicaria para alguém novo no time o que a minha empresa faz?",
      hint: "O que ele erra é a parte útil. Corrija uma vez, na sessão.",
      gets: "Uma resposta com a sua voz — e a sua correção escrita no vault, para o próximo rascunho começar mais perto.",
      time: "2 min",
      needs: "11.",
    },
    ingest: {
      name: "Dê uma fonte a ele",
      promise: "Anos do seu pensamento vivem em arquivos que ele nunca viu.",
      paste: "/aios:ingest https://chuycepeda.substack.com/p/the-agentic-culture-team-management",
      hint: "Este é o ensaio em que o framework se baseia, então funciona do jeito que está. Depois dê o seu: o caminho de um PDF, um deck, a transcrição de uma call, um URL do YouTube.",
      gets: "Uma reflexão arquivada, cruzada com os seus projetos e registrada — encontrável por toda sessão futura.",
      time: "2–5 min por fonte",
      needs: "Nada.",
    },
    stories: {
      name: "O índice de histórias",
      promise: "As suas melhores histórias já estão escritas — só nunca como histórias.",
      paste:
        "Leia o meu vault — contexto observado, notas diárias, tudo o que eu publiquei — e proponha três histórias que eu já conto ou deveria contar. Para cada uma: um título, o momento, a virada, a frase que as pessoas lembram, quando usar e de que parte do vault ela vem. Nunca invente um detalhe que eu não escrevi. Salve em context/declared/story-vault.md só depois que eu aprovar cada uma.",
      gets: "context/declared/story-vault.md — três histórias com fonte, prontas para uma palestra, um pitch ou um post.",
      time: "5 min",
      needs: "Um vault com alguma história — 14 acelera.",
    },
    today: {
      name: "A sua primeira manhã",
      promise: "Todo dia começa de uma página em branco.",
      paste: "/aios:today",
      gets: "O plano de hoje, escrito na sua nota diária — um arquivo, não uma resposta de chat.",
      time: "2 min",
      needs: "Nada. O calendário deixa mais preciso.",
    },
    closeSession: {
      name: "Feche o ciclo",
      promise: "O que você aprendeu hoje some amanhã.",
      paste: "/aios:close-session",
      hint: "Ele pergunta o que foi mais útil. Responda com honestidade — essa resposta é dado.",
      gets: "Um bloco de sessão na nota de hoje, e o que ele notou sobre como você trabalha, na fila para a próxima sessão.",
      time: "2 min",
      needs: "Uma sessão que fez algo.",
    },
    closeDay: {
      name: "Feche o dia",
      promise: "O amanhã nunca sabe o que o hoje decidiu.",
      paste: "/aios:close-day",
      gets: "O dia capturado — entregue, aprendido, carregado — para o /aios:today de amanhã ler.",
      time: "3 min",
      needs: "Um dia de uso.",
    },
    connect: {
      name: "Conecte as suas ferramentas",
      promise: "Ele planeja o seu dia sem ver o seu calendário.",
      paste: "/aios:mcps-setup",
      hint: "Comece pelo que um novo chefe de gabinete receberia no primeiro dia — calendário e e-mail. Some o resto quando ele tiver merecido.",
      gets: "Conectores funcionando, cada um verificado — para o plano, a preparação e o follow-up virem das suas ferramentas reais.",
      time: "5–15 min",
      needs: "As suas próprias contas.",
    },
    hat: {
      name: "Vista um chapéu",
      promise: "Você precisa dos olhos de um contador por dez minutos, não de um app novo.",
      paste: "/aios:agent accountant",
      hint: "Rode /aios:agent sozinho para ver todos os agentes incluídos, ou experimente /aios:agent study-buddy. Depois pergunte algo real da sua semana.",
      gets: "A sessão que você já tem, respondendo como especialista — com o seu contexto ainda carregado.",
      time: "1 min",
      needs: "Nada.",
    },
    firstAgent: {
      name: "O seu primeiro agente",
      promise: "Você continua explicando o mesmo trabalho para o mesmo assistente.",
      paste: "Inicie o aios-builder para me ajudar a criar um agente personalizado que atue como o meu [papel] — que saiba [o quê] e que sempre [regra].",
      hint: "Preencha os três colchetes com o seu próprio negócio. Depois: “inicie o agente e dê uma tarefa real.” Prefere um formulário? O Designer do App e do Glass é o mesmo construtor, em poucos campos.",
      gets: "agents/custom/{nome}.md — seu, sobrevive a toda atualização, iniciável pelo nome.",
      time: "5 min",
      needs: "Nada.",
    },
    worker: {
      name: "Inicie um worker e mande uma mensagem",
      promise: "Delegar para a IA ainda significa cuidar de um único chat.",
      paste: "Inicie um worker chamado researcher com a tarefa: encontre três concorrentes da minha empresa e escreva um parágrafo sobre cada um. Depois me avise quando estiver rodando.",
      hint: "Depois, desta sessão: “send researcher: anote também o URL da página de preços.”",
      gets: "Uma segunda sessão com nome trabalhando em paralelo — e uma nota de pesquisa arquivada quando terminar.",
      time: "5 min",
      needs: "O App ou o Glass abertos.",
    },
    rung: {
      name: "Em que degrau eu estou?",
      promise: "Você não pode discutir um risco que não consegue nomear.",
      paste: "Em que degrau de contenção eu estou? Rode os testes e me mostre o que você encontrou.",
      hint: "Leia o que ele encontrou, não o que tranquiliza você.",
      gets: "O seu nível real de contenção, medido nesta máquina — e o próximo movimento que o eleva.",
      time: "2 min",
      needs: "Nada.",
    },
    intent: {
      name: "Onde está a confiança",
      promise: "Você não sabe o que ele pode fazer sem você.",
      paste: "Olhando todas as sessões que já tivemos e as nossas notas diárias, como você vê o nosso INTENT.md? Devemos ajustar algo, ou estamos bem por enquanto, ganhando confiança primeiro?",
      hint: "Primeiro dia, ainda sem histórico? Peça que ele vá domínio por domínio — e-mail, calendário, dinheiro, código, o que você publica — e proponha o que faz sozinho, o que deixa como rascunho para você aprovar e o que nunca toca.",
      gets: "A leitura dele do seu INTENT.md contra como vocês trabalharam de verdade — e só as mudanças que você confirmar, escritas no INTENT.md.",
      time: "10 min",
      needs: "Algumas sessões nas costas — ou a dica, no primeiro dia.",
    },
    housekeeping: {
      name: "Arrume a casa",
      promise: "Um sistema que só cresce acaba afogando você.",
      paste: "/aios:housekeeping",
      hint: "Ele propõe; nunca move nada sozinho. Leia antes de aceitar.",
      gets: "Uma lista de fusões, arquivamentos, índices e links para reparar — aplicada só onde você disser sim.",
      time: "5 min",
      needs: "Uma semana de uso.",
    },
    askBox: {
      name: "Pergunte à sua sessão",
      promise: "Você não sabe o que veio na caixa.",
      paste: "Quais agentes e skills do meu AIOS você usaria para me ajudar a construir um app bem feito e seguro para a minha empresa? Não tenho perfil técnico — me diga o que cada um faz e onde ele fica.",
      hint: "Depois: “adicione na nota de hoje os três que você usaria primeiro.” E abra um dos arquivos que ele citar — tudo o que ele sabe é um arquivo que você pode ler.",
      gets: "Um mapa em palavras simples dos agentes e skills que você já tem, cada um com o arquivo onde fica — e os seus três primeiros arquivados na nota de hoje.",
      time: "2 min",
      needs: "Nada.",
    },
    findAround: {
      name: "Ache o seu caminho",
      promise: "O App tem muito mais do que a janela de chat.",
      paste:
        "Me mostre o meu App do AIOS: onde estão as minhas sessões com nome, onde está a nota de hoje e o que a paleta de comandos faz. Depois adicione na nota de hoje os três atalhos que eu mais vou usar.",
      hint: "No App: Running mostra as suas sessões e ⌘K abre a paleta. No Glass: o hub de Sessions, e ⌘⌥G.",
      gets: "Os seus três atalhos, escritos na nota de hoje.",
      time: "2 min",
      needs: "O App ou o Glass abertos.",
    },
    personalize: {
      name: "Deixe um comando do seu jeito",
      promise: "O plano do dia quase serve para você, todo dia.",
      paste: "Personalize o meu /aios:today para que ele sempre comece com as minhas três prioridades e nunca agende nada antes das 9h.",
      hint: "Troque as duas regras pelas suas. Ele escreve isso no USER.md → Command personalizations → /today; cada comando lê a própria seção antes de rodar, e as atualizações nunca mexem nesse arquivo.",
      gets: "O USER.md com os seus ajustes — e o /aios:today de amanhã já com esse formato.",
      time: "5 min",
      needs: "Nada. Fica mais preciso depois de alguns dias de /aios:today.",
    },
    extend: {
      name: "Seis coisas que você pode adicionar",
      promise: "O framework serve para quase todo o seu trabalho, não para todo.",
      paste:
        "Me mostre as seis coisas que eu posso adicionar ao meu AIOS — agentes, skills, hooks, MCPs, plugins, templates — e onde cada uma fica em custom/. Depois, com o que você sabe do meu trabalho, proponha qual eu deveria construir primeiro e por quê. Salve a proposta na nota de hoje.",
      hint: "Tudo o que está em custom/ é seu: ganha da versão incluída se tiver o mesmo nome, e nenhuma atualização mexe nisso.",
      gets: "O mapa de extensões da sua própria instalação, mais uma proposta arquivada na nota de hoje.",
      time: "3 min",
      needs: "Nada.",
    },
    brief: {
      name: "Um brief completo, no modelo certo",
      promise: "Um prompt de três linhas gera um trabalho de três linhas.",
      paste:
        "Inicie um writer no tier fast com este brief completo: [cole aqui o seu brief]. Me avise quando estiver rodando.",
      hint: "Acima de 1 KB, o brief é salvo em ~/.aios/bus-payloads/ e o worker recebe uma linha apontando para ele. Escolha o tier pela forma do trabalho, não pela importância.",
      gets: "Um worker no modelo que você escolheu, com o seu brief completo como um arquivo que ele pode reler.",
      time: "2 min",
      needs: "27.",
    },
    reply: {
      name: "Peça para ele reportar",
      promise: "Você fica olhando uma aba para ver se já terminou.",
      paste:
        "Diga ao researcher para adicionar os preços e me reportar quando terminar.",
      gets: "Um relatório de uma linha entregue nesta sessão quando o worker termina — e a nota dele arquivada no seu vault.",
      time: "1 min",
      needs: "27.",
    },
    resume: {
      name: "Reabra o worker de ontem",
      promise: "Uma sessão nova começa do zero, toda vez.",
      paste:
        "Reabra o researcher de ontem e continue de onde ele parou.",
      hint: "resume devolve o mesmo alguém. spawn dá um algo novo.",
      gets: "A mesma sessão com nome de volta, com tudo o que aprendeu, continuando o trabalho.",
      time: "1 min",
      needs: "Um worker que você já fechou antes.",
    },
    close: {
      name: "Feche quando terminar",
      promise: "Workers que já terminaram se acumulam e você perde a conta do que está rodando.",
      paste:
        "Feche a sessão do researcher, depois que ele rodar /aios:close-session.",
      hint: "Quer o próximo num lugar específico? Diga “abra no Glass, não no App.” O arquivo do pedido sumir significa que foi pego, não que terminou — pergunte “terminou mesmo?” e ele lê a transcrição do worker.",
      gets: "A sessão do worker capturada na nota de hoje, e depois fechada.",
      time: "1 min",
      needs: "27.",
    },
    company: {
      name: "Monte a sua empresa",
      promise: "A IA de cada pessoa do time descreve a empresa de um jeito um pouco diferente.",
      paste:
        "/aios:company",
      hint: "Ele pergunta se deve criar o repo da empresa ou montar um que alguém do time compartilhou. No seu vault é só leitura, e fica numa pasta própria ao lado dos seus arquivos, nunca por cima.",
      gets: "O posicionamento, a voz e as ofertas da sua empresa em vault/00 - notes/context/ventures/{empresa}/ — uma única fonte que o AIOS de todo o time lê.",
      time: "10 min para criar · 2 min para montar",
      needs: "Um GitHub ou Drive que a sua empresa já usa.",
    },
    collaborate: {
      name: "Abra um espaço compartilhado",
      promise: "O plano do lançamento vive em cinco cabeças e numa thread de chat.",
      paste:
        "/aios:collaborate",
      hint: "Escolha o projeto e onde o seu time já trabalha — Drive ou GitHub. O seu contexto observado nunca é escrito no espaço compartilhado: é estrutural, não política.",
      gets: "Uma nota de projeto espelhada no espaço compartilhado, com as regras do espaço e uma página de boas-vindas — e nada do seu contexto pessoal.",
      time: "5 min",
      needs: "Alguém do time, e um Drive ou repo que vocês já compartilham.",
    },
    comprehension: {
      name: "Me explique o que foi entregue",
      promise: "Muita coisa é entregue na velocidade da IA, e o seu entendimento fica para trás.",
      paste: "Muita coisa saiu nesta sessão — me explique o que eu preciso entender.",
      hint: "Depois: “adicione o que eu ainda não entendi como um ponto aberto na nota de hoje.” O skill é comprehension-debt. A sensação é intencional: não tente acompanhar tudo. A régua é defender, depurar, decidir — nunca ler cada linha.",
      gets: "Um resumo de tudo o que os agentes entregaram, explicado na profundidade que você precisa — e o que você ainda não entendeu, carregado na nota de hoje como dívida de compreensão.",
      time: "5 min",
      needs: "Uma sessão longa em que os agentes fizeram trabalho de verdade.",
    },
    why: {
      name: "No que tudo isso dá?",
      promise: "Toda meta se cumpre e depois pergunta o que vem a seguir.",
      paste:
        "No que tudo isso dá?",
      hint: "O skill é finding-your-why. Ele nunca pede que você declare o seu propósito; ele deriva isso do que ficou igual, e as suas palavras ganham. Pergunte quando uma entrega chega e parece sem graça.",
      gets: "Uma leitura do que não mudou em tudo o que você fez, oferecida como candidatos para você corrigir — e guardada como a sua bússola em growth.md só se você disser que está certa.",
      time: "5 min",
      needs: "Variedade: vários projetos e domínios no seu vault.",
    },
    deck: {
      name: "Um deck com o que ele já sabe",
      promise: "A reunião do conselho é na quinta, e o deck ainda é um slide em branco.",
      paste:
        "Leia o meu vault para achar os números mais recentes da minha empresa, as conquistas e os problemas em aberto, e monte um deck de atualização para o conselho como um único arquivo HTML autocontido — no máximo oito slides, avançando com as setas, sem links externos. Marque como “confirmar” tudo o que você deduziu em vez de ler. Salve em 03 - export/decks/.",
      hint: "Abra o arquivo no navegador e apresente dali. Prefere um pitch? Troque “atualização para o conselho” por “pitch para investidores”.",
      gets: "03 - export/decks/{nome}.html — um deck que abre em qualquer navegador, feito com as suas próprias notas.",
      time: "5 min",
      needs: "11. O 14 deixa mais preciso.",
    },
    blogpost: {
      name: "Um post com a sua voz",
      promise: "Você tem coisas que valem a pena dizer, e não tem tempo de escrever.",
      paste:
        "Leia o meu vault — notas diárias, reflexões, tudo o que eu publiquei — e encontre a ideia à qual eu sempre volto. Escreva um rascunho de post de 600 palavras sobre ela com a minha voz: as minhas palavras, os meus exemplos, nada que eu não tenha escrito ou dito. Salve como rascunho em 03 - export/posts/, e liste as três frases que você tem menos certeza de que soam como eu.",
      hint: "Corrija essas três frases na sessão. Essa correção é o que faz o próximo rascunho começar mais perto.",
      gets: "Um rascunho de post em 03 - export/posts/, com fonte nas suas próprias notas — e as frases para revisar já marcadas.",
      time: "4 min",
      needs: "11. Melhor depois do 15.",
    },
    webapp: {
      name: "Um app pequeno para um problema real",
      promise: "Uma planilha está fazendo o trabalho de um app.",
      paste:
        "Com o que o meu vault sabe sobre o meu negócio, proponha três ferramentas pequenas que me economizariam tempo toda semana. Depois construa a primeira como um único arquivo HTML autocontido — funciona sem internet, guarda os dados no navegador, sem cadastro e sem serviços externos. Salve em 03 - export/apps/ e me diga como abrir.",
      hint: "Abra o arquivo no navegador. Depois peça uma mudança de cada vez — esse é o ciclo inteiro.",
      gets: "03 - export/apps/{nome}.html — uma ferramenta que funciona, que você pode abrir, usar e passar para alguém como um único arquivo.",
      time: "8 min",
      needs: "11.",
    },
    agreement: {
      name: "Rascunhe o contrato",
      promise: "O acordo foi fechado numa call, e ninguém colocou no papel.",
      paste:
        "Encontre o acordo ou projeto mais recente descrito no meu vault — cliente, escopo, preço, datas. Com isso, rascunhe um contrato de prestação de serviços: partes, escopo, entregáveis, honorários e forma de pagamento, confidencialidade, vigência e rescisão. Coloque entre colchetes como [CONFIRMAR] cada termo que você não encontrou. Abra com “Rascunho para revisão de um advogado — não é aconselhamento jurídico.” Salve em 03 - export/agreements/.",
      hint: "É um rascunho para o seu advogado, não um contrato. Economiza uma hora dele; não o substitui.",
      gets: "Um primeiro rascunho de contrato em 03 - export/agreements/, feito com o que o vault diz que foi acordado — cada lacuna marcada como [CONFIRMAR].",
      time: "5 min",
      needs: "Um acordo escrito em algum lugar do seu vault — uma nota, ou a transcrição de uma call trazida com o 14.",
    },
    financials: {
      name: "O seu cockpit financeiro",
      promise: "Você descobre como foi o mês três semanas depois que ele acaba.",
      paste:
        "Monte um cockpit financeiro de uma página como um único arquivo HTML autocontido: caixa, receita do mês, queima do mês, runway em meses e os três maiores custos. Use os números que já estão no meu vault; para o resto, me peça para colar — só totais. Mostre de onde veio cada número. Salve em 03 - export/finance/ e mantenha nesta máquina.",
      hint: "Cole totais, nunca extratos. Nunca cole uma senha do banco, um número de cartão ou um login de conta — ele não precisa disso.",
      gets: "Um cockpit de uma página em 03 - export/finance/ — cada número com fonte, na sua máquina e em nenhum outro lugar.",
      time: "5 min",
      needs: "Os seus próprios números, aproximados.",
    },
    studyBuddy: {
      name: "Um parceiro de estudo que lembra",
      promise: "Você termina o curso e quase nada fica.",
      paste:
        "Pegue o documento mais recente que eu trouxe para o meu vault — ou o arquivo que eu colar a seguir — e transforme em um protocolo de estudo: as cinco ideias que importam, em ordem, cada uma em palavras simples. Depois me faça um quiz, uma pergunta de cada vez. Salve o protocolo em 00 - notes/reflections/study/ com uma lista do que eu errei, e comece cada próximo quiz por essa lista.",
      hint: "Primeiro solte um PDF ou o link de um curso. Amanhã, é só dizer “me faça o quiz de novo.”",
      gets: "Um protocolo de estudo e uma lista viva do que você errou, em reflections/study/ — o próximo quiz começa ali.",
      time: "10 min por rodada",
      needs: "Um documento ou curso — o 14 traz.",
    },
    migrate: {
      name: "Traga a sua outra IA com você",
      promise: "Dois anos de ChatGPT conhecem você melhor do que o seu sistema novo.",
      paste: "Me ajude a me mudar da minha outra IA. Encontre o que eu construí lá: use o Claude no Chrome para ler os meus chats e projetos do ChatGPT ou do Claude.ai, ou abra a exportação ou as transcrições que eu indicar. Depois organize: quem eu sou no meu contexto declarado, cada esforço em andamento na sua própria nota de projeto, o que vale reler em reflections. Me diga o que você colocou onde e sinalize o que parecer desatualizado antes de confiar nisso.",
      hint: "Com a sua conta do ChatGPT ou do Claude.ai aberta no Chrome, ele consegue ler os seus chats sozinho. Sem conexão com o Chrome? Exporte os seus dados da outra IA e aponte para o arquivo.",
      gets: "O seu contexto declarado, uma nota de projeto para cada esforço em andamento e reflexões que valem reler — semeados com o que a sua IA anterior sabia, com o que estiver desatualizado sinalizado.",
      time: "5–15 min",
      needs: "A sua outra IA aberta no Chrome, ou uma exportação dela.",
    },
    companion: {
      name: "Prepare um acompanhante para a tela",
      promise: "Você quer mostrar aos seus pares o que ele faz, sem mostrar a sua vida.",
      paste:
        "Salve este brief no meu vault como companion-brief.md, depois inicie uma sessão chamada atlas-companion e passe o brief para ela. Brief: amanhã você vai estar num projetor na frente dos meus pares. Você pode mostrar o meu trabalho público, o que eu publiquei e só os arquivos que eu nomear. Você nunca mostra nem diz: finanças ou qualquer valor em dinheiro, nomes de clientes ou de acordos, nada sobre a minha família ou a minha vida pessoal, nem nada de context/observed — profile, growth, patterns. Se um pedido cruzar essa linha, diga isso e ofereça algo seguro no lugar. Me avise quando estiver pronta.",
      hint: "Faça isso antes de ir embora hoje à noite, para chegar ao Dia 2 pronto para “EOers in action”. atlas é o nome de exemplo — use o seu. Ela ainda pode ler o seu vault; o brief governa o que chega à tela. Teste hoje: peça algo que ela deva se recusar a mostrar.",
      gets: "atlas-companion, uma sessão separada preparada para o projetor — e companion-brief.md no seu vault, para ela começar amanhã com as mesmas regras.",
      time: "5 min, mais um teste",
      needs: "01, e o App ou o Glass abertos.",
    },
    install: {
      name: "Confira a instalação",
      promise: "Você ainda não sabe se ficou tudo bem instalado.",
      paste: "spawn onboarding-aios \"a minha instalação está funcionando?\"",
      hint: "Em um terminal — ou “Spawn a session” no App com o nome onboarding-aios, e faça a pergunta. Ele confere de verdade e nomeia a primeira coisa a corrigir. Perdido depois? Esta é a sessão que conhece o mapa inteiro.",
      gets: "Uma instalação conferida — o que funciona, o que falta, a próxima correção — e um guia que você pode iniciar de novo sempre que se perder.",
      time: "3 min",
      needs: "01.",
    },
    mindset: {
      name: "A mentalidade",
      promise: "Quanto mais novo o modelo, mais poderosa a sua instalação — se você entender três ideias.",
      paste: "Usando o meu próprio vault como exemplo, me explique contexto, atenção e estigmergia em palavras simples, e depois escreva isso como uma nota de uma página que eu possa reler.",
      hint: "Estigmergia é como as formigas se coordenam sem chefe: cada uma deixa um rastro num lugar compartilhado, e a próxima lê. O seu vault é esse lugar.",
      gets: "Uma nota de uma página em reflections — contexto, atenção e estigmergia, explicados com o seu próprio vault.",
      time: "3 min",
      needs: "01.",
    },
    askHow: {
      name: "Pergunte como ele delega",
      promise: "Você não sabe quando uma sessão deveria virar três.",
      paste: "Me explique a diferença entre iniciar um agente com spawn, um subagente e um workflow dinâmico — e qual skill do meu AIOS ajuda você a decidir qual faz sentido.",
      hint: "O skill que ele deve citar é orchestration-ladder. Quer guardar? Diga “salve isso na nota de hoje.”",
      gets: "Spawn, subagente e workflow em palavras simples, e o skill que escolhe entre eles — na nota de hoje se você guardar.",
      time: "2 min",
      needs: "Nada.",
    },
    fortress: {
      name: "Mais poder, menos muros",
      promise: "Ele alcança mais da sua máquina do que qualquer chat.",
      paste: "Leia o FORTRESS.md e me explique a escada de contenção em palavras simples.",
      hint: "O próximo cartão mede em que degrau você está de verdade. Quer guardar? Diga “salve isso como uma nota em reflections.”",
      gets: "A escada de contenção em palavras simples, lida do próprio arquivo — uma nota em reflections se você guardar.",
      time: "2 min",
      needs: "Nada.",
    },
    studio: {
      name: "Monte um estúdio: uma linha → um vídeo de lançamento",
      promise: "Um vídeo de lançamento ainda significa uma agência e três semanas.",
      paste: "Use o skill motion-lab. Faça um vídeo de lançamento de 20 segundos para [meu produto], um único arquivo HTML, horizontal 1920x1080 e vertical 1080x1920, 60 fps. Cinco momentos: a dor, o produto em uso, um número real, o benefício, o logo. Use as minhas capturas reais em ./shots, nunca redesenhe a interface. Números, não adjetivos: 120 BPM, molas com amortecimento 0.7, uma cor de destaque [hex]. Proibido: bloom, partículas, orbes brilhantes, números inventados.",
      hint: "Troque [meu produto] e [hex], e antes coloque as suas capturas reais numa pasta chamada shots. O motion-lab entrevista você elemento por elemento antes de renderizar — responda, ou aceite a recomendação dele.",
      gets: "O vídeo de lançamento como arquivos HTML de vídeo — horizontal 1920x1080 e vertical 1080x1920 — que rodam em qualquer navegador.",
      time: "20–30 min, quase tudo a entrevista e o ciclo de renderizar e corrigir",
      needs: "Capturas reais do seu produto, em ./shots.",
    },
  },
  close: "Você chegou com uma janela de chat. Suba a escada e saia com alguém que vai lembrar de você amanhã.",
  back: "the-aios.com",
};

export const SKILLS: Record<Locale, SkillsCopy> = { en, es, pt };

export const SKILLS_PATHS: Record<Locale, string> = { en: "/climb", es: "/es/climb", pt: "/pt/climb" };

/* noindex/nofollow on every variant: reachable by anyone holding the URL, never
 * surfaced by a search engine. hreflang only between the three /climb pages. */
export function skillsMetadata(locale: Locale): Metadata {
  const { title, description } = SKILLS[locale].meta;
  const url = `https://the-aios.com${SKILLS_PATHS[locale]}`;
  return {
    title,
    description,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    alternates: {
      canonical: url,
      languages: {
        en: "https://the-aios.com/climb",
        es: "https://the-aios.com/es/climb",
        "pt-BR": "https://the-aios.com/pt/climb",
      },
    },
    openGraph: { title, description, url, type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The AIOS" }] },
  };
}
