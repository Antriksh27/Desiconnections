"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { MembershipShowpieceCard } from "@/components/brand/MembershipShowpieceCard";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { StatusChip } from "@/components/ui/StatusChip";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export default function StyleguidePage() {
  const [switchState, setSwitchState] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(true);

  const colorTokens = [
    { name: "ink", hex: "#0B0710", role: "Page base background", className: "bg-[#0B0710]" },
    { name: "midnight", hex: "#140C1F", role: "Raised surface cards", className: "bg-[#140C1F]" },
    { name: "plum", hex: "#231433", role: "Section & panel surface", className: "bg-[#231433]" },
    { name: "plum-soft", hex: "#2E1C42", role: "Modal & drawer base", className: "bg-[#2E1C42]" },
    { name: "ivory", hex: "#F7F1E8", role: "Primary text", className: "bg-[#F7F1E8]", textDark: true },
    { name: "mist", hex: "#CFC6D6", role: "Secondary text & captions", className: "bg-[#CFC6D6]", textDark: true },
    { name: "muted", hex: "#8E849B", role: "Tertiary meta text", className: "bg-[#8E849B]", textDark: true },
    { name: "gold", hex: "#D9A441", role: "Signature brand & CTA", className: "bg-[#D9A441]", textDark: true },
    { name: "gold-light", hex: "#F1D08A", role: "Wordmark accent & highlights", className: "bg-[#F1D08A]", textDark: true },
    { name: "gold-deep", hex: "#8A6420", role: "Gold foil shadow tone", className: "bg-[#8A6420]" },
    { name: "marigold", hex: "#FF9F1C", role: "Stage light warmth", className: "bg-[#FF9F1C]", textDark: true },
    { name: "rani", hex: "#D6336C", role: "Stage light festival pink", className: "bg-[#D6336C]" },
    { name: "volt", hex: "#4FE3B0", role: "Perk zone benefit ONLY", className: "bg-[#4FE3B0]", textDark: true },
    { name: "danger", hex: "#FF5C5C", role: "Error & sold out state", className: "bg-[#FF5C5C]" },
  ];

  return (
    <div className="min-h-screen bg-ink text-ivory pb-32">
      <main className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-8 space-y-24">
        {/* Styleguide Meta Banner */}
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
          </Link>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full bg-midnight border border-hairline text-gold-light">
            Design Tokens &amp; Shell v1.0
          </span>
        </div>
        {/* Intro */}
        <section className="space-y-4">
          <SectionHeading
            eyebrow="Phase A: Core UI Kit"
            titleBefore="The"
            titleItalic="DesiConnections"
            titleAfter="Component Kit"
            description="Production-grade, accessible primitives built strictly to DESIGN.md tokens with WCAG AA compliance, dark ink aesthetic, and reduced-motion safety."
          />
        </section>

        {/* 1. Brand Logo & Wordmark Suite */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">01. Official Brand Logo</h2>
            <span className="label-caps text-muted">components/brand/Logo</span>
          </div>

          <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-10 space-y-8">
            <div className="space-y-6">
              <span className="label-caps text-muted">Horizontal Brand Lockups</span>
              <div className="flex flex-col gap-6 pt-2">
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Extra Large (xl)</span>
                  <Wordmark size="xl" />
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Large (lg - footer)</span>
                  <Wordmark size="lg" />
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Medium (md - mobile menu)</span>
                  <Wordmark size="md" />
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Small (sm - navbar)</span>
                  <Wordmark size="sm" />
                </div>
              </div>

              <div className="pt-6 border-t border-hairline grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Full Lockup (Stacked)</span>
                  <Wordmark variant="full" size="md" />
                </div>
                <div>
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Emblem Mark Alone</span>
                  <Wordmark variant="emblem" size="md" />
                </div>
              </div>
            </div>
            <p className="text-xs text-mist">
              The official &quot;The Desi Connections&quot; insignia features the multi-color five-figure unity star paired with vibrant rani brush lettering and high-contrast tagline.
            </p>
          </div>
        </section>

        {/* 2. Color Tokens */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">02. Color Tokens</h2>
            <span className="label-caps text-muted">WCAG AA Compliant</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {colorTokens.map((token) => (
              <div
                key={token.name}
                className="bg-midnight border border-hairline rounded-2xl p-3.5 flex flex-col justify-between h-40 transition-transform hover:-translate-y-1"
              >
                <div
                  className={`w-full h-16 rounded-xl ${token.className} border border-white/10 shadow-inner flex items-center justify-center`}
                >
                  {token.name === "volt" && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-ink px-1.5 py-0.5 rounded bg-white/40">
                      Perk Zone
                    </span>
                  )}
                </div>
                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold capitalize text-ivory">
                      {token.name}
                    </span>
                    <span className="text-[11px] font-mono text-muted">{token.hex}</span>
                  </div>
                  <p className="text-[10px] text-mist/70 truncate mt-0.5">{token.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SectionHeading Primitive */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">03. Section Heading Primitive</h2>
            <span className="label-caps text-muted">components/ui/SectionHeading</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="label-caps text-muted">Left Aligned</span>
              <SectionHeading
                eyebrow="Entertainment Pillar"
                titleBefore="Front-Row"
                titleItalic="Nights."
                titleAfter="Bollywood Up Close."
                description="Experience world-tour concerts, private lounge tickets, and intimate artist meet-and-greets."
                size="md"
              />
            </div>
            <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="label-caps text-muted">Center Aligned</span>
              <SectionHeading
                eyebrow="Connections Pillar"
                titleBefore="Where Ambition Meets"
                titleItalic="Culture."
                align="center"
                description="Connect with founders, dancers, creatives, and leaders in your city."
                size="md"
              />
            </div>
          </div>
        </section>

        {/* 4. Button Suite */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">04. Buttons &amp; Action Link</h2>
            <span className="label-caps text-muted">components/ui/Button</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Gold Foil */}
            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="label-caps text-gold-light">Primary Pill (Gold Foil)</span>
                <p className="text-xs text-mist">Gold-foil gradient pill with dark ink typography.</p>
              </div>
              <div className="space-y-3 pt-4">
                <Button variant="primary" size="lg" className="w-full">
                  Request Your Invite
                </Button>
                <Button variant="primary" size="md" className="w-full">
                  Join The Club
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Get Tickets
                </Button>
              </div>
            </div>

            {/* Ghost Pill */}
            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="label-caps text-mist">Ghost Pill (Hairline)</span>
                <p className="text-xs text-mist">Transparent with hairline-strong border and gold hover.</p>
              </div>
              <div className="space-y-3 pt-4">
                <Button variant="ghost" size="lg" className="w-full">
                  Explore Upcoming Events
                </Button>
                <Button variant="ghost" size="md" className="w-full">
                  See What&apos;s On
                </Button>
                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Text Link with Animated Underline */}
            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="label-caps text-gold-light">Text Link with Underline Draw</span>
                <p className="text-xs text-mist">Editorial links that animate an underline on hover.</p>
              </div>
              <div className="space-y-4 pt-4">
                <div>
                  <Button variant="link" href="/membership">
                    Compare all membership tiers &rarr;
                  </Button>
                </div>
                <div>
                  <Button variant="link" href="/events">
                    Browse full tour calendar &rarr;
                  </Button>
                </div>
                <div>
                  <Button variant="link" href="/deals">
                    Review partner terms &amp; conditions &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Chips & Status Badges */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">05. Chips &amp; Status Badges</h2>
            <span className="label-caps text-muted">components/ui/Chip &amp; StatusChip</span>
          </div>

          <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="space-y-3">
              <span className="label-caps text-muted">Status Chips (Events, Inventory, Perks)</span>
              <div className="flex flex-wrap gap-3 items-center">
                <StatusChip status="selling-fast" />
                <StatusChip status="few-left" />
                <StatusChip status="sold-out" />
                <StatusChip status="members-first" />
                <StatusChip status="perk" />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-hairline">
              <span className="label-caps text-muted">Audience &amp; Category Chips</span>
              <div className="flex flex-wrap gap-2.5 items-center">
                <Chip variant="active">All Cities</Chip>
                <Chip variant="default">New York</Chip>
                <Chip variant="default">San Francisco</Chip>
                <Chip variant="default">Los Angeles</Chip>
                <Chip variant="default">Chicago</Chip>
                <Chip variant="default">Dallas</Chip>
                <Chip variant="outline">Founders</Chip>
                <Chip variant="outline">Creators</Chip>
                <Chip variant="outline">Doctors</Chip>
                <Chip variant="gold">VIP Lounge</Chip>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Form Controls */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">06. Form Controls</h2>
            <span className="label-caps text-muted">Floating Labels &amp; Gold Rings</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-semibold text-ivory">Text Inputs &amp; Selects</h3>
              <Input label="Full Name" defaultValue="Rohit Varma" />
              <Input label="Email Address" type="email" placeholder="name@example.com" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Select City"
                  defaultValue="new-york"
                  options={[
                    { value: "new-york", label: "New York" },
                    { value: "san-francisco", label: "San Francisco" },
                    { value: "los-angeles", label: "Los Angeles" },
                    { value: "chicago", label: "Chicago" },
                    { value: "dallas", label: "Dallas" },
                  ]}
                />
                <Select
                  label="Membership Interest"
                  defaultValue="club-member"
                  options={[
                    { value: "guest-pass", label: "Guest Pass" },
                    { value: "club-member", label: "Club Member" },
                    { value: "inner-circle", label: "Inner Circle" },
                  ]}
                />
              </div>
              <Textarea label="Tell us about yourself or your event inquiry" rows={3} />
            </div>

            <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-base font-semibold text-ivory">Toggles &amp; Checkboxes</h3>
                <Checkbox
                  label="Star Appearance Notifications"
                  description="Receive instant alerts when Bollywood artist meet-and-greets are announced."
                  checked={checkboxState}
                  onChange={(e) => setCheckboxState(e.target.checked)}
                />
                <Checkbox
                  label="I agree to community guidelines"
                  description="DesiConnections is a respectful private club for entertainment and networking."
                  defaultChecked={false}
                />
                <div className="pt-2 border-t border-hairline">
                  <Switch
                    label="Switch n Save Perk Updates"
                    description="Include updates regarding partner utility savings and member deals."
                    checked={switchState}
                    onCheckedChange={setSwitchState}
                  />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-plum/50 border border-hairline text-xs text-mist">
                All inputs are 56px touch-friendly targets with floating labels and gold active focus rings.
              </div>
            </div>
          </div>
        </section>

        {/* 7. Card Primitives & Showpieces */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">07. Card Primitives &amp; 3D Showpiece</h2>
            <span className="label-caps text-muted">components/ui/Card &amp; MembershipShowpieceCard</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Interactive Card Base */}
            <Card interactive className="p-6 space-y-4">
              <div className="space-y-1">
                <span className="label-caps text-gold-light">Interactive Card Base</span>
                <h3 className="text-xl font-display text-ivory">Midnight Surface</h3>
                <p className="text-xs text-mist leading-relaxed">
                  Hairline border, soft top highlight, and a smooth stage-glow bloom on hover.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-plum/40 border border-hairline space-y-2">
                <div className="flex items-center gap-2 text-xs text-gold-light">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Subtle stage-glow hover</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-mist">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>28px radius for media cards</span>
                </div>
              </div>
            </Card>

            {/* 3D Pointer Tilt Showpiece */}
            <div className="flex flex-col items-center">
              <span className="label-caps text-gold-light mb-2">3D Pointer Tilt Showpiece</span>
              <MembershipShowpieceCard
                memberName="PRIYA SHARMA"
                memberNumber="DC • 9912 3041"
                tierName="Club Member"
              />
              <span className="text-[11px] text-muted text-center mt-2">
                Move pointer over the card on desktop to experience the dynamic tilt.
              </span>
            </div>

            {/* Perk Zone Card (Switch n Save) */}
            <Card variant="plum" className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <StatusChip status="perk" customLabel="Everyday Benefit" />
                <span className="text-[10px] text-muted uppercase">Benefit #03</span>
              </div>
              <h3 className="text-xl font-display text-ivory">Switch n Save</h3>
              <p className="text-xs text-mist leading-relaxed">
                Quiet perk zone rendered in deep plum with a volt accent. Always placed third after entertainment and connections.
              </p>
              <div className="p-3.5 rounded-xl bg-midnight/80 border border-hairline space-y-1 text-[11px] text-mist">
                <p className="text-ivory font-medium">✓ Partner-negotiated electricity deals</p>
                <p className="text-ivory font-medium">✓ Transparent comparison assistance</p>
              </div>
              <p className="text-[10px] text-muted">
                Switch n Save offers are provided by partners. Terms apply.
              </p>
            </Card>
          </div>
        </section>

        {/* 8. ImageSlot Component */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">08. Art-Directed ImageSlot</h2>
            <span className="label-caps text-muted">components/ui/ImageSlot</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <span className="text-[11px] text-muted block mb-2 font-mono uppercase">Tone: Crowd (4:5)</span>
              <ImageSlot tone="crowd" aspectRatio="4:5" />
            </div>
            <div>
              <span className="text-[11px] text-muted block mb-2 font-mono uppercase">Tone: Portrait + Arch (Portrait)</span>
              <ImageSlot tone="portrait" aspectRatio="portrait" archTop />
            </div>
            <div>
              <span className="text-[11px] text-muted block mb-2 font-mono uppercase">Tone: Stage (4:5)</span>
              <ImageSlot tone="stage" aspectRatio="4:5" />
            </div>
            <div>
              <span className="text-[11px] text-muted block mb-2 font-mono uppercase">Tone: Venue (4:5)</span>
              <ImageSlot tone="venue" aspectRatio="4:5" />
            </div>
          </div>
        </section>

        {/* 9. Marquee Component */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">09. Continuous Marquee</h2>
            <span className="label-caps text-muted">components/ui/Marquee (Hover pauses)</span>
          </div>

          <div className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-4 overflow-hidden">
            <span className="label-caps text-gold-light">Past Event Moments &amp; Cities</span>
            <Marquee speed={30}>
              {[
                { city: "New York", title: "Bollywood Gala Premiere" },
                { city: "San Francisco", title: "Arijit Singh Symphony" },
                { city: "Los Angeles", title: "Diljit Dosanjh VIP Lounge" },
                { city: "Chicago", title: "Founders &amp; Creators Mixer" },
                { city: "Dallas", title: "Diwali Royale Celebration" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-plum/70 border border-hairline whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider text-ivory">
                    {item.city}
                  </span>
                  <span className="text-muted">&bull;</span>
                  <span className="text-xs text-mist">{item.title}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* 10. Reveal Wrapper */}
        <section className="space-y-6">
          <div className="border-b border-hairline pb-4 flex items-baseline justify-between">
            <h2 className="display-md text-ivory">10. Motion Reveal Wrapper</h2>
            <span className="label-caps text-muted">components/ui/Reveal</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-3">
              <span className="label-caps text-muted">Variant: Rise</span>
              <Reveal variant="rise">
                <div className="p-4 rounded-2xl bg-plum/60 border border-hairline text-sm text-ivory">
                  Text line rises 24px and fades smoothly with custom cubic-bezier easing.
                </div>
              </Reveal>
            </div>

            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-3">
              <span className="label-caps text-muted">Variant: Unmask</span>
              <Reveal variant="unmask">
                <div className="p-4 rounded-2xl bg-plum/60 border border-hairline text-sm text-gold-light">
                  Smooth vertical clip-path wipe revealing photography or cards.
                </div>
              </Reveal>
            </div>

            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-3">
              <span className="label-caps text-muted">Variant: Fade</span>
              <Reveal variant="fade">
                <div className="p-4 rounded-2xl bg-plum/60 border border-hairline text-sm text-mist">
                  Simple opacity fade, also used automatically when reduced motion is preferred.
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
