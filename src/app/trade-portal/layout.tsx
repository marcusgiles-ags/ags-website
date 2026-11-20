import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | AGS Travel Trade",
    default: "Wholesale Partner Portal | Asia Golf Specialists",
  },
  description:
    "Confidential wholesale travel trade portal and nett rate tariffs for licensed travel advisors and tour operators.",
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

export default function TradePortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#030712" }}>
      {children}
    </div>
  );
}
