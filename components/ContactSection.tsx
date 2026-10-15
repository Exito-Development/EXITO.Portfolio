import ContactForm from "./ContactForm";
import { brand, contact } from "@/data/portfolio-content";

export default function ContactSection() {
  return (
    <section id="kontakt" className="band contact" aria-labelledby="kontakt-title">
      <div className="wrap">
        <p className="contact-label t-label">{contact.label}</p>
        <h2 id="kontakt-title" className="contact-title t-display-l" data-reveal="lines">
          {contact.title}
        </h2>
        <div className="contact-info" data-reveal="fade">
          <a href={`mailto:${brand.email}`} className="contact-email link-draw">{brand.email}</a>
          <span className="dim">{contact.note}</span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
