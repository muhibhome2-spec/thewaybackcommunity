import { Container } from "../primitives/Container";
import { Reveal } from "../primitives/Reveal";
import { Button } from "../primitives/Button";
import { Em } from "../primitives/Heading";
import { site } from "../../config/site";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="py-[clamp(80px,12vw,132px)] text-center"
    >
      <Container>
        <Reveal>
          <h2 id="final-title" className="text-h2-final font-light">
            They are still in there.
            <br />
            <Em>Let&rsquo;s not do it alone.</Em>
          </h2>
          <div className="mt-9 flex justify-center flex-wrap gap-3.5">
            <Button variant="primary" to={site.anchors.join}>
              Join parents who refuse to give up
            </Button>
          </div>
          <p className="mt-7 font-mono text-[12px] tracking-[0.12em] uppercase text-muted">
            From £10.99 a month · founding price for the first 100
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
