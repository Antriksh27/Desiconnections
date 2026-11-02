"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, ShieldCheck } from "lucide-react";
import { dealsContent } from "@/content/deals";
import { Reveal } from "@/components/ui/Reveal";

export function EverydayBenefitsStrip() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-10 relative">
      {/* Discreet Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-volt/15 border border-volt/30">
            <Zap className="w-3 h-3 text-volt" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-volt">
              PILLAR 03 &bull; EVERYDAY MEMBER PERKS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Quiet Everyday Benefits for Members
          </h2>
          <p className="text-xs text-mist max-w-xl">
            Switch n Save energy reviews and fine dining arrangements across New York, California, Texas, and Illinois.
          </p>
        </div>
        <Link
          href="/deals"
          className="text-xs font-bold text-white hover:text-volt transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full shadow-sm"
        >
          <span>View all member perks</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Row of 3 offer cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {dealsContent.map((deal, idx) => (
          <Reveal key={deal.slug} variant="rise" delay={0.1 * idx}>
            <div
              className={`rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border h-full ${
                deal.isSwitchNSave
                  ? "bg-[#161036] border-volt/35 hover:border-volt/60 shadow-[0_10px_30px_rgba(0,229,255,0.12)]"
                  : "bg-[#130D2E]/80 border-white/10 hover:border-white/25 shadow-lg"
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-volt/15 text-volt border border-volt/25">
                    <Zap className="w-3 h-3" /> {deal.category}
                  </span>
                  <span className="text-[11px] text-mist font-medium">{deal.partner}</span>
                </div>
                <h3 className="text-lg font-display text-white font-bold leading-snug">
                  {deal.title}
                </h3>
                <p className="text-xs text-mist leading-relaxed line-clamp-3">
                  {deal.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-mist">
                  <ShieldCheck className="w-3.5 h-3.5 text-volt shrink-0" />
                  <span>Verified US member perk</span>
                </div>
                <Link
                  href={deal.isSwitchNSave ? "/deals#switch-n-save" : "/deals"}
                  className="text-xs font-bold text-white hover:text-volt transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Mandatory Partner Disclosure */}
      <p className="text-[11px] text-mist/60 text-center pt-2">
        Switch n Save and partner perks are provided through licensed US third parties. Terms and conditions apply. No hardcoded savings guarantees.
      </p>
    </section>
  );
}
