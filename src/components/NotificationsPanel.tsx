import { useState } from 'react';
import { Bell, CheckCircle2, MailCheck } from 'lucide-react';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState([
    { id: 1, icon: CheckCircle2, iconColor: 'text-emerald-300', message: 'Round‑up moved $2.40 to Savings.', time: 'Just now' },
    { id: 2, icon: MailCheck, iconColor: 'text-sky-300', message: 'Receipt sent to you@school.edu', time: '12m ago' }
  ]);

  if (!isOpen) return null;

  const handleClear = () => {
    setNotifications([]);
  };

  return (
    <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-label="Notifications">
      <div onClick={onClose} className="absolute inset-0 bg-black/40"></div>
      <div className="absolute right-4 top-16 w-[380px] max-w-[92vw]">
        <div className="rounded-2xl ring-1 ring-white/10 bg-[#111214] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-white/85" />
              <span>Notifications</span>
            </div>
            <button onClick={handleClear} className="text-xs hover:underline">Clear</button>
          </div>
          <ul className="divide-y divide-white/10 max-h-80 overflow-auto">
            {notifications.length === 0 ? (
              <li className="px-4 py-3 text-white/80">You're all caught up.</li>
            ) : (
              notifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <li key={notif.id} className="px-4 py-3 flex items-start gap-2">
                    <Icon className={`h-4 w-4 ${notif.iconColor} mt-0.5`} />
                    <div>
                      <p>{notif.message}</p>
                      <p className="text-xs text-white/70">{notif.time}</p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
