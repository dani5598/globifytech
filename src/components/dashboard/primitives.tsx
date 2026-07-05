"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Panel — the base glass card (20px radius, soft shadow, hover lift)         */
/* -------------------------------------------------------------------------- */

export function Panel({
  children,
  className,
  hover = true,
  animatedBorder = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animatedBorder?: boolean;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={style}
      className={cn(
        "relative rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface)]/60 backdrop-blur-xl",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_24px_60px_-32px_rgba(0,0,0,0.9)]",
        animatedBorder && "dash-animated-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section wrapper — anchors + heading, used by every dashboard section       */
/* -------------------------------------------------------------------------- */

export function DashboardSection({
  id,
  icon: Icon,
  title,
  description,
  action,
  children,
  className,
}: {
  id: string;
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} data-section={id} className={cn("scroll-mt-28", className)}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          {Icon && (
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#009DFF]/10 text-[#7FD3FF]">
              <Icon size={18} />
            </span>
          )}
          <div>
            <h2 className="font-heading text-xl font-medium tracking-tight text-[color:var(--fg)] sm:text-2xl">
              {title}
            </h2>
            {description && (
              <p className="mt-0.5 text-sm text-[color:var(--muted)]">{description}</p>
            )}
          </div>
        </motion.div>
        {action}
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  IconBadge — accent-tinted rounded icon tile                                */
/* -------------------------------------------------------------------------- */

export function IconBadge({
  icon: Icon,
  accent = "0,157,255",
  size = 44,
  className,
}: {
  icon: LucideIcon;
  accent?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-2xl border",
        className
      )}
      style={{
        width: size,
        height: size,
        borderColor: `rgba(${accent},0.28)`,
        background: `linear-gradient(140deg, rgba(${accent},0.22), rgba(${accent},0.04))`,
        color: `rgb(${accent})`,
        boxShadow: `0 8px 24px -12px rgba(${accent},0.55)`,
      }}
    >
      <Icon size={size * 0.42} />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Chip / pill                                                                */
/* -------------------------------------------------------------------------- */

export function Chip({
  children,
  accent,
  active = false,
  className,
  onClick,
}: {
  children: ReactNode;
  accent?: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const Comp = onClick ? "button" : "span";
  return (
    <Comp
      onClick={onClick}
      data-cursor-hover={onClick ? "" : undefined}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-transparent bg-[#009DFF]/20 text-[#7FD3FF]"
          : "border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] hover:text-[color:var(--fg)]",
        className
      )}
      style={
        accent
          ? {
              borderColor: `rgba(${accent},0.3)`,
              background: `rgba(${accent},0.12)`,
              color: `rgb(${accent})`,
            }
          : undefined
      }
    >
      {children}
    </Comp>
  );
}

/* -------------------------------------------------------------------------- */
/*  ProgressBar — animated fill with a moving shimmer                          */
/* -------------------------------------------------------------------------- */

export function ProgressBar({
  value,
  gradient = "from-[#009DFF] to-[#7FD3FF]",
  className,
  height = 8,
}: {
  value: number;
  gradient?: string;
  className?: string;
  height?: number;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-[color:var(--surface-soft)] ring-1 ring-inset ring-white/5",
        className
      )}
      style={{ height }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative h-full rounded-full bg-gradient-to-r",
          gradient
        )}
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
            animation: "dash-shimmer 2.4s ease-in-out infinite",
          }}
        />
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  AnimatedNumber — count-up when scrolled into view                          */
/* -------------------------------------------------------------------------- */

export function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
  className,
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);

  useMotionValueEvent(mv, "change", (latest) => {
    if (ref.current) ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, mv, duration]);

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                    */
/* -------------------------------------------------------------------------- */

export function GradientButton({
  children,
  onClick,
  className,
  variant = "blue",
  size = "md",
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "blue" | "magenta" | "ghost";
  size?: "md" | "sm";
  type?: "button" | "submit";
}) {
  const base =
    variant === "ghost"
      ? "border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--fg)] hover:bg-[color:var(--surface-hover)]"
      : variant === "magenta"
        ? "text-white bg-gradient-to-b from-[#FF4DE9] via-[#FF0AE0] to-[#C0089F] border border-white/25 shadow-[0_8px_28px_-10px_rgba(255,10,224,0.7)]"
        : "text-white bg-gradient-to-b from-[#33C0FF] via-[#009DFF] to-[#0072BC] border border-white/25 shadow-[0_8px_28px_-10px_rgba(0,157,255,0.7)]";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      data-cursor-hover=""
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-wide transition-colors",
        size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm",
        base,
        className
      )}
    >
      {variant !== "ghost" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/*  AIOrb — floating "3D" AI object built from CSS (no three.js dependency)    */
/* -------------------------------------------------------------------------- */

export function AIOrb({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative aspect-square w-full max-w-[300px]", className)}
      aria-hidden
    >
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#009DFF]/25 blur-3xl" />
      <div className="absolute inset-6 rounded-full bg-[#FF0AE0]/15 blur-3xl" />

      {/* orbit rings */}
      <div
        className="absolute inset-0 rounded-full border border-[#7FD3FF]/25"
        style={{ animation: "spin 18s linear infinite", transform: "rotateX(72deg)" }}
      />
      <div
        className="absolute inset-[10%] rounded-full border border-[#FF0AE0]/25"
        style={{ animation: "spin 26s linear infinite reverse", transform: "rotateX(58deg) rotateZ(28deg)" }}
      />
      <div
        className="absolute inset-[3%] rounded-full border border-white/10"
        style={{ animation: "spin 34s linear infinite", transform: "rotateX(40deg) rotateZ(-20deg)" }}
      />

      {/* floating core */}
      <div
        className="absolute inset-[26%] flex items-center justify-center"
        style={{ animation: "dash-float 6s ease-in-out infinite" }}
      >
        <div
          className="relative h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #ffffff 0%, #7FD3FF 22%, #009DFF 55%, #452054 100%)",
            boxShadow:
              "inset -8px -10px 26px rgba(0,0,0,0.55), inset 6px 8px 20px rgba(255,255,255,0.4), 0 0 48px rgba(0,157,255,0.65)",
          }}
        >
          <span className="absolute left-[22%] top-[18%] h-[26%] w-[26%] rounded-full bg-white/70 blur-md" />
        </div>
      </div>

      {/* orbiting nodes */}
      {[
        { r: 46, d: 7, c: "#7FD3FF", s: "10%" },
        { r: 40, d: 11, c: "#FF0AE0", s: "50%" },
        { r: 52, d: 15, c: "#00E5FF", s: "80%" },
      ].map((n, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
          style={
            {
              marginLeft: -5,
              marginTop: -5,
              background: n.c,
              boxShadow: `0 0 12px 2px ${n.c}`,
              ["--orbit-r" as string]: `${n.r}%`,
              animation: `dash-orbit ${n.d}s linear infinite`,
              animationDelay: `-${i * 2}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Avatar — gradient initials tile                                            */
/* -------------------------------------------------------------------------- */

export function Avatar({
  initials,
  accent = "0,157,255",
  size = 40,
  ring = false,
  online = false,
  className,
}: {
  initials: string;
  accent?: string;
  size?: number;
  ring?: boolean;
  online?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <span
        className={cn(
          "flex items-center justify-center rounded-full font-heading font-medium text-white",
          ring && "ring-2 ring-white/20"
        )}
        style={{
          width: size,
          height: size,
          fontSize: size * 0.38,
          background: `linear-gradient(140deg, rgb(${accent}), rgba(${accent},0.4))`,
          boxShadow: `0 6px 20px -8px rgba(${accent},0.7)`,
        }}
      >
        {initials}
      </span>
      {online && (
        <span
          className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[color:var(--surface)] bg-[#22c55e]"
          style={{ boxShadow: "0 0 8px 1px rgba(34,197,94,0.8)" }}
        />
      )}
    </span>
  );
}
