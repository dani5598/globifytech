"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

export function SearchButton() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onEscape);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    }
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = query.trim();
    setOpen(false);
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor-hover
        aria-label="Search"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition-colors duration-300 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-soft)]"
      >
        <Search size={17} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Search courses"
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-[15vh] backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="glass flex w-full max-w-xl items-center gap-2 rounded-2xl p-2 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.4)]"
            >
              <Search size={18} className="ml-3 shrink-0 text-[color:var(--muted)]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a course, e.g. Web Development"
                aria-label="Search courses"
                className="w-full bg-transparent py-2.5 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-cursor-hover
                aria-label="Close search"
                className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--fg)]"
              >
                <X size={16} />
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
