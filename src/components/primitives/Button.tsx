import { type ReactNode, type MouseEvent } from "react";
import { cn } from "../../lib/cn";
import { useScrollTo } from "../../hooks/useScrollTo";

export type ButtonVariant = "primary" | "primary-sm" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  block?: boolean;
  className?: string;
  ariaLabel?: string;
};

type AnchorScrollProps = CommonProps & {
  /** In-page anchor id to smooth-scroll to. */
  to: string;
  href?: never;
  onClick?: never;
};

type LinkProps = CommonProps & {
  /** External URL. */
  href: string;
  to?: never;
  onClick?: never;
};

type ActionProps = CommonProps & {
  onClick: (e: MouseEvent) => void;
  to?: never;
  href?: never;
};

export type ButtonProps = AnchorScrollProps | LinkProps | ActionProps;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-pill font-medium leading-none " +
  "transition-[transform,background-color,border-color,box-shadow] duration-200 ease-soft " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-paper select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-clay text-clay-ink px-[30px] py-[15px] text-[17px] hover:bg-clay-deep hover:-translate-y-px hover:shadow-cta",
  "primary-sm":
    "bg-clay text-clay-ink px-[22px] py-[10px] text-[15px] hover:bg-clay-deep hover:-translate-y-px hover:shadow-cta",
  ghost:
    "bg-transparent text-ink px-[30px] py-[15px] text-[17px] border border-[rgba(22,20,15,0.18)] hover:border-ink",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", block, className, ariaLabel } = props;
  const classes = cn(base, variants[variant], block && "w-full", className);

  if ("href" in props && props.href) {
    return (
      <a
        className={classes}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if ("to" in props && props.to) {
    return <ScrollButton {...props} className={classes} ariaLabel={ariaLabel} />;
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={(props as ActionProps).onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function ScrollButton({
  to,
  children,
  className,
  ariaLabel,
}: AnchorScrollProps & { className: string }) {
  const scrollTo = useScrollTo();
  return (
    <button
      type="button"
      className={className}
      onClick={() => scrollTo(to)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
