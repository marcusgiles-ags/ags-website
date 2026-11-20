import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroPreviewClient from './HeroPreviewClient';

export const metadata: Metadata = {
    title: { absolute: "Video Hero Montage Preview | AGS" },
    description: "Internal preview of the 65-second Hoiana Shores, Ba Na Hills, and Central Vietnam cultural video hero montage before live deployment.",
    robots: { index: false, follow: false },
};

export default function PreviewHeroPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc' }}>
            <Navbar />
            <HeroPreviewClient />
        </main>
    );
}
