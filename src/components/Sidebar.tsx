import { Home, Wallet, CreditCard, Send, ChartNoAxesCombined, Wand2, Flag, Gift, Settings, LifeBuoy } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
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
    <aside className="col-span-12 sm:col-span-3 lg:col-span-2 sm:block hidden sticky top-5 max-h-[calc(100vh-2.5rem)] overflow-auto">
      <nav className="rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <ul className="rounded-2xl p-2 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition ${
                    currentPage === item.id
                      ? 'bg-white/10 ring-1 ring-white/10 hover:bg-white/15'
                      : 'hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10'
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 ${currentPage === item.id ? 'text-white' : 'text-white/85'}`} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
          <li className="mt-1 pt-1 border-t border-white/10"></li>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10 transition"
                >
                  <Icon className="h-4.5 w-4.5 text-white/85" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
