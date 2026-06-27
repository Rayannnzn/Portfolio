"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { MermaidDiagram } from "@/components/MermaidDiagram";

const PROJECTS = [
  {
    num: "01",
    title: "HireMyRoom — Full-Stack Rental Platform",
    sub: "React · Node.js · Express · MongoDB · Tailwind CSS",
    image: "/proj-ridm.svg",
    imageAlt: "HireMyRoom architecture: React frontend, Express REST API, MongoDB database",
    metrics: [
      { value: "Jun–Sep", label: "2025" },
      { value: "Full-stack", label: "End-to-end" },
      { value: "Live", label: "Deployed" },
    ],
    summary:
      "Built a full-stack rental platform enabling users to list, browse, and book rooms seamlessly. Implemented a secure authentication and authorization system for managing users and property listings. Developed RESTful APIs using Node.js and Express for handling bookings and data operations — deployed end-to-end with user auth, property listings, booking system and REST API fully functional.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "Auth / JWT"],
    diagram: `graph LR
  U[User] --> FE[React Frontend]
  FE --> API[Express REST API]
  API --> AUTH[Auth System]
  API --> DB[(MongoDB)]
  API --> BOOK[Booking Engine]
  API:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "HireMyRoom full-stack rental platform architecture",
  },
  {
    num: "02",
    title: "Alpha Pulse — Production SaaS Dashboard",
    sub: "Next.js · TypeScript · shadcn/ui · Vercel Cron",
    image: "/proj-cardeye.svg",
    imageAlt: "Alpha Pulse: Next.js dashboard with Vercel Cron jobs and shadcn/ui components",
    metrics: [
      { value: "Jan 2026", label: "In progress" },
      { value: "Vercel", label: "Cron automation" },
      { value: "shadcn", label: "Component system" },
    ],
    summary:
      "Production SaaS dashboard built with Next.js and TypeScript featuring automated background jobs via Vercel Cron, a reusable shadcn/ui component library, and server-side data handling. Designed responsive and reusable UI components improving consistency and user experience. Integrated backend logic and APIs within Next.js, handling data flow, state management, and server-side operations.",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "Vercel Cron", "Server Actions"],
    diagram: `graph LR
  U[User] --> DASH[Next.js Dashboard]
  DASH --> SA[Server Actions]
  SA --> CRON[Vercel Cron Jobs]
  SA --> DB[(Database)]
  DASH --> UI[shadcn/ui System]
  SA:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "Alpha Pulse SaaS dashboard architecture",
  },
  {
    num: "03",
    title: "KineTex — Trustless Freelance Payments",
    sub: "Rust · Solana · Anchor · Next.js · TypeScript · Web3.js",
    image: "/proj-farmtech.svg",
    imageAlt: "KineTex: Solana on-chain escrow via Anchor program, Next.js dashboard, instant SOL release on contract completion",
    metrics: [
      { value: "45.20 SOL", label: "Locked in escrow" },
      { value: "12", label: "Completed contracts" },
      { value: "Devnet", label: "Live on Solana" },
    ],
    summary:
      "Decentralized freelance payment protocol on Solana enabling trustless escrow contracts — clients lock SOL on-chain, work is submitted and verified, and funds release instantly upon approval with no intermediaries. Built with Rust and Anchor for the smart contracts, Next.js for the dashboard, and Web3.js for on-chain interaction. 12 contracts completed with 45.20 SOL locked during the devnet phase.",
    tags: ["Rust", "Solana", "Anchor", "Next.js", "TypeScript", "Web3.js"],
    diagram: `graph LR
  C[Client] --> ESCROW[On-chain Escrow]
  ESCROW --> ANCHOR[Anchor Program]
  ANCHOR --> VER[Work Verification]
  VER --> PAY[SOL Release]
  F[Freelancer] --> VER
  ANCHOR:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "KineTex Solana escrow architecture with Anchor program and trustless payment flow",
  },
  {
    num: "04",
    title: "NFT Marketplace — Decentralized Trading Platform",
    sub: "Solidity · Next.js · TypeScript · PostgreSQL · Docker · Wagmi",
    image: "/proj-quickbit.svg",
    imageAlt: "NFT Marketplace: live blockchain indexer syncing to PostgreSQL, Next.js frontend with Wagmi wallet integration",
    metrics: [
      { value: "1 month", label: "Duration" },
      { value: "Full-stack", label: "Frontend + Indexer + DB" },
      { value: "Live", label: "Vercel Deployed" },
    ],
    summary:
      "Built a fully-featured NFT marketplace with real-time blockchain indexers that sync listing, purchase, and cancellation events to PostgreSQL — ensuring live, accurate data across the frontend and database. Added a compliance route to prevent suspicious or illicit access, automatic NFT delisting based on chain events, and an optimized UI for fast browsing and wallet interaction via Wagmi.",
    tags: ["Solidity", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Wagmi", "Vercel"],
    diagram: `graph LR
  BC[Blockchain Events] --> IDX[Live Indexer]
  IDX --> DB[(PostgreSQL)]
  DB --> API[Next.js API]
  API --> UI[NFT Frontend]
  UI --> W[Wagmi / Wallet]
  IDX:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "NFT Marketplace architecture with live blockchain indexer and PostgreSQL database",
  },
  {
    num: "05",
    title: "DeFi Stablecoin — Algorithmic Protocol",
    sub: "Solidity · Next.js · Web3.js · Chainlink · TypeScript",
    image: "/proj-incharge.svg",
    imageAlt: "DeFi Stablecoin: Solidity smart contracts with Chainlink price feeds, collateral management, and liquidation engine",
    metrics: [
      { value: "2 months", label: "Duration" },
      { value: "Full-stack", label: "UI + Smart Contracts" },
      { value: "$500K+", label: "TVL (testnet)" },
    ],
    summary:
      "Built a decentralized stablecoin protocol with algorithmic stability mechanisms, over-collateralization, and automated liquidation. Integrated Chainlink price feeds for accurate on-chain valuations, developed mint/burn mechanics with collateral management, and created a comprehensive admin dashboard. Extensive testing covered edge cases and attack vectors — $500K+ in total value locked during the testnet phase.",
    tags: ["Solidity", "Next.js", "Web3.js", "Chainlink", "TypeScript"],
    diagram: `graph LR
  U[User] --> UI[Next.js dApp]
  UI --> SC[Stablecoin Contract]
  SC --> ORACLE[Chainlink Price Feed]
  SC --> COL[Collateral Manager]
  COL --> LIQ[Liquidation Engine]
  SC:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "DeFi Stablecoin protocol architecture with Chainlink oracle and liquidation engine",
  },
];

export function Work() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: {
      duration: 0.65,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 03 — SELECTED WORK
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
          Systems that shipped.
        </motion.h2>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.num}
              {...reveal(0.1 + i * 0.06)}
              whileHover={reduced ? {} : { y: -3 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--signal-dim)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              aria-label={project.title}
            >
              {/* Signal hairline top */}
              <div style={{ height: "2px", background: "var(--signal)" }} aria-hidden="true" />

              {/* Card header */}
              <div className="px-6 md:px-8 pt-7 pb-5">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                  <span
                    className="mono text-xs tracking-[0.2em]"
                    style={{ color: "var(--signal-dim)" }}
                  >
                    {project.num}
                  </span>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p
                  className="mono text-xs"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
                >
                  {project.sub}
                </p>

                {/* Metrics row */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-5">
                    {project.metrics.map(({ value, label }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <span
                          className="mono font-bold"
                          style={{ fontSize: "1.15rem", color: "var(--signal)", letterSpacing: "-0.02em" }}
                        >
                          {value}
                        </span>
                        <span
                          className="mono text-xs"
                          style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "var(--line)" }} aria-hidden="true" />

              {/* Project illustration — fixed 130px tall panoramic banner */}
              <div
                style={{
                  height: "130px",
                  background: "var(--surface-2)",
                  borderBottom: "1px solid var(--line)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  priority={i < 2}
                />
              </div>

              {/* Diagram + description grid */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0">

                {/* Diagram */}
                <div
                  className="p-6 md:p-8"
                  style={{ borderRight: "1px solid var(--line)", background: "var(--surface-2)" }}
                >
                  <p
                    className="mono text-xs mb-4"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.1em", opacity: 0.6 }}
                  >
                    // ARCHITECTURE
                  </p>
                  <MermaidDiagram
                    chart={project.diagram}
                    label={project.diagramLabel}
                  />
                </div>

                {/* Summary + tags */}
                <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag mono text-xs px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
