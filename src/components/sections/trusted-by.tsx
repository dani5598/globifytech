import { Reveal } from "@/components/ui/reveal";
import { partners } from "@/data/content";

export function TrustedBy() {
  const loop = [...partners, ...partners];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-[#A0AEC0]/60">
            Trusted by students now building at
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading text-xl font-medium tracking-tight text-white/25 transition-colors hover:text-white/50 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
