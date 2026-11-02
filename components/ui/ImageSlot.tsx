import * as React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export type ImageSlotTone = "crowd" | "portrait" | "stage" | "venue";
export type ImageSlotRatio = "4:5" | "16:9" | "1:1" | "portrait" | "wide";

export interface ImageSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  priority?: boolean;
  tone?: ImageSlotTone;
  aspectRatio?: ImageSlotRatio;
  label?: string;
  archTop?: boolean;
}

export function ImageSlot({
  src,
  alt,
  priority = false,
  tone = "crowd",
  aspectRatio = "4:5",
  label,
  archTop = false,
  className,
  children,
  ...props
}: ImageSlotProps) {
  const toneGradients = {
    crowd: "from-[#1E1544] via-[#130D2E] to-[#0A0618]",
    portrait: "from-[#2A153A] via-[#130D2E] to-[#0A0618]",
    stage: "from-[#1F0E36] via-[#130D2E] to-[#0A0618]",
    venue: "from-[#130D2E] via-[#0B081E] to-[#0A0618]",
  };

  const defaultLabels = {
    crowd: "Event Atmosphere",
    portrait: "Artist Spotlight",
    stage: "Headline Stage",
    venue: "Club Lounge",
  };

  const ratioStyles = {
    "4:5": "aspect-[4/5]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full border border-white/10 flex flex-col justify-end p-5 select-none transition-all duration-500 group-hover:border-[#EC008C]/40 group-hover:shadow-[0_12px_36px_rgba(236,0,140,0.18)]",
        toneGradients[tone],
        ratioStyles[aspectRatio],
        archTop ? "rounded-t-[999px] rounded-b-[28px]" : "rounded-[28px]",
        className
      )}
      {...props}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt || label || "DesiConnections visual"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
          {/* Rich cinematic vignette scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618] via-[#0A0618]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[inherit] pointer-events-none" />
        </>
      ) : (
        <>
          {/* Fallback scrim */}
          <div className="absolute inset-0 bg-[#0A0618]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="relative z-10 mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0618]/80 border border-white/10 backdrop-blur-sm text-[11px] font-medium text-mist">
              <Camera className="w-3.5 h-3.5 text-[#FF2A85]" />
              <span>{label || defaultLabels[tone]}</span>
            </div>
          </div>
        </>
      )}

      {/* Children elements (badges, titles, tags) */}
      {children && <div className="relative z-10 space-y-2">{children}</div>}
    </div>
  );
}
