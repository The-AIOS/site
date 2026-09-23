"use client";

import { useState } from "react";

/* A paste block with a copy button. Same honesty rule as CopyPanel: the label only
 * flips to "copied" when a write actually succeeded.
 *
 * `navigator.clipboard.writeText()` can reject (insecure context) and in some
 * embedded browsers never settles at all, so it is raced against a timeout and
 * falls back to a hidden textarea + execCommand before giving up. */
async function writeClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      const ok = await Promise.race([
        navigator.clipboard.writeText(text).then(() => true),
        new Promise<boolean>((r) => setTimeout(() => r(false), 1200)),
      ]);
      if (ok) return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function CopyBlock({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (await writeClipboard(text)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="sk-paste">
      <pre className="sk-paste-text">{text}</pre>
      <button type="button" className="sk-copy" onClick={copy} aria-label={`${label}: ${text.slice(0, 40)}`}>
        <span aria-live="polite">{copied ? done : label}</span>
      </button>
    </div>
  );
}
