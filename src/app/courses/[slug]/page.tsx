import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Signal, UserRound } from "lucide-react";
import { SectionTag } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { programs, instructors } from "@/data/content";
import { JsonLd } from "@/components/seo/json-ld";
import { courseSchema, breadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export async function generateStaticParams(): Promise<Params[]> {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Course Not Found" };
  }

  return {
    title: program.title,
    description: program.description,
    alternates: {
      canonical: `/courses/${program.slug}`,
    },
    openGraph: {
      title: `${program.title} | Globify Tech Institute`,
      description: program.description,
      url: `/courses/${program.slug}`,
      type: "website",
      images: [{ url: program.image, alt: program.title }],
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  const instructor = instructors.find((i) => i.name === program.instructor);
  const enrollHref = `/enroll?course=${program.slug}`;

  return (
    <div className="mx-auto max-w-5xl px-6 pb-28 lg:px-10">
      <JsonLd
        schema={[
          courseSchema(program),
          breadcrumbSchema([
            { name: "Courses", path: "/courses" },
            { name: program.title, path: `/courses/${program.slug}` },
          ]),
        ]}
      />
      <Reveal>
        <Link
          href="/courses"
          data-cursor-hover
          className="text-sm font-medium text-[#A0AEC0] transition-colors hover:text-white"
        >
          ← All Courses
        </Link>
      </Reveal>

      <div className="mt-8 flex flex-col gap-5">
        <Reveal>
          <SectionTag>{program.tag}</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-gradient sm:text-5xl">
            {program.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-[#A0AEC0] sm:text-lg">
            {program.description}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="relative mt-10 h-56 w-full overflow-hidden rounded-3xl border border-white/[0.08] sm:h-72">
          <Image
            src={program.image}
            alt={program.title}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-white/[0.06] py-6 text-sm text-[#A0AEC0]">
          <span className="flex items-center gap-2">
            <Signal size={15} className="text-[#009DFF]" />
            {program.difficulty}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-[#009DFF]" />
            {program.duration}
          </span>
          <span className="flex items-center gap-2">
            <UserRound size={15} className="text-[#009DFF]" />
            Led by {program.instructor}
          </span>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white">
              What You&apos;ll Learn
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {program.curriculum.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.04, 0.4)}>
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-[#A0AEC0]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#009DFF]" />
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <GlassCard className="flex flex-col gap-6 p-7">
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                Ready to enroll?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A0AEC0]">
                Reserve your seat in the next cohort of {program.title}. An
                admissions advisor will confirm your schedule within one
                business day.
              </p>
            </div>
            <LiquidGlassButton href={enrollHref} className="w-full justify-center">
              Enroll Now
            </LiquidGlassButton>

            {instructor && (
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-xs font-medium uppercase tracking-wide text-[#A0AEC0]">
                  Your Instructor
                </p>
                <p className="mt-2 font-heading text-base font-bold text-white">
                  {instructor.name}
                </p>
                <p className="text-sm text-[#7FD3FF]">{instructor.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#A0AEC0]">
                  {instructor.bio}
                </p>
              </div>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </div>
  );
}
