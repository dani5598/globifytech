/**
 * Layered ambient page background: aurora glow orbs, a fading grid and
 * film-grain noise. Purely decorative — sits above the particle canvas
 * but never intercepts pointer events.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="ambient-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Aurora sweep along the top edge */}
      <div className="absolute -top-[30%] left-1/2 h-[80vh] w-[130vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(24,95,165,0.4),transparent_65%)] blur-3xl animate-pulse-slow" />

      {/* Floating glow orbs — radial gradients keep full alpha at the core,
          unlike filter blur which washes it out */}
      <div className="absolute top-[8%] -left-48 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(24,95,165,0.35),rgba(24,95,165,0.12)_45%,transparent_70%)] animate-float-slow" />
      <div className="absolute top-[34%] -right-56 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(77,169,255,0.25),rgba(77,169,255,0.08)_45%,transparent_70%)] animate-float" />
      <div className="absolute -bottom-40 left-[10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(127,211,255,0.18),rgba(127,211,255,0.06)_45%,transparent_70%)] animate-float-slow" />

      {/* Slow conic shimmer behind the hero area */}
      <div className="absolute -top-64 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(77,169,255,0.12)_90deg,transparent_180deg,rgba(127,211,255,0.08)_270deg,transparent_360deg)] blur-2xl animate-spin-slow" />

      {/* Grid that fades toward the fold */}
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_25%,transparent_100%)]" />

      <div className="noise-overlay" />
    </div>
  );
}
