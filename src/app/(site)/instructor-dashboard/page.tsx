import type { Metadata } from "next";
import {
  Video,
  ClipboardCheck,
  Users,
  BarChart3,
  MessageSquare,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { InstructorDashboardPreview } from "@/components/instructor-dashboard-preview";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description:
    "The Globify Tech Institute instructor portal — run live classes, track cohort progress, review submissions, message students and manage your teaching all in one workspace.",
};

const FEATURES = [
  {
    icon: Video,
    title: "Run live classes",
    description:
      "Launch sessions, share materials and record automatically — students get replays instantly.",
  },
  {
    icon: ClipboardCheck,
    title: "Review & grade fast",
    description:
      "A single queue for every submission, with inline feedback and rubric-based scoring.",
  },
  {
    icon: BarChart3,
    title: "See cohort health",
    description:
      "Spot at-risk students early with progress, attendance and engagement analytics.",
  },
  {
    icon: Users,
    title: "Manage your students",
    description:
      "Roster, progress and notes for every learner across all of your active cohorts.",
  },
  {
    icon: MessageSquare,
    title: "Message & mentor",
    description:
      "Answer questions, host office hours and keep students unblocked between sessions.",
  },
  {
    icon: Megaphone,
    title: "Post announcements",
    description:
      "Share updates, resources and deadlines with a whole cohort in a couple of clicks.",
  },
];

const PERKS = [
  "Remote-first — teach from anywhere",
  "Competitive per-cohort compensation",
  "Curriculum and TA support included",
  "Join a faculty of practicing professionals",
];

export default function InstructorDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Instructor Dashboard"
        title="Everything you need to teach, in one workspace"
        description="Our instructor portal keeps classes, grading, analytics and student communication in a single place — so you can spend your time teaching, not tab-switching. Here's a live preview."
      >
        <LiquidGlassButton href="/contact">
          Become an Instructor
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </LiquidGlassButton>
      </PageHeader>

      {/* Live preview */}
      <Reveal delay={0.26}>
        <div className="mt-16">
          <InstructorDashboardPreview />
          <p className="mt-4 text-center text-xs text-[color:var(--muted)]">
            Interactive preview · sample data shown
          </p>
        </div>
      </Reveal>

      {/* Features */}
      <div className="mt-28">
        <SectionHeading
          tag="Teaching Tools"
          title="Designed around how instructors actually work"
          description="Fewer tools, less admin, more time with your students."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.07}>
              <GlassCard className="flex h-full flex-col gap-4 p-8" glow={i % 2 === 0}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <feature.icon size={20} />
                </span>
                <h3 className="font-heading text-lg font-medium text-[color:var(--fg)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {feature.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Teach with us CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 sm:p-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-gradient sm:text-4xl">
                Teach with Globify Tech
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                We're always looking for practicing professionals who love to
                teach. Bring your craft into the classroom and help build the next
                generation of AI-ready talent.
              </p>
              <div className="mt-8">
                <LiquidGlassButton href="/contact">Apply to Teach</LiquidGlassButton>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--muted)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#009DFF] shadow-[0_0_8px_2px_rgba(0,157,255,0.8)]" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
