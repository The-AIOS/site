/* Small consistent link from a site card/section into its exact target
   inside the The-AIOS/aios repo. The site is the launchpad; the repo
   is the depth. Every concept on the page that has a corresponding file
   or folder in the repo gets one of these. */

const REPO_BASE = "https://github.com/The-AIOS/aios";

type Props = {
  /** Path inside the repo (e.g. "FORTRESS.md", "agents/aios/sales", "plugins/aios/commands/ingest.md").
   *  Anchor fragments are supported: "CLAUDE.md#observed-context-rules". */
  to: string;
  /** Label to render (already-translated). The leading "→" is added via CSS. */
  label: string;
  /** Layout variant: "block" (default — adds top border + margin, sits at bottom of card)
   *  or "inline" (no border/margin, for use in dense compositions). */
  variant?: "block" | "inline";
};

export function RepoLink({ to, label, variant = "block" }: Props) {
  const className = variant === "inline" ? "repo-link-inline" : "repo-link";
  return (
    <a
      href={`${REPO_BASE}/${to.startsWith("blob/") || to.startsWith("tree/") ? to : `blob/main/${to}`}`}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

/** Convenience for folder links — uses /tree/main/ instead of /blob/main/ */
export function RepoFolderLink({ to, label, variant = "block" }: Props) {
  const className = variant === "inline" ? "repo-link-inline" : "repo-link";
  return (
    <a
      href={`${REPO_BASE}/tree/main/${to}`}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
