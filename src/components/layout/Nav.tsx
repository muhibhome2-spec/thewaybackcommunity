import { Button } from "../primitives/Button";
import { Container } from "../primitives/Container";
import { site } from "../../config/site";

/**
 * Sticky navigation. The wordmark is the link home; the only action is
 * the membership CTA, keeping the bar visually quiet but always primed.
 */
export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-nav border-b border-hairline bg-paper/90 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-[0.2em] uppercase font-medium text-ink hover:opacity-80 transition-opacity"
        >
          The Way Back <span className="text-clay">Community</span>
        </a>
        <Button variant="primary-sm" to={site.anchors.join}>
          Join the community
        </Button>
      </Container>
    </nav>
  );
}
