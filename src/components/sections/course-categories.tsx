import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CourseIcon3D, CATEGORY_ICON_VARIANT } from "@/components/ui/course-icon";
import { courseCategories } from "@/data/content";

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
            {courseCategories.map((category) => (
              <Link
                key={category.label}
                href={`/courses?category=${encodeURIComponent(category.label)}`}
                data-cursor-hover
                className="group flex flex-col items-center gap-3 bg-[color:var(--surface)] px-6 py-9 text-center transition-colors hover:bg-[color:var(--surface-hover)]"
              >
                <CourseIcon3D variant={CATEGORY_ICON_VARIANT[category.icon]} />
                <span className="font-heading text-sm font-bold text-[color:var(--fg)]">
                  {category.label}
                </span>
                <span className="text-xs text-[color:var(--muted)]">
                  {category.count} {category.count === 1 ? "program" : "programs"}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
