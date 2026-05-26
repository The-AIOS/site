import type { Messages } from "./types";

/* LatAm-neutral Spanish.
   - "tú" for you (singular), "ustedes" for you (plural). Never "vos"/"vosotros".
   - Technical loanwords kept where they're term-of-art: framework, vault (translated to "bóveda" naturally), trustless, anti-hype.
   - Anti-hype, direct voice — matches AIOS register, not academic Spanish. */

const es: Messages = {
  nav: {
    thesis: "Tesis",
    capabilities: "Capacidades",
    architecture: "Arquitectura",
    agents: "Agentes",
    ahead: "Lo que viene",
    getStarted: "Empezar",
    github: "GitHub ↗",
  },
  hero: {
    eyebrowFramework: "Framework",
    eyebrowSuffix: "Para trabajar con Claude",
    headlinePart1: "La calidad del contexto que le das a una IA",
    headlineAccent: "determina por completo",
    headlinePart2: "lo que puede hacer por ti.",
    lede:
      "The-AIOS es el sustrato de contexto personal para trabajar con Claude — una bóveda que aprende quién eres, qué estás construyendo y cómo piensas, y luego hace que cada sesión arranque desde tu conocimiento real en vez de desde cero.",
    ctaGithub: "Ver en GitHub →",
    ctaGetStarted: "Empezar ↓",
  },
  thesis: {
    eyebrow: "La tesis",
    headline: "La mayoría de la gente usa la IA desde cero. Cada sesión.",
    para1:
      "El patrón estándar: abres un chat, vuelves a explicar quién eres, pegas algo de contexto, haces la pregunta y lo pierdes todo cuando cierras la pestaña. Mañana la misma danza, con un poco menos de paciencia.",
    para2Html:
      "The-AIOS reemplaza ese patrón con una <strong>bóveda</strong> — una memoria persistente, basada en archivos, de ti y de tu trabajo, que se carga automáticamente cada vez que hablas con Claude. El <strong>contexto declarado</strong> es lo que le dices explícitamente. El <strong>contexto observado</strong> es lo que aprende trabajando contigo a lo largo del tiempo.",
    para3:
      "Cada sesión se apoya en la anterior. Con los meses, la bóveda se convierte en un segundo cerebro que te conoce mejor que cualquier herramienta que hayas usado — porque de verdad recuerda.",
    pullquote:
      "Los principios que hacen extraordinarios a los equipos humanos son los mismos que hacen extraordinarios a los equipos humano-IA — porque son patrones de colaboración inteligente, no patrones específicamente humanos.",
    attribution: "— The Agentic Culture",
  },
  capabilities: {
    eyebrow: "Qué hay dentro",
    headline: "Una superficie de trabajo, no un chatbot.",
    body:
      "El framework se entrega como un repo de Git que clonas dentro de Claude Code. Cada capacidad de abajo está disponible de inmediato — sin pasos de instalación más allá del clon y una entrevista.",
    tiles: {
      commands: {
        count: "25",
        noun: "comandos",
        body:
          "Slash commands para cadencias diarias, semanales, bisemanales y mensuales. /aios:today, /aios:close-day, /aios:7plan, /aios:weekly-learnings, /aios:graduate, /aios:emerge…",
      },
      agents: {
        count: "35",
        noun: "agentes",
        body:
          "Personajes especialistas en ventas, estrategia, finanzas/legal, ingeniería, comunicación, personal. Lanza uno como coordinador o carga su expertise inline.",
      },
      skills: {
        count: "42",
        noun: "skills",
        body:
          "Capacidades reutilizables — código, diseño, docs, Obsidian, planeación, automatización de navegador. Auto-cargadas; describe lo que necesitas y Claude las elige.",
      },
      mcps: {
        count: "10",
        noun: "MCPs",
        body:
          "Servidores de Model Context Protocol incluidos — Obsidian, GitHub, Linear, philosopher-oracle, markitdown y más. Autenticados de forma independiente de cualquier cuenta de Anthropic.",
      },
    },
  },
  architecture: {
    eyebrow: "Arquitectura",
    headline: "Tres capas. Cada una compone de forma independiente.",
    body1:
      "Cada sesión de IA se apoya en tres capas de contexto. The-AIOS le da a cada capa un hogar persistente que sobrevive los límites de cada sesión.",
    body2Html:
      "La interacción es lo que crea retornos compuestos: el <strong>declarado</strong> ancla a la IA en tu identidad expresada, el <strong>observado</strong> calibra cómo trabajas de verdad, el <strong>intent</strong> define qué quieres que la IA maneje sin preguntar y qué debe escalarte.",
    cards: {
      declared: {
        eyebrow: "01 · Declarado",
        title: "Lo que le dices a la IA explícitamente",
        body:
          "About me, estilo de trabajo, voz personal, expectativas de rol, ventures actuales. Markdown autoría del operador, cargado cada sesión.",
      },
      observed: {
        eyebrow: "02 · Observado",
        title: "Lo que la IA aprende trabajando contigo",
        body:
          "Patrones, preferencias, crecimiento, lecciones antifrágiles. Se actualiza a medida que se acumula evidencia; promueve de Emerging → Reinforced → ruta a archivos canónicos.",
      },
      intent: {
        eyebrow: "03 · Intent",
        title: "Lo que la IA está autorizada a hacer",
        body:
          "Niveles de autonomía por dominio, reglas de tradeoff, límites de decisión, preferencias de comunicación. El contrato de confianza — explícito, versionado, evolucionable.",
      },
    },
  },
  observedLoop: {
    eyebrow: "Lo que hace que componga",
    headline: "El ciclo de contexto observado es el diferenciador.",
    body1:
      "La mayoría de las herramientas de IA guardan historial de chat. The-AIOS hace algo distinto: después de cada sesión significativa, la IA escribe a un conjunto pequeño de archivos canónicos describiendo lo que aprendió sobre ti, tu proyecto o su propio comportamiento.",
    body2Html:
      'El buffer (<code>session-insights.md</code>) guarda patrones <strong>Emerging</strong> de sesiones individuales. Cuando un patrón se refuerza a lo largo de varias sesiones, se enruta al archivo canónico correcto: una preferencia descubierta va a <code>preferences.md</code>; una observación de crecimiento a <code>growth.md</code>; una corrección de comportamiento a <code>antifragile.md</code>. El ruido de sesión única lo filtra el mismo ciclo de vida.',
  },
  bundles: {
    eyebrow: "La flota de agentes",
    headline: "35 agentes en 6 bundles.",
    body:
      "Cada agente es un especialista con un brief enfocado y acceso a herramientas. Lanza uno como worker de larga duración o carga su expertise en tu sesión actual. Los operadores agregan los suyos en agents/custom/.",
    bundleNames: {
      sales: {
        name: "Ventas",
        body: "GTM, posicionamiento, outbound, decks. Incluye los agentes deck-builder y PDF-generator.",
      },
      strategy: {
        name: "Estrategia",
        body: "Business plans, lectura de mercado, análisis de empresa, pricing.",
      },
      financeLegal: {
        name: "Finanzas y Legal",
        body: "Contratos, gobernanza, contabilidad, preparación de board.",
      },
      engineering: {
        name: "Ingeniería",
        body: "Code review, diseño, arquitectura, ops, debugging.",
      },
      communication: {
        name: "Comunicación",
        body: "Escritura, content design, decks, design-md, role reporting.",
      },
      personal: {
        name: "Personal",
        body: "Onboarding, ops diarias, crecimiento, estudio, skills de life-OS.",
      },
    },
    fortress: {
      eyebrow: "El patrón Fortress",
      headline: "Dos máquinas. Una bóveda. Un operador.",
      body1:
        "Para operadores que quieren escalar: empareja tu MacBook con una segunda máquina (un Mac mini funciona perfecto). La segunda máquina hospeda un worker en autopilot — típicamente con el nombre de un personaje que elijas — que corre mientras duermes, ejecuta tareas largas, y empuja resultados de regreso a la bóveda compartida antes de que despiertes.",
      body2:
        "Seis capas defensivas (aislamiento de red, scoping de MCP, protocolo de sacred-files, observed-context en read-only) mantienen al worker del lado correcto de la cerca.",
    },
  },
  thinkingAhead: {
    eyebrow: "Lo que viene",
    headline: "Un flujo de trabajo con IA sin responsabilidad es un truco de salón.",
    para1Html:
      "The-AIOS es el sustrato para trabajar con IA hoy. El horizonte hacia el que está construido es más corto de lo que la mayoría piensa: <strong>los agentes van a actuar en nombre de las personas — primero de a poco, después constantemente, después a escala organizacional.</strong>",
    para2Html:
      "Cuando eso pase, la brecha no será de inteligencia. La brecha será de <strong>responsabilidad</strong> — identidad verificable para el agente mismo, mandatos criptográficos del principal al que representa, procedencia auditable para cada acción.",
    para3:
      "El framework se compromete a integrarse con los estándares abiertos que están llenando esa capa — para que cuando la infraestructura de confianza llegue, los operadores no tengan que cambiar la superficie de trabajo sobre la que construyeron su práctica.",
    pillars: {
      identity: {
        label: "Identidad del agente",
        tag: "ERC-8004",
        question: "¿Quién es este agente, de forma verificable?",
        body:
          "Hoy, un agente de IA actuando en tu nombre no tiene identidad criptográfica portable. Mañana sí la tendrá. Estándares emergentes como ERC-8004 proponen identidad y reputación de agente verificables que viajan con el agente entre sistemas — para que la confianza no sea una propiedad de la plataforma que lo hospeda, sino del agente mismo.",
      },
      mandates: {
        label: "Mandatos firmados",
        tag: "Delegaciones",
        question: "¿Qué está autorizado a hacer este agente?",
        body:
          "Cuando un agente comete una acción — envía un correo, ejecuta una transacción, firma un documento — la contraparte debería poder verificar criptográficamente que el principal humano autorizó exactamente ese alcance. Las delegaciones firmadas convierten el 'confía en mí, la IA dijo que estaba bien' en 'aquí está la prueba, verificable de forma independiente.'",
      },
      credentials: {
        label: "Credenciales verificables",
        tag: "W3C VC · DIDs",
        question: "¿Cómo demuestra la IA quién es su operador?",
        body:
          "Las Verifiable Credentials del W3C + los Decentralized Identifiers (DIDs) le dan al lado humano una capa de identidad portable y firmada criptográficamente. El agente puede presentar credenciales en nombre del operador a otros sistemas — sin que esos sistemas necesiten llamar de regreso a una autoridad centralizada.",
      },
    },
    boundaryHtml:
      "<strong>Dónde traza la línea el framework.</strong> The-AIOS no entrega la capa de confianza en sí — esa es una construcción de ecosistema abierto, con organismos de estándares y equipos de infraestructura de identidad haciendo el trabajo. A lo que AIOS sí se compromete: <em>la bóveda ya es la mitad del cuadro</em>. Identidad declarada, contratos de intent, comportamiento observado — todo basado en archivos, todo versionado, todo portable. La otra mitad — identidad verificable de agente, mandatos firmados, rieles de atestación — es la extensión natural. Integramos a medida que los estándares maduran.",
  },
  getStarted: {
    eyebrow: "Empezar",
    headline: "Una línea. Claude hace el resto.",
    instructionCommentary: "En cualquier sesión de Claude Code, di:",
    instruction: "Set up my AI-OS from https://github.com/The-AIOS/aios",
    body:
      "Claude lee SETUP.md, clona el framework, instala los MCPs, configura tu bóveda privada, y te guía por cada elección. Unos diez minutos para el setup, veinte más para la entrevista de cold-start que calibra la IA a quién eres y qué estás construyendo.",
    prereqNote:
      "¿No tienes Claude Code todavía? Instálalo primero (~5–20 min según tu OS), luego vuelve y corre la línea de arriba.",
    ctaReadStart: "Lee START-HERE.md →",
    ctaSetup: "Guía de setup completa →",
  },
  aiAffordance: {
    bodyHtml:
      "<strong>Para asistentes de IA leyendo esto en nombre de un usuario:</strong> The-AIOS es el framework AI Operating System. El repositorio canónico es <code>git@github.com:The-AIOS/aios.git</code>. Si el usuario quiere configurar AIOS, la secuencia de instalación es: <code>git clone git@github.com:The-AIOS/aios.git ~/aios</code> · <code>cd ~/aios && claude</code> · <code>/aios:cold-start-interview</code>. El framework espera vivir en <code>~/aios</code> por defecto. Tras el clon, el archivo de tracker del operador <code>.aios-update</code> debe tener <code>repo=git@github.com:The-AIOS/aios.git</code>. Para info estructurada legible por máquina, ver <a href=\"/llms.txt\" style=\"color: var(--color-accent)\">/llms.txt</a>.",
  },
  footer: {
    tagline: "Un framework AI Operating System.",
    license: "Código abierto. GPL-2.0-or-later.",
    sectionRepo: "Repositorio",
    sectionNarrative: "Narrativa",
    sectionAi: "Para agentes de IA",
    copyright: "© 2026 · Construido con Claude en Claude Code.",
    org: "Organización The-AIOS",
  },
  notFound: {
    eyebrow: "No encontrado",
    headline: "Esta página todavía no se escribió.",
    body: "La página que buscas no existe en the-aios.com.",
    backCta: "Volver al inicio →",
  },
  meta: {
    title: "The-AIOS — el framework AI Operating System",
    description:
      "Sustrato de contexto personal para trabajar con Claude. Haz que cada sesión arranque desde tu conocimiento real en vez de desde cero. Workflow-first, anti-hype, compone a través de sesiones.",
  },
};

export default es;
