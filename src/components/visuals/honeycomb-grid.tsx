interface HoneycombGridProps {
  className?: string;
  rows?: number;
  cols?: number;
  cellSize?: number;
  color?: string;
  opacity?: number;
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

export function HoneycombGrid({
  className,
  rows = 5,
  cols = 6,
  cellSize = 40,
  color = "currentColor",
  opacity = 0.15,
}: HoneycombGridProps) {
  const hexHeight = cellSize * Math.sqrt(3);
  const hexWidth = cellSize * 1.5;
  const width = cols * hexWidth + cellSize;
  const height = rows * hexHeight + hexHeight;

  const hexagons: { cx: number; cy: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * hexWidth + cellSize;
      const cy = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2) + cellSize;
      hexagons.push({ cx, cy });
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {hexagons.map((hex, i) => (
        <polygon
          key={i}
          points={hexPoints(hex.cx, hex.cy, cellSize * 0.58)}
          stroke={color}
          strokeWidth={1.25}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
