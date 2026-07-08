"use client";

import { motion } from "framer-motion";
import { Flame, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_GROUPS, STUDENT, type NavItem } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export function Sidebar({
  activeSection,
  onNav,
  onClose,
  variant = "desktop",
}: {
  activeSection: string;
  onNav: (item: NavItem) => void;
  onClose?: () => void;
  variant?: "desktop" | "mobile";
}) {
  return (
    <div className="flex h-full flex-col bg-[color:var(--surface)]/80 backdrop-blur-2xl">
      {/* Logo */}
      <div className="flex items-center justify-between gap-2 px-5 py-5">
        <Logo />
        {variant === "mobile" && (
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--fg)]"
          >
            <X size={17} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="dash-scroll flex-1 overflow-y-auto px-3 pb-4">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="mb-4">
            <p className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]/70">
              {group.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const isActive = !!item.section && item.section === activeSection;
                const isLogout = item.action === "logout";
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => onNav(item)}
                      data-cursor-hover=""
                      className={cn(
                        "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                        isActive
                          ? "text-[color:var(--fg)]"
                          : isLogout
                            ? "text-[#ff6b6b]/80 hover:text-[#ff6b6b] hover:bg-[#ff6b6b]/10"
                            : "text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-[color:var(--surface-hover)]"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId={`sidebar-active-${variant}`}
                          className="absolute inset-0 rounded-xl border border-[#009DFF]/30 bg-gradient-to-r from-[#009DFF]/20 to-[#7FD3FF]/5"
                          style={{ boxShadow: "0 0 24px -6px rgba(0,157,255,0.55)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {isActive && (
                        <span className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#7FD3FF] to-[#009DFF]" />
                      )}
                      <item.icon
                        size={18}
                        className={cn(
                          "relative z-10 shrink-0 transition-transform duration-200 group-hover:scale-110",
                          isActive && "text-[#7FD3FF] drop-shadow-[0_0_6px_rgba(0,157,255,0.8)]"
                        )}
                      />
                      <span className="relative z-10 flex-1 truncate text-left">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={cn(
                            "relative z-10 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                            isActive
                              ? "bg-[#009DFF] text-white"
                              : "bg-[#FF0AE0]/20 text-[#FF6FEF]"
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Streak card */}
      <div className="px-3 pb-4">
        <div className="dash-animated-border overflow-hidden rounded-2xl p-4">
          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00]/15 text-[#FF9D4D]">
              <Flame size={20} className="drop-shadow-[0_0_8px_rgba(255,120,0,0.8)]" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-bold text-[color:var(--fg)]">
                {STUDENT.streak}-day streak 🔥
              </p>
              <p className="truncate text-xs text-[color:var(--muted)]">
                Keep it going, {STUDENT.firstName.split(" ")[0]}!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
