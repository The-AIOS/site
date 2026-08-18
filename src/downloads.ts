/* Where the app comes from, and which artifact a given visitor wants.
 *
 * Every download URL on this site used to be written out longhand — twelve copies of the same
 * .dmg link across three locales plus one in HomePage. Adding a second platform to that is how
 * you end up with a Linux button that still serves a mac dmg in Portuguese. One table, imported
 * everywhere.
 *
 * `/releases/latest/download/<name>` always resolves to the newest release carrying that asset,
 * so these URLs never need touching when a version ships. The corollary is the trap: a link here
 * 404s until a release actually carries that filename. Add the platform to the release lane
 * FIRST, then add it here.
 */

const BASE = "https://github.com/The-AIOS/aios-app/releases";

/** The Releases page itself — the honest destination when we cannot tell, or have nothing yet. */
export const RELEASES_PAGE = `${BASE}/latest`;

export const ARTIFACTS = {
  /** macOS, Apple silicon. Signed + notarized. */
  mac: { file: "AIOS-arm64.dmg", href: `${BASE}/latest/download/AIOS-arm64.dmg` },
  /** Linux x86_64. Self-updating (electron-updater drives AppImage). */
  linux: { file: "AIOS-x86_64.AppImage", href: `${BASE}/latest/download/AIOS-x86_64.AppImage` },
  /** Linux Debian/Ubuntu. Installs cleanly, but electron-updater has no deb updater —
   *  a .deb never self-updates, which is why the AppImage is the primary Linux link. */
  deb: { file: "AIOS-amd64.deb", href: `${BASE}/latest/download/AIOS-amd64.deb` },
  /** Windows x64, nsis. Self-updating (NsisUpdater re-runs the installer, so the unsigned
   *  SmartScreen prompt does NOT recur — it is stamped by the browser on a manual download, and
   *  electron-updater fetches with its own client and spawns the installer directly. Verified at
   *  file level 2026-08-15: the cached installer carries no Zone.Identifier stream.) */
  windows: { file: "AIOS-x64.exe", href: `${BASE}/latest/download/AIOS-x64.exe` },
} as const;

export type Platform = "mac" | "linux" | "windows" | "unknown";

/**
 * Pure so it can be tested without a browser, and so the caller decides when to run it.
 *
 * Order matters, because the mobile cases masquerade as desktop ones:
 *   - Android user agents contain "Linux", so a naive Linux check serves them an AppImage.
 *   - iPadOS 13+ reports userAgent "Macintosh" AND platform "MacIntel". It is indistinguishable
 *     from a Mac by strings alone; the only signal is `navigator.maxTouchPoints > 1`. Without it
 *     an iPad gets confidently offered a dmg, so the caller must pass it.
 * Neither has a desktop app to download, so both resolve to `unknown`, which offers the Releases
 * page instead of a file that cannot run.
 */
export function detectPlatform(nav: {
  userAgent: string;
  platform?: string;
  /** navigator.maxTouchPoints. >1 alongside a Mac user agent means iPadOS, not macOS. */
  maxTouchPoints?: number;
}): Platform {
  const ua = nav.userAgent.toLowerCase();
  const plat = (nav.platform ?? "").toLowerCase();
  const touch = nav.maxTouchPoints ?? 0;

  // Mobile first — the cases most likely to be misread as a desktop OS. Android user agents
  // contain "Linux", so this must precede the Linux check or every phone is offered an AppImage.
  if (/android/.test(ua)) return "unknown";
  if (/iphone|ipod|ipad/.test(ua)) return "unknown";

  /* The USER AGENT is the authoritative signal and is checked ALONE.
     An earlier version folded navigator.platform into the same string, which was wrong twice
     over: on a Mac, `platform` is always "MacIntel", so /mac/ matched even when the user agent
     said Linux — misdetecting, and making the Linux path impossible to exercise from DevTools
     (which overrides the user agent but never `platform`). Testability and correctness pointed
     the same way here: read the field the browser actually reports about the OS, and treat
     `platform` as a fallback for when the UA says nothing. */
  if (/windows|win32|win64/.test(ua)) return "windows";
  if (/linux|x11|cros|freebsd|openbsd|netbsd/.test(ua)) return "linux";
  if (/mac os|macintosh/.test(ua)) {
    // A trackpad reports 0 and a touchscreen Mac does not exist, so >1 here is an iPad
    // reporting itself as "Macintosh" — indistinguishable from a Mac by strings alone.
    return touch > 1 ? "unknown" : "mac";
  }

  // The UA told us nothing recognisable. Fall back to navigator.platform before giving up.
  if (/win/.test(plat)) return "windows";
  if (/linux|x11/.test(plat)) return "linux";
  if (/mac/.test(plat)) return touch > 1 ? "unknown" : "mac";
  return "unknown";
}

/** What a given platform should be offered. `href: null` means "there is nothing to download". */
export function offerFor(p: Platform): { href: string | null; kind: Platform } {
  switch (p) {
    case "mac": return { href: ARTIFACTS.mac.href, kind: "mac" };
    case "linux": return { href: ARTIFACTS.linux.href, kind: "linux" };
    /* Windows shipped in v0.8.3 (2026-08-13) and the link opened on 2026-08-17, gated not on code
       signing but on three first-run defects landing in v0.8.7 — a visitor before that would have
       met the SmartScreen prompt AND a silent Obsidian failure AND a wizard reporting the tools it
       had just installed as missing AND a greeting reading `{{first-name}}`. Verified end to end on
       a clean Windows machine that none of us owns: install, setup, and a full self-update cycle.
       The build is UNSIGNED, which the download copy states plainly rather than letting the
       operator meet it cold — the prompt's damage is surprise, not the click. */
    case "windows": return { href: ARTIFACTS.windows.href, kind: "windows" };
    default: return { href: RELEASES_PAGE, kind: "unknown" };
  }
}
