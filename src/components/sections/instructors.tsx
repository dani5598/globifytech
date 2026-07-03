import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { instructors } from "@/data/content";

export function Instructors() {
  return (
    <section id="instructors" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="Our Instructors"
          title="Taught by people building the industry, not just teaching it"
          description="Every instructor at Globify Tech Institute is an active practitioner — engineers, researchers, and security leads working at the edge of their field."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, i) => (
            <Reveal key={instructor.name} delay={i * 0.07}>
              <GlassCard className="flex h-full flex-col items-center p-7 text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#185FA5]/30 via-[#0D1117] to-transparent font-heading text-xl font-semibold text-[#7FD3FF]">
                  {instructor.name
                    .split(" ")
                    .filter((w) => !w.endsWith("."))
                    .slice(-2)
                    .map((n) => n[0])
                    .join("")}
                  <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                </div>
                <h3 className="mt-5 font-heading text-base font-medium text-white">
                  {instructor.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#4DA9FF]">
                  {instructor.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#A0AEC0]">
                  {instructor.bio}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
