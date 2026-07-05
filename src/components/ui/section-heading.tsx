import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#7FD3FF]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#009DFF] shadow-[0_0_8px_2px_rgba(0,157,255,0.8)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  className,
}: {
  tag?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {tag && (
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.1] tracking-tight text-gradient sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-[#A0AEC0] sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
