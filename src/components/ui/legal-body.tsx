import { Reveal } from "@/components/ui/reveal";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/** Shared renderer for long-form legal pages (privacy, terms). */
export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mt-16 flex flex-col gap-12">
      {sections.map((section, i) => (
        <Reveal key={section.heading} delay={Math.min(i * 0.03, 0.2)}>
          <section className="scroll-mt-32">
            <h2 className="font-heading text-xl font-medium tracking-tight text-[color:var(--fg)] sm:text-2xl">
              {i + 1}. {section.heading}
            </h2>
            {section.paragraphs?.map((p, pi) => (
              <p
                key={pi}
                className="mt-4 text-base leading-relaxed text-[color:var(--muted)]"
              >
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 flex flex-col gap-2.5">
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--muted)]"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#009DFF]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </Reveal>
      ))}
    </div>
  );
}
