import { useState } from 'react';
import {
  Send,
  ArrowDownToLine,
  UserPlus,
  QrCode,
  Split,
  Users,
  Wallet,
  Building2,
  CreditCard,
  PlusCircle,
  ReceiptText,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Badge } from '../components/Badge';

interface Contact {
  id: number;
  name: string;
  username: string;
  avatar: string;
  paymentCount: number;
}

interface PaymentMethod {
  id: number;
  type: 'balance' | 'card' | 'bank';
  name: string;
  details: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  isDefault: boolean;
}

interface Transaction {
  id: number;
  type: 'sent' | 'received' | 'pending';
  name: string;
  username?: string;
  avatar: string;
  amount: number;
  date: string;
  note?: string;
}

export function PaymentsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sent' | 'received' | 'pending'>('all');

  const frequentContacts: Contact[] = [
    {
      id: 1,
      name: 'Mina Chen',
      username: '@mina',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop',
      paymentCount: 8
    },
    {
      id: 2,
      name: 'Alex Rivera',
      username: '@arivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
      paymentCount: 5
    },
    {
      id: 3,
      name: 'Sarah Kim',
      username: '@sarahk',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
      paymentCount: 4
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      type: 'balance',
      name: 'Flow Balance',
      details: '$12,482.33 available',
      icon: Building2,
      iconBg: 'bg-emerald-400/10',
      iconColor: 'text-emerald-300',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      name: 'Visa •••• 9012',
      details: 'Expires 12/27',
      icon: CreditCard,
      iconBg: 'bg-white/10',
      iconColor: 'text-white/85',
      isDefault: false
    }
  ];

  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'sent',
      name: 'Mina Chen',
      username: '@mina',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop',
      amount: 125.50,
      date: 'Today, 2:45 PM',
      note: 'Dinner split'
    },
    {
      id: 2,
      type: 'received',
      name: 'Alex Rivera',
      username: '@arivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
      amount: 280.00,
      date: 'Today, 11:20 AM',
      note: 'Rent contribution'
    },
    {
      id: 3,
      type: 'sent',
      name: 'Sarah Kim',
      username: '@sarahk',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
      amount: 45.00,
      date: 'Yesterday, 5:15 PM',
      note: 'Coffee'
    },
    {
      id: 4,
      type: 'pending',
      name: 'Jordan Lee',
      username: '@jlee',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop',
      amount: 150.00,
      date: 'Yesterday, 3:30 PM',
      note: 'Concert tickets'
    },
    {
      id: 5,
      type: 'received',
      name: 'Taylor Morgan',
      username: '@tmorgan',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      amount: 95.75,
      date: 'Dec 8, 9:45 AM',
      note: 'Groceries'
    },
    {
      id: 6,
      type: 'sent',
      name: 'Casey Park',
      username: '@cpark',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
      amount: 320.00,
      date: 'Dec 7, 4:20 PM',
      note: 'Utilities'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedFilter === 'all') return true;
    return transaction.type === selectedFilter;
  });

  return (
    <div className="space-y-5 md:space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Payments</h1>
          <p className="text-sm text-white/70 mt-1">Send, request, and manage your payment history</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
            <ArrowDownToLine className="h-4 w-4" />
            Request
          </button>
          <div className="rounded-xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-3.5 py-2 text-sm font-medium transition">
              <Send className="h-4 w-4" />
              Send money
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md h-full">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <UserPlus className="h-4.5 w-4.5 text-sky-300" />
              <span className="font-medium">Send to contact</span>
            </div>
            <p className="mt-2 text-sm text-white/75">Pay friends instantly with @username or phone</p>
            <button className="mt-4 w-full rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
              Choose contact
            </button>
          </div>
        </div>

        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md h-full">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <QrCode className="h-4.5 w-4.5 text-emerald-300" />
              <span className="font-medium">Pay by QR</span>
            </div>
            <p className="mt-2 text-sm text-white/75">Scan to pay at supported merchants</p>
            <button className="mt-4 w-full rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
              Open scanner
            </button>
          </div>
        </div>

        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md h-full">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Split className="h-4.5 w-4.5 text-purple-300" />
              <span className="font-medium">Split bill</span>
            </div>
            <p className="mt-2 text-sm text-white/75">Divide expenses with multiple people</p>
            <button className="mt-4 w-full rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
              Create split
            </button>
          </div>
        </div>
      </section>

      {/* Recent & Frequent */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Frequent contacts */}
        <div className="lg:col-span-5 rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Users className="h-4.5 w-4.5 text-white/85" />
                <span className="font-medium">Frequent contacts</span>
              </div>
              <button className="text-xs text-white/75 hover:text-white">View all</button>
            </div>
            <div className="mt-3 grid gap-2">
              {frequentContacts.map((contact) => (
                <button
                  key={contact.id}
                  className="flex gap-3 hover:bg-white/10 transition text-left bg-white/5 ring-white/10 ring-1 rounded-xl px-3 py-3 gap-x-3 gap-y-3 items-center"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full ring-1 ring-white/20 overflow-hidden bg-white/5" style={{ aspectRatio: '1 / 1' }}>
                    <img
                      src={contact.avatar}
                      className="w-full h-full object-cover object-center"
                      alt={contact.name}
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{contact.name}</p>
                    <p className="text-xs text-white/70">{contact.username} • {contact.paymentCount} payments</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/70" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="lg:col-span-7 rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
          <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Wallet className="h-4.5 w-4.5 text-white/85" />
                <span className="font-medium">Payment methods</span>
              </div>
              <button className="text-xs text-white/75 hover:text-white">Manage</button>
            </div>
            <div className="mt-3 grid gap-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    className="flex items-center justify-between rounded-xl p-3 ring-1 ring-white/10 bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 grid place-items-center rounded-lg ${method.iconBg} ring-1 ring-white/10`}>
                        <Icon className={`h-5 w-5 ${method.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{method.name}</p>
                        <p className="text-xs text-white/70">{method.details}</p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <Badge variant="primary">Default</Badge>
                    )}
                  </div>
                );
              })}
              <button className="flex items-center gap-2 rounded-xl p-3 ring-1 ring-white/10 hover:bg-white/10 transition text-sm text-white/90">
                <PlusCircle className="h-4 w-4" />
                Add payment method
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment History */}
      <section className="rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0">
        <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <ReceiptText className="h-4.5 w-4.5 text-white/85" />
              <span className="font-medium">Payment history</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 transition ${
                  selectedFilter === 'all'
                    ? 'ring-white/10 bg-white/10'
                    : 'ring-white/10 hover:bg-white/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFilter('sent')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 transition ${
                  selectedFilter === 'sent'
                    ? 'ring-white/10 bg-white/10'
                    : 'ring-white/10 hover:bg-white/10'
                }`}
              >
                <ArrowUpRight className="h-3.5 w-3.5 text-rose-300" />
                Sent
              </button>
              <button
                onClick={() => setSelectedFilter('received')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 transition ${
                  selectedFilter === 'received'
                    ? 'ring-white/10 bg-white/10'
                    : 'ring-white/10 hover:bg-white/10'
                }`}
              >
                <ArrowDownRight className="h-3.5 w-3.5 text-emerald-300" />
                Received
              </button>
              <button
                onClick={() => setSelectedFilter('pending')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ring-1 transition ${
                  selectedFilter === 'pending'
                    ? 'ring-white/10 bg-white/10'
                    : 'ring-white/10 hover:bg-white/10'
                }`}
              >
                <Clock className="h-3.5 w-3.5 text-amber-300" />
                Pending
              </button>
            </div>
          </div>

          <ul className="mt-4 divide-y divide-white/10">
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id} className="flex items-center gap-3 py-3">
                <div className="w-10 h-10 shrink-0 rounded-full ring-1 ring-white/20 overflow-hidden bg-white/5" style={{ aspectRatio: '1 / 1' }}>
                  <img
                    src={transaction.avatar}
                    className="w-full h-full object-cover object-center"
                    alt={transaction.name}
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{transaction.name}</p>
                    {transaction.type === 'sent' && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-rose-300" />
                    )}
                    {transaction.type === 'received' && (
                      <ArrowDownRight className="h-3.5 w-3.5 text-emerald-300" />
                    )}
                    {transaction.type === 'pending' && (
                      <Clock className="h-3.5 w-3.5 text-amber-300" />
                    )}
                  </div>
                  <p className="text-xs text-white/70">
                    {transaction.username} • {transaction.note}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      transaction.type === 'sent'
                        ? 'text-rose-300'
                        : transaction.type === 'received'
                        ? 'text-emerald-300'
                        : 'text-amber-300'
                    }`}
                  >
                    {transaction.type === 'sent' ? '-' : transaction.type === 'received' ? '+' : ''}$
                    {transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-white/70">{transaction.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}