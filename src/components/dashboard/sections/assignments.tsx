"use client";

import { motion } from "framer-motion";
import { ClipboardList, Upload, Calendar, MessageSquareText } from "lucide-react";
import { DashboardSection, Panel } from "@/components/dashboard/primitives";
import { ASSIGNMENTS, ASSIGNMENT_COLUMNS } from "@/lib/dashboard-data";

export function AssignmentsSection() {
  return (
    <DashboardSection
      id="assignments"
      icon={ClipboardList}
      title="Assignments"
      description="Track submissions across every stage — from pending to graded."
    >
      <div className="dash-scroll -mx-1 flex gap-4 overflow-x-auto px-1 pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {ASSIGNMENT_COLUMNS.map((col) => {
          const cards = ASSIGNMENTS.filter((a) => a.status === col.status);
          return (
            <div key={col.status} className="w-[280px] shrink-0 lg:w-auto">
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: `rgb(${col.accent})`, boxShadow: `0 0 8px rgb(${col.accent})` }}
                  />
                  <p className="text-sm font-medium text-[color:var(--fg)]">{col.status}</p>
                </div>
                <span className="rounded-full bg-[color:var(--surface-soft)] px-2 py-0.5 text-[11px] text-[color:var(--muted)]">
                  {cards.length}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {cards.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Panel
                      className="p-4"
                      style={{ borderTop: `2px solid rgba(${col.accent},0.5)` }}
                    >
                      <p className="text-sm font-medium text-[color:var(--fg)]">{a.title}</p>
                      <p className="mt-0.5 text-xs text-[color:var(--muted)]">{a.course}</p>

                      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[color:var(--muted)]">
                        <Calendar size={12} />
                        {a.deadline}
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[11px]">
                        <span className="text-[color:var(--muted)]">Marks</span>
                        <span className="font-medium text-[color:var(--fg)]">{a.marks}</span>
                      </div>

                      {a.feedback && (
                        <div className="mt-3 flex gap-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-2.5 py-2">
                          <MessageSquareText size={13} className="mt-0.5 shrink-0 text-[#7FD3FF]" />
                          <p className="text-[11px] leading-snug text-[color:var(--muted)]">
                            {a.feedback}
                          </p>
                        </div>
                      )}

                      {(a.status === "Pending" || a.status === "Submitted") && (
                        <button
                          data-cursor-hover=""
                          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#009DFF]/40 bg-[#009DFF]/5 py-2 text-xs font-medium text-[#7FD3FF] transition-colors hover:bg-[#009DFF]/12"
                        >
                          <Upload size={13} />
                          {a.status === "Pending" ? "Upload Work" : "Re-upload"}
                        </button>
                      )}
                    </Panel>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardSection>
  );
}
