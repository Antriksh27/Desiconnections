import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "midnight" | "plum" | "plum-soft";
  radius?: "md" | "lg";
  interactive?: boolean;
}

export function Card({
  variant = "midnight",
  radius = "lg",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    midnight: "bg-midnight",
    plum: "bg-plum",
    "plum-soft": "bg-plum-soft",
  };

  const radiusStyles = {
    md: "rounded-2xl", // 16px
    lg: "rounded-[28px]", // 28px
  };

  return (
    <div
      className={cn(
        "relative border border-hairline overflow-hidden transition-all duration-300",
        // Soft inner top highlight
        "shadow-[inset_0_1px_0_rgba(247,241,232,0.06)]",
        variantStyles[variant],
        radiusStyles[radius],
        interactive &&
          "group cursor-pointer hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(214,51,108,0.15)]",
        className
      )}
      {...props}
    >
      {/* Subtle hover bloom backdrop for interactive cards */}
      {interactive && (
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-stage-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
