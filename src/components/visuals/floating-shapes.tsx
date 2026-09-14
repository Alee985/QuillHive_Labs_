"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Shape {
  className: string;
  size: number;
  delay: number;
  kind: "hex" | "circle" | "square";
}

const shapes: Shape[] = [
  { className: "top-[8%] left-[6%]", size: 26, delay: 0, kind: "hex" },
  { className: "top-[22%] right-[10%]", size: 16, delay: 0.6, kind: "circle" },
  { className: "bottom-[18%] left-[14%]", size: 20, delay: 1.1, kind: "square" },
  { className: "bottom-[10%] right-[18%]", size: 22, delay: 0.3, kind: "hex" },
];

function ShapeIcon({ kind, size }: { kind: Shape["kind"]; size: number }) {
  if (kind === "circle") {
    return (
      <div
        className="rounded-full border border-khaki/50"
        style={{ width: size, height: size }}
      />
    );
  }
  if (kind === "square") {
    return (
      <div
        className="rotate-45 rounded-sm border border-hive/40"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 21,7 21,17 12,22 3,17 3,7"
        stroke="var(--khaki)"
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function FloatingShapes({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className}`}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -14, 0], rotate: [0, 6, 0] }
          }
          transition={{
            duration: 6 + i,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShapeIcon kind={shape.kind} size={shape.size} />
        </motion.div>
      ))}
    </div>
  );
}
