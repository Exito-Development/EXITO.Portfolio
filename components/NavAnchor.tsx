"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Id of a section on the home page. */
  section: string;
}

// Link to a home-page section: a plain in-page anchor on "/", a router link elsewhere.
export default function NavAnchor({ section, ...props }: Props) {
  const onHome = usePathname() === "/";
  return onHome ? <a href={`#${section}`} {...props} /> : <Link href={`/#${section}`} {...props} />;
}
