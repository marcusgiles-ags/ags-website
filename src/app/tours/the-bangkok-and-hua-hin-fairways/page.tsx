import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theBangkokAndHuaHinFairwaysData } from "@/data/tours/the-bangkok-and-hua-hin-fairways.data";

export const metadata: Metadata = {
  title: { absolute: "8-Day Luxury Golf Tour | Bangkok & Hua Hin Fairways 2026" },
  description: "Bangkok & Hua Hin Fairways: 8-day dual-hub Thailand luxury golf tour playing Alpine, Thai Country Club, Black Mountain, Pineapple Valley, and Springfield Royal.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-bangkok-and-hua-hin-fairways/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "8-Day Luxury Golf Tour | Bangkok & Hua Hin Fairways 2026" },
    description: "Bangkok & Hua Hin Fairways: 8-day dual-hub Thailand luxury golf tour playing Alpine, Thai Country Club, Black Mountain, Pineapple Valley, and Springfield Royal.",
    url: "https://www.asiagolfspecialists.com/tours/the-bangkok-and-hua-hin-fairways/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-green-forest-4.webp",
        width: 1200,
        height: 630,
        alt: "Alpine Golf Club Bangkok — Bangkok & Hua Hin Fairways Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "8-Day Luxury Golf Tour | Bangkok & Hua Hin Fairways 2026" },
    description: "Bangkok & Hua Hin Fairways: 8-day dual-hub Thailand luxury golf tour playing Alpine, Thai Country Club, Black Mountain, Pineapple Valley, and Springfield Royal.",
    images: ["https://www.asiagolfspecialists.com/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-green-forest-4.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theBangkokAndHuaHinFairwaysData} />;
}
