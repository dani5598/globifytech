import { programs, faqs, instructors } from "@/data/content";

/**
 * Single source of truth for site-wide SEO facts. Keep this in sync with the
 * real business details (contact page + footer). Social profiles are omitted
 * from `sameAs` until real, verified URLs exist — pointing schema at `#` or a
 * wrong profile hurts entity resolution rather than helping it.
 */
export const SITE = {
  name: "Globify Tech Institute",
  shortName: "Globify Tech",
  url: "https://www.globifytech.com",
  logo: "https://www.globifytech.com/Globify-Logo-PNG.png",
  description:
    "Globify Tech Institute is a future-ready AI and technology education brand. Master Digital Marketing, Full Stack Web Development, Social Media Marketing, Video Editing, Graphic Designing and TikTok Shop through practical, industry-focused learning.",
  email: "info@globifytech.com",
  telephone: "+923391110171",
  address: {
    streetAddress:
      "Office no 1, 1st floor, Rafaqat Ali Plaza, Main Chen One Rd, Pilot Ground Block B People's Colony No 1",
    addressLocality: "Faisalabad",
    postalCode: "38000",
    addressCountry: "PK",
  },
  // Real, verified social profiles only. Fill these in once live, then they
  // feed the Organization `sameAs` and strengthen off-page entity signals.
  sameAs: [] as string[],
} as const;

/** Absolute URL for a site-relative path (`/about` -> `https://.../about`). */
export function absoluteUrl(path = "/"): string {
  if (path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type JsonLd = Record<string, unknown>;

/**
 * EducationalOrganization — the brand's knowledge-graph anchor. Rendered once,
 * site-wide, in the root layout. Every other node references it via `@id`.
 */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Organization"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
    },
    image: SITE.logo,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "admissions",
      email: SITE.email,
      telephone: SITE.telephone,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Urdu"],
    },
    ...(SITE.sameAs.length > 0 ? { sameAs: SITE.sameAs } : {}),
  };
}

/** WebSite node — ties pages together and declares the publisher entity. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en",
  };
}

type Program = (typeof programs)[number];

/** Course rich-result schema for a single program. */
export function courseSchema(program: Program): JsonLd {
  const instructor = instructors.find((i) => i.name === program.instructor);
  // The Master Program (and any future Advanced track) blends online + on-site.
  const isBlended =
    program.slug === "master-program" ||
    (program.difficulty as string) === "Advanced";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE.url}/courses/${program.slug}#course`,
    name: program.title,
    description: program.description,
    url: absoluteUrl(`/courses/${program.slug}`),
    image: program.image,
    provider: { "@id": `${SITE.url}/#organization` },
    educationalLevel: program.difficulty,
    teaches: [...program.curriculum],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: isBlended ? "Blended" : "Online",
      courseWorkload: program.duration,
      ...(instructor
        ? {
            instructor: {
              "@type": "Person",
              name: instructor.name,
              jobTitle: instructor.role,
              description: instructor.bio,
            },
          }
        : {}),
    },
  };
}

/** ItemList of all courses for the /courses hub page. */
export function courseListSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/courses#itemlist`,
    name: "Globify Tech Institute Programs",
    itemListElement: programs.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: program.title,
      url: absoluteUrl(`/courses/${program.slug}`),
    })),
  };
}

/** FAQPage schema from a list of Q&A pairs. */
export function faqPageSchema(
  items: ReadonlyArray<{ question: string; answer: string }> = faqs
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/faq#faqpage`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList from ordered `{ name, path }` crumbs. Home is prepended
 * automatically, so callers pass only the trail beneath it.
 */
export function breadcrumbSchema(
  trail: ReadonlyArray<{ name: string; path: string }>
): JsonLd {
  const crumbs = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
