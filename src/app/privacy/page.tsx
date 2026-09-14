import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quillhive collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="font-heading text-4xl font-medium text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink/50">
        This is placeholder policy language. Replace it with a policy
        reviewed by legal counsel before launch.
      </p>

      <div className="prose-quillhive mt-10 space-y-8 text-ink/70">
        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            Information we collect
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            When you submit a project inquiry through our contact form, we
            collect the information you provide — such as your name, email
            address, company, and project details — solely to respond to
            your inquiry.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            How we use information
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Information submitted through this website is used only to
            evaluate and respond to project inquiries. We do not sell your
            information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium text-ink">
            Contact
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Questions about this policy can be sent to{" "}
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
