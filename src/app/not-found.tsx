import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "32rem", padding: "2rem" }}>
        <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
          <span className="accent">404</span> · Not found
        </p>
        <h1 className="display-lg" style={{ marginBottom: "1.5rem" }}>
          This page hasn&apos;t been written yet.
        </h1>
        <p className="lede" style={{ marginBottom: "2.5rem" }}>
          The page you were looking for doesn&apos;t exist on the-aios.com.
        </p>
        <Link href="/" className="btn-primary">
          Back to home →
        </Link>
      </div>
    </main>
  );
}
