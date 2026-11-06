import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { EventItem } from "@/content/events";
import { StatusChip } from "@/components/ui/StatusChip";
import { ImageSlot } from "@/components/ui/ImageSlot";

interface EventCardProps {
  event: EventItem;
  layout?: "grid" | "list";
}

export function EventCard({ event, layout = "grid" }: EventCardProps) {
  if (layout === "list") {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group bg-midnight border border-hairline rounded-[24px] p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto">
          {/* Date Block */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-plum/70 border border-hairline flex flex-col items-center justify-center shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold-light">
              {event.date.split(" ")[1] || "DATE"}
            </span>
            <span className="font-display text-2xl font-semibold text-ivory">
              {event.date.split(" ")[2] || "01"}
            </span>
          </div>

          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <StatusChip status={event.status} size="sm" />
              <span className="text-[11px] font-semibold text-mist bg-plum/50 px-2.5 py-0.5 rounded-full border border-hairline">
                {event.category}
              </span>
            </div>
            <h3 className="text-xl font-display text-ivory group-hover:text-gold-light transition-colors">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-mist">
              <MapPin className="w-3.5 h-3.5 text-muted shrink-0" />
              <span>{event.venue}</span>
              <span>&bull;</span>
              <span className="text-gold-light font-medium">{event.city}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-hairline">
          <div className="text-left md:text-right">
            <span className="text-[10px] text-muted block uppercase tracking-wider">Production</span>
            <span className="text-base font-bold text-ivory">Showcase Archive</span>
          </div>
          <span className="bg-gradient-to-r from-[#EC008C] to-[#FF2A85] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-transform group-hover:scale-105 inline-flex items-center gap-1.5 shadow-md">
            <span>Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    );
  }

  // Grid Layout
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-[#130D2E] border border-white/10 rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#EC008C]/50 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(236,0,140,0.18)]"
    >
      <div className="relative">
        <ImageSlot
          src={event.imageUrl}
          alt={event.title}
          tone={event.imageSlotTone}
          aspectRatio="4:5"
          label={event.title}
        >
          <div className="flex items-center justify-between">
            <StatusChip status={event.status} size="sm" />
            <span className="text-[11px] font-bold text-white bg-[#EC008C] px-3 py-1 rounded-full shadow-md">
              Past Showcase
            </span>
          </div>
        </ImageSlot>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-[#00E5FF]">
              <Calendar className="w-3.5 h-3.5 text-[#FF2A85]" />
              {event.date}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-mist bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              {event.city}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-ivory group-hover:text-[#FF2A85] transition-colors leading-snug">
            {event.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-mist">
            <MapPin className="w-3.5 h-3.5 text-muted shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          
          {/* Lineup Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            {event.lineup.slice(0, 2).map((artist, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium text-white/80 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full"
              >
                {artist}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-mist block uppercase tracking-wider font-semibold">Production</span>
            <span className="text-sm font-bold text-ivory font-display">Showcase Archive</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white bg-[#EC008C]/20 hover:bg-[#EC008C] border border-[#EC008C]/40 px-4 py-2 rounded-full transition-all group-hover:scale-105">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
