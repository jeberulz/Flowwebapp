import { useState, FormEvent } from 'react';
import { X, Split, Plus, BadgeDollarSign, Send } from 'lucide-react';

interface SplitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SplitModal({ isOpen, onClose }: SplitModalProps) {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [method, setMethod] = useState<'equal' | 'custom'>('equal');
  const [success, setSuccess] = useState(false);
  const [participants, setParticipants] = useState(['@mina', '@jay']);

  if (!isOpen) return null;

  const perPerson = amount ? (parseFloat(amount) / participants.length).toFixed(2) : '0.00';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setAmount('');
      setNote('');
      onClose();
    }, 1200);
  };

  const handleAddParticipant = () => {
    const handle = prompt('Enter @username or email');
    if (handle) {
      setParticipants([...participants, handle]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="split-title">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto w-full max-w-md px-4 pt-24">
        <div className="rounded-2xl ring-1 ring-white/10 bg-[#111214] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Split className="h-4 w-4 text-white/85" />
              <span id="split-title">Split a bill</span>
            </div>
            <button 
              onClick={onClose}
              className="inline-grid place-items-center h-8 w-8 rounded-md bg-white/10 hover:bg-white/15" 
              aria-label="Close split dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="px-4 pb-4 space-y-3">
            <div>
              <label className="text-xs text-white/80">Participants</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {participants.map((p, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ring-1 ring-white/15 bg-white/10">
                    <img 
                      src={i === 0 ? "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&auto=format&fit=crop" : "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&auto=format&fit=crop"} 
                      className="h-5 w-5 rounded-full object-cover ring-1 ring-white/10" 
                      alt=""
                    />
                    {p}
                  </span>
                ))}
                <button 
                  type="button"
                  onClick={handleAddParticipant}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ring-1 ring-white/15 hover:bg-white/10"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="split-amount" className="text-xs text-white/80">Total amount</label>
              <div className="mt-1 rounded-xl ring-1 ring-white/15 bg-[#0f1115] px-3 py-2.5 flex items-center gap-2">
                <BadgeDollarSign className="h-4 w-4 text-white/70" />
                <input 
                  id="split-amount" 
                  required 
                  type="number" 
                  min="1" 
                  step="0.01" 
                  placeholder="0.00" 
                  className="flex-1 bg-transparent outline-none placeholder-white/60" 
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/80">Split method</span>
                <div className="inline-flex rounded-md ring-1 ring-white/10 overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => setMethod('equal')}
                    className={`px-2.5 py-1.5 text-xs ${method === 'equal' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                  >
                    Equal
                  </button>
                  <button 
                    type="button"
                    onClick={() => setMethod('custom')}
                    className={`px-2.5 py-1.5 text-xs ${method === 'custom' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                  >
                    Custom
                  </button>
                </div>
              </div>
              {method === 'equal' ? (
                <div className="mt-2 text-xs text-white/75">Each pays: <span>${perPerson}</span></div>
              ) : (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {participants.map((p, i) => (
                    <div key={i} className="rounded-lg ring-1 ring-white/15 bg-[#0f1115] px-3 py-2">
                      <label className="text-[11px] text-white/70">{p}</label>
                      <input 
                        className="mt-1 w-full bg-transparent outline-none placeholder-white/60" 
                        type="number" 
                        min="0" 
                        step="0.01" 
                        placeholder="0.00"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="split-note" className="text-xs text-white/80">Note (optional)</label>
              <div className="mt-1 rounded-xl ring-1 ring-white/15 bg-[#0f1115] px-3 py-2.5">
                <input 
                  id="split-note" 
                  placeholder="Dinner at Noodle Shop" 
                  className="w-full bg-transparent outline-none placeholder-white/60" 
                  autoComplete="off"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-white/75">
                <Send className="h-4 w-4 text-emerald-300" />
                Create payment requests
              </div>
              <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
                <button className="rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2 font-medium transition">
                  Send
                </button>
              </div>
            </div>
            {success && (
              <p className="text-emerald-300" role="status" aria-live="polite">
                Requests sent to participants.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
