interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'external' | 'default' | 'active' | 'frozen';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-emerald-400/10 ring-emerald-400/20 text-emerald-200',
    external: 'bg-white/10 ring-white/10 text-white/80',
    default: 'bg-white/10 ring-white/10 text-white/80',
    active: 'bg-emerald-400/10 ring-emerald-400/20 text-emerald-200',
    frozen: 'bg-sky-400/10 ring-sky-400/20 text-sky-200'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ring-1 ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
