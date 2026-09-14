export type ProjectCategory =
  | "Brand Identity"
  | "Website"
  | "Mobile App"
  | "Social Campaign"
  | "Illustration"
  | "Marketing Campaign";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  label: "Concept Project" | "Sample Work";
  shortDescription: string;
  overview: string;
  challenge: string;
  strategy: string;
  creativeDirection: string;
  design: string;
  development: string;
  results: string;
  tools: string[];
  accent: "khaki" | "hive" | "ink";
}

export const projects: Project[] = [
  {
    slug: "solstice-brand-identity",
    name: "Solstice",
    category: "Brand Identity",
    label: "Concept Project",
    shortDescription:
      "A speculative identity system for an independent solar-goods studio.",
    overview:
      "Solstice is a concept brand exploring what a considered identity system looks like for a small, design-led hardware studio. This project was developed independently to demonstrate our branding process — it does not represent a real client.",
    challenge:
      "Design an identity that feels precise and technical without losing warmth — a common tension for physical-product brands.",
    strategy:
      "Position the brand around clarity and craftsmanship: a restrained mark, a single confident accent color, and a type system built for both packaging and digital use.",
    creativeDirection:
      "A geometric wordmark paired with a radiant mark motif, used sparingly. Photography direction leans toward natural light and material detail.",
    design:
      "Logo suite, color and type system, packaging mockups, and a condensed brand guideline set covering usage rules.",
    development: "Not applicable — identity and print-focused engagement.",
    results:
      "As a concept project, no real performance results are reported here.",
    tools: ["Figma", "Adobe Illustrator"],
    accent: "khaki",
  },
  {
    slug: "northloop-website",
    name: "Northloop",
    category: "Website",
    label: "Concept Project",
    shortDescription:
      "A speculative marketing site for a fictional logistics-software company.",
    overview:
      "Northloop is a concept website built to demonstrate our approach to B2B marketing sites — clear structure, fast performance, and design that supports a sales conversation. No real company by this name is affiliated with Quillhive.",
    challenge:
      "B2B software sites often bury the actual product behind vague messaging. The goal was clarity without sacrificing visual craft.",
    strategy:
      "Lead with a specific, outcome-focused headline structure per page, and use product-style visuals instead of generic illustration.",
    creativeDirection:
      "Clean grid system, restrained color palette, UI-inspired graphic elements pulled from the (fictional) product itself.",
    design:
      "Full page-by-page design system in Figma, including responsive breakpoints and component states.",
    development:
      "Built as a static Next.js prototype to test real-world performance and responsiveness.",
    results:
      "As a concept project, no real traffic or conversion results are reported here.",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    accent: "hive",
  },
  {
    slug: "wayfarer-app",
    name: "Wayfarer",
    category: "Mobile App",
    label: "Concept Project",
    shortDescription:
      "A concept travel-planning app exploring collaborative itinerary building.",
    overview:
      "Wayfarer is a speculative mobile app concept designed to demonstrate our product design and app-development process for a collaborative trip-planning tool.",
    challenge:
      "Group trip planning is usually scattered across chats and spreadsheets. The concept explores a single shared space for planning without added friction.",
    strategy:
      "Focus the core experience on a shared itinerary timeline, with lightweight tools for voting and notes rather than a heavy feature set.",
    creativeDirection:
      "Warm, map-inspired visual language with a simple iconography system built for quick scanning.",
    design:
      "Full mobile UI kit, prototype flows, and a small design system for iOS and Android.",
    development:
      "Interactive prototype built to validate core flows before any production engineering.",
    results:
      "As a concept project, no real usage or download results are reported here.",
    tools: ["Figma", "React Native (prototype)"],
    accent: "ink",
  },
  {
    slug: "fernway-social-campaign",
    name: "Fernway",
    category: "Social Campaign",
    label: "Concept Project",
    shortDescription:
      "A concept seasonal social campaign for an independent plant-goods brand.",
    overview:
      "Fernway is a concept social campaign created to showcase campaign-level thinking — concept, content system, and rollout plan — for a seasonal product launch.",
    challenge:
      "Seasonal launches often produce disconnected one-off posts instead of a campaign that builds over time.",
    strategy:
      "Build a content system around one core visual idea, rolled out across a defined content calendar with clear content pillars.",
    creativeDirection:
      "Soft, natural color palette with a recurring illustrated motif tying every post back to the campaign concept.",
    design:
      "Templated post system, story templates, and a launch-week content calendar.",
    development: "Not applicable — content and social-strategy engagement.",
    results:
      "As a concept project, no real engagement or sales results are reported here.",
    tools: ["Figma", "Adobe Photoshop"],
    accent: "khaki",
  },
  {
    slug: "marrow-illustration-set",
    name: "Marrow",
    category: "Illustration",
    label: "Concept Project",
    shortDescription:
      "An original editorial illustration set exploring texture and line work.",
    overview:
      "Marrow is a self-directed illustration series developed to demonstrate original illustration style and range, independent of any client brief.",
    challenge:
      "Show a distinct illustrative voice that could plausibly extend across editorial, packaging, and digital use cases.",
    strategy:
      "Build a small, cohesive set exploring one consistent line and texture treatment across varied subject matter.",
    creativeDirection:
      "Hand-drawn linework layered with digital texture, restrained color, high contrast composition.",
    design: "A set of standalone illustrations plus a short usage rationale.",
    development: "Not applicable — illustration-only engagement.",
    results: "Not applicable — self-directed creative work.",
    tools: ["Procreate", "Adobe Photoshop"],
    accent: "ink",
  },
  {
    slug: "amberlane-marketing-campaign",
    name: "Amberlane",
    category: "Marketing Campaign",
    label: "Concept Project",
    shortDescription:
      "A concept integrated marketing campaign for a fictional home-goods launch.",
    overview:
      "Amberlane is a concept integrated campaign built to demonstrate how strategy, creative, and paid media planning come together for a product launch.",
    challenge:
      "Launch campaigns often treat channels separately. The concept explores one campaign idea translated consistently across paid, organic, and on-site touchpoints.",
    strategy:
      "Define one campaign message and visual system, then adapt it deliberately for paid social, landing page, and email — rather than repurposing the same asset everywhere.",
    creativeDirection:
      "Warm, tactile visual direction with a consistent key visual anchoring every channel execution.",
    design:
      "Key visual system, landing page design, paid social creative, and email templates.",
    development:
      "Landing page prototyped to demonstrate the on-site campaign experience.",
    results:
      "As a concept project, no real campaign performance results are reported here.",
    tools: ["Figma", "Meta Ads Manager (planning)", "Next.js"],
    accent: "hive",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
