import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ProcessTimeline } from "@/components/process/process-timeline";

export function ProcessSection() {
  return (
    <section className="border-b border-ink/5 bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ivory sm:text-4xl">
            A clear process, from first conversation to launch.
          </h2>
        </Reveal>
        <div className="mt-14">
          <ProcessTimeline variant="dark" />
        </div>
      </div>
    </section>
  );
}
