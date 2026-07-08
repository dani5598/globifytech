import {
  Clapperboard,
  Code2,
  GraduationCap,
  Megaphone,
  Palette,
  Share2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type CourseIconVariant =
  | "marketing"
  | "web"
  | "social"
  | "video"
  | "creative"
  | "ecommerce"
  | "master";

type IconStyle = {
  Icon: LucideIcon;
  /** top-left → bottom-right face gradient */
  gradient: string;
  /** colored depth shadow beneath the tile */
  shadow: string;
};

const STYLES: Record<CourseIconVariant, IconStyle> = {
  marketing: {
    Icon: Megaphone,
    gradient: "linear-gradient(145deg, #FF9A6B 0%, #FF3D77 100%)",
    shadow: "rgba(255, 61, 119, 0.45)",
  },
  web: {
    Icon: Code2,
    gradient: "linear-gradient(145deg, #4FC3F7 0%, #2563EB 100%)",
    shadow: "rgba(37, 99, 235, 0.45)",
  },
  social: {
    Icon: Share2,
    gradient: "linear-gradient(145deg, #FB7185 0%, #DB2777 100%)",
    shadow: "rgba(219, 39, 119, 0.45)",
  },
  video: {
    Icon: Clapperboard,
    gradient: "linear-gradient(145deg, #2DD4BF 0%, #0891B2 100%)",
    shadow: "rgba(8, 145, 178, 0.45)",
  },
  creative: {
    Icon: Palette,
    gradient: "linear-gradient(145deg, #C084FC 0%, #7C3AED 100%)",
    shadow: "rgba(124, 58, 237, 0.45)",
  },
  ecommerce: {
    Icon: ShoppingBag,
    gradient: "linear-gradient(145deg, #4ADE80 0%, #059669 100%)",
    shadow: "rgba(5, 150, 105, 0.45)",
  },
  master: {
    Icon: GraduationCap,
    gradient: "linear-gradient(145deg, #FCD34D 0%, #F59E0B 100%)",
    shadow: "rgba(245, 158, 11, 0.45)",
  },
};

/** Maps a 2-letter program code (see `programs` in data) to an icon variant. */
export const PROGRAM_ICON_VARIANT: Record<string, CourseIconVariant> = {
  DM: "marketing",
  WD: "web",
  SM: "social",
  VE: "video",
  GD: "creative",
  TS: "ecommerce",
  MP: "master",
};

/** Maps a course-category Lucide name (see `courseCategories`) to a variant. */
export const CATEGORY_ICON_VARIANT: Record<string, CourseIconVariant> = {
  Megaphone: "marketing",
  Code2: "web",
  Palette: "creative",
  ShoppingBag: "ecommerce",
  GraduationCap: "master",
};

type CourseIcon3DProps = {
  variant: CourseIconVariant;
  /** tile edge length in px */
  size?: number;
  className?: string;
};

/**
 * Glossy 3D gradient icon tile. The tile itself is the visual — no hollow box,
 * so it never adds empty space. Place inside a `group` element to get the
 * hover lift/scale.
 */
export function CourseIcon3D({ variant, size = 56, className }: CourseIcon3DProps) {
  const { Icon, gradient, shadow } = STYLES[variant];
  return (
    <span
      className={cn(
        "relative flex items-center justify-center rounded-[1.15rem] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110",
        className
      )}
      style={{
        height: size,
        width: size,
        backgroundImage: gradient,
        boxShadow: `0 12px 22px -8px ${shadow}, inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -3px 6px rgba(0,0,0,0.22)`,
      }}
    >
      {/* glossy top highlight for the 3D face */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-1 top-1 h-1/2 rounded-[0.9rem] bg-gradient-to-b from-white/45 to-transparent"
      />
      <Icon
        size={Math.round(size * 0.46)}
        strokeWidth={2.25}
        className="relative text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
      />
    </span>
  );
}
