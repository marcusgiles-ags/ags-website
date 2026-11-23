"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '8rem', 
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ 
            backgroundColor: 'var(--color-neutral)', 
            padding: '4rem 3rem', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto 2.5rem', 
              border: '2px solid var(--color-gold)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2.5rem',
              color: 'var(--color-gold)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
            }}>
              ✓
            </div>

            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Request <span className="text-gold">Confirmed.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.9, 
              marginBottom: '3rem', 
              maxWidth: '500px', 
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }} itemProp="description" id="exec-summary">
              Your bespoke luxury golf itinerary is now being curated. Marcus Giles or one of our specialists will be in touch within <span style={{ fontWeight: 600, color: 'var(--color-gold)' }}>24 hours</span> to discuss your details.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem', 
              textAlign: 'left',
              marginBottom: '4rem',
              padding: '2rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div>
                <h4 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Next Steps</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>We'll review your preferences and select the finest championship courses and 5-star accommodations.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Concierge Support</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>Once your itinerary is ready, you'll have a dedicated point of contact for all refinements.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <Link href="/" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>Return Home</Link>
              <Link href="/courses/" className="btn-outline" style={{ padding: '1rem 2.5rem' }}>Explore Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
