import Link from "next/link";
import MediaWell from "./MediaWell";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "./Icons";
import { work } from "@/data/portfolio-content";

// Asymmetric 7/5 rhythm: wide-tall, narrow-short (bottom aligned), narrow-short, wide-tall.
const layout = [
  { card: "work-card--wide", media: "work-media--tall", sizes: "(min-width: 768px) 58vw, 100vw" },
  { card: "work-card--narrow work-card--end", media: "work-media--short", sizes: "(min-width: 768px) 42vw, 100vw" },
  { card: "work-card--narrow", media: "work-media--short", sizes: "(min-width: 768px) 42vw, 100vw" },
  { card: "work-card--wide", media: "work-media--tall", sizes: "(min-width: 768px) 58vw, 100vw" },
];

export default function WorkSection() {
  return (
    <section id="realizacje" className="section" aria-labelledby="realizacje-title">
      <div className="wrap section-grid">
        <SectionHeader id="realizacje-title" label={work.label} title={work.title} />
        <div className="section-body section-body--full work-grid">
          {work.items.map((project, i) => {
            const l = layout[i % layout.length];
            const href = project.slug ? `/realizacje/${project.slug}` : undefined;
            const media = (
              <MediaWell
                label={project.media}
                image={project.image}
                alt={project.title}
                sizes={l.sizes}
                className={l.media}
              />
            );

            return (
              <article key={project.title} className={`work-card ${l.card}`}>
                {href ? (
                  <Link href={href} className="work-media" tabIndex={-1} aria-hidden="true" data-cursor>
                    {media}
                  </Link>
                ) : (
                  media
                )}
                <div className="work-caption" data-reveal="fade">
                  <h3 className="work-title">
                    {href ? (
                      <Link href={href} className="link-cta">
                        {project.title}
                        <ArrowRight size={14} />
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="work-meta t-muted">{project.caption}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
