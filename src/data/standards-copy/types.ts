/* The /standards page, per locale.
 *
 * English text for rails, pulse rows and market solutions lives in the data files
 * (src/data/standards.ts, src/data/marketMap.ts) — research agents keep it current
 * there. en.tsx derives from them; es.tsx and pt.tsx translate them, keyed by id.
 * Every map below is a Record over a closed id union, so a rail added to the data
 * without its translation fails the build. That IS the parity audit, same contract
 * as src/content.ts.
 *
 * Page prose is ReactNode so a translation can keep the bold/accent emphasis of the
 * English. Use the helpers in ./fmt (B, A, I) rather than inline styles.
 *
 * Stays English in every locale: standard and product names (AP2, ERC-8004, SD-JWT,
 * x402, Semaphore, zkML…), organisation names, "Proof Pair", "Agentic Pulse",
 * "Claim Provenance", URLs, and the literal [TBD-verify] marker. */

import type { ReactNode } from "react";
import type { Lane, StandardStatus, MeasuredStage, Confidence, RailId, PulseId } from "@/data/standards";
import type { Relationship, MarketId } from "@/data/marketMap";

export type RailText = { name: string; org: string; what: string; relation: string; sourceLabel: string };
export type PulseText = {
  subject: string; category: string; narrative: string; measured: string; authPosture: string; source: string;
};
export type MarketText = { name: string; qualifier?: string; what: string; stops: string; note: string };
export type CriterionText = { label: string; detail: string };
type Five<T> = [T, T, T, T, T];

export type StandardsCopy = {
  meta: { title: string; description: string; ogTitle: string };
  nav: { home: string; back: string; langLabel: string };

  hero: {
    eyebrow: string;
    h1: ReactNode;
    lede: ReactNode;
    arcEyebrow: string;
    livePulse: string;
    arc: [{ k: string; t: string; d: string }, { k: string; t: string; d: string }, { k: string; t: string; d: string }, { k: string; t: string; d: string }];
  };

  proofPair: {
    eyebrow: string; title: string; body: ReactNode; specLink: string; specNote: string;
    bridgeNext: string; bridge: ReactNode;
  };

  pulse: {
    pulseLabel: string; eyebrow: string; h2: ReactNode; intro: ReactNode;
    floorEyebrow: string; floorIntro: string; bridgeNext: string; bridge: ReactNode;
    labels: { narrative: string; measured: string; proves: string; source: string };
    confidence: Record<Confidence, string>; // rendered as "{x}" — include the word "confidence"
    stage: Record<MeasuredStage | "[TBD-verify]", string>;
    headline: { execTrustLabel: string; execTrustSource: string; ceilingLabel: string; ceilingSource: string };
    entries: Record<PulseId, PulseText>;
  };

  claim: {
    eyebrow: string; title: string; p1: ReactNode; p2: ReactNode; inviteLead: string; inviteRest: string;
    bridgeNext: string; bridge: ReactNode;
  };

  scene: {
    eyebrow: (n: number) => string;
    howItFits: string;
    source: string;
    checked: string;
    lanes: Record<Lane, { label: string; question: string }>;
    status: Record<StandardStatus, string>;
    rails: Record<RailId, RailText>;
  };

  market: {
    eyebrow: string; h2: ReactNode; intro: ReactNode;
    laneEyebrow: string; laneIntro: string; uniqueNote: string; laneOutro: ReactNode;
    criteria: Five<CriterionText>;
    solutionsEyebrow: string; solutionsIntro: ReactNode;
    whatItDoes: string; whereItStops: string;
    relationship: Record<Relationship, { label: string; blurb: string }>;
    solutions: Record<MarketId, MarketText>;
    tallyLead: string; tally: string;
    sitsEyebrow: string; sits: ReactNode;
    limitEyebrow: string; limit: ReactNode;
    composeEyebrow: string; compose: ReactNode;
    alignmentLead: string; alignment: string;
    questionsEyebrow: string;
    questions: [{ h: string; b: string }, { h: string; b: string }, { h: string; b: string }];
    closing: string;
  };

  /* Client components: strings only. */
  emptyLane: {
    legend: { rival: string; integration: string; watch: string };
    replay: string;
    aria: string;
    roles: {
      aauth: string; entra: string; pic: string; agentgateway: string; kagent: string;
      substrate: string; mcpAuth: string; passkeys: string;
    };
    openLane: string;
    chips: [string, string, string, string];
    caption: string;
  };
  receipt: {
    flow: [string, string, string];
    replay: string; aria: string;
    issuer: string; mandate: string; agent: string; action: string; receipt: string;
    caption: string;
  };

  footer: { lead: string; rest: string; kept: string; guardian: string };
};
