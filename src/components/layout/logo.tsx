import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-ink" : "text-ivory";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="Quillhive home"
    >
      <Image
        src="/logo.png"
        alt=""
        width={34}
        height={34}
        priority
        className="shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]"
      />
      <span className={`font-heading text-lg font-semibold tracking-tight ${textColor}`}>
        Quillhive
      </span>
    </Link>
  );
}
