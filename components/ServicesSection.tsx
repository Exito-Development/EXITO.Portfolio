import { services } from "@/data/portfolio-content";
import RevealWrapper from "./RevealWrapper";
import { getIcon } from "./Icons";

export default function ServicesSection() {
  return (
    <section id="oferta" className="section">
      <div className="container">
        <RevealWrapper>
          <span className="eyebrow">Oferta</span>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-h2" style={{ marginBottom: 40 }}>Co budujemy</h2>
        </RevealWrapper>

        <div className="services-grid">
          {services.map((svc, i) => (
            <RevealWrapper key={svc.number} delay={0.06 * (i % 3)}>
              <div className="service-card">
                <span className="service-number">{svc.number}</span>
                <div className="service-icon">{getIcon(svc.icon, 18)}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>
                <div className="service-tags">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="stag">{tag}</span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
