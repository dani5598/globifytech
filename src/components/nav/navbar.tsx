"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { MegaMenu } from "@/components/nav/mega-menu";
import { ServicesMenu } from "@/components/nav/services-menu";
import { SearchButton } from "@/components/nav/search-overlay";
import { LanguageSwitcher } from "@/components/nav/language-switcher";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { NAV_ITEMS } from "@/components/nav/nav-data";
import { cn } from "@/lib/utils";

const MENU_CLOSE_DELAY = 150;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"courses" | "services" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdowns on outside click / Escape.
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function openMenu(key: "courses" | "services") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), MENU_CLOSE_DELAY);
  }

  function isActiveLink(href: string) {
    if (href.startsWith("/#")) return pathname === "/" && href === "/#home";
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-5">
      <motion.nav
        ref={navRef}
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: scrolled ? "rgba(25,5,32,0.82)" : "rgba(25,5,32,0.55)" }}
        className={cn(
          "glass relative flex w-[93%] max-w-[1500px] items-center justify-between rounded-[20px] px-4 transition-[height,padding,box-shadow,background-color,backdrop-filter] duration-400 ease-out sm:px-6",
          scrolled
            ? "h-[64px] shadow-[0_20px_60px_-12px_rgba(15,23,42,0.25)] [backdrop-filter:blur(28px)]"
            : "h-[78px]"
        )}
      >
        {/* Left — logo */}
        <Link href="/#home" data-cursor-hover className="shrink-0 transition-transform duration-300 hover:scale-105">
          <Logo />
        </Link>

        {/* Center — desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item, i) => {
            if (item.type === "link") {
              const active = isActiveLink(item.href);
              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    data-cursor-hover
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative block px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-[color:var(--fg)]" : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gradient-to-r from-[#009DFF] to-[#7FD3FF] transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </motion.li>
              );
            }

            const open = activeMenu === item.key;
            return (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="relative"
                onMouseEnter={() => openMenu(item.key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  data-cursor-hover
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onClick={() => (open ? setActiveMenu(null) : openMenu(item.key))}
                  onFocus={() => openMenu(item.key)}
                  className={cn(
                    "group relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors",
                    open ? "text-[color:var(--fg)]" : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform duration-300", open && "rotate-180")}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gradient-to-r from-[#009DFF] to-[#7FD3FF] transition-transform duration-300",
                      open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {open &&
                    (item.key === "courses" ? (
                      <MegaMenu key="courses-menu" onNavigate={() => setActiveMenu(null)} />
                    ) : (
                      <ServicesMenu key="services-menu" onNavigate={() => setActiveMenu(null)} />
                    ))}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>

        {/* Right — controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden items-center gap-2 lg:flex"
        >
          <SearchButton />
          <LanguageSwitcher />
          <LiquidGlassButton href="/enroll" className="!py-2.5 !pl-5 !pr-4 text-sm animate-pulse-slow">
            Enroll Now
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </LiquidGlassButton>
        </motion.div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] text-[color:var(--fg)] lg:hidden"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 90 : 0, opacity: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Menu size={18} />
          </motion.span>
          <motion.span
            animate={{ rotate: mobileOpen ? 0 : -90, opacity: mobileOpen ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <X size={18} />
          </motion.span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu items={NAV_ITEMS} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
