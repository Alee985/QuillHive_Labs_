import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-khaki/60 hover:shadow-[0_16px_40px_-16px_rgba(20,22,26,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-khaki"
    >
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory-deep text-hive transition-colors duration-300 group-hover:bg-khaki/15 group-hover:text-khaki">
          <DynamicIcon name={service.icon} size={20} aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-heading text-lg font-medium text-ink">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          {service.shortDescription}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-hive">
        Learn more
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
