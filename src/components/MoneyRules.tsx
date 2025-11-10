import { useState } from 'react';
import { Wand2, Flag, Filter, PlusCircle } from 'lucide-react';

const rules = [
  {
    id: 1,
    icon: Flag,
    iconColor: 'text-emerald-300',
    iconBg: 'bg-emerald-400/10',
    title: 'Paycheck received → Move 20% to Savings',
    description: 'Runs automatically • Last run 3d ago',
    enabled: true
  },
  {
    id: 2,
    icon: Filter,
    iconColor: 'text-sky-300',
    iconBg: 'bg-sky-400/10',
    title: 'If merchant contains "Ride", tag Transit',
    description: 'Keeps budgets accurate',
    enabled: false
  }
];

export function MoneyRules() {
  const [enabledRules, setEnabledRules] = useState<Record<number, boolean>>(
    rules.reduce((acc, rule) => ({ ...acc, [rule.id]: rule.enabled }), {})
  );

  const toggleRule = (id: number) => {
    setEnabledRules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <Wand2 className="h-4.5 w-4.5 text-amber-300" />
            <span className="font-medium">Money rules</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 hover:bg-white/10">
            <PlusCircle className="h-3.5 w-3.5" />
            New rule
          </button>
        </div>
        <ul className="mt-3 grid gap-2">
          {rules.map((rule) => {
            const Icon = rule.icon;
            const isEnabled = enabledRules[rule.id];
            return (
              <li key={rule.id} className="flex items-center justify-between gap-3 rounded-xl p-3 ring-1 ring-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 grid place-items-center rounded-lg ${rule.iconBg} ring-1 ring-white/10`}>
                    <Icon className={`h-4 w-4 ${rule.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-medium">{rule.title}</p>
                    <p className="text-xs text-white/70">{rule.description}</p>
                  </div>
                </div>
                <button 
                  role="switch" 
                  aria-checked={isEnabled}
                  onClick={() => toggleRule(rule.id)}
                  className={`h-8 w-14 rounded-full ring-1 ring-white/10 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 transition-colors ${
                    isEnabled ? 'bg-emerald-500/30' : 'bg-white/10'
                  }`}
                >
                  <span className="sr-only">Toggle rule</span>
                  <span className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform ${
                    isEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
