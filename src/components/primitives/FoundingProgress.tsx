import { site } from "../../config/site";
import { cn } from "../../lib/cn";

type FoundingProgressProps = {
  className?: string;
};

/**
 * Live progress toward the founding-member cap. Renders nothing until
 * `site.founding.claimed` is set to a real number — an unverifiable
 * scarcity claim is weaker than no claim at all, so this never
 * fabricates a count.
 */
export function FoundingProgress({ className }: FoundingProgressProps) {
  const { claimed, total } = site.founding;
  if (claimed == null) return null;

  const pct = Math.min(100, Math.round((claimed / total) * 100));

  return (
    <div className={cn("", className)}>
      <div
        role="progressbar"
        aria-valuenow={claimed}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Founding spots claimed"
        className="h-1.5 w-full rounded-pill bg-border overflow-hidden"
      >
        <div className="h-full rounded-pill bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-1.5 font-mono text-2xs uppercase text-meta">
        {claimed} of {total} founding spots claimed
      </p>
    </div>
  );
}
