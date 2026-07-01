import * as React from "react";
import { Button, type ButtonProps } from "../ui/button";
import { useScrollTo } from "../../hooks/useScrollTo";

type ScrollButtonProps = Omit<ButtonProps, "onClick"> & {
  /** In-page anchor id to smooth-scroll to. */
  to: string;
};

/**
 * shadcn Button that smooth-scrolls to an in-page anchor.
 * Stays a real <button> so assistive tech announces it correctly.
 */
export const ScrollButton = React.forwardRef<HTMLButtonElement, ScrollButtonProps>(
  ({ to, ...props }, ref) => {
    const scrollTo = useScrollTo();
    return <Button ref={ref} onClick={() => scrollTo(to)} {...props} />;
  },
);
ScrollButton.displayName = "ScrollButton";
