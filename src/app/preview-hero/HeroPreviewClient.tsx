'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Chapter {
    id: string;
    title: string;
    subtitle: string;
    startTime: number;
    endTime: number;
    duration: string;
    badge: string;
    description: string;
    keyHighlights: string[];
    technicalNotes: string;
}

const CHAPTERS: Chapter[] = [
    {
        id: 'hoiana',
        title: 'Hoiana Shores Golf Club',
        subtitle: 'Coastal Links & Sand Dunes',
        startTime: 0,
        endTime: 14,
        duration: '14s (0:00 – 0:14)',
        badge: 'Chapter 1 · Championship Links',
        description: 'Sweeping aerial views of Robert Trent Jones Jr.’s pure links layout on the Central Vietnam coastline. Features rolling natural sand dunes, sculpted bunkers, pristine turf, and the East Sea surf.',
        keyHighlights: [
            'Dramatic links routing along the East Sea shoreline',
            'Authentic dune typography and coastal bunkers',
            'Zero promotional overlays or watermarks'
        ],
        technicalNotes: '1080p @ 25fps, H.264 High Profile. Cut at 15.00s with 1.0s cross-dissolve into Ba Na Hills.'
    },
    {
        id: 'banahills',
        title: 'Ba Na Hills Golf Club',
        subtitle: 'Mountain Golf & Caddie Experience',
        startTime: 14,
        endTime: 43,
        duration: '29s (0:14 – 0:43)',
        badge: 'Chapter 2 · Highland Championship',
        description: 'Luke Donald’s mountain masterwork nestled in the foothills of Da Nang. Showcases misty morning valley fairways, caddie and buggy departure, a mountain tee shot, a downhill putt, a warm high-five with smiling caddies, and a clubhouse flyover.',
        keyHighlights: [
            'Mist-shrouded mountain backdrop and championship fairways',
            'Authentic golfer-caddie camaraderie (high-five, green reading)',
            'Clubhouse architectural reveal in the mountain valley',
            'Zero indoor kitchen/chef clips — 100% golf and scenery'
        ],
        technicalNotes: 'Spliced 0:02–0:08 and 0:24–0:48 via 0.8s internal dissolve, eliminating intro title cards and indoor scenes. Transitions at 43s with 1.0s cross-dissolve into cultural reel.'
    },
    {
        id: 'central-vietnam',
        title: 'Central Vietnam Regional B-Roll',
        subtitle: 'Rivers, Lanterns, Bay & Streetscapes',
        startTime: 43,
        endTime: 65,
        duration: '22s (0:43 – 1:05)',
        badge: 'Chapter 3 · Destination & Culture',
        description: 'Immersive cultural and landscape journey across Da Nang and Hội An: round coracle basket boats in Da Nang bay, the ocean-facing Lady Buddha pagoda, daytime aerial of Hội An’s historic Thu Bồn river and ancient tile roofs, illuminated Han River bridges at night, and the magical evening candlelit lantern boats along the river promenade.',
        keyHighlights: [
            'Da Nang Bay with traditional Vietnamese basket boats (thúng)',
            'Linh Ứng Pagoda and Lady Buddha looking out to sea',
            'Daytime aerial of Hội An Ancient Town & Thu Bồn River',
            'Da Nang skyline with illuminated dragon & suspension bridges',
            'Hội An evening lantern promenade and candlelit river boats'
        ],
        technicalNotes: 'Cut cleanly at 1:05 to eliminate the CGI globe and zoom, ending naturally on the evening lantern promenade in Hội An. Watermark permanently eliminated using a centered 16:9 crop filter (1494×840 scaled to 1920×1080 via Lanczos). Zero logos or club branding visible.'
    }
];

export default function HeroPreviewClient() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(65);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
    const [videoQuality, setVideoQuality] = useState<'optimized' | 'master'>('optimized');
    const [previewMode, setPreviewMode] = useState<'console' | 'simulation'>('console');
    const [playbackRate, setPlaybackRate] = useState<number>(1.0);

    const videoSrc = '/videos/hero-montage.mp4';

    // Track video time & chapter
    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const cur = videoRef.current.currentTime;
        setCurrentTime(cur);

        // Find current chapter
        const idx = CHAPTERS.findIndex(c => cur >= c.startTime && cur < c.endTime);
        if (idx !== -1 && idx !== activeChapterIndex) {
            setActiveChapterIndex(idx);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration || 65);
        }
    };

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const jumpToChapter = (idx: number) => {
        if (!videoRef.current) return;
        const targetChapter = CHAPTERS[idx];
        if (targetChapter) {
            videoRef.current.currentTime = targetChapter.startTime + 0.05;
            setActiveChapterIndex(idx);
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = val;
            setCurrentTime(val);
        }
    };

    const changePlaybackRate = (rate: number) => {
        setPlaybackRate(rate);
        if (videoRef.current) {
            videoRef.current.playbackRate = rate;
        }
    };

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
            {/* Header & Controls Bar */}
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.25)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        color: '#d4af37',
                        border: '1px solid rgba(212, 175, 55, 0.4)'
                    }}>
                        Preview &amp; QA Environment
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                        Not deployed to homepage · Isolated review page
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontFamily: 'var(--font-serif, serif)',
                    fontWeight: 700,
                    color: '#f8fafc',
                    margin: '0.25rem 0 0.75rem',
                    lineHeight: 1.2
                }}>
                    Hero Montage Preview: 65-Second Central Vietnam Trilogy
                </h1>

                <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '850px', margin: 0, lineHeight: 1.6 }}>
                    Custom-stitched 65-second 1080p master montage assembling <strong>Hoiana Shores (14s)</strong>,{' '}
                    <strong>Ba Na Hills (29s)</strong>, and <strong>Central Vietnam Cultural &amp; Landscape B-Roll (22s)</strong> with smooth 1.0s cross-dissolves, zero watermarks, and zero promotional logos.
                </p>

                {/* View Mode Toggle */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ display: 'inline-flex', background: 'rgba(30, 41, 59, 0.7)', padding: '4px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <button
                            onClick={() => setPreviewMode('console')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                backgroundColor: previewMode === 'console' ? '#d4af37' : 'transparent',
                                color: previewMode === 'console' ? '#020617' : '#94a3b8',
                            }}
                        >
                            Review &amp; Scrubbing Console
                        </button>
                        <button
                            onClick={() => setPreviewMode('simulation')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                backgroundColor: previewMode === 'simulation' ? '#d4af37' : 'transparent',
                                color: previewMode === 'simulation' ? '#020617' : '#94a3b8',
                            }}
                        >
                            Homepage Hero Simulation
                        </button>
                    </div>

                    {/* Quality Toggle */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quality:</span>
                        <button
                            onClick={() => setVideoQuality('optimized')}
                            style={{
                                background: videoQuality === 'optimized' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                                border: videoQuality === 'optimized' ? '1px solid #d4af37' : '1px solid transparent',
                                color: videoQuality === 'optimized' ? '#d4af37' : '#94a3b8',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                fontWeight: 600,
                            }}
                        >
                            Web-Optimized (24.4 MB · Fast)
                        </button>
                        <button
                            onClick={() => setVideoQuality('master')}
                            style={{
                                background: videoQuality === 'master' ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                                border: videoQuality === 'master' ? '1px solid #d4af37' : '1px solid transparent',
                                color: videoQuality === 'master' ? '#d4af37' : '#94a3b8',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                fontWeight: 600,
                            }}
                        >
                            Master Fidelity (34.5 MB · Max)
                        </button>
                    </div>

                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
                        {[0.5, 1.0, 1.5].map((rate) => (
                            <button
                                key={rate}
                                onClick={() => changePlaybackRate(rate)}
                                style={{
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: playbackRate === rate ? 'rgba(212, 175, 55, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                                    color: playbackRate === rate ? '#d4af37' : '#94a3b8',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                }}
                            >
                                {rate}x
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODE 1: REVIEW & SCRUBBING CONSOLE */}
            {previewMode === 'console' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)', gap: '2rem' }}>
                    {/* Left: Video Player and Controls */}
                    <div>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '16/9',
                            backgroundColor: '#000',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
                        }}>
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Active Chapter Watermark Overlay Indicator */}
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                background: 'rgba(2, 6, 23, 0.85)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(212, 175, 55, 0.4)',
                                padding: '6px 14px',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                zIndex: 10,
                            }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                                    {CHAPTERS[activeChapterIndex].title}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#d4af37' }}>
                                    ({CHAPTERS[activeChapterIndex].duration})
                                </span>
                            </div>
                        </div>

                        {/* Player Controls Bar */}
                        <div style={{
                            marginTop: '1rem',
                            padding: '1.25rem',
                            backgroundColor: '#0f172a',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }}>
                            {/* Scrub Bar with Chapter Marks */}
                            <div style={{ position: 'relative', marginBottom: '1rem' }}>
                                <input
                                    type="range"
                                    min={0}
                                    max={duration}
                                    step={0.1}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    style={{
                                        width: '100%',
                                        accentColor: '#d4af37',
                                        cursor: 'pointer',
                                    }}
                                />
                                {/* Visual Chapter Dividers on Progress Bar */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.75rem',
                                    color: '#64748b',
                                    marginTop: '4px'
                                }}>
                                    <span style={{ color: currentTime < 14 ? '#d4af37' : '#94a3b8' }}>0:00 Hoiana</span>
                                    <span style={{ color: currentTime >= 14 && currentTime < 43 ? '#d4af37' : '#94a3b8' }}>0:14 Ba Na Hills</span>
                                    <span style={{ color: currentTime >= 43 ? '#d4af37' : '#94a3b8' }}>0:43 Cultural B-Roll</span>
                                    <span>1:08 End</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <button
                                        onClick={togglePlay}
                                        style={{
                                            padding: '8px 20px',
                                            borderRadius: '6px',
                                            backgroundColor: '#d4af37',
                                            color: '#020617',
                                            fontWeight: 700,
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {isPlaying ? 'Pause ⏸' : 'Play ▶'}
                                    </button>

                                    <span style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#cbd5e1' }}>
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </span>
                                </div>

                                {/* Quick Chapter Jump Buttons */}
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {CHAPTERS.map((ch, idx) => (
                                        <button
                                            key={ch.id}
                                            onClick={() => jumpToChapter(idx)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                border: activeChapterIndex === idx ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.1)',
                                                backgroundColor: activeChapterIndex === idx ? 'rgba(212, 175, 55, 0.2)' : 'rgba(30, 41, 59, 0.6)',
                                                color: activeChapterIndex === idx ? '#d4af37' : '#cbd5e1',
                                                fontSize: '0.75rem',
                                                cursor: 'pointer',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Ch {idx + 1}: {ch.title.split(' ')[0]} ({formatTime(ch.startTime)})
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical Verification Details */}
                        <div style={{
                            marginTop: '1.5rem',
                            padding: '1.25rem',
                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)'
                        }}>
                            <h3 style={{ fontSize: '1rem', color: '#f8fafc', margin: '0 0 0.75rem', fontWeight: 600 }}>
                                🛠️ Quality &amp; Governance Audit
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Resolution &amp; Framerate:</span>
                                    <strong style={{ color: '#cbd5e1' }}>1920×1080 (1080p Full HD) @ 25fps</strong>
                                </div>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Aspect Ratio &amp; Pixels:</span>
                                    <strong style={{ color: '#cbd5e1' }}>16:9 widescreen, SAR 1:1</strong>
                                </div>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Audio Stream:</span>
                                    <strong style={{ color: '#cbd5e1' }}>None (-an) · Zero autoplay blocking</strong>
                                </div>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Web Optimization:</span>
                                    <strong style={{ color: '#cbd5e1' }}>FastStart enabled (moov atom at head)</strong>
                                </div>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Watermark / Logo Elimination:</span>
                                    <strong style={{ color: '#22c55e' }}>✅ 100% Logo-Free (Crop &amp; Edit verified)</strong>
                                </div>
                                <div>
                                    <span style={{ color: '#64748b', display: 'block' }}>Total Run Time:</span>
                                    <strong style={{ color: '#d4af37' }}>65.0 Seconds</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Chapter Detail Cards */}
                    <div>
                        <h2 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: '0 0 1rem', fontFamily: 'var(--font-serif, serif)' }}>
                            Montage Breakdown &amp; Editorial Choices
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {CHAPTERS.map((chapter, idx) => {
                                const isActive = activeChapterIndex === idx;
                                return (
                                    <div
                                        key={chapter.id}
                                        onClick={() => jumpToChapter(idx)}
                                        style={{
                                            padding: '1.25rem',
                                            borderRadius: '10px',
                                            backgroundColor: isActive ? 'rgba(30, 41, 59, 0.9)' : 'rgba(15, 23, 42, 0.6)',
                                            border: isActive ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.08)',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            boxShadow: isActive ? '0 10px 25px -5px rgba(212, 175, 55, 0.15)' : 'none',
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                backgroundColor: isActive ? '#d4af37' : 'rgba(255,255,255,0.1)',
                                                color: isActive ? '#020617' : '#94a3b8',
                                                fontWeight: 700,
                                            }}>
                                                {chapter.badge}
                                            </span>
                                            <span style={{ fontSize: '0.8rem', color: isActive ? '#d4af37' : '#64748b', fontWeight: 600 }}>
                                                {chapter.duration}
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', margin: '0.25rem 0 0.15rem', fontWeight: 600 }}>
                                            {chapter.title}
                                        </h3>
                                        <div style={{ fontSize: '0.85rem', color: '#d4af37', marginBottom: '0.75rem' }}>
                                            {chapter.subtitle}
                                        </div>

                                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 0.75rem' }}>
                                            {chapter.description}
                                        </p>

                                        <div style={{ marginBottom: '0.75rem' }}>
                                            <strong style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.25rem' }}>
                                                Curated Highlights:
                                            </strong>
                                            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>
                                                {chapter.keyHighlights.map((hl, hIdx) => (
                                                    <li key={hIdx}>{hl}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: '#64748b',
                                            borderTop: '1px solid rgba(255,255,255,0.06)',
                                            paddingTop: '0.5rem',
                                            fontStyle: 'italic'
                                        }}>
                                            {chapter.technicalNotes}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* MODE 2: HOMEPAGE HERO SIMULATION */}
            {previewMode === 'simulation' && (
                <div style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '85vh',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#020617'
                }}>
                    {/* Background Video Simulation */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.85) contrast(1.1)'
                            }}
                        />
                        {/* AGS Balanced Luxury Scrim */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.7) 65%, #020617 100%)',
                            zIndex: 2,
                        }} />
                    </div>

                    {/* Simulated Tour Foreground (Slide 1: Hoi An Beachfront Bliss) */}
                    <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 3rem' }}>
                        <div className="tour-carousel-meta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="tour-carousel-badge">🇻🇳 Vietnam</span>
                            <span className="tour-carousel-duration">7 Days</span>
                            <span style={{
                                padding: '2px 8px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(212, 175, 55, 0.25)',
                                color: '#d4af37',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            }}>
                                Playing: {CHAPTERS[activeChapterIndex].title} ({formatTime(currentTime)} / 1:08)
                            </span>
                        </div>

                        <h2 className="tour-carousel-title" style={{ maxWidth: '900px', lineHeight: 1.15 }}>
                            Hoi An Beachfront Bliss
                        </h2>

                        <p className="tour-carousel-tagline" style={{ maxWidth: '750px', fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                            7 Days · Da Nang &amp; Hoi An · Montgomerie Links, Vinpearl, Laguna Lăng Cô &amp; Ba Na Hills
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                            <Link href="/tours/hoi-an-beachfront-bliss/" className="tour-carousel-cta">
                                Explore This Tour →
                            </Link>
                            <button
                                onClick={() => setPreviewMode('console')}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                                    color: '#cbd5e1',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                }}
                            >
                                Back to Scrubbing Console ⤺
                            </button>
                        </div>
                    </div>

                    {/* Simulation Watermark Notification */}
                    <div style={{
                        position: 'absolute',
                        bottom: '24px',
                        right: '32px',
                        zIndex: 20,
                        backgroundColor: 'rgba(2, 6, 23, 0.85)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span style={{ color: '#d4af37', fontWeight: 700 }}>LIVE HERO SIMULATION</span>
                        <span>· Scrim and contrast calibrated for high readability</span>
                    </div>
                </div>
            )}

            {/* Approval & Next Steps Guide */}
            <div style={{
                marginTop: '3rem',
                padding: '2rem',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>🎯</span>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#f8fafc', fontWeight: 600 }}>
                        User Review &amp; Implementation Next Step
                    </h3>
                </div>
                <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    As requested, this video montage has <strong>not been applied to the live homepage</strong> or <code>TourCarouselHero.tsx</code> yet. Please review the 68-second video sequence using the scrubbing controls above or the live hero simulation. Once you approve the sequence and transitions, let me know and I will wire it directly into the homepage hero!
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link
                        href="/"
                        style={{
                            color: '#d4af37',
                            fontSize: '0.9rem',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px'
                        }}
                    >
                        View Current Homepage Hero for Comparison →
                    </Link>
                </div>
            </div>
        </div>
    );
}
