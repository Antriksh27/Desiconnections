import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  speed = 35,
  pauseOnHover = true,
  className,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden w-full select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-marquee flex gap-6 items-center py-2",
          !pauseOnHover && "hover:[animation-play-state:running]"
        )}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex gap-6 items-center shrink-0">{children}</div>
        <div className="flex gap-6 items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
