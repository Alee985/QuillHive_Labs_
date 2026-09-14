import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceGroups, services, type ServiceGroup } from "@/data/services";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const groupOrder: ServiceGroup[] = ["build", "create", "grow", "support"];

export function ServicesOverview() {
  return (
    <section className="border-b border-ink/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-ink sm:text-4xl">
              A connected ecosystem of services, not a random list.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/services" variant="ghost">
              Explore Services
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {groupOrder.map((group, i) => {
            const info = serviceGroups[group];
            const groupServices = services.filter((s) => s.group === group);

            return (
              <Reveal key={group} delay={i * 0.08}>
                <Link
                  href={`/services#${group}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-khaki/60 hover:shadow-[0_16px_40px_-16px_rgba(20,22,26,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-khaki"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-khaki">
                        {info.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-ink/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-khaki"
                      />
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-medium text-ink">
                      {info.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {info.description}
                    </p>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {groupServices.map((service) => (
                      <li
                        key={service.slug}
                        className="rounded-full bg-ivory-deep px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
