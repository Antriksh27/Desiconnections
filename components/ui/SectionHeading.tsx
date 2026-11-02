import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  titleBefore?: string;
  titleItalic: string;
  titleAfter?: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  titleBefore,
  titleItalic,
  titleAfter,
  description,
  align = "left",
  size = "lg",
  className,
}: SectionHeadingProps) {
  const sizeStyles = {
    md: "display-md",
    lg: "display-lg",
    xl: "display-xl",
  };

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : "flex"}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EC008C]/10 border border-[#EC008C]/30 text-[#EC008C] text-[11px] font-bold uppercase tracking-wider">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={cn("text-white font-display", sizeStyles[size])}>
        {titleBefore && <span>{titleBefore} </span>}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC008C] to-[#FF2A85] font-extrabold">{titleItalic}</span>
        {titleAfter && <span> {titleAfter}</span>}
      </h2>
      {description && (
        <p
          className={cn(
            "body-lg text-mist",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
