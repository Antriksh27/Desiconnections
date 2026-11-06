import { Metadata } from "next";
import { eventsContent } from "@/content/events";
import { EventDirectory } from "@/components/events/EventDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Upcoming Concerts & Tour Dates | The Desi Connections",
  description:
    "Explore upcoming concerts in Columbus and national tours. Active members receive 2 complimentary tickets each year for sponsored shows.",
};

export default function EventsPage() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <SectionHeading
        eyebrow="Calendar &amp; Passes"
        titleBefore="Concert Dates &amp;"
        titleItalic="Experiences"
        description="Complimentary pass allocations, front-row reserves, and cultural celebrations in Columbus, Ohio and sponsored tour cities."
      />

      <EventDirectory initialEvents={eventsContent} />
    </div>
  );
}
