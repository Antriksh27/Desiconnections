"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { EventFaqItem } from "@/content/events";

interface EventFaqAccordionProps {
  faqs: EventFaqItem[];
}

export function EventFaqAccordion({ faqs }: EventFaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-hairline rounded-2xl bg-midnight overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-ivory hover:text-gold transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-mist transition-transform duration-200 shrink-0 ml-2 ${
                  isOpen ? "rotate-180 text-gold" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs text-mist leading-relaxed border-t border-hairline/60">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
