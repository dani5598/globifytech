"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarClock,
  Flame,
  Bell,
  PlayCircle,
  CheckCircle2,
  Clock,
  Trophy,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "courses", label: "My Courses", icon: BookOpen },
  { key: "schedule", label: "Schedule", icon: CalendarClock },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const STATS = [
  { label: "Courses in progress", value: "3" },
  { label: "Overall progress", value: "68%" },
  { label: "Hours this week", value: "9.5" },
  { label: "Certificates earned", value: "1" },
];

const COURSES = [
  { title: "Digital Marketing with AI", progress: 82, next: "Module 9 · Email Automation" },
  { title: "Full Stack Web Development", progress: 61, next: "Module 6 · REST APIs" },
  { title: "Graphic Designing (Beginner to Pro)", progress: 40, next: "Module 4 · Brand Identity" },
];

const SCHEDULE = [
  { day: "Mon", time: "6:00 PM", title: "Live: Meta Ads Deep Dive", tutor: "Ayesha Raza" },
  { day: "Wed", time: "7:00 PM", title: "Lab: Build a REST API", tutor: "Bilal Ahmed" },
  { day: "Fri", time: "5:00 PM", title: "Critique: Portfolio Review", tutor: "Hina Sheikh" },
];

const ASSIGNMENTS = [
  { title: "Campaign plan submission", due: "Due in 2 days", done: false },
  { title: "Landing page project", due: "Due in 5 days", done: false },
  { title: "Logo design draft", due: "Submitted", done: true },
];

const ACHIEVEMENTS = [
  "7-day learning streak",
  "First certificate earned",
  "Top 10% in cohort",
];

export function StudentDashboardPreview() {
  const [tab, setTab] = useState<TabKey>("overview");

  return (
    <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-24px_rgba(0,0,0,0.8)]">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-sm font-medium text-[#7FD3FF]">
            SI
          </div>
          <div>
            <p className="text-sm font-medium text-[color:var(--fg)]">Welcome back, Sana</p>
            <p className="text-xs text-[color:var(--muted)]">Keep your streak going 🔥</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1.5 text-xs font-medium text-[#7FD3FF]">
            <Flame size={13} />7 days
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)]">
            <Bell size={15} />
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-px border-b border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-[color:var(--surface)] px-5 py-4">
            <p className="font-heading text-2xl font-medium text-[color:var(--fg)]">{stat.value}</p>
            <p className="mt-0.5 text-xs text-[color:var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[color:var(--border)] px-4">
        {TABS.map((t) => {
          const isActive = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-3.5 text-sm font-medium transition-colors",
                isActive ? "text-[color:var(--fg)]" : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              )}
            >
              <t.icon size={15} />
              {t.label}
              {isActive && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="p-6">
        {tab === "overview" && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-5">
              {/* Continue learning */}
              <div className="rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 to-transparent p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[#7FD3FF]">
                  Continue learning
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-base font-medium text-[color:var(--fg)]">
                      Digital Marketing with AI
                    </p>
                    <p className="mt-0.5 text-sm text-[color:var(--muted)]">
                      Module 9 · Email Automation
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#009DFF]/20 text-[#7FD3FF]">
                    <PlayCircle size={20} />
                  </span>
                </div>
              </div>

              {/* Course progress */}
              <div className="flex flex-col gap-4">
                {COURSES.map((c) => (
                  <div key={c.title}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[color:var(--fg)]">{c.title}</span>
                      <span className="text-[color:var(--muted)]">{c.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[color:var(--surface-soft)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-5">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                <FileText size={13} className="text-[#009DFF]" />
                Assignments
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {ASSIGNMENTS.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className={cn("mt-0.5 shrink-0", a.done ? "text-[#009DFF]" : "text-[color:var(--muted)]/40")}
                    />
                    <div>
                      <p className={cn("text-sm", a.done ? "text-[color:var(--muted)] line-through" : "text-[color:var(--fg)]")}>
                        {a.title}
                      </p>
                      <p className="text-xs text-[color:var(--muted)]">{a.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "courses" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#009DFF]/10 text-[#7FD3FF]">
                  <BookOpen size={18} />
                </span>
                <p className="font-heading text-sm font-medium text-[color:var(--fg)]">{c.title}</p>
                <p className="text-xs text-[color:var(--muted)]">Next: {c.next}</p>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-[color:var(--surface)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
                <span className="text-xs text-[color:var(--muted)]">{c.progress}% complete</span>
              </div>
            ))}
          </div>
        )}

        {tab === "schedule" && (
          <div className="flex flex-col gap-3">
            {SCHEDULE.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-[#009DFF]/10">
                  <span className="text-[11px] uppercase text-[color:var(--muted)]">{s.day}</span>
                  <span className="text-xs font-medium text-[#7FD3FF]">{s.time}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[color:var(--fg)]">{s.title}</p>
                  <p className="text-xs text-[color:var(--muted)]">with {s.tutor}</p>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1.5 text-xs font-medium text-[#7FD3FF] sm:flex">
                  <Clock size={12} />
                  Live
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Achievements footer */}
      <div className="flex flex-wrap items-center gap-2 border-t border-[color:var(--border)] px-6 py-4">
        <span className="flex items-center gap-1.5 text-xs font-medium text-[color:var(--muted)]">
          <Trophy size={13} className="text-[#009DFF]" />
          Achievements:
        </span>
        {ACHIEVEMENTS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--muted)]"
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
