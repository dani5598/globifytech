import { BeamsBackground } from "@/components/ui/beams-background";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Navbar } from "@/components/nav/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { CourseCategories } from "@/components/sections/course-categories";
import { FeaturedPrograms } from "@/components/sections/featured-programs";
import { LearningExperience } from "@/components/sections/learning-experience";
import { AiLabs } from "@/components/sections/ai-labs";
import { CareerSupport } from "@/components/sections/career-support";
import { LegacyStats } from "@/components/sections/legacy-stats";
import { SuccessStories } from "@/components/sections/success-stories";
import { Instructors } from "@/components/sections/instructors";
import { IndustryPartners } from "@/components/sections/industry-partners";
import { UpcomingEvents } from "@/components/sections/upcoming-events";
import { Faqs } from "@/components/sections/faqs";
import { Contact } from "@/components/sections/contact";
import { Newsletter } from "@/components/sections/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <BeamsBackground />
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <CourseCategories />
        <FeaturedPrograms />
        <LearningExperience />
        <AiLabs />
        <CareerSupport />
        <LegacyStats />
        <SuccessStories />
        <Instructors />
        <IndustryPartners />
        <UpcomingEvents />
        <Faqs />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
