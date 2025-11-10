import { CalendarRange, Wifi, Tv } from 'lucide-react';

const bills = [
  { id: 1, icon: Wifi, name: 'FiberNet', dueDate: 'Due Aug 18', amount: '$65.00', action: 'Pay' },
  { id: 2, icon: Tv, name: 'StreamPlus', dueDate: 'Due Aug 20', amount: '$12.99', action: 'Pause' }
];

export function UpcomingBills() {
  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
      <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarRange className="h-4.5 w-4.5 text-white/85" />
            <span className="font-medium">Upcoming bills</span>
          </div>
          <button className="text-xs rounded-full px-3 py-1.5 ring-1 ring-white/10 hover:bg-white/10">
            Manage
          </button>
        </div>
        <ul className="mt-3 divide-y divide-white/10">
          {bills.map((bill) => {
            const Icon = bill.icon;
            return (
              <li key={bill.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p>{bill.name}</p>
                    <p className="text-xs text-white/70">{bill.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/80">{bill.amount}</span>
                  <button className="rounded-md px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-white/10">
                    {bill.action}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
