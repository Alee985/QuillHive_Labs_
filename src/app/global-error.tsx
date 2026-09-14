"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#faf6ee] px-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a441]">
            Critical error
          </p>
          <h1 className="mt-4 text-4xl font-medium text-[#14161a]">
            The site hit a snag.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-[#14161a99]">
            Something went wrong at the application level. Please try
            again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#14161a]"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
