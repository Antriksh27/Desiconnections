"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Users, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function PillarsSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pinTargetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Only pin on desktop when reduced motion is not preferred
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.innerWidth >= 1024;

    if (prefersReducedMotion || !isDesktop || !containerRef.current || !pinTargetRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 12%",
      end: "+=450",
      pin: pinTargetRef.current,
      pinSpacing: true,
      anticipatePin: 1,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12 relative">
      <div ref={pinTargetRef} className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              CLUB ARCHITECTURE &bull; THREE PRIVILEGES
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Built Around What <span className="text-gradient-eventin">Matters Most</span>.
          </h2>
          <p className="body-lg text-mist">
            Three distinct privileges in one private membership, structured so culture, live stages, and camaraderie take center stage.
          </p>
        </div>

        {/* 3 Pillars with deliberately UNEQUAL weight:
            1. Entertainment (Largest, dominant visual weight)
            2. Connections (Medium, network & founders)
            3. Everyday Benefits (Smallest & lowest, quiet perk)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 1: ENTERTAINMENT (DOMINATES - 7 columns) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1E1244] via-[#130D2E] to-[#0A0618] border-2 border-[#EC008C]/50 rounded-[32px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(236,0,140,0.25)] relative overflow-hidden group">
            {/* Ambient gold / magenta glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.25)_0%,rgba(10,6,24,0)_70%)] opacity-60 pointer-events-none blur-3xl" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EC008C]/20 text-[#FF2A85] text-xs font-bold uppercase tracking-wider border border-[#EC008C]/35">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FF2A85]" /> Pillar 01 &bull; Priority
                </span>
                <span className="text-xs text-[#00E5FF] font-mono uppercase tracking-widest font-bold">
                  Entertainment First
                </span>
              </div>

              <h3 className="display-md text-white font-display font-bold">
                Front-row arena nights. <span className="text-gradient-eventin">Bollywood up close.</span>
              </h3>
              <p className="body-base text-mist max-w-xl leading-relaxed">
                Private lounge access, arena presales, and intimate artist meet-and-greets for the biggest subcontinent tours in the United States. Never wait in generic public ticketing queues again.
              </p>
            </div>

            <div className="my-6 relative z-10">
              <ImageSlot
                src="/images/hero_concert.jpg"
                alt="Headline arena concert with vibrant stage lasers and crowd silhouette"
                tone="stage"
                aspectRatio="wide"
                label="Headline US Arena Tour"
              />
            </div>

            <div className="pt-4 relative z-10 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-mist font-medium">Headline arena tours &bull; Red carpet galas</span>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#EC008C] to-[#FF2A85] px-5 py-2.5 rounded-full transition-all shadow-md group-hover:scale-105"
              >
                <span>See upcoming events</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (5 columns): Connections (Medium) & Everyday Benefits (Smallest) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Pillar 2: CONNECTIONS (MEDIUM WEIGHT) */}
            <div className="flex-1 bg-[#130D2E]/95 hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/40 rounded-[32px] p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-mist text-xs font-bold uppercase tracking-wider border border-white/10">
                    <Users className="w-3.5 h-3.5 text-[#00E5FF]" /> Pillar 02
                  </span>
                  <span className="text-xs text-mist font-mono uppercase tracking-widest">
                    Community
                  </span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white leading-snug">
                  Founders, creators, doctors, dancers. <span className="text-gold-light italic">Your kind of crowd.</span>
                </h4>
                <p className="text-xs text-mist leading-relaxed">
                  Private rooftop dinners, founder salons, and cultural mixers connecting leaders across technology, healthcare, arts, and finance.
                </p>

                <div className="pt-2">
                  <ImageSlot
                    src="/images/event_mixer_chicago.jpg"
                    alt="Executive rooftop lounge mixer with South Asian leaders in Chicago"
                    tone="venue"
                    aspectRatio="wide"
                    label="Executive Rooftop Lounge"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="text-[11px] text-mist">New York &bull; San Francisco &bull; Dallas</span>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00E5FF] transition-colors"
                >
                  <span>Meet members</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: EVERYDAY BENEFITS (SMALLEST & LOWEST) */}
            <div className="bg-[#130D2E]/80 hover:bg-[#1A123D] border border-white/10 hover:border-volt/40 rounded-[28px] p-6 space-y-3 relative overflow-hidden group shadow-lg">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-volt/15 text-volt text-[11px] font-bold uppercase tracking-wider border border-volt/30">
                  <Zap className="w-3 h-3" /> Everyday Perk
                </span>
                <span className="text-[10px] text-mist uppercase font-mono">Pillar 03 &bull; Quiet Bonus</span>
              </div>
              <h5 className="text-lg font-display font-bold text-white">
                And a few everyday wins, because membership should pay you back.
              </h5>
              <p className="text-xs text-mist leading-relaxed">
                Quiet utility partnership perks including Switch n Save energy review and curated dining privileges. Never the headline, always a plus.
              </p>
              <div className="pt-3 flex items-center justify-between border-t border-white/10 text-xs">
                <span className="text-[10px] text-mist">Partner terms apply</span>
                <Link
                  href="/deals"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-volt hover:underline"
                >
                  <span>Explore perks</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
