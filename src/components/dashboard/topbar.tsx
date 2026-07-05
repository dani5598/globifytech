"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bell, Menu, MessageSquare, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { MESSAGES, NOTIFICATIONS, STUDENT } from "@/lib/dashboard-data";
import { Avatar } from "@/components/dashboard/primitives";
import { cn } from "@/lib/utils";

type Popover = "notifications" | "messages" | null;

function greeting(hour: number) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function Topbar({
  onMenu,
  popover,
  setPopover,
}: {
  onMenu: () => void;
  popover: Popover;
  setPopover: (p: Popover) => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const [hello, setHello] = useState("Good Evening");

  useEffect(() => {
    setHello(greeting(new Date().getHours()));
  }, []);

  const unreadMsgs = MESSAGES.filter((m) => m.unread).length;

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border)] bg-[color:var(--surface)]/70 backdrop-blur-2xl">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Hamburger (mobile) */}
        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border)] text-[color:var(--fg)] lg:hidden"
        >
          <Menu size={18} />
        </button>

        {/* Greeting */}
        <div className="min-w-0 flex-1 lg:flex-none">
          <p className="truncate font-heading text-base font-medium text-[color:var(--fg)] sm:text-lg">
            {hello}, <span className="text-gradient-brand">{STUDENT.greetingName}</span> 👋
          </p>
          <p className="hidden text-xs text-[color:var(--muted)] sm:block">
            Keep Learning. Keep Growing.
          </p>
        </div>

        {/* Search (desktop) */}
        <div className="relative ml-auto hidden max-w-sm flex-1 md:block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[color:var(--muted)]"
          />
          <input
            type="text"
            placeholder="Search courses, lessons, resources..."
            className="w-full rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] py-2.5 pl-10 pr-4 text-sm text-[color:var(--fg)] outline-none transition-colors placeholder:text-[color:var(--muted)] focus:border-[#009DFF]/50 focus:bg-[color:var(--surface-hover)]"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:ml-0 ml-auto">
          <IconButton
            label="Search"
            className="md:hidden"
            onClick={() => setPopover(null)}
          >
            <Search size={18} />
          </IconButton>

          {/* Notifications */}
          <div className="relative">
            <IconButton
              label="Notifications"
              badge={NOTIFICATIONS.length}
              active={popover === "notifications"}
              onClick={() =>
                setPopover(popover === "notifications" ? null : "notifications")
              }
            >
              <Bell size={18} />
            </IconButton>
            <AnimatePresence>
              {popover === "notifications" && (
                <PopoverPanel title="Notifications" onClose={() => setPopover(null)}>
                  {NOTIFICATIONS.map((n) => (
                    <div
                      key={n.title}
                      className="flex gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[color:var(--surface-hover)]"
                    >
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: `rgb(${n.accent})`, boxShadow: `0 0 8px rgb(${n.accent})` }}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[color:var(--fg)]">{n.title}</p>
                        <p className="truncate text-xs text-[color:var(--muted)]">{n.meta}</p>
                      </div>
                      <span className="ml-auto shrink-0 text-[10px] text-[color:var(--muted)]">
                        {n.time}
                      </span>
                    </div>
                  ))}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </div>

          {/* Messages */}
          <div className="relative">
            <IconButton
              label="Messages"
              badge={unreadMsgs}
              active={popover === "messages"}
              onClick={() => setPopover(popover === "messages" ? null : "messages")}
            >
              <MessageSquare size={18} />
            </IconButton>
            <AnimatePresence>
              {popover === "messages" && (
                <PopoverPanel title="Messages" onClose={() => setPopover(null)}>
                  {MESSAGES.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[color:var(--surface-hover)]"
                    >
                      <Avatar initials={m.initials} accent={m.accent} size={38} />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[color:var(--fg)]">{m.name}</p>
                        <p className="truncate text-xs text-[color:var(--muted)]">{m.text}</p>
                      </div>
                      <div className="ml-auto flex shrink-0 flex-col items-end gap-1">
                        <span className="text-[10px] text-[color:var(--muted)]">{m.time}</span>
                        {m.unread && <span className="h-2 w-2 rounded-full bg-[#009DFF]" />}
                      </div>
                    </div>
                  ))}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <IconButton label="Toggle theme" onClick={toggleTheme}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </IconButton>

          {/* Profile */}
          <button
            data-cursor-hover=""
            className="ml-1 flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] py-1 pl-1 pr-1 transition-colors hover:bg-[color:var(--surface-hover)] sm:pr-3"
          >
            <Avatar initials={STUDENT.initials} accent="255,10,224" size={34} online={STUDENT.online} ring />
            <span className="hidden text-left sm:block">
              <span className="block text-xs font-medium leading-tight text-[color:var(--fg)]">
                {STUDENT.firstName}
              </span>
              <span className="block text-[10px] leading-tight text-[color:var(--muted)]">
                {STUDENT.id} · {STUDENT.levelShort}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  label,
  onClick,
  badge,
  active,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  badge?: number;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      data-cursor-hover=""
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-xl border text-[color:var(--muted)] transition-all duration-200 hover:text-[color:var(--fg)]",
        active
          ? "border-[#009DFF]/40 bg-[#009DFF]/15 text-[#7FD3FF]"
          : "border-[color:var(--border)] bg-[color:var(--surface-soft)] hover:border-[#009DFF]/30 hover:bg-[color:var(--surface-hover)]",
        className
      )}
    >
      {children}
      {!!badge && badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF0AE0] px-1 text-[9px] font-bold text-white shadow-[0_0_8px_rgba(255,10,224,0.8)]">
          {badge}
        </span>
      )}
    </button>
  );
}

function PopoverPanel({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      {/* click-away */}
      <button
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default"
      />
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.97 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-12 z-50 w-[300px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-between border-b border-[color:var(--border)] px-4 py-3">
          <p className="text-sm font-medium text-[color:var(--fg)]">{title}</p>
          <span className="text-xs text-[#7FD3FF]">Mark all read</span>
        </div>
        <div className="dash-scroll max-h-[340px] overflow-y-auto p-1.5">{children}</div>
      </motion.div>
    </>
  );
}
