import { brand } from "@/data/portfolio-content";
import { IconSend, IconArrowRight } from "./Icons";
import RevealWrapper from "./RevealWrapper";

export default function CtaSection() {
  return (
    <section id="kontakt" style={{ padding: "80px 0" }}>
      <div className="container">
        <RevealWrapper>
          <div className="cta-box">
            <div className="cta-glow" />
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>
              Nowy projekt
            </span>
            <h2 className="cta-h2">Zbudujmy coś razem.<br />Od jutra.</h2>
            <p className="cta-p">
              Opisz nam swój projekt — odezwiemy się w ciągu 24 godzin z wstępną oceną
              i pytaniami, które naprawdę mają znaczenie.
            </p>
            <div className="cta-actions">
              <a href={`mailto:${brand.email}`} className="btn-pill-white">
                <IconSend size={14} />
                {brand.email}
              </a>
              <a
                href={brand.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
              >
                Zarezerwuj call <IconArrowRight size={12} />
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
