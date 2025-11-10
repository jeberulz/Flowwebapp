import { Search, ArrowRightLeft, Split, Wand2, CreditCard } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferClick: () => void;
  onSplitClick: () => void;
}

export function CommandPalette({ isOpen, onClose, onTransferClick, onSplitClick }: CommandPaletteProps) {
  if (!isOpen) return null;

  const commands = [
    { icon: ArrowRightLeft, label: 'New transfer', onClick: onTransferClick },
    { icon: Split, label: 'Split a bill', onClick: onSplitClick },
    { icon: Wand2, label: 'Create automation', onClick: () => {} },
    { icon: CreditCard, label: 'Create virtual card', onClick: () => {} }
  ];

  return (
    <div className="fixed inset-0 z-[100]">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto w-full max-w-xl px-4 pt-24">
        <div className="rounded-2xl ring-1 ring-white/10 bg-[#111214] overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2.5">
            <Search className="h-4.5 w-4.5 text-white/75" />
            <input 
              className="flex-1 bg-transparent outline-none placeholder-white/60" 
              placeholder="Type a command…" 
              autoComplete="off" 
              aria-label="Command palette"
              autoFocus
            />
            <kbd className="text-[11px] text-white/70 bg-white/10 ring-1 ring-white/10 rounded px-1.5 py-0.5" aria-hidden="true">Esc</kbd>
          </div>
          <div className="max-h-72 overflow-auto divide-y divide-white/10">
            {commands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button 
                  key={cmd.label}
                  onClick={cmd.onClick}
                  className="w-full text-left px-4 py-3 hover:bg-white/5 flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {cmd.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
