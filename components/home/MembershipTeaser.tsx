import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { membershipTiersContent } from "@/content/membership";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MembershipShowpieceCard } from "@/components/brand/MembershipShowpieceCard";
import { Button } from "@/components/ui/Button";

export function MembershipTeaser() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="space-y-6 max-w-xl">
          <SectionHeading
            eyebrow="Curated Membership"
            titleBefore="A Private Club"
            titleItalic="For"
            titleAfter="Culture &amp; Company"
            description="Designed for people who love live desi entertainment and appreciate thoughtful company. Membership opens priority tickets, artist lounges, and verified member rates."
          />
          <div className="flex items-center gap-4 pt-2">
            <Button variant="primary" size="md" href="/join">
              Request Your Invite
            </Button>
            <Button variant="ghost" size="md" href="/membership">
              Compare All Plans
            </Button>
          </div>
        </div>

        {/* 3D Pointer Tilt Showpiece Card */}
        <div className="shrink-0 flex justify-center w-full lg:w-auto">
          <MembershipShowpieceCard
            memberName="AARAV MEHTA"
            memberNumber="DC &bull; 8820 4192"
            tierName="Club Member"
          />
        </div>
      </div>

      {/* Three Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {membershipTiersContent.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
              tier.isPopular
                ? "bg-gradient-to-b from-plum to-midnight border-2 border-gold shadow-[0_16px_50px_rgba(217,164,65,0.15)] md:-translate-y-2"
                : "bg-midnight border border-hairline hover:border-hairline-strong"
            }`}
          >
            {tier.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-ink text-[10px] font-bold uppercase tracking-widest shadow-md">
                Most Popular
              </span>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-display text-ivory">{tier.name}</h3>
                <p className="text-xs text-mist mt-1">{tier.tagline}</p>
              </div>

              <div className="pt-2 pb-4 border-b border-hairline">
                <span className="text-3xl font-display text-ivory font-semibold">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-xs text-muted ml-1.5">{tier.period}</span>
                )}
              </div>

              {/* Perks List (Strict order: Entertainment, Connections, Everyday Benefits) */}
              <ul className="space-y-3 pt-2">
                {tier.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs text-mist">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{perk.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Button
                variant={tier.isPopular ? "primary" : "ghost"}
                size="md"
                href={`/join?plan=${tier.slug}`}
                className="w-full"
              >
                Apply for {tier.name}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <Link
          href="/membership"
          className="text-xs font-semibold text-mist hover:text-gold transition-colors inline-flex items-center gap-1.5"
        >
          <span>Explore detailed tier FAQ and privileges breakdown</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
