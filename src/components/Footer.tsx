export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          className="mono text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // MUHAMMAD RAYAN — LAHORE, PAKISTAN
        </p>
        <p
          className="mono text-xs"
          style={{ color: "var(--text-muted)", opacity: 0.6 }}
        >
          © {new Date().getFullYear()} — All systems nominal.
        </p>
      </div>
    </footer>
  );
}
