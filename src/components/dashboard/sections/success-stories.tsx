"use client";

import { motion } from "framer-motion";
import { Trophy, PlayCircle, Quote, Building2, TrendingUp } from "lucide-react";
import {
  Avatar,
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import { SUCCESS_STORIES } from "@/lib/dashboard-data";

export function SuccessStoriesSection() {
  return (
    <DashboardSection
      id="success"
      icon={Trophy}
      title="Success Stories"
      description="Alumni who turned their Globify journey into a career."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {SUCCESS_STORIES.map((story, i) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Panel className="flex h-full flex-col p-6">
              <Quote
                size={26}
                className="opacity-30"
                style={{ color: `rgb(${story.accent})` }}
              />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--fg)]/90">
                “{story.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-[color:var(--border)] pt-5">
                <Avatar initials={story.initials} accent={story.accent} size={46} ring />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[color:var(--fg)]">{story.name}</p>
                  <p className="flex items-center gap-1 text-xs text-[color:var(--muted)]">
                    <Building2 size={12} /> {story.role} · {story.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/12 px-3 py-1 text-xs font-medium text-[#22c55e]">
                  <TrendingUp size={13} /> {story.package}
                </span>
                <GradientButton variant="ghost" size="sm">
                  <PlayCircle size={14} /> Watch
                </GradientButton>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </DashboardSection>
  );
}
