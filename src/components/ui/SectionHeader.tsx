import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`}>
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-cyan-300">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-black text-slate-950">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-slate-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}
