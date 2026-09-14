export type ServiceGroup = "build" | "create" | "grow" | "support";

export interface Service {
  slug: string;
  name: string;
  group: ServiceGroup;
  icon: string;
  tagline: string;
  shortDescription: string;
  problem: string;
  includes: string[];
  deliverables: string[];
  whoFor: string;
}

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; title: string; description: string }
> = {
  build: {
    label: "Build",
    title: "Technology",
    description:
      "Fast, reliable products and platforms engineered around real business goals.",
  },
  create: {
    label: "Create",
    title: "Creative",
    description:
      "Brand identities, illustration, and design systems with a distinct point of view.",
  },
  grow: {
    label: "Grow",
    title: "Marketing & Content",
    description:
      "Content, campaigns, and paid media that turn attention into momentum.",
  },
  support: {
    label: "Support",
    title: "Business Support",
    description:
      "People-powered support that keeps the day-to-day running while you focus on growth.",
  },
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    group: "build",
    icon: "Code2",
    tagline: "Websites and web apps built to perform.",
    shortDescription:
      "Fast, scalable, responsive websites and web applications designed around your business goals.",
    problem:
      "Most business websites are slow, hard to update, and disconnected from actual growth goals. You need a site that loads fast, converts visitors, and is easy for your team to maintain.",
    includes: [
      "Discovery and technical planning",
      "UI/UX-informed front-end build",
      "CMS or headless content setup",
      "API and third-party integrations",
      "Performance and SEO optimization",
      "QA across devices and browsers",
    ],
    deliverables: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "E-commerce storefronts",
      "CMS integrations",
      "API integrations",
      "Performance optimization",
    ],
    whoFor:
      "Founders and marketing teams who need a website that supports the business, not just represents it.",
  },
  {
    slug: "app-development",
    name: "App Development",
    group: "build",
    icon: "Smartphone",
    tagline: "Mobile and cross-platform products.",
    shortDescription:
      "Cross-platform and native applications built for real usage, not just app-store screenshots.",
    problem:
      "Turning a product idea into a stable, usable app takes more than code — it takes product thinking, design, and engineering working from the same brief.",
    includes: [
      "Product scoping and technical architecture",
      "UI/UX design for mobile",
      "Cross-platform or native development",
      "Backend and API development",
      "App store preparation",
      "Post-launch support planning",
    ],
    deliverables: [
      "iOS and Android applications",
      "Cross-platform apps",
      "MVP builds",
      "Backend services and APIs",
      "App store assets",
    ],
    whoFor:
      "Teams launching a new digital product or extending an existing service to mobile.",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    group: "create",
    icon: "PenTool",
    tagline: "Visual design that carries a message.",
    shortDescription:
      "Design work — print, digital, and campaign — that stays consistent with your brand and does its job.",
    problem:
      "Inconsistent visuals dilute a brand and slow teams down. You need design that is both distinctive and reusable.",
    includes: [
      "Visual concepting",
      "Layout and composition",
      "Print and digital collateral",
      "Templated design systems",
      "Asset delivery in production-ready formats",
    ],
    deliverables: [
      "Marketing collateral",
      "Presentation decks",
      "Packaging and print design",
      "Digital ad creative",
      "Design templates",
    ],
    whoFor:
      "Brands that need consistent, high-quality visuals across many touchpoints.",
  },
  {
    slug: "branding",
    name: "Branding",
    group: "create",
    icon: "Sparkles",
    tagline: "Identity systems built to last.",
    shortDescription:
      "Brand strategy and identity design that gives a business a clear, ownable visual and verbal voice.",
    problem:
      "A logo isn't a brand. Without a real system — strategy, voice, and visual identity — brands feel inconsistent and forgettable.",
    includes: [
      "Brand strategy and positioning",
      "Naming support",
      "Logo and identity design",
      "Color, type, and visual systems",
      "Brand guidelines documentation",
      "Voice and messaging framework",
    ],
    deliverables: [
      "Brand strategy document",
      "Logo suite",
      "Brand guidelines",
      "Voice and messaging guide",
      "Core brand assets",
    ],
    whoFor:
      "New businesses defining their identity, or existing brands in need of a considered rebrand.",
  },
  {
    slug: "character-design",
    name: "Character Design",
    group: "create",
    icon: "Shapes",
    tagline: "Custom characters and mascots.",
    shortDescription:
      "Original character and mascot design for brands, products, and campaigns that want a distinct visual voice.",
    problem:
      "Generic stock illustration doesn't build brand recognition. A well-designed original character does.",
    includes: [
      "Concept development and sketches",
      "Character design and refinement",
      "Expression and pose sheets",
      "Style guide for consistent use",
      "Production-ready asset delivery",
    ],
    deliverables: [
      "Original character design",
      "Mascot systems",
      "Expression sheets",
      "Usage guidelines",
    ],
    whoFor:
      "Brands, products, or campaigns that want a memorable, ownable visual character.",
  },
  {
    slug: "illustration",
    name: "Illustration",
    group: "create",
    icon: "Brush",
    tagline: "Custom illustration with a point of view.",
    shortDescription:
      "Custom illustration for brand, editorial, packaging, and campaign use.",
    problem:
      "Stock imagery looks like everyone else's. Custom illustration gives a brand a visual language no one else has.",
    includes: [
      "Concept sketches",
      "Style exploration",
      "Final illustration production",
      "Multiple format delivery",
    ],
    deliverables: [
      "Editorial illustration",
      "Packaging illustration",
      "Web and app illustration sets",
      "Campaign artwork",
    ],
    whoFor:
      "Brands and publishers who want distinctive, custom visuals instead of stock art.",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    group: "grow",
    icon: "Share2",
    tagline: "Consistent, on-brand presence.",
    shortDescription:
      "Planning, content, and day-to-day management for social channels that actually reflect your brand.",
    problem:
      "Posting inconsistently, without strategy, wastes time and rarely builds an audience.",
    includes: [
      "Content strategy and calendar",
      "Content creation and copywriting",
      "Scheduling and publishing",
      "Community engagement",
      "Monthly reporting",
    ],
    deliverables: [
      "Content calendars",
      "Social post design",
      "Captions and copy",
      "Performance reporting",
    ],
    whoFor:
      "Brands that need a consistent, strategic social presence without hiring an in-house team.",
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    group: "grow",
    icon: "PenLine",
    tagline: "Words that sound like you, and work.",
    shortDescription:
      "Website, campaign, and brand copy written to be read, remembered, and acted on.",
    problem:
      "Generic copy blends in. Clear, distinctive writing is what makes people actually read and respond.",
    includes: [
      "Voice and tone development",
      "Website and landing page copy",
      "Campaign and ad copy",
      "Email and lifecycle copy",
      "Editing and proofreading",
    ],
    deliverables: [
      "Website copy",
      "Ad and campaign copy",
      "Email sequences",
      "Brand messaging documents",
    ],
    whoFor:
      "Teams that need copy written with strategy in mind, not filler text.",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    group: "grow",
    icon: "Target",
    tagline: "Paid social built around outcomes.",
    shortDescription:
      "Meta advertising strategy, creative, and campaign management focused on measurable goals.",
    problem:
      "Boosting posts isn't a strategy. Effective paid social needs targeting, creative, and testing built around a clear objective.",
    includes: [
      "Campaign strategy and audience planning",
      "Ad creative production",
      "Campaign setup and launch",
      "Ongoing optimization and testing",
      "Performance reporting",
    ],
    deliverables: [
      "Campaign strategy",
      "Ad creative sets",
      "Audience and targeting plans",
      "Performance reports",
    ],
    whoFor:
      "Businesses ready to invest in paid social with clear goals and budget.",
  },
  {
    slug: "creative-campaign-assets",
    name: "Creative Campaign Assets",
    group: "grow",
    icon: "Layers",
    tagline: "Full campaign creative, on brief.",
    shortDescription:
      "End-to-end creative asset production for launches, promotions, and seasonal campaigns.",
    problem:
      "Campaigns need a lot of coordinated assets, fast — and they all need to feel like one campaign, not scattered pieces.",
    includes: [
      "Campaign concept development",
      "Multi-format asset production",
      "Copy and visual alignment",
      "Delivery across channels and sizes",
    ],
    deliverables: [
      "Campaign key visuals",
      "Social and display ad sets",
      "Landing page creative",
      "Print and out-of-home assets",
    ],
    whoFor:
      "Teams launching a campaign that needs cohesive creative across multiple channels.",
  },
  {
    slug: "virtual-assistance",
    name: "Virtual Assistance",
    group: "support",
    icon: "Headset",
    tagline: "Reliable day-to-day support.",
    shortDescription:
      "Skilled virtual assistance for the operational work that keeps a business moving.",
    problem:
      "Founders and small teams lose hours a week to administrative work that doesn't need to sit on their plate.",
    includes: [
      "Inbox and calendar management",
      "Research and data entry",
      "Document and process support",
      "Coordination across tools and teams",
    ],
    deliverables: [
      "Ongoing administrative support",
      "Process documentation",
      "Scheduling and coordination",
    ],
    whoFor:
      "Founders and teams who need reliable support without a full-time hire.",
  },
  {
    slug: "customer-service",
    name: "Customer Service",
    group: "support",
    icon: "MessageCircle",
    tagline: "Human support for your customers.",
    shortDescription:
      "Responsive, on-brand customer service across the channels your customers actually use.",
    problem:
      "Slow or inconsistent customer support damages trust faster than almost anything else.",
    includes: [
      "Channel setup and workflows",
      "Response and escalation training",
      "Day-to-day customer support",
      "Feedback and issue reporting",
    ],
    deliverables: [
      "Support workflows",
      "Response guidelines",
      "Ongoing customer support coverage",
    ],
    whoFor:
      "Growing businesses that need dependable, on-brand customer support.",
  },
  {
    slug: "executive-support",
    name: "Executive Support",
    group: "support",
    icon: "Briefcase",
    tagline: "A second set of hands at the top.",
    shortDescription:
      "High-level executive support for founders and leadership teams managing growth.",
    problem:
      "As a business grows, leadership time becomes the scarcest resource — and the least protected.",
    includes: [
      "Calendar and priority management",
      "Meeting preparation and follow-up",
      "Cross-team coordination",
      "Confidential document handling",
    ],
    deliverables: [
      "Executive scheduling",
      "Meeting and travel coordination",
      "Ongoing executive support",
    ],
    whoFor:
      "Founders and executives who need dedicated support to protect their time.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}
