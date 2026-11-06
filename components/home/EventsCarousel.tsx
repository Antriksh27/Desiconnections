"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { eventsContent } from "@/content/events";
import { StatusChip } from "@/components/ui/StatusChip";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function EventsCarousel() {
  const showcaseEvents = eventsContent.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12 relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              PAST SHOWCASES &bull; CONCERT ARCHIVE
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Past <span className="text-gradient-eventin">Live Experiences</span>.
          </h2>
          <p className="body-lg text-mist">
            Explore past landmark concerts, theatre productions, and community galas organized across Columbus and regional stages.
          </p>
        </div>

        <Button
          variant="ghost"
          size="md"
          href="/events"
          className="shrink-0 self-start sm:self-auto gap-2 text-xs"
        >
          <span>Explore event archive</span>
          <ArrowUpRight className="w-4 h-4 text-[#FF2A85]" />
        </Button>
      </div>

      {/* Grid of past event showcase cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {showcaseEvents.map((event, idx) => (
          <Reveal key={event.slug} variant="rise" delay={0.08 * idx}>
            <Link
              href={`/events/${event.slug}`}
              className="group bg-[#130D2E]/95 hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/60 rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,0,140,0.22)] h-full"
            >
              {/* Poster Header */}
              <div className="relative">
                <ImageSlot
                  src={event.imageUrl}
                  alt={event.title}
                  tone={event.imageSlotTone}
                  aspectRatio="4:3"
                  label={event.title}
                >
                  <div className="flex items-center justify-between">
                    <StatusChip status={event.status} size="sm" />
                    <span className="text-[11px] font-bold text-white bg-[#EC008C] px-3 py-1 rounded-full shadow-md">
                      Showcase
                    </span>
                  </div>
                </ImageSlot>

                {/* City Tag Over Image */}
                <span className="absolute bottom-3 left-3 text-[11px] font-mono uppercase tracking-widest text-ivory bg-[#0A0618]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  {event.city}
                </span>
              </div>

              {/* Event Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF]">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2A85]" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FF2A85] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-mist">
                    <MapPin className="w-3.5 h-3.5 text-mist shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  {/* Lineup Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {event.lineup.slice(0, 3).map((artist, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-medium text-white/80 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-mist block uppercase tracking-wider font-semibold">
                      Tour Production
                    </span>
                    <span className="text-sm font-bold text-white font-display">
                      Columbus Showcase
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#EC008C] to-[#FF2A85] px-4 py-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
