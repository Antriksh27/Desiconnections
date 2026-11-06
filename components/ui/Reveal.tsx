"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  variant?: "rise" | "unmask" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const variants = {
    rise: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        duration,
        delay,
        ease: cubicEase,
      },
    },
    unmask: {
      initial: {
        opacity: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      whileInView: {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      transition: {
        duration: duration + 0.1,
        delay,
        ease: cubicEase,
      },
    },
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: {
        duration,
        delay,
        ease: "easeOut" as const,
      },
    },
  };

  const selected = variants[variant];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.whileInView}
      viewport={{ once: true, amount: "some" }}
      transition={selected.transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
