"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, ArrowRight, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";
import { Button } from "@/components/ui/Button";
import { MembershipShowpieceCard } from "@/components/brand/MembershipShowpieceCard";
import { trackEvent } from "@/lib/analytics";

const INTEREST_OPTIONS = [
  "Complimentary Concert Passes",
  "Bollywood Star Meet & Greets",
  "Business & Property Marketplace",
  "Employment & Hiring Board",
  "Energy Advisory (Switch n Save LLC)",
  "Community Cultural Gatherings",
];

const PLAN_OPTIONS = [
  { slug: "residential-pass", name: "Residential Pass", tag: "Home Utility Bill" },
  { slug: "commercial-member", name: "Commercial Member", tag: "Most Popular & Marketplace" },
  { slug: "patron-circle", name: "Patron Circle", tag: "Sponsor & VIP Access" },
];

const REFERRAL_OPTIONS = [
  "Friend or Community Member",
  "Concert / Cultural Event",
  "Switch n Save LLC Referral",
  "WhatsApp Community Group",
  "Social Media",
  "Other",
];

export function JoinForm() {
  const searchParams = useSearchParams();
  const initialEvent = searchParams.get("event") || "";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("Columbus, OH");
  const [profession, setProfession] = React.useState("");
  const [selectedPlanOverride, setSelectedPlanOverride] = React.useState<string | null>(null);
  const plan = selectedPlanOverride ?? (searchParams.get("plan") || "commercial-member");
  const [eventSlug] = React.useState(initialEvent);
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>([
    "Complimentary Concert Passes",
    "Business & Property Marketplace",
  ]);
  const [referral, setReferral] = React.useState("Friend or Community Member");
  const [honeypot, setHoneypot] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage(null);

    const res = await submitLead({
      source: "join",
      name,
      email,
      phone,
      city,
      profession,
      plan,
      eventSlug: eventSlug || undefined,
      interests: selectedInterests,
      referral,
      honeypot,
    });

    setIsPending(false);
    if (res.success) {
      setIsSuccess(true);
      trackEvent("form_submit_lead", { source: "join" });
    } else {
      setErrorMessage(res.message);
    }
  };

  const selectedPlanObj = PLAN_OPTIONS.find((p) => p.slug === plan) || PLAN_OPTIONS[1];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-midnight/90 border border-gold/30 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-[0_20px_60px_rgba(217,164,65,0.15)]"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-light/10 text-gold-light text-xs font-semibold tracking-wider border border-gold-light/20">
                <Sparkles className="w-3.5 h-3.5" /> Pass Request Received
              </span>
              <h2 className="text-3xl sm:text-4xl font-display text-ivory">
                You are on the list.
              </h2>
              <p className="text-mist text-base sm:text-lg max-w-lg mx-auto font-body leading-relaxed">
                Thank you for connecting. Mr. Ketan Patel or our community concierge will reach out to verify your details and coordinate your concert passes.
              </p>
            </div>

            {/* Personalized showpiece card entrance */}
            <div className="flex justify-center py-4">
              <MembershipShowpieceCard
                memberName={name.toUpperCase() || "NEW MEMBER"}
                tierName={selectedPlanObj.name}
              />
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-xs text-mist/80">
                A confirmation has been sent to <strong className="text-ivory">{email}</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button href="/events" variant="primary" className="gap-2">
                  Explore Upcoming Events <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/" variant="ghost">
                  Back to Home
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-midnight/90 border border-hairline-strong rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl"
          >
            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-2xl bg-plum/40 border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-light block">
                  FAST-TRACK DIRECT OPTION
                </span>
                <p className="text-xs text-ivory">
                  Prefer to text or WhatsApp your bill copy directly?
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-xs font-bold">
                <a
                  href="tel:6147722247"
                  className="px-3.5 py-2 rounded-full bg-ink border border-hairline text-ivory hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>614-772-2247</span>
                </a>
                <a
                  href="https://wa.me/16147722247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-volt/15 border border-volt/30 text-volt hover:bg-volt/25 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {eventSlug && (
              <div className="p-3.5 rounded-xl bg-gold/15 border border-gold/30 flex items-center gap-2 text-xs text-gold-light">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  Inquiring for event passes: <strong className="text-ivory capitalize">{eventSlug.replace(/-/g, " ")}</strong>
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-xl bg-danger/15 border border-danger/30 text-danger text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bot trap */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="join-honeypot">Leave empty</label>
                <input
                  id="join-honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Tier Selection Pills */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-ivory/80 uppercase tracking-wider block">
                  Select Membership Category *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PLAN_OPTIONS.map((p) => {
                    const isSelected = plan === p.slug;
                    return (
                      <button
                        key={p.slug}
                        type="button"
                        onClick={() => setSelectedPlanOverride(p.slug)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-plum/80 border-gold text-ivory shadow-[0_0_20px_rgba(217,164,65,0.2)]"
                            : "bg-ink/60 border-hairline text-mist hover:border-gold/30 hover:text-ivory"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold font-display">
                            {p.name}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-gold-light" />}
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-gold-light/90 font-medium">
                          {p.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="join-name" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                    Full Name or Business Name *
                  </label>
                  <input
                    id="join-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ketan Patel"
                    className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="join-email" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="join-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ketan@example.com"
                    className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="join-phone" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                    Mobile Phone *
                  </label>
                  <input
                    id="join-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (614) 772-2247"
                    className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="join-city" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                    Primary City &amp; State *
                  </label>
                  <select
                    id="join-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  >
                    <option value="Columbus, OH">Columbus, OH (Flagship Hub)</option>
                    <option value="Cleveland / Cincinnati, OH">Cleveland / Cincinnati, OH</option>
                    <option value="Chicago, IL">Chicago, IL</option>
                    <option value="Dallas / Houston, TX">Dallas / Houston, TX</option>
                    <option value="New York / New Jersey">New York / New Jersey</option>
                    <option value="Toronto / Canada">Toronto / Canada</option>
                    <option value="Other City">Other US / Canadian Location</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="join-profession" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                  Profession or Business Type *
                </label>
                <input
                  id="join-profession"
                  type="text"
                  required
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="e.g. Motel Operator, Retail Store Owner, Engineer, Doctor"
                  className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory placeholder:text-mist/40 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Interest Multi-select Chips */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-ivory/80 uppercase tracking-wider block">
                  What privileges interest you most?
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((item) => {
                    const active = selectedInterests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                          active
                            ? "bg-gold-light/15 border-gold-light/60 text-gold-light"
                            : "bg-ink/50 border-hairline text-mist hover:text-ivory hover:border-gold/30"
                        }`}
                      >
                        {item} {active && "✓"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Referral Source */}
              <div className="space-y-1.5">
                <label htmlFor="join-referral" className="text-xs font-semibold text-ivory/80 uppercase tracking-wider">
                  How did you hear about us?
                </label>
                <select
                  id="join-referral"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  className="w-full px-4 py-3 bg-ink/70 border border-hairline rounded-xl text-ivory text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  {REFERRAL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isPending}
                  className="w-full py-4 text-base tracking-wide"
                >
                  {isPending ? "Submitting Request..." : "Request Your Community Pass"}
                </Button>
              </div>

              {/* Short Data-use note */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-mist/70 text-center leading-normal pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-light shrink-0" />
                <span>
                  Data use note: Your information is used strictly to verify community accounts and event ticket allocations. We never sell your personal information.
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
