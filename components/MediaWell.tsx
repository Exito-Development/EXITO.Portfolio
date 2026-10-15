import Image from "next/image";

interface Props {
  /** Placeholder shown until a real image is provided. */
  label: string;
  image?: string;
  alt?: string;
  sizes?: string;
  className?: string;
}

// Surface-coloured media well; its inner layer is what ScrollReveals scales and parallaxes.
export default function MediaWell({ label, image, alt = "", sizes = "100vw", className = "" }: Props) {
  return (
    <div className={`media ${className}`} data-media>
      <div className="media-inner">
        {image ? (
          <Image src={image} alt={alt} fill sizes={sizes} />
        ) : (
          <span className="t-mono media-label" aria-hidden="true">{label}</span>
        )}
      </div>
    </div>
  );
}
