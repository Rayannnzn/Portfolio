"use client";
import { motion, useReducedMotion } from "motion/react";

const GROUPS = [
  {
    label: "Languages, Frameworks & Architect",
    tags: [
      "PHP", "JavaScript", "Python", "Laravel", 
      "REST API", "SOAP", "MicroServices", "Monolithic", "Solution Architect",
    ],
  },
  {
    label: "Data & Integrations",
    tags: [
      "PostgreSQL", "SQL", "MongoDB", "Redis", "JSON", "XML",
      "MemSql", "API Documentation", "API Integration",
    ],
  },
  {
    label: "AI",
    tags: [
      "LLM Applications", "RAG Pipelines", "Agent Workflows",
      "Automation", "Cursor AI", "Claude Code",
    ],
  },
  {
    label: "DevOps & Testing",
    tags: [
      "Docker", "AWS", "BitBucket", "Git/GitLab",
      "Sqlmap", "Nmap", "Postman", "BurpSuit", "PlayWright"
    ],
  },
  {
    label: "Leadership",
    tags: [
      "Leading Teams", "Leading Communication", "Code Reviews",
      "Technical Decisions", "Stakeholder Mgmt", "Client Comms", "Agile / Scrum",
    ],
  },
];

export function Stack() {
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
      id="stack"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Technology stack"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 02 — STACK
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...reveal(0.06)}
          className="font-bold mb-14 md:mb-16"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          The precision toolkit.
        </motion.h2>

        {/* Tag groups — spec-sheet rows */}
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {GROUPS.map(({ label, tags }, i) => (
            <motion.div
              key={label}
              {...reveal(0.08 + i * 0.07)}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 items-start py-6 md:py-7"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              {/* Category label */}
              <span
                className="mono text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--signal-dim)", paddingTop: "5px" }}
              >
                {label}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="tech-tag mono text-xs px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        {/* <motion.p
          {...reveal(0.08 + GROUPS.length * 0.07)}
          className="mono text-xs mt-6"
          style={{ color: "var(--text-muted)", opacity: 0.45, letterSpacing: "0.1em" }}
        >
          // AI GROUP — CURRENT BUILD TRACK · ALL OTHER GROUPS — PRODUCTION SHIPPED
        </motion.p> */}

      </div>
    </section>
  );
}
