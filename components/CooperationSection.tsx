import SectionHeader from "./SectionHeader";
import { cooperation } from "@/data/portfolio-content";

export default function CooperationSection() {
  return (
    <section id="wspolpraca" className="section" aria-labelledby="wspolpraca-title">
      <div className="wrap section-grid">
        <SectionHeader id="wspolpraca-title" label={cooperation.label} title={cooperation.title} />
        <ul className="section-body models">
          {cooperation.items.map((model) => (
            <li key={model.title} className="model" data-reveal="fade">
              <h3 className="t-heading-3">{model.title}</h3>
              <p className="t-body t-muted">{model.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
