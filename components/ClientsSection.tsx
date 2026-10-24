import { clients } from "@/data/portfolio-content";

export default function ClientsSection() {
  // One row of up to four logos (two on phones), however many clients there are.
  const count = clients.items.length;
  const columns = { "--cols": Math.min(count, 4), "--cols-sm": Math.min(count, 2) } as React.CSSProperties;

  return (
    <section className="clients" aria-labelledby="klienci-title">
      <div className="wrap section-grid">
        <h2 id="klienci-title" className="section-label t-label">{clients.label}</h2>
        <ul className="section-body clients-grid" style={columns}>
          {clients.items.map((client, i) => (
            <li key={`${client.name}-${i}`} className="client-logo t-mono" data-reveal="fade">
              {client.logo ? (
                // The logo's alpha is used as a mask, so it renders in one colour that follows the theme.
                <span
                  className="client-mark"
                  role="img"
                  aria-label={client.name}
                  style={{ "--logo": `url(${client.logo})` } as React.CSSProperties}
                />
              ) : (
                client.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
