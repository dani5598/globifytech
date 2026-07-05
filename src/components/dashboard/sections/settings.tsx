"use client";

import { useState } from "react";
import { Settings as SettingsIcon, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { DashboardSection, Panel } from "@/components/dashboard/primitives";
import { useTheme } from "@/components/theme-provider";
import { SETTINGS_GROUPS, type SettingRow } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

function Toggle({ initial }: { initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      data-cursor-hover=""
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300",
        on ? "bg-gradient-to-r from-[#009DFF] to-[#7FD3FF]" : "bg-[color:var(--surface-hover)]"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300",
          on ? "translate-x-[22px]" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-0.5">
      {(["Dark", "Light"] as const).map((opt) => {
        const active = theme === opt.toLowerCase();
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setTheme(opt.toLowerCase() as "dark" | "light")}
            data-cursor-hover=""
            className={cn(
              "rounded-md px-3 py-1 text-xs font-medium transition-colors",
              active ? "bg-[#009DFF] text-white" : "text-[color:var(--muted)]"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Select({ options }: { options: string[] }) {
  const [value, setValue] = useState(options[0]);
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1.5 text-xs text-[color:var(--fg)] outline-none focus:border-[#009DFF]/40"
    >
      {options.map((o) => (
        <option key={o} value={o} className="bg-[color:var(--surface)]">
          {o}
        </option>
      ))}
    </select>
  );
}

function Row({ row }: { row: SettingRow }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="min-w-0">
        <p className="text-sm font-medium text-[color:var(--fg)]">{row.label}</p>
        <p className="text-xs text-[color:var(--muted)]">{row.description}</p>
      </div>
      <div className="shrink-0">
        {row.kind === "toggle" && <Toggle initial={row.value ?? false} />}
        {row.kind === "select" && row.label === "Theme" && <ThemeSelect />}
        {row.kind === "select" && row.label !== "Theme" && (
          <Select options={row.options ?? []} />
        )}
        {row.kind === "action" && (
          <button
            type="button"
            data-cursor-hover=""
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[#7FD3FF] transition-colors hover:bg-[color:var(--surface-hover)]"
          >
            {row.actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export function SettingsSection() {
  return (
    <DashboardSection
      id="settings"
      icon={SettingsIcon}
      title="Settings"
      description="Preferences, security, privacy and connected accounts."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {SETTINGS_GROUPS.map((group) => (
          <Panel key={group.title} hover={false} className="p-5">
            <div className="mb-2 flex items-center gap-2">
              {group.title === "Preferences" ? (
                <SlidersHorizontal size={16} className="text-[#7FD3FF]" />
              ) : (
                <ShieldCheck size={16} className="text-[#7FD3FF]" />
              )}
              <p className="text-sm font-medium text-[color:var(--fg)]">{group.title}</p>
            </div>
            <div className="divide-y divide-[color:var(--border)]">
              {group.rows.map((row) => (
                <Row key={row.label} row={row} />
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </DashboardSection>
  );
}
