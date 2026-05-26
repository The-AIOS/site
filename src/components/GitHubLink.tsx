/* GitHubLink — tracked outbound anchor to github.com.
 *
 * Every GitHub-bound link on the site goes through this so we capture the
 * `cta_github_click` event in GA4 with consistent dimensions:
 *   - repo_target:  the full href (so we can disambiguate hero vs footer vs section)
 *   - target_kind:  inferred (page | file | folder | org | external)
 *   - cta_surface:  caller-named (hero-primary | nav-desktop | footer-setup | ...)
 *   - locale:       en | es | pt (inferred from URL path)
 *
 * Why a client component while HomePage stays server-rendered: we only need
 * client-side execution for the onClick handler. The rest of HomePage stays
 * server-rendered for SEO + first-paint speed.
 */

"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { trackEvent, inferLocaleFromPath } from "./Analytics";

type Props = {
  href: string;
  /** Where on the page this CTA sits — "hero-primary", "footer-setup", "nav-desktop", etc.
   *  Becomes the `cta_surface` dimension in GA4 reports. */
  surface: string;
  className?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  /** Optional caller-side click handler. Runs AFTER the tracking event fires,
   *  so caller-state updates (close-mobile-menu, etc.) compose with tracking. */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
};

function inferTargetKind(href: string): "page" | "file" | "folder" | "org" | "external" {
  if (href.includes("/blob/")) return "file";
  if (href.includes("/tree/")) return "folder";
  // org-level: https://github.com/The-AIOS (no trailing repo segment)
  if (/^https?:\/\/github\.com\/[^/]+\/?$/.test(href)) return "org";
  // repo-level: https://github.com/The-AIOS/aios
  if (/^https?:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(href)) return "page";
  return "external";
}

export function GitHubLink({
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
        trackEvent("cta_github_click", {
          repo_target: href,
          target_kind: inferTargetKind(href),
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
