import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { vietnamCentralCoastData } from "@/data/tours/vietnam-central-coast.data";

export const metadata: Metadata = {
  title: { absolute: "7-Day Vietnam Central Coast Golf Tour | An Bang 2026" },
  description: "The An Bang Invitational: 7-day Central Vietnam society golf tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang from An Bang Beach Villa.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/vietnam-central-coast/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "7-Day Vietnam Central Coast Golf Tour | An Bang 2026" },
    description: "The An Bang Invitational: 7-day Central Vietnam society golf tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang from An Bang Beach Villa.",
    url: "https://www.asiagolfspecialists.com/tours/vietnam-central-coast/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        width: 1200,
        height: 630,
        alt: "Hoiana Shores Golf Club — The An Bang Invitational Vietnam Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "7-Day Vietnam Central Coast Golf Tour | An Bang 2026" },
    description: "The An Bang Invitational: 7-day Central Vietnam society golf tour playing Hoiana Shores, Ba Na Hills, Laguna Lang Co, and BRG Da Nang from An Bang Beach Villa.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={vietnamCentralCoastData} />;
}
