import SectionHeader from "./SectionHeader";
import { services } from "@/data/portfolio-content";

export default function ServicesSection() {
  return (
    <section id="uslugi" className="section" aria-labelledby="uslugi-title">
      <div className="wrap section-grid">
        <SectionHeader id="uslugi-title" label={services.label} title={services.title} />
        <ul className="section-body section-body--full service-list">
          {services.items.map((service) => (
            <li key={service.number} className="service-row" data-reveal="fade">
              <span className="service-num t-mono">{service.number}</span>
              <h3 className="service-title t-heading-2">{service.title}</h3>
              <p className="service-desc t-body t-muted">{service.description}</p>
              <p className="service-tags t-mono">{service.tags}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
