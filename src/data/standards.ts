// The agentic-standards scene, mapped — data for /standards.
// Kept current by AIOS research agents; update entries here, the page renders them.

export type StandardStatus =
  | "shipping" // production-grade, widely deployed
  | "converging" // standards-track with strong momentum
  | "forming" // spec + ecosystem still taking shape
  | "guidance"; // influential published framing, not a spec

export const STATUS_META: Record<StandardStatus, { label: string; color: string }> = {
  shipping: { label: "Shipping", color: "#22c55e" },
  converging: { label: "Converging", color: "#38bdf8" },
  forming: { label: "Forming", color: "#f59e0b" },
  guidance: { label: "Guidance", color: "#a78bfa" },
};

export type MeasuredStage =
  | "production" // real, measurable usage in the wild
  | "pilot" // deployed but limited / non-GA
  | "draft-spec" // standards-track document, pre-adoption
  | "whitepaper"; // narrative only — no shipped implementation

// Optional measured-reality attached to a neutral rail.
// Populate ONLY where a figure traces to a named source; otherwise omit the
// field entirely (do NOT stuff it with "[TBD-verify]" — an absent measure keeps
// the descriptive map clean). None of the 9 rails below carries one today: no
// per-rail figure is sourceable without fabrication, and that is the honest state.
export type Measured = {
  volume?: string; // e.g. "~$28,000/day (Sell Trust Ch.19)"
  auth?: string; // e.g. "~40% of remote MCP servers no-auth (arXiv:2605.22333)"
  stage?: MeasuredStage;
  source: string; // REQUIRED whenever `measured` is present — no unsourced measures
};

export type StandardEntry = {
  id: string;
  name: string;
  org: string;
  status: StandardStatus;
  what: string;
  relation: string; // how it relates to the Proof Pair / the stack
  measured?: Measured; // optional, source-gated — see note above
};

export const STANDARDS: StandardEntry[] = [
  {
    id: "ap2",
    name: "AP2 — Agent Payments Protocol",
    org: "Google + 60+ partners",
    status: "forming",
    what: "Signed user-intent artifacts for agent commerce: Intent Mandates (what the user authorized the agent to seek) and Cart Mandates (the specific transaction approved).",
    relation:
      "A Proof Pair mandate compiles down to an AP2 Intent/Cart Mandate for payments. The delta: AP2's trust chain terminates at a processor account; the Proof Pair's terminates at a verifiable human or institutional root — which is what regulated and cross-institutional delegation needs.",
  },
  {
    id: "erc8004",
    name: "ERC-8004 — Trustless Agents",
    org: "Ethereum",
    status: "forming",
    what: "On-chain registries for agent identity, reputation, and validation — public anchor rails any agent framework can reference.",
    relation:
      "Agent DIDs are registrable in its identity registry, and receipt-chain checkpoints can publish to its validation registry (the Proof Pair's planned v0.1 anchoring path).",
  },
  {
    id: "did-vc",
    name: "W3C DIDs + Verifiable Credentials",
    org: "W3C",
    status: "shipping",
    what: "The identity substrate: decentralized identifiers plus cryptographically verifiable claims — the data model underneath every serious credential system.",
    relation:
      "Every actor in the Proof Pair is a DID; a mandate is a Verifiable Credential. This is the layer the whole scene stands on.",
  },
  {
    id: "sd-jwt-vc",
    name: "SD-JWT VC",
    org: "IETF (OAuth WG)",
    status: "converging",
    what: "Verifiable credentials as JWTs with claim-level selective disclosure and cryptographic holder binding (KB-JWT).",
    relation:
      "The mandate's single normative format in Proof Pair v0 — an agent proves “I may spend ≤ $X for org Y” without revealing its full grant set.",
  },
  {
    id: "oid4vc",
    name: "OID4VC (OID4VCI + OID4VP)",
    org: "OpenID Foundation",
    status: "converging",
    what: "The issuance and presentation transports for verifiable credentials — how credentials move between issuers, holders, and verifiers over HTTP.",
    relation:
      "The Proof Pair's profiled bindings for issuing mandates and presenting them to HTTP verifiers. Headless agent wallets are conformant holders.",
  },
  {
    id: "didcomm",
    name: "DIDComm v2",
    org: "DIF",
    status: "converging",
    what: "Encrypted, transport-agnostic messaging between DID-identified parties, with mediators that queue messages for offline agents.",
    relation:
      "The agent-to-agent and mailbox transport: how a headless agent receives and presents mandates while its machine sleeps.",
  },
  {
    id: "bitstring",
    name: "Bitstring Status List",
    org: "W3C",
    status: "converging",
    what: "Credential revocation at scale — a compact, privacy-preserving way for verifiers to check whether a credential is still valid.",
    relation:
      "The Proof Pair's single normative revocation mechanism: a compromised agent must be stoppable in seconds, not CRL-hours.",
  },
  {
    id: "c2pa",
    name: "C2PA",
    org: "Coalition for Content Provenance",
    status: "shipping",
    what: "Signed, append-only provenance manifests for media content — who made this, with what, changed how.",
    relation:
      "The pattern source for the receipt chain: the same signed, tamper-evident manifest discipline, applied to agent actions instead of media files.",
  },
  {
    id: "zero-trust",
    name: "Zero Trust for AI Agents",
    org: "Anthropic",
    status: "guidance",
    what: "The security framing the field converged on in 2026: without verifiable identity you cannot enforce access controls, maintain audit trails, or attribute actions to specific agents.",
    relation:
      "Names the gap the Proof Pair fills. Identity answers who. A mandate answers what this agent may do, for whom, until when. A receipt answers who did what, under whose authority.",
  },
];

// ---------------------------------------------------------------------------
// Agentic Pulse — the measured-reality index.
//
// Narrative vs measured reality for agent-economy players. It reads the gap
// between the agentic *narrative* (the raise, the whitepaper, the projection)
// and the measured *reality* (real volume, production status, auth posture).
// The phenomenon it surfaces is what the field calls "agent-washing" — but the
// index is diagnostic, not prosecutorial, so that word stays in the prose,
// never in the title.
//
// HARD no-fabrication: every row carries a required `source` and `confidence`.
// Where a value can't be sourced it is the literal string "[TBD-verify]" — never
// an invented number. Kept current by AIOS research agents, same cadence and
// discipline as the Disruption Index. This index lives OFF the neutral rails
// above (STANDARDS) on purpose: those describe protocols, this measures players.
// ---------------------------------------------------------------------------

export type Confidence = "high" | "medium" | "low";

export type PulseEntry = {
  id: string;
  subject: string; // the player / protocol-as-product / population measured
  category: string; // "Agent payments" | "Agent identity" | "Tool auth" | ...
  narrative: string; // the valuation / hype frame — verbatim-faithful, "—" if n/a
  measured: string; // the measured reality — the number that grounds it
  authPosture: string; // can it prove WHO acted? "[TBD-verify]" if unknown
  stage: MeasuredStage | "[TBD-verify]";
  confidence: Confidence;
  isFloor?: boolean; // true = honest baseline (real cash), NOT washing
  source: string; // inline citation — no row ships without one
};

export const PULSE_INDEX: PulseEntry[] = [
  {
    id: "payments-volume-gap",
    subject: "An agent-payments protocol (unnamed in source)",
    category: "Agent payments",
    narrative: "Valuation narrative in the billions (~$7B frame).",
    measured: "~$28,000/day in real, measured volume.",
    authPosture: "[TBD-verify]",
    stage: "production", // it moves real (if tiny) volume
    confidence: "high",
    source:
      "Sell Trust (book) Ch.19 — SELL-TRUST-FULL-DRAFT.md L1498/L1546/L1571; endnote L1684. Protocol deliberately unnamed in the source; do NOT attribute it to AP2 or any named rail.",
  },
  {
    id: "mcp-auth-scan",
    subject: "Remote MCP servers (population scan)",
    category: "Tool auth",
    narrative: "Positioned as production agent-tool infrastructure.",
    measured: "~8,000 servers scanned; ~40% had no authentication at all.",
    authPosture:
      "Among servers that DID have auth, effectively none can prove who is on the other end — “a key, yes; an identity, no.”",
    stage: "production",
    confidence: "high",
    source:
      "arXiv:2605.22333, “A First Measurement Study on Authentication Security in Real-World Remote MCP Servers” (2026), via Sell Trust Ch.10 L838; endnote L1666.",
  },
  {
    id: "aauth",
    subject: "AAuth",
    category: "Agent identity / authorization",
    narrative: "IETF draft-track; positioned as the agent-auth standard.",
    measured: "0 production deployments (as of 2026-07-06); IETF draft rev-09.",
    authPosture: "Root anchored in provider DNS — not person-owned keys.",
    stage: "draft-spec",
    confidence: "high",
    source:
      "Competitive analysis, sovra-master §4 (2026-07-06). AAuth draft revision (rev-09) is as-of that read — restamp if it advances before publish.",
  },
  {
    id: "lyrie-atp",
    subject: "Lyrie / ATP",
    category: "Agent identity",
    narrative: "Raising on the agent-identity thesis; Anthropic-affiliated.",
    measured: "Whitepaper-stage; no shown production — “raised on a whitepaper.”",
    authPosture: "[TBD-verify]",
    stage: "whitepaper",
    confidence: "medium", // characterization from vault audits, not a hard metric
    source:
      "Vault audits: sovra-coherence-audit 2026-06-11 L36; sovra-product-family-audit 2026-07-02 L71.",
  },
  // ---- Real cash, for contrast (the honest floor — NOT washing) ----
  {
    id: "sierra",
    subject: "Sierra",
    category: "Agent labor (real cash)",
    narrative: "—",
    measured: "~$100M revenue, priced per “resolution.”",
    authPosture: "[TBD-verify]",
    stage: "production",
    confidence: "medium", // company-reported
    isFloor: true,
    source: "Sell Trust Ch.1 L134; endnote L1648 (company public pricing/press).",
  },
  {
    id: "cognition-devin",
    subject: "Cognition / Devin",
    category: "Agent labor (real cash)",
    narrative: "—",
    measured: "$2.25 per 15 minutes (public pricing).",
    authPosture: "[TBD-verify]",
    stage: "production",
    confidence: "medium",
    isFloor: true,
    source: "Sell Trust Ch.1 L134; endnote L1648.",
  },
];

// Two demand-side figures + one ceiling figure that frame the whole index —
// rendered as a header stat strip, not table rows (they are category-wide, not
// per-player).
export const PULSE_HEADLINE = {
  execTrust: {
    routine: "~38%",
    transactional: "~20%",
    label:
      "of execs trust agents for routine analysis — but it falls to ~20% the moment the agent touches a transaction.",
    source: "Sell Trust Ch.19 L1498; endnote L1684.",
  },
  narrativeCeiling: {
    figure: "$4.6T",
    label:
      "the canonical agentic-economy sizing — a Foundation Capital top-down projection of addressable knowledge-work wages, explicitly NOT measured revenue. “A map to gold, sold at the trailhead.”",
    source: "Sell Trust Ch.1 L134; endnote L1648.",
  },
} as const;

export const PULSE_STAGE_META: Record<
  MeasuredStage | "[TBD-verify]",
  { label: string; color: string }
> = {
  production: { label: "Production", color: "#22c55e" },
  pilot: { label: "Pilot", color: "#38bdf8" },
  "draft-spec": { label: "Draft spec", color: "#f59e0b" },
  whitepaper: { label: "Whitepaper", color: "#a78bfa" },
  "[TBD-verify]": { label: "TBD-verify", color: "#707070" },
};
