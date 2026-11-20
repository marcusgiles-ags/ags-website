import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theLannaHeritageGolfTrailData } from "@/data/tours/the-lanna-heritage-golf-trail.data";

export const metadata: Metadata = {
  title: { absolute: "6-Day Luxury Golf Tour | Lanna Heritage Golf Trail 2026" },
  description: "The Lanna Heritage Golf Trail: 6-day Chiang Mai highland golf tour in Northern Thailand playing Alpine Chiang Mai, Chiang Mai Highlands & Mae Jo.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-lanna-heritage-golf-trail/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "6-Day Luxury Golf Tour | Lanna Heritage Golf Trail 2026" },
    description: "The Lanna Heritage Golf Trail: 6-day Chiang Mai highland golf tour in Northern Thailand playing Alpine Chiang Mai, Chiang Mai Highlands & Mae Jo.",
    url: "https://www.asiagolfspecialists.com/tours/the-lanna-heritage-golf-trail/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp",
        width: 1200,
        height: 630,
        alt: "Alpine Golf Resort Chiang Mai — The Lanna Heritage Golf Trail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "6-Day Luxury Golf Tour | Lanna Heritage Golf Trail 2026" },
    description: "The Lanna Heritage Golf Trail: 6-day Chiang Mai highland golf tour in Northern Thailand playing Alpine Chiang Mai, Chiang Mai Highlands & Mae Jo.",
    images: ["https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theLannaHeritageGolfTrailData} />;
}
