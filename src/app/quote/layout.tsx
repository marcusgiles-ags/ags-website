import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Custom Golf Quote",
    description: "Design your bespoke luxury golf tour across Southeast Asia. Request a custom quote from Asia Golf Specialists — expert itinerary design within 48 hours.",
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/quote/",
    },
    openGraph: {
        type: "website",
        title: "Request a Custom Golf Quote",
        description: "Design your bespoke luxury golf tour across Southeast Asia. Request a custom quote from Asia Golf Specialists — expert itinerary design within 48 hours.",
        url: "https://www.asiagolfspecialists.com/quote/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp",
            width: 1200,
            height: 630,
            alt: "Request a custom luxury golf tour quote — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Request a Custom Golf Quote",
        description: "Design your bespoke luxury golf tour across Southeast Asia. Request a custom quote from Asia Golf Specialists — expert itinerary design within 48 hours.",
        images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp"],
    },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
    return (<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Request a Custom Golf Quote | Asia Golf Specialists","description":"Design your bespoke luxury golf tour across Southeast Asia.","url":"https://www.asiagolfspecialists.com/quote/"}` }} />
{children}
</>) as React.ReactElement;
}
