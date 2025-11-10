import { useState } from 'react';
import {
  Wallet,
  PiggyBank,
  Building2,
  Plane,
  MoreHorizontal,
  Filter,
  Download,
  LayoutGrid,
  List,
  TrendingUp,
  ArrowRightLeft,
  Settings2,
  ArrowDownToLine,
  RefreshCw,
  Info,
  CalendarClock,
  LucideIcon
} from 'lucide-react';
import { Badge } from '../components/Badge';
import { ProgressBar } from '../components/ProgressBar';

interface Account {
  id: number;
  name: string;
  type: string;
  institution: string;
  accountNumber: string;
  balance: number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  badge?: {
    label: string;
    variant: 'primary' | 'external' | 'default';
  };
  apy?: number;
  savingsGoal?: {
    current: number;
    target: number;
  };
  isExternal?: boolean;
  lastSynced?: string;
  autoDeposit?: {
    amount: number;
    nextDate: string;
  };
  info?: string;
}

export function AccountsPage() {
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  const accounts: Account[] = [
    {
      id: 1,
      name: 'Primary Checking',
      type: 'Checking',
      institution: 'Flow Bank',
      accountNumber: '••••4789',
      balance: 8240.33,
      icon: Wallet,
      iconColor: 'text-emerald-300',
      iconBgColor: 'bg-emerald-400/10',
      badge: {
        label: 'Primary',
        variant: 'primary'
      },
      apy: 4.25
    },
    {
      id: 2,
      name: 'Emergency Savings',
      type: 'Savings',
      institution: 'Flow Savings',
      accountNumber: '••••8012',
      balance: 3680.00,
      icon: PiggyBank,
      iconColor: 'text-sky-300',
      iconBgColor: 'bg-sky-400/10',
      apy: 5.00,
      savingsGoal: {
        current: 3680,
        target: 5000
      }
    },
    {
      id: 3,
      name: 'Bank of America',
      type: 'Checking',
      institution: 'External',
      accountNumber: '••••2849',
      balance: 562.00,
      icon: Building2,
      iconColor: 'text-white/85',
      iconBgColor: 'bg-white/10',
      badge: {
        label: 'External',
        variant: 'external'
      },
      isExternal: true,
      lastSynced: '2 hours ago',
      info: 'This account is read-only. Transfers take 1-3 days.'
    },
    {
      id: 4,
      name: 'Travel Fund',
      type: 'Pocket',
      institution: 'Flow Pocket',
      accountNumber: '••••5421',
      balance: 0.00,
      icon: Plane,
      iconColor: 'text-purple-300',
      iconBgColor: 'bg-purple-400/10',
      autoDeposit: {
        amount: 150,
        nextDate: 'Sep 1st'
      }
    }
  ];

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const availableBalance = 9842.33;
  const pendingBalance = 2640.00;

  return (
    <div className="space-y-5 md:space-y-6">

      {/* Page Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Accounts</h1>
          <p className="text-sm text-white/75 mt-1">Manage your checking, savings, and external accounts</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Total Balance Overview */}
      <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 relative overflow-hidden backdrop-blur-md">
          <div className="absolute -right-24 -top-24 bg-emerald-500/10 w-72 h-72 rounded-full blur-3xl" aria-hidden="true" />
          <div className="flex items-start justify-between gap-4 flex-wrap relative z-10">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Wallet className="h-4.5 w-4.5 text-emerald-300" />
                <span className="font-medium">Total across all accounts</span>
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <p className="text-sm text-white/70 mt-1">{accounts.length} active accounts</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-white/75">Available</div>
                <div className="text-lg font-medium text-white mt-0.5">${availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-right">
                <div className="text-xs text-white/75">Pending</div>
                <div className="text-lg font-medium text-amber-300 mt-0.5">${pendingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account List Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold tracking-tight">Your accounts</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('card')}
              className={`inline-grid place-items-center h-8 w-8 rounded-md transition ${
                viewMode === 'card'
                  ? 'bg-white/10 ring-1 ring-white/10'
                  : 'hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10'
              }`}
              aria-label="Card view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`inline-grid place-items-center h-8 w-8 rounded-md transition ${
                viewMode === 'list'
                  ? 'bg-white/10 ring-1 ring-white/10'
                  : 'hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10'
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card View */}
        {viewMode === 'card' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {accounts.map((account) => {
              const Icon = account.icon;
              return (
                <div key={account.id} className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
                  <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl ${account.iconBgColor} ring-1 ring-white/10 grid place-items-center`}>
                          <Icon className={`h-5 w-5 ${account.iconColor}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-medium">{account.name}</h3>
                            {account.badge && (
                              <Badge variant={account.badge.variant}>{account.badge.label}</Badge>
                            )}
                          </div>
                          <p className="text-xs text-white/70 mt-0.5">{account.institution} {account.accountNumber}</p>
                        </div>
                      </div>
                      <button className="inline-grid place-items-center h-8 w-8 rounded-md hover:bg-white/10 ring-1 ring-white/10" aria-label="Account options">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-xs text-white/75">Available balance</div>
                        <div className="text-2xl font-semibold tracking-tight mt-1">${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                      </div>
                      {account.apy && (
                        <div className="text-right">
                          <div className="text-xs text-white/75">Interest ({account.apy}% APY)</div>
                          <div className={`text-sm mt-1 ${account.iconColor}`}>+${(account.balance * account.apy / 100 / 12).toFixed(2)}/mo</div>
                        </div>
                      )}
                      {account.lastSynced && (
                        <div className="text-right">
                          <div className="text-xs text-white/75">Last synced</div>
                          <div className="text-sm text-white/70 mt-1">{account.lastSynced}</div>
                        </div>
                      )}
                      {account.autoDeposit && (
                        <div className="text-right">
                          <div className="text-xs text-white/75">Monthly deposit</div>
                          <div className="text-sm text-white/70 mt-1">${account.autoDeposit.amount} auto</div>
                        </div>
                      )}
                    </div>

                    {account.savingsGoal && (
                      <div className="mt-3">
                        <ProgressBar
                          current={account.savingsGoal.current}
                          target={account.savingsGoal.target}
                        />
                      </div>
                    )}

                    {account.info && (
                      <div className="mt-3 rounded-xl p-3 ring-1 ring-white/10 bg-white/5 flex items-center gap-2 text-xs text-white/75">
                        <Info className="h-4 w-4 text-sky-300" />
                        <span>{account.info}</span>
                      </div>
                    )}

                    {account.autoDeposit && (
                      <div className="mt-3 rounded-xl p-3 ring-1 ring-amber-400/20 bg-amber-400/10 flex items-center gap-2 text-xs text-amber-200">
                        <CalendarClock className="h-4 w-4" />
                        <span>Next auto-deposit on {account.autoDeposit.nextDate} (${account.autoDeposit.amount.toFixed(2)})</span>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <button className="inline-flex items-center gap-2 text-sm hover:text-white/90 transition">
                        {account.isExternal ? (
                          <>
                            <RefreshCw className="h-4 w-4" />
                            Sync now
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-4 w-4" />
                            View activity
                          </>
                        )}
                      </button>
                      <button className="inline-flex items-center gap-2 text-sm hover:text-white/90 transition">
                        {account.balance === 0 ? (
                          <>
                            <ArrowDownToLine className="h-4 w-4" />
                            Deposit
                          </>
                        ) : (
                          <>
                            <ArrowRightLeft className="h-4 w-4" />
                            Transfer
                          </>
                        )}
                      </button>
                      <button className="inline-flex items-center gap-2 text-sm hover:text-white/90 transition">
                        <Settings2 className="h-4 w-4" />
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-5 py-3 text-xs font-medium text-white/75">Account</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-white/75">Type</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-white/75">Balance</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-white/75">APY</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-white/75">Last activity</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-white/75">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {accounts.map((account) => {
                    const Icon = account.icon;
                    return (
                      <tr key={account.id} className="hover:bg-white/5 transition">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-lg ${account.iconBgColor} ring-1 ring-white/10 grid place-items-center`}>
                              <Icon className={`h-4 w-4 ${account.iconColor}`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{account.name}</span>
                                {account.badge && (
                                  <Badge variant={account.badge.variant}>{account.badge.label}</Badge>
                                )}
                              </div>
                              <div className="text-xs text-white/70">{account.institution} {account.accountNumber}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-white/80">{account.type}</td>
                        <td className="px-5 py-4 text-right font-medium">${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className={`px-5 py-4 text-right ${account.iconColor}`}>{account.apy ? `${account.apy}%` : '-'}</td>
                        <td className="px-5 py-4 text-right text-white/70">{account.lastSynced || '2 hours ago'}</td>
                        <td className="px-5 py-4 text-right">
                          <button className="inline-grid place-items-center h-8 w-8 rounded-md hover:bg-white/10 ring-1 ring-white/10" aria-label="More options">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
