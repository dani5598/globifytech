"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Signal, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { programs } from "@/data/content";

export function FeaturedPrograms() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const pausedRef = useRef(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  }

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 340) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el || pausedRef.current) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 3500);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="programs" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            tag="Career Tracks"
            title="Featured programs built for real careers"
            description="Seven industry-aligned tracks, each engineered with practitioners and refreshed every cohort to match what employers and clients are hiring for."
          />

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              data-cursor-hover
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous programs"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-white/[0.1] disabled:opacity-30 disabled:hover:bg-white/[0.05]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              data-cursor-hover
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next programs"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-white/[0.1] disabled:opacity-30 disabled:hover:bg-white/[0.05]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            onScroll={updateEdges}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            onTouchEnd={() => (pausedRef.current = false)}
            className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programs.map((program) => (
              <div
                key={program.slug}
                data-card
                className="w-[85vw] shrink-0 snap-start sm:w-[380px]"
              >
                <GlassCard className="flex h-full flex-col">
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#009DFF]/25 to-transparent font-heading text-sm font-semibold text-[#7FD3FF]">
                        {program.icon}
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF]">
                        {program.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-medium tracking-tight text-white">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A0AEC0]">
                      {program.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5 text-xs text-[#A0AEC0]">
                      <span className="flex items-center gap-1.5">
                        <Signal size={13} className="text-[#009DFF]" />
                        {program.difficulty}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#009DFF]" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <UserRound size={13} className="text-[#009DFF]" />
                        {program.instructor}
                      </span>
                    </div>

                    <Link
                      href={`/courses/${program.slug}`}
                      data-cursor-hover
                      className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
                    >
                      View Course
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <LiquidGlassButton href="/courses" variant="ghost">
            Browse All Courses
          </LiquidGlassButton>
        </Reveal>
      </div>
    </section>
  );
}
