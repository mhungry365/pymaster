type SkillPillProps = {
  skill: string;
};

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-100/60 px-3 py-1 text-xs font-semibold text-slate-600">
      {skill}
    </span>
  );
}
