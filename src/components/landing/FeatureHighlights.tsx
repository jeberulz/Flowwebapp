'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, ChartNoAxesCombined, Bot, Activity, Globe2, RotateCw, BadgeCheck, ShieldCheck, CheckCircle2, Users, Pizza, Film, Dumbbell, Wifi, Wand2, PlusCircle, Play, Flag, Filter, ArrowBigRightDash } from 'lucide-react';
import { Utensils, Plane } from 'lucide-react';

export function FeatureHighlights() {
  return (
    <section className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-20 pr-6 pl-6" id="features">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-[10px]">
          <Sparkles className="h-4 w-4 text-sky-300" />
          <span className="text-sm text-sky-200/90 font-['Poppins']">What makes Flow different</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-4xl md:text-6xl tracking-tight text-white font-semibold font-['Space_Grotesk']">
        Smarter money, zero cringe
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/75 font-normal font-['Poppins']">
        Real‑time insights, instant transfers, and playful automations—made for
        how you live, spend, and save.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 mt-12 gap-x-6 gap-y-6">
        <RealtimeInsightsCard />
        <SpendGloballyCard />
        <SplitBillsCard />
        <AutomationsCard />
      </div>
    </section>
  );
}

function RealtimeInsightsCard() {
  const [foodProgress, setFoodProgress] = useState(0);
  const [travelProgress, setTravelProgress] = useState(0);
  const [animated, setAnimated] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            animateProgress();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const animateProgress = () => {
    const duration = 1100;
    const startTime = performance.now();
    const targetFood = 72;
    const targetTravel = 38;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setFoodProgress(Math.round(targetFood * eased));
      setTravelProgress(Math.round(targetTravel * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section ref={cardRef} className="border-gradient before:rounded-3xl group overflow-hidden rounded-3xl pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-[10px]" id="card-realtime">
      <div className="absolute -right-24 -top-24 bg-sky-500/10 w-72 h-72 rounded-full blur-3xl"></div>

      <div className="border-gradient before:rounded-2xl rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-[10px]">
        <div className="flex items-center gap-2 text-white/85 text-sm mb-3">
          <ChartNoAxesCombined className="h-4 w-4 text-sky-300" />
          <span className="font-medium font-['Poppins']">This month at a glance</span>
        </div>

        <div className="space-y-3">
          {/* Row: Food */}
          <div className="border-gradient before:rounded-xl rounded-xl p-3 backdrop-blur-[10px]">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full grid place-items-center ring-1 ring-white/20 bg-white/5">
                <Utensils className="h-3.5 w-3.5 text-white/80" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90 font-['Poppins']">Food</p>
                  <p className="text-xs text-white/60 font-['Poppins']">$482</p>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300"
                    style={{ width: `${foodProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-white/70 font-['Poppins']">{foodProgress}%</span>
            </div>
            <p className="mt-2 text-[11px] text-white/50 font-['Poppins']">
              Trending +12% vs last month
            </p>
          </div>

          {/* Row: Travel */}
          <div className="border-gradient before:rounded-xl rounded-xl p-3 backdrop-blur-[10px]">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full grid place-items-center ring-1 ring-white/20 bg-white/5">
                <Plane className="h-3.5 w-3.5 text-white/80" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90 font-['Poppins']">Travel</p>
                  <p className="text-xs text-white/60 font-['Poppins']">$260</p>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
                    style={{ width: `${travelProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-white/70 font-['Poppins']">{travelProgress}%</span>
            </div>
            <p className="mt-2 text-[11px] text-white/50 font-['Poppins']">
              Booked flights + stays
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-sky-200 hover:bg-sky-500/20 transition backdrop-blur-[10px] font-['Poppins']">
            <Bot className="h-4 w-4" />
            AI Insights
          </button>
          <div className="flex items-center gap-2 text-[11px] text-white/60 font-['Poppins']">
            <Activity className="h-3.5 w-3.5 text-emerald-300" />
            Live
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl tracking-tight font-semibold font-['Space_Grotesk']">
        Real‑time balance & spend
      </h3>
      <p className="mt-1.5 text-sm text-white/70 font-['Poppins']">
        See where your money goes—instantly. Categories, trends, and nudges
        that help you keep more.
      </p>
    </section>
  );
}

function SpendGloballyCard() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const list = listRef.current;
    const items = Array.from(list.children);
    
    // Clone items for seamless loop
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      list.appendChild(clone);
    });

    let translateY = 0;
    const speed = 0.25;

    const animate = () => {
      translateY += speed;
      const itemHeight = items.reduce((acc, item) => acc + (item as HTMLElement).offsetHeight, 0);
      
      if (translateY >= itemHeight) {
        translateY = 0;
      }

      list.style.transform = `translateY(-${translateY}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="border-gradient before:rounded-3xl group overflow-hidden md:p-6 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-[10px]" id="card-global">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="border-gradient before:rounded-2xl rounded-2xl p-4 backdrop-blur-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/85 text-sm">
            <Globe2 className="h-4 w-4 text-indigo-300" />
            <span className="font-medium font-['Poppins']">Global acceptance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/60 font-['Poppins']">All week</span>
            <RotateCw className="h-4 w-4 text-white/40" />
          </div>
        </div>

        {/* Sliding list */}
        <div className="overflow-hidden h-36 border-gradient before:rounded-xl rounded-xl mt-3">
          <ul ref={listRef} className="relative">
            <li className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/us.svg" className="h-6 w-6 rounded-full ring-1 ring-white/20" alt="US" />
                <div>
                  <p className="text-sm text-white/90 font-['Poppins']">New York</p>
                  <p className="text-[11px] text-white/50 font-['Poppins']">USD • Transit</p>
                </div>
              </div>
              <BadgeCheck className="h-4 w-4 text-emerald-300" />
            </li>
            <li className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/gb.svg" className="h-6 w-6 rounded-full ring-1 ring-white/20" alt="UK" />
                <div>
                  <p className="text-sm text-white/90 font-['Poppins']">London</p>
                  <p className="text-[11px] text-white/50 font-['Poppins']">GBP • Coffee</p>
                </div>
              </div>
              <ShieldCheck className="h-4 w-4 text-sky-300" />
            </li>
            <li className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/jp.svg" className="h-6 w-6 rounded-full ring-1 ring-white/20" alt="JP" />
                <div>
                  <p className="text-sm text-white/90 font-['Poppins']">Tokyo</p>
                  <p className="text-[11px] text-white/50 font-['Poppins']">JPY • Shop</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-amber-300" />
            </li>
          </ul>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60 font-['Poppins']">
          <Globe2 className="h-3.5 w-3.5" />
          Multilingual, multi‑currency, no FX markups
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl tracking-tight font-semibold font-['Space_Grotesk']">
        Spend globally
      </h3>
      <p className="mt-1.5 text-sm text-white/70 font-['Poppins']">
        Tap anywhere. Transparent rates, instant notifications, and
        automatic receipts.
      </p>
    </section>
  );
}

function SplitBillsCard() {
  return (
    <section id="card-split" className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 backdrop-blur-[10px]">
      <div className="-right-24 -bottom-24 bg-emerald-500/10 w-72 h-72 rounded-full absolute blur-3xl"></div>

      <div className="border-gradient before:rounded-2xl rounded-2xl p-4 backdrop-blur-[10px]">
        <div className="flex items-center gap-2 text-white/85 text-sm">
          <Users className="h-4 w-4 text-emerald-300" />
          <span className="font-medium font-['Poppins']">Split in seconds</span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-3">
          <div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 backdrop-blur-[10px]">
            <Pizza className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70 font-['Poppins']">Food</span>
          </div>
          <div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 backdrop-blur-[10px]">
            <Film className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70 font-['Poppins']">Movies</span>
          </div>
          <div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 backdrop-blur-[10px]">
            <Dumbbell className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70 font-['Poppins']">Gym</span>
          </div>
          <div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 backdrop-blur-[10px]">
            <Wifi className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70 font-['Poppins']">Wi‑Fi</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&auto=format&fit=crop" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" alt="Teammate" />
            <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&auto=format&fit=crop" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" alt="Teammate" />
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&auto=format&fit=crop" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" alt="Teammate" />
            <div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-[#0a0a0b] grid place-items-center text-[10px] text-white/70 font-['Poppins']">
              +9
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] text-white/60 font-['Poppins']">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Active now
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl tracking-tight font-semibold font-['Space_Grotesk']">
        Split bills, chill vibes
      </h3>
      <p className="mt-1.5 text-sm text-white/70 font-['Poppins']">
        Start a group, add a purchase, and Flow does the math. Everyone pays
        their share.
      </p>
    </section>
  );
}

function AutomationsCard() {
  return (
    <section className="border-gradient before:rounded-3xl group overflow-hidden md:p-6 backdrop-blur-[10px] rounded-3xl pt-5 pr-5 pb-5 pl-5 relative" id="card-automation">
      <div className="-left-24 -bottom-24 bg-amber-500/10 w-72 h-72 rounded-full absolute blur-3xl"></div>

      <div className="border-gradient before:rounded-2xl overflow-hidden rounded-2xl px-4 py-4 relative">
        <div className="flex items-center justify-between text-white/85 text-sm">
          <div className="flex items-center gap-2">
            <Wand2 className="h-4 w-4 text-amber-300" />
            <span className="font-medium font-['Poppins']">Money Rules</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-white/85 hover:bg-white/10 transition backdrop-blur-[10px] font-['Poppins']">
              <PlusCircle className="h-3.5 w-3.5" />
              New rule
            </button>
            <button className="border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-emerald-200 hover:bg-emerald-500/20 transition backdrop-blur-[10px] font-['Poppins']">
              <Play className="h-3.5 w-3.5" />
              Run once
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="border-gradient before:rounded-xl relative rounded-xl p-3 backdrop-blur-[10px]">
            <div className="flex items-center gap-2 text-xs text-white/85 font-['Poppins']">
              <Flag className="h-4 w-4 text-amber-300" />
              Trigger
            </div>
            <p className="mt-2 text-xs text-white/70 font-['Poppins']">Paycheck received</p>
          </div>
          <div className="border-gradient before:rounded-xl relative rounded-xl p-3 backdrop-blur-[10px]">
            <div className="flex items-center gap-2 text-xs text-white/85 font-['Poppins']">
              <Filter className="h-4 w-4 text-white/70" />
              Condition
            </div>
            <p className="mt-2 text-xs text-white/70 font-['Poppins']">Amount ≥ $500</p>
          </div>
          <div className="border-gradient before:rounded-xl relative rounded-xl p-3 backdrop-blur-[10px]">
            <div className="flex items-center gap-2 text-xs text-white/85 font-['Poppins']">
              <ArrowBigRightDash className="h-4 w-4 text-emerald-300" />
              Action
            </div>
            <p className="mt-2 text-xs text-white/70 font-['Poppins']">Move 20% → Savings</p>
          </div>
        </div>
        <pre className="text-[11px] leading-relaxed border-gradient before:rounded-xl overflow-x-auto text-white/85 bg-white/5 rounded-xl mt-4 px-3 py-3 font-['Poppins']">{`when paycheck.received then
  if amount >= 500
    transfer(0.2, 'Savings')
    notify('@you', 'Saved 20% 🎉')
end`}</pre>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl tracking-tight font-semibold font-['Space_Grotesk']">
        Automate your money
      </h3>
      <p className="mt-1.5 text-sm text-white/70 font-['Poppins']">
        Build if‑this‑then‑that rules: pay bills, stash savings, freeze
        cards—hands‑free.
      </p>
    </section>
  );
}
