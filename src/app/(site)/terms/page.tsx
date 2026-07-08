import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { LegalBody, type LegalSection } from "@/components/ui/legal-body";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the Globify Tech Institute website, programs, enrollment, payments and student services.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "July 1, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "These Terms & Conditions (\"Terms\") govern your access to and use of the Globify Tech Institute website, programs and services. By using our website, applying to a program or enrolling, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
    ],
  },
  {
    heading: "Enrollment & Eligibility",
    paragraphs: [
      "To enroll, you must provide accurate and complete information and meet any stated program requirements. We reserve the right to accept, decline or withdraw an application at our discretion, including where information provided is inaccurate or incomplete.",
    ],
  },
  {
    heading: "Programs & Curriculum",
    paragraphs: [
      "We continually refresh our programs to reflect current industry practice. Curriculum, schedules, instructors and tools may change without notice. We aim to deliver the learning outcomes described, but do not guarantee specific results such as employment, income or grades.",
    ],
  },
  {
    heading: "Fees & Payments",
    paragraphs: [
      "Tuition and applicable fees are due according to the payment plan agreed at enrollment. Installment, scholarship and deferred options are subject to eligibility and availability. Failure to pay may result in suspension of access to your program and student dashboard.",
    ],
  },
  {
    heading: "Refunds & Cancellations",
    paragraphs: [
      "Refund eligibility depends on the program and how far into a cohort you are. Where a cooling-off period applies, it will be communicated at enrollment. To request a cancellation or refund, contact your admissions advisor as early as possible.",
    ],
  },
  {
    heading: "Student Conduct",
    paragraphs: [
      "You agree to participate respectfully and honestly. The following are not permitted:",
    ],
    bullets: [
      "Sharing your account credentials or course materials with non-enrolled parties.",
      "Plagiarism, cheating or misrepresenting your work.",
      "Harassment, discrimination or disruptive behavior toward students or staff.",
      "Any unlawful use of our platform or content.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All course materials, content, branding and software provided by Globify Tech Institute are our property or that of our licensors and are protected by intellectual property laws. You may use them solely for your personal learning and may not reproduce, distribute or resell them without written permission.",
    ],
  },
  {
    heading: "Certificates",
    paragraphs: [
      "Certificates are awarded to students who meet the completion and assessment requirements of their program. A certificate recognizes program completion and is not equivalent to an accredited academic degree unless expressly stated.",
    ],
  },
  {
    heading: "Third-Party Tools & Links",
    paragraphs: [
      "Our programs may reference or integrate third-party tools and websites. We are not responsible for the content, availability or practices of third parties, and your use of them is governed by their own terms.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Globify Tech Institute is not liable for any indirect, incidental or consequential damages arising from your use of our services. Our total liability for any claim is limited to the fees you paid for the relevant program.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of our services after changes take effect constitutes acceptance of the updated Terms. The \"last updated\" date above reflects the most recent revision.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "Questions about these Terms? Email us at info@globifytech.com or reach out through our contact page and we'll be glad to help.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-28 lg:px-10">
      <PageHeader
        align="left"
        tag="Legal"
        title="Terms & Conditions"
        description="The ground rules for using our website, programs and services. Please read them carefully."
      />
      <p className="mt-6 text-sm text-[color:var(--muted)]">Last updated: {LAST_UPDATED}</p>

      <LegalBody sections={SECTIONS} />

      <p className="mt-14 text-sm text-[color:var(--muted)]">
        See also our{" "}
        <Link href="/privacy-policy" data-cursor-hover className="text-[#7FD3FF] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
