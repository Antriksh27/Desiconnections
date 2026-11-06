import { Metadata } from "next";
import { Check, Building2, Briefcase, Phone, MessageSquare } from "lucide-react";
import {
  membershipTiersContent,
  marketplaceCategoriesContent,
  employmentFeaturesContent,
} from "@/content/membership";
import { faqsContent } from "@/content/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MembershipShowpieceCard } from "@/components/brand/MembershipShowpieceCard";
import { Button } from "@/components/ui/Button";
import { EventFaqAccordion } from "@/components/events/EventFaqAccordion";

export const metadata: Metadata = {
  title: "Community Membership & Privileges | The Desi Connections",
  description:
    "No subscription fees. Activate your 10-year concert passes, access the USA & Canada Business & Property Marketplace, and connect with verified diaspora leaders.",
};

export default function MembershipPage() {
  const membershipFaqs = faqsContent.filter(
    (f) =>
      f.category === "membership" ||
      f.category === "general" ||
      f.category === "marketplace" ||
      f.category === "events"
  );

  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-24">
      {/* 1. Hero with Showpiece Card */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading
            eyebrow="Community Membership"
            titleBefore="Culture."
            titleItalic="Commerce."
            titleAfter="Community."
            description="We do not charge recurring monthly dues. By verifying your household or business utility bill through our energy advisory arm, you activate 10 years of concert tickets, access to our North American business marketplace, and private community networking."
          />

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" size="lg" href="/join">
              Activate Your Pass
            </Button>
            <Button variant="ghost" size="lg" href="#tiers">
              View Pass Privileges
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <MembershipShowpieceCard
            memberName="COMMUNITY MEMBER"
            memberNumber="TDC &bull; 614-772-2247"
            tierName="The Desi Connections"
          />
        </div>
      </section>

      {/* 2. Tier Overview Grid */}
      <section id="tiers" className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="label-caps text-gold-light">Membership Categories</span>
          <h2 className="display-md text-ivory">Choose Your Level of Access</h2>
          <p className="body-base text-mist">
            Every pass includes complimentary annual tickets to sponsored concerts in Columbus, community connections, and dedicated utility advisory.
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
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-display text-ivory font-bold">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-muted">/ {tier.period}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-gold-light font-medium mt-1">
                    {tier.requirement}
                  </p>
                </div>

                {/* Perks Checklist */}
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
                  Activate {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Major Feature: Business & Property Marketplace (USA & Canada) */}
      <section className="bg-midnight border border-hairline rounded-[36px] p-8 sm:p-14 space-y-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-light">
                PEER-TO-PEER COMMERCE &bull; USA &amp; CANADA
              </span>
            </div>
            <h2 className="display-md text-ivory">
              Business &amp; Property <span className="display-italic text-gold-light">Marketplace</span>
            </h2>
            <p className="body-base text-mist">
              Whether buying or selling commercial properties and operating businesses in the United States or Canada, use our referral platform for free. No broker listing fees, just direct community connections.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            href="/join?intent=marketplace"
            className="self-start md:self-auto shrink-0"
          >
            List a Business or Property
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {marketplaceCategoriesContent.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-plum/40 border border-hairline hover:border-gold/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-light block">
                  {cat.tag}
                </span>
                <h3 className="text-lg font-display text-ivory font-semibold">{cat.title}</h3>
                <p className="text-xs text-mist leading-relaxed">{cat.description}</p>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-hairline/60">
                {cat.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-[11px] text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Major Feature: Community Employment Exchange */}
      <section className="bg-midnight border border-hairline rounded-[36px] p-8 sm:p-14 space-y-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt/15 border border-volt/30">
              <Briefcase className="w-3.5 h-3.5 text-volt" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-volt">
                COMMUNITY TALENT BOARD
              </span>
            </div>
            <h2 className="display-md text-ivory">
              Employment <span className="display-italic text-volt">Opportunities</span>
            </h2>
            <p className="body-base text-mist">
              Looking for a job or need to hire talent? Post your employment requirements with us at no cost. Connect directly with qualified people by your side.
            </p>
          </div>

          <Button
            variant="ghost"
            size="md"
            href="/join?intent=hiring"
            className="self-start md:self-auto shrink-0"
          >
            Post a Requirement
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {employmentFeaturesContent.map((feat, fIdx) => (
            <div
              key={fIdx}
              className="p-6 rounded-2xl bg-plum/30 border border-hairline space-y-3"
            >
              <h3 className="text-base font-display text-ivory font-semibold">{feat.title}</h3>
              <p className="text-xs text-mist leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Concierge & Columbus Connection Banner */}
      <section className="rounded-[32px] p-8 sm:p-12 bg-gradient-to-r from-plum via-midnight to-plum border border-hairline-strong flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="label-caps text-gold-light">Direct Concierge Access</span>
          <h3 className="display-md text-ivory">Speak with Mr. Ketan Patel</h3>
          <p className="body-base text-mist">
            Based in Columbus, Ohio. Have questions about ticket allocations, listing a property, or verifying your utility bill? Reach out directly via Phone or WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href="tel:6147722247"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>614-772-2247</span>
          </a>
          <a
            href="https://wa.me/16147722247"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 text-ivory hover:bg-white/20 border border-hairline-strong font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 text-volt" />
            <span>WhatsApp Ketan</span>
          </a>
        </div>
      </section>

      {/* 6. Membership FAQs */}
      <section className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="label-caps text-gold-light">Questions &amp; Answers</span>
          <h2 className="display-md text-ivory">Frequently Asked Questions</h2>
        </div>

        <EventFaqAccordion faqs={membershipFaqs} />
      </section>

      {/* 7. Final CTA */}
      <section className="text-center space-y-6 pt-4">
        <h2 className="display-md text-ivory">
          Ready to join <span className="display-italic text-gold-light">The Desi Connections</span>?
        </h2>
        <p className="body-lg text-mist max-w-lg mx-auto">
          Share a copy of your recent electricity or commercial gas bill to activate your passes and join our community network.
        </p>
        <div className="pt-2">
          <Button variant="primary" size="lg" href="/join">
            Request Your Community Pass
          </Button>
        </div>
      </section>
    </div>
  );
}
