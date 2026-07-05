"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";
import {
  DashboardSection,
  GradientButton,
  Panel,
} from "@/components/dashboard/primitives";
import { OPPORTUNITIES } from "@/lib/dashboard-data";

export function OpportunitiesSection() {
  return (
    <DashboardSection
      id="opportunities"
      icon={Briefcase}
      title="Internship & Job Portal"
      description="Fresh internships and remote roles matched to your skills."
      action={
        <GradientButton variant="ghost" size="sm">
          View All <ArrowRight size={14} />
        </GradientButton>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {OPPORTUNITIES.map((job, i) => (
          <motion.div
            key={job.role + job.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
          >
            <Panel className="flex h-full flex-col p-5">
              <div className="flex items-start gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(140deg, rgb(${job.accent}), rgba(${job.accent},0.5))`,
                    boxShadow: `0 8px 22px -10px rgba(${job.accent},0.8)`,
                  }}
                >
                  {job.logo}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[color:var(--fg)]">{job.role}</p>
                  <p className="text-xs text-[color:var(--muted)]">{job.company}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium"
                  style={{ background: `rgba(${job.accent},0.14)`, color: `rgb(${job.accent})` }}
                >
                  {job.type}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[color:var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <DollarSign size={13} className="text-[#22c55e]" /> {job.salary}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} /> {job.deadline}
                </span>
              </div>

              <div className="mt-auto pt-4">
                <GradientButton size="sm" className="w-full">
                  Apply Now <ArrowRight size={14} />
                </GradientButton>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </DashboardSection>
  );
}
