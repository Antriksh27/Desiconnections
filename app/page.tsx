import { Hero } from "@/components/home/Hero";
import { MomentMarquee } from "@/components/home/MomentMarquee";
import { EventinFeatures } from "@/components/home/EventinFeatures";
import { PillarsSection } from "@/components/home/PillarsSection";
import { EventsCarousel } from "@/components/home/EventsCarousel";
import { EventinSchedule } from "@/components/home/EventinSchedule";
import { StarsSpotlight } from "@/components/home/StarsSpotlight";
import { EventinPasses } from "@/components/home/EventinPasses";
import { WhoYouWillMeet } from "@/components/home/WhoYouWillMeet";
import { EverydayBenefitsStrip } from "@/components/home/EverydayBenefitsStrip";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-ink text-ivory">
      {/* 1. Eventin 2-Column Asymmetric Hero with Countdown Box & 4-Counter Stats */}
      <Hero />

      {/* 2. Fast Moment Marquee Ticker */}
      <MomentMarquee />

      {/* 3. Eventin 4-Card Advantage / Feature Grid */}
      <EventinFeatures />

      {/* 4. Three Pillars (Unequal weight, GSAP pinned moment on desktop) */}
      <PillarsSection />

      {/* 5. Upcoming Tour Experiences (Eventin Ticket Cards) */}
      <EventsCarousel />

      {/* 6. Interactive Eventin Tour Schedule & Sessions */}
      <EventinSchedule />

      {/* 7. Bollywood Stars Spotlight (cleared talent only) */}
      <StarsSpotlight />

      {/* 9. Eventin 3-Column Membership Pass Tiers Table */}
      <EventinPasses />

      {/* 10. Who You Will Meet (Member Testimonials & Real Portraits) */}
      <WhoYouWillMeet />

      {/* 11. Everyday Benefits Strip (quiet partner perk row) */}
      <EverydayBenefitsStrip />

      {/* 12. Final CTA with Stage Glow & Lead Capture */}
      <FinalCta />
    </main>
  );
}
