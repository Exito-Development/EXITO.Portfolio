"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { sparklineData, panelActivity } from "@/data/portfolio-content";
import { getIcon, IconArrowRight, IconChevronUp } from "./Icons";

type Ease = [number, number, number, number];
const ease: Ease = [0.22, 1, 0.36, 1];
const sparkMax = Math.max(...sparklineData);

const techItems = ["Java", "Spring", "React", "Next.js", "PostgreSQL", "CI/CD", "Mobile"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">

          {/* LEFT */}
          <div>
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="live-dot" />
              Dostępny — nowe projekty Q3 2026
            </motion.div>

            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Zbudujmy coś,<br />
              co naprawdę<br />
              robi wrażenie.
            </motion.h1>

            <motion.p
              className="hero-body"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              Jeśli chcesz stworzyć nowoczesny produkt cyfrowy albo rozwinąć istniejący
              system, przygotujemy rozwiązanie, które będzie jednocześnie estetyczne,
              szybkie i gotowe na rozwój.
            </motion.p>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <Link href="#kontakt" className="btn-pill-white">
                Skontaktuj się <IconArrowRight size={14} />
              </Link>
              <Link href="#oferta" className="btn-pill-outline">
                Nasza oferta
              </Link>
            </motion.div>

            <motion.div
              className="hero-tech"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              {techItems.map((t, i) => (
                <span key={t}>
                  <span>{t}</span>
                  {i < techItems.length - 1 && <span className="sep">·</span>}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Insight panel */}
          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <div className="panel-hdr">
              <span className="panel-hdr-title">Project Dashboard</span>
              <span className="panel-hdr-live">
                <span className="live-dot-sm" />
                Live
              </span>
            </div>

            <div className="panel-body">
              {/* KPI 2x2 */}
              <div className="panel-kpis">
                {[
                  { val: "14",   lbl: "Aktywne projekty",  delta: "+3 ten kwartał" },
                  { val: "98%",  lbl: "Uptime SLA",         delta: "30-dniowa śr." },
                  { val: "2.4s", lbl: "Śr. deploy",         delta: "CI/CD pipeline" },
                  { val: "4.9",  lbl: "Ocena klientów",     delta: "12 opinii" },
                ].map((kpi) => (
                  <div key={kpi.lbl} className="panel-kpi">
                    <div className="pkpi-val">{kpi.val}</div>
                    <div className="pkpi-lbl">{kpi.lbl}</div>
                    <div className="pkpi-delta">
                      <IconChevronUp size={11} />
                      {kpi.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sparkline */}
              <div className="sparkline-wrap">
                <div className="sparkline-labels">
                  <span>Dostawy — 12 tygodni</span>
                  <span>↑ 22%</span>
                </div>
                <div className="sparkline">
                  {sparklineData.map((v, i) => (
                    <div
                      key={i}
                      className={`spark-bar${i === sparklineData.length - 1 ? " current" : ""}`}
                      style={{ height: `${(v / sparkMax) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="activity-feed">
                {panelActivity.map((item) => (
                  <div key={item.title} className="activity-item">
                    <div className="activity-icon">{getIcon(item.icon, 13)}</div>
                    <div className="activity-body">
                      <div className="activity-title">{item.title}</div>
                      <div className="activity-meta">{item.meta}</div>
                    </div>
                    <span className="activity-badge">{item.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
