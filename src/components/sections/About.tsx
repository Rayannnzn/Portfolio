"use client";
import { motion, useReducedMotion } from "motion/react";

const STATS = [
  { value: "3+",   label: "Years in\nproduction" },
  { value: "4",    label: "Companies\nshipped with" },
  { value: "10K+", label: "Monthly active\nusers" },
  { value: "150+", label: "High impact features\nengineered" },
];
// 10K+
// Monthly active
// users
const PARAGRAPHS = [
  "Solution-driven software professional with 3+ years of experience in designing, developing, and maintaining robust software systems and architectures. Demonstrated expertise in delivering scalable solutions, optimizing performance, and ensuring high-quality code standards. Strong communication and collaboration skills with proven ability to work effectively in cross-functional teams. Experienced in partnering with leading fintech and consulting firms across Europe to deliver innovative technology solutions.",
  "The next chapter is applying AI to high-trust financial systems: intelligent fraud detection, compliance automation, risk assessment, payment operations, and LLM-powered workflows built with the same standards as production payment infrastructure accurate, observable, secure, and audit-ready."
];

export function About() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.65,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="About"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 01 — ABOUT
        </motion.p>

        {/* Section heading */}
        <motion.h2
          {...reveal(0.06)}
          className="font-bold mb-14 md:mb-16"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Full-stack depth.
          <br />
          <span style={{ color: "var(--signal)" }}>Ship velocity.</span>
        </motion.h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_272px] gap-12 md:gap-20 items-start">

          {/* Narrative */}
          <div className="flex flex-col gap-6">
            {PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                {...reveal(0.1 + i * 0.07)}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {para}
              </motion.p>
            ))}

            {/* Laravel + AI tag line */}
            <motion.p
              {...reveal(0.31)}
              className="mono text-sm pt-2"
              style={{ color: "var(--signal-dim)", borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}
            >
              React · Next.js · Node.js · TypeScript · Web3 · REST APIs · PostgreSQL · MongoDB · Tailwind CSS · Vercel
            </motion.p>
          </div>

          {/* Stat cards — instrument-panel grid */}
          <motion.div {...reveal(0.18)}>
            {/* Signal accent hairline at top */}
            <div style={{ height: "2px", background: "var(--signal)", marginBottom: "1px" }} aria-hidden="true" />

            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: "var(--line)" }}
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col gap-1 p-5"
                  style={{ background: "var(--surface)" }}
                >
                  <span
                    className="mono font-bold"
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      color: "var(--signal)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="mono text-xs leading-snug"
                    style={{ color: "var(--text-muted)", whiteSpace: "pre-line" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Label below stats grid */}
            <p
              className="mono text-xs mt-3"
              style={{ color: "var(--text-muted)", opacity: 0.5, letterSpacing: "0.1em" }}
            >
              // SYSTEM METRICS
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
