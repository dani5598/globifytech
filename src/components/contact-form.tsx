"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";

const TOPICS = [
  "General enquiry",
  "Admissions & programs",
  "Career services",
  "Corporate training",
  "Partnerships",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <GlassCard className="p-8 sm:p-10">
      {submitted ? (
        <div className="flex min-h-[440px] flex-col items-center justify-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#009DFF]/20 text-[#7FD3FF]">
            <CheckCircle2 size={22} />
          </div>
          <h3 className="font-heading text-xl font-medium text-[color:var(--fg)]">
            Message sent
          </h3>
          <p className="max-w-xs text-sm text-[color:var(--muted)]">
            Thanks for reaching out. A member of our team will get back to you
            within one business day.
          </p>
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
            required={false}
            placeholder="+1 555 000 0000"
          />
          <div>
            <label
              htmlFor="topic"
              className="mb-2 block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]"
            >
              What's this about?
            </label>
            <select
              id="topic"
              name="topic"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--fg)] outline-none transition-colors focus:border-[#009DFF]/50"
            >
              <option value="" disabled>
                Select a topic
              </option>
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
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
              required
              placeholder="How can we help?"
              className="w-full resize-none rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] outline-none transition-colors focus:border-[#009DFF]/50"
            />
          </div>
          <LiquidGlassButton as="button" type="submit" className="mt-2 w-full justify-center">
            Send Message
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
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
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
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] outline-none transition-colors focus:border-[#009DFF]/50"
      />
    </div>
  );
}
