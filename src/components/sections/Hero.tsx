"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const anim = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: reduced ? 0 : i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-14 md:gap-20 items-center">

          {/* ── Text column ── */}
          <div className="flex flex-col">
            <motion.p
              {...anim(0)}
              className="mono mb-5 text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--signal)" }}
            >
              // FULL STACK ENGINEER - REACT · NODE.JS · NEXT.JS
            </motion.p>

            <motion.h1
              {...anim(1)}
              className="font-bold"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Muhammad
              <br />
              Rayan
            </motion.h1>

            <motion.p
              {...anim(2)}
              className="mt-6 max-w-lg text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              I design and build full-stack web applications and blockchain systems that operate at scale from pixel precise React and Next.js frontends to robust Node.js backends, production-grade APIs, and PostgreSQL databases engineered for real traffic..
              <br />
              Focused on clean architecture, Web3 integrations, and end-to-end product ownership, I help teams launch and grow through fast, secure, and maintainable technology including full-stack DeFi platforms, SaaS products, and smart contract-powered applications..
            </motion.p>

            <motion.div
              {...anim(3)}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#work" className="cta-primary mono text-xs tracking-[0.2em] uppercase font-bold inline-flex items-center px-6 py-3">
                View My Work
              </a>
              <a href="#contact" className="cta-secondary mono text-xs tracking-[0.2em] uppercase inline-flex items-center px-6 py-3">
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* ── Profile photo ── */}
          <motion.div {...anim(4)} className="flex justify-center md:justify-end">
            <div
              className="relative"
              style={{ width: "min(300px, 100%)", aspectRatio: "1 / 1", minHeight: "240px" }}
            >
              {/* Corner brackets — targeting reticle */}
              <span aria-hidden="true" style={{ position: "absolute", top: -1, left: -1, width: 22, height: 22, borderTop: "2px solid var(--signal)", borderLeft: "2px solid var(--signal)", zIndex: 1 }} />
              <span aria-hidden="true" style={{ position: "absolute", top: -1, right: -1, width: 22, height: 22, borderTop: "2px solid var(--signal)", borderRight: "2px solid var(--signal)", zIndex: 1 }} />
              <span aria-hidden="true" style={{ position: "absolute", bottom: -1, left: -1, width: 22, height: 22, borderBottom: "2px solid var(--signal)", borderLeft: "2px solid var(--signal)", zIndex: 1 }} />
              <span aria-hidden="true" style={{ position: "absolute", bottom: -1, right: -1, width: 22, height: 22, borderBottom: "2px solid var(--signal)", borderRight: "2px solid var(--signal)", zIndex: 1 }} />

              <Image
                src="/profile6.png"
                alt="Muhammad Rayan — Full Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 300px"
                className="object-contain "
                style={{ borderRadius: "4px"
                  
                 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Signal glow — sits behind the heading */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(182, 255, 60, 0.05) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
