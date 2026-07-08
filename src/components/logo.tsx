import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/Globify-Logo-PNG.png"
        alt="Globify Tech Institute"
        width={40}
        height={40}
        priority
        className="shrink-0 object-contain"
      />
      <span className="font-heading text-lg font-bold tracking-tight text-[color:var(--fg)]">
        Globify <span className="text-[#009DFF]">Tech</span>
      </span>
    </div>
  );
}
