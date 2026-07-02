import { Container } from "../primitives/Container";
import { ScrollButton } from "../primitives/ScrollButton";
import { site } from "../../config/site";

/**
 * Sticky navigation. Mark links home; sole action is the membership CTA.
 *
 * The CTA is hidden below md: the sticky bottom bar already owns the
 * join action on phones, and showing both meant "Join the community"
 * appeared twice in the first viewport while the wide pill forced the
 * wordmark onto two lines at 375px.
 */
export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-nav border-b border-border bg-background/85 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#top"
          className="whitespace-nowrap font-mono text-xs font-medium text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          The Way Back <span className="text-primary">Community</span>
        </a>
        <ScrollButton to={site.anchors.join} size="sm" className="hidden md:inline-flex">
          Join the community
        </ScrollButton>
      </Container>
    </nav>
  );
}
