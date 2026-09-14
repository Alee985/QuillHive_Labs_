import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { getServiceBySlug, serviceGroups, services } from "@/data/services";
import { DynamicIcon } from "@/lib/icon";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionLabel } from "@/components/ui/section-label";
import { HiveBackground } from "@/components/visuals/hive-background";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const groupInfo = serviceGroups[service.group];

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/5 py-20 md:py-28">
        <HiveBackground />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-hive"
            >
              <ArrowLeft size={14} />
              All Services
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory-deep text-hive">
                <DynamicIcon name={service.icon} size={26} aria-hidden="true" />
              </div>
              <SectionLabel>{groupInfo.label}</SectionLabel>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-4xl gap-16 px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-ink">
              What problem it solves
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/65">
              {service.problem}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-ink">
              What&apos;s included
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                  <Check size={16} className="mt-0.5 shrink-0 text-khaki" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-ink">
              Typical deliverables
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm text-ink/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-ink">
              Who it&apos;s for
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/65">
              {service.whoFor}
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-ink/10 bg-ivory-deep/40 p-8 text-center">
              <h2 className="font-heading text-2xl font-medium text-ink">
                Ready to start on {service.name.toLowerCase()}?
              </h2>
              <div className="mt-6 flex justify-center">
                <MagneticButton href="/contact">
                  Start a Project
                  <ArrowRight size={16} />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
