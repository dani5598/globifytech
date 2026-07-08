import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description:
    "Your Globify Tech Institute learning home — track progress, join live classes, submit assignments, chat with the AI tutor, earn certificates and land opportunities.",
  // Interactive demo app, not indexable marketing content.
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
