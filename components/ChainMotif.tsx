export function ChainLink({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="10"
        width="20"
        height="14"
        rx="7"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <rect
        x="22"
        y="24"
        width="20"
        height="14"
        rx="7"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

/** Horizontal divider built from linked nodes — the recurring signature motif. */
export function ChainDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chain-blue/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-chain-blue" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
    </div>
  );
}
