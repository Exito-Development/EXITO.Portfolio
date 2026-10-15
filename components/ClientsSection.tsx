import Image from "next/image";
import { clients } from "@/data/portfolio-content";

export default function ClientsSection() {
  return (
    <section className="clients" aria-labelledby="klienci-title">
      <div className="wrap section-grid">
        <h2 id="klienci-title" className="section-label t-label">{clients.label}</h2>
        <ul className="section-body clients-grid">
          {clients.items.map((client, i) => (
            <li key={`${client.name}-${i}`} className="client-logo t-mono" data-reveal="fade">
              {client.logo ? (
                <Image src={client.logo} alt={client.name} width={160} height={48} />
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
