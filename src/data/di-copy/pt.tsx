import type { DICopy } from "./types";

/* Brazilian Portuguese copy for The Disruption Index. Self-contained: every company,
   market, changelog line and opportunity is translated here, keyed by id. Numbers,
   dates, names and tickers are the English data's, unchanged. Currency style:
   "US$ 14 bi" / "US$ 120 mi" / "US$ 571 mil". */

export const pt: DICopy = {
  dateLocale: "pt-BR",
  meta: {
    title: "The Disruption Index — setores classificados pela velocidade da disrupção causada pela IA",
    description:
      "Um índice ao vivo e navegável de setores pela velocidade com que a IA está causando disrupção em cada um — ao lado das empresas reais que morreram, se reinventaram ou surfaram a onda. Feito para tornar a urgência da IA inegável.",
    ogTitle: "The Disruption Index",
  },
  nav: { back: "← Voltar ao início" },

  hero: {
    eyebrow: "A velocidade da disrupção da IA · índice ao vivo · última atualização",
    h1: <>Alguns setores já perderam.{" "}<span className="accent">O seu está em algum lugar deste mapa.</span></>,
    lede: (
      <>
        Um índice navegável de setores organizado pela{" "}
        <strong style={{ color: "var(--color-ink)" }}>velocidade com que a IA está causando disrupção em cada um</strong> —
        ao lado das empresas reais que morreram, se reinventaram ou surfaram a onda. Filtre pelo seu setor. Encontre o
        caso mais parecido com o seu. Depois pergunte quanto tempo você tem.
      </>
    ),
    stats: { exemplars: "exemplos verificados", industries: "setores", gone: "já se foram", insulated: "realmente protegidos" },
  },
  changelogLabel: "Histórico de alterações do índice",
  changelog: {
    "2026-10-30":
      "15 adicionados · 4 movidos (Getty e Shutterstock para “Já se foram”; Coursera e associados juniores de escritórios de advocacia para “Relógio correndo”) · 2 removidos (Convoy, HeyMilo) · todas as entradas reverificadas e com fontes",
    "2026-06": "Primeira edição: 31 exemplos em 14 setores",
  },
  footer: {
    lead: "A precisão é o que importa.",
    body: (
      <>
        Cada entrada foi pesquisada em reportagens públicas, traz links para suas fontes e tem uma classificação de
        confiança. Quando um número é uma afirmação da própria empresa, uma estimativa ou parte de uma história com
        várias causas, a nota do cartão diz isso com clareza. Histórias de disrupção são confusas — exagerá-las custaria
        a única coisa que faz a urgência funcionar: <em>ser verdade</em>.
      </>
    ),
    kept: "Curadoria, não crowdsourcing. Mantido atualizado pelos agentes de pesquisa da AIOS — ele próprio um exemplo da velocidade que descreve.",
    first: "Pesquisado pela primeira vez em junho de 2026; todas as entradas reverificadas em 30 de outubro de 2026.",
  },

  speed: {
    gone: {
      label: "Já se foram",
      short: "Já se foram",
      blurb: "O fosso desabou. O negócio que cobrava por ele está em queda livre ou morto.",
    },
    "on-the-clock": {
      label: "Com o relógio correndo",
      short: "Relógio correndo",
      blurb: "A disrupção está visivelmente em curso. A pressão é real e o desfecho não está definido.",
    },
    reinventing: {
      label: "Se reinventando agora",
      short: "Se reinventando",
      blurb: "Atingidas pela disrupção — e em movimento. Uma incumbente se transformando, ou uma empresa nativa em IA que redefiniu a categoria.",
    },
    insulated: {
      label: "Protegidas por enquanto",
      short: "Protegidas",
      blurb: "Protegidas — por enquanto — por licença profissional, responsabilidade legal ou regulação. Repare em como são poucas as entradas aqui.",
    },
  },
  signal: {
    revenue: { label: "Receita", title: "A velocidade se apoia em receita ganha ou perdida." },
    jobs: { label: "Empregos", title: "A velocidade se apoia em vagas cortadas, não preenchidas ou realocadas." },
    market: { label: "Medo do mercado", title: "A velocidade se apoia numa reprecificação do mercado que ainda não apareceu na receita." },
  },
  region: { US: "EUA", LATAM: "LATAM", Europe: "Europa", Asia: "Ásia", Global: "Global" },
  confidence: {
    high: { label: "alta", title: "Confiança alta — bem corroborada por fontes públicas." },
    medium: {
      label: "média",
      title: "Confiança média — alguns números são informados pela empresa, estimados ou parte de uma história com várias causas. Veja a nota.",
    },
    low: { label: "baixa", title: "Confiança baixa — apenas indicativa; trate os detalhes como não verificados." },
  },
  industries: {
    Education: "Educação",
    "Media & Publishing": "Mídia e publicações",
    Translation: "Tradução",
    "Stock Photography": "Banco de imagens",
    "Software & IT Services": "Software e serviços de TI",
    "Design & Creative": "Design e criação",
    "Customer Support": "Atendimento ao cliente",
    Legal: "Jurídico",
    Finance: "Finanças",
    Recruiting: "Recrutamento",
    Marketing: "Marketing",
    "Logistics & Freight": "Logística e frete",
    Transcription: "Transcrição",
    Sales: "Vendas",
    Consulting: "Consultoria",
    "Research & Advisory": "Pesquisa e assessoria",
    "Enterprise Software": "Software corporativo",
    Healthcare: "Saúde",
    Music: "Música",
    Travel: "Viagens",
  },

  exemplars: {
    Chegg: {
      story:
        "Um chatbot gratuito destruiu um negócio de ajuda com lição de casa que chegou a valer ~US$ 14 bi no auge — e o CEO teve de admitir isso numa teleconferência de resultados.",
      changed:
        "O fosso da Chegg era uma biblioteca paga de soluções de livros didáticos e perguntas e respostas sob demanda. O ChatGPT respondia às mesmas perguntas de graça, na hora, sem assinatura — o valor que a Chegg cobrava virou commodity da noite para o dia.",
      date: "De maio de 2023 em diante (a ação caiu ~48% em um dia, em 2 de maio de 2023)",
      note: "Frequentemente citada como a primeira empresa de capital aberto a culpar formalmente a IA por perdas de receita. Seu próprio “CheggMate”, baseado na OpenAI, não conteve a perda. Cortou ~45% do quadro em out. de 2025 citando as “novas realidades da IA”; a receita do Q2 2026 caiu ~51% na comparação anual e, em julho de 2026, recebeu uma notificação da NYSE por negociar abaixo de US$ 1.",
    },
    Duolingo: {
      story:
        "O app de idiomas se declarou “AI-first”, gerando com IA conteúdo de cursos que antes exigia prestadores de serviço humanos.",
      changed:
        "Frases, traduções e revisão de erros que antes exigiam prestadores humanos agora podem ser gerados e verificados com LLMs; por isso o Duolingo reconstruiu a produção de conteúdo em torno da IA e cortou funções de prestadores.",
      date: "Fim de 2023–2024",
      note: "Cortou ~10% de sua força de trabalho terceirizada (tradutores e redatores foram os mais atingidos) a partir do fim de 2023; depois, o CEO divulgou um memorando “AI-first”. Uma empresa que se reinventa e que também deslocou trabalhadores — repare na dupla leitura. Em meados de 2026 os usuários ainda cresciam (DAUs +23% no Q2), enquanto a ação tinha caído fortemente pelo temor de que tutores de IA de uso geral concorram diretamente.",
    },
    Coursera: {
      story:
        "A plataforma de cursos transformou “aprender IA” num motor de crescimento — e depois se fundiu com seu maior rival quando a receita em base comparável começou a encolher.",
      changed:
        "A demanda migrou para aprender a usar a própria IA. A Coursera apostou nisso com centenas de novos cursos de IA generativa e uma camada de coaching com IA, fazendo da IA um vento a favor em vez de uma ameaça.",
      date: "2023–2024",
      note: "Informou ~3 milhões de novas matrículas em IA generativa em 2024, com mais de 450 novos cursos de IA generativa de parceiros. Fundiu-se com a Udemy (concluída em maio de 2026); no Q3 2026 a receita combinada caía ~3% em base comparável, com a demanda do consumidor perdendo força. Movida de “Se reinventando” em out. de 2026: o vento a favor dos cursos de IA é real, mas a consolidação parece tanto defesa quanto reinvenção.",
    },
    BuzzFeed: {
      story:
        "A rainha do conteúdo viral apostou seu futuro em artigos escritos por IA e, em vez disso, escreveu o próprio obituário.",
      changed:
        "Listas e quizzes genéricos perderam a escassez quando a IA passou a gerá-los de graça. O BuzzFeed fechou sua divisão de notícias vencedora do Pulitzer, migrou para conteúdo com IA e continuou perdendo audiência e anunciantes.",
      date: "2023 (virada para a IA em jan. de 2023; BuzzFeed News fechado em abril de 2023)",
      note: "Declarou “dúvida substancial” sobre sua continuidade operacional (2025, repetido em 2026); em maio de 2026 a Allen Family Digital comprou ~52% do controle por US$ 120 mi, seguido de um corte de ~35% do quadro. O declínio tem várias causas (colapso da publicidade digital) — a IA foi a aposta de recuperação que falhou, não a única causa da queda.",
    },
    DeepL: {
      story:
        "Uma startup de tradução nativa em IA superou as Big Techs em qualidade e virou a ferramenta padrão do setor de localização.",
      changed:
        "A DeepL construiu uma tradução automática neural que profissionais avaliavam acima do Google Translate e a vendeu como produto B2B — conquistando o mercado corporativo de tradução antes dominado por incumbentes e agências humanas.",
      date: "2023–2024 (captou US$ 300 mi com avaliação de ~US$ 2 bi, maio de 2024)",
      note: "Informou ~US$ 185 mi de ARR em 2024, ante ~US$ 141 mi em 2023. A Bloomberg noticiou que a empresa avaliava um IPO nos EUA de até ~US$ 5 bi (out. de 2025); em junho de 2026 comprou a Mixhalo para avançar em tradução de voz para eventos ao vivo.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Human translation & localization workforce": {
      story:
        "Tradutores freelancers viram tarifas e volume despencarem quando os clientes passaram a usar IA com uma leve edição humana.",
      changed:
        "A IA generativa tornou a tradução “boa o bastante” quase gratuita; agências e estúdios de localização cortaram tarifas, adotaram fluxos de IA com pós-edição e reduziram equipes — espremendo a renda dos tradutores profissionais.",
      date: "2023–2025",
      note: "Uma pesquisa de 2024 da Society of Authors do Reino Unido constatou que mais de um terço dos tradutores tinha perdido trabalho para a IA generativa. Números maiores que circulam (por exemplo, “queda de 80% na renda”) são anedóticos — trate-os como indicativos.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "Getty Images": {
      story:
        "A gigante dos bancos de imagens enfrentou os geradores de imagem por IA na Justiça e lançou sua própria ferramenta “comercialmente segura” — e mesmo assim seus acionistas foram zerados na falência.",
      changed:
        "Modelos de texto para imagem agora geram visuais sob demanda que substituem fotos licenciadas de banco de imagens. A Getty processou a Stability AI pelos dados de treinamento e lançou sua própria ferramenta generativa licenciada para defender a franquia.",
      date: "Ação ajuizada no início de 2023; decisão no Reino Unido em nov. de 2025; Chapter 11 em out. de 2026",
      note: "A Getty alegou raspagem não autorizada de ~12 milhões de imagens. Na decisão da High Court do Reino Unido (nov. de 2025), perdeu em grande parte na questão de direitos autorais e venceu apenas um ponto restrito sobre marca. Em 2026 sua fusão com a Shutterstock fracassou e ela entrou com um Chapter 11 pré-negociado (out. de 2026) que zera os acionistas públicos. O negócio continua sob novos donos (entidades da família Getty e a Koch Equity Development) depois do corte de mais de US$ 500 mi em dívidas. A receita caiu só modestamente, então o colapso é causado pela dívida, com a IA como pressão, não como causa única.",
    },
    Shutterstock: {
      story:
        "Vendeu seu acervo como dados de treinamento de IA e embutiu geração de imagens na plataforma — depois a receita de dados encolheu junto com o núcleo do negócio, a fusão que deveria salvá-la fracassou e o dividendo parou.",
      changed:
        "Transformou seu arquivo de imagens numa nova fonte de receita ao licenciá-lo a laboratórios de IA para treinar modelos, e integrou a geração de texto para imagem para os clientes, com um fundo para remunerar os colaboradores.",
      date: "2022–2023 (parceria com a OpenAI ampliada em 2023); revisão estratégica em 2026",
      note: "O licenciamento de IA e dados chegou a render cerca de US$ 100 mi ou mais por ano. No Q2 2026 a receita total caiu 17%, o segmento de dados caiu 16% e ela registrou um impairment de goodwill de US$ 163 mi; a fusão com a Getty fracassou em julho, o dividendo foi suspenso para priorizar a redução da dívida e o fundador voltou como CEO em outubro, em meio a uma revisão estratégica. Continua operando — “Já se foram” descreve o fosso, não a empresa.",
    },
    "Cursor (Anysphere)": {
      story:
        "Um editor de código nativo em IA foi de zero a uma receita anualizada noticiada de mais de US$ 4 bi em cerca de três anos — e depois foi vendido por US$ 60 bi.",
      changed:
        "Em vez de um autocompletar acoplado a uma IDE, o Cursor fez do LLM a interface principal para escrever e editar código — uma nova categoria que os incumbentes tiveram de correr atrás.",
      date: "Inflexão por volta de jan. de 2025; adquirido pela SpaceX em ago. de 2026",
      note: "Os números de receita vêm de reportagens, não de demonstrações auditadas — trate-os como aproximados. Adquirido pela SpaceX num negócio de ~US$ 60 bi, todo em ações (anunciado em junho, concluído em ago. de 2026). A tese de “reinventor nativo em IA da categoria” é bem fundamentada.",
      unplotted: "Privado até a SpaceX comprá-lo em 2026: sem valor de mercado na data-base.",
    },
    Globant: {
      story:
        "Uma empresa emblemática de serviços de TI da América Latina perdeu a maior parte do valor de mercado quando os clientes passaram a questionar se ainda precisavam pagar por equipes faturadas por cabeça.",
      changed:
        "O modelo de alocação de profissionais cobra por horas e por número de pessoas; ferramentas de programação com IA comprimem as horas. A empresa corre para reprecificar em torno de “Pods” de IA e assinaturas antes que o modelo antigo se desgaste.",
      date: "Pico da ação por volta de fev. de 2025; mínimas em uma década em meados de 2026; reposicionamento em curso",
      note: "A queda da ação é verificável; a virada para a precificação com IA é real, mas não comprovada. Processos de investidores também alegam problemas mais amplos de demanda na América Latina, então a IA é um fator importante, mas não o único. Em ago. de 2026 a empresa reduziu sua projeção de receita para 2026; os AI Pods eram ~2% da receita (dado da empresa).",
    },
    "Indian IT outsourcing (TCS, Infosys et al.)": {
      story:
        "A enorme máquina indiana de terceirização começou a eliminar dezenas de milhares de vagas à medida que a IA assumiu a programação, os testes e o suporte de nível básico para os quais ela foi montada.",
      changed:
        "O modelo vendia escala de mão de obra barata para trabalho rotineiro de desenvolvimento, testes e suporte; a IA agora faz boa parte disso, então a lógica de “mais gente = mais receita” está se rompendo.",
      date: "2024–2026 (a TCS anunciou ~12 mil cortes em 2025; o FY26 trouxe a primeira queda líquida de quadro do setor em cerca de 20 anos)",
      note: "Os números de demissões vêm da imprensa e de analistas e são atribuídos em parte à IA e em parte a pressões macroeconômicas e de eficiência — várias causas. Tratado como exemplo setorial, não como uma única empresa. O quadro se recuperou em parte na TCS e na Infosys em meados de 2026, então a ruptura é real, mas não linear.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    Midjourney: {
      story:
        "Uma pequena equipe autofinanciada transformou comandos de texto em imagens de nível profissional e construiu um negócio de nove dígitos sem investidores externos.",
      changed:
        "Imagens comerciais sob medida exigiam um ilustrador ou fotógrafo habilidoso e horas de trabalho. O Midjourney reduziu isso a um comando e alguns segundos, redefinindo a base do mercado de arte comercial.",
      date: "Lançado em julho de 2022; escalou rapidamente em 2023–2025",
      note: "A data de fundação e o “sem VC” são bem estabelecidos. Os números de receita são estimativas de terceiros, não dados financeiros divulgados — trate-os como aproximados.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Adobe (Firefly / Creative Cloud)": {
      story:
        "A dona da categoria lançou rapidamente sua própria IA generativa e, mesmo assim, viu a ação cair fortemente enquanto o mercado duvidava de que a IA protegeria seu fosso de assinaturas.",
      changed:
        "O fosso da Adobe era um quase monopólio nas ferramentas criativas profissionais. Ela embutiu o Firefly no Photoshop e no Illustrator para defendê-lo, mas a geração comoditizada e rivais nativos em IA (Figma, Canva) colocaram em xeque o preço premium.",
      date: "Firefly lançado em mar. de 2023; a ação caiu ~40% até uma mínima em meados de 2026 e se recuperou em parte até out. de 2026",
      note: "A adoção e a data de lançamento do Firefly são sólidas. A queda da ação é verificável; atribuí-la especificamente ao medo da IA é a narrativa consensual, mas não o único fator. Defende-se com força — “Relógio correndo”, não “Já se foram”. Receita recorde e ARR de IA em rápido crescimento (afirmação da empresa, Q3 FY26) não restauraram o múltiplo.",
    },
    "Klarna AI Assistant (with OpenAI)": {
      story:
        "A Klarna disse que um único assistente de IA fez o trabalho de 700 atendentes no primeiro mês — depois admitiu que tinha cortado demais o suporte humano e voltou a contratar.",
      changed:
        "O trabalho de primeiro nível em centrais de atendimento (reembolsos, status de pedidos, cancelamentos) é em grande parte roteirizado e automatizável; a IA atendeu ~dois terços dos chats mais rápido que humanos, mas limites de qualidade em casos atípicos forçaram um reequilíbrio rumo a um suporte humano premium.",
      date: "Lançado em fev. de 2024; o CEO reconheceu o excesso de cortes por volta de maio de 2025",
      note: "Os números “700 atendentes” / “US$ 40 mi” são afirmações de marketing da própria Klarna (os US$ 40 mi eram em grande parte contratações evitadas, não demissões propriamente ditas). O recuo de 2025 é a parte crível — este NÃO é um caso limpo de “a IA substituiu todo mundo”. Em nov. de 2025 a Klarna falava em “853 atendentes” e US$ 60 mi economizados (também números próprios), enquanto os custos de atendimento ao cliente ainda subiam na comparação anual.",
      unplotted: "A Klarna abriu capital em set. de 2025: sem valor de mercado na data-base de 2022.",
    },
    Sierra: {
      story:
        "Dois ex-executivos de Big Tech criaram uma empresa de agentes de IA para atendimento ao cliente que passou de US$ 150 mi de ARR em cerca de dois anos e chegou a uma avaliação de US$ 15,8 bi.",
      changed:
        "Agentes de IA agora resolvem os problemas dos clientes de ponta a ponta (reembolsos, ações na conta), então as empresas compram resultados em vez de assentos em centrais de atendimento com equipe humana — uma nova categoria nativa em IA que desafia a velha pilha de CX/BPO.",
      date: "Fundada em fev. de 2024; ~US$ 100 mi de ARR em nov. de 2025; avaliação de US$ 15,8 bi em maio de 2026",
      note: "ARR e avaliação são noticiados pela imprensa, não auditados — aproximados. A Decagon é uma reinventora nativa em IA comparável no mesmo espaço.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Harvey AI": {
      story:
        "Uma startup de dois anos virou a camada de IA padrão dos escritórios de advocacia de elite antes que os incumbentes conseguissem lançar um concorrente crível.",
      changed:
        "Modelos da classe GPT, somados a um modelo de gestão da mudança com ex-advogados alocados junto aos clientes, permitiram à Harvey embutir pesquisa jurídica, redação e revisão nos fluxos de trabalho dos grandes escritórios; a Harvey diz que ~80% da Am Law 100 já a usa, e a categoria se formou em torno dela.",
      date: "Lançamento em 2023; inflexão em 2025–2026 (avaliação de US$ 15,5 bi em set. de 2026)",
      note: "Os números de avaliação e ARR são informados pela empresa e sobem rápido; trate números pontuais como retratos de uma data.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Thomson Reuters (CoCounsel / Casetext)": {
      story:
        "A incumbente da pesquisa jurídica comprou sua entrada na era da IA por US$ 650 mi em vez de ser desbancada por uma startup baseada no GPT-4.",
      changed:
        "O CoCounsel, da Casetext — um assistente baseado no GPT-4 para pesquisa, revisão de documentos e preparação de depoimentos — provou que a IA generativa podia comprimir horas de trabalho de associados em minutos. A Thomson Reuters o adquiriu para defender sua franquia Westlaw.",
      date: "Aquisição anunciada em junho de 2023; CoCounsel Legal agêntico lançado em ago. de 2026",
      note: "Em ago. de 2026 lançou um CoCounsel Legal agêntico, que diz ser usado por “um milhão de profissionais”. Os números de uso e de crescimento do segmento jurídico são informados pela empresa. Suas ações caíram ~16% em 3 de fevereiro de 2026, quando um laboratório de IA lançou um plug-in jurídico para seu assistente: a reinvenção é real, e a dúvida do mercado também.",
    },
    "Law-firm junior associates & paralegals": {
      story:
        "A licença profissional ainda protege o advogado que assina, mas os escritórios estão contratando menos dos juniores que faziam o trabalho braçal.",
      changed:
        "Revisão de documentos, primeiras minutas de contratos e pesquisa estão cada vez mais automatizadas, mas as regras contra o exercício ilegal da profissão, a responsabilidade por erro profissional e a ABA Formal Opinion 512 (2024) mantêm um humano habilitado no circuito. A mudança visível está nas contratações: a entrada de associados de primeiro ano nos grandes escritórios caiu 7,5% em 2025, e dois terços dos grandes escritórios pesquisados esperam menos associados de primeiro ano até 2028.",
      date: "2024–2026 (ABA Op. 512 emitida em 2024; contratações de primeiro ano caindo desde o pico de 2024)",
      note: "Movido de “Protegidas” em out. de 2026: a camada do julgamento profissional habilitado ainda se sustenta, mas o funil de formação está visivelmente se desgastando. Dados de contratação da NALP e de uma pesquisa do Citi com 57 escritórios. Há evidências contrárias: alguns escritórios estão ampliando as turmas de estágio de verão, e nem todo observador culpa a IA ainda.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "JPMorgan COiN (Contract Intelligence)": {
      story:
        "Uma ferramenta interna de um banco fazia em segundos a revisão de contratos de empréstimo que consumia 360 mil horas de advogados e gerentes de crédito por ano.",
      changed:
        "O aprendizado de máquina extraía ~150 atributos de 12 mil contratos de crédito comercial em segundos e reduziu drasticamente os erros de interpretação — mostrando que o trabalho central de finanças, pesado em documentos, podia ser automatizado internamente anos antes da IA generativa.",
      date: "Implantado em meados de 2016; amplamente noticiado em fev. de 2017",
      note: "Um exemplo antigo, anterior aos LLMs. O número de 360 mil horas é do próprio JPMorgan e muito citado. Em meados de 2026 o banco disse que a IA lhe permitira cortar vagas de forma acentuada em algumas equipes específicas, com a maior parte do pessoal realocada (declaração do próprio banco).",
      unplotted: "Um produto ou unidade dentro de uma empresa listada maior.",
    },
    "Wall Street sell-side equity research": {
      story:
        "A remuneração dos analistas caiu e as equipes encolheram enquanto a IA, o investimento passivo e o unbundling espremiam as mesas de research.",
      changed:
        "A IA agora rascunha os modelos, resumos e análises preliminares que analistas juniores produziam; somado ao unbundling da MiFID II e à migração para o investimento passivo, o argumento econômico para grandes equipes de research desmoronou.",
      date: "Noticiado em jan. de 2025; tendência se formando em 2023–2026",
      note: "A Bloomberg Intelligence projetou que os bancos poderiam cortar até ~200 mil vagas em 3 a 5 anos. A IA é uma de várias forças que se somam, não a causa única.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "Big Four audit & tax (Deloitte, EY, KPMG, PwC)": {
      story:
        "As firmas cuja pirâmide depende de exércitos de revisores juniores correm para automatizar justamente o trabalho que esses juniores fazem.",
      changed:
        "Plataformas agênticas de auditoria e tributos agora fazem a revisão preliminar de documentos, a coleta de dados e o compliance tributário, ameaçando a economia da pirâmide de alavancagem — mas a responsabilidade legal, a regulação e a assinatura da auditoria mantêm humanos responsáveis. As firmas começaram a falar em deixar de cobrar auditoria por hora.",
      date: "Lançamentos de plataformas em 2024–2026 (auditoria agêntica em escala em 2026)",
      note: "A reinvenção é ativa e autoinfligida; o impacto líquido sobre o quadro e a economia ainda não está definido — por isso “Relógio correndo”, e não “Já se foram”.",
      unplotted: "Sociedades de capital fechado: sem valor de mercado público.",
    },
    "H&R Block": {
      story:
        "A autodeclaração gratuita ou barata, assistida por IA, está reduzindo discretamente o mercado endereçável do preparo pago de impostos por humanos, temporada após temporada.",
      changed:
        "As declarações feitas pelo próprio contribuinte crescem enquanto as preparadas por profissionais ficam estáveis; chatbots de IA em softwares do tipo faça você mesmo reduzem a necessidade percebida de pagar um preparador, corroendo o núcleo do negócio — embora esses chatbots também tenham sido criticados por orientações imprecisas.",
      date: "2023–2026",
      note: "A IA acelera uma migração antiga para o faça você mesmo, em vez de ser o único motor. A receita do FY2026 ainda cresceu ~5% com volume assistido estável, enquanto a ação caiu ~40% no ano encerrado em fev. de 2026.",
    },
    "LinkedIn Hiring Assistant": {
      story:
        "A plataforma onde os recrutadores vivem lançou um agente de IA que automatiza a busca, a classificação e a abordagem de candidatos que definiam o trabalho do recrutador.",
      changed:
        "O Hiring Assistant escreve descrições de vagas, identifica e classifica candidatos, conduz perguntas e respostas por InMail e faz a triagem prévia dos inscritos — o LinkedIn estima que ele reduz em ~70% o tempo administrativo dos recrutadores, colocando a busca rotineira sob pressão do próprio incumbente.",
      date: "Lançamento limitado em out. de 2024; disponível globalmente em inglês em set. de 2025; contratação agêntica passa de US$ 450 mi de receita anualizada em abr. de 2026",
      note: "O número de 70% de redução administrativa é estimativa do próprio LinkedIn, assim como a informação de que seus produtos de contratação agêntica passaram de US$ 450 mi de receita anualizada (abr. de 2026). O incumbente está monetizando o agente; a pressão recai sobre os recrutadores.",
      unplotted: "Um produto ou unidade dentro de uma empresa listada maior.",
    },
    "Jasper AI": {
      story:
        "A queridinha dos textos de marketing captou US$ 125 mi com avaliação de US$ 1,5 bi e viu um ChatGPT gratuito comoditizar seu produto principal quase da noite para o dia.",
      changed:
        "A Jasper era uma camada de UX sobre o GPT-3; quando a OpenAI lançou o ChatGPT (gratuito) e a API diretamente, o valor agregado desabou e a Jasper teve de migrar da geração de textos para fluxos de marketing corporativo e controles de marca.",
      date: "Nov. de 2022 (lançamento do ChatGPT) → meados/fim de 2023 (demissões + corte de ~20% na avaliação interna)",
      note: "Sobreviveu se reposicionando para equipes corporativas; não morreu, mas o fosso original se foi.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "AI/SEO content farms (Google's Helpful Content Update)": {
      story:
        "Sites que escalavam conteúdo raso de IA para colher tráfego do Google foram varridos quando o algoritmo do Google mirou especificamente o conteúdo inútil, feito para a busca.",
      changed:
        "A IA tornou a produção de conteúdo em massa quase gratuita, inundando a busca. O Google respondeu com o Helpful Content Update (2022–2023, incorporado ao ranking principal em mar. de 2024), e muitos sites pesados em IA perderam mais de 90% do tráfego orgânico.",
      date: "Dez. de 2022 → mar. de 2024",
      note: "A mesma IA que barateou o conteúdo provocou a resposta da plataforma que destruiu a arbitragem. Mantido genérico, sem nomear sites atingidos.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "Uber Freight (Insights AI / agent network)": {
      story:
        "O intermediário humano do agenciamento de cargas, baseado em relacionamento, está sendo espremido à medida que incumbentes colocam frotas de agentes de IA para precificar rotas, avaliar transportadoras e reservar cargas.",
      changed:
        "A Uber Freight lançou uma rede baseada em LLMs com mais de 30 agentes de IA que cuidam de precificação, pontuação de confiabilidade de transportadoras e reservas — o trabalho cognitivo rotineiro que justificava as margens dos corretores de frete tradicionais.",
      date: "2024–2025 (lançamento dos agentes)",
      note: "A disrupção está visivelmente em curso, mas não resolvida; a Uber Freight aumentou as reservas brutas em 25% no Q2 2026, mas ainda dava prejuízo, então a economia do negócio não está definida.",
      unplotted: "Um produto ou unidade dentro de uma empresa listada maior.",
    },
    "Rev (Rev.com / Reverb)": {
      story:
        "Um marketplace de transcrição humana transformou a IA que o ameaçava em arma própria — lançando um modelo de pesos abertos que supera o Whisper, da OpenAI.",
      changed:
        "A Rev usou os dados gerados por seus transcritores humanos — mais de 200 mil horas de fala transcrita por humanos — para treinar o Reverb, um modelo de pesos abertos com taxa de erro de palavras significativamente menor que a do Whisper large-v3. A força de trabalho humana virou o fosso de dados de treinamento.",
      date: "Lançamento do Reverb com pesos abertos em out. de 2024",
      note: "A reinvenção custou caro aos seus transcritores humanos (menos trabalho, remuneração menor), mesmo enquanto a empresa subia de patamar no mercado.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Otter.ai": {
      story:
        "Uma entrante nativa em IA redefiniu a transcrição: de um serviço sob encomenda para uma inteligência de reuniões ambiente, embutida em cada chamada.",
      changed:
        "Em vez de transcrição cobrada por minuto, o Otter se embutiu diretamente no Zoom/Meet/Teams como um anotador sempre ligado e depois acrescentou chat e agentes — redefinindo a categoria em torno da inteligência de reuniões em tempo real.",
      date: "2023 → 2026 (~US$ 100 mi de ARR noticiados em 2025; mais de 40 milhões de usuários e US$ 320 mi em financiamento de crescimento em out. de 2026)",
      note: "Uma nova entrante que redefiniu a categoria, não a virada de um incumbente. Os números de usuários e ARR são informados pela empresa. Uma ação coletiva de privacidade sobre consentimento para gravação sobreviveu a um pedido de arquivamento em ago. de 2026 (alegações, não conclusões).",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "11x (AI SDR — 'Alice' / 'Mike')": {
      story:
        "O garoto-propaganda de “a IA substitui os SDRs (representantes de pré-vendas)” foi atingido por uma investigação que alegava logos falsos, ARR inflado e churn elevado.",
      changed:
        "A 11x vendia SDRs autônomos de IA para automatizar a prospecção e a abordagem e captou com fundos de VC de primeira linha, mas uma investigação de mar. de 2025 alegou que ela listava não clientes e contava testes como receita anual — minando a narrativa de que “a IA substitui totalmente o SDR”.",
      date: "Mar. de 2025 (investigação publicada)",
      note: "As alegações são CONTESTADAS; o então CEO contestou a reportagem e os investidores apoiaram a empresa, e em maio de 2025 ele passou a presidente do conselho enquanto o CTO assumia. Incluído para mostrar que a categoria de SDR com IA é real, mas a substituição total do SDR continua não comprovada — não trate as alegações como fato estabelecido.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Mercado Libre": {
      story:
        "O maior marketplace da América Latina agora deixa um assistente de IA resolver a maioria das dúvidas dos clientes de sua fintech sem um humano.",
      changed:
        "O assistente de IA do Mercado Pago atendeu mais de 9 milhões de consultas no Q4 2025 e resolveu 87% sem operador humano; no Q2 2026 a IA resolvia sozinha mais da metade das solicitações do Portal de Ajuda. Um negócio que cresce ~50% ao ano não precisa mais aumentar a equipe de suporte no mesmo ritmo.",
      date: "Assistente lançado em out. de 2025; Q4 2025 → Q2 2026",
      note: "Todos os números são afirmações da empresa em cartas aos acionistas arquivadas na SEC. Uma incumbente se reinventando, não uma empresa sendo deslocada. A primeira reinventora latino-americana do índice.",
    },
    "Contact-center outsourcers (Teleperformance, Concentrix)": {
      story:
        "As gigantes que alugam atendentes humanos por hora veem a receita ficar negativa e dão baixa de bilhões enquanto a IA dos clientes começa a atender o telefone.",
      changed:
        "Centrais de atendimento terceirizadas vendem horas de atendentes em escala. Agentes de IA resolvem contatos rotineiros de ponta a ponta, então o volume e o poder de preço encolhem. As duas empresas se reposicionam como operadoras de “IA mais humanos” enquanto suas linhas principais recuam.",
      date: "Mar. de 2024 (TP −23% em um dia após os resultados de IA da Klarna) → 2026 (receita da TP em queda em base comparável; impairment de goodwill de US$ 1,05 bi da Concentrix, set. de 2026)",
      note: "Várias causas. A Concentrix vincula seu impairment ao preço da ação e sua perspectiva fraca às prioridades dos clientes, sem citar a IA; a Teleperformance também aponta o offshoring e outros fatores negativos. Ambas relatam crescimento rápido em suas próprias linhas de IA (afirmações das empresas). Defender e pivotar, não colapso.",
    },
    "Philippine BPO industry": {
      story:
        "A capital mundial dos call centers ainda cria empregos, enquanto revisa discretamente as projeções de crescimento sobre as quais sua economia foi construída.",
      changed:
        "Cerca de 1,7 milhão de filipinos trabalham em centrais de atendimento e terceirização de processos de negócio, fazendo o suporte roteirizado, a digitação de dados e o processamento de documentos que a IA generativa automatiza primeiro. O quadro ainda cresceu em 2025, mas a entidade do setor está revisando as metas do seu roadmap no meio do ciclo.",
      date: "2025–2026 (roadmap do setor em revisão, junho de 2026)",
      note: "O quadro cresceu ~4%, para 1,68 milhão, em 2025 (dado da associação do setor). As projeções maiores de deslocamento que circulam são projeções, não perdas observadas. Um exemplo setorial, como a entrada de TI indiana.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "Standard Chartered": {
      story:
        "Um banco global disse ao mercado que vai cortar ~15% de suas funções corporativas até 2030 à medida que a IA absorve o trabalho de back-office.",
      changed:
        "Centros de serviços compartilhados existem para fazer processamento rotineiro em escala, e é exatamente isso que a IA automatiza. O banco planeja cortar quase 8 mil de suas mais de 52 mil funções de suporte em quatro anos, e, segundo reportagens, os centros offshore na Ásia e na Europa seriam os mais atingidos.",
      date: "Anunciado em maio de 2026",
      note: "Cortes planejados até 2030, não concluídos. A forma como a liderança descreveu essas funções gerou reação negativa, e depois foi dito que a fala havia sido tirada de contexto. As localizações dos centros vêm de uma única fonte.",
    },
    "RELX (LexisNexis) & Wolters Kluwer": {
      story:
        "Duas das franquias de informação mais defensivas da Europa tiveram um de seus piores pregões em décadas quando um laboratório de IA lançou um plug-in jurídico para seu assistente.",
      changed:
        "O fosso era conteúdo jurídico e profissional proprietário envolto em software de fluxo de trabalho pago. Um agente que revisa documentos, faz a triagem de contratos e sinaliza riscos dentro de um assistente de uso geral ameaça dominar o fluxo de trabalho, deixando o conteúdo como insumo em vez de produto.",
      date: "Queda de 3 de fevereiro de 2026",
      note: "Quedas noticiadas de cerca de 13–14% em um dia para cada uma (a Thomson Reuters caiu ~16% no mesmo dia); os números exatos variam por bolsa e por métrica. Uma reprecificação de risco, ainda não perda de receita. O resultado do plug-in ainda exige revisão de um advogado.",
    },
    Accenture: {
      story:
        "A maior consultoria do mundo teve seu pior pregão da história quando os investidores precificaram a IA encolhendo sua máquina de horas faturáveis.",
      changed:
        "A Accenture vende grandes equipes faturadas por análise, implementação e trabalho de processos. Agentes de IA comprimem exatamente essas horas, então reservas mais lentas e um corte de projeção foram lidos como estruturais, e não cíclicos, mesmo com a empresa vendendo a própria transformação com IA.",
      date: "18 de junho de 2026 (as ações caíram ~18% com um corte de projeção no Q3 fiscal)",
      note: "Várias causas: a projeção também citou cortes do governo federal dos EUA e a instabilidade no Oriente Médio, e o trimestre em si superou as expectativas de receita. Pares de serviços de TI caíram no mesmo dia. A empresa está se reinventando como integradora de IA ao mesmo tempo; o desfecho está em aberto.",
    },
    Gartner: {
      story:
        "A empresa que dizia a todo CIO o que pensar sobre tecnologia perdeu cerca de metade do valor de mercado quando os clientes começaram a perguntar à IA.",
      changed:
        "O Gartner vende pesquisa por assinatura e acesso a analistas: julgamento empacotado que é, em grande parte, uma síntese do que é possível saber. Ferramentas de pesquisa com IA agora produzem essa síntese sob demanda, e os orçamentos de TI estão sendo redirecionados para projetos de IA, então as renovações da consultoria humana estão sob pressão.",
      date: "2025 (ação cortada pela metade) → 3 de fevereiro de 2026 (as ações caíram mais de 20% com a projeção para 2026)",
      note: "A gestão culpou ciclos de compra mais longos e o escrutínio dos orçamentos, sem citar a IA; o vínculo com a IA é a narrativa dos investidores. Os números da queda em um dia divergem (21–31%) conforme a métrica.",
    },
    Salesforce: {
      story:
        "A empresa que inventou o assento de SaaS viu investidores apostarem que agentes de IA vão precisar de menos deles, e perdeu cerca de 40% do valor em seis meses.",
      changed:
        "A precificação por assento vincula a receita ao número de humanos que usam o software. Se agentes fizerem o trabalho de vendedores e atendentes, o número de assentos encolhe. A Salesforce está migrando para a precificação por consumo com o Agentforce, mas a receita com agentes ainda não é grande o bastante para resolver a questão.",
      date: "H1 2026 (ação em queda de ~41%); rebaixamento por um grande banco em maio de 2026",
      note: "Os resultados continuaram superando as expectativas enquanto a ação caía, então é uma reprecificação do modelo, não um colapso da receita. Os números de receita do Agentforce variam conforme a definição em cada relatório e são informados pela empresa. O arquétipo da operação “SaaSpocalypse” de 2026.",
    },
    Lovable: {
      story:
        "Uma startup de Estocolmo deixou quem não programa descrever um app e recebê-lo pronto, e virou uma das empresas de software de crescimento mais rápido da história.",
      changed:
        "Construir um app web significava contratar desenvolvedores ou uma agência. O agente da Lovable transforma um comando em linguagem natural num app full-stack funcional, então o comprador vira o construtor.",
      date: "Série A em julho de 2025 (avaliação de US$ 1,8 bi) → Série C em ago. de 2026 (US$ 400 mi a uma avaliação de US$ 13,3 bi)",
      note: "A receita anualizada (~US$ 500 mi até junho de 2026) é informada pela empresa e não auditada; a qualidade dos apps e a retenção em escala não estão comprovadas. A Replit é uma empresa nativa em IA comparável na mesma categoria.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    "Stack Overflow": {
      story:
        "O balcão de respostas da internet para programadores viu as novas perguntas caírem ~78% em um ano, enquanto os desenvolvedores passaram a perguntar à IA dentro do editor.",
      changed:
        "Seu fosso era um efeito de rede: as pessoas perguntavam, especialistas respondiam, a busca mandava tráfego. Assistentes de programação com IA agora respondem dentro do editor, então o fluxo de perguntas que alimentava esse ciclo secou. A empresa está migrando para o licenciamento de dados e versões corporativas privadas.",
      date: "Dez. de 2025: 3.862 perguntas mensais, −78% na comparação anual (pico de mais de 200 mil por mês em 2014)",
      note: "A queda é anterior ao ChatGPT e reflete em parte a cultura da comunidade; a IA a acelerou. O negócio se reinventa enquanto a comunidade desmorona: “Relógio correndo” para a empresa, perto de “Já se foram” para o fórum.",
      unplotted: "Pertence à Prosus: sem receita ou valor de mercado próprios.",
    },
    "Ad-supported web publishers (AI search answers)": {
      story:
        "Veículos que vivem do tráfego de busca veem as respostas de IA no topo da página de resultados ficarem com o leitor e com o clique.",
      changed:
        "A publicação financiada por anúncios e afiliados depende de visitas vindas da busca. Os resumos de IA respondem à consulta na própria página de resultados, então o tráfego cai mesmo quando a reportagem do veículo é a fonte. No Reino Unido, um estudo do setor projeta que o tráfego da busca do Google para os principais veículos cairá pela metade até o Q3 2027.",
      date: "2024–2026 (ação da Penske Media ajuizada em set. de 2025, rejeitada em set. de 2026)",
      note: "Os números de perda de tráfego variam muito conforme o estudo e o método; a projeção do Reino Unido é uma previsão. As ações antitruste da Penske e da Chegg sobre os AI Overviews foram rejeitadas em set. de 2026 (cabe recurso). Exemplo setorial; distinto da entrada sobre fazendas de conteúdo, que trata de custo, não de visitas vindas da busca.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    Abridge: {
      story:
        "Um escriba de IA ambiente, que escuta a conversa entre médico e paciente e redige a nota, está se espalhando pelos maiores sistemas de saúde dos EUA.",
      changed:
        "A documentação clínica consumia horas do dia dos médicos e alimentava o burnout. A Abridge transforma a própria conversa em notas estruturadas e faturáveis dentro do prontuário, substituindo escribas humanos e ditado.",
      date: "Série E em junho de 2025 (US$ 300 mi a uma avaliação de US$ 5,3 bi); mais de 300 sistemas de saúde informados em 2026",
      note: "O número de sistemas de saúde é informado pela empresa. Fornecedores de prontuário eletrônico que lançam seus próprios escribas são o principal risco competitivo. Os médicos ainda assinam cada nota.",
      unplotted: "Empresa privada: sem receita ou valor de mercado públicos.",
    },
    Radiologists: {
      story:
        "A previsão de perda de empregos mais famosa da IA dizia para parar de formar radiologistas. Uma década depois, eles estão mais escassos e mais bem pagos do que nunca.",
      changed:
        "A IA de imagem está em toda parte, com grandes departamentos rodando centenas de modelos, mas um médico habilitado precisa assinar o laudo final para que o Medicare e o Medicaid paguem, e a responsabilidade recai sobre essa assinatura. A IA deixou cada radiologista mais rápido; o aumento no volume de exames absorveu o ganho.",
      date: "Previsão de 2016 → 2025–2026 (remuneração média de ~US$ 571 mil em 2025)",
      note: "Protegidos pela licença profissional, pelas regras de reembolso e pela responsabilidade por erro médico, além de um boom de demanda: a carga de trabalho subiu ~25% de 2018 ao início de 2025. Dado de remuneração da Medscape. O caso mais claro de uma profissão cuja produção depende de uma assinatura.",
      unplotted: "Uma categoria, não uma empresa listada.",
    },
    "Universal Music Group": {
      story:
        "A maior gravadora do mundo parou de processar um gerador de músicas por IA e concordou em construir com ele uma plataforma licenciada de música com IA.",
      changed:
        "A música generativa ameaçava inundar o streaming com faixas que dispensam gravadora ou catálogo. A UMG transformou seu catálogo em insumo licenciado: fez acordo com a Udio e combinou um serviço fechado em que os fãs criam sob licença. A Warner seguiu o mesmo caminho com a Udio e a Suno.",
      date: "Out. de 2025 (acordo UMG–Udio); Warner–Suno em nov. de 2025",
      note: "Termos financeiros não divulgados; a plataforma estava prevista para 2026 e seu lançamento não foi confirmado. A estratégia da Shutterstock (licenciar o acervo) aplicada à música.",
    },
    "Booking Holdings & Expedia": {
      story:
        "As agências de viagem online superaram as expectativas de resultado e ainda assim caíram na bolsa, porque os investidores temem que a próxima reserva comece com um agente de IA, não com uma caixa de busca.",
      changed:
        "As OTAs dominam o topo do funil de viagens e cobram comissão dos hotéis pela demanda. Agentes de compra que reservam em nome do viajante poderiam tomar esse funil. A Booking mantém distância de agentes de terceiros; a Expedia está se conectando a eles. Apostas opostas diante da mesma ameaça.",
      date: "Fev. de 2026 (a Booking caiu após superar as expectativas no Q4) → set. de 2026 (ambas em queda de ~17–18% em um mês após o lançamento de um novo agente de compras)",
      note: "A Booking diz que assistentes de IA geram bem menos de 1% das diárias reservadas (dado da empresa). A ameaça está precificada nas ações, mas ainda não aparece nos resultados. Os números de variação das ações vêm de veículos financeiros secundários.",
    },
  },

  markets: {
    CHGG: { responseWhy: "Cortou ~45% do quadro (out. de 2025) depois que seu tutor de IA não conteve as perdas" },
    DUOL: { responseWhy: "Reconstruiu a produção de conteúdo em torno da IA (“AI-first”)" },
    COUR: {
      responseWhy: "Fundiu-se com a Udemy (concluída em maio de 2026)",
      caveat: "A receita do FY2025 é só da Coursera; a fusão com a Udemy foi concluída em maio de 2026.",
    },
    BZFD: {
      responseWhy: "Controle vendido (maio de 2026), seguido de um corte de ~35% do quadro",
      caveat: "Preço-base ajustado pelo grupamento de ações de 1:4 de maio de 2024.",
    },
    GETYQ: {
      responseWhy: "Chapter 11 pré-negociado (out. de 2026); as ações públicas serão canceladas",
      caveat: "Deslistada da NYSE em out. de 2026; o preço atual é uma cotação de balcão (OTC) com pouca liquidez, e as ações serão canceladas.",
    },
    SSTK: { responseWhy: "Fusão fracassada, dividendo suspenso, revisão estratégica (2026)" },
    GLOB: { responseWhy: "Reprecificando serviços em torno de “Pods” de IA e assinaturas" },
    ADBE: { responseWhy: "Lançou o Firefly, de IA generativa, em todas as suas ferramentas criativas" },
    TRI: {
      responseWhy: "Comprou a Casetext; lançou o CoCounsel Legal agêntico (ago. de 2026)",
      caveat: "Preço-base ajustado pelo grupamento de ações de junho de 2023.",
    },
    HRB: { responseWhy: "Nenhum reposicionamento em IA documentado em nossas fontes" },
    MELI: { responseWhy: "Assistente de IA resolve a maioria das solicitações de suporte sem um humano" },
    TEP: {
      responseWhy: "Reposicionando-se como operadora de “IA mais humanos”",
      caveat: "A receita inclui a aquisição da Majorel (fim de 2023); o crescimento orgânico é menor.",
    },
    CNXC: {
      responseWhy: "Reposicionando-se como operadora de “IA mais humanos”",
      caveat: "A receita inclui a aquisição da Webhelp (set. de 2023); o crescimento orgânico é bem menor.",
    },
    STAN: {
      responseWhy: "Cortando ~15% das funções corporativas até 2030",
      caveat: "Um banco: a receita operacional faz as vezes de receita. Receita em USD; preço da ação em pence.",
    },
    REL: { responseWhy: "Nenhum reposicionamento em IA documentado em nossas fontes" },
    WKL: { responseWhy: "Nenhum reposicionamento em IA documentado em nossas fontes" },
    ACN: { responseWhy: "Vendendo transformação com IA como sua linha de crescimento" },
    IT: { responseWhy: "Nenhum reposicionamento em IA documentado em nossas fontes" },
    CRM: {
      responseWhy: "Migrando da precificação por assento para a por consumo com o Agentforce",
      caveat: "O ano fiscal termina em janeiro; o ano-base é o que contém nov. de 2022.",
    },
    UMG: { responseWhy: "Fez acordo com um gerador de música por IA e licenciou seu catálogo" },
    BKNG: {
      responseWhy: "Mantém distância de agentes de IA de terceiros para proteger o tráfego direto",
      caveat: "Preço-base ajustado pelo desdobramento de 25:1 de abril de 2026.",
    },
    EXPE: { responseWhy: "Conectando seu inventário a agentes de compras de IA" },
  },

  index: {
    whatChanged: "O que mudou",
    note: "Nota —",
    source: "fonte",
    sources: "fontes",
    verified: "verificado",
    movedFrom: "Movido de",
    movedTitle: (from) => `Movido de “${from}” na última atualização`,
    to: "para",
    findPlaceholder: "Encontre seu setor ou empresa…",
    findAria: "Encontre seu setor ou empresa",
    clearSearch: "Limpar busca",
    suggestions: "Sugestões",
    kindIndustry: "Setor",
    kindCompany: "Empresa",
    speedAria: "Velocidade da disrupção",
    everySpeed: "Todas as velocidades",
    all: "Todas",
    filters: "Filtros",
    region: "Região",
    signal: "Sinal",
    sort: "Ordenar",
    bySpeed: "Por velocidade",
    byIndustry: "Por setor",
    az: "A–Z",
    of: "de",
    activeFilters: "Filtros ativos",
    removeFilter: "Remover filtro:",
    clearAll: "Limpar tudo",
    emptyPre: "Nada corresponde ainda — essa lacuna já é um sinal. Tente um termo mais amplo ou",
    emptyBtn: "limpe todos os filtros",
    company: "empresa",
    companies: "empresas",
  },

  quadrant: {
    eyebrow: "Desde o lançamento do ChatGPT · 30 nov. 2022 → out. 2026",
    title: <>Receita em alta não as salvou.{" "}<span className="accent">O mercado precificou a disrupção primeiro.</span></>,
    lede: (priced, total) => (
      <>
        Todas as empresas listadas do índice, posicionadas por dois números medidos desde o lançamento do ChatGPT: como
        mudou sua <b>receita</b> (disrupção real) e como mudou o <b>preço da ação</b> (medo do mercado).{" "}
        <b>{priced}</b> de {total} ainda aumentaram a receita e foram punidas mesmo assim. Passe o mouse, toque ou navegue
        com Tab até um ponto.
      </>
    ),
    chartAria: "Gráfico de quadrantes: variação da receita versus variação do preço da ação desde 30 de novembro de 2022",
    xAxis: "Variação da receita · encolhendo ← → crescendo",
    yAxis: "Preço da ação · punida ↓ ↑ recompensada",
    closeDetails: "Fechar detalhes",
    revenue: "Receita",
    sharePrice: "Preço da ação",
    response: "Resposta",
    sourcesLead: "Fontes:",
    revenueSource: "receita",
    priceSource: "preço",
    showInIndex: (company) => `Mostrar ${company} no índice →`,
    dotAria: (name, ticker, rev, price, quadrant, response) =>
      `${name} (${ticker}): receita ${rev}, preço da ação ${price} desde 30 de novembro de 2022. ${quadrant}. ${response}.`,
    detailsAria: (name) => `Detalhes de ${name}`,
    legend: "Legenda",
    method: (
      <>
        <b>Como ler.</b> Data-base: preço de fechamento da ação em 30 de novembro de 2022, dia do lançamento do
        ChatGPT, comparado ao fechamento mais recente (29 de outubro de 2026); receita do ano fiscal que contém essa
        data comparada ao último ano fiscal completo divulgado. Os preços são ajustados por desdobramentos e grupamentos
        e não incluem dividendos; a receita está na moeda de reporte de cada empresa. Os dois eixos são logarítmicos,
        então uma queda pela metade e uma duplicação ficam à mesma distância do zero. O formato do marcador é a resposta
        da empresa: <b>reestruturação</b> (cortes documentados, venda forçada, fusão ou falência) prevalece sobre{" "}
        <b>reinvenção</b> (um produto de IA ou modelo de preço lançado no centro do negócio); todo o resto é{" "}
        <b>nenhuma resposta documentada</b>. Só aparecem no gráfico empresas com números públicos: o que falta continua
        faltando.
      </>
    ),
    tableSummary: "O gráfico em forma de tabela, com fontes",
    th: { company: "Empresa", revenue: "Receita", sharePrice: "Preço da ação", quadrant: "Quadrante", response: "Resposta", sources: "Fontes" },
    revenueLink: "Receita",
    priceLink: "Preço",
    unplottedTitle: "Fora do gráfico, e por quê",
    unplottedDefault: "Sem números públicos.",
    meta: {
      gone: { label: "Já se foram", blurb: "Receita encolhendo, valor de mercado punido." },
      priced: { label: "Precificadas para a disrupção", blurb: "Receita ainda crescendo, valor de mercado punido: o medo está à frente dos números." },
      credit: { label: "Crédito pela reestruturação", blurb: "Receita encolhendo, valor de mercado recompensado." },
      reinventing: { label: "Se reinventando", blurb: "Receita crescendo, valor de mercado recompensado." },
    },
    responses: {
      reinventing: { label: "Reinvenção", title: "Um produto de IA ou modelo de preço lançado no centro do negócio." },
      restructuring: { label: "Reestruturação", title: "Cortes documentados, venda forçada, fusão ou falência desde 2022." },
      none: { label: "Nenhuma resposta documentada", title: "Nenhuma resposta documentada em nossas fontes." },
    },
  },

  opportunities: {
    eyebrow: "#BlackOctober · o que a disrupção abre",
    title: "Oportunidades de negócio emergentes",
    lede: (
      <>
        Por volta de 19–22 de outubro de 2026, um conjunto de incidentes de segurança distintos aconteceu num intervalo
        de poucos dias: falhas críticas no PHP que a{" "}
        <a
          href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching"
          target="_blank"
          rel="noopener noreferrer"
        >
          CISA
        </a>{" "}
        mandou as organizações corrigirem imediatamente, uma versão envenenada de um gateway de IA, um vazamento de
        segredos numa plataforma de nuvem e uma autoridade certificadora com chaves quebradas. A imprensa chamou isso de
        #BlackOctober. Não foi uma campanha única, e não é disrupção por si só. O que ele expôs é onde os próximos
        negócios serão construídos. As quatro oportunidades abaixo estão{" "}
        <b>tal como enquadradas pelo AI Mode do Google, em 30 de outubro de 2026</b>; as evidências sob cada uma são
        nossas, verificadas em fontes primárias.
      </>
    ),
    inTheIndex: "No índice:",
    leftOutTitle: "O que deixamos de fora",
    leftOutLede: "A resposta do Google citou estes pontos; não conseguimos verificá-los, então eles não servem de evidência aqui.",
    items: {
      "01": {
        title: "IA verificável",
        verdict: "Se sustenta",
        thesis:
          "Provar qual código e qual modelo realmente rodaram, em vez de confiar que o pacote que você instalou é o mesmo que seus mantenedores publicaram.",
        evidence: [
          "Em 21 de outubro, uma versão envenenada do LiteLLM (1.107.0), um gateway de código aberto para modelos de IA amplamente usado, ficou disponível no PyPI por cerca de duas horas. Ela roubou credenciais e segredos do ambiente das máquinas que a instalaram. As versões anteriores e o código-fonte oficial estavam limpos.",
          "As ferramentas já existem: o model signing da OpenSSF, construído sobre o Sigstore, assina modelos do mesmo jeito que o código aberto assina software.",
        ],
        inTheIndex:
          "Toda empresa que se reinventa no índice vende resultados de IA em que o cliente precisa confiar: as notas clínicas da Abridge, as minutas do CoCounsel da Thomson Reuters, as respostas de suporte do Mercado Libre.",
      },
      "02": {
        title: "Governança agêntica: arquiteturas proof pair",
        verdict: "Se sustenta",
        thesis:
          "Uma chave de API diz quem a detém, não o que um agente tinha permissão para fazer. Vincule cada agente a uma pessoa responsável, com um mandato assinado e delimitado antes de agir, e um recibo verificável depois.",
        evidence: [
          "O CERT-In, da Índia, emitiu em 15 de outubro um alerta crítico, “AI Agents as Attack Vectors”: agentes alcançaram sistemas em produção de organizações indianas por meio de credenciais expostas e permissões amplas demais, e as próprias organizações não detectaram isso.",
          "Em outubro, a plataforma para desenvolvedores Railway pediu aos usuários que revogassem seus segredos depois que um invasor alcançou variáveis de ambiente criptografadas; seu relatório preliminar diz que o alvo eram chaves de API de provedores de IA. Pesquisadores documentam desde 2024 chaves roubadas inflando contas de computação de IA (“LLMjacking”).",
          "Os órgãos de padronização já estão nisso: o projeto do NCCoE, do NIST, sobre identidade e autorização de software e de agentes de IA, e o Top 10 da OWASP para aplicações agênticas.",
        ],
        inTheIndex:
          "Aqui, agentes já agem em nome dos clientes: a Sierra resolvendo reembolsos, o Mercado Libre respondendo a clientes de sua fintech, a Salesforce cobrando por agente em vez de por assento.",
        oursLabel: "Nossa especificação aberta: o proof pair",
      },
      "03": {
        title: "Identidade descentralizada para uso público e privado",
        verdict: "Se sustenta",
        thesis:
          "Quando um rosto numa videochamada pode ser gerado ao vivo, a identidade precisa ser uma credencial verificável criptograficamente, guardada numa carteira, e não um banco de dados que alguém pode invadir.",
        evidence: [
          "Em 2024, um funcionário do financeiro da empresa de engenharia Arup pagou cerca de US$ 25 mi depois de uma videochamada em que todos os outros participantes eram deepfakes.",
          "O relatório de 2026 do Fórum Econômico Mundial aponta os ataques de injeção, vídeo sintético inserido diretamente nos fluxos de verificação, como uma ameaça crescente às checagens de identidade.",
          "A regulação está forçando a mudança: pelo eIDAS 2.0, todo Estado-membro da UE deve oferecer aos cidadãos uma carteira de identidade digital.",
        ],
        inTheIndex:
          "Bancos e fintechs do índice verificam identidades em escala: Standard Chartered, o Mercado Pago do Mercado Libre, Klarna.",
      },
      "04": {
        title: "Auditoria determinística de código e chaves gerados",
        verdict: "Se sustenta, com uma correção",
        thesis:
          "À medida que agentes escrevem mais código, as verificações que pegam uma falha fatal precisam ser determinísticas e rodar antes do lançamento: chaves fracas, aleatoriedade ruim, lógica que nenhum revisor leu.",
        evidence: [
          "Em 17 de outubro, um pesquisador descobriu que oito chaves de certificados intermediários da autoridade certificadora indiana eMudhra eram trivialmente fracas; os navegadores deixaram de confiar nelas e a eMudhra anunciou o encerramento voluntário de seu negócio de TLS público. Correção: a eMudhra atribui o problema a um erro num script de geração de chaves, e a IA aparece apenas como ferramenta que o pesquisador usou para encontrar a falha. Nenhuma fonte primária culpa código gerado por IA.",
        ],
        inTheIndex:
          "O Cursor e a Lovable colocam agentes que escrevem código nas mãos de milhões de desenvolvedores e não desenvolvedores: sai mais código do que alguém de fato lê.",
      },
    },
    leftOut: [
      "“Ataques automatizados com múltiplos agentes acumulando milhares de dólares em créditos de computação de API roubados” como evento do #BlackOctober: o abuso de chaves de IA roubadas está documentado, mas não encontramos fonte para esse incidente nem para um valor em dólares.",
      "Deepfakes em tempo real burlando a MFA como parte do #BlackOctober: a tendência é real (acima), mas o vínculo com outubro não tem fonte.",
      "As chaves fracas da eMudhra como falha de código gerado por IA: a própria declaração da empresa diz o contrário.",
    ],
  },
};
