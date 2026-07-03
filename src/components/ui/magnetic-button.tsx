"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  as,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
      ? "bg-gradient-to-b from-[#2C7BC4] to-[#185FA5] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(24,95,165,0.8)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_40px_-6px_rgba(77,169,255,0.9)]"
      : "bg-[color:var(--surface-soft)] text-[color:var(--fg)] border border-[color:var(--border)] hover:bg-[color:var(--surface-hover)] hover:border-[color:var(--border-strong)]";

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
    base,
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.1 }}
      className="inline-block"
    >
      {isAnchor ? (
        <a href={href} onClick={onClick} data-cursor-hover className={classes}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} data-cursor-hover className={classes}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
