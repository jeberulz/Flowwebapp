import { Download } from 'lucide-react';

export function LandingHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="border-gradient before:rounded-xl inline-flex items-center gap-2 rounded-xl px-3 py-2" style={{ '--fx-filter': 'blur(10px)_liquid-glass(5,10)_saturate(1.2)_noise(0.5,1,0)' } as React.CSSProperties}>
          <div className="h-5 w-5 rounded-md bg-emerald-400/20 grid place-items-center"></div>
          <span className="text-sm tracking-tight font-['Poppins']">Flow</span>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-6 text-sm">
        <a className="text-white/60 hover:text-white transition-colors font-['Poppins']" href="#features">
          Features
        </a>
        <a className="text-white/60 hover:text-white transition-colors font-['Poppins']" href="#security">
          Security
        </a>
        <a className="text-white/60 hover:text-white transition-colors font-['Poppins']" href="#pricing">
          Pricing
        </a>
        <button className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors hover:bg-white/10" style={{ '--fx-filter': 'blur(10px)_liquid-glass(5,10)_saturate(1.2)_noise(0.5,1,0)' } as React.CSSProperties}>
          <Download className="h-4 w-4" />
          <span className="tracking-tight font-['Poppins']">Get the app</span>
        </button>
      </div>
    </div>
  );
}
