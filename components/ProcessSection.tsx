import { processSteps } from "@/data/portfolio-content";
import RevealWrapper from "./RevealWrapper";

const terminalLines = [
  { type: "prompt", text: "git push origin main" },
  { type: "dim",    text: "Triggering CI/CD pipeline..." },
  { type: "ok",     text: "✓ Unit tests passed",        meta: "(148 tests, 0.8s)" },
  { type: "ok",     text: "✓ Integration tests passed", meta: "(32 tests)" },
  { type: "ok",     text: "✓ TypeScript build",         meta: "(2.1s)" },
  { type: "ok",     text: "✓ Docker image built",       meta: "(sha256:a4f2…)" },
  { type: "ok",     text: "✓ Pushed to ECR" },
  { type: "ok",     text: "✓ Kubernetes rolling update" },
  { type: "ok",     text: "✓ Health checks",            meta: "(3/3 pods ready)" },
  { type: "ok",     text: "✓ Smoke tests passed" },
  { type: "blank" },
  { type: "result", text: "Deployed in 2.4s — zero downtime" },
];

export default function ProcessSection() {
  return (
    <section id="podejscie" className="section">
      <div className="container">
        <RevealWrapper><span className="eyebrow">Proces</span></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-h2">Jak pracujemy</h2>
        </RevealWrapper>

        <div className="process-inner">
          {/* Steps */}
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <RevealWrapper key={step.num} delay={0.08 * i}>
                <div className="process-step">
                  <div className="step-num">{step.num}</div>
                  <div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Terminal */}
          <RevealWrapper delay={0.2} style={{ height: '100%' }}>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="tbar-dot" />
                <span className="tbar-dot" />
                <span className="tbar-dot" />
                <span className="tbar-title">exito-ci — deploy pipeline</span>
              </div>
              <div className="terminal-body">
                {terminalLines.map((line, i) => {
                  if (line.type === "blank") return <div key={i} className="t-blank" />;
                  return (
                    <div key={i} className="t-line">
                      {line.type === "prompt" && (
                        <><span className="t-prompt">▶</span><span className="t-cmd">{line.text}</span></>
                      )}
                      {line.type === "dim" && (
                        <span className="t-dim" style={{ paddingLeft: 16 }}>{line.text}</span>
                      )}
                      {line.type === "ok" && (
                        <><span className="t-ok">{line.text}</span>{line.meta && <span className="t-dim">{line.meta}</span>}</>
                      )}
                      {line.type === "result" && (
                        <span className="t-result">{line.text}</span>
                      )}
                    </div>
                  );
                })}
                <div className="t-line">
                  <span className="t-prompt">▶</span>
                  <span className="cursor-blink" />
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
