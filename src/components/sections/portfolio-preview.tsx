import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export function PortfolioPreview() {
  return (
    <section className="border-b border-ink/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink sm:text-4xl">
              A glimpse of what a hive can build.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/work" variant="ghost">
              See Our Work
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14">
          <PortfolioGrid limit={3} />
        </div>
      </div>
    </section>
  );
}
