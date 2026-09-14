import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustIntro } from "@/components/sections/trust-intro";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyQuillhive } from "@/components/sections/why-quillhive";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Agency for Brands Built on Ideas",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ServicesOverview />
      <WhyQuillhive />
      <ProcessSection />
      <PortfolioPreview />
      <FinalCta />
    </>
  );
}
