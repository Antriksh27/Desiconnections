"use client";

import * as React from "react";
import { Check, ArrowUpRight, Sparkles, Ticket } from "lucide-react";
import { membershipTiersContent } from "@/content/membership";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function EventinPasses() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-14 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.14)_0%,rgba(10,6,24,0)_70%)] pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
          <Sparkles className="w-3 h-3 text-[#FF2A85]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
            MEMBERSHIP PRIVILEGES &bull; 10-YEAR PASSES
          </span>
        </div>
        <h2 className="display-lg text-white font-display font-extrabold">
          Community <span className="text-gradient-eventin">Membership Passes</span>.
        </h2>
        <p className="body-lg text-mist max-w-xl mx-auto">
          No monthly subscription dues. Submit your recent utility bill to verify your account and activate up to 10 years of concert tickets and marketplace privileges.
        </p>
      </div>

      {/* 3 Pass Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
        {membershipTiersContent.map((tier, idx) => {
          const isFeatured = tier.isPopular;

          return (
            <Reveal key={tier.id} variant="rise" delay={0.12 * idx}>
              <div
                className={`rounded-[32px] p-8 flex flex-col justify-between h-full transition-all duration-300 relative group overflow-hidden ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#1F1242] to-[#130D2E] border-2 border-[#EC008C] shadow-[0_20px_50px_rgba(236,0,140,0.35)] lg:-translate-y-3"
                    : "bg-[#130D2E]/90 hover:bg-[#1A123D] border border-white/10 hover:border-white/25 shadow-xl"
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#EC008C] to-[#FF2A85] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-md">
                      Most Popular &bull; Recommended
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header / Tier Name */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Ticket className={`w-4 h-4 ${isFeatured ? "text-[#FF2A85]" : "text-mist"}`} />
                      <span className="text-[11px] uppercase tracking-widest font-mono text-mist font-bold">
                        PASS TIER 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-mist leading-relaxed min-h-[36px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price & Requirement Block */}
                  <div className="pt-4 pb-6 border-y border-white/10 flex flex-col gap-1.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-xs text-mist font-medium">
                          ({tier.period})
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gold-light font-medium">
                      {tier.requirement}
                    </span>
                  </div>

                  {/* Perks Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                      Included Privileges:
                    </span>
                    <ul className="space-y-3">
                      {tier.perks.map((perk, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs text-mist leading-relaxed">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured
                                ? "bg-[#EC008C] text-white shadow-sm"
                                : "bg-white/10 text-white"
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className={isFeatured ? "text-white/90" : "text-mist"}>
                            {perk.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-6 border-t border-white/10">
                  <Button
                    variant={isFeatured ? "primary" : "ghost"}
                    size="md"
                    href={`/join?plan=${tier.slug}`}
                    className="w-full justify-center group"
                  >
                    <span>Activate {tier.name}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Bottom Subtext */}
      <div className="text-center text-xs text-mist max-w-lg mx-auto pt-2">
        <p>
          Have questions or prefer direct assistance? Call or text Mr. Ketan Patel at{" "}
          <a href="tel:6147722247" className="text-gold-light font-bold hover:underline">
            614-772-2247
          </a>{" "}
          or{" "}
          <a href="tel:6147457133" className="text-gold-light font-bold hover:underline">
            614-745-7133
          </a>
          .
        </p>
      </div>
    </section>
  );
}
