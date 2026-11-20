import type { Metadata } from "next";
import TradeTourTemplate from "@/components/trade/TradeTourTemplate";
import { HOI_AN_CHAMPIONSHIP_WEEK_TRADE } from "@/data/trade/trade-tours";

export const metadata: Metadata = {
  title: { absolute: "Hoi An Championship Week | Confidential B2B Tariff" },
  description:
    "Confidential wholesale travel agent rate sheet for Hoi An Championship Week. Nett rates, high-res image bank, and day-by-day itinerary.",
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

export default function HoiAnChampionshipWeekTradePage() {
  return <TradeTourTemplate data={HOI_AN_CHAMPIONSHIP_WEEK_TRADE} />;
}
