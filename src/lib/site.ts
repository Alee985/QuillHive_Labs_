export const siteConfig = {
  name: "Quillhive",
  tagline: "Where ideas find their hive.",
  description:
    "Quillhive is a full-service digital agency bringing development, design, content, marketing, and business support together to help ambitious brands build, launch, and grow.",
  url: "https://www.quillhive.example",
  ogImage: "/og-image.png",
  links: {
    instagram: "https://instagram.com/quillhive",
    linkedin: "https://linkedin.com/company/quillhive",
    facebook: "https://facebook.com/quillhive",
  },
  contactEmail: "hello@quillhive.example",
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Development", href: "/services#build" },
  { label: "Design", href: "/services#create" },
  { label: "Marketing", href: "/services#grow" },
  { label: "Support", href: "/services#support" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;
