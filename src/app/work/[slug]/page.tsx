import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getAdjacentProject,
  getProjectBySlug,
  projects,
  type Project,
} from "@/data/projects";
import { ProjectVisual } from "@/components/portfolio/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const caseStudyFields: { key: keyof Project; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "strategy", label: "Strategy" },
  { key: "creativeDirection", label: "Creative Direction" },
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "results", label: "Results" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = getAdjacentProject(slug);

  return (
    <>
      <section className="border-b border-ink/5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-hive"
            >
              <ArrowLeft size={14} />
              All Work
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex items-center gap-3">
              <Badge className="bg-ivory-deep text-ink">{project.label}</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-hive">
                {project.category}
              </span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
              {project.overview}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <ProjectVisual project={project} />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-4xl gap-14 px-6 lg:px-8">
          {caseStudyFields.map((field) => (
            <Reveal key={field.key}>
              <h2 className="font-heading text-2xl font-medium text-ink">
                {field.label}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/65">
                {project[field.key] as string}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-ink">
              Technologies &amp; Tools
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm text-ink/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/5 bg-ink py-16 text-ivory">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Next project
            </p>
            <h3 className="mt-2 font-heading text-2xl font-medium">
              {nextProject.name}
            </h3>
          </div>
          <MagneticButton href={`/work/${nextProject.slug}`} variant="primary">
            View Case Study
            <ArrowRight size={16} />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
