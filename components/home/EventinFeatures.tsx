"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Ticket, Building2, Briefcase, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function EventinFeatures() {
  const features = [
    {
      num: "01",
      title: "Free Annual Event Passes",
      description:
        "Receive 2 complimentary tickets each year for top concerts and cultural events in Columbus and sponsored tour cities for up to 10 years.",
      icon: Ticket,
      accentColor: "from-[#EC008C] to-[#FF2A85]",
      glowColor: "rgba(236, 0, 140, 0.25)",
      badge: "Entertainment",
      link: "/events",
      linkText: "View Concert Lineup",
    },
    {
      num: "02",
      title: "Business & Property Exchange",
      description:
        "Buy or sell commercial properties, motels, gas stations, and enterprises across the USA and Canada for free. No fees, just referral-based growth.",
      icon: Building2,
      accentColor: "from-[#D9A441] to-[#FF9F1C]",
      glowColor: "rgba(217, 164, 65, 0.22)",
      badge: "North America Marketplace",
      link: "/membership#marketplace",
      linkText: "Explore Marketplace",
    },
    {
      num: "03",
      title: "Employment Opportunities",
      description:
        "Looking for a job or need to hire talent? Post your employment requirements with us at no cost. Connect directly with people by your side.",
      icon: Briefcase,
      accentColor: "from-[#00E5FF] to-[#0099FF]",
      glowColor: "rgba(0, 229, 255, 0.22)",
      badge: "Community Talent",
      link: "/membership#employment",
      linkText: "Career Exchange",
    },
    {
      num: "04",
      title: "Expert Energy Advisory",
      description:
        "Access over 70 years of combined electricity and natural gas advisory experience with Switch n Save LLC to manage costs for your home or business.",
      icon: Zap,
      accentColor: "from-[#10B981] to-[#059669]",
      glowColor: "rgba(16, 185, 129, 0.22)",
      badge: "Utility Advisory",
      link: "/deals",
      linkText: "Energy Guidance",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-14 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.12)_0%,rgba(10,6,24,0)_70%)] pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <span className="w-2 h-2 rounded-full bg-[#FF2A85] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              THE DESI CONNECTIONS ADVANTAGE
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Connecting <span className="text-gradient-eventin">Communities</span>, Empowering Growth.
          </h2>
          <p className="body-lg text-mist leading-relaxed">
            One community membership bridging headline South Asian entertainment, peer-to-peer business trade across North America, and trusted energy advisory.
          </p>
        </div>

        <Link
          href="/join"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-[#EC008C] border border-white/15 hover:border-transparent text-white text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto shrink-0 shadow-md group"
        >
          <span>Request Membership Pass</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 4-Card Feature Grid */}
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-mist/60">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-ivory">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-mist leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF2A85] transition-colors"
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
