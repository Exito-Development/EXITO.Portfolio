import { stack } from "@/data/portfolio-content";
import RevealWrapper from "./RevealWrapper";
import { getIcon } from "./Icons";

export default function StackSection() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="stack-header">
          <div>
            <RevealWrapper><span className="eyebrow">Stack technologiczny</span></RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2 className="section-h2">Narzędzia,<br />którym ufamy</h2>
            </RevealWrapper>
          </div>
          <RevealWrapper delay={0.15}>
            <p className="section-lead" style={{ marginTop: 8 }}>
              Używamy sprawdzonych technologii, nie eksperymentujemy na projektach klientów.
              Każde narzędzie dobierane jest pod konkretny problem.
            </p>
          </RevealWrapper>
        </div>

        <div className="stack-grid">
          {stack.map((item, i) => (
            <RevealWrapper key={item.name} delay={0.04 * i}>
              <div className="stack-tile">
                <div className="stack-icon">{getIcon(item.icon, 18)}</div>
                <div className="stack-name">{item.name}</div>
                <div className="stack-role">{item.role}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
