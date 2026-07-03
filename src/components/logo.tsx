import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7FD3FF" />
            <stop offset="1" stopColor="#185FA5" />
          </linearGradient>
        </defs>
        <path
          d="M16 2L29 9V23L16 30L3 23V9L16 2Z"
          stroke="url(#logoGrad)"
          strokeWidth="1.6"
          fill="rgba(24,95,165,0.12)"
        />
        <path d="M16 9L22.5 12.7V20.1L16 23.8L9.5 20.1V12.7L16 9Z" fill="url(#logoGrad)" />
      </svg>
      <span className="font-heading text-lg font-semibold tracking-tight text-[color:var(--fg)]">
        Globify <span className="text-[#4DA9FF]">Tech</span>
      </span>
    </div>
  );
}
