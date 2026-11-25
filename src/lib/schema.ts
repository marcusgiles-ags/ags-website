/**
 * Centralized Schema.org / JSON-LD builders for Asia Golf Specialists (AGS).
 *
 * Single Source of Truth for:
 *  - Canonical TravelAgency entity (`#organization`) — emitted once globally in `src/app/layout.tsx` (in `<body>`, NEVER `<head>`).
 *  - Canonical Founder Person entity (`#marcus-giles`).
 *  - Consistent, non-conflicting reference objects for publisher / provider / author / seller slots so
 *    Google Rich Results `LocalBusiness` validation passes with 0 errors AND JSON-LD graph merging produces
 *    zero conflicting properties or duplicate `AggregateRating` nodes.
 */

export const SITE_URL = "https://www.asiagolfspecialists.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#marcus-giles`;

export const CANONICAL_ORG_IMAGE = `${SITE_URL}/images/brand-library/logos/ags-logo-transparent.webp`;
export const CANONICAL_ORG_LOGO = `${SITE_URL}/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp`;
export const CANONICAL_ORG_PRICE_RANGE = "$$$";

export const CANONICAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "27 Nguyen Phan Vinh",
  addressLocality: "Hoi An",
  addressRegion: "Da Nang",
  postalCode: "550000",
  addressCountry: "VN",
} as const;

export const CANONICAL_ORG_SAME_AS = [
  "https://www.linkedin.com/company/asia-golf-specialists/",
  "https://www.instagram.com/asiagolfspecialists/",
  "https://www.facebook.com/asiagolfspecialists/",
  "https://www.google.com/maps/place/Asia+Golf+Specialists/@14.5027506,103.509948,3779908m/data=!3m1!1e3!4m6!3m5!1s0x8bc99bf190000767:0x9a7594b1b8f477a2!8m2!3d14.5027506!4d103.509948!16s%2Fg%2F11nj0hlmqy",
  "https://share.google/R7EjdnCG1r726lVVz",
  "https://www.google.com/search?kgmid=/g/11nj0hlmqy",
] as const;

/**
 * Full canonical Person definition for Founder & Managing Director Marcus Giles.
 * Emitted inside the root `TravelAgency.founder` node in `src/app/layout.tsx`.
 */
export function buildFounderEntity() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Marcus Giles",
    jobTitle: "Founder & Managing Director",
    url: `${SITE_URL}/about/#founder`,
    sameAs: ["https://www.linkedin.com/in/marcus-giles-golf/"],
    alumniOf: [
      { "@type": "Organization", name: "13th Beach Golf Links" },
      { "@type": "Organization", name: "Ba Na Hills Golf Club" },
      { "@type": "Organization", name: "Asian Golf Industry Federation (AGIF)" },
    ],
  };
}

/**
 * Lightweight, conflict-free Author reference to Marcus Giles (`#marcus-giles`).
 * Includes required Rich Results properties (`@type`, `name`, `url`) while preserving exact identity with the canonical founder node.
 */
export function buildFounderRef(curatorName?: string) {
  const name =
    !curatorName || /AGS .*Team/i.test(curatorName)
      ? "Marcus Giles"
      : curatorName;

  if (name === "Marcus Giles") {
    return {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Marcus Giles",
      jobTitle: "Founder & Managing Director",
      url: `${SITE_URL}/about/#founder`,
    };
  }

  return {
    "@type": "Person",
    name,
    url: `${SITE_URL}/about/#founder`,
  };
}

/**
 * Canonical global TravelAgency entity emitted once in `src/app/layout.tsx` (`<body>`).
 *
 * Intentionally omits first-party `aggregateRating` and `review` arrays to comply with
 * Google's Review Snippet guidelines (no self-serving LocalBusiness/TravelAgency ratings
 * and no invisible reviews marked up on non-review pages). Verified Google Reviews are
 * displayed visibly on `/` and `/about/` and linked via `sameAs` (`kgmid=/g/11nj0hlmqy`).
 */
export function buildCanonicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: "Asia Golf Specialists",
    alternateName: "AGS",
    url: `${SITE_URL}/`,
    description:
      "Asia Golf Specialists (AGS) is a boutique, expat-owned luxury golf tour operator headquartered in Hoi An / Da Nang, Vietnam, engineering bespoke championship golf itineraries across Vietnam, Thailand, and Cambodia.",
    image: CANONICAL_ORG_IMAGE,
    logo: {
      "@type": "ImageObject",
      url: CANONICAL_ORG_LOGO,
    },
    telephone: "+84 935 601 099",
    email: "concierge@asiagolfspecialists.com",
    priceRange: CANONICAL_ORG_PRICE_RANGE,
    address: CANONICAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.9038,
      longitude: 108.3361,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84 935 601 099",
      email: "concierge@asiagolfspecialists.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Luxury Golf Travel",
      "Southeast Asia Golf Tours",
      "Championship Golf Courses",
      "Vietnam Golf Packages",
      "Thailand Golf Vacations",
      "Cambodia Golf Holidays",
    ],
    sameAs: [...CANONICAL_ORG_SAME_AS],
    founder: buildFounderEntity(),
    areaServed: ["Vietnam", "Thailand", "Cambodia", "Australia"],
  };
}

/**
 * Pure JSON-LD `@id` reference to the canonical `#organization` node emitted by `RootLayout`.
 * Use inside `@graph` blocks or nested `mainEntity`/`publisher`/`provider` properties where
 * standalone `LocalBusiness` inline fields are not needed.
 */
export function buildOrganizationIdRef() {
  return {
    "@id": ORG_ID,
  };
}

/**
 * Standardised TravelAgency reference with Google Rich Results required `LocalBusiness` fields
 * (`image` + `address`) matching the canonical `layout.tsx` definition identically
 * (zero conflicting `priceRange`, `image`, or `logo` values).
 */
export function buildTravelAgencyRef(options?: { includeLogo?: boolean }) {
  return {
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: "Asia Golf Specialists",
    url: `${SITE_URL}/`,
    image: CANONICAL_ORG_IMAGE,
    priceRange: CANONICAL_ORG_PRICE_RANGE,
    address: CANONICAL_ADDRESS,
    ...(options?.includeLogo
      ? {
          logo: {
            "@type": "ImageObject",
            url: CANONICAL_ORG_LOGO,
          },
        }
      : {}),
  };
}

/**
 * Lightweight Organization publisher reference (for `Article` / `Review` / `CollectionPage`
 * where `@type: "Organization"` avoids unnecessary `LocalBusiness` re-validation while
 * staying anchored to `#organization`).
 */
export function buildPublisherRef() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Asia Golf Specialists",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: CANONICAL_ORG_LOGO,
    },
  };
}

export interface BreadcrumbSchemaItem {
  name: string;
  item: string;
}

export function buildBreadcrumbList(items: BreadcrumbSchemaItem[], includeContext = false) {
  return {
    ...(includeContext ? { "@context": "https://schema.org" } : {}),
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.endsWith("/") ? crumb.item : `${crumb.item}/`,
    })),
  };
}

export interface FaqSchemaItem {
  q: string;
  a: string;
}

export function buildFaqPage(faqs: FaqSchemaItem[], includeContext = false) {
  return {
    ...(includeContext ? { "@context": "https://schema.org" } : {}),
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
