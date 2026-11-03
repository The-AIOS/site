/* Emergent business opportunities — the section below the index.
 *
 * Links and the English text live in src/data/opportunities.ts; the per-locale text
 * comes from src/data/di-copy/. Evidence lines pair with the data's evidence items
 * by position (a build-time check in di-copy/index.ts keeps the counts equal). */

import { OPPORTUNITIES } from "@/data/opportunities";
import type { DICopy } from "@/data/di-copy/types";

export default function EmergentOpportunities({ copy: t }: { copy: DICopy["opportunities"] }) {
  return (
    <section className="eo" aria-labelledby="eo-title">
      <div className="container">
        <p className="eyebrow">
          <span className="accent">●</span> {t.eyebrow}
        </p>
        <h2 id="eo-title" className="eo-title">
          {t.title}
        </h2>
        <p className="eo-lede">{t.lede}</p>

        <div className="eo-grid">
          {OPPORTUNITIES.map((o) => {
            const x = t.items[o.n];
            return (
              <article key={o.n} className="eo-card">
                <div className="eo-card-head">
                  <span className="eo-n">{o.n}</span>
                  <span className="eo-verdict">{x.verdict}</span>
                </div>
                <h3>{x.title}</h3>
                <p className="eo-thesis">{x.thesis}</p>
                <ul className="eo-evidence">
                  {o.evidence.map((ev, i) => (
                    <li key={ev.text}>
                      {x.evidence[i]}{" "}
                      <span className="eo-links">
                        {ev.links.map((l, j) => (
                          <span key={l.url}>
                            {j > 0 && " · "}
                            <a href={l.url} target="_blank" rel="noopener noreferrer">
                              {l.label}
                            </a>
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="eo-index">
                  <b>{t.inTheIndex}</b> {x.inTheIndex}
                </p>
                {"ours" in o && (
                  <a className="eo-ours" href={o.ours.url} target="_blank" rel="noopener noreferrer">
                    {x.oursLabel ?? o.ours.label} →
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <div className="eo-leftout">
          <h3>{t.leftOutTitle}</h3>
          <p>{t.leftOutLede}</p>
          <ul>
            {t.leftOut.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
