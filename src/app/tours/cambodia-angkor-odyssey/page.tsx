import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { cambodiaAngkorOdysseyData } from "@/data/tours/cambodia-angkor-odyssey.data";

export const metadata: Metadata = {
  title: { absolute: "5-Day Luxury Golf Tour | Cambodia Angkor Odyssey 2026/27" },
  description: "Experience Cambodia's Angkor Odyssey: 5 days playing Angkor Golf Resort (Faldo), Phokeethra CC, and Booyoung CC with 5-star stays at Raffles Grand d'Angkor.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/cambodia-angkor-odyssey/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "5-Day Luxury Golf Tour | Cambodia Angkor Odyssey 2026/27" },
    description: "Experience Cambodia's Angkor Odyssey: 5 days playing Angkor Golf Resort (Faldo), Phokeethra CC, and Booyoung CC with 5-star stays at Raffles Grand d'Angkor.",
    url: "https://www.asiagolfspecialists.com/tours/cambodia-angkor-odyssey/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp",
        width: 1200,
        height: 630,
        alt: "Sunrise over Angkor Wat — The Angkor Odyssey Cambodia Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "5-Day Luxury Golf Tour | Cambodia Angkor Odyssey 2026/27" },
    description: "Experience Cambodia's Angkor Odyssey: 5 days playing Angkor Golf Resort (Faldo), Phokeethra CC, and Booyoung CC with 5-star stays at Raffles Grand d'Angkor.",
    images: ["https://www.asiagolfspecialists.com/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={cambodiaAngkorOdysseyData} />;
}
