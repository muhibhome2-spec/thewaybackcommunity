import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

export type CardTone = "paper" | "soft";

const tones: Record<CardTone, string> = {
  paper: "bg-paper",
  soft: "bg-soft",
};

type CardProps = {
  children: ReactNode;
  tone?: CardTone;
  /** Card adopts a subtle lift on hover. */
  interactive?: boolean;
  className?: string;
};

/**
 * Surface primitive with our standard hairline border, rounded corner,
 * and (optionally) a soft hover lift.
 */
export function Card({
  children,
  tone = "paper",
  interactive = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "border border-hairline rounded-card-lg p-[clamp(24px,3.5vw,34px)]",
        tones[tone],
        interactive &&
          "transition-[transform,box-shadow] duration-200 ease-soft hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
