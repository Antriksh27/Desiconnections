"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external = false,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-[0.18em] uppercase transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

    const sizeStyles = {
      sm: "text-[11px] px-5 py-2.5 rounded-full min-h-[44px]",
      md: "text-xs px-8 py-3.5 sm:py-4 rounded-full min-h-[48px]",
      lg: "text-xs px-10 py-4 sm:py-5 rounded-full min-h-[56px]",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#EC008C] to-[#FF2A85] text-white font-bold shadow-[0_8px_25px_rgba(236,0,140,0.35)] hover:shadow-[0_12px_32px_rgba(236,0,140,0.55)] hover:scale-[1.02] active:scale-[0.98]",
      ghost:
        "bg-white/[0.04] border border-white/15 text-white hover:border-[#EC008C] hover:text-[#EC008C] hover:bg-[#EC008C]/10 active:scale-[0.98]",
      link:
        "bg-transparent p-0 min-h-0 text-white hover:text-[#EC008C] tracking-normal normal-case font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#EC008C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",
    };

    const combinedClassName = cn(
      baseStyles,
      variant !== "link" && sizeStyles[size],
      variantStyles[variant],
      className
    );

    const [magneticOffset, setMagneticOffset] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (variant !== "primary" || disabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
      setMagneticOffset({ x, y });
    };

    const handleMouseLeave = () => {
      setMagneticOffset({ x: 0, y: 0 });
    };

    const magneticStyle =
      variant === "primary" && (magneticOffset.x !== 0 || magneticOffset.y !== 0)
        ? {
            transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
            transition: "transform 0.12s ease-out",
          }
        : undefined;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={magneticStyle}
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={magneticStyle}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={magneticStyle}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
