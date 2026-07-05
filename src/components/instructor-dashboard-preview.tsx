"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Bell,
  Video,
  Star,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "students", label: "Students", icon: Users },
  { key: "grading", label: "Grading", icon: ClipboardCheck },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const STATS = [
  { label: "Active cohorts", value: "3" },
  { label: "Students", value: "128" },
  { label: "To grade", value: "14" },
  { label: "Avg. rating", value: "4.9" },
];

const CLASSES = [
  { time: "6:00 PM", title: "Meta Ads Deep Dive", cohort: "Digital Marketing · C12" },
  { time: "7:30 PM", title: "Office Hours", cohort: "All cohorts" },
];

const SUBMISSIONS = [
  { student: "Rohit Malhotra", task: "Campaign plan", cohort: "Marketing C12" },
  { student: "Aisha Khan", task: "Landing page project", cohort: "Full Stack C08" },
  { student: "Daniel Osei", task: "Store audit", cohort: "TikTok C04" },
  { student: "Priya Nair", task: "Color grade edit", cohort: "Video C06" },
];

const STUDENTS = [
  { name: "Rohit Malhotra", cohort: "Marketing C12", progress: 88, status: "On track" },
  { name: "Aisha Khan", cohort: "Full Stack C08", progress: 74, status: "On track" },
  { name: "Daniel Osei", cohort: "TikTok C04", progress: 52, status: "Needs nudge" },
  { name: "Priya Nair", cohort: "Video C06", progress: 91, status: "Ahead" },
];

const COHORT_PROGRESS = [
  { cohort: "Digital Marketing · C12", value: 71 },
  { cohort: "Full Stack · C08", value: 58 },
  { cohort: "Video Editing · C06", value: 83 },
];

export function InstructorDashboardPreview() {
  const [tab, setTab] = useState<TabKey>("overview");

  return (
    <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-24px_rgba(0,0,0,0.8)]">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-sm font-medium text-[#7FD3FF]">
            AR
          </div>
          <div>
            <p className="text-sm font-medium text-[color:var(--fg)]">Good evening, Ayesha</p>
            <p className="text-xs text-[color:var(--muted)]">2 classes and 14 reviews today</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1.5 text-xs font-medium text-[#7FD3FF]">
            <Star size={13} />4.9
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
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
            {/* Today's classes */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 to-transparent p-5">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#7FD3FF]">
                  <Video size={13} />
                  Today&apos;s classes
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {CLASSES.map((c) => (
                    <div key={c.title} className="flex items-center gap-4">
                      <span className="rounded-lg border border-white/10 bg-[#009DFF]/10 px-2.5 py-1 text-xs font-medium text-[#7FD3FF]">
                        {c.time}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[color:var(--fg)]">{c.title}</p>
                        <p className="text-xs text-[color:var(--muted)]">{c.cohort}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cohort progress */}
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-5">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                  <TrendingUp size={13} className="text-[#009DFF]" />
                  Cohort progress
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {COHORT_PROGRESS.map((c) => (
                    <div key={c.cohort}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[color:var(--fg)]">{c.cohort}</span>
                        <span className="text-[color:var(--muted)]">{c.value}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[color:var(--surface)]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]"
                          style={{ width: `${c.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submissions queue */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-5">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                <ClipboardCheck size={13} className="text-[#009DFF]" />
                Submissions to review
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                {SUBMISSIONS.map((s) => (
                  <div
                    key={s.student + s.task}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-[color:var(--fg)]">{s.student}</p>
                      <p className="text-xs text-[color:var(--muted)]">
                        {s.task} · {s.cohort}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1 text-xs font-medium text-[#7FD3FF]">
                      Review
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "students" && (
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border)]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] gap-4 border-b border-[color:var(--border)] bg-[color:var(--surface-soft)] px-5 py-3 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
              <span>Student</span>
              <span>Cohort</span>
              <span>Progress</span>
              <span>Status</span>
            </div>
            {STUDENTS.map((s) => (
              <div
                key={s.name}
                className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] items-center gap-4 border-b border-[color:var(--border)] px-5 py-4 text-sm last:border-b-0"
              >
                <span className="font-medium text-[color:var(--fg)]">{s.name}</span>
                <span className="text-[color:var(--muted)]">{s.cohort}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-16 overflow-hidden rounded-full bg-[color:var(--surface-soft)]">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]"
                      style={{ width: `${s.progress}%` }}
                    />
                  </span>
                  <span className="text-xs text-[color:var(--muted)]">{s.progress}%</span>
                </span>
                <span className="text-xs text-[#7FD3FF]">{s.status}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "grading" && (
          <div className="flex flex-col gap-3">
            {SUBMISSIONS.map((s) => (
              <div
                key={s.student + s.task}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#009DFF]/10 text-[#7FD3FF]">
                  <ClipboardCheck size={18} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[color:var(--fg)]">{s.task}</p>
                  <p className="text-xs text-[color:var(--muted)]">
                    {s.student} · {s.cohort}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1.5 text-xs font-medium text-[#7FD3FF]">
                  <MessageSquare size={12} />
                  Give feedback
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
