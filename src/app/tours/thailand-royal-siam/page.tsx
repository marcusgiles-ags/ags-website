import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { thailandRoyalSiamData } from "@/data/tours/thailand-royal-siam.data";

export const metadata: Metadata = {
  title: { absolute: "7-Day Luxury Golf Tour | Royal Siam Golf Tour 2026/27" },
  description: "The Royal Siam Circuit: 7 days across Bangkok and Hua Hin playing Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain from The Standard.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/thailand-royal-siam/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "7-Day Luxury Golf Tour | Royal Siam Golf Tour 2026/27" },
    description: "The Royal Siam Circuit: 7 days across Bangkok and Hua Hin playing Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain from The Standard.",
    url: "https://www.asiagolfspecialists.com/tours/thailand-royal-siam/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
        width: 1200,
        height: 630,
        alt: "The Standard Hua Hin — The Royal Siam Circuit Thailand Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "7-Day Luxury Golf Tour | Royal Siam Golf Tour 2026/27" },
    description: "The Royal Siam Circuit: 7 days across Bangkok and Hua Hin playing Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain from The Standard.",
    images: ["https://www.asiagolfspecialists.com/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={thailandRoyalSiamData} />;
}
