"use client";

import { useEffect } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-khaki">
          Something went wrong
        </p>
        <h1 className="mt-4 font-heading text-4xl font-medium text-ink sm:text-5xl">
          We hit a snag.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink/60">
          An unexpected error occurred while loading this page. You can try
          again, or head back home.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-khaki px-6 py-3 text-sm font-semibold text-khaki-foreground transition-colors hover:bg-khaki-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-khaki focus-visible:ring-offset-2"
          >
            Try Again
          </button>
          <MagneticButton href="/" variant="ghost">
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
