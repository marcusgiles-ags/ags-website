// thank-you uses "use client" in page.tsx, so metadata lives here
export const metadata = {
    title: "Thank You",
    description: "Your inquiry has been received. A Golf Specialist will be in touch within 48 hours to begin engineering your bespoke itinerary.",
    robots: { index: false, follow: false },
    openGraph: {
        type: "website",
        title: { absolute: "Enquiry Received | Asia Golf Specialists" },
        description: "Your inquiry has been received. A Golf Specialist will be in touch within 48 hours to begin engineering your bespoke itinerary.",
        url: "https://www.asiagolfspecialists.com/thank-you/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Thank You",
        }],
    },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
