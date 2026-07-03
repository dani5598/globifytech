import { SiteShell } from "@/components/site-shell";

export default function EnrollLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
