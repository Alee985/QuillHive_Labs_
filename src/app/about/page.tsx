import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { HiveBackground } from "@/components/visuals/hive-background";
import { QuillStroke } from "@/components/visuals/quill-stroke";
import { teamSlots, processPhilosophy } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Quillhive is a collaborative digital hive built around turning ideas into outcomes — combining technology, creativity, content, marketing, and support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/5 py-20 md:py-28">
        <HiveBackground />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel className="justify-center">About Quillhive</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              A collaborative digital hive, built around turning ideas into
              outcomes.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink">
              Modern businesses don&apos;t need another single-service
              vendor.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Quillhive exists because building and growing a brand today
              means pulling together technology, creativity, marketing,
              content, and day-to-day support — usually from a scattered
              mix of freelancers and agencies that don&apos;t talk to each
              other.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              We built Quillhive as a single, coordinated hive: one team,
              working across every discipline a business actually needs,
              so ideas move from concept to execution without getting lost
              in translation between vendors.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <QuillStroke className="h-40 w-56 text-hive" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/5 bg-ivory-deep/40 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <SectionLabel>Our philosophy</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink">
              What we believe, and how we work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processPhilosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                  <h3 className="font-heading text-base font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink">
              Every discipline a growing brand needs.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Strategy",
              "Web & App Development",
              "Branding & Design",
              "Illustration",
              "Social Media",
              "Copywriting",
              "Paid Media",
              "Virtual & Executive Support",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <SectionLabel>The team</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink">
              The people behind the hive.
            </h2>
            <p className="mt-3 text-sm text-ink/60">
              Team profiles are being finalized — the roles below reflect
              how the team is structured.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {teamSlots.map((slot) => (
              <div
                key={slot.role}
                className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink/15 p-6 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory-deep text-sm font-medium text-ink/40">
                  TBA
                </div>
                <div>
                  <p className="font-heading text-sm font-medium text-ink">
                    {slot.role}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/50">{slot.discipline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
