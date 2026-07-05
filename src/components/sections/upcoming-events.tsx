import { ArrowUpRight, CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { events } from "@/data/content";

export function UpcomingEvents() {
  return (
    <section id="events" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="Admissions & Events"
          title="Upcoming events and admissions milestones"
          description="Meet our faculty, tour the labs, and mark the dates that matter before the next cohort opens."
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
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-[#A0AEC0]">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-medium text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A0AEC0]">
                    {event.description}
                  </p>
                  <a
                    href="#contact"
                    data-cursor-hover
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white"
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
    </section>
  );
}
