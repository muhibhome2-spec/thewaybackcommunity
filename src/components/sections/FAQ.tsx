import { Section } from "../primitives/Section";
import { Kicker } from "../primitives/Kicker";
import { Heading } from "../primitives/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "../../data/content";

export function FAQ() {
  return (
    <Section variant="feed" labelledBy="faq-title">
        <Kicker className="mb-4">Before you decide</Kicker>
        <Heading id="faq-title" level={2} size="h2-feed">
          The honest answers.
        </Heading>

      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="mt-8"
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
