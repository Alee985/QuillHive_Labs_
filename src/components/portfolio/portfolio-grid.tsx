import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/15 py-20 text-center">
        <p className="text-sm text-ink/50">
          New work is on the way. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 0.08}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
