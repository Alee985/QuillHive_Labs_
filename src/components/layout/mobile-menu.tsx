"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-khaki"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 border-t border-ink/10 bg-ivory/98 px-6 py-8 shadow-lg backdrop-blur"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block border-b border-ink/5 py-4 text-2xl font-heading font-medium text-ink transition-colors hover:text-hive"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <MagneticButton href="/contact" className="mt-6 w-full">
              Let&apos;s Work Together
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
