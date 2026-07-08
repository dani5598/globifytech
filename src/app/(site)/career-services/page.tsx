import type { Metadata } from "next";
import {
  FileText,
  Users,
  Briefcase,
  Target,
  MessageSquare,
  Handshake,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { partners } from "@/data/content";

export const metadata: Metadata = {
  title: "Career Services",
  description:
    "Globify Tech Institute career services — portfolio reviews, mock interviews, resume building, freelancing guidance, 1:1 coaching and a 40+ company hiring partner network with a 94% placement rate.",
  alternates: { canonical: "/career-services" },
};

const SERVICES = [
  {
    icon: FileText,
    title: "Resume & Portfolio Reviews",
    description:
      "One-on-one reviews that turn your projects into a portfolio and CV recruiters actually respond to.",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    description:
      "Practice technical and behavioral interviews with faculty, then get scored, specific feedback.",
  },
  {
    icon: Briefcase,
    title: "Freelancing Launchpad",
    description:
      "Set up profiles on international marketplaces, price your services and land your first paying client.",
  },
  {
    icon: Target,
    title: "1:1 Career Coaching",
    description:
      "A dedicated advisor helps you set goals, choose a track and build a personal job-search plan.",
  },
  {
    icon: Handshake,
    title: "Hiring Partner Network",
    description:
      "Direct referrals into our 40+ partner companies actively hiring Globify Tech graduates.",
  },
  {
    icon: Users,
    title: "Alumni Community",
    description:
      "Lifetime access to a community of graduates, faculty and employers sharing roles and opportunities.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Assess & plan",
    description:
      "In week one, your advisor maps your goals to a career track and a personalized job-search timeline.",
  },
  {
    step: "02",
    title: "Build your proof",
    description:
      "Through the program you ship real projects and case studies that become your portfolio.",
  },
  {
    step: "03",
    title: "Prep & polish",
    description:
      "Resume reviews, mock interviews and freelancing setup get you ready to apply with confidence.",
  },
  {
    step: "04",
    title: "Apply & get placed",
    description:
      "We refer you into partner companies and support you through offers, negotiation and onboarding.",
  },
];

const PLACEMENT = [
  { icon: TrendingUp, value: "94%", label: "Placement rate" },
  { icon: Briefcase, value: "1,200+", label: "Graduates placed" },
  { icon: Handshake, value: "40+", label: "Hiring partners" },
  { icon: Award, value: "3 mo", label: "Avg. time to first offer" },
];

export default function CareerServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Career Services"
        title="We don't stop at teaching — we get you hired"
        description="From your first week to your first offer, our career team gives you the portfolio, practice and connections to turn skills into a paycheck. Support doesn't end at graduation."
      >
        <LiquidGlassButton href="/admissions">
          Start Your Career Journey
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </LiquidGlassButton>
      </PageHeader>

      {/* Placement stats */}
      <Reveal delay={0.26}>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PLACEMENT.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-6 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                <stat.icon size={18} />
              </span>
              <p className="font-heading text-2xl font-bold text-[color:var(--fg)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Services */}
      <div className="mt-28">
        <SectionHeading
          tag="What You Get"
          title="Everything you need to land the role"
          description="Included with every program from day one — no upsells, no add-on career package."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <GlassCard className="flex h-full flex-col gap-4 p-8" glow={i % 2 === 0}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <service.icon size={20} />
                </span>
                <h3 className="font-heading text-lg font-bold text-[color:var(--fg)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {service.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mt-28">
        <SectionHeading
          tag="How It Works"
          title="Your path from enrolled to employed"
          description="A structured four-step journey with your career advisor at every stage."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-7">
                <span className="font-heading text-3xl font-bold text-gradient-blue">
                  {s.step}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-[color:var(--fg)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Hiring partners */}
      <div className="mt-28">
        <SectionHeading
          tag="Hiring Partners"
          title="Companies that hire our graduates"
          align="center"
        />
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-6 text-center font-heading text-sm font-bold text-[color:var(--muted)]"
              >
                {partner}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            Let's build the career you came for
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Enroll in a program and get the full weight of our career team behind
            your job search from day one.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LiquidGlassButton href="/admissions">Apply Now</LiquidGlassButton>
            <LiquidGlassButton href="/success-stories" variant="ghost">
              See Graduate Outcomes
            </LiquidGlassButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
