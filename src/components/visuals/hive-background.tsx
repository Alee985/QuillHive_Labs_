import { HoneycombGrid } from "@/components/visuals/honeycomb-grid";
import { AnimatedGradient } from "@/components/visuals/animated-gradient";
import { FloatingShapes } from "@/components/visuals/floating-shapes";

interface HiveBackgroundProps {
  className?: string;
  variant?: "light" | "dark";
}

export function HiveBackground({ className, variant = "light" }: HiveBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <AnimatedGradient
        variant="khaki"
        className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full"
      />
      <AnimatedGradient
        variant="hive"
        className="absolute bottom-[-15%] left-[-10%] h-[380px] w-[380px] rounded-full"
      />
      <HoneycombGrid
        className={`absolute right-[-8%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 ${
          variant === "dark" ? "text-ivory" : "text-ink"
        }`}
        rows={5}
        cols={5}
        cellSize={44}
        opacity={variant === "dark" ? 0.12 : 0.08}
      />
      <FloatingShapes className="absolute inset-0 hidden md:block" />
    </div>
  );
}
