"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LanguageSwitcher } from "@/components/nav/language-switcher";
import {
  AI_COURSES,
  SERVICES,
  type NavItem,
} from "@/components/nav/nav-data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

function Accordion({
  label,
  items,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: typeof AI_COURSES;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-[color:var(--border)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-[color:var(--fg)]"
      >
        {label}
        <ChevronDown
          size={18}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pb-4">
              {items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--fg)]"
                  >
                    <item.icon size={16} className="shrink-0 text-[#009DFF]" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileMenu({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<"courses" | "services" | null>(null);

  function toggle(key: "courses" | "services") {
    setExpanded((current) => (current === key ? null : key));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="glass fixed inset-x-3 top-3 z-40 flex max-h-[calc(100svh-1.5rem)] flex-col overflow-y-auto rounded-3xl p-5 lg:hidden"
    >
      <div className="flex items-center justify-between pb-4">
        <Logo />
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="flex flex-col">
        {items.map((item) => {
          if (item.type === "link") {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border-b border-[color:var(--border)] py-4 text-base font-medium text-[color:var(--fg)]"
              >
                {item.label}
              </Link>
            );
          }
          return (
            <Accordion
              key={item.key}
              label={item.label}
              items={item.key === "courses" ? AI_COURSES : SERVICES}
              open={expanded === item.key}
              onToggle={() => toggle(item.key)}
              onNavigate={onClose}
            />
          );
        })}
      </nav>

      <div className="mt-6 flex flex-col gap-4">
        <LiquidGlassButton href="/enroll" onClick={onClose} className="w-full justify-center">
          Enroll Now
        </LiquidGlassButton>

        <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)]">
          <a href="tel:+10000000000" className="flex items-center gap-2.5">
            <Phone size={15} className="shrink-0 text-[#009DFF]" />
            +1 (000) 000-0000
          </a>
          <a href="mailto:hello@globifytech.com" className="flex items-center gap-2.5">
            <Mail size={15} className="shrink-0 text-[#009DFF]" />
            hello@globifytech.com
          </a>
          <span className="flex items-center gap-2.5">
            <MapPin size={15} className="shrink-0 text-[#009DFF]" />
            Remote-first, global faculty
          </span>
        </div>

        <div className="flex items-center gap-3 pt-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition-colors hover:border-[#009DFF]/40 hover:text-[#7FD3FF]"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
