type XPBadgeProps = {
  xp: number;
};

export function XPBadge({ xp }: XPBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
      {xp} XP
    </span>
  );
}
