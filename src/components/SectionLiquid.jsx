import { useState } from "react";
import LiquidEther from "./LiquidEther.jsx";

const liquidColors = ["#0d0b08", "#3b2f1a", "#8f7a45", "#c9a45c", "#e3c982"];

export default function SectionLiquid({ className = "section-liquid" }) {
  const [useFallback] = useState(
    () =>
      typeof window !== "undefined" &&
      (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia?.("(max-width: 768px)").matches),
  );

  if (useFallback) {
    return (
      <div
        className={className}
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <LiquidEther
      className={className}
      colors={liquidColors}
      mouseForce={12}
      cursorSize={90}
      resolution={0.28}
      iterationsPoisson={20}
      isViscous={false}
      isBounce={false}
      autoDemo
      autoSpeed={0.28}
      autoIntensity={1.2}
      autoResumeDelay={2500}
      autoRampDuration={0.5}
      takeoverDuration={0.25}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        touchAction: "auto",
      }}
    />
  );
}
