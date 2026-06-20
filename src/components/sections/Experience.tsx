"use client";
import { motion, useReducedMotion } from "motion/react";

const ROLES = [
  {
    period: "May 2026 – Present",
    title: "Gateway Manager / Tech Manager",
    company: "Zenithal OÜ",
    location: "Remote · Estonia",
    current: true,
    bullets: [
      "Own end-to-end payment gateway operations — uptime, performance optimisation and real-time health monitoring across all transaction flows.",
      "Lead PSP, acquiring bank and third-party provider integrations; architect connectivity protocols ensuring compliance and minimal latency.",
      "Drive incident management and root-cause analysis for production issues, reducing mean time to resolution and protecting approval rates.",
      "Analyse transaction performance and gateway health metrics; surface insights to improve conversion and operational efficiency.",
      "Oversee merchant onboarding and technical integration lifecycle, standardising processes to accelerate time-to-live.",
      "Act as Technical Manager across cross-functional squads — coordinating delivery, unblocking engineers and aligning stakeholders on platform roadmap.",
    ],
  },
  {
    period: "Jan 2021 – Apr 2026",
    title: "Tech Lead",
    company: "Developers Studio",
    location: "Lahore, Pakistan",
    current: false,
    bullets: [
      "Directed end-to-end software development lifecycle for fintech and iGaming clients — from technical scoping through delivery and post-launch support.",
      "Architected and delivered a custom multi-PSP payment gateway serving live merchant traffic; led all acquiring bank and PSP integrations.",
      "Managed a cross-functional engineering team; introduced code review standards, CI/CD practices and sprint ceremonies that measurably improved delivery cadence.",
      "Served as primary technical liaison between clients and engineering — translating business requirements into system design and preventing scope misalignment.",
      "Produced end-to-end technical documentation: API specifications, integration runbooks and onboarding guides adopted across multiple client engagements.",
      "Established PCI DSS compliance on two major products in partnership with Risk Associates; executed and passed Quarterly ASV scans.",
      "Monitored live production traffic via BurpSuite and custom dashboards; diagnosed and resolved critical issues with minimal downtime impact.",
      "Supported pre-sales and merchant onboarding alongside commercial teams, improving integration success rates and reducing time-to-first-transaction.",
    ],
  },
  {
    period: "Jan 2021 – Jun 2023",
    title: "Lead Software Engineer",
    company: "Valuno (formerly Quickbit)",
    location: "Remote · Sweden",
    current: false,
    bullets: [
      "Led development and maintenance of the core legacy affiliate, account management and payment gateway platform powering live European crypto-payments traffic.",
      "Conducted systematic architecture analysis to identify performance bottlenecks; implemented targeted enhancements that improved system throughput and reliability.",
      "Coordinated distributed engineering teams across multiple time zones — established async communication protocols and delivery rhythms that accelerated project cadence.",
      "Served as domain authority on fintech and crypto-payment flows; guided technical decisions and upskilled team members on business-critical context.",
      "Produced comprehensive technical documentation and knowledge-transfer artefacts that reduced onboarding time for incoming engineers.",
      "Integrated new product features into the live system with zero major incidents, maintaining system integrity throughout a high-change period.",
    ],
  },
  {
    period: "Jan 2020 – Dec 2020",
    title: "Associate Software Engineer",
    company: "Programmers Force",
    location: "Lahore, Pakistan",
    current: false,
    bullets: [
      "Contributed to WhistleIt.io — a scalable real-time collaboration platform enabling communication across workspaces, teams and channels for organisations of varying sizes.",
      "Owned the backend message retrieval module: redesigned query patterns and caching strategy to achieve high throughput and sub-second response times.",
      "Designed and proposed architectural solutions for multiple core modules, improving overall system scalability and maintainability.",
      "Collaborated with a cross-functional product and engineering team to align technical design with product requirements and deliver a seamless user experience.",
    ],
  },
];

export function Experience() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: 0.6,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Work experience"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 04 — EXPERIENCE
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...reveal(0.06)}
          className="font-bold mb-16"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Four roles.
          <br />
          <span style={{ color: "var(--text-muted)" }}>Six years.</span>
        </motion.h2>

        {/* Timeline */}
        <div>
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              {...reveal(0.1 + i * 0.08)}
              className="grid grid-cols-[20px_1fr] md:grid-cols-[164px_20px_1fr] gap-x-6 md:gap-x-8"
              style={{ marginBottom: i < ROLES.length - 1 ? "0" : undefined }}
            >
              {/* Date — desktop only */}
              <div className="hidden md:block pt-1">
                <p
                  className="mono text-xs leading-snug"
                  style={{ color: "var(--text-muted)", opacity: 0.7 }}
                >
                  {role.period}
                </p>
              </div>

              {/* Track — dot + line */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div
                  className={role.current ? "dot-pulse" : undefined}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 4,
                    background: role.current ? "var(--signal)" : "var(--surface-2)",
                    border: `1px solid ${role.current ? "var(--signal)" : "var(--line)"}`,
                    boxShadow: role.current ? "0 0 8px rgba(182,255,60,0.35)" : "none",
                  }}
                  aria-hidden="true"
                />
                {/* Connector line */}
                {i < ROLES.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: 1,
                      background: "var(--line)",
                      marginTop: 6,
                      minHeight: 48,
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  paddingBottom: i < ROLES.length - 1 ? "3rem" : 0,
                }}
              >
                {/* Date — mobile only */}
                <p
                  className="mono text-xs mb-2 md:hidden"
                  style={{ color: "var(--text-muted)", opacity: 0.7 }}
                >
                  {role.period}
                </p>

                {/* Title + current badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {role.title}
                  </h3>
                  {role.current && (
                    <span
                      className="mono text-xs px-2 py-0.5"
                      style={{
                        background: "rgba(182,255,60,0.08)",
                        border: "1px solid var(--signal-dim)",
                        color: "var(--signal)",
                        borderRadius: "2px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>

                {/* Company */}
                <p
                  className="mono text-xs mb-5"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                >
                  {role.company}
                  <span style={{ opacity: 0.4 }}> · </span>
                  {role.location}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5" role="list">
                  {role.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mono"
                        style={{
                          color: "var(--signal-dim)",
                          flexShrink: 0,
                          marginTop: "3px",
                          fontSize: "0.7rem",
                        }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
