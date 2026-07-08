"use client";

import { motion } from "framer-motion";
import { PlayCircle, CalendarClock, Sparkles, TrendingUp } from "lucide-react";
import {
  AIOrb,
  AnimatedNumber,
  GradientButton,
  IconBadge,
  Panel,
} from "@/components/dashboard/primitives";
import { STATS } from "@/lib/dashboard-data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function OverviewSection() {
  return (
    <section id="overview" data-section="overview" className="scroll-mt-28 space-y-6">
      {/* Welcome hero */}
      <Panel
        animatedBorder
        hover={false}
        className="overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        <div className="dash-backdrop pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#009DFF]/25 bg-[#009DFF]/10 px-3 py-1 text-xs font-medium text-[#7FD3FF]"
            >
              <Sparkles size={13} />
              AI-Powered Learning
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-[color:var(--fg)] sm:text-4xl lg:text-5xl"
            >
              Welcome Back!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-3 max-w-md text-base leading-relaxed text-[color:var(--muted)]"
            >
              Continue your AI-powered learning journey. You&apos;re{" "}
              <span className="font-medium text-[#7FD3FF]">68% through</span> this week&apos;s
              goal — keep the momentum going.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <GradientButton onClick={() => scrollToId("courses")}>
                <PlayCircle size={16} />
                Continue Learning
              </GradientButton>
              <GradientButton variant="ghost" onClick={() => scrollToId("schedule")}>
                <CalendarClock size={16} />
                Join Live Class
              </GradientButton>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AIOrb />
          </div>
        </div>
      </Panel>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Panel className="h-full p-5">
              <div className="flex items-start justify-between">
                <IconBadge icon={stat.icon} accent={stat.accent} />
                <span className="flex items-center gap-1 text-[11px] font-medium text-[#22c55e]">
                  <TrendingUp size={12} />
                </span>
              </div>
              <p className="mt-4 font-heading text-3xl font-bold text-[color:var(--fg)] sm:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{stat.label}</p>
              <p
                className="mt-2 text-[11px] font-medium"
                style={{ color: `rgb(${stat.accent})` }}
              >
                {stat.delta}
              </p>
            </Panel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
