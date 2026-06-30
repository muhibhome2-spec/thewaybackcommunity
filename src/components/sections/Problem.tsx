import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Em, Heading } from "../primitives/Heading";

export function Problem() {
  return (
    <Section labelledBy="problem-title">
      <Reveal>
        <Heading id="problem-title" level={2} size="h2">
          You know the feeling.
          <br />
          The door that <Em>closed.</Em>
        </Heading>
        <div className="mt-[26px] grid gap-[26px] sm:grid-cols-2 max-w-prose">
          <p className="text-prose font-light text-sub">
            One word answers. A bedroom door that stays shut. A child you love,
            and do not quite recognise any more.
          </p>
          <p className="text-prose font-light text-sub">
            And that thought, late at night, that you would never say out loud.
            What happened to my beautiful child? You are not the only one. Far
            from it.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
