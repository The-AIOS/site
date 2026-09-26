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

export type RungId = "base" | "harness" | "memory" | "interface" | "compound" | "yours" | "team";

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
  | "collaborate";

/* Base camp + the six stations of the hands-on climb, in the order the workshop
 * deck (aios.html) walks them. A group IS a station, so cards carry no station tag. */
export const LADDER: { rung: RungId; cards: { id: CardId; station?: number }[] }[] = [
  { rung: "base", cards: [{ id: "name" }] },
  { rung: "harness", cards: [{ id: "askBox" }, { id: "hat" }, { id: "connect" }, { id: "intent" }, { id: "rung" }] },
  { rung: "memory", cards: [{ id: "interview" }, { id: "today" }, { id: "ingest" }, { id: "ghost" }, { id: "knows" }, { id: "stories" }, { id: "pitch" }] },
  { rung: "interface", cards: [{ id: "findAround" }] },
  { rung: "compound", cards: [{ id: "closeSession" }, { id: "closeDay" }, { id: "housekeeping" }] },
  { rung: "yours", cards: [{ id: "personalize" }, { id: "extend" }, { id: "firstAgent" }] },
  { rung: "team", cards: [{ id: "worker" }, { id: "brief" }, { id: "reply" }, { id: "resume" }, { id: "close" }, { id: "company" }, { id: "collaborate" }] },
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
  labels: { copy: string; copied: string; gets: string; time: string; needs: string; station: string; rung: string };
  rungs: Record<RungId, { name: string; proves: string }>;
  cards: Record<CardId, Card>;
  close: string;
  back: string;
};

const en: SkillsCopy = {
  meta: {
    title: "The climb — paste one, get a thing · The AIOS",
    description: "Twenty-seven moves for the first hours with The AIOS. Each one is a paste block, and each one leaves something in your vault.",
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
  labels: { copy: "Copy", copied: "Copied", gets: "You get", time: "Time", needs: "Needs", station: "Station", rung: "Station" },
  rungs: {
    base: { name: "Base camp", proves: "It is mine, and it knows where I start." },
    harness: { name: "Meet your harness", proves: "It knows what it is, what it can reach, and how far it may go." },
    memory: { name: "Your memory", proves: "It remembers me, and it gets better with everything I give it." },
    interface: { name: "Know your interface", proves: "I know where everything is." },
    compound: { name: "Compounding value", proves: "What I do today, tomorrow already knows." },
    yours: { name: "Make it yours", proves: "It fits my work, and no update undoes it." },
    team: { name: "Your team", proves: "It is not one assistant. It is a team, and so are we." },
  },
  cards: {
    name: {
      name: "Name it",
      promise: "Every chat meets you like a stranger.",
      paste: "spawn atlas",
      hint: "In a terminal — or use “Spawn a session” in the App and type the name. Pick any name you would say out loud.",
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
      needs: "07, or a vault with some history.",
    },
    pitch: {
      name: "The cocktail pitch",
      promise: "You still can’t say what you do in thirty seconds.",
      paste:
        "Using what my vault knows about me, write my 30-second answer to “so, what do you do?” — spoken, not written, the way I would actually say it at a dinner. Then render it as a one-page infographic and save it to 03 - export/.",
      gets: "The spoken pitch, plus a rendered one-pager filed in your vault.",
      time: "3 min",
      needs: "07.",
    },
    ghost: {
      name: "Ghost — it answers as you",
      promise: "Your voice is the one thing a draft always misses.",
      paste: "/aios:ghost How would I explain what my company does to a new hire?",
      hint: "What it gets wrong is the useful part. Correct it once, in the session.",
      gets: "An answer in your voice — and your correction written into the vault, so the next draft starts closer.",
      time: "2 min",
      needs: "07.",
    },
    ingest: {
      name: "Bring what you already wrote",
      promise: "Years of your thinking live in files it has never seen.",
      paste: "/aios:ingest ~/Downloads/the-document-that-explains-my-work.pdf",
      hint: "A PDF, a deck, a call transcript, a YouTube URL. Swap the path for yours.",
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
      needs: "A vault with some history — 09 speeds it up.",
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
      hint: "Run /aios:agent alone to see every bundled agent. Then ask it something real from your week.",
      gets: "The session you already have, answering as a specialist — with your context still loaded.",
      time: "1 min",
      needs: "Nothing.",
    },
    firstAgent: {
      name: "Your first agent",
      promise: "You keep explaining the same job to the same assistant.",
      paste:
        "Launch the aios-builder to help me build a custom agent that acts as my [role] — it should know [what] and always [rule]. Then spawn it and give it one real task.",
      hint: "Fill the three brackets from your own business. Prefer a form? The Designer in the App and Glass is the same builder, as a few fields.",
      gets: "agents/custom/{name}.md — yours, survives every update, spawnable by name.",
      time: "5 min",
      needs: "Nothing.",
    },
    worker: {
      name: "Spawn a worker, then message it",
      promise: "Delegating to AI still means babysitting one chat.",
      paste:
        "Spawn a worker named researcher with the task: find three competitors of my company and write a one-paragraph note on each. Then tell me when it is running.",
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
      name: "Write the trust contract",
      promise: "You don’t know what it is allowed to do without you.",
      paste:
        "Open INTENT.md with me. Go domain by domain — email, calendar, money, code, anything I publish — and propose what you may do on your own, what you draft for my approval, and what you never touch. Change nothing until I confirm each one.",
      gets: "INTENT.md filled in — the autonomy you granted, per domain, in writing, read by every session.",
      time: "10 min",
      needs: "Nothing. It gets sharper after 07.",
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
      paste:
        "Which agents and skills in my AIOS would you use to help me build a well-engineered, secure app for my company? I’m not technical — tell me what each one does and where it lives. Then add the three you would use first to today's daily note.",
      hint: "Then open one of the files it names. Everything it knows is a file you can read.",
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
      paste:
        "Open USER.md at Command personalizations → /today with me. Propose three changes to how my daily plan looks, based on how I actually work. Write only the ones I approve.",
      hint: "Every command reads its own section of USER.md before it runs. Updates never touch that file.",
      gets: "USER.md with your overrides — and tomorrow’s /aios:today shaped by them.",
      time: "5 min",
      needs: "A few days of /aios:today.",
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
      needs: "21.",
    },
    reply: {
      name: "Have it report back",
      promise: "You keep checking a tab to see whether it’s done.",
      paste:
        "Tell researcher to add their pricing, and to report back to me when it is done.",
      gets: "A one-line report delivered into this session when the worker finishes — and its note filed in your vault.",
      time: "1 min",
      needs: "21.",
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
      needs: "21.",
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
  },
  close: "You walked in with a chat window. Walk the ladder and you leave with someone who remembers you tomorrow.",
  back: "the-aios.com",
};

const es: SkillsCopy = {
  meta: {
    title: "La escalada — pega uno, obtén algo · The AIOS",
    description: "Veintisiete movimientos para tus primeras horas con The AIOS. Cada uno es un bloque para pegar, y cada uno deja algo en tu vault.",
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
  labels: { copy: "Copiar", copied: "Copiado", gets: "Obtienes", time: "Tiempo", needs: "Requiere", station: "Estación", rung: "Estación" },
  rungs: {
    base: { name: "Campamento base", proves: "Es mío, y sabe desde dónde empiezo." },
    harness: { name: "Conoce tu arnés", proves: "Sabe qué es, qué alcanza y hasta dónde puede llegar." },
    memory: { name: "Tu memoria", proves: "Se acuerda de mí, y mejora con todo lo que le doy." },
    interface: { name: "Conoce tu interfaz", proves: "Sé dónde está cada cosa." },
    compound: { name: "Valor que se acumula", proves: "Lo que hago hoy, mañana ya lo sabe." },
    yours: { name: "Hazlo tuyo", proves: "Se ajusta a mi trabajo, y ninguna actualización lo deshace." },
    team: { name: "Tu equipo", proves: "No es un asistente. Es un equipo, y nosotros también." },
  },
  cards: {
    name: {
      name: "Ponle nombre",
      promise: "Cada chat te recibe como a un desconocido.",
      paste: "spawn atlas",
      hint: "En una terminal — o usa “Spawn a session” en la App y escribe el nombre. Elige uno que dirías en voz alta.",
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
      needs: "07, o un vault con algo de historia.",
    },
    pitch: {
      name: "El pitch de coctel",
      promise: "Todavía no puedes decir a qué te dedicas en treinta segundos.",
      paste:
        "Con lo que mi vault sabe de mí, escribe mi respuesta de 30 segundos a “¿y tú a qué te dedicas?” — hablada, no escrita, como de verdad la diría en una cena. Luego conviértela en una infografía de una página y guárdala en 03 - export/.",
      gets: "El pitch hablado, más una infografía de una página archivada en tu vault.",
      time: "3 min",
      needs: "07.",
    },
    ghost: {
      name: "Ghost — responde como tú",
      promise: "Tu voz es lo único que un borrador siempre pierde.",
      paste: "/aios:ghost ¿Cómo le explicaría a una nueva contratación lo que hace mi empresa?",
      hint: "Lo que se equivoca es la parte útil. Corrígelo una vez, en la sesión.",
      gets: "Una respuesta con tu voz — y tu corrección escrita en el vault, para que el siguiente borrador empiece más cerca.",
      time: "2 min",
      needs: "07.",
    },
    ingest: {
      name: "Trae lo que ya escribiste",
      promise: "Años de tu pensamiento viven en archivos que nunca ha visto.",
      paste: "/aios:ingest ~/Downloads/el-documento-que-explica-mi-trabajo.pdf",
      hint: "Un PDF, un deck, la transcripción de una llamada, un URL de YouTube. Cambia la ruta por la tuya.",
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
      needs: "Un vault con algo de historia — 09 lo acelera.",
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
      hint: "Corre /aios:agent solo para ver todos los agentes incluidos. Luego pregúntale algo real de tu semana.",
      gets: "La sesión que ya tienes, respondiendo como especialista — con tu contexto todavía cargado.",
      time: "1 min",
      needs: "Nada.",
    },
    firstAgent: {
      name: "Tu primer agente",
      promise: "Sigues explicándole el mismo trabajo al mismo asistente.",
      paste:
        "Lanza el aios-builder para ayudarme a crear un agente propio que actúe como mi [rol] — debe saber [qué] y siempre [regla]. Luego lánzalo y dale una tarea real.",
      hint: "Llena los tres corchetes desde tu propio negocio. ¿Prefieres un formulario? El Designer de la App y de Glass es el mismo constructor, en unos cuantos campos.",
      gets: "agents/custom/{nombre}.md — tuyo, sobrevive cada actualización, se lanza por nombre.",
      time: "5 min",
      needs: "Nada.",
    },
    worker: {
      name: "Lanza un worker y mándale un mensaje",
      promise: "Delegar en la IA todavía significa cuidar un solo chat.",
      paste:
        "Lanza un worker llamado researcher con la tarea: encuentra tres competidores de mi empresa y escribe una nota de un párrafo sobre cada uno. Luego avísame cuando esté corriendo.",
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
      name: "Escribe el contrato de confianza",
      promise: "No sabes qué tiene permitido hacer sin ti.",
      paste:
        "Abre INTENT.md conmigo. Ve dominio por dominio — correo, calendario, dinero, código, todo lo que publico — y propón qué puedes hacer por tu cuenta, qué me dejas como borrador para aprobar y qué nunca tocas. No cambies nada hasta que confirme cada uno.",
      gets: "INTENT.md lleno — la autonomía que otorgaste, por dominio, por escrito, leída por cada sesión.",
      time: "10 min",
      needs: "Nada. Se afina después del 07.",
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
      paste:
        "¿Qué agentes y skills de mi AIOS usarías para ayudarme a construir una app bien hecha y segura para mi empresa? No soy técnico: dime qué hace cada uno y dónde vive. Luego agrega los tres que usarías primero a la nota diaria de hoy.",
      hint: "Después abre uno de los archivos que mencione. Todo lo que sabe es un archivo que puedes leer.",
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
      paste:
        "Abre conmigo USER.md en Command personalizations → /today. Propón tres cambios a cómo se ve mi plan del día, según cómo trabajo de verdad. Escribe solo los que yo apruebe.",
      hint: "Cada comando lee su propia sección de USER.md antes de correr. Las actualizaciones nunca tocan ese archivo.",
      gets: "USER.md con tus ajustes — y el /aios:today de mañana ya con esa forma.",
      time: "5 min",
      needs: "Unos días usando /aios:today.",
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
      needs: "21.",
    },
    reply: {
      name: "Que te reporte de vuelta",
      promise: "Sigues revisando una pestaña para ver si ya terminó.",
      paste:
        "Dile a researcher que agregue sus precios y que me reporte cuando termine.",
      gets: "Un reporte de una línea que llega a esta sesión cuando el worker termina — y su nota archivada en tu vault.",
      time: "1 min",
      needs: "21.",
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
      needs: "21.",
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
  },
  close: "Llegaste con una ventana de chat. Sube la escalera y te vas con alguien que te va a recordar mañana.",
  back: "the-aios.com",
};

const pt: SkillsCopy = {
  meta: {
    title: "A escalada — cole um, receba algo · The AIOS",
    description: "Vinte e sete movimentos para as primeiras horas com The AIOS. Cada um é um bloco para colar, e cada um deixa algo no seu vault.",
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
  labels: { copy: "Copiar", copied: "Copiado", gets: "Você recebe", time: "Tempo", needs: "Precisa", station: "Estação", rung: "Estação" },
  rungs: {
    base: { name: "Acampamento base", proves: "É meu, e sabe de onde eu começo." },
    harness: { name: "Conheça o seu arnês", proves: "Ele sabe o que é, o que alcança e até onde pode ir." },
    memory: { name: "A sua memória", proves: "Ele lembra de mim, e melhora com tudo o que eu dou a ele." },
    interface: { name: "Conheça a sua interface", proves: "Eu sei onde está cada coisa." },
    compound: { name: "Valor que se acumula", proves: "O que eu faço hoje, amanhã ele já sabe." },
    yours: { name: "Deixe do seu jeito", proves: "Ele se encaixa no meu trabalho, e nenhuma atualização desfaz isso." },
    team: { name: "O seu time", proves: "Não é um assistente. É um time, e nós também." },
  },
  cards: {
    name: {
      name: "Dê um nome",
      promise: "Todo chat recebe você como um estranho.",
      paste: "spawn atlas",
      hint: "Em um terminal — ou use “Spawn a session” no App e digite o nome. Escolha um que você diria em voz alta.",
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
      needs: "07, ou um vault com alguma história.",
    },
    pitch: {
      name: "O pitch de coquetel",
      promise: "Você ainda não consegue dizer o que faz em trinta segundos.",
      paste:
        "Com o que o meu vault sabe sobre mim, escreva a minha resposta de 30 segundos para “e você, o que faz?” — falada, não escrita, do jeito que eu realmente diria num jantar. Depois transforme em um infográfico de uma página e salve em 03 - export/.",
      gets: "O pitch falado, mais um infográfico de uma página arquivado no seu vault.",
      time: "3 min",
      needs: "07.",
    },
    ghost: {
      name: "Ghost — ele responde como você",
      promise: "A sua voz é a única coisa que um rascunho sempre perde.",
      paste: "/aios:ghost Como eu explicaria o que a minha empresa faz para uma nova contratação?",
      hint: "O que ele erra é a parte útil. Corrija uma vez, na sessão.",
      gets: "Uma resposta com a sua voz — e a sua correção escrita no vault, para o próximo rascunho começar mais perto.",
      time: "2 min",
      needs: "07.",
    },
    ingest: {
      name: "Traga o que você já escreveu",
      promise: "Anos do seu pensamento vivem em arquivos que ele nunca viu.",
      paste: "/aios:ingest ~/Downloads/o-documento-que-explica-meu-trabalho.pdf",
      hint: "Um PDF, um deck, a transcrição de uma call, um URL do YouTube. Troque o caminho pelo seu.",
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
      needs: "Um vault com alguma história — 09 acelera.",
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
      hint: "Rode /aios:agent sozinho para ver todos os agentes incluídos. Depois pergunte algo real da sua semana.",
      gets: "A sessão que você já tem, respondendo como especialista — com o seu contexto ainda carregado.",
      time: "1 min",
      needs: "Nada.",
    },
    firstAgent: {
      name: "O seu primeiro agente",
      promise: "Você continua explicando o mesmo trabalho para o mesmo assistente.",
      paste:
        "Inicie o aios-builder para me ajudar a criar um agente próprio que atue como o meu [papel] — ele deve saber [o quê] e sempre [regra]. Depois inicie o agente e dê uma tarefa real.",
      hint: "Preencha os três colchetes com o seu próprio negócio. Prefere um formulário? O Designer do App e do Glass é o mesmo construtor, em poucos campos.",
      gets: "agents/custom/{nome}.md — seu, sobrevive a toda atualização, iniciável pelo nome.",
      time: "5 min",
      needs: "Nada.",
    },
    worker: {
      name: "Inicie um worker e mande uma mensagem",
      promise: "Delegar para a IA ainda significa cuidar de um único chat.",
      paste:
        "Inicie um worker chamado researcher com a tarefa: encontre três concorrentes da minha empresa e escreva uma nota de um parágrafo sobre cada um. Depois me avise quando estiver rodando.",
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
      name: "Escreva o contrato de confiança",
      promise: "Você não sabe o que ele pode fazer sem você.",
      paste:
        "Abra o INTENT.md comigo. Vá domínio por domínio — e-mail, calendário, dinheiro, código, tudo o que eu publico — e proponha o que você pode fazer sozinho, o que deixa como rascunho para eu aprovar e o que nunca toca. Não mude nada até eu confirmar cada um.",
      gets: "INTENT.md preenchido — a autonomia que você concedeu, por domínio, por escrito, lida por toda sessão.",
      time: "10 min",
      needs: "Nada. Fica mais preciso depois do 07.",
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
      paste:
        "Quais agentes e skills do meu AIOS você usaria para me ajudar a construir um app bem feito e seguro para a minha empresa? Não sou técnico: me diga o que cada um faz e onde ele fica. Depois adicione na nota diária de hoje os três que você usaria primeiro.",
      hint: "Depois abra um dos arquivos que ele citar. Tudo o que ele sabe é um arquivo que você pode ler.",
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
      paste:
        "Abra comigo o USER.md em Command personalizations → /today. Proponha três mudanças no jeito que o meu plano do dia aparece, com base em como eu trabalho de verdade. Escreva só as que eu aprovar.",
      hint: "Cada comando lê a própria seção do USER.md antes de rodar. As atualizações nunca mexem nesse arquivo.",
      gets: "O USER.md com os seus ajustes — e o /aios:today de amanhã já com esse formato.",
      time: "5 min",
      needs: "Alguns dias usando o /aios:today.",
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
      needs: "21.",
    },
    reply: {
      name: "Peça para ele reportar",
      promise: "Você fica olhando uma aba para ver se já terminou.",
      paste:
        "Diga ao researcher para adicionar os preços e me reportar quando terminar.",
      gets: "Um relatório de uma linha entregue nesta sessão quando o worker termina — e a nota dele arquivada no seu vault.",
      time: "1 min",
      needs: "21.",
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
      needs: "21.",
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
