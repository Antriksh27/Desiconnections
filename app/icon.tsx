import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0B0710",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D9A441",
          fontWeight: 700,
          borderRadius: 8,
          border: "1px solid rgba(217, 164, 65, 0.4)",
        }}
      >
        DC
      </div>
    ),
    {
      ...size,
    }
  );
}
