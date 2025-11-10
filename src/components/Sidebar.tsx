import { Home, Wallet, CreditCard, Send, ChartNoAxesCombined, Wand2, Flag, Gift, Settings, LifeBuoy } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Overview', href: '#', active: true },
    { icon: Wallet, label: 'Accounts', href: '/accounts' },
    { icon: CreditCard, label: 'Cards', href: '/cards' },
    { icon: Send, label: 'Payments', href: '#' },
    { icon: ChartNoAxesCombined, label: 'Insights', href: '#' },
    { icon: Wand2, label: 'Automations', href: '#' },
    { icon: Flag, label: 'Goals', href: '#' },
    { icon: Gift, label: 'Rewards', href: '#' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: LifeBuoy, label: 'Support', href: '#' },
  ];

  return (
    <aside className="col-span-12 sm:col-span-3 lg:col-span-2 sm:block hidden">
      <nav className="rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <ul className="rounded-2xl p-2 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition ${
                    item.active 
                      ? 'bg-white/10 ring-1 ring-white/10 hover:bg-white/15' 
                      : 'hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10'
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 ${item.active ? 'text-white' : 'text-white/85'}`} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
          <li className="mt-1 pt-1 border-t border-white/10"></li>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10 transition"
                >
                  <Icon className="h-4.5 w-4.5 text-white/85" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
