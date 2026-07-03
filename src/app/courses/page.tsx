import { Suspense } from "react";
import type { Metadata } from "next";
import { CoursesList } from "./CoursesList";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore all Globify Tech Institute programs — Digital Marketing with AI, Full Stack Web Development with AI, Social Media Marketing with AI, Video Editing, Graphic Designing, TikTok Shop Mastery and the Master Program.",
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="flex h-64 items-center justify-center text-[#A0AEC0]">Loading courses...</div>}>
      <CoursesList />
    </Suspense>
  );
}
