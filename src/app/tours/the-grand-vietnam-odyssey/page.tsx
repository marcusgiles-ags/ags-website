import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theGrandVietnamOdysseyData } from "@/data/tours/the-grand-vietnam-odyssey.data";

export const metadata: Metadata = {
  title: { absolute: "14-Day Luxury Golf Tour | Grand Vietnam Odyssey 2026" },
  description: "The Grand Vietnam Odyssey: 14-day pan-Vietnam luxury golf tour from Hanoi through Da Nang & Hoi An to Saigon and Ho Tram featuring 9 championship golf rounds.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-grand-vietnam-odyssey/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "14-Day Luxury Golf Tour | Grand Vietnam Odyssey 2026" },
    description: "The Grand Vietnam Odyssey: 14-day pan-Vietnam luxury golf tour from Hanoi through Da Nang & Hoi An to Saigon and Ho Tram featuring 9 championship golf rounds.",
    url: "https://www.asiagolfspecialists.com/tours/the-grand-vietnam-odyssey/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp",
        width: 1200,
        height: 630,
        alt: "The Grand Vietnam Odyssey — 14-Day Nationwide Vietnam Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "14-Day Luxury Golf Tour | Grand Vietnam Odyssey 2026" },
    description: "The Grand Vietnam Odyssey: 14-day pan-Vietnam luxury golf tour from Hanoi through Da Nang & Hoi An to Saigon and Ho Tram featuring 9 championship golf rounds.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theGrandVietnamOdysseyData} />;
}
