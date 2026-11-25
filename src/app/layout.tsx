import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { TelemetryProvider } from "@/components/TelemetryProvider";
import ConsentBanner    from "@/components/ConsentBanner";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer           from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import { buildCanonicalOrganizationSchema } from "@/lib/schema";
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
    const canonicalOrganizationSchema = buildCanonicalOrganizationSchema();

    return (
        <html lang="en-US" suppressHydrationWarning prefix="og: https://ogp.me/ns#">
            <head>
                <link rel="alternate" type="text/markdown" href="https://www.asiagolfspecialists.com/llms.txt" />
                <link rel="llms-txt" href="https://www.asiagolfspecialists.com/llms.txt" />
                <link rel="llms-full-txt" href="https://www.asiagolfspecialists.com/llms-full.txt" />
            </head>
            <body className={`${montserrat.variable} ${playfair.variable}`.trim()}>
                {/* Global canonical Organization entity (in <body> to prevent Next.js App Router <head> WRS hydration duplication) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(canonicalOrganizationSchema) }}
                />
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
