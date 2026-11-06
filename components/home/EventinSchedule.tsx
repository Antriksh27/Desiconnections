"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Sparkles, ArrowRight, Ticket } from "lucide-react";
import { eventsContent } from "@/content/events";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EventinSchedule() {
  const activeEvents = eventsContent.filter((e) => e.status !== "past").slice(0, 4);
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const currentEvent = activeEvents[selectedIdx] || activeEvents[0];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="CONCERT ITINERARY &bull; SPONSORED TOUR SCHEDULE"
          titleBefore="Featured"
          titleItalic="Concert Schedule"
          titleAfter="&amp; Timelines"
          description="Explore timeline breakdowns across our headline Columbus shows, Dandiya festivals, and regional tour dates."
        />
        <Button variant="ghost" size="md" href="/events" className="shrink-0 self-start sm:self-auto">
          View All Concerts &rarr;
        </Button>
      </div>

      {/* Eventin Style Tab Selector */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
        {activeEvents.map((evt, idx) => {
          const isSelected = selectedIdx === idx;
          const shortDate = evt.date.split(",")[1]?.trim() || evt.date;
          return (
            <button
              key={evt.slug}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`group flex items-center gap-3.5 px-6 py-4 rounded-2xl transition-all duration-300 text-left shrink-0 cursor-pointer border ${
                isSelected
                  ? "bg-gradient-to-r from-[#EC008C] to-[#7928CA] text-white border-transparent shadow-[0_8px_25px_rgba(236,0,140,0.35)] scale-[1.02]"
                  : "bg-[#130D2E]/80 text-mist hover:text-ivory border-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-extrabold text-sm ${
                  isSelected ? "bg-white/20 text-white" : "bg-white/5 text-[#FF2A85]"
                }`}
              >
                0{idx + 1}
              </div>
              <div>
                <span
                  className={`block text-[11px] font-bold uppercase tracking-wider ${
                    isSelected ? "text-white/80" : "text-mist"
                  }`}
                >
                  {evt.city}
                </span>
                <span className="block text-sm font-extrabold font-display text-white">
                  {shortDate}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Tour Stop Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Event Card Preview */}
        <div className="lg:col-span-5 bg-[#130D2E] border border-white/10 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
            {currentEvent.imageUrl ? (
              <Image
                src={currentEvent.imageUrl}
                alt={currentEvent.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-plum" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618] via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EC008C] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
              {currentEvent.category}
            </span>
            <span className="absolute bottom-3 left-3 text-xs font-semibold text-ivory flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
              {currentEvent.city}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-display font-bold text-ivory">
              {currentEvent.title}
            </h3>
            <p className="text-xs text-mist leading-relaxed">
              {currentEvent.venue}
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-mist block">VIP Admission</span>
              <span className="text-lg font-bold text-ivory font-display">{currentEvent.priceFrom || "Members only"}</span>
            </div>
            <Button
              variant="primary"
              size="md"
              href={`/events/${currentEvent.slug}`}
              className="gap-2"
            >
              <Ticket className="w-4 h-4" />
              <span>Pass Details</span>
            </Button>
          </div>
        </div>

        {/* Right Column: Eventin Session Timeline */}
        <div className="lg:col-span-7 bg-[#130D2E]/70 border border-white/10 rounded-[32px] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF2A85]" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-ivory">
                Official Programme &bull; {currentEvent.city}
              </h4>
            </div>
            <span className="text-xs text-mist font-mono">
              EST / Local Time
            </span>
          </div>

          <div className="space-y-4">
            {currentEvent.schedule.map((slot, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#0A0618]/80 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#EC008C]/40 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EC008C]/20 to-[#7928CA]/20 border border-[#EC008C]/30 flex flex-col items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF2A85]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#00E5FF]">
                        {slot.time}
                      </span>
                      <span className="text-white/20">&bull;</span>
                      <span className="text-[11px] font-semibold text-[#FF2A85] uppercase">
                        Session 0{sIdx + 1}
                      </span>
                    </div>
                    <h5 className="text-base font-display font-semibold text-ivory">
                      {slot.activity}
                    </h5>
                    <p className="text-xs text-mist">
                      {currentEvent.venue} &bull; Main Stage
                    </p>
                  </div>
                </div>

                <Link
                  href={`/events/${currentEvent.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-[#EC008C] border border-white/10 px-4 py-2 rounded-full transition-all shrink-0 self-start sm:self-auto"
                >
                  <span>Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
