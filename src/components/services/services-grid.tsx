import { serviceGroups, services, type ServiceGroup } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

const groupOrder: ServiceGroup[] = ["build", "create", "grow", "support"];

export function ServicesGrid({ showGroupIntro = true }: { showGroupIntro?: boolean }) {
  return (
    <div className="space-y-16">
      {groupOrder.map((group) => {
        const groupInfo = serviceGroups[group];
        const groupServices = services.filter((s) => s.group === group);

        return (
          <div key={group} id={group}>
            {showGroupIntro && (
              <Reveal className="mb-6 max-w-xl scroll-mt-24">
                <SectionLabel>{groupInfo.label}</SectionLabel>
                <h3 className="mt-2 font-heading text-2xl font-medium text-ink">
                  {groupInfo.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{groupInfo.description}</p>
              </Reveal>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {groupServices.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.06}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
