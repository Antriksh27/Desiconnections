"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MembershipShowpieceCardProps {
  memberName?: string;
  memberNumber?: string;
  tierName?: string;
  className?: string;
}

export function MembershipShowpieceCard({
  memberName = "COMMUNITY MEMBER",
  memberNumber = "TDC • 614-772-2247",
  tierName = "Commercial Member",
  className,
}: MembershipShowpieceCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={cn("w-full max-w-[420px] select-none py-4", className)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="aspect-[1.586] rounded-3xl bg-gold-foil p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(217,164,65,0.25)] border border-white/30 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(217,164,65,0.35)]"
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-start justify-between text-ink relative z-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-80 block">
              Private Membership
            </span>
            <div className="text-xl sm:text-2xl font-display font-semibold tracking-tight">
              The Desi <span className="italic font-light">Connections</span>
            </div>
          </div>
          <div className="p-2 rounded-full bg-ink/10 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-ink" />
          </div>
        </div>

        {/* Chip & Micro-pattern */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="w-11 h-8 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border border-black/20 shadow-inner flex items-center justify-center">
            <div className="w-7 h-5 border border-black/20 rounded grid grid-cols-2" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/10 text-ink text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{tierName}</span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="text-ink relative z-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-mono tracking-[0.2em] opacity-80">
              {memberNumber}
            </p>
            <p className="text-base sm:text-lg font-display font-semibold tracking-wide">
              {memberName}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-mono uppercase tracking-widest opacity-70 block">
              Member Since
            </span>
            <span className="text-xs font-mono font-bold tracking-wider">
              2026
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
