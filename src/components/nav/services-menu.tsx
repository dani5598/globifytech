"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICES_HIGHLIGHT } from "@/components/nav/nav-data";

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

export function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      role="menu"
      aria-label="Services"
      className="glass-solid absolute left-1/2 top-full z-40 mt-3 w-[min(680px,90vw)] -translate-x-1/2 overflow-hidden rounded-3xl p-3 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.35)]"
    >
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-1 p-2 sm:grid-cols-2"
      >
        {SERVICES.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Link
              href={item.href}
              role="menuitem"
              onClick={onNavigate}
              data-cursor-hover
              className="group flex items-start gap-3 rounded-2xl p-3.5 transition-colors duration-200 hover:bg-[color:var(--surface-soft)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border)] bg-gradient-to-br from-[#2563EB]/20 to-[#185FA5]/10 text-[#4DA9FF] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#7FD3FF]">
                <item.icon size={18} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-[color:var(--fg)]">{item.title}</span>
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
          href={SERVICES_HIGHLIGHT.href}
          onClick={onNavigate}
          data-cursor-hover
          className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#185FA5]/15 to-[#2563EB]/10 px-4 py-3 transition-colors hover:from-[#185FA5]/25 hover:to-[#2563EB]/20"
        >
          <span className="flex flex-col">
            <span className="flex items-center gap-2 text-sm font-medium text-[color:var(--fg)]">
              <SERVICES_HIGHLIGHT.icon size={16} className="text-[#7FD3FF]" />
              {SERVICES_HIGHLIGHT.title}
            </span>
            <span className="mt-0.5 text-xs text-[color:var(--muted)]">
              {SERVICES_HIGHLIGHT.description}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#185FA5] px-3.5 py-2 text-xs font-medium text-white transition-transform duration-300 group-hover:translate-x-0.5">
            {SERVICES_HIGHLIGHT.cta}
            <ArrowRight size={13} />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
