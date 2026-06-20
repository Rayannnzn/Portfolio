import { ImageResponse } from "next/og";

export const alt = "Ahmad Akbar — Gateway Manager | Tech Lead | Fintech & Payment Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#080B11",
          position: "relative",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(31,41,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,55,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Signal glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(182,255,60,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#B6FF3C",
            fontFamily: "monospace",
          }}
        >
          AA.
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: "13px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#6F8F2E",
            marginBottom: "20px",
            fontFamily: "monospace",
          }}
        >
          // GATEWAY MANAGER / TECH LEAD / SOFTWARE ENGINEER
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#E8EEF5",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontFamily: "sans-serif",
            }}
          >
            Ahmad Akbar
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#8492A6",
            lineHeight: 1.5,
            maxWidth: "780px",
            fontFamily: "sans-serif",
          }}
        >
          White-label Payments · Fintech · PSP Integrations · AI Fraud Detection · Lahore, Pakistan
        </div>

        {/* Signal accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#B6FF3C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
