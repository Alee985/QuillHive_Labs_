export interface TeamSlot {
  role: string;
  discipline: string;
}

export const teamSlots: TeamSlot[] = [
  { role: "Strategy Lead", discipline: "Strategy & Planning" },
  { role: "Design Lead", discipline: "Brand & Visual Design" },
  { role: "Engineering Lead", discipline: "Web & App Development" },
  { role: "Content Lead", discipline: "Copy & Marketing" },
  { role: "Client Support Lead", discipline: "Business Support" },
];

export const processPhilosophy = [
  {
    title: "One Team, Many Skills",
    description:
      "Instead of managing multiple freelancers or agencies, you work with one coordinated team across every discipline.",
  },
  {
    title: "Strategy Meets Execution",
    description:
      "Ideas are not enough. We help turn them into actual digital products and campaigns.",
  },
  {
    title: "Creative + Technical",
    description:
      "Design and engineering work together from day one, instead of existing in separate silos.",
  },
  {
    title: "Built Around Your Goals",
    description:
      "We don't sell a menu of random services. We solve specific business problems.",
  },
  {
    title: "Human Support",
    description:
      "You work with people who understand the context behind the work, not a rotating queue of contractors.",
  },
];
