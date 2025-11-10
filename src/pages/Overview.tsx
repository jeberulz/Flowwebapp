import { OverviewCards } from '../components/OverviewCards';
import { QuickActions } from '../components/QuickActions';
import { ActivityList } from '../components/ActivityList';
import { MoneyRules } from '../components/MoneyRules';
import { CardPreview } from '../components/CardPreview';
import { Budgets } from '../components/Budgets';
import { Goals } from '../components/Goals';
import { UpcomingBills } from '../components/UpcomingBills';
import { SecuritySupport } from '../components/SecuritySupport';

interface OverviewPageProps {
  onTransferOpen: () => void;
  onSplitOpen: () => void;
}

export function OverviewPage({ onTransferOpen, onSplitOpen }: OverviewPageProps) {
  return (
    <>
      <OverviewCards onQuickPay={onTransferOpen} />

      <section className="mt-5 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-4 md:space-y-6">
          <QuickActions onSplitClick={onSplitOpen} />
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
    </>
  );
}