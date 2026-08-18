"use client";

/* Platform-aware download surfaces.
 *
 * Two kinds of surface, answering different questions:
 *
 *   COMPACT CTAs (header pill, launch strip) — "give me the app". One destination, so they follow
 *   the visitor's OS. When there is no build for that OS they must not quietly reroute: sending a
 *   Windows visitor to a Releases page listing a .dmg and an .AppImage looks like the click failed.
 *   They stay a button, keep the pointer cursor, and SAY what happened.
 *
 *   THE SETUP PANEL — the section is titled "pick your door", so it shows every door, including
 *   all three now open (Windows joined 2026-08-17). Was two links plus "Windows (soon)", because a
 *   non-link is the honest rendering of a build that does not exist. No detection, which also
 *   means it renders identically on server and client: no hydration flash.
 *
 * ONLY ANNOUNCE WHAT SELF-UPDATES. The .deb ships on the release but electron-updater has no deb
 * updater — a .deb install never updates and is never told — so it is not offered here.
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { detectPlatform, offerFor, RELEASES_PAGE, ARTIFACTS, type Platform } from "@/downloads";

export type DownloadCopy = {
  /** The pill. A verb — "Download". Never a platform, never a filename. */
  action: string;
  /** The doors, side by side inside the panel. */
  mac: string;
  linux: string;
  /** Listed but not a link — there is nothing to download yet. */
  /** The third door. Was `windowsSoon` until 2026-08-17, when it stopped being soon. */
  windows: string;
  /** The small link beside a Windows download, offering the SmartScreen explanation. */
  unsignedHint: string;
  /** The modal a Windows visitor gets when they click a CTA. */
  /** Was the "not yet" modal; now explains what Windows will say and what to click. */
  soonTitle: string;
  soonBody: string;
  /** Accessible label for the corner × — the glyph itself is decorative. */
  soonClose: string;
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

/* ── the "not yet on your OS" modal ─────────────────────────────────────────────────────────────
   Rendered through a portal onto document.body: the launch strip lives inside a sticky header with
   its own stacking context, so a dialog rendered in place would be trapped underneath it. */
function SoonModal({ copy, onClose }: { copy: DownloadCopy; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.soonTitle}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)",
      }}
    >
      {/* Stop propagation so a click INSIDE the card does not dismiss it. */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",   // anchors the × in the corner
          maxWidth: "26rem", width: "100%",
          padding: "1.5rem",
          borderRadius: 14,
          border: "1px solid var(--color-hairline)",
          background: "var(--color-canvas)",
          color: "var(--color-ink)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Corner dismiss. The visible glyph is decorative, so it is aria-hidden and the button
            carries the translated label — a screen reader announcing "×" tells nobody anything. */}
        <button
          type="button"
          onClick={onClose}
          aria-label={copy.soonClose}
          style={{
            position: "absolute", top: "0.6875rem", right: "0.6875rem",
            width: 28, height: 28,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            border: 0, background: "transparent",
            color: "var(--color-ink-muted)",
            borderRadius: 999,
            fontSize: "1.25rem", lineHeight: 1, fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          <span aria-hidden="true">×</span>
        </button>
        {/* padding-right keeps a longer translated title clear of the × rather than sliding under it */}
        <h3 style={{ margin: "0 0 0.5rem", paddingRight: "2rem", fontFamily: "var(--font-display)", fontSize: "1.0625rem", letterSpacing: "-0.02em" }}>
          {copy.soonTitle}
        </h3>
        <p style={{ margin: "0 0 1.125rem", fontSize: "0.875rem", lineHeight: 1.5, color: "var(--color-ink-muted)" }}>
          {copy.soonBody}
        </p>
        {/* The builds that DO exist — a dead end is what the reroute was; this is the alternative.
            Last element in the card now, so no trailing margin. */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <a href={ARTIFACTS.mac.href} className="nav-cta">{copy.mac}</a>
          <a href={ARTIFACTS.linux.href} className="nav-cta">{copy.linux}</a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/**
 * Shared by the header pill and the launch strip: on a platform we ship for, a real link; on one we
 * do not, a button that keeps the pointer cursor and opens the modal.
 *
 * It must not be an <a> in the Windows case. An anchor with no usable href either navigates
 * somewhere wrong or does nothing, and both read as a broken click — which is exactly what the
 * earlier "reroute to the Releases page" did.
 */
/* Windows stopped being a "not yet" on 2026-08-17 — it has had a build since v0.8.3 and the link
   opened once three first-run defects landed in v0.8.7. What it still lacks is a code signature, so
   the gate became a NOTICE: the download proceeds, and the operator is told what Windows will say
   before Windows says it. That ordering is the whole fix — the prompt's damage is SURPRISE, not the
   click. Measured on a clean machine: it shows "Windows protected your PC" with Run anyway behind a
   More info link, and the one person who met it cleared it unaided because someone was there to
   say it was expected. This copy is that someone. */
function usePlatformOffer(): { href: string | null; unsigned: boolean; open: boolean; setOpen: (v: boolean) => void } {
  const p = usePlatform();
  const [open, setOpen] = useState(false);
  const { href } = offerFor(p);
  // `unknown` (a phone, an unrecognised UA) still gets the Releases page: there may well be a build
  // for them, we just cannot tell which.
  return { href, unsigned: p === "windows", open, setOpen };
}

export function DownloadPill({ copy, label, className }: { copy: DownloadCopy; label: string; className?: string }) {
  const { href, unsigned, open, setOpen } = usePlatformOffer();
  /* The download is a real link on every platform now. On Windows it carries a note beside it —
     deliberately NOT a modal in front of it, which would put a dialog between the operator and the
     thing they came for, and would read as a warning about our software rather than about Windows. */
  const link = <a href={href ?? RELEASES_PAGE} className={className}>{label}</a>;
  if (!unsigned) return link;
  return (
    <>
      {link}
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ display: "block", marginTop: "0.5rem", background: "none", border: 0, padding: 0,
                 font: "inherit", fontSize: "0.8em", opacity: 0.7, cursor: "pointer", textAlign: "left",
                 textDecoration: "underline" }}
      >
        {copy.unsignedHint}
      </button>
      {open && <SoonModal copy={copy} onClose={() => setOpen(false)} />}
    </>
  );
}

export function LaunchStrip({
  banner, copy, className,
}: {
  banner: { badge: string; text: string; rest: string; cta: string };
  copy: DownloadCopy;
  className?: string;
}) {
  const { href, unsigned } = usePlatformOffer();
  const inner = (
    <>
      <span className="launch-badge">{banner.badge}</span>
      <span className="launch-text">
        {banner.text}<span className="launch-rest"> — {banner.rest}</span>
      </span>
      <span className="launch-cta">{banner.cta} <span aria-hidden="true">→</span></span>
    </>
  );
  /* No Windows special case any more. The strip is one wide call to action, and interrupting it
     with a modal put a dialog between the operator and the download — the note belongs on the
     download surface (DownloadPill / DownloadPanel), not on a banner. `unsigned` is read only to
     keep the signature honest about what this hook returns. */
  void unsigned;
  return <a href={href ?? RELEASES_PAGE} className={className}>{inner}</a>;
}

/* The three doors inside the panel. `DOOR_SOON` is gone with the "Windows (soon)" text it dimmed
   — as of 2026-08-17 every door is a real link, so there is no third state to style. */
const DOOR: React.CSSProperties = { color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" };
const SEP = <span aria-hidden="true" style={{ opacity: 0.45 }}>{"  ·  "}</span>;

export function DownloadPanel({ copy }: { copy: DownloadCopy }) {
  return (
    /* cursor:default because .path-action styles a clickable panel, and this is a container for
       links rather than one action. */
    <div className="path-action" style={{ cursor: "default" }}>
      <span className="path-action-label">{copy.action}</span>
      <span className="path-action-body">
        <a href={ARTIFACTS.mac.href} style={DOOR}>{copy.mac}</a>
        {SEP}
        <a href={ARTIFACTS.linux.href} style={DOOR}>{copy.linux}</a>
        {SEP}
        {/* Three real doors as of 2026-08-17. `DOOR_SOON` is gone with the fourth-wall it described. */}
        <a href={ARTIFACTS.windows.href} style={DOOR}>{copy.windows}</a>
      </span>
    </div>
  );
}
