"use client";

import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
    const pathname = usePathname();

    if (!pathname || pathname === "/") {
        return null;
    }

    // Routes that already emit a dedicated server-rendered BreadcrumbList JSON-LD
    if (
        pathname.startsWith("/courses/") ||
        pathname.startsWith("/accommodations/") ||
        pathname.startsWith("/destinations/") ||
        pathname.startsWith("/blog/") ||
        pathname.startsWith("/packages/") ||
        pathname.startsWith("/tours/")
    ) {
        return null;
    }

    const pathSegments = pathname.split("/").filter((segment) => segment.length > 0);

    const breadcrumbs = [
        {
            name: "Home",
            url: "/",
        },
    ];

    let currentPath = "";
    pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;

        const formattedName = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        breadcrumbs.push({
            name: formattedName,
            url: `${currentPath}/`,
        });
    });

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `https://www.asiagolfspecialists.com${crumb.url}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}

