"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  // Extract digits and suffix/prefix (e.g. "4,800+" -> num: 4800, suffix: "+")
  const match = value.match(/^([^0-9]*)([\d,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const rawNum = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[3] : "";

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView || shouldReduceMotion || rawNum === 0) {
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * rawNum));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(rawNum);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, rawNum, duration, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
