'use client';

import { useState } from 'react';

export function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="max-w-4xl mx-auto md:px-10 px-6 pt-16 md:pt-24 pb-24">
      <div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-10 relative overflow-hidden backdrop-blur-[10px]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
        <h3 className="text-3xl md:text-5xl tracking-tight font-semibold font-['Space_Grotesk']">
          Ready to upgrade your money?
        </h3>
        <p className="mt-3 text-white/70 font-['Poppins']">
          Join Flow and get your card in minutes.
        </p>

        <form 
          className="flex flex-col sm:flex-row gap-3 mt-6 gap-x-3 gap-y-3" 
          aria-label="Get early access"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="sr-only font-['Poppins']">Email</label>
          <input 
            type="email" 
            required 
            placeholder="you@school.edu" 
            className="border-gradient before:rounded-xl placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-[10px] text-sm bg-white/5 w-full max-w-md rounded-xl pt-3 pr-4 pb-3 pl-4" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="border-gradient before:rounded-xl rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-3 text-sm font-medium transition font-['Poppins']">
            Join waitlist
          </button>
        </form>

        <p className="mt-3 text-xs text-white/50 font-['Poppins']">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
