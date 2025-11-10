import { useState, FormEvent } from 'react';
import { X, ArrowRightLeft, User, BadgeDollarSign, ShieldCheck } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const [formData, setFormData] = useState({ to: '', amount: '', note: '' });
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ to: '', amount: '', note: '' });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="transfer-title">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto w-full max-w-md px-4 pt-24">
        <div className="rounded-2xl ring-1 ring-white/10 bg-[#111214] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4 text-white/85" />
              <span id="transfer-title">New transfer</span>
            </div>
            <button 
              onClick={onClose}
              className="inline-grid place-items-center h-8 w-8 rounded-md bg-white/10 hover:bg-white/15" 
              aria-label="Close transfer dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="px-4 pb-4 space-y-3">
            <div>
              <label htmlFor="tf-to" className="text-xs text-white/80">To</label>
              <div className="mt-1 rounded-xl ring-1 ring-white/15 bg-[#0f1115] px-3 py-2.5 flex items-center gap-2">
                <User className="h-4 w-4 text-white/70" />
                <input 
                  id="tf-to" 
                  required 
                  placeholder="@username or email" 
                  className="flex-1 bg-transparent outline-none placeholder-white/60" 
                  autoComplete="off"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="tf-amount" className="text-xs text-white/80">Amount</label>
              <div className="mt-1 rounded-xl ring-1 ring-white/15 bg-[#0f1115] px-3 py-2.5 flex items-center gap-2">
                <BadgeDollarSign className="h-4 w-4 text-white/70" />
                <input 
                  id="tf-amount" 
                  required 
                  type="number" 
                  min="1" 
                  step="0.01" 
                  placeholder="0.00" 
                  className="flex-1 bg-transparent outline-none placeholder-white/60" 
                  inputMode="decimal"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="tf-note" className="text-xs text-white/80">Note (optional)</label>
              <div className="mt-1 rounded-xl ring-1 ring-white/15 bg-[#0f1115] px-3 py-2.5">
                <input 
                  id="tf-note" 
                  placeholder="Thanks for dinner 🍜" 
                  className="w-full bg-transparent outline-none placeholder-white/60" 
                  autoComplete="off"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-white/75">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                End‑to‑end encrypted
              </div>
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
                <button className="rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2 font-medium transition">
                  Send
                </button>
              </div>
            </div>
            {success && (
              <p className="text-emerald-300" role="status" aria-live="polite">
                Transfer submitted. You'll both get a receipt.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
