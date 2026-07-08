import type { Metadata } from "next";
import {
  PlayCircle,
  BarChart3,
  CalendarClock,
  MessageSquare,
  Award,
  FolderKanban,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { StudentDashboardPreview } from "@/components/student-dashboard-preview";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description:
    "Your Globify Tech Institute student portal — track course progress, join live sessions, submit assignments, message mentors, and download certificates all in one place.",
  alternates: { canonical: "/student-dashboard" },
};

const FEATURES = [
  {
    icon: PlayCircle,
    title: "Pick up where you left off",
    description:
      "Resume any lesson in one click, with your progress synced across every device.",
  },
  {
    icon: BarChart3,
    title: "Track your progress",
    description:
      "See completion, streaks and cohort ranking so you always know where you stand.",
  },
  {
    icon: CalendarClock,
    title: "Live session calendar",
    description:
      "Never miss a class — schedule, reminders and recordings live in your dashboard.",
  },
  {
    icon: FolderKanban,
    title: "Submit & review work",
    description:
      "Upload assignments and projects and get structured feedback from your instructors.",
  },
  {
    icon: MessageSquare,
    title: "Message your mentors",
    description:
      "Ask questions and get unblocked with direct access to faculty and career coaches.",
  },
  {
    icon: Award,
    title: "Earn & download certificates",
    description:
      "Collect achievements and download your professional certificate the moment you graduate.",
  },
];

export default function StudentDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Student Dashboard"
        title="Your learning home, all in one place"
        description="Every enrolled student gets a personal dashboard to track progress, join live sessions, submit work and stay on top of their journey. Here's a live preview."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LiquidGlassButton href="/dashboard">
            Open Live Dashboard
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </LiquidGlassButton>
          <LiquidGlassButton href="/enroll" variant="ghost">
            Enroll to Get Access
          </LiquidGlassButton>
        </div>
      </PageHeader>

      {/* Live preview */}
      <Reveal delay={0.26}>
        <div className="mt-16">
          <StudentDashboardPreview />
          <p className="mt-4 text-center text-xs text-[color:var(--muted)]">
            Interactive preview · sample data shown
          </p>
        </div>
      </Reveal>

      {/* Features */}
      <div className="mt-28">
        <SectionHeading
          tag="What You Can Do"
          title="Built to keep you moving forward"
          description="Everything a student needs to learn, submit, connect and graduate — without switching between ten different tools."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.07}>
              <GlassCard className="flex h-full flex-col gap-4 p-8" glow={i % 2 === 0}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <feature.icon size={20} />
                </span>
                <h3 className="font-heading text-lg font-bold text-[color:var(--fg)]">
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

      {/* CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            Your dashboard is one enrollment away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Join a cohort and unlock your personal student portal, live sessions
            and full career support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LiquidGlassButton href="/admissions">Apply Now</LiquidGlassButton>
            <LiquidGlassButton href="/courses" variant="ghost">
              Browse Programs
            </LiquidGlassButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
