"use client";
import { motion, useReducedMotion } from "motion/react";

const ROLES = [
  {
    period: "June 2026 – Present",
    title: "Full Stack Engineer",
    company: "Think Advertise",
    location: "Lahore, Pakistan",
    current: true,
    bullets: [
      "Lead end-to-end delivery of client-facing web products owning technical direction from requirements and system design through staging, QA, and production release.",
      "Architect and maintain internal tooling and dashboards that surface operational data to non-technical stakeholders, reducing reliance on ad-hoc engineering support.",
      "Design and own backend API systems built on Node.js and PostgreSQL; define data contracts, access patterns, and integration standards consumed across frontend and third-party surfaces.",
      "Guide and unblock junior engineers across the team — conducting code reviews, setting quality standards, and providing technical direction on implementation approach and architecture decisions.",
      "Serve as the primary technical point of contact across cross-functional workstreams — translating product requirements into system design and keeping delivery aligned with business goals.",
    ],
  },
  {
    period: "June 2025 – June 2026",
    title: "Full Stack Blockchain Engineer",
    company: "BIG O SOFT",
    location: "Remote, Pakistan",
    current: false,
    bullets: [
      "Architected and shipped full-stack applications across the complete lifecycle from technical scoping through deployment on React, Node.js, and PostgreSQL.",
      "Owned smart contract integration using Ethers.js; defined transaction flow standards enabling secure, auditable on-chain operations for end users.",
      "Directed performance optimisation initiatives; analysed runtime and rendering bottlenecks to deliver measurable improvements to production load times.",
      "Diagnosed and resolved a suite of performance issues across the stack; delivered measurable improvements in page responsiveness and user-facing load times in production.",
      "Contributed to a remote-first engineering culture by maintaining clear async communication, thorough documentation, and consistent delivery against sprint commitments.",
    ],
  },
  {
    period: "Jan 2025 – May 2025",
    title: "Associate Full Stack Developer",
    company: "InvoZone",
    location: "Lahore, Pakistan",
    current: false,
    bullets: [
      "Delivered production-grade UI components in React and Tailwind CSS scoping, implementing, and shipping features across multiple concurrent workstreams.",
      "Designed and maintained RESTful APIs in Node.js and Express underpinning core backend operations; contributed architectural input on data modelling and endpoint contracts.",
      "Resolved critical production defects and shipped features end-to-end across a live, high-traffic codebase operating with increasing autonomy within a senior-led team.",
      "Collaborated closely with senior engineers and product leads to surface technical constraints early, contributing to scope decisions that reduced last-minute rework and protected delivery timelines.",
      "Maintained consistent delivery velocity across sprint cycles managing multiple in-flight workstreams, self-prioritising tasks, and communicating blockers proactively to keep team throughput uninterrupted.",
    ],
  },
  {
    period: "Jul 2024 – Dec 2024",
    title: "Software Engineering Intern",
    company: "Villaex Technologies",
    location: "Lahore, Pakistan",
    current: false,
    bullets: [
      "Delivered full-stack features end-to-end in React and Node.js scoped, implemented, tested, and shipped to production within an agile team.",
      "Diagnosed and resolved issues across a large live codebase; maintained system stability while onboarding to a complex production environment.",
      "Contributed to code review and version control workflows via Git submitting PRs, addressing review feedback, and tracking work through issue management tooling.",
      "Validated feature correctness and performance against acceptance criteria before each production release catching edge cases during QA that prevented regressions from reaching end users.",
      "Ramped independently on an unfamiliar, large-scale production codebase within the first sprint mapping system architecture, understanding data flows, and shipping assigned work without requiring extended handholding.",
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
          Four companies.
          <br />
          <span style={{ color: "var(--text-muted)" }}>Real production.</span>
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
