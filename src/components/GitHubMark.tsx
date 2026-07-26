/* GitHub's own mark, inline: the nav needs it small and in currentColor, and one
   path is cheaper than a dependency. Shared so the header and the mobile drawer
   cannot drift apart. */
export function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-2.64-.89-2.64-2.76 0-.53.19-.97.5-1.31-.03-.08-.22-.58.05-1.21 0 0 .62-.19 2.02.75a5.4 5.4 0 0 1 1.5-.2c.51 0 1.02.07 1.5.2 1.4-.95 2.02-.75 2.02-.75.27.63.08 1.13.05 1.21.31.34.5.78.5 1.31 0 1.88-.87 2.56-2.65 2.76.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A7.99 7.99 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
