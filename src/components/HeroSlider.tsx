"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
    images: string[];
    objectPosition?: string | string[];
}

export default function HeroSlider({ images, objectPosition }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            {images.map((img, index) => (
                <div 
                    key={index} 
                    className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
                    style={{ position: 'absolute', inset: 0, opacity: index === currentIndex ? 1 : 0, transition: 'opacity 2s ease-in-out' }}
                >
                    <Image
                        src={img}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        priority={index === 0}
                        style={{ 
                            objectFit: 'cover',
                            objectPosition: Array.isArray(objectPosition) ? (objectPosition[index] || 'center') : (objectPosition || 'center') 
                        }}
                        sizes="100vw"
                    />
                </div>
            ))}
        </>
    );
}
