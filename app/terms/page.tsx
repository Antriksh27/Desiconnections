import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, FileText } from "lucide-react";
import { termsContent } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service | DesiConnections",
  description: "Terms and conditions for DesiConnections website usage, event referrals, and club membership.",
};

export default function TermsPage() {
  const { title, lastUpdated, summary, disclaimer, sections } = termsContent;

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-light/10 text-gold-light text-xs font-semibold tracking-wider border border-gold-light/20">
            <FileText className="w-3.5 h-3.5" /> Club Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-display text-ivory">
            {title}
          </h1>
          <p className="text-xs uppercase tracking-widest text-mist/70 font-mono">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-base sm:text-lg text-mist leading-relaxed font-body">
            {summary}
          </p>
        </div>

        {/* Lawyer Review Marker Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 text-amber-300">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-semibold text-amber-200">
              LEGAL NOTICE: {disclaimer}
            </p>
            <p className="text-amber-300/80">
              DesiConnections operates strictly as an entertainment promotion, networking, and referral platform in the United States. Ticketing is fulfilled by external ticketing partners.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 pt-4 border-t border-hairline">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display text-ivory">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-mist text-sm sm:text-base leading-relaxed font-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-hairline text-xs text-mist/70 flex justify-between items-center">
          <Link href="/privacy" className="hover:text-gold-light transition-colors">
            &larr; Privacy Policy
          </Link>
          <Link href="/community-guidelines" className="hover:text-gold-light transition-colors">
            Community Guidelines &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
