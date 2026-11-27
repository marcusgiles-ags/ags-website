import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theKhmerTempleTrailData } from "@/data/tours/the-khmer-temple-trail.data";

export const metadata: Metadata = {
  title: { absolute: "5-Day Luxury Golf Tour | Khmer Temple Trail 2026/27" },
  description: "The Khmer Temple Trail: 5-day Siem Reap boutique golf & Angkor Wat tour playing Angkor Golf Resort (Faldo), Phokeethra & Booyoung from Jaya House River Park.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-khmer-temple-trail/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "5-Day Luxury Golf Tour | Khmer Temple Trail 2026/27" },
    description: "The Khmer Temple Trail: 5-day Siem Reap boutique golf & Angkor Wat tour playing Angkor Golf Resort (Faldo), Phokeethra & Booyoung from Jaya House River Park.",
    url: "https://www.asiagolfspecialists.com/tours/the-khmer-temple-trail/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp",
        width: 1200,
        height: 630,
        alt: "Phokeethra Country Club — The Khmer Temple Trail Siem Reap Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "5-Day Luxury Golf Tour | Khmer Temple Trail 2026/27" },
    description: "The Khmer Temple Trail: 5-day Siem Reap boutique golf & Angkor Wat tour playing Angkor Golf Resort (Faldo), Phokeethra & Booyoung from Jaya House River Park.",
    images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theKhmerTempleTrailData} />;
}
