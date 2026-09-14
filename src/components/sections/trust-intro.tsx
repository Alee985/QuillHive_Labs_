import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ConnectedNodes } from "@/components/visuals/connected-nodes";

const capabilities = [
  "Strategy",
  "Design",
  "Development",
  "Content",
  "Marketing",
  "Support",
];

export function TrustIntro() {
  return (
    <section className="border-b border-ink/5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <SectionLabel>Why one hive</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink sm:text-4xl">
            One hive. Every digital capability you need.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/65">
            Most businesses end up coordinating a patchwork of freelancers
            and disconnected vendors — a developer here, a designer there, a
            marketer somewhere else. Quillhive combines the disciplines a
            modern brand actually needs into one team that already works
            together.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-2xl border border-ink/10 bg-white p-8">
            <ConnectedNodes className="mx-auto h-48 w-full max-w-sm" />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-ink/75"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-khaki" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
