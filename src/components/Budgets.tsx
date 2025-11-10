import { PieChart } from 'lucide-react';

const budgets = [
  { name: 'Groceries', spent: 322, total: 500, percent: 64, color: 'from-emerald-400 to-teal-500' },
  { name: 'Entertainment', spent: 148, total: 200, percent: 74, color: 'from-amber-400 to-orange-500' },
  { name: 'Rides', spent: 89, total: 180, percent: 49, color: 'from-sky-400 to-blue-500' }
];

export function Budgets() {
  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2 text-white/90">
          <PieChart className="h-4.5 w-4.5 text-purple-300" />
          <span className="font-medium">Budgets</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          {budgets.map((budget) => (
            <div key={budget.name}>
              <div className="flex items-center justify-between">
                <span>{budget.name}</span>
                <span className="text-white/80">${budget.spent} / ${budget.total}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${budget.color}`} 
                  style={{ width: `${budget.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
