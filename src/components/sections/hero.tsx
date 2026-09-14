import { ArrowRight } from "lucide-react";
import { HiveBackground } from "@/components/visuals/hive-background";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/5 pt-16 pb-24 md:pt-24 md:pb-32">
      <HiveBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionLabel>Digital Agency</SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Ideas need a hive to{" "}
            <span className="text-hive">become something real.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            We bring development, design, content, marketing, and business
            support together to help ambitious brands build, launch, and
            grow — under one coordinated roof.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact">
              Start a Project
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              Explore Our Work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
