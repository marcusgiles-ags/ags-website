import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Photo Gallery | Golf & Travel Inspiration" },
    description: "Experience luxury golf tours in Vietnam & Thailand with Asia Golf Specialists. Championship courses, stunning resorts, and cultural adventures await.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/gallery/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Photo Gallery | Golf & Travel Inspiration" },
        description: "Experience luxury golf tours in Vietnam & Thailand with Asia Golf Specialists. Championship courses, stunning resorts, and cultural adventures await.",
        url: "https://www.asiagolfspecialists.com/gallery/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp",
            width: 1200,
            height: 630,
            alt: "Asia Golf Specialists photo gallery — Southeast Asia golf",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Photo Gallery | Golf & Travel Inspiration" },
        description: "Experience luxury golf tours in Vietnam & Thailand with Asia Golf Specialists. Championship courses, stunning resorts, and cultural adventures await.",
        images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp"],
    },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"Photo Gallery | Asia Golf Specialists","description":"Championship fairways, luxury villas, and cultural experiences across Southeast Asia.","url":"https://www.asiagolfspecialists.com/gallery/","publisher":{"@type":"Organization","name":"Asia Golf Specialists","url":"https://www.asiagolfspecialists.com"}}` }} />
{children}
</>) as React.ReactElement;
}
