import type { Metadata } from "next";
import {
  ClipboardList,
  CalendarClock,
  Wallet,
  BadgeCheck,
  UserCheck,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { programs } from "@/data/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to Globify Tech Institute — a simple four-step admissions process, entry requirements, tuition options, scholarships and upcoming cohort dates across all seven programs.",
  alternates: { canonical: "/admissions" },
};

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Apply online",
    description:
      "Submit a short application telling us your goals and the track you're interested in — it takes about five minutes.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Readiness assessment",
    description:
      "Complete a quick assessment so we can place you in the right program and cohort for your level.",
  },
  {
    step: "03",
    icon: BadgeCheck,
    title: "Advisor call",
    description:
      "Chat with an admissions advisor about schedule, payment options and any questions you have.",
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "Enroll & start",
    description:
      "Reserve your seat, confirm your cohort start date and get access to your student dashboard.",
  },
];

const REQUIREMENTS = [
  "A laptop and a stable internet connection",
  "Basic comfort using a computer and the web",
  "Commitment to live sessions and lab work each week",
  "For Full Stack & Master Program: foundational logical thinking",
  "No prior degree or coding experience required for most tracks",
  "Enthusiasm to build a portfolio and learn by doing",
];

const TUITION = [
  {
    icon: Wallet,
    title: "Flexible Payment Plans",
    description:
      "Split tuition into monthly installments across your program at no extra cost.",
  },
  {
    icon: BadgeCheck,
    title: "Merit Scholarships",
    description:
      "Need- and merit-based scholarships are available each cohort for eligible applicants.",
  },
  {
    icon: GraduationCap,
    title: "Pay-After-Placement*",
    description:
      "Select tracks offer deferred options so you can start now and pay as your career takes off.",
  },
];

const DATES = [
  { program: "Digital Marketing with AI", start: "Aug 25, 2026", deadline: "Aug 14, 2026" },
  { program: "Full Stack Web Development with AI", start: "Sep 01, 2026", deadline: "Aug 21, 2026" },
  { program: "Social Media Marketing with AI", start: "Sep 08, 2026", deadline: "Aug 28, 2026" },
  { program: "Master Program", start: "Sep 15, 2026", deadline: "Sep 04, 2026" },
];

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Admissions"
        title="Applying is simple — getting hired is the goal"
        description="No entrance exams or lengthy essays. Tell us your goals, complete a short readiness check, and an advisor helps you pick the right track and start date."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LiquidGlassButton href="/enroll">
            Start Your Application
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </LiquidGlassButton>
          <LiquidGlassButton href="/contact" variant="ghost">
            Ask a Question
          </LiquidGlassButton>
        </div>
      </PageHeader>

      {/* Process */}
      <div className="mt-20">
        <SectionHeading
          tag="The Process"
          title="Four steps from applicant to student"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col gap-4 p-7" glow={i % 2 === 0}>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                    <s.icon size={20} />
                  </span>
                  <span className="font-heading text-2xl font-bold text-gradient-blue">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-[color:var(--fg)]">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {s.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Requirements + Tuition */}
      <div className="mt-28 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            tag="Requirements"
            title="What you'll need to enroll"
            description="We keep the bar where it belongs — on effort, not credentials."
          />
          <div className="mt-10 flex flex-col gap-3">
            {REQUIREMENTS.map((req, i) => (
              <Reveal key={req} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex items-start gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--muted)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#009DFF]" />
                  <span>{req}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            tag="Tuition & Aid"
            title="Options that fit your budget"
            description="Invest in your future without paying it all up front."
          />
          <div className="mt-10 flex flex-col gap-5">
            {TUITION.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <GlassCard className="flex items-start gap-5 p-7" glow={false}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                    <t.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[color:var(--fg)]">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted)]">
                      {t.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
            <p className="text-xs leading-relaxed text-[color:var(--muted)]/70">
              *Deferred and pay-after-placement options are subject to eligibility
              and availability. Talk to an advisor for details.
            </p>
          </div>
        </div>
      </div>

      {/* Cohort dates */}
      <div className="mt-28">
        <SectionHeading
          tag="Upcoming Cohorts"
          title="Key dates for the next intake"
          description="Applications are reviewed on a rolling basis — earlier applicants get first pick of seats and scholarships."
        />
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-4 border-b border-[color:var(--border)] bg-[color:var(--surface-soft)] px-6 py-4 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
              <span>Program</span>
              <span className="flex items-center gap-1.5">
                <CalendarClock size={13} className="text-[#009DFF]" />
                Apply By
              </span>
              <span>Cohort Starts</span>
            </div>
            {DATES.map((d) => (
              <div
                key={d.program}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 border-b border-[color:var(--border)] px-6 py-5 text-sm last:border-b-0"
              >
                <span className="font-medium text-[color:var(--fg)]">{d.program}</span>
                <span className="text-[color:var(--muted)]">{d.deadline}</span>
                <span className="text-[#7FD3FF]">{d.start}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-4 text-center text-sm text-[color:var(--muted)]">
          Looking for a different track?{" "}
          <a href="/courses" data-cursor-hover className="text-[#7FD3FF] hover:underline">
            Browse all {programs.length} programs
          </a>
          .
        </p>
      </div>

      {/* CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            Seats fill fast — start your application today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            It takes five minutes to apply. An advisor will confirm your seat and
            cohort start date within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <LiquidGlassButton href="/enroll">Apply Now</LiquidGlassButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
