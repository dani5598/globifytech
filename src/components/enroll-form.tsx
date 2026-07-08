"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { GlassCard } from "@/components/ui/glass-card";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { openWhatsApp, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import type { programs } from "@/data/content";

type Program = (typeof programs)[number];

export function EnrollForm({
  programs,
}: {
  programs: readonly Program[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");
  const initialSlug = courseParam && programs.some((p) => p.slug === courseParam) ? courseParam : undefined;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const slug = String(data.get("program") ?? "");
    const program = programs.find((p) => p.slug === slug)?.title ?? slug;
    const url = openWhatsApp("New enrollment application — globifytech.com", [
      ["Name", String(data.get("name") ?? "")],
      ["Email", String(data.get("email") ?? "")],
      ["Phone", String(data.get("phone") ?? "")],
      ["Program", program],
      ["Message", String(data.get("message") ?? "")],
    ]);
    setWaUrl(url);
    setSubmitted(true);
  };

  return (
    <GlassCard className="p-8 sm:p-10">
      {submitted ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#009DFF]/20 text-[#7FD3FF]">
            <CheckCircle2 size={22} />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">
            Continue on WhatsApp
          </h3>
          <p className="max-w-xs text-sm text-[#A0AEC0]">
            We&apos;ve opened WhatsApp with your application pre-filled — just tap
            send and an admissions advisor will confirm your seat. If nothing
            opened, message us at {WHATSAPP_DISPLAY}.
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
          <Field
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+1 555 000 0000"
          />
          <div>
            <label
              htmlFor="program"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#A0AEC0]"
            >
              Program of Interest
            </label>
            <select
              id="program"
              name="program"
              required
              defaultValue={initialSlug ?? ""}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#009DFF]/50 [&>option]:bg-[color:var(--surface)] [&>option]:text-[color:var(--fg)]"
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
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#A0AEC0]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Anything we should know about your goals or schedule?"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#009DFF]/50"
            />
          </div>
          <LiquidGlassButton as="button" type="submit" className="mt-2 w-full justify-center">
            Submit Application
          </LiquidGlassButton>
        </form>
      )}
    </GlassCard>
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
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#A0AEC0]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#009DFF]/50"
      />
    </div>
  );
}
