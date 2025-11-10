import { useState } from 'react';
import {
  CreditCard,
  Smartphone,
  Package,
  Plane,
  MoreHorizontal,
  Eye,
  Copy,
  Settings,
  Plus,
  Snowflake,
  Circle,
  Check
} from 'lucide-react';
import { Badge } from '../components/Badge';

interface Card {
  id: number;
  name: string;
  type: 'Physical' | 'Virtual';
  purpose: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardBrand: 'visa' | 'mastercard';
  status: 'active' | 'frozen';
  colorScheme: {
    icon: any;
    iconBg: string;
    iconColor: string;
    cardBg: string;
    glowColor: string;
  };
  statistics: {
    thisMonth: number;
    transactions: number;
    limit: number;
  };
  isFrozen: boolean;
}

export function CardsPage() {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      name: 'Physical Card - Main',
      type: 'Physical',
      purpose: 'Main',
      cardNumber: '•••• •••• •••• 9012',
      expiryDate: '12/27',
      cvv: '•••',
      cardBrand: 'visa',
      status: 'active',
      colorScheme: {
        icon: CreditCard,
        iconBg: 'bg-indigo-400/10',
        iconColor: 'text-indigo-300',
        cardBg: 'bg-[linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.08))]',
        glowColor: 'bg-indigo-500/10'
      },
      statistics: {
        thisMonth: 2482,
        transactions: 47,
        limit: 5000
      },
      isFrozen: false
    },
    {
      id: 2,
      name: 'Online Shopping',
      type: 'Virtual',
      purpose: 'Online Shopping',
      cardNumber: '•••• •••• •••• 3847',
      expiryDate: '09/26',
      cvv: '•••',
      cardBrand: 'mastercard',
      status: 'active',
      colorScheme: {
        icon: Smartphone,
        iconBg: 'bg-emerald-400/10',
        iconColor: 'text-emerald-300',
        cardBg: 'bg-[linear-gradient(135deg,rgba(16,185,129,0.15),rgba(5,150,105,0.08))]',
        glowColor: 'bg-emerald-500/10'
      },
      statistics: {
        thisMonth: 642,
        transactions: 12,
        limit: 1500
      },
      isFrozen: false
    },
    {
      id: 3,
      name: 'Subscriptions',
      type: 'Virtual',
      purpose: 'Subscriptions',
      cardNumber: '•••• •••• •••• 5621',
      expiryDate: '03/28',
      cvv: '•••',
      cardBrand: 'visa',
      status: 'active',
      colorScheme: {
        icon: Package,
        iconBg: 'bg-amber-400/10',
        iconColor: 'text-amber-300',
        cardBg: 'bg-[linear-gradient(135deg,rgba(245,158,11,0.15),rgba(217,119,6,0.08))]',
        glowColor: 'bg-amber-500/10'
      },
      statistics: {
        thisMonth: 142,
        transactions: 8,
        limit: 500
      },
      isFrozen: false
    },
    {
      id: 4,
      name: 'Travel Expenses',
      type: 'Virtual',
      purpose: 'Travel',
      cardNumber: '•••• •••• •••• 7294',
      expiryDate: '11/25',
      cvv: '•••',
      cardBrand: 'mastercard',
      status: 'frozen',
      colorScheme: {
        icon: Plane,
        iconBg: 'bg-sky-400/10',
        iconColor: 'text-sky-300',
        cardBg: 'bg-[linear-gradient(135deg,rgba(59,130,246,0.15),rgba(37,99,235,0.08))]',
        glowColor: 'bg-sky-500/10'
      },
      statistics: {
        thisMonth: 0,
        transactions: 0,
        limit: 2000
      },
      isFrozen: true
    }
  ]);

  const [copiedCardId, setCopiedCardId] = useState<number | null>(null);

  const handleFreezeToggle = (cardId: number) => {
    setCards(cards.map(card =>
      card.id === cardId
        ? {
            ...card,
            isFrozen: !card.isFrozen,
            status: !card.isFrozen ? 'frozen' : 'active'
          }
        : card
    ));
  };

  const handleCopyCardNumber = (cardId: number, cardNumber: string) => {
    // In a real app, you'd copy the actual unmasked card number
    navigator.clipboard.writeText(cardNumber.replace(/•/g, 'X'));
    setCopiedCardId(cardId);
    setTimeout(() => setCopiedCardId(null), 2000);
  };

  const getCardBrandLogo = (brand: 'visa' | 'mastercard') => {
    if (brand === 'visa') {
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
          alt="Visa"
          className="w-8 h-7 opacity-90 object-contain"
        />
      );
    }
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
        alt="Mastercard"
        className="w-8 h-7 opacity-90 object-contain"
      />
    );
  };

  return (
    <div className="space-y-5 md:space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Cards</h1>
          <p className="text-sm text-white/70 mt-1">Manage your physical and virtual cards</p>
        </div>
        <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/60 via-white/100 to-white/60">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
            <Plus className="h-4 w-4" />
            <span>Create virtual card</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {cards.map((card) => {
          const Icon = card.colorScheme.icon;
          const isCopied = copiedCardId === card.id;

          return (
            <div
              key={card.id}
              className={`rounded-3xl p-[1px] bg-gradient-to-br from-white/0 via-white/20 to-white/0 ${card.isFrozen ? 'opacity-75' : ''}`}
            >
              <div className="rounded-3xl p-4 md:p-5 ring-1 ring-white/10 bg-white/5 relative overflow-hidden backdrop-blur-md">
                {/* Glow effect */}
                <div
                  className={`absolute -right-24 -top-24 ${card.colorScheme.glowColor} w-72 h-72 rounded-full blur-3xl`}
                  aria-hidden="true"
                />

                {/* Card Header */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 grid place-items-center rounded-lg ${card.colorScheme.iconBg} ring-1 ring-white/10`}>
                      <Icon className={`h-4 w-4 ${card.colorScheme.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{card.name}</p>
                      <p className="text-xs text-white/70">{card.type}</p>
                    </div>
                  </div>
                  <Badge variant={card.isFrozen ? 'frozen' : 'active'}>
                    {card.isFrozen ? (
                      <>
                        <Snowflake className="inline h-3 w-3 mr-1" />
                        Frozen
                      </>
                    ) : (
                      <>
                        <Circle className="inline h-2 w-2 fill-current mr-1" />
                        Active
                      </>
                    )}
                  </Badge>
                </div>

                {/* Card Visual */}
                <div className="mt-4 rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/30 to-white/20">
                  <div className={`rounded-2xl p-4 md:p-5 ring-1 ring-white/10 ${card.colorScheme.cardBg} backdrop-blur-sm relative overflow-hidden`}>
                    {/* Grid pattern overlay */}
                    <div
                      className="opacity-30 absolute top-0 right-0 bottom-0 left-0"
                      style={{
                        backgroundImage: `url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cdefs%3E%3Cpattern id=&quot;grid&quot; width=&quot;10&quot; height=&quot;10&quot; patternUnits=&quot;userSpaceOnUse&quot;%3E%3Cpath d=&quot;M 10 0 L 0 0 0 10&quot; fill=&quot;none&quot; stroke=&quot;rgba(255,255,255,0.1)&quot; stroke-width=&quot;0.5&quot;/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;url(%23grid)&quot; /%3E%3C/svg%3E')`
                      }}
                    />

                    <div className="flex items-start justify-between relative">
                      <div>
                        <div className="text-xs text-white/75">Flow • {card.type}</div>
                        <div className="text-xl font-medium tracking-tight mt-2">{card.cardNumber}</div>
                      </div>
                      {getCardBrandLogo(card.cardBrand)}
                    </div>

                    <div className="mt-4 md:mt-6 grid grid-cols-2 gap-4 text-sm relative">
                      <div>
                        <div className="text-[11px] text-white/70 uppercase tracking-wide">Valid thru</div>
                        <div className="mt-1">{card.expiryDate}</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-white/70 uppercase tracking-wide">CVV</div>
                        <div className="mt-1">{card.cvv}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className={`mt-4 grid gap-2 ${card.type === 'Physical' ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">{card.type === 'Physical' ? 'View details' : 'View'}</span>
                  </button>
                  {card.type === 'Virtual' && (
                    <button
                      onClick={() => handleCopyCardNumber(card.id, card.cardNumber)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm ring-1 ring-white/10 hover:bg-white/10 transition"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-emerald-300" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm ring-1 ring-white/10 hover:bg-white/10 transition">
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">{card.type === 'Physical' ? 'Settings' : 'Edit'}</span>
                  </button>
                </div>

                {/* Card Stats */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-white/70">This month</div>
                    <div className="mt-1 text-sm font-medium">
                      ${card.statistics.thisMonth.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/70">Transactions</div>
                    <div className="mt-1 text-sm font-medium">{card.statistics.transactions}</div>
                  </div>
                  <div>
                    <div className="text-white/70">Limit</div>
                    <div className="mt-1 text-sm font-medium">
                      ${card.statistics.limit.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Freeze Toggle */}
                <div className="mt-4 flex items-center justify-between rounded-xl p-3 ring-1 ring-white/10 bg-white/5">
                  <div className="flex items-center gap-2 text-sm">
                    <Snowflake className="h-4 w-4 text-white/75" />
                    Freeze card
                  </div>
                  <button
                    role="switch"
                    aria-checked={card.isFrozen}
                    onClick={() => handleFreezeToggle(card.id)}
                    className={`h-8 w-14 rounded-full ring-1 ring-white/10 relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 transition-colors ${
                      card.isFrozen ? 'bg-sky-500' : 'bg-white/10'
                    }`}
                  >
                    <span className="sr-only">Toggle freeze card</span>
                    <span
                      className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform ${
                        card.isFrozen ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}