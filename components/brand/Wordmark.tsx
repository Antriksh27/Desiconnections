import Link from "next/link";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  showDot?: boolean;
}

export function Wordmark({
  className,
  size = "md",
  asLink = true,
  showDot = false,
}: WordmarkProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl lg:text-5xl",
  };

  const content = (
    <span
      className={cn(
        "font-display tracking-tight inline-flex items-baseline select-none",
        sizeClasses[size],
        className
      )}
    >
      <span className="text-white font-bold">Desi</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC008C] to-[#FF2A85] font-extrabold ml-0.5">Connections</span>
      {showDot && <span className="text-[#EC008C] text-xs ml-1 inline-block">•</span>}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
        aria-label="DesiConnections Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
