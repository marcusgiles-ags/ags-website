import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theIndochinaGoldenAgeData } from "@/data/tours/the-indochina-golden-age.data";

export const metadata: Metadata = {
  title: { absolute: "12-Day Luxury Golf Tour | Indochina Golden Age 2026/27" },
  description: "The Indochina Golden Age: 12-day luxury golf tour across Cambodia, Vietnam & Thailand playing 7 championship rounds including Angkor, Vattanac & Hoiana Shores.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-indochina-golden-age/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "12-Day Luxury Golf Tour | Indochina Golden Age 2026/27" },
    description: "The Indochina Golden Age: 12-day luxury golf tour across Cambodia, Vietnam & Thailand playing 7 championship rounds including Angkor, Vattanac & Hoiana Shores.",
    url: "https://www.asiagolfspecialists.com/tours/the-indochina-golden-age/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        width: 1200,
        height: 630,
        alt: "The Indochina Golden Age — 12-Day Multi-Country Luxury Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "12-Day Luxury Golf Tour | Indochina Golden Age 2026/27" },
    description: "The Indochina Golden Age: 12-day luxury golf tour across Cambodia, Vietnam & Thailand playing 7 championship rounds including Angkor, Vattanac & Hoiana Shores.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theIndochinaGoldenAgeData} />;
}
