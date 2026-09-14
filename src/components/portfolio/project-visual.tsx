import { HoneycombGrid } from "@/components/visuals/honeycomb-grid";
import type { Project } from "@/data/projects";

const accentGradients: Record<Project["accent"], string> = {
  khaki: "from-khaki/70 via-khaki-light/40 to-ivory-deep",
  hive: "from-hive via-hive-light/60 to-ivory-deep",
  ink: "from-ink via-ink-soft/70 to-ivory-deep",
};

const accentTextClass: Record<Project["accent"], string> = {
  khaki: "text-ink",
  hive: "text-ivory",
  ink: "text-ivory",
};

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${accentGradients[project.accent]}`}
    >
      <HoneycombGrid
        className={`absolute inset-0 h-full w-full ${accentTextClass[project.accent]}`}
        rows={4}
        cols={5}
        cellSize={36}
        opacity={0.18}
      />
      <span
        className={`relative font-heading text-3xl font-medium tracking-tight ${accentTextClass[project.accent]}`}
      >
        {project.name}
      </span>
    </div>
  );
}
