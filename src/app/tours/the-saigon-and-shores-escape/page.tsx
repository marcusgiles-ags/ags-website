import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theSaigonAndShoresEscapeData } from "@/data/tours/the-saigon-and-shores-escape.data";

export const metadata: Metadata = {
  title: { absolute: "9-Day Luxury Golf Tour | Saigon & Shores Escape 2026" },
  description: "The Saigon & Shores Escape: 9-day South & Central Vietnam luxury golf tour playing 6 rounds across The Bluffs Ho Tram, VGCC, Hoiana Shores & Ba Na Hills.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-saigon-and-shores-escape/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "9-Day Luxury Golf Tour | Saigon & Shores Escape 2026" },
    description: "The Saigon & Shores Escape: 9-day South & Central Vietnam luxury golf tour playing 6 rounds across The Bluffs Ho Tram, VGCC, Hoiana Shores & Ba Na Hills.",
    url: "https://www.asiagolfspecialists.com/tours/the-saigon-and-shores-escape/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-greg-norman-design-2.webp",
        width: 1200,
        height: 630,
        alt: "The Bluffs Grand Ho Tram — The Saigon & Shores Escape Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "9-Day Luxury Golf Tour | Saigon & Shores Escape 2026" },
    description: "The Saigon & Shores Escape: 9-day South & Central Vietnam luxury golf tour playing 6 rounds across The Bluffs Ho Tram, VGCC, Hoiana Shores & Ba Na Hills.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-greg-norman-design-2.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theSaigonAndShoresEscapeData} />;
}
