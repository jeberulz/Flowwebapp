import { Wallet, TrendingUp, ChartNoAxesCombined, CalendarClock, Globe2 } from 'lucide-react';

interface OverviewCardsProps {
  onQuickPay: () => void;
}

export function OverviewCards({ onQuickPay }: OverviewCardsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {/* Balance */}
      <div className="md:col-span-6 lg:col-span-7 rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <div className="rounded-3xl p-5 md:p-6 ring-1 ring-white/10 bg-white/5 relative overflow-hidden backdrop-blur-md">
          <div className="absolute -right-24 -top-24 bg-emerald-500/10 w-72 h-72 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/90">
              <Wallet className="h-4.5 w-4.5 text-emerald-300" />
              <span className="font-medium">Total balance</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-300">
              <TrendingUp className="h-4 w-4" />
              <span>+$264 today</span>
            </div>
          </div>

          <div className="mt-3 md:mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">$12,482.33</div>
              <p className="text-white/70 mt-1">Checking • 2 accounts linked</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
                <button className="rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-3.5 py-2 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
                  Add money
                </button>
              </div>
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
                <button 
                  onClick={onQuickPay}
                  className="rounded-xl hover:bg-white/10 px-3.5 py-2 text-white transition ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>

          {/* Mini sparkline */}
          <div className="mt-5 h-16 w-full rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden relative" aria-hidden="true">
            <div className="absolute inset-0 opacity-60" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0))' }}></div>
            <svg viewBox="0 0 400 64" className="h-full w-full text-emerald-300/80" role="img" aria-label="Balance trend">
              <path d="M0,48 C40,40 60,60 100,36 C140,12 160,48 200,28 C240,8 260,26 300,18 C340,10 360,14 400,8" fill="none" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-white/80">
            <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/[0.06]">
              <div>APY Boost</div>
              <div className="mt-0.5 font-medium text-white">4.25%</div>
            </div>
            <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/[0.06]">
              <div>Upcoming bills</div>
              <div className="mt-0.5 font-medium text-white">$842</div>
            </div>
            <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/[0.06]">
              <div>Cashback</div>
              <div className="mt-0.5 font-medium text-white">$18.90</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spending this month */}
      <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-4">
        <div className="col-span-2 rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/90">
                <ChartNoAxesCombined className="h-4.5 w-4.5 text-sky-300" />
                <span className="font-medium">Spending this month</span>
              </div>
              <span className="text-xs text-white/70">Aug 1–Today</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { label: 'Food', amount: '$482', spent: 72, budget: '$670', color: 'from-sky-400 to-blue-500' },
                { label: 'Travel', amount: '$260', spent: 38, budget: '$680', color: 'from-emerald-400 to-teal-500' },
                { label: 'Subscriptions', amount: '$112', spent: 44, budget: '$250', color: 'from-amber-400 to-orange-500' }
              ].map((cat) => (
                <div key={cat.label} className="rounded-xl p-3 ring-1 ring-white/10 bg-white/[0.06]">
                  <div className="text-xs text-white/75">{cat.label}</div>
                  <div className="mt-1 text-lg font-medium text-white">{cat.amount}</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
                    <div className={`h-full rounded-full bg-gradient-to-r ${cat.color}`} style={{ width: `${cat.spent}%` }}></div>
                  </div>
                  <p className="mt-1 text-[11px] text-white/70">{cat.spent}% of {cat.budget}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pay early & FX */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-4 ring-1 ring-white/10 bg-white/5 h-full backdrop-blur-md">
            <div className="flex items-center gap-2 text-white/90">
              <CalendarClock className="h-4.5 w-4.5 text-emerald-300" />
              <span className="font-medium">Pay early</span>
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">+2 days</div>
            <p className="mt-1 text-white/75">You're on track to get your next paycheck early.</p>
          </div>
        </div>
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-4 ring-1 ring-white/10 bg-white/5 h-full backdrop-blur-md">
            <div className="flex items-center gap-2 text-white/90">
              <Globe2 className="h-4.5 w-4.5 text-indigo-300" />
              <span className="font-medium">Spend globally</span>
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">0% FX</div>
            <p className="mt-1 text-white/75">No hidden markups on international purchases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
