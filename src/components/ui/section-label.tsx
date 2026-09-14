interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-hive ${className ?? ""}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-khaki" aria-hidden="true" />
      {children}
    </span>
  );
}
