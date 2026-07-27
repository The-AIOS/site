/* RootShell — the one `<html>`/`<body>` document, rendered once per locale.
 *
 * WHY THIS EXISTS: `<html lang>` is a server-rendered attribute, and only a root
 * layout can render it. With a single root layout the site had to hardcode
 * `lang="en"` and then patch it client-side on /es and /pt with an inline
 * `document.documentElement.lang = …` script — which React 19 correctly reported
 * as a hydration mismatch (server said `en`, the DOM said `pt-BR`), and which
 * also served the wrong `lang` to any crawler or screen reader that doesn't run
 * that script. So the fix is at the routing layer: three route groups —
 * `(en)` · `(es)` · `(pt)` — each with its own root layout passing the right
 * `lang` here. The URLs are unchanged (route groups don't create path segments);
 * the correct `lang` is now in the served HTML, and the patch script is gone.
 *
 * Anything genuinely shared across all three locales belongs in here, not in the
 * group layouts — they should stay three lines each.
 */

import { Analytics } from "@/components/Analytics";

export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        {/* No-flash theme: dark is the default; apply stored 'light' before paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}",
          }}
        />
        {/* AI agents reading this page on a user's behalf: see /llms.txt for structured framework info */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <span id="top" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
