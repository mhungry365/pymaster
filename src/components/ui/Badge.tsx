import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "cyan" | "purple" | "green" | "amber" | "slate";
  className?: string;
};

const variants = {
  cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  purple: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  green: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  slate: "border-white/10 bg-white/5 text-slate-300",
};

export function Badge({ children, variant = "slate", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
