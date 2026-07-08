import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/data/content";

export function LegacyStats() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="left"
          tag="Globify Tech Institute"
          title={
            <>
              <span className="text-gradient-blue">Legacy</span>{" "}
              to be remembered
            </>
          }
        />

        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-2 bg-[#0D1117] px-6 py-10 text-center"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-3xl font-bold text-white sm:text-4xl"
                />
                <span className="text-xs uppercase tracking-wide text-[#A0AEC0]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
