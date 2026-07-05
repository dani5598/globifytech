"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Heart, MessageCircle, Share2, Send, BadgeCheck } from "lucide-react";
import {
  Avatar,
  DashboardSection,
  Panel,
} from "@/components/dashboard/primitives";
import { COMMUNITY_POSTS, STUDENT } from "@/lib/dashboard-data";

export function CommunitySection() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  return (
    <DashboardSection
      id="community"
      icon={Users}
      title="Community"
      description="Ask questions, share wins and get answers from peers and mentors."
    >
      {/* composer */}
      <Panel hover={false} className="mb-5 p-4">
        <div className="flex items-center gap-3">
          <Avatar initials={STUDENT.initials} accent="255,10,224" size={40} />
          <input
            placeholder="Ask the community a question…"
            className="min-w-0 flex-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2.5 text-sm text-[color:var(--fg)] outline-none placeholder:text-[color:var(--muted)] focus:border-[#009DFF]/40"
          />
          <button
            type="button"
            aria-label="Post"
            data-cursor-hover=""
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#009DFF] to-[#0072BC] text-white transition-transform hover:scale-105"
          >
            <Send size={16} />
          </button>
        </div>
      </Panel>

      <div className="flex flex-col gap-4">
        {COMMUNITY_POSTS.map((post, i) => {
          const isLiked = liked[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Panel className={`p-5 ${post.mentor ? "border-[#FF0AE0]/25" : ""}`}>
                <div className="flex items-start gap-3">
                  <Avatar initials={post.initials} accent={post.accent} size={42} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-[color:var(--fg)]">{post.author}</p>
                      {post.mentor && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#FF0AE0]/15 px-2 py-0.5 text-[10px] font-semibold text-[#FF6FEF]">
                          <BadgeCheck size={11} /> Mentor
                        </span>
                      )}
                      <span className="text-xs text-[color:var(--muted)]">· {post.time}</span>
                    </div>
                    <p className="text-xs text-[color:var(--muted)]">{post.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--fg)]/90">
                      {post.text}
                    </p>

                    <div className="mt-4 flex items-center gap-5 text-xs text-[color:var(--muted)]">
                      <button
                        type="button"
                        onClick={() => setLiked((l) => ({ ...l, [i]: !l[i] }))}
                        data-cursor-hover=""
                        className={`inline-flex items-center gap-1.5 transition-colors ${
                          isLiked ? "text-[#FF6FEF]" : "hover:text-[#FF6FEF]"
                        }`}
                      >
                        <Heart size={15} fill={isLiked ? "currentColor" : "none"} />
                        {post.likes + (isLiked ? 1 : 0)}
                      </button>
                      <button
                        type="button"
                        data-cursor-hover=""
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-[#7FD3FF]"
                      >
                        <MessageCircle size={15} /> {post.comments}
                      </button>
                      <button
                        type="button"
                        data-cursor-hover=""
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-[#7FD3FF]"
                      >
                        <Share2 size={15} /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </Panel>
            </motion.div>
          );
        })}
      </div>
    </DashboardSection>
  );
}
