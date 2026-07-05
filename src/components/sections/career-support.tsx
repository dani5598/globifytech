"use client";

import { BriefcaseBusiness, FileCheck2, MessagesSquare, Network } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal, Stagger, staggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const STATS = [
  { value: "92%", label: "Graduate placement rate" },
  { value: "180+", label: "Hiring partner companies" },
  { value: "4.8x", label: "Avg. interview conversion lift" },
  { value: "30 Days", label: "Avg. time-to-offer post-graduation" },
];

const STEPS = [
  {
    icon: FileCheck2,
    title: "Portfolio & Resume Coaching",
    description: "1:1 reviews that translate your projects into hiring signal.",
  },
  {
    icon: MessagesSquare,
    title: "Mock Interviews",
    description: "Technical and behavioral simulations with real hiring managers.",
  },
  {
    icon: Network,
    title: "Industry Partner Network",
    description: "Direct introductions to our 180+ hiring partner companies.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Offer Negotiation Support",
    description: "Guidance through offers, leveling, and career decisions.",
  },
];

export function CareerSupport() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="Career Support"
          title="Career acceleration, built into every program"
          description="You're not just learning skills — you're being placed. Our career team works alongside you from orientation through your first offer."
        />

        <Stagger className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass rounded-2xl px-6 py-8 text-center"
            >
              <div className="font-heading text-3xl font-semibold text-gradient-blue sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-[color:var(--muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </Stagger>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <GlassCard className="h-full p-6" glow={false}>
                <step.icon size={20} className="text-[#009DFF]" />
                <h3 className="mt-5 font-heading text-base font-medium text-[color:var(--fg)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
