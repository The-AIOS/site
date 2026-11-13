import type { DICopy } from "./types";

/* Spanish (Mexico / neutral LATAM) copy for The Disruption Index.
   Self-contained: every company, market, changelog line and opportunity is
   translated here, keyed by id. English source: en.tsx + src/data/exemplars.ts
   + src/data/opportunities.ts. */

export const es: DICopy = {
  dateLocale: "es-MX",
  meta: {
    title: "The Disruption Index — industrias ordenadas por la velocidad de la disrupción de la IA",
    description:
      "Un índice vivo y navegable de industrias según qué tan rápido las está transformando la IA, con las empresas reales que desaparecieron, se reinventaron o surfearon la ola. Hecho para que la urgencia de la IA sea innegable.",
    ogTitle: "The Disruption Index",
  },
  nav: { back: "← Volver al inicio" },

  hero: {
    eyebrow: "La velocidad de la disrupción de la IA · índice vivo · última actualización",
    h1: <>Algunas industrias ya perdieron.{" "}<span className="accent">La tuya está en este mapa.</span></>,
    lede: (
      <>
        Un índice navegable de industrias según{" "}
        <strong style={{ color: "var(--color-ink)" }}>qué tan rápido las está transformando la IA</strong>, con las
        empresas reales que desaparecieron, se reinventaron o surfearon la ola. Filtra por tu industria. Encuentra tu
        caso más parecido. Y luego pregúntate cuánto tiempo te queda.
      </>
    ),
    stats: { exemplars: "casos verificados", industries: "industrias", gone: "ya desaparecidas", insulated: "realmente aisladas" },
  },
  changelogLabel: "Historial de cambios del índice",
  changelog: {
    "2026-11-13":
      "4 añadidas (Fiverr, CI&T, Fin, pilotos de aerolínea) · 2 correcciones (fuentes del análisis de Wall Street; RELX y Wolters Kluwer ahora marcadas como reinventándose) · resultados de Q3 incorporados · precios al 12 de nov. · todas las entradas reverificadas",
    "2026-10-30":
      "15 añadidas · 4 movidas (Getty y Shutterstock a desaparecidas; Coursera y los abogados júnior a reloj corriendo) · 2 retiradas (Convoy, HeyMilo) · todas las entradas reverificadas y con fuentes",
    "2026-06": "Primera edición: 31 casos en 14 industrias",
  },
  footer: {
    lead: "La precisión es el punto.",
    body: (
      <>
        Cada entrada se investigó contra reportes públicos, enlaza sus fuentes y lleva una calificación de confianza.
        Cuando una cifra es lo que afirma la propia empresa, una estimación o parte de una historia con varias causas,
        la nota de la tarjeta lo dice con claridad. Las historias de disrupción son complicadas; exagerarlas costaría
        lo único que hace que la urgencia llegue: <em>que sea verdad</em>.
      </>
    ),
    kept: "Curado, no colaborativo. Lo mantienen al día los agentes de investigación de AIOS, que son en sí mismos un ejemplo de la velocidad que describe.",
    first: "Primera investigación en junio de 2026; todas las entradas reverificadas el 13 de noviembre de 2026.",
  },

  speed: {
    gone: {
      label: "Ya desaparecidas",
      short: "Desaparecidas",
      blurb: "El foso defensivo se derrumbó. El negocio que cobraba por él está en caída libre o ya murió.",
    },
    "on-the-clock": {
      label: "Con el reloj corriendo",
      short: "Reloj corriendo",
      blurb: "La disrupción ya está a la vista. La presión es real y el desenlace no está decidido.",
    },
    reinventing: {
      label: "Reinventándose ahora",
      short: "Reinventándose",
      blurb: "Disrumpidas, y en movimiento. Una empresa establecida que se transforma, o una nativa de IA que redefinió la categoría.",
    },
    insulated: {
      label: "Aisladas por ahora",
      short: "Aisladas",
      blurb: "Protegidas, por ahora, por licencias profesionales, responsabilidad legal o regulación. Fíjate qué pocas entradas viven aquí.",
    },
  },
  signal: {
    revenue: { label: "Ingresos", title: "La velocidad se basa en ingresos ganados o perdidos." },
    jobs: { label: "Empleos", title: "La velocidad se basa en empleos recortados, no contratados o reasignados." },
    market: { label: "Miedo del mercado", title: "La velocidad se basa en una revaluación del mercado que todavía no aparece en los ingresos." },
  },
  region: { US: "EE. UU.", LATAM: "LATAM", Europe: "Europa", Asia: "Asia", Global: "Global" },
  confidence: {
    high: { label: "alta", title: "Confianza alta: bien corroborada en fuentes públicas." },
    medium: {
      label: "media",
      title: "Confianza media: algunas cifras las reporta la empresa, son estimaciones o forman parte de una historia con varias causas. Ver nota.",
    },
    low: { label: "baja", title: "Confianza baja: solo indicativa; trata los detalles como no verificados." },
  },

  industries: {
    Education: "Educación",
    "Media & Publishing": "Medios y editoriales",
    Translation: "Traducción",
    "Stock Photography": "Fotografía de stock",
    "Software & IT Services": "Software y servicios de TI",
    "Design & Creative": "Diseño y creatividad",
    "Customer Support": "Atención al cliente",
    Legal: "Legal",
    Finance: "Finanzas",
    Recruiting: "Reclutamiento",
    Marketing: "Marketing",
    "Logistics & Freight": "Logística y transporte de carga",
    Transcription: "Transcripción",
    Sales: "Ventas",
    Consulting: "Consultoría",
    "Research & Advisory": "Investigación y asesoría",
    "Enterprise Software": "Software empresarial",
    Healthcare: "Salud",
    Music: "Música",
    Travel: "Viajes",
    "Freelance Marketplaces": "Marketplaces de freelancers",
    Aviation: "Aviación",
  },

  exemplars: {
    Chegg: {
      story:
        "Un chatbot gratuito acabó con un negocio de ayuda con tareas que llegó a valer ~US$14 mil millones en su mejor momento, y el CEO tuvo que admitirlo en una llamada de resultados.",
      changed:
        "El foso de Chegg era una biblioteca de pago con soluciones de libros de texto y preguntas y respuestas a demanda. ChatGPT respondía las mismas preguntas gratis, al instante y sin suscripción: el valor por el que Chegg cobraba se volvió una mercancía de la noche a la mañana.",
      date: "Desde mayo de 2023 (la acción cayó ~48% en un día, el 2 de mayo de 2023)",
      note:
        "Se cita a menudo como la primera empresa pública que culpó formalmente a la IA por daños a sus ingresos. Su propio “CheggMate”, impulsado por OpenAI, no logró frenar la pérdida. En oct. de 2025 recortó ~45% de su personal citando las “nuevas realidades de la IA”. En julio de 2026 recibió un aviso del NYSE por cotizar por debajo de US$1. En Q3 2026 los ingresos cayeron 40% año contra año, a US$46.5 millones; ya pagó su deuda y se está reposicionando alrededor de una plataforma de empleabilidad. Su CEO: “La IA golpeó duro nuestro negocio”.",
    },
    Duolingo: {
      story:
        "La app para aprender idiomas se volvió “AI-first” y empezó a generar contenido de cursos que antes requería contratistas humanos.",
      changed:
        "Oraciones, traducciones y revisión de errores que antes necesitaban contratistas humanos ahora se pueden generar y verificar con LLMs, así que Duolingo reconstruyó su producción de contenido alrededor de la IA y recortó puestos de contratistas.",
      date: "Finales de 2023–2024",
      note:
        "Recortó ~10% de su fuerza de trabajo contratista (traductores y redactores, los más afectados) a partir de finales de 2023; después el CEO emitió un memo “AI-first”. Una empresa que se reinventa y que también desplazó trabajadores: considera ambas lecturas. Para Q3 2026 los usuarios seguían creciendo (usuarios activos diarios +29%, a 64.9M) y estaba extendiendo su función AI Video Call a todos los suscriptores del nivel más alto, mientras la acción había caído con fuerza por el temor a que los tutores de IA de propósito general compitan directamente.",
    },
    Coursera: {
      story:
        "La plataforma de cursos convirtió “aprende IA” en un motor de crecimiento, y luego se fusionó con su mayor rival cuando sus ingresos comparables empezaron a encogerse.",
      changed:
        "La demanda se movió hacia aprender a usar la propia IA. Coursera apostó por ello con cientos de nuevos cursos de IA generativa y una capa de coaching con IA, haciendo de la IA un viento a favor y no una amenaza.",
      date: "2023–2024",
      note:
        "Reportó ~3M de nuevas inscripciones en IA generativa en 2024, con más de 450 nuevos cursos de IA generativa de sus socios. Se fusionó con Udemy (cerró en mayo de 2026); para Q3 2026 los ingresos combinados bajaron ~3% en términos comparables, con una demanda de consumidores más débil. Se movió desde “reinventándose” en oct. de 2026: el viento a favor de los cursos de IA es real, pero la consolidación parece tanto defensa como reinvención.",
    },
    BuzzFeed: {
      story:
        "El rey del contenido viral apostó su futuro a artículos escritos por IA y, en cambio, escribió su propio obituario.",
      changed:
        "El contenido genérico de listas y quizzes perdió su escasez en cuanto la IA pudo generarlo gratis. BuzzFeed cerró su división de noticias ganadora del Pulitzer, pivotó a contenido con IA y siguió perdiendo audiencia y anunciantes.",
      date: "2023 (giro a la IA en enero de 2023; BuzzFeed News cerró en abril de 2023)",
      note:
        "Reveló una “duda sustancial” sobre su capacidad de seguir como negocio en marcha (2025, repetida en 2026); en mayo de 2026 Allen Family Digital compró ~52% del control por US$120 millones, seguido de un recorte de ~35% de la plantilla. Los ingresos de Q3 2026 cayeron 44% año contra año, a US$26 millones, y la empresa aplazó su perspectiva financiera. La caída tiene varias causas (el colapso de la publicidad digital): la IA fue la apuesta fallida para el rescate, no la única causa de su muerte.",
    },
    DeepL: {
      story:
        "Una startup de traducción nativa de IA tradujo mejor que las grandes tecnológicas y se convirtió en la herramienta por defecto de la industria de localización.",
      changed:
        "DeepL logró una calidad de traducción automática neuronal que los profesionales calificaron por encima de Google Translate y la vendió como producto B2B, quedándose con el mercado de traducción empresarial que antes tenían los incumbentes y las agencias humanas.",
      date: "2023–2024 (levantó US$300 millones con una valuación de ~US$2 mil millones, mayo de 2024)",
      note:
        "Reportó ~US$185 millones de ARR en 2024, frente a ~US$141 millones en 2023. Bloomberg reportó que exploraba una salida a bolsa en EE. UU. con una valuación de hasta ~US$5 mil millones (oct. de 2025). En mayo de 2026 anunció recortes de unos 250 empleos (~25% del personal), con el argumento de que la IA exige “equipos más pequeños con mayor impacto”; en junio de 2026 compró Mixhalo para entrar a la traducción de voz en eventos en vivo. Incluso el disruptor se está reorganizando alrededor de la IA.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Human translation & localization workforce": {
      story:
        "Los traductores independientes vieron desplomarse sus tarifas y su volumen de trabajo cuando los clientes se pasaron a la IA con una ligera edición humana.",
      changed:
        "La IA generativa hizo que una traducción “suficientemente buena” fuera casi gratis, así que agencias y estudios de localización bajaron tarifas, pasaron a flujos de IA más posedición y redujeron personal, apretando el ingreso de los traductores profesionales.",
      date: "2023–2025",
      note:
        "Una encuesta de 2024 de la Society of Authors del Reino Unido encontró que más de un tercio de los traductores había perdido trabajo por la IA generativa. Las cifras más grandes que circulan (p. ej., “caída de 80% en ingresos”) son anecdóticas: tómalas como indicativas.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "Getty Images": {
      story:
        "El gigante de la fotografía de stock peleó contra los generadores de imágenes con IA en tribunales y lanzó su propia herramienta “comercialmente segura”, y aun así sus accionistas quedaron borrados en la quiebra.",
      changed:
        "Los modelos de texto a imagen ahora generan visuales a demanda que sustituyen a las fotos de stock con licencia. Getty demandó a Stability AI por los datos de entrenamiento y lanzó su propia herramienta generativa con licencia para defender la franquicia.",
      date: "Demanda presentada a inicios de 2023; fallo en el Reino Unido en nov. de 2025; Chapter 11 en oct. de 2026",
      note:
        "Getty alegó la extracción no autorizada de ~12M de imágenes. En el fallo del High Court del Reino Unido (nov. de 2025) perdió en gran medida en derechos de autor y solo ganó un punto menor de marca. En 2026 su fusión con Shutterstock se vino abajo y se acogió a un Chapter 11 preacordado (oct. de 2026) que borra a los accionistas públicos. El negocio continúa con nuevos dueños (entidades de la familia Getty y Koch Equity Development) tras recortar más de US$500 millones de deuda. Los ingresos bajaron solo de forma moderada, así que el colapso lo provocó la deuda, con la IA como presión, no como única causa.",
    },
    Shutterstock: {
      story:
        "Vendió su biblioteca como datos de entrenamiento para IA e integró la generación en su plataforma; luego los ingresos por datos se desplomaron, la fusión que debía salvarla fracasó y el dividendo se suspendió.",
      changed:
        "Convirtió su archivo de imágenes en una nueva fuente de ingresos al licenciarlo a laboratorios de IA para entrenar modelos, e integró generación de texto a imagen para sus clientes, con un fondo para compensar a sus colaboradores.",
      date: "2022–2023 (alianza con OpenAI ampliada en 2023); revisión estratégica en 2026",
      note:
        "El licenciamiento de IA y datos llegó a sumar unos US$100 millones o más al año. En Q3 2026 ese segmento de datos cayó 76% año contra año, los ingresos totales cayeron 33% y los deterioros de crédito mercantil sumaron US$377 millones en lo que va del año. La fusión con Getty se vino abajo en julio, el dividendo se suspendió para priorizar la reducción de deuda y el fundador volvió como CEO en octubre. Sigue operando: “desaparecida” describe el foso, no a la empresa.",
    },
    "Cursor (Anysphere)": {
      story:
        "Un editor de código nativo de IA pasó de cero a más de US$4 mil millones en ingresos anualizados reportados en unos tres años, y luego se vendió por US$60 mil millones.",
      changed:
        "En lugar de un autocompletado pegado a un IDE, Cursor hizo del LLM la interfaz principal para escribir y editar código: una nueva categoría que los incumbentes tuvieron que perseguir.",
      date: "Punto de inflexión ~enero de 2025; adquirida por SpaceX en agosto de 2026",
      note:
        "Las cifras de ingresos vienen de reportes de prensa, no de estados financieros auditados: tómalas como aproximadas. Adquirida por SpaceX en una operación de ~US$60 mil millones totalmente en acciones (anunciada en junio, cerrada en agosto de 2026). La afirmación de que es “la nativa de IA que reinventó la categoría” está bien sustentada.",
      unplotted: "Privada hasta que SpaceX la compró en 2026: sin valor de mercado en la fecha base.",
    },
    Globant: {
      story:
        "Una empresa insignia de servicios de TI en América Latina perdió la mayor parte de su valor de mercado cuando sus clientes empezaron a preguntarse si todavía necesitaban personal facturable.",
      changed:
        "El modelo de aumento de personal cobra por horas y por número de personas; las herramientas de programación con IA comprimen esas horas. La empresa corre para cambiar su esquema de precios hacia “Pods” de IA y suscripciones antes de que el modelo anterior se erosione.",
      date: "Máximo de la acción ~feb. de 2025; mínimos de una década a mediados de 2026; reposicionamiento en curso",
      note:
        "La caída de la acción es verificable; el giro hacia precios basados en IA es real pero no está probado. Demandas de inversionistas también alegan problemas más amplios de demanda en LATAM, así que la IA es un factor importante pero no el único. En agosto de 2026 recortó su guía de ingresos para 2026; los AI Pods eran ~2% de los ingresos (cifra de la empresa).",
    },
    "Indian IT outsourcing (TCS, Infosys et al.)": {
      story:
        "El enorme motor de outsourcing de la India empezó a perder decenas de miles de empleos a medida que la IA asumía la programación, las pruebas y el soporte de nivel inicial para los que fue creado.",
      changed:
        "El modelo vendía escala de mano de obra barata para trabajo rutinario de desarrollo, pruebas y soporte; ahora la IA hace buena parte de eso, así que la ecuación “más personas = más ingresos” se está rompiendo.",
      date: "2024–2026 (TCS anunció ~12,000 recortes en 2025; FY26 trajo la primera caída neta de plantilla del sector en unos 20 años)",
      note:
        "Las cifras de despidos vienen de prensa y analistas, y se atribuyen en parte a la IA y en parte a presiones macroeconómicas y de eficiencia: varias causas. Se trata como un caso del sector, no de una sola empresa. La plantilla se recuperó en parte en TCS e Infosys a mediados de 2026, así que la ruptura es real pero no es una línea recta.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    Midjourney: {
      story:
        "Un equipo pequeño y autofinanciado convirtió instrucciones de texto en imágenes de calidad profesional y construyó un negocio de nueve cifras sin inversionistas externos.",
      changed:
        "Las imágenes comerciales a la medida requerían un ilustrador o fotógrafo experto y horas de trabajo. Midjourney lo redujo a una instrucción y unos segundos, redefiniendo la parte baja del mercado del arte comercial.",
      date: "Lanzado en julio de 2022; escaló rápidamente en 2023–2025",
      note:
        "La fecha de fundación y el “sin capital de riesgo” están bien establecidos. Las cifras de ingresos son estimaciones de terceros, no estados financieros divulgados: tómalas como aproximadas.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Adobe (Firefly / Creative Cloud)": {
      story:
        "La dueña de la categoría lanzó rápido su propia IA generativa y aun así vio su acción recortarse con fuerza, porque el mercado dudó de que la IA protegiera su foso de suscripciones.",
      changed:
        "El foso de Adobe era un casi monopolio de las herramientas creativas profesionales. Integró Firefly en Photoshop e Illustrator para defenderlo, y en nov. de 2026 convirtió Firefly en un estudio impulsado por agentes que también ofrece modelos de IA rivales. Pero la generación convertida en mercancía y los rivales nativos de IA (Figma, Canva) pusieron en duda sus precios premium.",
      date: "Firefly lanzado en marzo de 2023; la acción cayó ~40% hasta un mínimo a mediados de 2026 y se recuperó en parte para oct. de 2026",
      note:
        "La adopción y la fecha de lanzamiento de Firefly son sólidas. La caída de la acción es verificable; atribuirla específicamente al miedo a la IA es la narrativa de consenso, pero no el único factor. Se defiende con fuerza: “reloj corriendo”, no “desaparecida”. Ingresos récord y un ARR de IA que crece rápido (según la empresa, Q3 FY26) no han restaurado su múltiplo.",
    },
    "Klarna AI Assistant (with OpenAI)": {
      story:
        "Klarna dijo que un solo asistente de IA hizo el trabajo de 700 agentes en su primer mes, y luego admitió que había recortado demasiado el soporte humano y empezó a recontratar.",
      changed:
        "El trabajo de primer nivel de un centro de contacto (reembolsos, estado de pedidos, cancelaciones) está en gran parte guionizado y es automatizable; la IA atendió ~dos tercios de los chats más rápido que los humanos, pero sus límites de calidad en casos atípicos obligaron a reequilibrar hacia un soporte humano premium.",
      date: "Lanzado en feb. de 2024; el CEO reconoció el recorte excesivo ~mayo de 2025",
      note:
        "Las cifras de “700 agentes” y “US$40 millones” son afirmaciones de marketing de la propia Klarna (los US$40 millones fueron sobre todo contrataciones evitadas, no despidos). La marcha atrás de 2025 es la parte creíble: este NO es un caso limpio de “la IA reemplazó a todos”. Para nov. de 2025 Klarna afirmaba “853 agentes” y US$60 millones ahorrados (también cifras propias), mientras sus costos de atención al cliente seguían subiendo año contra año.",
      unplotted: "Klarna salió a bolsa en sept. de 2025: sin valor de mercado en la fecha base de 2022.",
    },
    Sierra: {
      story:
        "Dos exejecutivos de grandes tecnológicas crearon una empresa de agentes de IA para atención al cliente que superó los US$150 millones de ARR en unos dos años y una valuación de US$15.8 mil millones.",
      changed:
        "Los agentes de IA ya resuelven los problemas de los clientes de principio a fin (reembolsos, acciones en la cuenta), así que las empresas compran resultados en lugar de asientos en centros de contacto con personal humano: una nueva categoría nativa de IA que desafía la vieja pila de CX y BPO.",
      date: "Fundada en feb. de 2024; ~US$100 millones de ARR en nov. de 2025; valuación de US$15.8 mil millones en mayo de 2026",
      note:
        "El ARR y la valuación vienen de la prensa, no de cifras auditadas: aproximados. Decagon es una nativa de IA comparable en el mismo espacio.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Harvey AI": {
      story:
        "Una startup de dos años se convirtió en la capa de IA por defecto de los despachos de abogados de élite antes de que los incumbentes pudieran lanzar un competidor creíble.",
      changed:
        "Los modelos tipo GPT, junto con un modelo de gestión del cambio con exabogados trabajando dentro de los clientes, permitieron a Harvey integrar investigación, redacción y revisión legal en los flujos de trabajo de los grandes despachos; Harvey dice que ~80% del Am Law 100 ya lo usa, y la categoría se formó a su alrededor.",
      date: "Lanzamiento en 2023; punto de inflexión en 2025–2026 (valuación de US$15.5 mil millones en sept. de 2026)",
      note:
        "Las cifras de valuación y ARR las reporta la empresa y suben rápido; trata cada cifra como una fotografía a esa fecha.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Thomson Reuters (CoCounsel / Casetext)": {
      story:
        "El incumbente de la investigación legal compró su entrada a la era de la IA por US$650 millones antes que dejarse disrumpir por una startup basada en GPT-4.",
      changed:
        "CoCounsel de Casetext, un asistente impulsado por GPT-4 para investigación, revisión de documentos y preparación de deposiciones, demostró que la IA generativa podía comprimir horas de trabajo de un asociado a minutos. Thomson Reuters lo adquirió para defender su franquicia Westlaw.",
      date: "Adquisición anunciada en junio de 2023; CoCounsel Legal agéntico lanzado en agosto de 2026",
      note:
        "En agosto de 2026 lanzó un CoCounsel Legal agéntico que, según la empresa, usan “un millón de profesionales”. En Q3 2026 los ingresos de su segmento Legal Professionals crecieron 9%, algo que atribuye en parte a CoCounsel Legal, y elevó su perspectiva para el año completo (nov. de 2026). Las cifras de uso y de crecimiento las reporta la empresa. Sus acciones cayeron ~16% el 3 de febrero de 2026, cuando un laboratorio de IA lanzó un plug-in legal para su asistente: la reinvención es real, y también la duda del mercado.",
    },
    "Law-firm junior associates & paralegals": {
      story:
        "La licencia profesional todavía protege al abogado que firma, pero los despachos están contratando menos de los júnior que antes hacían el trabajo pesado.",
      changed:
        "La revisión de documentos, los primeros borradores de contratos y la investigación se automatizan cada vez más, pero las reglas contra el ejercicio no autorizado, la responsabilidad por mala práctica y la ABA Formal Opinion 512 (2024) mantienen a un humano con licencia en el proceso. El cambio visible está en la contratación: el ingreso de abogados de primer año en los grandes despachos cayó 7.5% en 2025, y dos tercios de los despachos grandes encuestados esperan menos abogados de primer año para 2028.",
      date: "2024–2026 (ABA Op. 512 emitida en 2024; contratación de primer año a la baja desde el máximo de 2024)",
      note:
        "Se movió desde “aisladas” en oct. de 2026: la capa del juicio con licencia sigue en pie, pero la cantera de formación se está erosionando a la vista. Datos de contratación de NALP y de una encuesta de Citi a 57 despachos. Hay evidencia en contra: algunos despachos están ampliando sus programas de verano, las horas facturables de la industria todavía subían a inicios de 2026 y, a nov. de 2026, no se había reportado ningún despacho que recortara abogados de primer año específicamente por la IA.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "JPMorgan COiN (Contract Intelligence)": {
      story:
        "Una herramienta interna de un banco hizo en segundos la revisión de contratos de crédito que consumía 360,000 horas al año de abogados y oficiales de crédito.",
      changed:
        "El aprendizaje automático extrajo ~150 atributos de 12,000 contratos de crédito comercial en segundos y redujo fuertemente los errores de interpretación, demostrando que el trabajo financiero central con mucha documentación podía automatizarse internamente años antes de la IA generativa.",
      date: "Implementada a mediados de 2016; ampliamente reportada en feb. de 2017",
      note:
        "Un caso temprano, anterior a los LLMs. La cifra de 360,000 horas es del propio JPMorgan y se cita a menudo. A mediados de 2026 el banco dijo que la IA le había permitido recortar fuertemente empleos en algunos equipos específicos, con la mayor parte del personal reasignado (declaración propia).",
      unplotted: "Un producto o unidad dentro de una empresa listada más grande.",
    },
    "Wall Street sell-side equity research": {
      story:
        "Las mesas de análisis se están adelgazando: cientos de analistas de nivel medio se han ido desde 2023 mientras la IA, la inversión pasiva y la separación de costos apretaban el negocio.",
      changed:
        "La IA ya redacta los modelos, resúmenes y análisis preliminares que antes producían los analistas júnior; sumado a la separación de costos de MiFID II y al giro hacia la inversión pasiva, el caso económico para tener grandes equipos de análisis se derrumbó.",
      date: "Tendencia en formación en 2023–2026; pronóstico de empleos bancarios de Bloomberg Intelligence, enero de 2025",
      note:
        "Substantive Research contabiliza 736 analistas de nivel medio que salieron del mercado entre 2023 y 2026, y dice que 70% de los gestores de activos que encuestó espera que el análisis rutinario de “mantenimiento” pase a generarse con IA. Por separado, Bloomberg Intelligence proyectó (enero de 2025) que los bancos globales podrían recortar hasta ~200,000 empleos en 3–5 años, sobre todo en back office y middle office, no en análisis. La IA es una de varias fuerzas que se suman, no la única causa.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "Big Four audit & tax (Deloitte, EY, KPMG, PwC)": {
      story:
        "Las firmas cuya pirámide funciona con ejércitos de revisores júnior corren para automatizar justo el trabajo que hacen esos júnior.",
      changed:
        "Las plataformas agénticas de auditoría e impuestos ya hacen la revisión preliminar de documentos, la recolección de datos y el cumplimiento fiscal, amenazando la economía de la pirámide de apalancamiento; pero la responsabilidad legal, la regulación y la firma de la auditoría mantienen a humanos como responsables. Las firmas han empezado a hablar de dejar de cobrar la auditoría por hora.",
      date: "Lanzamientos de plataformas en 2024–2026 (auditoría agéntica a escala en 2026)",
      note:
        "La reinvención está activa y es autoimpuesta; el impacto neto en plantilla y en la economía aún no se resuelve, por eso está con el reloj corriendo y no desaparecida.",
      unplotted: "Sociedades privadas: sin valor de mercado público.",
    },
    "H&R Block": {
      story:
        "La autodeclaración gratuita o barata asistida por IA va recortando en silencio, temporada tras temporada, el mercado potencial de la preparación de impuestos humana y de pago.",
      changed:
        "Las declaraciones hechas por los propios contribuyentes van al alza mientras las preparadas por profesionales se estancan; los chatbots de IA en el software de autoservicio reducen la necesidad percibida de pagarle a un preparador y erosionan el negocio central, aunque esos mismos chatbots han sido criticados por dar consejos inexactos.",
      date: "2023–2026",
      note:
        "La IA acelera un giro de largo plazo hacia el autoservicio, más que ser su única causa. En FY2026 los ingresos aún crecieron ~5% con un volumen asistido estable, mientras la acción cayó ~40% en el año hasta feb. de 2026.",
    },
    "LinkedIn Hiring Assistant": {
      story:
        "La plataforma en la que viven los reclutadores lanzó un agente de IA que automatiza la búsqueda, la clasificación y el contacto de candidatos que definían el trabajo del reclutador.",
      changed:
        "Hiring Assistant redacta descripciones de puestos, identifica y clasifica candidatos, gestiona preguntas y respuestas por InMail y hace un primer filtro de aspirantes; LinkedIn estima que reduce ~70% el tiempo administrativo del reclutador, lo que pone la búsqueda rutinaria bajo presión del propio incumbente.",
      date: "Lanzamiento limitado en oct. de 2024; disponible globalmente en inglés en sept. de 2025; la contratación agéntica superó una tasa anualizada de US$450 millones en abril de 2026; Hiring Assistant 2 en despliegue desde nov. de 2026",
      note:
        "La cifra de 70% de reducción administrativa es una estimación de la propia LinkedIn, igual que su reporte de que los productos de contratación agéntica superaron una tasa anualizada de ingresos de US$450 millones (abril de 2026). LinkedIn también dice que más de 20,000 empresas los usan (sept. de 2026). El incumbente monetiza al agente; la presión cae sobre los reclutadores.",
      unplotted: "Un producto o unidad dentro de una empresa listada más grande.",
    },
    "Jasper AI": {
      story:
        "La consentida del copy de marketing levantó US$125 millones con una valuación de US$1.5 mil millones y luego vio cómo un ChatGPT gratuito convertía su producto central en mercancía casi de la noche a la mañana.",
      changed:
        "Jasper era una capa de experiencia de usuario sobre GPT-3; en cuanto OpenAI lanzó ChatGPT (gratis) y la API directamente, su valor agregado se derrumbó y Jasper tuvo que pivotar de la generación de textos a flujos de marketing empresarial y controles de marca.",
      date: "Nov. de 2022 (lanzamiento de ChatGPT) → mediados/finales de 2023 (despidos + recorte interno de ~20% en la valuación)",
      note:
        "Sobrevivió reposicionándose hacia equipos empresariales; no está muerta, pero el foso original desapareció.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "AI/SEO content farms (Google's Helpful Content Update)": {
      story:
        "Los sitios que escalaron contenido delgado hecho con IA para cosechar tráfico de Google quedaron borrados cuando el algoritmo de Google apuntó específicamente al contenido poco útil hecho para buscadores.",
      changed:
        "La IA hizo casi gratis la producción masiva de contenido e inundó las búsquedas. Google respondió con la Helpful Content Update (2022–2023, integrada al ranking central en marzo de 2024), y muchos sitios cargados de IA perdieron 90% o más de su tráfico orgánico.",
      date: "Dic. de 2022 → mar. de 2024",
      note:
        "La misma IA que abarató el contenido detonó la respuesta de la plataforma que destruyó el arbitraje. Se mantiene general en lugar de nombrar sitios afectados en particular.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "Uber Freight (Insights AI / agent network)": {
      story:
        "El intermediario humano del corretaje de carga, basado en relaciones, está siendo exprimido a medida que los incumbentes despliegan flotas de agentes de IA para cotizar rutas, evaluar transportistas y reservar cargas.",
      changed:
        "Uber Freight lanzó una red de más de 30 agentes de IA basada en LLMs que se encargan de precios, calificación de confiabilidad de transportistas y reservas: el trabajo cognitivo rutinario que justificaba los márgenes de los corredores tradicionales.",
      date: "2024–2025 (despliegue de agentes)",
      note:
        "La disrupción está visiblemente en marcha pero sin resolverse; Uber Freight creció 35% en reservas brutas en Q3 2026 pero seguía en pérdidas, así que la economía no está definida.",
      unplotted: "Un producto o unidad dentro de una empresa listada más grande.",
    },
    "Rev (Rev.com / Reverb)": {
      story:
        "Un marketplace de transcripción humana convirtió en su propia arma a la IA que lo amenazaba, con un modelo de pesos abiertos que supera a Whisper de OpenAI.",
      changed:
        "Rev usó los datos generados por sus transcriptores humanos (más de 200,000 horas de voz transcrita por personas) para entrenar Reverb, un modelo de pesos abiertos con una tasa de error por palabra sustancialmente menor que Whisper large-v3. La fuerza de trabajo humana se volvió el foso de datos de entrenamiento.",
      date: "Lanzamiento de Reverb con pesos abiertos en oct. de 2024",
      note:
        "La reinvención tuvo un costo para sus transcriptores humanos (menos trabajos, menor paga), aun cuando la empresa subió de segmento.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Otter.ai": {
      story:
        "Una nueva empresa nativa de IA redefinió la transcripción: de un servicio que se encargaba a una inteligencia de reuniones integrada en cada llamada.",
      changed:
        "En lugar de transcripción por minuto, Otter se integró directamente en Zoom, Meet y Teams como un tomador de notas siempre activo, y después agregó chat y agentes, redefiniendo la categoría alrededor de la inteligencia de reuniones en tiempo real.",
      date: "2023 → 2026 (~US$100 millones de ARR reportados en 2025; más de 40M de usuarios y US$320 millones de financiamiento para crecimiento en oct. de 2026)",
      note:
        "Una nueva empresa que redefine la categoría, no el rescate de un incumbente. Las cifras de usuarios y ARR las reporta la empresa. Una demanda colectiva de privacidad por el consentimiento para grabar sobrevivió a una moción de desestimación en agosto de 2026 (son alegatos, no conclusiones).",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "11x (AI SDR — 'Alice' / 'Mike')": {
      story:
        "El símbolo de “la IA reemplaza a los representantes de desarrollo de ventas” fue golpeado por una investigación que alegaba logos falsos, ARR inflado y una alta tasa de cancelación.",
      changed:
        "11x vendía SDRs de IA autónomos para automatizar la prospección y el contacto, y levantó capital de fondos de primer nivel, pero una investigación de marzo de 2025 alegó que presentaba como clientes a quienes no lo eran y contaba pruebas como ingresos anuales, lo que debilitó la narrativa de que “la IA reemplaza por completo al SDR”.",
      date: "Mar. de 2025 (publicación de la investigación)",
      note:
        "Las acusaciones están EN DISPUTA; el entonces CEO rebatió el reporte y los inversionistas respaldaron a la empresa, y en mayo de 2025 él pasó a presidente del consejo mientras el CTO tomaba el mando. Se incluye para mostrar que la categoría de SDR con IA es real, pero el reemplazo total del SDR sigue sin probarse: no presentes las acusaciones como hechos establecidos.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Mercado Libre": {
      story:
        "El marketplace más grande de América Latina ya deja que un asistente de IA resuelva la mayoría de las dudas de sus clientes fintech sin un humano.",
      changed:
        "El asistente de IA de Mercado Pago atendió más de 9M de consultas en Q4 2025 y resolvió 87% sin un operador humano; para Q2 2026 la IA resolvía por sí sola más de la mitad de las solicitudes del Portal de Ayuda. En Q3 2026 la empresa dijo que unas 7,000 personas de soporte atienden un volumen que de otro modo requeriría varias veces esa cifra, y su asistente sostuvo 19M de conversaciones solo en septiembre.",
      date: "Asistente lanzado en oct. de 2025; Q4 2025 → Q3 2026",
      note:
        "Todas las cifras son afirmaciones de la empresa en cartas a accionistas presentadas ante la SEC. Un incumbente que se reinventa, no una empresa desplazada. La primera reinvención latinoamericana del índice.",
    },
    "Contact-center outsourcers (Teleperformance, Concentrix)": {
      story:
        "Los gigantes que rentan agentes humanos por hora ven sus ingresos volverse negativos y registran deterioros por miles de millones a medida que la IA de sus clientes empieza a contestar el teléfono.",
      changed:
        "Los centros de contacto tercerizados venden horas de agente a escala. Los agentes de IA resuelven de principio a fin los contactos rutinarios, así que el volumen y el poder de fijar precios se encogen. Ambas firmas se reposicionan como operadores de “IA más humanos” mientras sus líneas centrales declinan.",
      date: "Mar. de 2024 (TP −23% en un día tras los resultados de la IA de Klarna) → 2026 (ingresos comparables de TP a la baja, perspectiva para 2026 recortada en nov. de 2026; deterioro de crédito mercantil de US$1.05 mil millones en Concentrix, sept. de 2026)",
      note:
        "Varias causas. Concentrix vincula su deterioro con el precio de su acción y su perspectiva débil con las prioridades de sus clientes, no con la IA por nombre. Teleperformance culpa a una caída más rápida de Trust & Safety, que vincula con la automatización y la deslocalización, además de vientos en contra más amplios en la industria. Ambas reportan un crecimiento rápido en sus propias líneas de IA (según las empresas). Defenderse y pivotar, no colapsar.",
    },
    "Philippine BPO industry": {
      story:
        "La capital mundial de los call centers sigue sumando empleos, mientras revisa en silencio los pronósticos de crecimiento sobre los que se construyó su economía.",
      changed:
        "Alrededor de 1.7M de filipinos trabajan en centros de contacto y en outsourcing de procesos de negocio, haciendo el soporte guionizado, la captura de datos y el procesamiento de documentos que la IA generativa automatiza primero. La plantilla aún creció en 2025, pero en julio de 2026 el organismo de la industria redujo su perspectiva de crecimiento, citando la IA y la geopolítica.",
      date: "2025–2026 (perspectiva de la industria reducida, julio de 2026)",
      note:
        "La plantilla creció ~4% hasta 1.68M en 2025 (cifra de la asociación de la industria). Los pronósticos de desplazamiento más grandes que circulan son proyecciones, no pérdidas observadas. Un caso del sector, como la entrada de TI en la India.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "Standard Chartered": {
      story:
        "Un banco global anunció a los mercados que recortará ~15% de sus puestos de funciones corporativas para 2030 a medida que la IA absorbe el trabajo de back office.",
      changed:
        "Los centros de servicios compartidos existen para hacer procesamiento rutinario a escala, y eso es exactamente lo que automatiza la IA. El banco planea recortar casi 8,000 de sus más de 52,000 puestos de soporte en cuatro años; según reportes, los centros en el extranjero en Asia y Europa serán los más afectados.",
      date: "Anunciado en mayo de 2026",
      note:
        "Recortes planeados hasta 2030, no realizados. La forma en que la dirección describió esos puestos provocó críticas, y después se dijo que se había sacado de contexto. La ubicación de los centros proviene de una sola fuente.",
    },
    "RELX (LexisNexis) & Wolters Kluwer": {
      story:
        "Dos de las franquicias de información más defensivas de Europa tuvieron uno de sus peores días bursátiles en décadas cuando un laboratorio de IA lanzó un plug-in legal para su asistente.",
      changed:
        "El foso era contenido legal y profesional propietario envuelto en software de flujo de trabajo de pago. Un agente que revisa documentos, clasifica contratos y señala riesgos dentro de un asistente de propósito general amenaza con quedarse con el flujo de trabajo, dejando el contenido como un insumo en lugar de ser el producto.",
      date: "Desplome del 3 de febrero de 2026",
      note:
        "Caídas reportadas en un día de aproximadamente 13–14% cada una (Thomson Reuters cayó ~16% ese mismo día); las cifras exactas varían según la bolsa y la medición. Una revaluación del riesgo, todavía no ingresos perdidos: en los primeros nueve meses de 2026 la división legal de RELX creció 10% y Legal & Regulatory de Wolters Kluwer creció 5%, y ambas mantuvieron sus perspectivas para el año completo. Lo que produce el plug-in aún requiere revisión de un abogado.",
    },
    Accenture: {
      story:
        "La consultora más grande del mundo tuvo el peor día bursátil de su historia cuando los inversionistas descontaron que la IA encogería su motor de horas facturables.",
      changed:
        "Accenture vende equipos grandes que facturan por análisis, implementación y trabajo de procesos. Los agentes de IA comprimen justo esas horas, así que la desaceleración de contratos y un recorte de guía se leyeron como algo estructural y no cíclico, aun cuando la propia firma vende transformación con IA.",
      date: "18 de junio de 2026 (las acciones cayeron ~18% por un recorte de guía del tercer trimestre fiscal)",
      note:
        "Varias causas: la guía también mencionó recortes federales en EE. UU. y la disrupción en Medio Oriente, y el trimestre en sí superó lo esperado en ingresos. Sus pares de servicios de TI cayeron el mismo día. Al mismo tiempo se reinventa como integradora de IA; el desenlace no está resuelto.",
    },
    Gartner: {
      story:
        "La firma que le decía a cada CIO qué pensar sobre la tecnología perdió cerca de la mitad de su valor de mercado cuando sus clientes empezaron a preguntarle a la IA.",
      changed:
        "Gartner vende investigación sindicada y acceso a analistas: criterio empaquetado que es, en buena medida, una síntesis de lo que se puede saber. Las herramientas de investigación con IA producen esa síntesis a demanda, y los presupuestos de TI se están redirigiendo a proyectos de IA, así que las renovaciones de asesoría humana están bajo presión.",
      date: "2025 (la acción se redujo a la mitad) → 3 de febrero de 2026 (las acciones cayeron más de 20% por su guía para 2026)",
      note:
        "La dirección culpó a ciclos de compra más largos y al escrutinio de presupuestos, no a la IA por nombre; el vínculo con la IA es la narrativa de los inversionistas. Las cifras de la caída en un día no coinciden (21–31%) según la medición. En Q3 2026 el valor de contratos creció 2.5% (sin efecto cambiario) y Gartner elevó su perspectiva para el año completo: crecimiento lento, no declive.",
    },
    Salesforce: {
      story:
        "La empresa que inventó el asiento SaaS vio a los inversionistas apostar a que los agentes de IA necesitarán menos asientos, y perdió cerca de 40% de su valor en seis meses.",
      changed:
        "El precio por asiento ata los ingresos al número de personas que usan el software. Si los agentes hacen el trabajo de los representantes de ventas y servicio, el número de asientos se encoge. Salesforce se mueve hacia precios por consumo con Agentforce, pero los ingresos de agentes todavía no son lo bastante grandes para zanjar la cuestión.",
      date: "H1 2026 (acción a la baja ~41%); rebaja de calificación de un gran banco en mayo de 2026",
      note:
        "Los resultados siguieron superando las expectativas mientras la acción caía, así que es una revaluación del modelo, no un colapso de ingresos. Las cifras de ingresos de Agentforce varían según la definición en cada reporte y las reporta la empresa. El arquetipo de la operación del “SaaSpocalypse” de 2026.",
    },
    Lovable: {
      story:
        "Una startup de Estocolmo permitió que personas que no programan describieran una app y la obtuvieran, y se convirtió en una de las empresas de software de más rápido crecimiento de la historia.",
      changed:
        "Construir una app web significaba contratar desarrolladores o una agencia. El agente de Lovable convierte una instrucción en lenguaje natural en una app full-stack funcional, así que el comprador se vuelve el constructor.",
      date: "Serie A en julio de 2025 (valuación de US$1.8 mil millones) → Serie C en agosto de 2026 (US$400 millones con una valuación de US$13.3 mil millones)",
      note:
        "La tasa anualizada de ingresos (~US$500 millones para junio de 2026) la reporta la empresa y no está auditada; la calidad de las apps y la retención a escala no están probadas. Replit es una nativa de IA comparable en la misma categoría.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    "Stack Overflow": {
      story:
        "El mostrador de respuestas de internet para programadores vio caer ~78% sus preguntas nuevas en un año, porque los desarrolladores empezaron a preguntarle a la IA dentro de su editor.",
      changed:
        "Su foso era un efecto de red: la gente preguntaba, los expertos respondían y los buscadores mandaban tráfico. Los asistentes de programación con IA ahora responden dentro del editor, así que se secó el flujo de preguntas que alimentaba el ciclo. La empresa está pivotando hacia el licenciamiento de datos y versiones empresariales privadas.",
      date: "Julio de 2026: unas 1,400 preguntas nuevas al mes, −78% año contra año (máximo de 207,000 al mes en marzo de 2014)",
      note:
        "La caída es anterior a ChatGPT y refleja en parte la cultura de la comunidad; la IA la aceleró. El negocio se reinventa mientras la comunidad colapsa: “reloj corriendo” para la empresa, casi “desaparecida” para el foro.",
      unplotted: "Propiedad de Prosus: sin ingresos ni valor de mercado propios.",
    },
    "Ad-supported web publishers (AI search answers)": {
      story:
        "Los medios construidos sobre el tráfico de búsqueda ven cómo las respuestas de IA en la parte superior de los resultados se quedan con el lector y con el clic.",
      changed:
        "Los medios financiados por publicidad y afiliados dependen de las visitas que llegan desde los buscadores. Los resúmenes de IA responden la consulta en la propia página de resultados, así que el tráfico cae incluso cuando la fuente es el reportaje del medio. En el Reino Unido, un estudio de la industria proyecta que el tráfico de búsqueda de Google hacia los principales medios se reducirá a la mitad para Q3 2027.",
      date: "2024–2026 (demanda de Penske Media presentada en sept. de 2025, desestimada en sept. de 2026)",
      note:
        "Las cifras de pérdida de tráfico varían mucho según el estudio y el método; la proyección del Reino Unido es un pronóstico. Las demandas antimonopolio de Penske y Chegg sobre AI Overviews se desestimaron en sept. de 2026 (son apelables). Un caso del sector; distinto de la entrada de granjas de contenido, que trata sobre el costo, no sobre las visitas.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    Abridge: {
      story:
        "Un escriba ambiental de IA que escucha la conversación entre médico y paciente y redacta la nota se está extendiendo por los sistemas de salud más grandes de EE. UU.",
      changed:
        "La documentación clínica consumía horas del tiempo de los médicos cada día y alimentaba el agotamiento. Abridge convierte la propia conversación en notas estructuradas y facturables dentro del expediente clínico, desplazando a los escribas humanos y al dictado.",
      date: "Serie E en junio de 2025 (US$300 millones con una valuación de US$5.3 mil millones) → extensión de US$316 millones en abril de 2026 con la misma valuación; más de 300 sistemas de salud reportados en 2026",
      note:
        "El número de sistemas de salud lo reporta la empresa. Los proveedores de expedientes clínicos electrónicos que lanzan sus propios escribas son el principal riesgo competitivo. Los médicos siguen firmando cada nota.",
      unplotted: "Empresa privada: sin ingresos ni valor de mercado públicos.",
    },
    Radiologists: {
      story:
        "La predicción más famosa de pérdida de empleos por la IA decía que había que dejar de formar radiólogos. Una década después son más escasos y mejor pagados que nunca.",
      changed:
        "La IA de imagenología está en todas partes, con departamentos grandes que usan cientos de modelos, pero un médico con licencia debe firmar la interpretación final para que Medicare y Medicaid paguen, y la responsabilidad legal recae en esa firma. La IA hizo más rápido a cada radiólogo; el aumento en el volumen de estudios absorbió la ganancia.",
      date: "Predicción de 2016 → 2025–2026 (paga promedio de ~US$571 mil en 2025)",
      note:
        "Aislados por la licencia profesional, las reglas de reembolso y la responsabilidad por mala práctica, además de un auge de la demanda: la carga de trabajo subió ~25% de 2018 a inicios de 2025. Cifra de paga de Medscape. El caso más limpio de una profesión cuyo resultado depende de una firma.",
      unplotted: "Una categoría, no una empresa listada.",
    },
    "Universal Music Group": {
      story:
        "La disquera más grande del mundo dejó de demandar a un generador de canciones con IA y acordó construir con él una plataforma de música con IA bajo licencia.",
      changed:
        "La música generativa amenazaba con inundar el streaming con canciones que no necesitan disquera ni catálogo. UMG convirtió su catálogo en un insumo con licencia: llegó a un acuerdo con Udio y pactó un servicio cerrado donde los fans crean bajo licencia. Warner siguió el ejemplo con Udio y Suno.",
      date: "Oct. de 2025 (acuerdo UMG–Udio); Warner–Suno en nov. de 2025",
      note:
        "Los términos financieros no se revelaron; la plataforma estaba prevista para 2026 y su lanzamiento no está confirmado. La estrategia de Shutterstock (licenciar el archivo) aplicada a la música.",
    },
    "Booking Holdings & Expedia": {
      story:
        "Las agencias de viajes en línea superaron las expectativas de resultados y aun así se desplomaron, porque los inversionistas temen que la próxima reserva empiece con un agente de IA y no con una caja de búsqueda.",
      changed:
        "Las OTAs dominan la parte alta del embudo de viajes y cobran comisión a los hoteles por la demanda. Los agentes de compra que reservan en nombre del viajero podrían quedarse con ese embudo. Expedia se conectó pronto a los nuevos agentes. Booking dejó fuera a Booking.com, permitió que su marca asiática Agoda se sumara en Singapur y Japón, y está probando su propio agente de viajes con IA. Apuestas distintas ante la misma amenaza.",
      date: "Feb. de 2026 (Booking cayó tras superar expectativas en Q4) → sept. de 2026 (ambas a la baja ~17–18% en un mes tras el lanzamiento de un nuevo agente de compras) → nov. de 2026 (ambas superaron expectativas en reservas de Q3)",
      note:
        "Booking dice que las referencias desde modelos de IA están muy por debajo de 1% de las noches de habitación de Booking.com; Expedia dice que el tráfico de agentes es pequeño pero con alta intención de compra (ambas, declaraciones de las empresas, Q3 2026). La amenaza ya está descontada en las acciones, pero todavía no es visible en los resultados: en Q3 2026 las reservas brutas subieron 10% en Booking y 11% en Expedia. Las cifras de movimiento de las acciones vienen de medios financieros secundarios.",
    },
    Fiverr: {
      story:
        "Un marketplace de pequeños trabajos freelance perdió una cuarta parte de sus compradores en un año, y dice que el paso de la búsqueda a la IA es la razón.",
      changed:
        "Fiverr vendía tareas pequeñas y bien definidas (un logo, una traducción, una entrada de blog) y encontraba a sus compradores a través de la búsqueda de Google. La IA ahora hace muchas de esas tareas directamente, y los compradores que le preguntan a un asistente de IA nunca llegan a una página de resultados. Fiverr recortó cerca de 30% de su personal en sept. de 2025 para volverse “AI-first” y se está moviendo hacia proyectos más grandes y gestionados.",
      date:
        "Sept. de 2025 (despido de 30%) → oct. de 2026 (ingresos de Q3 −15.8%, compradores activos −25.8%)",
      note:
        "Los ingresos de Q3 2026 fueron de US$90.9 millones, 15.8% menos año contra año; los ingresos del marketplace cayeron 24.7% y los compradores activos anuales bajaron a 2.4M desde 3.3M. Fiverr prevé que los ingresos de Q4 caigan 20–25% y dice que “el paso de la búsqueda al descubrimiento impulsado por IA” provocará una caída más pronunciada de lo que esperaba. Su segmento de servicios creció 3.4%. El vínculo causal con la IA es la explicación de la propia empresa.",
    },
    "CI&T": {
      story:
        "Una empresa brasileña de servicios de TI hace crecer sus ingresos más rápido que su plantilla vendiendo trabajo hecho con IA en contratos basados en valor, en lugar de horas facturables.",
      changed:
        "El outsourcing de TI cobraba por hora-persona, así que las herramientas de programación con IA amenazaban directamente sus ingresos. CI&T construyó su propia plataforma de entrega con IA (CI&T FLOW) y movió a sus clientes a precios basados en valor. Los ingresos crecieron mientras la plantilla se mantuvo estable. La misma presión empuja a Globant y a la TI india en la dirección contraria.",
      date:
        "2025–2026 (crecimiento de dos dígitos hasta Q3 2026, reportado en nov. de 2026)",
      note:
        "Los ingresos de Q3 2026 fueron de US$146.3 millones, 14.9% más (11.2% a tipo de cambio constante), con una plantilla promedio estable año contra año e ingresos por empleado 9.9% más altos. La empresa dice que los modelos comerciales basados en valor y CI&T FLOW permiten que sus ingresos crezcan más rápido que su equipo (afirmación de la empresa). El comunicado no desglosa los ingresos de IA, así que cuánto del crecimiento explica la IA es el encuadre de la propia empresa.",
    },
    "Fin (formerly Intercom)": {
      story:
        "Una empresa de software de mesa de ayuda con 15 años de historia tomó el nombre de su agente de IA y luego acordó venderse a Salesforce por unos US$3.6 mil millones.",
      changed:
        "El software de mesa de ayuda se cobraba por asiento de agente de soporte. Una vez que un agente de IA podía resolver la mayoría de los tickets, un negocio construido sobre asientos se encogería a medida que su propio producto funcionara. Intercom hizo del agente el negocio: cobró Fin por resolución, cambió el nombre de la empresa a Fin en mayo de 2026 y dejó “Intercom” solo como el nombre de la mesa de ayuda.",
      date:
        "Fin lanzado en 2023 → cambio de nombre en mayo de 2026 → acuerdo con Salesforce firmado en junio de 2026",
      note:
        "Salesforce dice que Fin tiene más de 30,000 clientes empresariales y resuelve en promedio 76% del volumen de soporte sin un humano (cifras de la empresa). Se esperaba que la operación cerrara en el trimestre fiscal Q4 2027 de Salesforce, sujeta a los reguladores; no hemos confirmado que haya cerrado. Las cifras de ARR de Fin varían según el medio y se dejan fuera. Compárala con Sierra, que nació nativa de IA; Fin es un incumbente que se convirtió en una.",
      unplotted:
        "Empresa privada en proceso de adquisición por Salesforce: sin ingresos ni valor de mercado públicos.",
    },
    "Airline pilots": {
      story:
        "El regulador europeo de seguridad aérea estudió volar aviones de pasajeros con un solo piloto en la cabina y concluyó que todavía no se puede demostrar que sea tan seguro como volar con dos.",
      changed:
        "La automatización de la cabina lleva décadas avanzando, y los fabricantes exploraron permitir que un piloto descanse durante el crucero mientras el software vigila al otro. Las reglas fijan el tamaño de la tripulación, no la tecnología. La investigación de EASA concluyó que un nivel de seguridad equivalente “no puede demostrarse de forma suficiente” con las cabinas actuales, así que el requisito de dos pilotos se mantiene.",
      date:
        "Estudio de EASA 2022–2025; conclusión en junio de 2025",
      note:
        "Aislados por regulación, del tipo más claro: una agencia de seguridad, no el mercado, decide el tamaño de la tripulación. EASA dice que un cambio futuro requeriría “cabinas inteligentes” que vigilen al piloto y respalden automáticamente a la aeronave. La automatización en juego es más amplia que la IA generativa, así que esto pone a prueba la columna de “aisladas” más que ser una historia pura de IA.",
      unplotted:
        "Una profesión, no una empresa listada.",
    },
  },

  markets: {
    CHGG: { responseWhy: "Recortó ~45% de su personal (oct. de 2025) después de que su tutor de IA no logró frenar las pérdidas" },
    DUOL: { responseWhy: "Reconstruyó su producción de contenido alrededor de la IA (“AI-first”)" },
    COUR: {
      responseWhy: "Se fusionó con Udemy (cerró en mayo de 2026)",
      caveat: "Los ingresos de FY2025 son solo de Coursera; la fusión con Udemy cerró en mayo de 2026.",
    },
    BZFD: {
      responseWhy: "Vendió el control (mayo de 2026) y luego recortó ~35% de su plantilla",
      caveat: "Precio base ajustado por el split inverso 1:4 de mayo de 2024.",
    },
    GETYQ: {
      responseWhy: "Chapter 11 preacordado (oct. de 2026); las acciones públicas serán canceladas",
      caveat:
        "Salió del NYSE en oct. de 2026; el precio actual es una cotización OTC de poca operación, y las acciones serán canceladas.",
    },
    SSTK: { responseWhy: "Fusión fallida, dividendo suspendido, revisión estratégica (2026)" },
    GLOB: { responseWhy: "Cambia el precio de sus servicios hacia “Pods” de IA y suscripciones" },
    ADBE: { responseWhy: "Integró la IA generativa Firefly en sus herramientas creativas" },
    TRI: {
      responseWhy: "Compró Casetext; lanzó CoCounsel Legal agéntico (agosto de 2026)",
      caveat: "Precio base ajustado por la consolidación de acciones de junio de 2023.",
    },
    HRB: { responseWhy: "Sin reposicionamiento hacia la IA documentado en nuestras fuentes" },
    MELI: { responseWhy: "Su asistente de IA resuelve la mayoría de las solicitudes de soporte sin un humano" },
    TEP: {
      responseWhy: "Se reposiciona como operador de “IA más humanos”",
      caveat: "Los ingresos incluyen la adquisición de Majorel (finales de 2023); el crecimiento orgánico es menor.",
    },
    CNXC: {
      responseWhy: "Se reposiciona como operador de “IA más humanos”",
      caveat: "Los ingresos incluyen la adquisición de Webhelp (sept. de 2023); el crecimiento orgánico es mucho menor.",
    },
    STAN: {
      responseWhy: "Recorta ~15% de sus puestos de funciones corporativas para 2030",
      caveat: "Un banco: el ingreso operativo sustituye a los ingresos. Ingresos en USD; precio de la acción en peniques.",
    },
    REL: { responseWhy: "Vende herramientas de investigación con IA dentro de sus productos legales y de analítica" },
    WKL: { responseWhy: "Lanza módulos de IA y agénticos en su software de salud, impuestos y legal" },
    ACN: { responseWhy: "Vende la transformación con IA como su línea de crecimiento" },
    IT: { responseWhy: "Sin reposicionamiento hacia la IA documentado en nuestras fuentes" },
    CRM: {
      responseWhy: "Pasa del precio por asiento al precio por consumo con Agentforce",
      caveat: "El año fiscal termina en enero; el año base es el que contiene noviembre de 2022.",
    },
    UMG: { responseWhy: "Llegó a un acuerdo con un generador de música con IA y licenció su catálogo" },
    BKNG: {
      responseWhy: "Mantiene a Booking.com fuera de los agentes de IA de terceros; Agoda se sumó a uno en Asia",
      caveat: "Precio base ajustado por el split 25:1 de abril de 2026.",
    },
    EXPE: { responseWhy: "Conecta su inventario a agentes de compra con IA" },
    FVRR: {
      responseWhy: "Recortó ~30% de su personal (sept. de 2025) para volverse “AI-first”",
      caveat: "Los ingresos anuales aún crecieron en FY2025; la caída de 2026 está en los resultados trimestrales, todavía no en un año fiscal completo.",
    },
    CINT: {
      responseWhy: "Vende trabajo hecho con IA a través de su propia plataforma en contratos basados en valor",
      caveat: "CI&T reportaba en reales brasileños en años anteriores; ambas cifras de ingresos son la serie en dólares estadounidenses de la fuente de datos.",
    },
  },

  index: {
    whatChanged: "Qué cambió",
    note: "Nota —",
    source: "fuente",
    sources: "fuentes",
    verified: "verificado",
    movedFrom: "Se movió desde",
    movedTitle: (from) => `Se movió desde “${from}” en la última actualización`,
    to: "a",
    findPlaceholder: "Busca tu industria o empresa…",
    findAria: "Busca tu industria o empresa",
    clearSearch: "Borrar búsqueda",
    suggestions: "Sugerencias",
    kindIndustry: "Industria",
    kindCompany: "Empresa",
    speedAria: "Velocidad de la disrupción",
    everySpeed: "Todas las velocidades",
    all: "Todas",
    filters: "Filtros",
    region: "Región",
    signal: "Señal",
    sort: "Ordenar",
    bySpeed: "Por velocidad",
    byIndustry: "Por industria",
    az: "A–Z",
    of: "de",
    activeFilters: "Filtros activos",
    removeFilter: "Quitar filtro:",
    clearAll: "Borrar todo",
    emptyPre: "Todavía no hay coincidencias, y ese vacío ya es una señal. Prueba con una palabra más amplia, o",
    emptyBtn: "borra todos los filtros",
    company: "empresa",
    companies: "empresas",
  },

  quadrant: {
    eyebrow: "Desde el lanzamiento de ChatGPT · 30 nov. 2022 → oct. 2026",
    title: <>Hacer crecer los ingresos no las salvó.{" "}<span className="accent">El mercado descontó la disrupción primero.</span></>,
    lede: (priced, total) => (
      <>
        Cada empresa listada del índice, ubicada según dos cifras medidas desde el lanzamiento de ChatGPT: cómo
        cambiaron sus <b>ingresos</b> (la disrupción real) y cómo cambió el <b>precio de su acción</b> (el miedo del
        mercado). <b>{priced}</b> de {total} siguieron haciendo crecer sus ingresos y aun así fueron castigadas. Pasa
        el cursor, toca o navega con tabulador hasta un punto.
      </>
    ),
    chartAria: "Gráfica de cuadrantes: cambio en ingresos frente a cambio en el precio de la acción desde el 30 de noviembre de 2022",
    xAxis: "Cambio en ingresos · se encogen ← → crecen",
    yAxis: "Precio de la acción · castigado ↓ ↑ premiado",
    closeDetails: "Cerrar detalles",
    revenue: "Ingresos",
    sharePrice: "Precio de la acción",
    response: "Respuesta",
    sourcesLead: "Fuentes:",
    revenueSource: "ingresos",
    priceSource: "precio",
    showInIndex: (company) => `Ver ${company} en el índice →`,
    dotAria: (name, ticker, rev, price, quadrant, response) =>
      `${name} (${ticker}): ingresos ${rev}, precio de la acción ${price} desde el 30 nov. 2022. ${quadrant}. ${response}.`,
    detailsAria: (name) => `Detalles de ${name}`,
    legend: "Leyenda",
    method: (
      <>
        <b>Cómo leerla.</b> Base: el precio de cierre de la acción el 30 nov. 2022, el día que se lanzó ChatGPT,
        frente al cierre más reciente (12 nov. 2026); los ingresos del año fiscal que contiene esa fecha frente al
        último año fiscal completo reportado. Los precios están ajustados por splits y excluyen dividendos; los
        ingresos están en la moneda en la que reporta cada empresa. Ambos ejes son logarítmicos, así que reducirse a
        la mitad y duplicarse quedan a la misma distancia del cero. La forma del marcador es la respuesta de la
        empresa: <b>reestructurándose</b> (recortes documentados, una venta forzada, una fusión o una quiebra) tiene
        prioridad sobre <b>reinventándose</b> (un producto o modelo de precios con IA ya lanzado en el centro del
        negocio); todo lo demás es <b>sin respuesta documentada</b>. Solo se grafican empresas con cifras públicas: lo
        que falta, sigue faltando.
      </>
    ),
    tableSummary: "La gráfica como tabla, con fuentes",
    th: {
      company: "Empresa",
      revenue: "Ingresos",
      sharePrice: "Precio de la acción",
      quadrant: "Cuadrante",
      response: "Respuesta",
      sources: "Fuentes",
    },
    revenueLink: "Ingresos",
    priceLink: "Precio",
    unplottedTitle: "Sin graficar, y por qué",
    unplottedDefault: "Sin cifras públicas.",
    meta: {
      gone: { label: "Ya desaparecidas", blurb: "Ingresos que se encogen, valor de mercado castigado." },
      priced: {
        label: "Valuadas para la disrupción",
        blurb: "Ingresos que todavía crecen, valor de mercado castigado: el miedo va por delante de las cifras.",
      },
      credit: { label: "Premio a la reestructura", blurb: "Ingresos que se encogen, valor de mercado premiado." },
      reinventing: { label: "Reinventándose", blurb: "Ingresos que crecen, valor de mercado premiado." },
    },
    responses: {
      reinventing: { label: "Reinventándose", title: "Un producto o modelo de precios con IA ya lanzado en el centro del negocio." },
      restructuring: { label: "Reestructurándose", title: "Recortes documentados, una venta forzada, una fusión o una quiebra desde 2022." },
      none: { label: "Sin respuesta documentada", title: "No hay una respuesta documentada en nuestras fuentes." },
    },
  },

  opportunities: {
    eyebrow: "#BlackOctober · lo que abre la disrupción",
    title: "Oportunidades de negocio emergentes",
    lede: (
      <>
        Entre el 19 y el 22 de octubre de 2026 coincidieron, con días de diferencia, varios incidentes de seguridad
        independientes: fallas críticas de PHP que{" "}
        <a
          href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching"
          target="_blank"
          rel="noopener noreferrer"
        >
          CISA
        </a>{" "}
        pidió a las organizaciones parchear de inmediato, una versión envenenada de un gateway de IA, una filtración de
        secretos en una plataforma en la nube y una autoridad de certificación con llaves defectuosas. La prensa lo
        llamó #BlackOctober. No fue una sola campaña, y por sí mismo no es disrupción. Lo que dejó al descubierto es
        dónde se van a construir los próximos negocios. Las cuatro oportunidades de abajo son{" "}
        <b>tal como las planteó AI Mode de Google, el 30 oct. 2026</b>; la evidencia bajo cada una es nuestra,
        verificada contra fuentes primarias.
      </>
    ),
    inTheIndex: "En el índice:",
    leftOutTitle: "Lo que dejamos fuera",
    leftOutLede: "La respuesta de Google citó esto; no pudimos verificarlo, así que aquí no cuenta como evidencia.",
    items: {
      "01": {
        title: "IA verificable",
        verdict: "Se sostiene",
        thesis:
          "Demostrar qué código y qué modelo se ejecutaron realmente, en lugar de confiar en que el paquete que instalaste es el que publicaron sus mantenedores.",
        evidence: [
          "El 21 de octubre, una versión envenenada de LiteLLM (1.107.0), un gateway de código abierto muy usado para acceder a modelos de IA, estuvo disponible en PyPI y Docker durante unas dos horas. Robó credenciales y secretos de las máquinas que la instalaron. El código fuente oficial estaba limpio: la compilación salió de un fork que imitaba al original, y el propio pipeline de publicación del proyecto la firmó y la publicó.",
          "El 9 de noviembre, NEAR AI reveló que un atacante usó una falla en SGLang, un motor de código abierto para servir modelos de IA, para ejecutar código en uno de sus servidores de inferencia. Las solicitudes en ese servidor, incluidas algunas en su modo confidencial, pudieron quedar expuestas. Su reporte señala que el aislamiento por hardware no protege contra una falla en el software que corre dentro.",
          "Las herramientas ya existen: la firma de modelos de OpenSSF, construida sobre Sigstore, firma modelos de la misma forma en que el código abierto firma software.",
        ],
        inTheIndex:
          "Cada empresa que se reinventa en el índice vende resultados de IA en los que un cliente tiene que confiar: las notas clínicas de Abridge, los borradores de CoCounsel de Thomson Reuters, las respuestas de soporte de Mercado Libre.",
      },
      "02": {
        title: "Gobernanza agéntica: arquitecturas de proof pair",
        verdict: "Se sostiene",
        thesis:
          "Una API key dice quién la tiene, no qué se le permitió hacer a un agente. Vincula cada agente a una persona responsable con un mandato firmado y acotado antes de que actúe, y con un recibo verificable después.",
        evidence: [
          "El CERT-In de la India emitió el 15 de octubre un aviso crítico, “AI Agents as Attack Vectors”: agentes llegaron a sistemas en producción de organizaciones indias mediante credenciales expuestas y permisos demasiado amplios, y las organizaciones no lo detectaron por su cuenta.",
          "En octubre, un atacante alcanzó variables de entorno cifradas en la plataforma para desarrolladores Railway. Su reporte final (10 de noviembre) dice que las API keys de proveedores de IA eran el objetivo principal y estima en unos $740,000 dólares el gasto no autorizado con las llaves robadas. Desde 2024, investigadores han documentado llaves robadas que disparan facturas de cómputo de IA (“LLMjacking”).",
          "Los organismos de estándares ya trabajan en ello: el proyecto del NCCoE de NIST sobre identidad y autorización de software y agentes de IA, y el Top 10 de OWASP para aplicaciones agénticas.",
        ],
        inTheIndex:
          "Aquí los agentes ya actúan en nombre de los clientes: Sierra resolviendo reembolsos, Mercado Libre respondiendo a clientes fintech, Salesforce cobrando por agente en lugar de por asiento.",
        oursLabel: "Nuestra especificación abierta: el proof pair",
      },
      "03": {
        title: "Identidad descentralizada para uso público y privado",
        verdict: "Se sostiene",
        thesis:
          "Cuando un rostro en una videollamada puede generarse en vivo, la identidad tiene que ser una credencial verificable criptográficamente y guardada en una cartera digital, no en una base de datos que alguien puede vulnerar.",
        evidence: [
          "En 2024, un empleado de finanzas de la firma de ingeniería Arup pagó cerca de US$25 millones después de una videollamada en la que todos los demás participantes eran deepfakes.",
          "El informe 2026 del Foro Económico Mundial señala los ataques de inyección, video sintético inyectado directamente en los flujos de verificación, como una amenaza creciente para la comprobación de identidad.",
          "La regulación está forzando el cambio: con eIDAS 2.0, cada Estado miembro de la UE debe ofrecer a sus ciudadanos una cartera de identidad digital.",
        ],
        inTheIndex:
          "Los bancos y fintechs del índice verifican identidades a escala: Standard Chartered, Mercado Pago de Mercado Libre, Klarna.",
      },
      "04": {
        title: "Auditoría determinista de código y llaves generados",
        verdict: "Se sostiene, con una corrección",
        thesis:
          "A medida que los agentes escriben más código, las verificaciones que detectan una falla fatal deben ser deterministas y ejecutarse antes del lanzamiento: llaves débiles, aleatoriedad deficiente, lógica que ningún revisor leyó.",
        evidence: [
          "El 17 de octubre, un investigador descubrió que ocho llaves de certificados intermedios de la autoridad de certificación india eMudhra eran trivialmente débiles; los navegadores dejaron de confiar en ellas y eMudhra anunció el cierre voluntario de su negocio de TLS público. Corrección: eMudhra lo atribuye a un error en un script de generación de llaves, y la IA aparece solo como una herramienta que el investigador usó para encontrar la falla. Ninguna fuente primaria culpa a código generado por IA.",
        ],
        inTheIndex:
          "Cursor y Lovable pusieron agentes que escriben código en manos de millones de desarrolladores y no desarrolladores: se lanza más código del que nadie lee.",
      },
    },
    leftOut: [
      "“Hackeos automatizados con múltiples agentes que acumulan miles de dólares en créditos de cómputo de API robados” como un evento de #BlackOctober: el abuso de llaves de IA robadas está documentado, pero no encontramos una fuente para este incidente; la única cifra en dólares que encontramos (la estimación de Railway, unos $740,000 dólares) es de llaves robadas, no de hackeos con múltiples agentes.",
      "Deepfakes en tiempo real que evaden la MFA como parte de #BlackOctober: la tendencia es real (arriba), pero el vínculo con octubre no tiene fuente.",
      "Las llaves débiles de eMudhra como una falla de código generado por IA: la propia declaración de la empresa dice lo contrario.",
    ],
  },
};
