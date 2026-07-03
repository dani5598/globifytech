"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-hover]"
      );
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "56px" : "32px";
        ringRef.current.style.height = interactive ? "56px" : "32px";
        ringRef.current.style.borderColor = interactive
          ? "rgba(125, 211, 255, 0.6)"
          : "rgba(77, 169, 255, 0.35)";
      }
    };

    let raf = 0;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-[#7FD3FF]"
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -ml-4 -mt-4 h-8 w-8 rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{ borderColor: "rgba(77, 169, 255, 0.35)" }}
      />
    </div>
  );
}
