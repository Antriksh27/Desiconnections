"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Ticket, Mic2, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function EventinFeatures() {
  const features = [
    {
      num: "01",
      title: "Front-Row Arena Allocations",
      description:
        "Guaranteed access to premium lower-bowl and private lounge seats for the biggest subcontinent arena tours before public sale.",
      icon: Ticket,
      accentColor: "from-[#EC008C] to-[#FF2A85]",
      glowColor: "rgba(236, 0, 140, 0.25)",
      badge: "Entertainment",
      link: "/events",
      linkText: "Explore Concerts",
    },
    {
      num: "02",
      title: "Artist Lounges & Galas",
      description:
        "Intimate green room walkthroughs, red carpet galas, and private meet-and-greet receptions with touring Bollywood legends.",
      icon: Mic2,
      accentColor: "from-[#00E5FF] to-[#0099FF]",
      glowColor: "rgba(0, 229, 255, 0.22)",
      badge: "Celebrity Access",
      link: "/stars",
      linkText: "View Talent Lineup",
    },
    {
      num: "03",
      title: "Curated Diaspora Salons",
      description:
        "Private rooftop mixers and founder dinners connecting tech executives, healthcare leaders, creators, and entrepreneurs in 6 US hubs.",
      icon: Users,
      accentColor: "from-[#D9A441] to-[#FF9F1C]",
      glowColor: "rgba(217, 164, 65, 0.22)",
      badge: "Connections",
      link: "/membership",
      linkText: "Membership Network",
    },
    {
      num: "04",
      title: "Switch n Save & Perks",
      description:
        "Quiet utility savings review through licensed US energy partners, curated fine dining privileges, and priority travel benefits.",
      icon: Zap,
      accentColor: "from-[#10B981] to-[#059669]",
      glowColor: "rgba(16, 185, 129, 0.22)",
      badge: "Everyday Perks",
      link: "/deals",
      linkText: "Partner Benefits",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-14 relative">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.12)_0%,rgba(10,6,24,0)_70%)] pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <span className="w-2 h-2 rounded-full bg-[#FF2A85] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              THE DESICONNECTIONS ADVANTAGE
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Designed for <span className="text-gradient-eventin">Culture</span>, Access &amp; Community.
          </h2>
          <p className="body-lg text-mist leading-relaxed">
            One membership bridging high-production Bollywood entertainment, high-trust diaspora networks, and practical everyday savings across the United States.
          </p>
        </div>

        <Link
          href="/join"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-[#EC008C] border border-white/15 hover:border-transparent text-white text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto shrink-0 shadow-md group"
        >
          <span>Request Membership</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Eventin 4-Card Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={idx} variant="rise" delay={0.1 * idx}>
              <div
                className="bg-[#130D2E]/90 hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/50 rounded-[28px] p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-xl"
                style={{
                  boxShadow: `0 10px 30px -10px ${item.glowColor}`,
                }}
              >
                {/* Large Background Watermark Number */}
                <span className="absolute -top-3 right-3 text-7xl font-display font-black text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.07] transition-colors">
                  {item.num}
                </span>

                <div className="space-y-5 relative z-10">
                  {/* Icon Circle */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-mist">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-white transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-mist leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-mist uppercase tracking-wider">
                    Feature {item.num}
                  </span>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00E5FF] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
