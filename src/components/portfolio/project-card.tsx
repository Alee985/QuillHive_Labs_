import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/portfolio/project-visual";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-khaki rounded-2xl"
    >
      <div className="relative">
        <ProjectVisual project={project} />
        <Badge className="absolute left-4 top-4 border-none bg-ink/80 text-ivory backdrop-blur">
          {project.label}
        </Badge>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-hive">
            {project.category}
          </p>
          <h3 className="mt-1 font-heading text-xl font-medium text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-ink/60">{project.shortDescription}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-khaki"
        />
      </div>
    </Link>
  );
}
