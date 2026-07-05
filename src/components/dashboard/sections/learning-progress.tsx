"use client";

import { BarChart3, Activity, Radar, CalendarCheck, PieChart } from "lucide-react";
import { DashboardSection, Panel } from "@/components/dashboard/primitives";
import {
  AreaChart,
  BarChart,
  DonutChart,
  RadarChart,
  RadialGauge,
} from "@/components/dashboard/charts";
import {
  ATTENDANCE,
  COMPLETION_DONUT,
  MONTHLY_PROGRESS,
  SKILL_RADAR,
  WEEKLY_HOURS,
} from "@/lib/dashboard-data";

function ChartCard({
  icon: Icon,
  title,
  meta,
  children,
  className = "",
}: {
  icon: typeof BarChart3;
  title: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Panel className={`flex flex-col p-5 ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#009DFF]/10 text-[#7FD3FF]">
            <Icon size={16} />
          </span>
          <p className="text-sm font-medium text-[color:var(--fg)]">{title}</p>
        </div>
        {meta && (
          <span className="rounded-full bg-[color:var(--surface-soft)] px-2.5 py-1 text-[11px] text-[color:var(--muted)]">
            {meta}
          </span>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </Panel>
  );
}

export function LearningProgressSection() {
  return (
    <DashboardSection
      id="progress"
      icon={BarChart3}
      title="Learning Progress"
      description="Your interactive analytics — hours, momentum, skills and attendance."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ChartCard icon={BarChart3} title="Weekly Learning Hours" meta="22.8h total" className="lg:col-span-2">
          <div className="w-full">
            <BarChart data={WEEKLY_HOURS} />
          </div>
        </ChartCard>

        <ChartCard icon={CalendarCheck} title="Attendance">
          <RadialGauge value={ATTENDANCE} label="this month" />
        </ChartCard>

        <ChartCard icon={Activity} title="Monthly Progress" meta="+15% MoM">
          <AreaChart data={MONTHLY_PROGRESS} />
        </ChartCard>

        <ChartCard icon={Radar} title="Skill Growth">
          <RadarChart data={SKILL_RADAR} />
        </ChartCard>

        <ChartCard icon={PieChart} title="Course Completion">
          <DonutChart data={COMPLETION_DONUT} />
        </ChartCard>
      </div>
    </DashboardSection>
  );
}
