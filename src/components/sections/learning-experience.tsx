import { Brain, Layers, Radar, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    icon: Layers,
    title: "Project-Based Curriculum",
    description:
      "Every module ships a real, portfolio-ready artifact — not slides. You leave with proof of work, not just certificates.",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    description:
      "Weekly 1:1 and cohort sessions with practitioners actively working in AI, security, and cloud roles today.",
  },
  {
    icon: Brain,
    title: "AI-Personalized Pathways",
    description:
      "Adaptive learning paths recalibrate in real time based on your pace, strengths, and target career outcome.",
  },
  {
    icon: Radar,
    title: "Outcome Tracking",
    description:
      "Transparent progress analytics for every student — skills mastered, gaps remaining, readiness for hire.",
  },
];

export function LearningExperience() {
  return (
    <section id="learning-experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            tag="Learning Experience"
            title="An education engineered like a product, not a lecture hall"
            description="Globify Tech Institute blends structured curriculum with adaptive AI tooling and real mentorship, so every hour you invest compounds toward a hiring-ready outcome."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <GlassCard className="h-full p-6">
                  <feature.icon size={22} className="text-[#009DFF]" />
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#A0AEC0]">
                    {feature.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
