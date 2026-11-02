"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, Ticket, Users, ArrowUpRight } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const [email, setEmail] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setResultMessage(null);

    const res = await submitLead({
      source: "newsletter",
      email,
      honeypot,
    });

    setIsPending(false);
    if (res.success) {
      setIsSuccess(true);
      setResultMessage(res.message);
      setEmail("");
    } else {
      setIsSuccess(false);
      setResultMessage(res.message);
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden bg-[#0A0618]">
      {/* Background Stage Image Scrim */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <Image
          src="/images/hero_concert.jpg"
          alt="Concert stage atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0618] via-[#0A0618]/85 to-[#0A0618]" />
      </div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(236,0,140,0.25)_0%,rgba(10,6,24,0)_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-[850px] mx-auto text-center space-y-8 relative z-10 bg-[#130D2E]/95 border-2 border-[#EC008C]/40 rounded-[36px] p-8 sm:p-14 shadow-[0_25px_60px_rgba(236,0,140,0.25)] backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC008C]/20 text-[#FF2A85] border border-[#EC008C]/40">
          <Sparkles className="w-3.5 h-3.5 fill-[#FF2A85]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2A85]">
            PRIVATE CLUB INVITATION &bull; 2026 US TOUR
          </span>
        </div>

        <h2 className="display-lg text-white font-display font-extrabold leading-tight">
          Step into <span className="text-gradient-eventin">the Club</span>.
        </h2>

        <p className="body-lg text-mist max-w-xl mx-auto leading-relaxed">
          Get first access to touring Bollywood arena concerts, private artist dinners, and meaningful connections in your city across New York, San Francisco, Los Angeles, and Chicago.
        </p>

        {/* Member Perk Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-mist">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium shadow-sm">
            <Ticket className="w-3.5 h-3.5 text-[#00E5FF]" /> 48-Hour Concert Presales
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF2A85]" /> Private Lounge Entries
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium shadow-sm">
            <Users className="w-3.5 h-3.5 text-gold-light" /> Executive Rooftop Salons
          </span>
        </div>

        {isSuccess ? (
          <div className="p-6 rounded-2xl bg-[#1E1544] border border-[#EC008C]/40 text-white space-y-2 shadow-lg">
            <CheckCircle2 className="w-8 h-8 mx-auto text-[#00E5FF]" />
            <p className="text-base font-display font-bold text-white">
              {resultMessage}
            </p>
            <p className="text-xs text-mist">
              Check your inbox shortly for your private welcome dispatch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {/* Hidden honeypot field for anti-bot protection */}
            <input
              type="text"
              name="company_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-13 bg-[#0A0618] border border-white/15 rounded-full px-6 text-sm text-white placeholder:text-mist/70 focus:outline-none focus:border-[#EC008C] focus:ring-2 focus:ring-[#EC008C]/30 shadow-inner"
              />
              <Button
                variant="primary"
                size="md"
                type="submit"
                disabled={isPending}
                className="shrink-0 h-13 gap-2 px-8"
              >
                <span>{isPending ? "Submitting..." : "Get Pass Invite"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {resultMessage && !isSuccess && (
              <p className="text-xs text-[#FF4757] font-semibold">{resultMessage}</p>
            )}

            <p className="text-[11px] text-mist/70 text-center">
              Strictly no spam. We respect your privacy. Zero commitments.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
