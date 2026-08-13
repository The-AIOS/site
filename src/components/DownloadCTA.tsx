"use client";

/* Platform-aware download surfaces.
 *
 * Two kinds of surface, and they answer different questions:
 *
 *   COMPACT CTAs (header pill, launch strip) — "give me the app". One destination, so they
 *   follow the visitor's OS. There is no room to explain, so they must not promise: Windows
 *   falls back to the Releases page rather than a link that cannot deliver.
 *
 *   THE SETUP PANEL — the section is titled "pick your door", so it SHOWS BOTH doors. Two
 *   links, no detection, no guessing. That also means it renders identically on the server and
 *   the client: no hydration flash, and no moment where the panel says something it will
 *   immediately replace.
 *
 * The panel used to be a single <a> whose body was one detected sentence. It read thin beside the
 * neighbouring card, whose body is a full monospace command — and it needed a trailing "Other
 * platforms:" line underneath to stay honest, which is a second surface saying what the first
 * should have said. Both links inside the panel removes the line and fills the space.
 *
 * Consequence worth noting: a container with two links cannot itself be an anchor (nested anchors
 * are invalid), so the panel is a <div> and the two <a>s are the actions.
 *
 * ONLY ANNOUNCE WHAT SELF-UPDATES. The .deb still ships on the release, but electron-updater has
 * no deb updater — a .deb install never updates and is never told. Offering it here would
 * manufacture the exact silent staleness the release gates exist to prevent.
 */

import { useEffect, useState } from "react";
import { detectPlatform, offerFor, RELEASES_PAGE, ARTIFACTS, type Platform } from "@/downloads";

export type DownloadCopy = {
  /** The pill. A verb — "Download". Never a platform, never a filename. */
  action: string;
  /** The two doors, shown side by side inside the panel. */
  mac: string;
  linux: string;
  /** Shown only to Windows visitors, because neither door is theirs. */
  windows: string;
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

/** The compact header/menu CTA. Windows resolves to the Releases page: a nav pill has no room to
 *  explain, so it must not promise something that does not exist. */
export function DownloadPill({ label, className }: { label: string; className?: string }) {
  const { href } = offerFor(usePlatform());
  return <a href={href ?? RELEASES_PAGE} className={className}>{label}</a>;
}

/** The launch strip that rides with the sticky header — the most prominent CTA on the page, so it
 *  follows the OS like the pill rather than pointing everyone at a generic page. */
export function LaunchStrip({
  banner, className,
}: {
  banner: { badge: string; text: string; rest: string; cta: string };
  className?: string;
}) {
  const { href } = offerFor(usePlatform());
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

/* White on coral, underlined so they read as links rather than as a label. The panel already sets
   color:#fff, but an <a> carries its own UA colour and would ignore it. */
const DOOR: React.CSSProperties = { color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" };

/**
 * The setup section's app door. Both platforms, always — the section asks the visitor to pick.
 *
 * Server-rendered on purpose: no detection means no useEffect, no flash, and the panel can never
 * show a platform it is about to change its mind about.
 */
export function DownloadPanel({ copy }: { copy: DownloadCopy }) {
  return (
    <>
      {/* cursor:default because .path-action styles a clickable panel, and this one is a container
          for two links rather than one action. */}
      <div className="path-action" style={{ cursor: "default" }}>
        <span className="path-action-label">{copy.action}</span>
        <span className="path-action-body">
          <a href={ARTIFACTS.mac.href} style={DOOR}>{copy.mac}</a>
          <span aria-hidden="true" style={{ opacity: 0.55 }}>{"  ·  "}</span>
          <a href={ARTIFACTS.linux.href} style={DOOR}>{copy.linux}</a>
        </span>
      </div>
      <WindowsNote copy={copy} />
    </>
  );
}

/* Renders nothing at all except for Windows visitors. The old always-visible "Other platforms:"
   line is gone — the panel now names both platforms itself, so a second line restating them was
   noise. What a Windows visitor still needs is the one thing the panel cannot tell them: that
   neither door is theirs yet. */
function WindowsNote({ copy }: { copy: DownloadCopy }) {
  const p = usePlatform();
  if (p !== "windows") return null;
  return (
    <p className="caption" style={{ marginTop: "0.75rem", color: "var(--color-ink-muted)", textTransform: "none", letterSpacing: 0 }}>
      {copy.windows}
    </p>
  );
}
