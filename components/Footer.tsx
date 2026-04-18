import BrandLogo from "./BrandLogo";
import { brand, footerOferta, footerTech } from "@/data/portfolio-content";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="brand-col">
            <div className="brand-header">
              <BrandLogo size={74} />
              <div>
                <div className="footer-brand-name">{brand.name}</div>
                <div className="footer-brand-sub">{brand.tagline}</div>
              </div>
            </div>
            <p className="footer-desc">
              Nowoczesne rozwiązania IT, platformy sprzedażowe, konfiguratory
              oraz aplikacje webowe i mobilne budowane z naciskiem na jakość,
              estetykę i skalowalność.
            </p>
          </div>

          {/* Oferta */}
          <div>
            <div className="footer-col-title">Oferta</div>
            <div className="footer-links">
              {footerOferta.map((item) => (
                <a key={item} href="#oferta" className="footer-link">{item}</a>
              ))}
            </div>
          </div>

          {/* Technologie */}
          <div>
            <div className="footer-col-title">Technologie</div>
            <div className="footer-links">
              {footerTech.map((item) => (
                <span key={item} className="footer-link">{item}</span>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div className="footer-col-title">Kontakt</div>
            <div className="footer-links">
              <a href={`mailto:${brand.email}`} className="footer-link">{brand.email}</a>
              <span className="footer-location">
                {brand.location} <span style={{ marginLeft: 6, fontSize: '1.2em' }}>🇵🇱</span>
              </span>
              <span className="footer-copy">© 2026 {brand.name}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
