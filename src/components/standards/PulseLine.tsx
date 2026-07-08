// PulseLine — the house motif that makes "Agentic Pulse" earn its name.
// A coral heartbeat: a beating dot with an expanding ring beside a live ECG
// line whose lit segment sweeps across. Pure CSS (styles in standards.css),
// so it stays a server component; prefers-reduced-motion renders it static.
export function PulseLine({ label }: { label?: string }) {
  return (
    <span
      className="std-pulse"
      role="img"
      aria-label={label ?? "Live pulse"}
    >
      <span className="std-pulse-dot" aria-hidden="true" />
      <svg
        className="std-pulse-line"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="std-pulse-base" d="M0 12 H100" />
        <path
          className="std-pulse-wave"
          d="M0 12 H36 l4 -3 l3 7 l4 -13 l4 15 l3 -6 H100"
          pathLength={1}
        />
      </svg>
    </span>
  );
}

export default PulseLine;
