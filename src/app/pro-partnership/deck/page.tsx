import Image from 'next/image';

export default function PresentationDeck() {
  const serif = { fontFamily: '"Playfair Display", serif' };
  const sans = { fontFamily: '"Montserrat", sans-serif' };

  return (
    <div className="w-full bg-[#F8FAFC]" style={{ backgroundColor: '#F8FAFC', color: '#020617' }}>
      
      {/* SLIDE 1: COVER */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center p-12 lg:p-24 print:h-[100vh] print:break-after-page" style={{ pageBreakAfter: 'always', backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div style={{ position: 'relative', width: '220px', height: '110px', marginBottom: '3rem' }}>
            <Image 
              src="/images/brand-library/logos/ags-dark-navy-line-logo.webp" 
              alt="Asia Golf Specialists" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1.5rem', display: 'block' }}>
            A Private Invitation
          </span>
          <h1 style={{ ...serif, color: '#020617', fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2.5rem' }}>
            The Local Guardian<br />Partnership
          </h1>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#D4AF37', margin: '0 auto 2.5rem' }}></div>
          <p style={{ ...serif, color: '#4B5563', fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '48rem', lineHeight: 1.6 }}>
            An exclusive commission arrangement for Club Professionals who trust their name to the finest golf experiences in Southeast Asia.
          </p>
        </div>
      </section>

      {/* SLIDE 2: PHILOSOPHY */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-stretch print:h-[100vh] print:flex print:flex-row print:break-after-page border-t" style={{ pageBreakAfter: 'always', backgroundColor: '#F8FAFC', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div className="flex-1 flex flex-col justify-center p-12 lg:p-24">
          <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>
            The AGS Philosophy
          </span>
          <h2 style={{ ...serif, color: '#020617', fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2.5rem' }}>
            We Are Not Aggregators.<br />We Are Guardians.
          </h2>
          <div style={{ width: '4rem', height: '4px', backgroundColor: '#D4AF37', marginBottom: '2.5rem' }}></div>
          <div className="space-y-8">
            <p style={{ ...sans, color: '#374151', fontSize: '1.125rem', lineHeight: 1.8 }}>
              There is no algorithm selecting our courses. No offshore call centre filling your group's tee sheets. AGS is built on decades of unfiltered reality — earned relationships with club directors, head caddies, and course designers who do not take calls from anyone they have not personally vetted.
            </p>
            <p style={{ ...serif, color: '#020617', fontSize: '1.25rem', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.8, borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem' }}>
              "When you refer a group to AGS, they are stepping into a network curated by the same professional standard you uphold on your own course."
            </p>
          </div>
        </div>
        <div style={{ flex: 1, position: 'relative', minHeight: '100%', overflow: 'hidden' }}>
          <Image 
            src="/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-championship-layout-5.webp" 
            alt="Hoiana Shores" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* SLIDE 3: THE EXPERIENCE */}
      <section className="relative w-full h-screen flex flex-col justify-center p-12 lg:p-24 print:h-[100vh] print:break-after-page border-t" style={{ pageBreakAfter: 'always', backgroundColor: '#F8FAFC', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div className="mb-16 text-left">
          <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>
            The Refined Traveler Experience
          </span>
          <h2 style={{ ...serif, color: '#020617', fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1 }}>
            The Calibre of Tour<br />Your Members Deserve
          </h2>
          <div style={{ width: '4rem', height: '4px', backgroundColor: '#D4AF37', marginTop: '2rem' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
              <Image src="/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-vietnam-championship-5.webp" alt="Ba Na Hills" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h4 style={{ ...sans, color: '#020617', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Championship<br/>Tee Sheets</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.8 }}>Ba Na Hills, BRG Đà Nẵng, Hoiana Shores. Course allocations most operators cannot confirm. We do — because we hold the relationships.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
              <Image src="/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp" alt="Montgomerie Links" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h4 style={{ ...sans, color: '#020617', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>The Blowing of<br/>The Horn</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.8 }}>A time-honoured ritual conducted only for private groups. Only winners are permitted to blow The Horn of Plenty. Your members live it.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
              <Image src="/images/accommodations/vietnam/four-seasons-nam-hai/nmh-1468-aspect16x9.webp" alt="Four Seasons Nam Hai" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h4 style={{ ...sans, color: '#020617', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Concierge.<br/>Start to Finish.</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.8 }}>Private airport transfers, curated dining in the Ancient Town, and personal tailoring. Logistics your members will not notice — because they are flawless.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE 4: THE ITINERARY */}
      <section className="relative w-full h-screen flex flex-col print:h-[100vh] print:break-after-page border-t" style={{ pageBreakAfter: 'always', backgroundColor: '#F8FAFC', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div style={{ position: 'relative', height: '45vh', width: '100%', overflow: 'hidden' }}>
          <Image 
            src="/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-championship-layout-4.webp" 
            alt="Laguna Lang Co" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent"></div>
          <div className="absolute bottom-12 left-12 lg:left-24 text-left">
            <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.75rem', display: 'block' }}>
              A Tour In Practice
            </span>
            <h2 style={{ ...serif, color: 'white', fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1 }}>
              The 7-Day Vietnam Central Coast
            </h2>
          </div>
        </div>

        <div className="flex-1 p-12 lg:px-24 py-16 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
            
            <div style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 1: The Villa Arrival</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>Private escort to your An Bang beachfront estate.</p>
            </div>
            
            <div style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 2: Mountain Mastery</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>Ba Na Hills (Luke Donald) & Private chef BBQ.</p>
            </div>
            
            <div style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 3: Tropical Links</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>Hoiana Shores coastal mastery by RTJ II.</p>
            </div>
            
            <div style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 4: Boutique Challenge</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>Montgomerie Links & Mango Rooms dinner.</p>
            </div>
            
            <div style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.4)', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 5: Sartorial Rest</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>Bespoke tailoring & Hoi An village life.</p>
            </div>
            
            <div style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
              <h4 style={{ ...sans, color: '#020617', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Day 6: The Nicklaus Finale</h4>
              <p style={{ ...sans, color: '#4B5563', fontSize: '0.9rem' }}>BRG Legends & Champions Dinner.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SLIDE 5: THE OFFER */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-stretch print:h-[100vh] print:flex print:flex-row print:break-after-page border-t" style={{ pageBreakAfter: 'always', backgroundColor: '#F8FAFC', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div style={{ flex: 1, position: 'relative', minHeight: '100%', overflow: 'hidden' }}>
          <Image 
            src="/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp" 
            alt="FLC Ha Long Bay" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-12 lg:p-24">
          <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>
            The Pro-Partnership Offer
          </span>
          <h2 style={{ ...serif, color: '#020617', fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '3rem' }}>
            Commission on<br/>Group Revenue
          </h2>
          <div style={{ width: '4rem', height: '4px', backgroundColor: '#D4AF37', marginBottom: '3rem' }}></div>
          
          <div style={{ backgroundColor: 'white', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '3rem', textAlign: 'center', marginBottom: '3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ ...serif, color: '#D4AF37', fontSize: '6rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1 }}>5%</h3>
            <h4 style={{ ...sans, color: '#020617', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Total Revenue Share</h4>
            <p style={{ ...sans, color: '#4B5563', fontSize: '1rem', lineHeight: 1.8 }}>Refer a group of 7 or more refined travelers. We handle every detail. You earn every dollar on the full tour value.</p>
          </div>

          <div style={{ textAlign: 'center', padding: '0 2rem' }}>
            <h4 style={{ ...sans, color: '#020617', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: '1rem' }}>A Peer-to-Peer Arrangement</h4>
            <p style={{ ...sans, color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '28rem', margin: '0 auto' }}>No complex paperwork, no minimum quotas, no lock-in period. A single referral converted earns you a meaningful commission while your reputation remains untouched.</p>
          </div>
        </div>
      </section>

      {/* SLIDE 6: CONTACT */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center p-12 lg:p-24 print:h-[100vh] border-t" style={{ backgroundColor: '#F8FAFC', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
          <span style={{ ...sans, color: '#D4AF37', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>
            The Next Step
          </span>
          <h2 style={{ ...serif, color: '#020617', fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2.5rem' }}>
            Let's Have a Discovery Consultation.
          </h2>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#D4AF37', margin: '0 auto 3rem' }}></div>
          
          <p style={{ ...sans, color: '#374151', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '42rem' }}>
            A direct conversation between professionals. No sales scripts. We simply discuss your members, your standards, and how a partnership with AGS earns while protecting your name.
          </p>

          <div style={{ backgroundColor: 'white', border: '1px solid rgba(212, 175, 55, 0.1)', borderRadius: '24px', padding: '4rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)', width: '100%', maxWidth: '32rem' }}>
            <h4 style={{ ...sans, color: '#020617', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.75rem', marginBottom: '2rem' }}>Direct Contact</h4>
            <p style={{ ...serif, color: '#020617', fontWeight: 700, fontSize: '1.875rem', marginBottom: '1rem' }}>Marcus Giles</p>
            <p style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{
              __html: '<!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color: #4B5563; text-decoration: none; border-bottom: 2px solid rgba(212, 175, 55, 0.3); padding-bottom: 4px;">marcus.giles@asiagolfspecialists.com</a><!--/email_off-->'
            }} />
            <p style={{ ...sans, color: '#374151', fontSize: '1.25rem', fontWeight: 600, marginBottom: '2.5rem' }}>+84 935 601 099</p>
            <p style={{ ...sans, color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.75rem' }}>Hội An, Vietnam</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
