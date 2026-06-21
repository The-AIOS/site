"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GitHubLink } from "./GitHubLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import type { Locale } from "@/messages";

export type NavItem = { href: string; label: string };

export function MobileMenu({
  items,
  githubLabel,
  locale,
}: {
  items: NavItem[];
  githubLabel: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal target needs `document` — only available after client mount.
  // (Static export pre-renders this component as the trigger button
  // only; the drawer mounts client-side after the user opens it.)
  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="icon-btn nav-mobile-trigger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {/* Hamburger icon — 3 horizontal lines */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation">
          <header>
            <a
              href="#top"
              onClick={() => setOpen(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-ink)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.025em" }}
            >
              <Logo size={20} />
              The AIOS
            </a>
            <button
              type="button"
              className="icon-btn"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="4" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="14" y1="4" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <nav>
            {items.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <GitHubLink
              href="https://github.com/The-AIOS/aios"
              surface="nav-mobile"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              {githubLabel}
            </GitHubLink>
          </nav>

          <div className="mm-footer">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <LocaleSwitcher current={locale} />
              <ThemeToggle />
            </div>
            <span className="caption" style={{ color: "var(--color-ink-subtle)" }}>
              the-aios.com
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
