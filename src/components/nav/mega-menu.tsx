"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { AI_COURSES } from "@/components/nav/nav-data";

const panelVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 260, damping: 26 },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      role="menu"
      aria-label="AI Courses"
      className="glass-solid absolute left-1/2 top-full z-40 mt-3 w-[min(920px,90vw)] -translate-x-1/2 overflow-hidden rounded-3xl p-3 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.35)]"
    >
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-1 p-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AI_COURSES.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Link
              href={item.href}
              role="menuitem"
              onClick={onNavigate}
              data-cursor-hover
              className="group flex h-full items-start gap-3 rounded-2xl p-3.5 transition-colors duration-200 hover:bg-[color:var(--surface-soft)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border)] bg-gradient-to-br from-[#185FA5]/20 to-[#2563EB]/10 text-[#4DA9FF] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#7FD3FF]">
                <item.icon size={18} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="flex items-center gap-1 text-sm font-medium text-[color:var(--fg)]">
                  {item.title}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </span>
                <span className="text-xs leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-1 border-t border-[color:var(--border)] p-4">
        <Link
          href="/courses"
          onClick={onNavigate}
          data-cursor-hover
          className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#185FA5]/15 to-[#2563EB]/10 px-4 py-3 transition-colors hover:from-[#185FA5]/25 hover:to-[#2563EB]/20"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-[color:var(--fg)]">
            <GraduationCap size={16} className="text-[#7FD3FF]" />
            View all AI Courses &amp; Career Tracks
          </span>
          <ArrowUpRight
            size={15}
            className="text-[#7FD3FF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
