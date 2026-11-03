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
// the descriptive map clean). None of the rails below carries one today: no
// per-rail figure is sourceable without fabrication, and that is the honest state.
// (x402 in particular publishes no official volume figure — do not add one from
// secondary dashboards.)
export type Measured = {
  volume?: string; // e.g. "~$28,000/day (Sell Trust Ch.19)"
  auth?: string; // e.g. "~40% of remote MCP servers no-auth (arXiv:2605.22333)"
  stage?: MeasuredStage;
  source: string; // REQUIRED whenever `measured` is present — no unsourced measures
};

// The rails are grouped into lanes — the question each one answers for an agent.
// Order here is render order.
export type Lane = "identity" | "authority" | "payments" | "provenance" | "zk" | "framing";

export const LANE_META: Record<Lane, { label: string; question: string }> = {
  identity: { label: "Identity", question: "Who is this agent, and who stands behind it?" },
  authority: { label: "Authority", question: "What may it do, for whom, until when — and can that be revoked?" },
  payments: { label: "Payments", question: "Can it pay, and can the payment be tied to what the person approved?" },
  provenance: { label: "Provenance", question: "Who did what, under whose authority — and can anyone check?" },
  zk: { label: "Zero knowledge", question: "Can it prove a claim without revealing the data behind it?" },
  framing: { label: "Framing", question: "What the field says the gap is." },
};

// Every status is a claim about the outside world, so every entry cites where it
// was checked and when. Re-check `checked` before publishing; a stale status on a
// map of standards costs more trust than a missing entry.
export type Source = {
  label: string; // what the source is, e.g. "W3C Recommendation, 15 May 2025"
  url: string;
  checked: string; // YYYY-MM-DD the status was last verified against `url`
};

export type StandardEntry = {
  id: string;
  name: string;
  org: string;
  lane: Lane;
  status: StandardStatus;
  what: string;
  relation: string; // how it relates to the Proof Pair / the stack
  source: Source; // REQUIRED — no status ships without the place it was verified
  measured?: Measured; // optional, source-gated — see note above
};

export const STANDARDS: StandardEntry[] = [
  {
    id: "ap2",
    name: "AP2 — Agent Payments Protocol",
    org: "Google → FIDO Alliance",
    lane: "payments",
    status: "forming",
    what: "Signed user-intent artifacts for agent commerce: Intent Mandates (what the user authorized the agent to seek) and Cart Mandates (the specific transaction approved). Google donated it to the FIDO Alliance in April 2026, where its Payments Technical Working Group is developing it; the latest release is v0.2.",
    relation:
      "A Proof Pair mandate compiles down to an AP2 Intent/Cart Mandate for payments. The delta: AP2's trust chain terminates at a processor account; the Proof Pair's terminates at a verifiable human or institutional root — which is what regulated and cross-institutional delegation needs.",
    source: {
      label: "FIDO Alliance — Google donates AP2 (Apr 2026)",
      url: "https://fidoalliance.org/google-donates-agent-payments-protocol-to-fido-alliance/",
      checked: "2026-11-02",
    },
  },
  {
    id: "erc8004",
    name: "ERC-8004 — Trustless Agents",
    org: "Ethereum",
    lane: "identity",
    status: "forming",
    what: "On-chain registries for agent identity, reputation, and validation — public anchor rails any agent framework can reference. The identity and reputation registries are deployed on Ethereum mainnet; the validation registry is not yet, and the EIP itself is still a Draft.",
    relation:
      "Agent DIDs are registrable in its identity registry, and receipt-chain checkpoints can publish to its validation registry (the Proof Pair's planned v0.1 anchoring path).",
    source: {
      label: "EIP-8004 (status: Draft) + official contracts repo",
      url: "https://github.com/erc-8004/erc-8004-contracts",
      checked: "2026-11-02",
    },
  },
  {
    id: "did-vc",
    name: "W3C DIDs + Verifiable Credentials",
    org: "W3C",
    lane: "identity",
    status: "shipping",
    what: "The identity substrate: decentralized identifiers plus cryptographically verifiable claims — the data model underneath every serious credential system. VC Data Model 2.0 and DID Core 1.0 are W3C Recommendations; DID 1.1 is a Candidate Recommendation.",
    relation:
      "Every actor in the Proof Pair is a DID; a mandate is a Verifiable Credential. This is the layer the whole scene stands on.",
    source: {
      label: "W3C Recommendation — VC Data Model 2.0 (15 May 2025)",
      url: "https://www.w3.org/TR/vc-data-model-2.0/",
      checked: "2026-11-02",
    },
  },
  {
    id: "sd-jwt-vc",
    name: "SD-JWT VC",
    org: "IETF (OAuth WG)",
    lane: "authority",
    status: "converging",
    what: "Verifiable credentials as JWTs with claim-level selective disclosure and cryptographic holder binding (KB-JWT). The base format is now RFC 9901; the VC profile is in IESG evaluation.",
    relation:
      "The mandate's single normative format in Proof Pair v0 — an agent proves “I may spend ≤ $X for org Y” without revealing its full grant set.",
    source: {
      label: "IETF Datatracker — draft-ietf-oauth-sd-jwt-vc (IESG Evaluation)",
      url: "https://datatracker.ietf.org/doc/draft-ietf-oauth-sd-jwt-vc/",
      checked: "2026-11-02",
    },
  },
  {
    id: "oid4vc",
    name: "OID4VC (OID4VCI + OID4VP)",
    org: "OpenID Foundation",
    lane: "authority",
    status: "converging",
    what: "The issuance and presentation transports for verifiable credentials — how credentials move between issuers, holders, and verifiers over HTTP. Both are Final 1.0 specifications (OID4VP July 2025, OID4VCI September 2025); deployment is still ramping.",
    relation:
      "The Proof Pair's profiled bindings for issuing mandates and presenting them to HTTP verifiers. Headless agent wallets are conformant holders.",
    source: {
      label: "OpenID Foundation — OID4VCI 1.0 (Final)",
      url: "https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html",
      checked: "2026-11-02",
    },
  },
  {
    id: "didcomm",
    name: "DIDComm v2",
    org: "DIF",
    lane: "authority",
    status: "converging",
    what: "Encrypted, transport-agnostic messaging between DID-identified parties, with mediators that queue messages for offline agents. v2.1 is a DIF Ratified Specification.",
    relation:
      "The agent-to-agent and mailbox transport: how a headless agent receives and presents mandates while its machine sleeps.",
    source: {
      label: "DIF — DIDComm Messaging v2.1 (Ratified)",
      url: "https://identity.foundation/didcomm-messaging/spec/v2.1/",
      checked: "2026-11-02",
    },
  },
  {
    id: "bitstring",
    name: "Bitstring Status List",
    org: "W3C",
    lane: "authority",
    status: "shipping",
    what: "Credential revocation at scale — a compact, privacy-preserving way for verifiers to check whether a credential is still valid. A W3C Recommendation since May 2025.",
    relation:
      "The Proof Pair's single normative revocation mechanism: a compromised agent must be stoppable in seconds, not CRL-hours.",
    source: {
      label: "W3C Recommendation — Bitstring Status List (15 May 2025)",
      url: "https://www.w3.org/TR/vc-bitstring-status-list/",
      checked: "2026-11-02",
    },
  },
  {
    id: "c2pa",
    name: "C2PA",
    org: "Coalition for Content Provenance",
    lane: "provenance",
    status: "shipping",
    what: "Signed, append-only provenance manifests for media content — who made this, with what, changed how. The specification is at version 2.5 (October 2026).",
    relation:
      "The pattern source for the receipt chain: the same signed, tamper-evident manifest discipline, applied to agent actions instead of media files.",
    source: {
      label: "C2PA Technical Specification 2.5",
      url: "https://spec.c2pa.org/specifications/specifications/2.5/specs/C2PA_Specification.html",
      checked: "2026-11-02",
    },
  },
  {
    id: "zero-trust",
    name: "Zero Trust for AI Agents",
    org: "Anthropic",
    lane: "framing",
    status: "guidance",
    what: "The security framing published in 2026: Zero Trust for agents means identities that are cryptographically rooted and permissions scoped per task — because traditional access controls won't stop an agent from misusing permissions it legitimately holds.",
    source: {
      label: "Anthropic — Zero Trust for AI agents (27 May 2026)",
      url: "https://claude.com/blog/zero-trust-for-ai-agents",
      checked: "2026-11-02",
    },
    relation:
      "Names the gap the Proof Pair fills. Identity answers who. A mandate answers what this agent may do, for whom, until when. A receipt answers who did what, under whose authority.",
  },
  {
    id: "verifiable-intent",
    name: "Verifiable Intent",
    org: "Mastercard",
    lane: "payments",
    status: "forming",
    what: "A chain of signed credentials (layered SD-JWT) proving that an agent's purchase stayed inside the limits the person set — amount, merchant, line items. Published in March 2026 as an open draft (v0.1), maintained by Mastercard and open to multi-stakeholder contribution.",
    relation:
      "Built on SD-JWT, the same format family as a Proof Pair mandate, so the two can be expressed in each other's terms. It answers the payments half of the question the mandate answers in general: did the person authorize this, within these limits.",
    source: {
      label: "Verifiable Intent spec — README (Draft v0.1)",
      url: "https://github.com/agent-intent/verifiable-intent",
      checked: "2026-11-02",
    },
  },
  {
    id: "x402",
    name: "x402",
    org: "x402 Foundation (Linux Foundation) · incubated by Coinbase",
    lane: "payments",
    status: "converging",
    what: "Payment inside the HTTP request itself, using the long-reserved 402 Payment Required status: a client or agent pays for a resource and gets it in one exchange. Launched by Coinbase in 2025; now governed by a Linux Foundation project with 40 member organizations at its July 2026 launch.",
    relation:
      "Settles the payment; says nothing about who authorized it. That is the half a mandate supplies — the proof that this spend was delegated, by whom, within what limit.",
    source: {
      label: "Linux Foundation — x402 Foundation operational launch (14 Jul 2026)",
      url: "https://www.linuxfoundation.org/press/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications",
      checked: "2026-11-02",
    },
  },
  {
    id: "semaphore",
    name: "Semaphore",
    org: "Privacy & Scaling Explorations · Ethereum Foundation",
    lane: "zk",
    status: "shipping",
    what: "Proves you belong to a group without revealing which member you are, with a nullifier that stops the same member from signalling twice. On its fourth major version (v4, 2024; latest release October 2026).",
    relation:
      "Membership without identity: an agent could show it acts for some verified member of an organization without disclosing which one — the privacy-preserving edge of the identity lane.",
    source: {
      label: "Semaphore documentation + releases (v4.14.5, Oct 2026)",
      url: "https://docs.semaphore.pse.dev/",
      checked: "2026-11-02",
    },
  },
  {
    id: "bbs",
    name: "Data Integrity BBS Cryptosuites",
    org: "W3C",
    lane: "zk",
    status: "converging",
    what: "Selective disclosure for verifiable credentials with unlinkable derived proofs: a holder reveals only some fields, and two presentations of the same credential cannot be correlated. A W3C Candidate Recommendation (September 2026).",
    relation:
      "The privacy property SD-JWT alone does not give: the same mandate presented to two verifiers cannot be linked back to one agent.",
    source: {
      label: "W3C Candidate Recommendation Draft — vc-di-bbs (10 Sep 2026)",
      url: "https://www.w3.org/TR/vc-di-bbs/",
      checked: "2026-11-02",
    },
  },
  {
    id: "zkml",
    name: "zkML — verifiable inference",
    org: "Open field · EZKL among the most-used provers",
    lane: "zk",
    status: "forming",
    what: "Zero-knowledge proofs that a given model produced a given output, without revealing the weights or the inputs. Tooling exists and proofs can be checked on-chain, in a browser or on a device; proving cost is still high and there is no standard yet.",
    relation:
      "For receipts, the difference between “an agent did this” and “this model, under this mandate, did this” — provable to someone who cannot see the model.",
    source: {
      label: "EZKL — open zkML prover (v23.0.5, Feb 2026)",
      url: "https://github.com/zkonduit/ezkl",
      checked: "2026-11-02",
    },
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
      "Forthcoming — Sell Trust (2026). Protocol deliberately unnamed in the source.",
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
      "arXiv:2605.22333 — “A First Measurement Study on Authentication Security in Real-World Remote MCP Servers” (2026).",
  },
  {
    id: "aauth",
    subject: "AAuth (Dick Hardt)",
    category: "Agent identity / authorization",
    narrative: "IETF draft-track; positioned as the agent-auth standard.",
    measured: "0 production deployments (as of 2026-07-06); IETF draft rev-09.",
    authPosture: "Root anchored in provider DNS — not person-owned keys.",
    stage: "draft-spec",
    confidence: "high",
    source:
      "Public IETF draft — AAuth (Dick Hardt); draft rev-09 as of 2026-07-06, restamp if it advances before publish.",
  },
  {
    id: "lyrie-atp",
    subject: "Lyrie / ATP",
    category: "Agent identity",
    narrative: "Raising on the agent-identity thesis; Anthropic-affiliated.",
    measured: "Whitepaper-stage; no shown production — “raised on a whitepaper.”",
    authPosture: "[TBD-verify]",
    stage: "whitepaper",
    confidence: "medium", // observatory characterization, not a hard metric
    source:
      "AIOS Observatory assessment — whitepaper-stage; no shown production as of mid-2026.",
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
    source: "Company public pricing / press.",
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
    source: "Public pricing (Cognition / Devin).",
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
    source: "Forthcoming — Sell Trust (2026).",
  },
  narrativeCeiling: {
    figure: "$4.6T",
    label:
      "the canonical agentic-economy sizing — a Foundation Capital top-down projection of addressable knowledge-work wages, explicitly NOT measured revenue. “A map to gold, sold at the trailhead.”",
    source: "Foundation Capital — top-down projection.",
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
