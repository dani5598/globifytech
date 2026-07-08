"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileQuestion, Timer, Trophy, Crown, ArrowRight } from "lucide-react";
import {
  Avatar,
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import { RadialGauge } from "@/components/dashboard/charts";
import {
  LEADERBOARD,
  QUIZ_AVERAGE,
  QUIZ_RESULTS,
  UPCOMING_QUIZ,
} from "@/lib/dashboard-data";

function useCountdown(seconds: number) {
  const target = useRef<number>(Date.now() + seconds * 1000);
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const tick = () =>
      setRemaining(Math.max(0, Math.round((target.current - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  return { d, h, m, s };
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#009DFF]/25 bg-[#009DFF]/10 font-heading text-lg font-bold tabular-nums text-[#7FD3FF]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-wide text-[color:var(--muted)]">
        {label}
      </span>
    </div>
  );
}

export function QuizzesSection() {
  const { d, h, m, s } = useCountdown(UPCOMING_QUIZ.startsInSeconds);

  return (
    <DashboardSection
      id="quizzes"
      icon={FileQuestion}
      title="Quizzes & Exams"
      description="Upcoming assessments, your results, and the cohort leaderboard."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        {/* Upcoming quiz + countdown */}
        <Panel animatedBorder hover={false} className="overflow-hidden p-6">
          <div className="dash-backdrop pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF0AE0]/15 px-3 py-1 text-xs font-medium text-[#FF6FEF]">
              <Timer size={12} /> Upcoming Exam
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold text-[color:var(--fg)]">
              {UPCOMING_QUIZ.title}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              {UPCOMING_QUIZ.course} · {UPCOMING_QUIZ.questions} questions ·{" "}
              {UPCOMING_QUIZ.duration}
            </p>

            <div className="mt-6 flex gap-3">
              <TimeBox value={d} label="Days" />
              <TimeBox value={h} label="Hrs" />
              <TimeBox value={m} label="Min" />
              <TimeBox value={s} label="Sec" />
            </div>

            <div className="mt-6">
              <GradientButton variant="magenta">
                Attempt Quiz <ArrowRight size={15} />
              </GradientButton>
            </div>
          </div>
        </Panel>

        {/* Average score */}
        <Panel hover={false} className="flex flex-col items-center justify-center p-6">
          <p className="mb-2 text-sm font-medium text-[color:var(--fg)]">Average Score</p>
          <RadialGauge value={QUIZ_AVERAGE} label="across quizzes" accent="255,10,224" />
        </Panel>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Previous results */}
        <Panel hover={false} className="p-5">
          <p className="mb-4 text-sm font-medium text-[color:var(--fg)]">Previous Results</p>
          <ul className="flex flex-col gap-3">
            {QUIZ_RESULTS.map((r) => (
              <li key={r.title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#009DFF]/10 text-[#7FD3FF]">
                  <FileQuestion size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-[color:var(--fg)]">{r.title}</p>
                  <p className="text-xs text-[color:var(--muted)]">{r.date}</p>
                </div>
                <span
                  className="font-heading text-lg font-bold"
                  style={{ color: r.score >= 90 ? "#22c55e" : "#7FD3FF" }}
                >
                  {r.score}
                  <span className="text-xs text-[color:var(--muted)]">/{r.total}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>

        {/* Leaderboard */}
        <Panel hover={false} className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <Trophy size={16} className="text-[#FFB020]" />
            <p className="text-sm font-medium text-[color:var(--fg)]">Cohort Leaderboard</p>
          </div>
          <ul className="flex flex-col gap-2">
            {LEADERBOARD.map((row, i) => (
              <motion.li
                key={row.name}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 ${
                  row.you ? "border border-[#009DFF]/30 bg-[#009DFF]/10" : ""
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    row.rank === 1
                      ? "bg-[#FFB020]/20 text-[#FFB020]"
                      : "bg-[color:var(--surface-soft)] text-[color:var(--muted)]"
                  }`}
                >
                  {row.rank === 1 ? <Crown size={13} /> : row.rank}
                </span>
                <Avatar initials={row.name.split(" ").map((n) => n[0]).join("")} size={30} accent={row.you ? "0,157,255" : "124,58,237"} />
                <span className="flex-1 truncate text-sm text-[color:var(--fg)]">
                  {row.name} {row.you && <span className="text-xs text-[#7FD3FF]">(You)</span>}
                </span>
                <span className="text-sm font-medium tabular-nums text-[color:var(--muted)]">
                  {row.points.toLocaleString()}
                </span>
              </motion.li>
            ))}
          </ul>
        </Panel>
      </div>
    </DashboardSection>
  );
}
