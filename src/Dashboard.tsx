import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { OverviewCards } from './components/OverviewCards';
import { QuickActions } from './components/QuickActions';
import { ActivityList } from './components/ActivityList';
import { MoneyRules } from './components/MoneyRules';
import { CardPreview } from './components/CardPreview';
import { Budgets } from './components/Budgets';
import { Goals } from './components/Goals';
import { UpcomingBills } from './components/UpcomingBills';
import { SecuritySupport } from './components/SecuritySupport';
import { MobileSidebar } from './components/MobileSidebar';
import { CommandPalette } from './components/CommandPalette';
import { NotificationsPanel } from './components/NotificationsPanel';
import { TransferModal } from './components/TransferModal';
import { SplitModal } from './components/SplitModal';
import { ArrowLeft } from 'lucide-react';

export default function Dashboard({ onNavigateToLanding }: { onNavigateToLanding?: () => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCmdkOpen, setIsCmdkOpen] = useState(false);
  const [isNotifsOpen, setIsNotifsOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isSplitOpen, setIsSplitOpen] = useState(false);

  // Keyboard shortcuts
  const handleKeyDown = (e: KeyboardEvent) => {
    const metaK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
    if (metaK) {
      e.preventDefault();
      setIsCmdkOpen(true);
    }
    if (e.key === 'Escape') {
      setIsCmdkOpen(false);
      setIsTransferOpen(false);
      setIsSplitOpen(false);
      setIsNotifsOpen(false);
      setIsSidebarOpen(false);
    }
    if (e.key === '/' && !/input|textarea/i.test((document.activeElement as HTMLElement)?.tagName || '')) {
      e.preventDefault();
      document.getElementById('global-search')?.focus();
    }
  };

  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  });

  return (
    <div className="min-h-screen antialiased selection:bg-white/10 selection:text-white text-white bg-[#0a0a0b]">
      {/* Background image */}
      <div 
        className="fixed top-0 w-full h-screen -z-20 bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp")',
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
        }}
      />

      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded-md bg-white text-zinc-900 px-3 py-2 ring-1 ring-black/10"
      >
        Skip to main content
      </a>

      {/* Grid overlay */}
      <div 
        className="fixed inset-0 -z-30 opacity-[0.35]" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div 
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25" 
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-20" 
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)' }}
        />
      </div>

      {/* App Shell */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-5 md:pt-8">
        {onNavigateToLanding && (
          <button 
            onClick={onNavigateToLanding}
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Landing</span>
          </button>
        )}
        
        <Header 
          onSidebarToggle={() => setIsSidebarOpen(true)}
          onCmdkOpen={() => setIsCmdkOpen(true)}
          onNotifsToggle={() => setIsNotifsOpen(!isNotifsOpen)}
          onTransferOpen={() => setIsTransferOpen(true)}
        />

        <div className="mt-5 md:mt-8 grid grid-cols-12 gap-4 md:gap-6">
          <Sidebar />

          <main id="main" className="col-span-12 sm:col-span-9 lg:col-span-10">
            <OverviewCards onQuickPay={() => setIsTransferOpen(true)} />

            <section className="mt-5 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
              {/* Left column */}
              <div className="lg:col-span-7 space-y-4 md:space-y-6">
                <QuickActions onSplitClick={() => setIsSplitOpen(true)} />
                <ActivityList />
                <MoneyRules />
              </div>

              {/* Right column */}
              <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <CardPreview />
                <Budgets />
                <Goals />
                <UpcomingBills />
                <SecuritySupport />
              </div>
            </section>

            <p className="mt-6 text-[11px] text-white/60">
              Security: Freeze cards anytime. Virtual cards for online purchases. Real-time alerts on every transaction.
            </p>
          </main>
        </div>
      </div>

      {/* Modals & Overlays */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CommandPalette 
        isOpen={isCmdkOpen} 
        onClose={() => setIsCmdkOpen(false)}
        onTransferClick={() => {
          setIsCmdkOpen(false);
          setIsTransferOpen(true);
        }}
        onSplitClick={() => {
          setIsCmdkOpen(false);
          setIsSplitOpen(true);
        }}
      />
      <NotificationsPanel isOpen={isNotifsOpen} onClose={() => setIsNotifsOpen(false)} />
      <TransferModal isOpen={isTransferOpen} onClose={() => setIsTransferOpen(false)} />
      <SplitModal isOpen={isSplitOpen} onClose={() => setIsSplitOpen(false)} />
    </div>
  );
}