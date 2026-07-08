import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { stats, instructors, partners } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Globify Tech Institute is a future-ready AI and technology education brand training the designers, developers, marketers and analysts of tomorrow through practical, industry-focused programs.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Rocket,
    title: "Industry-First Learning",
    description:
      "Every curriculum is built with practicing professionals and refreshed each cohort so you learn the tools employers actually use today.",
  },
  {
    icon: Heart,
    title: "Student Obsession",
    description:
      "From your first assessment to your first job offer, mentors, career coaches and advisors stay in your corner the whole way.",
  },
  {
    icon: Lightbulb,
    title: "AI at the Core",
    description:
      "We don't bolt AI on — it runs through design, development and marketing so you graduate fluent in the workflows shaping the industry.",
  },
  {
    icon: ShieldCheck,
    title: "Outcomes Over Hype",
    description:
      "Portfolios, real client projects and job placement are how we measure success — not lecture hours or certificates alone.",
  },
];

const MILESTONES = [
  {
    year: "2019",
    title: "The institute is founded",
    description:
      "Globify Tech launches with two tracks and a simple promise: teach the skills that get people hired.",
  },
  {
    year: "2021",
    title: "AI-powered curriculum",
    description:
      "We rebuild every program around AI tooling, becoming one of the first regional institutes to teach applied AI workflows.",
  },
  {
    year: "2023",
    title: "1,000+ graduates placed",
    description:
      "Our career services network crosses forty industry partners and a 94% placement rate across programs.",
  },
  {
    year: "2026",
    title: "Seven career tracks, global reach",
    description:
      "A remote-first faculty now delivers seven programs and the flagship agency-style Master Program to students worldwide.",
  },
];

const MISSION = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make future-ready technology skills accessible, practical and career-changing — turning ambitious beginners into confident professionals.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where anyone, anywhere can learn to build with AI and technology, and go from first lesson to first paycheck without a traditional degree.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="About Us"
        title="We build the people who build tomorrow"
        description="Globify Tech Institute is a future-ready AI and technology education brand. We train designers, developers, marketers and analysts through hands-on, industry-focused programs — and stay with them until they're hired."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LiquidGlassButton href="/courses">Explore Programs</LiquidGlassButton>
          <LiquidGlassButton href="/contact" variant="ghost">
            Talk to Admissions
          </LiquidGlassButton>
        </div>
      </PageHeader>

      {/* Stats */}
      <Reveal delay={0.26}>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-6 text-center"
            >
              <p className="font-heading text-2xl font-bold text-[color:var(--fg)] sm:text-3xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mission & Vision */}
      <div className="mt-28 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {MISSION.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <GlassCard className="flex h-full flex-col gap-5 p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#009DFF]/25 to-transparent text-[#7FD3FF]">
                <item.icon size={22} />
              </span>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[color:var(--fg)]">
                {item.title}
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                {item.description}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Values */}
      <div className="mt-28">
        <SectionHeading
          tag="What Drives Us"
          title="Values that shape every cohort"
          description="These aren't posters on a wall. They decide how we design programs, hire faculty and support students."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.07}>
              <GlassCard className="flex h-full items-start gap-5 p-8" glow={i % 2 === 0}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <value.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[color:var(--fg)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-28">
        <SectionHeading
          tag="Our Journey"
          title="From two tracks to a global institute"
          description="A short history of how Globify Tech grew into a future-ready AI education brand."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-7">
                <span className="font-heading text-3xl font-bold text-gradient-blue">
                  {m.year}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-[color:var(--fg)]">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {m.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Leadership / Faculty */}
      <div id="instructors" className="mt-28 scroll-mt-32">
        <SectionHeading
          tag="Faculty & Leadership"
          title="Learn from people who ship for a living"
          description="Our instructors are practicing marketers, engineers and creatives who bring real client work into the classroom."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {instructors.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.07}>
              <GlassCard className="flex h-full items-start gap-5 p-8" glow={false}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-base font-bold text-[#7FD3FF]">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[color:var(--fg)]">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#7FD3FF]">{person.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {person.bio}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="mt-28">
        <SectionHeading
          tag="Industry Partners"
          title="Where our graduates build careers"
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
            Ready to start building your future?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Join the next cohort and turn your ambition into an industry-ready
            portfolio and a career you're proud of.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LiquidGlassButton href="/admissions">
              Start Your Application
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </LiquidGlassButton>
            <Link
              href="/success-stories"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--fg)] transition-colors hover:text-[#7FD3FF]"
            >
              <Users size={16} />
              See Student Outcomes
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
