import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  BrainCog,
  Building2,
  Clapperboard,
  Code2,
  Compass,
  Globe2,
  Megaphone,
  MessagesSquare,
  Palette,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Wand2,
} from "lucide-react";

export interface MenuItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

/** Ordered top-level nav entries. "menu" entries render a trigger + dropdown. */
export type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "menu"; label: string; key: "courses" | "services" };

export const NAV_ITEMS: NavItem[] = [
  { type: "link", label: "Home", href: "/#home" },
  { type: "link", label: "About", href: "/#learning-experience" },
  { type: "menu", label: "AI Courses", key: "courses" },
  { type: "menu", label: "Services", key: "services" },
  { type: "link", label: "Success Stories", href: "/#success-stories" },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "Contact", href: "/#contact" },
];

export const AI_COURSES: MenuItem[] = [
  {
    title: "AI Digital Marketing",
    description: "Run AI-assisted campaigns across Meta Ads, SEO and email.",
    href: "/courses/digital-marketing-with-ai",
    icon: Megaphone,
  },
  {
    title: "Graphic Designing with AI",
    description: "Brand identities and creatives with Photoshop, Illustrator and AI tools.",
    href: "/courses/graphic-designing",
    icon: Palette,
  },
  {
    title: "Video Editing + AI",
    description: "Cinematic editing, color grading and AI-powered Reels production.",
    href: "/courses/video-editing",
    icon: Clapperboard,
  },
  {
    title: "Web Development",
    description: "Build and deploy full stack apps with React, Node.js and AI copilots.",
    href: "/courses/full-stack-web-development-with-ai",
    icon: Code2,
  },
  {
    title: "Python Programming",
    description: "Core programming fundamentals through real-world Python projects.",
    href: "/courses?q=python",
    icon: Terminal,
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning foundations, model workflows and applied AI.",
    href: "/courses?q=artificial+intelligence",
    icon: BrainCog,
  },
  {
    title: "Prompt Engineering",
    description: "Design high-precision prompts across leading AI model families.",
    href: "/courses?q=prompt+engineering",
    icon: Wand2,
  },
  {
    title: "ChatGPT Mastery",
    description: "Automate research, writing and workflows with advanced ChatGPT skills.",
    href: "/courses?q=chatgpt",
    icon: Bot,
  },
  {
    title: "UI/UX Design",
    description: "Craft user-centered interfaces from wireframes to polished prototypes.",
    href: "/courses?q=ui%2Fux",
    icon: PenTool,
  },
  {
    title: "Cyber Security",
    description: "Threat modeling, network defense and applied security practices.",
    href: "/courses?q=cyber+security",
    icon: ShieldCheck,
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into decisions with dashboards, SQL and visualization.",
    href: "/courses?q=data+analytics",
    icon: BarChart3,
  },
];

export const SERVICES: MenuItem[] = [
  {
    title: "Corporate Training",
    description: "Upskill teams with tailored AI and technology training programs.",
    href: "/services/corporate-training",
    icon: Building2,
  },
  {
    title: "Software Development",
    description: "Custom web and product engineering built by our senior faculty.",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    title: "AI Automation",
    description: "Automate workflows and operations with applied AI systems.",
    href: "/services/ai-automation",
    icon: Sparkles,
  },
  {
    title: "Branding",
    description: "Identity systems and visual strategy for growing brands.",
    href: "/services/branding",
    icon: Compass,
  },
  {
    title: "Digital Marketing",
    description: "Performance campaigns across search, social and paid media.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Consultancy",
    description: "Strategic guidance on AI adoption and technology roadmaps.",
    href: "/services/consultancy",
    icon: MessagesSquare,
  },
  {
    title: "Website Development",
    description: "High-performance, conversion-focused websites end to end.",
    href: "/services/website-development",
    icon: Globe2,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps from concept to launch.",
    href: "/services/mobile-apps",
    icon: Smartphone,
  },
];

export const SERVICES_HIGHLIGHT = {
  title: "Need something custom?",
  description: "Talk to our team about a tailored training or development engagement.",
  href: "/#contact",
  icon: Rocket,
  cta: "Book a Consultation",
} satisfies MenuItem & { cta: string };
