import { Container } from "../primitives/Container";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs uppercase text-meta">
            The Way Back Community
          </div>
          <div className="text-base font-normal text-primary">
            they&rsquo;re still in there
          </div>
        </div>

        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-3">
          <a
            href={site.termsUrl}
            className="font-mono text-2xs uppercase text-meta hover:text-foreground transition-colors py-2"
          >
            Terms
          </a>
          <a
            href={site.privacyUrl}
            className="font-mono text-2xs uppercase text-meta hover:text-foreground transition-colors py-2"
          >
            Privacy
          </a>
          {site.supportEmail && (
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-mono text-2xs uppercase text-meta hover:text-foreground transition-colors py-2"
            >
              Contact
            </a>
          )}
        </nav>
      </Container>
    </footer>
  );
}
