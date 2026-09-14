"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
}

const nodes: Node[] = [
  { x: 40, y: 40 },
  { x: 140, y: 20 },
  { x: 230, y: 70 },
  { x: 90, y: 110 },
  { x: 190, y: 150 },
  { x: 20, y: 170 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 3],
  [3, 4],
  [3, 5],
  [2, 4],
];

interface ConnectedNodesProps {
  className?: string;
  color?: string;
}

export function ConnectedNodes({ className, color = "var(--khaki)" }: ConnectedNodesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 260 190"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={color}
          strokeWidth={1}
          opacity={0.3}
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08 }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={4}
          fill={color}
          initial={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
        />
      ))}
    </svg>
  );
}
