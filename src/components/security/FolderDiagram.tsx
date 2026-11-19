/* "A folder, not a service": the brief's page-2 diagram as real HTML. Your computer on the
 * left (~/aios, plain files), the only three things it talks to on the right, and the line
 * that says that is all. Same wording as the brief (EN/ES); PT translated from it. */

import type { Locale } from "@/messages";
import { HooksCard } from "./HooksCard";

type Link = { title: string; body: string; strong?: string; optional?: boolean };
type D = {
  label: string;
  computer: string;
  body: string;
  links: Link[];
  footStrong: string;
  foot: string;
};

const FILES = ["INTENT.md", "CLAUDE.md", "USER.md", "vault/", "hooks/", "agents/"];

const D: Record<Locale, D> = {
  en: {
    label: "A folder, not a service",
    computer: "Your computer",
    body: "Everything lives here, as plain-text files you can open and read. The AIOS has no server of its own and no telemetry.",
    links: [
      { title: "Your Claude account", body: "Does the thinking. What a session reads is handled here, like any Claude chat." },
      { title: "Your private GitHub", body: "A backup of every change, in your own account." },
      { title: "Tools you connect", body: "Calendar, Gmail, Slack… one by one. ", strong: "Off until you connect them.", optional: true },
    ],
    footStrong: "That is everything it talks to over the internet:",
    foot: "your Claude account, GitHub (your backup and the update check), and only the tools you connect. Nothing runs in the background unless you add it.",
  },
  es: {
    label: "Una carpeta, no un servicio",
    computer: "Tu computadora",
    body: "Todo vive aquí, en archivos de texto que puedes abrir y leer. El AIOS no tiene servidor propio ni telemetría.",
    links: [
      { title: "Tu cuenta de Claude", body: "Es quien piensa. Lo que lee una sesión se procesa aquí, como cualquier conversación con Claude." },
      { title: "Tu GitHub privado", body: "Un respaldo de cada cambio, en tu propia cuenta." },
      { title: "Herramientas que conectes", body: "Calendario, Gmail, Slack… una por una. ", strong: "Apagadas hasta que las conectes.", optional: true },
    ],
    footStrong: "Es todo con lo que se comunica por internet:",
    foot: "tu cuenta de Claude, GitHub (tu respaldo y la revisión de actualizaciones) y solo las herramientas que conectes. Nada corre en segundo plano a menos que tú lo agregues.",
  },
  pt: {
    label: "Uma pasta, não um serviço",
    computer: "Seu computador",
    body: "Tudo fica aqui, em arquivos de texto que você pode abrir e ler. O AIOS não tem servidor próprio nem telemetria.",
    links: [
      { title: "Sua conta do Claude", body: "É quem pensa. O que uma sessão lê é processado aqui, como em qualquer conversa com o Claude." },
      { title: "Seu GitHub privado", body: "Um backup de cada mudança, na sua própria conta." },
      { title: "Ferramentas que você conectar", body: "Agenda, Gmail, Slack… uma por uma. ", strong: "Desligadas até você conectar.", optional: true },
    ],
    footStrong: "Isso é tudo com que ele se comunica pela internet:",
    foot: "sua conta do Claude, o GitHub (seu backup e a verificação de atualizações) e só as ferramentas que você conectar. Nada roda em segundo plano a menos que você adicione.",
  },
};

export function FolderDiagram({ locale }: { locale: Locale }) {
  const d = D[locale];
  return (
    <figure className="fd" aria-label={d.label}>
      <figcaption className="fd-label">{d.label}</figcaption>
      <div className="fd-grid">
        <div className="fd-computer">
          <p className="fd-kicker">{d.computer}</p>
          <p className="fd-path">~/aios</p>
          <p className="fd-body">{d.body}</p>
          <ul className="fd-files" aria-label="~/aios">
            {FILES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <ul className="fd-links">
          {d.links.map((l) => (
            <li key={l.title} className="fd-link-row">
              <span className="fd-arrow" aria-hidden="true">⟷</span>
              <div className={`fd-link${l.optional ? " fd-link-optional" : ""}`}>
                <p className="fd-link-title">{l.title}</p>
                <p className="fd-link-body">{l.body}{l.strong && <strong>{l.strong}</strong>}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="fd-foot"><strong>{d.footStrong}</strong> {d.foot}</p>
      <HooksCard locale={locale} />
    </figure>
  );
}
