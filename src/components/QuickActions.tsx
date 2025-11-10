import { Flashlight, Zap, Send, ArrowDownToLine, Split, Wand2 } from 'lucide-react';

interface QuickActionsProps {
  onSplitClick: () => void;
}

export function QuickActions({ onSplitClick }: QuickActionsProps) {
  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <Flashlight className="h-4.5 w-4.5 text-amber-300" />
            <span className="font-medium">Quick actions</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/75">
            <Zap className="h-4 w-4 text-emerald-300" />
            Live
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button className="group rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
            <span className="rounded-xl bg-white text-zinc-900 px-3 py-2.5 inline-flex items-center justify-center gap-2 w-full hover:bg-zinc-100 transition">
              <Send className="h-4 w-4" />
              Send
            </span>
          </button>
          <button className="group rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
            <span className="rounded-xl bg-white text-zinc-900 px-3 py-2.5 inline-flex items-center justify-center gap-2 w-full hover:bg-zinc-100 transition">
              <ArrowDownToLine className="h-4 w-4" />
              Add
            </span>
          </button>
          <button 
            onClick={onSplitClick}
            className="rounded-xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0"
          >
            <span className="rounded-xl px-3 py-2.5 inline-flex items-center justify-center gap-2 w-full ring-1 ring-white/10 hover:bg-white/10 transition">
              <Split className="h-4 w-4" />
              Split
            </span>
          </button>
          <button className="rounded-xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
            <span className="rounded-xl px-3 py-2.5 inline-flex items-center justify-center gap-2 w-full ring-1 ring-white/10 hover:bg-white/10 transition">
              <Wand2 className="h-4 w-4" />
              Rule
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
