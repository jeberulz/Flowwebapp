import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileSidebar } from './components/MobileSidebar';
import { CommandPalette } from './components/CommandPalette';
import { NotificationsPanel } from './components/NotificationsPanel';
import { TransferModal } from './components/TransferModal';
import { SplitModal } from './components/SplitModal';
import { ArrowLeft, Plus } from 'lucide-react';
import accountsBg from './assets/accounts-bg.webp';
import cardsBg from './assets/cards-bg.webp';

// Page imports
import { OverviewPage } from './pages/Overview';
import { AccountsPage } from './pages/Accounts';
import { CardsPage } from './pages/Cards';
import { PaymentsPage } from './pages/Payments';
import { ComingSoonPage } from './pages/ComingSoon';

export default function Dashboard({ onNavigateToLanding }: { onNavigateToLanding?: () => void }) {
  const [currentPage, setCurrentPage] = useState('overview');
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

  // Pages that have their own background images
  const pagesWithOwnBackground = ['accounts', 'cards'];
  const showDefaultBackground = !pagesWithOwnBackground.includes(currentPage);

  return (
    <div className="min-h-screen antialiased selection:bg-white/10 selection:text-white text-white bg-[#0a0a0b] relative">
      {/* Background images based on current page */}
      {currentPage === 'accounts' ? (
        <>
          {/* Accounts background - using proper z-index ordering */}
          <div
            className="fixed top-0 left-0 w-full h-screen -z-50 bg-cover bg-center"
            style={{
              backgroundImage: `url(${accountsBg})`,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.9) 70%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.9) 70%)'
            }}
            aria-hidden="true"
          />

          {/* Grid overlay - must be above background */}
          <div
            className="fixed inset-0 -z-40 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'
            }}
            aria-hidden="true"
          />

          {/* Glow accents - must be above grid */}
          <div className="pointer-events-none fixed inset-0 -z-30" aria-hidden="true">
            <div
              className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)' }}
            />
            <div
              className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)' }}
            />
          </div>
        </>
      ) : currentPage === 'cards' ? (
        <>
          {/* Cards background */}
          <div
            className="fixed top-0 left-0 w-full h-screen -z-50 bg-cover bg-center"
            style={{
              backgroundImage: `url(${cardsBg})`,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.9) 70%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.9) 70%)'
            }}
            aria-hidden="true"
          />

          {/* Grid overlay */}
          <div
            className="fixed inset-0 -z-40 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'
            }}
            aria-hidden="true"
          />

          {/* Glow accents */}
          <div className="pointer-events-none fixed inset-0 -z-30" aria-hidden="true">
            <div
              className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(147,51,234,.35), rgba(147,51,234,0) 65%)' }}
            />
            <div
              className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(217,70,239,.28), rgba(217,70,239,0) 65%)' }}
            />
          </div>
        </>
      ) : showDefaultBackground ? (
        <>
          {/* Default background */}
          <div
            className="fixed top-0 left-0 w-full h-screen -z-50 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp")',
              maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
            }}
          />

          {/* Grid overlay */}
          <div
            className="fixed inset-0 -z-40 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'
            }}
            aria-hidden="true"
          />

          {/* Glow accents */}
          <div className="pointer-events-none fixed inset-0 -z-30" aria-hidden="true">
            <div
              className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)' }}
            />
            <div
              className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)' }}
            />
          </div>
        </>
      ) : null}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded-md bg-white text-zinc-900 px-3 py-2 ring-1 ring-black/10"
      >
        Skip to main content
      </a>

      {/* App Shell */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-5 md:pt-8 relative">
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
          primaryButtonText={currentPage === 'accounts' ? 'New account' : 'Transfer'}
          primaryButtonIcon={currentPage === 'accounts' ? Plus : undefined}
          searchPlaceholder={currentPage === 'accounts' ? 'Search accounts, transactions...' : 'Search ( / )'}
        />

        <div className="mt-5 md:mt-8 grid grid-cols-12 gap-4 md:gap-6 items-start">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

          <main id="main" className="col-span-12 sm:col-span-9 lg:col-span-10">
            {/* Render the appropriate page based on currentPage state */}
            {currentPage === 'overview' && (
              <OverviewPage
                onTransferOpen={() => setIsTransferOpen(true)}
                onSplitOpen={() => setIsSplitOpen(true)}
              />
            )}
            {currentPage === 'accounts' && <AccountsPage />}
            {currentPage === 'cards' && <CardsPage />}
            {currentPage === 'payments' && <PaymentsPage />}
            {currentPage === 'insights' && (
              <ComingSoonPage
                title="Insights"
                description="Gain valuable insights into your spending patterns, budgets, and financial health."
              />
            )}
            {currentPage === 'automations' && (
              <ComingSoonPage
                title="Automations"
                description="Set up smart automations to manage your finances effortlessly."
              />
            )}
            {currentPage === 'goals' && (
              <ComingSoonPage
                title="Goals"
                description="Track and achieve your financial goals with personalized plans."
              />
            )}
            {currentPage === 'rewards' && (
              <ComingSoonPage
                title="Rewards"
                description="Earn and redeem rewards for your transactions and activities."
              />
            )}
            {currentPage === 'settings' && (
              <ComingSoonPage
                title="Settings"
                description="Customize your account preferences and security settings."
              />
            )}
            {currentPage === 'support' && (
              <ComingSoonPage
                title="Support"
                description="Get help and support from our dedicated team."
              />
            )}
          </main>
        </div>
      </div>

      {/* Modals & Overlays */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onPageChange={(page: string) => {
          setCurrentPage(page);
          setIsSidebarOpen(false);
        }}
      />
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