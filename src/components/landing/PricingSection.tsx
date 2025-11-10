import { CheckCircle2 } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-16 md:pt-24" id="pricing">
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl tracking-tight font-semibold font-['Space_Grotesk']">
          Simple, transparent pricing
        </h3>
        <p className="mt-3 text-white/65 font-['Poppins']">Start free. Upgrade anytime.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Lite */}
        <div className="border-gradient before:rounded-3xl rounded-3xl p-6 backdrop-blur-[10px]">
          <h4 className="text-lg font-medium font-['Poppins']">Lite</h4>
          <p className="mt-1 text-sm text-white/65 font-['Poppins']">Everyday essentials</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold font-['Space_Grotesk']">$0</span>
            <span className="text-white/60 font-['Poppins']">/mo</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              No monthly fees
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Instant transfers
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Round‑ups
            </li>
          </ul>
          <button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition font-['Poppins']">
            Get Flow
          </button>
        </div>

        {/* Plus */}
        <div className="border-gradient before:rounded-3xl relative rounded-3xl p-6 backdrop-blur-[10px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-amber-200 backdrop-blur-[10px] font-['Poppins']">
            Popular
          </div>
          <h4 className="text-lg font-medium font-['Poppins']">Plus</h4>
          <p className="mt-1 text-sm text-white/65 font-['Poppins']">More power & perks</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold font-['Space_Grotesk']">$5</span>
            <span className="text-white/60 font-['Poppins']">/mo</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              2% APY boost
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Priority support
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Premium virtual cards
            </li>
          </ul>
          <button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition font-['Poppins']">
            Start trial
          </button>
        </div>

        {/* Max */}
        <div className="border-gradient before:rounded-3xl rounded-3xl p-6 backdrop-blur-[10px]">
          <h4 className="text-lg font-medium font-['Poppins']">Max</h4>
          <p className="mt-1 text-sm text-white/65 font-['Poppins']">For power users</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold font-['Space_Grotesk']">$15</span>
            <span className="text-white/60 font-['Poppins']">/mo</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Highest APY boost
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Travel insurance
            </li>
            <li className="flex items-center gap-2 font-['Poppins']">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Enhanced automations
            </li>
          </ul>
          <button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-white/15 backdrop-blur-[10px] font-['Poppins']">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
