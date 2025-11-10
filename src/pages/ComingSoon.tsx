import { Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({ title, description }: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 md:px-6">
      <div className="text-center max-w-lg w-full">
        <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0 mx-auto">
          <div className="rounded-2xl p-4 md:p-6 lg:p-10 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Sparkles className="h-8 w-8 text-blue-400" />
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4">{title}</h1>
            <p className="text-white/70 mb-6 md:mb-10 leading-relaxed">
              {description || 'Earn and redeem rewards for your transactions and activities.'}
            </p>

            <div className="space-y-4">
              <div className="rounded-xl p-4 md:p-5 bg-white/5 ring-1 ring-white/10">
                <p className="text-sm text-white/60 font-medium mb-2">Expected Launch</p>
                <p className="text-xl md:text-2xl font-bold text-white">Q2 2024</p>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex-1 rounded-xl p-4 md:p-5 bg-white/5 ring-1 ring-white/10">
                  <p className="text-xs text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-3">Priority</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <p className="text-sm md:text-base text-white font-medium">High</p>
                  </div>
                </div>

                <div className="flex-1 rounded-xl p-4 md:p-5 bg-white/5 ring-1 ring-white/10">
                  <p className="text-xs text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-3">Status</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></div>
                    <p className="text-sm md:text-base text-white font-medium">In Progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 leading-relaxed">
                Stay tuned for updates. We'll notify you when this feature becomes available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}