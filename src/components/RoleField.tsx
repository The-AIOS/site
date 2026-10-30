/* RoleField — the hero's type-and-find field, beside "View on GitHub".
 *
 * The visitor types their trade ("dentist", "abogada", "professora"); matches appear
 * as they type in a plain suggestion list; Enter or a click opens that role in
 * section 00. No chips, no chevron: it is a search box that knows nine answers. A real
 * combobox (WAI-ARIA 1.2): the input owns `role="combobox"`, the list is the listbox,
 * arrow keys move `aria-activedescendant`, Enter picks, Escape closes.
 *
 * Free text maps through the keyword list in src/data/roles.ts; no match shows the
 * fallback (Entrepreneur) as the one suggestion, so the field never says "no results".
 * Picking writes `#<role>` into the URL (shareable from a slide), tells section 00 to
 * open that role, and scrolls there. Copy comes from CONTENT[locale]. */

"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { FALLBACK_ROLE, rankRoles, resolveRole, type RoleId } from "@/data/roles";

export const ROLE_EVENT = "aios:role";
export const ROLE_SECTION_ID = "your-aios";

export type RoleFieldCopy = { placeholder: string; go: string; label: string; fallbackNote: string };

export function openRole(id: RoleId, scroll: boolean) {
  try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: id }));
  if (scroll) document.getElementById(ROLE_SECTION_ID)?.scrollIntoView({ block: "start" });
}

export function RoleField({ copy, labels }: { copy: RoleFieldCopy; labels: Record<RoleId, string> }) {
  const uid = useId();
  const listId = `${uid}-list`;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  /* Suggestions appear only while typing. Nothing matching → the fallback, marked. */
  const options = useMemo<{ id: RoleId; fallback: boolean }[]>(() => {
    if (!text.trim()) return [];
    const ranked = rankRoles(text).slice(0, 5);
    if (ranked.length === 0) return [{ id: FALLBACK_ROLE, fallback: true }];
    return ranked.map((id) => ({ id, fallback: false }));
  }, [text]);

  useEffect(() => { setActive(0); }, [text]);

  const pick = useCallback((id: RoleId) => {
    setText(labels[id]);
    setOpen(false);
    openRole(id, true);
  }, [labels]);

  const submit = useCallback(() => {
    pick(options[active]?.id ?? resolveRole(text, labels));
  }, [options, active, text, labels, pick]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const listOpen = open && options.length > 0;
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        if (options.length) { e.preventDefault(); setOpen(true); setActive((a) => (a + 1) % options.length); }
        break;
      case "ArrowUp":
        if (options.length) { e.preventDefault(); setOpen(true); setActive((a) => (a - 1 + options.length) % options.length); }
        break;
      case "Home":
        if (listOpen) { e.preventDefault(); setActive(0); }
        break;
      case "End":
        if (listOpen) { e.preventDefault(); setActive(options.length - 1); }
        break;
      case "Enter":
        e.preventDefault();
        submit();
        break;
      case "Escape":
        if (listOpen) { e.preventDefault(); setOpen(false); }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  const activeId = listOpen && options[active] ? `${uid}-opt-${options[active].id}` : undefined;

  return (
    <div className="role-field" ref={rootRef}>
      <div className="rf-box">
        <input
          className="rf-input"
          type="text"
          role="combobox"
          aria-expanded={listOpen}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={activeId}
          aria-label={copy.label}
          autoComplete="off"
          spellCheck={false}
          placeholder={copy.placeholder}
          value={text}
          onChange={(e) => { setText(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
        />
        <button type="button" className="rf-go" aria-label={copy.go} onMouseDown={(e) => e.preventDefault()} onClick={submit}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <ul id={listId} role="listbox" aria-label={copy.label} className="rf-list" hidden={!listOpen}>
        {options.map((o, i) => (
          <li
            key={o.id}
            id={`${uid}-opt-${o.id}`}
            role="option"
            aria-selected={i === active}
            className="rf-opt"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => pick(o.id)}
            onMouseEnter={() => setActive(i)}
          >
            <span>{labels[o.id]}</span>
            {o.fallback && <span className="rf-fallback">{copy.fallbackNote}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
