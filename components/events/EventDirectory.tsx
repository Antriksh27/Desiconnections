"use client";

import * as React from "react";
import { LayoutGrid, List, Sparkles, MapPin, Calendar, RotateCcw } from "lucide-react";
import { EventItem } from "@/content/events";
import { EventCard } from "@/components/events/EventCard";
import { StatusChip } from "@/components/ui/StatusChip";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";

interface EventDirectoryProps {
  initialEvents: EventItem[];
}

export function EventDirectory({ initialEvents }: EventDirectoryProps) {
  const [selectedCity, setSelectedCity] = React.useState<string>("all");
  const [selectedMonth, setSelectedMonth] = React.useState<string>("all");
  const [selectedType, setSelectedType] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  // The next upcoming major event is featured at the top
  const featuredEvent = initialEvents[0];

  const filteredEvents = initialEvents.filter((event) => {
    if (selectedCity !== "all" && event.city.toLowerCase() !== selectedCity.toLowerCase()) {
      return false;
    }
    if (selectedMonth !== "all" && !event.date.toLowerCase().includes(selectedMonth.toLowerCase())) {
      return false;
    }
    if (selectedType !== "all" && event.category.toLowerCase() !== selectedType.toLowerCase()) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCity("all");
    setSelectedMonth("all");
    setSelectedType("all");
  };

  const cities = ["all", "New York", "San Francisco", "Los Angeles", "Chicago", "Dallas", "New Jersey"];
  const months = ["all", "October", "November", "December", "January"];
  const types = ["all", "Live Concert", "Club Gala", "Networking", "Club Night"];

  return (
    <div className="space-y-16">
      {/* 1. Featured Event Banner */}
      {featuredEvent && (
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-plum via-midnight to-ink border border-gold/40 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold-light text-xs font-bold uppercase tracking-wider border border-gold/40">
                  <Sparkles className="w-3.5 h-3.5 fill-gold-light" /> Featured Showcase
                </span>
                <StatusChip status={featuredEvent.status} size="sm" />
              </div>

              <h2 className="display-md text-ivory">
                {featuredEvent.title}
              </h2>

              <p className="body-base text-mist max-w-xl">
                Experience red carpet arrivals, acoustic fusion, and private mezzanine access at Manhattan&apos;s premier gala night.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-xs text-mist font-medium pt-2">
                <span className="flex items-center gap-1.5 text-gold-light">
                  <Calendar className="w-4 h-4" /> {featuredEvent.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-muted" /> {featuredEvent.venue}
                </span>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button variant="primary" size="md" href={`/events/${featuredEvent.slug}`}>
                  Get Tickets
                </Button>
                <Button variant="ghost" size="md" href={`/events/${featuredEvent.slug}`}>
                  View Schedule &amp; Lineup
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageSlot
                src={featuredEvent.imageUrl}
                alt={featuredEvent.title}
                tone="stage"
                aspectRatio="16:9"
                label="Featured: Gala Stage & Red Carpet"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Filter Bar & Controls */}
      <div className="bg-midnight border border-hairline rounded-3xl p-5 sm:p-6 space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* City Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-muted mr-1">City:</span>
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCity.toLowerCase() === city.toLowerCase()
                    ? "bg-gold text-ink shadow-sm"
                    : "bg-plum/60 text-mist hover:text-ivory border border-hairline"
                }`}
              >
                {city === "all" ? "All Cities" : city}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1.5 bg-ink p-1 rounded-full border border-hairline shrink-0 self-end md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                viewMode === "grid" ? "bg-plum text-gold-light" : "text-muted hover:text-ivory"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-label="List view"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                viewMode === "list" ? "bg-plum text-gold-light" : "text-muted hover:text-ivory"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Secondary Filters: Month & Type */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-hairline text-xs">
          <div className="flex items-center gap-2">
            <span className="text-muted uppercase font-bold tracking-wider">Month:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-ink border border-hairline rounded-xl px-3 py-1.5 text-xs text-ivory focus:outline-none focus:border-gold"
            >
              <option value="all">All Months</option>
              {months.filter((m) => m !== "all").map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-muted uppercase font-bold tracking-wider">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-ink border border-hairline rounded-xl px-3 py-1.5 text-xs text-ivory focus:outline-none focus:border-gold"
            >
              <option value="all">All Event Types</option>
              {types.filter((t) => t !== "all").map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {(selectedCity !== "all" || selectedMonth !== "all" || selectedType !== "all") && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-gold-light hover:underline flex items-center gap-1 ml-auto cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Reset filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Event List or Empty State */}
      {filteredEvents.length > 0 ? (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} layout={viewMode} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-midnight/70 border border-hairline rounded-3xl p-12 text-center space-y-4 max-w-xl mx-auto my-8">
          <p className="text-lg font-display text-ivory">
            No events match. Try another city.
          </p>
          <p className="text-xs text-mist leading-relaxed">
            We are curating headline tours across New York, San Francisco, Los Angeles, Chicago, and Dallas. New announcements drop fortnightly.
          </p>
          <div className="pt-2">
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              Reset all filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
