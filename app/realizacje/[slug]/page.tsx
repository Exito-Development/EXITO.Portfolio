import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import MediaWell from "@/components/MediaWell";
import { ArrowRight } from "@/components/Icons";
import { caseStudies, work } from "@/data/portfolio-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realizacje/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: study.title.replace(/\.$/, ""), description: study.summary };
}

// The project after this one in the home-page list; without a case study it points back to the list.
function nextProject(slug: string) {
  const items = work.items;
  const index = items.findIndex((p) => p.slug === slug);
  const next = items[(index + 1) % items.length];
  return { title: next.title, href: next.slug ? `/realizacje/${next.slug}` : "/#realizacje" };
}

export default async function CaseStudyPage({ params }: PageProps<"/realizacje/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  const next = nextProject(slug);

  return (
    <>
      <main id="main">
        <section className="case-hero" aria-labelledby="case-title">
          <div className="wrap">
            <Link href="/#realizacje" className="case-back t-label link-draw">
              ← Realizacje / {study.index}
            </Link>
            <h1 id="case-title" className="case-title" data-reveal="lines">
              {study.title}
            </h1>
            <dl className="case-meta" data-reveal="fade">
              {study.meta.map((item) => (
                <div key={item.label}>
                  <dt className="t-label">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="wrap">
          <MediaWell label={study.cover} className="case-cover" />
        </div>

        <section className="case-results" aria-label="Wyniki">
          <div className="wrap section-grid">
            <ul className="section-body results">
              {study.results.map((result) => (
                <li key={result.label} className="result" data-reveal="fade">
                  <span className="result-value">{result.value}</span>
                  <span className="result-label t-muted">{result.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-story" aria-label="Przebieg projektu">
          <div className="wrap section-grid">
            {study.story.map((block) => (
              <Fragment key={block.label}>
                <h2 className="section-label t-label">{block.label}</h2>
                <div className="story-block">
                  <p className="story-lead" data-reveal="lines">{block.lead}</p>
                  <p className="story-body t-muted" data-reveal="fade">{block.body}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        <section className="case-gallery" aria-label="Galeria">
          <div className="wrap gallery">
            {study.gallery.map((item) => (
              <MediaWell
                key={item.media}
                label={item.media}
                className={item.wide ? "gallery-wide" : "gallery-narrow"}
              />
            ))}
          </div>
        </section>

        <section className="case-quote" aria-label="Efekt i technologie">
          <div className="wrap section-grid">
            <h2 className="section-label t-label">{study.quote.label}</h2>
            <figure className="quote">
              <blockquote data-reveal="lines">{study.quote.text}</blockquote>
              <figcaption className="t-muted" data-reveal="fade">{study.quote.author}</figcaption>
            </figure>
            <h2 className="section-label t-label">Technologie</h2>
            <ul className="section-body stack-list" data-reveal="fade">
              {study.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="wrap">
          <Link href={next.href} className="next-project">
            <span className="t-label">Następny projekt</span>
            <span className="next-row">
              <span className="next-title">{next.title}</span>
              <ArrowRight size={40} className="next-arrow" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
