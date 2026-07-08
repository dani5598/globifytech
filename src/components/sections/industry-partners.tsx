import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { partners } from "@/data/content";

export function IndustryPartners() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="Industry Partners"
          title="A hiring network built alongside the industry"
          description="We co-design curriculum with our partner companies so the skills you build map directly onto the roles they're hiring for."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="glass flex h-24 items-center justify-center rounded-2xl px-4 text-center font-heading text-base font-bold text-white/60 transition-colors hover:text-white sm:text-lg">
                {name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
