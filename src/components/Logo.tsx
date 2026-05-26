/* Squared mark to accompany the wordmark in header + footer.
   Concept: a square outline with a coral-filled inner square offset
   to the top-right — suggests "the system as a contained space with
   active focus." Minimal, geometric, works at small sizes. */

type Props = {
  size?: number;            // outer square side in px; defaults to 18
  inverted?: boolean;       // if true, swap accent + ink for use on accent backgrounds
};

export function Logo({ size = 18, inverted = false }: Props) {
  const stroke = inverted ? "var(--color-ink)" : "var(--color-accent)";
  const fill = inverted ? "var(--color-ink)" : "var(--color-accent)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Outer square */}
      <rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke={stroke} strokeWidth="1.5" />
      {/* Inner accent square, top-right */}
      <rect x="9" y="2" width="6" height="6" rx="1" fill={fill} />
    </svg>
  );
}
