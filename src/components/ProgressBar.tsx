interface ProgressBarProps {
  current: number;
  target: number;
  label?: string;
  colorClass?: string;
}

export function ProgressBar({ current, target, label, colorClass = 'from-sky-400 to-blue-500' }: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / target) * 100), 100);

  return (
    <div className="rounded-xl p-3 ring-1 ring-white/10 bg-white/5">
      <div className="flex items-center justify-between text-xs text-white/75">
        <span>{label || `Goal: $${target.toLocaleString()}`}</span>
        <span>{percentage}% complete</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
