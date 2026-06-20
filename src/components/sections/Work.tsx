"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { MermaidDiagram } from "@/components/MermaidDiagram";

const PROJECTS = [
  {
    num: "01",
    title: "RIDM.IO — Fiat-to-Crypto Payment Platform",
    sub: "Open Banking · Multi-PSP Integrations",
    image: "/proj-ridm.svg",
    imageAlt: "RIDM.IO architecture: fiat UI, REST API, PSP and Open Banking flows",
    metrics: [
      { value: "Feb 2024", label: "Launched" },
      { value: "Multi-PSP", label: "Provider integrations" },
      { value: "Live", label: "Open Banking" },
    ],
    summary:
      "Developed and integrated multiple Payment Service Providers for seamless fiat-to-crypto transactions. Implemented Open Banking support for secure bank transfers with improved transaction speed. Designed intuitive fiat payment interfaces and built embedded solutions to handle initial live traffic and validate system flow end-to-end.",
    tags: ["Laravel", "PHP", "Open Banking", "PSP Integration", "Fiat-to-Crypto", "REST APIs", "Redis"],
    diagram: `graph LR
  U[User] --> FE[Fiat Payment UI]
  FE --> API[REST API]
  API --> PSP[PSP Integrations]
  API --> OB[Open Banking]
  PSP --> CRYPTO[Crypto Settlement]
  OB --> BANK[Bank Transfer]
  API:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "RIDM.IO fiat-to-crypto payment platform architecture",
  },
  {
    num: "02",
    title: "CardEye — PCI-Compliant Card Acquiring System",
    sub: "PCI DSS · ASV Scans · Merchant Onboarding",
    image: "/proj-cardeye.svg",
    imageAlt: "CardEye: card flow through payment gateway to PCI layer and acquiring bank",
    metrics: [
      { value: "Feb 2022", label: "Project start" },
      { value: "PCI DSS", label: "Compliance achieved" },
      { value: "Quarterly", label: "ASV scans" },
    ],
    summary:
      "Transitioned from Software Engineer to Team Lead on this card-acquiring product — driving architecture design from inception. Created flowcharts, architecture diagrams, and full technical documentation. Managed client communication, technical support, and merchant onboarding. Led the team through PCI DSS compliance and executed Quarterly ASV Scans in collaboration with Risk Associates.",
    tags: ["Laravel", "PHP", "PCI DSS", "ASV Scans", "MySQL", "Redis", "REST APIs", "Merchant Onboarding"],
    diagram: `graph LR
  M[Merchant] --> GW[Payment Gateway]
  GW --> ACQ[Acquiring Bank]
  GW --> PCI[PCI Compliance Layer]
  PCI --> SCAN[ASV Scanner]
  GW --> DB[(Card Data Vault)]
  GW:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "CardEye card acquiring system architecture",
  },
  {
    num: "03",
    title: "INCHARGE — Blixtpay Instant Payout Service",
    sub: "Intergiro BAAS · Merchant Payouts",
    image: "/proj-incharge.svg",
    imageAlt: "INCHARGE payout flow: merchant through Payout API, Intergiro BAAS to InchargeCard",
    metrics: [
      { value: "Instant", label: "Payout speed" },
      { value: "BAAS", label: "Intergiro integration" },
      { value: "Multi-merchant", label: "Support" },
    ],
    summary:
      "Implemented an instant payout solution for merchants using InchargeCard. Led requirements analysis, integrated Intergiro Banking-as-a-Service APIs, and provided architectural guidance throughout. Supported the team with domain expertise in fintech payout flows and technical leadership to ensure reliable, compliant disbursements.",
    tags: ["Laravel", "Intergiro BAAS", "InchargeCard", "REST APIs", "Fintech", "Payout Systems"],
    diagram: `graph LR
  MERCH[Merchant] --> API[Payout API]
  API --> INTG[Intergiro BAAS]
  INTG --> CARD[InchargeCard]
  CARD --> BANK[Beneficiary Bank]
  API --> LOG[(Transaction Log)]
  API:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "INCHARGE instant payout service architecture",
  },
  {
    num: "04",
    title: "FlowSoftware — Crypto Processing & Wallet API",
    sub: "Quantoz · CleanPay · Redoc API Docs",
    image: "/proj-flowsoftware.svg",
    imageAlt: "FlowSoftware: Wallet API hub connecting Quantoz, CleanPay, blockchain and Redoc",
    metrics: [
      { value: "Quantoz", label: "Crypto provider" },
      { value: "CleanPay", label: "Fiat gateway" },
      { value: "Redoc", label: "API docs" },
    ],
    summary:
      "Designed and developed crypto processing endpoints using the Quantoz Crypto Solution Provider. Integrated fiat payments via the CleanPay (Cosmo) payment gateway and created comprehensive API documentation in Redoc for WalletAPI services. Assisted in resolving critical system issues and ensured seamless connectivity between crypto and fiat rails.",
    tags: ["Quantoz", "CleanPay", "Laravel", "PHP", "Redoc", "YAML", "REST APIs", "Crypto Processing"],
    diagram: `graph LR
  USER[User] --> WALL[Wallet API]
  WALL --> QTZ[Quantoz Crypto]
  WALL --> CP[CleanPay Fiat]
  QTZ --> CHAIN[Blockchain Nodes]
  CP --> BANK[Banking Rails]
  WALL:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "FlowSoftware crypto and fiat processing architecture",
  },
  {
    num: "05",
    title: "FarmTech — IoT Pest Risk Prediction System",
    sub: "React Native · IoT Sensors · Farmbot",
    image: "/proj-farmtech.svg",
    imageAlt: "FarmTech: IoT sensors through pest risk algorithm to mobile app and Farmbot automation",
    metrics: [
      { value: "Aug–Nov", label: "2021 delivery" },
      { value: "IoT", label: "Sensor-driven" },
      { value: "Real-time", label: "Risk insights" },
    ],
    summary:
      "Led backend development for an IoT-powered pest risk prediction system, coordinating closely with the React Native mobile app team. Implemented the pest risk algorithm using temperature sensor data from IoT-enabled hardware. Built an admin panel for farmer onboarding and real-time insights, and integrated Farmbot for automated pest management to optimise farming operations.",
    tags: ["Laravel", "PHP", "React Native", "IoT", "Farmbot", "MySQL", "REST APIs", "Admin Panel"],
    diagram: `graph LR
  IOT[IoT Sensors] --> ING[Data Ingestion API]
  ING --> ALGO[Pest Risk Algorithm]
  ALGO --> APP[Mobile App]
  ALGO --> ADMIN[Admin Panel]
  ADMIN --> FB[Farmbot Automation]
  ALGO:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "FarmTech IoT pest risk prediction system architecture",
  },
  {
    num: "06",
    title: "Quickbit — Legacy Affiliate & Payment Gateway",
    sub: "REST APIs · Remote Team Collaboration",
    image: "/proj-quickbit.svg",
    imageAlt: "Quickbit: legacy system enhanced with REST APIs connecting affiliate portal, payment gateway and acquiring",
    metrics: [
      { value: "Jan 2021", label: "Project start" },
      { value: "Legacy", label: "System stabilised" },
      { value: "Multi-TZ", label: "Remote teams" },
    ],
    summary:
      "Maintained and enhanced the legacy affiliate, account management, and payment gateway system for Quickbit (now Valuno). Led architecture analysis to identify optimisation opportunities and implemented targeted enhancements for performance and scalability. Worked across multiple time zones with remote teams, facilitated knowledge sharing, and integrated new features with minimal disruption to live operations.",
    tags: ["Laravel", "PHP", "REST APIs", "PostgreSQL", "Redis", "System Architecture", "Legacy Systems"],
    diagram: `graph LR
  AFF[Affiliate Portal] --> API[REST API]
  API --> ACC[Account Service]
  API --> PAY[Payment Gateway]
  PAY --> PSP[Acquiring PSPs]
  API --> DB[(Legacy DB)]
  API:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "Quickbit affiliate and payment gateway architecture",
  },
  {
    num: "07",
    title: "WhistleIt — Team Collaboration Platform",
    sub: "REST APIs · Programmers Force · Oct–Dec 2020",
    image: "/proj-whistleit.svg",
    imageAlt: "WhistleIt collaboration platform showing multi-workspace messaging architecture with retrieval module",
    metrics: [
      { value: "Multi-WS", label: "Workspace support" },
      { value: "Optimised", label: "Msg retrieval" },
      { value: "Oct–Dec", label: "2020" },
    ],
    summary:
      "A robust collaboration platform designed to facilitate communication across teams and organisations of all sizes. My primary focus was the backend message retrieval module — optimising it for high performance and reliability — alongside designing scalable solutions for multiple other core modules to ensure seamless system integration.",
    tags: ["Laravel", "PHP", "REST APIs", "MySQL", "Backend Architecture", "Message Queue", "Programmers Force"],
    diagram: `graph LR
  WS[Workspaces] --> CORE[WhistleIt Platform]
  CORE --> MSG[Msg Retrieval Module]
  CORE --> MOD[Core Modules]
  MSG --> ORG[Organisations]
  MOD --> ORG
  CORE:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;`,
    diagramLabel: "WhistleIt collaboration platform architecture",
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
