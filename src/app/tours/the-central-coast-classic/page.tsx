import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theCentralCoastClassicData } from "@/data/tours/the-central-coast-classic.data";

export const metadata: Metadata = {
  title: { absolute: "7-Day Luxury Golf Tour | Central Coast Classic 2026/27" },
  description: "7-day Central Vietnam golf & wellness tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang with pool villas & daily 90-min spa at Namia.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-central-coast-classic/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "7-Day Luxury Golf Tour | Central Coast Classic 2026/27" },
    description: "7-day Central Vietnam golf & wellness tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang with pool villas & daily 90-min spa at Namia.",
    url: "https://www.asiagolfspecialists.com/tours/the-central-coast-classic/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        width: 1200,
        height: 630,
        alt: "Hoiana Shores Golf Club — The Central Coast Golf & Wellness Classic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "7-Day Luxury Golf Tour | Central Coast Classic 2026/27" },
    description: "7-day Central Vietnam golf & wellness tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang with pool villas & daily 90-min spa at Namia.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theCentralCoastClassicData} />;
}
