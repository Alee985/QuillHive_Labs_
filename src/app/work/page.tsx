import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { HiveBackground } from "@/components/visuals/hive-background";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Concept projects and sample work showing how Quillhive approaches brand, web, app, and campaign work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/5 py-20 md:py-28">
        <HiveBackground />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel className="justify-center">Work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              A look at how we think and build.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/65">
              These concept projects were developed independently to
              demonstrate our process — they are not affiliated with any
              real client, and no results or performance claims are
              attached to them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
