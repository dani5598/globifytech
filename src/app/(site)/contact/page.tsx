import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/contact-form";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Globify Tech Institute. Questions about programs, admissions, career services or partnerships — our team replies within one business day.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "info@globifytech.com",
    href: "mailto:info@globifytech.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+92 339 1110171",
    href: "tel:+923391110171",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Office no 1, 1st floor, Rafaqat Ali Plaza, Main Chen One Rd, Pilot Ground Block B People's Colony No 1, Faisalabad, 38000",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon–Sat, 9am–7pm",
    href: undefined,
  },
];

const QUICK_LINKS = [
  {
    icon: GraduationCap,
    title: "Admissions",
    description: "Ready to apply or have questions about a program?",
    href: "/admissions",
    cta: "Visit Admissions",
  },
  {
    icon: MessageSquare,
    title: "Book a Consultation",
    description: "Talk one-on-one with an advisor about your goals.",
    href: "/enroll",
    cta: "Enroll Now",
  },
];

const SOCIALS = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        align="left"
        tag="Contact Us"
        title="Let's talk about what you want to build"
        description="Whether you're weighing a program, exploring corporate training or just have a question — we're quick to reply and happy to help."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: contact info */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CHANNELS.map((channel, i) => {
              const inner = (
                <GlassCard className="flex h-full items-start gap-4 p-6" glow={i % 2 === 0}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                    <channel.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[color:var(--fg)]">
                      {channel.value}
                    </p>
                  </div>
                </GlassCard>
              );
              return (
                <Reveal key={channel.label} delay={i * 0.06}>
                  {channel.href ? (
                    <a href={channel.href} data-cursor-hover className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            {QUICK_LINKS.map((link, i) => (
              <Reveal key={link.title} delay={0.1 + i * 0.06}>
                <a href={link.href} data-cursor-hover className="block">
                  <GlassCard className="flex items-center gap-5 p-6" glow={false}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                      <link.icon size={18} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-base font-bold text-[color:var(--fg)]">
                        {link.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-[color:var(--muted)]">
                        {link.description}
                      </p>
                    </div>
                    <span className="hidden shrink-0 text-sm font-medium text-[#7FD3FF] sm:inline">
                      {link.cta} →
                    </span>
                  </GlassCard>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Socials */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[color:var(--muted)]">Follow us</span>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  data-cursor-hover
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition-colors hover:border-[#009DFF]/40 hover:text-[#7FD3FF]"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
