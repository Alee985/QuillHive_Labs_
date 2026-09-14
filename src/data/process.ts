export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We start by understanding the business, the audience, the goals, and the actual problem we're solving — not just the brief as written.",
  },
  {
    index: "02",
    title: "Strategize",
    description:
      "We define the right creative and technical direction, and align on what success looks like before any production starts.",
  },
  {
    index: "03",
    title: "Create",
    description:
      "Design, writing, and development happen together — strategy, creative, and code informing each other in real time.",
  },
  {
    index: "04",
    title: "Refine",
    description:
      "We review, test, and improve the work against the original goals, not just against internal taste.",
  },
  {
    index: "05",
    title: "Launch & Grow",
    description:
      "We launch the work, then keep optimizing — a launch is a starting point, not a finish line.",
  },
];
