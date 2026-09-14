import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { HiveBackground } from "@/components/visuals/hive-background";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Quillhive about your project and we'll follow up with the right next step.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <HiveBackground className="opacity-60" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Have an idea? Let&apos;s build it.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
              Share a few details about your project and we&apos;ll follow
              up with next steps — no unnecessary back-and-forth required.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-hive hover:underline"
            >
              <Mail size={16} />
              {siteConfig.contactEmail}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
