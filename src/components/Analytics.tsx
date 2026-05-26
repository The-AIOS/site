/* Analytics — privacy-respecting GA4 + Vercel Web Analytics.
 *
 * GA4 is configured with:
 *   - anonymize_ip: true
 *   - allow_google_signals: false      (no cross-device / demographics from Google ads)
 *   - allow_ad_personalization_signals: false
 *
 * These settings keep us out of the EU/GDPR cookie-consent banner requirement
 * while still measuring traffic, engagement, and conversion. The Measurement ID
 * is public (visible in any page source on every site that uses GA) — not a secret.
 *
 * Vercel Web Analytics is first-party, privacy-preserving by design, no consent
 * banner needed. It's complementary to GA4: faster, lower-fidelity, near-real-time.
 *
 * Configure the Measurement ID via NEXT_PUBLIC_GA_MEASUREMENT_ID env var
 * (set in Vercel project settings for production). Falls back to the literal
 * for the-aios.com so the build works without env config.
 */

"use client";

import Script from "next/script";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8EBR2LPQDZ";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Track an SPA route change as a GA4 page_view.
 *  Next.js App Router doesn't fire pageview on client-side navigation by default. */
function PageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");
    window.gtag("config", GA_ID, { page_path: url });
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* GA4 — gtag.js loaded after first interactive paint so it never blocks LCP. */}
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>

      {/* SPA route-change tracker (Suspense required for useSearchParams under static export). */}
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>

      {/* Vercel Web Analytics — first-party, privacy-preserving, complementary to GA4. */}
      <VercelAnalytics />
    </>
  );
}

/** Fire a GA4 custom event. Safe to call before gtag loads (no-op).
 *  Use this for outbound CTAs, conversions, and any "intent" actions worth measuring. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

/** Infer current locale from URL pathname (`/`, `/es/...`, `/pt/...`).
 *  Useful for stamping GA events with the locale dimension without prop-drilling. */
export function inferLocaleFromPath(): "en" | "es" | "pt" {
  if (typeof window === "undefined") return "en";
  const path = window.location.pathname;
  if (path.startsWith("/es")) return "es";
  if (path.startsWith("/pt")) return "pt";
  return "en";
}
