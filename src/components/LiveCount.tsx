/* LiveStat — one public number, read live where it can be, dated where it cannot.
 * Renders the dated figure from content first (so the static export is honest on its
 * own), then asks the GitHub API once in the browser and swaps in the live count. */

"use client";

import { useEffect, useState } from "react";

const REPO_API = "https://api.github.com/repos/The-AIOS/aios";

export function LiveStat({ n, label, asOf, liveLabel, href, live }: {
  n: string; label: string; asOf: string; liveLabel: string; href: string; live?: "stars";
}) {
  const [liveN, setLiveN] = useState<string | null>(null);
  useEffect(() => {
    if (live !== "stars") return;
    const ctl = new AbortController();
    fetch(REPO_API, { signal: ctl.signal, headers: { Accept: "application/vnd.github+json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d && typeof d.stargazers_count === "number") setLiveN(d.stargazers_count.toLocaleString("en-US")); })
      .catch(() => { /* offline or rate-limited: the dated figure stands */ });
    return () => ctl.abort();
  }, [live]);
  return (
    <a className="pf-num" href={href} target="_blank" rel="noreferrer">
      <span className="pf-n">{liveN ?? n}</span>
      <span className="pf-l">{label}</span>
      <span className="pf-as">{liveN ? liveLabel : asOf}</span>
    </a>
  );
}
