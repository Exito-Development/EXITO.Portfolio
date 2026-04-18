"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface Props { children: React.ReactNode; delay?: number; className?: string; }

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function RevealWrapper({ children, delay = 0, className = "" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div ref={ref} className={className} variants={variants}
      initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay}>
      {children}
    </motion.div>
  );
}
