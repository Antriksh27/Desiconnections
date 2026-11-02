import { Metadata } from "next";
import { eventsContent } from "@/content/events";
import { EventDirectory } from "@/components/events/EventDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events & Tours",
  description:
    "Explore upcoming Bollywood arena concerts, red carpet galas, and private member socials across the United States.",
};

export default function EventsPage() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <SectionHeading
        eyebrow="Calendar &amp; Tickets"
        titleBefore="Tour Dates &amp;"
        titleItalic="Experiences"
        description="Priority allocations, front-row reserves, and backstage lounges for DesiConnections members across New York, San Francisco, Los Angeles, Chicago, and Dallas."
      />

      <EventDirectory initialEvents={eventsContent} />
    </div>
  );
}
