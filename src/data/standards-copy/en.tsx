import { STANDARDS, STATUS_META, LANE_META, PULSE_INDEX, PULSE_HEADLINE, PULSE_STAGE_META } from "@/data/standards";
import { MARKET_MAP, RELATIONSHIP_META, LANE_CRITERIA } from "@/data/marketMap";
import type { StandardsCopy, RailText, PulseText, MarketText } from "./types";
import { B, S, A, I, TBD } from "./fmt";

/* English is DERIVED from the data files for every rail, pulse row and market
   solution — edit the data, not this file. Page prose below is the source text the
   ES and PT files translate. */

const rails = Object.fromEntries(
  STANDARDS.map((s) => [s.id, { name: s.name, org: s.org, what: s.what, relation: s.relation, sourceLabel: s.source.label }]),
) as Record<(typeof STANDARDS)[number]["id"], RailText>;

const pulse = Object.fromEntries(
  PULSE_INDEX.map((p) => [p.id, {
    subject: p.subject, category: p.category, narrative: p.narrative, measured: p.measured,
    authPosture: p.authPosture, source: p.source,
  }]),
) as Record<(typeof PULSE_INDEX)[number]["id"], PulseText>;

const solutions = Object.fromEntries(
  MARKET_MAP.map((m) => [m.id, {
    name: m.name, qualifier: "qualifier" in m ? m.qualifier : undefined, what: m.what, stops: m.stops, note: m.note,
  }]),
) as Record<(typeof MARKET_MAP)[number]["id"], MarketText>;

export const en: StandardsCopy = {
  meta: {
    title: "Agentic Standards — the scene, mapped",
    description:
      "Agents are getting identities, mandates, and receipts. The standards making delegation provable — W3C VCs, ERC-8004, SD-JWT, OID4VC, AP2, Verifiable Intent, x402, C2PA and a zero-knowledge lane — mapped and sourced, with the Proof Pair open spec at the center.",
    ogTitle: "Agentic Standards",
  },
  nav: { home: "/", back: "← Back to home", langLabel: "English" },

  hero: {
    eyebrow: "Agentic standards · the scene, mapped",
    h1: <>Agents are getting identities, mandates, and receipts.{" "}<A>Here&apos;s the map.</A></>,
    lede: (
      <>
        Delegation only works at scale when it&apos;s provable — when an agent can show{" "}
        <B>what it&apos;s allowed to do</B> before it acts, and{" "}
        <B>who did what, under whose authority</B> after. These are the standards making that real, what each
        one covers, and how they fit together.
      </>
    ),
    arcEyebrow: "One page, one argument — read it top to bottom",
    livePulse: "Live pulse",
    arc: [
      { k: "First", t: "What we run", d: "The Proof Pair — the open spec we operate: mandate in, receipt out." },
      { k: "Then", t: "How we read the field", d: "The Agentic Pulse — narrative measured against reality, every figure sourced." },
      { k: "Which surfaces", t: "A lane we're opening", d: "Claim Provenance — an unoccupied question we think matters, put in the open as an invitation." },
      { k: "Set in", t: "The whole map", d: "The scene and the market — every rail, and where the lane still sits empty." },
    ],
  },

  proofPair: {
    eyebrow: "Our open working spec · v0 · live",
    title: "The Proof Pair",
    body: (
      <>
        <I>Mandate in, receipt out — delegation made provable at both ends.</I>{" "}
        A mandate is authority you can verify <S>before</S> the act: a verifiable credential from a human to an
        agent — scoped, expiring, revocable. A receipt is attribution you can verify <S>after</S>{" "}
        it: a signed, hash-chained record binding the action to the agent and the mandate that authorized it.
        One spec, because every receipt references its mandate. This is what we run, specified so you can run it too.
      </>
    ),
    specLink: "Read the spec — the-aios.org/proof-pair →",
    specNote: "· open, CC-BY 4.0, anyone may implement",
    bridgeNext: "Then — how we read the field",
    bridge: (
      <>
        That&apos;s what we run. To place it honestly, we start by reading the agent economy as it actually is —{" "}
        <S>the story it tells, measured against what it can show.</S>
      </>
    ),
  },

  pulse: {
    pulseLabel: "Agentic Pulse — live index",
    eyebrow: "Agentic Pulse · narrative vs measured reality",
    h2: <>What the agent economy <A>claims</A>, and what it can <A>show</A>.</>,
    intro: (
      <>
        The pulse reads the gap between the agentic narrative — the raise, the whitepaper, the projection — and the
        measured reality: real volume, production status, whether the thing can prove <I>who</I> acted. The
        phenomenon it surfaces is what the field calls <I>agent-washing</I>. It is a diagnostic, not a scoreboard.{" "}
        <B>Every figure traces to a named source.</B> Where a value can&apos;t be sourced it reads <TBD /> — never
        an invented number.
      </>
    ),
    floorEyebrow: "Real cash, for contrast — the honest floor (not washing)",
    floorIntro:
      "The index cuts toward the honest builders too. These are what real, measured agent revenue looks like — the floor the narrative should be graded against, not just the ceiling it's sold at.",
    bridgeNext: "Which surfaces — an open lane",
    bridge: (
      <>
        Reading the field this way surfaces where the gaps are. One gap has no one standing in it yet — and{" "}
        <S>it isn&apos;t a lane to seize, it&apos;s a question to open.</S>
      </>
    ),
    labels: { narrative: "Narrative", measured: "Measured reality", proves: "Can it prove who acted?", source: "Source:" },
    confidence: { high: "high confidence", medium: "medium confidence", low: "low confidence" },
    stage: Object.fromEntries(Object.entries(PULSE_STAGE_META).map(([k, v]) => [k, v.label])) as StandardsCopy["pulse"]["stage"],
    headline: {
      execTrustLabel: PULSE_HEADLINE.execTrust.label,
      execTrustSource: PULSE_HEADLINE.execTrust.source,
      ceilingLabel: PULSE_HEADLINE.narrativeCeiling.label,
      ceilingSource: PULSE_HEADLINE.narrativeCeiling.source,
    },
    entries: pulse,
  },

  claim: {
    eyebrow: "An open lane · a question we think matters, offered not claimed",
    title: "Claim Provenance",
    p1: (
      <>
        Proof answers <B>is this real?</B> It has no answer for{" "}
        <B>should I be suspicious — and who, exactly, is behind the doubt?</B> In an era where AI makes
        coordinated, plausible, tireless suspicion cheaper than it has ever been, we have a fact layer for what
        things are. We have nothing for who manufactures doubt about them.
      </>
    ),
    p2: (
      <>
        The missing primitive: a verifiable answer to{" "}
        <I>who is actually behind this assertion, since when, in coordination with whom</I> — coordinated-inauthenticity
        detection as public infrastructure, not a platform&apos;s private trust-and-safety black box. Provenance
        pointed at the accuser, not the accused. Provenance for the suspicion itself.
      </>
    ),
    inviteLead: "We're putting this open question on the record — as an invitation, not a claim. ",
    inviteRest:
      "An unoccupied lane we think matters, named in public so the people who should build it can find it — the same host posture as the Proof Pair. The spec isn't written yet. Neither is anyone else's, and we'd rather help open the lane than fence it off. Consider this an open door.",
    bridgeNext: "Set in — the whole map",
    bridge: (
      <>
        That&apos;s the lane we&apos;re opening. Here is the whole field it sits in —{" "}
        <S>every rail pulling the same direction, and where the lane still reads empty.</S>
      </>
    ),
  },

  scene: {
    eyebrow: (n) => `The scene — ${n} rails, one direction`,
    howItFits: "How it fits:",
    source: "Source:",
    checked: "checked",
    lanes: LANE_META,
    status: Object.fromEntries(Object.entries(STATUS_META).map(([k, v]) => [k, v.label])) as StandardsCopy["scene"]["status"],
    rails,
  },

  market: {
    eyebrow: "The agent-identity landscape, mapped",
    h2: <>Benchmarked against a{" "}<A>running system</A>, not a whitepaper.</>,
    intro: (
      <>
        Most agent-identity comparisons line up whitepapers against whitepapers. This one is calibrated against a
        proven end-to-end implementation — a working system in which an agent is issued a scoped, owner-bound
        credential, presents it to a counterparty in a different organization with no prior relationship, and has
        that credential verified cryptographically on the wire, with selective disclosure and explicit revocation,
        today. The bar here is <B>implemented, not proposed.</B>
      </>
    ),
    laneEyebrow: "The lane, stated first",
    laneIntro:
      "Here is the specific combination the field has not delivered — an agent identity that is simultaneously all of these at once:",
    uniqueNote: " (No one else in this map does this.)",
    laneOutro: <><S>No solution in the field delivers all of the above.</S> The map below shows where each one stops.</>,
    criteria: LANE_CRITERIA.map((c) => ({ label: c.label, detail: c.detail })) as StandardsCopy["market"]["criteria"],
    solutionsEyebrow: "Six solutions — what they do, where they stop",
    solutionsIntro: (
      <>
        A crucial distinction runs through the field:{" "}
        <B>most of these are not rivals — they are integration points.</B> Four of the six operate at layers below
        or beside agent authority (where agents run, how traffic is enforced, who issues inside one company). Only
        one occupies the same layer.
      </>
    ),
    whatItDoes: "What it does",
    whereItStops: "Where it stops",
    relationship: Object.fromEntries(
      Object.entries(RELATIONSHIP_META).map(([k, v]) => [k, { label: v.label, blurb: v.blurb }]),
    ) as StandardsCopy["market"]["relationship"],
    solutions,
    tallyLead: "The tally: ",
    tally:
      "four integration points (two runtimes, one enforcement layer, one intra-org issuer), one source of a technique to adopt, and one true rival in the same layer — AAuth — which is DNS-rooted and has yet to ship in production.",
    sitsEyebrow: "Where the person-rooted approach sits",
    sits: (
      <>
        Against that map, the lane is still open. A person-rooted agent credential — owner-bound, revocable,
        selectively disclosable, cross-org, offline-verifiable, and anchorable to a real-world identity — is the one
        combination nobody else assembles. The human holds the key that authority descends from: AAuth roots in DNS,
        the enterprise issuers root in a tenant, the runtimes have no root at all. Offline verification is unique to
        this approach across the whole map. This isn&apos;t a claim that everyone else is wrong — they solve{" "}
        <I>different</I> problems, and the authority layer that sits above all of them, rooted in a person, is
        unoccupied.
      </>
    ),
    limitEyebrow: "The honest limit — where person-root actually matters",
    limit: (
      <>
        A market map that only lists strengths is not credible. A person-owned root of trust has real demand{" "}
        <B>only where the context requires that a human authorized something</B> — government acts, legally binding
        mandates, citizen transactions, regulated consent. Where authority is purely machine-to-machine and no human
        needs to be provably behind it, a provider-root or an org-issuer is often enough, and cheaper. So this is
        both the market and its edge: the value is highest exactly where the law, an institution, or accountability
        demands a real person stand behind the agent&apos;s action — and it is deliberately not trying to be the
        default for every automated call between two services. This same limit was reached independently by two
        separate analyses; independent convergence on a system&apos;s honest boundary is a credibility signal, not a
        weakness.
      </>
    ),
    composeEyebrow: "Compose, don't compete",
    compose: (
      <>
        The position we&apos;re aiming for is to be the authority layer everyone else can build on — adopting the
        best ideas without adopting whole protocols: <B>attenuation per hop</B> (sub-delegation can only narrow
        authority, never widen it), <B>asynchronous consent</B> (deferred / pending approval as a first-class flow),
        and <B>lifecycle blueprints</B> from the enterprise issuers. A person-rooted mandate is the source of truth
        that renders down into the authorization protocols the ecosystem already uses — riding existing rails rather
        than fighting them. The proof of &ldquo;compose, don&apos;t compete&rdquo; is an integration, not an argument.
      </>
    ),
    alignmentLead: "Standards alignment: ",
    alignment:
      "built on and interoperating with the open standards the category is converging on — ERC-8004, AP2, W3C Verifiable Credentials, SD-JWT, and OID4VC — so composability is designed in, not bolted on.",
    questionsEyebrow: "Open questions for the category",
    questions: [
      {
        h: "Platform-custodied person-keys.",
        b: "The largest consumer platforms already custody person-scale keys (the “sign in with…” pattern). The open question is whether the consumer and citizen agentic economy — where a self-held person-root is genuinely required — grows large and fast enough before platform-custodied keys become the de-facto root.",
      },
      {
        h: "Enterprise-suite consolidation.",
        b: "An enterprise identity vendor connecting its agent-ID product to its verifiable-credential product could push toward cross-org portability from an enormous installed base.",
      },
      {
        h: "Standards-body anointment.",
        b: "If a working group adopts a provider-rooted draft as the default, it could become an enterprise focal point regardless of production maturity. To date, the tooling ecosystem has leaned the other way.",
      },
    ],
    closing:
      "A map of a live field, drawn honestly, by the team measuring the category rather than marketing to it. Benchmarked against a running end-to-end implementation as of mid-2026; standards drafts and product statuses evolve — time-sensitive claims are re-verified before publication.",
  },

  emptyLane: {
    legend: { rival: "rival", integration: "integration point", watch: "adjacent / watch" },
    replay: "↻ replay",
    aria:
      "A three-by-three map of the agent-identity landscape. Eight boxes fill one by one — AAuth the one same-layer rival, then the integration points Entra Agent ID, agentgateway, kagent, agent-substrate and MCP-auth, plus the adjacent patterns PIC and passkeys. The center box stays empty, then pulses awake as the open lane with four differentiators no one else combines: person-root, offline-verify, cross-org, gov-anchored. The one lane still open.",
    roles: {
      aauth: "rival · DNS-root · 0 prod",
      entra: "intra-org issuer",
      pic: "attenuation pattern",
      agentgateway: "enforcement layer",
      kagent: "runtime",
      substrate: "runtime",
      mcpAuth: "OAuth 2.1 render target",
      passkeys: "adjacent pattern",
    },
    openLane: "open lane",
    chips: ["person-root", "offline-verify", "cross-org", "gov-anchored"],
    caption: "The one lane still open.",
  },

  receipt: {
    flow: ["mandate", "action", "receipt"],
    replay: "↻ replay",
    aria:
      "A mandate credential travels from issuer to agent; each action the agent takes stamps a signed receipt onto a growing hash chain. Three receipts link up; the finished chain glows.",
    issuer: "Issuer",
    mandate: "Mandate",
    agent: "Agent",
    action: "Action",
    receipt: "Receipt",
    caption: "Every action, provably traced",
  },

  footer: {
    lead: "The map is descriptive, not a scoreboard.",
    rest:
      "Most of these rails are other people's work, and good work — the scene wins when they interoperate. Where the Proof Pair relates to one, the card says how; where it compiles down to one, the spec says exactly how.",
    kept: "Kept current by AIOS research agents · Rails re-checked 2 November 2026; Pulse and market map as of July 2026",
    guardian: "the-aios.org — the Guardian",
  },
};
