import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { hoiAnBeachfrontBlissData } from "@/data/tours/hoi-an-beachfront-bliss.data";

export const metadata: Metadata = {
  title: { absolute: "7-Day Luxury Golf Tour | Hoi An Beachfront Bliss 2026/27" },
  description: "7-day luxury beachfront golf tour in Central Vietnam playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills from Palm Gardens Resort.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/hoi-an-beachfront-bliss/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "7-Day Luxury Golf Tour | Hoi An Beachfront Bliss 2026/27" },
    description: "7-day luxury beachfront golf tour in Central Vietnam playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills from Palm Gardens Resort.",
    url: "https://www.asiagolfspecialists.com/tours/hoi-an-beachfront-bliss/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
        width: 1200,
        height: 630,
        alt: "Laguna Golf Lang Co — Hoi An Beachfront Bliss Vietnam Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "7-Day Luxury Golf Tour | Hoi An Beachfront Bliss 2026/27" },
    description: "7-day luxury beachfront golf tour in Central Vietnam playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lang Co, and Ba Na Hills from Palm Gardens Resort.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={hoiAnBeachfrontBlissData} />;
}
