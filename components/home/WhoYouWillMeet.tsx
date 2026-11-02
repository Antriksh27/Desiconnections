"use client";

import * as React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { Chip } from "@/components/ui/Chip";
import { CountUp } from "@/components/ui/CountUp";
import { ShieldCheck, Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhoYouWillMeet() {
  const { stats = [], quotes = [], professions = [] } = homeContent;

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-16 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,rgba(10,6,24,0)_70%)] pointer-events-none blur-3xl" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
            THE COMMUNITY &bull; WHO YOU WILL MEET
          </span>
        </div>
        <h2 className="display-lg text-white font-display font-extrabold leading-tight">
          Who You Will <span className="text-gradient-eventin">Meet In The Room</span>.
        </h2>
        <p className="body-lg text-mist">
          Our membership brings together curious minds, culture enthusiasts, and ambitious leaders from every corner of the diaspora.
        </p>
      </div>

      {/* Profession Chips Cloud */}
      <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl mx-auto relative z-10">
        {professions.map((prof, idx) => (
          <Chip key={idx} variant={idx % 3 === 0 ? "active" : "outline"} size="md">
            {prof}
          </Chip>
        ))}
      </div>

      {/* Stats Counter Numerals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10 text-center relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <CountUp value={stat.value} className="numeral text-gradient-eventin block font-black" />
            <span className="text-xs uppercase tracking-wider text-mist font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Three Member Editorial Cards with Real Portraits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {quotes.map((q, idx) => (
          <Reveal key={idx} variant="rise" delay={0.12 * idx}>
            <div className="bg-[#130D2E]/90 hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/50 rounded-[32px] p-8 flex flex-col justify-between space-y-6 hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden group h-full">
              {/* Quote Watermark Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors" />

              {/* Top Star Rating & Tier */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EC008C]/20 text-[#FF2A85] border border-[#EC008C]/35">
                  <ShieldCheck className="w-3 h-3 text-[#FF2A85]" /> {q.memberTier || "Member"}
                </span>
              </div>

              <p className="text-sm text-white/90 leading-relaxed italic relative z-10">
                &ldquo;{q.quote}&rdquo;
              </p>

              <div className="pt-5 border-t border-white/10 flex items-center gap-4 relative z-10">
                {q.avatarUrl && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#EC008C]/50 shadow-md">
                    <Image
                      src={q.avatarUrl}
                      alt={q.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <span className="block font-display text-base text-white font-bold truncate">
                    {q.name}
                  </span>
                  <span className="block text-xs text-[#00E5FF] truncate font-medium">
                    {q.title} &bull; {q.city}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
