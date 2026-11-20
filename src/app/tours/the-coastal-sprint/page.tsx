import type { Metadata } from "next";
import NextGenTourTemplate from "@/components/NextGenTourTemplate";
import { theCoastalSprintData } from "@/data/tours/the-coastal-sprint.data";

export const metadata: Metadata = {
  title: { absolute: "4-Day Luxury Da Nang Golf Tour | The Coastal Sprint" },
  description: "4-Day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers and 5-star resort stays at Palm Gardens Hoi An.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/tours/the-coastal-sprint/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "4-Day Luxury Da Nang Golf Tour | The Coastal Sprint" },
    description: "4-Day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers and 5-star resort stays at Palm Gardens Hoi An.",
    url: "https://www.asiagolfspecialists.com/tours/the-coastal-sprint/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp",
        width: 1200,
        height: 630,
        alt: "Ba Na Hills Night Golf — The Coastal Sprint Da Nang Golf Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "4-Day Luxury Da Nang Golf Tour | The Coastal Sprint" },
    description: "4-Day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers and 5-star resort stays at Palm Gardens Hoi An.",
    images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp"],
  },
};

export default function TourPage() {
  return <NextGenTourTemplate data={theCoastalSprintData} />;
}
