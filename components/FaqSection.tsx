import FaqList from "./FaqList";
import SectionHeader from "./SectionHeader";
import { faq } from "@/data/portfolio-content";

export default function FaqSection() {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="wrap section-grid">
        <SectionHeader id="faq-title" label={faq.label} title={faq.title} />
        <FaqList items={faq.items} />
      </div>
    </section>
  );
}
