// The agent-identity market map — data for /standards.
//
// Published as the AIOS's own category work, de-attributed: no personal names,
// no vendor byline. A neutral, citable map of how the field is solving identity,
// authority, and accountability for AI agents — benchmarked against a running
// end-to-end implementation, not a whitepaper.
//
// Kept current by AIOS research agents. Time-sensitive facts (draft revisions,
// GA statuses) are marked [TBD-verify] and must be re-checked before publish.

export type Relationship = "rival" | "technique" | "integration";

export const RELATIONSHIP_META: Record<
  Relationship,
  { label: string; color: string; blurb: string }
> = {
  rival: {
    label: "Direct rival",
    color: "#ff5d4d",
    blurb: "Same layer — attempts the same problem.",
  },
  technique: {
    label: "Technique to adopt",
    color: "#a78bfa",
    blurb: "Source of an idea worth borrowing, not a competing product.",
  },
  integration: {
    label: "Integration point",
    color: "#6ea8ff",
    blurb: "A layer below or beside — a place to plug into, not a lane to fight for.",
  },
};

export type MarketSolution = {
  id: string;
  name: string;
  qualifier?: string; // short parenthetical describing what it is
  relationship: Relationship;
  what: string; // what it does
  stops: string; // where it stops
  note: string; // one-line relationship verdict
};

// Six solutions, what they do, where they stop. Four are integration points,
// one is a source-of-technique, and one is a true same-layer rival — the tally
// that grounds the "4 of 6 are not rivals" finding.
export const MARKET_MAP: MarketSolution[] = [
  {
    id: "aauth",
    name: "AAuth",
    qualifier: "Dick Hardt · IETF draft",
    relationship: "rival",
    what: "Delegated authorization for agents. The most direct attempt at the same problem: letting a principal grant scoped authority to an agent. Includes a genuinely good asynchronous-consent pattern (pending / deferred approval).",
    stops:
      "Root of trust is anchored in the provider's DNS, not in keys the person holds — so authority terminates at a provider, not a human. A standards-track draft with, as of writing, no production deployments. Not offline-verifiable.",
    note: "Direct rival — same layer. But DNS-rooted and pre-production.",
  },
  {
    id: "pic",
    name: "PIC",
    qualifier: "delegation / capability tokens · [TBD-verify: confirm full name]",
    relationship: "technique",
    what: "A capability-token scheme for delegating narrow permissions, with a strong attenuate-only rule: each hop in a delegation chain can only narrow authority, never widen it.",
    stops:
      "Solves sub-delegation elegantly but does not carry a person-root, government anchoring, or cross-org verification without shared infrastructure. Adjacent to the lane, not in it.",
    note: "Source of a good idea — the attenuation invariant is worth adopting; the protocol is not the same product.",
  },
  {
    id: "entra",
    name: "Microsoft Entra Agent ID",
    relationship: "integration",
    what: "Enterprise identity for agents inside one organization / tenant — issuing, listing, and governing an org's own agents at scale, with mature lifecycle tooling.",
    stops:
      "Bounded to the org that issues. It is an intra-org issuer, not a cross-org trust fabric; two agents from different companies don't gain mutual verifiability from it.",
    note: "Integration point (an issuer to interoperate with), with lifecycle blueprints worth learning from. Watch item: if combined with a verified-credential product for cross-org portability, the boundary could shift. [TBD-verify: GA status]",
  },
  {
    id: "agentgateway",
    name: "agentgateway",
    relationship: "integration",
    what: "A policy-enforcement layer for agent traffic — evaluates rich policy expressions at the gateway and allows / denies calls. Cloud-native, well-distributed.",
    stops:
      "Enforces policy; it does not establish who the agent is or where its authority came from. It needs an authority to enforce.",
    note: "Integration point — a person-rooted credential is a standard token that enters its policy engine with minimal adaptation. Compose, don't compete.",
  },
  {
    id: "kagent",
    name: "kagent",
    relationship: "integration",
    what: "An agent runtime — where agents are built and run.",
    stops:
      "Runs agents; says nothing about portable, verifiable identity or cross-org authority.",
    note: "Integration point — the layer beneath identity, not a rival to it.",
  },
  {
    id: "agent-substrate",
    name: "agent-substrate",
    relationship: "integration",
    what: "An agent runtime / substrate — infrastructure for operating agents.",
    stops:
      "Operational substrate, not an identity or authority layer.",
    note: "Integration point — not a rival.",
  },
];

// The unoccupied combination: the specific set of properties no solution above
// assembles at once. The first four are the differentiators; the last three are
// table stakes the better solutions already share.
export const LANE_CRITERIA: { label: string; detail: string; unique?: boolean }[] = [
  {
    label: "Person-rooted",
    detail:
      "the root of trust is a key held by a human being — not a cloud provider, a certificate authority, or a DNS record.",
  },
  {
    label: "Offline-verifiable",
    detail:
      "a counterparty can verify the credential without a live callback to the issuer.",
    unique: true,
  },
  {
    label: "Cross-organizational without a prior relationship",
    detail:
      "two parties who have never onboarded to each other can still verify.",
  },
  {
    label: "Government / institution-anchored",
    detail:
      "the human root can tie to a real-world, legally meaningful identity when the context demands it.",
  },
  {
    label: "Portability, selective disclosure & explicit revocation",
    detail: "the table stakes the better solutions already share.",
  },
];
