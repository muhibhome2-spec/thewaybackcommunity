import { ScrollButton } from "../primitives/ScrollButton";
import { useInView } from "../../hooks/useReveal";
import { site } from "../../config/site";

export function StickyMobileCTA() {
  const atPricing = useInView(site.anchors.join);
  return (
    <div
      aria-hidden={atPricing}
      style={{ transform: atPricing ? "translateY(120%)" : "none" }}
      className={
        "fixed inset-x-0 bottom-0 z-sticky md:hidden border-t border-border " +
        "bg-background/95 backdrop-blur-md px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] " +
        "transition-transform duration-300 ease-soft"
      }
    >
      <ScrollButton to={site.anchors.join} className="w-full">
        Join from £10.99 / month
      </ScrollButton>
    </div>
  );
}
