"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mic2 } from "lucide-react";
import { starsContent } from "@/content/stars";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

export function StarsSpotlight() {
  // CRITICAL RULE: Render ONLY stars where rightsCleared is true
  const clearedStars = starsContent.filter((star) => star.rightsCleared);

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12 relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              HEADLINERS &bull; TALENT ROSTER
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Bollywood <span className="text-gradient-eventin">Spotlight</span> &amp; Icons.
          </h2>
          <p className="body-lg text-mist">
            Direct access to touring playback legends, theatre masters, keynote entrepreneurs, and live fusion performers hosted across community stages.
          </p>
        </div>

        <Link
          href="/stars"
          className="text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-gradient-to-r from-[#EC008C] to-[#FF2A85] px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 self-start sm:self-auto shadow-md group hover:scale-105"
        >
          <span>View All Talent</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Responsive grid of 6 headliner cards (2 rows of 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {clearedStars.map((star, idx) => (
          <Reveal key={star.slug} variant="rise" delay={0.1 * idx}>
            <div className="bg-[#130D2E]/90 hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/50 rounded-[32px] overflow-hidden p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-xl h-full">
              {/* Arch-Top Portrait with live badge */}
              <div className="relative mb-5">
                <ImageSlot
                  src={star.imageUrl}
                  alt={star.name}
                  tone="portrait"
                  aspectRatio="portrait"
                  archTop
                  label={star.name}
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EC008C] text-white shadow-md">
                    <Mic2 className="w-3 h-3" /> Confirmed
                  </div>
                </ImageSlot>
              </div>

              <div className="space-y-2.5 px-1 pb-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00E5FF] block font-mono mb-1">
                    {star.role}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#FF2A85] transition-colors">
                    {star.name}
                  </h3>
                  <p className="text-xs text-mist line-clamp-3 leading-relaxed mt-2">
                    {star.bio}
                  </p>
                </div>

                {star.linkedEventSlug && (
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <Link
                      href={`/events/${star.linkedEventSlug}`}
                      className="text-xs font-bold text-white hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Linked Tour Event</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Mandatory Disclaimer */}
      <p className="text-[11px] text-mist/70 text-center pt-2">
        Appearances subject to confirmation and tour schedules. Clearances verified under community management agreements.
      </p>
    </section>
  );
}
