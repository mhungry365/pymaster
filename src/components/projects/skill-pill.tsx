type SkillPillProps = {
  skill: string;
};

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-300">
      {skill}
    </span>
  );
}
