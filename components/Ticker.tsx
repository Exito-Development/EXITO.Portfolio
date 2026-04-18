import { tickerItems } from "@/data/portfolio-content";

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
