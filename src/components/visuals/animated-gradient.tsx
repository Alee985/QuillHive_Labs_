"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
  variant?: "khaki" | "hive";
}

export function AnimatedGradient({ className, variant = "khaki" }: AnimatedGradientProps) {
  const reduceMotion = useReducedMotion();
  const colors =
    variant === "khaki"
      ? ["rgba(201,189,143,0.4)", "rgba(221,211,174,0.15)"]
      : ["rgba(28,116,168,0.4)", "rgba(63,169,220,0.18)"];

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{
        background: `radial-gradient(closest-side, ${colors[0]}, ${colors[1]}, transparent)`,
        filter: "blur(40px)",
      }}
      animate={
        reduceMotion
          ? undefined
          : { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }
      }
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
