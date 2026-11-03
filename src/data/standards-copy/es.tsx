import type { StandardsCopy } from "./types";
import { B, S, A, I, TBD } from "./fmt";

/* Spanish (Mexican / neutral LATAM). Self-contained: every rail, pulse row and market
   solution is written out here, keyed by id, translated from the English in
   src/data/standards.ts and src/data/marketMap.ts. */

export const es: StandardsCopy = {
  meta: {
    title: "Estándares agénticos — el panorama, mapeado",
    description:
      "Los agentes están obteniendo identidades, mandatos y recibos. Los estándares que hacen demostrable la delegación — W3C VCs, ERC-8004, SD-JWT, OID4VC, AP2, Verifiable Intent, x402, C2PA y un carril de conocimiento cero — mapeados y con fuentes, con la especificación abierta Proof Pair al centro.",
    ogTitle: "Estándares agénticos",
  },
  nav: { home: "/es", back: "← Volver al inicio", langLabel: "Español" },

  hero: {
    eyebrow: "Estándares agénticos · el panorama, mapeado",
    h1: <>Los agentes están obteniendo identidades, mandatos y recibos.{" "}<A>Aquí está el mapa.</A></>,
    lede: (
      <>
        La delegación solo funciona a escala cuando es demostrable — cuando un agente puede mostrar{" "}
        <B>qué tiene permitido hacer</B> antes de actuar, y{" "}
        <B>quién hizo qué, bajo la autoridad de quién</B> después. Estos son los estándares que lo están haciendo
        realidad, lo que cubre cada uno y cómo encajan entre sí.
      </>
    ),
    arcEyebrow: "Una página, un argumento — léela de arriba abajo",
    livePulse: "Pulso en vivo",
    arc: [
      { k: "Primero", t: "Lo que operamos", d: "El Proof Pair — la especificación abierta que operamos: entra un mandato, sale un recibo." },
      { k: "Después", t: "Cómo leemos el campo", d: "El Agentic Pulse — la narrativa contrastada con la realidad, cada cifra con su fuente." },
      { k: "Lo que revela", t: "Un carril que abrimos", d: "Claim Provenance — una pregunta sin ocupar que creemos importante, puesta en público como invitación." },
      { k: "En contexto", t: "El mapa completo", d: "El panorama y el mercado — cada riel, y dónde el carril sigue vacío." },
    ],
  },

  proofPair: {
    eyebrow: "Nuestra especificación de trabajo abierta · v0 · en vivo",
    title: "The Proof Pair",
    body: (
      <>
        <I>Entra un mandato, sale un recibo — la delegación, demostrable en ambos extremos.</I>{" "}
        Un mandato es autoridad que puedes verificar <S>antes</S> del acto: una credencial verificable que una
        persona otorga a un agente — acotada, con vencimiento, revocable. Un recibo es atribución que puedes
        verificar <S>después</S>{" "}
        del acto: un registro firmado y encadenado por hash que vincula la acción con el agente y con el mandato
        que la autorizó. Una sola especificación, porque cada recibo hace referencia a su mandato. Esto es lo que
        operamos, especificado para que tú también puedas operarlo.
      </>
    ),
    specLink: "Lee la especificación — the-aios.org/proof-pair →",
    specNote: "· abierta, CC-BY 4.0, cualquiera puede implementarla",
    bridgeNext: "Después — cómo leemos el campo",
    bridge: (
      <>
        Eso es lo que operamos. Para ubicarlo con honestidad, empezamos por leer la economía de agentes tal como
        realmente es —{" "}
        <S>la historia que cuenta, contrastada con lo que puede demostrar.</S>
      </>
    ),
  },

  pulse: {
    pulseLabel: "Agentic Pulse — índice en vivo",
    eyebrow: "Agentic Pulse · narrativa vs. realidad medida",
    h2: <>Lo que la economía de agentes <A>afirma</A>, y lo que puede <A>demostrar</A>.</>,
    intro: (
      <>
        El pulso mide la brecha entre la narrativa agéntica — la ronda de inversión, el whitepaper, la proyección — y
        la realidad medida: volumen real, estado en producción, si la cosa puede demostrar <I>quién</I> actuó. El
        fenómeno que revela es lo que el campo llama <I>agent-washing</I> (vender como agéntico lo que no lo es). Es
        un diagnóstico, no un marcador.{" "}
        <B>Cada cifra remite a una fuente con nombre.</B> Donde un valor no tiene fuente, aparece <TBD /> — nunca
        un número inventado.
      </>
    ),
    floorEyebrow: "Dinero real, como contraste — el piso honesto (no es washing)",
    floorIntro:
      "El índice también apunta hacia quienes construyen con honestidad. Así se ven los ingresos reales y medidos de agentes — el piso contra el que debería calificarse la narrativa, no solo el techo con el que se vende.",
    bridgeNext: "Lo que revela — un carril abierto",
    bridge: (
      <>
        Leer el campo así revela dónde están las brechas. En una de ellas todavía no hay nadie — y{" "}
        <S>no es un carril para conquistar, es una pregunta para abrir.</S>
      </>
    ),
    labels: { narrative: "Narrativa", measured: "Realidad medida", proves: "¿Puede demostrar quién actuó?", source: "Fuente:" },
    confidence: { high: "confianza alta", medium: "confianza media", low: "confianza baja" },
    stage: {
      production: "Producción",
      pilot: "Piloto",
      "draft-spec": "Borrador",
      whitepaper: "Whitepaper",
      "[TBD-verify]": "TBD-verify",
    },
    headline: {
      execTrustLabel:
        "de los ejecutivos confía en agentes para análisis rutinarios — pero cae a ~20% en cuanto el agente toca una transacción.",
      execTrustSource: "Próximamente — Sell Trust (2026).",
      ceilingLabel:
        "el dimensionamiento canónico de la economía agéntica — una proyección top-down de Foundation Capital sobre los salarios del trabajo del conocimiento que son direccionables, explícitamente NO ingresos medidos. “Un mapa del oro, vendido al pie del sendero.”",
      ceilingSource: "Foundation Capital — proyección top-down.",
    },
    entries: {
      "payments-volume-gap": {
        subject: "Un protocolo de pagos para agentes (sin nombre en la fuente)",
        category: "Pagos de agentes",
        narrative: "Narrativa de valuación en miles de millones (marco de ~$7B).",
        measured: "~$28,000/día en volumen real y medido.",
        authPosture: "[TBD-verify]",
        source: "Próximamente — Sell Trust (2026). El protocolo se omite deliberadamente en la fuente.",
      },
      "mcp-auth-scan": {
        subject: "Servidores MCP remotos (escaneo de población)",
        category: "Autenticación de herramientas",
        narrative: "Presentados como infraestructura de herramientas para agentes en producción.",
        measured: "~8,000 servidores escaneados; ~40% no tenía autenticación alguna.",
        authPosture:
          "Entre los servidores que SÍ tenían autenticación, prácticamente ninguno puede demostrar quién está del otro lado — “una llave, sí; una identidad, no.”",
        source:
          "arXiv:2605.22333 — “A First Measurement Study on Authentication Security in Real-World Remote MCP Servers” (2026).",
      },
      aauth: {
        subject: "AAuth (Dick Hardt)",
        category: "Identidad / autorización de agentes",
        narrative: "En la vía de borradores del IETF; presentado como el estándar de autenticación de agentes.",
        measured: "0 despliegues en producción (al 2026-07-06); borrador del IETF rev-09.",
        authPosture: "Raíz anclada en el DNS del proveedor — no en llaves propiedad de una persona.",
        source:
          "Borrador público del IETF — AAuth (Dick Hardt); borrador rev-09 al 2026-07-06, actualizar la fecha si avanza antes de publicar.",
      },
      "lyrie-atp": {
        subject: "Lyrie / ATP",
        category: "Identidad de agentes",
        narrative: "Levantando capital con la tesis de identidad de agentes; afiliado a Anthropic.",
        measured: "En etapa de whitepaper; sin producción demostrada — “levantó capital con un whitepaper.”",
        authPosture: "[TBD-verify]",
        source:
          "Evaluación del AIOS Observatory — etapa de whitepaper; sin producción demostrada a mediados de 2026.",
      },
      sierra: {
        subject: "Sierra",
        category: "Trabajo de agentes (dinero real)",
        narrative: "—",
        measured: "~$100M en ingresos, con precio por “resolución.”",
        authPosture: "[TBD-verify]",
        source: "Precios públicos / prensa de la empresa.",
      },
      "cognition-devin": {
        subject: "Cognition / Devin",
        category: "Trabajo de agentes (dinero real)",
        narrative: "—",
        measured: "$2.25 por cada 15 minutos (precio público).",
        authPosture: "[TBD-verify]",
        source: "Precios públicos (Cognition / Devin).",
      },
    },
  },

  claim: {
    eyebrow: "Un carril abierto · una pregunta que creemos importante, ofrecida, no reclamada",
    title: "Claim Provenance",
    p1: (
      <>
        La prueba responde <B>¿esto es real?</B> No tiene respuesta para{" "}
        <B>¿debería desconfiar — y quién, exactamente, está detrás de la duda?</B> En una época en la que la IA hace
        que la sospecha coordinada, verosímil e incansable sea más barata que nunca, tenemos una capa de hechos
        para lo que las cosas son. No tenemos nada para quien fabrica dudas sobre ellas.
      </>
    ),
    p2: (
      <>
        La primitiva que falta: una respuesta verificable a{" "}
        <I>quién está realmente detrás de esta afirmación, desde cuándo, en coordinación con quién</I> — la detección
        de inautenticidad coordinada como infraestructura pública, no como la caja negra privada de confianza y
        seguridad de una plataforma. Procedencia que apunta al acusador, no al acusado. Procedencia para la
        sospecha misma.
      </>
    ),
    inviteLead: "Dejamos esta pregunta abierta por escrito — como invitación, no como reclamo. ",
    inviteRest:
      "Un carril sin ocupar que creemos importante, nombrado en público para que quienes deberían construirlo puedan encontrarlo — la misma postura de anfitrión que el Proof Pair. La especificación todavía no está escrita. Tampoco la de nadie más, y preferimos ayudar a abrir el carril que cercarlo. Considera esto una puerta abierta.",
    bridgeNext: "En contexto — el mapa completo",
    bridge: (
      <>
        Ese es el carril que estamos abriendo. Este es el campo completo en el que se ubica —{" "}
        <S>cada riel jalando en la misma dirección, y dónde el carril todavía se ve vacío.</S>
      </>
    ),
  },

  scene: {
    eyebrow: (n) => `El panorama — ${n} rieles, una dirección`,
    howItFits: "Cómo encaja:",
    source: "Fuente:",
    checked: "verificado",
    lanes: {
      identity: { label: "Identidad", question: "¿Quién es este agente y quién lo respalda?" },
      authority: { label: "Autoridad", question: "¿Qué puede hacer, para quién, hasta cuándo — y se puede revocar?" },
      payments: { label: "Pagos", question: "¿Puede pagar, y se puede vincular el pago con lo que la persona aprobó?" },
      provenance: { label: "Procedencia", question: "¿Quién hizo qué, bajo la autoridad de quién — y cualquiera puede verificarlo?" },
      zk: { label: "Conocimiento cero", question: "¿Puede demostrar una afirmación sin revelar los datos detrás de ella?" },
      framing: { label: "Encuadre", question: "Lo que el campo dice que es la brecha." },
    },
    status: {
      shipping: "En producción",
      converging: "Convergiendo",
      forming: "En formación",
      guidance: "Guía",
    },
    rails: {
      ap2: {
        name: "AP2 — Agent Payments Protocol",
        org: "Google → FIDO Alliance",
        what: "Artefactos firmados de intención del usuario para el comercio de agentes: Intent Mandates (lo que el usuario autorizó al agente a buscar) y Cart Mandates (la transacción específica aprobada). Google lo donó a la FIDO Alliance en abril de 2026, donde lo desarrolla su Payments Technical Working Group; la versión más reciente es la v0.2.",
        relation:
          "Un mandato del Proof Pair se compila a un Intent/Cart Mandate de AP2 para pagos. La diferencia: la cadena de confianza de AP2 termina en una cuenta del procesador; la del Proof Pair termina en una raíz humana o institucional verificable — que es lo que necesita la delegación regulada e interinstitucional.",
        sourceLabel: "FIDO Alliance — Google dona AP2 (abr 2026)",
      },
      erc8004: {
        name: "ERC-8004 — Trustless Agents",
        org: "Ethereum",
        what: "Registros on-chain de identidad, reputación y validación de agentes — rieles públicos de anclaje que cualquier framework de agentes puede referenciar. Los registros de identidad y reputación están desplegados en Ethereum mainnet; el registro de validación todavía no, y el EIP sigue siendo un Draft.",
        relation:
          "Los DIDs de agentes se pueden registrar en su registro de identidad, y los checkpoints de la cadena de recibos pueden publicarse en su registro de validación (la ruta de anclaje planeada para la v0.1 del Proof Pair).",
        sourceLabel: "EIP-8004 (estado: Draft) + repositorio oficial de contratos",
      },
      "did-vc": {
        name: "W3C DIDs + Verifiable Credentials",
        org: "W3C",
        what: "El sustrato de identidad: identificadores descentralizados más afirmaciones verificables criptográficamente — el modelo de datos debajo de todo sistema de credenciales serio. VC Data Model 2.0 y DID Core 1.0 son W3C Recommendations; DID 1.1 es una Candidate Recommendation.",
        relation:
          "Cada actor en el Proof Pair es un DID; un mandato es una Verifiable Credential. Esta es la capa sobre la que se sostiene todo el panorama.",
        sourceLabel: "W3C Recommendation — VC Data Model 2.0 (15 de mayo de 2025)",
      },
      "sd-jwt-vc": {
        name: "SD-JWT VC",
        org: "IETF (OAuth WG)",
        what: "Credenciales verificables como JWT con divulgación selectiva a nivel de afirmación y vinculación criptográfica al titular (KB-JWT). El formato base ya es el RFC 9901; el perfil de VC está en evaluación del IESG.",
        relation:
          "El único formato normativo del mandato en el Proof Pair v0 — un agente demuestra “puedo gastar ≤ $X para la organización Y” sin revelar todo su conjunto de permisos.",
        sourceLabel: "IETF Datatracker — draft-ietf-oauth-sd-jwt-vc (evaluación del IESG)",
      },
      oid4vc: {
        name: "OID4VC (OID4VCI + OID4VP)",
        org: "OpenID Foundation",
        what: "Los transportes de emisión y presentación de credenciales verificables — cómo se mueven las credenciales entre emisores, titulares y verificadores sobre HTTP. Ambas son especificaciones Final 1.0 (OID4VP en julio de 2025, OID4VCI en septiembre de 2025); la adopción todavía está en aumento.",
        relation:
          "Los bindings perfilados del Proof Pair para emitir mandatos y presentarlos a verificadores HTTP. Las wallets de agentes sin interfaz son titulares conformes.",
        sourceLabel: "OpenID Foundation — OID4VCI 1.0 (Final)",
      },
      didcomm: {
        name: "DIDComm v2",
        org: "DIF",
        what: "Mensajería cifrada e independiente del transporte entre partes identificadas por DID, con mediadores que encolan mensajes para agentes fuera de línea. La v2.1 es una DIF Ratified Specification.",
        relation:
          "El transporte agente a agente y de buzón: cómo un agente sin interfaz recibe y presenta mandatos mientras su máquina está dormida.",
        sourceLabel: "DIF — DIDComm Messaging v2.1 (ratificada)",
      },
      bitstring: {
        name: "Bitstring Status List",
        org: "W3C",
        what: "Revocación de credenciales a escala — una forma compacta y respetuosa de la privacidad para que los verificadores comprueben si una credencial sigue vigente. W3C Recommendation desde mayo de 2025.",
        relation:
          "El único mecanismo normativo de revocación del Proof Pair: un agente comprometido debe poder detenerse en segundos, no en las horas de una CRL.",
        sourceLabel: "W3C Recommendation — Bitstring Status List (15 de mayo de 2025)",
      },
      c2pa: {
        name: "C2PA",
        org: "Coalition for Content Provenance",
        what: "Manifiestos de procedencia firmados y de solo anexado para contenido multimedia — quién lo hizo, con qué, cómo se modificó. La especificación está en la versión 2.5 (octubre de 2026).",
        relation:
          "La fuente del patrón para la cadena de recibos: la misma disciplina de manifiestos firmados y a prueba de manipulación, aplicada a acciones de agentes en lugar de archivos multimedia.",
        sourceLabel: "C2PA Technical Specification 2.5",
      },
      "zero-trust": {
        name: "Zero Trust for AI Agents",
        org: "Anthropic",
        what: "El encuadre de seguridad publicado en 2026: Zero Trust para agentes significa identidades con raíz criptográfica y permisos acotados por tarea — porque los controles de acceso tradicionales no impedirán que un agente abuse de permisos que tiene legítimamente.",
        relation:
          "Nombra la brecha que llena el Proof Pair. La identidad responde quién. Un mandato responde qué puede hacer este agente, para quién, hasta cuándo. Un recibo responde quién hizo qué, bajo la autoridad de quién.",
        sourceLabel: "Anthropic — Zero Trust for AI agents (27 de mayo de 2026)",
      },
      "verifiable-intent": {
        name: "Verifiable Intent",
        org: "Mastercard",
        what: "Una cadena de credenciales firmadas (SD-JWT en capas) que demuestra que la compra de un agente se mantuvo dentro de los límites que fijó la persona — monto, comercio, artículos. Publicada en marzo de 2026 como borrador abierto (v0.1), mantenida por Mastercard y abierta a contribuciones de múltiples actores.",
        relation:
          "Construida sobre SD-JWT, la misma familia de formatos que un mandato del Proof Pair, así que cada uno puede expresarse en los términos del otro. Responde la mitad de pagos de la pregunta que el mandato responde en general: ¿la persona autorizó esto, dentro de estos límites?",
        sourceLabel: "Especificación de Verifiable Intent — README (Draft v0.1)",
      },
      x402: {
        name: "x402",
        org: "x402 Foundation (Linux Foundation) · incubado por Coinbase",
        what: "El pago dentro de la propia solicitud HTTP, usando el estado 402 Payment Required, reservado desde hace mucho: un cliente o agente paga por un recurso y lo obtiene en un solo intercambio. Lanzado por Coinbase en 2025; ahora lo gobierna un proyecto de la Linux Foundation que contaba con 40 organizaciones miembro en su lanzamiento de julio de 2026.",
        relation:
          "Liquida el pago; no dice nada sobre quién lo autorizó. Esa es la mitad que aporta un mandato — la prueba de que este gasto fue delegado, por quién y dentro de qué límite.",
        sourceLabel: "Linux Foundation — lanzamiento operativo de la x402 Foundation (14 jul 2026)",
      },
      semaphore: {
        name: "Semaphore",
        org: "Privacy & Scaling Explorations · Ethereum Foundation",
        what: "Demuestra que perteneces a un grupo sin revelar qué miembro eres, con un nullifier que impide que el mismo miembro emita una señal dos veces. Va en su cuarta versión mayor (v4, 2024; última versión en octubre de 2026).",
        relation:
          "Membresía sin identidad: un agente podría demostrar que actúa en nombre de algún miembro verificado de una organización sin revelar cuál — el borde del carril de identidad que preserva la privacidad.",
        sourceLabel: "Documentación + versiones de Semaphore (v4.14.5, oct 2026)",
      },
      bbs: {
        name: "Data Integrity BBS Cryptosuites",
        org: "W3C",
        what: "Divulgación selectiva para credenciales verificables con pruebas derivadas no vinculables: un titular revela solo algunos campos, y dos presentaciones de la misma credencial no pueden correlacionarse. Una W3C Candidate Recommendation (septiembre de 2026).",
        relation:
          "La propiedad de privacidad que SD-JWT por sí solo no ofrece: el mismo mandato presentado a dos verificadores no puede vincularse de vuelta a un solo agente.",
        sourceLabel: "W3C Candidate Recommendation Draft — vc-di-bbs (10 de septiembre de 2026)",
      },
      zkml: {
        name: "zkML — inferencia verificable",
        org: "Campo abierto · EZKL entre los provers más usados",
        what: "Pruebas de conocimiento cero de que un modelo determinado produjo una salida determinada, sin revelar los pesos ni las entradas. Las herramientas existen y las pruebas pueden verificarse on-chain, en un navegador o en un dispositivo; el costo de generar las pruebas sigue siendo alto y todavía no hay un estándar.",
        relation:
          "Para los recibos, la diferencia entre “un agente hizo esto” y “este modelo, bajo este mandato, hizo esto” — demostrable ante alguien que no puede ver el modelo.",
        sourceLabel: "EZKL — prover zkML abierto (v23.0.5, feb 2026)",
      },
    },
  },

  market: {
    eyebrow: "El panorama de identidad de agentes, mapeado",
    h2: <>Comparado contra un{" "}<A>sistema en funcionamiento</A>, no contra un whitepaper.</>,
    intro: (
      <>
        La mayoría de las comparaciones de identidad de agentes enfrentan whitepapers contra whitepapers. Esta está
        calibrada contra una implementación de punta a punta comprobada — un sistema en funcionamiento en el que a
        un agente se le emite una credencial acotada y vinculada a su dueño, la presenta a una contraparte de otra
        organización sin relación previa, y esa credencial se verifica criptográficamente en el canal, con
        divulgación selectiva y revocación explícita, hoy. Aquí la vara es <B>implementado, no propuesto.</B>
      </>
    ),
    laneEyebrow: "El carril, dicho primero",
    laneIntro:
      "Esta es la combinación específica que el campo no ha entregado — una identidad de agente que sea todo esto al mismo tiempo:",
    uniqueNote: " (Nadie más en este mapa hace esto.)",
    laneOutro: <><S>Ninguna solución del campo entrega todo lo anterior.</S> El mapa de abajo muestra dónde se detiene cada una.</>,
    criteria: [
      {
        label: "Con raíz en la persona",
        detail:
          "la raíz de confianza es una llave en manos de un ser humano — no de un proveedor de nube, una autoridad certificadora ni un registro DNS.",
      },
      {
        label: "Verificable fuera de línea",
        detail: "una contraparte puede verificar la credencial sin una consulta en vivo al emisor.",
      },
      {
        label: "Interorganizacional sin relación previa",
        detail: "dos partes que nunca se han dado de alta entre sí pueden verificar de todos modos.",
      },
      {
        label: "Anclada a un gobierno / institución",
        detail:
          "la raíz humana puede vincularse a una identidad real y con validez legal cuando el contexto lo exige.",
      },
      {
        label: "Portabilidad, divulgación selectiva y revocación explícita",
        detail: "lo mínimo indispensable que las mejores soluciones ya comparten.",
      },
    ],
    solutionsEyebrow: "Seis soluciones — lo que hacen, dónde se detienen",
    solutionsIntro: (
      <>
        Una distinción crucial atraviesa el campo:{" "}
        <B>la mayoría no son rivales — son puntos de integración.</B> Cuatro de las seis operan en capas por debajo
        o al lado de la autoridad del agente (dónde corren los agentes, cómo se controla el tráfico, quién emite
        dentro de una empresa). Solo una ocupa la misma capa.
      </>
    ),
    whatItDoes: "Lo que hace",
    whereItStops: "Dónde se detiene",
    relationship: {
      rival: { label: "Rival directo", blurb: "Misma capa — intenta resolver el mismo problema." },
      technique: { label: "Técnica a adoptar", blurb: "Fuente de una idea que vale la pena tomar, no un producto competidor." },
      integration: {
        label: "Punto de integración",
        blurb: "Una capa por debajo o al lado — un lugar donde conectarse, no un carril por el cual pelear.",
      },
    },
    solutions: {
      aauth: {
        name: "AAuth",
        qualifier: "Dick Hardt · borrador del IETF",
        what: "Autorización delegada para agentes. El intento más directo de resolver el mismo problema: permitir que un principal otorgue autoridad acotada a un agente. Incluye un patrón de consentimiento asíncrono realmente bueno (aprobación pendiente / diferida).",
        stops:
          "La raíz de confianza está anclada en el DNS del proveedor, no en llaves que tenga la persona — así que la autoridad termina en un proveedor, no en un humano. Un borrador en vía de estándar que, al momento de escribir esto, no tiene despliegues en producción. No es verificable fuera de línea.",
        note: "Rival directo — misma capa. Pero con raíz en DNS y todavía antes de producción.",
      },
      pic: {
        name: "PIC",
        qualifier: "tokens de delegación / capacidad · [TBD-verify: confirmar nombre completo]",
        what: "Un esquema de tokens de capacidad para delegar permisos acotados, con una regla firme de solo atenuar: cada salto en una cadena de delegación solo puede reducir la autoridad, nunca ampliarla.",
        stops:
          "Resuelve la subdelegación con elegancia, pero no incluye una raíz en la persona, anclaje gubernamental ni verificación interorganizacional sin infraestructura compartida. Adyacente al carril, no dentro de él.",
        note: "Fuente de una buena idea — vale la pena adoptar el invariante de atenuación; el protocolo no es el mismo producto.",
      },
      entra: {
        name: "Microsoft Entra Agent ID",
        what: "Identidad empresarial para agentes dentro de una sola organización / tenant — emitir, listar y gobernar los agentes propios de una organización a escala, con herramientas maduras de ciclo de vida.",
        stops:
          "Limitado a la organización que emite. Es un emisor intraorganizacional, no un tejido de confianza interorganizacional; dos agentes de empresas distintas no obtienen verificabilidad mutua a partir de él.",
        note: "Punto de integración (un emisor con el cual interoperar), con modelos de ciclo de vida de los que vale la pena aprender. Punto a vigilar: si se combina con un producto de credenciales verificadas para la portabilidad interorganizacional, la frontera podría moverse. [TBD-verify: estado de GA]",
      },
      agentgateway: {
        name: "agentgateway",
        what: "Una capa de aplicación de políticas para el tráfico de agentes — evalúa expresiones de política ricas en el gateway y permite / niega llamadas. Nativa de la nube, bien distribuida.",
        stops:
          "Aplica políticas; no establece quién es el agente ni de dónde viene su autoridad. Necesita una autoridad que aplicar.",
        note: "Punto de integración — una credencial con raíz en la persona es un token estándar que entra a su motor de políticas con una adaptación mínima. Componer, no competir.",
      },
      kagent: {
        name: "kagent",
        what: "Un runtime de agentes — donde los agentes se construyen y se ejecutan.",
        stops:
          "Ejecuta agentes; no dice nada sobre identidad portátil y verificable ni sobre autoridad interorganizacional.",
        note: "Punto de integración — la capa debajo de la identidad, no un rival de ella.",
      },
      "agent-substrate": {
        name: "agent-substrate",
        what: "Un runtime / sustrato de agentes — infraestructura para operar agentes.",
        stops: "Sustrato operativo, no una capa de identidad ni de autoridad.",
        note: "Punto de integración — no es un rival.",
      },
    },
    tallyLead: "El conteo: ",
    tally:
      "cuatro puntos de integración (dos runtimes, una capa de aplicación de políticas, un emisor intraorganizacional), una fuente de técnica a adoptar y un verdadero rival en la misma capa — AAuth — que tiene raíz en DNS y todavía no llega a producción.",
    sitsEyebrow: "Dónde se ubica el enfoque con raíz en la persona",
    sits: (
      <>
        Frente a ese mapa, el carril sigue abierto. Una credencial de agente con raíz en la persona — vinculada a su
        dueño, revocable, con divulgación selectiva, interorganizacional, verificable fuera de línea y anclable a una
        identidad del mundo real — es la única combinación que nadie más arma. La persona tiene la llave de la que
        desciende la autoridad: AAuth tiene su raíz en DNS, los emisores empresariales en un tenant, los runtimes no
        tienen raíz alguna. La verificación fuera de línea es exclusiva de este enfoque en todo el mapa. Esto no
        afirma que todos los demás estén equivocados — resuelven problemas <I>distintos</I>, y la capa de
        autoridad que se ubica por encima de todos ellos, con raíz en una persona, está desocupada.
      </>
    ),
    limitEyebrow: "El límite honesto — dónde la raíz en la persona realmente importa",
    limit: (
      <>
        Un mapa de mercado que solo enumera fortalezas no es creíble. Una raíz de confianza propiedad de una persona
        tiene demanda real{" "}
        <B>solo donde el contexto exige que un humano haya autorizado algo</B> — actos de gobierno, mandatos con
        validez legal, transacciones ciudadanas, consentimiento regulado. Donde la autoridad es puramente de máquina
        a máquina y ningún humano necesita estar demostrablemente detrás, una raíz de proveedor o un emisor
        organizacional suelen bastar, y son más baratos. Así que este es a la vez el mercado y su borde: el valor es
        mayor justo donde la ley, una institución o la rendición de cuentas exigen que una persona real respalde la
        acción del agente — y deliberadamente no intenta ser la opción por defecto para cada llamada automatizada
        entre dos servicios. Dos análisis separados llegaron de forma independiente a este mismo límite; la
        convergencia independiente en la frontera honesta de un sistema es una señal de credibilidad, no una
        debilidad.
      </>
    ),
    composeEyebrow: "Componer, no competir",
    compose: (
      <>
        La posición a la que apuntamos es ser la capa de autoridad sobre la que todos los demás puedan construir —
        adoptando las mejores ideas sin adoptar protocolos completos: <B>atenuación por salto</B> (la subdelegación
        solo puede reducir la autoridad, nunca ampliarla), <B>consentimiento asíncrono</B> (la aprobación diferida /
        pendiente como flujo de primera clase) y <B>modelos de ciclo de vida</B> de los emisores empresariales. Un
        mandato con raíz en la persona es la fuente de verdad que se traduce a los protocolos de autorización que el
        ecosistema ya usa — montándose en los rieles existentes en lugar de pelear contra ellos. La prueba de
        &ldquo;componer, no competir&rdquo; es una integración, no un argumento.
      </>
    ),
    alignmentLead: "Alineación con estándares: ",
    alignment:
      "construido sobre los estándares abiertos hacia los que converge la categoría, e interoperable con ellos — ERC-8004, AP2, W3C Verifiable Credentials, SD-JWT y OID4VC — para que la componibilidad venga de diseño, no añadida después.",
    questionsEyebrow: "Preguntas abiertas para la categoría",
    questions: [
      {
        h: "Llaves personales bajo custodia de plataformas.",
        b: "Las plataformas de consumo más grandes ya custodian llaves a escala de persona (el patrón “iniciar sesión con…”). La pregunta abierta es si la economía agéntica de consumidores y ciudadanos — donde de verdad se requiere una raíz personal autocustodiada — crece lo suficiente y lo bastante rápido antes de que las llaves custodiadas por plataformas se conviertan en la raíz de facto.",
      },
      {
        h: "Consolidación de suites empresariales.",
        b: "Un proveedor de identidad empresarial que conecte su producto de ID de agentes con su producto de credenciales verificables podría empujar hacia la portabilidad interorganizacional desde una base instalada enorme.",
      },
      {
        h: "La consagración de un organismo de estándares.",
        b: "Si un grupo de trabajo adopta como predeterminado un borrador con raíz en el proveedor, podría convertirse en un punto focal empresarial sin importar su madurez en producción. Hasta ahora, el ecosistema de herramientas se ha inclinado en la dirección opuesta.",
      },
    ],
    closing:
      "Un mapa de un campo vivo, trazado con honestidad, por el equipo que mide la categoría en lugar de hacerle marketing. Comparado contra una implementación de punta a punta en funcionamiento a mediados de 2026; los borradores de estándares y los estados de los productos evolucionan — las afirmaciones sensibles al tiempo se vuelven a verificar antes de publicar.",
  },

  emptyLane: {
    legend: { rival: "rival", integration: "punto de integración", watch: "adyacente / a vigilar" },
    replay: "↻ repetir",
    aria:
      "Un mapa de tres por tres del panorama de identidad de agentes. Ocho casillas se llenan una por una — AAuth, el único rival en la misma capa, luego los puntos de integración Entra Agent ID, agentgateway, kagent, agent-substrate y MCP-auth, más los patrones adyacentes PIC y passkeys. La casilla central se queda vacía y luego pulsa al despertar como el carril abierto, con cuatro diferenciadores que nadie más combina: raíz en la persona, verificación fuera de línea, interorganizacional, anclado a gobierno. El único carril todavía abierto.",
    roles: {
      aauth: "rival · raíz DNS · 0 prod",
      entra: "emisor intraorg",
      pic: "patrón de atenuación",
      agentgateway: "capa de políticas",
      kagent: "runtime",
      substrate: "runtime",
      mcpAuth: "destino OAuth 2.1",
      passkeys: "patrón adyacente",
    },
    openLane: "carril abierto",
    chips: ["raíz en persona", "verifica offline", "interorg", "anclado a gob."],
    caption: "El único carril todavía abierto.",
  },

  receipt: {
    flow: ["mandato", "acción", "recibo"],
    replay: "↻ repetir",
    aria:
      "Una credencial de mandato viaja del emisor al agente; cada acción que realiza el agente estampa un recibo firmado en una cadena de hashes que va creciendo. Tres recibos se enlazan; la cadena terminada se ilumina.",
    issuer: "Emisor",
    mandate: "Mandato",
    agent: "Agente",
    action: "Acción",
    receipt: "Recibo",
    caption: "Cada acción, trazada de forma demostrable",
  },

  footer: {
    lead: "El mapa es descriptivo, no un marcador.",
    rest:
      "La mayoría de estos rieles son trabajo de otras personas, y buen trabajo — el panorama gana cuando interoperan. Donde el Proof Pair se relaciona con uno, la tarjeta dice cómo; donde se compila a uno, la especificación dice exactamente cómo.",
    kept: "Mantenido al día por los agentes de investigación de The AIOS · Rieles verificados de nuevo el 2 de noviembre de 2026; Pulse y mapa de mercado a julio de 2026",
    guardian: "the-aios.org — the Guardian",
  },
};
