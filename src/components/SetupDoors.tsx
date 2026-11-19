"use client";

/* "Pick your door": the two ways in, each with a picture of what you will see.
 *
 *   The command door: a small terminal running the one sentence, consent asked on screen.
 *   The app door (Recommended): the App's own four setup steps (labels from the App's
 *   onboarding, aios-app renderer i18n `onboarding.step.*`), then the three downloads.
 *
 * Both cards share one shape — picture, question, body, actions — so they read as equals,
 * and the picture boxes share a height so the two questions line up. No coral slabs: the
 * accent is kept for the Recommended card's edge and the one primary button. */

import { useState } from "react";
import type { Locale } from "@/messages";
import { ARTIFACTS } from "@/downloads";
import type { DownloadCopy } from "./DownloadCTA";

type Path = { pill?: string; q: string; b: string; cmd?: { copy: string; copied: string } };

const V: Record<Locale, { term: string[]; ask: string; steps: string[]; stepOf: string }> = {
  en: {
    term: ["reading SETUP.md…", "framework cloned", "AIOS Glass installed"],
    ask: "Connect your Google Calendar? (y/n)",
    steps: ["Install what I need", "Log in to Claude", "Log in to GitHub", "Set up my AIOS"],
    stepOf: "Step 4 of 4",
  },
  es: {
    term: ["leyendo SETUP.md…", "framework clonado", "AIOS Glass instalado"],
    ask: "¿Conectar tu Google Calendar? (s/n)",
    steps: ["Instalar lo que necesito", "Inicia sesión en Claude", "Inicia sesión en GitHub", "Configurar mi AIOS"],
    stepOf: "Paso 4 de 4",
  },
  pt: {
    term: ["lendo SETUP.md…", "framework clonado", "AIOS Glass instalado"],
    ask: "Conectar seu Google Agenda? (s/n)",
    steps: ["Instalar o que preciso", "Entrar no Claude", "Entrar no GitHub", "Configurar meu AIOS"],
    stepOf: "Passo 4 de 4",
  },
};

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dots() {
  return <span className="dw-dots" aria-hidden="true"><i /><i /><i /></span>;
}

function TerminalPicture({ line, v }: { line: string; v: (typeof V)[Locale] }) {
  return (
    <div className="dw dw-term" aria-hidden="true">
      <div className="dw-bar"><Dots /><span className="dw-title">claude — ~</span></div>
      <div className="dw-body dw-mono">
        <p className="dw-cmd"><span className="dw-prompt">›</span> {line}</p>
        <p className="dw-dim">{v.term[0]}</p>
        <p><span className="dw-ok"><Check /></span> {v.term[1]}</p>
        <p><span className="dw-ok"><Check /></span> {v.term[2]}</p>
        <p className="dw-ask">? {v.ask}<span className="dw-caret" /></p>
      </div>
    </div>
  );
}

function AppPicture({ v }: { v: (typeof V)[Locale] }) {
  return (
    <div className="dw dw-app" aria-hidden="true">
      <div className="dw-bar"><Dots /><span className="dw-title">The AIOS</span></div>
      <div className="dw-body">
        <ol className="dw-steps">
          {v.steps.map((s, i) => (
            <li key={s} className={i < 3 ? "done" : "active"}>
              <span className="dw-step-mark">{i < 3 ? <Check /> : i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
        <div className="dw-progress"><span /></div>
        <p className="dw-dim dw-small">{v.stepOf}</p>
      </div>
    </div>
  );
}

function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* No confirmation means it genuinely did not copy. */
    }
  }
  return (
    <button type="button" className="btn-secondary door-btn" onClick={copy} aria-live="polite">
      {copied ? done : label}
    </button>
  );
}

export function SetupDoors({ locale, paths, line, downloads }: { locale: Locale; paths: Path[]; line: string; downloads: DownloadCopy }) {
  const v = V[locale];
  return (
    <div className="doors">
      {paths.map((p) => (
        <div key={p.q} className={`door${p.pill ? " door-recommended" : ""}`}>
          <div className="door-stage">{p.cmd ? <TerminalPicture line={line} v={v} /> : <AppPicture v={v} />}</div>
          <div className="door-text">
            {p.pill ? <span className="tag-pill door-pill">{p.pill}</span> : <span className="tag-pill door-pill door-pill-spacer" aria-hidden="true">·</span>}
            <h4 className="path-q">{p.q}</h4>
            <p className="door-b">{p.b}</p>
          </div>
          <div className="door-actions">
            {p.cmd ? (
              <>
                <code className="door-line">› {line}</code>
                <CopyButton text={line} label={p.cmd.copy} done={p.cmd.copied} />
              </>
            ) : (
              <>
                <a href={ARTIFACTS.mac.href} className="btn-primary door-btn">{downloads.mac}</a>
                <a href={ARTIFACTS.windows.href} className="btn-secondary door-btn">{downloads.windows}</a>
                <a href={ARTIFACTS.linux.href} className="btn-secondary door-btn">{downloads.linux}</a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
