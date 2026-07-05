type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
  className?: string;
};

export function ProgressBar({ value, max = 100, label, className = "" }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={className}>
      {label && (
        <div className="mb-2 flex justify-between text-sm text-slate-600">
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}

      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
