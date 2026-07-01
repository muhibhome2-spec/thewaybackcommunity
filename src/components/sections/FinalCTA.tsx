import { Container } from "../primitives/Container";
import { Reveal } from "../primitives/Reveal";
import { ScrollButton } from "../primitives/ScrollButton";
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
          <h2 id="final-title" className="text-h2-final font-light text-foreground">
            They are still in there.
            <br />
            <Em>Let&rsquo;s not do it alone.</Em>
          </h2>
          <div className="mt-9 flex justify-center flex-wrap gap-3.5">
            <ScrollButton to={site.anchors.join} size="lg">
              Join parents who refuse to give up
            </ScrollButton>
          </div>
          <p className="mt-7 font-mono text-[12px] tracking-[0.12em] uppercase text-meta">
            From £10.99 a month · founding price for the first 100
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
