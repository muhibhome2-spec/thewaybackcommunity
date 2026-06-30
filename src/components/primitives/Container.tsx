import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Page-width wrapper. Centered, capped at the page max-width. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-page px-6", className)}>
      {children}
    </div>
  );
}
