"use client";

import dynamic from "next/dynamic";
import { Cpu, GitBranch, TerminalSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const DataCubesScene = dynamic(
  () =>
    import("@/components/three/data-cubes-scene").then((m) => m.DataCubesScene),
  { ssr: false }
);

const LAB_POINTS = [
  {
    icon: Cpu,
    label: "GPU-backed training environments",
  },
  {
    icon: TerminalSquare,
    label: "Real datasets, real deployment pipelines",
  },
  {
    icon: GitBranch,
    label: "Version-controlled, peer-reviewed labs",
  },
];

export function AiLabs() {
  return (
    <section id="ai-labs" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="glass relative grid grid-cols-1 overflow-hidden rounded-[2rem] lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center gap-6 p-10 sm:p-14">
            <SectionHeading
              align="left"
              tag="AI Labs"
              title="Train, ship and break things in a live AI lab"
              description="Step inside sandboxed cloud environments where you fine-tune real models, orchestrate pipelines, and deploy under the same constraints as production teams."
            />

            <Reveal delay={0.2}>
              <ul className="mt-2 flex flex-col gap-4">
                {LAB_POINTS.map((point) => (
                  <li
                    key={point.label}
                    className="flex items-center gap-3 text-sm text-[color:var(--muted)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[#009DFF]">
                      <point.icon size={16} />
                    </span>
                    {point.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative h-[320px] lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--bg)] via-transparent to-transparent lg:block" />
            <div className="absolute inset-0 rounded-full bg-[#009DFF]/10 blur-[100px]" />
            <DataCubesScene />
          </div>
        </div>
      </div>
    </section>
  );
}
