import { OverviewSection } from "@/components/dashboard/sections/overview";
import { MyCoursesSection } from "@/components/dashboard/sections/my-courses";
import { LearningProgressSection } from "@/components/dashboard/sections/learning-progress";
import { TodaysScheduleSection } from "@/components/dashboard/sections/todays-schedule";
import { AssignmentsSection } from "@/components/dashboard/sections/assignments";
import { QuizzesSection } from "@/components/dashboard/sections/quizzes";
import { AIAssistantSection } from "@/components/dashboard/sections/ai-assistant";
import { CourseResourcesSection } from "@/components/dashboard/sections/course-resources";
import { CertificatesSection } from "@/components/dashboard/sections/certificates";
import { OpportunitiesSection } from "@/components/dashboard/sections/opportunities";
import { CommunitySection } from "@/components/dashboard/sections/community";
import { SuccessStoriesSection } from "@/components/dashboard/sections/success-stories";
import { EventsSection } from "@/components/dashboard/sections/events";
import { ProfileSection } from "@/components/dashboard/sections/profile";
import { SettingsSection } from "@/components/dashboard/sections/settings";

export default function DashboardPage() {
  return (
    <>
      <OverviewSection />
      <MyCoursesSection />
      <LearningProgressSection />
      <TodaysScheduleSection />
      <AssignmentsSection />
      <QuizzesSection />
      <AIAssistantSection />
      <CourseResourcesSection />
      <CertificatesSection />
      <OpportunitiesSection />
      <CommunitySection />
      <SuccessStoriesSection />
      <EventsSection />
      <ProfileSection />
      <SettingsSection />
    </>
  );
}
