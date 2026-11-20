import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theEmperorsFairwaysData } from "@/data/tours/the-emperors-fairways.data";

export const metadata: Metadata = {
  title: { absolute: "11-Day Luxury Golf Tour | The Emperor's Fairways 2026" },
  description: "The Emperor's Fairways: 11-day luxury Vietnam golf tour across Hanoi and Central Vietnam playing 7 rounds including Silk Path, Legend Hill & Hoiana Shores.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-emperors-fairways/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "11-Day Luxury Golf Tour | The Emperor's Fairways 2026" },
    description: "The Emperor's Fairways: 11-day luxury Vietnam golf tour across Hanoi and Central Vietnam playing 7 rounds including Silk Path, Legend Hill & Hoiana Shores.",
    url: "https://www.asiagolfspecialists.com/tours/the-emperors-fairways/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp",
        width: 1200,
        height: 630,
        alt: "Silk Path Dong Trieu — The Emperor's Fairways Vietnam Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "11-Day Luxury Golf Tour | The Emperor's Fairways 2026" },
    description: "The Emperor's Fairways: 11-day luxury Vietnam golf tour across Hanoi and Central Vietnam playing 7 rounds including Silk Path, Legend Hill & Hoiana Shores.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theEmperorsFairwaysData} />;
}
