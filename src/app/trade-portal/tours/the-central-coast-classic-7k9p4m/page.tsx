import type { Metadata } from "next";
import TradeTourTemplate from "@/components/trade/TradeTourTemplate";
import { CENTRAL_COAST_CLASSIC_TRADE } from "@/data/trade/trade-tours";

export const metadata: Metadata = {
  title: { absolute: "Central Coast Classic | Confidential B2B Tariff" },
  description:
    "Confidential wholesale travel agent rate sheet for the Central Coast Golf & Wellness Classic. Nett pricing, high-res marketing media kit, and itinerary.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function CentralCoastClassicTradePage() {
  return <TradeTourTemplate data={CENTRAL_COAST_CLASSIC_TRADE} />;
}
