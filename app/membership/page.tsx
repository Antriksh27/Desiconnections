import { Metadata } from "next";
import { Check, Sparkles, Shield, Users, Zap } from "lucide-react";
import { membershipTiersContent } from "@/content/membership";
import { faqsContent } from "@/content/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MembershipShowpieceCard } from "@/components/brand/MembershipShowpieceCard";
import { Button } from "@/components/ui/Button";
import { EventFaqAccordion } from "@/components/events/EventFaqAccordion";

export const metadata: Metadata = {
  title: "Membership Tiers & Privileges",
  description:
    "Private club tiers engineered for culture enthusiasts, ambitious professionals, and patrons across the United States. Compare Guest Pass, Club Member, and Inner Circle.",
};

export default function MembershipPage() {
  const membershipFaqs = faqsContent.filter(
    (f) => f.category === "membership" || f.category === "general"
  );

  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-24">
      {/* 1. Hero with Showpiece Card */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading
            eyebrow="Private Community"
            titleBefore="Membership"
            titleItalic="Engineered"
            titleAfter="For Culture &amp; Company"
            description="We connect lovers of live desi entertainment with the people they want to meet, while ensuring everyday benefits return value year-round."
          />

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" size="lg" href="/join?plan=club-member">
              Request Your Invite
            </Button>
            <Button variant="ghost" size="lg" href="#tiers">
              View Tier Privileges
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <MembershipShowpieceCard
            memberName="AARAV MEHTA"
            memberNumber="DC &bull; 8820 4192"
            tierName="Club Member"
          />
        </div>
      </section>

      {/* 2. Tier Overview Grid */}
      <section id="tiers" className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="label-caps text-gold-light">Membership Tiers</span>
          <h2 className="display-md text-ivory">Choose Your Level of Access</h2>
          <p className="body-base text-mist">
            Every tier includes advance ticket drops, curated introductions, and verified member privileges across New York, San Francisco, Los Angeles, Chicago, and Dallas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {membershipTiersContent.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? "bg-gradient-to-b from-plum via-midnight to-ink border-2 border-gold shadow-[0_20px_60px_rgba(217,164,65,0.2)] md:-translate-y-3"
                  : "bg-midnight border border-hairline hover:border-hairline-strong"
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-ink text-[11px] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display text-ivory">{tier.name}</h3>
                  <p className="text-xs text-mist mt-1 leading-relaxed">{tier.tagline}</p>
                </div>

                <div className="pt-2 pb-4 border-b border-hairline">
                  <span className="text-4xl font-display text-ivory font-bold">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-xs text-muted ml-1.5">{tier.period}</span>
                  )}
                </div>

                {/* Perks (Strictly Ordered: Entertainment -> Connections -> Everyday Benefits) */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
                    What is Included:
                  </span>
                  <ul className="space-y-3">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-mist leading-relaxed">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{perk.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  variant={tier.isPopular ? "primary" : "ghost"}
                  size="md"
                  href={`/join?plan=${tier.slug}`}
                  className="w-full"
                >
                  Request Invite for {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "What You Get" Comprehensive Pillar Order Breakdown */}
      <section className="bg-midnight border border-hairline rounded-[36px] p-8 sm:p-14 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="label-caps text-gold-light">Privileges Architecture</span>
          <h2 className="display-md text-ivory">What You Get as a Member</h2>
          <p className="body-base text-mist">
            Our private club framework is built strictly around culture first, camaraderie second, and everyday value third.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Order 1: Entertainment */}
          <div className="space-y-3 p-5 rounded-2xl bg-plum/50 border border-hairline">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-light flex items-center justify-center">
              <Sparkles className="w-5 h-5 fill-gold-light" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light block">
              1. Live Entertainment
            </span>
            <h3 className="text-lg font-display text-ivory font-semibold">Priority Concerts</h3>
            <p className="text-xs text-mist leading-relaxed">
              48-hour advance allocations, front-row seat holds, and private mezzanine access at the biggest subcontinent tours.
            </p>
          </div>

          {/* Order 2: Meet & Greets */}
          <div className="space-y-3 p-5 rounded-2xl bg-plum/50 border border-hairline">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-light flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light block">
              2. Artist Access
            </span>
            <h3 className="text-lg font-display text-ivory font-semibold">Meet &amp; Greets</h3>
            <p className="text-xs text-mist leading-relaxed">
              Green room walkthroughs, intimate soundcheck admissions, and photo opportunities with visiting Bollywood stars.
            </p>
          </div>

          {/* Order 3: Networking */}
          <div className="space-y-3 p-5 rounded-2xl bg-plum/50 border border-hairline">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-light flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light block">
              3. Connections
            </span>
            <h3 className="text-lg font-display text-ivory font-semibold">Curated Network</h3>
            <p className="text-xs text-mist leading-relaxed">
              Private founder rooftop mixers, doctor and lawyer salons, and curated introductions across New York, San Francisco, Los Angeles, Chicago, and Dallas.
            </p>
          </div>

          {/* Order 4: Everyday Benefits Last */}
          <div className="space-y-3 p-5 rounded-2xl bg-plum/50 border border-hairline">
            <div className="w-10 h-10 rounded-xl bg-volt/15 text-volt flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-volt block">
              4. Everyday Benefits
            </span>
            <h3 className="text-lg font-display text-ivory font-semibold">Switch n Save Perks</h3>
            <p className="text-xs text-mist leading-relaxed">
              Negotiated group energy tariffs through accredited partners and signature dining privileges that pay membership back.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Membership FAQs */}
      <section className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="label-caps text-gold-light">Questions &amp; Answers</span>
          <h2 className="display-md text-ivory">Frequently Asked Questions</h2>
        </div>

        <EventFaqAccordion faqs={membershipFaqs} />
      </section>

      {/* 5. Final CTA to Join */}
      <section className="text-center space-y-6 pt-4">
        <h2 className="display-md text-ivory">
          Ready to experience <span className="display-italic text-gold-light">DesiConnections</span>?
        </h2>
        <p className="body-lg text-mist max-w-lg mx-auto">
          Applications are reviewed weekly by our committee to ensure a vibrant and balanced club atmosphere.
        </p>
        <div className="pt-2">
          <Button variant="primary" size="lg" href="/join">
            Request Your Invite
          </Button>
        </div>
      </section>
    </div>
  );
}
