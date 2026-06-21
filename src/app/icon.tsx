import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: 700,
          color: "#B6FF3C",
          fontFamily: "monospace",
          letterSpacing: "-0.02em",
        }}
      >
        MR
      </div>
    ),
    { ...size }
  );
}
