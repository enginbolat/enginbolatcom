"use client";

import { PropsWithChildren } from "react";
import { motion, Transition } from "framer-motion";

type Props = {
  initial?: { opacity: number; y: number };
  whileInView?: { opacity: number; y: number };
  transition?: Transition;
  viewport?: { once: boolean; amount: number };
};

export const AnimatedSection = ({
  children,
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: "easeOut" },
}: PropsWithChildren<Props>) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    transition={transition}
    viewport={viewport}
  >
    {children}
  </motion.div>
);
