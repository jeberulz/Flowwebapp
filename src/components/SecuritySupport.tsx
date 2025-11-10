import { ShieldCheck, Lock, LifeBuoy, Activity, MessageCircle, Mail } from 'lucide-react';

export function SecuritySupport() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <div className="rounded-3xl p-4 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-300" />
            <span className="font-medium">Security</span>
          </div>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center justify-between">
              <span className="text-white/90">2-step verification</span>
              <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] ring-1 ring-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                <Lock className="h-3.5 w-3.5" />
                On
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white/90">Last device</span>
              <span className="text-white/75 text-xs">Mac • NYC • 2h ago</span>
            </li>
          </ul>
          <button className="mt-3 w-full rounded-lg px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
            Review activity
          </button>
        </div>
      </div>
      <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <div className="rounded-3xl p-4 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LifeBuoy className="h-4.5 w-4.5 text-sky-300" />
              <span className="font-medium">Support</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-emerald-400/20 bg-emerald-400/10 text-emerald-200">
              <Activity className="h-3.5 w-3.5" />
              Operational
            </span>
          </div>
          <p className="mt-2 text-white/75">Need help? Our team replies in under 5 minutes.</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="rounded-lg px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 inline-flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat
            </button>
            <button className="rounded-lg px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 inline-flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
