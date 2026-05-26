/* SubstackLink — tracked outbound anchor to chuycepeda.substack.com.
 *
 * Reads from the-aios.com that lead to the narrative substrate are a distinct
 * conversion path from "clone the repo" — operators discovering AIOS via the
 * Amplifier essays vs via the framework code is useful demographic intelligence.
 *
 * Fires `cta_substack_click` in GA4 with:
 *   - target_url:   the full href
 *   - cta_surface:  caller-named (footer-amplifier, footer-agentic-culture, ...)
 *   - locale:       en | es | pt
 */

"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { trackEvent, inferLocaleFromPath } from "./Analytics";

type Props = {
  href: string;
  /** Where on the page this CTA sits — "footer-amplifier", "footer-agentic-culture", etc. */
  surface: string;
  className?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
};

export function SubstackLink({
  href,
  surface,
  className,
  target = "_blank",
  rel = "noreferrer",
  style,
  onClick,
  children,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      style={style}
      onClick={(e) => {
        trackEvent("cta_substack_click", {
          target_url: href,
          cta_surface: surface,
          locale: inferLocaleFromPath(),
        });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
