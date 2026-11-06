"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryMoment {
  src: string;
  title: string;
  category: string;
  location: string;
  caption: string;
}

const galleryMoments: GalleryMoment[] = [
  {
    src: "/images/event_shreya_ghoshal_tour.jpg",
    title: "Shreya Ghoshal Tour Citation",
    category: "Concert Tour",
    location: "Columbus, OH",
    caption: "The Unstoppable Tour presentation with Community Director Mr. Ketan Patel.",
  },
  {
    src: "/images/event_kumar_sanu_live.jpg",
    title: "Kumar Sanu Live on Stage",
    category: "Live Concert",
    location: "Columbus, OH",
    caption: "Evergreen 90s romance hits performed live in front of a capacity audience.",
  },
  {
    src: "/images/event_anupam_kher_theatre.jpg",
    title: "Mera Woh Matlab Nahi Tha",
    category: "Live Theatre",
    location: "Columbus, OH",
    caption: "Anupam Kher and Neena Gupta starring in the celebrated theatrical drama.",
  },
  {
    src: "/images/event_vivek_ramaswamy_reception.jpg",
    title: "Diaspora Leadership Forum",
    category: "Business Reception",
    location: "Columbus, OH",
    caption: "Vivek Ramaswamy welcomed by Mr. Ketan Patel for diaspora commerce discussions.",
  },
  {
    src: "/images/event_dj_yangkee_stage.jpg",
    title: "Desi Nights Gala Production",
    category: "Ballroom Gala",
    location: "Columbus, OH",
    caption: "DJ Yangkee headlining the stage with the DJ MAVI production setup.",
  },
  {
    src: "/images/event_anupam_kher_arrival.jpg",
    title: "VIP Airport Welcomes",
    category: "Artist Hospitality",
    location: "Columbus, OH",
    caption: "Traditional welcome with red roses for Anupam Kher upon arrival in Ohio.",
  },
];

export function HomeGallery() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.06)_0%,rgba(10,6,24,0)_70%)] pointer-events-none blur-3xl" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC008C]/15 border border-[#EC008C]/35">
            <Camera className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
              AUTHENTIC EVENT MOMENTS &bull; COMMUNITY ARCHIVE
            </span>
          </div>
          <h2 className="display-lg text-white font-display font-extrabold leading-tight">
            Memories with <span className="text-gradient-eventin">Icons &amp; Stars</span>.
          </h2>
          <p className="body-lg text-mist">
            Real moments from sponsored concert tours, theatrical evenings, and private receptions hosted by Mr. Ketan Patel in Columbus, Ohio.
          </p>
        </div>

        <Link
          href="/events"
          className="text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-[#130D2E] hover:bg-[#1A123D] border border-white/10 hover:border-[#EC008C]/50 px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 self-start sm:self-auto shadow-md group"
        >
          <span>View Tour Calendar</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 6-Photo Masonry/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {galleryMoments.map((item, idx) => (
          <Reveal key={idx} variant="rise" delay={0.08 * idx}>
            <div className="group bg-[#130D2E]/90 border border-white/10 hover:border-[#EC008C]/50 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full">
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-plum/40">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618] via-transparent to-transparent opacity-80" />

                {/* Category Chip */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A0618]/85 text-[#00E5FF] border border-white/10 backdrop-blur-md">
                  {item.category}
                </span>

                {/* Location */}
                <span className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90">
                  {item.location}
                </span>
              </div>

              {/* Caption */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FF2A85] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-mist leading-relaxed mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
