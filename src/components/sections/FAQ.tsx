import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Heading } from "../primitives/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "../../data/content";

/**
 * Radix-backed accordion via shadcn. Keyboard arrow navigation between
 * items, correct ARIA, and smooth height animation via Radix data-state
 * come for free — no more hand-rolled max-height trick.
 */
export function FAQ() {
  return (
    <Section labelledBy="faq-title">
      <Reveal>
        <Kicker className="mb-[22px]">Before you decide</Kicker>
        <Heading id="faq-title" level={2} size="h2">
          The honest answers.
        </Heading>
      </Reveal>

      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="mt-11 max-w-[780px]"
      >
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
