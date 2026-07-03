"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] px-8 py-10 sm:flex-row sm:px-12">
            <h3 className="font-heading text-xl font-medium text-white sm:text-2xl">
              Subscribe to our newsletter
            </h3>

            {submitted ? (
              <p className="text-sm text-[#7FD3FF]">
                You&apos;re on the list — check your inbox soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5"
              >
                <Mail size={16} className="ml-3 shrink-0 text-[#A0AEC0]" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                />
                <LiquidGlassButton as="button" type="submit" size="sm" magnetic={false}>
                  Subscribe
                </LiquidGlassButton>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
