"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              data-cursor-hover
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors",
                isActive
                  ? "border-[#009DFF]/50 bg-[#009DFF]/20 text-[#7FD3FF]"
                  : "border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {filtered.map((faq, i) => {
          const isOpen = open === faq.question;
          return (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <div className="glass relative rounded-2xl">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : faq.question)}
                  data-cursor-hover
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-bold text-[color:var(--fg)] sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[#009DFF] transition-transform duration-300",
                      isOpen && "rotate-45 bg-[#009DFF]/20"
                    )}
                  >
                    <Plus size={15} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-[color:var(--muted)]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
