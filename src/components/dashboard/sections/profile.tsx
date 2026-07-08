"use client";

import { Mail, Phone, IdCard, Flame, Medal, PencilLine, Star } from "lucide-react";
import {
  Avatar,
  Chip,
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import {
  ACHIEVEMENTS,
  BADGES,
  PROFILE_SKILLS,
  PROFILE_SOCIALS,
  STUDENT,
} from "@/lib/dashboard-data";

export function ProfileSection() {
  return (
    <DashboardSection
      id="profile"
      icon={IdCard}
      title="Profile"
      description="Your details, skills, achievements and earned badges."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[340px_1fr]">
        {/* Profile card */}
        <Panel hover={false} className="overflow-hidden">
          <div className="dash-backdrop relative h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009DFF]/30 to-[#FF0AE0]/20" />
          </div>
          <div className="px-6 pb-6">
            <div className="-mt-10 flex items-end justify-between">
              <Avatar initials={STUDENT.initials} accent="255,10,224" size={80} ring online={STUDENT.online} />
              <GradientButton variant="ghost" size="sm">
                <PencilLine size={13} /> Edit
              </GradientButton>
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-[color:var(--fg)]">
              {STUDENT.name}
            </h3>
            <p className="text-sm text-[#7FD3FF]">{STUDENT.level}</p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <p className="flex items-center gap-2.5 text-[color:var(--muted)]">
                <Mail size={15} className="text-[#7FD3FF]" /> {STUDENT.email}
              </p>
              <p className="flex items-center gap-2.5 text-[color:var(--muted)]">
                <Phone size={15} className="text-[#7FD3FF]" /> {STUDENT.phone}
              </p>
              <p className="flex items-center gap-2.5 text-[color:var(--muted)]">
                <IdCard size={15} className="text-[#7FD3FF]" /> {STUDENT.id}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#FF6A00]/25 bg-[#FF6A00]/8 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6A00]/15 text-[#FF9D4D]">
                <Flame size={20} />
              </span>
              <div>
                <p className="font-heading text-lg font-bold text-[color:var(--fg)]">
                  {STUDENT.streak} days
                </p>
                <p className="text-xs text-[color:var(--muted)]">Current learning streak</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                Connect
              </p>
              <div className="flex flex-wrap gap-2">
                {PROFILE_SOCIALS.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>
        </Panel>

        {/* Skills + achievements + badges */}
        <div className="flex flex-col gap-5">
          <Panel hover={false} className="p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[color:var(--fg)]">
              <Star size={15} className="text-[#7FD3FF]" /> Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {PROFILE_SKILLS.map((skill) => (
                <Chip key={skill} accent="0,157,255">
                  {skill}
                </Chip>
              ))}
            </div>
          </Panel>

          <Panel hover={false} className="p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[color:var(--fg)]">
              <Medal size={15} className="text-[#FFB020]" /> Achievements
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ACHIEVEMENTS.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-2.5 text-sm text-[color:var(--fg)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#009DFF]" />
                  {a}
                </div>
              ))}
            </div>
          </Panel>

          <Panel hover={false} className="p-5">
            <p className="mb-3 text-sm font-medium text-[color:var(--fg)]">Badges</p>
            <div className="flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-1.5">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `rgba(${badge.accent},0.35)`,
                      background: `linear-gradient(140deg, rgba(${badge.accent},0.22), rgba(${badge.accent},0.04))`,
                      color: `rgb(${badge.accent})`,
                      boxShadow: `0 8px 22px -12px rgba(${badge.accent},0.7)`,
                    }}
                  >
                    <Medal size={22} />
                  </span>
                  <span className="max-w-[64px] text-center text-[10px] leading-tight text-[color:var(--muted)]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </DashboardSection>
  );
}
