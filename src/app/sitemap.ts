import type { MetadataRoute } from "next";
import { programs } from "@/data/content";
import { SITE } from "@/lib/seo";

// Required for `output: "export"` — emit a static sitemap.xml at build time.
export const dynamic = "force-static";

const BASE_URL = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/courses`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/admissions`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/enroll`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/success-stories`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/career-services`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/student-dashboard`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/instructor-dashboard`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${BASE_URL}/courses/${program.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
