"use client";

import * as React from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setResultMessage(null);

    const res = await submitLead({
      source: "contact",
      name,
      email,
      phone,
      message,
      honeypot,
    });

    setIsPending(false);
    if (res.success) {
      setIsSuccess(true);
      setResultMessage("Thank you for reaching out. Our concierge team will reply within 24 hours.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setIsSuccess(false);
      setResultMessage(res.message);
    }
  };

  return (
    <div className="bg-midnight/90 border border-hairline-strong rounded-3xl p-6 sm:p-10 space-y-6">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold-light/10 text-gold-light text-xs font-semibold tracking-wider border border-gold-light/20">
          <Mail className="w-3.5 h-3.5" /> Direct Concierge
        </span>
        <h3 className="text-2xl font-display text-ivory">Send an Enquiry</h3>
        <p className="text-sm text-mist leading-relaxed">
          Have a question about event tours, partnerships, or membership? We would love to hear from you.
        </p>
      </div>

      {isSuccess && (
        <div className="p-4 rounded-xl bg-gold-dark/15 border border-gold-primary/30 flex items-start gap-3 text-gold-light text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-ivory">Message sent</p>
            <p className="text-xs text-mist mt-0.5">{resultMessage}</p>
          </div>
        </div>
      )}

      {resultMessage && !isSuccess && (
        <div className="p-4 rounded-xl bg-flame/15 border border-flame/30 text-flame text-sm">
          {resultMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field for bot trap */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-honeypot">Leave blank</label>
          <input
            id="contact-honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
              Your Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rohan Kapoor"
              className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold-primary/70 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. rohan@example.com"
              className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold-primary/70 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
            Mobile Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 (212) 555-0199"
            className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold-primary/70 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you would like to know..."
            className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold-primary/70 transition-colors resize-none"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isPending}
            className="w-full py-3.5"
          >
            {isPending ? "Sending message..." : "Send Message"}
          </Button>
        </div>

        <div className="pt-2 text-center border-t border-hairline/60">
          <p className="text-[11px] text-mist">
            Prefer direct assistance? Call or WhatsApp Mr. Ketan Patel (Columbus, OH):
          </p>
          <div className="flex items-center justify-center gap-3 pt-1 text-xs font-bold text-gold-light">
            <a href="tel:6147722247" className="hover:underline">
              614-772-2247
            </a>
            <span>&bull;</span>
            <a href="https://wa.me/16147722247" target="_blank" rel="noopener noreferrer" className="hover:underline text-volt">
              WhatsApp 614-745-7133
            </a>
          </div>
        </div>

        <p className="text-[11px] text-mist/70 text-center leading-normal pt-1">
          Data use note: Your contact details are used strictly to reply to your enquiry. We never sell or share your data with advertisers.
        </p>
      </form>
    </div>
  );
}
