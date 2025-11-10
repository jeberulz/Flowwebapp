'use client';

import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Jeremi was a game‑changer. He translated our vision into a polished product and delivered beyond expectations — fast, reliable, and detail‑obsessed.",
    author: "Jordan Avery",
    role: "Head of Product, Acme Co.",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_3840w.jpg",
    rotation: -10
  },
  {
    quote: "The platform's AI‑powered insights have completely transformed how I approach trading. The real‑time analytics and seamless interface make complex decisions feel effortless.",
    author: "Sarah Chen",
    role: "Senior Trader, FinTech Labs",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_3840w.jpg",
    rotation: -6
  },
  {
    quote: "Security was my biggest concern when choosing a crypto platform. Nebula's multi‑layer protection and transparent approach gave me the confidence to invest significantly.",
    author: "Marcus Rodriguez",
    role: "Portfolio Manager, InvestCorp",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg",
    rotation: 0
  }
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getCardClass = (index: number) => {
    const position = (index - activeIndex + testimonials.length) % testimonials.length;
    if (position === 0) return 'active';
    if (position === 1) return 'next-1';
    if (position === 2) return 'next-2';
    return 'hidden';
  };

  return (
    <div className="relative sm:p-12 flex pt-10 pr-10 pb-10 pl-10 items-center justify-center">
      <div className="relative sm:h-96 w-full h-[400px] max-w-7xl max-h-full">
        <div className="glass-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {/* Back plates with glass morphism styling */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass cursor-pointer"
              style={{
                position: 'relative',
                width: '340px',
                height: '340px',
                background: `linear-gradient(rgba(255, 255, 255, ${0.1 - index * 0.02}), transparent)`,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1rem',
                margin: '0px -50px',
                backdropFilter: 'blur(10px)',
                transform: `rotate(${testimonial.rotation}deg)`,
                transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`absolute inset-4 rounded-xl ${index === 0 ? 'bg-white' : index === 1 ? 'bg-white/90 backdrop-blur' : 'bg-white/80 backdrop-blur'} text-neutral-900 shadow-${index === 0 ? '2xl' : index === 1 ? 'xl' : 'lg'} ring-1 ring-black/5 overflow-hidden`}>
                <div className="p-6">
                  {/* Quote badge */}
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
                    <Quote className="h-4 w-4 text-neutral-700" />
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-900 mb-4 font-['Poppins']">
                    {testimonial.quote}
                  </p>

                  {/* Author row */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={testimonial.avatar} alt={`${testimonial.author} avatar`} className="h-6 w-6 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-medium text-neutral-900 font-['Poppins']">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-neutral-500 font-['Poppins']">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-medium font-['Poppins']">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
