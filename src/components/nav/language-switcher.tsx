"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

type Locale = "EN" | "UR";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "EN", label: "English" },
  { code: "UR", label: "اردو" },
];

/**
 * UI-only switcher: swaps the displayed locale badge and persists the
 * preference, but page content is not yet translated into Urdu.
 */
export function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "EN";
    const stored = window.localStorage.getItem("globify-locale");
    return stored === "EN" || stored === "UR" ? stored : "EN";
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  function select(code: Locale) {
    setLocale(code);
    window.localStorage.setItem("globify-locale", code);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-cursor-hover
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex h-10 items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3 text-xs font-medium text-[color:var(--fg)] transition-colors duration-300 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-soft)]"
      >
        <Languages size={15} />
        {locale}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="glass-solid absolute right-0 top-full z-40 mt-2 w-32 overflow-hidden rounded-2xl p-1"
          >
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={locale === item.code}
                onClick={() => select(item.code)}
                data-cursor-hover
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors",
                  locale === item.code
                    ? "bg-[color:var(--surface-soft)] text-[color:var(--fg)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                )}
              >
                {item.label}
                <span className="text-[10px] uppercase tracking-wide opacity-60">{item.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
