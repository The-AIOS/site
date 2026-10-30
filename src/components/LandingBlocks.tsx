/* LandingBlocks — the small blocks that answer a visitor's question where it comes up:
 *
 *   WayIn               end of 01 · same destination, a different way in (the enterprise
 *                       route beside the AIOS; McKinsey cited as the source, never mocked)
 *   ProofFromPeople     end of 01 · the rooms it has been told in, and public dated numbers
 *   SystemWrites        01, under the anatomy · "do I have to write all these files?"
 *   SafeByConstruction  05, between the doors and the steps · "is it safe to give it access?"
 *   WhyGit              05, after the safe block · one line
 *   ProofBeat           00, before the sign-off · the ending the roles tell, for people who
 *                       never open a role
 *   CommunityLine       00, after the sign-off · the Discord
 *
 * All copy from CONTENT[locale]; claims in SafeByConstruction come from the framework's own
 * SECURITY.md, FORTRESS.md and hooks/provenance.py — nothing stronger than those say. */

import type { Content } from "@/content";
import { GitHubLink } from "./GitHubLink";
import { LiveStat } from "./LiveCount";
import { ProofViz } from "./YourAios";
import "./landing-blocks.css";

const REPO = "https://github.com/The-AIOS/aios";

function HL({ h }: { h: [string, string, string] }) {
  return <>{h[0]}<span className="accent">{h[1]}</span>{h[2]}</>;
}

export function WayIn({ c }: { c: Content["wayIn"] }) {
  return (
    <div className="wi">
      <h3 className="display-md wi-h"><HL h={c.h} /></h3>
      <div className="wi-cols">
        {c.routes.map((r) => (
          <div key={r.k} className="wi-col">
            <span className="wi-k">{r.k}</span>
            <p className="wi-t">{r.t}</p>
            {r.lines.map((l) => <p key={l} className="wi-l">{l}</p>)}
          </div>
        ))}
      </div>
      <p className="wi-cite">{c.cite.pre}<a href={c.cite.href} target="_blank" rel="noreferrer" className="link-inline">{c.cite.label}</a></p>
      <p className="wi-close">{c.close}</p>
    </div>
  );
}

export function ProofFromPeople({ c }: { c: Content["people"] }) {
  return (
    <div className="pf">
      <div className="eyebrow pf-eyebrow">{c.eyebrow}</div>
      <ul className="pf-rooms" aria-label={c.roomsLabel}>
        {c.rooms.map((r) => (
          <li key={r.where + r.when}>
            <span className="pf-where">{r.where}</span>
            <span className="pf-what">{r.what}</span>
            <span className="pf-when">{r.when}</span>
          </li>
        ))}
      </ul>
      <div className="pf-nums">
        {c.numbers.map((n) => <LiveStat key={n.label} {...n} liveLabel={c.liveLabel} />)}
      </div>
      <p className="pf-note">{c.note}</p>
    </div>
  );
}

export function SystemWrites({ c }: { c: Content["writes"] }) {
  return (
    <div className="sw">
      <p className="sw-h">{c.h}</p>
      <p className="sw-b">{c.b}</p>
    </div>
  );
}

export function SafeByConstruction({ c }: { c: Content["safe"] }) {
  return (
    <div className="sb">
      <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>{c.eyebrow}</div>
      <h3 className="display-md sb-h"><HL h={c.h} /></h3>
      <p className="sb-lede">{c.lede}</p>
      <div className="grid-3 sb-grid">
        {c.facts.map((f) => (
          <div key={f.t} className="card">
            <h4>{f.t}</h4>
            <p>{f.b}</p>
          </div>
        ))}
      </div>
      <p className="sb-line">{c.ladder.pre}<a href="#containment" className="link-inline">{c.ladder.link}</a>{c.ladder.post}</p>
      <p className="sb-line">{c.honest.pre}<GitHubLink href={`${REPO}/blob/main/SECURITY.md`} surface="safe-security" className="link-inline">{c.honest.link}</GitHubLink>{c.honest.post}</p>
    </div>
  );
}

export function WhyGit({ c }: { c: Content["whyGit"] }) {
  return (
    <p className="wg"><span className="wg-k">{c.k}</span>{c.b}</p>
  );
}

export function ProofBeat({ c, chain, before, after, alt }: {
  c: Content["proofBeat"]; chain: [string, string, string, string]; before: string; after: string; alt: string;
}) {
  return (
    <div className="pb">
      <div className="pb-text">
        <div className="eyebrow" style={{ marginBottom: "0.625rem" }}>{c.eyebrow}</div>
        <p className="pb-pair"><span>{c.inn}</span><span aria-hidden="true">→</span><span>{c.out}</span></p>
        <p className="pb-b">{c.b}</p>
        <a href={c.href} target="_blank" rel="noreferrer" className="repo-link-inline">{c.spec}</a>
      </div>
      <div className="pb-viz"><ProofViz chain={chain} before={before} after={after} alt={alt} /></div>
    </div>
  );
}

export function CommunityLine({ c }: { c: Content["community"] }) {
  return (
    <p className="cm">{c.pre}<a href={c.href} target="_blank" rel="noreferrer" className="link-inline">{c.link}</a></p>
  );
}
