/* LogoFlip — the AIOS mark slowly flips in 3D to reveal that it's an ant head.
 *
 * The easter egg from the overview deck: the square mark's offset inner square
 * is the ant's eye; flipped, antennae + thorax + abdomen + legs appear (drawn
 * with overflow:visible, in negative coords to the side). Stigmergy — "the
 * colony reads your traces" (The Ground). Pure CSS 3D flip, no JS; the flip
 * stops under prefers-reduced-motion (front face only).
 */

const AC = "var(--color-accent)";

export function LogoFlip({ size = 44 }: { size?: number }) {
  return (
    <div className="logo-flip" style={{ width: size, height: size }}>
      <div className="lf-inner">
        {/* front — the mark */}
        <svg className="lf-face lf-front" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} aria-label="The AIOS">
          <rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke={AC} strokeWidth="1.5" />
          <rect x="9" y="2" width="6" height="6" rx="1" fill={AC} />
        </svg>
        {/* back — the same mark, revealed as an ant (head + eye + body to the side) */}
        <svg className="lf-face lf-back" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} aria-hidden="true">
          <rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke={AC} strokeWidth="1.5" />
          <rect x="9" y="2" width="6" height="6" rx="1" fill={AC} />
          {/* antennae with ball tips */}
          <path d="M 11.5 1 C 12 -1.5, 13.5 -3, 15.5 -3.5" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="15.9" cy="-3.6" r="1" fill={AC} />
          <path d="M 7 1 C 7 -2, 8.3 -3.7, 10.3 -4.3" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10.7" cy="-4.4" r="1" fill={AC} />
          {/* thorax + abdomen */}
          <line x1="-1" y1="9" x2="1" y2="9" stroke={AC} strokeWidth="1.5" />
          <rect x="-8" y="6" width="7" height="6" rx="1" fill="none" stroke={AC} strokeWidth="1.5" />
          <line x1="-9.8" y1="9" x2="-8" y2="9" stroke={AC} strokeWidth="1.5" />
          <rect x="-19.5" y="4.6" width="10.4" height="8.8" rx="1.5" fill="none" stroke={AC} strokeWidth="1.5" />
          {/* stubby legs */}
          <path d="M -3 12 C -2.9 14, -2.6 15.4, -2 16.6" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M -5.5 12 C -5.8 14.2, -6.6 15.6, -8 16.4" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M -12.3 13.3 C -12.6 15, -13.4 16.2, -14.8 17" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M -16 13 C -16.7 14.9, -17.7 16.1, -19 16.9" fill="none" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
