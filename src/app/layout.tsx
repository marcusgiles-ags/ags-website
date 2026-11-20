import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { TelemetryProvider } from "@/components/TelemetryProvider";
import ConsentBanner    from "@/components/ConsentBanner";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer           from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
    variable: "--font-serif",
    subsets: ["latin"],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.asiagolfspecialists.com'),
    title: {
        template: "%s | AGS",
        default: "Asia Golf Specialists | Luxury Golf Tours Southeast Asia",
    },
    description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Championship courses, bespoke experiences for the discerning international golfer.",
    keywords: [
        "Luxury Golf Tours Southeast Asia",
        "Premium Vietnam Golf Holiday",
        "Exclusive Thailand Golf Packages",
        "Cambodia Angkor Wat Golf Tours",
        "Asia Golf Specialists"
    ],
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/ags-icon-512.png',  sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon-32x32.png',
    },
    openGraph: {
        
        title: { absolute: "Asia Golf Specialists | Premium Luxury Golf Tours" },
        description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Championship courses, bespoke experiences for the discerning international golfer.",
        url: "https://www.asiagolfspecialists.com/",
        siteName: "Asia Golf Specialists",
        images: [
            {
                url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
                secureUrl: "https://www.asiagolfspecialists.com/images/og-default.jpg",
                width: 1200,
                height: 630,
                alt: "Asia Golf Specialists — Premier Luxury Golf Tours in Southeast Asia",
                type: "image/jpeg",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Asia Golf Specialists | Premium Luxury Golf Tours" },
        description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Championship courses, bespoke experiences for the discerning international golfer.",
        images: ["https://www.asiagolfspecialists.com/images/og-default.jpg"],
    },
    verification: {
        google: "uciUvqvRLsD9PYrM7lpMHMtUi3_LssUUkwxGASXyKXY",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const canonicalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://www.asiagolfspecialists.com/#organization",
        "name": "Asia Golf Specialists",
        "alternateName": "AGS",
        "url": "https://www.asiagolfspecialists.com/",
        "description": "Asia Golf Specialists (AGS) is a boutique, expat-owned luxury golf tour operator headquartered in Hoi An / Da Nang, Vietnam, engineering bespoke championship golf itineraries across Vietnam, Thailand, and Cambodia.",
        "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-transparent.webp",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp"
        },
        "telephone": "+84 935 601 099",
        "email": "concierge@asiagolfspecialists.com",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "27 Nguyen Phan Vinh",
            "addressLocality": "Hoi An",
            "addressRegion": "Da Nang",
            "postalCode": "550000",
            "addressCountry": "VN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 15.9038,
            "longitude": 108.3361
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84 935 601 099",
            "email": "concierge@asiagolfspecialists.com",
            "contactType": "customer service",
            "availableLanguage": ["English"]
        },
        "knowsAbout": [
            "Luxury Golf Travel",
            "Southeast Asia Golf Tours",
            "Championship Golf Courses",
            "Vietnam Golf Packages",
            "Thailand Golf Vacations",
            "Cambodia Golf Holidays"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/asia-golf-specialists/",
            "https://www.instagram.com/asiagolfspecialists/",
            "https://www.facebook.com/asiagolfspecialists/",
            "https://www.google.com/maps/place/Asia+Golf+Specialists/@14.5027506,103.509948,3779908m/data=!3m1!1e3!4m6!3m5!1s0x8bc99bf190000767:0x9a7594b1b8f477a2!8m2!3d14.5027506!4d103.509948!16s%2Fg%2F11nj0hlmqy",
            "https://www.google.com/search?kgmid=/g/11nj0hlmqy"
        ],
        "founder": {
            "@type": "Person",
            "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
            "name": "Marcus Giles",
            "jobTitle": "Founder & Managing Director",
            "url": "https://www.asiagolfspecialists.com/about/#founder",
            "sameAs": [
                "https://www.linkedin.com/in/marcus-giles-golf/"
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "3",
            "reviewCount": "3"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Nathan M." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "AAA Communication, Experience & Service! Marcus and his team delivered an outstanding and memorable six-day golfing experience."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Brad J." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Awesome Trip. Golf courses were sensational and the whole trip was so well organised."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Cameron H." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "The team at Asia Golf Specialists arranged a remarkable experience, every part was so well organised. The golf courses were amazing, the city, the culture the energy was so great to be a part of."
            }
        ],
        "areaServed": ["Vietnam", "Thailand", "Cambodia", "Australia"]
    };

    return (
        <html lang="en-US" suppressHydrationWarning prefix="og: https://ogp.me/ns#">
            <head>
                <link rel="alternate" type="text/markdown" href="https://www.asiagolfspecialists.com/llms.txt" />
                <link rel="llms-txt" href="https://www.asiagolfspecialists.com/llms.txt" />
                <link rel="llms-full-txt" href="https://www.asiagolfspecialists.com/llms-full.txt" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(canonicalOrganizationSchema) }}
                />
            </head>
            <body className={`${montserrat.variable} ${playfair.variable}`.trim()}>
                {/* Analytics — only injected after user consent */}
                <ConsentAnalytics />
                <TelemetryProvider />
                <BreadcrumbSchema />
                {children}
                <Footer />
                {/* Consent banner — footer-docked, shown until dismissed */}
                <ConsentBanner />
                <WhatsAppConcierge />
            </body>
        </html>
    );
}
