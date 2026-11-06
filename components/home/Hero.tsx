"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { eventsContent } from "@/content/events";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "motion/react";

export function Hero() {
  const featuredEvent = eventsContent[0];

  // Performer & icon avatar list
  const confirmedSpeakers = [
    { name: "Shreya Ghoshal", src: "/images/star_shreya_ghoshal.jpg" },
    { name: "Kumar Sanu", src: "/images/star_kumar_sanu.jpg" },
    { name: "Anupam Kher", src: "/images/star_anupam_kher.jpg" },
    { name: "Udit Narayan", src: "/images/star_udit_narayan.jpg" },
  ];

  return (
    <section className="relative min-h-[640px] lg:min-h-[780px] flex flex-col justify-between overflow-hidden pt-12 pb-10 px-6 sm:px-12 bg-[#0A0618]">
      {/* Background Ambience: Real Concert Stage Photography + Cosmic Stage Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero_concert.jpg"
          alt="The Desi Connections Stage Experience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-screen scale-105 filter saturate-125"
        />
        {/* Cinematic Scrims & Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0618]/90 via-[#0A0618]/75 to-[#0A0618]" />
        <div className="absolute -top-32 left-1/3 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.25)_0%,rgba(19,13,46,0.6)_45%,rgba(10,6,24,0)_75%)] opacity-90 blur-3xl" />
        <div className="absolute bottom-10 right-[-5%] w-[550px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15)_0%,rgba(10,6,24,0)_70%)] opacity-70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      {/* Main 2-Column Asymmetric Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (7 cols): High-Impact Typography & Speaker Avatars */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <Reveal variant="fade" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#130D2E]/90 border border-[#EC008C]/40 backdrop-blur-md shadow-[0_0_24px_rgba(236,0,140,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A85] animate-ping" />
                <span className="label-caps text-[#FF2A85] tracking-[0.2em] text-[11px] font-bold">
                  COLUMBUS FLAGSHIP HUB &bull; USA &amp; CANADA NETWORK
                </span>
              </div>
            </Reveal>

            <h1 className="display-xl text-ivory tracking-tight font-display font-extrabold leading-[1.08]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Meet. Connect.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient-eventin drop-shadow-[0_4px_24px_rgba(236,0,140,0.45)]"
              >
                Celebrate.
              </motion.span>
            </h1>

            <Reveal variant="rise" delay={0.35}>
              <p className="body-lg text-mist max-w-xl leading-relaxed">
                Exclusive events with Bollywood stars and real benefits for your everyday life. Receive 2 complimentary concert passes each year for up to 10 years, plus direct business referrals across the USA and Canada.
              </p>
            </Reveal>

            {/* CTAs with Angled Arrow */}
            <Reveal variant="rise" delay={0.45}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  href="/join"
                  className="gap-2 text-sm px-8"
                >
                  <span>Join The Desi Connections</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/events"
                  className="gap-2 text-sm px-7"
                >
                  <span>Explore Past Events</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF2A85]" />
                </Button>
              </div>
            </Reveal>

            {/* Overlapping Performer Avatars */}
            <Reveal variant="rise" delay={0.55}>
              <div className="pt-2 flex items-center gap-4">
                <div className="flex items-center -space-x-3">
                  {confirmedSpeakers.map((spk, idx) => (
                    <div
                      key={idx}
                      className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#130D2E] shadow-md ring-2 ring-[#EC008C]/40"
                    >
                      <Image
                        src={spk.src}
                        alt={spk.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EC008C] to-[#7928CA] text-white text-xs font-bold flex items-center justify-center border-2 border-[#130D2E] shadow-md">
                    +10
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-ivory block">
                    Sing Along with Icons: Shreya Ghoshal, Kumar Sanu, Udit Narayan &amp; Anupam Kher
                  </span>
                  <span className="text-[11px] text-mist block">
                    2 Free Annual Event Passes &bull; 10-Year Membership Access
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Landmark Past Showcase Card */}
          <div className="lg:col-span-5">
            <Reveal variant="rise" delay={0.4}>
              <div className="bg-[#130D2E]/95 border border-[#EC008C]/40 rounded-[32px] p-6 sm:p-7 backdrop-blur-2xl shadow-[0_25px_60px_rgba(236,0,140,0.22)] space-y-5 relative overflow-hidden group hover:border-[#EC008C]/65 transition-colors">

                {/* Event Photo Thumbnail */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0618]">
                  <Image
                    src={featuredEvent.imageUrl || "/images/event_shreya_ghoshal_tour.jpg"}
                    alt={featuredEvent.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618]/90 via-transparent to-transparent opacity-80" />

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EC008C] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {featuredEvent.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest text-ivory bg-[#0A0618]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    PASS #TDC-COLUMBUS
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-ivory font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
                      {featuredEvent.city}, OH
                    </span>
                    <span className="flex items-center gap-1.5 text-gold-light">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredEvent.date.split(",")[1]?.trim() || "28 October 2023"}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E5FF]">
                      Featured Past Showcase
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-light transition-colors">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-xs text-mist truncate">
                    {featuredEvent.venue}
                  </p>
                </div>

                {/* Showcase Impact & Reception Highlights */}
                <div className="bg-[#0A0618]/80 border border-white/10 rounded-2xl p-4 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-mist uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
                    <span>Showcase Production Highlights</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-1">
                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-base sm:text-lg font-extrabold font-display text-ivory">
                        Full
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        House
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-base sm:text-lg font-extrabold font-display text-ivory">
                        VIP
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        Lounge
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-base sm:text-lg font-extrabold font-display text-ivory">
                        2 Passes
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        Claimed
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-base sm:text-lg font-extrabold font-display text-[#00E5FF]">
                        Strings
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#00E5FF] font-bold">
                        Symphony
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lineup Chips & Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-dashed border-white/15">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EC008C]/20 border border-[#EC008C]/40 text-[#FF2A85] font-bold">
                      2 Passes Included
                    </span>
                    {featuredEvent.lineup.slice(0, 1).map((artist, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-ivory"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    href={`/events/${featuredEvent.slug}`}
                    className="gap-1.5 shrink-0"
                  >
                    <span>View Showcase</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Signature 4-Counter Stats Strip */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#130D2E]/80 border border-white/10 backdrop-blur-md">
          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              2 Passes<span className="text-[#FF2A85]"> / yr</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Complimentary Concert Tickets
            </span>
          </div>

          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              10<span className="text-[#00E5FF]"> Years</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Continuous Event Privileges
            </span>
          </div>

          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              70<span className="text-gold-light">+ Years</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Energy Advisory Experience
            </span>
          </div>

          <div className="text-center md:text-left px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              USA &amp;<span className="text-[#FF2A85]"> Canada</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Business &amp; Property Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
