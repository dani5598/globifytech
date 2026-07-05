import {
  LayoutDashboard,
  BookOpen,
  Route,
  Video,
  ClipboardList,
  FileQuestion,
  Bot,
  FolderOpen,
  Award,
  Briefcase,
  Trophy,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Bell,
  User,
  Settings,
  LogOut,
  Megaphone,
  Code2,
  Palette,
  Clapperboard,
  ShoppingBag,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Student                                                                    */
/* -------------------------------------------------------------------------- */

export const STUDENT = {
  name: "Muhammad Adnan",
  firstName: "Muhammad Adnan",
  greetingName: "Muhammad Adnan",
  id: "GT-2026-0417",
  level: "Level 6 · Advanced",
  levelShort: "Lvl 6",
  email: "adnan@globifytech.com",
  phone: "+92 300 1234567",
  initials: "MA",
  streak: 24,
  online: true,
};

/* -------------------------------------------------------------------------- */
/*  Sidebar navigation                                                         */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  icon: LucideIcon;
  /** DOM id of the section this item scrolls to. */
  section?: string;
  /** Non-navigational action (opens a popover, logs out, …). */
  action?: "notifications" | "logout";
  badge?: number;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Learn",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, section: "overview" },
      { label: "My Courses", icon: BookOpen, section: "courses" },
      { label: "Learning Path", icon: Route, section: "progress" },
      { label: "Live Classes", icon: Video, section: "schedule", badge: 2 },
      { label: "Assignments", icon: ClipboardList, section: "assignments", badge: 3 },
      { label: "Quizzes & Exams", icon: FileQuestion, section: "quizzes" },
      { label: "AI Study Assistant", icon: Bot, section: "ai-assistant" },
      { label: "Course Resources", icon: FolderOpen, section: "resources" },
      { label: "Certificates", icon: Award, section: "certificates" },
    ],
  },
  {
    title: "Grow",
    items: [
      { label: "Internship Portal", icon: Briefcase, section: "opportunities" },
      { label: "Success Stories", icon: Trophy, section: "success" },
      { label: "Job Opportunities", icon: BriefcaseBusiness, section: "opportunities" },
      { label: "Community", icon: Users, section: "community" },
      { label: "Events & Workshops", icon: CalendarDays, section: "events" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Notifications", icon: Bell, action: "notifications", badge: 5 },
      { label: "Profile", icon: User, section: "profile" },
      { label: "Settings", icon: Settings, section: "settings" },
      { label: "Logout", icon: LogOut, action: "logout" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Stat cards                                                                 */
/* -------------------------------------------------------------------------- */

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  accent: string; // rgb triplet
  delta: string;
};

export const STATS: Stat[] = [
  { label: "Enrolled Courses", value: 8, icon: BookOpen, accent: "0,157,255", delta: "+2 this month" },
  { label: "Completed Courses", value: 3, icon: Award, accent: "127,211,255", delta: "1 in progress" },
  { label: "Certificates Earned", value: 5, icon: Trophy, accent: "255,10,224", delta: "+1 this week" },
  { label: "Learning Hours", value: 164, suffix: "h", icon: Sparkles, accent: "180,120,255", delta: "9.5h this week" },
];

/* -------------------------------------------------------------------------- */
/*  Courses                                                                    */
/* -------------------------------------------------------------------------- */

export type Course = {
  title: string;
  category: string;
  instructor: string;
  progress: number;
  lessonsDone: number;
  lessonsTotal: number;
  next: string;
  eta: string;
  gradient: string;
  icon: LucideIcon;
};

export const COURSES: Course[] = [
  {
    title: "AI Automation & Agents",
    category: "AI & Automation",
    instructor: "Ayesha Raza",
    progress: 82,
    lessonsDone: 41,
    lessonsTotal: 50,
    next: "Module 9 · Building Multi-Agent Flows",
    eta: "Est. 2 weeks left",
    gradient: "from-[#009DFF] to-[#7C3AED]",
    icon: Bot,
  },
  {
    title: "Digital Marketing Mastery",
    category: "Digital Marketing",
    instructor: "Bilal Ahmed",
    progress: 64,
    lessonsDone: 29,
    lessonsTotal: 45,
    next: "Module 6 · Meta Ads Optimization",
    eta: "Est. 4 weeks left",
    gradient: "from-[#FF0AE0] to-[#009DFF]",
    icon: Megaphone,
  },
  {
    title: "Full Stack Web Development",
    category: "Web Development",
    instructor: "Hassan Khan",
    progress: 48,
    lessonsDone: 24,
    lessonsTotal: 60,
    next: "Module 5 · REST & GraphQL APIs",
    eta: "Est. 6 weeks left",
    gradient: "from-[#00E5FF] to-[#009DFF]",
    icon: Code2,
  },
  {
    title: "Graphic Design — Beginner to Pro",
    category: "Graphic Design",
    instructor: "Hina Sheikh",
    progress: 37,
    lessonsDone: 14,
    lessonsTotal: 38,
    next: "Module 4 · Brand Identity Systems",
    eta: "Est. 7 weeks left",
    gradient: "from-[#7C3AED] to-[#FF0AE0]",
    icon: Palette,
  },
  {
    title: "Video Editing & Motion",
    category: "Video Editing",
    instructor: "Usman Tariq",
    progress: 21,
    lessonsDone: 8,
    lessonsTotal: 40,
    next: "Module 3 · Cinematic Color Grading",
    eta: "Est. 9 weeks left",
    gradient: "from-[#009DFF] to-[#00E5FF]",
    icon: Clapperboard,
  },
  {
    title: "Shopify & TikTok Shop",
    category: "Shopify & TikTok Shop",
    instructor: "Sara Malik",
    progress: 12,
    lessonsDone: 4,
    lessonsTotal: 34,
    next: "Module 2 · Store Setup & Themes",
    eta: "Est. 10 weeks left",
    gradient: "from-[#FF0AE0] to-[#7C3AED]",
    icon: ShoppingBag,
  },
];

export const COURSE_CATEGORIES = [
  "AI & Automation",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
  "Web Development",
  "Shopify & TikTok Shop",
  "Freelancing",
  "Amazon VA",
  "SEO",
];

/* -------------------------------------------------------------------------- */
/*  Learning progress / analytics                                             */
/* -------------------------------------------------------------------------- */

export const WEEKLY_HOURS = [
  { label: "Mon", value: 2.5 },
  { label: "Tue", value: 3.2 },
  { label: "Wed", value: 1.8 },
  { label: "Thu", value: 4.1 },
  { label: "Fri", value: 3.6 },
  { label: "Sat", value: 5.4 },
  { label: "Sun", value: 2.2 },
];

export const MONTHLY_PROGRESS = [
  { label: "Feb", value: 28 },
  { label: "Mar", value: 41 },
  { label: "Apr", value: 39 },
  { label: "May", value: 58 },
  { label: "Jun", value: 71 },
  { label: "Jul", value: 86 },
];

export const SKILL_RADAR = [
  { axis: "AI", value: 88 },
  { axis: "Marketing", value: 72 },
  { axis: "Design", value: 64 },
  { axis: "Dev", value: 78 },
  { axis: "Video", value: 51 },
  { axis: "SEO", value: 69 },
];

export const COMPLETION_DONUT = [
  { label: "Completed", value: 3, color: "#009DFF" },
  { label: "In progress", value: 5, color: "#7FD3FF" },
  { label: "Not started", value: 2, color: "rgba(255,255,255,0.12)" },
];

export const ATTENDANCE = 94;

/* -------------------------------------------------------------------------- */
/*  Today's schedule                                                          */
/* -------------------------------------------------------------------------- */

export type ScheduleItem = {
  time: string;
  title: string;
  tutor: string;
  type: "Live" | "Lab" | "Workshop" | "Q&A";
  live: boolean;
  accent: string;
};

export const SCHEDULE: ScheduleItem[] = [
  { time: "9:00 AM", title: "Digital Marketing — Funnels", tutor: "Bilal Ahmed", type: "Live", live: true, accent: "255,10,224" },
  { time: "11:30 AM", title: "AI Automation — Agent Design", tutor: "Ayesha Raza", type: "Lab", live: false, accent: "0,157,255" },
  { time: "2:00 PM", title: "Graphic Design — Critique", tutor: "Hina Sheikh", type: "Workshop", live: false, accent: "124,58,237" },
  { time: "5:00 PM", title: "Live Q&A — Career Path", tutor: "Career Team", type: "Q&A", live: false, accent: "0,229,255" },
];

/* -------------------------------------------------------------------------- */
/*  Assignments (kanban)                                                       */
/* -------------------------------------------------------------------------- */

export type AssignmentStatus = "Pending" | "Submitted" | "Reviewed" | "Completed";

export type Assignment = {
  title: string;
  course: string;
  deadline: string;
  marks: string;
  feedback?: string;
  status: AssignmentStatus;
};

export const ASSIGNMENTS: Assignment[] = [
  { title: "Multi-agent workflow build", course: "AI Automation", deadline: "Due in 2 days", marks: "— / 100", status: "Pending" },
  { title: "Keyword & SEO audit", course: "Digital Marketing", deadline: "Due in 5 days", marks: "— / 100", status: "Pending" },
  { title: "REST API mini-project", course: "Web Development", deadline: "Submitted · Jul 3", marks: "Under review", status: "Submitted" },
  { title: "Landing page redesign", course: "Graphic Design", deadline: "Reviewed · Jul 1", marks: "88 / 100", feedback: "Great hierarchy — tighten spacing.", status: "Reviewed" },
  { title: "Brand identity system", course: "Graphic Design", deadline: "Completed · Jun 24", marks: "95 / 100", feedback: "Portfolio-ready work. 🔥", status: "Completed" },
  { title: "Meta Ads campaign plan", course: "Digital Marketing", deadline: "Completed · Jun 18", marks: "91 / 100", feedback: "Sharp targeting strategy.", status: "Completed" },
];

export const ASSIGNMENT_COLUMNS: { status: AssignmentStatus; accent: string }[] = [
  { status: "Pending", accent: "255,176,32" },
  { status: "Submitted", accent: "0,157,255" },
  { status: "Reviewed", accent: "124,58,237" },
  { status: "Completed", accent: "34,197,94" },
];

/* -------------------------------------------------------------------------- */
/*  Quizzes & Exams                                                            */
/* -------------------------------------------------------------------------- */

export const UPCOMING_QUIZ = {
  title: "AI Automation — Mid-term Exam",
  course: "AI & Automation",
  questions: 40,
  duration: "45 min",
  // relative countdown target used by the client timer
  startsInSeconds: 2 * 24 * 3600 + 6 * 3600 + 32 * 60,
};

export const QUIZ_RESULTS = [
  { title: "Meta Ads Fundamentals", score: 92, total: 100, date: "Jul 2" },
  { title: "JavaScript Essentials", score: 84, total: 100, date: "Jun 27" },
  { title: "Design Principles", score: 88, total: 100, date: "Jun 21" },
];

export const LEADERBOARD = [
  { rank: 1, name: "Zainab Ali", points: 4820, you: false },
  { rank: 2, name: "Muhammad Adnan", points: 4610, you: true },
  { rank: 3, name: "Omar Farooq", points: 4390, you: false },
  { rank: 4, name: "Fatima Noor", points: 4120, you: false },
];

export const QUIZ_AVERAGE = 88;

/* -------------------------------------------------------------------------- */
/*  AI study assistant                                                         */
/* -------------------------------------------------------------------------- */

export const AI_CAPABILITIES = [
  "Ask Questions",
  "Summarize Lessons",
  "Generate Notes",
  "Create Quiz",
  "Translate Content",
  "Explain Difficult Topics",
  "Generate Practice Questions",
];

export type ChatMessage = { role: "ai" | "user"; text: string };

export const AI_SEED_CHAT: ChatMessage[] = [
  { role: "ai", text: "Hi Adnan 👋 I'm your AI study assistant. Ask me anything about your courses, or pick a shortcut below." },
  { role: "user", text: "Summarize today's AI Automation lesson." },
  {
    role: "ai",
    text: "Today covered multi-agent orchestration: how a planner agent delegates sub-tasks to specialist agents, shares state, and merges results. Key idea — keep each agent's scope narrow and pass structured context between them. Want practice questions on this?",
  },
];

export const AI_QUICK_REPLIES = [
  "Explain multi-agent flows simply",
  "Generate 5 practice questions",
  "Make notes from this module",
];

/* -------------------------------------------------------------------------- */
/*  Certificates                                                               */
/* -------------------------------------------------------------------------- */

export type Certificate = {
  title: string;
  issued: string;
  credentialId: string;
  gradient: string;
  verified: boolean;
};

export const CERTIFICATES: Certificate[] = [
  { title: "Digital Marketing Mastery", issued: "Jun 2026", credentialId: "GT-DMM-8842", gradient: "from-[#FF0AE0] to-[#009DFF]", verified: true },
  { title: "Graphic Design Pro", issued: "May 2026", credentialId: "GT-GDP-6410", gradient: "from-[#7C3AED] to-[#FF0AE0]", verified: true },
  { title: "AI Foundations", issued: "Apr 2026", credentialId: "GT-AIF-5127", gradient: "from-[#009DFF] to-[#00E5FF]", verified: true },
  { title: "SEO Specialist", issued: "Mar 2026", credentialId: "GT-SEO-3390", gradient: "from-[#00E5FF] to-[#7C3AED]", verified: true },
  { title: "Freelancing Blueprint", issued: "Feb 2026", credentialId: "GT-FRB-2201", gradient: "from-[#009DFF] to-[#FF0AE0]", verified: true },
];

/* -------------------------------------------------------------------------- */
/*  Internship & Job opportunities                                            */
/* -------------------------------------------------------------------------- */

export type Opportunity = {
  role: string;
  company: string;
  logo: string; // initials
  type: "Internship" | "Remote" | "Full-time";
  salary: string;
  location: string;
  deadline: string;
  accent: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  { role: "AI Automation Intern", company: "Nexlify", logo: "NX", type: "Internship", salary: "$600 / mo", location: "Remote", deadline: "Closes Jul 18", accent: "0,157,255" },
  { role: "Junior Web Developer", company: "Coreframe", logo: "CF", type: "Remote", salary: "$1,400 / mo", location: "Remote", deadline: "Closes Jul 22", accent: "0,229,255" },
  { role: "Social Media Manager", company: "Brightwave", logo: "BW", type: "Full-time", salary: "$1,100 / mo", location: "Lahore, PK", deadline: "Closes Jul 25", accent: "255,10,224" },
  { role: "Motion Designer", company: "Studio Kite", logo: "SK", type: "Remote", salary: "$1,700 / mo", location: "Remote", deadline: "Closes Jul 30", accent: "124,58,237" },
];

/* -------------------------------------------------------------------------- */
/*  Community                                                                  */
/* -------------------------------------------------------------------------- */

export type CommunityPost = {
  author: string;
  initials: string;
  role: string;
  mentor: boolean;
  time: string;
  text: string;
  likes: number;
  comments: number;
  accent: string;
};

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    author: "Fatima Noor",
    initials: "FN",
    role: "Web Dev · Cohort 12",
    mentor: false,
    time: "12m ago",
    text: "Finally deployed my first full-stack app 🎉 Any tips for optimizing API response times?",
    likes: 34,
    comments: 8,
    accent: "0,157,255",
  },
  {
    author: "Ayesha Raza",
    initials: "AR",
    role: "AI Instructor · Mentor",
    mentor: true,
    time: "34m ago",
    text: "Great question! Cache aggressively, paginate, and profile your slowest queries first. I'll drop a resource in #web-dev.",
    likes: 51,
    comments: 12,
    accent: "255,10,224",
  },
  {
    author: "Omar Farooq",
    initials: "OF",
    role: "Design · Cohort 11",
    mentor: false,
    time: "1h ago",
    text: "Sharing my brand identity project for feedback — went all-in on the AI moodboard workflow we learned. Thoughts?",
    likes: 28,
    comments: 15,
    accent: "124,58,237",
  },
];

/* -------------------------------------------------------------------------- */
/*  Success stories                                                            */
/* -------------------------------------------------------------------------- */

export type Story = {
  name: string;
  initials: string;
  role: string;
  company: string;
  package: string;
  quote: string;
  accent: string;
};

export const SUCCESS_STORIES: Story[] = [
  {
    name: "Hamza Iqbal",
    initials: "HI",
    role: "AI Engineer",
    company: "Nexlify",
    package: "$42k / yr",
    quote: "Went from zero code to shipping AI agents in 6 months. The internship portal landed me the interview.",
    accent: "0,157,255",
  },
  {
    name: "Mariam Yousaf",
    initials: "MY",
    role: "Social Media Lead",
    company: "Brightwave",
    package: "$28k / yr",
    quote: "The Digital Marketing track plus real client projects made my portfolio impossible to ignore.",
    accent: "255,10,224",
  },
  {
    name: "Bilal Sadiq",
    initials: "BS",
    role: "Frontend Developer",
    company: "Coreframe",
    package: "$36k / yr",
    quote: "Mentors reviewed every project. That feedback loop is why I got hired remotely from Lahore.",
    accent: "124,58,237",
  },
];

/* -------------------------------------------------------------------------- */
/*  Events                                                                     */
/* -------------------------------------------------------------------------- */

export type EventItem = {
  title: string;
  kind: "Bootcamp" | "Career" | "Hackathon" | "Seminar";
  date: string;
  startsInSeconds: number;
  accent: string;
};

export const EVENTS: EventItem[] = [
  { title: "AI Bootcamp: Build an Agent in a Day", kind: "Bootcamp", date: "Jul 12 · 10:00 AM", startsInSeconds: 6 * 24 * 3600 + 4 * 3600, accent: "0,157,255" },
  { title: "Career Session: Cracking Remote Jobs", kind: "Career", date: "Jul 16 · 6:00 PM", startsInSeconds: 10 * 24 * 3600, accent: "255,10,224" },
  { title: "Globify Hackathon 2026", kind: "Hackathon", date: "Jul 20 · 9:00 AM", startsInSeconds: 15 * 24 * 3600, accent: "124,58,237" },
  { title: "Seminar: Personal Branding on LinkedIn", kind: "Seminar", date: "Jul 24 · 5:00 PM", startsInSeconds: 19 * 24 * 3600, accent: "0,229,255" },
];

/* -------------------------------------------------------------------------- */
/*  Notifications & messages (topbar popovers)                                */
/* -------------------------------------------------------------------------- */

export const NOTIFICATIONS = [
  { title: "Your assignment was reviewed", meta: "Landing page redesign · 88/100", time: "10m", accent: "124,58,237" },
  { title: "Live class starts in 30 min", meta: "AI Automation — Agent Design", time: "28m", accent: "0,157,255" },
  { title: "New job matches your profile", meta: "Junior Web Developer · Coreframe", time: "1h", accent: "0,229,255" },
  { title: "You earned a new badge", meta: "24-day learning streak 🔥", time: "3h", accent: "255,10,224" },
  { title: "Mentor replied to your post", meta: "Ayesha Raza in #web-dev", time: "5h", accent: "255,176,32" },
];

export const MESSAGES = [
  { name: "Ayesha Raza", initials: "AR", text: "Nice progress on the agent flow!", time: "5m", accent: "255,10,224", unread: true },
  { name: "Career Team", initials: "CT", text: "We shortlisted you for Nexlify.", time: "1h", accent: "0,157,255", unread: true },
  { name: "Hina Sheikh", initials: "HS", text: "Feedback on your brand system is up.", time: "2h", accent: "124,58,237", unread: false },
];

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const PROFILE_SKILLS = [
  "Prompt Engineering",
  "Meta Ads",
  "React",
  "Figma",
  "SEO",
  "Copywriting",
  "Automation",
  "Branding",
];

export const PROFILE_SOCIALS = ["LinkedIn", "GitHub", "Behance", "X"];

export const BADGES = [
  { label: "Fast Learner", accent: "0,157,255" },
  { label: "Top 10% Cohort", accent: "255,10,224" },
  { label: "Streak Master", accent: "255,176,32" },
  { label: "Project Star", accent: "124,58,237" },
  { label: "Helpful Peer", accent: "0,229,255" },
  { label: "Quiz Champion", accent: "34,197,94" },
];

export const ACHIEVEMENTS = [
  "24-day learning streak",
  "5 certificates earned",
  "Ranked #2 in cohort",
  "12 assignments completed",
];

/* -------------------------------------------------------------------------- */
/*  Settings                                                                   */
/* -------------------------------------------------------------------------- */

export type SettingRow = {
  label: string;
  description: string;
  kind: "toggle" | "select" | "action";
  value?: boolean;
  options?: string[];
  actionLabel?: string;
};

export const SETTINGS_GROUPS: { title: string; rows: SettingRow[] }[] = [
  {
    title: "Preferences",
    rows: [
      { label: "Language", description: "Interface & captions language", kind: "select", options: ["English", "Urdu", "Arabic"] },
      { label: "Theme", description: "Switch between dark and light", kind: "select", options: ["Dark", "Light"] },
      { label: "Email notifications", description: "Class reminders & results", kind: "toggle", value: true },
      { label: "Push notifications", description: "Real-time alerts on device", kind: "toggle", value: true },
    ],
  },
  {
    title: "Security & Privacy",
    rows: [
      { label: "Two-Factor Authentication", description: "Extra layer on every login", kind: "toggle", value: true },
      { label: "Profile visibility", description: "Who can see your achievements", kind: "select", options: ["Cohort", "Public", "Private"] },
      { label: "Connected accounts", description: "Google, GitHub, LinkedIn", kind: "action", actionLabel: "Manage" },
      { label: "Change password", description: "Last changed 2 months ago", kind: "action", actionLabel: "Update" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Search suggestions                                                         */
/* -------------------------------------------------------------------------- */

export const SEARCH_ICON = Search;

export const FOOTER_LINKS = ["Privacy Policy", "Terms", "Support", "Contact"];
