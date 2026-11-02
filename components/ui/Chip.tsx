import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "active" | "gold";
  size?: "sm" | "md";
}

export function Chip({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: ChipProps) {
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-1",
    md: "text-xs px-3.5 py-1.5",
  };

  const variantStyles = {
    default: "bg-plum/70 text-mist border border-hairline hover:border-hairline-strong",
    outline: "bg-transparent text-mist border border-hairline hover:border-gold hover:text-ivory",
    active: "bg-midnight text-gold-light border border-gold/40 shadow-sm",
    gold: "bg-gold/15 text-gold-light border border-gold/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full transition-colors select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
