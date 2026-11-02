import { Metadata } from "next";
import Link from "next/link";
import { Zap, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { dealsContent } from "@/content/deals";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SwitchNSaveForm } from "@/components/deals/SwitchNSaveForm";

export const metadata: Metadata = {
  title: "Member Deals & Everyday Benefits",
  description:
    "Everyday benefits for DesiConnections members, including Switch n Save energy comparisons and curated dining privileges.",
};

export default function DealsPage() {
  const switchNSaveOffer = dealsContent.find((d) => d.isSwitchNSave) || dealsContent[0];
  const otherOffers = dealsContent.filter((d) => !d.isSwitchNSave);

  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-24">
      {/* 1. Header */}
      <SectionHeading
        eyebrow="Everyday Member Perks"
        titleBefore="Everyday Benefits"
        titleItalic="For"
        titleAfter="Members"
        description="Thoughtful partnerships designed to return everyday value to our community. Switch n Save is an exclusive perk arranged through licensed providers."
      />

      {/* 2. Switch n Save Featured Panel */}
      <section
        id="switch-n-save"
        className="rounded-[36px] bg-plum/60 border border-hairline p-6 sm:p-12 space-y-12 relative overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: How It Works & Eligibility (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-volt/15 text-volt text-xs font-bold uppercase tracking-wider border border-volt/30">
                <Zap className="w-3.5 h-3.5" /> Featured Benefit
              </span>
              <h2 className="display-md text-ivory">
                Switch n Save Energy Comparison
              </h2>
              <p className="body-base text-mist max-w-xl">
                {switchNSaveOffer.summary}
              </p>
            </div>

            {/* 3-Step "How It Works" */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold-light">
                How It Works in 3 Steps
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-midnight/80 border border-hairline rounded-2xl p-4 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-volt/20 text-volt text-xs font-bold flex items-center justify-center border border-volt/40">
                    1
                  </span>
                  <h4 className="text-sm font-display font-semibold text-ivory">
                    Submit Details
                  </h4>
                  <p className="text-[11px] text-mist leading-relaxed">
                    Provide your postcode and current provider details in the short form.
                  </p>
                </div>

                <div className="bg-midnight/80 border border-hairline rounded-2xl p-4 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-volt/20 text-volt text-xs font-bold flex items-center justify-center border border-volt/40">
                    2
                  </span>
                  <h4 className="text-sm font-display font-semibold text-ivory">
                    Compare Rates
                  </h4>
                  <p className="text-[11px] text-mist leading-relaxed">
                    An accredited utility specialist reviews available group tariff plans for your meter.
                  </p>
                </div>

                <div className="bg-midnight/80 border border-hairline rounded-2xl p-4 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-volt/20 text-volt text-xs font-bold flex items-center justify-center border border-volt/40">
                    3
                  </span>
                  <h4 className="text-sm font-display font-semibold text-ivory">
                    Switch with Ease
                  </h4>
                  <p className="text-[11px] text-mist leading-relaxed">
                    Enjoy simple switching with zero lock-in contracts and ongoing member support.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Notes */}
            <div className="bg-midnight/60 border border-hairline rounded-2xl p-5 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ivory flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-volt" /> Eligibility &amp; Coverage
              </span>
              <p className="text-xs text-mist leading-relaxed">
                Available to verified DesiConnections members residing in deregulated energy retail states including Texas, New York, Pennsylvania, Illinois, and Ohio.
              </p>
            </div>

            {/* Partner Disclosure Block */}
            <div id="partner-terms" className="bg-ink/80 border border-hairline-strong rounded-2xl p-5 space-y-2 text-xs">
              <span className="text-gold-light font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                <FileText className="w-3.5 h-3.5" /> Partner Disclosure
              </span>
              <p className="text-muted leading-relaxed">
                {switchNSaveOffer.disclosureText}
              </p>
              <p className="text-[10px] text-muted/80">
                DesiConnections does not provide financial or energy retail advice. Claims and contract terms are established directly between the member and the accredited utility partner.
              </p>
            </div>
          </div>

          {/* Right: Interest Form (5 cols) */}
          <div className="lg:col-span-5">
            <SwitchNSaveForm />
          </div>
        </div>
      </section>

      {/* 3. Grid of Other Member Offers */}
      <section className="space-y-8">
        <div className="border-b border-hairline pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="label-caps text-gold-light">Partner Privileges</span>
            <h2 className="display-md text-ivory mt-1">Additional Member Offers</h2>
          </div>
          <span className="text-xs text-muted">
            Show your digital member card at participating partner locations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherOffers.map((offer) => (
            <div
              key={offer.slug}
              className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-hairline-strong transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-volt/15 text-volt border border-volt/25">
                    <Zap className="w-3 h-3" /> {offer.category}
                  </span>
                  <span className="text-xs text-muted font-medium">{offer.partner}</span>
                </div>
                <h3 className="text-2xl font-display text-ivory">
                  {offer.title}
                </h3>
                <p className="text-xs text-mist leading-relaxed">
                  {offer.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-hairline space-y-3 text-xs">
                <p className="text-[11px] text-muted">
                  {offer.disclosureText}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-muted font-mono uppercase">Club Member Benefit</span>
                  <Link
                    href={offer.termsLink}
                    className="text-gold-light hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>View partner terms</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Legal & Terms Block */}
      <section className="bg-midnight/50 border border-hairline rounded-3xl p-8 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-base font-display text-ivory">Member Privilege Terms</h3>
        <p className="text-xs text-mist leading-relaxed">
          All member discounts, energy comparisons, and hospitality privileges are subject to partner availability and terms of service.
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-gold-light pt-2">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <span>&bull;</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>&bull;</span>
          <Link href="/community-guidelines" className="hover:underline">
            Community Guidelines
          </Link>
        </div>
      </section>
    </div>
  );
}
