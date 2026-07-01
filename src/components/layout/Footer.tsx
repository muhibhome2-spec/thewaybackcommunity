import { Container } from "../primitives/Container";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-meta">
            The Way Back Community
          </div>
          <div className="text-[16px] font-light text-primary">
            they&rsquo;re still in there
          </div>
        </div>

        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={site.termsUrl}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-meta hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href={site.privacyUrl}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-meta hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          {site.supportEmail && (
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-meta hover:text-foreground transition-colors"
            >
              Contact
            </a>
          )}
        </nav>
      </Container>
    </footer>
  );
}
