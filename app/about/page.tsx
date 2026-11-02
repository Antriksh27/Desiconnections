import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Users, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { aboutContent } from "@/content/about";
import { ContactForm } from "@/components/about/ContactForm";

export const metadata: Metadata = {
  title: "About Our Story & Values | DesiConnections",
  description:
    "Learn about DesiConnections, America's premier private club for South Asian entertainment, curated networking, and everyday member benefits.",
};

export default function AboutPage() {
  const { headline, story, pillars, team, communityGuidelines } = aboutContent;

  const pillarIcons = [
    <Sparkles key="ent" className="w-6 h-6 text-gold-light" />,
    <Users key="conn" className="w-6 h-6 text-gold-light" />,
    <Zap key="deals" className="w-6 h-6 text-volt" />,
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-dark/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 relative">
        {/* Section 1: Hero & Story */}
        <section className="space-y-12">
          <SectionHeading
            eyebrow="Our Story & Vision"
            titleBefore="Where Entertainment"
            titleItalic="Meets"
            titleAfter="Genuine Connection"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-mist text-base sm:text-lg leading-relaxed font-body">
              <h3 className="text-2xl sm:text-3xl font-display text-ivory font-normal">
                {headline}
              </h3>
              {story.map((paragraph, idx) => (
                <p key={idx} className="text-mist/90">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-hairline-strong shadow-2xl p-2 bg-midnight/50">
                <ImageSlot
                  aspectRatio="4:5"
                  tone="stage"
                  label="Cultural Celebration & Private Lounge"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Three Pillars as Values */}
        <section className="space-y-12">
          <SectionHeading
            eyebrow="What We Stand For"
            titleBefore="Our"
            titleItalic="Three"
            titleAfter="Pillars"
            description="Built on culture, driven by hospitality, and grounded in community value."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-midnight/70 border border-hairline-strong rounded-3xl p-8 space-y-4 hover:border-gold-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-ink/80 border border-hairline flex items-center justify-center">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>
                <h4 className="text-xl font-display text-ivory">
                  {pillar.title}
                </h4>
                <p className="text-sm text-mist leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Community Guidelines & Code of Conduct */}
        <section className="bg-midnight/60 border border-hairline-strong rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-light/10 text-gold-light text-xs font-semibold tracking-wider border border-gold-light/20">
                <ShieldCheck className="w-4 h-4" /> Member Code
              </span>
              <h3 className="text-2xl sm:text-3xl font-display text-ivory">
                Community Guidelines
              </h3>
              <p className="text-sm text-mist max-w-2xl">
                DesiConnections is built on mutual respect and warm hospitality. Our members agree to simple standards that keep every evening memorable.
              </p>
            </div>
            <Link
              href="/community-guidelines"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold-primary transition-colors shrink-0"
            >
              Read full guidelines <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-hairline">
            {communityGuidelines.map((guideline, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-gold-dark/20 border border-gold-primary/30 text-gold-light font-display text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-sm text-mist/90 leading-relaxed font-body">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Leadership Team Placeholders */}
        <section className="space-y-12">
          <SectionHeading
            eyebrow="The Team"
            titleBefore="Curators"
            titleItalic="Behind"
            titleAfter="the Club"
            description="A passionate collective of event promoters, community directors, and cultural strategists."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-midnight/70 border border-hairline-strong rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="w-28 h-36 rounded-2xl overflow-hidden shrink-0 border border-hairline">
                  <ImageSlot
                    aspectRatio="portrait"
                    tone="portrait"
                    label={member.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-xl font-display text-ivory">
                    {member.name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                    {member.role}
                  </p>
                  <p className="text-sm text-mist leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Direct Concierge & Contact Form */}
        <section className="max-w-3xl mx-auto">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
