import { BeamsBackground } from "@/components/ui/beams-background";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      <BeamsBackground />
      <AmbientBackground />
      <Navbar />
      <main className="flex-1 pt-32 sm:pt-40">{children}</main>
      <Footer />
    </div>
  );
}
