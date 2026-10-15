import SectionHeader from "./SectionHeader";
import { workProcess } from "@/data/portfolio-content";

export default function ProcessSection() {
  return (
    <section id="proces" className="section" aria-labelledby="proces-title">
      <div className="wrap section-grid">
        <SectionHeader id="proces-title" label={workProcess.label} title={workProcess.title} />
        <ol className="section-body steps">
          {workProcess.steps.map((step) => (
            <li key={step.number} className="step" data-reveal="fade">
              <span className="t-mono">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc t-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
