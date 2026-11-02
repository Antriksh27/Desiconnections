"use client";

import * as React from "react";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log client error safely in development
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-flame/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-flame/15 text-flame text-xs font-semibold tracking-wider border border-flame/30">
            <AlertCircle className="w-3.5 h-3.5" /> Temporary Intermission
          </span>
          <h1 className="text-4xl sm:text-5xl font-display text-ivory tracking-tight">
            Something hit an unexpected <span className="italic text-gold-light">note</span>.
          </h1>
          <p className="text-base sm:text-lg text-mist max-w-md mx-auto font-body leading-relaxed">
            We had a brief hiccup loading this part of the stage. Please try again or head back to the main lobby.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            type="button"
            variant="primary"
            onClick={() => reset()}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </Button>
          <Button href="/" variant="ghost" className="gap-2">
            <Home className="w-4 h-4" /> Return Home
          </Button>
        </div>

        <div className="pt-8 border-t border-hairline/60">
          <p className="text-xs text-mist/70">
            If this problem persists, please let our team know at{" "}
            <a
              href="mailto:concierge@desiconnections.club"
              className="text-gold-light hover:underline"
            >
              concierge@desiconnections.club
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
