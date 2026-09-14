import Link from "next/link";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/visuals/social-icons";
import { Logo } from "@/components/layout/logo";
import { HoneycombGrid } from "@/components/visuals/honeycomb-grid";
import {
  footerLegalLinks,
  footerServiceLinks,
  mainNav,
  siteConfig,
} from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: siteConfig.links.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Facebook", href: siteConfig.links.facebook, icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink text-ivory">
      <HoneycombGrid
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-ivory"
        rows={5}
        cols={5}
        cellSize={40}
        opacity={0.06}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              {siteConfig.tagline} A full-service digital agency combining
              technology, creativity, content, marketing, and human support
              under one roof.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-khaki"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-khaki"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-ivory/75 transition-colors hover:text-khaki"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-khaki hover:text-khaki"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Quillhive. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLegalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-khaki">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
