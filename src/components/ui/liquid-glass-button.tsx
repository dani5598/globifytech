"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  type?: "button" | "submit";
  magnetic?: boolean;
}

export function LiquidGlassButton({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  as,
  type = "button",
  magnetic = true,
}: LiquidGlassButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.4 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const isAnchor = as === "a" || (!as && !!href);

  const base =
    variant === "primary"
      ? "text-white bg-gradient-to-b from-[#2C7BC4]/55 via-[#185FA5]/40 to-[#0E3D6E]/50 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.06),0_8px_30px_-8px_rgba(24,95,165,0.8)] hover:border-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.08),0_10px_40px_-6px_rgba(77,169,255,0.9)]"
      : "text-[color:var(--fg)] bg-[color:var(--surface-soft)] border border-[color:var(--glass-border)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(255,255,255,0.04)] hover:bg-[color:var(--surface-hover)] hover:border-[color:var(--border-strong)]";

  const sizing =
    size === "sm"
      ? "rounded-xl px-5 py-2.5 text-sm"
      : "rounded-full px-7 py-3.5 text-sm";

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-medium tracking-wide backdrop-blur-xl transition-all duration-300",
    sizing,
    base,
    className
  );

  const content = (
    <>
      {/* liquid sheen that sweeps across on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {/* top specular highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.1 }}
      className="inline-block shrink-0"
    >
      {isAnchor ? (
        <a href={href} onClick={onClick} data-cursor-hover className={classes}>
          {content}
        </a>
      ) : (
        <button type={type} onClick={onClick} data-cursor-hover className={classes}>
          {content}
        </button>
      )}
    </motion.div>
  );
}

export { LiquidGlassButton as Component };
