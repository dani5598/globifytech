import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Monochrome partner marks drawn as inline SVG so they inherit the marquee's
 * muted-white / hover-brighten colour via `currentColor` and stay crisp at any
 * size without shipping external image files. Swap any mark for a full-colour
 * brand asset by dropping the file in /public and replacing the component.
 */

function base(props: IconProps) {
  return {
    viewBox: "0 0 32 32",
    width: 30,
    height: 30,
    "aria-hidden": true as const,
    ...props,
  };
}

// BITSOL Marketing — signature ring + spark from their brand mark
function BitsolMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 9l1.6 4.9 4.9 1.6-4.9 1.6L16 23l-1.6-4.9L9.5 16.5l4.9-1.6L16 9z"
        fill="currentColor"
      />
    </svg>
  );
}

// Microsoft Cloud Partner — the four-pane window
function MicrosoftMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <rect x="4" y="4" width="10.5" height="10.5" rx="1" />
      <rect x="17.5" y="4" width="10.5" height="10.5" rx="1" />
      <rect x="4" y="17.5" width="10.5" height="10.5" rx="1" />
      <rect x="17.5" y="17.5" width="10.5" height="10.5" rx="1" />
    </svg>
  );
}

// Meta Business Partner — the infinity ribbon
function MetaMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M6 16c0-4.5 3-8 6-8s5 4 4 8-1 8 4 8 6-3.5 6-8-3-8-6-8-5 4-4 8 1 8-4 8-6-3.5-6-8z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Shahnawaz Motors — the Mercedes-Benz three-pointed star
function MercedesMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 16V5M16 16l-9.5 5.5M16 16l9.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Ideoversity — idea / lightbulb
function IdeaMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M16 4a9 9 0 015.5 16.1V23h-11v-2.9A9 9 0 0116 4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12.5 26h7M14 29h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Digital Eggheads — the egg
function EggMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M16 4c-6 0-9 10-9 16a9 9 0 0018 0c0-6-3-16-9-16z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

// NextBridge — forward chevrons
function NextMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M8 8l8 8-8 8M17 8l8 8-8 8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Systems Limited — the hexagon core
function HexMark(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M16 4l10.4 6v12L16 28 5.6 22V10L16 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 12v8M12 14v4M20 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export type PartnerLogo = {
  name: string;
  Icon: (props: IconProps) => ReactElement;
};

export const partnerLogos: PartnerLogo[] = [
  { name: "BITSOL Marketing", Icon: BitsolMark },
  { name: "Microsoft Cloud Partner", Icon: MicrosoftMark },
  { name: "Meta Business Partner", Icon: MetaMark },
  { name: "Shahnawaz Motors", Icon: MercedesMark },
  { name: "Ideoversity", Icon: IdeaMark },
  { name: "Digital Eggheads", Icon: EggMark },
  { name: "NextBridge", Icon: NextMark },
  { name: "Systems Limited", Icon: HexMark },
];
