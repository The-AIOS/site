/* The one site header: the landing and every subpage (the Disruption Index, the Agentic
 * Standards, install, climb, privacy, terms) share it, so the menu is the same everywhere.
 *
 * On the landing the menu's anchors (#how, #security…) scroll in place. On a subpage they
 * go back to that section of the landing in the same language (/es#how). `paths` is the
 * current page in each language, so the language switcher stays on the same page. */

import { CONTENT } from "@/content";
import { LOCALE_PATHS, type Locale } from "@/messages";
import { Logo } from "./Logo";
import { GitHubLink } from "./GitHubLink";
import { GitHubMark } from "./GitHubMark";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { NavDropdown } from "./NavDropdown";
import { DownloadPill } from "@/components/DownloadCTA";
import { DiscordMark, DISCORD_INVITE } from "./DiscordInvite";

const REPO = "https://github.com/The-AIOS/aios";

export function SiteHeader({
  locale,
  landing = false,
  paths = LOCALE_PATHS,
}: {
  locale: Locale;
  landing?: boolean;
  paths?: Record<Locale, string>;
}) {
  const c = CONTENT[locale];
  const home = LOCALE_PATHS[locale];
  // "#how" on the landing; "/#how" or "/es#how" anywhere else.
  const to = (href: string) => (landing || !href.startsWith("#") ? href : `${home === "/" ? "/" : home}${href}`);
  const nav = c.nav.map((item) => ({
    ...item,
    href: to(item.href),
    children: item.children?.map((ch) => ({ ...ch, href: to(ch.href) })),
  }));

  return (
    <header className="site-header">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <a
          href={landing ? "#top" : home}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-ink)", textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.025em" }}
        >
          <Logo size={20} />
          The AIOS
        </a>

        <nav className="nav-desktop" style={{ alignItems: "center", gap: "1.375rem" }}>
          {nav.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} items={item.children} />
            ) : (
              <a key={item.href} href={item.href} className="caption" style={{ color: "var(--color-ink-muted)", textDecoration: "none", letterSpacing: "0.02em", textTransform: "none", fontSize: "0.875rem" }}>
                {item.label}
              </a>
            ),
          )}
          {/* Source and binary, in that order: the icon is for people who came to read the
              code, the pill for people who came to use it. */}
          <span className="nav-actions">
            <GitHubLink href={REPO} surface="nav-desktop" className="nav-icon-btn" ariaLabel="GitHub">
              <GitHubMark size={18} />
            </GitHubLink>
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="nav-icon-btn nav-icon-ghost" aria-label="Discord">
              <DiscordMark size={18} />
            </a>
            <DownloadPill copy={c.downloads} label={c.getApp} className="nav-cta" />
          </span>
          <LocaleSwitcher current={locale} paths={paths} />
          <ThemeToggle />
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <MobileMenu items={nav} githubLabel="GitHub ↗" appLabel={c.getApp} downloads={c.downloads} locale={locale} paths={paths} />
        </div>
      </div>
    </header>
  );
}
