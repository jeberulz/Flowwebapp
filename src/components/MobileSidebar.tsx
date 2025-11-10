import { X, Home, Wallet, CreditCard, Send, ChartNoAxesCombined, Wand2, Flag, Gift, Settings, LifeBuoy } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function MobileSidebar({ isOpen, onClose, currentPage, onPageChange }: MobileSidebarProps) {
  if (!isOpen) return null;

  const navItems = [
    { icon: Home, label: 'Overview', id: 'overview' },
    { icon: Wallet, label: 'Accounts', id: 'accounts' },
    { icon: CreditCard, label: 'Cards', id: 'cards' },
    { icon: Send, label: 'Payments', id: 'payments' },
    { icon: ChartNoAxesCombined, label: 'Insights', id: 'insights' },
    { icon: Wand2, label: 'Automations', id: 'automations' },
    { icon: Flag, label: 'Goals', id: 'goals' },
    { icon: Gift, label: 'Rewards', id: 'rewards' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: LifeBuoy, label: 'Support', id: 'support' },
  ];

  return (
    <div className="fixed inset-0 z-[95]">
      <div onClick={onClose} className="absolute inset-0 bg-black/60"></div>
      <aside className="absolute left-0 top-0 h-full w-[84vw] max-w-xs p-3">
        <nav className="h-full rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <ul className="h-full rounded-2xl p-3 ring-1 ring-white/10 bg-white/5 backdrop-blur-md overflow-auto">
            <li className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md bg-emerald-400/20 grid place-items-center" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-emerald-300">
                    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                  </svg>
                </div>
                <span>Flow</span>
              </div>
              <button 
                onClick={onClose}
                className="inline-grid place-items-center h-8 w-8 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10" 
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
            <li className="mt-2 grid gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => onPageChange(item.id)}
                    className={`w-full rounded-lg px-3 py-2 flex items-center gap-2 ${
                      currentPage === item.id ? 'ring-1 ring-white/10 bg-white/10' : 'ring-1 ring-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
              <div className="border-t border-white/10 my-2"></div>
              {bottomItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => onPageChange(item.id)}
                    className="w-full rounded-lg px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
