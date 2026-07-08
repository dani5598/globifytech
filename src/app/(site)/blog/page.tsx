import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Megaphone,
  Code2,
  Palette,
  Bot,
  ShoppingBag,
  FileText,
  Download,
  Rss,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs & Resources",
  description:
    "Guides, tutorials and free resources on AI, digital marketing, web development, design and freelancing from the Globify Tech Institute faculty and community.",
  alternates: { canonical: "/blog" },
};

const CATEGORIES = ["All", "AI & Tools", "Marketing", "Development", "Design", "E-Commerce"];

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  icon: LucideIcon;
};

const FEATURED: Post = {
  title: "The 2026 AI Toolkit Every Marketer Should Master",
  excerpt:
    "From prompt-driven ad copy to automated reporting, here are the AI workflows our Digital Marketing faculty use on live client accounts — and how to build them into your own routine.",
  category: "AI & Tools",
  date: "Jul 1, 2026",
  readTime: "9 min read",
  author: "Ayesha Raza",
  icon: Bot,
};

const POSTS: Post[] = [
  {
    title: "How to Build a Freelance Portfolio That Actually Converts",
    excerpt:
      "The projects, case studies and positioning that turn a portfolio into paying clients — with real examples from our graduates.",
    category: "Marketing",
    date: "Jun 24, 2026",
    readTime: "7 min read",
    author: "Ayesha Raza",
    icon: Megaphone,
  },
  {
    title: "React in 2026: What to Learn First (and What to Skip)",
    excerpt:
      "A focused roadmap for beginners breaking into full-stack development without drowning in tooling and hype.",
    category: "Development",
    date: "Jun 18, 2026",
    readTime: "8 min read",
    author: "Bilal Ahmed",
    icon: Code2,
  },
  {
    title: "Color Grading Secrets for Cinematic Reels",
    excerpt:
      "Turn flat phone footage into scroll-stopping short-form video with these grading and pacing techniques.",
    category: "Design",
    date: "Jun 11, 2026",
    readTime: "6 min read",
    author: "Hina Sheikh",
    icon: Palette,
  },
  {
    title: "Product Hunting for TikTok Shop: A Repeatable System",
    excerpt:
      "Stop guessing. Here's the exact framework we teach for finding winning products and validating demand fast.",
    category: "E-Commerce",
    date: "Jun 4, 2026",
    readTime: "10 min read",
    author: "Usman Tariq",
    icon: ShoppingBag,
  },
  {
    title: "Prompt Engineering Basics for Non-Developers",
    excerpt:
      "You don't need to code to get great results from AI. Learn the prompt patterns that work across every model.",
    category: "AI & Tools",
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "Bilal Ahmed",
    icon: Bot,
  },
  {
    title: "From Beginner to Booked: Landing Your First Design Client",
    excerpt:
      "The outreach scripts, pricing and delivery workflow that helped our design grads sign their first paying clients.",
    category: "Design",
    date: "May 21, 2026",
    readTime: "7 min read",
    author: "Hina Sheikh",
    icon: Palette,
  },
];

const RESOURCES = [
  {
    icon: FileText,
    title: "Freelance Proposal Template",
    description: "A ready-to-use proposal doc that has closed thousands in client work.",
  },
  {
    icon: Download,
    title: "AI Prompt Library",
    description: "100+ copy-paste prompts for marketing, design, code and content.",
  },
  {
    icon: BookOpen,
    title: "Career Roadmap Guides",
    description: "Step-by-step learning paths for each of our seven career tracks.",
  },
];

function CategoryHeader({ icon: Icon, category }: { icon: LucideIcon; category: string }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#009DFF]/20 via-[#452054]/20 to-transparent">
      <Icon size={40} className="text-[#7FD3FF]" />
      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF] backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
      <PageHeader
        tag="Blogs & Resources"
        title="Learn something new every week"
        description="Practical guides, tutorials and free downloads on AI, marketing, development, design and freelancing — written by the faculty who teach it."
      />

      {/* Category chips */}
      <Reveal delay={0.26}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                i === 0
                  ? "border-[#009DFF]/50 bg-[#009DFF]/20 text-[#7FD3FF]"
                  : "border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Featured post */}
      <Reveal delay={0.1}>
        <div className="mt-14">
          <GlassCard className="grid grid-cols-1 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#009DFF]/25 via-[#452054]/25 to-transparent">
              <FEATURED.icon size={64} className="text-[#7FD3FF]" />
              <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7FD3FF] backdrop-blur-sm">
                Featured · {FEATURED.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[color:var(--fg)] sm:text-3xl">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                {FEATURED.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[color:var(--muted)]">
                <span>{FEATURED.author}</span>
                <span>{FEATURED.date}</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#009DFF]" />
                  {FEATURED.readTime}
                </span>
              </div>
              <span className="group mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[color:var(--fg)]">
                Read Article
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </GlassCard>
        </div>
      </Reveal>

      {/* Post grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal key={post.title} delay={(i % 3) * 0.06}>
            <GlassCard className="flex h-full flex-col overflow-hidden" glow={false}>
              <CategoryHeader icon={post.icon} category={post.category} />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-lg font-bold leading-snug text-[color:var(--fg)]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/[0.06] pt-5 text-xs text-[color:var(--muted)]">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-[#009DFF]" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Free resources */}
      <div className="mt-28">
        <SectionHeading
          tag="Free Resources"
          title="Downloads and toolkits to move faster"
          description="Grab the templates, prompt libraries and roadmaps our students use every day — no cost, no catch."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {RESOURCES.map((res, i) => (
            <Reveal key={res.title} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col gap-4 p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
                  <res.icon size={20} />
                </span>
                <h3 className="font-heading text-lg font-bold text-[color:var(--fg)]">
                  {res.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {res.description}
                </p>
                <span className="group mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#7FD3FF]">
                  Get it free
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <Reveal delay={0.1}>
        <div className="mt-28 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#009DFF]/10 via-transparent to-[#452054]/20 p-10 text-center sm:p-16">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#009DFF]">
            <Rss size={20} />
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            Never miss a new guide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Join our weekly newsletter for fresh tutorials, free resources and
            early access to workshops.
          </p>
          <div className="mt-8 flex justify-center">
            <LiquidGlassButton href="/contact">Subscribe</LiquidGlassButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
