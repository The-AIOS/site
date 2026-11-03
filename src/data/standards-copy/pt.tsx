import type { StandardsCopy } from "./types";
import { B, S, A, I, TBD } from "./fmt";

/* Brazilian Portuguese. Self-contained: every rail, pulse row and market solution
   is translated here, keyed by id. When the English data changes, update this file. */

export const pt: StandardsCopy = {
  meta: {
    title: "Padrões agênticos — o panorama, mapeado",
    description:
      "Agentes estão ganhando identidades, mandatos e recibos. Os padrões que tornam a delegação comprovável — W3C VCs, ERC-8004, SD-JWT, OID4VC, AP2, Verifiable Intent, x402, C2PA e uma faixa de conhecimento zero — mapeados e com fontes, com a especificação aberta Proof Pair no centro.",
    ogTitle: "Padrões agênticos",
  },
  nav: { home: "/pt", back: "← Voltar ao início", langLabel: "Português" },

  hero: {
    eyebrow: "Padrões agênticos · o panorama, mapeado",
    h1: <>Agentes estão ganhando identidades, mandatos e recibos.{" "}<A>Aqui está o mapa.</A></>,
    lede: (
      <>
        A delegação só funciona em escala quando é comprovável — quando um agente consegue mostrar{" "}
        <B>o que tem permissão para fazer</B> antes de agir e{" "}
        <B>quem fez o quê, sob a autoridade de quem</B> depois. Estes são os padrões que tornam isso real, o que
        cada um cobre e como eles se encaixam.
      </>
    ),
    arcEyebrow: "Uma página, um argumento — leia de cima a baixo",
    livePulse: "Pulso ao vivo",
    arc: [
      { k: "Primeiro", t: "O que operamos", d: "O Proof Pair — a especificação aberta que operamos: mandato na entrada, recibo na saída." },
      { k: "Depois", t: "Como lemos o campo", d: "O Agentic Pulse — a narrativa medida contra a realidade, cada número com fonte." },
      { k: "O que revela", t: "Uma faixa que estamos abrindo", d: "Claim Provenance — uma pergunta desocupada que achamos importante, colocada em público como convite." },
      { k: "Dentro de", t: "O mapa inteiro", d: "O panorama e o mercado — cada trilho, e onde a faixa ainda está vazia." },
    ],
  },

  proofPair: {
    eyebrow: "Nossa especificação de trabalho aberta · v0 · no ar",
    title: "The Proof Pair",
    body: (
      <>
        <I>Mandato na entrada, recibo na saída — delegação comprovável nas duas pontas.</I>{" "}
        Um mandato é autoridade que você pode verificar <S>antes</S> do ato: uma credencial verificável de um humano
        para um agente — com escopo, prazo de validade e revogável. Um recibo é atribuição que você pode verificar{" "}
        <S>depois</S> dele: um registro assinado e encadeado por hash que vincula a ação ao agente e ao mandato que a
        autorizou. Uma única especificação, porque todo recibo referencia seu mandato. É isso que operamos,
        especificado para que você também possa operar.
      </>
    ),
    specLink: "Leia a especificação — the-aios.org/proof-pair →",
    specNote: "· aberta, CC-BY 4.0, qualquer pessoa pode implementar",
    bridgeNext: "Depois — como lemos o campo",
    bridge: (
      <>
        É isso que operamos. Para situá-lo com honestidade, começamos lendo a economia de agentes como ela realmente
        é —{" "}<S>a história que ela conta, medida contra o que ela consegue mostrar.</S>
      </>
    ),
  },

  pulse: {
    pulseLabel: "Agentic Pulse — índice ao vivo",
    eyebrow: "Agentic Pulse · narrativa vs. realidade medida",
    h2: <>O que a economia de agentes <A>afirma</A> e o que ela consegue <A>mostrar</A>.</>,
    intro: (
      <>
        O pulso lê a distância entre a narrativa agêntica — a rodada de captação, o whitepaper, a projeção — e a
        realidade medida: volume real, status de produção, se a coisa consegue provar <I>quem</I> agiu. O fenômeno
        que ele revela é o que o campo chama de <I>agent-washing</I> (vender como agente o que não se sustenta como
        tal). É um diagnóstico, não um placar.{" "}
        <B>Cada número remete a uma fonte nomeada.</B> Onde um valor não tem fonte, aparece <TBD /> — nunca um
        número inventado.
      </>
    ),
    floorEyebrow: "Dinheiro real, para contraste — o piso honesto (não é washing)",
    floorIntro:
      "O índice também aponta para quem constrói com honestidade. Assim é a receita real e medida de agentes — o piso pelo qual a narrativa deveria ser avaliada, não apenas o teto pelo qual é vendida.",
    bridgeNext: "O que revela — uma faixa aberta",
    bridge: (
      <>
        Ler o campo dessa forma revela onde estão as lacunas. Uma delas ainda não tem ninguém ocupando — e{" "}
        <S>não é uma faixa a conquistar, é uma pergunta a abrir.</S>
      </>
    ),
    labels: { narrative: "Narrativa", measured: "Realidade medida", proves: "Consegue provar quem agiu?", source: "Fonte:" },
    confidence: { high: "confiança alta", medium: "confiança média", low: "confiança baixa" },
    stage: {
      production: "Produção",
      pilot: "Piloto",
      "draft-spec": "Rascunho",
      whitepaper: "Whitepaper",
      "[TBD-verify]": "TBD-verify",
    },
    headline: {
      execTrustLabel:
        "dos executivos confiam em agentes para análises de rotina — mas o número cai para ~20% no momento em que o agente toca uma transação.",
      execTrustSource: "Em breve — Sell Trust (2026).",
      ceilingLabel:
        "o dimensionamento canônico da economia agêntica — uma projeção top-down da Foundation Capital sobre os salários endereçáveis do trabalho do conhecimento, explicitamente NÃO receita medida. “Um mapa para o ouro, vendido no começo da trilha.”",
      ceilingSource: "Foundation Capital — projeção top-down.",
    },
    entries: {
      "payments-volume-gap": {
        subject: "Um protocolo de pagamentos de agentes (não nomeado na fonte)",
        category: "Pagamentos de agentes",
        narrative: "Narrativa de valuation na casa dos bilhões (moldura de ~US$ 7 bi).",
        measured: "~US$ 28.000/dia em volume real e medido.",
        authPosture: "[TBD-verify]",
        source: "Em breve — Sell Trust (2026). Protocolo deliberadamente não nomeado na fonte.",
      },
      "mcp-auth-scan": {
        subject: "Servidores MCP remotos (varredura populacional)",
        category: "Autenticação de ferramentas",
        narrative: "Posicionados como infraestrutura de ferramentas de agentes em produção.",
        measured: "~8.000 servidores varridos; ~40% não tinham nenhuma autenticação.",
        authPosture:
          "Entre os servidores que TINHAM autenticação, praticamente nenhum consegue provar quem está do outro lado — “uma chave, sim; uma identidade, não.”",
        source:
          "arXiv:2605.22333 — “A First Measurement Study on Authentication Security in Real-World Remote MCP Servers” (2026).",
      },
      aauth: {
        subject: "AAuth (Dick Hardt)",
        category: "Identidade / autorização de agentes",
        narrative: "Em trilha de rascunho no IETF; posicionado como o padrão de autenticação de agentes.",
        measured: "0 implantações em produção (em 2026-07-06); rascunho IETF rev-09.",
        authPosture: "Raiz ancorada no DNS do provedor — não em chaves de posse da pessoa.",
        source:
          "Rascunho público do IETF — AAuth (Dick Hardt); rev-09 em 2026-07-06, atualizar a data se avançar antes da publicação.",
      },
      "lyrie-atp": {
        subject: "Lyrie / ATP",
        category: "Identidade de agentes",
        narrative: "Captando com a tese de identidade de agentes; afiliada à Anthropic.",
        measured: "Estágio de whitepaper; nenhuma produção demonstrada — “captou com um whitepaper.”",
        authPosture: "[TBD-verify]",
        source: "Avaliação do AIOS Observatory — estágio de whitepaper; nenhuma produção demonstrada até meados de 2026.",
      },
      sierra: {
        subject: "Sierra",
        category: "Trabalho de agentes (dinheiro real)",
        narrative: "—",
        measured: "~US$ 100 mi de receita, com preço por “resolução”.",
        authPosture: "[TBD-verify]",
        source: "Preços públicos / imprensa da empresa.",
      },
      "cognition-devin": {
        subject: "Cognition / Devin",
        category: "Trabalho de agentes (dinheiro real)",
        narrative: "—",
        measured: "US$ 2,25 a cada 15 minutos (preço público).",
        authPosture: "[TBD-verify]",
        source: "Preços públicos (Cognition / Devin).",
      },
    },
  },

  claim: {
    eyebrow: "Uma faixa aberta · uma pergunta que achamos importante, oferecida, não reivindicada",
    title: "Claim Provenance",
    p1: (
      <>
        A prova responde <B>isto é real?</B> Ela não tem resposta para{" "}
        <B>devo desconfiar — e quem, exatamente, está por trás da dúvida?</B> Numa época em que a IA torna a
        desconfiança coordenada, plausível e incansável mais barata do que nunca, temos uma camada de fatos para o
        que as coisas são. Não temos nada para quem fabrica dúvida sobre elas.
      </>
    ),
    p2: (
      <>
        A primitiva que falta: uma resposta verificável para{" "}
        <I>quem está de fato por trás desta afirmação, desde quando, em coordenação com quem</I> — a detecção de
        inautenticidade coordenada como infraestrutura pública, não como a caixa-preta privada de confiança e
        segurança de uma plataforma. Proveniência apontada para quem acusa, não para quem é acusado. Proveniência
        para a própria suspeita.
      </>
    ),
    inviteLead: "Estamos registrando esta pergunta aberta em público — como convite, não como reivindicação. ",
    inviteRest:
      "Uma faixa desocupada que achamos importante, nomeada em público para que as pessoas que deveriam construí-la possam encontrá-la — a mesma postura de anfitrião do Proof Pair. A especificação ainda não foi escrita. A de mais ninguém também não, e preferimos ajudar a abrir a faixa a cercá-la. Considere isto uma porta aberta.",
    bridgeNext: "Dentro de — o mapa inteiro",
    bridge: (
      <>
        Essa é a faixa que estamos abrindo. Aqui está o campo inteiro em que ela se insere —{" "}
        <S>cada trilho puxando na mesma direção, e onde a faixa ainda aparece vazia.</S>
      </>
    ),
  },

  scene: {
    eyebrow: (n) => `O panorama — ${n} trilhos, uma direção`,
    howItFits: "Como se encaixa:",
    source: "Fonte:",
    checked: "verificado em",
    lanes: {
      identity: { label: "Identidade", question: "Quem é este agente, e quem responde por ele?" },
      authority: { label: "Autoridade", question: "O que ele pode fazer, por quem, até quando — e isso pode ser revogado?" },
      payments: { label: "Pagamentos", question: "Ele consegue pagar, e o pagamento pode ser vinculado ao que a pessoa aprovou?" },
      provenance: { label: "Proveniência", question: "Quem fez o quê, sob a autoridade de quem — e qualquer pessoa consegue verificar?" },
      zk: { label: "Conhecimento zero", question: "Ele consegue provar uma afirmação sem revelar os dados por trás dela?" },
      framing: { label: "Enquadramento", question: "O que o campo diz que é a lacuna." },
    },
    status: {
      shipping: "Em produção",
      converging: "Convergindo",
      forming: "Em formação",
      guidance: "Orientação",
    },
    rails: {
      ap2: {
        name: "AP2 — Agent Payments Protocol",
        org: "Google → FIDO Alliance",
        what: "Artefatos assinados de intenção do usuário para o comércio de agentes: Intent Mandates (o que o usuário autorizou o agente a buscar) e Cart Mandates (a transação específica aprovada). O Google o doou à FIDO Alliance em abril de 2026, onde seu Payments Technical Working Group o desenvolve; a versão mais recente é a v0.2.",
        relation:
          "Um mandato do Proof Pair se compila em um Intent/Cart Mandate do AP2 para pagamentos. A diferença: a cadeia de confiança do AP2 termina em uma conta de processador; a do Proof Pair termina em uma raiz humana ou institucional verificável — que é o que a delegação regulada e entre instituições exige.",
        sourceLabel: "FIDO Alliance — Google doa o AP2 (abr. 2026)",
      },
      erc8004: {
        name: "ERC-8004 — Trustless Agents",
        org: "Ethereum",
        what: "Registros on-chain para identidade, reputação e validação de agentes — trilhos públicos de ancoragem que qualquer framework de agentes pode referenciar. Os registros de identidade e de reputação estão implantados na mainnet do Ethereum; o de validação ainda não, e a própria EIP continua em Draft.",
        relation:
          "DIDs de agentes podem ser registrados em seu registro de identidade, e checkpoints da cadeia de recibos podem ser publicados em seu registro de validação (o caminho de ancoragem planejado para a v0.1 do Proof Pair).",
        sourceLabel: "EIP-8004 (status: Draft) + repositório oficial de contratos",
      },
      "did-vc": {
        name: "W3C DIDs + Verifiable Credentials",
        org: "W3C",
        what: "O substrato de identidade: identificadores descentralizados mais afirmações verificáveis criptograficamente — o modelo de dados por baixo de todo sistema de credenciais sério. VC Data Model 2.0 e DID Core 1.0 são W3C Recommendations; DID 1.1 é uma Candidate Recommendation.",
        relation:
          "Todo ator no Proof Pair é um DID; um mandato é uma Verifiable Credential. Esta é a camada sobre a qual todo o panorama se apoia.",
        sourceLabel: "W3C Recommendation — VC Data Model 2.0 (15 de maio de 2025)",
      },
      "sd-jwt-vc": {
        name: "SD-JWT VC",
        org: "IETF (OAuth WG)",
        what: "Credenciais verificáveis como JWTs, com divulgação seletiva por afirmação e vinculação criptográfica ao portador (KB-JWT). O formato base agora é o RFC 9901; o perfil de VC está em avaliação no IESG.",
        relation:
          "O único formato normativo do mandato no Proof Pair v0 — um agente prova “posso gastar ≤ US$ X para a organização Y” sem revelar todo o seu conjunto de permissões.",
        sourceLabel: "IETF Datatracker — draft-ietf-oauth-sd-jwt-vc (IESG Evaluation)",
      },
      oid4vc: {
        name: "OID4VC (OID4VCI + OID4VP)",
        org: "OpenID Foundation",
        what: "Os transportes de emissão e apresentação de credenciais verificáveis — como as credenciais circulam entre emissores, portadores e verificadores via HTTP. Ambas são especificações Final 1.0 (OID4VP em julho de 2025, OID4VCI em setembro de 2025); a adoção ainda está crescendo.",
        relation:
          "Os bindings perfilados do Proof Pair para emitir mandatos e apresentá-los a verificadores HTTP. Carteiras de agentes headless são portadores conformes.",
        sourceLabel: "OpenID Foundation — OID4VCI 1.0 (Final)",
      },
      didcomm: {
        name: "DIDComm v2",
        org: "DIF",
        what: "Mensageria criptografada e independente de transporte entre partes identificadas por DID, com mediadores que enfileiram mensagens para agentes offline. A v2.1 é uma DIF Ratified Specification.",
        relation:
          "O transporte agente-a-agente e de caixa postal: como um agente headless recebe e apresenta mandatos enquanto sua máquina está desligada.",
        sourceLabel: "DIF — DIDComm Messaging v2.1 (Ratificada)",
      },
      bitstring: {
        name: "Bitstring Status List",
        org: "W3C",
        what: "Revogação de credenciais em escala — uma forma compacta e que preserva a privacidade para verificadores checarem se uma credencial ainda é válida. W3C Recommendation desde maio de 2025.",
        relation:
          "O único mecanismo normativo de revogação do Proof Pair: um agente comprometido precisa poder ser parado em segundos, não em horas de CRL.",
        sourceLabel: "W3C Recommendation — Bitstring Status List (15 de maio de 2025)",
      },
      c2pa: {
        name: "C2PA",
        org: "Coalition for Content Provenance",
        what: "Manifestos de proveniência assinados e somente de acréscimo para conteúdo de mídia — quem fez isto, com o quê, alterado como. A especificação está na versão 2.5 (outubro de 2026).",
        relation:
          "A fonte do padrão para a cadeia de recibos: a mesma disciplina de manifesto assinado e à prova de adulteração, aplicada a ações de agentes em vez de arquivos de mídia.",
        sourceLabel: "C2PA — Especificação Técnica 2.5",
      },
      "zero-trust": {
        name: "Zero Trust for AI Agents",
        org: "Anthropic",
        what: "O enquadramento de segurança publicado em 2026: Zero Trust para agentes significa identidades com raiz criptográfica e permissões com escopo por tarefa — porque os controles de acesso tradicionais não impedem um agente de usar mal permissões que ele detém legitimamente.",
        relation:
          "Nomeia a lacuna que o Proof Pair preenche. A identidade responde quem. Um mandato responde o que este agente pode fazer, por quem, até quando. Um recibo responde quem fez o quê, sob a autoridade de quem.",
        sourceLabel: "Anthropic — Zero Trust for AI agents (27 de maio de 2026)",
      },
      "verifiable-intent": {
        name: "Verifiable Intent",
        org: "Mastercard",
        what: "Uma cadeia de credenciais assinadas (SD-JWT em camadas) que prova que a compra de um agente ficou dentro dos limites definidos pela pessoa — valor, comerciante, itens. Publicada em março de 2026 como rascunho aberto (v0.1), mantida pela Mastercard e aberta a contribuições de múltiplas partes.",
        relation:
          "Construída sobre SD-JWT, a mesma família de formato de um mandato do Proof Pair, de modo que os dois podem ser expressos nos termos um do outro. Ela responde à metade de pagamentos da pergunta que o mandato responde de forma geral: a pessoa autorizou isto, dentro destes limites?",
        sourceLabel: "Especificação Verifiable Intent — README (Rascunho v0.1)",
      },
      x402: {
        name: "x402",
        org: "x402 Foundation (Linux Foundation) · incubado pela Coinbase",
        what: "Pagamento dentro da própria requisição HTTP, usando o status 402 Payment Required, reservado há muito tempo: um cliente ou agente paga por um recurso e o recebe em uma única troca. Lançado pela Coinbase em 2025; hoje governado por um projeto da Linux Foundation com 40 organizações-membro no lançamento, em julho de 2026.",
        relation:
          "Liquida o pagamento; não diz nada sobre quem o autorizou. Essa é a metade que um mandato fornece — a prova de que este gasto foi delegado, por quem, dentro de qual limite.",
        sourceLabel: "Linux Foundation — lançamento operacional da x402 Foundation (14 de jul. de 2026)",
      },
      semaphore: {
        name: "Semaphore",
        org: "Privacy & Scaling Explorations · Ethereum Foundation",
        what: "Prova que você pertence a um grupo sem revelar qual membro você é, com um nullifier que impede o mesmo membro de sinalizar duas vezes. Na quarta versão principal (v4, 2024; versão mais recente em outubro de 2026).",
        relation:
          "Pertencimento sem identidade: um agente poderia mostrar que age em nome de algum membro verificado de uma organização sem revelar qual — a borda da faixa de identidade que preserva a privacidade.",
        sourceLabel: "Documentação e releases do Semaphore (v4.14.5, out. 2026)",
      },
      bbs: {
        name: "Data Integrity BBS Cryptosuites",
        org: "W3C",
        what: "Divulgação seletiva para credenciais verificáveis com provas derivadas não vinculáveis: o portador revela apenas alguns campos, e duas apresentações da mesma credencial não podem ser correlacionadas. Uma W3C Candidate Recommendation (setembro de 2026).",
        relation:
          "A propriedade de privacidade que o SD-JWT sozinho não oferece: o mesmo mandato apresentado a dois verificadores não pode ser rastreado até um único agente.",
        sourceLabel: "W3C Candidate Recommendation Draft — vc-di-bbs (10 de set. de 2026)",
      },
      zkml: {
        name: "zkML — inferência verificável",
        org: "Campo aberto · EZKL entre os provadores mais usados",
        what: "Provas de conhecimento zero de que um determinado modelo produziu uma determinada saída, sem revelar os pesos nem as entradas. O ferramental existe e as provas podem ser verificadas on-chain, em um navegador ou em um dispositivo; o custo de gerar provas ainda é alto e ainda não há padrão.",
        relation:
          "Para os recibos, a diferença entre “um agente fez isto” e “este modelo, sob este mandato, fez isto” — comprovável para alguém que não consegue ver o modelo.",
        sourceLabel: "EZKL — provador zkML aberto (v23.0.5, fev. 2026)",
      },
    },
  },

  market: {
    eyebrow: "O panorama de identidade de agentes, mapeado",
    h2: <>Comparado com um{" "}<A>sistema em funcionamento</A>, não com um whitepaper.</>,
    intro: (
      <>
        A maioria das comparações de identidade de agentes coloca whitepapers contra whitepapers. Esta é calibrada
        contra uma implementação de ponta a ponta comprovada — um sistema em funcionamento no qual um agente recebe
        uma credencial com escopo e vinculada ao dono, apresenta-a a uma contraparte de outra organização sem
        relação prévia e tem essa credencial verificada criptograficamente na comunicação, com divulgação seletiva e
        revogação explícita, hoje. O critério aqui é <B>implementado, não proposto.</B>
      </>
    ),
    laneEyebrow: "A faixa, enunciada primeiro",
    laneIntro:
      "Esta é a combinação específica que o campo não entregou — uma identidade de agente que seja, ao mesmo tempo, tudo isto:",
    uniqueNote: " (Ninguém mais neste mapa faz isso.)",
    laneOutro: <><S>Nenhuma solução do campo entrega tudo o que está acima.</S> O mapa abaixo mostra onde cada uma para.</>,
    criteria: [
      {
        label: "Com raiz na pessoa",
        detail:
          "a raiz de confiança é uma chave em poder de um ser humano — não de um provedor de nuvem, de uma autoridade certificadora ou de um registro DNS.",
      },
      {
        label: "Verificável offline",
        detail: "uma contraparte consegue verificar a credencial sem uma chamada ao vivo para o emissor.",
      },
      {
        label: "Entre organizações, sem relação prévia",
        detail: "duas partes que nunca fizeram onboarding uma com a outra ainda assim conseguem verificar.",
      },
      {
        label: "Ancorada em governo / instituição",
        detail:
          "a raiz humana pode se vincular a uma identidade do mundo real, com valor legal, quando o contexto exige.",
      },
      {
        label: "Portabilidade, divulgação seletiva e revogação explícita",
        detail: "o básico que as melhores soluções já compartilham.",
      },
    ],
    solutionsEyebrow: "Seis soluções — o que fazem, onde param",
    solutionsIntro: (
      <>
        Uma distinção crucial atravessa o campo:{" "}
        <B>a maioria delas não são rivais — são pontos de integração.</B> Quatro das seis operam em camadas abaixo
        ou ao lado da autoridade do agente (onde os agentes rodam, como o tráfego é controlado, quem emite dentro de
        uma empresa). Só uma ocupa a mesma camada.
      </>
    ),
    whatItDoes: "O que faz",
    whereItStops: "Onde para",
    relationship: {
      rival: { label: "Rival direto", blurb: "Mesma camada — tenta resolver o mesmo problema." },
      technique: { label: "Técnica a adotar", blurb: "Fonte de uma ideia que vale tomar emprestada, não um produto concorrente." },
      integration: {
        label: "Ponto de integração",
        blurb: "Uma camada abaixo ou ao lado — um lugar para se conectar, não uma faixa pela qual disputar.",
      },
    },
    solutions: {
      aauth: {
        name: "AAuth",
        qualifier: "Dick Hardt · rascunho IETF",
        what: "Autorização delegada para agentes. A tentativa mais direta de resolver o mesmo problema: permitir que um principal conceda autoridade com escopo a um agente. Inclui um padrão de consentimento assíncrono realmente bom (aprovação pendente / adiada).",
        stops:
          "A raiz de confiança está ancorada no DNS do provedor, não em chaves que a pessoa detém — então a autoridade termina em um provedor, não em um humano. Um rascunho em trilha de padronização que, até o momento, não tem implantações em produção. Não é verificável offline.",
        note: "Rival direto — mesma camada. Mas com raiz em DNS e ainda pré-produção.",
      },
      pic: {
        name: "PIC",
        qualifier: "tokens de delegação / capacidade · [TBD-verify: confirmar nome completo]",
        what: "Um esquema de tokens de capacidade para delegar permissões restritas, com uma regra forte de apenas atenuar: cada salto em uma cadeia de delegação só pode estreitar a autoridade, nunca ampliá-la.",
        stops:
          "Resolve a subdelegação com elegância, mas não carrega uma raiz na pessoa, ancoragem governamental nem verificação entre organizações sem infraestrutura compartilhada. Adjacente à faixa, não dentro dela.",
        note: "Fonte de uma boa ideia — vale adotar a invariante de atenuação; o protocolo não é o mesmo produto.",
      },
      entra: {
        name: "Microsoft Entra Agent ID",
        what: "Identidade corporativa para agentes dentro de uma organização / tenant — emitir, listar e governar os próprios agentes de uma organização em escala, com ferramental de ciclo de vida maduro.",
        stops:
          "Limitada à organização que emite. É um emissor intraorganizacional, não um tecido de confiança entre organizações; dois agentes de empresas diferentes não ganham verificabilidade mútua com ele.",
        note: "Ponto de integração (um emissor com o qual interoperar), com modelos de ciclo de vida com os quais vale aprender. Item a acompanhar: se combinado com um produto de credenciais verificadas para portabilidade entre organizações, a fronteira pode mudar. [TBD-verify: status de GA]",
      },
      agentgateway: {
        name: "agentgateway",
        what: "Uma camada de aplicação de políticas para o tráfego de agentes — avalia expressões de política ricas no gateway e permite / nega chamadas. Cloud-native, com boa distribuição.",
        stops:
          "Aplica políticas; não estabelece quem é o agente nem de onde veio sua autoridade. Ele precisa de uma autoridade para aplicar.",
        note: "Ponto de integração — uma credencial com raiz na pessoa é um token padrão que entra em seu motor de políticas com adaptação mínima. Compor, não competir.",
      },
      kagent: {
        name: "kagent",
        what: "Um runtime de agentes — onde agentes são construídos e executados.",
        stops: "Executa agentes; não diz nada sobre identidade portátil e verificável nem sobre autoridade entre organizações.",
        note: "Ponto de integração — a camada abaixo da identidade, não um rival dela.",
      },
      "agent-substrate": {
        name: "agent-substrate",
        what: "Um runtime / substrato de agentes — infraestrutura para operar agentes.",
        stops: "Substrato operacional, não uma camada de identidade ou de autoridade.",
        note: "Ponto de integração — não é um rival.",
      },
    },
    tallyLead: "A contagem: ",
    tally:
      "quatro pontos de integração (dois runtimes, uma camada de aplicação de políticas, um emissor intraorganizacional), uma fonte de técnica a adotar e um único rival de verdade na mesma camada — o AAuth — que tem raiz em DNS e ainda não chegou à produção.",
    sitsEyebrow: "Onde fica a abordagem com raiz na pessoa",
    sits: (
      <>
        Diante desse mapa, a faixa continua aberta. Uma credencial de agente com raiz na pessoa — vinculada ao dono,
        revogável, com divulgação seletiva, entre organizações, verificável offline e ancorável a uma identidade do
        mundo real — é a única combinação que ninguém mais monta. O humano detém a chave da qual a autoridade
        descende: o AAuth tem raiz no DNS, os emissores corporativos têm raiz em um tenant, os runtimes não têm raiz
        nenhuma. A verificação offline é exclusiva desta abordagem em todo o mapa. Isso não é dizer que todos os
        outros estão errados — eles resolvem problemas <I>diferentes</I>, e a camada de autoridade que fica acima de
        todos eles, com raiz em uma pessoa, está desocupada.
      </>
    ),
    limitEyebrow: "O limite honesto — onde a raiz na pessoa realmente importa",
    limit: (
      <>
        Um mapa de mercado que só lista pontos fortes não tem credibilidade. Uma raiz de confiança de posse da pessoa
        tem demanda real{" "}
        <B>apenas onde o contexto exige que um humano tenha autorizado algo</B> — atos de governo, mandatos
        juridicamente vinculantes, transações de cidadãos, consentimento regulado. Onde a autoridade é puramente de
        máquina para máquina e nenhum humano precisa estar comprovadamente por trás dela, uma raiz de provedor ou um
        emissor organizacional costuma bastar, e sai mais barato. Então este é tanto o mercado quanto a sua borda: o
        valor é maior exatamente onde a lei, uma instituição ou a responsabilização exigem que uma pessoa real
        responda pela ação do agente — e a abordagem deliberadamente não tenta ser o padrão para toda chamada
        automatizada entre dois serviços. Esse mesmo limite foi alcançado de forma independente por duas análises
        separadas; a convergência independente sobre a fronteira honesta de um sistema é um sinal de credibilidade,
        não uma fraqueza.
      </>
    ),
    composeEyebrow: "Compor, não competir",
    compose: (
      <>
        A posição que buscamos é ser a camada de autoridade sobre a qual todos os outros podem construir — adotando
        as melhores ideias sem adotar protocolos inteiros: <B>atenuação a cada salto</B> (a subdelegação só pode
        estreitar a autoridade, nunca ampliá-la), <B>consentimento assíncrono</B> (aprovação adiada / pendente como
        fluxo de primeira classe) e <B>modelos de ciclo de vida</B> dos emissores corporativos. Um mandato com raiz
        na pessoa é a fonte da verdade que se traduz nos protocolos de autorização que o ecossistema já usa —
        aproveitando os trilhos existentes em vez de brigar com eles. A prova de &ldquo;compor, não competir&rdquo;
        é uma integração, não um argumento.
      </>
    ),
    alignmentLead: "Alinhamento com padrões: ",
    alignment:
      "construído sobre os padrões abertos para os quais a categoria está convergindo, e interoperando com eles — ERC-8004, AP2, W3C Verifiable Credentials, SD-JWT e OID4VC — para que a composabilidade venha de projeto, não seja um remendo.",
    questionsEyebrow: "Perguntas em aberto para a categoria",
    questions: [
      {
        h: "Chaves pessoais sob custódia de plataformas.",
        b: "As maiores plataformas de consumo já custodiam chaves em escala de pessoas (o padrão “entrar com…”). A pergunta em aberto é se a economia agêntica de consumidores e cidadãos — onde uma raiz pessoal sob posse própria é de fato necessária — cresce o bastante e rápido o bastante antes que as chaves custodiadas por plataformas se tornem a raiz de fato.",
      },
      {
        h: "Consolidação das suítes corporativas.",
        b: "Um fornecedor de identidade corporativa que conecte seu produto de ID de agentes ao seu produto de credenciais verificáveis poderia empurrar rumo à portabilidade entre organizações a partir de uma base instalada enorme.",
      },
      {
        h: "Consagração por órgãos de padronização.",
        b: "Se um grupo de trabalho adotar como padrão um rascunho com raiz no provedor, ele pode se tornar um ponto focal corporativo independentemente da maturidade em produção. Até agora, o ecossistema de ferramentas tem pendido para o outro lado.",
      },
    ],
    closing:
      "Um mapa de um campo vivo, desenhado com honestidade, pela equipe que mede a categoria em vez de fazer marketing para ela. Comparado com uma implementação de ponta a ponta em funcionamento em meados de 2026; rascunhos de padrões e status de produtos evoluem — afirmações sensíveis ao tempo são verificadas de novo antes da publicação.",
  },

  emptyLane: {
    legend: { rival: "rival", integration: "ponto de integração", watch: "adjacente / acompanhar" },
    replay: "↻ repetir",
    aria:
      "Um mapa três por três do panorama de identidade de agentes. Oito caixas se preenchem uma a uma — AAuth, o único rival na mesma camada, depois os pontos de integração Entra Agent ID, agentgateway, kagent, agent-substrate e MCP-auth, além dos padrões adjacentes PIC e passkeys. A caixa central fica vazia e depois pulsa, despertando como a faixa aberta, com quatro diferenciais que ninguém mais combina: raiz na pessoa, verificação offline, entre organizações, ancorada em governo. A única faixa ainda aberta.",
    roles: {
      aauth: "rival · raiz DNS · 0 em prod.",
      entra: "emissor intraorg.",
      pic: "padrão de atenuação",
      agentgateway: "camada de aplicação",
      kagent: "runtime",
      substrate: "runtime",
      mcpAuth: "alvo de OAuth 2.1",
      passkeys: "padrão adjacente",
    },
    openLane: "faixa aberta",
    chips: ["raiz na pessoa", "verifica offline", "entre orgs.", "ancorada em gov."],
    caption: "A única faixa ainda aberta.",
  },

  receipt: {
    flow: ["mandato", "ação", "recibo"],
    replay: "↻ repetir",
    aria:
      "Uma credencial de mandato viaja do emissor até o agente; cada ação que o agente executa carimba um recibo assinado em uma cadeia de hash que cresce. Três recibos se encadeiam; a cadeia completa se ilumina.",
    issuer: "Emissor",
    mandate: "Mandato",
    agent: "Agente",
    action: "Ação",
    receipt: "Recibo",
    caption: "Cada ação, rastreada de forma comprovável",
  },

  footer: {
    lead: "O mapa é descritivo, não um placar.",
    rest:
      "A maioria destes trilhos é trabalho de outras pessoas, e bom trabalho — o panorama ganha quando eles interoperam. Onde o Proof Pair se relaciona com um deles, o cartão diz como; onde ele se compila em um deles, a especificação diz exatamente como.",
    kept: "Mantido atualizado pelos agentes de pesquisa do AIOS · Trilhos verificados de novo em 2 de novembro de 2026; Pulse e mapa de mercado de julho de 2026",
    guardian: "the-aios.org — the Guardian",
  },
};
