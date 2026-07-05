"use client";

import { motion } from "framer-motion";
import { CalendarClock, Video, Bell, Radio } from "lucide-react";
import {
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import { SCHEDULE } from "@/lib/dashboard-data";

export function TodaysScheduleSection() {
  return (
    <DashboardSection
      id="schedule"
      icon={CalendarClock}
      title="Today's Schedule"
      description="Your live classes and labs for the day."
      action={
        <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1.5 text-xs text-[color:var(--muted)]">
          Saturday, Jul 5
        </span>
      }
    >
      <Panel hover={false} className="p-5 sm:p-6">
        <div className="relative">
          {/* timeline spine */}
          <span className="absolute left-[70px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#009DFF]/40 via-[color:var(--border)] to-transparent sm:block" />
          <ul className="flex flex-col gap-3">
            {SCHEDULE.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <span className="hidden w-14 shrink-0 text-right text-xs font-medium text-[color:var(--muted)] sm:block">
                  {item.time}
                </span>
                <span
                  className="relative z-10 hidden h-3 w-3 shrink-0 rounded-full sm:block"
                  style={{
                    background: `rgb(${item.accent})`,
                    boxShadow: `0 0 0 4px rgba(${item.accent},0.15), 0 0 12px rgba(${item.accent},0.7)`,
                  }}
                >
                  {item.live && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `rgb(${item.accent})`,
                        animation: "dash-pulse-ring 1.8s ease-out infinite",
                      }}
                    />
                  )}
                </span>

                <div className="flex flex-1 flex-wrap items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `rgba(${item.accent},0.14)`,
                      color: `rgb(${item.accent})`,
                    }}
                  >
                    <Video size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium text-[color:var(--fg)]">
                        {item.title}
                      </p>
                      {item.live && (
                        <span className="flex items-center gap-1 rounded-full bg-[#FF0AE0]/15 px-2 py-0.5 text-[10px] font-semibold text-[#FF6FEF]">
                          <Radio size={9} /> LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[color:var(--muted)]">
                      <span className="sm:hidden">{item.time} · </span>
                      {item.type} · {item.tutor}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <GradientButton
                      size="sm"
                      variant={item.live ? "magenta" : "blue"}
                    >
                      <Video size={13} /> Join Now
                    </GradientButton>
                    <GradientButton variant="ghost" size="sm" className="!px-2.5">
                      <Bell size={14} />
                    </GradientButton>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Panel>
    </DashboardSection>
  );
}
