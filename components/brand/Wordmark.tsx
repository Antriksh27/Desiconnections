import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  showDot?: boolean;
  variant?: "horizontal" | "full" | "emblem" | "text";
  theme?: "dark" | "light";
  priority?: boolean;
}

export function Wordmark({
  className,
  size = "md",
  asLink = true,
  showDot = false,
  variant = "horizontal",
  theme = "dark",
  priority,
}: WordmarkProps) {
  // Height classes by variant and size
  const horizontalSizeClasses = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };

  const fullSizeClasses = {
    sm: "h-10 sm:h-12",
    md: "h-14 sm:h-16",
    lg: "h-20 sm:h-24",
    xl: "h-28 sm:h-32",
  };

  const emblemSizeClasses = {
    sm: "h-9 w-9 sm:h-10 sm:w-10",
    md: "h-11 w-11 sm:h-12 sm:w-12",
    lg: "h-14 w-14 sm:h-16 sm:w-16",
    xl: "h-20 w-20 sm:h-24 sm:w-24",
  };

  const textSizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl lg:text-5xl",
  };

  let content: React.ReactNode;

  if (variant === "horizontal") {
    const src =
      theme === "light"
        ? "/images/logo-horizontal.png"
        : "/images/logo-horizontal-dark.png";

    content = (
      <div className={cn("inline-flex items-center shrink-0", className)}>
        <Image
          src={src}
          alt="The Desi Connections"
          width={735}
          height={140}
          priority={priority ?? size === "sm"}
          className={cn(
            "w-auto max-w-full object-contain select-none",
            horizontalSizeClasses[size]
          )}
        />
      </div>
    );
  } else if (variant === "full") {
    const src =
      theme === "light" ? "/images/logo.png" : "/images/logo-dark.png";

    content = (
      <div className={cn("inline-flex items-center shrink-0", className)}>
        <Image
          src={src}
          alt="The Desi Connections"
          width={855}
          height={320}
          priority={priority ?? size === "sm"}
          className={cn(
            "w-auto max-w-full object-contain select-none",
            fullSizeClasses[size]
          )}
        />
      </div>
    );
  } else if (variant === "emblem") {
    content = (
      <div className={cn("inline-flex items-center shrink-0", className)}>
        <Image
          src="/images/logo-emblem.png"
          alt="DesiConnections Mark"
          width={512}
          height={512}
          priority={priority ?? size === "sm"}
          className={cn(
            "object-contain select-none",
            emblemSizeClasses[size]
          )}
        />
      </div>
    );
  } else {
    // Legacy / text variant
    content = (
      <span
        className={cn(
          "font-display tracking-tight inline-flex items-baseline select-none",
          textSizeClasses[size],
          className
        )}
      >
        <span className="text-white font-bold">The Desi</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC008C] to-[#FF2A85] font-extrabold ml-1.5">
          Connections
        </span>
        {showDot && (
          <span className="text-[#EC008C] text-xs ml-1 inline-block">•</span>
        )}
      </span>
    );
  }

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
        aria-label="The Desi Connections Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export const Logo = Wordmark;
