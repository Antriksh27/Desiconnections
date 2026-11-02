"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function subscribePointer(callback: () => void) {
  const mqFine = window.matchMedia("(pointer: fine)");
  const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  mqFine.addEventListener("change", callback);
  mqMotion.addEventListener("change", callback);
  return () => {
    mqFine.removeEventListener("change", callback);
    mqMotion.removeEventListener("change", callback);
  };
}

function getPointerSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerSnapshot() {
  return false;
}

export function CursorFollower() {
  const isEnabled = React.useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerSnapshot
  );

  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing follower
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  React.useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering an interactive target
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select") ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isEnabled, mouseX, mouseY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovered ? 1.5 : 1,
        borderWidth: isHovered ? "1.5px" : "1px",
      }}
      transition={{ duration: 0.15 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold-light/60 pointer-events-none z-[99999] mix-blend-screen shadow-[0_0_12px_rgba(217,164,65,0.25)]"
    />
  );
}
