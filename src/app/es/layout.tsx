/* Per-locale layout simply overrides the <html lang>.
   App Router supports nested layouts; the root layout renders <html><body>,
   nested layouts can affect metadata + child rendering. For static export
   simplicity, we just re-export children — the <html lang> set in root
   layout via metadata is still en by default; client-side locale
   inference here is unnecessary for static pages. */

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
