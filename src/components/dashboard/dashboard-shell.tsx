"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { DashboardFooter } from "@/components/dashboard/sections/dashboard-footer";
import type { NavItem } from "@/lib/dashboard-data";

type Popover = "notifications" | "messages" | null;

export function DashboardShell({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popover, setPopover] = useState<Popover>(null);

  /* Scroll-spy: highlight the sidebar item for the section near mid-viewport. */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) setActiveSection(id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((item: NavItem) => {
    setMobileOpen(false);
    if (item.action === "notifications") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setPopover("notifications");
      return;
    }
    if (item.action === "logout") {
      window.location.href = "/";
      return;
    }
    if (item.section) {
      setActiveSection(item.section);
      const el = document.getElementById(item.section);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="relative min-h-screen dash-backdrop">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="grid-overlay pointer-events-none fixed inset-0 -z-10 opacity-60"
      />

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[272px] border-r border-[color:var(--border)] lg:block">
        <Sidebar activeSection={activeSection} onNav={handleNav} variant="desktop" />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] border-r border-[color:var(--border)] lg:hidden"
            >
              <Sidebar
                activeSection={activeSection}
                onNav={handleNav}
                onClose={() => setMobileOpen(false)}
                variant="mobile"
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main column */}
      <div className="lg:pl-[272px]">
        <Topbar
          onMenu={() => setMobileOpen(true)}
          popover={popover}
          setPopover={setPopover}
        />
        <main className="mx-auto max-w-[1400px] space-y-14 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
          {children}
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
