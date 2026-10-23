import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-navy-900 text-white hover:bg-navy-800",
  accent: "bg-bubblegum text-white hover:brightness-110",
  ghost: "bg-white text-navy-900 hover:bg-brand-50 shadow-soft",
};

export default function Button({ to, children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-base font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}