"use client";

import { motion } from "framer-motion";
import { Award, Download, ShieldCheck, Eye } from "lucide-react";
import { DashboardSection, Panel } from "@/components/dashboard/primitives";
import { Logo } from "@/components/logo";
import { CERTIFICATES } from "@/lib/dashboard-data";

export function CertificatesSection() {
  return (
    <DashboardSection
      id="certificates"
      icon={Award}
      title="Certificates"
      description="Your verified credentials — preview, download or share to your network."
      action={
        <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1.5 text-xs text-[color:var(--muted)]">
          {CERTIFICATES.length} earned
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={cert.credentialId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
          >
            <Panel className="flex h-full flex-col overflow-hidden">
              {/* certificate preview */}
              <div className={`relative bg-gradient-to-br ${cert.gradient} p-5`}>
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.4),transparent_45%)]" />
                <div className="relative rounded-xl border border-white/25 bg-black/25 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <Logo className="[&_span]:text-white [&_img]:brightness-0 [&_img]:invert" />
                    <ShieldCheck size={18} className="text-white/90" />
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Certificate of Completion
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold leading-tight text-white">
                    {cert.title}
                  </p>
                  <p className="mt-3 text-[11px] text-white/70">
                    Issued {cert.issued} · ID {cert.credentialId}
                  </p>
                </div>
              </div>

              {/* actions */}
              <div className="flex flex-1 flex-col p-4">
                {cert.verified && (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#22c55e]/12 px-2.5 py-1 text-[11px] font-medium text-[#22c55e]">
                    <ShieldCheck size={12} /> Blockchain verified
                  </span>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    data-cursor-hover=""
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#009DFF]/12 px-3 py-2 text-xs font-medium text-[#7FD3FF] transition-colors hover:bg-[#009DFF]/22"
                  >
                    <Download size={13} /> PDF
                  </button>
                  <button
                    type="button"
                    aria-label="Preview"
                    data-cursor-hover=""
                    className="flex h-8 w-9 items-center justify-center rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] transition-colors hover:text-[color:var(--fg)]"
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    type="button"
                    aria-label="Share to LinkedIn"
                    data-cursor-hover=""
                    className="flex h-8 w-9 items-center justify-center rounded-lg bg-[#0A66C2] text-xs font-bold text-white transition-transform hover:scale-105"
                  >
                    in
                  </button>
                  <button
                    type="button"
                    aria-label="Share to Facebook"
                    data-cursor-hover=""
                    className="flex h-8 w-9 items-center justify-center rounded-lg bg-[#1877F2] text-xs font-bold text-white transition-transform hover:scale-105"
                  >
                    f
                  </button>
                </div>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </DashboardSection>
  );
}
