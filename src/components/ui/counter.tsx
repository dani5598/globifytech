"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
