/* RoleField — the hero's one sentence the visitor completes:
 *
 *     I'm a [ role ▾ ] — show me my AIOS.
 *
 * A real combobox (WAI-ARIA 1.2 pattern): the input owns `role="combobox"`, the chip
 * cloud under it is the listbox, arrow keys move `aria-activedescendant`, Enter picks,
 * Escape closes. Typing maps free text — "dentist", "abogada", "maestra" — to the
 * nearest role through the plain keyword list in src/data/roles.ts; no match falls
 * back to Entrepreneur, so the field never says "no results". Picking a role writes
 * `#<role>` into the URL (shareable from a slide), tells section 00 to open that tab,
 * and scrolls there.
 *
 * Copy comes from CONTENT[locale].hero.field and CONTENT[locale].roles.items (labels);
 * nothing reader-facing is hard-coded here. */

"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { FALLBACK_ROLE, ROLE_ORDER, rankRoles, resolveRole, type RoleId } from "@/data/roles";

export const ROLE_EVENT = "aios:role";
export const ROLE_SECTION_ID = "your-aios";

export type RoleFieldCopy = {
  pre: string; placeholder: string; post: string; go: string;
  open: string; close: string; hint: string; fallbackNote: string;
};

export function openRole(id: RoleId, scroll: boolean) {
  try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: id }));
  if (scroll) {
    const target = document.getElementById(ROLE_SECTION_ID);
    if (target) target.scrollIntoView({ block: "start" });
  }
}

export function RoleField({ copy, labels }: { copy: RoleFieldCopy; labels: Record<RoleId, string> }) {
  const uid = useId();
  const listId = `${uid}-list`;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  /* What the chip cloud shows: every role when the box is empty, the matches when
     typing, and — when nothing matches — the fallback alone, marked as such. */
  const options = useMemo<{ id: RoleId; fallback: boolean }[]>(() => {
    const ranked = rankRoles(text);
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
    const id = options[active]?.id ?? resolveRole(text, labels);
    pick(id);
  }, [options, active, text, labels, pick]);

  /* click-outside closes the cloud */
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((a) => (a + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((a) => (a - 1 + options.length) % options.length);
        break;
      case "Home":
        if (open) { e.preventDefault(); setActive(0); }
        break;
      case "End":
        if (open) { e.preventDefault(); setActive(options.length - 1); }
        break;
      case "Enter":
        e.preventDefault();
        submit();
        break;
      case "Escape":
        if (open) { e.preventDefault(); setOpen(false); }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  const activeId = open && options[active] ? `${uid}-opt-${options[active].id}` : undefined;

  return (
    <div className="role-field" ref={rootRef}>
      <div className="role-field-line">
        <span className="rf-pre">{copy.pre}</span>
        <span className="rf-box">
          <input
            ref={inputRef}
            className="rf-input"
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={activeId}
            aria-label={`${copy.pre} ${copy.placeholder}`}
            autoComplete="off"
            spellCheck={false}
            placeholder={copy.placeholder}
            value={text}
            onChange={(e) => { setText(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKey}
          />
          <button
            type="button"
            className="rf-caret"
            tabIndex={-1}
            aria-label={open ? copy.close : copy.open}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => { setOpen((o) => !o); inputRef.current?.focus(); }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </span>
        <span className="rf-post">{copy.post}</span>
        <button type="button" className="btn-primary rf-go" onClick={submit}>{copy.go}</button>
      </div>

      <ul id={listId} role="listbox" aria-label={copy.placeholder} className="rf-list" hidden={!open}>
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
            {labels[o.id]}
            {o.fallback && <span className="rf-fallback">{copy.fallbackNote}</span>}
          </li>
        ))}
      </ul>
      <p className="rf-hint">{copy.hint}</p>
    </div>
  );
}

/** Tab order, exported for the section so both surfaces agree. */
export const ROLE_IDS: RoleId[] = ROLE_ORDER;
