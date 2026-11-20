'use client';

import { useEffect, useState } from 'react';

export type Persona = 'culinary' | 'cultural' | 'nightlife' | 'default';

export interface PersonaConfig {
    persona: Persona;
    headline: string;
    subHeading: string;
    images: string[];
}

const PERSONA_MAP: Record<Exclude<Persona, 'default'>, PersonaConfig> = {
    culinary: {
        persona: 'culinary',
        headline: 'Gourmet Fairways<br/><span style="color: #D4AF37; font-style: italic">Elite Golf & Michelin-Grade Dining</span>',
        subHeading: 'Championship golf by day, extraordinary dining by night. We pair world-class fairways with the finest culinary experiences Southeast Asia has to offer.',
        images: [
            '/images/destinations/vietnam/culinary/vietnam-culinary-tour.webp',
            '/images/destinations/vietnam/culinary/vietnam-cai-be-floating-market-rowing-boat.webp',
        ],
    },
    cultural: {
        persona: 'cultural',
        headline: 'Championship Golf, Ancient Icons<br/><span style="color: #D4AF37; font-style: italic">Where History Meets the Fairway</span>',
        subHeading: 'Play courses set against some of the world\'s most remarkable heritage landscapes. Southeast Asia rewards the curious golfer.',
        images: [
            '/images/destinations/vietnam/culture/hue-imperial-citadel-at-sunset.webp',
            '/images/destinations/vietnam/culture/vietnam-hoi-an-traditional-culture.webp',
        ],
    },
    nightlife: {
        persona: 'nightlife',
        headline: 'Golf by Day, Prestige by Night<br/><span style="color: #D4AF37; font-style: italic">The Complete Southeast Asian Experience</span>',
        subHeading: 'When the final putt drops, the evening begins. AGS curates the complete experience — from the first tee to the finest rooftop bars in Asia.',
        images: [
            '/images/destinations/vietnam/nightlife/vietnam-nightlife-banner.webp',
            '/images/destinations/vietnam/nightlife/chill-sky-bar-saigon.webp',
        ],
    },
};

const ARTICLE_TYPE_MAP: Record<string, Exclude<Persona, 'default'>> = {
    culinary: 'culinary',
    nightlife: 'nightlife',
    culture: 'cultural',
};

function detectPersona(articlesRead: string[]): Persona {
    const counts: Record<string, number> = { culinary: 0, cultural: 0, nightlife: 0 };

    for (const slug of articlesRead) {
        for (const [keyword, type] of Object.entries(ARTICLE_TYPE_MAP)) {
            if (slug.includes(keyword)) {
                counts[type] = (counts[type] || 0) + 1;
            }
        }
    }

    // Require at least 2 matching articles to trigger personalization
    const topEntry = Object.entries(counts)
        .filter(([, count]) => count >= 2)
        .sort(([, a], [, b]) => b - a)[0];

    return (topEntry?.[0] as Persona) ?? 'default';
}

export function usePersonalization(): PersonaConfig | null {
    const [config, setConfig] = useState<PersonaConfig | null>(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('ags_telemetry');
            if (!raw) return;

            const telemetry = JSON.parse(raw);
            const allArticles: string[] = telemetry?.articlesRead ?? [];
            const sessionStart: number = telemetry?.sessionStart ?? 0;

            // Only personalize during the current visit session (within 2 hours)
            const SESSION_WINDOW_MS = 2 * 60 * 60 * 1000;
            const isCurrentSession = (Date.now() - sessionStart) < SESSION_WINDOW_MS;
            if (!isCurrentSession) return;

            const persona = detectPersona(allArticles);
            if (persona !== 'default') {
                setConfig(PERSONA_MAP[persona]);
            }
        } catch {
            // Gracefully fail — default hero stays
        }
    }, []);

    return config;
}
