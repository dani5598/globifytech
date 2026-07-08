import { Reveal } from "@/components/ui/reveal";
import { partnerLogos } from "@/components/sections/partner-logos";

export function TrustedBy() {
  const loop = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-[#A0AEC0]/60">
            Trusted by leading brands &amp; industry partners
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap">
          {loop.map(({ name, Icon }, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-3 text-white/30 transition-colors hover:text-white/70"
            >
              <Icon className="h-7 w-7 shrink-0" />
              <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
