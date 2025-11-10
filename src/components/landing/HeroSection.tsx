import { PiggyBank, Send, Globe2, CreditCard, Play } from 'lucide-react';
import { TestimonialsCarousel } from './TestimonialsCarousel';

export function HeroSection({ onNavigateToDashboard }: { onNavigateToDashboard?: () => void }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mt-10 md:mt-16">
      {/* Left: Hero content */}
      <div className="lg:col-span-5">
        <div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 backdrop-blur-[10px]">
          <div className="h-6 w-6 grid place-items-center rounded-xl bg-emerald-500/10 text-emerald-300"></div>
          <span className="text-xs text-white/80 font-['Poppins']">
            Bank-grade security. Instant everything.
          </span>
        </div>

        <h1 className="sm:text-6xl md:text-7xl leading-[0.95] text-5xl font-semibold text-white tracking-tight font-['Space_Grotesk'] mt-5">
          Money that moves{' '}
          <span className="text-transparent bg-clip-text font-semibold" style={{ backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.65))' }}>
            with your life
          </span>
        </h1>

        <p className="sm:text-base leading-relaxed text-sm text-white/70 max-w-lg mt-5 font-['Poppins']">
          Flow is the all-in-one card and smart wallet for Gen Z. Get paid
          early, auto‑save with round‑ups, split bills in seconds, and spend
          globally—no hidden fees.
        </p>

        {/* Feature chips */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center backdrop-blur-[10px]">
            <PiggyBank className="h-4 w-4" />
            <span className="text-xs text-white/80 font-['Poppins']">Auto‑savings</span>
          </div>
          <div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center backdrop-blur-[10px]">
            <Send className="h-4 w-4" />
            <span className="text-xs text-white/80 font-['Poppins']">Pay anyone</span>
          </div>
          <div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center backdrop-blur-[10px]">
            <Globe2 className="h-4 w-4" />
            <span className="text-xs text-white/80 font-['Poppins']">No FX fees</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button 
            onClick={onNavigateToDashboard}
            className="border-gradient before:rounded-2xl group inline-flex hover:bg-white sm:px-5 transition-all hover:-translate-y-0.5 text-sm font-medium text-zinc-900 tracking-tight bg-zinc-100 rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center justify-center"
          >
            <CreditCard className="h-4 w-4" />
            <span className="font-['Poppins']">Get your card</span>
          </button>
          <button className="border-gradient before:rounded-2xl group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm text-white tracking-tight rounded-2xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-[10px] gap-2 items-center justify-center">
            <Play className="h-4 w-4" />
            <span className="font-['Poppins']">See how it works</span>
          </button>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Mini metrics */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
          <div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] flex flex-col rounded-3xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-[10px] items-center justify-center">
            <div className="text-xs text-white/70 font-['Poppins'] text-center">APR Boost</div>
            <div className="text-lg font-medium text-white tracking-tight font-['Poppins'] mt-1 text-center">
              4.25%
            </div>
          </div>
          <div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] flex flex-col rounded-3xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-[10px] items-center justify-center">
            <div className="text-xs text-white/70 font-['Poppins']">Fees saved</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white font-['Poppins']">
              $184/yr
            </div>
          </div>
          <div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] flex flex-col rounded-3xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-[10px] items-center justify-center">
            <div className="text-xs text-white/70 font-['Poppins']">Pay early</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white font-['Poppins']">
              +2 days
            </div>
          </div>
        </div>
      </div>

      {/* Right: Interactive grid + floating glass cards */}
      <div className="lg:col-span-7">
        <TestimonialsCarousel />
      </div>
    </section>
  );
}