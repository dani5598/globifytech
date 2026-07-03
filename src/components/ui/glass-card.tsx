"use client";

import { motion } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}`);
    el.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={glow ? handlePointerMove : undefined}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ ["--x" as string]: "50", ["--y" as string]: "50" }}
      className={cn(
        "group relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 backdrop-blur-xl",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-24px_rgba(0,0,0,0.8)]",
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

      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-24 left-1/2 h-48 w-[110%] -translate-x-1/2 rounded-full bg-[#185FA5]/0 blur-3xl transition-all duration-500 group-hover:bg-[#185FA5]/20" />
        </div>
      )}

      {/* prism spotlight tracking the cursor */}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(280px circle at calc(var(--x) * 1%) calc(var(--y) * 1%), rgba(127,211,255,0.14), rgba(24,95,165,0.07) 40%, transparent 70%)",
          }}
        />
      )}

      {/* prism edge highlight — a thin chromatic ring that follows the cursor */}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            padding: "1px",
            background:
              "radial-gradient(180px circle at calc(var(--x) * 1%) calc(var(--y) * 1%), rgba(255,255,255,0.9), rgba(77,169,255,0.5) 40%, transparent 65%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
