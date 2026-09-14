import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HoneycombGrid } from "@/components/visuals/honeycomb-grid";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-hive py-24 text-ivory">
      <HoneycombGrid
        className="pointer-events-none absolute -left-16 -top-16 h-[360px] w-[360px] text-ivory"
        rows={4}
        cols={4}
        cellSize={40}
        opacity={0.1}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-medium leading-tight sm:text-4xl">
            Have an idea? Let&apos;s build it.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ivory/70">
            Tell us what you&apos;re trying to build, and we&apos;ll tell you
            exactly how Quillhive can help.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">
              Start a Project
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
