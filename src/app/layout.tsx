import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { ScrollRail } from "@/components/ui/scroll-rail";
import { ThemeProvider, THEME_NO_FLASH_SCRIPT } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";

// Headings: Montserrat (used bold across the site). Body: Inter.
const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globifytech.com"),
  title: {
    default: "Globify Tech Institute — Learn the Skills That Build Tomorrow",
    template: "%s | Globify Tech Institute",
  },
  description:
    "Globify Tech Institute is a future-ready AI and technology education brand. Master Digital Marketing, Full Stack Web Development, Social Media Marketing, Video Editing, Graphic Designing and TikTok Shop through practical, industry-focused learning.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "digital marketing course",
    "full stack web development course",
    "social media marketing course",
    "video editing course",
    "graphic designing course",
    "tiktok shop course",
    "AI programs",
    "technology institute",
  ],
  openGraph: {
    title: "Globify Tech Institute — Learn the Skills That Build Tomorrow",
    description:
      "Future-ready AI and technology education. Practical, industry-focused learning in Digital Marketing, Full Stack Web Development, Social Media Marketing, Video Editing, Graphic Designing and TikTok Shop Mastery.",
    url: "https://www.globifytech.com",
    siteName: "Globify Tech Institute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globify Tech Institute — Learn the Skills That Build Tomorrow",
    description:
      "Future-ready AI and technology education. Practical, industry-focused learning in Digital Marketing, Full Stack Web Development, Social Media Marketing, Video Editing, Graphic Designing and TikTok Shop Mastery.",
  },
  authors: [{ name: "Globify Tech Institute", url: "https://www.globifytech.com" }],
  creator: "Globify Tech Institute",
  publisher: "Globify Tech Institute",
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_NO_FLASH_SCRIPT }} />
      </head>
      {/* No bg on body: an opaque body background paints over fixed -z-10
          layers (particles/ambient). html carries the page background. */}
      <body className="min-h-full flex flex-col text-[color:var(--fg)] font-body selection:bg-[#009DFF]/40 selection:text-white">
        <JsonLd schema={[organizationSchema(), websiteSchema()]} />
        <ThemeProvider>
          <SmoothScroll />
          <Cursor />
          <ScrollRail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
