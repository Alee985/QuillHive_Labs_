import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ServicesGrid } from "@/components/services/services-grid";
import { HiveBackground } from "@/components/visuals/hive-background";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web and app development, branding and design, marketing and content, and business support — explore everything Quillhive builds.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/5 py-20 md:py-28">
        <HiveBackground />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel className="justify-center">Services</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Everything a modern brand needs, under one roof.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/65">
              From first strategy conversation to a live product or
              campaign — technology, creative, marketing, and support work
              together, not in separate silos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      <section className="border-t border-ink/5 bg-ivory-deep/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-medium text-ink">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink/60">
              Tell us the problem you&apos;re solving, and we&apos;ll point
              you to the right starting place.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton href="/contact">Talk to Us</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
