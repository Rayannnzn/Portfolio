import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080B11",
          borderRadius: "24px",
          fontSize: "72px",
          fontWeight: 700,
          color: "#B6FF3C",
          fontFamily: "monospace",
          letterSpacing: "-0.02em",
        }}
      >
        AA
      </div>
    ),
    { ...size }
  );
}
