"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-ink/10 bg-ivory/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "relative text-sm font-medium text-ink/80 transition-colors hover:text-ink",
                pathname === item.href && "text-ink",
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-khaki" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton href="/contact">Let&apos;s Work Together</MagneticButton>
        </div>

        <MobileMenu />
      </div>
    </motion.header>
  );
}
