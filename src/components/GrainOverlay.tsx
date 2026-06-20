"use client";
import { useEffect, useRef } from "react";

export function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const size = 200;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx || !ref.current) return;

    const imageData = ctx.createImageData(size, size);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.floor(Math.random() * 255);
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    ref.current.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        pointerEvents: "none",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        opacity: 0.035,
        mixBlendMode: "overlay",
      }}
    />
  );
}
