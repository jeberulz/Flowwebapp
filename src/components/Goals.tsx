import { Flag, PlusCircle } from 'lucide-react';

const goals = [
  { name: 'Emergency fund', current: 680, target: 1000, percent: 68, color: '#34d399' },
  { name: 'Trip to Tokyo', current: 840, target: 2000, percent: 42, color: '#60a5fa' }
];

export function Goals() {
  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <Flag className="h-4.5 w-4.5 text-emerald-300" />
            <span className="font-medium">Savings goals</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 hover:bg-white/10">
            <PlusCircle className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {goals.map((goal) => (
            <div key={goal.name} className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
              <div 
                className="size-20 rounded-full mx-auto relative"
                style={{
                  background: `conic-gradient(${goal.color} 0% ${goal.percent}%, rgba(255,255,255,0.12) ${goal.percent}% 100%)`
                }}
              >
                <div className="absolute inset-2 rounded-full bg-black/40 ring-1 ring-white/10"></div>
              </div>
              <p className="mt-3 font-medium text-center">{goal.name}</p>
              <p className="text-xs text-white/70 text-center">${goal.current} / ${goal.target}</p>
              <button className="mt-3 w-full rounded-lg px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
                Deposit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
