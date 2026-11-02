"use client";

import * as React from "react";
import { Zap, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function SwitchNSaveForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [suburbOrPostcode, setSuburbOrPostcode] = React.useState("");
  const [currentProvider, setCurrentProvider] = React.useState("");
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
      suburbOrPostcode,
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
          <Zap className="w-3 h-3" /> Member Inquiry
        </span>
        <h3 className="text-xl font-display text-ivory">
          Request a Rate Comparison
        </h3>
        <p className="text-xs text-mist leading-relaxed">
          An accredited partner specialist will contact you with group tariff options for your address.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-2xl bg-plum/60 border border-volt/40 text-volt space-y-2 text-center">
          <CheckCircle2 className="w-8 h-8 mx-auto text-volt" />
          <p className="text-base font-display font-semibold text-ivory">
            {resultMessage}
          </p>
          <p className="text-xs text-mist">
            Our partner utility concierge will reach out within two business days.
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
            <label htmlFor="sns-name" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
              Full Name *
            </label>
            <input
              id="sns-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Arjun Patel"
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
                placeholder="+1 (555) 000-0000"
                className="w-full h-12 bg-ink border border-hairline-strong rounded-2xl px-4 text-xs text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="sns-suburb" className="text-[11px] font-bold uppercase tracking-wider text-mist block">
                5-Digit ZIP Code or City *
              </label>
              <input
                id="sns-suburb"
                type="text"
                required
                value={suburbOrPostcode}
                onChange={(e) => setSuburbOrPostcode(e.target.value)}
                placeholder="e.g. 10001 New York or 75001 Dallas"
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
                placeholder="e.g. ConEdison, TXU Energy, PG&E, ComEd, Reliant"
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

          <p className="text-[10px] text-muted text-center leading-relaxed">
            By submitting, you agree to have an accredited utility partner review your details. Your data is never sold.
          </p>
        </form>
      )}
    </div>
  );
}
