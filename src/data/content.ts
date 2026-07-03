export const programs = [
  {
    slug: "digital-marketing-with-ai",
    title: "Digital Marketing with AI",
    icon: "DM",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Plan, launch and optimize AI-assisted marketing campaigns across Meta Ads, SEO and email with real client projects.",
    difficulty: "Beginner",
    duration: "3 Months",
    instructor: "Ayesha Raza",
    tag: "Most Popular",
    curriculum: [
      "AI-Powered Marketing Tools",
      "Meta Ads (Facebook & Instagram)",
      "AI Content Creation",
      "Campaign Planning & Management",
      "SEO Fundamentals",
      "Email Marketing",
      "Lead Generation",
      "Freelancing Essentials",
      "Client Communication",
      "Live Practical Projects",
      "Professional Certificate",
    ],
  },
  {
    slug: "full-stack-web-development-with-ai",
    title: "Full Stack Web Development with AI",
    icon: "WD",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Build and deploy production-grade web apps with React, Node.js and AI coding assistants from a single curriculum.",
    difficulty: "Intermediate",
    duration: "3 Months",
    instructor: "Bilal Ahmed",
    tag: "High Demand",
    curriculum: [
      "HTML5, CSS3 & JavaScript",
      "React.js",
      "Node.js & Express.js",
      "Database Management (MongoDB/MySQL)",
      "REST APIs",
      "Authentication & Security",
      "AI Coding Assistants",
      "Git & GitHub",
      "Live Industry Projects",
      "Portfolio Development",
      "Website Deployment",
      "Professional Certificate",
    ],
  },
  {
    slug: "social-media-marketing-with-ai",
    title: "Social Media Marketing with AI",
    icon: "SM",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Grow and monetize brand pages with AI content workflows, short-form video strategy and performance-driven Meta Ads.",
    difficulty: "Beginner",
    duration: "1 Month",
    instructor: "Usman Tariq",
    tag: "Fast Track",
    curriculum: [
      "Social Media Growth Strategies",
      "AI Content Creation",
      "Instagram & Facebook Branding",
      "Short-Form Video Strategy",
      "Canva & AI Design Tools",
      "Meta Ads (Beginner to Pro)",
      "Audience Targeting",
      "Analytics & Performance Tracking",
      "Personal Branding",
      "Professional Certificate",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing (Beginner to Pro)",
    icon: "VE",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master cinematic editing, color grading and Reels/Shorts production across Premiere Pro, DaVinci Resolve and CapCut.",
    difficulty: "Beginner",
    duration: "2 Months",
    instructor: "Hina Sheikh",
    tag: "Creative Track",
    curriculum: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "CapCut Professional Workflow",
      "Motion Graphics Basics",
      "Color Correction & Color Grading",
      "Audio Editing & Enhancement",
      "YouTube Video Editing",
      "Reels & Shorts Production",
      "Cinematic Editing Techniques",
      "Portfolio Projects",
      "Professional Certificate",
    ],
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing (Beginner to Pro)",
    icon: "GD",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Design brand identities, social creatives and packaging with Photoshop, Illustrator, Canva Pro and AI design tools.",
    difficulty: "Beginner",
    duration: "2 Months",
    instructor: "Hina Sheikh",
    tag: "Creative Track",
    curriculum: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva Pro Workflow",
      "AI Design Tools",
      "Logo Design",
      "Brand Identity Design",
      "Social Media Creatives",
      "Print Media Design",
      "Packaging Design",
      "Portfolio Development",
      "Professional Certificate",
    ],
  },
  {
    slug: "tiktok-shop-mastery",
    title: "TikTok Shop Mastery",
    icon: "TS",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
    description:
      "Launch and scale a TikTok Shop storefront with product hunting, affiliate marketing and paid growth tactics.",
    difficulty: "Beginner",
    duration: "1 Month",
    instructor: "Usman Tariq",
    tag: "New Cohort",
    curriculum: [
      "TikTok Shop Setup",
      "Product Hunting",
      "Store Optimization",
      "Product Listing",
      "Affiliate Marketing",
      "Organic Growth Strategies",
      "Paid Advertising",
      "Order Management",
      "Scaling Techniques",
      "Real Case Studies",
      "Professional Certificate",
    ],
  },
  {
    slug: "master-program",
    title: "Master Program – AI Designing, Development & Digital Marketing",
    icon: "MP",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Our flagship, agency-style track combining design, development and marketing with a 3-month internship for top performers.",
    difficulty: "Advanced",
    duration: "3 Months + 3 Months Internship",
    instructor: "Ayesha Raza",
    tag: "Flagship Program",
    curriculum: [
      "AI Graphic Designing",
      "Digital Marketing System",
      "Full Stack Web Development",
      "Business Automation with AI",
      "Website Development",
      "Social Media Marketing",
      "Meta Ads & Performance Marketing",
      "Client Acquisition & Communication",
      "Agency Workflow",
      "Freelancing & International Marketplaces",
      "Real Agency-Level Projects",
      "Portfolio Development",
      "Career Guidance",
      "Internship Opportunity for Top Students",
      "Professional Certificate",
    ],
  },
] as const;

export const courseCategories = [
  {
    label: "Digital Marketing",
    icon: "Megaphone",
    count: programs.filter((p) => p.slug.includes("marketing")).length,
  },
  {
    label: "Web Development",
    icon: "Code2",
    count: programs.filter((p) => p.slug.includes("web-development")).length,
  },
  {
    label: "Creative & Video",
    icon: "Palette",
    count: programs.filter(
      (p) => p.slug === "video-editing" || p.slug === "graphic-designing"
    ).length,
  },
  {
    label: "E-Commerce",
    icon: "ShoppingBag",
    count: programs.filter((p) => p.slug.includes("tiktok-shop")).length,
  },
  {
    label: "Master Program",
    icon: "GraduationCap",
    count: programs.filter((p) => p.slug === "master-program").length,
  },
] as const;

export const stats = [
  { label: "Career Tracks", value: programs.length, suffix: "" },
  { label: "Graduates Placed", value: 1200, suffix: "+" },
  { label: "Industry Partners", value: 40, suffix: "+" },
  { label: "Job Placement Rate", value: 94, suffix: "%" },
] as const;

export const instructors = [
  {
    name: "Ayesha Raza",
    role: "Head of Digital Marketing",
    bio: "AI-powered growth marketer and former agency lead running performance campaigns for regional and global brands.",
  },
  {
    name: "Bilal Ahmed",
    role: "Lead Full Stack Instructor",
    bio: "Full-stack engineer building AI-assisted development curriculum from real production codebases.",
  },
  {
    name: "Hina Sheikh",
    role: "Creative Design Lead",
    bio: "Award-winning graphic and video creative director mentoring students on brand and motion design.",
  },
  {
    name: "Usman Tariq",
    role: "E-Commerce & Social Growth Lead",
    bio: "TikTok Shop and social commerce strategist who has scaled multiple storefronts to six figures.",
  },
] as const;

export const testimonials = [
  {
    name: "Sana Iqbal",
    role: "Full Stack Developer @ Nimbus Labs",
    quote:
      "The Full Stack Web Development with AI track gave me production experience I couldn't have gotten from a textbook. I was hired before finishing the program.",
  },
  {
    name: "Rohit Malhotra",
    role: "Freelance Digital Marketer",
    quote:
      "Digital Marketing with AI taught me to run Meta Ads and campaigns clients actually pay for — I landed my first retainer client during the course.",
  },
  {
    name: "Emily Zhao",
    role: "Graphic & Video Freelancer",
    quote:
      "The Graphic Designing and Video Editing tracks gave me a portfolio strong enough to go fully freelance within weeks of graduating.",
  },
  {
    name: "Carlos Mendes",
    role: "Master Program Graduate, Agency Founder",
    quote:
      "The Master Program's internship turned into my first agency job, and the agency workflow training is exactly what I use running client accounts today.",
  },
] as const;

export const partners = [
  "Nimbus Labs",
  "Vertex Systems",
  "Fortknight",
  "LoopStack",
  "Quantera",
  "Northwind Cloud",
  "Halo Robotics",
  "Cascade Analytics",
] as const;

export const events = [
  {
    date: "Aug 14, 2026",
    title: "Digital Marketing with AI Info Session",
    type: "Campus + Virtual",
    description:
      "Preview the AI marketing tools, Meta Ads labs and live campaign projects in the Digital Marketing with AI track.",
  },
  {
    date: "Aug 28, 2026",
    title: "Full Stack Web Development Demo Day",
    type: "Virtual",
    description:
      "Watch current students present and deploy live projects built with React, Node.js and AI coding assistants.",
  },
  {
    date: "Sep 09, 2026",
    title: "TikTok Shop Mastery Live Workshop",
    type: "Virtual",
    description:
      "A hands-on walkthrough of TikTok Shop setup, product hunting and scaling taught by our e-commerce faculty.",
  },
  {
    date: "Sep 21, 2026",
    title: "Admissions Deadline — New Cohort",
    type: "Deadline",
    description:
      "Final date to submit applications for the upcoming cohort across all seven programs.",
  },
] as const;

export const faqs = [
  {
    question: "Do I need prior experience to apply?",
    answer:
      "No. Most of our programs are designed for first-time learners, while Full Stack Web Development and the Master Program assume some foundational comfort with computers. Every applicant completes a short readiness assessment so we can place you correctly.",
  },
  {
    question: "Are classes live or self-paced?",
    answer:
      "Programs combine live instructor-led sessions with self-paced lab work, so you get real-time mentorship alongside the flexibility to practice on your own schedule.",
  },
  {
    question: "What kind of career support is included?",
    answer:
      "Every student receives portfolio reviews, mock interviews, freelancing guidance and access to our industry partner network from week one through graduation and beyond.",
  },
  {
    question: "Will I receive a certificate on completion?",
    answer:
      "Yes. Graduates receive an industry-recognized Globify Tech Institute certificate, and the Master Program includes an internship opportunity for top-performing students.",
  },
  {
    question: "Can I switch tracks after enrolling?",
    answer:
      "Yes, within the first week of a cohort you can switch tracks with your admissions advisor at no additional cost, provided seats are available.",
  },
] as const;
