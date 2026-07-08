import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";
import { programs } from "@/data/content";

const FOOTER_LINKS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Programs",
    links: programs
      .slice(0, 4)
      .map((program) => ({ label: program.title, href: `/courses/${program.slug}` })),
  },
  {
    heading: "Institute",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Events & Workshops", href: "/events" },
      { label: "Career Services", href: "/career-services" },
      { label: "Blogs & Resources", href: "/blog" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Admissions", href: "/admissions" },
      { label: "Enroll Now", href: "/enroll" },
      { label: "Student Dashboard", href: "/student-dashboard" },
      { label: "Instructor Dashboard", href: "/instructor-dashboard" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const SOCIALS = [
  { icon: LinkedInIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#190520] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="onDark" />
            <p className="max-w-xs text-sm leading-relaxed text-[#A0AEC0]">
              A future-ready AI and technology institute building the
              engineers, analysts, and builders of tomorrow.
            </p>
            <div className="mt-2 flex items-center gap-3">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  data-cursor-hover
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#A0AEC0] transition-colors hover:border-[#009DFF]/40 hover:text-[#7FD3FF]"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-cursor-hover
                      className="text-sm text-[#A0AEC0] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-[#A0AEC0]/70 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Globify Tech Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" data-cursor-hover className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" data-cursor-hover className="hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
