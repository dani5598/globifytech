import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Code2,
  GraduationCap,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Signal,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { SectionTag } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { programs, courseCategories, stats } from "@/data/content";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore all Globify Tech Institute programs — Digital Marketing with AI, Full Stack Web Development with AI, Social Media Marketing with AI, Video Editing, Graphic Designing, TikTok Shop Mastery and the Master Program.",
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Megaphone,
  Code2,
  Palette,
  ShoppingBag,
  GraduationCap,
};

function inCategory(slug: string, label: string) {
  switch (label) {
    case "Digital Marketing":
      return slug.includes("marketing");
    case "Web Development":
      return slug.includes("web-development");
    case "Creative & Video":
      return slug === "video-editing" || slug === "graphic-designing";
    case "E-Commerce":
      return slug.includes("tiktok-shop");
    case "Master Program":
      return slug === "master-program";
    default:
      return false;
  }
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q = "", category = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const byCategory = category
    ? programs.filter((program) => inCategory(program.slug, category))
    : programs;

  const results = query
    ? byCategory.filter((program) =>
        [program.title, program.description, program.tag, program.instructor]
          .join(" ")
          .toLowerCase()
          .includes(query)
      )
    : byCategory;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <div className="flex flex-col items-center gap-5 text-center">
        <Reveal>
          <SectionTag>All Programs</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-heading text-4xl font-medium leading-[1.1] tracking-tight text-gradient sm:text-5xl">
            Seven career tracks. One AI-powered institute.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-[#A0AEC0] sm:text-lg">
            Every program is built with practicing instructors, refreshed each
            cohort, and ends with a professional certificate and a portfolio
            you can show clients or employers.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <form
            action="/courses"
            className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl"
          >
            <Search size={16} className="ml-3 shrink-0 text-[#A0AEC0]" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search a course"
              aria-label="Search courses"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
            <LiquidGlassButton as="button" type="submit" size="sm" magnetic={false}>
              Search
            </LiquidGlassButton>
          </form>
        </Reveal>
      </div>

      <Reveal delay={0.26}>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center"
            >
              <p className="font-heading text-2xl font-medium text-white sm:text-3xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs text-[#A0AEC0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/courses"
            data-cursor-hover
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
              !category
                ? "border-[#4DA9FF]/50 bg-[#185FA5]/20 text-[#7FD3FF]"
                : "border-white/10 bg-white/[0.03] text-[#A0AEC0] hover:text-white"
            }`}
          >
            All Categories
          </Link>
          {courseCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.icon];
            const active = category === cat.label;
            return (
              <Link
                key={cat.label}
                href={`/courses?category=${encodeURIComponent(cat.label)}`}
                data-cursor-hover
                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                  active
                    ? "border-[#4DA9FF]/50 bg-[#185FA5]/20 text-[#7FD3FF]"
                    : "border-white/10 bg-white/[0.03] text-[#A0AEC0] hover:text-white"
                }`}
              >
                {Icon && <Icon size={12} />}
                {cat.label}
                <span className="text-[#A0AEC0]">({cat.count})</span>
              </Link>
            );
          })}
        </div>
      </Reveal>

      {(query || category) && (
        <p className="mt-8 text-center text-sm text-[#A0AEC0]">
          {results.length > 0
            ? `${results.length} result${results.length === 1 ? "" : "s"}${query ? ` for "${q}"` : ""}${category ? ` in ${category}` : ""}`
            : `No courses matched — showing all programs instead.`}
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(results.length > 0 ? results : programs).map((program, i) => (
          <Reveal key={program.slug} delay={i * 0.06}>
            <Link href={`/courses/${program.slug}`} data-cursor-hover className="block h-full">
              <GlassCard className="flex h-full flex-col">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#185FA5]/25 to-transparent font-heading text-sm font-semibold text-[#7FD3FF]">
                      {program.icon}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF]">
                      {program.tag}
                    </span>
                  </div>

                  <h2 className="mt-6 font-heading text-xl font-medium tracking-tight text-white">
                    {program.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#A0AEC0]">
                    {program.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5 text-xs text-[#A0AEC0]">
                    <span className="flex items-center gap-1.5">
                      <Signal size={13} className="text-[#4DA9FF]" />
                      {program.difficulty}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#4DA9FF]" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <UserRound size={13} className="text-[#4DA9FF]" />
                      {program.instructor}
                    </span>
                  </div>

                  <span className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    View Course
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </GlassCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
