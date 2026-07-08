import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { LegalBody, type LegalSection } from "@/components/ui/legal-body";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Globify Tech Institute collects, uses, protects and shares your personal information across our website, programs and student services.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "July 1, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "Globify Tech Institute (\"Globify Tech\", \"we\", \"us\" or \"our\") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what we collect, how we use it, and the choices you have.",
      "By using our website, submitting an application, or enrolling in a program, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly and information gathered automatically as you use our services.",
    ],
    bullets: [
      "Contact details you submit, such as your name, email address and phone number.",
      "Application and enrollment information, including your program of interest and background.",
      "Payment information processed securely through third-party payment providers.",
      "Usage data such as pages visited, device and browser type, and approximate location.",
      "Communications you send us through forms, email or chat.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Process applications, enrollments and payments.",
      "Provide access to programs, your student dashboard and career services.",
      "Respond to your enquiries and provide customer support.",
      "Send you updates about programs, events and resources you have opted into.",
      "Improve our website, content and learning experience.",
      "Meet legal, security and fraud-prevention obligations.",
    ],
  },
  {
    heading: "Cookies & Tracking",
    paragraphs: [
      "We use cookies and similar technologies to remember your preferences, understand how our site is used, and improve performance. You can control cookies through your browser settings; disabling them may affect some site features.",
    ],
  },
  {
    heading: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We may share it with trusted service providers who help us operate — such as payment processors, hosting and analytics providers — and only to the extent needed to deliver our services. We may also disclose information where required by law.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We use industry-standard technical and organizational measures to protect your information. No method of transmission or storage is completely secure, but we work hard to safeguard your data and limit access to those who need it.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We keep your personal information only for as long as necessary to provide our services, comply with our legal obligations, resolve disputes and enforce our agreements.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information, and to opt out of marketing communications. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our services are intended for users aged 16 and older. We do not knowingly collect personal information from children under this age. If you believe a child has provided us with information, please contact us so we can remove it.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the \"last updated\" date above. Significant changes will be communicated through our website or by email where appropriate.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how we handle your data, email us at info@globifytech.com or reach out through our contact page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-28 lg:px-10">
      <PageHeader
        align="left"
        tag="Legal"
        title="Privacy Policy"
        description="Your privacy matters. This policy explains what we collect and how we use and protect it."
      />
      <p className="mt-6 text-sm text-[color:var(--muted)]">Last updated: {LAST_UPDATED}</p>

      <LegalBody sections={SECTIONS} />

      <p className="mt-14 text-sm text-[color:var(--muted)]">
        See also our{" "}
        <Link href="/terms" data-cursor-hover className="text-[#7FD3FF] hover:underline">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </div>
  );
}
