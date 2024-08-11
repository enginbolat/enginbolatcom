"use client";

import { Easing, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  initialY?: number;
  initialOpacity?: number;
  animateY?: number;
  animateOpacity?: number;
  duration?: number;
  ease?: Easing | Easing[];
}

export default function Transition({
  children,
  initialY = 20,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
  duration = 0.75,
  ease = "easeInOut",
}: Readonly<Props>) {
  return (
    <motion.div
      initial={{ y: initialY, opacity: initialOpacity }}
      animate={{ y: animateY, opacity: animateOpacity }}
      transition={{ ease: ease, duration: duration }}
    >
      {children}
    </motion.div>
  );
}
