"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    background: "transparent",
    primaryColor: "#0E131C",
    primaryBorderColor: "#1F2937",
    primaryTextColor: "#E8EEF5",
    lineColor: "#34E0E0",
    fontFamily: "var(--font-mono), monospace",
  },
});

interface Props {
  chart: string;
  label?: string;
}

export function MermaidDiagram({ chart, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "d" + Math.random().toString(36).slice(2);
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch(console.error);
  }, [chart]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label ?? "Architecture diagram"}
      style={{ overflowX: "auto", minHeight: "80px" }}
    />
  );
}
