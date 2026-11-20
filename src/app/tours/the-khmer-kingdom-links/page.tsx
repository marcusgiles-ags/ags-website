import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theKhmerKingdomLinksData } from "@/data/tours/the-khmer-kingdom-links.data";

export const metadata: Metadata = {
  title: { absolute: "7-Day Luxury Golf Tour | Khmer Kingdom Links 2026" },
  description: "The Khmer Kingdom Links: 7-day Cambodia luxury golf tour across Phnom Penh and Siem Reap playing Vattanac, Grand Phnom Penh, Angkor & Phokeethra at Raffles.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-khmer-kingdom-links/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "7-Day Luxury Golf Tour | Khmer Kingdom Links 2026" },
    description: "The Khmer Kingdom Links: 7-day Cambodia luxury golf tour across Phnom Penh and Siem Reap playing Vattanac, Grand Phnom Penh, Angkor & Phokeethra at Raffles.",
    url: "https://www.asiagolfspecialists.com/tours/the-khmer-kingdom-links/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-west/vattanac-7th-west-5902.webp",
        width: 1200,
        height: 630,
        alt: "Vattanac Golf Resort — The Khmer Kingdom Links Cambodia Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "7-Day Luxury Golf Tour | Khmer Kingdom Links 2026" },
    description: "The Khmer Kingdom Links: 7-day Cambodia luxury golf tour across Phnom Penh and Siem Reap playing Vattanac, Grand Phnom Penh, Angkor & Phokeethra at Raffles.",
    images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-west/vattanac-7th-west-5902.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theKhmerKingdomLinksData} />;
}
