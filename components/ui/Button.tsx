import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary-dark" | "secondary-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-navy-950 hover:bg-brand-400 shadow-[var(--shadow-card)]",
  "secondary-dark":
    "border border-white/25 text-white-warm hover:border-brand-400 hover:text-brand-400",
  "secondary-light":
    "border border-gray-200 text-navy-950 hover:border-brand-500 hover:text-brand-700",
};

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-[var(--radius-sm)] px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}
