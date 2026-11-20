'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { captureAttribution } from '@/lib/attribution';

export interface TelemetryData {
    pagesVisited: string[];
    articlesRead: string[];
    sessionStart: number | null;
}

export function useTelemetry() {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !pathname) return;

        captureAttribution();

        try {
            const rawData = localStorage.getItem('ags_telemetry');
            let telemetryData: TelemetryData = rawData
                ? JSON.parse(rawData)
                : { pagesVisited: [], articlesRead: [], sessionStart: Date.now() };

            const pathSegments = pathname.split('/').filter(Boolean);

            // Log general page views (cap at 15 to prevent localStorage bloat)
            if (pathname !== '/' && !telemetryData.pagesVisited.includes(pathname)) {
                telemetryData.pagesVisited.push(pathname);
                if (telemetryData.pagesVisited.length > 15) {
                    telemetryData.pagesVisited.shift();
                }
            }

            // Specifically log GEO Spoke article consumption for sales context
            const staticPages = ['courses', 'accommodations', 'culture', 'culinary', 'nightlife'];
            if (pathSegments.length === 3 && pathSegments[0] === 'destinations' && !staticPages.includes(pathSegments[2])) {
                const articleSlug = pathSegments[2];
                if (!telemetryData.articlesRead.includes(articleSlug)) {
                    telemetryData.articlesRead.push(articleSlug);
                }
            }

            localStorage.setItem('ags_telemetry', JSON.stringify(telemetryData));

        } catch (error) {
            console.error("Telemetry tracking failed:", error);
        }

    }, [pathname, isMounted]);

    return null;
}
