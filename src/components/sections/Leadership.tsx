"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const GROUPS = [
  {
    label: "Security & Domain Training",
    accent: "#FF6B4A",
    tag: "TRAINING",
    desc: "Led developer sessions covering API security, SQL injection prevention, BurpSuite, PCI DSS compliance and fintech domain knowledge transfer to engineers at all levels.",
    photos: [
      { src: "/lead-training-security.jpeg", caption: "Security & domain session" },
    ],
  },
  {
    label: "Fintech Fusion 2024",
    accent: "#B6FF3C",
    tag: "SPEAKING",
    desc: "Industry speaker at Fintech Fusion 2024 — presented on payment system architecture, cross-border fintech integrations and emerging financial infrastructure trends.",
    photos: [
      { src: "/lead-fintech-podium.jpeg", caption: "Podium address" },
      { src: "/lead-fintech-team.jpeg", caption: "Team at event" },
    ],
  },
  {
    label: "Team Building",
    accent: "#34E0E0",
    tag: "LEADERSHIP",
    desc: "Built cross-functional engineering teams from scratch — onboarding, workflow definition, coding standards and inter-team coordination across Developers Studio.",
    photos: [
      { src: "/lead-team-building.jpg", caption: "Team building session" },
    ],
  },
  {
    label: "Team Setup & Mentoring",
    accent: "#9B59FF",
    tag: "MENTORING",
    desc: "Ran structured mentoring programmes for new developer cohorts — pair programming, architecture walkthroughs, code reviews and career guidance.",
    photos: [
      { src: "/lead-mentoring-1.png",   caption: "Mentoring session" },
      { src: "/lead-mentoring-2.png",   caption: "Team Q&A" },
      { src: "/lead-presenting.png",    caption: "Team structure" },
      { src: "/lead-presenting-2.png",  caption: "Dev session" },
    ],
  },
];

function PhotoTile({ src, caption, accent }: { src: string; caption: string; accent: string }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      background: "#080c14",
      border: `1px solid ${accent}25`,
      borderRadius: "4px",
      overflow: "hidden",
      height: "120px",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: accent, zIndex: 2 }} />
      <Image src={src} alt={caption} fill sizes="(max-width: 768px) 45vw, 200px" style={{ objectFit: "contain", objectPosition: "center" }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
        padding: "18px 6px 5px",
        background: "linear-gradient(to top, rgba(4,6,12,0.95) 60%, transparent)",
      }}>
        <p className="mono" style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.07em", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {caption}
        </p>
      </div>
    </div>
  );
}

function PhotoGrid({ photos, accent }: { photos: typeof GROUPS[0]["photos"]; accent: string }) {
  const n = photos.length;
  if (n === 1) return (
    <div style={{ width: "100%" }}>
      <PhotoTile src={photos[0].src} caption={photos[0].caption} accent={accent} />
    </div>
  );
  if (n === 2) return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", width: "100%" }}>
      {photos.map(p => <PhotoTile key={p.src} src={p.src} caption={p.caption} accent={accent} />)}
    </div>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", width: "100%" }}>
      {photos.map(p => <PhotoTile key={p.src} src={p.src} caption={p.caption} accent={accent} />)}
    </div>
  );
}

export function Leadership() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.04 },
    transition: {
      duration: 0.6,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="leadership"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Trainer and leadership roles"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p {...reveal(0)} className="mono mb-10 text-xs tracking-[0.25em] uppercase" style={{ color: "var(--text-muted)" }}>
          // 06 — TRAINER & LEADERSHIP
        </motion.p>

        {/* Heading + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          <motion.h2
            {...reveal(0.06)}
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Leading teams.<br />
            <span style={{ color: "var(--signal)" }}>Sharing knowledge.</span>
          </motion.h2>

          <motion.div {...reveal(0.1)} className="flex flex-col justify-end gap-4">
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75 }}>
              Beyond shipping code — training engineers, speaking at industry events,
              running security workshops and building high-performing teams from the ground up.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { value: "6+", label: "Years mentoring" },
                { value: "3+", label: "Teams built" },
                { value: "1",  label: "Industry talk"  },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-bold mono" style={{ fontSize: "1.5rem", color: "var(--signal)", letterSpacing: "-0.03em" }}>{value}</p>
                  <p className="mono" style={{ fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-3">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              {...reveal(0.1 + gi * 0.07)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${group.accent}45`;
                el.style.boxShadow = `0 4px 24px ${group.accent}0D`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--line)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Coloured top bar on mobile, left bar on desktop */}
              <div className="block md:hidden" style={{ height: "3px", background: group.accent }} />

              <div className="flex flex-col md:flex-row md:items-center">
                {/* Left accent bar — desktop only */}
                <div className="hidden md:block" style={{ width: "3px", alignSelf: "stretch", background: group.accent, flexShrink: 0 }} />

                {/* Text block */}
                <div style={{ flex: 1, padding: "18px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: "0.6rem", letterSpacing: "0.14em",
                        color: group.accent,
                        background: `${group.accent}15`,
                        border: `1px solid ${group.accent}30`,
                        borderRadius: "2px",
                        padding: "2px 6px",
                        flexShrink: 0,
                      }}
                    >
                      {group.tag}
                    </span>
                    <p className="font-bold" style={{ fontSize: "0.88rem", letterSpacing: "-0.01em", margin: 0 }}>
                      {group.label}
                    </p>
                  </div>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>
                    {group.desc}
                  </p>
                </div>

                {/* Divider — desktop only */}
                <div className="hidden md:block" style={{ width: "1px", alignSelf: "stretch", background: "var(--line)", flexShrink: 0 }} />

                {/* Photos */}
                <div style={{ padding: "0 16px 16px", flexShrink: 0 }} className="md:py-3 md:px-4 md:w-72 lg:w-80">
                  <PhotoGrid photos={group.photos} accent={group.accent} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
