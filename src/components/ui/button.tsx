import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/cn";

/**
 * shadcn-style Button with The Way Back brand tuning.
 *
 * Defaults mirror shadcn's API (variant, size, asChild) so any pattern
 * from the shadcn docs works here. The visual language — pill radius,
 * clay hover, soft cubic-bezier easing — matches the brand.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "rounded-pill font-medium leading-none",
    "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-clay-deep hover:-translate-y-px hover:shadow-cta active:translate-y-0 active:shadow-none",
        outline:
          "border border-input bg-transparent text-foreground hover:border-foreground hover:bg-foreground/[0.03]",
        ghost: "text-foreground hover:bg-foreground/[0.05]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[50px] px-[30px] text-[17px]",
        sm: "h-[40px] px-[22px] text-[15px]",
        lg: "h-[58px] px-[36px] text-[18px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={asChild ? undefined : type ?? "button"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
