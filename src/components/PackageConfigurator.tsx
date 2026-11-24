"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface PackageConfiguratorProps {
  packageSlug: string;
  packageTitle: string;
  destination: string;
  baseDurationText: string;
  basePriceUsd: number;
  basePriceAud: number;
  baseGroupProfile: string;
}

interface GroupOption {
  id: string;
  label: string;
  tag: string;
  multiplier: number;
}

interface DurationOption {
  id: string;
  label: string;
  rounds: string;
  multiplier: number;
}

const GROUP_OPTIONS: GroupOption[] = [
  { id: '4-ball', label: '4-Ball (4 Golfers)', tag: 'Single 4-Ball', multiplier: 1.0 },
  { id: '8-golfer', label: '8-Golfer Group', tag: 'Two 4-Balls', multiplier: 0.94 },
  { id: '12-golfer', label: '12-Golfer Tour', tag: 'Three 4-Balls', multiplier: 0.90 },
  { id: 'couples', label: 'Couples / Twin', tag: 'Private Pair (2 Golfers)', multiplier: 1.15 }
];

export default function PackageConfigurator({
  packageSlug,
  packageTitle,
  destination,
  baseDurationText,
  basePriceUsd,
  basePriceAud,
  baseGroupProfile
}: PackageConfiguratorProps) {
  // Determine baseline duration in days
  const baseDaysMatch = baseDurationText.match(/(\d+)\s*Days?/i);
  const baseDays = baseDaysMatch ? parseInt(baseDaysMatch[1], 10) : 7;

  // Build duration tiers relative to this package's baseline
  const durationOptions: DurationOption[] = baseDays <= 5 ? [
    { id: 'short', label: `${baseDays} Days / ${Math.max(1, baseDays - 1)} Nights`, rounds: `${Math.max(2, baseDays - 2)} Championship Rounds`, multiplier: 1.0 },
    { id: 'mid', label: `${baseDays + 2} Days / ${baseDays + 1} Nights`, rounds: `${Math.max(3, baseDays - 1)} Championship Rounds`, multiplier: 1.35 },
    { id: 'extended', label: `${baseDays + 4} Days / ${baseDays + 3} Nights`, rounds: `${Math.max(4, baseDays + 1)} Championship Rounds`, multiplier: 1.70 }
  ] : baseDays <= 7 ? [
    { id: 'short', label: '5 Days / 4 Nights', rounds: '3 Championship Rounds', multiplier: 0.76 },
    { id: 'mid', label: `${baseDays} Days / ${baseDays - 1} Nights`, rounds: '4 Championship Rounds', multiplier: 1.0 },
    { id: 'extended', label: '10 Days / 9 Nights', rounds: '6 Championship Rounds', multiplier: 1.42 }
  ] : [
    { id: 'short', label: '7 Days / 6 Nights', rounds: '4 Championship Rounds', multiplier: 0.72 },
    { id: 'mid', label: `${baseDays} Days / ${baseDays - 1} Nights`, rounds: `${Math.max(5, baseDays - 4)} Championship Rounds`, multiplier: 1.0 },
    { id: 'extended', label: `${baseDays + 4} Days / ${baseDays + 3} Nights`, rounds: `${Math.max(7, baseDays - 2)} Championship Rounds`, multiplier: 1.38 }
  ];

  const [selectedGroup, setSelectedGroup] = useState<string>(
    baseGroupProfile.toLowerCase().includes('8') ? '8-golfer' :
    baseGroupProfile.toLowerCase().includes('12') ? '12-golfer' :
    baseGroupProfile.toLowerCase().includes('couple') ? 'couples' : '4-ball'
  );

  const [selectedDuration, setSelectedDuration] = useState<string>('mid');
  const [currency, setCurrency] = useState<'AUD' | 'USD'>('AUD');

  const activeGroup = GROUP_OPTIONS.find(g => g.id === selectedGroup) || GROUP_OPTIONS[0];
  const activeDuration = durationOptions.find(d => d.id === selectedDuration) || durationOptions[1];

  // Calculate dynamic prices
  const calculatedUsd = Math.round(basePriceUsd * activeGroup.multiplier * activeDuration.multiplier);
  const calculatedAud = Math.round(basePriceAud * activeGroup.multiplier * activeDuration.multiplier);

  const quoteParams = new URLSearchParams({
    package: packageSlug,
    title: packageTitle,
    destination: destination,
    group: activeGroup.label,
    duration: activeDuration.label,
    estUsd: calculatedUsd.toString(),
    estAud: calculatedAud.toString()
  });

  return (
    <div style={{
      backgroundColor: '#020617',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '8px',
      padding: '2.5rem 2rem',
      marginBottom: '4rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.15)', paddingBottom: '1.5rem' }}>
        <div>
          <div style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '0.5rem' }}>
            Interactive Itinerary Configurator
          </div>
          <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.8rem', color: '#F8FAFC', margin: 0 }}>
            Customize Duration &amp; Group Dynamics
          </h2>
        </div>
        
        {/* Currency Switcher */}
        <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '0.25rem', border: '1px solid rgba(212,175,55,0.2)' }}>
          <button
            type="button"
            onClick={() => setCurrency('AUD')}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: '3px',
              border: 'none',
              backgroundColor: currency === 'AUD' ? '#D4AF37' : 'transparent',
              color: currency === 'AUD' ? '#050B1A' : 'rgba(248,250,252,0.7)',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            AUD ($)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: '3px',
              border: 'none',
              backgroundColor: currency === 'USD' ? '#D4AF37' : 'transparent',
              color: currency === 'USD' ? '#050B1A' : 'rgba(248,250,252,0.7)',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Expat Ground Curator Trust & Flexibility Strip (Brings /about/ 8m+ Trust Signal directly onto Package Pages) */}
      <div style={{
        backgroundColor: 'rgba(212, 175, 55, 0.06)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        borderLeft: '4px solid #D4AF37',
        borderRadius: '6px',
        padding: '1.15rem 1.4rem',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ flex: '1 1 460px' }}>
          <div style={{ fontSize: '0.72rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: '0.3rem' }}>
            On-the-Ground Australian Expat Curation &bull; 100% Customizable Itinerary
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(248, 250, 252, 0.85)', lineHeight: 1.55 }}>
            Personally engineered by <strong>Marcus Giles</strong> (Founder &amp; Managing Director, based in Da Nang). Don&apos;t treat this package as a fixed template — adjust your group size and duration below, or ask us to swap any course, villa tier, or rest day with luxury private touring vehicles and zero middleman markups.
          </p>
        </div>
        <Link
          href="/about/"
          style={{
            fontSize: '0.78rem',
            color: '#D4AF37',
            textDecoration: 'underline',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            letterSpacing: '0.04em'
          }}
        >
          Meet Marcus &amp; Our Expat Team &rarr;
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
        {/* Step 1: Group Size Selector */}
        <div>
          <div style={{ fontSize: '0.9rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>
            1. Select Traveling Party
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {GROUP_OPTIONS.map(opt => {
              const active = selectedGroup === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedGroup(opt.id)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '6px',
                    border: active ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                    backgroundColor: active ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)',
                    color: '#F8FAFC',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(248,250,252,0.5)' }}>{opt.tag}</div>
                  </div>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: active ? '4px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)', backgroundColor: active ? '#050B1A' : 'transparent' }} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Duration / Rounds Selector */}
        <div>
          <div style={{ fontSize: '0.9rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>
            2. Choose Duration &amp; Rounds
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {durationOptions.map(opt => {
              const active = selectedDuration === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedDuration(opt.id)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '6px',
                    border: active ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                    backgroundColor: active ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)',
                    color: '#F8FAFC',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.75rem', color: '#D4AF37' }}>{opt.rounds}</div>
                  </div>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: active ? '4px solid #D4AF37' : '1px solid rgba(255,255,255,0.3)', backgroundColor: active ? '#050B1A' : 'transparent' }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Estimate Summary Bar */}
      <div style={{
        backgroundColor: 'rgba(212,175,55,0.05)',
        border: '1px solid rgba(212,175,55,0.2)',
        borderRadius: '6px',
        padding: '1.75rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(248,250,252,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Tailored Configuration ({activeGroup.label} &bull; {activeDuration.label})
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginTop: '0.25rem' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 300, color: '#F8FAFC' }}>
              {currency === 'AUD' ? `~$${calculatedAud.toLocaleString()} AUD` : `$${calculatedUsd.toLocaleString()} USD`}
            </span>
            <span style={{ fontSize: '1rem', color: '#D4AF37', fontWeight: 500 }}>
              {currency === 'AUD' ? `($${calculatedUsd.toLocaleString()} USD)` : `(~$${calculatedAud.toLocaleString()} AUD)`}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(248,250,252,0.5)' }}>/ golfer</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.5)', marginTop: '0.4rem' }}>
            Includes green fees, caddie + shared cart, private ground logistics &amp; luxury accommodation.
          </div>
        </div>

        <Link
          href={`/quote/?${quoteParams.toString()}`}
          rel="nofollow"
          onClick={() => {
            if (typeof window !== 'undefined') {
              const w = window as any;
              if (w.dataLayer) {
                w.dataLayer.push({
                  event: 'package_configurator_cta',
                  package_slug: packageSlug,
                  package_title: packageTitle,
                  destination,
                  group_size: activeGroup.label,
                  duration: activeDuration.label,
                  estimated_usd: calculatedUsd,
                  estimated_aud: calculatedAud,
                });
              }
              if (typeof w.gtag === 'function') {
                w.gtag('event', 'begin_checkout', {
                  currency: currency,
                  value: currency === 'AUD' ? calculatedAud : calculatedUsd,
                  items: [{ item_id: packageSlug, item_name: packageTitle, item_category: destination }],
                });
              }
            }
          }}
          style={{
            display: 'inline-block',
            backgroundColor: '#D4AF37',
            color: '#050B1A',
            padding: '0.9rem 2rem',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 700,
            fontSize: '0.85rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(212,175,55,0.3)',
            transition: 'all 0.2s ease'
          }}
          className="hover:scale-105"
        >
          Request Tailored Proposal &rarr;
        </Link>
      </div>
    </div>
  );
}
