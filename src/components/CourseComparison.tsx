import React from 'react';

interface ComparisonProps {
    courseA: {
        name: string;
        architect?: string;
        year?: string;
        holes?: string;
        yardage?: string;
        par?: string;
        vibe?: string;
        elevation?: string;
        conditions?: string;
        caddie?: string;
        [key: string]: any;
    };
    courseB: {
        name: string;
        architect?: string;
        year?: string;
        holes?: string;
        yardage?: string;
        par?: string;
        vibe?: string;
        elevation?: string;
        conditions?: string;
        caddie?: string;
        [key: string]: any;
    };
}

export default function CourseComparison({ courseA, courseB }: ComparisonProps) {
    const holesA = courseA.holes || courseA.numberOfHoles;
    const holesB = courseB.holes || courseB.numberOfHoles;
    const yardageA = courseA.yardage || courseA.courseLength;
    const yardageB = courseB.yardage || courseB.courseLength;

    return (
        <div style={{ margin: '3rem 0', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: 'rgba(5, 11, 26, 0.8)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                <div style={{ padding: '2rem', borderRight: '1px solid rgba(212,175,55,0.2)', textAlign: 'center' }}>
                    <h3 style={{ color: '#D4AF37', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontFamily: 'var(--font-primary-serif)' }}>{courseA.name}</h3>
                </div>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#D4AF37', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontFamily: 'var(--font-primary-serif)' }}>{courseB.name}</h3>
                </div>
            </div>
            
            {courseA.architect && courseB.architect && <ComparisonRow label="Architect" valA={courseA.architect} valB={courseB.architect} />}
            {courseA.year && courseB.year && <ComparisonRow label="Year Built" valA={courseA.year} valB={courseB.year} />}
            {holesA && holesB && <ComparisonRow label="Holes" valA={holesA} valB={holesB} />}
            {yardageA && yardageB && <ComparisonRow label="Yardage" valA={yardageA} valB={yardageB} />}
            {courseA.par && courseB.par && <ComparisonRow label="Par" valA={courseA.par} valB={courseB.par} />}
            {courseA.vibe && courseB.vibe && <ComparisonRow label="Vibe & Philosophy" valA={courseA.vibe} valB={courseB.vibe} />}
            {courseA.elevation && courseB.elevation && <ComparisonRow label="Elevation / Terrain" valA={courseA.elevation} valB={courseB.elevation} />}
            {courseA.conditions && courseB.conditions && <ComparisonRow label="Typical Conditions" valA={courseA.conditions} valB={courseB.conditions} />}
            {courseA.caddie && courseB.caddie && <ComparisonRow label="Caddie Experience" valA={courseA.caddie} valB={courseB.caddie} />}
        </div>
    );
}

function ComparisonRow({ label, valA, valB }: { label: string, valA: string, valB: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(212,175,55,0.05)', textAlign: 'center', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.5)' }}>
                {label}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.1)', color: '#F8FAFC', lineHeight: 1.6, fontSize: '1.05rem' }}>
                    {valA}
                </div>
                <div style={{ padding: '1.5rem', color: '#F8FAFC', lineHeight: 1.6, fontSize: '1.05rem' }}>
                    {valB}
                </div>
            </div>
        </div>
    );
}
