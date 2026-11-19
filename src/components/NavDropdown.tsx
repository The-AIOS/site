"use client";

/* A header menu item with children (the landing's "Learn"): a button that opens a small
 * panel of links. Closes on a link click, Escape, or a click outside. Plain <a> links,
 * never next/link: the targets cross locale root layouts. */

import { useEffect, useRef, useState } from "react";

export function NavDropdown({ label, items }: { label: string; items: { href: string; label: string; external?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div ref={root} className="nav-dd">
      <button type="button" className="nav-dd-btn" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        {label}
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true" className="nav-dd-chev">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="nav-dd-panel" role="menu">
          {items.map((i) => (
            <a key={i.href} href={i.href} role="menuitem" onClick={() => setOpen(false)} {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{i.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}
