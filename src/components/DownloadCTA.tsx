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
 *   the one that is not open yet. Two links plus "Windows (soon)" as plain text, because a
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
  windowsSoon: string;
  /** The modal a Windows visitor gets when they click a CTA. */
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
function useSoonGate(): { href: string | null; soon: boolean; open: boolean; setOpen: (v: boolean) => void } {
  const p = usePlatform();
  const [open, setOpen] = useState(false);
  const { href } = offerFor(p);
  // `unknown` (a phone, an unrecognised UA) still gets the Releases page: there may well be a build
  // for them, we just cannot tell which. Only Windows is a definite "not yet".
  return { href, soon: p === "windows", open, setOpen };
}

export function DownloadPill({ copy, label, className }: { copy: DownloadCopy; label: string; className?: string }) {
  const { href, soon, open, setOpen } = useSoonGate();
  if (soon) {
    return (
      <>
        <button type="button" className={className} style={{ cursor: "pointer", border: 0, font: "inherit" }} onClick={() => setOpen(true)}>
          {label}
        </button>
        {open && <SoonModal copy={copy} onClose={() => setOpen(false)} />}
      </>
    );
  }
  return <a href={href ?? RELEASES_PAGE} className={className}>{label}</a>;
}

export function LaunchStrip({
  banner, copy, className,
}: {
  banner: { badge: string; text: string; rest: string; cta: string };
  copy: DownloadCopy;
  className?: string;
}) {
  const { href, soon, open, setOpen } = useSoonGate();
  const inner = (
    <>
      <span className="launch-badge">{banner.badge}</span>
      <span className="launch-text">
        {banner.text}<span className="launch-rest"> — {banner.rest}</span>
      </span>
      <span className="launch-cta">{banner.cta} <span aria-hidden="true">→</span></span>
    </>
  );
  if (soon) {
    return (
      <>
        <button type="button" className={className} style={{ cursor: "pointer", border: 0, font: "inherit", width: "100%" }} onClick={() => setOpen(true)}>
          {inner}
        </button>
        {open && <SoonModal copy={copy} onClose={() => setOpen(false)} />}
      </>
    );
  }
  return <a href={href ?? RELEASES_PAGE} className={className}>{inner}</a>;
}

/* White on coral, underlined so they read as links rather than as a label. .path-action sets
   color:#fff, but an <a> carries its own UA colour and would ignore it. */
const DOOR: React.CSSProperties = { color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" };
/* Not a link, and it should not look like one: there is nothing behind it yet. */
const DOOR_SOON: React.CSSProperties = { color: "#fff", opacity: 0.62 };
const SEP = <span aria-hidden="true" style={{ opacity: 0.45 }}>{"  ·  "}</span>;

/**
 * The setup section's app door. Every platform listed, always — the section asks the visitor to
 * pick, so it names all three and lets the unavailable one say so. No detection: identical on
 * server and client, so nothing flashes and it can never show a platform it will change its mind
 * about.
 */
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
        <span style={DOOR_SOON}>{copy.windowsSoon}</span>
      </span>
    </div>
  );
}
