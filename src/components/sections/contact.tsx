"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { programs } from "@/data/content";
import { openWhatsApp, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const CONTACT_DETAILS = [
  { icon: Mail, label: "info@globifytech.com" },
  { icon: Phone, label: "+92 339 1110171" },
  {
    icon: MapPin,
    label:
      "Office no 1, 1st floor, Rafaqat Ali Plaza, Main Chen One Rd, Pilot Ground Block B People's Colony No 1, Faisalabad, 38000",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const slug = String(data.get("program") ?? "");
    const program = programs.find((p) => p.slug === slug)?.title ?? slug;
    const url = openWhatsApp("New consultation request — globifytech.com", [
      ["Name", String(data.get("name") ?? "")],
      ["Email", String(data.get("email") ?? "")],
      ["Program", program],
      ["Message", String(data.get("message") ?? "")],
    ]);
    setWaUrl(url);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-10">
            <SectionHeading
              align="left"
              tag="Contact"
              title="Book a free consultation with an admissions advisor"
              description="Tell us what you want to build next. We'll map the right track, cohort, and timeline for your goals — no pressure, no pricing pitch."
            />

            <Reveal delay={0.15}>
              <ul className="flex flex-col gap-4">
                {CONTACT_DETAILS.map((detail) => (
                  <li
                    key={detail.label}
                    className="flex items-center gap-3 text-sm text-[color:var(--muted)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[#009DFF]">
                      <detail.icon size={16} />
                    </span>
                    {detail.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <GlassCard className="p-8 sm:p-10">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] bg-[#009DFF]/20 text-[#7FD3FF]">
                    <Mail size={22} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[color:var(--fg)]">
                    Continue on WhatsApp
                  </h3>
                  <p className="max-w-xs text-sm text-[color:var(--muted)]">
                    We&apos;ve opened WhatsApp with your details pre-filled — just
                    tap send and an advisor will reply. If nothing opened, message
                    us at {WHATSAPP_DISPLAY}.
                  </p>
                  {waUrl && (
                    <LiquidGlassButton href={waUrl} className="mt-2">
                      Open WhatsApp
                    </LiquidGlassButton>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Jordan Lee" />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="jordan@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="program"
                      className="mb-2 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
                    >
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#009DFF]/50 [&>option]:bg-[color:var(--surface)] [&>option]:text-[color:var(--fg)]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      {programs.map((program) => (
                        <option key={program.slug} value={program.slug}>
                          {program.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What are you hoping to build or achieve?"
                      className="w-full resize-none rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] outline-none transition-colors focus:border-[#009DFF]/50"
                    />
                  </div>
                  <LiquidGlassButton
                    as="button"
                    type="submit"
                    className="mt-2 w-full justify-center"
                  >
                    Book Consultation
                  </LiquidGlassButton>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] outline-none transition-colors focus:border-[#009DFF]/50"
      />
    </div>
  );
}
