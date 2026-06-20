"use client";
import { motion, useReducedMotion } from "motion/react";

/* ─── Platform data ──────────────────────────────────────────── */
const PLATFORMS = [
  {
    name: "React.js",
    short: "RJCT",
    category: "Frontend · UI",
    description: "Component-based UI library for building interactive and performant user interfaces — used across all frontend projects.",
    color: "#61DAFB",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    short: "NEXT",
    category: "Framework · SSR",
    description: "Production React framework with server-side rendering, App Router, Server Actions, and seamless Vercel deployment.",
    color: "#B6FF3C",
    url: "https://nextjs.org",
  },
  {
    name: "Node.js",
    short: "NODE",
    category: "Backend · Runtime",
    description: "JavaScript runtime for building fast, scalable server-side applications and RESTful APIs with Express.",
    color: "#68A063",
    url: "https://nodejs.org",
  },
  {
    name: "TypeScript",
    short: "TS",
    category: "Language · Types",
    description: "Strongly typed superset of JavaScript — used for safer, more maintainable codebases across frontend and backend.",
    color: "#4A9EFF",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    short: "TW",
    category: "Styling · Utility",
    description: "Utility-first CSS framework enabling rapid, consistent UI development without leaving HTML — used in every project.",
    color: "#38BDF8",
    url: "https://tailwindcss.com",
  },
  {
    name: "shadcn/ui",
    short: "SHAD",
    category: "Component Library",
    description: "Accessible, customizable React component library built on Radix UI — used in Alpha Pulse for the full design system.",
    color: "#FF4A8D",
    url: "https://ui.shadcn.com",
  },
  {
    name: "MongoDB",
    short: "MDB",
    category: "Database · NoSQL",
    description: "Document-based NoSQL database — used in HireMyRoom for flexible schema design around property listings and bookings.",
    color: "#68A063",
    url: "https://mongodb.com",
  },
  {
    name: "PostgreSQL",
    short: "PSQL",
    category: "Database · SQL",
    description: "Robust relational database used for structured data and complex queries in production environments at BIG O SOFT.",
    color: "#336791",
    url: "https://postgresql.org",
  },
  {
    name: "Prisma",
    short: "PRM",
    category: "ORM · Database",
    description: "Type-safe ORM for Node.js — used for schema management, migrations, and strongly typed database queries.",
    color: "#9B59FF",
    url: "https://prisma.io",
  },
  {
    name: "Ethers.js",
    short: "ETH",
    category: "Web3 · Blockchain",
    description: "JavaScript library for interacting with the Ethereum blockchain — used to integrate smart contracts at BIG O SOFT.",
    color: "#B6FF3C",
    url: "https://ethers.org",
  },
  {
    name: "Solidity",
    short: "SOL",
    category: "Smart Contracts",
    description: "Object-oriented language for writing EVM-compatible smart contracts — used for on-chain transaction logic.",
    color: "#FF8A3C",
    url: "https://soliditylang.org",
  },
  {
    name: "Vercel",
    short: "VRCL",
    category: "Deployment · CI",
    description: "Cloud platform for frontend and serverless deployments — powers Alpha Pulse with Cron jobs and instant global delivery.",
    color: "#34E0E0",
    url: "https://vercel.com",
  },
  {
    name: "GitHub",
    short: "GH",
    category: "Version Control",
    description: "Git-based platform for version control, pull requests, code reviews, and issue tracking across all projects.",
    color: "#F5F5F5",
    url: "https://github.com/Rayannnzn",
  },
  {
    name: "Docker",
    short: "DCK",
    category: "DevOps · Container",
    description: "Containerization platform for consistent development and deployment environments — used for local development workflows.",
    color: "#4A9EFF",
    url: "https://docker.com",
  },
  {
    name: "Postman",
    short: "PSTM",
    category: "API Testing",
    description: "API development and testing platform — used for designing, documenting, and testing RESTful API endpoints.",
    color: "#FF6B4A",
    url: "https://postman.com",
  },
];

/* ─── Tiny monogram logo ─────────────────────────────────────── */
function PlatformLogo({ short, color }: { short: string; color: string }) {
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "6px",
        background: `${color}18`,
        border: `1px solid ${color}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          color,
        }}
      >
        {short}
      </span>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function Collaborators() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.06 },
    transition: {
      duration: 0.6,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="collaborators"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Platforms collaborated with"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 05 — TOOLS & ECOSYSTEM
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...reveal(0.06)}
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          The full toolkit.
        </motion.h2>

        <motion.p
          {...reveal(0.1)}
          className="mb-16 max-w-xl"
          style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}
        >
          Technologies, frameworks, libraries and tools I use to build and ship production-grade web applications.
        </motion.p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              {...reveal(0.08 + i * 0.03)}
              whileHover={reduced ? {} : { y: -3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "20px",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: p.url !== "#" ? "pointer" : "default",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${p.color}60`;
                el.style.boxShadow = `0 4px 24px ${p.color}12`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--line)";
                el.style.boxShadow = "none";
              }}
              aria-label={`${p.name} — ${p.category}`}
            >
              {/* Coloured top strip */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: p.color,
                  opacity: 0.7,
                }}
                aria-hidden="true"
              />

              {/* Logo + name row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <PlatformLogo short={p.short} color={p.color} />
                <div style={{ minWidth: 0 }}>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "0.95rem",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.name}
                  </p>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: p.color,
                      textTransform: "uppercase",
                    }}
                  >
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                {p.description}
              </p>

              {/* External link indicator */}
              {p.url !== "#" && (
                <span
                  className="mono"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    opacity: 0.4,
                    letterSpacing: "0.08em",
                    marginTop: "auto",
                  }}
                >
                  ↗ {p.url.replace("https://", "").replace(/\/$/, "")}
                </span>
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          {...reveal(0.2)}
          className="mono text-xs mt-12"
          style={{ color: "var(--text-muted)", opacity: 0.4, letterSpacing: "0.1em" }}
        >
          // {PLATFORMS.length} TOOLS · FRONTEND · BACKEND · DATABASE · WEB3 · DEVOPS · TESTING
        </motion.p>

      </div>
    </section>
  );
}
