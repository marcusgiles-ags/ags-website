import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 Asia Golf Travel Guide",
  description: "Download the complimentary 2026 Asia Golf Specialists Insider's Guide covering seasonal weather windows, caddie tipping, and championship course rankings.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/download-guide/",
  },
  openGraph: {
    type: "website",
    title: "2026 Asia Golf Travel Guide | AGS",
    description: "Download the complimentary 2026 Asia Golf Specialists Insider's Guide covering seasonal weather windows, caddie tipping, and championship course rankings.",
    url: "https://www.asiagolfspecialists.com/download-guide/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp",
        width: 1200,
        height: 630,
        alt: "2026 Asia Golf Travel Guide — Asia Golf Specialists",
      },
    ],
  },
};

export default function DownloadGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
