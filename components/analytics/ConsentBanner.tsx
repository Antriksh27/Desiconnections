"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ConsentBanner() {
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("dc_analytics_consent");
    if (!consent) {
      // Short delay before showing banner for clean page entrance
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dc_analytics_consent", "granted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("dc_analytics_consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-midnight/95 border border-hairline-strong rounded-3xl p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-gold-light/10 text-gold-light border border-gold-light/20">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-ivory tracking-wide">
                Privacy & Analytics
              </span>
            </div>

            <p className="text-xs text-mist leading-relaxed font-body">
              We use privacy-friendly, cookieless metrics to improve member gatherings and event planning. Learn more in our{" "}
              <Link href="/privacy" className="text-gold-light hover:underline">
                Privacy Policy
              </Link>.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <Button
                variant="primary"
                size="sm"
                onClick={handleAccept}
                className="flex-1 py-2 text-[11px]"
              >
                Accept
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDecline}
                className="flex-1 py-2 text-[11px]"
              >
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
