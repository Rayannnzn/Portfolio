"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about",          label: "About" },
  { href: "#stack",          label: "Stack" },
  { href: "#work",           label: "Work" },
  { href: "#experience",     label: "Experience" },
  { href: "#collaborators",  label: "Platforms" },
  { href: "#leadership",     label: "Leadership" },
  { href: "#contact",        label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -45% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#hero" className="skip-link">Skip to content</a>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(8, 11, 17, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo mark */}
          <a
            href="#"
            className="mono text-sm font-bold tracking-[0.25em] uppercase"
            style={{ color: "var(--signal)" }}
            aria-label="Ahmad Akbar — back to top"
          >
            AA<span style={{ color: "var(--signal-dim)", opacity: 0.7 }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-5" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = active === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="nav-link mono text-xs tracking-[0.12em] uppercase"
                    style={{
                      color: isActive ? "var(--text)" : "var(--text-muted)",
                      transition: "color 0.2s ease",
                    }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-5"
                style={{
                  background: "var(--text-muted)",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform:
                    i === 0 && menuOpen
                      ? "translateY(6px) rotate(45deg)"
                      : i === 2 && menuOpen
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            display: menuOpen ? "block" : "none",
            borderTop: "1px solid var(--line)",
            background: "var(--surface)",
          }}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col px-6 py-6 gap-5" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="mono text-sm tracking-[0.2em] uppercase"
                  style={{
                    color: active === href.slice(1) ? "var(--text)" : "var(--text-muted)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
