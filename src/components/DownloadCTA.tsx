"use client";

/* Platform-aware download surfaces.
 *
 * Two rules shape this:
 *
 * 1. DETECTION IS A DEFAULT, NOT A JAIL. Someone on a Mac may be downloading for the Linux box
 *    next to them, and any sniff is wrong for somebody. Every surface therefore keeps a visible
 *    route to the other platforms. Guessing well and locking the door are different things.
 *
 * 2. NEVER OFFER WHAT DOES NOT EXIST. Windows has no artifact. The honest move is to say so and
 *    show what IS there, rather than a download that 404s or a button that does nothing.
 *
 * SSR: the server cannot know the visitor's OS, so the first render — server and client alike —
 * is the `unknown` variant, and the platform resolves in an effect after mount. Starting at
 * `unknown` is what keeps the two renders identical (no hydration mismatch) and it happens to be
 * the truthful state: before we have looked, we do not know.
 */

import { useEffect, useState } from "react";
import { detectPlatform, offerFor, RELEASES_PAGE, ARTIFACTS, type Platform } from "@/downloads";

export type DownloadCopy = {
  mac: string;
  macNote: string;
  linux: string;
  linuxNote: string;
  /** Shown when we detect Windows — say plainly that it is not ready. */
  windows: string;
  windowsNote: string;
  /** Used before detection resolves, and for anything we cannot place. */
  all: string;
  allNote: string;
  /** The escape hatch label, always rendered. */
  other: string;
  /** The secondary Linux artifact, named because it behaves differently (no self-update). */
  debNote: string;
};

/* Exported because MobileMenu is already a client component with its own <a> (it closes the menu
   on click), so it needs the platform rather than a whole button. */
export function usePlatform(): Platform {
  const [p, setP] = useState<Platform>("unknown");
  useEffect(() => {
    setP(detectPlatform({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints,
    }));
  }, []);
  return p;
}

function labelFor(p: Platform, copy: DownloadCopy): { label: string; note: string } {
  switch (p) {
    case "mac": return { label: copy.mac, note: copy.macNote };
    case "linux": return { label: copy.linux, note: copy.linuxNote };
    case "windows": return { label: copy.windows, note: copy.windowsNote };
    default: return { label: copy.all, note: copy.allNote };
  }
}

/** The compact header/menu CTA. Windows falls back to the Releases page rather than a dead link:
 *  a nav pill has no room to explain, so it must not promise. The explanation lives in the panel. */
export function DownloadPill({ copy, className }: { copy: DownloadCopy; className?: string }) {
  const p = usePlatform();
  const { href } = offerFor(p);
  const { label } = labelFor(p, copy);
  return (
    <a href={href ?? RELEASES_PAGE} className={className}>
      {p === "windows" ? copy.all : label}
    </a>
  );
}

/** The setup section's app door — the real download surface, and the one with room to be honest. */
export function DownloadPanel({ copy }: { copy: DownloadCopy }) {
  const p = usePlatform();
  const { href } = offerFor(p);
  const { label, note } = labelFor(p, copy);

  /* Windows renders as a STATEMENT, not a link. A disabled-looking button invites a click that
     cannot succeed; a plain panel that says "not yet, here is what exists" respects the visit. */
  if (p === "windows") {
    return (
      <>
        <div className="path-action" role="note" style={{ cursor: "default" }}>
          <span className="path-action-label">{copy.windows}</span>
          <span className="path-action-body">{copy.windowsNote}</span>
        </div>
        <OtherPlatforms copy={copy} />
      </>
    );
  }

  return (
    <>
      <a className="path-action" href={href ?? RELEASES_PAGE} target="_blank" rel="noreferrer">
        <span className="path-action-label">{label}</span>
        <span className="path-action-body">{note}</span>
      </a>
      <OtherPlatforms copy={copy} />
    </>
  );
}

/* Always present, on every platform including the one we guessed right. This is rule 1: the
   sniff picks the default, the visitor keeps the choice. It also carries the one fact a Linux
   visitor genuinely needs and cannot infer — that the .deb will not self-update. */
function OtherPlatforms({ copy }: { copy: DownloadCopy }) {
  return (
    <p className="caption" style={{ marginTop: "0.75rem", color: "var(--color-ink-muted)" }}>
      {copy.other}{" "}
      <a href={ARTIFACTS.mac.href} style={{ color: "var(--color-ink-muted)" }}>macOS</a>
      {" · "}
      <a href={ARTIFACTS.linux.href} style={{ color: "var(--color-ink-muted)" }}>Linux AppImage</a>
      {" · "}
      <a href={ARTIFACTS.deb.href} title={copy.debNote} style={{ color: "var(--color-ink-muted)" }}>.deb</a>
    </p>
  );
}
