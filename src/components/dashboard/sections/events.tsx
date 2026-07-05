"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Rocket, Briefcase, Code2, Presentation } from "lucide-react";
import {
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import { EVENTS, type EventItem } from "@/lib/dashboard-data";

const KIND_ICON = {
  Bootcamp: Rocket,
  Career: Briefcase,
  Hackathon: Code2,
  Seminar: Presentation,
} as const;

function useEventCountdown(seconds: number) {
  const target = useRef(Date.now() + seconds * 1000);
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    const tick = () =>
      setRemaining(Math.max(0, Math.round((target.current - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return {
    d: Math.floor(remaining / 86400),
    h: Math.floor((remaining % 86400) / 3600),
    m: Math.floor((remaining % 3600) / 60),
  };
}

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const { d, h, m } = useEventCountdown(event.startsInSeconds);
  const Icon = KIND_ICON[event.kind];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
    >
      <Panel className="flex h-full flex-col p-5">
        <div className="flex items-start gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ background: `rgba(${event.accent},0.14)`, color: `rgb(${event.accent})` }}
          >
            <Icon size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <span
              className="text-[11px] font-medium uppercase tracking-wide"
              style={{ color: `rgb(${event.accent})` }}
            >
              {event.kind}
            </span>
            <p className="text-sm font-medium leading-snug text-[color:var(--fg)]">
              {event.title}
            </p>
            <p className="mt-0.5 text-xs text-[color:var(--muted)]">{event.date}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {[
            { v: d, l: "d" },
            { v: h, l: "h" },
            { v: m, l: "m" },
          ].map((t) => (
            <span
              key={t.l}
              className="flex items-baseline gap-0.5 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-2.5 py-1.5 text-sm font-semibold tabular-nums text-[color:var(--fg)]"
            >
              {String(t.v).padStart(2, "0")}
              <span className="text-[10px] font-normal text-[color:var(--muted)]">{t.l}</span>
            </span>
          ))}
          <span className="text-[11px] text-[color:var(--muted)]">until start</span>
        </div>

        <div className="mt-auto pt-4">
          <GradientButton size="sm" className="w-full">
            Register
          </GradientButton>
        </div>
      </Panel>
    </motion.div>
  );
}

export function EventsSection() {
  return (
    <DashboardSection
      id="events"
      icon={CalendarDays}
      title="Events & Workshops"
      description="Bootcamps, career sessions, hackathons and seminars — reserve your seat."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    </DashboardSection>
  );
}
