"use client";

import { motion } from "framer-motion";
import { FolderOpen, FileText, Video, FileCode2, Download, Bookmark } from "lucide-react";
import { DashboardSection, Panel } from "@/components/dashboard/primitives";

const RESOURCES = [
  { title: "AI Agents — Cheat Sheet", type: "PDF", course: "AI Automation", size: "2.4 MB", icon: FileText, accent: "0,157,255" },
  { title: "Meta Ads Playbook 2026", type: "PDF", course: "Digital Marketing", size: "5.1 MB", icon: FileText, accent: "255,10,224" },
  { title: "REST API Starter Repo", type: "Code", course: "Web Development", size: "GitHub", icon: FileCode2, accent: "0,229,255" },
  { title: "Color Grading Masterclass", type: "Video", course: "Video Editing", size: "48 min", icon: Video, accent: "124,58,237" },
  { title: "Brand Identity Templates", type: "Figma", course: "Graphic Design", size: "Figma", icon: FileCode2, accent: "255,176,32" },
  { title: "SEO Audit Checklist", type: "PDF", course: "SEO", size: "1.2 MB", icon: FileText, accent: "34,197,94" },
];

export function CourseResourcesSection() {
  return (
    <DashboardSection
      id="resources"
      icon={FolderOpen}
      title="Course Resources"
      description="Downloadable notes, templates, repos and recordings from your courses."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {RESOURCES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
          >
            <Panel className="flex items-center gap-4 p-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `rgba(${r.accent},0.14)`, color: `rgb(${r.accent})` }}
              >
                <r.icon size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[color:var(--fg)]">{r.title}</p>
                <p className="text-xs text-[color:var(--muted)]">
                  {r.course} · {r.type} · {r.size}
                </p>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label="Bookmark"
                  data-cursor-hover=""
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[color:var(--muted)] transition-colors hover:bg-[color:var(--surface-hover)] hover:text-[#7FD3FF]"
                >
                  <Bookmark size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Download"
                  data-cursor-hover=""
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#009DFF]/12 text-[#7FD3FF] transition-colors hover:bg-[#009DFF]/22"
                >
                  <Download size={15} />
                </button>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </DashboardSection>
  );
}
