"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Ticket, Flame, Star } from "lucide-react";
import { eventsContent } from "@/content/events";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "motion/react";

function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export function Hero() {
  const nextEvent = eventsContent.find((e) => e.status !== "past") || eventsContent[0];

  // Target event date: Nov 21, 2026 19:00 EST
  const [timeLeft, setTimeLeft] = React.useState({
    days: 20,
    hours: 20,
    minutes: 50,
    seconds: 10,
  });

  React.useEffect(() => {
    const target = new Date("2026-11-21T19:00:00-05:00").getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Speaker & talent avatar list
  const confirmedSpeakers = [
    { name: "Arijit Singh", src: "/images/star_arijit.jpg" },
    { name: "Diljit Dosanjh", src: "/images/star_diljit.jpg" },
    { name: "DJ Shadow", src: "/images/star_dj_shadow.jpg" },
    { name: "Priya Sen", src: "/images/star_priya_sen.jpg" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-12 pb-10 px-6 sm:px-12 bg-[#0A0618]">
      {/* Background Ambience: Real Concert Stage Photography + Eventin Cosmic Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero_concert.jpg"
          alt="DesiConnections Arena Tour"
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

      {/* Main 2-Column Asymmetric Eventin Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): High-Impact Typography & Speaker Avatars */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <Reveal variant="fade" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#130D2E]/90 border border-[#EC008C]/40 backdrop-blur-md shadow-[0_0_24px_rgba(236,0,140,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A85] animate-ping" />
                <span className="label-caps text-[#FF2A85] tracking-[0.2em] text-[11px] font-bold">
                  US ARENA TOUR 2026 &bull; NEW YORK &bull; SF &bull; LA &bull; CHICAGO &bull; DALLAS
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
                Attend Exclusive
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient-eventin drop-shadow-[0_4px_24px_rgba(236,0,140,0.45)]"
              >
                Concerts &amp; Star Galas.
              </motion.span>
            </h1>

            <Reveal variant="rise" delay={0.35}>
              <p className="body-lg text-mist max-w-xl leading-relaxed">
                The private club connecting you to front-row arena seats, intimate artist lounges, and top South Asian professionals across New York, San Francisco, Los Angeles, and Chicago.
              </p>
            </Reveal>

            {/* CTAs with Eventin Angled Arrow */}
            <Reveal variant="rise" delay={0.45}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  href="/join"
                  className="gap-2 text-sm px-8"
                >
                  <span>Request Membership Invite</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/events"
                  className="gap-2 text-sm px-7"
                >
                  <span>View US Tour Schedule</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF2A85]" />
                </Button>
              </div>
            </Reveal>

            {/* Eventin Signature: Overlapping Speaker & Talent Avatars */}
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
                    +30
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-ivory block">
                    30+ Confirmed Headliners &amp; Guests
                  </span>
                  <span className="text-[11px] text-mist block">
                    Front-row allocations &bull; Private meet-and-greets
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Eventin VIP Ticket Stub & Live Countdown Box */}
          <div className="lg:col-span-5">
            <Reveal variant="rise" delay={0.4}>
              <div className="bg-[#130D2E]/95 border border-[#EC008C]/40 rounded-[32px] p-6 sm:p-7 backdrop-blur-2xl shadow-[0_25px_60px_rgba(236,0,140,0.22)] space-y-5 relative overflow-hidden group hover:border-[#EC008C]/65 transition-colors">
                
                {/* Event Photo Thumbnail */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={nextEvent.imageUrl || "/images/event_gala_nyc.jpg"}
                    alt={nextEvent.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618] via-transparent to-transparent opacity-85" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EC008C] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {nextEvent.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest text-ivory bg-[#0A0618]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    PASS #DC-2026-NYC
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-ivory font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
                      {nextEvent.city}
                    </span>
                    <span className="text-[#00E5FF] font-bold">
                      {nextEvent.priceFrom || "VIP Members"}
                    </span>
                  </div>
                </div>

                {/* Event Name & Date */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-mist">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2A85]" />
                    <span>{nextEvent.date}</span>
                    <span>&bull;</span>
                    <span className="text-[#FF2A85] flex items-center gap-1 font-semibold">
                      <Flame className="w-3 h-3 fill-[#FF2A85]" /> Selling Fast
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-display text-ivory">
                    {nextEvent.title}
                  </h2>
                  <p className="text-xs text-mist truncate">
                    {nextEvent.venue}
                  </p>
                </div>

                {/* Countdown Grid (Eventin Signature Style) */}
                <div className="space-y-2 pt-2 border-t border-dashed border-white/15">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#00E5FF]">
                      Live Doors Countdown
                    </span>
                    <span className="text-[10px] text-mist font-mono">
                      NOV 21 &bull; 7:00 PM EST
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-2xl font-extrabold font-display text-ivory">
                        {padZero(timeLeft.days)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        Days
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-2xl font-extrabold font-display text-ivory">
                        {padZero(timeLeft.hours)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        Hours
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-2xl font-extrabold font-display text-ivory">
                        {padZero(timeLeft.minutes)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#FF2A85] font-bold">
                        Mins
                      </span>
                    </div>

                    <div className="bg-[#0A0618]/90 border border-white/10 rounded-xl p-2.5 shadow-inner">
                      <span className="block text-2xl font-extrabold font-display text-[#00E5FF]">
                        {padZero(timeLeft.seconds)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#00E5FF] font-bold">
                        Secs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lineup Chips & Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-dashed border-white/15">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    {nextEvent.lineup.slice(0, 2).map((artist, idx) => (
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
                    href={`/events/${nextEvent.slug}`}
                    className="gap-1.5 shrink-0"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Reserve VIP Pass</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Eventin Signature 4-Counter Stats Strip */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#130D2E]/80 border border-white/10 backdrop-blur-md">
          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              32<span className="text-[#FF2A85]">+</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Headline Arena Tours
            </span>
          </div>

          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              5,400<span className="text-[#00E5FF]">+</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Verified Club Members
            </span>
          </div>

          <div className="text-center md:text-left md:border-r border-white/10 px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              6<span className="text-gold-light"> US Hubs</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              NY &bull; SF &bull; LA &bull; CHI &bull; DAL
            </span>
          </div>

          <div className="text-center md:text-left px-4 space-y-0.5">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-ivory">
              48<span className="text-[#FF2A85]">h</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-mist">
              Priority Ticket Presales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
