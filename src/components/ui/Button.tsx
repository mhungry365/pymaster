import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  type?: "button" | "submit" | "reset";
};

const variants = {
  primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  secondary: "border border-slate-200 bg-white text-slate-950 hover:bg-slate-100",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
  danger: "border border-red-400/30 bg-red-500/10 text-red-200 hover:bg-red-500/20",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
