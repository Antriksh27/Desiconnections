import { Sparkles, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-dark/12 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-light/10 text-gold-light text-xs font-semibold tracking-wider border border-gold-light/20">
            <Sparkles className="w-3.5 h-3.5" /> 404 &bull; Page Not Found
          </span>
          <h1 className="text-4xl sm:text-6xl font-display text-ivory tracking-tight">
            The curtain has <span className="italic text-gold-light">closed</span> here.
          </h1>
          <p className="text-base sm:text-lg text-mist max-w-md mx-auto font-body leading-relaxed">
            We could not find the page you are looking for. It may have moved, or the tour segment has wrapped up.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="/events" variant="primary" className="gap-2">
            Browse Event Archive <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/" variant="ghost" className="gap-2">
            <Home className="w-4 h-4" /> Return Home
          </Button>
        </div>

        <div className="pt-8 border-t border-hairline/60">
          <p className="text-xs text-mist/70">
            Need concierge assistance? Email us anytime at{" "}
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
