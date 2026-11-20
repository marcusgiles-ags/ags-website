"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";


export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string, caption: string } | null>(null);

    const images = [
        {
            src: "/images/tours/vietnam/laguna-lang-co-golf-day-1.webp",
            alt: "Laguna Lang Co Golf Course - Championship fairways and coastal beauty",
            caption: "Laguna Lang Co - Morning Round"
        },
        {
            src: "/images/tours/vietnam/laguna-lang-co-golf-day-2.webp",
            alt: "Exclusive Tournament Setup at Laguna Lang Co",
            caption: "Tournament Excellence"
        },
        {
            src: "/images/tours/vietnam/laguna-lang-co-tee-shot-1.webp",
            alt: "Dramatic tee shot over the Vietnamese coastal terrain",
            caption: "The Dramatic Signature Hole"
        },
        {
            src: "/images/tours/vietnam/laguna-lang-co-golf-day-night-festivities.webp",
            alt: "Night time celebrations and networking at Laguna Lang Co",
            caption: "Post-Golf Prestige & Night Festivities"
        }
    ];

    // Handle Escape key to close modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
            <Navbar />

            <header className="hero" style={{
                paddingTop: '12rem',
                paddingBottom: '6rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ 
                        color: '#D4AF37', 
                        letterSpacing: '0.4em', 
                        fontSize: '0.9rem', 
                        textTransform: 'uppercase', 
                        marginBottom: '1rem', 
                        display: 'block', 
                        fontWeight: 600 
                    }}>Archive</span>
                    <h1 style={{ 
                        fontFamily: 'var(--font-primary-serif)', 
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                        marginBottom: '1.5rem', 
                        color: '#F8FAFC', 
                        lineHeight: 1.1, 
                        fontWeight: 700 
                    }}>
                        The AGS <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Gallery</span>
                    </h1>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: 'rgba(248, 250, 252, 0.7)', 
                        lineHeight: 1.6, 
                        margin: '0 auto', 
                        maxWidth: '700px' 
                    }} itemProp="description" id="exec-summary">
                        A visual chronicle of championship fairways, exclusive invitationals, and the prestige of luxury golf travel across Southeast Asia.
                    </p>
                </div>
            </header>

            <section className="section" style={{ paddingBottom: '10rem' }}>
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
                        gap: '2.5rem' 
                    }}>
                        {images.map((img, index) => (
                            <div key={index} 
                                onClick={() => setSelectedImage(img)}
                                style={{
                                    position: 'relative',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(212, 175, 55, 0.1)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                    cursor: 'pointer'
                                }}
                                className="gallery-item-hover"
                            >
                                <div className="gallery-image-container" style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                                    <Image 
                                        src={img.src} 
                                        alt={img.alt} 
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        className="gallery-image"
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '2rem 1.5rem 1.5rem',
                                    background: 'linear-gradient(to top, rgba(2, 6, 23, 0.9) 0%, transparent 100%)',
                                    color: 'white'
                                }}>
                                    <p style={{ 
                                        color: '#D4AF37', 
                                        fontSize: '0.85rem', 
                                        fontWeight: 600, 
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.25rem'
                                    }}>Vietnam Coastal Tour</p>
                                    <h4 style={{ 
                                        fontSize: '1.25rem', 
                                        fontWeight: 700, 
                                        margin: 0,
                                        fontFamily: 'var(--font-primary-serif)'
                                    }}>{(img as any).caption}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ 
                        marginTop: '6rem', 
                        padding: '4rem', 
                        backgroundColor: 'rgba(212, 175, 55, 0.03)', 
                        border: '1px dashed rgba(212, 175, 55, 0.2)', 
                        borderRadius: '16px',
                        textAlign: 'center' 
                    }}>
                        <h3 style={{ color: '#D4AF37', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>More to Follow</h3>
                        <p style={{ color: 'rgba(248, 250, 252, 0.6)' }}>Our archive is expanding. Check back soon for snapshots from the Thailand Invitational and Cambodia Antiquity tours.</p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/events-tours/" className="btn-outline" style={{ padding: '1rem 3rem' }}>
                            ← Back to Events & Tours
                        </Link>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(2, 6, 23, 0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        cursor: 'zoom-out',
                        backdropFilter: 'blur(8px)'
                    }}
                >
                    <div style={{ position: 'relative', maxWidth: '1200px', width: '100%' }}>
                        <div style={{ position: 'relative', width: '100%', height: 'auto', maxHeight: '85vh', aspectRatio: '16/9' }}>
                            <Image 
                                src={selectedImage.src} 
                                alt={selectedImage.alt} 
                                fill
                                style={{ 
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(212, 175, 55, 0.3)',
                                    boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                            <h4 style={{ 
                                fontFamily: 'var(--font-primary-serif)', 
                                color: '#D4AF37', 
                                fontSize: '1.5rem', 
                                margin: '0 0 0.5rem' 
                            }}>{selectedImage.caption}</h4>
                            <p style={{ color: 'rgba(248, 250, 252, 0.7)', margin: 0 }}>{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .gallery-item-hover:hover {
                    transform: translateY(-8px);
                    border-color: rgba(212, 175, 55, 0.3);
                }
                .gallery-item-hover:hover .gallery-image {
                    transform: scale(1.05);
                }
                .close-btn:hover {
                    opacity: 1 !important;
                }
            `}</style>
        </div>
    );
}
