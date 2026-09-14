import { processPhilosophy } from "@/data/team";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function WhyQuillhive() {
  return (
    <section className="border-b border-ink/5 bg-ivory-deep/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <SectionLabel>Why Quillhive</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink sm:text-4xl">
            A different way to work with an agency.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {processPhilosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col justify-between bg-ivory p-6">
                <span className="font-heading text-2xl text-khaki">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-8">
                  <h3 className="font-heading text-base font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
