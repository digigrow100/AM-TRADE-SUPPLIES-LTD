import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outlineLight";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-navy hover:bg-accent-hover",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  outlineLight: "border-2 border-white text-white hover:bg-white hover:text-navy",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
