import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Enquiry Received | Asia Golf Specialists" },
  description:
    "Thank you for contacting Asia Golf Specialists. Our on-the-ground golf concierge team will respond with your bespoke Southeast Asia itinerary within 24 hours.",
  robots: { index: false, follow: true },
};

export default function QuoteThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
