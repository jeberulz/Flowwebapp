import { Bell, Command, ChevronDown, PanelLeft, Search } from 'lucide-react';

interface HeaderProps {
  onSidebarToggle: () => void;
  onCmdkOpen: () => void;
  onNotifsToggle: () => void;
  onTransferOpen: () => void;
}

export function Header({ onSidebarToggle, onCmdkOpen, onNotifsToggle, onTransferOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3">
      {/* Brand + Sidebar toggle */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onSidebarToggle}
          className="sm:hidden inline-grid place-items-center h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" 
          aria-label="Open navigation"
        >
          <PanelLeft className="h-4.5 w-4.5" />
        </button>
        <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-[inherit] px-3 py-2 flex items-center gap-2 ring-1 ring-white/10 bg-white/5">
            <div className="h-5 w-5 rounded-md bg-emerald-400/20 grid place-items-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-emerald-300">
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              </svg>
            </div>
            <span className="tracking-tight">Flow</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-xl">
        <div className="w-full rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <label htmlFor="global-search" className="sr-only">Search</label>
          <div className="relative rounded-2xl px-3 py-2.5 flex items-center gap-2 ring-1 ring-white/10 bg-white/10 focus-within:ring-white/25 backdrop-blur-md">
            <Search className="h-4.5 w-4.5 text-white/70" />
            <input 
              id="global-search" 
              type="search" 
              placeholder="Search ( / )" 
              className="flex-1 bg-transparent outline-none placeholder-white/60" 
              aria-label="Search anything" 
              autoComplete="off"
            />
            <kbd aria-hidden="true" className="hidden md:inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-white/70 bg-white/10 ring-1 ring-white/10">/</kbd>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
          <button 
            onClick={onTransferOpen}
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-zinc-900 hover:bg-zinc-100 px-3.5 sm:px-4 py-2 font-medium tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900" 
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m16 3 4 4-4 4"></path>
              <path d="M20 7H4"></path>
              <path d="m8 21-4-4 4-4"></path>
              <path d="M4 17h16"></path>
            </svg>
            <span className="hidden sm:inline">Transfer</span>
          </button>
        </div>
        <button 
          onClick={onNotifsToggle}
          className="relative inline-grid place-items-center h-9 w-9 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" 
          aria-label="Notifications"
        >
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0b]" aria-hidden="true"></span>
        </button>
        <button 
          onClick={onCmdkOpen}
          className="inline-grid place-items-center h-9 w-9 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" 
          aria-label="Open command menu (Ctrl/Cmd + K)"
        >
          <Command className="h-4.5 w-4.5" />
        </button>
        <button 
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/10 px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" 
          aria-haspopup="menu"
        >
          <img 
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&auto=format&fit=crop" 
            alt="Your profile" 
            className="h-6 w-6 rounded-lg object-cover ring-1 ring-white/20" 
          />
          <span className="hidden sm:inline">Jay</span>
          <ChevronDown className="h-4 w-4 text-white/70" />
        </button>
      </div>
    </header>
  );
}
