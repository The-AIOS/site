/* /skills — the walkable ladder for the first hours after install.
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

export type RungId = "base" | "meet" | "feed" | "day" | "hands" | "team" | "run";

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
  | "housekeeping";

/* Station numbers match the eight-station climb used in hands-on sessions. */
export const LADDER: { rung: RungId; cards: { id: CardId; station?: number }[] }[] = [
  { rung: "base", cards: [{ id: "name" }, { id: "interview", station: 4 }] },
  { rung: "meet", cards: [{ id: "knows" }, { id: "pitch" }, { id: "ghost", station: 4 }] },
  { rung: "feed", cards: [{ id: "ingest" }, { id: "stories" }] },
  { rung: "day", cards: [{ id: "today", station: 4 }, { id: "closeSession", station: 7 }, { id: "closeDay", station: 7 }] },
  { rung: "hands", cards: [{ id: "connect" }] },
  { rung: "team", cards: [{ id: "hat", station: 3 }, { id: "firstAgent", station: 5 }, { id: "worker", station: 6 }] },
  { rung: "run", cards: [{ id: "rung", station: 2 }, { id: "intent" }, { id: "housekeeping", station: 7 }] },
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
    description: "Seventeen moves for the first hours with The AIOS. Each one is a paste block, and each one leaves something in your vault.",
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
    "Day one, the answers are thin — because the vault is thin. That is not a bug to hide; it is the whole reason the first rung is about bringing what you already have.",
  labels: { copy: "Copy", copied: "Copied", gets: "You get", time: "Time", needs: "Needs", station: "Station", rung: "Rung" },
  rungs: {
    base: { name: "Base camp", proves: "It is mine, and it knows where I start." },
    meet: { name: "Meet it", proves: "It already knows me." },
    feed: { name: "Feed it", proves: "I can make it know more." },
    day: { name: "Work the day", proves: "It holds my day, not just my questions." },
    hands: { name: "Give it hands", proves: "It can reach my actual tools." },
    team: { name: "Hire the team", proves: "It is not one assistant. It is a team." },
    run: { name: "Let it run", proves: "It works inside rules I wrote." },
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
      needs: "01 or 02.",
    },
    pitch: {
      name: "The cocktail pitch",
      promise: "You still can’t say what you do in thirty seconds.",
      paste:
        "Using what my vault knows about me, write my 30-second answer to “so, what do you do?” — spoken, not written, the way I would actually say it at a dinner. Then render it as a one-page infographic and save it to 03 - export/.",
      gets: "The spoken pitch, plus a rendered one-pager filed in your vault.",
      time: "3 min",
      needs: "02.",
    },
    ghost: {
      name: "Ghost — it answers as you",
      promise: "Your voice is the one thing a draft always misses.",
      paste: "/aios:ghost How would I explain what my company does to a new hire?",
      hint: "What it gets wrong is the useful part. Correct it once, in the session.",
      gets: "An answer in your voice — and your correction written into the vault, so the next draft starts closer.",
      time: "2 min",
      needs: "02.",
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
      needs: "A vault with some history — 06 speeds it up.",
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
        "Build me an agent in agents/custom/ that acts as my [role] — it should know [what] and always [rule]. Then spawn it and give it one real task.",
      hint: "Fill the three brackets from your own business.",
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
      needs: "02.",
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
  },
  close: "You walked in with a chat window. Walk the ladder and you leave with someone who remembers you tomorrow.",
  back: "the-aios.com",
};

const es: SkillsCopy = {
  meta: {
    title: "La escalada — pega uno, obtén algo · The AIOS",
    description: "Diecisiete movimientos para tus primeras horas con The AIOS. Cada uno es un bloque para pegar, y cada uno deja algo en tu vault.",
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
    "El primer día, las respuestas son delgadas — porque el vault es delgado. No es un defecto que esconder; es justo la razón por la que el primer peldaño consiste en traer lo que ya tienes.",
  labels: { copy: "Copiar", copied: "Copiado", gets: "Obtienes", time: "Tiempo", needs: "Requiere", station: "Estación", rung: "Peldaño" },
  rungs: {
    base: { name: "Campamento base", proves: "Es mío, y sabe desde dónde empiezo." },
    meet: { name: "Conócelo", proves: "Ya me conoce." },
    feed: { name: "Aliméntalo", proves: "Puedo hacer que sepa más." },
    day: { name: "Trabaja el día", proves: "Sostiene mi día, no solo mis preguntas." },
    hands: { name: "Dale manos", proves: "Puede alcanzar mis herramientas reales." },
    team: { name: "Contrata al equipo", proves: "No es un asistente. Es un equipo." },
    run: { name: "Déjalo correr", proves: "Trabaja dentro de reglas que yo escribí." },
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
      needs: "01 o 02.",
    },
    pitch: {
      name: "El pitch de coctel",
      promise: "Todavía no puedes decir a qué te dedicas en treinta segundos.",
      paste:
        "Con lo que mi vault sabe de mí, escribe mi respuesta de 30 segundos a “¿y tú a qué te dedicas?” — hablada, no escrita, como de verdad la diría en una cena. Luego conviértela en una infografía de una página y guárdala en 03 - export/.",
      gets: "El pitch hablado, más una infografía de una página archivada en tu vault.",
      time: "3 min",
      needs: "02.",
    },
    ghost: {
      name: "Ghost — responde como tú",
      promise: "Tu voz es lo único que un borrador siempre pierde.",
      paste: "/aios:ghost ¿Cómo le explicaría a una nueva contratación lo que hace mi empresa?",
      hint: "Lo que se equivoca es la parte útil. Corrígelo una vez, en la sesión.",
      gets: "Una respuesta con tu voz — y tu corrección escrita en el vault, para que el siguiente borrador empiece más cerca.",
      time: "2 min",
      needs: "02.",
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
      needs: "Un vault con algo de historia — 06 lo acelera.",
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
        "Constrúyeme un agente en agents/custom/ que actúe como mi [rol] — debe saber [qué] y siempre [regla]. Luego lánzalo y dale una tarea real.",
      hint: "Llena los tres corchetes desde tu propio negocio.",
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
      needs: "02.",
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
  },
  close: "Llegaste con una ventana de chat. Sube la escalera y te vas con alguien que te va a recordar mañana.",
  back: "the-aios.com",
};

const pt: SkillsCopy = {
  meta: {
    title: "A escalada — cole um, receba algo · The AIOS",
    description: "Dezessete movimentos para as primeiras horas com The AIOS. Cada um é um bloco para colar, e cada um deixa algo no seu vault.",
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
    "No primeiro dia, as respostas são rasas — porque o vault é raso. Não é um defeito para esconder; é exatamente por isso que o primeiro degrau é trazer o que você já tem.",
  labels: { copy: "Copiar", copied: "Copiado", gets: "Você recebe", time: "Tempo", needs: "Precisa", station: "Estação", rung: "Degrau" },
  rungs: {
    base: { name: "Acampamento base", proves: "É meu, e sabe de onde eu começo." },
    meet: { name: "Conheça", proves: "Ele já me conhece." },
    feed: { name: "Alimente", proves: "Posso fazer ele saber mais." },
    day: { name: "Trabalhe o dia", proves: "Ele segura o meu dia, não só as minhas perguntas." },
    hands: { name: "Dê mãos", proves: "Ele alcança as minhas ferramentas reais." },
    team: { name: "Contrate o time", proves: "Não é um assistente. É um time." },
    run: { name: "Deixe rodar", proves: "Ele trabalha dentro de regras que eu escrevi." },
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
      needs: "01 ou 02.",
    },
    pitch: {
      name: "O pitch de coquetel",
      promise: "Você ainda não consegue dizer o que faz em trinta segundos.",
      paste:
        "Com o que o meu vault sabe sobre mim, escreva a minha resposta de 30 segundos para “e você, o que faz?” — falada, não escrita, do jeito que eu realmente diria num jantar. Depois transforme em um infográfico de uma página e salve em 03 - export/.",
      gets: "O pitch falado, mais um infográfico de uma página arquivado no seu vault.",
      time: "3 min",
      needs: "02.",
    },
    ghost: {
      name: "Ghost — ele responde como você",
      promise: "A sua voz é a única coisa que um rascunho sempre perde.",
      paste: "/aios:ghost Como eu explicaria o que a minha empresa faz para uma nova contratação?",
      hint: "O que ele erra é a parte útil. Corrija uma vez, na sessão.",
      gets: "Uma resposta com a sua voz — e a sua correção escrita no vault, para o próximo rascunho começar mais perto.",
      time: "2 min",
      needs: "02.",
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
      needs: "Um vault com alguma história — 06 acelera.",
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
        "Construa um agente em agents/custom/ que atue como o meu [papel] — ele deve saber [o quê] e sempre [regra]. Depois inicie ele e dê uma tarefa real.",
      hint: "Preencha os três colchetes com o seu próprio negócio.",
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
      needs: "02.",
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
  },
  close: "Você chegou com uma janela de chat. Suba a escada e saia com alguém que vai lembrar de você amanhã.",
  back: "the-aios.com",
};

export const SKILLS: Record<Locale, SkillsCopy> = { en, es, pt };

export const SKILLS_PATHS: Record<Locale, string> = { en: "/skills", es: "/es/skills", pt: "/pt/skills" };

/* noindex/nofollow on every variant: reachable by anyone holding the URL, never
 * surfaced by a search engine. hreflang only between the three /skills pages. */
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
        en: "https://the-aios.com/skills",
        es: "https://the-aios.com/es/skills",
        "pt-BR": "https://the-aios.com/pt/skills",
      },
    },
    openGraph: { title, description, url, type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The AIOS" }] },
  };
}
