"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Search, UserPlus } from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { SectionTag } from "@/components/ui/section-heading";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <div
        aria-hidden
        className="grid-overlay pointer-events-none absolute -top-10 right-0 hidden h-[420px] w-[420px] opacity-40 [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)] lg:block"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        {/* LEFT */}
        <div className="relative z-10 flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTag>Learn Today&apos;s Skills · Lead Tomorrow&apos;s World</SectionTag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build Your Future with
            <br />
            <span className="text-gradient-blue">
              AI, Technology &amp; Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-balance text-base leading-relaxed text-[#A0AEC0] sm:text-lg"
          >

      
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-base font-medium tracking-wide text-white sm:text-lg"
          >
            🚀 Learn.{" "}
            <span className="text-gradient-blue">Create. Innovate.</span>{" "}
            Succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 flex flex-wrap items-center gap-4"
          >
            <LiquidGlassButton href="/courses">
              Explore Courses
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </LiquidGlassButton>
            <LiquidGlassButton href="/enroll" variant="ghost">
              <UserPlus size={16} />
              Apply Now
            </LiquidGlassButton>
          </motion.div>

          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 flex w-full max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl"
          >
            <Search size={16} className="ml-3 shrink-0 text-[#A0AEC0]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a course, e.g. Web Development"
              aria-label="Search courses"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
            <LiquidGlassButton as="button" type="submit" size="sm" magnetic={false}>
              Search
            </LiquidGlassButton>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.15em] text-[#A0AEC0]/70"
          >
            <span>7 Career Tracks</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Live AI Labs</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Global Faculty</span>
          </motion.div>
        </div>

        {/* RIGHT — 3D object */}
        <div className="relative z-0 h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-full bg-[#009DFF]/15 blur-[100px]" />
          <HeroScene />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#A0AEC0]/60 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
