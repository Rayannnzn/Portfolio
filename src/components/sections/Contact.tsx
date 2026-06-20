"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const LINKS = [
  {
    label: "Email",
    value: "ahmad294b4@gmail.com",
    href: "mailto:ahmad294b4@gmail.com",
    icon: "→",
  },
  {
    label: "Phone",
    value: "+92 317 4007369",
    href: "tel:+923174007369",
    icon: "→",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ahmad-akbar",
    href: "https://www.linkedin.com/in/ahmad-akbar-038570180/",
    icon: "→",
  },
];

export function Contact() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = encodeURIComponent(formData.subject || `Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:ahmad294b4@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: "4px",
    padding: "12px 16px",
    color: "var(--text)",
    fontFamily: "var(--font-mono), monospace",
    fontSize: "0.8rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Contact"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 07 — CONTACT
        </motion.p>

        {/* Two-column layout — heading+links LEFT, form RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT column: heading + subtext + links */}
          <div className="flex flex-col">
            <motion.h2
              {...reveal(0.06)}
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "var(--text-muted)" }}>something.</span>
            </motion.h2>

            <motion.p
              {...reveal(0.12)}
              className="mb-10 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              6+ years architecting payment gateways, PSP integrations and fintech
              infrastructure across Europe and beyond — from PCI-compliant card
              acquiring to fiat-to-crypto rails and open banking flows. Open to
              senior backend, fintech, managing white-label solutions, building
              AI-driven fraud detection systems or processes, and AI-engineering
              roles. Reach out directly; I respond to every message.
            </motion.p>

            {/* Contact links */}
            <div className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  {...reveal(0.18 + i * 0.08)}
                  className="group flex items-center justify-between gap-4 px-4 py-3"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                  whileHover={reduced ? {} : { scale: 1.01 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--signal-dim)";
                    (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                    (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                  }}
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--signal-dim)", minWidth: "60px" }}>
                      {link.label}
                    </span>
                    <span className="mono text-xs" style={{ color: "var(--text)" }}>
                      {link.value}
                    </span>
                  </div>
                  <span className="mono text-sm" style={{ color: "var(--signal)" }} aria-hidden="true">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT column: form */}
          <motion.div {...reveal(0.14)} className="flex flex-col">
            {/* Signal accent hairline */}
            <div style={{ height: "2px", background: "var(--signal)", marginBottom: "1px" }} aria-hidden="true" />

            <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderTop: "none", borderRadius: "0 0 4px 4px", padding: "32px" }}>
              <p className="mono text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "var(--signal-dim)" }}>
                // SEND A MESSAGE
              </p>

              <div className="flex flex-col gap-2">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--signal-dim)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--signal-dim)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--signal-dim)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--signal-dim)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="cta-primary mono text-xs tracking-[0.2em] uppercase font-bold px-6 py-3 w-full"
                  style={{ marginTop: "4px", cursor: "pointer" }}
                >
                  {sent ? "✓ Opening your mail client..." : "Send Message →"}
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Signature */}
        <motion.p
          {...reveal(0.4)}
          className="mono mt-20 text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--text-muted)", opacity: 0.45 }}
        >
          // AHMAD AKBAR — LAHORE, PAKISTAN — AVAILABLE FOR REMOTE
        </motion.p>

      </div>
    </section>
  );
}
