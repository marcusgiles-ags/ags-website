import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactCompiler: true,
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      {
        source: "/proposals/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/trade-portal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/agent-portal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '<https://www.asiagolfspecialists.com/llms.txt>; rel="llms-txt", <https://www.asiagolfspecialists.com/llms-full.txt>; rel="llms-full-txt"',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/agent-portal/tours/the-central-coast-classic/",
        destination: "/trade-portal/tours/the-central-coast-classic-7k9p4m/",
        permanent: false,
      },
      {
        source: "/agent-portal/tours/hoi-an-beachfront-bliss/",
        destination: "/trade-portal/tours/hoi-an-championship-week-8x2b5q/",
        permanent: false,
      },
      {
        source: "/agent-portal/tours/hoi-an-championship-week/",
        destination: "/trade-portal/tours/hoi-an-championship-week-8x2b5q/",
        permanent: false,
      },
      {
        source: "/agent-portal/",
        destination: "/trade-portal/",
        permanent: false,
      },
      {
        source: "/accommodations/vietnam/hoiana-resort-suites/",
        destination: "/accommodations/vietnam/new-world-hoiana/",
        permanent: true,
      },
      {
        source: "/accommodations/vietnam/hoiana-resort-suites",
        destination: "/accommodations/vietnam/new-world-hoiana/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-12-man-group-luxury-10-day/",
        destination: "/packages/da-nang-luxury-villa-sanctuary/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-12-man-group-luxury-10-day",
        destination: "/packages/da-nang-luxury-villa-sanctuary/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-couples-pure-7-day/",
        destination: "/packages/da-nang-championship-links/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-couples-pure-7-day",
        destination: "/packages/da-nang-championship-links/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-couples-nightlife-7-day/",
        destination: "/packages/da-nang-golf-and-nightlife/",
        permanent: true,
      },
      {
        source: "/packages/da-nang-couples-nightlife-7-day",
        destination: "/packages/da-nang-golf-and-nightlife/",
        permanent: true,
      },
      {
        source: "/proposals/191026MD-Rodney-Ramaswami-Vietnam-Proposal/",
        destination: "/proposals/191026MD-Rodney-Ramasawmy-Vietnam-Proposal/",
        permanent: true,
      },
      {
        source: "/proposals/191026MD-Rodney-Ramaswami-Vietnam-Proposal",
        destination: "/proposals/191026MD-Rodney-Ramasawmy-Vietnam-Proposal/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/vinpearl-golf-nam-hoi-an",
        destination: "/courses/vietnam/vinpearl-nam-hoi-an/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/vinpearl-golf-nam-hoi-an/",
        destination: "/courses/vietnam/vinpearl-nam-hoi-an/",
        permanent: true,
      },
      {
        source: "/blog/battle-for-best-19th-hole-hua-hin/",
        destination: "/destinations/thailand/battle-for-best-19th-hole-hua-hin/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/black-mountain-vs-banyan-tree/",
        destination: "/destinations/thailand/black-mountain-vs-banyan-tree/",
        permanent: true,
      },
      {
        source: "/blog/cambodia-culinary-mahob-khmer-cooking-class/",
        destination: "/destinations/cambodia/cambodia-culinary-mahob-khmer-cooking-class/",
        permanent: true,
      },
      {
        source: "/courses/cambodia/vattanac-golf-resort/",
        destination: "/courses/cambodia/vattanac/",
        permanent: true,
      },
      {
        source: "/courses/cambodia/vattanac-golf-resort",
        destination: "/courses/cambodia/vattanac/",
        permanent: true,
      },
      {
        source: "/cdn-cgi/l/email-protection",
        destination: "/",
        permanent: true,
      },
      {
        source: "/courses/cambodia/chhun-on-palm/",
        destination: "/courses/cambodia/chhun-on-golf-resort/",
        permanent: true,
      },
      {
        source: "/courses/cambodia/chhun-on-lakes/",
        destination: "/courses/cambodia/chhun-on-golf-resort/",
        permanent: true,
      },
      {
        source: "/blog/non-golfing-experiences/",
        destination: "/destinations/thailand/non-golfing-experiences/",
        permanent: true,
      },
      {
        source: "/blog/non-golfing-experiences",
        destination: "/destinations/thailand/non-golfing-experiences/",
        permanent: true,
      },
      // Legacy competitor comparison & GSC 404 blog route recovery
      {
        source: "/compare/golfasian/",
        destination: "/blog/asia-golf-specialists-vs-golfasian/",
        permanent: true,
      },
      {
        source: "/compare/golfasian",
        destination: "/blog/asia-golf-specialists-vs-golfasian/",
        permanent: true,
      },
      {
        source: "/compare/golfsavers/",
        destination: "/blog/asia-golf-specialists-vs-golfsavers/",
        permanent: true,
      },
      {
        source: "/compare/golfsavers",
        destination: "/blog/asia-golf-specialists-vs-golfsavers/",
        permanent: true,
      },
      {
        source: "/compare/golfscape/",
        destination: "/blog/asia-golf-specialists-vs-golfscape/",
        permanent: true,
      },
      {
        source: "/compare/golfscape",
        destination: "/blog/asia-golf-specialists-vs-golfscape/",
        permanent: true,
      },
      // Recover sitemap 404 caused by 12-golfer vs 12-man slug mismatch
      {
        source: "/destinations/vietnam/planning-12-golfer-golf-trip-vietnam-logistics-caddies-costs-2026/",
        destination: "/destinations/vietnam/planning-12-man-golf-trip-vietnam-logistics-caddies-costs-2026/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/planning-12-golfer-golf-trip-vietnam-logistics-caddies-costs-2026",
        destination: "/destinations/vietnam/planning-12-man-golf-trip-vietnam-logistics-caddies-costs-2026/",
        permanent: true,
      },
      // Cannibalisation consolidation (merge duplicate cost, comparison, and weather articles)
      {
        source: "/blog/how-much-does-vietnam-golf-holiday-cost/",
        destination: "/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/",
        permanent: true,
      },
      {
        source: "/blog/how-much-does-vietnam-golf-holiday-cost",
        destination: "/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/vietnam-vs-thailand-golf-trip-australians-2026/",
        destination: "/blog/vietnam-vs-thailand-golf-holiday/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/vietnam-vs-thailand-golf-trip-australians-2026",
        destination: "/blog/vietnam-vs-thailand-golf-holiday/",
        permanent: true,
      },
      {
        source: "/destinations/thailand/thai-weather/",
        destination: "/blog/best-time-to-golf-in-thailand/",
        permanent: true,
      },
      {
        source: "/destinations/thailand/thai-weather",
        destination: "/blog/best-time-to-golf-in-thailand/",
        permanent: true,
      },
      // Consolidate 6 An Bang Beach Villa pages into the unified collection page
      {
        source: "/accommodations/vietnam/:slug(an-bang-(?:ben-villa|flow-house|holiday-villa|may-villa|salt-villa|sea-easter-villa))/",
        destination: "/accommodations/vietnam/an-bang-beach-villas/",
        permanent: true,
      },
      {
        source: "/accommodations/vietnam/:slug(an-bang-(?:ben-villa|flow-house|holiday-villa|may-villa|salt-villa|sea-easter-villa))",
        destination: "/accommodations/vietnam/an-bang-beach-villas/",
        permanent: true,
      },
      // Temporary (307) redirects for held-back competitor comparison drafts so they do not return 404 while unpublished
      {
        source: "/blog/:slug(asia-golf-specialists-vs-(?:ata-holidays|golf-explorer|golfing-getaways|the-golf-travel-agency))/",
        destination: "/about/",
        permanent: false,
      },
      {
        source: "/blog/:slug(asia-golf-specialists-vs-(?:ata-holidays|golf-explorer|golfing-getaways|the-golf-travel-agency))",
        destination: "/about/",
        permanent: false,
      },
      {
        source: "/compare/:slug(ata-holidays|golf-explorer|golfing-getaways|the-golf-travel-agency)/",
        destination: "/about/",
        permanent: false,
      },
      {
        source: "/compare/:slug(ata-holidays|golf-explorer|golfing-getaways|the-golf-travel-agency)",
        destination: "/about/",
        permanent: false,
      },
      {
        source: "/blog/7-day-vietnam-golf-itinerary-central-coast/",
        destination: "/blog/7-day-vietnam-golf-itinerary/",
        permanent: true,
      },
      {
        source: "/blog/7-day-vietnam-golf-itinerary-central-coast",
        destination: "/blog/7-day-vietnam-golf-itinerary/",
        permanent: true,
      },
      {
        source: "/blog/da-nang-golf-trip-cost/",
        destination: "/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/",
        permanent: true,
      },
      {
        source: "/blog/da-nang-golf-trip-cost",
        destination: "/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/",
        permanent: true,
      },
      {
        source: "/blog/thai-country-club-bangkok-review/",
        destination: "/courses/thailand/thai-country-club/",
        permanent: true,
      },
      {
        source: "/blog/thai-country-club-bangkok-review",
        destination: "/courses/thailand/thai-country-club/",
        permanent: true,
      },
      // Retired legacy /packages/* slugs mapped to 27 active regional turnkey hubs
      {
        source: "/packages/:slug(da-nang-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-luxury(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/da-nang-luxury-villa-sanctuary/",
        permanent: true,
      },
      {
        source: "/packages/:slug(da-nang-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-nightlife(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/da-nang-golf-and-nightlife/",
        permanent: true,
      },
      {
        source: "/packages/:slug(da-nang-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-pure(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/da-nang-championship-links/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hanoi-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-luxury(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/capella-hanoi-ultra-luxe/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hanoi-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-(?:nightlife|pure)(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/hanoi-heritage-golf-classic/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hua-hin-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-luxury(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/hua-hin-v-villas-royal-links/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hua-hin-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-(?:nightlife|pure)(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/hua-hin-standard-seaside-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug(phuket-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-nightlife(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/phuket-beach-club-golf-nightlife/",
        permanent: true,
      },
      {
        source: "/packages/:slug(phuket-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-(?:luxury|pure)(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/phuket-banyan-tree-championship/",
        permanent: true,
      },
      {
        source: "/packages/:slug(siem-reap-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-luxury(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/raffles-angkor-golf-and-temples/",
        permanent: true,
      },
      {
        source: "/packages/:slug(siem-reap-(?:12-man-group|8-man-group|4-man-group|4-female-group|corporate-retreat|couples|solo-golfer)-(?:nightlife|pure)(?:-(?:3|5|7|10)-day)?)",
        destination: "/packages/siem-reap-boutique-retreat-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug(da-nang-[0-9]+d-[^/]+)",
        destination: "/packages/da-nang-championship-links/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hanoi-[0-9]+d-[^/]+)",
        destination: "/packages/hanoi-heritage-golf-classic/",
        permanent: true,
      },
      {
        source: "/packages/:slug(hua-hin-[0-9]+d-[^/]+)",
        destination: "/packages/hua-hin-standard-seaside-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug(phuket-[0-9]+d-[^/]+)",
        destination: "/packages/phuket-banyan-tree-championship/",
        permanent: true,
      },
      {
        source: "/packages/:slug(siem-reap-[0-9]+d-[^/]+)",
        destination: "/packages/siem-reap-boutique-retreat-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug(bangkok-[0-9]+d-[^/]+)",
        destination: "/packages/bangkok-elite-private-clubs/",
        permanent: true,
      },
      {
        source: "/packages/:slug(pattaya-[0-9]+d-[^/]+)",
        destination: "/packages/pattaya-championship-golf-swing/",
        permanent: true,
      },
      {
        source: "/packages/:slug(chiang-mai-[0-9]+d-[^/]+)",
        destination: "/packages/chiang-mai-highlands-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug(phnom-penh-[0-9]+d-[^/]+)",
        destination: "/packages/phnom-penh-vattanac-luxury-golf/",
        permanent: true,
      },
      {
        source: "/packages/:slug((?:ho-chi-minh|saigon)-[0-9]+d-[^/]+)",
        destination: "/packages/saigon-bluffs-ho-tram-executive/",
        permanent: true,
      },
      {
        source: "/blog/unfiltered-hoiana-shores-vs-ba-na-hills/",
        destination: "/destinations/vietnam/unfiltered-hoiana-shores-vs-ba-na-hills/",
        permanent: true,
      },
      {
        source: "/blog/black-mountain-vs-banyan-tree/",
        destination: "/destinations/thailand/black-mountain-vs-banyan-tree/",
        permanent: true,
      },
      {
        source: "/accommodations/cambodia/raffles-grand-hotel/",
        destination: "/accommodations/cambodia/raffles-grand-dangkor/",
        permanent: true,
      },
      {
        source: "/accommodations/cambodia/raffles-grand-hotel",
        destination: "/accommodations/cambodia/raffles-grand-dangkor/",
        permanent: true,
      },
      {
        source: "/blog/cambodia-culinary-la-plantation-kampot-pepper/",
        destination: "/destinations/cambodia/cambodia-culinary-la-plantation-kampot-pepper/",
        permanent: true,
      },
      {
        source: "/blog/unfiltered-brg-vs-montgomerie/",
        destination: "/destinations/vietnam/unfiltered-brg-vs-montgomerie/",
        permanent: true,
      },
      {
        source: "/blog/cambodia-culinary-phnom-penh-street-food-tuk-tuk/",
        destination: "/destinations/cambodia/cambodia-culinary-phnom-penh-street-food-tuk-tuk/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/red-mountain-vs-blue-canyon/",
        destination: "/destinations/thailand/red-mountain-vs-blue-canyon/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/red-mountain-vs-blue-canyon",
        destination: "/destinations/thailand/red-mountain-vs-blue-canyon/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/long-thanh-golf-club/",
        destination: "/courses/vietnam/long-thanh/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/brg-da-nang",
        destination: "/courses/vietnam/brg-da-nang-norman/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/brg-da-nang/",
        destination: "/courses/vietnam/brg-da-nang-norman/",
        permanent: true,
      },
      {
        source: "/blog/beyond-the-fairway-exclusive-siem-reap-experiences/",
        destination: "/destinations/cambodia/beyond-the-fairway-exclusive-siem-reap-experiences/",
        permanent: true,
      },
      {
        source: "/blog/red-mountain-vs-blue-canyon/",
        destination: "/destinations/thailand/red-mountain-vs-blue-canyon/",
        permanent: true,
      },
      {
        source: "/blog/cambodia-culinary-cuisine-wat-damnak/",
        destination: "/destinations/cambodia/cambodia-culinary-cuisine-wat-damnak/",
        permanent: true,
      },
      {
        source: "/destinations/vietnam/battle-for-best-19th-hole-hua-hin/",
        destination: "/destinations/thailand/battle-for-best-19th-hole-hua-hin/",
        permanent: true,
      },
      {
        source: "/accommodations/vietnam/regent-phu-quoc",
        destination: "/destinations/vietnam/accommodations/",
        permanent: true,
      },
      {
        source: "/accommodations/vietnam/regent-phu-quoc/",
        destination: "/destinations/vietnam/accommodations/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/laguna-golf-lang-co",
        destination: "/courses/vietnam/laguna-lang-co/",
        permanent: true,
      },
      {
        source: "/courses/thailand/alpine",
        destination: "/courses/thailand/alpine-golf-club/",
        permanent: true,
      },
      {
        source: "/courses/thailand/alpine/",
        destination: "/courses/thailand/alpine-golf-club/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/laguna-golf-lang-co/",
        destination: "/courses/vietnam/laguna-lang-co/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/legend-danang",
        destination: "/courses/vietnam/brg-da-nang-norman/",
        permanent: true,
      },
      {
        source: "/courses/vietnam/legend-danang/",
        destination: "/courses/vietnam/brg-da-nang-norman/",
        permanent: true,
      },
      {
        source: "/destinations/:country/courses/:slug/",
        destination: "/courses/:country/:slug/",
        permanent: true,
      },
      {
        source: "/destinations/:country/accommodations/:slug/",
        destination: "/accommodations/:country/:slug/",
        permanent: true,
      },
      {
        source: "/courses/:country(vietnam|thailand|cambodia)/",
        destination: "/destinations/:country/courses/",
        permanent: true,
      },
      {
        source: "/accommodations/:country(vietnam|thailand|cambodia)/",
        destination: "/destinations/:country/accommodations/",
        permanent: true,
      },
      // Legacy An Bang Villa .avif image redirects to canonical .webp assets
      {
        source: "/images/accommodations/vietnam/an-bang-salt-villa-3brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-salt-villa/:file.webp",
        permanent: true,
      },
      {
        source: "/images/accommodations/vietnam/an-bang-flow-house-3brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-flow-house/:file.webp",
        permanent: true,
      },
      {
        source: "/images/accommodations/vietnam/an-bang-ben-villa-3brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-ben-villa/:file.webp",
        permanent: true,
      },
      {
        source: "/images/accommodations/vietnam/an-bang-holiday-villa-6brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-holiday-villa/:file.webp",
        permanent: true,
      },
      {
        source: "/images/accommodations/vietnam/an-bang-may-villa-6brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-may-villa/:file.webp",
        permanent: true,
      },
      {
        source: "/images/accommodations/vietnam/an-bang-sea-easter-villa-3brm/:file.avif",
        destination: "/images/accommodations/vietnam/an-bang-sea-easter-villa/:file.webp",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/proposals/:slug/",
        destination: "/proposals/:slug/index.html",
      },
      {
        source: "/proposals/:slug",
        destination: "/proposals/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
