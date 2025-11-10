import { useState } from 'react';
import { CreditCard, Plus, Eye, EyeOff, Copy, Snowflake } from 'lucide-react';

export function CardPreview() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [toast, setToast] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('4242424242424242');
      setToast('Card number copied');
    } catch {
      setToast('Copy failed');
    }
    setTimeout(() => setToast(''), 1200);
  };

  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 relative overflow-hidden backdrop-blur-md">
        <div className="absolute -right-24 -top-24 bg-indigo-500/10 w-72 h-72 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <CreditCard className="h-4.5 w-4.5 text-indigo-300" />
            <span className="font-medium">My cards</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 hover:bg-white/10">
            <Plus className="h-3.5 w-3.5" />
            Virtual card
          </button>
        </div>

        {/* Card preview */}
        <div className="mt-3 rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-2xl p-4 ring-1 ring-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-white/75">Flow • Virtual</div>
                <div className="text-lg font-medium tracking-tight mt-1">•••• 9012</div>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Card network" className="h-6 opacity-80" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button 
                onClick={() => setIsRevealed(!isRevealed)}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                {isRevealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                Reveal
              </button>
              <button 
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <Copy className="h-4 w-4" />
                Copy
              </button>
            </div>

            {/* Freeze */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Snowflake className="h-4 w-4 text-white/75" />
                Freeze card
              </div>
              <button 
                role="switch" 
                aria-checked={isFrozen}
                onClick={() => setIsFrozen(!isFrozen)}
                className={`h-8 w-14 rounded-full ring-1 ring-white/10 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 transition-colors ${
                  isFrozen ? 'bg-emerald-500/30' : 'bg-white/10'
                }`}
              >
                <span className="sr-only">Toggle freeze card</span>
                <span className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform ${
                  isFrozen ? 'translate-x-6' : 'translate-x-0'
                }`}></span>
              </button>
            </div>

            {/* Details (revealed) */}
            {isRevealed && (
              <dl className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
                  <dt className="text-xs text-white/70">Number</dt>
                  <dd className="text-white mt-1">4242 4242 4242 4242</dd>
                </div>
                <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
                  <dt className="text-xs text-white/70">CVV</dt>
                  <dd className="text-white mt-1">123</dd>
                </div>
                <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
                  <dt className="text-xs text-white/70">Expiry</dt>
                  <dd className="text-white mt-1">12/27</dd>
                </div>
                <div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
                  <dt className="text-xs text-white/70">Zip</dt>
                  <dd className="text-white mt-1">10012</dd>
                </div>
              </dl>
            )}

            <p className={`${toast ? 'mt-2' : 'sr-only'} text-emerald-300`} role="status" aria-live="polite">{toast}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
