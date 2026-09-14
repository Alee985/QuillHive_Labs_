"use client";

import { motion, useReducedMotion } from "framer-motion";

interface QuillStrokeProps {
  className?: string;
  color?: string;
}

export function QuillStroke({ className, color = "var(--hive)" }: QuillStrokeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 240 160"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <motion.path
        d="M10 150C60 120 90 90 110 60C124 39 132 20 140 4"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 150C34 148 52 138 62 122"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.6}
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: 0.15, ease: "easeInOut" }}
      />
    </svg>
  );
}
