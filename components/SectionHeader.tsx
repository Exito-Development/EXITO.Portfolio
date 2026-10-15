interface Props {
  id: string;
  label: string;
  title: string;
}

// "(0N) Name" label in columns 1–3, headline in columns 4–12.
export default function SectionHeader({ id, label, title }: Props) {
  return (
    <>
      <p className="section-label t-label">{label}</p>
      <h2 id={id} className="section-title t-heading-1" data-reveal="lines">
        {title}
      </h2>
    </>
  );
}
