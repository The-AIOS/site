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

export type StandardEntry = {
  id: string;
  name: string;
  org: string;
  status: StandardStatus;
  what: string;
  relation: string; // how it relates to the Proof Pair / the stack
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
