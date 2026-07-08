"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FolderOpen, PlayCircle, ArrowRight } from "lucide-react";
import {
  Chip,
  DashboardSection,
  GradientButton,
  Panel,
  ProgressBar,
} from "@/components/dashboard/primitives";
import { COURSES, COURSE_CATEGORIES } from "@/lib/dashboard-data";

export function MyCoursesSection() {
  const [active, setActive] = useState("All");
  const categories = ["All", ...COURSE_CATEGORIES];
  const visible =
    active === "All" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <DashboardSection
      id="courses"
      icon={BookOpen}
      title="My Courses"
      description="Pick up where you left off across your enrolled programs."
      action={
        <GradientButton variant="ghost" size="sm">
          Browse Catalog <ArrowRight size={14} />
        </GradientButton>
      }
    >
      {/* Category filter */}
      <div className="dash-scroll -mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
        {categories.map((cat) => (
          <Chip key={cat} active={active === cat} onClick={() => setActive(cat)} className="shrink-0">
            {cat}
          </Chip>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((course, i) => (
          <motion.div
            key={course.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
          >
            <Panel className="flex h-full flex-col overflow-hidden">
              {/* Thumbnail */}
              <div className={`relative h-28 bg-gradient-to-br ${course.gradient}`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2240%22%20height=%2240%22%3E%3Cpath%20d=%22M0%2039h40M39%200v40%22%20fill=%22none%22%20stroke=%22rgba(255,255,255,0.12)%22/%3E%3C/svg%3E')] opacity-60" />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <course.icon size={20} />
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                  {course.category}
                </span>
                <span className="absolute bottom-3 right-4 font-heading text-2xl font-bold text-white/90">
                  {course.progress}%
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-base font-bold text-[color:var(--fg)]">
                  {course.title}
                </h3>
                <p className="mt-1 text-xs text-[color:var(--muted)]">
                  by {course.instructor}
                </p>

                <div className="mt-4">
                  <ProgressBar value={course.progress} gradient={`bg-gradient-to-r ${course.gradient}`} />
                  <div className="mt-2 flex items-center justify-between text-[11px] text-[color:var(--muted)]">
                    <span>
                      {course.lessonsDone}/{course.lessonsTotal} lessons
                    </span>
                    <span>{course.eta}</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wide text-[color:var(--muted)]">
                    Next lesson
                  </p>
                  <p className="mt-0.5 truncate text-xs font-medium text-[color:var(--fg)]">
                    {course.next}
                  </p>
                </div>

                <div className="mt-auto flex gap-2 pt-4">
                  <GradientButton size="sm" className="flex-1">
                    <PlayCircle size={14} />
                    Continue
                  </GradientButton>
                  <GradientButton variant="ghost" size="sm">
                    <FolderOpen size={14} />
                    Resources
                  </GradientButton>
                </div>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </DashboardSection>
  );
}
