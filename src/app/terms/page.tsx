import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of the Quillhive website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="font-heading text-4xl font-medium text-ink">
        Terms &amp; Conditions
      </h1>
      <p className="mt-3 text-sm text-ink/50">
        This is placeholder terms language. Replace it with terms reviewed
        by legal counsel before launch.
      </p>

      <div className="mt-10 space-y-8 text-ink/70">
        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            Use of this website
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            This website is provided for informational purposes about
            Quillhive&apos;s services. By using this site, you agree not to
            misuse it or attempt to disrupt its normal operation.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            Project engagements
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Submitting a project inquiry does not create a binding
            agreement. Scope, pricing, and timelines for any engagement are
            confirmed separately in writing.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            Contact
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-hive hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
