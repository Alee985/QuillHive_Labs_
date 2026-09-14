import Link from "next/link";
import { HoneycombGrid } from "@/components/visuals/honeycomb-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <HoneycombGrid
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 text-ink"
        rows={6}
        cols={6}
        cellSize={44}
        opacity={0.06}
      />
      <div className="relative">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-khaki">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-medium text-ink sm:text-5xl">
          This page flew out of the hive.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <MagneticButton href="/">Back to Home</MagneticButton>
          <MagneticButton href="/work" variant="ghost">
            See Our Work
          </MagneticButton>
        </div>
        <div className="mt-4 text-sm">
          <Link href="/contact" className="text-hive hover:underline">
            Or get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
