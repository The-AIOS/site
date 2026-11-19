/* Above the edition card(s); `wide` matches two edition cards side by side (PT).
 * The brief's page-07 card: every hook the AIOS installs, one line each. Same wording as
 * the brief (EN/ES); PT translated from it. */

import type { Locale } from "@/messages";

const H: Record<Locale, { label: string; rows: [string, string][] }> = {
  en: {
    label: "Every hook it installs, and none of them goes online",
    rows: [
      ["The clock", "every message carries the real date and time"],
      ["Context at start", "a session in your vault gets your contract and learnings"],
      ["Provenance", "labels words you didn't write"],
      ["Bus log", "remembers prompts typed by other sessions"],
      ["Model log", "notes when a session is moved to another model"],
      ["Agent hints", "points a request to the specialist that fits"],
      ["Status line", "shows context and usage at the bottom of the terminal"],
      ["Git guards", "one commit path, secret scan, push guard"],
    ],
  },
  es: {
    label: "Cada hook que instala, y ninguno sale a internet",
    rows: [
      ["El reloj", "cada mensaje lleva la fecha y hora reales"],
      ["Contexto al inicio", "una sesión en tu vault recibe tu contrato y aprendizajes"],
      ["Procedencia", "etiqueta palabras que no escribiste"],
      ["Registro del bus", "recuerda los prompts que escribieron otras sesiones"],
      ["Registro de modelo", "anota cuando a una sesión la cambian de modelo"],
      ["Sugerencias de agente", "dirige una petición al especialista adecuado"],
      ["Línea de estado", "muestra contexto y uso al pie de la terminal"],
      ["Guardias de git", "un camino de commit, escaneo de secretos, guardia de push"],
    ],
  },
  pt: {
    label: "Cada hook que ele instala, e nenhum acessa a internet",
    rows: [
      ["O relógio", "cada mensagem leva a data e a hora reais"],
      ["Contexto ao iniciar", "uma sessão no seu vault recebe seu contrato e aprendizados"],
      ["Procedência", "marca palavras que você não escreveu"],
      ["Registro do bus", "lembra os prompts digitados por outras sessões"],
      ["Registro de modelo", "anota quando uma sessão é trocada de modelo"],
      ["Sugestões de agente", "leva um pedido ao especialista certo"],
      ["Linha de status", "mostra contexto e uso no rodapé do terminal"],
      ["Guardas do git", "um caminho de commit, varredura de segredos, guarda de push"],
    ],
  },
};

export function HooksCard({ locale, wide = false }: { locale: Locale; wide?: boolean }) {
  const h = H[locale];
  return (
    <div className={`hooks-card${wide ? " hooks-card-wide" : ""}`}>
      <p className="fd-label">{h.label}</p>
      <ul className="hooks-grid">
        {h.rows.map(([k, v]) => (
          <li key={k}><b>{k}</b> · {v}</li>
        ))}
      </ul>
    </div>
  );
}
