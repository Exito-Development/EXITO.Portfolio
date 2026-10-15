"use client";

import { useId, useState } from "react";

interface Props {
  items: readonly { question: string; answer: string }[];
}

// Accordion — one item open at a time, the first one open by default.
export default function FaqList({ items }: Props) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="section-body faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;

        return (
          <div key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`} data-reveal="fade">
            <h3 className="faq-q">
              <button
                type="button"
                id={buttonId}
                className="faq-button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.question}</span>
                <span className="faq-sign" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-panel" inert={!isOpen}>
              <div>
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
