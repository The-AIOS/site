"use client";

/* Platform-aware download surfaces.
 *
 * Three rules shape this:
 *
 * 1. DETECTION IS A DEFAULT, NOT A JAIL. Someone on a Mac may be downloading for the Linux box
 *    next to them, and any sniff is wrong for somebody. Every surface keeps a visible route to
 *    the other platform. Guessing well and locking the door are different things.
 *
 * 2. NEVER OFFER WHAT DOES NOT EXIST. Windows has no artifact. Say so and show what IS there,
 *    rather than a download that 404s or a button that does nothing.
 *
 * 3. ONLY ANNOUNCE WHAT SELF-UPDATES. The .deb ships on the release, but electron-updater has no
 *    deb updater — a .deb install never updates and is never told. Announcing it would
 *    manufacture the exact silent-staleness the release gates exist to prevent, so the AppImage
 *    is the Linux download this site offers. Anyone who specifically wants the .deb finds it on
 *    the Releases page and knows what they are choosing.
 *
 * COPY SHAPE: the label is the small pill that sits opposite "Copy" on the sibling card, so it
 * holds a VERB and nothing else. The body says who the file is for — "For Mac (Apple Silicon)",
 * not "AIOS-arm64.dmg". The first version put the platform in the pill and a filename in the
 * body; the pill overflowed and the body told the visitor nothing they needed.
 *
 * SSR: the server cannot know the visitor's OS, so the first render — server and client alike —
 * is the neutral variant, and the platform resolves in an effect after mount. Starting neutral is
 * what keeps the two renders identical (no hydration mismatch) and it is the truthful state:
 * before we have looked, we do not know.
 */

import { useEffect, useState } from "react";
import { detectPlatform, offerFor, RELEASES_PAGE, ARTIFACTS, type Platform } from "@/downloads";

export type DownloadCopy = {
  /** The pill. A verb — "Download". Never a platform, never a filename. */
  action: string;
  /** Body lines: who this build is for. */
  mac: string;
  linux: string;
  /** Before detection resolves, and for anything we cannot place. */
  all: string;
  /** Windows: its own pill, because "Download" would be a lie. */
  windowsAction: string;
  windows: string;
  /** The escape hatch, always rendered. */
  other: string;
};

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

function bodyFor(p: Platform, copy: DownloadCopy): string {
  switch (p) {
    case "mac": return copy.mac;
    case "linux": return copy.linux;
    case "windows": return copy.windows;
    default: return copy.all;
  }
}

/** The compact header/menu CTA. Windows falls back to the Releases page rather than a dead link:
 *  a nav pill has no room to explain, so it must not promise. The panel does the explaining. */
export function DownloadPill({ copy, label, className }: { copy: DownloadCopy; label: string; className?: string }) {
  const p = usePlatform();
  const { href } = offerFor(p);
  return <a href={href ?? RELEASES_PAGE} className={className}>{label}</a>;
}

/** The launch strip that rides with the sticky header. Same resolution as everything else — it is
 *  the most prominent CTA on the page, so it must not be the one surface still assuming macOS. */
export function LaunchStrip({
  banner, copy, className,
}: {
  banner: { badge: string; text: string; rest: string; cta: string };
  copy: DownloadCopy;
  className?: string;
}) {
  const p = usePlatform();
  const { href } = offerFor(p);
  return (
    <a href={href ?? RELEASES_PAGE} className={className}>
      <span className="launch-badge">{banner.badge}</span>
      <span className="launch-text">
        {banner.text}<span className="launch-rest"> — {banner.rest}</span>
      </span>
      <span className="launch-cta">{banner.cta} <span aria-hidden="true">→</span></span>
    </a>
  );
}

/** The setup section's app door — the real download surface, and the one with room to be honest. */
export function DownloadPanel({ copy }: { copy: DownloadCopy }) {
  const p = usePlatform();
  const { href } = offerFor(p);

  /* Windows renders as a STATEMENT, not a link. A disabled-looking button invites a click that
     cannot succeed; a plain panel that says "not yet, here is what exists" respects the visit. */
  if (p === "windows") {
    return (
      <>
        <div className="path-action" role="note" style={{ cursor: "default" }}>
          <span className="path-action-label">{copy.windowsAction}</span>
          <span className="path-action-body">{copy.windows}</span>
        </div>
        <OtherPlatforms copy={copy} />
      </>
    );
  }

  return (
    <>
      <a className="path-action" href={href ?? RELEASES_PAGE} target="_blank" rel="noreferrer">
        <span className="path-action-label">{copy.action}</span>
        <span className="path-action-body">{bodyFor(p, copy)}</span>
      </a>
      <OtherPlatforms copy={copy} />
    </>
  );
}

/* Always present, on every platform including the one we guessed right — rule 1. Two entries
   only: the two builds that self-update. The .deb is deliberately absent (rule 3). */
function OtherPlatforms({ copy }: { copy: DownloadCopy }) {
  return (
    <p className="caption" style={{ marginTop: "0.75rem", color: "var(--color-ink-muted)", textTransform: "none", letterSpacing: 0 }}>
      {copy.other}{" "}
      <a href={ARTIFACTS.mac.href} style={{ color: "var(--color-ink-muted)" }}>Mac</a>
      {" · "}
      <a href={ARTIFACTS.linux.href} style={{ color: "var(--color-ink-muted)" }}>Linux</a>
    </p>
  );
}
