import type { RungId } from "@/data/skills";

/* Hairline station icons (24×24). Stations 1–6 are carved from the workshop
 * deck (aios.html, the station title slides); base camp and the summit are
 * drawn in the same hand so the whole climb reads as one set. */
const PATHS: Record<RungId, React.ReactNode> = {
  base: (
    <>
      <path d="M3 20L12 5l9 15z" />
      <path d="M12 5v15" />
      <path d="M9.4 20L12 15.6 14.6 20" />
      <path d="M2 20h20" />
    </>
  ),
  harness: (
    <>
      <path d="M10.3 1.8h2.4a1.4 1.4 0 0 1 1.4 1.2l.6 4.4a2.2 2.2 0 0 1-2.2 2.4h-.9a2 2 0 0 1-2-2V3a1.2 1.2 0 0 1 .7-1.2z" />
      <path d="M12 9.8v2.6" />
      <path d="M3.4 12.2q8.6 3.6 17.2 0v2.6q-8.6 3.8-17.2 0z" />
      <path d="M9 16.6l-1 1.8M15 16.6l1 1.8" />
      <ellipse cx="7.2" cy="20.4" rx="3.2" ry="2" />
      <ellipse cx="16.8" cy="20.4" rx="3.2" ry="2" />
    </>
  ),
  memory: (
    <>
      <path d="M12 3l8.5 4.2L12 11.4 3.5 7.2z" />
      <path d="M3.5 12L12 16.2 20.5 12" />
      <path d="M3.5 16.6L12 20.8l8.5-4.2" />
    </>
  ),
  interface: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.2h18" />
      <path d="M7 12.2l2.6 2.1L7 16.4" />
      <path d="M11.6 16.4h5" />
    </>
  ),
  compound: (
    <>
      <path d="M19.6 12.4a7.6 7.6 0 1 1-2.2-5.5" />
      <path d="M19.8 3.6v4.1h-4.1" />
      <circle cx="12" cy="12" r="1.3" />
    </>
  ),
  yours: <path d="M14.6 6.1a4.3 4.3 0 0 0-5.3 5.5L3.6 17.3a1.9 1.9 0 0 0 2.7 2.7l5.7-5.7a4.3 4.3 0 0 0 5.5-5.3l-2.7 2.7-2.3-.6-.6-2.3z" />,
  team: (
    <>
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="18" cy="7" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8.4 7h7.2" />
      <path d="M7.2 9.1l3.6 6.8" />
      <path d="M16.8 9.1l-3.6 6.8" />
    </>
  ),
  summit: (
    <>
      <path d="M2 21l7.5-12 3.6 5.4L16 10l6 11z" />
      <path d="M16 10V3.2" />
      <path d="M16 3.4h4.2l-1.2 1.6 1.2 1.6H16" />
    </>
  ),
};

export function StationIcon({ rung }: { rung: RungId }) {
  return (
    <svg className="sk-st-icon" viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[rung]}
    </svg>
  );
}
