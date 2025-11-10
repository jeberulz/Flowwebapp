import { useState } from 'react';
import { ReceiptText, ArrowDownRight, ArrowUpRight, Clock, Utensils, BadgeDollarSign, ShoppingBag, TramFront, FileText, ShieldAlert } from 'lucide-react';

type FilterType = 'all' | 'money-in' | 'money-out' | 'pending';

const activities = [
  {
    id: 1,
    type: 'money-out' as const,
    icon: Utensils,
    title: 'The Noodle Shop',
    category: 'Food',
    time: 'Today 12:18 PM',
    card: '9012',
    amount: '- $18.40',
    amountColor: 'text-rose-300',
    badge: null,
    action: 'receipt'
  },
  {
    id: 2,
    type: 'money-in' as const,
    icon: BadgeDollarSign,
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-300',
    title: 'Paycheck • Campus Events',
    category: 'Income',
    time: 'Today 9:01 AM',
    amount: '+ $842.00',
    amountColor: 'text-emerald-300',
    badge: 'Early',
    badgeColor: 'bg-emerald-400/10 ring-emerald-400/20 text-emerald-200',
    action: null
  },
  {
    id: 3,
    type: 'pending' as const,
    icon: ShoppingBag,
    title: 'Studio Merch',
    category: 'Pending • Yesterday 6:20 PM • Apparel',
    amount: '- $64.00',
    amountColor: 'text-white/80',
    badge: 'Review',
    badgeColor: 'bg-amber-400/10 ring-amber-400/20 text-amber-200',
    action: null
  },
  {
    id: 4,
    type: 'money-out' as const,
    icon: TramFront,
    title: 'Metro Card',
    category: 'Transit • Aug 11 • NYC',
    amount: '- $2.75',
    amountColor: 'text-rose-300',
    badge: null,
    action: 'alert'
  }
];

export function ActivityList() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredActivities = activities.filter(activity => {
    if (activeFilter === 'all') return true;
    return activity.type === activeFilter;
  });

  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-white/90">
            <ReceiptText className="h-4.5 w-4.5 text-white/85" />
            <span className="font-medium">Recent activity</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 ${
                activeFilter === 'all' ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('money-in')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 ${
                activeFilter === 'money-in' ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              <ArrowDownRight className="h-3.5 w-3.5 text-emerald-300" />
              In
            </button>
            <button 
              onClick={() => setActiveFilter('money-out')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 ${
                activeFilter === 'money-out' ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              <ArrowUpRight className="h-3.5 w-3.5 text-rose-300" />
              Out
            </button>
            <button 
              onClick={() => setActiveFilter('pending')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 ${
                activeFilter === 'pending' ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-amber-300" />
              Pending
            </button>
          </div>
        </div>

        <ul className="mt-3 divide-y divide-white/10">
          {filteredActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <li key={activity.id} className="flex items-center gap-3 py-3">
                <div className={`h-9 w-9 grid place-items-center rounded-lg ${activity.iconBg || 'bg-white/10'} ring-1 ring-white/10`}>
                  <Icon className={`h-4.5 w-4.5 ${activity.iconColor || 'text-white/85'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white truncate">{activity.title}</p>
                    <span className={activity.amountColor}>{activity.amount}</span>
                  </div>
                  <p className="text-xs text-white/70">
                    {activity.category}
                    {activity.card && ` • Card • • ${activity.card}`}
                  </p>
                </div>
                {activity.badge && (
                  <span className={`text-[11px] px-2 py-1 rounded-md ring-1 ${activity.badgeColor}`}>
                    {activity.badge}
                  </span>
                )}
                {activity.action === 'receipt' && (
                  <button className="inline-grid place-items-center h-8 w-8 rounded-md hover:bg-white/10 ring-1 ring-white/10" aria-label="View receipt">
                    <FileText className="h-4 w-4" />
                  </button>
                )}
                {activity.action === 'alert' && (
                  <button className="inline-grid place-items-center h-8 w-8 rounded-md hover:bg-white/10 ring-1 ring-white/10" aria-label="Report issue">
                    <ShieldAlert className="h-4 w-4" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-3">
          <button className="w-full rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 transition">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
