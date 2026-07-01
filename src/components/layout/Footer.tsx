import { Container } from "../primitives/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-9">
        <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-meta">
          The Way Back Community
        </div>
        <div className="text-[16px] font-light text-primary">
          they&rsquo;re still in there
        </div>
      </Container>
    </footer>
  );
}
