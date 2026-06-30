import { useState, useId } from "react";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Heading } from "../primitives/Heading";
import { faqs, type Faq } from "../../data/content";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section labelledBy="faq-title">
      <Reveal>
        <Kicker className="mb-[22px]">Before you decide</Kicker>
        <Heading id="faq-title" level={2} size="h2">
          The honest answers.
        </Heading>
      </Reveal>

      <div className="mt-11 max-w-[780px]">
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.question}
            faq={faq}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </Section>
  );
}

type FaqItemProps = {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  const id = useId();
  const panelId = `${id}-panel`;
  const headerId = `${id}-header`;

  return (
    <div className="border-t border-hairline last:border-b">
      <h3 className="m-0">
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={
            "w-full text-left py-6 flex items-center justify-between gap-5 " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
          }
        >
          <span className="text-[clamp(19px,2.4vw,23px)] font-normal tracking-[-0.01em]">
            {faq.question}
          </span>
          <span
            aria-hidden="true"
            className={
              "font-mono text-[24px] leading-none text-clay flex-none transition-transform duration-250 ease-soft " +
              (isOpen ? "rotate-45" : "rotate-0")
            }
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={
          "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-soft " +
          (isOpen
            ? "grid-rows-[1fr] opacity-100 -mt-1 pb-6"
            : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="overflow-hidden">
          <p className="text-[18px] font-light text-sub leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
