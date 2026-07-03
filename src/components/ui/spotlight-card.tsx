"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  /** When true, ignores `size` and relies on `width`/`height` or `className` for sizing. */
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 210, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const syncPointer = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", x.toFixed(2));
      card.style.setProperty("--xp", (x / rect.width).toFixed(2));
      card.style.setProperty("--y", y.toFixed(2));
      card.style.setProperty("--yp", (y / rect.height).toFixed(2));
    };

    card.addEventListener("pointermove", syncPointer);
    return () => card.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const style: CSSProperties = {
    ["--base" as string]: base,
    ["--spread" as string]: spread,
    ["--radius" as string]: "20",
    ["--border" as string]: "1",
    ["--backdrop" as string]: "var(--surface-backdrop)",
    ["--backup-border" as string]: "var(--glass-border)",
    ["--size" as string]: "260",
    ["--outer" as string]: "1",
    ["--border-size" as string]: "calc(var(--border, 2) * 1px)",
    ["--spotlight-size" as string]: "calc(var(--size, 150) * 1px)",
    ["--hue" as string]: "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize:
      "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "none",
    width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : undefined,
  };

  return (
    <div
      ref={cardRef}
      data-glow
      style={style}
      className={cn(
        !customSize && sizeMap[size],
        !customSize && "aspect-[3/4]",
        "relative grid grid-rows-[1fr_auto] gap-4 rounded-[1.25rem] p-6 shadow-[0_1rem_3rem_-1rem_rgba(0,0,0,0.85)] backdrop-blur-xl",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div data-glow />
      {children}
    </div>
  );
}
