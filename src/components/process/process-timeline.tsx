import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
      <div
        className={cn(
          "absolute left-0 right-0 top-6 hidden h-px md:block",
          isDark ? "bg-ivory/15" : "bg-ink/10",
        )}
        aria-hidden="true"
      />
      {processSteps.map((step, i) => (
        <Reveal key={step.index} delay={i * 0.08}>
          <li className="relative flex flex-col gap-3">
            <div
              className={cn(
                "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-heading text-sm font-semibold",
                isDark
                  ? "border-khaki/40 bg-ink text-khaki"
                  : "border-khaki/50 bg-ivory text-hive",
              )}
            >
              {step.index}
            </div>
            <h3
              className={cn(
                "font-heading text-lg font-medium",
                isDark ? "text-ivory" : "text-ink",
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-ivory/60" : "text-ink/60",
              )}
            >
              {step.description}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
