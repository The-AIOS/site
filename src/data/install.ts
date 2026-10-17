/* /install — the pre-workshop install sheet, as a page.
 *
 * UNLISTED BY DESIGN, exactly like /climb. Nothing on the site links here, it is
 * not in llms.txt, and every locale variant ships `robots: noindex`. It is handed
 * out by URL to workshop attendees before Day 1. It links forward to /climb; the
 * climb does NOT link back. If you add an inbound link, you have changed what this
 * page is — ask first.
 *
 * Copy is lifted from src/content.ts (the home page's setup fork and getStarted
 * steps) and src/data/skills.ts (the climb's base camp card), not reinvented. The
 * install line itself is NOT written here: InstallPage imports SETUP_LINE from
 * HomePage so the two can never drift. Download links come from src/downloads.ts
 * via DownloadPanel.
 *
 * Parity: `SkillsCopy`-style — one type, three objects; a missing key in any
 * locale fails the build. */

import type { Metadata } from "next";
import type { Locale } from "@/messages";

type Need = { t: string; b: string };

export type InstallCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: [string, string, string];
  lede: string;
  needsTitle: string;
  needs: [Need, Need];
  pathsTitle: string;
  app: { name: string; steps: [string, string, string, string] };
  cli: { name: string; steps: [string, string, string, string] };
  done: { title: string; body: string; how: string; after: string };
  next: { lead: string; cta: string };
  labels: { copy: string; copied: string };
  back: string;
};

const en: InstallCopy = {
  meta: {
    title: "Install before Day 1 · The AIOS",
    description: "Get The AIOS installed before the workshop: what you need, two ways in, and the one check that tells you it worked.",
  },
  eyebrow: "Before Day 1",
  h1: ["Install it ", "before you arrive", "."],
  lede:
    "About ten minutes the evening before saves the first hour of the workshop. Check what you need, pick one of two doors, and confirm the one sign that it worked.",
  needsTitle: "What you need",
  needs: [
    { t: "A paid Claude plan — Pro or Max", b: "Required. The AIOS runs on Claude Code, which needs a paid Claude subscription." },
    {
      t: "A laptop — a Mac first",
      b: "The App is built for Mac (Apple Silicon), signed and notarized. Linux (x64) and Windows (x64) builds exist too; on Windows, expect a warning, because that build isn’t code-signed yet.",
    },
  ],
  pathsTitle: "Pick your door",
  app: {
    name: "The AIOS App",
    steps: [
      "Download the App and open it.",
      "“Install what I need”: one click installs the free tools it runs on and skips what you already have. Then “Log in to Claude” with your paid plan.",
      "“Log in to GitHub” backs up your vault from day one. It is optional: “Skip for now” works, and you can connect it later.",
      "“Set up my AIOS”: a guided conversation sets up your vault and learns who you are. It asks before it changes anything. When the App says “You’re in.”, you are. About 10 minutes.",
    ],
  },
  cli: {
    name: "Already have Claude Code?",
    steps: [
      "Open any terminal and start a Claude Code session.",
      "Paste this line. It clones the framework, installs everything you need including the AIOS Glass extension, and asks your consent at every step.",
      "Say yes as it goes. Claude reads SETUP.md and walks every choice — each step asks your consent. About 5 minutes.",
      "Have the opening conversation: who you are, how you work, and a trust contract — then your first daily plan. About 5 minutes.",
    ],
  },
  done: {
    title: "You’re in when…",
    body: "A named session greets you as itself.",
    how: "In a terminal — or use “Spawn a session” in the App and type the name:",
    after: "If atlas answers as atlas, you’re done. Pick any name you would say out loud — it keeps that identity every time you open it.",
  },
  next: { lead: "Installed, and greeted by name? The workshop picks up from there.", cta: "Then start the climb →" },
  labels: { copy: "Copy", copied: "Copied" },
  back: "the-aios.com",
};

const es: InstallCopy = {
  meta: {
    title: "Instálalo antes del Día 1 · The AIOS",
    description: "Deja The AIOS instalado antes del taller: qué necesitas, dos formas de entrar y la única prueba que te dice que funcionó.",
  },
  eyebrow: "Antes del Día 1",
  h1: ["Instálalo ", "antes de llegar", "."],
  lede:
    "Unos diez minutos la noche anterior te ahorran la primera hora del taller. Revisa qué necesitas, elige una de dos puertas y confirma la señal de que funcionó.",
  needsTitle: "Qué necesitas",
  needs: [
    { t: "Un plan de pago de Claude — Pro o Max", b: "Obligatorio. The AIOS corre sobre Claude Code, que requiere una suscripción de pago de Claude." },
    {
      t: "Una laptop — de preferencia Mac",
      b: "La App está hecha para Mac (Apple Silicon), firmada y notarizada. También hay versiones para Linux (x64) y Windows (x64); en Windows vas a ver una advertencia, porque esa versión todavía no está firmada.",
    },
  ],
  pathsTitle: "Elige tu puerta",
  app: {
    name: "La AIOS App",
    steps: [
      "Descarga la App y ábrela.",
      "“Instalar lo que necesito”: un clic instala las herramientas gratuitas con las que funciona y se salta lo que ya tienes. Luego “Inicia sesión en Claude” con tu plan de pago.",
      "“Inicia sesión en GitHub” respalda tu vault desde el primer día. Es opcional: “Omitir por ahora” funciona y puedes conectarlo después.",
      "“Configurar mi AIOS”: una conversación guiada configura tu vault y aprende quién eres. Pregunta antes de cambiar cualquier cosa. Cuando la App diga “Ya estás dentro.”, ya estás. Unos 10 minutos.",
    ],
  },
  cli: {
    name: "¿Ya tienes Claude Code?",
    steps: [
      "Abre cualquier terminal e inicia una sesión de Claude Code.",
      "Pega esta línea. Clona el framework, instala todo lo que necesitas incluyendo la extensión AIOS Glass, y pide tu consentimiento en cada paso.",
      "Acepta conforme avanza. Claude lee SETUP.md y guía cada decisión — cada paso pide tu consentimiento. Unos 5 minutos.",
      "Ten la conversación inicial: quién eres, cómo trabajas y un contrato de confianza — y luego tu primer plan diario. Unos 5 minutos.",
    ],
  },
  done: {
    title: "Ya estás dentro cuando…",
    body: "Una sesión con nombre te saluda como sí misma.",
    how: "En una terminal — o usa “Spawn a session” en la App y escribe el nombre:",
    after: "Si atlas te responde como atlas, listo. Elige cualquier nombre que dirías en voz alta — conserva esa identidad cada vez que la abres.",
  },
  next: { lead: "¿Ya quedó instalado y te saludó por su nombre? El taller arranca desde ahí.", cta: "Luego empieza la escalada →" },
  labels: { copy: "Copiar", copied: "Copiado" },
  back: "the-aios.com",
};

const pt: InstallCopy = {
  meta: {
    title: "Instale antes do Dia 1 · The AIOS",
    description: "Deixe o The AIOS instalado antes do workshop: o que você precisa, duas formas de entrar e a única checagem que mostra que funcionou.",
  },
  eyebrow: "Antes do Dia 1",
  h1: ["Instale ", "antes de chegar", "."],
  lede:
    "Uns dez minutos na noite anterior poupam a primeira hora do workshop. Confira o que você precisa, escolha uma de duas portas e confirme o sinal de que funcionou.",
  needsTitle: "O que você precisa",
  needs: [
    { t: "Um plano pago do Claude — Pro ou Max", b: "Obrigatório. O The AIOS roda sobre o Claude Code, que exige uma assinatura paga do Claude." },
    {
      t: "Um notebook — de preferência Mac",
      b: "O App é feito para Mac (Apple Silicon), assinado e notarizado. Também há versões para Linux (x64) e Windows (x64); no Windows você vai ver um aviso, porque essa versão ainda não é assinada.",
    },
  ],
  pathsTitle: "Escolha sua porta",
  app: {
    name: "O AIOS App",
    steps: [
      "Baixe o App e abra.",
      "“Instalar o que eu preciso”: um clique instala as ferramentas gratuitas com que ele funciona e pula o que você já tem. Depois, “Entrar no Claude” com o seu plano pago.",
      "“Entrar no GitHub” faz o backup do seu vault desde o primeiro dia. É opcional: “Pular por enquanto” funciona, e você pode conectar depois.",
      "“Configurar meu AIOS”: uma conversa guiada configura o seu vault e aprende quem você é. Pergunta antes de mudar qualquer coisa. Quando o App disser “Você entrou.”, você entrou. Uns 10 minutos.",
    ],
  },
  cli: {
    name: "Já tem o Claude Code?",
    steps: [
      "Abra qualquer terminal e inicie uma sessão do Claude Code.",
      "Cole esta linha. Ele clona o framework, instala tudo o que você precisa incluindo a extensão AIOS Glass, e pede seu consentimento em cada passo.",
      "Aceite conforme avança. O Claude lê o SETUP.md e guia cada decisão — cada passo pede seu consentimento. Uns 5 minutos.",
      "Faça a conversa inicial: quem você é, como trabalha e um contrato de confiança — e depois o seu primeiro plano diário. Uns 5 minutos.",
    ],
  },
  done: {
    title: "Você está dentro quando…",
    body: "Uma sessão com nome cumprimenta você como ela mesma.",
    how: "Em um terminal — ou use “Spawn a session” no App e digite o nome:",
    after: "Se o atlas responder como atlas, pronto. Escolha qualquer nome que você diria em voz alta — ela mantém essa identidade toda vez que você a abre.",
  },
  next: { lead: "Instalado e cumprimentado pelo nome? O workshop começa daí.", cta: "Depois, comece a escalada →" },
  labels: { copy: "Copiar", copied: "Copiado" },
  back: "the-aios.com",
};

export const INSTALL: Record<Locale, InstallCopy> = { en, es, pt };

export const INSTALL_PATHS: Record<Locale, string> = { en: "/install", es: "/es/install", pt: "/pt/install" };

/* noindex/nofollow on every variant: reachable by anyone holding the URL, never
 * surfaced by a search engine. hreflang only between the three /install pages. */
export function installMetadata(locale: Locale): Metadata {
  const { title, description } = INSTALL[locale].meta;
  const url = `https://the-aios.com${INSTALL_PATHS[locale]}`;
  return {
    title,
    description,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    alternates: {
      canonical: url,
      languages: {
        en: "https://the-aios.com/install",
        es: "https://the-aios.com/es/install",
        "pt-BR": "https://the-aios.com/pt/install",
      },
    },
    openGraph: { title, description, url, type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The AIOS" }] },
  };
}
