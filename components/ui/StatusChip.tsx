import * as React from "react";
import { Sparkles, Star, Zap, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusChipType =
  | "selling-fast"
  | "few-left"
  | "sold-out"
  | "members-first"
  | "perk"
  | "announced"
  | "past";

export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusChipType;
  customLabel?: string;
  size?: "sm" | "md";
}

export function StatusChip({
  status,
  customLabel,
  size = "md",
  className,
  ...props
}: StatusChipProps) {
  const configs = {
    "selling-fast": {
      label: "Selling fast",
      icon: Sparkles,
      styles: "bg-marigold/15 text-marigold border-marigold/30",
    },
    "few-left": {
      label: "Few left",
      icon: null,
      styles: "bg-rani/15 text-rani border-rani/30",
    },
    "sold-out": {
      label: "Sold out",
      icon: AlertCircle,
      styles: "bg-danger/15 text-danger border-danger/30",
    },
    "members-first": {
      label: "Members first",
      icon: Star,
      styles: "bg-gold/15 text-gold-light border-gold/30",
    },
    perk: {
      label: "Member perk",
      icon: Zap,
      styles: "bg-volt/15 text-volt border-volt/30",
    },
    announced: {
      label: "Just announced",
      icon: Sparkles,
      styles: "bg-plum text-mist border-hairline",
    },
    past: {
      label: "Past tour",
      icon: null,
      styles: "bg-midnight text-muted border-hairline",
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3.5 py-1.5 gap-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-bold uppercase tracking-wider rounded-full border backdrop-blur-sm select-none",
        sizeStyles[size],
        config.styles,
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className={cn(
            size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3",
            status === "members-first" && "fill-gold-light"
          )}
        />
      )}
      <span>{customLabel || config.label}</span>
    </span>
  );
}
