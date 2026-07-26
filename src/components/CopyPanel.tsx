"use client";

import type { ReactNode } from "react";
import { useState } from "react";

/* The developer path's action surface: the whole coral panel is the button.
 *
 * It only ever reports success when the write actually resolved. `navigator.clipboard`
 * needs a secure context and rejects otherwise — and a panel that flashes "Copied"
 * over an empty clipboard is worse than no panel, because the visitor pastes nothing
 * and blames the instruction. */
export function CopyPanel({
  text, label, done, children,
}: { text: string; label: string; done: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Leave the label alone: no confirmation means it genuinely did not copy. */
    }
  }

  return (
    <button type="button" className="path-action" onClick={copy} aria-label={label}>
      <span className="path-action-label" aria-live="polite">{copied ? done : label}</span>
      <span className="path-action-body path-action-cmd">{children}</span>
    </button>
  );
}
