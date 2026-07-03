import Link from "next/link";
import {
  Code2,
  GraduationCap,
  Megaphone,
  Palette,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { courseCategories } from "@/data/content";

const ICONS: Record<string, LucideIcon> = {
  Megaphone,
  Code2,
  Palette,
  ShoppingBag,
  GraduationCap,
};

export function CourseCategories() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="left"
          tag="Browse Your Future"
          title="Popular tracks to learn right now"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3 lg:grid-cols-5">
            {courseCategories.map((category) => {
              const Icon = ICONS[category.icon];
              return (
                <Link
                  key={category.label}
                  href={`/courses?category=${encodeURIComponent(category.label)}`}
                  data-cursor-hover
                  className="group flex flex-col items-center gap-3 bg-[color:var(--surface)] px-6 py-9 text-center transition-colors hover:bg-[color:var(--surface-hover)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[#185FA5]/25 to-transparent text-[#7FD3FF] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <span className="font-heading text-sm font-medium text-[color:var(--fg)]">
                    {category.label}
                  </span>
                  <span className="text-xs text-[color:var(--muted)]">
                    {category.count} {category.count === 1 ? "program" : "programs"}
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
