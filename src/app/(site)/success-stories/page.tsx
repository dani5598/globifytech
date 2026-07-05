import type { Metadata } from "next";
import {
  Quote,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real outcomes from Globify Tech Institute graduates — career switchers, freelancers and agency founders who turned our AI-powered programs into jobs, clients and businesses.",
};

const OUTCOME_STATS = [
  { icon: Briefcase, value: "1,200+", label: "Graduates placed" },
  { icon: TrendingUp, value: "94%", label: "Job placement rate" },
  { icon: GraduationCap, value: "7", label: "Career tracks" },
  { icon: Star, value: "4.9/5", label: "Average student rating" },
];

const FEATURED = {
  name: "Sana Iqbal",
  role: "Full Stack Developer @ Nimbus Labs",
  program: "Full Stack Web Development with AI",
  quote:
    "I walked in having never written a line of production code. The Full Stack track gave me real projects, a portfolio and interview prep that actually mirrored the questions I got asked. I signed my offer two weeks before graduating.",
  metric: "Hired before graduation",
};

const STORIES = [
  {
    name: "Rohit Malhotra",
    role: "Freelance Digital Marketer",
    program: "Digital Marketing with AI",
    quote:
      "The Meta Ads labs and live campaign work meant I could show clients real results on day one. I landed my first retainer during the course and now run three accounts.",
    metric: "First retainer client during the course",
  },
  {
    name: "Emily Zhao",
    role: "Graphic & Video Freelancer",
    program: "Graphic Designing + Video Editing",
    quote:
      "Between the design and video tracks I built a portfolio strong enough to go fully freelance within weeks. The AI tooling doubled how fast I ship client work.",
    metric: "Full-time freelance in under a month",
  },
  {
    name: "Carlos Mendes",
    role: "Agency Founder, Master Program Graduate",
    program: "Master Program",
    quote:
      "The internship turned into my first agency role, and the agency workflow training is the exact system I use running client accounts today. Now I hire other Globify grads.",
    metric: "Internship → agency founder",
  },
  {
    name: "Aisha Khan",
    role: "Social Media Manager @ LoopStack",
    program: "Social Media Marketing with AI",
    quote:
      "One month, one focused track, and I completely changed careers. The personal branding module got my own page to 20k followers, which is how the hiring manager found me.",
    metric: "Career switch in one month",
  },
  {
    name: "Daniel Osei",
    role: "TikTok Shop Seller",
    program: "TikTok Shop Mastery",
    quote:
      "I followed the product-hunting and scaling framework exactly. My store crossed five figures in monthly sales during the second month of the program.",
    metric: "5-figure monthly store revenue",
  },
  {
    name: "Priya Nair",
    role: "Video Editor @ Halo Robotics",
    program: "Video Editing (Beginner to Pro)",
    quote:
      "The cinematic editing and color grading modules leveled up my reel instantly. I applied to an in-house role I never thought I'd qualify for — and got it.",
    metric: "In-house editor role landed",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Student Success"
        title="Outcomes our graduates are living right now"
        description="Every story here is a student who walked in with ambition and walked out with a role, a client roster or a business that matches it. Here's what happens after the certificate."
      >
        <LiquidGlassButton href="/admissions">
          Write Your Own Story
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </LiquidGlassButton>
      </PageHeader>

      {/* Outcome stats */}
      <Reveal delay={0.26}>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {OUTCOME_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-6 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                <stat.icon size={18} />
              </span>
              <p className="font-heading text-2xl font-medium text-[color:var(--fg)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Featured story */}
      <Reveal delay={0.1}>
        <div className="mt-16">
          <GlassCard className="grid grid-cols-1 gap-8 p-9 sm:p-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Quote size={30} className="text-[#009DFF]" />
              <p className="mt-6 text-balance font-heading text-xl font-medium leading-relaxed text-[color:var(--fg)] sm:text-2xl">
                &ldquo;{FEATURED.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-base font-medium text-[#7FD3FF]">
                  {FEATURED.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-[color:var(--fg)]">
                    {FEATURED.name}
                  </div>
                  <div className="text-xs text-[color:var(--muted)]">{FEATURED.role}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                  Program
                </p>
                <p className="mt-1 font-heading text-base font-medium text-[color:var(--fg)]">
                  {FEATURED.program}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                  Outcome
                </p>
                <p className="mt-1 inline-flex items-center gap-2 font-heading text-base font-medium text-[#7FD3FF]">
                  <TrendingUp size={16} />
                  {FEATURED.metric}
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Reveal>

      {/* Story grid */}
      <div className="mt-20">
        <SectionHeading
          tag="More Stories"
          title="Graduates across every track"
          description="Career switchers, freelancers and founders — different starting points, one thing in common."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story, i) => (
            <Reveal key={story.name} delay={(i % 3) * 0.07}>
              <GlassCard className="flex h-full flex-col p-8" glow={i % 2 === 0}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF]">
                  <TrendingUp size={12} />
                  {story.metric}
                </span>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-sm font-medium text-[#7FD3FF]">
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[color:var(--fg)]">{story.name}</div>
                    <div className="text-xs text-[color:var(--muted)]">{story.role}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-medium tracking-tight text-gradient sm:text-4xl">
            Your success story starts with one cohort
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Pick a track, build a portfolio and let our career team help you land
            the role, clients or business you came for.
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
