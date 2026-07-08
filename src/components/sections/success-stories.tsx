import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/content";

export function SuccessStories() {
  return (
    <section id="success-stories" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="Student Success"
          title="Outcomes our graduates are living right now"
          description="Every story below represents a student who walked in with ambition and walked out with a role that matches it."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <GlassCard className="h-full p-8" glow={i % 2 === 0}>
                <Quote size={22} className="text-[#009DFF]" />
                <p className="mt-5 text-balance text-base leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#009DFF]/30 to-transparent font-heading text-sm font-bold text-[#7FD3FF]">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-[#A0AEC0]">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
