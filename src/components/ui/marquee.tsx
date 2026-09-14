"use client";

import { useReducedMotion } from "framer-motion";
import { Fragment } from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function Marquee({ items, className, speed = 28 }: MarqueeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`group overflow-hidden ${className ?? ""}`}>
      <div
        className={reduceMotion ? "flex flex-wrap gap-8" : "flex w-max gap-8 animate-marquee group-hover:[animation-play-state:paused]"}
        style={reduceMotion ? undefined : { animationDuration: `${speed}s` }}
      >
        {(reduceMotion ? [items] : [items, items]).map((set, setIndex) => (
          <Fragment key={setIndex}>
            {set.map((item, i) => (
              <span
                key={`${setIndex}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap text-lg font-medium text-ink/60"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-khaki" aria-hidden="true" />
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
