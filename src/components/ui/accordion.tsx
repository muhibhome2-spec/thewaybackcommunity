import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../lib/cn";

/**
 * shadcn-style Accordion built on Radix.
 *
 * Brand-tuned: hairline dividers between items, clay plus-glyph that
 * rotates to a cross on open, smooth height animation via the
 * Radix data-state attribute and the accordion-down/up keyframes
 * registered in tailwind.config.ts.
 */
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-t border-border last:border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-5 py-6 text-left",
        "text-[clamp(19px,2.4vw,23px)] font-normal tracking-[-0.01em] text-foreground",
        "transition-colors hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="font-mono text-[24px] leading-none text-primary flex-none transition-transform duration-250 ease-soft group-data-[state=open]:rotate-45"
      >
        +
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[18px] font-light text-muted-foreground leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    {...props}
  >
    <div className={cn("pb-6", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
