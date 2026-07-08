import type { Metadata } from "next";
import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Video,
  Presentation,
  Mic,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { events } from "@/data/content";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "Join Globify Tech Institute info sessions, live workshops, demo days and admissions events — on campus and virtual. Meet the faculty, tour the labs and preview our AI-powered programs.",
  alternates: { canonical: "/events" },
};

const FORMATS = [
  {
    icon: Presentation,
    title: "Info Sessions",
    description:
      "Preview a program's curriculum, tools and outcomes with the instructor who teaches it.",
  },
  {
    icon: Video,
    title: "Live Workshops",
    description:
      "Hands-on, build-along sessions where you leave with a real skill and a finished mini-project.",
  },
  {
    icon: Mic,
    title: "Demo Days",
    description:
      "Watch current students present and deploy live projects, then ask them anything.",
  },
  {
    icon: Users,
    title: "Community Meetups",
    description:
      "Network with alumni, faculty and hiring partners across our remote-first community.",
  },
];

const WORKSHOPS = [
  {
    title: "Build a Landing Page with AI in 90 Minutes",
    format: "Live Workshop · Virtual",
    time: "6:00 PM PKT",
    seats: "Limited to 100 seats",
    description:
      "Go from blank page to deployed site using AI coding assistants — no prior experience required.",
  },
  {
    title: "Run Your First Profitable Meta Ad",
    format: "Live Workshop · Virtual",
    time: "7:00 PM PKT",
    seats: "Open registration",
    description:
      "Set up targeting, creative and budget for a campaign you can launch the same night.",
  },
  {
    title: "Design a Brand Identity in Figma + AI",
    format: "Live Workshop · Campus + Virtual",
    time: "5:00 PM PKT",
    seats: "Limited to 60 seats",
    description:
      "Logo, palette and social kit — build a cohesive brand system with modern AI design tools.",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Events & Workshops"
        title="Come learn with us — live"
        description="Info sessions, hands-on workshops and demo days that let you experience Globify Tech before you enroll. Most are free, and every one is worth showing up for."
      >
        <LiquidGlassButton href="/contact">
          Reserve Your Spot
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </LiquidGlassButton>
      </PageHeader>

      {/* Event formats */}
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FORMATS.map((format, i) => (
          <Reveal key={format.title} delay={i * 0.07}>
            <GlassCard className="flex h-full flex-col gap-4 p-7" glow={i % 2 === 0}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                <format.icon size={20} />
              </span>
              <h3 className="font-heading text-base font-bold text-[color:var(--fg)]">
                {format.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                {format.description}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Upcoming events (from shared data) */}
      <div className="mt-28">
        <SectionHeading
          tag="On the Calendar"
          title="Upcoming events and milestones"
          description="Meet our faculty, tour the labs and mark the dates that matter before the next cohort opens."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.07}>
              <GlassCard className="flex h-full items-start gap-5 p-7" glow={false}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <CalendarDays size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-[#7FD3FF]">
                      {event.date}
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-[color:var(--muted)]">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-bold text-[color:var(--fg)]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {event.description}
                  </p>
                  <a
                    href="/contact"
                    data-cursor-hover
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--fg)]"
                  >
                    Reserve a spot
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Featured workshops */}
      <div className="mt-28">
        <SectionHeading
          tag="Hands-On Workshops"
          title="Leave with a skill, not just notes"
          description="Short, focused, build-along sessions taught by our faculty. Bring a laptop and an idea."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {WORKSHOPS.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#009DFF]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF]">
                  <Video size={12} />
                  {w.format}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-[color:var(--fg)]">
                  {w.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {w.description}
                </p>
                <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.06] pt-5 text-xs text-[color:var(--muted)]">
                  <span className="flex items-center gap-2">
                    <Clock size={13} className="text-[#009DFF]" />
                    {w.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={13} className="text-[#009DFF]" />
                    {w.seats}
                  </span>
                </div>
                <LiquidGlassButton href="/contact" size="sm" className="mt-6 w-full justify-center">
                  Register Free
                </LiquidGlassButton>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Host CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 sm:p-14">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                Want us to run a workshop for your team or campus?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
                We host private sessions and corporate trainings tailored to your
                goals — from AI upskilling to hands-on development bootcamps.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#009DFF]" />
              <LiquidGlassButton href="/contact">Talk to Our Team</LiquidGlassButton>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
