import { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionTag } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { EnrollForm } from "@/components/enroll-form";
import { programs } from "@/data/content";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Apply to a Globify Tech Institute program. Tell us your goals and an admissions advisor will confirm your seat within one business day.",
  alternates: { canonical: "/enroll" },
};

const CONTACT_DETAILS = [
  { icon: Mail, label: "info@globifytech.com" },
  { icon: Phone, label: "+92 339 1110171" },
  {
    icon: MapPin,
    label:
      "Office no 1, 1st floor, Rafaqat Ali Plaza, Main Chen One Rd, Pilot Ground Block B People's Colony No 1, Faisalabad, 38000",
  },
];

export default function EnrollPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 lg:px-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <SectionTag>Enroll</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-gradient sm:text-5xl">
                Apply to a Globify Tech Institute program
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-balance text-base leading-relaxed text-[#A0AEC0] sm:text-lg">
                Pick the track that fits your goals. We&apos;ll confirm your
                seat, cohort start date, and payment options — no pressure,
                no pricing pitch.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ul className="flex flex-col gap-4">
              {CONTACT_DETAILS.map((detail) => (
                <li
                  key={detail.label}
                  className="flex items-center gap-3 text-sm text-[#A0AEC0]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                    <detail.icon size={16} />
                  </span>
                  {detail.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Suspense fallback={<div className="flex h-64 items-center justify-center text-[#A0AEC0]">Loading form...</div>}>
            <EnrollForm programs={programs} />
          </Suspense>
        </Reveal>
      </div>
    </div>
  );
}
