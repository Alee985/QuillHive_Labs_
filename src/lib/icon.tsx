import * as icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const IconComponent = (icons as unknown as Record<string, icons.LucideIcon>)[
    name
  ];

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
