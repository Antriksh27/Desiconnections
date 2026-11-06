"use client";

import * as React from "react";
import { Zap, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function SwitchNSaveForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [suburbOrPostcode, setSuburbOrPostcode] = React.useState("");
  const [currentProvider, setCurrentProvider] = React.useState("");
  const [accountType, setAccountType] = React.useState("commercial");
  const [honeypot, setHoneypot] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setResultMessage(null);

    const res = await submitLead({
      source: "switch-n-save",
      name,
      email,
      phone,
      suburbOrPostcode: `${suburbOrPostcode} (${accountType})`,
      currentProvider,
      honeypot,
    });

    setIsPending(false);
    if (res.success) {
      setIsSuccess(true);
      trackEvent("cta_switch_n_save_interest");
      setResultMessage(res.message);
      setName("");
      setEmail("");
      setPhone("");
      setSuburbOrPostcode("");
      setCurrentProvider("");
    } else {
      setIsSuccess(false);
      setResultMessage(res.message);
    }
  };

  return (
    <div className="bg-midnight/90 border border-hairline-strong rounded-3xl p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-volt/15 text-volt text-[10px] font-bold uppercase tracking-wider border border-volt/30">
          <Zap className="w-3 h-3" /> Switch n Save LLC &bull; 70+ Years Experience
        </span>
        <h3 className="text-xl font-display text-ivory">
          Request an Energy &amp; Utility Audit
        </h3>
        <p className="text-xs text-mist leading-relaxed">
          Our senior utility specialists will review your electricity or natural gas account to evaluate tariff structures.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-2xl bg-plum/60 border border-volt/40 text-volt space-y-2 text-center">
          <CheckCircle2 className="w-8 h-8 mx-auto text-volt" />
          <p className="text-base font-display font-semibold text-ivory">
            {resultMessage}
          </p>
          <p className="text-xs text-mist">
            Our team will reach out within two business days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field */}
          <input
            type="text"
            name="website_url_hp"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-mist block">
              Account Type *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAccountType("commercial")}
                className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all text-center ${
                  accountType === "commercial"
                    ? "bg-volt/15 text-volt border-volt"
                    : "bg-ink border-hairline text-mist hover:text-ivory"
                }`}
              >
                Commercial / Business
              </button>
              <button
                type="button"
                onClick={() => setAccountType("residential")}
                className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all text-center ${
                  accountType === "residential"
                    ? "bg-gold/15 text-gold border-gold"
                    : "bg-ink border-hairline text-mist hover:text-ivory"
                }`}
              >
                Residential Home
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="sns-name" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
              Full Name or Business Name *
            </label>
            <input
              id="sns-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ketan Patel or Midwest Hospitality LLC"
              className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="sns-email" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
                Email Address *
              </label>
              <input
                id="sns-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="sns-phone" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
                Mobile Phone *
              </label>
              <input
                id="sns-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (614) 772-2247"
                className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="sns-suburb" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
                City &amp; State or ZIP Code *
              </label>
              <input
                id="sns-suburb"
                type="text"
                required
                value={suburbOrPostcode}
                onChange={(e) => setSuburbOrPostcode(e.target.value)}
                placeholder="e.g. Columbus, OH 43215"
                className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="sns-provider" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
                Current Utility Provider
              </label>
              <input
                id="sns-provider"
                type="text"
                value={currentProvider}
                onChange={(e) => setCurrentProvider(e.target.value)}
                placeholder="e.g. AEP Ohio, Columbia Gas, Duke, FirstEnergy"
                className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {resultMessage && !isSuccess && (
            <p className="text-xs text-danger">{resultMessage}</p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? "Submitting Inquiry..." : "Submit Energy Inquiry"}
            </Button>
          </div>

          <div className="pt-2 text-center border-t border-hairline/60">
            <p className="text-[11px] text-mist">
              Prefer direct contact? Call or WhatsApp Mr. Ketan Patel:
            </p>
            <div className="flex items-center justify-center gap-3 pt-2 text-xs font-bold text-gold-light">
              <a href="tel:6147722247" className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> 614-772-2247
              </a>
              <span>&bull;</span>
              <a href="https://wa.me/16147722247" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-volt">
                <MessageSquare className="w-3 h-3" /> WhatsApp
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
