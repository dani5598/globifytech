"use client";

import { useEffect, useRef } from "react";

export function ScrollRail() {
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (fillRef.current) {
          fillRef.current.style.height = `${progress * 100}%`;
        }
        if (dotRef.current) {
          dotRef.current.style.top = `${progress * 100}%`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-6 top-0 z-40 hidden h-full lg:block">
      <div className="relative mt-32 h-[calc(100%-16rem)] w-px bg-white/[0.08]">
        <div
          ref={fillRef}
          className="absolute top-0 left-0 w-px bg-gradient-to-b from-[#4DA9FF] to-[#185FA5] transition-[height] duration-150 ease-out"
        />
        <div
          ref={dotRef}
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7FD3FF] shadow-[0_0_12px_3px_rgba(127,211,255,0.7)] transition-[top] duration-150 ease-out"
        />
      </div>
    </div>
  );
}
