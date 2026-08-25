import { useState } from "react";
import WarpText from "./WarpText.jsx";

export default function WarpHeading({
  as: Tag = "h2",
  text,
  className = "",
  color = "#e3c982",
  fontSize = "clamp(32px, 3.6vw, 48px)",
  fontWeight = 800,
  height = 72,
}) {
  const [usePlain] = useState(
    () =>
      typeof window !== "undefined" &&
      (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia?.("(max-width: 768px)").matches),
  );

  if (usePlain) {
    return (
      <Tag className={`plain-warp-heading ${className}`.trim()} style={{ color }}>
        {text}
      </Tag>
    );
  }

  return (
    <div className={`warp-heading ${className}`.trim()}>
      <Tag className="sr-only">{text}</Tag>
      <WarpText
        className="warp-heading-visual"
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily="inherit"
        letterSpacing={0}
        lineHeight={1.05}
        warpStrength={0.06}
        warpScale={1.8}
        speed={0.5}
        pointerInfluence={0.42}
        pointerStrength={0.4}
        refraction={0.02}
        ripple
        style={{ height, minHeight: 0 }}
      />
    </div>
  );
}
