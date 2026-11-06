"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { StarItem } from "@/content/stars";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/app/actions/submitLead";

interface StarDirectoryProps {
  initialStars: StarItem[];
}

export function StarDirectory({ initialStars }: StarDirectoryProps) {
  const [filter, setFilter] = React.useState<"all" | "upcoming" | "past">("all");
  const [notifyEmail, setNotifyEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = React.useState(false);

  // STRICT RULE: Only consider stars where rightsCleared is true
  const clearedStars = initialStars.filter((s) => s.rightsCleared);

  const filteredStars = clearedStars.filter((star) => {
    if (filter === "upcoming") {
      return star.status === "confirmed" || star.status === "announced";
    }
    if (filter === "past") {
      return star.status === "past";
    }
    return true;
  });

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;

    setIsSubmitting(true);
    const res = await submitLead({
      source: "newsletter",
      email: notifyEmail,
    });
    setIsSubmitting(false);

    if (res.success) {
      setSubscribeSuccess(true);
      setNotifyEmail("");
    }
  };

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-4">
        <div className="flex items-center gap-2">
          {(["all", "past", "upcoming"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === tab
                  ? "bg-gold text-ink shadow-md"
                  : "bg-plum/60 text-mist hover:text-ivory border border-hairline"
              }`}
            >
              {tab === "all" ? "All Talent" : tab === "past" ? "Past Appearances" : "Upcoming Tours"}
            </button>
          ))}
        </div>
        <span className="text-xs text-muted">
          Showing {filteredStars.length} cleared {filteredStars.length === 1 ? "artist" : "artists"}
        </span>
      </div>

      {/* Editorial Grid or Empty State */}
      {filteredStars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStars.map((star) => (
            <Link
              key={star.slug}
              href={`/stars/${star.slug}`}
              className="group bg-midnight border border-hairline rounded-[28px] overflow-hidden p-4 flex flex-col justify-between hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl"
            >
              {/* Arch-Top Portrait */}
              <div className="relative mb-4">
                <ImageSlot
                  src={star.imageUrl}
                  alt={star.name}
                  tone="portrait"
                  aspectRatio="portrait"
                  archTop
                  label={star.name}
                >
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EC008C]/25 text-white border border-[#EC008C]/40 backdrop-blur-md">
                    <Sparkles className="w-2.5 h-2.5 fill-[#FF2A85] text-[#FF2A85]" />
                    <span className="capitalize">{star.status === "past" ? "Past Showcase" : star.status}</span>
                  </div>
                </ImageSlot>
              </div>

              <div className="space-y-2 px-2 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light block">
                  {star.role}
                </span>
                <h3 className="text-xl font-display text-ivory group-hover:text-gold-light transition-colors">
                  {star.name}
                </h3>
                <p className="text-xs text-mist line-clamp-2 leading-relaxed">
                  {star.bio}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-hairline px-2 flex items-center justify-between text-xs font-semibold text-ivory group-hover:text-gold transition-colors">
                <span>View artist profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State: Lineups drop soon with email capture */
        <div className="bg-midnight/80 border border-hairline rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-xl mx-auto my-8">
          <Sparkles className="w-8 h-8 text-gold-light mx-auto" />
          <div className="space-y-2">
            <h3 className="text-2xl font-display text-ivory">Lineups drop soon</h3>
            <p className="text-xs text-mist leading-relaxed">
              We are finalizing artist tour dates and likeness clearances. Enter your email to be the first to know when the next star is confirmed.
            </p>
          </div>

          {subscribeSuccess ? (
            <div className="p-4 rounded-2xl bg-plum/60 border border-gold/40 text-gold-light text-xs font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-light" />
              <span>You are on the talent notification list.</span>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                required
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-12 bg-ink border border-hairline-strong rounded-full px-5 text-sm text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
                className="shrink-0 h-12"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </Button>
            </form>
          )}
        </div>
      )}

      {/* Mandatory Disclaimer */}
      <p className="text-[11px] text-muted text-center pt-2">
        Appearances subject to confirmation. All talent clearances managed under verified agency agreements.
      </p>
    </div>
  );
}
