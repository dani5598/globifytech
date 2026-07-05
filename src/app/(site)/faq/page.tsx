import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Globify Tech Institute — admissions, program format, schedules, payments, certificates and career support.",
};

const FAQS: FaqItem[] = [
  {
    category: "Admissions",
    question: "Do I need prior experience to apply?",
    answer:
      "No. Most of our programs are designed for first-time learners, while Full Stack Web Development and the Master Program assume some foundational comfort with computers. Every applicant completes a short readiness assessment so we can place you correctly.",
  },
  {
    category: "Admissions",
    question: "How do I apply and how long does it take?",
    answer:
      "Submit our short online application (about five minutes), complete a quick readiness assessment, then have a call with an advisor. Most applicants go from applying to enrolled within a few days.",
  },
  {
    category: "Admissions",
    question: "Can I switch tracks after enrolling?",
    answer:
      "Yes. Within the first week of a cohort you can switch tracks with your admissions advisor at no additional cost, provided seats are available.",
  },
  {
    category: "Programs",
    question: "What programs do you offer?",
    answer:
      "We offer seven career tracks: Digital Marketing with AI, Full Stack Web Development with AI, Social Media Marketing with AI, Video Editing, Graphic Designing, TikTok Shop Mastery, and our flagship Master Program combining design, development and marketing.",
  },
  {
    category: "Programs",
    question: "Do you teach AI tools in every program?",
    answer:
      "Yes. AI runs through every curriculum — from prompt-driven content and AI coding assistants to AI design and automation tools — so you graduate fluent in the workflows employers actually use.",
  },
  {
    category: "Format",
    question: "Are classes live or self-paced?",
    answer:
      "Programs combine live instructor-led sessions with self-paced lab work, so you get real-time mentorship alongside the flexibility to practice on your own schedule.",
  },
  {
    category: "Format",
    question: "Can I study while working a full-time job?",
    answer:
      "Absolutely. Live sessions are scheduled in the evenings and recorded, and lab work is self-paced. Many of our students learn while working or studying elsewhere.",
  },
  {
    category: "Format",
    question: "Is the program fully online?",
    answer:
      "Yes — we're remote-first, so you can join from anywhere. Select workshops and events also run on campus in San Francisco and London for students who can attend in person.",
  },
  {
    category: "Career",
    question: "What kind of career support is included?",
    answer:
      "Every student receives portfolio reviews, mock interviews, freelancing guidance, 1:1 career coaching and access to our 40+ industry-partner network — from week one through graduation and beyond.",
  },
  {
    category: "Career",
    question: "Do you guarantee a job?",
    answer:
      "We don't sell guarantees, but we do everything to earn outcomes: a 94% placement rate, direct referrals to hiring partners and lifetime access to our alumni community. Your effort plus our support is what drives results.",
  },
  {
    category: "Payments",
    question: "Will I receive a certificate on completion?",
    answer:
      "Yes. Graduates receive an industry-recognized Globify Tech Institute certificate, and the Master Program includes an internship opportunity for top-performing students.",
  },
  {
    category: "Payments",
    question: "What payment options are available?",
    answer:
      "We offer flexible monthly installment plans at no extra cost, merit- and need-based scholarships each cohort, and pay-after-placement options on select tracks. Talk to an advisor to find the best fit.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="FAQ"
        title="Answers before you ask"
        description="Everything prospective students want to know about admissions, format, payments and outcomes. Filter by topic or browse them all."
      />

      <div className="mt-16">
        <FaqAccordion items={FAQS} />
      </div>

      {/* Still have questions */}
      <Reveal delay={0.1}>
        <div className="mt-20 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-xl font-heading text-2xl font-medium tracking-tight text-gradient sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[color:var(--muted)]">
            Our team is happy to help. Reach out and we'll get back to you within
            one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LiquidGlassButton href="/contact">Contact Us</LiquidGlassButton>
            <LiquidGlassButton href="/admissions" variant="ghost">
              View Admissions
            </LiquidGlassButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
