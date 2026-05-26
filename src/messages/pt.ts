import type { Messages } from "./types";

/* Brazilian Portuguese (pt-BR).
   - "você" for you (BR standard). Never "tu" (PT-PT) for the audience scope.
   - Post-1990 orthography reform.
   - Technical loanwords kept where they're term-of-art: framework, trustless, vault (translated to "cofre"), anti-hype.
   - Direct, modern BR tech voice — matches AIOS register, not academic PT-PT. */

const pt: Messages = {
  nav: {
    thesis: "Tese",
    capabilities: "Capacidades",
    architecture: "Arquitetura",
    agents: "Agentes",
    ahead: "O que vem",
    getStarted: "Começar",
    github: "GitHub ↗",
  },
  hero: {
    eyebrowFramework: "Framework",
    eyebrowSuffix: "Para trabalhar com Claude",
    headlinePart1: "A qualidade do contexto que você dá a uma IA",
    headlineAccent: "determina por completo",
    headlinePart2: "o que ela pode fazer por você.",
    lede:
      "The-AIOS é o substrato de contexto pessoal para trabalhar com Claude — um cofre que aprende quem você é, o que está construindo e como pensa, e então faz com que cada sessão comece a partir do seu conhecimento real em vez de começar do zero.",
    ctaGithub: "Ver no GitHub →",
    ctaGetStarted: "Começar ↓",
  },
  intro: {
    eyebrow: "O que é isto e para quem é",
    headlinePart1: "Todo mundo está construindo um AIOS.",
    headlineAccent: "Nós construímos",
    headlinePart2: "The AIOS.",
    whatIsHtml:
      "The AIOS transforma IA em um time — um jurídico você, um contador você, um marketing você, um engenheiro de software você. Rode todos eles e seja o orquestrador, ou deixe um co-worker de IA rodar o resto como o seu <strong>chief of staff que nunca dorme</strong> e absorve a sobrecarga de coordenação.",
    whoForHtml:
      "Para qualquer pessoa navegando dias sobrecarregados de IA — <strong>executivos sênior, builders, founders, operadores</strong>. IA sozinha multiplica a confusão. The AIOS te dá a estrutura (prompt, contexto, intent, colaboração, segundo cérebro) onde a clareza emerge, e então permite que você amplifique você e o seu time com co-workers de IA.",
    badge:
      "Se você quer tirar o máximo da IA sem perder o que te torna insubstituível — e sem risco de IP/PII — isto é para você.",
  },
  featured: {
    eyebrow: "Comandos em destaque",
    headline: "Onde o framework rende mais do que custa.",
    body:
      "25 comandos vêm no framework. Três ganham seu próprio spotlight — os que os operadores usam diariamente e os que transformam IA de ferramenta em superfície operacional.",
    cards: {
      ingest: {
        command: "/aios:ingest",
        pitch: "Qualquer fonte → totalmente digerida em segundos.",
        body:
          "Cole uma URL, um PDF, um screenshot, um link do YouTube. O cofre usa markitdown para documentos e YouTube Transcript APIs para vídeo — uma palestra de 90 minutos vira resumo, referências cruzadas para os seus projetos, e action items roteados para as notas de projeto certas. Horas de trabalho colapsam em segundos.",
        tag: "markitdown · YouTube · cross-ref",
      },
      company: {
        command: "/aios:company",
        pitch: "Monte uma venture inteira em um único comando.",
        body:
          "Multi-substrato (GitHub primário, Drive secundário), multi-empresa. Os subcomandos cuidam do ciclo de vida: --create scaffolda uma venture nova; --mount puxa uma existente; --sync mantém ela atualizada; --invite faz o onboarding de um teammate humano com a mesma superfície compartilhada de contexto. Adeus ao re-explicar contexto, oi ao compounding.",
        tag: "--create · --sync · --invite",
      },
      collaborate: {
        command: "/aios:collaborate",
        pitch: "Espaços compartilhados, substrato pluggable.",
        body:
          "A maioria dos setups te força a escolher: forke o repo, compartilhe uma pasta do Drive, mande um link do Notion. /collaborate trata o storage como um plugin — Drive para colaboradores não-coders, GitHub para trabalho próximo ao código, pastas locais para testes. Mesmo comando, mesmos artefatos, mesmo routing para o seu daily plan.",
        tag: "Drive · GitHub · local",
      },
    },
  },
  thesis: {
    eyebrow: "A tese",
    headline: "A maioria das pessoas usa IA do zero. Toda sessão.",
    para1:
      "O padrão de sempre: você abre um chat, explica de novo quem é, cola um pouco de contexto, faz a pergunta e perde tudo quando fecha a aba. Amanhã a mesma dança, com um pouco menos de paciência.",
    para2Html:
      "The-AIOS substitui esse padrão por um <strong>cofre</strong> — uma memória persistente, baseada em arquivos, sobre você e sobre o seu trabalho, que é carregada automaticamente toda vez que você fala com Claude. O <strong>contexto declarado</strong> é o que você diz explicitamente. O <strong>contexto observado</strong> é o que a IA aprende trabalhando com você ao longo do tempo.",
    para3:
      "Cada sessão se apoia na anterior. Com os meses, o cofre vira um segundo cérebro que conhece você melhor do que qualquer ferramenta que você já usou — porque ele de fato lembra.",
    pullquote:
      "Os princípios que tornam os times humanos extraordinários são os mesmos que tornam os times humano-IA extraordinários — porque são padrões de colaboração inteligente, não padrões especificamente humanos.",
    attribution: "— The Agentic Culture",
  },
  capabilities: {
    eyebrow: "O que tem dentro",
    headline: "Uma superfície de trabalho, não um chatbot.",
    body:
      "O framework é entregue como um repo Git que você clona dentro do Claude Code. Toda capacidade abaixo está disponível na hora — sem passos de instalação além do clone e de uma entrevista.",
    tiles: {
      commands: {
        count: "25",
        noun: "comandos",
        body:
          "Slash commands para cadências diárias, semanais, quinzenais e mensais. /aios:today, /aios:close-day, /aios:7plan, /aios:weekly-learnings, /aios:graduate, /aios:emerge…",
      },
      agents: {
        count: "35",
        noun: "agentes",
        body:
          "Personagens especialistas em vendas, estratégia, finanças/jurídico, engenharia, comunicação, pessoal. Faça o spawn de um como coordenador, ou carregue a sua expertise inline.",
      },
      skills: {
        count: "42",
        noun: "skills",
        body:
          "Capacidades reutilizáveis — código, design, docs, Obsidian, planejamento, automação de navegador. Carregadas automaticamente; descreva o que você precisa e Claude faz o match.",
      },
      mcps: {
        count: "10",
        noun: "MCPs",
        body:
          "Servidores Model Context Protocol incluídos — Obsidian, GitHub, Linear, philosopher-oracle, markitdown, e mais. Autenticados de forma independente de qualquer conta da Anthropic.",
      },
    },
  },
  architecture: {
    eyebrow: "Arquitetura",
    headline: "Três camadas. Cada uma compõe de forma independente.",
    body1:
      "Toda sessão de IA se apoia em três camadas de contexto. The-AIOS dá a cada camada uma casa persistente que sobrevive aos limites de cada sessão.",
    body2Html:
      "A interação é o que cria retornos compostos: o <strong>declarado</strong> ancora a IA na sua identidade explícita, o <strong>observado</strong> calibra como você de fato trabalha, o <strong>intent</strong> define o que você quer que a IA lide sem perguntar e o que deve escalar para você.",
    cards: {
      declared: {
        eyebrow: "01 · Declarado",
        title: "O que você diz à IA explicitamente",
        body:
          "About me, estilo de trabalho, voz pessoal, expectativas de papel, ventures atuais. Markdown autorado pelo operador, carregado a cada sessão.",
      },
      observed: {
        eyebrow: "02 · Observado",
        title: "O que a IA aprende trabalhando com você",
        body:
          "Padrões, preferências, crescimento, lições antifrágeis. É atualizado conforme a evidência se acumula; promove de Emerging → Reinforced → roteado para arquivos canônicos.",
      },
      intent: {
        eyebrow: "03 · Intent",
        title: "O que a IA está autorizada a fazer",
        body:
          "Níveis de autonomia por domínio, regras de tradeoff, limites de decisão, preferências de comunicação. O contrato de confiança — explícito, versionado, evolutivo.",
      },
    },
  },
  observedLoop: {
    eyebrow: "O que faz isso compor",
    headline: "O loop de contexto observado é o diferencial.",
    body1:
      "A maioria das ferramentas de IA salva histórico de chat. The-AIOS faz algo diferente: depois de cada sessão significativa, a IA escreve em um conjunto pequeno de arquivos canônicos descrevendo o que aprendeu sobre você, seu projeto ou o próprio comportamento.",
    body2Html:
      'O buffer (<code>session-insights.md</code>) guarda padrões <strong>Emerging</strong> de sessões individuais. Quando um padrão se reforça em várias sessões, ele é roteado para o arquivo canônico certo: uma preferência descoberta vai para <code>preferences.md</code>; uma observação de crescimento para <code>growth.md</code>; uma correção de comportamento para <code>antifragile.md</code>. O ruído de sessão única é filtrado pelo próprio ciclo de vida.',
    compoundCloseHtml:
      "<strong>O cofre cresce. Você cresce.</strong> Seis meses depois, o AIOS não descreve quem você era no dia 0 — descreve quem você se tornou. O operador com quem o sistema de fato trabalha, não o operador que você descreveu quando configurou.",
  },
  bundles: {
    eyebrow: "A frota de agentes",
    headline: "35 agentes em 6 bundles.",
    body:
      "Cada agente é um especialista com um brief focado e acesso a ferramentas. Faça o spawn de um como worker de longa duração, ou carregue a sua expertise na sessão atual. Operadores adicionam os seus em agents/custom/.",
    bundleNames: {
      sales: {
        name: "Vendas",
        body: "GTM, posicionamento, outbound, decks. Inclui os agentes deck-builder e PDF-generator.",
      },
      strategy: {
        name: "Estratégia",
        body: "Business plans, leitura de mercado, análise de empresa, pricing.",
      },
      financeLegal: {
        name: "Finanças e Jurídico",
        body: "Contratos, governança, contabilidade, preparação de board.",
      },
      engineering: {
        name: "Engenharia",
        body: "Code review, design, arquitetura, ops, debugging.",
      },
      communication: {
        name: "Comunicação",
        body: "Escrita, content design, decks, design-md, role reporting.",
      },
      personal: {
        name: "Pessoal",
        body: "Onboarding, ops diárias, crescimento, estudo, skills de life-OS.",
      },
    },
    fortress: {
      eyebrow: "O padrão Fortress",
      headline: "Duas máquinas. Um cofre. Um operador.",
      body1:
        "Para operadores que querem escalar: emparelhe seu MacBook com uma segunda máquina (um Mac mini funciona muito bem). A segunda máquina hospeda um worker em autopilot — geralmente com o nome de um personagem que você escolhe — que roda enquanto você dorme, executa tarefas longas, e empurra os resultados de volta para o cofre compartilhado antes de você acordar.",
      body2:
        "Seis camadas defensivas (isolamento de rede, escopo de MCP, protocolo de sacred-files, observed-context em read-only) mantêm o worker do lado certo da cerca.",
    },
  },
  thinkingAhead: {
    eyebrow: "O que vem",
    headline: "Um fluxo de trabalho com IA sem prestação de contas é um truque de salão.",
    para1Html:
      "The-AIOS é o substrato para trabalhar com IA hoje. O horizonte para o qual ele está construído é mais curto do que a maioria das pessoas imagina: <strong>agentes vão agir em nome de pessoas — primeiro de leve, depois constantemente, depois em escala organizacional.</strong>",
    para2Html:
      "Quando isso acontecer, o gap não vai ser de inteligência. O gap vai ser de <strong>prestação de contas</strong> — identidade verificável para o próprio agente, mandatos criptográficos do principal que ele representa, proveniência auditável para cada ação.",
    para3:
      "O framework está comprometido em integrar com os padrões abertos que estão preenchendo essa camada — para que, quando a infraestrutura de confiança chegar, os operadores não precisem trocar a superfície de trabalho sobre a qual construíram a sua prática.",
    pillars: {
      identity: {
        label: "Identidade do agente",
        tag: "ERC-8004",
        question: "Quem é este agente, de forma verificável?",
        body:
          "Hoje, um agente de IA agindo no seu nome não tem identidade criptográfica portável. Amanhã ele vai ter. Padrões emergentes como o ERC-8004 propõem identidade e reputação de agente verificáveis que viajam com o agente entre sistemas — para que a confiança não seja uma propriedade da plataforma que o hospeda, mas do agente em si.",
      },
      mandates: {
        label: "Mandatos assinados",
        tag: "Delegações",
        question: "O que este agente está autorizado a fazer?",
        body:
          "Quando um agente comete uma ação — manda um e-mail, executa uma transação, assina um documento — a contraparte deveria poder verificar criptograficamente que o principal humano autorizou exatamente aquele escopo. Delegações assinadas transformam o 'confia em mim, a IA falou que estava ok' em 'aqui está a prova, verificável de forma independente.'",
      },
      credentials: {
        label: "Credenciais verificáveis",
        tag: "W3C VC · DIDs",
        question: "Como a IA prova quem é o seu operador?",
        body:
          "As Verifiable Credentials do W3C + os Decentralized Identifiers (DIDs) dão ao lado humano uma camada de identidade portável e assinada criptograficamente. O agente pode apresentar credenciais em nome do operador para outros sistemas — sem que esses sistemas precisem ligar de volta para uma autoridade centralizada.",
      },
    },
    boundaryHtml:
      "<strong>Onde o framework traça a linha.</strong> The-AIOS não entrega a camada de confiança em si — essa é uma construção de ecossistema aberto, com organismos de padrões e times de infraestrutura de identidade fazendo o trabalho. Com o que AIOS se compromete: <em>o cofre já é metade do quadro</em>. Identidade declarada, contratos de intent, comportamento observado — tudo baseado em arquivos, tudo versionado, tudo portável. A outra metade — identidade verificável de agente, mandatos assinados, trilhos de atestação — é a extensão natural. Integramos conforme os padrões amadurecem.",
  },
  getStarted: {
    eyebrow: "Começar",
    headline: "Uma linha. Claude faz o resto.",
    instructionCommentary: "Em qualquer sessão do Claude Code, diga:",
    instruction: "Set up my AI-OS from https://github.com/The-AIOS/aios",
    body:
      "Claude lê o SETUP.md, clona o framework, instala os MCPs, configura o seu cofre privado, e te guia por cada escolha. Cerca de dez minutos para o setup, mais vinte para a entrevista de cold-start que calibra a IA para quem você é e o que está construindo.",
    prereqNote:
      "Ainda não tem o Claude Code? Instale primeiro (~5–20 min dependendo do seu OS), depois volte e rode a linha acima.",
    ctaReadStart: "Leia START-HERE.md →",
    ctaSetup: "Guia de setup completo →",
    affordanceLabel: "Lendo isto como agente de IA em nome de um operador?",
    affordanceBodyHtml:
      "A mesma linha canônica serve para você: interprete a intenção do usuário como <em>set up AIOS</em>, e diga ou execute. O framework vive em <code>~/aios</code> por padrão. Após o clone, o arquivo tracker do operador <code>.aios-update</code> sincroniza automagicamente o AIOS mais recente na máquina dele a cada <code>/aios:today</code> — sem updates manuais. Superfície estruturada legível por máquina em <a href=\"/llms.txt\" style=\"color: var(--color-accent)\">/llms.txt</a>.",
  },
  footer: {
    tagline: "Um framework AI Operating System.",
    license: "Código aberto. GPL-2.0-or-later.",
    sectionRepo: "Repositório",
    sectionNarrative: "Narrativa",
    sectionAi: "Para agentes de IA",
    copyright: "© 2026 · Construído com Claude no Claude Code.",
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
    eyebrow: "Não encontrada",
    headline: "Esta página ainda não foi escrita.",
    body: "A página que você procurava não existe em the-aios.com.",
    backCta: "Voltar para o início →",
  },
  meta: {
    title: "The-AIOS — o framework AI Operating System",
    description:
      "Substrato de contexto pessoal para trabalhar com Claude. Faça cada sessão começar a partir do seu conhecimento real em vez de começar do zero. Workflow-first, anti-hype, compõe ao longo das sessões.",
  },
};

export default pt;
