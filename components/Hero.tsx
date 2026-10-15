import KeyVisual from "./KeyVisual";
import { ArrowRight } from "./Icons";
import { brand, hero } from "@/data/portfolio-content";

export default function Hero() {
  const fieldBehind = hero.visual === "background";

  return (
    <>
      <section id="top" className={`hero${fieldBehind ? " hero--field" : ""}`} aria-labelledby="hero-title">
        {fieldBehind && <KeyVisual variant="background" />}
        <div className="wrap">
          <h1 id="hero-title" className="hero-title t-display-xl" data-reveal="lines">
            {hero.title}
          </h1>
          <p className="hero-tag t-label" data-reveal="fade">{brand.descriptor}</p>
          <p className="hero-lead t-body-l" data-reveal="fade">{hero.lead}</p>
          <a href="#kontakt" className="hero-cta link-cta" data-reveal="fade">
            {hero.cta}
            <ArrowRight />
          </a>
        </div>
      </section>

      <div className="wrap">
        {!fieldBehind && <KeyVisual />}
        <ul className="facts t-label" aria-label="W skrócie">
          {hero.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
