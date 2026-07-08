import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official Globify Tech Institute lockup (badge + wordmark).
 *
 * The wordmark is black, so it needs a light rendering on dark surfaces and a
 * dark rendering on light surfaces. Two pre-rendered PNGs cover this:
 *   - on-dark  → white wordmark, for dark backgrounds
 *   - on-light → black wordmark, for light backgrounds
 *
 * `variant`:
 *   - "auto"    (default) follows the site theme via the `.light` root class
 *   - "onDark"  forces the light-wordmark art (surfaces that are dark in both themes)
 *   - "onLight" forces the dark-wordmark art
 */
type LogoVariant = "auto" | "onDark" | "onLight";

const ON_DARK = "/globify-logo-on-dark.png"; // white wordmark
const ON_LIGHT = "/globify-logo-on-light.png"; // black wordmark

// Intrinsic size of the trimmed lockup (aspect ratio ≈ 2.53:1).
const INTRINSIC = { width: 3948, height: 1562 } as const;
const IMG_CLASS = "h-10 w-auto object-contain";

export function Logo({
  className,
  variant = "auto",
}: {
  className?: string;
  variant?: LogoVariant;
}) {
  const common = {
    alt: "Globify Tech Institute",
    ...INTRINSIC,
    priority: true,
    sizes: "112px",
  } as const;

  return (
    <span className={cn("inline-flex items-center", className)}>
      {variant !== "onLight" && (
        <Image
          src={ON_DARK}
          {...common}
          className={cn(IMG_CLASS, variant === "auto" && "light:hidden")}
        />
      )}
      {variant !== "onDark" && (
        <Image
          src={ON_LIGHT}
          {...common}
          className={cn(IMG_CLASS, variant === "auto" && "hidden light:block")}
        />
      )}
    </span>
  );
}
