import { Button } from "../primitives/Button";
import { useInView } from "../../hooks/useReveal";
import { site } from "../../config/site";

/**
 * Mobile-only bottom-anchored CTA. Hides itself when the pricing band
 * is on screen so it doesn't compete with the in-page join action.
 */
export function StickyMobileCTA() {
  const atPricing = useInView(site.anchors.join);
  return (
    <div
      aria-hidden={atPricing}
      style={{ transform: atPricing ? "translateY(120%)" : "none" }}
      className={
        "fixed inset-x-0 bottom-0 z-sticky md:hidden border-t border-hairline " +
        "bg-paper/95 backdrop-blur-md px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] " +
        "transition-transform duration-300 ease-soft"
      }
    >
      <Button variant="primary" to={site.anchors.join} block>
        Join from £10.99 / month
      </Button>
    </div>
  );
}
