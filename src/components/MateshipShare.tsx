'use client';

import { useState } from 'react';

interface MateshipShareProps {
    tourName: string;
    tourUrl: string;
    destination: string;
    compact?: boolean;
}

export default function MateshipShare({ tourName, tourUrl, destination, compact = false }: MateshipShareProps) {
    const [copied, setCopied] = useState(false);

    const utmUrl = `${tourUrl}?ref=mateship&utm_source=word-of-mouth&utm_medium=whatsapp&utm_campaign=mateship-share`;

    const whatsappMessage = encodeURIComponent(
        `Check out the ${tourName} — reckon this is our next trip: ${utmUrl}`
    );
    const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(utmUrl);
            setCopied(true);
            if (typeof window !== 'undefined') {
                (window as Window & { dataLayer?: object[] }).dataLayer = (window as Window & { dataLayer?: object[] }).dataLayer || [];
                (window as Window & { dataLayer?: object[] }).dataLayer!.push({
                    event: 'mateship_share_click',
                    share_method: 'copy_link',
                    destination: destination,
                    tour_name: tourName,
                });
            }
            setTimeout(() => setCopied(false), 2500);
        } catch {
            console.warn('Clipboard write failed');
        }
    };

    const handleWhatsApp = () => {
        if (typeof window !== 'undefined') {
            (window as Window & { dataLayer?: object[] }).dataLayer = (window as Window & { dataLayer?: object[] }).dataLayer || [];
            (window as Window & { dataLayer?: object[] }).dataLayer!.push({
                event: 'mateship_share_click',
                share_method: 'whatsapp',
                destination: destination,
                tour_name: tourName,
            });
        }
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    // Compact variant: small inline row, no border box
    if (compact) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248, 250, 252, 0.35)', fontWeight: 600 }}>
                    Share:
                </span>
                <button
                    onClick={handleWhatsApp}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.4rem 0.9rem', background: 'transparent',
                        color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.3)',
                        borderRadius: '3px', fontSize: '0.7rem', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        cursor: 'pointer', transition: 'all 0.2s ease',
                        fontFamily: 'var(--font-sans)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#25D366')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.3)')}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.885a.5.5 0 0 0 .609.61l6.101-1.48A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.514-5.228-1.41l-.375-.222-3.884.942.971-3.835-.244-.393A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    WhatsApp
                </button>
                <button
                    onClick={handleCopyLink}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.4rem 0.9rem', background: 'transparent',
                        color: copied ? '#D4AF37' : 'rgba(248, 250, 252, 0.35)',
                        border: `1px solid ${copied ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '3px', fontSize: '0.7rem', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        cursor: 'pointer', transition: 'all 0.2s ease',
                        fontFamily: 'var(--font-sans)'
                    }}
                >
                    {copied ? '✓ Copied' : '🔗 Copy'}
                </button>
            </div>
        );
    }

    return (
        <div style={{
            marginTop: '3rem',
            padding: '2.5rem 3rem',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '4px',
            background: 'rgba(212, 175, 55, 0.02)',
            textAlign: 'center'
        }}>
            <p style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#D4AF37',
                marginBottom: '0.75rem',
                fontWeight: 600
            }}>
                Share with Your Mates
            </p>
            <p style={{
                fontSize: '1rem',
                color: 'rgba(248, 250, 252, 0.6)',
                marginBottom: '2rem',
                maxWidth: '460px',
                margin: '0 auto 2rem'
            }}>
                Planning a group trip? Send this tour to the crew.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                    onClick={handleWhatsApp}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.85rem 2rem',
                        background: '#25D366',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '3px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-sans)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.885a.5.5 0 0 0 .609.61l6.101-1.48A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.514-5.228-1.41l-.375-.222-3.884.942.971-3.835-.244-.393A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Share on WhatsApp
                </button>

                <button
                    onClick={handleCopyLink}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.85rem 2rem',
                        background: 'transparent',
                        color: copied ? '#D4AF37' : 'rgba(248, 250, 252, 0.7)',
                        border: `1px solid ${copied ? '#D4AF37' : 'rgba(248, 250, 252, 0.2)'}`,
                        borderRadius: '3px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-sans)'
                    }}
                >
                    {copied ? '✓ Link Copied' : '🔗 Copy Link'}
                </button>
            </div>
        </div>
    );
}
