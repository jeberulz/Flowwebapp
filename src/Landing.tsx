import { LandingHeader } from './components/landing/LandingHeader';
import { HeroSection } from './components/landing/HeroSection';
import { FeatureHighlights } from './components/landing/FeatureHighlights';
import { TrustedBySection } from './components/landing/TrustedBySection';
import { PricingSection } from './components/landing/PricingSection';
import { FAQSection } from './components/landing/FAQSection';
import { FinalCTA } from './components/landing/FinalCTA';
import { LandingFooter } from './components/landing/LandingFooter';

export default function Landing({ onNavigateToDashboard }: { onNavigateToDashboard?: () => void }) {
  return (
    <div className="min-h-screen antialiased selection:bg-white/10 selection:text-white text-white bg-[#0a0a0b]">
      {/* Background image - using direct asset path */}
      <div
        className="fixed inset-0 w-full h-screen"
        style={{
          zIndex: -50,
          backgroundImage: 'url("figma:asset/58c0259d3fbe1aedb86bc1782d3a23fee3a1e7d6.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Grid overlay */}
      <div 
        className="fixed inset-0 opacity-[0.45]" 
        style={{
          zIndex: -40,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'
        }}
      />

      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: -30 }}>
        <div 
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-30" 
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-25" 
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)' }}
        />
      </div>

      <header className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16 relative" style={{ zIndex: 10 }}>
        <LandingHeader />
        <HeroSection onNavigateToDashboard={onNavigateToDashboard} />
      </header>

      <div className="relative" style={{ zIndex: 10 }}>
        <FeatureHighlights />
        <TrustedBySection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
        <LandingFooter />
      </div>
    </div>
  );
}