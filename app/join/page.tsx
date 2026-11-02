import { Suspense } from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JoinForm } from "@/components/join/JoinForm";

export const metadata: Metadata = {
  title: "Request Your Invitation | DesiConnections",
  description:
    "Request your private membership invitation to DesiConnections for headline entertainment, artist meet-and-greets, and curated cultural networking across the United States.",
};

export default function JoinPage() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gold-dark/12 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        <SectionHeading
          eyebrow="Private Club Membership"
          titleBefore="Request Your"
          titleItalic="Invitation"
          description="Admission is curated to maintain genuine hospitality, intimate gatherings, and cultural excellence across New York, San Francisco, Los Angeles, Chicago, and Dallas."
          align="center"
        />

        <Suspense
          fallback={
            <div className="w-full max-w-3xl mx-auto h-[600px] bg-midnight/50 border border-hairline rounded-3xl animate-pulse" />
          }
        >
          <JoinForm />
        </Suspense>
      </div>
    </div>
  );
}
