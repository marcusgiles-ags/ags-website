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
        backgroundColor: '#0A1C3C', // Imperial Navy
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
          background: 'radial-gradient(circle, rgba(166, 138, 107, 0.1) 0%, transparent 70%)', // Heritage Brass glow
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '750px', position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.02)', 
            padding: '4rem 3rem', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(166, 138, 107, 0.2)', // Heritage Brass border
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto 2.5rem', 
              border: '2px solid #A68A6B', // Heritage Brass
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2.5rem',
              color: '#A68A6B',
              boxShadow: '0 0 20px rgba(166, 138, 107, 0.3)'
            }}>
              ✓
            </div>

            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
              Your Journey <span style={{ color: '#A68A6B' }}>Begins.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.9, 
              color: 'white',
              marginBottom: '3rem', 
              maxWidth: '550px', 
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }} itemProp="description" id="exec-summary">
              We have received your inquiry. One of our Golf Specialists will assemble your bespoke itinerary and contact you within <span style={{ fontWeight: 600, color: '#A68A6B' }}>48 hours.</span>
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2.5rem', 
              textAlign: 'left',
              marginBottom: '4rem',
              padding: '2.5rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div>
                <h4 style={{ color: '#A68A6B', marginBottom: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Tailored Excellence</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.7, color: 'white' }}>We're hand-selecting championship fairways and 5-star recovery tailored to your handicap and tastes.</p>
              </div>
              <div>
                <h4 style={{ color: '#A68A6B', marginBottom: '0.75rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Concierge Support</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.7, color: 'white' }}>Your dedicated specialist will handle everything from private transfers to exclusive tee times.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" className="btn-primary" style={{ padding: '1.2rem 3rem', backgroundColor: '#A68A6B', color: 'white', border: 'none' }}>Return to Homepage</Link>
              <Link href="/courses/" className="btn-outline" style={{ padding: '1.2rem 3rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
