import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionTag } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * Page-level hero header. Mirrors SectionHeading but renders an <h1> for the
 * primary page title and supports an optional CTA / meta slot via children.
 */
export function PageHeader({
  tag,
  title,
  description,
  align = "center",
  eyebrow,
  children,
  className,
}: {
  tag?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  eyebrow?: ReactNode;
  children?: ReactNode;
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
      {eyebrow && (
        <Reveal delay={0.04}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7FD3FF]">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-gradient sm:text-5xl">
          {title}
        </h1>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "text-balance text-base leading-relaxed text-[color:var(--muted)] sm:text-lg",
              align === "center" ? "max-w-2xl" : "max-w-xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
      {children && <Reveal delay={0.22}>{children}</Reveal>}
    </div>
  );
}
