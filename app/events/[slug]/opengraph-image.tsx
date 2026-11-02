import { ImageResponse } from "next/og";
import { eventsContent } from "@/content/events";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = eventsContent.find((e) => e.slug === slug);

  const title = event?.title || "DesiConnections Event";
  const date = event?.date || "Tour Announcement";
  const city = event?.city || "New York / San Francisco";
  const venue = event?.venue || "United States";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#0B0710",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(214, 51, 108, 0.4) 0%, rgba(11, 7, 16, 0) 70%)",
          color: "#F7F1E8",
          fontFamily: "sans-serif",
          border: "2px solid rgba(217, 164, 65, 0.4)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#D9A441", letterSpacing: 2 }}>
            DESICONNECTIONS
          </div>
          <div
            style={{
              fontSize: 18,
              padding: "8px 20px",
              borderRadius: 999,
              backgroundColor: "rgba(217, 164, 65, 0.2)",
              color: "#F1D08A",
              border: "1px solid rgba(217, 164, 65, 0.5)",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {city}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 20, color: "#D9A441", textTransform: "uppercase", letterSpacing: 3 }}>
            {date}
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#F7F1E8", lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 24, color: "#CFC6D6" }}>
            {venue}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(247, 241, 232, 0.2)", paddingTop: 24 }}>
          <div style={{ fontSize: 18, color: "#8E849B" }}>
            Meet. Connect. Celebrate.
          </div>
          <div style={{ fontSize: 18, color: "#F1D08A" }}>
            desiconnections.club
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
